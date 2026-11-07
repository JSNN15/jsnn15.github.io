/* Planta virtual · interfaz de operador, mantenimiento y gerencia */
(() => {
  'use strict';
  let P = PlantSim.create();
  const $ = (id) => document.getElementById(id);
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const nf = {}; const f = (v, d = 0) => { if (!Number.isFinite(v)) return '—'; nf[d] = nf[d] || new Intl.NumberFormat('es-CL', {minimumFractionDigits: d, maximumFractionDigits: d}); return nf[d].format(v); };
  const tv = (id) => P.T[id].v;
  const ft = (id) => f(tv(id), P.T[id].dec);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const SHORT = {100: 'Aglomeración', 200: 'Pilas y piscinas', 300: 'SX', 400: 'EW', 500: 'Servicios y energía'};
  const AREAS = {100: 'Aglomeración', 200: 'Pilas y piscinas', 300: 'Extracción por solventes', 400: 'Electroobtención', 500: 'Servicios y energía'};
  const LOOP_PV = {'WIC-101': 'WIT-101', 'FFIC-102': 'FIT-102', 'FFIC-104': 'FIT-104', 'FIC-211': 'FIT-211', 'FIC-212': 'FIT-212', 'FIC-213': 'FIT-213', 'LIC-201': 'LIT-201', 'LIC-204': 'LIT-204', 'FIC-205': 'FIT-205', 'FFIC-301': 'FIT-301', 'IIC-401': 'IIT-401', 'AIC-405': 'AIT-405', 'TIC-403': 'TIT-403', 'FIC-404': 'FIT-404', 'FIC-409': 'FIT-409'};
  const VALVE = {'FFIC-102': 'FCV-102', 'FFIC-104': 'FCV-104', 'FIC-211': 'FCV-211', 'FIC-212': 'FCV-212', 'FIC-213': 'FCV-213', 'LIC-201': 'LCV-201', 'FIC-205': 'FCV-205', 'TIC-403': 'TCV-403', 'FIC-409': 'FCV-409'};

  const state = {role: 'op', screen: 'gen', sel: null, trend: {pens: ['AIT-206', 'AIT-405', 'IIT-401', 'KY-406'], win: 7200}, maintSel: 'M-103'};

  /* =================== helpers SVG =================== */
  const T_ = (x, y, s, cls = 'lbl', a = 'start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${a}">${s}</text>`;
  const V_ = (x, y, tag, a = 'start') => `<text x="${x}" y="${y}" class="val" text-anchor="${a}"><tspan data-v="${tag}">0</tspan><tspan class="unit"> ${P.T[tag].unit}</tspan></text>`;
  const K_ = (x, y, key, cls = 'val', a = 'start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${a}" data-k="${key}">—</text>`;
  const ALM = (x, y, tag) => `<g class="almi" data-alm="${tag}" transform="translate(${x},${y})" style="display:none"><rect x="-7" y="-7" width="14" height="14" rx="1"/><text x="0" y="3.5" text-anchor="middle">1</text></g>`;
  const bub = (x, y, tag, o = {}) => {
    const [a, b] = tag.split('-');
    const ctl = !!o.loop;
    return `<g class="bub ${ctl ? 'ctl' : ''}" ${ctl ? `data-fp="${o.loop}"` : ''} transform="translate(${x},${y})">${ctl ? '<rect x="-17" y="-17" width="34" height="34"/>' : ''}<circle r="16"/><line x1="-16" x2="16" y1="0" y2="0" stroke="var(--eq)" stroke-width="${o.field ? 0 : 1}"/>` +
      `<text class="tagt" y="-3" text-anchor="middle">${a}</text><text class="tagt" y="10" text-anchor="middle">${b}</text></g>` +
      (o.v ? V_(x + (o.vx ?? 22), y + (o.vy ?? 4), o.v, o.va || 'start') : '') + ALM(x + 18, y - 18, o.alm || o.v || tag);
  };
  const pump = (x, y, id, lbl = true, dir = 1) => `<g class="eq" data-eq="${id}" data-fp="${id}" transform="translate(${x},${y})"><circle r="14"/><path class="ic" d="${dir > 0 ? 'M-6,-8 L9,0 L-6,8 Z' : 'M6,-8 L-9,0 L6,8 Z'}"/></g>` + (lbl ? T_(x, y + 28, id, 'tagt', 'middle') : '') + ALM(x + 14, y - 14, id + '.TRIP');
  const motor = (x, y, id) => `<g class="eq" data-eq="${id}" data-fp="${id}" transform="translate(${x},${y})"><circle r="13"/><text class="ic" y="4.5" text-anchor="middle" style="font-size:12px;font-weight:600">M</text></g>` + T_(x, y + 27, id, 'tagt', 'middle') + ALM(x + 14, y - 14, id + '.TRIP');
  const valve = (x, y, loop, vert = false) => `<g class="valve" data-valve="${loop}" data-fp="${loop}" transform="translate(${x},${y}) rotate(${vert ? 90 : 0})"><path d="M-10,-7 L10,7 L10,-7 L-10,7 Z"/><line x1="0" y1="0" x2="0" y2="-12" stroke="var(--eq)"/><rect x="-6" y="-18" width="12" height="6" fill="var(--panel2)" stroke="var(--eq)"/></g>` +
    `<text x="${x}" y="${y + (vert ? 4 : 22)}" dx="${vert ? 16 : 0}" class="unit" text-anchor="${vert ? 'start' : 'middle'}"><tspan>${VALVE[loop] || ''} </tspan><tspan data-op="${loop}">0</tspan>%</text>`;
  const pipe = (d, flow, thr = 1, cls = '') => `<path class="pipe ${cls}" d="${d}" ${flow ? `data-flow="${flow}" data-thr="${thr}"` : ''}/>`;
  const sig = (d) => `<path class="sig" d="${d}"/>`;
  const tank = (x, y, w, h, tag, name) => `<rect class="vessel" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/><rect class="fill" data-lvl="${tag}" data-y="${y}" data-h="${h}" x="${x + 2}" y="${y}" width="${w - 4}" height="0"/>` + (name ? T_(x + w / 2, y - 6, name, 'tagt', 'middle') : '');
  let cpN = 0;
  const pond = (x, y, w, h, tag, name) => { const id = 'cp' + (++cpN); const pts = `${x},${y} ${x + w},${y} ${x + w - 18},${y + h} ${x + 18},${y + h}`; return `<clipPath id="${id}"><polygon points="${pts}"/></clipPath><polygon class="vessel" points="${pts}"/><rect class="fill" clip-path="url(#${id})" data-lvl="${tag}" data-y="${y}" data-h="${h}" x="${x}" y="${y}" width="${w}" height="0"/>` + (name ? T_(x + w / 2, y - 6, name, 'tagt', 'middle') : ''); };
  const off = (x, y, text, go, dir = 1) => { const w = Math.max(70, text.length * 5.8 + 18); const d = dir > 0 ? `M0,-11 L${w - 10},-11 L${w},0 L${w - 10},11 L0,11 Z` : `M10,-11 L${w},-11 L${w},11 L10,11 L0,0 Z`; return `<g class="off" ${go ? `data-go="${go}"` : ''} transform="translate(${x},${y})"><path d="${d}"/><text x="${dir > 0 ? 6 : 14}" y="3.5">${text}</text></g>`; };
  const btn = (x, y, w, label, act) => `<g class="btn" data-act="${act}" transform="translate(${x},${y})"><rect width="${w}" height="24" rx="3"/><text x="${w / 2}" y="16" text-anchor="middle" style="font-size:11px" data-btxt="${act}">${label}</text></g>`;
  const ai = (x, y, w, tag, label) => `<g class="ai" data-ai="${tag}" data-w="${w}" transform="translate(${x},${y})">${T_(0, 0, label || P.T[tag].desc, 'lbl')}<text x="${w}" y="0" class="val" text-anchor="end"><tspan data-v="${tag}">0</tspan><tspan class="unit"> ${P.T[tag].unit}</tspan></text>` +
    `<rect class="bg" x="0" y="6" width="${w}" height="7"/><rect class="nb" x="0" y="6" width="0" height="7"/><path class="ptr" d="M0,4 L-5,-3 L5,-3 Z" transform="translate(0,9)"/></g>`;

  /* =================== pantallas P&ID =================== */
  const SCREENS = {};
  SCREENS.gen = () => {
    const blk = (x, y, w, h, area, tags) => `<g data-go="a${area}"><rect class="blk" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>${T_(x + 12, y + 22, area + ' · ' + SHORT[area], 'ttl')}` +
      `<text x="${x + w - 12}" y="${y + 22}" text-anchor="end" class="unit" data-k="acount-${area}">—</text>` + tags.map((t, i) => ai(x + 12, y + 50 + i * 42, w - 24, t)).join('') + '</g>';
    return `<svg viewBox="0 0 1200 560" role="img" aria-label="Vista general de la planta">
      ${blk(10, 20, 280, 230, 100, ['WIT-101', 'KY-102', 'AIT-105', 'LIT-103'])}
      ${blk(310, 20, 280, 230, 200, ['FIT-200', 'AIT-206', 'AIT-207', 'LIT-204'])}
      ${blk(610, 20, 280, 230, 300, ['KY-303', 'KY-301', 'AIT-208', 'AIT-309'])}
      ${blk(910, 20, 280, 230, 400, ['IIT-401', 'AIT-405', 'KY-406', 'TIT-403'])}
      ${pipe('M290,135 L310,135', 'WIT-101', 50)}${pipe('M590,120 L610,120', 'FIT-205', 50)}${pipe('M610,150 L590,150', 'FIT-205', 50)}${pipe('M890,120 L910,120', 'KY-304', 0.1)}${pipe('M910,150 L890,150', 'FIT-402', 50)}
      ${T_(150, 272, 'mineral aglomerado →', 'lbl', 'middle')}${T_(600, 272, 'PLS → · ← refino', 'lbl', 'middle')}${T_(900, 272, 'electrolito rico → · ← pobre', 'lbl', 'middle')}
      <g data-go="a500"><rect class="blk" x="10" y="300" width="880" height="160" rx="6"/>${T_(22, 322, '500 · ' + AREAS[500], 'ttl')}<text x="878" y="322" text-anchor="end" class="unit" data-k="acount-500">—</text>
      ${ai(22, 354, 190, 'JIT-500', 'Demanda')}${ai(240, 354, 190, 'KY-501', 'Factor de potencia')}${ai(458, 354, 190, 'LIT-501', 'Stock de ácido')}${ai(676, 354, 190, 'LIT-502', 'Agua de proceso')}
      ${K_(22, 420, 'brk-sum', 'lbl')}</g>
      <rect class="blk" x="910" y="300" width="280" height="160" rx="6"/>${T_(922, 322, 'Cátodo', 'ttl')}
      ${ai(922, 354, 256, 'KY-405')}${ai(922, 396, 256, 'KY-407', 'Energía específica de la nave')}${K_(922, 444, 'quality', 'lbl')}
      ${T_(10, 500, 'Haz clic en un área para abrir su P&ID. Las barras muestran la banda normal de operación en gris oscuro y el valor actual con el indicador.', 'lbl')}
    </svg>`;
  };

  SCREENS.a100 = () => `<svg viewBox="0 0 1200 560" role="img" aria-label="P&ID área 100">
    ${T_(16, 24, '100 · Chancado fino, aglomeración y curado ácido', 'ttl')}
    <polygon class="heap" points="40,262 135,150 230,262"/>${T_(135, 140, 'Acopio de mineral chancado', 'lbl', 'middle')}
    <g class="eq" data-eq="FD-101" data-fp="FD-101"><rect x="92" y="266" width="90" height="20"/></g>${T_(137, 302, 'FD-101 alimentador', 'tagt', 'middle')}${ALM(190, 262, 'FD-101.TRIP')}
    ${V_(137, 318, 'SIT-101', 'middle')}
    <g class="eq" data-eq="CV-101" data-fp="CV-101"><path class="b" d="M180,292 L690,292 L760,252 L760,258 L692,298 L180,298 Z"/></g>
    ${pipe('M185,289 L690,289 L756,250', 'WIT-101', 50, 'thin')}
    ${[230, 300, 370, 440, 510, 580, 650].map((x) => `<circle cx="${x}" cy="304" r="5" fill="var(--panel)" stroke="var(--eq)"/>`).join('')}
    ${T_(420, 330, 'CV-101 correa de alimentación', 'tagt', 'middle')}${ALM(700, 280, 'CV-101.TRIP')}
    <path d="M330,298 L322,312 L338,312 Z" fill="var(--eq)"/>
    ${bub(330, 230, 'WIT-101', {v: 'WIT-101', vx: 0, vy: -24, va: 'middle'})}
    ${bub(137, 380, 'WIC-101', {loop: 'WIC-101'})}${sig('M330,246 L330,380 L154,380')}${sig('M137,363 L137,325')}
    ${tank(430, 50, 70, 100, 'LIT-103', '')}${T_(510, 82, 'TK-103', 'tagt')}${T_(510, 96, 'ácido diario', 'unit')}${V_(510, 116, 'LIT-103')}${ALM(510, 60, 'LIT-103')}
    ${off(310, 100, 'desde TK-501', 'a500', -1)}${pipe('M400,100 L430,100', 'LIT-103', -1)}
    ${pipe('M465,150 L465,176 L526,176', 'FIT-102', 0.5)}${pump(540, 176, 'P-102')}${pipe('M554,176 L610,176', 'FIT-102', 0.5)}
    ${valve(625, 176, 'FFIC-102')}${pipe('M635,176 L800,176 L800,214', 'FIT-102', 0.5)}
    ${bub(700, 130, 'FIT-102', {v: 'FIT-102', vx: 22, vy: 4})}${sig('M700,146 L700,176')}
    ${bub(625, 90, 'FFIC-102', {loop: 'FFIC-102'})}${sig('M625,106 L625,160')}${sig('M684,130 L642,98')}${sig('M346,226 L608,92')}
    ${off(1060, 130, 'agua TK-502', 'a500', -1)}${pipe('M1060,130 L1030,130', 'FIT-104', 1)}${pump(1016, 130, 'P-104', true, -1)}${pipe('M1002,130 L975,130', 'FIT-104', 1)}
    ${valve(960, 130, 'FFIC-104')}${pipe('M950,130 L920,130 L920,214', 'FIT-104', 1)}
    ${bub(880, 90, 'FIT-104', {v: 'FIT-104', vx: -22, vy: 4, va: 'end'})}${sig('M880,106 L880,130 L920,130')}
    ${bub(960, 60, 'FFIC-104', {loop: 'FFIC-104'})}${sig('M960,76 L960,114')}${K_(990, 64, 'ratio-104', 'lbl')}
    <g class="eq drum" data-eq="M-103" data-fp="M-103"><rect x="770" y="214" width="210" height="80" rx="30"/><path class="st" d="M790,226 L960,226 M790,254 L960,254 M790,282 L960,282"/></g>
    ${T_(875, 312, 'AD-101 tambor aglomerador', 'tagt', 'middle')}
    ${motor(875, 350, 'M-103')}${ALM(892, 336, 'M-103.VIB')}
    ${pipe('M980,262 L1110,262', 'WIT-101', 50, 'thin')}${off(1110, 262, 'a pilas', 'a200')}
    ${bub(1050, 312, 'AIT-105', {v: 'AIT-105', vx: 22, vy: 4})}${sig('M1050,296 L1050,262')}
    <rect x="40" y="420" width="560" height="120" rx="6" fill="var(--panel)" stroke="var(--line)"/>
    ${T_(54, 442, 'Dosis real que recibe el mineral', 'ttl')}${V_(54, 468, 'KY-102')}${T_(160, 468, 'consigna', 'lbl')}${K_(220, 468, 'ratio-102b', 'val')}
    ${K_(54, 494, 'ratio-102', 'lbl')}${T_(330, 524, 'El pesómetro está 45 s antes del tambor.', 'lbl')}
    ${btn(54, 506, 260, 'Compensación de retardo', 'delay')}
    <rect x="640" y="420" width="540" height="120" rx="6" fill="var(--panel)" stroke="var(--line)"/>
    ${T_(654, 442, 'Secuencia de partida y enclavamientos', 'ttl')}
    ${T_(654, 466, '1. Tambor M-103 → 2. Correa CV-101 → 3. Alimentador FD-101 → 4. Ácido y agua', 'lbl')}
    ${T_(654, 490, 'Si se detiene la correa, se detienen el alimentador y las bombas de ácido y agua.', 'lbl')}
    ${T_(654, 514, 'El cordón de emergencia de CV-101 exige rearme local antes de volver a partir.', 'lbl')}
  </svg>`;

  SCREENS.a200 = () => {
    let s = `<svg viewBox="0 0 1200 560" role="img" aria-label="P&ID área 200">${T_(16, 24, '200 · Riego de pilas, piscinas de refino y PLS', 'ttl')}`;
    // piscina de refino y reposición
    s += off(14, 62, 'agua TK-502', 'a500') + pipe('M98,62 L155,62', 'FIT-206', 1) + valve(170, 62, 'LIC-201') + pipe('M180,62 L255,62 L255,112', 'FIT-206', 1) + V_(262, 96, 'FIT-206');
    s += bub(340, 62, 'LIC-201', {loop: 'LIC-201'}) + sig('M324,62 L300,62 L300,38 L170,38 L170,44');
    s += off(14, 150, 'refino de SX', 'a300') + pipe('M98,150 L128,150', 'FIT-205', 50);
    s += pond(120, 112, 190, 90, 'LIT-201', '') + T_(215, 222, 'TK-201 piscina de refino', 'tagt', 'middle') + V_(215, 240, 'LIT-201', 'middle') + ALM(312, 226, 'LIT-201');
    // bombas de riego
    s += pipe('M294,190 L320,190', 'FIT-200', 50) + pipe('M320,160 L320,230', 'FIT-200', 50) + pipe('M320,160 L336,160', 'FIT-200', 50) + pipe('M320,230 L336,230', 'FIT-200', 50);
    s += pump(350, 160, 'P-201A', false) + T_(350, 143, 'P-201A', 'tagt', 'middle') + pump(350, 230, 'P-201B', false) + T_(350, 258, 'P-201B', 'tagt', 'middle');
    s += pipe('M364,160 L390,160 L390,230 L364,230', 'FIT-200', 50) + pipe('M390,195 L420,195', 'FIT-200', 50) + pipe('M420,150 L420,410', 'FIT-200', 50);
    s += bub(450, 100, 'PIT-202', {v: 'PIT-202', vx: 22, vy: 4}) + sig('M450,116 L450,150 L420,150');
    [150, 280, 410].forEach((y, k) => {
      const lp = 'FIC-21' + (k + 1), ft2 = 'FIT-21' + (k + 1);
      s += pipe(`M420,${y} L485,${y}`, ft2, 20) + valve(500, y, lp) + pipe(`M510,${y} L620,${y} L620,${y - 40} L860,${y - 40}`, ft2, 20);
      s += bub(570, y - 38, ft2, {v: ft2, vx: 0, vy: -22, va: 'middle'}) + sig(`M570,${y - 22} L570,${y}`) + bub(500, y + 46, lp, {loop: lp}) + sig(`M500,${y + 29} L500,${y + 8}`) + sig(`M554,${y - 38} L516,${y + 40}`);
      for (let d = 650; d <= 850; d += 25) s += `<path d="M${d},${y - 40} L${d},${y - 30}" stroke="var(--pipe)" stroke-width="1.5"/>`;
      s += `<polygon class="heap" points="635,${y + 26} 670,${y - 26} 840,${y - 26} 875,${y + 26}"/>`;
      s += T_(755, y - 4, `Sector ${k + 1} · días ${k * 30} a ${k * 30 + 30}`, 'tagt', 'middle') + K_(755, y + 14, 'sec-' + k, 'val', 'middle');
      s += pipe(`M868,${y + 20} L910,${y + 20}`, 'FIT-203', 50, 'thin');
    });
    s += pipe('M910,170 L910,430', 'FIT-203', 50) + pipe('M910,320 L965,320', 'FIT-203', 50);
    s += bub(950, 120, 'FIT-203', {v: 'FIT-203', vx: 22, vy: 4}) + sig('M934,128 L910,170');
    // piscina PLS
    s += pond(950, 290, 180, 90, 'LIT-204', '') + T_(950, 398, 'TK-202 piscina PLS', 'tagt') + V_(950, 416, 'LIT-204') + K_(950, 434, 'lab-ph', 'lbl') + ALM(1132, 286, 'LIT-204');
    s += bub(990, 235, 'AIT-206', {v: 'AIT-206', vx: 0, vy: -22, va: 'middle'}) + sig('M990,251 L990,290') + bub(1080, 235, 'AIT-207', {v: 'AIT-207', vx: 0, vy: -22, va: 'middle'}) + sig('M1080,251 L1080,290');
    s += bub(1172, 330, 'LIC-204', {loop: 'LIC-204'}) + sig('M1156,330 L1124,330');
    // bombas a SX
    s += pipe('M1100,380 L1100,450', 'FIT-205', 50) + pipe('M990,450 L1100,450', 'FIT-205', 50) + pipe('M990,450 L990,466', 'FIT-205', 50) + pipe('M1070,450 L1070,466', 'FIT-205', 50);
    s += pump(990, 480, 'P-202A', false, -1) + T_(970, 484, 'P-202A', 'tagt', 'end') + pump(1070, 480, 'P-202B', false, -1) + T_(1090, 484, 'P-202B', 'tagt', 'start');
    s += pipe('M990,494 L990,525 L1070,525 L1070,494', 'FIT-205', 50) + pipe('M990,525 L810,525', 'FIT-205', 50) + valve(795, 525, 'FIC-205') + pipe('M785,525 L700,525', 'FIT-205', 50) + off(700, 525, 'a SX', 'a300', -1);
    s += bub(880, 488, 'FIT-205', {v: 'FIT-205', vx: 0, vy: -22, va: 'middle'}) + sig('M880,504 L880,525');
    s += bub(795, 470, 'FIC-205', {loop: 'FIC-205'}) + sig('M795,487 L795,507') + sig('M864,488 L812,474') + sig('M1172,347 L1172,455 L1130,455 L1130,505 L940,505 L940,460 L812,466');
    s += '</svg>';
    return s;
  };

  SCREENS.a300 = () => {
    const ms = (y, mot, name, id) => `<rect class="vessel" x="300" y="${y}" width="60" height="60"/><rect class="vessel" x="360" y="${y}" width="330" height="60"/><rect class="org" x="361" y="${y + 1}" width="328" height="22"/>` +
      `<line x1="330" y1="${y - 18}" x2="330" y2="${y + 40}" stroke="var(--eq)" stroke-width="2"/><path d="M318,${y + 40} L342,${y + 40}" stroke="var(--eq)" stroke-width="4"/>` +
      motor(330, y - 30, mot) + T_(525, y + 50, name, 'tagt', 'middle') + T_(690 - 6, y + 16, 'orgánico', 'unit', 'end') + T_(690 - 6, y + 52, 'acuoso', 'unit', 'end');
    let s = `<svg viewBox="0 0 1200 560" role="img" aria-label="P&ID área 300">${T_(16, 24, '300 · Extracción por solventes: E1 y E2 en contracorriente, S1 reextracción', 'ttl')}`;
    s += ms(90, 'M-301', 'E1 extracción') + ms(250, 'M-302', 'E2 extracción') + ms(430, 'M-303', 'S1 reextracción');
    s += `<rect class="crud" data-crud="1" x="361" y="111" width="328" height="0"/>`;
    // acuoso
    s += off(14, 125, 'PLS de pilas', 'a200') + pipe('M98,125 L300,125', 'FIT-205', 50) + V_(110, 110, 'FIT-205');
    s += pipe('M690,140 L720,140 L720,190 L270,190 L270,290 L300,290', 'FIT-205', 50) + T_(500, 204, 'acuoso E1 → E2', 'unit', 'middle');
    s += pipe('M690,300 L1080,300', 'FIT-205', 50) + off(1080, 300, 'refino a pilas', 'a200');
    s += bub(900, 262, 'AIT-208', {v: 'AIT-208', vx: 22, vy: 4}) + sig('M900,278 L900,300');
    // orgánico E2 → E1
    s += pipe('M690,260 L745,260 L745,172 L250,172 L250,100 L300,100', 'FIT-301', 50, 'thin') + T_(500, 166, 'orgánico E2 → E1', 'unit', 'middle');
    // orgánico cargado a S1
    s += pipe('M690,100 L820,100', 'FIT-301', 50, 'thin') + `<rect class="vessel" x="820" y="70" width="80" height="60" rx="3"/><rect class="fill" x="822" y="94" width="76" height="34"/>` + T_(860, 62, 'TK-306 orgánico cargado', 'tagt', 'middle');
    s += bub(760, 62, 'AIT-302', {v: 'AIT-302', vx: 0, vy: -22, va: 'middle'}) + sig('M760,78 L760,100');
    s += pipe('M900,115 L1160,115 L1160,368 L250,368 L250,450 L300,450', 'FIT-301', 50, 'thin');
    // orgánico descargado
    s += pipe('M690,440 L1050,440', 'FIT-301', 50, 'thin') + `<rect class="vessel" x="1050" y="410" width="80" height="90" rx="3"/><rect class="fill" x="1052" y="440" width="76" height="58"/>` + T_(1090, 404, 'TK-305 orgánico descargado', 'tagt', 'middle');
    s += pipe('M1050,485 L1022,485', 'FIT-301', 50, 'thin') + pump(1008, 485, 'P-305', false, -1) + T_(1008, 468, 'P-305', 'tagt', 'middle') + pipe('M994,485 L990,485 L990,345 L230,345 L230,272 L300,272', 'FIT-301', 50, 'thin');
    s += bub(950, 400, 'FIT-301', {v: 'FIT-301', vx: -22, vy: 4, va: 'end'}) + sig('M966,400 L990,400');
    s += bub(1060, 240, 'FFIC-301', {loop: 'FFIC-301'}) + sig('M1060,257 L1060,330 L1008,330 L1008,471') + sig('M966,394 L1044,246');
    // electrolito
    s += off(14, 475, 'electrolito pobre de EW', 'a400') + pipe('M164,475 L300,475', 'FIT-402', 50);
    s += pipe('M690,480 L720,480 L720,530 L1000,530', 'KY-304', 0.1) + off(1000, 530, 'electrolito rico a EW', 'a400');
    // interfase
    s += bub(560, 62, 'LIT-303', {v: 'LIT-303', vx: 22, vy: 4}) + sig('M560,78 L560,90');
    s += K_(16, 552, 'sx-sum', 'lbl');
    s += '</svg>';
    return s;
  };

  SCREENS.a400 = () => {
    let s = `<svg viewBox="0 0 1200 560" role="img" aria-label="P&ID área 400">${T_(16, 24, '400 · Nave de electroobtención: 160 celdas en serie, 60 cátodos por celda', 'ttl')}`;
    s += `<g class="eq" data-eq="RT-401" data-fp="RT-401"><circle cx="70" cy="80" r="20"/><circle cx="70" cy="108" r="20"/><rect x="40" y="138" width="60" height="44"/></g>`;
    s += `<path d="M56,150 L84,150 M70,150 L70,172 M58,162 L82,162 L70,172 Z" stroke="var(--eq)" fill="none"/>` + T_(70, 198, 'RT-401', 'tagt', 'middle') + ALM(108, 136, 'RT-401.TRIP');
    s += V_(16, 222, 'IIT-401') + V_(16, 240, 'EIT-401') + V_(16, 258, 'JIT-401');
    s += bub(150, 230, 'IIC-401', {loop: 'IIC-401'}) + bub(150, 300, 'AIC-405', {loop: 'AIC-405'}) + sig('M150,284 L150,247') + sig('M134,230 L100,170');
    s += `<path class="bus" d="M100,150 L210,150 L210,60 L230,60"/><path class="bus" d="M100,170 L210,170 L210,330 L1170,330 L1170,280"/>`;
    for (let k = 0; k < 160; k++) { const r = Math.floor(k / 40), c = k % 40; s += `<rect class="cell" data-cell="${k}" x="${246 + c * 22.9}" y="${50 + r * 56}" width="19.5" height="46" rx="1.5"><title>Celda ${k + 1}</title></rect>`; }
    for (let r = 0; r < 4; r++) s += T_(242, 78 + r * 56, String(r * 40 + 1), 'unit', 'end');
    s += K_(232, 290 + 22, 'cells-sum', 'lbl');
    s += btn(860, 296, 300, 'Monitoreo continuo de celdas', 'monitor');
    // circuito de electrolito
    s += tank(240, 380, 110, 120, 'LIT-401', '') + T_(240, 372, 'TK-401 electrolito', 'tagt') + off(14, 400, 'rico desde SX', 'a300') + pipe('M114,400 L240,400', 'KY-304', 0.1);
    s += off(110, 520, 'pobre a SX', 'a300', -1) + pipe('M240,480 L190,480 L190,520 L180,520', 'FIT-402', 50);
    s += pipe('M350,470 L400,470 L400,440 L418,440', 'FIT-402', 50) + pipe('M400,470 L400,500 L418,500', 'FIT-402', 50);
    s += pump(432, 440, 'P-401A', false) + T_(432, 423, 'P-401A', 'tagt', 'middle') + pump(432, 500, 'P-401B', false) + T_(432, 528, 'P-401B', 'tagt', 'middle');
    s += pipe('M446,440 L480,440 L480,500 L446,500', 'FIT-402', 50) + pipe('M480,470 L560,470', 'FIT-402', 50);
    s += `<g transform="translate(590,470)"><circle r="26" class="vessel"/><path d="M-20,8 L-10,-8 L0,8 L10,-8 L20,8" stroke="var(--eq)" fill="none"/></g>` + T_(590, 512, 'HX-401', 'tagt', 'middle');
    s += pipe('M616,470 L700,470 L700,330', 'FIT-402', 50) + bub(650, 420, 'TIT-403', {v: 'TIT-403', vx: 0, vy: -22, va: 'middle'}) + sig('M650,436 L650,470');
    s += pipe('M560,410 L590,410 L590,444', 'TIT-403', 0) + valve(560, 410, 'TIC-403') + T_(500, 400, 'agua caliente', 'lbl', 'end');
    s += bub(560, 360, 'TIC-403', {loop: 'TIC-403'}) + sig('M560,376 L560,396') + sig('M576,360 L660,404');
    s += bub(740, 400, 'FIT-402', {v: 'FIT-402', vx: 0, vy: -22, va: 'middle'}) + sig('M724,400 L700,400');
    s += pipe('M1170,330 L1170,540 L295,540 L295,500', 'FIT-402', 50, 'thin') + T_(1120, 534, 'retorno de celdas', 'unit', 'end');
    // dosificación y sangrado
    s += T_(372, 352, 'cobalto', 'unit', 'end') + pipe('M380,355 L380,365 L330,365 L330,380', 'FIT-404', 1, 'thin') + bub(400, 380, 'FIC-404', {loop: 'FIC-404'});
    s += bub(820, 490, 'FIC-409', {loop: 'FIC-409'}) + valve(880, 505, 'FIC-409') + pipe('M850,540 L850,505 L870,505', 'FIT-409', 0.5, 'thin') + pipe('M890,505 L960,505', 'FIT-409', 0.5, 'thin') + off(960, 505, 'sangrado a refino', 'a200') + sig('M836,490 L880,490');
    // analizadores
    s += `<rect x="790" y="350" width="390" height="110" rx="6" fill="var(--panel)" stroke="var(--line)"/>` + T_(802, 370, 'Analizadores del electrolito', 'ttl');
    s += T_(802, 394, 'Cu', 'lbl') + V_(830, 394, 'AIT-405') + ALM(930, 389, 'AIT-405') + T_(960, 394, 'H₂SO₄', 'lbl') + V_(1010, 394, 'AIT-406') + T_(802, 416, 'Fe', 'lbl') + V_(830, 416, 'AIT-407') + ALM(930, 411, 'AIT-407') + T_(960, 416, 'Co', 'lbl') + V_(1010, 416, 'AIT-408') + ALM(1100, 411, 'AIT-408');
    s += K_(802, 446, 'qual-a', 'lbl');
    s += '</svg>';
    return s;
  };

  SCREENS.a500 = () => {
    const feeder = (x, id, name, load) => `<path class="bus" d="M${x},110 L${x},150" style="stroke-width:2.5"/><g class="brk" data-brk="${id}" data-fp="BRK:${id}" transform="translate(${x},165)"><rect x="-11" y="-11" width="22" height="22"/></g>` + T_(x + 16, 168, id === '52-RT' ? '52-RT' : '52-' + id.replace('MCC-', 'M'), 'tagt') + ALM(x + 14, 148, id + '.OPEN') +
      `<path class="bus" d="M${x},176 L${x},210" style="stroke-width:2.5"/><g transform="translate(${x},222)"><circle r="12" class="vessel"/></g><g transform="translate(${x},240)"><circle r="12" class="vessel"/></g><path class="bus" d="M${x},252 L${x},290" style="stroke-width:2.5"/>` +
      `<rect x="${x - 60}" y="290" width="120" height="44" rx="4" fill="var(--panel)" stroke="var(--eq)" ${id === '52-RT' ? 'data-go="a400"' : ''}/>` + T_(x, 308, name, 'tagt', 'middle') + K_(x, 326, load, 'val', 'middle');
    let s = `<svg viewBox="0 0 1200 560" role="img" aria-label="Diagrama unilineal y servicios">${T_(16, 24, '500 · Diagrama unilineal, ácido y agua de proceso', 'ttl')}`;
    s += T_(60, 50, 'Línea de transmisión', 'lbl') + `<path class="bus" d="M110,56 L110,70" style="stroke-width:2.5"/><g transform="translate(110,82)"><circle r="12" class="vessel"/></g><g transform="translate(110,100)"><circle r="12" class="vessel"/></g>` + T_(130, 92, 'T1 · alta tensión / 23 kV', 'tagt');
    s += `<path class="bus" d="M60,110 L1000,110"/>` + T_(1008, 114, 'Barra 23 kV', 'tagt');
    s += feeder(140, '52-RT', 'Transformador RT-401', 'p-rt') + feeder(320, 'MCC-100', 'MCC-100', 'p-m100') + feeder(480, 'MCC-200', 'MCC-200', 'p-m200') + feeder(640, 'MCC-300', 'MCC-300', 'p-m300') + feeder(800, 'MCC-400', 'MCC-400', 'p-m400');
    s += `<path class="bus" d="M940,110 L940,150" style="stroke-width:2.5"/><g class="btn" data-act="cap" transform="translate(890,150)"><rect width="100" height="24" rx="3"/><text x="50" y="16" text-anchor="middle" style="font-size:11px" data-btxt="cap">Filtro y CCEE</text></g>`;
    s += `<path d="M925,180 L955,180 M925,188 L955,188 M940,174 L940,180 M940,188 L940,200" stroke="var(--eq)" stroke-width="2"/>` + T_(940, 216, 'filtro de 5.ª y 7.ª armónica', 'unit', 'middle');
    s += `<rect x="860" y="236" width="320" height="100" rx="6" fill="var(--panel)" stroke="var(--line)"/>` + T_(872, 256, 'Medidor de la barra', 'ttl');
    s += V_(872, 280, 'JIT-500') + T_(980, 280, 'demanda', 'lbl') + V_(872, 302, 'KY-501') + T_(980, 302, 'factor de potencia', 'lbl') + ALM(1160, 296, 'KY-501') + V_(872, 324, 'KY-502') + T_(980, 324, 'THD de corriente', 'lbl');
    // ácido
    s += tank(60, 400, 110, 120, 'LIT-501', 'TK-501 bodega de ácido') + V_(180, 430, 'LIT-501') + ALM(240, 424, 'LIT-501') + K_(180, 452, 'trucks', 'lbl');
    s += btn(180, 470, 170, 'Recibir camión (30 t)', 'truck');
    s += pipe('M170,505 L370,505', 'LIT-103', -1, 'thin') + pump(384, 505, 'P-501', false) + T_(384, 488, 'P-501', 'tagt', 'middle') + pipe('M398,505 L460,505', '', 0) + off(460, 505, 'a TK-103', 'a100');
    // agua
    s += pond(620, 420, 160, 80, 'LIT-502', 'TK-502 agua de proceso') + V_(700, 520, 'LIT-502', 'middle') + pipe('M780,450 L880,450', 'FIT-206', 1) + off(880, 450, 'reposición y tambor', 'a200');
    s += T_(540, 438, 'aducción', 'lbl', 'end') + pipe('M545,440 L620,440', 'LIT-502', -1);
    s += '</svg>';
    return s;
  };

  /* =================== paneles laterales =================== */
  const sidePanels = {};
  const areaAlarmList = (area) => {
    const al = P.AD.filter((a) => (a.st === 'U' || a.st === 'A') && (!area || a.area === area)).sort((a, b) => a.prio - b.prio || b.since - a.since).slice(0, 8);
    if (!al.length) return '<p class="muted small" style="margin:0">Sin alarmas activas.</p>';
    return '<div class="tblw"><table><tbody>' + al.map((a) => `<tr><td><span class="pr p${a.prio} ${a.st === 'U' ? 'blink' : ''}">${a.prio}</span></td><td class="small">${esc(a.desc)}</td></tr>`).join('') + '</tbody></table></div>';
  };
  const equipList = (area) => {
    const eqs = Object.values(P.M).filter((m) => m.area === area);
    if (area === 400) eqs.unshift({id: 'RT-401', desc: 'Rectificador de la nave', state: P.RECT.state});
    return '<div class="tblw"><table><tbody>' + eqs.map((m) => `<tr data-fp="${m.id}" style="cursor:pointer"><td class="mono">${m.id}</td><td class="small">${esc(m.desc)}</td><td class="small">${stTxt(m.state, m)}</td></tr>`).join('') + '</tbody></table></div>';
  };
  const stTxt = (st, m) => st === 'RUN' ? 'En marcha' : (st === 'TRIP' ? (m && m.trip === 'reset' ? 'Rearmado' : '<b style="color:var(--p1)">Disparado</b>') : (m && m.maintUntil ? 'En mantención' : (m && m.standby ? 'Respaldo' : 'Detenido')));
  const areaKPI = {
    gen: () => [['Cátodo ahora', f(tv('KY-405'), 2) + ' t/h'], ['Cátodo en el turno', f(P.X.cathShift, 1) + ' t'], ['Plan del turno a la hora', f(P.X.plannedShift, 1) + ' t'], ['Energía específica', f(tv('KY-407')) + ' kWh/t'], ['Eficiencia de corriente', f(tv('KY-406'), 1) + ' %'], ['Demanda eléctrica', f(tv('JIT-500'), 1) + ' MW']],
    a100: () => [['Mineral al tambor', f(P.X.tonDrum) + ' t/h'], ['Dosis real', ft('KY-102') + ' kg/t'], ['Humedad', ft('AIT-105') + ' %'], ['Ácido consumido en el turno', f(P.X.acidShift) + ' t']],
    a200: () => [['Riego total', ft('FIT-200') + ' m³/h'], ['Cobre que entrega la pila', f(P.X.leach / 1000, 2) + ' t/h'], ['Cu en PLS', ft('AIT-206') + ' g/L'], ['pH (analizador / lab.)', ft('AIT-207') + ' / ' + f(P.X.labPH, 2)]],
    a300: () => [['Extracción', ft('KY-303') + ' %'], ['Razón O/A', ft('KY-301')], ['Orgánico cargado / descargado', f(P.X.yL, 2) + ' / ' + f(P.X.ys, 2) + ' g/L'], ['Cobre al electrolito', ft('KY-304') + ' t/h']],
    a400: () => [['Corriente', ft('IIT-401') + ' kA'], ['Densidad de corriente', ft('KY-401') + ' A/m²'], ['Producción', ft('KY-405') + ' t/h'], ['Eficiencia de corriente', ft('KY-406') + ' %'], ['Energía específica', ft('KY-407') + ' kWh/t'], ['Cortocircuitos conocidos', String(knownShorts())]],
    a500: () => [['Demanda total', ft('JIT-500') + ' MW'], ['Rectificador', f(P.RECT.P / 0.975, 1) + ' MW'], ['Motores', f(P.X.mccKW / 1000, 2) + ' MW'], ['Factor de potencia', ft('KY-501')], ['Energía en el turno', f(P.X.energyShift) + ' MWh']]
  };
  const knownShorts = () => { let n = 0; for (let k = 0; k < P.NCELL; k++) if (P.X.shorts[k] > 0 && (P.X.monitor || P.X.seen[k])) n++; return n; };
  const areaOf = (scr) => ({a100: 100, a200: 200, a300: 300, a400: 400, a500: 500}[scr] || null);
  const sideDefault = () => {
    const ar = areaOf(state.screen);
    const kpi = (areaKPI[state.screen] || areaKPI.gen)();
    let h = `<h2>${ar ? ar + ' · ' + AREAS[ar] : 'Planta completa'}</h2><div class="box"><div class="kv">${kpi.map(([k, v]) => `<span>${k}</span><b>${v}</b>`).join('')}</div></div>`;
    h += `<h3>Alarmas activas</h3>${areaAlarmList(ar)}`;
    if (ar) h += `<h3>Equipos</h3>${equipList(ar)}`;
    else h += `<p class="small muted" style="margin:0">Haz clic en un equipo, una válvula o un controlador (círculo dentro de un cuadrado) para abrir su panel de control.</p>`;
    return h;
  };

  /* faceplate de lazo */
  const fpLoop = (id) => {
    const c = P.L[id], pv = LOOP_PV[id], t = P.T[pv], sp = c.sp_();
    const pct = (v) => Math.max(0, Math.min(100, (v - t.lo) / (t.hi - t.lo) * 100));
    let h = `<div class="row"><h2 style="flex:1">${id}</h2><button data-close-fp>Cerrar</button></div><p class="small muted" style="margin:0">${esc(c.desc)}</p>`;
    h += `<div class="grp">${c.modes.map((m) => `<button data-mode="${m}" class="${c.mode === m ? 'on' : ''}">${m === 'MAN' ? 'Manual' : m === 'AUTO' ? 'Automático' : 'Cascada'}</button>`).join('')}</div>`;
    h += `<div class="fpbars"><div><div class="b"><i style="height:${pct(t.v)}%"></i><u style="bottom:${pct(sp)}%"></u></div>PV<b>${f(t.v, t.dec)}</b></div><div><div class="b"><i style="height:${pct(sp)}%;background:var(--sel)"></i></div>SP<b>${f(sp, t.dec)}</b></div><div><div class="b"><i style="height:${c.op}%"></i></div>Salida<b>${f(c.op, 1)} %</b></div></div>`;
    h += `<div class="small muted">Unidad: ${t.unit || '—'} · Rango ${f(t.lo, t.dec)} a ${f(t.hi, t.dec)}${c.mode === 'CAS' ? ' · consigna externa' : ''}</div>`;
    if (c.ratio != null) h += `<div class="row"><label class="small">Razón (${c.ratioUnit})</label><input id="fp-ratio" type="number" step="any" value="${c.ratio}" style="width:90px"><button data-set="ratio">Aplicar</button></div>`;
    h += `<div class="row"><label class="small">Consigna</label><input id="fp-sp" type="number" step="any" value="${+c.sp.toFixed(3)}" style="width:90px"><button data-set="sp">Aplicar</button></div>`;
    h += `<div class="row"><label class="small">Salida manual %</label><input id="fp-op" type="number" step="1" min="0" max="100" value="${c.op.toFixed(0)}" style="width:90px" ${c.mode !== 'MAN' ? 'disabled' : ''}><button data-set="op" ${c.mode !== 'MAN' ? 'disabled' : ''}>Aplicar</button></div>`;
    h += `<div class="small muted">Sintonía: Kp ${c.kp} · Ti ${c.ti} s · acción ${c.act === 'dir' ? 'directa' : 'inversa'}</div>`;
    h += `<canvas id="fp-trend" height="130" style="width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:4px"></canvas><div class="small muted">Últimos 30 min: PV (línea) y consigna actual (segmentada).</div>`;
    return h;
  };
  const fpMotor = (id) => {
    if (id === 'RT-401') {
      const R = P.RECT, perms = P.perms['RT-401']();
      return `<div class="row"><h2 style="flex:1">RT-401</h2><button data-close-fp>Cerrar</button></div><p class="small muted" style="margin:0">Rectificador de tiristores, 12 pulsos. Estado: <b>${stTxt(R.state)}</b>${R.trip ? ' · ' + esc(R.trip) : ''}</p>
        <div class="row"><button data-cmd="start">Poner en servicio</button><button data-cmd="stop">Sacar de servicio</button><button data-cmd="reset">Rearmar</button></div>
        <div class="box"><div class="kv"><span>Corriente</span><b>${ft('IIT-401')} kA</b><span>Voltaje</span><b>${ft('EIT-401')} V</b><span>Potencia DC</span><b>${ft('JIT-401')} MW</b><span>Rampa máxima</span><b>2 kA/min</b></div></div>
        <h3>Permisivos</h3><ul class="perm">${perms.map(([t, ok]) => `<li class="${ok ? '' : 'no'}">${esc(t)}</li>`).join('')}</ul><button data-fp2="IIC-401">Abrir lazo IIC-401</button>`;
    }
    const m = P.M[id]; const perms = P.perms[id] ? P.perms[id]() : [];
    const zone = (v) => v < 2.3 ? 'A' : v < 4.5 ? 'B' : v < 7.1 ? 'C' : 'D';
    let h = `<div class="row"><h2 style="flex:1">${id}</h2><button data-close-fp>Cerrar</button></div><p class="small muted" style="margin:0">${esc(m.desc)} · ${m.kw} kW · ${m.mcc}</p>`;
    h += `<div class="small">Estado: <b>${stTxt(m.state, m)}</b>${m.trip && m.trip !== 'reset' ? ' · causa: ' + esc(m.trip) : ''}${m.ilk ? ' · última parada por enclavamiento: ' + esc(m.ilk) : ''}</div>`;
    h += `<div class="row"><button data-cmd="start" ${m.maintUntil ? 'disabled' : ''}>Partir</button><button data-cmd="stop">Detener</button><button data-cmd="reset" ${m.state !== 'TRIP' ? 'disabled' : ''}>Rearmar</button></div>`;
    if (/B$/.test(id)) h += `<label class="small row"><input type="checkbox" data-standby ${m.standby ? 'checked' : ''}> Respaldo automático si falla la bomba A</label>`;
    h += `<div class="box"><div class="kv"><span>Corriente</span><b>${f(m.amps)} A</b><span>Vibración</span><b>${f(m.vib, 1)} mm/s · zona ${zone(m.vib)}</b><span>Temperatura de rodamiento</span><b>${f(m.temp)} °C</b><span>Horas de marcha</span><b>${f(m.hours)} h</b><span>Partidas</span><b>${m.starts}</b><span>Horas desde la última PM</span><b>${f(m.sincePM)} / ${m.pmEvery} h</b></div></div>`;
    if (perms.length) h += `<h3>Permisivos de partida</h3><ul class="perm">${perms.map(([t, ok]) => `<li class="${ok ? '' : 'no'}">${esc(t)}</li>`).join('')}</ul>`;
    return h;
  };
  const fpBreaker = (id) => `<div class="row"><h2 style="flex:1">Interruptor ${id}</h2><button data-close-fp>Cerrar</button></div><p class="small">Estado: <b>${P.BRK[id] ? 'Cerrado' : 'Abierto'}</b></p><div class="row"><button data-brk-set="1">Cerrar</button><button data-brk-set="0">Abrir</button></div><p class="small muted" style="margin:0">Al cerrar un MCC no parten solos los motores: el operador debe partirlos en secuencia.</p>`;
  const fpCell = (k) => {
    const sh = P.X.shorts[k], known = P.X.monitor || P.X.seen[k], fx = P.X.fixing.find((x) => x.k === k);
    return `<div class="row"><h2 style="flex:1">Celda ${k + 1}</h2><button data-close-fp>Cerrar</button></div>
      <div class="box"><div class="kv"><span>Voltaje</span><b>${P.X.monitor ? f(P.X.cellV(k), 2) + ' V' : 'sin medición continua'}</b><span>Estado</span><b>${fx ? 'En corrección' : known && sh > 0 ? 'Cortocircuito detectado' : known ? 'Normal' : 'Desconocido hasta la próxima ronda'}</b></div></div>
      <button data-fixcell="${k}" ${!(known && sh > 0) || fx ? 'disabled' : ''}>Enviar cuadrilla a corregir</button>`;
  };
  const renderSide = () => {
    const sd = $('side');
    if (!state.sel) { sd.innerHTML = sideDefault(); return; }
    const s = state.sel;
    if (P.L[s]) sd.innerHTML = fpLoop(s);
    else if (P.M[s] || s === 'RT-401') sd.innerHTML = fpMotor(s);
    else if (s.startsWith('BRK:')) sd.innerHTML = fpBreaker(s.slice(4));
    else if (s.startsWith('CELL:')) sd.innerHTML = fpCell(+s.slice(5));
    drawFpTrend();
  };
  const drawFpTrend = () => {
    const cv = $('fp-trend'); if (!cv || !P.L[state.sel]) return;
    const pv = LOOP_PV[state.sel], t = P.T[pv], d = P.histGet(pv, 1800);
    const W = cv.clientWidth, H = 130, dp = devicePixelRatio || 1; cv.width = W * dp; cv.height = H * dp; const x = cv.getContext('2d'); x.setTransform(dp, 0, 0, dp, 0, 0);
    if (d.length < 2) return;
    let lo = Math.min(...d.map((p) => p[1]), P.L[state.sel].sp_()), hi = Math.max(...d.map((p) => p[1]), P.L[state.sel].sp_()); const pad = (hi - lo) * 0.15 || Math.abs(hi) * 0.05 || 1; lo -= pad; hi += pad;
    const X = (tt) => 4 + (W - 8) * (1 - (P.S.t - tt) / 1800), Y = (v) => 8 + (H - 16) * (hi - v) / (hi - lo);
    x.strokeStyle = css('--line'); x.beginPath(); x.moveTo(0, Y(lo)); x.lineTo(W, Y(lo)); x.stroke();
    x.setLineDash([4, 4]); x.strokeStyle = css('--sel'); x.beginPath(); x.moveTo(0, Y(P.L[state.sel].sp_())); x.lineTo(W, Y(P.L[state.sel].sp_())); x.stroke(); x.setLineDash([]);
    x.strokeStyle = css('--txt'); x.lineWidth = 1.5; x.beginPath(); d.forEach(([tt, v], i) => i ? x.lineTo(X(tt), Y(v)) : x.moveTo(X(tt), Y(v))); x.stroke();
    x.fillStyle = css('--muted'); x.font = `10px ${css('--mono')}`; x.fillText(f(hi, t.dec), 4, 10); x.fillText(f(lo, t.dec), 4, H - 2);
  };

  /* =================== alarmas, tendencias, mantenimiento, gerencia =================== */
  const pageAlarms = () => {
    const fa = state.alFilter || 0;
    const act = P.AD.filter((a) => (a.st !== 'N') && (!fa || a.area === fa)).sort((a, b) => a.prio - b.prio || b.since - a.since);
    const shH = Math.max(0.05, ((P.now() - 8 * 3600) % 28800) / 3600);
    const rate = P.X.alarmsShift / shH;
    const top = P.AD.filter((a) => a.count > 0).sort((a, b) => b.count - a.count).slice(0, 6);
    const shelved = P.AD.filter((a) => a.shelved && P.S.t < a.shelved);
    let h = `<div class="page"><div class="row"><h2 style="margin:0;font-size:1.05rem;flex:1">Resumen de alarmas</h2><label class="small">Área <select id="al-f"><option value="0">Todas</option>${Object.keys(AREAS).map((k) => `<option value="${k}" ${+k === fa ? 'selected' : ''}>${k} · ${AREAS[k]}</option>`).join('')}</select></label><button data-ackall>Reconocer visibles</button></div>`;
    h += `<div class="cards"><div class="card ${rate > 12 ? 'bad' : rate > 6 ? 'warn' : ''}"><div class="l">Alarmas por hora en el turno</div><div class="v">${f(rate, 1)}</div><div class="s">ISA-18.2: ~6/h aceptable · ~12/h máximo manejable</div></div>
      <div class="card"><div class="l">Activas</div><div class="v">${act.filter((a) => a.st !== 'R').length}</div><div class="s">${act.filter((a) => a.st === 'U').length} sin reconocer</div></div>
      <div class="card"><div class="l">Inhibidas temporalmente</div><div class="v">${shelved.length}</div><div class="s">vuelven solas al vencer el plazo</div></div></div>`;
    h += `<div class="tblw"><table><thead><tr><th>Hora</th><th>Prior.</th><th>Área</th><th>Tag</th><th>Descripción</th><th>Estado</th><th></th></tr></thead><tbody>`;
    h += act.length ? act.map((a) => `<tr><td class="mono">${P.hm(a.since)}</td><td><span class="pr p${a.prio} ${a.st === 'U' ? 'blink' : ''}">${a.prio}</span></td><td>${a.area}</td><td class="mono">${esc(a.tag)}</td><td>${esc(a.desc)}</td><td class="small">${{U: 'Activa sin reconocer', A: 'Activa reconocida', R: 'Normalizada sin reconocer'}[a.st]}</td><td><div class="row"><button data-ack="${esc(a.id)}">Reconocer</button><button data-shelve="${esc(a.id)}">Inhibir 1 h</button></div></td></tr>`).join('') : '<tr><td colspan="7" class="muted">Sin alarmas.</td></tr>';
    h += `</tbody></table></div><h3 style="margin:0;font-size:.85rem">Alarmas más frecuentes (candidatas a racionalización)</h3><div class="tblw"><table><thead><tr><th>Tag</th><th>Descripción</th><th>Veces</th></tr></thead><tbody>${top.length ? top.map((a) => `<tr><td class="mono">${esc(a.tag)}</td><td>${esc(a.desc)}</td><td class="num">${a.count}</td></tr>`).join('') : '<tr><td colspan="3" class="muted">Aún no hay repeticiones.</td></tr>'}</tbody></table></div></div>`;
    return h;
  };
  const PEN_COLORS = ['--sel', '--p2', '--diag', '--p1'];
  const pageTrends = () => {
    const opts = Object.values(P.T).map((t) => `<option value="${t.id}">${t.id} · ${esc(t.desc)}</option>`).join('');
    let h = `<div class="page"><div class="row"><h2 style="margin:0;font-size:1.05rem;flex:1">Tendencias</h2><span class="grp">${[[1800, '30 min'], [7200, '2 h'], [28800, '8 h']].map(([w, l]) => `<button data-win="${w}" class="${state.trend.win === w ? 'on' : ''}">${l}</button>`).join('')}</span></div>`;
    h += `<div class="cards">${state.trend.pens.map((p, i) => `<div class="card" style="border-left:4px solid var(${PEN_COLORS[i]})"><select data-pen="${i}" style="width:100%">${opts.replace(`value="${p}"`, `value="${p}" selected`)}</select><div class="v" data-pv="${i}">—</div></div>`).join('')}</div>`;
    h += `<canvas id="tr-cv" height="380" style="width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:6px"></canvas><div class="small muted">Cada pluma usa su propia escala (mínimo y máximo de la ventana). Historiador con una muestra cada 10 s simulados.</div></div>`;
    return h;
  };
  const drawTrends = () => {
    const cv = $('tr-cv'); if (!cv) return;
    const W = cv.clientWidth, H = 380, dp = devicePixelRatio || 1; cv.width = W * dp; cv.height = H * dp; const x = cv.getContext('2d'); x.setTransform(dp, 0, 0, dp, 0, 0);
    const win = state.trend.win, mg = {l: 10, r: 10, t: 14, b: 22};
    x.strokeStyle = css('--line'); x.fillStyle = css('--muted'); x.font = `10px ${css('--mono')}`;
    for (let i = 0; i <= 6; i++) { const xx = mg.l + (W - mg.l - mg.r) * i / 6; x.beginPath(); x.moveTo(xx, mg.t); x.lineTo(xx, H - mg.b); x.stroke(); const tt = P.now() - win * (1 - i / 6); x.textAlign = 'center'; x.fillText(P.hm(tt), Math.min(Math.max(xx, 20), W - 20), H - 6); }
    state.trend.pens.forEach((p, i) => {
      const d = P.histGet(p, win); if (d.length < 2) return;
      let lo = Math.min(...d.map((q) => q[1])), hi = Math.max(...d.map((q) => q[1])); const pad = (hi - lo) * 0.1 || Math.abs(hi) * 0.05 || 1; lo -= pad; hi += pad;
      const X = (tt) => mg.l + (W - mg.l - mg.r) * (1 - (P.S.t - tt) / win), Y = (v) => mg.t + (H - mg.t - mg.b) * (hi - v) / (hi - lo);
      x.strokeStyle = css(PEN_COLORS[i]); x.lineWidth = 1.6; x.beginPath(); d.forEach(([tt, v], k) => k ? x.lineTo(X(tt), Y(v)) : x.moveTo(X(tt), Y(v))); x.stroke();
      x.fillStyle = css(PEN_COLORS[i]); x.textAlign = 'left'; x.fillText(`${p}  ${f(hi, P.T[p].dec)} / ${f(lo, P.T[p].dec)}`, mg.l + 4 + i * Math.min(220, (W - 20) / 4), mg.t - 2 + 12);
    });
  };

  const pageMaint = () => {
    const zone = (v) => v < 2.3 ? 'A' : v < 4.5 ? 'B' : v < 7.1 ? 'C' : 'D';
    const health = (m) => Math.max(0, Math.round(100 - Math.max(0, m.vib - 2.3) * 12 - Math.max(0, m.temp - 70) * 2 - (m.sincePM > m.pmEvery ? 15 : 0) - (m.state === 'TRIP' ? 30 : 0)));
    const eqs = Object.values(P.M).sort((a, b) => health(a) - health(b));
    // avisos
    const N = [];
    eqs.forEach((m) => {
      const d = P.histGet('VIT-' + m.id, 3600);
      let slope = 0; if (d.length > 20 && m.state === 'RUN') { const a = d[0], b = d[d.length - 1]; slope = (b[1] - a[1]) / ((b[0] - a[0]) / 3600); }
      if (m.state === 'RUN' && (m.vib > 4.5 || (slope > 0.4 && m.vib > 2.8))) {
        const eta = slope > 0.05 ? Math.max(0, (7.1 - m.vib) / slope) : null;
        N.push({p: m.vib > 7.1 ? 2 : 3, t: `${m.id} · ${m.desc}`, d: `Vibración ${f(m.vib, 1)} mm/s (zona ${zone(m.vib)} de ISO 10816-3), sube ${f(slope, 2)} mm/s por hora.${eta != null ? ` A este ritmo entra en zona D en unas ${f(eta, 1)} h.` : ''} Patrón típico de daño de rodamiento.`, a: m.id === 'M-103' ? '<button data-mact="bearing">Cambiar rodamiento (detiene 30 min)</button>' : ''});
      }
      if (m.state === 'TRIP') N.push({p: 2, t: `${m.id} disparado`, d: `Causa registrada: ${esc(m.trip || '—')}. Inspeccionar antes de rearmar.`, a: ''});
      if (m.sincePM > m.pmEvery) N.push({p: 3, t: `${m.id}: mantención preventiva vencida`, d: `${f(m.sincePM)} h desde la última PM (frecuencia ${m.pmEvery} h).`, a: ''});
    });
    const dev = Math.abs(tv('AIT-207') - P.X.labPH);
    if (dev > 0.1) N.push({p: 3, t: 'AIT-207 · pHmetro del PLS', d: `El analizador marca ${ft('AIT-207')} y el laboratorio ${f(P.X.labPH, 2)} (muestra de las ${P.hm(P.S.t0 + P.X.labT)}). Desviación de ${f(dev, 2)} pH: electrodo descalibrado.`, a: '<button data-mact="calibrate">Calibrar con tampones</button>'});
    if (tv('AIT-309') > 400) N.push({p: 2, t: 'E1 · borra en la interfase', d: `Arrastre de ${ft('AIT-309')} ppm hacia el electrolito y hierro en ${ft('AIT-407')} mg/L. Retirar la borra del decantador.`, a: '<button data-mact="crud">Retirar borra</button>'});
    if (!P.X.hxOk) N.push({p: 2, t: 'HX-401 sin transferencia de calor', d: `La válvula TCV-403 abre y la temperatura no sube (${ft('TIT-403')} °C). Revisar el intercambiador.`, a: '<button data-mact="hx">Reparar HX-401</button>'});
    const ks = knownShorts(), hidden = P.X.monitor ? 0 : (() => { let n = 0; for (let k = 0; k < P.NCELL; k++) if (P.X.shorts[k] > 0 && !P.X.seen[k]) n++; return n; })();
    if (ks > 0) N.push({p: 3, t: `Nave EW: ${ks} celdas con cortocircuito identificadas`, d: `Pérdida estimada por cortocircuitos en el turno: ${f(P.X.lostShorts, 2)} t de cobre (US$ ${f(P.X.lostShorts * P.CU_PRICE)}).`, a: '<button data-mact="cells">Corregir todas las identificadas</button>'});
    let h = `<div class="page"><h2 style="margin:0;font-size:1.05rem">Mantenimiento · condición de equipos</h2>`;
    h += `<div class="cards"><div class="card"><div class="l">Avisos abiertos</div><div class="v">${N.length}</div></div><div class="card"><div class="l">Equipos disparados</div><div class="v">${eqs.filter((m) => m.state === 'TRIP').length}</div></div><div class="card ${!P.X.monitor ? 'warn' : ''}"><div class="l">Monitoreo de celdas EW</div><div class="v" style="font-size:1rem">${P.X.monitor ? 'Continuo' : 'Ronda cada 4 h'}</div><div class="s">${P.X.monitor ? 'cada cortocircuito se ve al aparecer' : hidden + ' cortocircuitos aún no detectados'}</div><button data-mact="monitor" style="margin-top:6px">${P.X.monitor ? 'Volver a rondas' : 'Activar monitoreo continuo'}</button></div></div>`;
    h += `<h3 style="margin:0;font-size:.85rem">Avisos de mantenimiento</h3>` + (N.length ? N.sort((a, b) => a.p - b.p).map((n) => `<div class="notice p${n.p}"><b>${esc(n.t)}</b><span class="small">${n.d}</span>${n.a ? `<div class="row">${n.a}</div>` : ''}</div>`).join('') : '<p class="muted small" style="margin:0">Sin avisos.</p>');
    h += `<h3 style="margin:0;font-size:.85rem">Equipos rotativos</h3><div class="tblw"><table><thead><tr><th>Equipo</th><th>Estado</th><th>Salud</th><th>Vibración (ISO 10816-3)</th><th>Temp.</th><th>Horas</th><th>Partidas</th><th>PM</th></tr></thead><tbody>`;
    h += eqs.map((m) => { const hl = health(m); return `<tr data-msel="${m.id}" style="cursor:pointer;${state.maintSel === m.id ? 'background:var(--panel)' : ''}"><td><span class="mono">${m.id}</span><div class="small muted">${esc(m.desc)}</div></td><td class="small">${stTxt(m.state, m)}</td><td><div class="hbar"><i style="width:${hl}%;background:${hl < 50 ? 'var(--p1)' : hl < 75 ? 'var(--p2)' : 'var(--run)'}"></i></div><span class="small mono">${hl} %</span></td>` +
      `<td><div class="zone"><span style="background:var(--band)"></span><span style="background:var(--bar)"></span><span style="background:var(--p3)"></span><span style="background:var(--p1)"></span><em style="left:${Math.min(98, m.vib / 9.5 * 100)}%"></em></div><span class="small mono">${f(m.vib, 1)} mm/s · ${zone(m.vib)}</span></td><td class="num">${f(m.temp)} °C</td><td class="num">${f(m.hours)}</td><td class="num">${m.starts}</td><td class="num">${f(m.sincePM)}/${m.pmEvery}</td></tr>`; }).join('');
    h += `</tbody></table></div><h3 style="margin:0;font-size:.85rem">Vibración de ${state.maintSel} · últimas 8 h</h3><canvas id="mt-cv" height="180" style="width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:6px"></canvas><div class="small muted">Zonas de ISO 10816-3, máquinas del grupo 1 sobre base rígida: A/B 2,3 · B/C 4,5 · C/D 7,1 mm/s RMS.</div></div>`;
    return h;
  };
  const drawMaint = () => {
    const cv = $('mt-cv'); if (!cv) return;
    const W = cv.clientWidth, H = 180, dp = devicePixelRatio || 1; cv.width = W * dp; cv.height = H * dp; const x = cv.getContext('2d'); x.setTransform(dp, 0, 0, dp, 0, 0);
    const d = P.histGet('VIT-' + state.maintSel, 28800), mg = {l: 34, r: 8, t: 8, b: 18}, hi = 10;
    const Y = (v) => mg.t + (H - mg.t - mg.b) * (hi - v) / hi, X = (tt) => mg.l + (W - mg.l - mg.r) * (1 - (P.S.t - tt) / 28800);
    [[0, 2.3, '--band'], [2.3, 4.5, '--bar'], [4.5, 7.1, '--p3'], [7.1, 10, '--p1']].forEach(([a, b, c]) => { x.globalAlpha = c === '--band' || c === '--bar' ? .5 : .18; x.fillStyle = css(c); x.fillRect(mg.l, Y(b), W - mg.l - mg.r, Y(a) - Y(b)); });
    x.globalAlpha = 1; x.fillStyle = css('--muted'); x.font = `10px ${css('--mono')}`; x.textAlign = 'right'; [0, 2.3, 4.5, 7.1].forEach((v) => x.fillText(f(v, 1), mg.l - 4, Y(v) + 3));
    if (d.length > 1) { x.strokeStyle = css('--txt'); x.lineWidth = 1.6; x.beginPath(); d.forEach(([tt, v], i) => i ? x.lineTo(X(tt), Y(Math.min(hi, v))) : x.moveTo(X(tt), Y(Math.min(hi, v)))); x.stroke(); }
  };

  const pageMgmt = () => {
    const X = P.X, shH = Math.max(0.05, ((P.now() - 8 * 3600) % 28800) / 3600);
    const kwh = X.cathShift > 0.1 ? X.energyShift * 1000 / X.cathShift : 0;
    const acidKg = X.oreShift > 1 ? X.acidShift * 1000 / X.oreShift : 0;
    const proj = X.cathShift / shH * 8, plan8 = 6.45 * 8;
    const gap = Math.max(0, X.plannedShift - X.cathShift), other = Math.max(0, gap - X.lostShorts - X.lostRect);
    const rate = X.alarmsShift / shH;
    const avail = 100 * (1 - X.downShift / shH);
    const card = (l, v, s, cls = '') => `<div class="card ${cls}"><div class="l">${l}</div><div class="v">${v}</div><div class="s">${s}</div></div>`;
    let h = `<div class="page"><div class="row"><h2 style="margin:0;font-size:1.05rem;flex:1">Gerencia · turno ${P.shiftOf()} en curso (${f(shH, 1)} h de 8)</h2></div><div class="cards">`;
    h += card('Cátodo producido', f(X.cathShift, 1) + ' t', `plan a la hora: ${f(X.plannedShift, 1)} t · ${f(X.plannedShift > 0 ? 100 * X.cathShift / X.plannedShift : 0)} %`, X.cathShift < X.plannedShift * 0.95 ? 'warn' : '');
    h += card('Proyección al cierre del turno', f(proj) + ' t', `plan del turno: ${f(plan8)} t`, proj < plan8 * 0.95 ? 'warn' : '');
    h += card('Ingreso del turno', 'US$ ' + f(X.cathShift * P.CU_PRICE / 1000) + ' mil', 'cobre a US$ 6,5/lb');
    h += card('Energía específica de la planta', f(kwh) + ' kWh/t', `nave EW: ${ft('KY-407')} kWh/t · costo de energía del turno US$ ${f(X.energyShift * P.E_PRICE)}`);
    h += card('Eficiencia de corriente', ft('KY-406') + ' %', 'cobre depositado / máximo por Faraday', tv('KY-406') < 88 ? 'warn' : '');
    h += card('Disponibilidad de la nave', f(avail, 1) + ' %', 'tiempo con el rectificador en servicio', avail < 98 ? 'warn' : '');
    h += card('Consumo de ácido', f(acidKg, 1) + ' kg/t', 'por tonelada de mineral aglomerado');
    h += card('Alarmas por hora', f(rate, 1), 'ISA-18.2: ~6/h aceptable, ~12/h máximo', rate > 12 ? 'bad' : rate > 6 ? 'warn' : '');
    h += card('Calidad estimada del cátodo', X.quality ? 'Grado A' : 'Fuera de norma', `Pb ${f(X.Pb, 1)} · S ${f(X.Sppm, 1)} · Fe ${f(X.FeC, 1)} ppm (límites LME 5 · 15 · 10)`, X.quality ? '' : 'bad');
    h += '</div>';
    h += `<h3 style="margin:0;font-size:.85rem">Pérdidas del turno</h3><div class="tblw"><table><thead><tr><th>Causa</th><th>Cobre</th><th>Valor</th></tr></thead><tbody>
      <tr><td>Cortocircuitos en la nave</td><td class="num">${f(X.lostShorts, 2)} t</td><td class="num">US$ ${f(X.lostShorts * P.CU_PRICE)}</td></tr>
      <tr><td>Rectificador fuera de servicio</td><td class="num">${f(X.lostRect, 2)} t</td><td class="num">US$ ${f(X.lostRect * P.CU_PRICE)}</td></tr>
      <tr><td>Menos cobre desde pilas y SX (mineral, riego, extracción)</td><td class="num">${f(other, 2)} t</td><td class="num">US$ ${f(other * P.CU_PRICE)}</td></tr>
      <tr><td><b>Brecha contra el plan</b></td><td class="num"><b>${f(gap, 2)} t</b></td><td class="num"><b>US$ ${f(gap * P.CU_PRICE)}</b></td></tr></tbody></table></div>`;
    h += `<h3 style="margin:0;font-size:.85rem">Producción acumulada del turno contra plan</h3><canvas id="mg-cv" height="200" style="width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:6px"></canvas>`;
    if (X.shiftHist.length) h += `<h3 style="margin:0;font-size:.85rem">Turnos anteriores</h3><div class="tblw"><table><thead><tr><th>Turno</th><th>Cátodo</th><th>Plan</th><th>kWh/t</th><th>Pérdidas</th><th>Alarmas</th></tr></thead><tbody>${X.shiftHist.map((s) => `<tr><td>${s.id} · ${s.day}</td><td class="num">${f(s.cath, 1)} t</td><td class="num">${f(s.plan, 1)} t</td><td class="num">${f(s.cath > 0.1 ? s.mwh * 1000 / s.cath : 0)}</td><td class="num">${f(s.lostShorts + s.lostRect, 2)} t</td><td class="num">${s.alarms}</td></tr>`).join('')}</tbody></table></div>`;
    h += `<h3 style="margin:0;font-size:.85rem">Bitácora del turno</h3><div class="tblw"><table><tbody>${P.S.log.slice(0, 14).map((l) => `<tr><td class="mono small">${P.hm(l.t)}</td><td class="small">${esc(l.who)}</td><td class="small">${esc(l.msg)}</td></tr>`).join('') || '<tr><td class="muted">Sin eventos.</td></tr>'}</tbody></table></div></div>`;
    return h;
  };
  const drawMgmt = () => {
    const cv = $('mg-cv'); if (!cv) return;
    const W = cv.clientWidth, H = 200, dp = devicePixelRatio || 1; cv.width = W * dp; cv.height = H * dp; const x = cv.getContext('2d'); x.setTransform(dp, 0, 0, dp, 0, 0);
    const shStart = P.S.t - ((P.now() - 8 * 3600) % 28800);
    const d = P.histGet('KY-405', P.S.t - shStart).filter((p) => p[0] >= shStart);
    const mg = {l: 40, r: 10, t: 10, b: 20}, hi = 6.45 * 8 * 1.1;
    const X = (tt) => mg.l + (W - mg.l - mg.r) * (tt - shStart) / 28800, Y = (v) => mg.t + (H - mg.t - mg.b) * (hi - v) / hi;
    x.strokeStyle = css('--line'); x.fillStyle = css('--muted'); x.font = `10px ${css('--mono')}`; x.textAlign = 'right';
    for (let v = 0; v <= hi; v += 10) { x.beginPath(); x.moveTo(mg.l, Y(v)); x.lineTo(W - mg.r, Y(v)); x.stroke(); x.fillText(v + ' t', mg.l - 4, Y(v) + 3); }
    x.setLineDash([5, 4]); x.strokeStyle = css('--muted'); x.beginPath(); x.moveTo(X(shStart), Y(0)); x.lineTo(X(shStart + 28800), Y(6.45 * 8)); x.stroke(); x.setLineDash([]);
    let acc = 0, prev = shStart; x.strokeStyle = css('--sel'); x.lineWidth = 2; x.beginPath(); x.moveTo(X(shStart), Y(0));
    d.forEach(([tt, v]) => { acc += v * (tt - prev) / 3600; prev = tt; x.lineTo(X(tt), Y(acc)); }); x.stroke();
    x.textAlign = 'left'; x.fillStyle = css('--muted'); x.fillText('plan', X(shStart + 28800) - 30, Y(6.45 * 8) - 6);
  };

  /* =================== navegación =================== */
  const TABS = [['gen', 'General'], ['a100', '100 Aglomeración'], ['a200', '200 Pilas'], ['a300', '300 SX'], ['a400', '400 EW'], ['a500', '500 Servicios'], ['alarms', 'Alarmas'], ['trends', 'Tendencias']];
  const ROLES = [['op', 'Operación'], ['mt', 'Mantenimiento'], ['mg', 'Gerencia']];
  const SPEEDS = [[0, 'Pausa'], [1, '×1'], [10, '×10'], [60, '×60'], [300, '×300']];
  let speed = 60;
  const buildBars = () => {
    $('speed').innerHTML = SPEEDS.map(([v, l]) => `<button data-speed="${v}" class="${v === speed ? 'on' : ''}" title="${v ? `1 s real = ${v} s de planta` : 'Detener el tiempo'}">${l}</button>`).join('');
    $('roles').innerHTML = ROLES.map(([v, l]) => `<button data-role="${v}" class="${state.role === v ? 'on' : ''}">${l}</button>`).join('');
    $('tabs').style.display = state.role === 'op' ? '' : 'none';
    $('tabs').innerHTML = TABS.map(([v, l]) => `<button data-tab="${v}" class="${state.screen === v ? 'on' : ''}">${l}<i data-tcount="${v}"></i></button>`).join('');
  };
  const show = () => {
    const scr = $('screen'), side = $('side');
    buildBars();
    if (state.role === 'mt') { scr.innerHTML = pageMaint(); side.style.display = 'none'; document.querySelector('main').style.gridTemplateColumns = '1fr'; drawMaint(); return; }
    if (state.role === 'mg') { scr.innerHTML = pageMgmt(); side.style.display = 'none'; document.querySelector('main').style.gridTemplateColumns = '1fr'; drawMgmt(); return; }
    document.querySelector('main').style.gridTemplateColumns = '';
    if (state.screen === 'alarms' || state.screen === 'trends') { scr.innerHTML = state.screen === 'alarms' ? pageAlarms() : pageTrends(); side.style.display = 'none'; document.querySelector('main').style.gridTemplateColumns = '1fr'; drawTrends(); return; }
    side.style.display = '';
    scr.innerHTML = SCREENS[state.screen]();
    renderSide(); refresh(true);
  };

  /* =================== refresco de valores =================== */
  const almOf = (tag) => { let best = null; P.AD.forEach((a) => { if ((a.st === 'U' || a.st === 'A') && (a.tag === tag || a.id === tag)) if (!best || a.prio < best.prio || (a.prio === best.prio && a.st === 'U')) best = a; }); return best; };
  const KEYS = {
    'brk-sum': () => `Interruptores: ${Object.entries(P.BRK).map(([k, v]) => `${k} ${v ? 'cerrado' : 'ABIERTO'}`).join(' · ')}`,
    quality: () => P.X.quality ? 'Calidad estimada: grado A (LME)' : 'Calidad estimada: FUERA DE NORMA',
    'ratio-102': () => `Razón ${f(P.L['FFIC-102'].ratio, 1)} kg/t × tonelaje ${P.X.delayComp ? 'retrasado 45 s' : 'del pesómetro'} = consigna ${f(P.L['FFIC-102'].sp_(), 1)} m³/h`,
    'ratio-102b': () => `${f(P.L['FFIC-102'].ratio, 1)} kg/t`,
    'ratio-104': () => `razón ${f(P.L['FFIC-104'].ratio, 3)} m³/t`,
    'lab-ph': () => `pH laboratorio ${P.hm(P.S.t0 + P.X.labT)}: ${f(P.X.labPH, 2)}`,
    oa: () => `O/A ${ft('KY-301')} · consigna ${f(P.L['FFIC-301'].ratio, 2)}`,
    'sx-sum': () => `O/A ${ft('KY-301')} · extracción ${ft('KY-303')} % · orgánico cargado ${f(P.X.yL, 2)} g/L · descargado ${f(P.X.ys, 2)} g/L · cobre transferido ${ft('KY-304')} t/h · arrastre ${ft('AIT-309')} ppm`,
    'cells-sum': () => `Voltaje medio ${ft('KY-402')} V · ${P.X.monitor ? 'monitoreo continuo' : `ronda cada 4 h (última ${P.hm(P.S.t0 + P.X.lastRound)})`} · ${knownShorts()} cortocircuitos conocidos`,
    'qual-a': () => `Cátodo estimado: Pb ${f(P.X.Pb, 1)} · S ${f(P.X.Sppm, 1)} · Fe ${f(P.X.FeC, 1)} ppm → ${P.X.quality ? 'grado A' : 'FUERA DE NORMA'}`,
    'qual-b': () => P.X.quality ? 'cátodo grado A' : 'cátodo fuera de norma',
    trucks: () => `Abastecimiento: ${P.S.t < P.X.trucksHold ? 'DETENIDO' : '1 camión de 30 t por hora'}`,
    'p-rt': () => `${f(P.RECT.P / 0.975, 1)} MW`,
    'p-m100': () => `${f(mccKW('MCC-100'))} kW`, 'p-m200': () => `${f(mccKW('MCC-200'))} kW`, 'p-m300': () => `${f(mccKW('MCC-300'))} kW`, 'p-m400': () => `${f(mccKW('MCC-400'))} kW`
  };
  const mccKW = (mcc) => Object.values(P.M).filter((m) => m.mcc === mcc && m.state === 'RUN').reduce((s, m) => s + m.kw * m.load, 0);
  for (let k = 0; k < 3; k++) KEYS['sec-' + k] = () => `${f(P.X.qMod[k])} m³/h · entrega ${f(P.X.secCu[k] / 1000, 2)} t/h de Cu`;
  [100, 200, 300, 400, 500].forEach((a) => { KEYS['acount-' + a] = () => { const n = P.AD.filter((x) => (x.st === 'U' || x.st === 'A') && x.area === a).length; return n ? n + ' alarma' + (n > 1 ? 's' : '') : 'sin alarmas'; }; });

  let lastSide = 0;
  const refresh = (force) => {
    const root = $('screen');
    root.querySelectorAll('[data-v]').forEach((e) => { e.textContent = ft(e.dataset.v); });
    root.querySelectorAll('[data-k]').forEach((e) => { const fn = KEYS[e.dataset.k]; if (fn) e.textContent = fn(); });
    root.querySelectorAll('[data-lvl]').forEach((e) => { const t = P.T[e.dataset.lvl], fr = Math.max(0, Math.min(1, (t.v - t.lo) / (t.hi - t.lo))), y = +e.dataset.y, h = +e.dataset.h; e.setAttribute('y', y + h * (1 - fr)); e.setAttribute('height', h * fr); });
    root.querySelectorAll('[data-lvl-fixed]').forEach((e) => { const fr = +e.dataset.lvlFixed, r = e.previousElementSibling; const y = +r.getAttribute('y'), h = +r.getAttribute('height'); e.setAttribute('y', y + h * (1 - fr)); e.setAttribute('height', h * fr); });
    root.querySelectorAll('[data-eq]').forEach((e) => { const id = e.dataset.eq, st = id === 'RT-401' ? P.RECT.state : P.M[id].state; e.classList.toggle('run', st === 'RUN'); e.classList.toggle('trip', st === 'TRIP' && (id === 'RT-401' || P.M[id].trip !== 'reset')); });
    root.querySelectorAll('[data-flow]').forEach((e) => { const k = e.dataset.flow; if (!k) return; const thr = +e.dataset.thr; e.classList.toggle('on', thr < 0 ? (k === 'LIT-103' ? P.X.p501On : true) : tv(k) > thr); });
    root.querySelectorAll('[data-op]').forEach((e) => { e.textContent = f(P.L[e.dataset.op].op); });
    root.querySelectorAll('[data-valve]').forEach((e) => { e.classList.toggle('open', P.L[e.dataset.valve].op > 2); });
    root.querySelectorAll('[data-alm]').forEach((e) => { const a = almOf(e.dataset.alm); if (!a) { e.style.display = 'none'; return; } e.style.display = ''; e.setAttribute('class', `almi p${a.prio} ${a.st === 'U' ? 'blink' : ''}`); e.querySelector('text').textContent = a.prio; });
    root.querySelectorAll('[data-ai]').forEach((e) => {
      const t = P.T[e.dataset.ai], w = +e.dataset.w, sc = (v) => Math.max(0, Math.min(1, (v - t.lo) / (t.hi - t.lo))) * w;
      const nb = e.querySelector('.nb'); nb.setAttribute('x', sc(t.nl)); nb.setAttribute('width', Math.max(0, sc(t.nh) - sc(t.nl)));
      e.querySelector('.ptr').setAttribute('transform', `translate(${sc(t.v)},9)`);
      e.classList.toggle('alm', !!almOf(t.id));
    });
    root.querySelectorAll('[data-cell]').forEach((e) => { const k = +e.dataset.cell, sh = P.X.shorts[k], known = P.X.monitor || P.X.seen[k]; e.setAttribute('class', 'cell' + (known && sh > 0 ? (sh >= 3 ? ' s2' : ' s1') : '') + (P.X.fixing.find((x) => x.k === k) ? ' fx' : '')); });
    root.querySelectorAll('[data-org]').forEach((e) => { });
    const cr = root.querySelector('[data-crud]'); if (cr) { const h = Math.min(30, P.X.crud * 120); cr.setAttribute('height', h); cr.setAttribute('y', 111 + 22 - h / 2); }
    root.querySelectorAll('[data-btxt]').forEach((e) => { const a = e.dataset.btxt, on = a === 'delay' ? P.X.delayComp : a === 'monitor' ? P.X.monitor : a === 'cap' ? P.X.capBank : false; e.parentNode.classList.toggle('on', on); });
    root.querySelectorAll('[data-brk]').forEach((e) => { const on = P.BRK[e.dataset.brk]; e.classList.toggle('on', on); e.classList.toggle('open', !on); });
    // barra de alarmas
    const act = P.AD.filter((a) => a.st === 'U' || a.st === 'A');
    const c = [1, 2, 3].map((p) => act.filter((a) => a.prio === p).length);
    $('acnt').innerHTML = c.map((n, i) => `<span><span class="pr p${i + 1}">${i + 1}</span> ${n}</span>`).join('');
    const un = P.AD.filter((a) => a.st === 'U').sort((a, b) => a.prio - b.prio || b.since - a.since)[0];
    $('alast').innerHTML = un ? `<span class="pr p${un.prio} blink">${un.prio}</span> ${P.hm(un.since)} · ${esc(un.desc)}` : '<span class="muted">Sin alarmas nuevas por reconocer</span>';
    $('clock').textContent = `${P.hhmm()} · Turno ${P.shiftOf()}`;
    document.querySelectorAll('[data-tcount]').forEach((e) => { const ar = areaOf(e.dataset.tcount); if (!ar) { e.textContent = ''; return; } const n = act.filter((a) => a.area === ar); const pmin = Math.min(4, ...n.map((a) => a.prio)); e.innerHTML = n.length ? `<span class="pr p${pmin} ${n.some((a) => a.st === 'U') ? 'blink' : ''}">${n.length}</span>` : ''; });
    const nowR = performance.now();
    if (force || nowR - lastSide > 1000) {
      lastSide = nowR;
      if (state.role === 'op' && state.screen !== 'alarms' && state.screen !== 'trends') { const foc = document.activeElement && document.activeElement.closest && document.activeElement.closest('#side input'); if (!foc) renderSide(); }
      else if (state.screen === 'trends' && state.role === 'op') { drawTrends(); document.querySelectorAll('[data-pv]').forEach((e) => { const p = state.trend.pens[+e.dataset.pv]; e.textContent = ft(p) + ' ' + P.T[p].unit; }); }
      else if (state.role === 'op' && state.screen === 'alarms') { const foc = document.activeElement && document.activeElement.tagName === 'SELECT'; if (!foc) $('screen').innerHTML = pageAlarms(); }
      else if (state.role === 'mt') { $('screen').innerHTML = pageMaint(); drawMaint(); }
      else if (state.role === 'mg') { $('screen').innerHTML = pageMgmt(); drawMgmt(); }
    }
  };

  /* =================== eventos =================== */
  document.addEventListener('click', (ev) => {
    const t = ev.target.closest('[data-speed],[data-role],[data-tab],[data-go],[data-fp],[data-fp2],[data-close-fp],[data-mode],[data-set],[data-cmd],[data-act],[data-brk-set],[data-fixcell],[data-cell],[data-ack],[data-shelve],[data-ackall],[data-win],[data-mact],[data-msel],[data-scn],[data-close]');
    if (!t) return;
    const d = t.dataset;
    if (d.speed != null) { speed = +d.speed; buildBars(); return; }
    if (d.role) { state.role = d.role; state.sel = null; show(); return; }
    if (d.tab) { state.screen = d.tab; state.sel = null; show(); return; }
    if (d.go) { state.role = 'op'; state.screen = d.go; state.sel = null; show(); return; }
    if (d.cell != null) { state.sel = 'CELL:' + d.cell; renderSide(); return; }
    if (d.fp2) { state.sel = d.fp2; renderSide(); return; }
    if (d.fp) { state.sel = d.fp; renderSide(); if (window.innerWidth < 980) $('side').scrollIntoView({behavior: 'smooth'}); return; }
    if (d.closeFp != null) { state.sel = null; renderSide(); return; }
    if (d.mode) { P.cmd.mode(state.sel, d.mode); renderSide(); return; }
    if (d.set) { const c = state.sel; if (d.set === 'sp') P.cmd.sp(c, +$('fp-sp').value); if (d.set === 'op') P.cmd.op(c, +$('fp-op').value); if (d.set === 'ratio') P.cmd.ratio(c, +$('fp-ratio').value); renderSide(); return; }
    if (d.cmd) { P.cmd[d.cmd](state.sel); renderSide(); refresh(); return; }
    if (d.brkSet != null) { P.cmd.breaker(state.sel.slice(4), d.brkSet === '1'); renderSide(); refresh(); return; }
    if (d.fixcell != null) { P.cmd.fixCell(+d.fixcell); renderSide(); return; }
    if (d.act) { if (d.act === 'delay') P.cmd.delayComp(!P.X.delayComp); if (d.act === 'monitor') P.cmd.monitor(!P.X.monitor); if (d.act === 'cap') P.cmd.capBank(!P.X.capBank); if (d.act === 'truck') P.cmd.truck(1); refresh(true); return; }
    if (d.ack) { P.cmd.ack(d.ack); $('screen').innerHTML = pageAlarms(); refresh(); return; }
    if (d.shelve) { P.cmd.shelve(d.shelve); $('screen').innerHTML = pageAlarms(); return; }
    if (d.ackall != null) { P.cmd.ackAll(state.alFilter || 0); $('screen').innerHTML = pageAlarms(); return; }
    if (d.win) { state.trend.win = +d.win; show(); return; }
    if (d.mact) { const a = d.mact; if (a === 'bearing') P.cmd.bearing(); if (a === 'calibrate') P.cmd.calibrate(); if (a === 'crud') P.cmd.cleanCrud(); if (a === 'hx') P.cmd.fixHX(); if (a === 'cells') P.cmd.fixAllSeen(); if (a === 'monitor') P.cmd.monitor(!P.X.monitor); $('screen').innerHTML = pageMaint(); drawMaint(); return; }
    if (d.msel) { state.maintSel = d.msel; $('screen').innerHTML = pageMaint(); drawMaint(); return; }
    if (d.scn) { P.scenario(d.scn); $('m-scn').classList.remove('show'); const s = P.SCN.find((x) => x.id === d.scn); state.role = 'op'; state.screen = 'a' + s.area; state.sel = null; show(); return; }
    if (d.close != null) { t.closest('.modal').classList.remove('show'); return; }
  });
  document.addEventListener('change', (ev) => {
    const t = ev.target;
    if (t.dataset.pen != null) { state.trend.pens[+t.dataset.pen] = t.value; drawTrends(); return; }
    if (t.id === 'al-f') { state.alFilter = +t.value; $('screen').innerHTML = pageAlarms(); return; }
    if (t.dataset.standby != null) { P.cmd.standby(state.sel, t.checked); return; }
  });
  $('ack-all').onclick = () => { P.cmd.ackAll(); refresh(); };
  $('go-alarms').onclick = () => { state.role = 'op'; state.screen = 'alarms'; show(); };
  $('btn-scn').onclick = () => { $('scn-list').innerHTML = P.SCN.map((s) => `<div class="card"><b>${esc(s.name)}</b><span class="small muted">Área ${s.area}</span><p>${esc(s.desc)}</p><button data-scn="${s.id}">Provocar</button></div>`).join(''); $('m-scn').classList.add('show'); };
  $('btn-reset').onclick = () => { P = PlantSim.create(); $('m-scn').classList.remove('show'); state.sel = null; show(); };
  $('btn-src').onclick = (e) => { e.preventDefault(); $('src-body').innerHTML = SOURCES; $('m-src').classList.add('show'); };

  const SOURCES = `<ul style="padding-left:18px;margin:0;display:flex;flex-direction:column;gap:6px">
    <li><b>Planta de diseño:</b> 1.700 t/h de mineral a 0,6 % Cu, unos 155 t/día de cátodo. Del mismo orden que el balance del capítulo 6 del curso.</li>
    <li><b>Lixiviación:</b> curva de recuperación de óxidos ajustada a 64,6 % a 90 días, dato operacional de ENAMI (Saldaña y otros, <i>Minerals</i> 9(7) 421, 2019). Riego de 10 L/h/m² dentro del rango de 5 a 15 de León y otros (<i>Processes</i> 13, 1513, 2025).</li>
    <li><b>PLS y electrolito:</b> Cu 3,2 g/L, pH 1,9, Fe 5,8 g/L en el PLS; electrolito de 37 a 48 g/L de Cu y 183 g/L de ácido; extractante al 15,4 % vol; promedios sudamericanos de la encuesta de Sole y otros a 27 plantas de SX (datos de 2012).</li>
    <li><b>SX:</b> equilibrio con liberación de ácido etapa por etapa, el mismo modelo del capítulo 4.</li>
    <li><b>EW:</b> ley de Faraday (1,1855 g/Ah), voltaje de celda cercano a 2 V y unos 2 kWh/kg (Cifuentes y otros, Universidad de Chile), 160 celdas de 60 cátodos de 1 m² por cara.</li>
    <li><b>Calidad:</b> límites del cobre grado A de la LME (BS EN 1978:2022, Cu-CATH-1).</li>
    <li><b>Vibraciones:</b> zonas de ISO 10816-3, grupo 1, base rígida (2,3 · 4,5 · 7,1 mm/s RMS).</li>
    <li><b>Alarmas:</b> prioridades, estados, inhibición y tasas de referencia según ISA-18.2. Pantallas con criterios de ISA-101 y tags según ISA-5.1.</li>
    <li><b>Energía:</b> cobre a US$ 6,5/lb y energía a US$ 100/MWh.</li></ul>`;

  /* =================== bucle de tiempo =================== */
  let last = performance.now(), acc = 0, lastUI = 0;
  const loop = (now) => {
    const dt = Math.min(0.25, (now - last) / 1000); last = now;
    if (speed > 0) { acc += dt * speed; let n = Math.floor(acc); acc -= n; n = Math.min(n, 1500); for (let i = 0; i < n; i++) P.step(); }
    if (now - lastUI > 250) { lastUI = now; refresh(); }
    requestAnimationFrame(loop);
  };
  addEventListener('resize', () => { drawTrends(); drawMaint(); drawMgmt(); });
  show();
  requestAnimationFrame(loop);
  window.__plant = () => P;
})();
