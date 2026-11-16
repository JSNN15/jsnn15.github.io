// Figura "Del terreno al servidor": cinco zonas con sus nodos, la malla de radio, la puerta de enlace y el dron.
// Construida con el kit isométrico de Anatomy (github.com/wheresryan22/anatomy, licencia MIT, copiado en ./kit).
// Uso: node build_red.mjs  → fig_red.json
import { writeFileSync } from "node:fs";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";

const WIDTH = 920, HEIGHT = 600;
const SUELO = { x: -254, y: -190, w: 504, d: 380, r: 10 };
let P = k.fitProjection([...k.boxCorners(SUELO, -16, 0), [-132, -90, 126], [15, 134, 100]], WIDTH, HEIGHT, { pad: 22 });
// cada zona se dibuja en sus propias coordenadas y se traslada al lugar que le toca en el terreno
const zona = (dx, dy, fn) => { const P0 = P, a = k.iso([0, 0, 0], P0), b = k.iso([dx, dy, 0], P0); P = { ...P0, origin: [P0.origin[0] + b[0] - a[0], P0.origin[1] + b[1] - a[1]] }; fn(); P = P0; };
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const CAJA = "nodo-caja"; // la pieza que se enciende al elegir un caso
const L = (d, style) => k.lineSvg(d, style);
const D = (pts, style) => k.dotsSvg(pts.map(at), style);
const seg = (a, b) => k.segment(a, b, P);
const caja = (x, y, w, d, z, h, o = {}) => S(k.slabOf({ x, y, w, d, r: o.r ?? 1 }, z, h, P, o.steps ?? 3, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, lit: o.lit, inner: o.inner });
const cil = (x, y, r, z, h, o = {}) => S(k.cylinder(x, y, r, z, h, P, o.steps ?? 24, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, lit: o.lit, inner: o.inner });
const eje = (o, a) => G.frameAlong(o, a);
const rollo = (F, s0, s1, r, o = {}) => S(G.disc(s0, s1, r, F, P), { tone: o.tone ?? "mid", crease: o.crease ?? "lo", inner: o.inner });
const texto = (x, y, z, t, size = 7.5, tone = "lo") => k.faceTextSvg(k.topMatrix([x, y], z, P, "x"), t, { size, tone });

// tronco de pirámide de base rectangular (las pilas): caras +x y +y a la vista, techo plano
function tronco(x, y, w, d, z, h, m) {
  const A = [[x, y], [x + w, y], [x + w, y + d], [x, y + d]].map(([a, b]) => at([a, b, z]));
  const T = [[x + m, y + m], [x + w - m, y + m], [x + w - m, y + d - m], [x + m, y + d - m]].map(([a, b]) => at([a, b, z + h]));
  const contorno = k.pathOf([A[3], A[2], A[1], T[1], T[0], T[3]], true);
  return { fill: contorno, outline: contorno, crease: k.pathOf([T[3], T[2], T[1]]) + k.pathOf([A[2], T[2]]), top: k.pathOf(T, true), shades: ["", "", k.pathOf([A[1], A[2], T[2], T[1]], true), k.pathOf([A[3], A[2], T[2], T[3]], true)] };
}
// rectángulo girado, para los brazos del dron
const girado = (cx, cy, largo, ancho, ang) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => [cx + (i * largo / 2) * Math.cos(ang) - (j * ancho / 2) * Math.sin(ang), cy + (i * largo / 2) * Math.sin(ang) + (j * ancho / 2) * Math.cos(ang)]);

// ---- un nodo: caja con tapa, antena y luz; con estaca y panel solar donde no hay dónde fijarlo ----
const puntas = {};
function nodo(id, clave, x, y, z, { estaca = 0, panel = false, lit = false } = {}) {
  const out = [];
  const zc = z + estaca;
  if (estaca) {
    out.push(cil(x, y, 1.1, z, estaca, { steps: 12, crease: "none" }));
    out.push(L(k.ring(x, y, 2.6, z + 0.2, P, 14), { tone: "lo" }));
  }
  if (panel) {
    const FP = G.frameOf([x - 12, y - 14, zc + 7], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
    out.push(S(G.prismOf(FP, [[0, 0], [13, 7.6], [12.4, 8.6], [-0.6, 1]], 0, 24, P), { tone: "mid", crease: "lo" }));
    for (const s of [6, 12, 18]) out.push(L(seg([x - 12 + s, y - 14 - 0.6, zc + 8], [x - 12 + s, y - 14 + 12.4, zc + 15.6]), { tone: "faint" }));
    out.push(L(seg([x - 12, y - 14 + 5.9, zc + 11.8], [x + 12, y - 14 + 5.9, zc + 11.8]), { tone: "faint" }));
  }
  const plan = { x: x - 9, y: y - 7, w: 18, d: 14, r: 2 };
  out.push(S(k.slabOf(plan, zc, 9.5, P, 4, 0.6), { tone: "hi", crease: "lo", lit, className: CAJA, inner: L(k.sideSeam(plan, zc + 7.4, P, 4), { tone: "lo" }) }));
  out.push(L(k.planOutline(k.insetPlan(plan, 2.2), zc + 9.5, P, 4), { tone: "faint" }));
  out.push(D(k.corners(plan, 2.6).map(([a, b]) => [a, b, zc + 9.5]), { size: 0.4, tone: "lo" }));
  const [ax, ay] = [x + 5, y - 3];
  out.push(cil(ax, ay, 2, zc + 9.5, 2.6, { steps: 12 }));
  out.push(cil(ax, ay, 0.7, zc + 12.1, 19, { steps: 8, tone: "hi", crease: "none" }));
  out.push(cil(ax, ay, 1.3, zc + 31.1, 2, { steps: 10, tone: "hi" }));
  out.push(k.dotsSvg([at([x - 5, y + 3, zc + 9.5])], { size: 1.1, tone: "hi", pulse: true }));
  puntas[clave] = at([ax, ay, zc + 33.1]);
  return `<g data-nodo="${id}">${out.join("")}</g>`;
}

const capas = [];
const pon = (...svg) => capas.push(svg.flat().join(""));

const DRON = [70, 178, 76];
// ================= suelo y plataformas =================
{
  const o = [`<path class="iso-halo" d="${k.haloOf(SUELO, -16, 16, P)}"/>`];
  o.push(S(k.slabOf(SUELO, -12, 12, P, 8, 1.6), { tone: "mid" }));
  o.push(L(k.planOutline(k.insetPlan(SUELO, 5), 0, P), { tone: "faint" }));
  o.push(D(k.corners(SUELO, 12).map(([x, y]) => [x, y, 0]), { size: 0.6 }));
  // cuadrícula de terreno, muy tenue
  for (let x = -220; x <= 220; x += 40) o.push(L(k.lineOnTop([x, -184], [x, 184], 0, P), { tone: "faint", dotted: true }));
  pon(o);
}
const PLAT = [
  { id: "enlace", n: "", t: "PUERTA DE ENLACE", x: -244, y: -180, w: 146, d: 112 },
  { id: "correa", n: "01", t: "CORREA", x: -88, y: -180, w: 330, d: 104, tx: 128 },
  { id: "planta", n: "03", t: "PLANTA", x: -66, y: -66, w: 162, d: 142, tx: 40 },
  { id: "pila", n: "02", t: "PILA", x: -244, y: -58, w: 168, d: 238 },
  { id: "cultivo", n: "04", t: "CULTIVO", x: 106, y: -66, w: 136, d: 246 },
];
for (const p of PLAT) {
  const plan = { x: p.x, y: p.y, w: p.w, d: p.d, r: 4 };
  pon(`<g data-zona="${p.id}">`, S(k.slabOf(plan, 0, 1.4, P, 4), { tone: "lo", crease: "none" }), L(k.planOutline(k.insetPlan(plan, 3), 1.4, P, 4), { tone: "faint" }),
    D(k.corners(plan, 7).map(([x, y]) => [x, y, 1.4]), { size: 0.5, tone: "lo" }),
    texto(p.tx ?? p.x + 9, p.y + p.d - 5.5, 1.4, (p.n ? p.n + " " : "") + p.t, 9, "mid"), `</g>`);
}
const Z0 = 1.4;

// ================= puerta de enlace y servidor de borde =================
zona(6, 2, () => {
  const o = [];
  // sala: cuerpo, techo, puerta, celosías y luces
  const sala = { x: -240, y: -168, w: 66, d: 52, r: 1.5 };
  o.push(S(k.slabOf(sala, Z0, 40, P, 3, 0.6), { tone: "mid", inner: L(k.sideSeam(sala, Z0 + 3, P, 3), { tone: "faint" }) }));
  const yf = sala.y + sala.d, xf = sala.x + sala.w;
  o.push(L(seg([-230, yf, Z0 + 1], [-230, yf, Z0 + 31]) + seg([-230, yf, Z0 + 31], [-212, yf, Z0 + 31]) + seg([-212, yf, Z0 + 31], [-212, yf, Z0 + 1]), { tone: "mid" }));
  o.push(D([[-215, yf, Z0 + 16]], { size: 0.7, tone: "hi" }));
  for (let i = 0; i < 5; i++) o.push(L(seg([-204, yf, Z0 + 20 + i * 2.4], [-184, yf, Z0 + 20 + i * 2.4]), { tone: "lo" }));
  for (let i = 0; i < 6; i++) o.push(L(seg([xf, -158, Z0 + 22 + i * 2.2], [xf, -134, Z0 + 22 + i * 2.2]), { tone: "lo" }));
  o.push(k.dotsSvg([[xf, -128, Z0 + 31], [xf, -124, Z0 + 31], [xf, -120, Z0 + 31]].map(at), { size: 0.8, tone: "hi", pulse: true }));
  o.push(caja(sala.x - 3, sala.y - 3, sala.w + 6, sala.d + 6, Z0 + 40, 2.6, { r: 2, bevel: 0.5 }));
  o.push(caja(-222, -156, 16, 12, Z0 + 42.6, 5, { r: 1, tone: "mid" }), L(k.lineOnTop([-219, -150], [-209, -150], Z0 + 47.6, P), { tone: "lo" })); // equipo de clima
  // bandeja de cables hasta el mástil
  o.push(caja(-174, -96, 28, 5, Z0, 1.6, { tone: "lo", crease: "none", r: 0.5 }));
  // mástil con base, dos crucetas, antena de panel y antena de varilla
  const [mx, my] = [-140, -92];
  o.push(caja(mx - 8, my - 8, 16, 16, Z0, 2.4, { r: 1.5, bevel: 0.4 }), D(k.corners({ x: mx - 8, y: my - 8, w: 16, d: 16 }, 2.6).map(([x, y]) => [x, y, Z0 + 2.4]), { size: 0.45 }));
  o.push(cil(mx, my, 2, Z0 + 2.4, 96, { steps: 16, tone: "hi", crease: "none" }));
  for (const z of [34, 64]) o.push(L(k.sideArc(mx, my, 2, Z0 + z, P, 8), { tone: "lo" }));
  o.push(caja(mx - 14, my - 1.2, 28, 2.4, Z0 + 78, 1.6, { r: 0.4, tone: "mid" }), caja(mx - 1.2, my - 12, 2.4, 24, Z0 + 86, 1.6, { r: 0.4, tone: "mid" }));
  o.push(caja(mx + 3, my - 3, 3, 9, Z0 + 52, 16, { r: 0.8, tone: "mid" }));
  o.push(cil(mx - 12, my, 0.6, Z0 + 79.6, 10, { steps: 8, crease: "none" }), cil(mx + 12, my, 0.6, Z0 + 79.6, 10, { steps: 8, crease: "none" }));
  o.push(cil(mx, my, 0.8, Z0 + 98.4, 18, { steps: 8, tone: "hi", crease: "none" }), cil(mx, my, 1.4, Z0 + 116.4, 2, { steps: 10, tone: "hi" }));
  puntas.mastil = at([mx, my, Z0 + 118.4]);
  pon(o);
});

// ================= 02 · pila de lixiviación =================
zona(17, -14, () => {
  const o = [];
  o.push(S(tronco(-258, -30, 164, 190, Z0, 20, 19), { tone: "mid", crease: "lo" }));
  // banco del primer piso: líneas de riego a la vista
  for (let y = -4; y <= 134; y += 9) o.push(L(k.lineOnTop([-122, y], [-116, y], Z0 + 20, P), { tone: "faint" }));
  o.push(S(tronco(-232, -6, 106, 140, Z0 + 20, 15, 14), { tone: "mid", crease: "lo" }));
  const zt = Z0 + 35;
  for (let y = 14; y <= 114; y += 8) o.push(L(k.lineOnTop([-213, y], [-146, y], zt, P), { tone: "lo" }));  // líneas de goteo
  o.push(rollo(eje([-143, 10, zt + 1.6], [0, 1, 0]), 0, 108, 1.6, { crease: "none" }));                       // matriz de riego
  o.push(D([14, 38, 62, 86, 110].map((y) => [-143, y, zt + 3.2]), { size: 0.45, tone: "lo" }));
  // canaleta y piscina de solución al pie
  o.push(caja(-258, 166, 164, 6, Z0, 1, { tone: "lo", crease: "none", r: 0.5 }));
  o.push(S(k.slabOf({ x: -252, y: 176, w: 70, d: 14, r: 3 }, Z0, 0.6, P, 4), { tone: "lo", crease: "none" }), L(k.planOutline({ x: -249, y: 178.5, w: 64, d: 9, r: 2 }, Z0 + 0.6, P, 4), { tone: "mid" }), L(k.lineOnTop([-240, 183], [-196, 183], Z0 + 0.6, P), { tone: "faint", dashed: true }));
  // tres estacas con panel, de atrás hacia adelante
  o.push(nodo("pila", "pila1", -200, 30, zt, { estaca: 8, panel: true }));
  o.push(nodo("pila", "pila2", -172, 72, zt, { estaca: 8, panel: true }));
  o.push(nodo("pila", "pila3", -205, 106, zt, { estaca: 8, panel: true }));
  pon(o);
});

// ================= 01 · correa transportadora =================
zona(-26, 2, () => {
  const o = [];
  const X0 = -52, X1 = 250, YC = -136, ZL = Z0 + 14;
  const patas = [-40, 30, 100, 170, 240];
  const lado = (y) => [...patas.map((x) => caja(x - 1.6, y, 3.2, 3.2, Z0, 14, { r: 0.4, crease: "none" })), caja(X0, y - 0.4, X1 - X0, 4, ZL, 4, { r: 0.5, inner: L(seg([X0, y + 3.6, ZL + 2], [X1, y + 3.6, ZL + 2]), { tone: "faint" }) })];
  o.push(lado(YC - 19));
  o.push(caja(X0 + 6, YC - 13, X1 - X0 - 12, 26, Z0 + 9, 1, { tone: "lo", crease: "none", r: 0.3 }));                    // ramal de retorno
  o.push(rollo(eje([X0 + 2, YC - 15, ZL + 5], [0, 1, 0]), 0, 30, 6.4));                                                 // polea de cola
  for (let x = -30; x <= 222; x += 28) o.push(rollo(eje([x, YC - 15, ZL + 7.6], [0, 1, 0]), 0, 30, 2.8, { crease: "faint" }));
  o.push(rollo(eje([X1 - 4, YC - 16, ZL + 4.4], [0, 1, 0]), 0, 32, 7.4, { inner: L(G.arcOf(eje([X1 - 4, YC - 16, ZL + 4.4], [0, 1, 0]), 4, 7.4, P) + G.arcOf(eje([X1 - 4, YC - 16, ZL + 4.4], [0, 1, 0]), 28, 7.4, P), { tone: "faint" }) })); // polea motriz
  const banda = { x: X0 + 2, y: YC - 13, w: X1 - X0 - 6, d: 26, r: 0.3 };
  o.push(S(k.slabOf(banda, ZL + 10.6, 1.3, P, 2), { tone: "hi", crease: "lo" }));
  o.push(L(k.lineOnTop([banda.x, YC - 9], [banda.x + banda.w, YC - 9], ZL + 11.9, P) + k.lineOnTop([banda.x, YC + 9], [banda.x + banda.w, YC + 9], ZL + 11.9, P), { tone: "faint" }));
  // carga de mineral sobre la banda
  const FC = G.frameOf([X0 + 20, YC, ZL + 11.9], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
  o.push(S(G.prismOf(FC, [[-8, 0], [8, 0], [4, 3.6], [-3, 4.2]], 0, X1 - X0 - 34, P), { tone: "mid", crease: "lo" }));
  o.push(D(Array.from({ length: 30 }, (_, i) => [X0 + 26 + i * 9.1, YC + ((i * 7) % 5) - 2, ZL + 16.2]), { size: 0.4, tone: "lo" }));
  // chute de descarga y pila de acopio al final
  o.push(caja(X1, YC - 14, 12, 28, Z0 + 6, 16, { r: 1, bevel: 0.4 }));
  o.push(lado(YC + 15.4));
  // accionamiento: reductor y motor del lado de acá
  o.push(caja(X1 - 12, YC + 20, 16, 11, Z0, 2, { r: 0.6, tone: "lo" }), caja(X1 - 10, YC + 21, 9, 9, ZL - 1, 10, { r: 1.2, bevel: 0.4 }));
  const FM = eje([X1 - 30, YC + 25.5, ZL + 4], [1, 0, 0]);
  o.push(rollo(FM, 0, 18, 4.6, { inner: k.fadedSvg(G.ribsOf(FM, 2, 16, 4.6, 14, P, { fade: [0.05, 0.5] }), { tone: "lo" }) }), rollo(FM, 18, 20, 2, {}));
  o.push(caja(X1 - 31, YC + 21, 20, 9, Z0 + 10, 1.6, { r: 0.4, tone: "lo", crease: "none" }));
  // nodo de vibración fijado al larguero, con su acelerómetro en el descanso del polín
  o.push(cil(110, YC + 17.4, 2, ZL + 4, 2.6, { steps: 12, tone: "hi" }));
  o.push(nodo("correa", "correa", 126, YC + 23, ZL - 2, { lit: true }));
  o.push(caja(118, YC + 17, 16, 12, ZL - 3.6, 1.6, { r: 0.6, tone: "lo", crease: "none" }));
  o.push(k.wireSvg(at([111.6, YC + 18.6, ZL + 5]), at([120, YC + 21, ZL + 2]), { tone: "hi", size: 0.8, ends: "from" }));
  pon(o);
});

// ================= 03 · planta de procesos =================
zona(6, -18, () => {
  const o = [];
  const tanque = (x, y, r, h) => {
    const F = eje([x, y, Z0], [0, 0, 1]);
    const aros = [0.3, 0.62].map((f) => k.sideArc(x, y, r, Z0 + h * f, P, 28)).join("");
    return [cil(x, y, r + 2, Z0, 1.6, { steps: 36, tone: "lo" }), S(G.lathe([[1.6, r], [h, r], [h + r * 0.2, r * 0.16]], F, P), { tone: "hi", crease: "lo", inner: L(aros, { tone: "faint" }) }),
      cil(x, y, r * 0.16, Z0 + h + r * 0.2, 2.4, { steps: 12 }), L(seg([x + r * 0.72, y + r * 0.72, Z0 + 2], [x + r * 0.72, y + r * 0.72, Z0 + h]) + seg([x + r * 0.6, y + r * 0.82, Z0 + 2], [x + r * 0.6, y + r * 0.82, Z0 + h]), { tone: "lo" }),
      L(Array.from({ length: Math.floor(h / 4) }, (_, i) => seg([x + r * 0.72, y + r * 0.72, Z0 + 4 + i * 4], [x + r * 0.6, y + r * 0.82, Z0 + 4 + i * 4])).join(""), { tone: "lo" })];
  };
  o.push(tanque(-24, -6, 27, 50));
  o.push(tanque(48, -30, 17, 34));
  // tubería del estanque grande a la bomba
  o.push(rollo(eje([-4, 22, Z0 + 5], [0, 1, 0]), 0, 20, 2.2, { crease: "none" }), S(G.sphereOf([-4, 43, Z0 + 5], 2.6, P), { tone: "mid" }), rollo(eje([-3, 43, Z0 + 5], [1, 0, 0]), 0, 31, 2.2, { crease: "none" }));
  // bomba y motor sobre su base
  o.push(caja(24, 34, 50, 18, Z0, 2.2, { r: 1, bevel: 0.4 }), D(k.corners({ x: 24, y: 34, w: 50, d: 18 }, 2.6).map(([x, y]) => [x, y, Z0 + 2.2]), { size: 0.45 }));
  const FB = eje([28, 43, Z0 + 9.4], [1, 0, 0]);
  o.push(rollo(FB, 0, 2, 5), rollo(FB, 2, 9, 7.2, { inner: L(G.arcOf(FB, 5.5, 7.2, P), { tone: "faint" }) }), rollo(FB, 9, 13, 2.4, { crease: "none" }));
  o.push(cil(33.5, 43, 2.3, Z0 + 15, 13, { steps: 14, crease: "none" }), cil(33.5, 43, 3.4, Z0 + 21, 1.4, { steps: 14 }));     // descarga
  o.push(rollo(FB, 13, 15, 3.4), rollo(FB, 15, 36, 6.4, { inner: k.fadedSvg(G.ribsOf(FB, 17, 34, 6.4, 16, P, { fade: [0.05, 0.5] }), { tone: "lo" }) }), rollo(FB, 36, 39, 5), rollo(FB, 39, 41, 1.6, { crease: "none" }));
  o.push(caja(46, 37, 9, 5, Z0 + 14.6, 4, { r: 0.8 }));                                                                         // caja de conexiones del motor
  // manómetro sobre la descarga, mirando hacia acá
  const FG = eje([33.5, 44, Z0 + 32], [0, 1, 0]);
  o.push(cil(33.5, 43, 1, Z0 + 28, 2, { steps: 10, crease: "none" }), rollo(FG, -1.6, 1.4, 5.4, { tone: "hi", inner: L(G.arcOf(FG, 1.4, 4.2, P), { tone: "lo" }) }));
  o.push(L(seg([33.5, 45.4, Z0 + 32], [36, 45.4, Z0 + 34.6]), { tone: "hi" }));
  // nodo de vibración sobre el motor (imán)
  o.push(cil(57, 43, 1.8, Z0 + 15.6, 2.4, { steps: 12, tone: "hi" }));
  // cámara fija frente al manómetro: poste, caja y línea de visión
  o.push(nodo("planta", "planta", 33.5, 76, Z0, { estaca: 26 }));
  o.push(L(seg([33.5, 70.6, Z0 + 29.5], [33.5, 46.2, Z0 + 32]), { tone: "mid", dotted: true }));
  pon(o);
});

// ================= 05 · nodo sin cobertura =================
zona(-15, -18, () => {
  const o = [];
  for (const [x, y, r] of [[8, 138, 4.2], [16, 166, 3], [52, 144, 3.6], [44, 172, 2.4]]) o.push(S(G.sphereOf([x, y, r * 0.55], r, P), { tone: "lo" }));
  o.push(L(k.ring(30, 152, 17, 0.1, P, 40), { tone: "faint", dashed: true }));
  o.push(texto(-44, 196, 0, "05 SIN COBERTURA", 9, "mid"));
  o.push(nodo("dron", "remoto", 30, 152, 0, { estaca: 10, panel: true }));
  puntas.dronAbajo = at([DRON[0], DRON[1], DRON[2] - 3.8]); puntas.dronArriba = at([DRON[0], DRON[1], DRON[2] + 5]);
  pon(o);
});

// ================= 04 · cultivo =================
zona(-24, -6, () => {
  const o = [];
  const filas = [150, 174, 198, 222, 246];
  for (const x of filas) {
    o.push(caja(x - 5.5, -44, 11, 205, Z0, 1.6, { r: 5, tone: "lo", crease: "none", steps: 6 }));
    o.push(L(k.lineOnTop([x + 7, -40], [x + 7, 157], Z0, P), { tone: "faint" })); // línea de riego
  }
  const plantas = [];
  for (const x of filas) for (let y = -34; y <= 153; y += 17) plantas.push([x, y]);
  plantas.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
  const nodoEn = [186, 60];
  let puesto = false;
  for (const [x, y] of plantas) {
    if (!puesto && x + y > nodoEn[0] + nodoEn[1]) { o.push(nodo("cultivo", "cultivo", nodoEn[0], nodoEn[1], Z0, { estaca: 12, panel: true })); puesto = true; }
    o.push(cil(x, y, 4.8, Z0 + 1.6, 5.6, { steps: 20, bevel: 1 }));
  }
  // sonda de suelo junto al nodo
  o.push(cil(nodoEn[0] + 6, nodoEn[1] + 6, 0.8, Z0, 6, { steps: 8, tone: "hi", crease: "none" }));
  pon(o);
});

// ================= enlaces de radio =================
const enlace = (id, desde, hasta, o = {}) => `<g data-enlace="${id}">${k.wireSvg(puntas[desde], puntas[hasta], { tone: "mid", flow: !o.dashed, dashed: o.dashed, size: 1.1, ends: o.ends ?? "both" })}</g>`;
pon(enlace("correa", "correa", "mastil"), enlace("planta", "planta", "mastil"), enlace("pila", "pila3", "pila2"), enlace("pila", "pila2", "pila1"), enlace("pila", "pila1", "mastil"),
  enlace("cultivo", "cultivo", "correa"), enlace("cultivo", "correa", "mastil"), enlace("dron", "remoto", "dronAbajo", { ends: "from" }), enlace("dron", "dronArriba", "mastil", { dashed: true, ends: "to" }));

// ================= dron =================
zona(-15, -18, () => {
  const [x, y, z] = DRON;
  const o = [];
  o.push(S(G.sphereOf([x, y, z - 1.6], 2.2, P), { tone: "mid" }));
  for (const a of [Math.PI / 4, (3 * Math.PI) / 4]) o.push(S(k.extrude(girado(x, y, 40, 2.2, a), z + 1, 1.4, P), { tone: "mid", crease: "none" }));
  const mot = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([i, j]) => [x + i * 14.1, y + j * 14.1]).sort((a, b) => a[0] + a[1] - b[0] - b[1]);
  o.push(S(k.slabOf({ x: x - 6.5, y: y - 5, w: 13, d: 10, r: 2.4 }, z, 4.6, P, 5, 0.5), { tone: "hi", crease: "lo", className: CAJA }));
  o.push(L(k.planOutline({ x: x - 4, y: y - 3, w: 8, d: 6, r: 1.4 }, z + 4.6, P, 4), { tone: "faint" }), k.dotsSvg([at([x + 4, y + 3, z + 4.6])], { size: 0.8, tone: "hi", pulse: true }));
  for (const [mx, my] of mot) {
    o.push(cil(mx, my, 1.7, z + 2.4, 2.6, { steps: 12 }));
    o.push(S(k.cylinder(mx, my, 9, z + 5.2, 0.4, P, 32), { tone: "lo", crease: "none" }), L(k.ring(mx, my, 5.4, z + 5.6, P, 24), { tone: "faint" }), k.dotsSvg([at([mx, my, z + 5.6])], { size: 0.5, tone: "hi" }));
  }
  o.push(L(seg([x - 5, y + 5, z], [x - 7, y + 7, z - 5]) + seg([x + 5, y + 5, z], [x + 7, y + 7, z - 5]) + seg([x - 9, y + 7, z - 5], [x + 9, y + 7, z - 5]), { tone: "mid" }));
  pon(`<g data-nodo="dron" data-part="dron">`, o, `</g>`);
});

const svg = k.figureSvg({
  width: WIDTH, height: HEIGHT,
  label: "Maqueta de una faena vista desde arriba. Al fondo, una sala con el servidor de borde y un mástil con antenas. Cuatro zonas: una correa transportadora con carga, una pila de lixiviación de dos pisos con líneas de riego, una planta con dos estanques y una bomba con manómetro, y un cultivo en hileras. En cada zona hay nodos con antena, unidos por enlaces de radio al mástil. Fuera de las zonas, un nodo sin cobertura y un dron sobre él.",
  body: capas,
});
const solidos = (svg.match(/class="iso-solid/g) || []).length;
writeFileSync("fig_red.json", JSON.stringify({ svg, solidos }));
console.log("escala", P.scale.toFixed(3)); console.log("figura red:", solidos, "sólidos,", (svg.match(/<path/g) || []).length, "trazos,", Math.round(svg.length / 1024), "kB");
