// Una lámina por proyecto: pila, planta, cultivo, dron, malla de emergencia e incendios. Cada una muestra los sensores desplegados,
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

// ================= 01 · pila de lixiviación: corte de la pila con picas clavadas y esferas enterradas =================
// una pica: tubo clavado con tres bandas de medición y la cabeza al aire, con panel y antena
function pica(clave, x, y, zs, { largo = 40, corte = false } = {}) {
  const o = [];
  if (corte) {
    o.push(S(G.lathe([[0, 0.5], [7, 2.1], [largo + 7, 2.1]], eje([x, y, zs - largo - 7], [0, 0, 1]), P), { tone: "hi", crease: "lo" }));
    for (const f of [0.2, 0.5, 0.8]) o.push(cil(x, y, 3, zs - largo * f - 1.7, 3.4, { steps: 14, tone: "hi", lit: true }));
  }
  o.push(cil(x, y, 5.4, zs, 1.6, { steps: 18, tone: "lo" }), S(k.cylinder(x, y, 3.8, zs + 1.6, 7, P, 16), { tone: "hi", crease: "lo", lit: true, className: "nodo-caja" }));
  const FP = G.frameOf([x - 7, y - 8, zs + 9.6], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
  o.push(S(G.prismOf(FP, [[0, 0], [9, 5], [8.5, 5.9], [-0.5, 0.9]], 0, 12, P), { tone: "mid", crease: "lo" }));
  o.push(cil(x + 2.2, y + 2.2, 0.6, zs + 8.6, 15, { steps: 8, tone: "hi", crease: "none" }), cil(x + 2.2, y + 2.2, 1.1, zs + 23.6, 1.6, { steps: 8, tone: "hi" }));
  puntas[clave] = at([x + 2.2, y + 2.2, zs + 25.2]); puntas[clave + "pie"] = at([x, y, zs - largo * 0.8]);
  return `<g data-nodo="${clave}">${o.join("")}</g>`;
}
// sonda de desagüe: celda intercalada en la tubería que sale del pie de la pila, con su mástil de panel y antena
function sonda(clave, y, x0, x1) {
  const o = [rollo(eje([x0, y, 3.4], [1, 0, 0]), 0, x1 - x0, 2.6, { crease: "none" })];
  const xs = x0 + 18;
  o.push(S(G.disc(0, 14, 5.6, eje([xs, y, 3.6], [1, 0, 0]), P), { tone: "hi", crease: "lo", lit: true }));
  o.push(cil(xs + 7, y, 0.8, 9, 22, { steps: 8, tone: "hi", crease: "none" }));
  const FP = G.frameOf([xs + 1, y - 8, 24], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
  o.push(S(G.prismOf(FP, [[0, 0], [9, 5], [8.5, 5.9], [-0.5, 0.9]], 0, 12, P), { tone: "mid", crease: "lo" }), cil(xs + 7, y, 1.2, 31, 1.6, { steps: 8, tone: "hi" }));
  puntas[clave] = at([xs + 7, y, 32.6]);
  return `<g data-nodo="${clave}">${o.join("")}</g>`;
}
function pila() {
  const B = { x: -200, y: -150, w: 400, d: 258, r: 9 }, H = 92, YC = -4, YB = -138, X0 = -186, X1 = 118, XT = X1 - 44;
  const talud = (z) => X1 - ((X1 - XT) * z) / H;
  proy([...k.boxCorners(B, -16, 0), [X0, YB, H], [XT, YC, H + 30], [182, -132, 140], [-144, YC, H + 28]]);
  const o = [base(B)];
  // el bloque de pila: techo regado, cara de corte al frente y talud hacia el desagüe
  const FB = G.frameOf([0, YB, 0], [0, 1, 0], [0, 0, 1], [1, 0, 0]);
  o.push(S(G.prismOf(FB, [[0, X0], [H, X0], [H, XT], [0, X1]], 0, YC - YB, P), { tone: "mid", crease: "lo" }));
  for (let y = YB + 12; y <= YC - 8; y += 10) o.push(L(k.lineOnTop([X0 + 8, y], [XT - 8, y], H, P), { tone: "faint" }));
  // dónde hay una esfera enterrada: una marca en el techo por cada una, a lo largo y a lo ancho
  for (const y of [-118, -82, -46]) for (const x of [-164, -124, -84, -44, -4, 36]) o.push(L(k.ring(x, y, 4.4, H + 0.1, P, 18), { tone: "mid", dashed: true }), D([[x, y, H + 0.1]], { size: 0.7, tone: "hi" }));
  // picas, menos densas que las esferas; las de atrás solo muestran la cabeza
  o.push(pica("p4", -144, -82, H), pica("p5", -64, -82, H), pica("p6", 16, -82, H));
  // router, canaleta de PLS y un desagüe con sonda por módulo
  o.push(poste("router", 182, -132, { alto: 104, panel: true }));
  o.push(caja(164, -128, 9, 96, 0, 2.6, { tone: "lo", crease: "none", r: 1 }), L(k.lineOnTop([168.5, -124], [168.5, -36], 2.6, P), { tone: "faint", dashed: true }));
  o.push(sonda("d1", -108, X1 - 8, 165), sonda("d2", -54, X1 - 8, 165));
  // la cara del corte: límite entre pisos, lámina del fondo, drenes y grano del mineral
  o.push(L(seg([X0, YC, H / 2], [talud(H / 2), YC, H / 2]), { tone: "lo", dashed: true }), L(seg([X0, YC, 1.4], [X1, YC, 1.4]), { tone: "mid" }));
  for (const x of [-150, -90, -30, 30, 88]) o.push(rollo(eje([x, YC - 2.4, 4.4], [0, 1, 0]), 0, 3.2, 2.5, { tone: "hi" }));
  const grano = []; for (let i = 0; i < 170; i++) { const z = 9 + ((i * 41 + (i % 7) * 13) % (H - 13)), x = X0 + 6 + ((i * 67) % (X1 - X0 - 12)); if (x < talud(z) - 5) grano.push([x, YC, z]); }
  o.push(D(grano, { size: 0.45, tone: "lo" }));
  // esferas enterradas en los dos pisos
  const esf = [["l1", -156, 24], ["l2", -106, 24], ["l3", -56, 24], ["l4", -6, 24], ["l5", 44, 24], ["l6", 88, 22], ["u1", -124, 62], ["u2", -84, 62], ["u3", -28, 62], ["u4", 36, 62]];
  for (const [c, x, z] of esf) { o.push(S(G.sphereOf([x, YC + 0.5, z], 6, P), { tone: "hi", lit: true }), L(k.sideArc(x, YC + 0.5, 6, z, P, 16), { tone: "lo" })); puntas[c] = at([x, YC + 0.5, z]); }
  // picas sobre el corte: se ve el tubo dentro del mineral
  o.push(pica("p1", -144, YC, H, { corte: true, largo: 46 }), pica("p2", -64, YC, H, { corte: true, largo: 46 }), pica("p3", 16, YC, H, { corte: true, largo: 46 }));
  o.push(gabinete("gw", 164, 62, { w: 30, d: 18, h: 44 }));
  o.push(texto(-176, 10, "CORTE DE LA PILA · SIN ESCALA"), texto(100, -22, "SONDAS DE DESAGÜE", 7.5), texto(66, 92, "PUERTA DE ENLACE"));
  // malla inductiva: de esfera en esfera hasta la pica más cercana
  const ind = (a, b) => `<g data-enlace="induccion">${k.wireSvg(puntas[a], puntas[b + "pie"] ?? puntas[b], { tone: "mid", dashed: true, size: 1, ends: "none" })}</g>`;
  o.push(ind("l1", "u1"), ind("l2", "u1"), ind("l3", "u2"), ind("l4", "u3"), ind("l5", "u4"), ind("l6", "l5"), ind("u1", "p1"), ind("u2", "p2"), ind("u3", "p2"), ind("u4", "p3"));
  o.push(enlace("p4", "p5"), enlace("p5", "p6"), enlace("p6", "router"), enlace("p1", "p2"), enlace("p2", "p3"), enlace("p3", "router"), enlace("d1", "router"), enlace("d2", "router"), enlace("router", "gw"));
  return figura(null, "Corte de una pila de lixiviación de dos pisos. Bajo el techo hay esferas enterradas repartidas a lo largo y a lo ancho; en el corte se ven diez, en dos niveles, enlazadas entre sí hasta la pica más cercana. Seis picas, menos densas, están clavadas desde el techo: el tubo queda dentro del mineral y la cabeza con panel y antena queda al aire. Al pie del talud, dos tuberías de desagüe llevan una sonda cada una antes de la canaleta. Picas y sondas se enlazan por radio a un router solar, y este a la puerta de enlace.", o);
}

// ================= 02 · planta de procesos =================
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

// ================= 03 · cultivo =================
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

// ================= 04 · dron =================
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

// dibuja algo apoyado a una altura z (un poste sobre un cerro, por ejemplo)
const sube = (z, fn) => { const P0 = P, a = k.iso([0, 0, 0], P0), b = k.iso([0, 0, z], P0); P = { ...P0, origin: [P0.origin[0] + b[0] - a[0], P0.origin[1] + b[1] - a[1]] }; const r = fn(); P = P0; return r; };
const girado = (cx, cy, largo, ancho, a) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => [cx + (i * largo / 2) * Math.cos(a) - (j * ancho / 2) * Math.sin(a), cy + (i * largo / 2) * Math.sin(a) + (j * ancho / 2) * Math.cos(a)]);
const cuadri = (x, y, z, lit) => {
  const d = [S(G.sphereOf([x, y, z - 2], 2.8, P), { tone: "mid" })];
  for (const a of [Math.PI / 4, (3 * Math.PI) / 4]) d.push(S(k.extrude(girado(x, y, 50, 2.8, a), z + 1.2, 1.8, P), { tone: "mid", crease: "none" }));
  d.push(S(k.slabOf({ x: x - 8, y: y - 6, w: 16, d: 12, r: 3 }, z, 5.8, P, 5, 0.6), { tone: "hi", crease: "lo", lit, className: "nodo-caja" }), k.dotsSvg([at([x + 5, y + 4, z + 5.8])], { size: 0.9, tone: "hi", pulse: true }));
  for (const [mx, my] of [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([i, j]) => [x + i * 17.7, y + j * 17.7]).sort(cerca)) d.push(cil(mx, my, 2.1, z + 3, 3.2, { steps: 12 }), S(k.cylinder(mx, my, 11, z + 6.4, 0.5, P, 32), { tone: "lo", crease: "none" }), L(k.ring(mx, my, 6.6, z + 6.9, P, 24), { tone: "faint" }));
  return d.join("");
};

// ================= 06 · comunicación en catástrofes: malla LoRa con repetidores solares =================
function malla() {
  const B = { x: -215, y: -150, w: 430, d: 300, r: 9 };
  proy([...k.boxCorners(B, -16, 0), [-120, -76, 176], [112, -92, 150], [150, 90, 100]]);
  const o = [base(B)];
  // dos cerros con un repetidor solar en cada cima
  o.push(S(tronco(-196, -138, 150, 124, 0, 50, 40), { tone: "mid", crease: "lo" }), sube(50, () => texto(-152, -60, "REPETIDOR", 8)));
  o.push(sube(50, () => poste("ra", -121, -76, { alto: 70, panel: true })));
  o.push(S(tronco(44, -140, 140, 96, 0, 34, 28), { tone: "mid", crease: "lo" }), sube(34, () => texto(76, -78, "REPETIDOR", 8)));
  o.push(sube(34, () => poste("rb", 114, -92, { alto: 70, panel: true })));
  // antena de celular caída: la red normal no está
  o.push(caja(-46, -58, 14, 14, 0, 3, { r: 1.5 }), rollo(eje([-34, -46, 4], [0.95, 0.3, 0.04]), 0, 68, 2.2, { crease: "none", tone: "lo" }), L(seg([-8, -44, 7], [4, -52, 8]) + seg([12, -36, 7], [24, -44, 8]), { tone: "lo" }));
  // el poblado: casas bajas y una calle
  o.push(caja(-150, 54, 250, 12, 0, 0.6, { tone: "lo", crease: "none", r: 1 }), L(k.lineOnTop([-146, 60], [96, 60], 0.6, P), { tone: "faint", dashed: true }));
  const casas = [[-140, 14], [-104, 20], [-66, 12], [-26, 22], [14, 14], [-128, 84], [-88, 90], [-44, 82], [0, 92], [44, 84]].sort(cerca);
  for (const [x, y] of casas) { const F = G.frameOf([x, y, 12], [1, 0, 0], [0, 1, 0], [0, 0, 1]); o.push(caja(x, y, 26, 20, 0, 12, { r: 0.8, tone: "mid" }), S(G.prismOf(F, [[-1.5, 0], [21.5, 0], [10, 8]], -1.5, 27.5, P), { tone: "mid", crease: "lo" })); }
  // equipos de mano de las brigadas y del albergue
  o.push(nodo("b1", -116, 50, 0, { chico: true }), nodo("b2", -20, 62, 0, { chico: true }), nodo("b3", 62, 108, 0, { chico: true }));
  // puesto de mando: puerta de enlace y antena satelital
  o.push(gabinete("gw", 146, 62, { w: 38, d: 22, h: 50 }));
  const FD = eje([126, 104, 16], [0.45, 0.5, 0.74]);
  o.push(cil(126, 104, 2, 0, 14, { steps: 10, tone: "hi", crease: "none" }), rollo(FD, 0, 2.2, 14, { tone: "hi", inner: L(G.arcOf(FD, 2.2, 9, P), { tone: "faint" }) }), rollo(FD, 2.2, 9, 1, { crease: "none" }));
  o.push(texto(-150, 126, "BRIGADAS Y ALBERGUE CON EQUIPO DE MANO"), texto(92, 132, "PUESTO DE MANDO"), texto(-40, -8, "RED CELULAR CAÍDA", 8.5, "lo"));
  o.push(enlace("b1", "ra"), enlace("b2", "ra"), enlace("ra", "rb"), enlace("b3", "rb"), enlace("rb", "gw"), enlace("b2", "b3"));
  return figura(null, "Un poblado entre dos cerros, con la antena de celular caída. En cada cima hay un repetidor con panel solar. Tres equipos de mano, de las brigadas y del albergue, se enlazan por radio a los repetidores, y estos al puesto de mando, que tiene la puerta de enlace y una antena satelital.", o);
}

// ================= 07 · incendios forestales: dos torres dan dos rumbos; el dron confirma =================
function incendios() {
  const B = { x: -215, y: -150, w: 430, d: 300, r: 9 };
  proy([...k.boxCorners(B, -16, 0), [-160, 96, 128], [136, -112, 128], [-40, -40, 120]]);
  const o = [base(B)], ZV = 86, FOCO = [-46, -44];
  const arbol = (x, y, h) => cil(x, y, 1.1, 0, 5, { steps: 6, crease: "none", tone: "lo" }) + S(G.lathe([[0, h * 0.42], [h, 0.6]], eje([x, y, 4], [0, 0, 1]), P, { steps: 14 }), { tone: "mid", crease: "none" });
  const torre = (clave, x, y) => {
    const t = [];
    for (const [dx, dy] of [[-7, -7], [7, -7], [-7, 7], [7, 7]].sort(cerca)) t.push(cil(x + dx, y + dy, 1, 0, 62, { steps: 8, tone: "hi", crease: "none" }));
    t.push(L(seg([x - 7, y + 7, 4], [x + 7, y + 7, 30]) + seg([x + 7, y + 7, 4], [x - 7, y + 7, 30]) + seg([x - 7, y + 7, 30], [x + 7, y + 7, 58]) + seg([x + 7, y + 7, 30], [x - 7, y + 7, 58]) + seg([x + 7, y - 7, 4], [x + 7, y + 7, 30]) + seg([x + 7, y + 7, 4], [x + 7, y - 7, 30]) + seg([x + 7, y - 7, 30], [x + 7, y + 7, 58]) + seg([x + 7, y + 7, 30], [x + 7, y - 7, 58]), { tone: "lo" }));
    t.push(caja(x - 12, y - 12, 24, 24, 62, 2.4, { r: 1.2, bevel: 0.4 }));
    const FP = G.frameOf([x - 13, y - 13, 66], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
    t.push(S(G.prismOf(FP, [[0, 0], [12, 7], [11.4, 8], [-0.6, 1]], 0, 22, P), { tone: "mid", crease: "lo" }));
    t.push(cil(x + 2, y + 2, 4.6, 64.4, 4, { steps: 16 }), S(k.slabOf({ x: x - 5, y: y - 3, w: 14, d: 10, r: 1.5 }, 68.4, 8, P, 3, 0.5), { tone: "hi", crease: "lo", lit: true, className: "nodo-caja" }), cil(x + 8, y - 8, 0.7, 64.4, 20, { steps: 8, tone: "hi", crease: "none" }));
    puntas[clave] = at([x + 8, y - 8, 86]); puntas[clave + "ojo"] = at([x + 2, y + 2, 73]);
    return t.join("");
  };
  // bosque: árboles por delante y por detrás del foco, de atrás hacia adelante
  const arboles = [];
  for (let i = 0; i < 46; i++) { const x = -196 + ((i * 53) % 290), y = -134 + ((i * 97) % 210), h = 13 + ((i * 7) % 9); if (Math.hypot(x - FOCO[0], y - FOCO[1]) < 22 || (x > 80 && y > 20) || Math.hypot(x + 160, y - 96) < 22 || Math.hypot(x - 136, y + 112) < 24) continue; arboles.push([x, y, h]); }
  const cosas = arboles.map(([x, y, h]) => [x, y, () => arbol(x, y, h)]);
  cosas.push([FOCO[0], FOCO[1], () => `<g data-fuego>${S(G.lathe([[0, 5], [12, 0.6]], eje([FOCO[0], FOCO[1], 0], [0, 0, 1]), P, { steps: 14 }), { tone: "hi", crease: "none", lit: true })}</g>` + [[2, -2, 18, 5], [-3, 3, 30, 7], [3, 2, 44, 9], [-2, -1, 60, 10]].map(([dx, dy, z, r], i) => `<g data-humo style="--i:${i}">${S(G.sphereOf([FOCO[0] + dx, FOCO[1] + dy, z], r, P), { tone: "lo" })}</g>`).join("")]);
  cosas.push([-160, 96, () => torre("t1", -160, 96)], [136, -112, () => torre("t2", 136, -112)]);
  const [px, py] = [126, 84];
  cosas.push([px, py, () => cil(px, py, 28, 0, 2, { steps: 48, bevel: 0.6 }) + L(k.ring(px, py, 22, 2, P, 44), { tone: "lo" })]);
  cosas.push([170, 30, () => gabinete("gw", 152, 22, { w: 40, d: 24, h: 54 })]);
  cosas.sort(cerca).forEach((c) => o.push(c[2]()));
  // rumbos de las dos torres: se cruzan en el foco
  puntas.foco = at([FOCO[0], FOCO[1], 14]);
  o.push(`<g data-capa="rumbos">${k.wireSvg(puntas.t1ojo, puntas.foco, { tone: "mid", dashed: true, size: 1.1, ends: "to" })}${k.wireSvg(puntas.t2ojo, puntas.foco, { tone: "mid", dashed: true, size: 1.1, ends: "to" })}</g>`);
  const ruta = [[px, py, ZV], [FOCO[0] + 26, FOCO[1] + 26, ZV], [px, py, ZV]];
  o.push(`<g data-capa="ruta">${L(k.pathOf(ruta.slice(0, 2).map(at)), { tone: "mid", dashed: true })}</g>`);
  o.push(texto(-196, 136, "TORRE 1"), texto(100, -72, "TORRE 2"), texto(-100, -8, "FOCO"), texto(92, 124, "BASE DEL DRON"), texto(164, 68, "CENTRAL"));
  o.push(enlace("t1", "gw"), enlace("t2", "gw"));
  o.push(`<g data-dron>${cuadri(px, py, ZV, true)}</g>`);
  return { svg: figura(null, "Un bosque con un foco de incendio que levanta humo. Dos torres con cámaras, una a cada lado, apuntan al foco: sus dos rumbos se cruzan sobre él. Las torres se enlazan por radio a una central, junto a la cual está la base del dron. El dron vuela desde la base hasta el foco y vuelve.", o), ruta: ruta.map((p) => at(p).map((v) => +v.toFixed(1))) };
}

const sal = {};
for (const [n, f] of Object.entries({ pila, planta, cultivo, dron, malla, incendios })) {
  const r = f(); sal[n] = typeof r === "string" ? { svg: r } : r;
  console.log(n.padEnd(8), (sal[n].svg.match(/class="iso-solid/g) || []).length, "sólidos,", Math.round(sal[n].svg.length / 1024), "kB, escala", P.scale.toFixed(2));
}
writeFileSync("fig_proyectos.json", JSON.stringify({ ancho: WIDTH, alto: HEIGHT, ...sal }));
