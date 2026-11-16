/* Genera los datos crudos del cuaderno con el motor de la planta virtual (sim.js).
   Una semana de operación con fallas programadas y respuestas de operador. Todo es determinista: misma semilla, mismos archivos.
   Uso: node herramientas/genera.js ruta/a/planta-virtual/sim.js datos/ */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const [, , SIM, OUT] = process.argv;
require(path.resolve(SIM));
const P = globalThis.PlantSim.create();

const INICIO = Date.UTC(2026, 10, 2, 8, 0, 0); // lunes 2 de noviembre de 2026, 08:00 (hora local de la planta, sin zona)
const DIAS = 7;
const FIN = DIAS * 86400;
const fecha = (t) => new Date(INICIO + t * 1000).toISOString().slice(0, 19).replace('T', ' ');
const H = 3600;
let T = 0; // segundos desde el inicio de la campaña
// azar propio del guion (no toca el del simulador)
let semilla = 20261102;
const azar = () => ((semilla = (semilla * 48271) % 2147483647), semilla / 2147483647);

/* ---------- guion: fallas (verdad conocida) y respuestas ---------- */
const agenda = []; // {t, fn}
const en = (t, fn) => agenda.push({t: Math.round(t), fn});
const verdad = []; // lo que se sembró, para evaluar después
const falla = (t, id, nota, fn, nombre) => {
  en(t, () => {
    const s = P.SCN.find((x) => x.id === id);
    verdad.push({inicio: fecha(T), tipo: 'falla_proceso', id, nombre: nombre || (s ? s.name : id), area: s ? s.area : 200, nota});
    fn ? fn() : P.scenario(id);
  });
};
const el = (f) => (Date.parse(f.replace(' ', 'T') + ':00Z') - INICIO) / 1000; // 'AAAA-MM-DD hh:mm' → segundos de campaña
let enMarcha = []; // motores andando antes de una caída, para volver a la misma alineación
const recordar = () => (enMarcha = Object.values(P.M).filter((m) => m.state === 'RUN').map((m) => m.id));
const reponer = () => {
  Object.values(P.M).forEach((m) => m.state === 'TRIP' && P.cmd.reset(m.id));
  enMarcha.forEach((id) => P.M[id].state !== 'RUN' && P.cmd.start(id));
};

// Lunes 14:20 · tirón de cordón en la correa
falla(el('2026-11-02 14:20'), 'cord', 'El operador rearma a los 3 min y parte en secuencia a los 5.');
en(el('2026-11-02 14:23'), () => P.cmd.reset('CV-101'));
en(el('2026-11-02 14:25'), () => P.cmd.seq('start100'));
// Martes 03:10 · bomba de riego A; la B parte sola
falla(el('2026-11-03 03:10'), 'p201', 'P-201B en respaldo automático. La A se rearma a los 35 min y queda de respaldo.');
en(el('2026-11-03 03:45'), () => (P.cmd.reset('P-201A'), P.cmd.standby('P-201A', true)));
// Martes 10:00 · deriva rápida del pHmetro (0,12 pH/h)
falla(el('2026-11-03 10:00'), 'ph', 'Deriva de 0,12 pH/h. Se calibra 50 min después de la alarma contra laboratorio.');
// Miércoles 02:00 · rodamiento; se deja llegar al disparo
falla(el('2026-11-04 02:00'), 'bearing', 'Nadie interviene: dispara por vibración. Cambio de rodamiento 20 min después del disparo.');
// Miércoles 16:30 · cae el MCC-200: avalancha de alarmas
en(el('2026-11-04 16:29'), recordar);
falla(el('2026-11-04 16:30'), 'mcc', 'Se cierra el interruptor a los 12 min y se vuelve a la alineación anterior.');
en(el('2026-11-04 16:42'), () => P.cmd.breaker('MCC-200', true));
en(el('2026-11-04 16:44'), reponer);
// Jueves 09:00 · entra mineral con menos cobre soluble; vuelve el original el sábado
falla(el('2026-11-05 09:00'), 'ore', 'Dura hasta el sábado a las 09:00.');
en(el('2026-11-07 09:00'), () => {
  P.X.oreF = 1;
  verdad.push({inicio: fecha(T), tipo: 'fin', id: 'ore', nombre: 'Vuelve el mineral original', area: 200, nota: ''});
});
// Viernes 01:00 · racha de cortocircuitos; se corrigen tras la ronda
falla(el('2026-11-06 01:00'), 'shorts', 'La cuadrilla corrige lo que encuentra la ronda manual.');
// Viernes 13:00 · disparo del rectificador
falla(el('2026-11-06 13:00'), 'rt', 'Rearme a los 8 min y puesta en servicio a los 10.');
en(el('2026-11-06 13:08'), () => P.cmd.reset('RT-401'));
en(el('2026-11-06 13:10'), () => P.cmd.seq('start400'));
// Sábado 04:00 · intercambiador; se repara 9 h después
falla(el('2026-11-07 04:00'), 'hx', 'Reparado a las 13:00.');
en(el('2026-11-07 13:00'), () => P.cmd.fixHX());
// Sábado 15:00 · deriva lenta del pHmetro (0,03 pH/h), sembrada directo en el estado
falla(el('2026-11-07 15:00'), 'ph_lenta', 'Deriva de 0,03 pH/h, cuatro veces más lenta que el escenario. Se calibra 70 min después de la alarma.', () => {
  P.X.pHdrift = 0.03 / H;
}, 'Deriva lenta del pHmetro AIT-207');
// Sábado 20:00 · borra en el decantador; se retira 18 h después
falla(el('2026-11-07 20:00'), 'crud', 'Retirada el domingo a las 14:00.');
en(el('2026-11-08 14:00'), () => P.cmd.cleanCrud());
// Domingo 10:00 · rodamiento otra vez; ahora mantenimiento actúa con la alarma de zona C
falla(el('2026-11-08 10:00'), 'bearing', 'Mantenimiento cambia el rodamiento 40 min después de la alarma de zona C.');

/* ---------- respuestas que dependen de lo que pase ---------- */
const pendientes = []; // {t, fn}
const luego = (seg, fn) => pendientes.push({t: T + Math.round(seg), fn});
let derivaAvisada = false,
  rodamiento = 0;
const reaccionar = (e) => {
  // reconocimiento de alarmas: más lento de noche
  if (e.kind === 'alm') {
    const id = e.msg.split(' ')[1];
    const noche = P.shiftOf() === 'C';
    const demora = (noche ? 150 : 60) * Math.exp(1.0 * (azar() + azar() + azar() - 1.5));
    luego(demora, () => P.cmd.ack(id));
    if (id === 'AIT-207.DEV' && !derivaAvisada) {
      derivaAvisada = true;
      luego((P.X.pHdrift > 0.1 / H ? 50 : 70) * 60, () => (P.cmd.calibrate(), (derivaAvisada = false)));
    }
    if (id === 'M-103.VIB' && rodamiento === 1) {
      rodamiento = 2; // una sola orden de trabajo, aunque la alarma repique
      luego(40 * 60, () => (P.cmd.bearing(), luego(32 * 60, () => P.cmd.seq('start100'))));
    }
  }
  if (e.kind === 'trip' && /^M-103 disparado: vibración/.test(e.msg)) {
    rodamiento = 1;
    luego(20 * 60, () => (P.cmd.bearing(), luego(32 * 60, () => P.cmd.seq('start100'))));
  }
  if (e.who === 'Mantenimiento' && /^Ronda manual/.test(e.msg)) luego(10 * 60, () => P.cmd.fixAllSeen());
};

/* ---------- registros ---------- */
const tagsProceso = Object.values(P.T).filter((t) => !t.id.startsWith('VIT-'));
const hist = [],
  vib = [],
  bit = [],
  alm = [],
  lab = [],
  turnos = [];
let labT = P.X.labT,
  nTurnos = 0;
const prio = Object.fromEntries(P.AD.map((a) => [a.id, a]));
const red = (v, d) => (Number.isFinite(v) ? +v.toFixed(d) : '');
// Ruido de medición: el motor entrega el valor del proceso; un transmisor real agrega ruido.
// Aquí, gaussiano con desviación de 0,15 % del rango del instrumento, con semilla propia y recortado al rango.
const RUIDO = 0.0015;
let semillaR = 97531;
const azarR = () => ((semillaR = (semillaR * 48271) % 2147483647), semillaR / 2147483647);
const gauss = () => Math.sqrt(-2 * Math.log(azarR() || 1e-9)) * Math.cos(2 * Math.PI * azarR());
const medir = (g) => Math.min(g.hi, Math.max(g.lo, g.v + RUIDO * (g.hi - g.lo) * gauss()));

const RECTs = () => 'RT:' + P.RECT.state;
agenda.sort((a, b) => a.t - b.t);
P.S.log.length = 0;
let ia = 0;
for (let t = 0; t <= FIN; t++) {
  T = t;
  if (t > 0) P.step();
  while (ia < agenda.length && agenda[ia].t <= t) agenda[ia++].fn();
  for (let i = pendientes.length - 1; i >= 0; i--) if (pendientes[i].t <= t) pendientes.splice(i, 1)[0].fn();
  // bitácora y alarmas: el simulador las deja en S.log, lo más nuevo primero
  if (P.S.log.length) {
    const nuevos = P.S.log.splice(0).reverse();
    for (const e of nuevos) {
      const f = fecha(t);
      if (e.kind === 'alm' || e.kind === 'rtn' || (e.kind === 'ack' && /^Reconoce alarma /.test(e.msg))) {
        const id = e.kind === 'alm' ? e.msg.split(' ')[1] : e.msg.split(' ').pop();
        const a = prio[id] || {};
        alm.push([f, id, e.kind === 'alm' ? 'ACTIVA' : e.kind === 'rtn' ? 'NORMALIZA' : 'RECONOCE', a.prio ?? '', a.area ?? '', a.tag || '', a.type || '', a.desc || '']);
      } else if (e.kind !== 'scn') bit.push([f, e.who, e.kind, e.msg]); // el escenario sembrado no se exporta: es la verdad a evaluar
      reaccionar(e);
    }
  }
  if (process.env.VER && t % (6 * H) === 0) console.log(fecha(t), ['WIT-101', 'FIT-200', 'AIT-206', 'AIT-207', 'IIT-401', 'KY-405', 'KY-406', 'TIT-403', 'AIT-407'].map((k) => k + '=' + P.T[k].v.toFixed(2)).join(' '), '| no andan:', Object.values(P.M).filter((m) => m.state !== 'RUN').map((m) => m.id + ':' + m.state + (m.standby ? '*' : '')).join(' '), RECTs());
  if (t % 60 === 0) hist.push([fecha(t), ...tagsProceso.map((g) => red(medir(g), (g.dec ?? 1) + 1))]);
  if (t % 300 === 0) for (const m of Object.values(P.M)) vib.push([fecha(t), m.id, m.state, red(m.vib, 3), red(m.temp, 1), red(m.amps, 1)]);
  if (P.X.labT !== labT) {
    labT = P.X.labT;
    lab.push([fecha(t), 'PLS', 'pH', red(P.X.labPH, 2), 'pH']);
  }
  if (P.X.shiftHist.length && P.X.shiftHist[0] !== turnos._ult) {
    const s = (turnos._ult = P.X.shiftHist[0]);
    nTurnos++;
    turnos.push([fecha(t), s.id, red(s.cath, 2), red(s.plan, 2), red(s.mwh, 1), red(s.acid, 1), red(s.ore, 0), red(s.lostShorts, 2), red(s.lostRect, 2), red(s.down / 60, 0), s.alarms]);
    // compósito de cátodo del turno: plomo, azufre y hierro
    lab.push([fecha(t), 'Cátodo', 'Pb', red(P.X.Pb, 2), 'ppm'], [fecha(t), 'Cátodo', 'S', red(P.X.Sppm, 2), 'ppm'], [fecha(t), 'Cátodo', 'Fe', red(P.X.FeC, 2), 'ppm']);
  }
}

/* ---------- defectos de adquisición sembrados en el historiador (verdad conocida) ---------- */
const col = Object.fromEntries(tagsProceso.map((g, i) => [g.id, i + 1]));
const fila = (t) => t / 60;
const defectos = [];
// 1. Pérdida de comunicación con el PLC del área 300: 47 min sin valor
{
  const a = el('2026-11-03 21:13'), b = el('2026-11-03 22:00');
  const tags = tagsProceso.filter((g) => g.area === 300).map((g) => g.id);
  for (let r = fila(a - (a % 60)) + 1; r <= fila(b); r++) for (const k of tags) hist[r][col[k]] = '';
  defectos.push({tipo: 'sin_dato', tags, desde: hist[fila(a - (a % 60)) + 1][0], hasta: hist[fila(b)][0], nota: 'Pérdida de comunicación con el PLC del área 300'});
}
// 2. Transmisor congelado: TIT-403 repite el último valor 3 h 20 min
{
  const a = fila(el('2026-11-05 02:10')), b = fila(el('2026-11-05 05:30'));
  for (let r = a + 1; r <= b; r++) hist[r][col['TIT-403']] = hist[a][col['TIT-403']];
  defectos.push({tipo: 'congelado', tags: ['TIT-403'], desde: hist[a + 1][0], hasta: hist[b][0], nota: 'El transmisor repite el último valor'});
}
// 3. Lecturas imposibles: tres valores sueltos fuera del rango del instrumento
for (const [f, k, v] of [['2026-11-02 19:41', 'FIT-205', 9999], ['2026-11-04 11:05', 'AIT-405', -1], ['2026-11-06 20:17', 'IIT-401', 655.35]]) {
  const r = fila(el(f));
  hist[r][col[k]] = v;
  defectos.push({tipo: 'fuera_de_rango', tags: [k], desde: hist[r][0], hasta: hist[r][0], nota: `Valor ${v}`});
}
// 4. Filas repetidas: el historiador reenvía dos minutos al reconectar
{
  const r = fila(el('2026-11-03 22:01'));
  defectos.push({tipo: 'duplicado', tags: [], desde: hist[r][0], hasta: hist[r + 1][0], nota: 'Dos filas reenviadas tras la reconexión'});
  hist.splice(r + 2, 0, hist[r].slice(), hist[r + 1].slice());
}
// 5. Filas que faltan: reinicio del servidor, 12 min sin registros
{
  const i = hist.findIndex((x) => x[0] === fecha(el('2026-11-08 06:20')));
  defectos.push({tipo: 'filas_faltantes', tags: [], desde: hist[i][0], hasta: hist[i + 11][0], nota: 'Reinicio del servidor del historiador'});
  hist.splice(i, 12);
}

/* ---------- escritura ---------- */
const csv = (cab, filas) => [cab, ...filas].map((f) => f.map((x) => (/[",\n]/.test(String(x)) ? `"${String(x).replace(/"/g, '""')}"` : x)).join(',')).join('\n') + '\n';
const archivos = {
  'historiador.csv': {txt: csv(['fecha', ...tagsProceso.map((g) => g.id)], hist), que: 'Historiador de proceso: una fila por minuto, una columna por tag', sistema: 'DCS / historiador'},
  'alarmas.csv': {txt: csv(['fecha', 'alarma', 'evento', 'prioridad', 'area', 'tag', 'tipo', 'descripcion'], alm), que: 'Registro de alarmas: activación, reconocimiento y normalización', sistema: 'Sistema de alarmas'},
  'bitacora.csv': {txt: csv(['fecha', 'quien', 'clase', 'mensaje'], bit), que: 'Bitácora: órdenes del operador, disparos, secuencias y mantenimiento', sistema: 'Bitácora de sala de control'},
  'vibraciones.csv': {txt: csv(['fecha', 'equipo', 'estado', 'vibracion_mm_s', 'temperatura_c', 'corriente_a'], vib), que: 'Monitoreo de condición: una lectura cada 5 min por motor', sistema: 'Monitoreo de condición'},
  'laboratorio.csv': {txt: csv(['fecha', 'muestra', 'analito', 'valor', 'unidad'], lab), que: 'Laboratorio: pH del PLS cada 2 h y compósito de cátodo por turno', sistema: 'Laboratorio'},
  'turnos.csv': {txt: csv(['fecha_cierre', 'turno', 'catodo_t', 'plan_t', 'energia_mwh', 'acido_t', 'mineral_t', 'perdida_cortos_t', 'perdida_rectificador_t', 'detencion_min', 'alarmas'], turnos), que: 'Cierre de turno: producción, consumos, pérdidas y alarmas', sistema: 'Reporte de turno'},
  'tags.csv': {txt: csv(['tag', 'descripcion', 'unidad', 'area', 'rango_min', 'rango_max', 'normal_min', 'normal_max'], tagsProceso.map((g) => [g.id, g.desc, g.unit, g.area, g.lo, g.hi, g.nl ?? '', g.nh ?? ''])), que: 'Diccionario de tags: descripción, unidad, rango del instrumento y banda normal', sistema: 'Configuración'},
  'equipos.csv': {txt: csv(['equipo', 'descripcion', 'area', 'potencia_kw', 'mcc', 'grupo_iso', 'limite_ab', 'limite_bc', 'limite_cd'], Object.values(P.M).map((m) => [m.id, m.desc, m.area, m.kw, m.mcc, m.grp, ...m.z])), que: 'Motores: potencia, centro de control y límites de vibración ISO 20816-3', sistema: 'Configuración'},
};
fs.mkdirSync(OUT, {recursive: true});
const manifiesto = {generado_con: 'herramientas/genera.js', ruido_medicion: '0,15 % del rango de cada instrumento', motor: 'planta-virtual/sim.js', motor_sha256: crypto.createHash('sha256').update(fs.readFileSync(path.resolve(SIM))).digest('hex'), desde: fecha(0), hasta: fecha(FIN), archivos: {}};
for (const [n, a] of Object.entries(archivos)) {
  fs.writeFileSync(path.join(OUT, n), a.txt);
  manifiesto.archivos[n] = {que: a.que, sistema: a.sistema, filas: a.txt.split('\n').length - 2, bytes: Buffer.byteLength(a.txt), sha256: crypto.createHash('sha256').update(a.txt).digest('hex')};
}
fs.writeFileSync(path.join(OUT, 'manifiesto.json'), JSON.stringify(manifiesto, null, 1) + '\n');
fs.writeFileSync(path.join(OUT, 'verdad.json'), JSON.stringify({nota: 'Lo que se sembró. El cuaderno no lo lee para detectar: solo para medir si detectó.', fallas: verdad, defectos}, null, 1) + '\n');
for (const [n, a] of Object.entries(manifiesto.archivos)) console.log(n.padEnd(18), String(a.filas).padStart(6), 'filas', String(Math.round(a.bytes / 1024)).padStart(5), 'kB');
