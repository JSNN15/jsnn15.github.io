// Prueba del asistente del cuaderno: pedidos con sus palabras contra el perfil del ejemplo. El asistente solo recibe
// nombres de columnas y estadísticas. Se comprueba qué pasos propone y que no invente columnas.
import fs from 'node:fs';
import * as N from '../src/nucleo.js';
const GW = process.env.GATEWAY || 'http://localhost:8787', ORIGEN = process.env.ORIGEN || 'http://localhost:8770';
const H = {Origin: ORIGEN, 'Content-Type': 'application/json'};
const crudo = N.leerCSV(fs.readFileSync(new URL('../public/flotacion.csv', import.meta.url), 'utf8'));
const RH = [{op: 'tiempo', col: 'date', repetidas: 'repartir'}, {op: 'remuestrear', cada: '1 h'}];
const cuerpo = (pedido, receta) => {
  const hecho = N.aplicar(crudo, receta), t = hecho.tabla, P = N.perfil(t);
  return {pedido, filas: N.num(t.n), tiempo: P.tiempo ? `columna «${P.colTiempo}», una marca cada ${N.duracion(P.tiempo.paso)}${P.tiempo.porMarca > 1 ? `, cada marca repetida en ${P.tiempo.porMarca} filas` : ''}` : '',
    columnas: P.cols.map((c) => ({nombre: c.nombre, tipo: c.tipo, faltan: c.tipo === 'num' ? N.pct(c.faltan / P.n) : '', min: N.num(c.min), max: N.num(c.max), habitual: `${N.num(c.p01)} a ${N.num(c.p99)}`, cambia: String(c.racha || 1)})),
    avisos: N.hallazgos(P).map((h) => h.texto), receta: hecho.bitacora.map((b) => N.NOMBRE_OP[b.paso.op](b.paso))};
};
const LAB = ['% Iron Feed', '% Silica Feed', '% Iron Concentrate', '% Silica Concentrate'];
const NIVEL = [1, 2, 3, 4, 5, 6, 7].map((i) => `Flotation Column 0${i} Level`);
const op = (r, o) => (r.pasos || []).find((p) => p.op === o);
const CASOS = [
  ['Promedia todo cada hora', [], (r) => op(r, 'remuestrear') && /^1 ?h$/.test(op(r, 'remuestrear').cada.trim())],
  ['Arregla las fechas, que vienen repetidas', [], (r) => op(r, 'tiempo') && op(r, 'tiempo').col === 'date' && op(r, 'tiempo').cols.includes('repartir')],
  ['Borra los tramos donde los sensores se quedaron pegados', [], (r) => op(r, 'pegados') && op(r, 'pegados').cols.length > 0 && !op(r, 'pegados').cols.some((c) => LAB.includes(c))],
  ['El pH no puede ser menor que 0 ni mayor que 14', [], (r) => op(r, 'rango') && op(r, 'rango').col === 'Ore Pulp pH' && +op(r, 'rango').min === 0 && +op(r, 'rango').max === 14],
  ['Quita las columnas de nivel de las columnas de flotación', [], (r) => op(r, 'quitar_columnas') && NIVEL.every((c) => op(r, 'quitar_columnas').cols.includes(c)) && op(r, 'quitar_columnas').cols.length === 7],
  ['Quiero estimar la sílice del concentrado. El laboratorio llega con dos horas de retraso.', RH, (r) => r.objetivo === '% Silica Concentrate' && r.retraso === 2],
  ['Rellena los huecos cortos', RH, (r) => op(r, 'rellenar')],
  ['Borra los valores atípicos del flujo de amina', RH, (r) => op(r, 'atipicos') && op(r, 'atipicos').cols.join() === 'Amina Flow'],
  ['Une este archivo con la planilla de turnos', RH, (r) => !(r.pasos || []).length && r.no_puedo.length > 5],
  ['Hazme un pronóstico de la ley de sílice para mañana', RH, (r) => !(r.pasos || []).length && r.no_puedo.length > 5],
  ['¿Qué columnas son datos de laboratorio?', [], (r) => !(r.pasos || []).length && /Silica|Iron|sílice|hierro/i.test(r.explica)],
  ['Promedia cada hora', RH, (r) => !op(r, 'remuestrear')],
];
const ses = (await (await fetch(GW + '/sesion', {method: 'POST', headers: H, body: '{}'})).json()).s;
const cols = new Set(crudo.cols.map((c) => c.nombre));
let ok = 0, inventadas = 0;
const tiempos = [], filas = [];
for (const [pedido, receta, prueba] of CASOS) {
  const t0 = Date.now();
  const d = await (await fetch(GW + '/cuaderno', {method: 'POST', headers: {...H, 'X-NV-Sesion': ses}, body: JSON.stringify(cuerpo(pedido, receta))})).json();
  const r = d.result || {pasos: [], explica: '', no_puedo: ''};
  const nombradas = (r.pasos || []).flatMap((p) => [p.col, ...(p.cols || [])]).filter((c) => c && !['todas', 'repartir'].includes(c));
  const inv = nombradas.filter((c) => !cols.has(c));
  inventadas += inv.length;
  let pasa = false;
  try { pasa = !!prueba(r); } catch {}
  if (pasa) ok++;
  tiempos.push((Date.now() - t0) / 1000);
  filas.push({pedido, pasa, pasos: r.pasos, objetivo: r.objetivo, retraso: r.retraso, explica: r.explica, no_puedo: r.no_puedo, inventadas: inv});
  console.log(`${pasa ? '✓' : '✗'} ${pedido}\n    → ${(r.pasos || []).map((p) => p.op + (p.col ? ` ${p.col}` : '') + (p.cols.length ? ` [${p.cols.length > 3 ? p.cols.length + ' columnas' : p.cols.join(', ')}]` : '') + (p.cada ? ` ${p.cada}` : '') + (p.min || p.max ? ` ${p.min}..${p.max}` : '')).join(' · ') || 'sin pasos'}${r.objetivo ? ` | objetivo ${r.objetivo}, retraso ${r.retraso}` : ''}${r.no_puedo ? ` | no puedo: ${r.no_puedo.slice(0, 80)}` : ''}${inv.length ? ` | INVENTÓ ${inv.join(', ')}` : ''}\n    ${d.error || r.explica.slice(0, 150)}`);
  await new Promise((x) => setTimeout(x, 2500));
}
tiempos.sort((a, b) => a - b);
const R = {casos: CASOS.length, aciertos: ok, columnas_inventadas: inventadas, mediana_s: +tiempos[tiempos.length >> 1].toFixed(1)};
console.log('\n' + JSON.stringify(R));
fs.writeFileSync(new URL('./asistente.res.json', import.meta.url), JSON.stringify({fecha: new Date().toISOString().slice(0, 10), resumen: R, casos: filas}, null, 1));
