// Compara el núcleo del cuaderno con la referencia hecha en pandas y scikit-learn (test/referencia.py).
import fs from 'node:fs';
import * as N from '../src/nucleo.js';
const AQUI = new URL('.', import.meta.url);
const ref = JSON.parse(fs.readFileSync(new URL('referencia.json', AQUI), 'utf8'));
const texto = fs.readFileSync(new URL('../public/flotacion.csv', AQUI), 'utf8');
let fallas = 0, n = 0;
const cerca = (nombre, a, b, tol = 1e-6) => {
  n++;
  const ok = Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
  if (!ok) fallas++;
  console.log(`${ok ? '✓' : '✗'} ${nombre}: ${a} ${ok ? '=' : '≠'} ${b}`);
};
const t0 = performance.now();
const crudo = N.leerCSV(texto);
console.log(`lectura: ${crudo.n} filas × ${crudo.cols.length} columnas en ${(performance.now() - t0).toFixed(0)} ms; separador «${crudo.formato.sep}», coma decimal: ${crudo.formato.coma}`);
cerca('filas leídas', crudo.n, ref.filas, 0);
const P = N.perfil(crudo);
const a = P.cols.find((c) => c.nombre === 'Amina Flow');
for (const k of ['media', 'desv', 'mediana', 'mad', 'p01', 'p99', 'min', 'max']) cerca('perfil Amina Flow · ' + k, a[k], ref.perfil[k]);
cerca('perfil Amina Flow · atípicos', a.atipicos, ref.perfil.atipicos, 0);
cerca('filas por marca de tiempo', P.tiempo.porMarca, 6, 0);
const H = N.hallazgos(P);
console.log('hallazgos:', H.length, '·', H.slice(0, 4).map((h) => h.texto.slice(0, 70)).join(' | '));
const receta = [{op: 'tiempo', col: 'date', repetidas: 'repartir'}, {op: 'remuestrear', cada: '1 h'}];
const {tabla: h, bitacora} = N.aplicar(crudo, receta);
console.log('receta:', bitacora.map((b) => b.nota || b.error).join(' · '));
cerca('filas por hora', h.n, ref.hora.filas, 0);
const col = (nombre) => h.cols.find((c) => c.nombre === nombre).v;
cerca('horas sin dato (Amina Flow)', col('Amina Flow').filter((x) => isNaN(x)).length, ref.hora.vacias, 0);
cerca('media horaria Amina Flow', N.resumen(col('Amina Flow')).media, ref.hora.media_amina);
cerca('suma horaria sílice', col('% Silica Concentrate').reduce((s, x) => s + (isNaN(x) ? 0 : x), 0), ref.hora.suma_silice);
const y = '% Silica Concentrate';
const R = N.relaciones(h, y);
for (const [k, v] of Object.entries(ref.r)) cerca('correlación con sílice · ' + k, R.find((x) => x.nombre === k).r, v);
const mismos = N.delMismoAnalisis(crudo, y);
n++;
if (mismos.join() !== '% Iron Concentrate') fallas++;
console.log(`${mismos.join() === '% Iron Concentrate' ? '✓' : '✗'} mismo análisis que el objetivo: ${mismos.join(', ') || 'ninguna'}`);
const entradas = h.cols.filter((c) => c.tipo === 'num' && ![y, '% Iron Concentrate'].includes(c.nombre)).map((c) => c.nombre);
for (const [nombre, usarUltimo] of [['solo_proceso', false], ['con_ultimo', true]]) {
  const {modelo: m} = N.entrenar(h, {objetivo: y, entradas, retraso: 2, usarUltimo});
  const r = ref[nombre];
  cerca(`${nombre} · filas de entrenamiento`, m.entrenamiento.n, r.n_ent, 0);
  cerca(`${nombre} · filas de prueba`, m.prueba.n, r.n_pru, 0);
  cerca(`${nombre} · lambda elegido`, m.lambda, r.lam);
  cerca(`${nombre} · intercepto`, m.b0, r.b0);
  m.beta.forEach((b, j) => cerca(`${nombre} · coeficiente ${j + 1}`, b, r.beta[j], 1e-5));
  for (const k of ['mae', 'rmse', 'r2']) {
    cerca(`${nombre} · modelo ${k}`, m.metricas.modelo[k], r.modelo[k]);
    cerca(`${nombre} · promedio ${k}`, m.metricas.promedio[k], r.promedio[k]);
    cerca(`${nombre} · último laboratorio ${k}`, m.metricas.ultimo[k], r.ultimo[k]);
  }
}
// vigilancia: la misma receta y el mismo modelo sobre el mes siguiente
{
  const {modelo: m} = N.entrenar(h, {objetivo: y, entradas, retraso: 2, usarUltimo: true});
  const nuevo = N.aplicar(N.leerCSV(fs.readFileSync(new URL('../public/flotacion_nuevo.csv', AQUI), 'utf8')), receta).tabla;
  const V = N.vigilar(m, nuevo);
  console.log(`vigilancia: ${V.filas} horas nuevas, ${V.estimadas} estimadas; MAE modelo ${V.metricas.modelo.mae.toFixed(3)} · último laboratorio ${V.metricas.ultimo.mae.toFixed(3)}; entradas con deriva: ${V.deriva.filter((d) => d.alerta).map((d) => d.nombre).join(', ') || 'ninguna'}`);
  n++;
  if (!V.ok || !(V.metricas.modelo.mae > 0)) fallas++;
}
// ida y vuelta: lo que se exporta se vuelve a leer igual
const otra = N.leerCSV(N.aCSV(h));
cerca('exportar y volver a leer · filas', otra.n, h.n, 0);
cerca('exportar y volver a leer · media', N.resumen(otra.cols.find((c) => c.nombre === 'Amina Flow').v).media, N.resumen(col('Amina Flow')).media, 1e-9);
// formatos de archivo que aparecen en planta
const casos = [
  ['punto y coma, coma decimal, fecha día-mes-año', 'Fecha;Flujo;pH\n01-03-2024 08:00;1.234,5;9,81\n01-03-2024 09:00;1.240,0;9,79\n', [[1234.5, 1240], [9.81, 9.79]], Date.UTC(2024, 2, 1, 8)],
  ['coma, punto decimal, fecha ISO', 'time,flow,ph\n2024-03-01T08:00:00,1234.5,9.81\n2024-03-01T09:00:00,1240.0,9.79\n', [[1234.5, 1240], [9.81, 9.79]], Date.UTC(2024, 2, 1, 8)],
  ['tabulador, celdas vacías y texto de error', 'Fecha\tFlujo\tpH\n01/03/2024 08:00\t1234,5\t#N/A\n01/03/2024 09:00\t\t9,79\n', [[1234.5, NaN], [NaN, 9.79]], Date.UTC(2024, 2, 1, 8)],
];
for (const [nombre, txt, esperado, t] of casos) {
  const T = N.leerCSV(txt);
  n++;
  const ok = T.n === 2 && T.cols[0].tipo === 'tiempo' && T.cols[0].v[0] === t && esperado.every((e, j) => e.every((x, i) => Object.is(x, T.cols[j + 1].v[i]) || x === T.cols[j + 1].v[i]));
  if (!ok) fallas++;
  console.log(`${ok ? '✓' : '✗'} formato: ${nombre}`);
}
console.log(`\n${n - fallas} de ${n} comprobaciones coinciden con la referencia.`);
process.exit(fallas ? 1 : 0);
