// El nodo de cada proyecto, en despiece: caja, tarjetas, batería, panel, antena y cabezal sensor.
// Cada grupo lleva en --dx/--dy cuánto se separa; la página anima el armado y el despiece con CSS.
// Construidos con el kit isométrico de Anatomy (github.com/wheresryan22/anatomy, licencia MIT, copiado en ./kit).
// Uso: node build_nodos.mjs  → fig_nodos.json
import { writeFileSync } from "node:fs";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";

const WIDTH = 620, HEIGHT = 560;
let P;
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (pts, style) => k.dotsSvg(pts.map(at), style);
const seg = (a, b) => k.segment(a, b, P);
const caja = (x, y, w, d, z, h, o = {}) => S(k.slabOf({ x, y, w, d, r: o.r ?? 1 }, z, h, P, o.steps ?? 3, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, lit: o.lit, inner: o.inner });
const cil = (x, y, r, z, h, o = {}) => S(k.cylinder(x, y, r, z, h, P, o.steps ?? 24, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, lit: o.lit, inner: o.inner });
const eje = (o, a) => G.frameAlong(o, a);
const rollo = (F, s0, s1, r, o = {}) => S(G.disc(s0, s1, r, F, P), { tone: o.tone ?? "mid", crease: o.crease ?? "lo", lit: o.lit, inner: o.inner });
const mas = (p, o) => [p[0] + o[0], p[1] + o[1], p[2] + o[2]];

// ---------- tarjetas: cada una con algo que la distingue ----------
const pcb = (x, y, w, d, z) => caja(x, y, w, d, z, 1.2, { tone: "lo", crease: "none", r: 1 }) + D([[x + 1.6, y + 1.6, z + 1.2], [x + w - 1.6, y + d - 1.6, z + 1.2]], { size: 0.35, tone: "lo" });
const pines = (x0, x1, y, z, paso = 2.2) => D(Array.from({ length: Math.floor((x1 - x0) / paso) + 1 }, (_, i) => [x0 + i * paso, y, z]), { size: 0.32, tone: "mid" });
const TARJETA = {
  // microcontrolador: chip al centro, dos filas de pines y conector en un extremo
  mcu: (x, y, z, lit) => ({ w: 34, d: 15, svg: pcb(x, y, 34, 15, z) + caja(x + 11, y + 3.6, 8, 8, z + 1.2, 1.6, { r: 0.4, tone: "hi", crease: "lo", lit }) + pines(x + 2, x + 32, y + 1.4, z + 1.2) + pines(x + 2, x + 32, y + 13.6, z + 1.2) + caja(x + 27, y + 4.5, 7, 6, z + 1.2, 2.6, { r: 0.5 }) + cil(x + 5, y + 7.5, 1.2, z + 1.2, 1.4, { steps: 8 }) }),
  // radio XBee: módulo con el frente recortado y su conector de antena
  xbee: (x, y, z) => ({ w: 18, d: 20, svg: pcb(x, y, 18, 20, z) + S(k.extrude([[x + 2, y + 3], [x + 16, y + 3], [x + 16, y + 13], [x + 12, y + 18], [x + 6, y + 18], [x + 2, y + 13]], z + 1.2, 2.4, P), { tone: "hi", crease: "lo" }) + caja(x + 5, y + 5, 8, 6, z + 3.6, 1, { r: 0.4 }) + cil(x + 9, y + 15, 1.3, z + 3.6, 1.6, { steps: 10 }) }),
  // radio LoRa: blindaje metálico y conector
  lora: (x, y, z) => ({ w: 16, d: 16, svg: pcb(x, y, 16, 16, z) + caja(x + 2, y + 2, 10, 10, z + 1.2, 2.2, { r: 0.6, tone: "hi", crease: "lo", inner: L(k.planOutline({ x: x + 3, y: y + 3, w: 8, d: 8, r: 0.4 }, z + 3.4, P, 2), { tone: "faint" }) }) + cil(x + 13.4, y + 13, 1.4, z + 1.2, 2.4, { steps: 10 }) + pines(x + 2, x + 12, y + 14.4, z + 1.2) }),
  // cargador solar: bobina, chip y dos borneras
  carga: (x, y, z) => ({ w: 20, d: 14, svg: pcb(x, y, 20, 14, z) + cil(x + 6, y + 7, 3.2, z + 1.2, 3, { steps: 16 }) + caja(x + 11, y + 4, 4, 5, z + 1.2, 1.2, { r: 0.3, tone: "hi" }) + caja(x + 16, y + 1.5, 3.4, 5, z + 1.2, 3.4, { r: 0.4 }) + caja(x + 16, y + 7.5, 3.4, 5, z + 1.2, 3.4, { r: 0.4 }) }),
  // computador de placa: procesador con disipador, puertos y cabezal de pines
  pi: (x, y, z) => ({ w: 44, d: 28, svg: pcb(x, y, 44, 28, z) + caja(x + 12, y + 8, 12, 12, z + 1.2, 3.6, { r: 0.5, tone: "hi", crease: "lo", inner: L([0, 1, 2, 3].map((i) => k.lineOnTop([x + 14 + i * 2.7, y + 9], [x + 14 + i * 2.7, y + 19], z + 4.8, P)).join(""), { tone: "lo" }) }) + caja(x + 35, y + 2, 8.5, 7, z + 1.2, 6, { r: 0.5 }) + caja(x + 35, y + 10.5, 8.5, 7, z + 1.2, 6, { r: 0.5 }) + caja(x + 35, y + 19.5, 8.5, 6.5, z + 1.2, 5, { r: 0.5 }) + pines(x + 2, x + 30, y + 1.6, z + 1.2) + pines(x + 2, x + 30, y + 3.8, z + 1.2) }),
  pizero: (x, y, z) => ({ w: 34, d: 16, svg: pcb(x, y, 34, 16, z) + caja(x + 12, y + 5, 7, 7, z + 1.2, 1.4, { r: 0.4, tone: "hi", crease: "lo" }) + caja(x + 24, y + 11.4, 5, 4.6, z + 1.2, 1.8, { r: 0.4 }) + caja(x + 30, y + 5, 4, 6, z + 1.2, 1.6, { r: 0.3 }) + pines(x + 2, x + 32, y + 1.4, z + 1.2) }),
  // conversor de tensión: bobina grande y condensadores
  dcdc: (x, y, z) => ({ w: 20, d: 12, svg: pcb(x, y, 20, 12, z) + caja(x + 7, y + 2.5, 7, 7, z + 1.2, 3, { r: 1, tone: "hi" }) + cil(x + 3.4, y + 6, 2.2, z + 1.2, 4.4, { steps: 12 }) + cil(x + 17, y + 6, 2.2, z + 1.2, 4.4, { steps: 12 }) }),
  gps: (x, y, z) => ({ w: 14, d: 14, svg: pcb(x, y, 14, 14, z) + caja(x + 2, y + 2, 10, 10, z + 1.2, 2.2, { r: 0.4, tone: "hi", crease: "lo" }) + D([[x + 7, y + 7, z + 3.4]], { size: 0.5, tone: "hi" }) }),
  esp: (x, y, z) => ({ w: 16, d: 22, svg: pcb(x, y, 16, 22, z) + caja(x + 2, y + 2, 12, 12, z + 1.2, 2, { r: 0.5, tone: "hi", crease: "lo" }) + L(k.lineOnTop([x + 3, y + 16], [x + 13, y + 16], z + 1.2, P) + k.lineOnTop([x + 3, y + 18], [x + 13, y + 18], z + 1.2, P) + k.lineOnTop([x + 3, y + 20], [x + 13, y + 20], z + 1.2, P), { tone: "mid" }) }),
};
const celdas = (x, y, z, n, largo = 36, r = 5) => {
  const o = [caja(x - 2, y - 1, largo + 4, n * (2 * r + 1.6) + 2, z, 2, { r: 1, tone: "lo", crease: "none" })];
  for (let i = 0; i < n; i++) { const F = eje([x, y + r + 0.8 + i * (2 * r + 1.6), z + r + 2.2], [1, 0, 0]); o.push(rollo(F, 0, largo, r, { inner: L(G.arcOf(F, 4, r, P) + G.arcOf(F, largo - 4, r, P), { tone: "faint" }) }), rollo(F, largo, largo + 1.6, 1.8, { tone: "hi", crease: "none" })); }
  return o.join("");
};
const paquete = (x, y, z, w, d, h) => { const pl = { x, y, w, d, r: 2.4 }; return S(k.slabOf(pl, z, h, P, 5, 0.8), { tone: "mid", inner: L(k.sideSeam(pl, z + h * 0.35, P, 5) + k.sideSeam(pl, z + h * 0.7, P, 5), { tone: "faint" }) }) + cil(x + w - 7, y + 6, 2, z + h, 2, { steps: 10, tone: "hi" }) + cil(x + w - 7, y + 13, 2, z + h, 2, { steps: 10, tone: "hi" }) + L(k.planOutline({ x: x + 5, y: y + 5, w: w * 0.45, d: d * 0.4, r: 1 }, z + h, P, 3), { tone: "lo" }); };
// panel solar inclinado sobre su soporte: w a lo largo de x, d es el largo del plano inclinado
const panel = (x, y, z, w, d) => {
  const sube = d * 0.5, av = d * 0.86, F = G.frameOf([x, y, z], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
  const o = [S(G.prismOf(F, [[0, 0], [av, sube], [av - 0.8, sube + 1.4], [-0.8, 1.4]], 0, w, P), { tone: "mid", crease: "lo" })];
  const nx = Math.max(2, Math.round(w / 12)), ny = Math.max(2, Math.round(d / 12));
  for (let i = 1; i < nx; i++) o.push(L(seg([x + (w * i) / nx, y - 0.8, z + 1.4], [x + (w * i) / nx, y + av - 0.8, z + sube + 1.4]), { tone: "faint" }));
  for (let j = 1; j < ny; j++) o.push(L(seg([x, y - 0.8 + (av * j) / ny, z + 1.4 + (sube * j) / ny], [x + w, y - 0.8 + (av * j) / ny, z + 1.4 + (sube * j) / ny]), { tone: "faint" }));
  return o.join("");
};
const varilla = (x, y, z, h, r = 0.8) => cil(x, y, 2.4, z, 3, { steps: 12 }) + cil(x, y, r, z + 3, h, { steps: 8, tone: "hi", crease: "none" }) + cil(x, y, r + 0.7, z + 3 + h, 2, { steps: 10, tone: "hi" });
// antena direccional: un brazo con elementos cruzados, apuntando a +y
const yagi = (x, y, z, largo = 44) => { const F = eje([x, y, z], [0, 1, 0]); return rollo(F, 0, largo, 1, { crease: "none", tone: "hi" }) + [0.08, 0.3, 0.5, 0.7, 0.9].map((f, i) => L(seg([x - 13 + i * 2, y + largo * f, z], [x + 13 - i * 2, y + largo * f, z]), { tone: "hi" })).join("") + cil(x, y, 1.6, z - 12, 12, { steps: 8, crease: "none" }); };

// ---------- armado en capas: cada capa es un grupo que se separa ----------
function figura(id, capas, extremos, label) {
  // capas: [nombre, [dx,dy,dz], fn que dibuja, ancla para el globo (ya en su lugar armado) | null]
  P = k.fitProjection(extremos, WIDTH, HEIGHT, { pad: 34 });
  const pant = (o) => { const a = at([0, 0, 0]), b = at(o); return [+(b[0] - a[0]).toFixed(1), +(b[1] - a[1]).toFixed(1)]; };
  const cuerpo = [], anclas = [];
  for (const [nombre, off, fn, ancla] of capas) {
    const [dx, dy] = pant(off);
    cuerpo.push(`<g data-grupo="${nombre}" style="--dx:${dx}px;--dy:${dy}px">${fn()}</g>`);
    if (ancla) anclas.push(at(mas(ancla, off)));
  }
  // globos numerados en una columna a la derecha, en el orden en que se declaran las capas con ancla
  const xs = anclas.map((a) => a[0]), x0 = Math.min(WIDTH - 22, Math.max(...xs) + 74);
  const orden = anclas.map((a, i) => [i, a]).sort((p, q) => p[1][1] - q[1][1]); let y = -1e9; const pos = [];
  for (const [i, a] of orden) { y = Math.max(a[1] - 6, y + 27); pos[i] = [x0, y]; }
  const globos = anclas.map((a, i) => { const b = pos[i], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy), r = 9.5; return `<g data-globo="${i + 1}"><path class="iso-line" data-tone="mid" d="M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${(b[0] - (dx / l) * r).toFixed(1)} ${(b[1] - (dy / l) * r).toFixed(1)}"/><circle class="globo-p" cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" r="1.6"/><circle class="globo-c" cx="${b[0].toFixed(1)}" cy="${b[1].toFixed(1)}" r="${r}"/><text class="globo-t" x="${b[0].toFixed(1)}" y="${(b[1] + 3.5).toFixed(1)}" text-anchor="middle">${i + 1}</text></g>`; }).join("");
  cuerpo.push(`<g data-capa="llamadas">${globos}</g>`);
  return { svg: k.figureSvg({ width: WIDTH, height: HEIGHT, label, body: cuerpo }), piezas: anclas.length };
}
const banco = (w, d) => { const pl = { x: -w / 2, y: -d / 2, w, d, r: 7 }; return `<path class="iso-halo" d="${k.haloOf(pl, -14, 10, P)}"/>` + S(k.slabOf(pl, -10, 10, P, 8, 1.4), { tone: "mid" }) + L(k.planOutline(k.insetPlan(pl, 5), 0, P), { tone: "faint" }) + D(k.corners(pl, 10).map(([x, y]) => [x, y, 0]), { size: 0.55 }); };
const tapaDe = (pl, z, h, extra = () => "") => () => S(k.slabOf(k.insetPlan(pl, -1), z, h, P, 6, 1), { tone: "hi", crease: "lo" }) + L(k.planOutline(k.insetPlan(pl, 3.5), z + h, P, 6), { tone: "faint" }) + L(k.corners(pl, 5).map(([x, y]) => k.ring(x, y, 1.7, z + h, P, 12)).join(""), { tone: "lo" }) + D(k.corners(pl, 5).map(([x, y]) => [x, y, z + h]), { size: 0.45 }) + extra();
const cuerpoDe = (pl, z, h, extra = () => "") => () => S(k.slabOf(pl, z, h, P, 6, 0.8), { tone: "mid", inner: L(k.sideSeam(pl, z + h - 1.4, P, 6), { tone: "lo" }) }) + L(k.planOutline(k.insetPlan(pl, 2.4), z + h, P, 6), { tone: "lo" }) + extra();
// tarjetas en fila sobre una placa portadora
function portadora(x, y, w, d, z, tipos, litMcu = true) {
  const o = [caja(x, y, w, d, z, 1.2, { tone: "lo", crease: "none", r: 1.5 }), D(k.corners({ x, y, w, d }, 2.6).map(([a, b]) => [a, b, z + 1.2]), { size: 0.45 })];
  const medidas = tipos.map((t) => TARJETA[t](0, 0, 0)), total = medidas.reduce((s, m) => s + m.w, 0), hueco = (w - total) / (tipos.length + 1);
  let cx = x + hueco;
  tipos.forEach((t, i) => { o.push(TARJETA[t](cx, y + (d - medidas[i].d) / 2, z + 1.2, litMcu && (t === "mcu" || t === "pi" || t === "pizero")).svg); cx += medidas[i].w + hueco; });
  return o.join("");
}

const sal = {};
// ================= 01 · pica de la pila: se clava en el mineral; mide a tres profundidades y tiene la cabeza al aire =================
{
  const punta = () => S(G.lathe([[0, 0.6], [16, 5.5]], eje([0, 0, 4], [0, 0, 1]), P), { tone: "mid", crease: "lo" });
  const varilla3 = () => caja(-3, -0.6, 6, 1.2, 22, 66, { tone: "lo", crease: "none", r: 0.3 }) + [31, 51, 71].map((z) => caja(-2, 0.6, 4, 1, z - 2.5, 5, { r: 0.2, tone: "hi", lit: true })).join("") + caja(-2.4, -1.2, 4.8, 2.4, 88, 3, { r: 0.3 });
  const tubo = () => cil(0, 0, 5.5, 20, 70, { steps: 24, inner: L(k.sideArc(0, 0, 5.5, 88, P, 12), { tone: "lo" }) }) + [30, 50, 70].map((z) => cil(0, 0, 6.5, z - 3.5, 7, { steps: 24, tone: "hi", crease: "lo", lit: true })).join("");
  const cabezal = () => cil(0, 0, 13, 90, 24, { steps: 36, inner: L(k.sideArc(0, 0, 13, 110, P, 20) + k.sideArc(0, 0, 13, 94, P, 20), { tone: "lo" }) }) + L(k.ring(0, 0, 10.6, 114, P, 36), { tone: "lo" });
  const pilas2 = () => [[-5, -1], [5, 1]].map(([x, y]) => cil(x, y, 4.3, 92, 20, { steps: 18, inner: L(k.sideArc(x, y, 4.3, 96, P, 10), { tone: "faint" }) }) + cil(x, y, 1.6, 112, 1.2, { steps: 10, tone: "hi" })).join("");
  const placa = () => cil(0, 0, 11.5, 100, 1.2, { steps: 32, tone: "lo", crease: "none" }) + caja(-8, -6, 8, 8, 101.2, 1.6, { r: 0.4, tone: "hi", crease: "lo", lit: true }) + caja(2, -7, 7, 7, 101.2, 2.2, { r: 0.6, tone: "hi", crease: "lo" }) + cil(3.5, 5, 3.3, 101.2, 2.6, { steps: 14, inner: L(k.ring(3.5, 5, 1.6, 103.8, P, 12), { tone: "lo" }) }) + D([[-7, 6, 101.2], [-4.5, 6, 101.2], [-2, 6, 101.2]], { size: 0.35, tone: "mid" });
  const tapa = () => cil(0, 0, 14, 114, 4, { steps: 36, tone: "hi", crease: "lo" }) + caja(-4, -9, 3, 3, 118, 8, { r: 0.5, crease: "none" }) + panel(-13, -19, 124, 24, 20) + varilla(8, 7, 118, 30);
  sal.pila = figura("pila", [
    ["base", [0, 0, 0], () => banco(100, 86) + L(k.ring(0, 0, 9, 0.2, P, 28), { tone: "mid", dashed: true }), null],
    ["punta", [0, 0, 0], punta, [3, 3, 14]],
    ["varilla", [-30, 30, 14], varilla3, [3, 0.6, 60]],
    ["tubo", [0, 0, 14], tubo, [4, 4, 60]],
    ["pilas", [0, 0, 64], pilas2, [7, 4, 104]],
    ["placa", [0, 0, 92], placa, [8, 6, 101.2]],
    ["cabezal", [0, 0, 30], cabezal, [9, 9, 100]],
    ["tapa", [0, 0, 118], tapa, [10, 9, 116]],
  ], [[-50, -43, -12], [50, -43, -12], [-50, 43, -12], [50, 43, -12], [8, 7, 266], [-36, 36, 100]],
    "Despiece de la pica: punta cónica, varilla electrónica con sensores en tres zonas, tubo con tres bandas de medición, cabezal, dos baterías, placa redonda con procesador, radio y bobina receptora, y tapa con panel solar y antena.");
}
// ================= esfera enterrada: dos mitades impresas, pila de litio, placa con chips y bobina; queda dentro del mineral =================
{
  const R = 30, Z0 = 8, N = 14;
  const abajo = Array.from({ length: N + 1 }, (_, i) => { const a = (i / N) * Math.PI / 2; return [R * (1 - Math.cos(a)), Math.max(0.6, R * Math.sin(a))]; });
  const arriba = Array.from({ length: N + 1 }, (_, i) => { const a = (i / N) * Math.PI / 2; return [R * Math.sin(a), Math.max(0.6, R * Math.cos(a))]; });
  const anillo = (r0, r1, z, h, tone) => cil(0, 0, r0, z, h, { steps: 48, tone, crease: "lo" }) + S(k.cylinder(0, 0, r1, z + h - 0.2, 0.3, P, 40), { tone: "lo", crease: "none" });
  const inferior = () => S(G.lathe(abajo, eje([0, 0, Z0], [0, 0, 1]), P, { smooth: true }), { tone: "mid", crease: "none" }) + [35, 60].map((g) => L(k.sideArc(0, 0, R * Math.sin((g * Math.PI) / 180), Z0 + R * (1 - Math.cos((g * Math.PI) / 180)), P, 30), { tone: "faint" })).join("") + anillo(R, R - 4, Z0 + R - 1.2, 1.2, "hi") + L(k.ring(0, 0, R - 8, Z0 + R + 0.1, P, 36), { tone: "faint" });
  const pila = () => cil(0, 0, 8.5, Z0 + 3, 26, { steps: 24, inner: L(k.sideArc(0, 0, 8.5, Z0 + 9, P, 14) + k.sideArc(0, 0, 8.5, Z0 + 24, P, 14), { tone: "faint" }) }) + cil(0, 0, 3, Z0 + 29, 1.6, { steps: 12, tone: "hi" });
  const placa = () => cil(0, 0, R - 5, Z0 + R, 1.2, { steps: 44, tone: "lo", crease: "none" }) + caja(-13, -11, 10, 10, Z0 + R + 1.2, 1.8, { r: 0.5, tone: "hi", crease: "lo", lit: true }) + caja(4, -13, 7, 7, Z0 + R + 1.2, 1.4, { r: 0.4, tone: "hi", crease: "lo", lit: true }) + caja(8, 2, 5, 5, Z0 + R + 1.2, 1.2, { r: 0.3, tone: "hi", lit: true }) + caja(-11, 6, 6, 6, Z0 + R + 1.2, 1.2, { r: 0.3, tone: "hi", lit: true }) + D([[-2, 14, Z0 + R + 1.2], [1, 14, Z0 + R + 1.2], [4, 14, Z0 + R + 1.2]], { size: 0.4, tone: "mid" });
  const bobina = () => anillo(R - 2, R - 7, Z0 + R + 2, 4, "hi") + L(k.sideArc(0, 0, R - 2, Z0 + R + 3.3, P, 30) + k.sideArc(0, 0, R - 2, Z0 + R + 4.6, P, 30), { tone: "lo" });
  const junta = () => anillo(R - 0.5, R - 3, Z0 + R + 0.4, 1.6, "lo");
  const superior = () => S(G.lathe(arriba, eje([0, 0, Z0 + R], [0, 0, 1]), P, { smooth: true }), { tone: "hi", crease: "none" }) + [25, 50].map((g) => L(k.ring(0, 0, R * Math.cos((g * Math.PI) / 180), Z0 + R + R * Math.sin((g * Math.PI) / 180), P, 40), { tone: "faint" })).join("");
  sal.esfera = figura("esfera", [
    ["base", [0, 0, 0], () => banco(116, 100) + cil(0, 0, 13, 0, 5, { steps: 28, tone: "lo" }), null],
    ["pila", [0, 0, 48], pila, [6, 6, Z0 + 16]],
    ["inferior", [0, 0, 0], inferior, [20, 16, Z0 + 18]],
    ["placa", [0, 0, 82], placa, [16, 12, Z0 + R + 1.2]],
    ["bobina", [0, 0, 104], bobina, [18, 18, Z0 + R + 5]],
    ["junta", [0, 0, 124], junta, [20, 20, Z0 + R + 1.6]],
    ["superior", [0, 0, 142], superior, [16, 14, Z0 + R + 18]],
  ], [[-62, -54, -14], [62, -54, -14], [-62, 54, -14], [62, 54, -14], [0, 0, Z0 + 2 * R + 146], [70, 0, 120], [-50, 0, 120]],
    "Despiece de la esfera: semiesfera inferior, pila de litio, placa redonda con microcontrolador y sensores en chip, bobina de 125 kHz, junta tórica y semiesfera superior.");
}
// ================= 02 · cámara fija: cilindro con visera, se despieza a lo largo =================
{
  const ZC = 62, cuerpo = () => { const F = eje([-30, 0, ZC], [1, 0, 0]); return rollo(F, 0, 56, 17, { inner: L(G.arcOf(F, 8, 17, P) + G.arcOf(F, 48, 17, P), { tone: "faint" }) }) + caja(-34, -19, 70, 38, ZC + 15.5, 2, { r: 2, tone: "hi", crease: "lo" }); };
  sal.planta = figura("planta", [
    ["base", [0, 0, 0], () => banco(200, 150), null],
    ["fuente", [0, 0, 0], () => caja(-9, -9, 18, 18, 0, 2.4, { r: 1.5 }) + cil(0, 0, 3, 2.4, ZC - 28, { steps: 14, tone: "hi", crease: "none" }) + caja(-16, -12, 32, 24, 14, 16, { r: 2, bevel: 0.5 }) + TARJETA.dcdc(-10, -6, 30).svg + caja(-5, -5, 10, 10, ZC - 26, 9, { r: 1.2 }), [14, 10, 24]],
    ["trasera", [-40, 0, 0], () => { const F = eje([-34, 0, ZC], [1, 0, 0]); return rollo(F, 0, 4, 17, {}) + rollo(F, -6, 0, 4, {}); }, [-34, 12, ZC + 8]],
    ["cuerpo", [0, 0, 0], cuerpo, [6, 16, ZC + 16]],
    ["placa", [44, 0, 0], () => caja(26, -13, 1.4, 26, ZC - 13, 26, { r: 0.6, tone: "lo", crease: "none" }) + rollo(eje([27.4, 0, ZC + 2], [1, 0, 0]), 0, 7, 5, { tone: "hi", lit: true }) + caja(27.4, -9, 2, 7, ZC - 10, 7, { r: 0.4, tone: "hi" }) + D([[27.6, 8, ZC - 8], [27.6, 8, ZC - 5], [27.6, 8, ZC - 2]], { size: 0.4 }), [28, 10, ZC + 8]],
    ["frente", [88, 0, 0], () => { const F = eje([26, 0, ZC], [1, 0, 0]); return rollo(F, 0, 5, 17, { tone: "hi" }) + L(G.circleOf(F, 5, 11.5, P) + G.circleOf(F, 5, 6, P), { tone: "lo" }) + k.dotsSvg(Array.from({ length: 10 }, (_, i) => at([31.2, 9 * Math.cos((i / 10) * 6.283), ZC + 9 * Math.sin((i / 10) * 6.283)])), { size: 0.9, tone: "hi", pulse: true }); }, [31, 12, ZC + 10]],
  ], [[-100, -75, -14], [100, -75, -14], [-100, 75, -14], [100, 75, -14], [-80, 0, ZC + 22], [126, 0, ZC + 22], [126, 20, ZC - 20]],
    "Despiece de la cámara fija, a lo largo: frente con anillo de luces, tarjeta de cámara con su lente, carcasa cilíndrica con visera, tapa trasera con prensaestopas y, en la base del soporte, la fuente de alimentación.");
}
// ================= 03 · nodo de cultivo: poste con escudo de platos, caja, panel y sondas de suelo =================
{
  const pl = { x: -8, y: -20, w: 52, d: 40, r: 4 }, ZC = 56;
  sal.cultivo = figura("cultivo", [
    ["base", [0, 0, 0], () => banco(200, 170), null],
    ["sondas", [34, 30, 0], () => [[40, 44], [54, 36]].map(([x, y], i) => caja(x - 1, y - 5, 2, 10, 0, 16 - i * 5, { r: 0.6, tone: "hi", lit: true }) + caja(x - 2.4, y - 6, 4.8, 12, 16 - i * 5, 5, { r: 1 })).join("") + L(seg([41, 44, 19], [20, 12, ZC + 4]) + seg([55, 36, 14], [24, 10, ZC + 4]), { tone: "mid" }), [48, 42, 14]],
    ["poste", [0, 0, 0], () => caja(-9, -9, 18, 18, 0, 2.4, { r: 1.5 }) + cil(0, 0, 2.6, 2.4, 118, { steps: 14, tone: "hi", crease: "none" }), null],
    ["escudo", [-40, 0, 16], () => caja(-26, -1.4, 26, 2.8, 104, 1.6, { r: 0.5, crease: "none" }) + [0, 1, 2, 3, 4].map((i) => cil(-26, 0, 10, 92 + i * 4, 1.8, { steps: 24 })).join("") + cil(-26, 0, 3, 112, 3, { steps: 12, tone: "hi" }), [-22, 8, 100]],
    ["caja", [0, 0, 0], cuerpoDe(pl, ZC, 22), [40, 16, ZC + 10]],
    ["bateria", [26, 0, 26], () => celdas(0, -10, ZC + 2, 2, 34), [34, 10, ZC + 10]],
    ["placas", [52, 0, 54], () => portadora(-5, -17, 46, 34, ZC + 22, ["mcu", "lora"]), [38, 12, ZC + 25]],
    ["tapa", [78, 0, 82], tapaDe(pl, ZC + 22, 5, () => varilla(34, -12, ZC + 27, 30)), [30, 16, ZC + 27]],
    ["panel", [0, -24, 44], () => panel(-30, -34, 122, 60, 46) + TARJETA.carga(-10, -6, 122).svg, [22, -4, 140]],
  ], [[-100, -85, -14], [100, -85, -14], [-100, 85, -14], [100, 85, -14], [-30, -58, 210], [112, -12, ZC + 150], [90, 70, 0], [-70, 0, 130]],
    "Despiece del nodo de cultivo sobre su poste: panel solar con cargador, tapa con antena, placa con procesador y radio LoRa, baterías, caja, escudo de platos para la temperatura del aire y dos sondas de suelo a distinta profundidad.");
}
// ================= 04 · carga útil del dron: módulo colgante con antena hacia abajo =================
{
  const ZC = 78, pl = { x: -30, y: -22, w: 60, d: 44, r: 5 };
  const girado = (cx, cy, largo, ancho, a) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => [cx + (i * largo / 2) * Math.cos(a) - (j * ancho / 2) * Math.sin(a), cy + (i * largo / 2) * Math.sin(a) + (j * ancho / 2) * Math.cos(a)]);
  const marco = () => { const o = []; for (const a of [Math.PI / 4, (3 * Math.PI) / 4]) o.push(S(k.extrude(girado(0, 0, 150, 6, a), ZC + 22, 3, P), { tone: "lo", crease: "none" })); o.push(caja(-22, -18, 44, 36, ZC + 20, 8, { r: 6, tone: "mid" })); for (const [x, y] of [[-53, -53], [53, -53], [-53, 53], [53, 53]].sort((p, q) => p[0] + p[1] - q[0] - q[1])) o.push(cil(x, y, 5, ZC + 25, 6, { steps: 14 }), S(k.cylinder(x, y, 26, ZC + 32, 0.6, P, 36), { tone: "lo", crease: "none" }), L(k.ring(x, y, 16, ZC + 32.6, P, 28), { tone: "faint" })); return o.join(""); };
  sal.dron = figura("dron", [
    ["base", [0, 0, 0], () => banco(210, 190), null],
    ["antena", [0, 0, 0], () => caja(-17, -17, 34, 34, 18, 2.4, { r: 2, tone: "hi", lit: true }) + L(k.planOutline({ x: -11, y: -11, w: 22, d: 22, r: 1 }, 20.4, P, 3), { tone: "lo" }) + cil(0, 0, 2, 20.4, 5, { steps: 10 }) + rollo(eje([22, 0, 24], [0, 0, -1]), 0, 8, 5, { tone: "hi" }) + caja(16, -6, 12, 12, 24, 6, { r: 1.5 }), [14, 14, 21]],
    ["bateria", [0, 0, 30], () => paquete(-26, -14, 30, 40, 28, 9), [10, 12, 36]],
    ["placas", [0, 0, 62], () => portadora(-28, -19, 56, 38, 40, ["pizero", "esp"]), [24, 14, 43]],
    ["soporte", [0, 0, 92], () => S(k.slabOf(pl, 46, 2.4, P, 5), { tone: "mid" }) + k.corners(pl, 7).map(([x, y]) => cil(x, y, 3, 48.4, 6, { steps: 12, tone: "hi" })).join(""), [24, 16, 50]],
    ["marco", [0, 0, 112], marco, [40, 40, ZC + 28]],
  ], [[-105, -95, -14], [105, -95, -14], [-105, 95, -14], [105, 95, -14], [-53, -53, ZC + 150], [53, 53, ZC + 150], [80, 80, ZC + 140]],
    "Despiece de la carga útil del dron: marco del dron, soporte con amortiguadores, placa con computador y radio, batería propia y, abajo, la antena de parche que mira al suelo junto a la cámara.");
}
// ================= 06 · repetidor de malla: poste alto, panel grande, antena larga; y el equipo de mano =================
{
  const pl = { x: -4, y: -22, w: 56, d: 44, r: 4 }, ZC = 66;
  sal.malla = figura("malla", [
    ["base", [0, 0, 0], () => banco(210, 180), null],
    ["mano", [0, 0, 0], () => caja(-74, 44, 22, 13, 0, 44, { r: 3, tone: "hi", crease: "lo", lit: true, bevel: 0.6 }) + L(seg([-70, 57, 22], [-56, 57, 22]) + seg([-70, 57, 38], [-56, 57, 38]) + seg([-70, 57, 22], [-70, 57, 38]) + seg([-56, 57, 22], [-56, 57, 38]), { tone: "hi" }) + D([[-63, 57, 12]], { size: 1, tone: "hi" }) + cil(-56, 48, 1.3, 44, 20, { steps: 8, tone: "hi", crease: "none" }), [-58, 56, 30]],
    ["poste", [0, 0, 0], () => caja(-10, -10, 20, 20, 0, 3, { r: 1.5 }) + cil(0, 0, 3, 3, 146, { steps: 14, tone: "hi", crease: "none" }), null],
    ["caja", [0, 0, 0], cuerpoDe(pl, ZC, 26), [46, 18, ZC + 12]],
    ["bateria", [30, 0, 22], () => celdas(4, -17, ZC + 2, 3, 36), [40, 12, ZC + 10]],
    ["placas", [60, 0, 46], () => portadora(-1, -19, 50, 38, ZC + 26, ["lora", "gps", "carga"], false), [42, 14, ZC + 29]],
    ["tapa", [90, 0, 70], tapaDe(pl, ZC + 26, 5), [34, 18, ZC + 31]],
    ["antena", [-34, 0, 30], () => caja(-24, -1.6, 24, 3.2, 128, 2, { r: 0.6, crease: "none" }) + cil(-24, 0, 2.2, 130, 4, { steps: 12 }) + cil(-24, 0, 1.5, 134, 62, { steps: 10, tone: "hi", crease: "none" }) + cil(-24, 0, 2, 196, 2.4, { steps: 10, tone: "hi" }), [-22, 4, 170]],
    ["panel", [0, -26, 34], () => panel(-36, -44, 150, 78, 60), [26, -8, 172]],
  ], [[-105, -90, -14], [105, -90, -14], [-105, 90, -14], [105, 90, -14], [-60, 0, 232], [130, -10, ZC + 110], [0, -76, 240], [-80, 60, 0]],
    "Despiece del repetidor de malla sobre su poste: panel solar, antena larga de varilla, tapa, placa con radio LoRa, receptor de posición y cargador, tres baterías y caja estanca. A un lado, el equipo de mano con pantalla.");
}
// ================= 07 · cabezal de torre: dos cámaras sobre giro, gabinete con computador, batería grande y antena direccional =================
{
  const pl = { x: -34, y: -26, w: 68, d: 52, r: 4 }, ZT = 76;
  const cabezal = () => { const o = [cil(0, 0, 13, ZT, 8, { steps: 30, bevel: 0.6 }), L(k.knurl(0, 0, 13, ZT, ZT + 8, 24, P), { tone: "lo" }), cil(0, 0, 9, ZT + 8, 4, { steps: 24 })];
    o.push(caja(-13, -20, 26, 3, ZT + 12, 22, { r: 0.8 }), caja(-16, -15, 40, 30, ZT + 15, 20, { r: 2, tone: "hi", crease: "lo", lit: true }), caja(-18, -17, 48, 34, ZT + 35, 1.6, { r: 2, crease: "none" }));
    const FV = eje([24, -6, ZT + 25], [1, 0, 0]), FT = eje([24, 8, ZT + 26], [1, 0, 0]);
    o.push(rollo(FV, 0, 8, 7.4, { tone: "hi", inner: L(G.arcOf(FV, 4, 7.4, P), { tone: "faint" }) }), L(G.circleOf(FV, 8, 4.8, P), { tone: "lo" }), rollo(FT, 0, 5, 4.2, { tone: "hi" }), L(G.circleOf(FT, 5, 2.4, P), { tone: "lo" }), caja(-13, 17, 26, 3, ZT + 12, 22, { r: 0.8 }));
    return o.join(""); };
  sal.incendios = figura("incendios", [
    ["base", [0, 0, 0], () => banco(230, 190), null],
    ["bateria", [0, 0, 0], () => caja(-30, -22, 60, 44, 0, 2, { r: 2, tone: "lo" }) + paquete(-26, -18, 2, 52, 36, 20), [22, 16, 14]],
    ["gabinete", [0, 0, 22], cuerpoDe(pl, 22, 28), [32, 24, 36]],
    ["placas", [0, 0, 60], () => portadora(-31, -23, 62, 46, 50, ["pi", "dcdc"]), [28, 18, 53]],
    ["tapa", [0, 0, 96], tapaDe(pl, 50, 5, () => cil(0, 0, 4, 55, ZT - 55, { steps: 14, tone: "hi", crease: "none" })), [26, 22, 55]],
    ["cabezal", [0, 0, 132], cabezal, [22, 16, ZT + 30]],
    ["antena", [-64, 20, 96], () => cil(-20, 10, 2, 55, 50, { steps: 10, tone: "hi", crease: "none" }) + yagi(-20, 10, 105, 46), [-18, 44, 105]],
    ["panel", [-10, -70, 110], () => cil(-10, -40, 2.4, 0, 60, { steps: 10, tone: "hi", crease: "none" }) + panel(-58, -84, 60, 96, 78), [20, -40, 84]],
  ], [[-115, -95, -14], [115, -95, -14], [-115, 95, -14], [115, 95, -14], [0, 0, ZT + 180], [-90, 80, 210], [-70, -160, 210], [50, -110, 150]],
    "Despiece del equipo de torre: panel solar grande, antena direccional, cabezal con cámara visible y cámara térmica sobre una base giratoria, tapa, placa con computador y conversor, gabinete y batería de fosfato de hierro y litio.");
}

for (const [n, f] of Object.entries(sal)) console.log(n.padEnd(10), (f.svg.match(/class="iso-solid/g) || []).length, "sólidos,", Math.round(f.svg.length / 1024), "kB, piezas", f.piezas);
writeFileSync("fig_nodos.json", JSON.stringify({ ancho: WIDTH, alto: HEIGHT, ...sal }));
