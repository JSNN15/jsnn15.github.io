/* Pruebas del motor de la planta virtual. Ejecutar: node planta-virtual/test/sim.test.js */
'use strict';
const assert = require('assert');
require('../sim.js');
const {create} = globalThis.PlantSim;

const run = (P, sec) => { for (let i = 0; i < sec; i++) P.step(); };
const finite = (P) => Object.values(P.T).forEach((t) => assert.ok(Number.isFinite(t.v), `${t.id} no es finito: ${t.v}`));
const between = (v, a, b, what) => assert.ok(v >= a && v <= b, `${what} = ${v} fuera de [${a}, ${b}]`);
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('ok ·', name); };

test('régimen tras 8 h: valores de diseño', () => {
  const P = create(); run(P, 8 * 3600); finite(P);
  between(P.T['KY-405'].v, 6.0, 7.0, 'cátodo t/h');
  between(P.T['KY-406'].v, 88, 97, 'eficiencia de corriente %');
  between(P.T['AIT-405'].v, 40, 48, 'Cu electrolito g/L');
  between(P.T['KY-303'].v, 85, 99, 'extracción SX %');
  between(P.T['KY-407'].v, 1600, 2200, 'energía específica kWh/t');
});

test('Faraday: cátodo = I · 1,1855 g/Ah · celdas · eficiencia', () => {
  const P = create(); run(P, 3600);
  const I = P.T['IIT-401'].v, ce = P.T['KY-406'].v / 100, d = P.T['KY-405'].v;
  const ideal = I * 1.1855 * P.NCELL * ce / 1000;
  assert.ok(Math.abs(d - ideal) / ideal < 0.01, `cátodo ${d} vs Faraday ${ideal}`);
});

test('voltaje de celda = suma de sus componentes', () => {
  const P = create(); run(P, 600);
  const p = P.X.vp, sum = p.rev + p.an + p.cat + p.ohm + p.hw;
  between(sum, 1.8, 2.2, 'voltaje de celda V');
});

test('todos los escenarios corren 6 h sin valores no finitos', () => {
  for (const s of create().SCN) { const P = create(); P.scenario(s.id); run(P, 6 * 3600); finite(P); }
});

test('cordón de emergencia: disparo y alarma P1', () => {
  const P = create(); P.scenario('cord'); run(P, 30);
  assert.strictEqual(P.M['CV-101'].state, 'TRIP');
  assert.ok(P.AD.find((a) => a.id === 'CV-101.TRIP' && a.st === 'U'), 'alarma CV-101.TRIP sin activar');
  assert.ok(!P.M['FD-101'].state.startsWith('RUN'), 'el alimentador debió detenerse por enclavamiento');
});

test('secuencias del área 100: parada y partida completas', () => {
  const P = create();
  assert.ok(P.cmd.seq('stop100')); run(P, 600);
  assert.strictEqual(P.seq.st, 'DONE', P.seq.msg);
  ['M-103', 'CV-101', 'FD-101', 'P-102', 'P-104'].forEach((id) => assert.notStrictEqual(P.M[id].state, 'RUN', id));
  ['WIT-101.L', 'KY-102.L', 'AIT-105.L'].forEach((id) => { const a = P.AD.find((x) => x.id === id); assert.ok(a.supp && a.st === 'N', `${id} debió quedar suprimida con el área detenida`); });
  assert.ok(P.cmd.seq('start100')); run(P, 600);
  assert.strictEqual(P.seq.st, 'DONE', P.seq.msg);
  run(P, 1800); between(P.X.tonDrum, 1400, 2000, 'mineral al tambor t/h');
  between(P.T['KY-102'].v, 17, 23, 'dosis de ácido kg/t');
});

test('secuencia falla con causa si la correa está disparada', () => {
  const P = create(); P.scenario('cord'); run(P, 30);
  P.cmd.seq('start100'); run(P, 300);
  assert.strictEqual(P.seq.st, 'FAIL');
  assert.match(P.seq.msg, /rearmar/);
});

test('la compensación de retardo de la correa reduce la variación de la dosis de ácido', () => {
  const sd = (comp) => { const P = create(); P.cmd.delayComp(comp); const v = []; for (let i = 0; i < 7200; i++) { P.step(); v.push(P.T['KY-102'].v); } const m = v.reduce((a, b) => a + b) / v.length; return Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / v.length); };
  const on = sd(true), off = sd(false);
  assert.ok(on < off * 0.8, `desviación con compensación ${on.toFixed(2)} vs sin ${off.toFixed(2)} kg/t`);
});

console.log(`${n} pruebas OK`);
