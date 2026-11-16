/* Campaña larga para el caso de pronóstico: ocho semanas del mismo motor, con cambios de mineral a intervalos
   irregulares y algunos disparos del rectificador. Exporta medias de 10 minutos de los tags que usa el modelo.
   Uso: node herramientas/genera_largo.js ruta/a/sim.js datos/historiador_8_semanas.csv */
'use strict';
const fs = require('fs');
const path = require('path');
const [, , SIM, OUT] = process.argv;
require(path.resolve(SIM));
const P = globalThis.PlantSim.create();

const INICIO = Date.UTC(2026, 8, 7, 8, 0, 0); // lunes 7 de septiembre de 2026, 08:00
const SEMANAS = 8;
const FIN = SEMANAS * 7 * 86400;
const fecha = (t) => new Date(INICIO + t * 1000).toISOString().slice(0, 19).replace('T', ' ');
let semilla = 20260907;
const azar = () => ((semilla = (semilla * 48271) % 2147483647), semilla / 2147483647);
let semillaR = 13579;
const azarR = () => ((semillaR = (semillaR * 48271) % 2147483647), semillaR / 2147483647);
const gauss = () => Math.sqrt(-2 * Math.log(azarR() || 1e-9)) * Math.cos(2 * Math.PI * azarR());

// guion: el mineral cambia cada 2 a 6 días (factor de cobre soluble entre 0,70 y 1,00); un disparo del rectificador cada ~10 días
const agenda = [];
for (let t = (2 + 3 * azar()) * 86400; t < FIN; t += (2 + 4 * azar()) * 86400) agenda.push({t: Math.round(t), tipo: 'mineral', f: +(0.7 + 0.3 * azar()).toFixed(2)});
for (let t = (6 + 6 * azar()) * 86400; t < FIN; t += (8 + 5 * azar()) * 86400) agenda.push({t: Math.round(t), tipo: 'rectificador'});
agenda.sort((a, b) => a.t - b.t);

const TAGS = ['AIT-206', 'FIT-205', 'AIT-208', 'KY-303', 'KY-304', 'AIT-302', 'AIT-405', 'TIT-403', 'AIT-407', 'IIT-401', 'KY-406', 'KY-405'];
const medir = (g) => Math.min(g.hi, Math.max(g.lo, g.v + 0.0015 * (g.hi - g.lo) * gauss()));
const filas = [];
const eventos = [];
let suma = TAGS.map(() => 0), n = 0, ia = 0;
const pend = [];
for (let t = 0; t <= FIN; t++) {
  if (t > 0) P.step();
  while (ia < agenda.length && agenda[ia].t <= t) {
    const e = agenda[ia++];
    if (e.tipo === 'mineral') (P.X.oreF = e.f), eventos.push([fecha(t), 'mineral', e.f]);
    else {
      P.scenario('rt');
      eventos.push([fecha(t), 'rectificador', '']);
      pend.push({t: t + 480, fn: () => P.cmd.reset('RT-401')}, {t: t + 600, fn: () => P.cmd.seq('start400')});
    }
  }
  for (let i = pend.length - 1; i >= 0; i--) if (pend[i].t <= t) pend.splice(i, 1)[0].fn();
  P.S.log.length = 0;
  if (t % 60 === 0) {
    TAGS.forEach((k, i) => (suma[i] += medir(P.T[k])));
    n++;
  }
  if (t % 600 === 0 && n) {
    filas.push([fecha(t), ...suma.map((s, i) => +(s / n).toFixed((P.T[TAGS[i]].dec ?? 1) + 2))]);
    suma = TAGS.map(() => 0);
    n = 0;
  }
}
fs.writeFileSync(OUT, [['fecha', ...TAGS], ...filas].map((f) => f.join(',')).join('\n') + '\n');
fs.writeFileSync(OUT.replace(/\.csv$/, '_eventos.csv'), [['fecha', 'evento', 'factor_mineral'], ...eventos].map((f) => f.join(',')).join('\n') + '\n');
// se anota en el manifiesto, junto a los archivos de la semana
const crypto = require('crypto');
const man = path.join(path.dirname(OUT), 'manifiesto.json');
if (fs.existsSync(man)) {
  const m = JSON.parse(fs.readFileSync(man, 'utf8'));
  for (const [f, que] of [[OUT, 'Campaña larga: ocho semanas con 15 cambios de mineral, medias de 10 minutos de 12 tags'], [OUT.replace(/\.csv$/, '_eventos.csv'), 'Campaña larga: cuándo cambió el mineral y cuándo disparó el rectificador']]) {
    const txt = fs.readFileSync(f);
    m.archivos[path.basename(f)] = {que, sistema: 'DCS / historiador', filas: txt.toString().split('\n').length - 2, bytes: txt.length, sha256: crypto.createHash('sha256').update(txt).digest('hex')};
  }
  fs.writeFileSync(man, JSON.stringify(m, null, 1) + '\n');
}
console.log(filas.length, 'filas ·', eventos.filter((e) => e[1] === 'mineral').length, 'cambios de mineral ·', eventos.filter((e) => e[1] === 'rectificador').length, 'disparos ·', Math.round(fs.statSync(OUT).size / 1024), 'kB');
