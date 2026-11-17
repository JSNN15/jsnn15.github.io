// Una lámina por proyecto: correas, pila, planta, cultivo y dron. Cada una muestra los sensores desplegados,
// el router o la puerta de enlace que los reúne y los enlaces entre ellos.
// Construidas con el kit isométrico de Anatomy (github.com/wheresryan22/anatomy, licencia MIT, copiado en ./kit).
// Uso: node build_proyectos.mjs  → fig_proyectos.json
import { writeFileSync } from "node:fs";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";

const WIDTH = 760, HEIGHT = 540;
let P, puntas;
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (pts, style) => k.dotsSvg(pts.map(at), style);
const seg = (a, b) => k.segment(a, b, P);
const caja = (x, y, w, d, z, h, o = {}) => S(k.slabOf({ x, y, w, d, r: o.r ?? 1 }, z, h, P, o.steps ?? 3, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, lit: o.lit, inner: o.inner });
const cil = (x, y, r, z, h, o = {}) => S(k.cylinder(x, y, r, z, h, P, o.steps ?? 24, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, lit: o.lit, inner: o.inner });
const eje = (o, a) => G.frameAlong(o, a);
const rollo = (F, s0, s1, r, o = {}) => S(G.disc(s0, s1, r, F, P), { tone: o.tone ?? "mid", crease: o.crease ?? "lo", inner: o.inner });
const texto = (x, y, t, size = 8.5, tone = "mid") => k.faceTextSvg(k.topMatrix([x, y], 0, P, "x"), t, { size, tone });
const cerca = (a, b) => a[0] + a[1] - b[0] - b[1];

function tronco(x, y, w, d, z, h, m) {
  const A = [[x, y], [x + w, y], [x + w, y + d], [x, y + d]].map(([a, b]) => at([a, b, z]));
  const T = [[x + m, y + m], [x + w - m, y + m], [x + w - m, y + d - m], [x + m, y + d - m]].map(([a, b]) => at([a, b, z + h]));
  const c = k.pathOf([A[3], A[2], A[1], T[1], T[0], T[3]], true);
  return { fill: c, outline: c, crease: k.pathOf([T[3], T[2], T[1]]) + k.pathOf([A[2], T[2]]), top: k.pathOf(T, true), shades: ["", "", k.pathOf([A[1], A[2], T[2], T[1]], true), k.pathOf([A[3], A[2], T[2], T[3]], true)] };
}
function base(plan) {
  const o = [`<path class="iso-halo" d="${k.haloOf(plan, -16, 12, P)}"/>`, S(k.slabOf(plan, -12, 12, P, 8, 1.6), { tone: "mid" }), L(k.planOutline(k.insetPlan(plan, 5), 0, P), { tone: "faint" }), D(k.corners(plan, 11).map(([x, y]) => [x, y, 0]), { size: 0.6 })];
  for (let x = Math.ceil((plan.x + 20) / 40) * 40; x < plan.x + plan.w - 10; x += 40) o.push(L(k.lineOnTop([x, plan.y + 8], [x, plan.y + plan.d - 8], 0, P), { tone: "faint", dotted: true }));
  return o.join("");
}
// un nodo: caja estanca con tapa, antena y luz; con estaca y panel donde no hay de dónde alimentarlo
function nodo(clave, x, y, z, { estaca = 0, panel = false, lit = true, chico = false } = {}) {
  const o = [], zc = z + estaca, f = chico ? 0.8 : 1;
  if (estaca) o.push(cil(x, y, 1.2, z, estaca, { steps: 12, crease: "none" }), L(k.ring(x, y, 3, z + 0.2, P, 14), { tone: "lo" }));
  if (panel) {
    const FP = G.frameOf([x - 13, y - 15, zc + 8], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
    o.push(S(G.prismOf(FP, [[0, 0], [14, 8.2], [13.4, 9.2], [-0.6, 1]], 0, 26, P), { tone: "mid", crease: "lo" }));
    for (const s of [6.5, 13, 19.5]) o.push(L(seg([x - 13 + s, y - 15.6, zc + 9], [x - 13 + s, y - 15 + 13.4, zc + 17.2]), { tone: "faint" }));
  }
  const plan = { x: x - 9 * f, y: y - 7 * f, w: 18 * f, d: 14 * f, r: 2 };
  o.push(S(k.slabOf(plan, zc, 9.5 * f, P, 4, 0.6), { tone: "hi", crease: "lo", lit, className: "nodo-caja", inner: L(k.sideSeam(plan, zc + 7.4 * f, P, 4), { tone: "lo" }) }));
  o.push(L(k.planOutline(k.insetPlan(plan, 2.2), zc + 9.5 * f, P, 4), { tone: "faint" }), D(k.corners(plan, 2.6).map(([a, b]) => [a, b, zc + 9.5 * f]), { size: 0.4, tone: "lo" }));
  const [ax, ay] = [x + 5 * f, y - 3 * f], za = zc + 9.5 * f;
  o.push(cil(ax, ay, 2, za, 2.6, { steps: 12 }), cil(ax, ay, 0.7, za + 2.6, 19 * f, { steps: 8, tone: "hi", crease: "none" }), cil(ax, ay, 1.3, za + 2.6 + 19 * f, 2, { steps: 10, tone: "hi" }));
  o.push(k.dotsSvg([at([x - 5 * f, y + 3 * f, za])], { size: 1.1, tone: "hi", pulse: true }));
  puntas[clave] = at([ax, ay, za + 4.6 + 19 * f]);
  return `<g data-nodo="${clave}">${o.join("")}</g>`;
}
// poste con caja de radio: el router que repite la señal entre los nodos y la puerta de enlace
function poste(clave, x, y, { alto = 78, panel = false } = {}) {
  const o = [caja(x - 7, y - 7, 14, 14, 0, 2.4, { r: 1.5, bevel: 0.4 }), D(k.corners({ x: x - 7, y: y - 7, w: 14, d: 14 }, 2.4).map(([a, b]) => [a, b, 2.4]), { size: 0.4 })];
  o.push(cil(x, y, 1.8, 2.4, alto, { steps: 14, tone: "hi", crease: "none" }), L(k.sideArc(x, y, 1.8, alto * 0.45, P, 8), { tone: "lo" }));
  if (panel) {
    const FP = G.frameOf([x - 16, y - 20, alto * 0.72], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
    o.push(S(G.prismOf(FP, [[0, 0], [18, 10.5], [17.3, 11.6], [-0.7, 1.1]], 0, 32, P), { tone: "mid", crease: "lo" }));
    for (const s of [8, 16, 24]) o.push(L(seg([x - 16 + s, y - 20.7, alto * 0.72 + 1.1], [x - 16 + s, y - 20 + 17.3, alto * 0.72 + 11.6]), { tone: "faint" }));
  }
  const zb = alto * 0.5, plan = { x: x + 1.6, y: y - 7, w: 9, d: 14, r: 1.2 };
  o.push(S(k.slabOf(plan, zb, 18, P, 3, 0.4), { tone: "hi", crease: "lo", inner: L(k.sideSeam(plan, zb + 14, P, 3), { tone: "lo" }) }), k.dotsSvg([at([x + 10.6, y + 3, zb + 12])], { size: 0.9, tone: "hi", pulse: true }));
  o.push(cil(x, y, 2.6, alto + 2.4, 2.4, { steps: 12 }), cil(x, y, 0.8, alto + 4.8, 20, { steps: 8, tone: "hi", crease: "none" }), cil(x, y, 1.4, alto + 24.8, 2, { steps: 10, tone: "hi" }));
  puntas[clave] = at([x, y, alto + 26.8]);
  return o.join("");
}
// gabinete de la puerta de enlace: recibe la malla y entrega el dato al servidor de borde
function gabinete(clave, x, y, { w = 34, d = 20, h = 52 } = {}) {
  const o = [caja(x - 3, y - 3, w + 6, d + 6, 0, 3, { r: 1.5, bevel: 0.4 })];
  const plan = { x, y, w, d, r: 1.4 };
  o.push(S(k.slabOf(plan, 3, h, P, 3, 0.6), { tone: "mid", inner: L(k.sideSeam(plan, 7, P, 3), { tone: "faint" }) }));
  const yf = y + d, xf = x + w;
  o.push(L(seg([x + 4, yf, 8], [x + 4, yf, h - 2]) + seg([x + 4, yf, h - 2], [xf - 4, yf, h - 2]) + seg([xf - 4, yf, h - 2], [xf - 4, yf, 8]) + seg([xf - 4, yf, 8], [x + 4, yf, 8]), { tone: "mid" }));
  o.push(D([[xf - 7, yf, h * 0.55]], { size: 0.8, tone: "hi" }));
  for (let i = 0; i < 5; i++) o.push(L(seg([xf, y + 4, h - 16 + i * 2.6], [xf, yf - 4, h - 16 + i * 2.6]), { tone: "lo" }));
  o.push(k.dotsSvg([[xf, y + 5, h - 22], [xf, y + 9, h - 22], [xf, y + 13, h - 22]].map(at), { size: 0.8, tone: "hi", pulse: true }));
  o.push(caja(x - 2, y - 2, w + 4, d + 4, h + 3, 2.2, { r: 1.5, bevel: 0.4 }));
  const [ax, ay] = [x + 8, y + 7];
  o.push(cil(ax, ay, 2.4, h + 5.2, 2.6, { steps: 12 }), cil(ax, ay, 0.8, h + 7.8, 26, { steps: 8, tone: "hi", crease: "none" }), cil(ax, ay, 1.4, h + 33.8, 2, { steps: 10, tone: "hi" }));
  o.push(caja(xf - 2, y + d + 3, 4, 26, 0, 1.6, { tone: "lo", crease: "none", r: 0.5 })); // canalización hacia la sala
  puntas[clave] = at([ax, ay, h + 35.8]);
  return o.join("");
}
const enlace = (de, a, o = {}) => `<g data-enlace="${o.tipo ?? "radio"}">${k.wireSvg(puntas[de], puntas[a], { tone: "mid", flow: !o.dashed, dashed: o.dashed, size: 1.1, ends: o.ends ?? "both" })}</g>`;
const figura = (pts, label, cuerpo) => k.figureSvg({ width: WIDTH, height: HEIGHT, label, body: cuerpo });
const proy = (pts, o = {}) => { P = k.fitProjection(pts, WIDTH, HEIGHT, { pad: o.pad ?? 24, azimuth: o.azimuth ?? k.AZIMUTH }); puntas = {}; };

// ================= 01 · correas: N nodos a lo largo de la correa =================
function correas() {
  const B = { x: -212, y: -92, w: 430, d: 200, r: 9 }, YC = -22, ZL = 26, X0 = -186, X1 = 150;
  proy([...k.boxCorners(B, -16, 0), [X0, YC, 70], [10, 44, 112], [172, 40, 96]]);
  const o = [base(B)];
  const est = Array.from({ length: 8 }, (_, i) => -164 + i * 42);
  const lado = (y) => [...est.filter((_, i) => i % 2 === 0).map((x) => caja(x - 1.8, y, 3.6, 3.6, 0, ZL, { r: 0.4, crease: "none" })), caja(X0, y - 0.4, X1 - X0, 4.4, ZL, 4.4, { r: 0.5, inner: L(seg([X0, y + 4, ZL + 2.2], [X1, y + 4, ZL + 2.2]), { tone: "faint" }) })];
  o.push(lado(YC - 30));
  o.push(caja(X0 + 6, YC - 22, X1 - X0 - 14, 44, ZL - 10, 1.2, { tone: "lo", crease: "none", r: 0.3 }));
  // estaciones: travesaño, polín central y dos polines de ala
  const ala = [0, 14, 9], la = Math.hypot(14, 9);
  for (const x of est) {
    o.push(caja(x - 2, YC - 30, 4, 60, ZL + 4.4, 1.6, { r: 0.4, tone: "lo", crease: "none" }));
    o.push(rollo(eje([x, YC - 10, ZL + 10.4], [0, 1, 0]), 0, 20, 4, { crease: "faint" }));
    o.push(rollo(eje([x, YC - 25, ZL + 19.6], [0, 14 / la, -9 / la]), 0, la, 4, { crease: "faint" }), rollo(eje([x, YC + 11, ZL + 10.6], [0, 14 / la, 9 / la]), 0, la, 4, { crease: "faint" }));
  }
  o.push(rollo(eje([X0 + 4, YC - 24, ZL + 9], [0, 1, 0]), 0, 48, 8.4));
  // banda en artesa (tres tramos) y carga de mineral
  const FB = G.frameOf([X0 + 2, YC, ZL + 14.6], [1, 0, 0], [0, 1, 0], [0, 0, 1]), LB = X1 - X0 - 8;
  const tramo = (pol, tone = "mid") => S(G.prismOf(FB, pol, 0, LB, P), { tone, crease: "lo" });
  o.push(tramo([[-25, 9.6], [-10.6, 0.4], [-10, 1.8], [-24.4, 11]]));
  o.push(tramo([[-10.6, 0], [10.6, 0], [10.6, 1.6], [-10.6, 1.6]]));
  o.push(S(G.prismOf(FB, [[-15, 4.6], [-9, 1.7], [9, 1.7], [15, 4.6], [5, 9.4], [-4, 10]], 14, LB - 10, P), { tone: "mid", crease: "lo" }));
  o.push(D(Array.from({ length: 34 }, (_, i) => [X0 + 22 + i * 9.4, YC + ((i * 7) % 9) - 4, ZL + 23.6 + ((i * 5) % 3) * 0.4]), { size: 0.45, tone: "lo" }));
  o.push(tramo([[10, 1.8], [10.6, 0.4], [25, 9.6], [24.4, 11]], "hi"));
  o.push(rollo(eje([X1 - 4, YC - 26, ZL + 8], [0, 1, 0]), 0, 52, 9.6, { inner: L(G.arcOf(eje([X1 - 4, YC - 26, ZL + 8], [0, 1, 0]), 6, 9.6, P) + G.arcOf(eje([X1 - 4, YC - 26, ZL + 8], [0, 1, 0]), 46, 9.6, P), { tone: "faint" }) }));
  o.push(caja(X1 + 2, YC - 24, 16, 48, 4, ZL + 4, { r: 1.2, bevel: 0.4 }));
  o.push(lado(YC + 26));
  // accionamiento
  o.push(caja(X1 - 16, YC + 32, 22, 15, 0, ZL - 6, { r: 1, tone: "lo" }), caja(X1 - 13, YC + 33, 12, 12, ZL - 6, 15, { r: 1.4, bevel: 0.4 }));
  const FM = eje([X1 - 40, YC + 39, ZL + 2], [1, 0, 0]);
  o.push(rollo(FM, 0, 25, 6, { inner: k.fadedSvg(G.ribsOf(FM, 2, 23, 6, 14, P, { fade: [0.05, 0.5] }), { tone: "lo" }) }), rollo(FM, 25, 27, 2.4, {}));
  // un nodo cada dos estaciones: acelerómetro en el descanso del polín y caja en el larguero
  const con = [-164, -80, 4, 88];
  con.forEach((x, i) => {
    o.push(cil(x, YC + 28.6, 2.2, ZL + 4.4, 2.8, { steps: 12, tone: "hi" }), caja(x + 6, YC + 30.4, 20, 15, ZL - 4.6, 1.6, { r: 0.6, tone: "lo", crease: "none" }));
    o.push(nodo("n" + (i + 1), x + 16, YC + 38, ZL - 3));
    o.push(k.wireSvg(at([x + 1.6, YC + 30, ZL + 5.6]), at([x + 8, YC + 35, ZL + 2]), { tone: "hi", size: 0.8, ends: "from" }));
  });
  o.push(poste("router", -22, YC + 96, { alto: 76 }));
  o.push(gabinete("gw", 176, YC + 66));
  con.forEach((x, i) => o.push(texto(x + 6, YC + 62, "N" + (i + 1))));
  o.push(texto(-8, YC + 112, "ROUTER"), texto(66, YC + 118, "PUERTA DE ENLACE"));
  o.push(enlace("n1", "n2"), enlace("n2", "router"), enlace("n3", "router"), enlace("router", "gw"), enlace("n4", "gw"));
  return figura(null, "Una correa transportadora en artesa, con carga, sobre ocho estaciones de polines. Cuatro nodos con antena van fijados al larguero, uno cada dos estaciones, cada uno con su acelerómetro en el descanso de un polín. Un poste con un router al costado y un gabinete con la puerta de enlace junto al accionamiento reciben los enlaces de radio.", o);
}

// ================= 02 · pila de lixiviación =================
function pila() {
  const B = { x: -205, y: -150, w: 410, d: 300, r: 9 };
  proy([...k.boxCorners(B, -16, 0), [-40, -40, 104], [150, 80, 98], [120, -20, 112]]);
  const o = [base(B)];
  o.push(S(tronco(-180, -128, 262, 204, 0, 30, 27), { tone: "mid", crease: "lo" }));
  for (let y = -92; y <= 40; y += 11) o.push(L(k.lineOnTop([42, y], [50, y], 30, P), { tone: "faint" }));
  for (let x = -140; x <= 30; x += 11) o.push(L(k.lineOnTop([x, 36], [x, 44], 30, P), { tone: "faint" }));
  o.push(S(tronco(-140, -88, 180, 124, 30, 22, 20), { tone: "mid", crease: "lo" }));
  const zt = 52;
  for (let y = -60; y <= 8; y += 8.5) o.push(L(k.lineOnTop([-112, y], [8, y], zt, P), { tone: "lo" }));
  o.push(rollo(eje([12, -64, zt + 1.8], [0, 1, 0]), 0, 76, 1.8, { crease: "none" }), D([-60, -43, -26, -9, 8].map((y) => [12, y, zt + 3.6]), { size: 0.45, tone: "lo" }));
  // seis estacas sobre el piso superior, de atrás hacia adelante
  const est = [[-96, -48], [-52, -48], [-8, -48], [-96, -6], [-52, -6], [-8, -6]].sort(cerca);
  est.forEach(([x, y], i) => o.push(nodo("e" + (i + 1), x, y, zt, { estaca: 9, panel: true })));
  // nodo de presión en la matriz de riego
  o.push(rollo(eje([12, 12, zt + 1.8], [0, 1, 0]), 0, 8, 2.6, {}), nodo("pr", 20, 20, zt, { estaca: 4, chico: true }));
  // canaleta, piscina de solución y nodo de nivel
  o.push(caja(-180, 80, 262, 7, 0, 1, { tone: "lo", crease: "none", r: 0.5 }));
  const pis = { x: -150, y: 98, w: 150, d: 40, r: 6 };
  o.push(S(k.slabOf(pis, 0, 1.6, P, 5), { tone: "lo", crease: "none" }), L(k.planOutline(k.insetPlan(pis, 5), 1.6, P, 5), { tone: "mid" }), L(k.lineOnTop([-130, 112], [-30, 112], 1.6, P) + k.lineOnTop([-118, 122], [-52, 122], 1.6, P), { tone: "faint", dashed: true }));
  o.push(caja(-6, 110, 14, 4, 0, 14, { r: 0.6, tone: "lo" }), nodo("nivel", 2, 112, 14, { chico: true }));
  o.push(poste("router", 118, -16, { alto: 82, panel: true }));
  o.push(gabinete("gw", 140, 78));
  o.push(texto(-170, 92, "PISCINA DE SOLUCIÓN"), texto(96, 22, "ROUTER SOLAR"), texto(86, 132, "PUERTA DE ENLACE"), texto(-176, -136, "PILA · 2 PISOS", 8.5, "lo"));
  const orden = est.map((_, i) => "e" + (i + 1));
  o.push(enlace(orden[0], orden[1]), enlace(orden[1], orden[2]), enlace(orden[3], orden[4]), enlace(orden[0], orden[3]), enlace(orden[2], orden[5]), enlace(orden[4], orden[5]), enlace(orden[5], "router"), enlace("pr", "router"), enlace("router", "gw"), enlace("nivel", "gw"));
  return figura(null, "Una pila de lixiviación de dos pisos con líneas de riego. Sobre el piso superior hay seis estacas con nodo y panel solar, y un nodo de presión en la matriz de riego. Al pie, una piscina de solución con un nodo de nivel. Un router con panel solar al borde de la pila y un gabinete con la puerta de enlace reciben los enlaces.", o);
}

// ================= 03 · planta de procesos =================
function planta() {
  const B = { x: -175, y: -130, w: 350, d: 260, r: 9 };
  proy([...k.boxCorners(B, -16, 0), [-90, -50, 104], [112, -84, 106], [60, 70, 70]]);
  const o = [base(B)];
  const tanque = (x, y, r, h) => {
    const F = eje([x, y, 0], [0, 0, 1]), aros = [0.3, 0.62].map((f) => k.sideArc(x, y, r, h * f, P, 28)).join("");
    return [cil(x, y, r + 2.4, 0, 1.8, { steps: 40, tone: "lo" }), S(G.lathe([[1.8, r], [h, r], [h + r * 0.2, r * 0.16]], F, P), { tone: "hi", crease: "lo", inner: L(aros, { tone: "faint" }) }), cil(x, y, r * 0.16, h + r * 0.2, 2.6, { steps: 12 }),
      L(seg([x + r * 0.72, y + r * 0.72, 2], [x + r * 0.72, y + r * 0.72, h]) + seg([x + r * 0.6, y + r * 0.82, 2], [x + r * 0.6, y + r * 0.82, h]) + Array.from({ length: Math.floor(h / 4.5) }, (_, i) => seg([x + r * 0.72, y + r * 0.72, 4 + i * 4.5], [x + r * 0.6, y + r * 0.82, 4 + i * 4.5])).join(""), { tone: "lo" })].join("");
  };
  o.push(tanque(-92, -44, 42, 76));
  o.push(gabinete("gw", 96, -104, { w: 44, d: 26, h: 62 }));
  o.push(tanque(14, -70, 24, 48));
  // tubería del estanque a la bomba
  o.push(rollo(eje([-62, -4, 7], [0, 1, 0]), 0, 46, 3, { crease: "none" }), S(G.sphereOf([-62, 44, 7], 3.6, P), { tone: "mid" }), rollo(eje([-60, 44, 7], [1, 0, 0]), 0, 42, 3, { crease: "none" }));
  // bomba y motor sobre su base
  o.push(caja(-22, 30, 96, 28, 0, 3, { r: 1.2, bevel: 0.4 }), D(k.corners({ x: -22, y: 30, w: 96, d: 28 }, 3).map(([x, y]) => [x, y, 3]), { size: 0.5 }));
  const FP = eje([-18, 44, 13.4], [1, 0, 0]);
  o.push(rollo(FP, 0, 3, 7), rollo(FP, 3, 14, 10.4, { inner: L(G.arcOf(FP, 9, 10.4, P), { tone: "faint" }) }), rollo(FP, 14, 22, 3.4, { crease: "none" }));
  o.push(cil(-9.5, 44, 3.2, 22, 18, { steps: 14, crease: "none" }), cil(-9.5, 44, 4.8, 31, 2, { steps: 14 }));
  o.push(rollo(FP, 22, 25, 5), rollo(FP, 25, 62, 9.4, { inner: k.fadedSvg(G.ribsOf(FP, 28, 59, 9.4, 18, P, { fade: [0.05, 0.5] }), { tone: "lo" }) }), rollo(FP, 62, 66, 7.4), rollo(FP, 66, 69, 2.2, { crease: "none" }));
  o.push(caja(20, 35, 14, 8, 21.6, 6, { r: 1 }));
  // manómetro sobre la descarga
  const FG = eje([-9.5, 45.4, 46], [0, 1, 0]);
  o.push(cil(-9.5, 44, 1.4, 40, 3, { steps: 10, crease: "none" }), rollo(FG, -2.2, 2, 7.6, { tone: "hi", inner: L(G.arcOf(FG, 2, 5.8, P), { tone: "lo" }) }), L(seg([-9.5, 47.4, 46], [-6, 47.4, 49.8]), { tone: "hi" }));
  // nodo de vibración sobre el motor, con su acelerómetro
  o.push(cil(34, 44, 2.6, 22.6, 3.2, { steps: 12, tone: "hi" }), nodo("vib", 58, 66, 3, { chico: true }), k.wireSvg(at([36, 45.6, 24]), at([52, 62, 8]), { tone: "hi", size: 0.8, ends: "from" }));
  // cámara fija frente al manómetro, con su línea de visión
  o.push(nodo("cam", -9.5, 92, 0, { estaca: 36 }), rollo(eje([-9.5, 85, 41], [0, -1, 0]), 0, 4, 2.8, { tone: "hi" }));
  o.push(L(seg([-9.5, 81, 41], [-9.5, 47.6, 46]), { tone: "mid", dotted: true }));
  o.push(texto(-40, 118, "CÁMARA FIJA"), texto(46, 92, "NODO DE VIBRACIÓN"), texto(60, -62, "SERVIDOR DE BORDE"));
  o.push(enlace("cam", "gw", { tipo: "wifi" }), enlace("vib", "gw"));
  return figura(null, "Un sector de planta con dos estanques y una bomba con su motor. Una cámara fija sobre un poste mira el manómetro de la descarga. Un nodo de vibración va junto al motor, con su acelerómetro sobre la carcasa. Al fondo, un gabinete con el servidor de borde recibe los dos enlaces.", o);
}

// ================= 04 · cultivo =================
function cultivo() {
  const B = { x: -195, y: -140, w: 390, d: 280, r: 9 };
  proy([...k.boxCorners(B, -16, 0), [140, -100, 112], [120, 70, 84], [-150, -120, 40]]);
  const o = [base(B)];
  const filas = [-104, -68, -32, 4, 40, 76], nodos = [["c1", -128, -50], ["c2", -40, 22], ["c3", 28, -86]];
  const cosas = [];
  for (const y of filas) { o.push(caja(-172, y - 6, 232, 12, 0, 1.6, { r: 6, tone: "lo", crease: "none", steps: 6 }), L(k.lineOnTop([-168, y + 8.4], [56, y + 8.4], 0, P), { tone: "faint" })); for (let x = -160; x <= 48; x += 20.8) cosas.push([x, y, () => cil(x, y, 5.2, 1.6, 6.4, { steps: 20, bevel: 1.1 })]); }
  for (const [c, x, y] of nodos) cosas.push([x, y, () => nodo(c, x, y, 0, { estaca: 13, panel: true }) + cil(x + 8, y + 7, 0.9, 0, 7, { steps: 8, tone: "hi", crease: "none" }) + cil(x + 12, y + 3, 0.9, 0, 4, { steps: 8, tone: "hi", crease: "none" })]);
  // matriz de riego con válvula y nodo de presión
  o.push(rollo(eje([72, -112, 3], [0, 1, 0]), 0, 196, 2.4, { crease: "none" }));
  for (const y of filas) o.push(D([[72, y + 8.4, 5.4]], { size: 0.5, tone: "lo" }));
  cosas.push([86, -20, () => caja(78, -32, 22, 22, 0, 9, { r: 1.5, bevel: 0.4 }) + cil(89, -21, 4, 9, 3, { steps: 14 }) + nodo("pr", 108, -12, 0, { estaca: 8, chico: true })]);
  // estación de clima: mástil con escudo de platos y veleta
  cosas.push([122, 72, () => caja(116, 66, 12, 12, 0, 2, { r: 1.2 }) + cil(122, 72, 1.5, 2, 62, { steps: 12, tone: "hi", crease: "none" }) + [0, 1, 2, 3].map((i) => cil(132, 72, 6.2, 40 + i * 3.4, 1.4, { steps: 20 })).join("") + caja(122, 71, 12, 2, 46, 1.4, { r: 0.4, crease: "none" }) + nodo("clima", 122, 72, 64, { chico: true })]);
  cosas.push([146, -100, () => poste("gw", 146, -100, { alto: 84, panel: true })]);
  cosas.sort(cerca).forEach((c) => o.push(c[2]()));
  o.push(texto(100, -64, "PUERTA DE ENLACE"), texto(92, 22, "VÁLVULA Y PRESIÓN"), texto(94, 104, "ESTACIÓN DE CLIMA"), texto(-176, 106, "CUARTEL · 6 HILERAS", 8.5, "lo"));
  o.push(enlace("c1", "c2"), enlace("c2", "c3"), enlace("c3", "gw"), enlace("pr", "gw"), enlace("clima", "gw"));
  return figura(null, "Un cuartel de cultivo con seis hileras. Tres nodos con estaca, panel solar y sondas de suelo quedan repartidos entre las hileras. Al costado, la matriz de riego con una válvula y un nodo de presión, una estación de clima sobre un mástil y un poste con la puerta de enlace y su panel solar.", o);
}

// ================= 05 · dron =================
function dron() {
  const B = { x: -215, y: -150, w: 430, d: 300, r: 9 };
  proy([...k.boxCorners(B, -16, 0), [-140, -70, 132], [150, -90, 112], [-60, 110, 120]]);
  const o = [base(B)], ZV = 92;
  // dos nodos apartados, entre rocas
  const lejos = [["r1", -150, -62], ["r2", -118, 84]];
  for (const [c, x, y] of lejos) {
    for (const [dx, dy, r] of [[-22, -8, 4.6], [-14, 16, 3.2], [20, -12, 4], [14, 18, 2.6]]) o.push(S(G.sphereOf([x + dx, y + dy, r * 0.55], r, P), { tone: "lo" }));
    o.push(L(k.ring(x, y, 20, 0.1, P, 40), { tone: "faint", dashed: true }), nodo(c, x, y, 0, { estaca: 11, panel: true }));
  }
  // el cerro que corta la línea de vista
  o.push(S(tronco(-62, -132, 78, 250, 0, 40, 30), { tone: "mid", crease: "lo" }), L(k.lineOnTop([-26, -96], [-26, 82], 40, P), { tone: "faint" }));
  // base: plataforma de despegue con un dron en espera, y la puerta de enlace
  const [px, py] = [118, 62];
  o.push(cil(px, py, 30, 0, 2, { steps: 48, bevel: 0.6 }), L(k.ring(px, py, 24, 2, P, 48), { tone: "lo" }), L(k.lineOnTop([px - 8, py - 10], [px - 8, py + 10], 2, P) + k.lineOnTop([px + 8, py - 10], [px + 8, py + 10], 2, P) + k.lineOnTop([px - 8, py], [px + 8, py], 2, P), { tone: "mid" }));
  o.push(gabinete("gw", 120, -112, { w: 40, d: 24, h: 58 }));
  const girado = (cx, cy, largo, ancho, a) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => [cx + (i * largo / 2) * Math.cos(a) - (j * ancho / 2) * Math.sin(a), cy + (i * largo / 2) * Math.sin(a) + (j * ancho / 2) * Math.cos(a)]);
  const cuadri = (x, y, z, lit) => {
    const d = [S(G.sphereOf([x, y, z - 2], 2.8, P), { tone: "mid" })];
    for (const a of [Math.PI / 4, (3 * Math.PI) / 4]) d.push(S(k.extrude(girado(x, y, 50, 2.8, a), z + 1.2, 1.8, P), { tone: "mid", crease: "none" }));
    d.push(S(k.slabOf({ x: x - 8, y: y - 6, w: 16, d: 12, r: 3 }, z, 5.8, P, 5, 0.6), { tone: "hi", crease: "lo", lit, className: "nodo-caja" }), k.dotsSvg([at([x + 5, y + 4, z + 5.8])], { size: 0.9, tone: "hi", pulse: true }));
    for (const [mx, my] of [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([i, j]) => [x + i * 17.7, y + j * 17.7]).sort(cerca)) d.push(cil(mx, my, 2.1, z + 3, 3.2, { steps: 12 }), S(k.cylinder(mx, my, 11, z + 6.4, 0.5, P, 32), { tone: "lo", crease: "none" }), L(k.ring(mx, my, 6.6, z + 6.9, P, 24), { tone: "faint" }), k.dotsSvg([at([mx, my, z + 6.9])], { size: 0.5, tone: "hi" }));
    d.push(L(seg([x - 6, y + 6, z], [x - 9, y + 9, z - 6]) + seg([x + 6, y + 6, z], [x + 9, y + 9, z - 6]) + seg([x - 11, y + 9, z - 6], [x + 11, y + 9, z - 6]), { tone: "mid" }));
    return d.join("");
  };
  o.push(cuadri(px, py, 8.4, false));
  // ruta de vuelo: sale de la base, pasa sobre los dos nodos y vuelve
  const ruta = [[px, py, ZV], [-150, -62, ZV], [-118, 84, ZV], [px, py, ZV]];
  o.push(`<g data-capa="ruta">${L(k.pathOf(ruta.map(at), true), { tone: "mid", dashed: true })}${lejos.map(([c, x, y]) => L(seg([x + 5, y - 3, 46], [x + 5, y - 3, ZV - 4]), { tone: "mid", dotted: true })).join("")}${L(seg([px, py, 20], [px, py, ZV - 4]), { tone: "faint", dotted: true })}</g>`);
  puntas.base = at([px, py, ZV + 8]);
  o.push(texto(-196, -22, "NODO SIN COBERTURA"), texto(-176, 124, "NODO SIN COBERTURA"), texto(76, 108, "BASE DE VUELO"), texto(74, -70, "PUERTA DE ENLACE"), texto(-58, 136, "CERRO", 8.5, "lo"));
  o.push(enlace("base", "gw", { dashed: true, ends: "to", tipo: "descarga" }));
  o.push(`<g data-dron>${cuadri(px, py, ZV, true)}</g>`);
  return { svg: figura(null, "Un terreno partido por un cerro. A un lado, dos nodos con panel solar quedan sin línea de vista. Al otro, una plataforma de vuelo con un dron en espera y un gabinete con la puerta de enlace. Una ruta punteada sale de la plataforma, pasa sobre los dos nodos y vuelve; un dron la recorre.", o), ruta: ruta.map((p) => at(p).map((v) => +v.toFixed(1))) };
}

const sal = {};
for (const [n, f] of Object.entries({ correas, pila, planta, cultivo, dron })) {
  const r = f(); sal[n] = typeof r === "string" ? { svg: r } : r;
  console.log(n.padEnd(8), (sal[n].svg.match(/class="iso-solid/g) || []).length, "sólidos,", Math.round(sal[n].svg.length / 1024), "kB, escala", P.scale.toFixed(2));
}
writeFileSync("fig_proyectos.json", JSON.stringify({ ancho: WIDTH, alto: HEIGHT, ...sal }));
