/* Propuesta · asistente con IA de NVIDIA para la planta virtual (no activo en GitHub Pages; ver README.md).
   context(): resume en texto el estado de la planta para el modelo de lenguaje.
   ask(): envía la pregunta y el resumen al servicio del servidor (servicio.js), que guarda la clave de NVIDIA. */
(function (G) {
  'use strict';
  // URL del servicio en el servidor propio (por ejemplo, '/api/ask' en el mismo dominio). Vacía = desactivado.
  const DEFAULT_ENDPOINT = '';

  const endpoint = () => {
    try {
      const q = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('ia') : null;
      if (q !== null) { if (q) localStorage.setItem('pv-ia', q); else localStorage.removeItem('pv-ia'); }
      return localStorage.getItem('pv-ia') || DEFAULT_ENDPOINT;
    } catch (e) { return DEFAULT_ENDPOINT; }
  };

  const n = (v, d = 1) => (Number.isFinite(v) ? v.toFixed(d).replace('.', ',') : '—');
  const KEY_TAGS = {
    100: ['WIT-101', 'KY-102', 'AIT-105', 'LIT-103'],
    200: ['FIT-200', 'PIT-202', 'LIT-201', 'LIT-204', 'AIT-206', 'AIT-207', 'FIT-205'],
    300: ['KY-303', 'KY-301', 'AIT-208', 'AIT-302', 'LIT-303', 'AIT-309', 'KY-304'],
    400: ['IIT-401', 'KY-401', 'KY-402', 'KY-405', 'KY-406', 'KY-407', 'TIT-403', 'FIT-402', 'AIT-405', 'AIT-406', 'AIT-407', 'AIT-408'],
    500: ['JIT-500', 'KY-501', 'KY-502', 'LIT-501', 'LIT-502']
  };
  const AREA = {100: 'Aglomeración', 200: 'Pilas y piscinas', 300: 'SX', 400: 'EW', 500: 'Servicios y energía'};
  // Relaciones de causa del modelo y acciones que existen en esta sala: así la IA no especula y recomienda lo que se puede hacer.
  const CAUSAL = `RELACIONES DEL MODELO (úsalas para explicar causas):
- La eficiencia de corriente (KY-406) baja solo por: cortocircuitos en celdas, hierro en el electrolito (AIT-407) sobre 500 mg/L (cada 1.000 mg/L sobre ese valor resta unos 2 puntos) y electrolito bajo 40 °C. El factor de potencia y la distorsión armónica no la afectan.
- El factor de potencia (KY-501) y la distorsión (KY-502) dependen solo del filtro de armónicas y condensadores: fuera de servicio, 0,86 y 8,5 %; en servicio, 0,96 y 3 %.
- Sin riego (P-201A/B) cae la presión PIT-202; sin bombas P-202A/B se corta el PLS a SX y luego baja el cobre transferido al electrolito.
- La borra en E1 sube el arrastre (AIT-309), que lleva hierro al electrolito y, en días, baja la eficiencia de corriente.
- Sin corriente en la nave, el cobre de SX se acumula en el electrolito y, al volver la corriente, el cátodo puede salir con plomo; por eso conviene la corriente de protección.
- Cobalto bajo 110 mg/L corroe el ánodo y sube el plomo del cátodo; entre 120 y 200 mg/L es normal.
ACCIONES DISPONIBLES EN LA SALA: partir, detener y rearmar equipos; respaldo automático de bombas B; modos y consignas de lazos; secuencias de partida y parada del área 100; puesta en servicio y bajada a corriente de protección de la nave EW; cerrar y abrir interruptores; filtro de armónicas y condensadores; recibir camión de ácido; compensación de retardo de la correa; monitoreo continuo de celdas y enviar cuadrilla a corregir celdas con cortocircuito; mantenimiento: calibrar AIT-207, retirar borra de E1, reparar HX-401, cambiar rodamiento de M-103.`;

  // Resumen en texto del estado actual: lo que un operador le contaría a un colega por radio, con números.
  function context(P, ins = []) {
    const L = [], X = P.X, T = P.T;
    L.push(`Planta LX-SX-EW de cobre (simulador de entrenamiento). Hora simulada: ${P.hhmm()}, turno ${P.shiftOf()}.`);
    const act = P.AD.filter((a) => a.st === 'U' || a.st === 'A').sort((a, b) => a.prio - b.prio || a.since - b.since);
    L.push(`ALARMAS ACTIVAS (${act.length}; prioridad 1 es la más alta):`);
    if (!act.length) L.push('- ninguna');
    act.slice(0, 15).forEach((a) => L.push(`- P${a.prio} desde ${P.hm(a.since)} · ${a.id} · ${a.desc}${a.st === 'U' ? ' · sin reconocer' : ''}`));
    if (act.length > 15) L.push(`- y ${act.length - 15} más`);
    if (ins.length) { L.push('AVISOS DEL ASISTENTE LOCAL:'); ins.slice(0, 8).forEach((i) => L.push(`- ${i.t}. ${i.d}`)); }
    const off = Object.values(P.M).filter((m) => m.state !== 'RUN');
    L.push('EQUIPOS QUE NO ESTÁN EN MARCHA:');
    if (!off.length && P.RECT.state === 'RUN') L.push('- ninguno');
    off.forEach((m) => L.push(`- ${m.id} (${m.desc}): ${m.state === 'TRIP' ? (m.trip === 'reset' ? 'disparado y rearmado' : 'DISPARADO por ' + m.trip) : m.maintUntil ? 'en mantención' : m.standby ? 'detenido en respaldo automático' : 'detenido'}`));
    if (P.RECT.state !== 'RUN') L.push(`- RT-401 rectificador: ${P.RECT.state === 'TRIP' ? 'DISPARADO por ' + P.RECT.trip : 'fuera de servicio'}`);
    const brk = Object.entries(P.BRK).filter(([, v]) => !v).map(([k]) => k);
    if (brk.length) L.push(`INTERRUPTORES ABIERTOS: ${brk.join(', ')}`);
    const loops = Object.entries(P.L).filter(([, c]) => c.mode !== c.norm);
    if (loops.length) L.push(`LAZOS EN MODO NO HABITUAL: ${loops.map(([k, c]) => `${k} en ${c.mode} (normal ${c.norm})`).join('; ')}`);
    Object.entries(P.seqs || {}).forEach(([ar, q]) => { if (q.id) L.push(`SECUENCIA ÁREA ${ar}: ${P.SEQ[q.id].name} · ${q.st === 'RUN' ? 'en curso, paso ' + (q.k + 1) : q.st === 'DONE' ? 'completada' : q.st === 'FAIL' ? 'DETENIDA: ' + q.msg : q.st}`); });
    L.push('VARIABLES (valor actual · banda normal):');
    Object.entries(KEY_TAGS).forEach(([ar, tags]) => {
      L.push(`${ar} ${AREA[ar]}: ` + tags.map((k) => { const t = T[k]; return `${k} ${t.desc} ${n(t.v, t.dec)}${t.unit ? ' ' + t.unit : ''} (${n(t.nl, t.dec)}–${n(t.nh, t.dec)})`; }).join('; '));
    });
    L.push(`Turno: cátodo ${n(X.cathShift, 1)} t contra plan ${n(X.plannedShift, 1)} t; pérdidas por cortocircuitos ${n(X.lostShorts, 2)} t; cortocircuitos conocidos ${(() => { let c = 0; for (let k = 0; k < P.NCELL; k++) if (X.shorts[k] > 0 && (X.monitor || X.seen[k])) c++; return c; })()}; monitoreo continuo de celdas ${X.monitor ? 'activo' : 'apagado (ronda cada 4 h)'}; filtro de armónicas ${X.capBank ? 'en servicio' : 'fuera de servicio'}; compensación de retardo de la correa ${X.delayComp ? 'activa' : 'apagada'}.`);
    L.push(CAUSAL);
    const ev = P.S.log.filter((l) => l.kind !== 'alm' && l.kind !== 'rtn' && l.kind !== 'ack').slice(0, 10);
    if (ev.length) { L.push('ÚLTIMOS EVENTOS (más reciente primero):'); ev.forEach((l) => L.push(`- ${P.hm(l.t)} ${l.who}: ${l.msg}`)); }
    return L.join('\n');
  }

  async function ask(question, ctx, url = endpoint(), timeoutMs = 45000) {
    if (!url) throw new Error('La consulta a la IA no está configurada.');
    const ac = typeof AbortController !== 'undefined' ? new AbortController() : null, t0 = Date.now();
    const tm = ac ? setTimeout(() => ac.abort(), timeoutMs) : null;
    try {
      const r = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({question, context: ctx}), signal: ac ? ac.signal : undefined});
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || `El servicio respondió ${r.status}`);
      return Object.assign({ms: Date.now() - t0}, d);
    } catch (e) {
      throw new Error(e.name === 'AbortError' ? 'La IA tardó demasiado en responder.' : e.message);
    } finally { if (tm) clearTimeout(tm); }
  }

  G.PlantIA = {endpoint, context, ask};
})(typeof window !== 'undefined' ? window : globalThis);
