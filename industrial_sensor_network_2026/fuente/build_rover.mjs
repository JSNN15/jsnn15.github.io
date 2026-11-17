// Figura "Rover de inspección": la versión de hardware del Supervisor normativo, en despiece y con sus conexiones.
// Construida con el kit isométrico de Anatomy (github.com/wheresryan22/anatomy, licencia MIT, copiado en ./kit).
// Uso: node build_rover.mjs  → fig_rover.json
import { writeFileSync } from "node:fs";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";

const WIDTH = 760, HEIGHT = 800;
const PLACA = { x: -128, y: -100, w: 262, d: 200, r: 8 };
// cuánto se separa cada grupo en el despiece (x a lo largo del rover, y a lo ancho, z hacia arriba)
const SEP = { tapa: [-84, 0, 124], bandeja: [-40, 0, 62], cabeza: [0, 0, 26], lidar: [0, 0, 20], orugaCerca: [0, 34, 0], orugaLejos: [0, -34, 0] };
const mas = (p, o) => [p[0] + o[0], p[1] + o[1], p[2] + o[2]];

const P = k.fitProjection(
  [...k.boxCorners(PLACA, -18, 0), ...k.boxCorners({ x: -76, y: -44, w: 74, d: 88 }, 46, 102).map((p) => mas(p, SEP.tapa)), mas([14, 0, 128], SEP.cabeza), [-90, 76 + 34, 0], [96, 76 + 34, 0], [-90, -76 - 34, 40]],
  WIDTH, HEIGHT, { pad: 30 },
);
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (pts, style) => k.dotsSvg(pts.map(at), style);
const seg = (a, b) => k.segment(a, b, P);
const caja = (x, y, w, d, z, h, o = {}) => S(k.slabOf({ x, y, w, d, r: o.r ?? 1 }, z, h, P, o.steps ?? 3, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, inner: o.inner });
const cil = (x, y, r, z, h, o = {}) => S(k.cylinder(x, y, r, z, h, P, o.steps ?? 24, o.bevel ?? 0), { tone: o.tone ?? "mid", crease: o.crease, inner: o.inner });
const eje = (o, a) => G.frameAlong(o, a);
const rollo = (F, s0, s1, r, o = {}) => S(G.disc(s0, s1, r, F, P), { tone: o.tone ?? "mid", crease: o.crease ?? "lo", inner: o.inner });
const pieza = (n, svg) => `<g data-pieza="${n}">${Array.isArray(svg) ? svg.join("") : svg}</g>`;
const grupo = (n, svg) => `<g data-grupo="${n}">${svg.flat().join("")}</g>`;
const prof = (p) => k.depthOf(p, P);
const pantalla = (o) => { const a = at([0, 0, 0]), b = at(o); return [+(b[0] - a[0]).toFixed(1), +(b[1] - a[1]).toFixed(1)]; };

// ================= base =================
function base() {
  const o = [`<path class="iso-halo" d="${k.haloOf(PLACA, -18, 12, P)}"/>`];
  for (const [x, y] of [...k.corners(PLACA, 22)].sort((a, b) => a[0] + a[1] - b[0] - b[1])) o.push(cil(x, y, 7, -18, 6, { tone: "lo" }));
  o.push(S(k.slabOf(PLACA, -12, 12, P, 8, 1.6), { tone: "mid" }));
  o.push(L(k.planOutline(k.insetPlan(PLACA, 6), 0, P), { tone: "lo" }));
  o.push(L(k.corners(PLACA, 12).map(([x, y]) => k.ring(x, y, 2.4, 0, P, 16)).join(""), { tone: "lo" }), D(k.corners(PLACA, 12).map(([x, y]) => [x, y, 0]), { size: 0.55 }));
  const regla = { x: -110, y: PLACA.y + PLACA.d - 16, w: 220, d: 8, r: 1 };
  o.push(S(k.slabOf(regla, 0, 0.7, P, 3), { tone: "lo", crease: "none" }));
  const t = k.topTicks(regla.x + 5, regla.x + regla.w - 5, 5, 5, regla.y + 1, 0.7, [2.2, 4], P);
  o.push(L(t.minor, { tone: "lo" }), L(t.major, { tone: "mid" }));
  // alcance del LiDAR sobre el piso: un anillo tenue y un arco que lo recorre
  o.push(L(k.ring(50, 0, 78, 0.2, P, 72), { tone: "faint", dashed: true }), L(k.ring(50, 0, 52, 0.2, P, 60), { tone: "faint", dashed: true }));
  o.push(`<path class="iso-line barrido" pathLength="100" d="${k.ring(50, 0, 78, 0.2, P, 72)}"/>`);
  return o.join("");
}

// ================= orugas =================
const RUEDAS = [[-74, 24, 13], [-50, 11, 10], [-17, 11, 10], [16, 11, 10], [49, 11, 10], [78, 25, 12]]; // [x, z, radio]: motriz atrás, cuatro de apoyo, tensora adelante
const BANDA = 3;
const contorno = (extra) => G.hullOf(RUEDAS.flatMap(([x, z, r]) => Array.from({ length: 28 }, (_, i) => [z + (r + extra) * Math.sin((i / 28) * 2 * Math.PI), x + (r + extra) * Math.cos((i / 28) * 2 * Math.PI)]))); // puntos [z, x]
const PERFIL = contorno(BANDA);
// tacos de la banda: líneas de lado a lado, solo en las caras que miran hacia acá
function tacos(y0, y1, fase) {
  const V = G.viewOf(P), pts = PERFIL, n = pts.length, out = [];
  let total = 0; const largo = pts.map((p, i) => { const q = pts[(i + 1) % n], l = Math.hypot(q[0] - p[0], q[1] - p[1]); total += l; return l; });
  const paso = total / Math.round(total / 6.5);
  let acum = 0, sig = (fase * paso) % paso;
  for (let i = 0; i < n; i++) {
    const p = pts[i], q = pts[(i + 1) % n];
    while (sig <= acum + largo[i]) {
      const t = (sig - acum) / largo[i], z = p[0] + (q[0] - p[0]) * t, x = p[1] + (q[1] - p[1]) * t;
      // normal hacia afuera en (x, z): perpendicular al tramo, alejándose del centro
      let nx = q[0] - p[0], nz = -(q[1] - p[1]); const cx = x - 0, cz = z - 20; if (nx * cx + nz * cz < 0) { nx = -nx; nz = -nz; }
      if (nx * V[0] + nz * V[2] > 0.05) out.push(seg([x, y0 + 1.2, z], [x, y1 - 1.2, z]));
      sig += paso;
    }
    acum += largo[i];
  }
  return L(out.join(""), { tone: "lo" });
}
function oruga(y0, y1, cara, id) {
  const F = G.frameOf([0, y0, 0], [0, 1, 0], [0, 0, 1], [1, 0, 0]);
  const o = [S(G.prismOf(F, PERFIL, 0, y1 - y0, P), { tone: "mid", crease: "lo" })];
  o.push(`<g data-tacos="${id}">${tacos(y0, y1, 0)}</g>`);
  if (cara) {
    const borde = (extra) => k.pathOf(contorno(extra).map(([z, x]) => at([x, y1, z])), true);
    o.push(L(borde(0.4), { tone: "lo" }));
    RUEDAS.forEach(([x, z, r], i) => {
      const FW = eje([x, y1, z], [0, 1, 0]);
      o.push(rollo(FW, 0, 2.4, r - 2.2, { tone: i === 0 ? "hi" : "mid" }), L(G.spokesOf(FW, 2.4, 3.2, r - 3.6, i === 0 || i === 5 ? 8 : 5, P), { tone: "lo" }), rollo(FW, 2.4, 4.4, 2.8, { crease: "none" }));
      o.push(D([[x, y1 + 4.4, z]], { size: 0.5, tone: "hi" }));
    });
  }
  return o.join("");
}

// ================= casco =================
function casco() {
  const F = G.frameOf([0, -50, 0], [0, 1, 0], [0, 0, 1], [1, 0, 0]);
  const o = [S(G.prismOf(F, [[18, -80], [12, -72], [12, 66], [24, 84], [36, 84], [46, 64], [46, -80]], 0, 100, P), { tone: "mid", crease: "lo" })];
  // cubierta: marco, tornillos y el asiento del compartimento
  o.push(L(k.planOutline({ x: -77, y: -46, w: 138, d: 92, r: 2 }, 46, P, 3), { tone: "faint" }));
  o.push(L(k.planOutline({ x: -72, y: -40, w: 66, d: 80, r: 2 }, 46, P, 3), { tone: "lo" }));
  o.push(D([[-76, -46], [-76, 46], [60, -46], [60, 46], [-8, -46], [-8, 46]].map(([x, y]) => [x, y, 46]), { size: 0.5 }));
  // frente: placa inclinada con dos líneas, focos y parachoques
  for (const y of [-30, 30]) o.push(rollo(eje([84, y, 30], [1, 0, 0]), 0, 2, 4, { tone: "hi" }), D([[86, y, 30]], { size: 0.6, tone: "hi" }));
  o.push(caja(84.5, -8, 1.4, 16, 26, 7, { r: 0.5, tone: "lo", crease: "none" }));
  o.push(caja(84, -42, 4.5, 84, 14, 5, { r: 1.5, bevel: 0.4 }));
  o.push(L(seg([74, -40, 41], [74, 40, 41]) + seg([69, -40, 43.5], [69, 40, 43.5]), { tone: "faint" }));
  // costado: línea de unión sobre la oruga
  o.push(L(seg([-78, 50, 42], [66, 50, 42]), { tone: "faint" }));
  return o.join("");
}

// ================= motores (pieza 5, junto con las orugas) =================
function motores() {
  const o = [];
  for (const s of [-1, 1]) {
    const F = eje([-60, s * 8, 54], [0, s, 0]);
    const m = [rollo(F, 0, 2, 4.2, {}), rollo(F, 2, 30, 7, { inner: k.fadedSvg(G.ribsOf(F, 5, 28, 7, 14, P, { fade: [0.05, 0.5] }), { tone: "lo" }) }), caja(-67, s > 0 ? 38 : -46, 14, 8, 46, 15, { r: 1.2, bevel: 0.3 })];
    o.push(s > 0 ? m.join("") : [m[2], m[1], m[0]].join(""));
  }
  o.push(caja(-66, -4, 12, 8, 46, 3, { r: 0.6, tone: "lo", crease: "none" }));
  return o.join("");
}

// ================= bandeja de electrónica (piezas 3, 4, 6 y 7) =================
const ZB = 48;
function bandeja() {
  const o = [caja(-51, -41, 46, 82, 46.5, 1.5, { r: 1.5, tone: "lo", crease: "none" }), D(k.corners({ x: -51, y: -41, w: 46, d: 82 }, 3).map(([x, y]) => [x, y, ZB]), { size: 0.45 })];
  // 3 · computador: placa, procesador con disipador y conectores
  const pi = [caja(-48, -38, 34, 22, ZB, 1.1, { tone: "lo", crease: "none", r: 0.8 })];
  pi.push(caja(-40, -33, 12, 12, ZB + 1.1, 4, { r: 0.5, tone: "hi", crease: "lo" }));
  pi.push(L([0, 1, 2, 3].map((i) => k.lineOnTop([-38 + i * 2.7, -32], [-38 + i * 2.7, -22], ZB + 5.1, P)).join(""), { tone: "lo" }));
  pi.push(caja(-22, -37, 7, 8, ZB + 1.1, 5.5, { r: 0.5 }), caja(-22, -27, 7, 8, ZB + 1.1, 5.5, { r: 0.5 }));
  pi.push(D([-46, -44, -42].flatMap((x) => [[x, -18.5, ZB + 1.1]]), { size: 0.3, tone: "lo" }));
  o.push(pieza(3, pi));
  // 4 · controlador de motores: placa, disipador y dos condensadores
  const dr = [caja(-48, -13, 24, 18, ZB, 1.1, { tone: "lo", crease: "none", r: 0.8 })];
  dr.push(caja(-46, -11, 11, 14, ZB + 1.1, 5, { r: 0.5, inner: L([0, 1, 2, 3].map((i) => k.lineOnTop([-45 + i * 2.6, -10.5], [-45 + i * 2.6, 2.5], ZB + 6.1, P)).join(""), { tone: "lo" }) }));
  dr.push(cil(-30.5, -8, 2.6, ZB + 1.1, 7, { steps: 14 }), cil(-30.5, -1, 2.6, ZB + 1.1, 7, { steps: 14 }));
  o.push(pieza(4, dr));
  // 7 · radio: placa chica con su módulo y conector de antena
  const ra = [caja(-21, -12, 13, 16, ZB, 1.1, { tone: "lo", crease: "none", r: 0.8 }), caja(-19.5, -10, 10, 9, ZB + 1.1, 2.6, { r: 1.4 }), cil(-12, 1, 1.4, ZB + 1.1, 3.4, { steps: 10, tone: "hi" })];
  o.push(pieza(7, ra));
  // 6 · batería: paquete con costuras, placa y bornes
  const pack = { x: -47, y: 9, w: 38, d: 29, r: 2.4 };
  const ba = [S(k.slabOf(pack, ZB, 12, P, 5, 0.8), { tone: "mid", inner: L(k.sideSeam(pack, ZB + 4, P, 5) + k.sideSeam(pack, ZB + 8, P, 5), { tone: "faint" }) })];
  ba.push(L(k.planOutline({ x: -42, y: 14, w: 20, d: 9, r: 1 }, ZB + 12, P, 3), { tone: "lo" }), L(k.lineOnTop([-39, 17], [-27, 17], ZB + 12, P) + k.lineOnTop([-39, 20], [-31, 20], ZB + 12, P), { tone: "faint" }));
  ba.push(cil(-15, 15, 1.7, ZB + 12, 1.8, { steps: 10, tone: "hi" }), cil(-15, 21, 1.7, ZB + 12, 1.8, { steps: 10, tone: "hi" }));
  o.push(pieza(6, ba));
  return o.join("");
}

// ================= tapa del compartimento, con antenas =================
const TAPA = { x: -76, y: -44, w: 74, d: 88, r: 4 };
function tapa() {
  const o = [];
  o.push(S(k.slabOf(TAPA, 46, 18, P, 6, 1.2), { tone: "hi", crease: "lo", inner: L(k.sideSeam(TAPA, 49, P, 6), { tone: "faint" }) }));
  o.push(L(k.planOutline(k.insetPlan(TAPA, 5), 64, P, 6), { tone: "faint" }));
  const tor = [...k.corners(TAPA, 6), [-39, -38], [-39, 38]];
  o.push(L(tor.map(([x, y]) => k.ring(x, y, 1.8, 64, P, 12)).join(""), { tone: "lo" }), D(tor.map(([x, y]) => [x, y, 64]), { size: 0.5 }));
  // rejilla de ventilación sobre la cara de adelante y placa de identificación arriba
  for (let i = 0; i < 5; i++) o.push(L(seg([-2, -30, 51 + i * 2.2], [-2, -8, 51 + i * 2.2]), { tone: "lo" }));
  const pl = { x: -34, y: -8, w: 24, d: 12, r: 1 };
  o.push(S(k.slabOf(pl, 64, 0.5, P, 3), { tone: "lo", crease: "none" }), k.faceTextSvg(k.topMatrix([pl.x + 3.4, pl.y + 8.2], 64.5, P, "x"), "R-01", { size: 5.6, tone: "mid" }));
  o.push(caja(-66, -12, 4, 24, 64, 2.6, { r: 1.2 })); // manilla
  // dos antenas atrás: son parte de la radio
  const ant = [];
  for (const y of [-34, 34]) ant.push(cil(-68, y, 2.6, 64, 4, { steps: 12 }), cil(-68, y, 0.7, 68, 30, { steps: 8, tone: "hi", crease: "none" }), cil(-68, y, 1.3, 98, 2, { steps: 10, tone: "hi" }));
  o.push(pieza(7, ant));
  return o.join("");
}

// ================= mástil, LiDAR y cabeza de cámara =================
const MX = 14, ZC = 108; // eje del mástil y altura de la cabeza
function mastil() {
  const o = [cil(MX, 0, 14, 46, 4, { steps: 36, bevel: 0.5 }), L(k.knurl(MX, 0, 14, 46, 50, 28, P), { tone: "lo" }), cil(MX, 0, 10, 50, 3, { steps: 28 })];
  o.push(cil(MX, 0, 3, 53, 51, { steps: 16, tone: "hi", crease: "none" }), cil(MX, 0, 4.4, 76, 3, { steps: 16 }), cil(MX, 0, 5.4, 104, 3.4, { steps: 18 }));
  o.push(D([[MX + 8, -6, 50], [MX + 8, 6, 50]], { size: 0.45 }));
  return o.join("");
}
function lidarBase() { return cil(50, 0, 11, 46, 4, { steps: 28, bevel: 0.4 }) + D([[58, -5, 50], [58, 5, 50]], { size: 0.4 }); }
function lidarCabeza() {
  return pieza(2, [cil(50, 0, 9.5, 50, 9, { steps: 28, tone: "hi", inner: L(k.sideArc(50, 0, 9.5, 53, P, 20) + k.sideArc(50, 0, 9.5, 56.4, P, 20), { tone: "lo" }) }), cil(50, 0, 9.5, 59, 2, { steps: 28, tone: "hi" }), L(k.ring(50, 0, 5, 61, P, 20), { tone: "lo" }), D([[50, 0, 61]], { size: 0.6, tone: "hi" })]);
}
const girado = (cx, cy, largo, ancho, a) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => [cx + (i * largo / 2) * Math.cos(a) - (j * ancho / 2) * Math.sin(a), cy + (i * largo / 2) * Math.sin(a) + (j * ancho / 2) * Math.cos(a)]);
function cabeza(a) {
  const c = Math.cos(a), s = Math.sin(a), partes = [];
  const pon = (ref, svg) => partes.push([prof(ref), svg]);
  for (const lado of [-1, 1]) {
    const cx = MX - s * 10.5 * lado, cy = c * 10.5 * lado;
    pon([cx, cy, ZC + 8], S(k.extrude(girado(cx, cy, 11, 2.4, a), ZC, 15, P), { tone: "mid" }) + D([[cx, cy, ZC + 15]], { size: 0.4 }));
  }
  const bx = MX + c * 3, by = s * 3;
  pon([bx, by, ZC + 9], S(k.extrude(girado(bx, by, 30, 15.5, a), ZC + 2, 13, P), { tone: "hi", crease: "lo" }) + S(k.extrude(girado(bx + c * 4, by + s * 4, 31, 17.5, a), ZC + 15, 1.3, P), { tone: "mid", crease: "none" }));
  const FL = eje([MX + c * 18, s * 18, ZC + 8.5], [c, s, 0]);
  pon([MX + c * 24, s * 24, ZC + 8.5], S(G.disc(0, 6.5, 5.6, FL, P), { tone: "hi", crease: "lo", inner: L(G.arcOf(FL, 3, 5.6, P), { tone: "faint" }) }) + L(G.circleOf(FL, 6.5, 3.6, P), { tone: "lo" }) + D([[MX + c * 24.5, s * 24.5, ZC + 8.5]], { size: 0.7, tone: "hi" }));
  const FR = eje([MX - c * 12, -s * 12, ZC + 8.5], [-c, -s, 0]);
  pon([MX - c * 14, -s * 14, ZC + 8.5], S(G.disc(0, 2.6, 2.4, FR, P), { tone: "mid" }));
  return partes.sort((p, q) => p[0] - q[0]).map((p) => p[1]).join("");
}
const GIROS = Array.from({ length: 14 }, (_, i) => -20 + i * 10); // grados respecto del frente del rover
const cabezas = GIROS.map((g) => cabeza((g * Math.PI) / 180));
const GIRO0 = GIROS.indexOf(40);

// ================= conexiones y globos (solo se ven en el despiece) =================
const ANCLA = {
  1: mas([MX, 0, ZC + 16.5], SEP.cabeza), 2: mas([50, 0, 61], SEP.lidar), 3: mas([-31, -27, ZB + 5.5], SEP.bandeja), 4: mas([-36, -4, ZB + 6.5], SEP.bandeja),
  5: [-60, 26, 61], 6: mas([-28, 24, ZB + 12], SEP.bandeja), 7: mas([-14.5, -4, ZB + 3.7], SEP.bandeja),
  camSale: mas([MX - 4, 0, ZC + 1], SEP.cabeza), lidarSale: mas([44, -7, 52], SEP.lidar), motorLejos: [-60, -26, 61], antena: mas([-68, 34, 68], SEP.tapa), piEntra: mas([-19, -30, ZB + 6.6], SEP.bandeja),
};
const cable = (de, a, ids, o = {}) => {
  const A = ANCLA[de], B = ANCLA[a], zm = o.z ?? (Math.min(A[2], B[2]) + (o.sube ?? 10));
  const via = o.directo ? [] : [[A[0], A[1], zm], [B[0], B[1], zm]];
  return `<g data-cable="${ids}" data-tipo="${o.tipo ?? "dato"}">${k.wireSvg(at(A), at(B), { via: via.map(at), tone: "mid", flow: (o.tipo ?? "dato") === "dato", dashed: o.tipo === "energia", size: 1.1 })}</g>`;
};
const cables = [
  cable("camSale", "piEntra", "1 3", { sube: 15 }), cable("lidarSale", "piEntra", "2 3", { z: ANCLA.piEntra[2] + 9 }),
  cable(3, 4, "3 4", { sube: 8 }), cable(4, 5, "4 5", { tipo: "energia", directo: true }), cable(4, "motorLejos", "4 5", { tipo: "energia", directo: true }),
  cable(6, 4, "6 4", { tipo: "energia", sube: 6 }), cable(6, 3, "6 3", { tipo: "energia", sube: 14 }), cable(3, 7, "3 7", { sube: 5 }), cable(7, "antena", "7", { z: ANCLA[7][2] + 44 }),
];
// globos numerados: los de la bandeja se ordenan en una columna a la izquierda; cámara y LiDAR van a la derecha
const globoEn = {};
{
  const izq = [3, 4, 7, 6].map((n) => [n, at(ANCLA[n])]).sort((a, b) => a[1][1] - b[1][1]);
  const x0 = Math.min(...izq.map(([, a]) => a[0])) - 96; let y = -1e9;
  for (const [n, a] of izq) { y = Math.max(a[1] - 14, y + 25); globoEn[n] = [x0, y]; }
  const a1 = at(ANCLA[1]), a2 = at(ANCLA[2]), a5 = at(ANCLA[5]);
  globoEn[1] = [a1[0] + 62, a1[1] - 18]; globoEn[2] = [a2[0] + 66, a2[1] - 6]; globoEn[5] = [a5[0] - 92, a5[1] + 6];
}
const globos = Object.entries(globoEn).map(([n, b]) => {
  const a = at(ANCLA[n]), dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy), r = 9;
  const fin = [b[0] - (dx / l) * r, b[1] - (dy / l) * r];
  return `<g data-globo="${n}"><path class="iso-line" data-tone="mid" d="M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${fin[0].toFixed(1)} ${fin[1].toFixed(1)}"/><circle class="globo-p" cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" r="1.5"/><circle class="globo-c" cx="${b[0].toFixed(1)}" cy="${b[1].toFixed(1)}" r="${r}"/><text class="globo-t" x="${b[0].toFixed(1)}" y="${(b[1] + 3.4).toFixed(1)}" text-anchor="middle">${n}</text></g>`;
}).join("");

// ================= armado, de atrás hacia adelante =================
const cuerpo = [
  base(),
  grupo("orugaLejos", [pieza(5, oruga(-76, -50, false, "lejos"))]),
  casco(),
  pieza(5, motores()),
  grupo("bandeja", [bandeja()]),
  grupo("tapa", [tapa()]),
  mastil(), lidarBase(),
  grupo("lidar", [lidarCabeza()]),
  grupo("cabeza", [pieza(1, `<g data-cabeza>${cabezas[GIRO0]}</g>`)]),
  grupo("orugaCerca", [pieza(5, oruga(50, 76, true, "cerca"))]),
  `<g data-capa="conexiones">${cables.join("")}${globos}</g>`,
];
const svg = k.figureSvg({
  width: WIDTH, height: HEIGHT,
  label: "Despiece de un rover de inspección con orugas. De arriba hacia abajo: cámara con giro sobre un mástil, sensor LiDAR, tapa del compartimento con dos antenas, bandeja con computador, controlador de motores, radio y batería, y el casco con dos motores y dos orugas. Líneas de conexión unen la cámara y el LiDAR con el computador, el computador con el controlador y la radio, el controlador con los motores, y la batería con el computador y el controlador.",
  body: cuerpo,
});

// encuadre del rover armado: el mismo ancho/alto de la lámina, centrado en el equipo
const armado = [[-92, -80, 0], [96, -80, 0], [-92, 80, 0], [96, 80, 0], [MX, 0, ZC + 20], [-68, 34, 102], [-68, -34, 102]].map(at);
const xs = armado.map((p) => p[0]), ys = armado.map((p) => p[1]);
const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
const w = Math.max(Math.max(...xs) - Math.min(...xs), (Math.max(...ys) - Math.min(...ys)) * (WIDTH / HEIGHT)) + 70, h = w * (HEIGHT / WIDTH);
const encuadre = [Math.max(0, Math.min(WIDTH - w, cx - w / 2)), Math.max(0, Math.min(HEIGHT - h, cy - h / 2)), w, h].map((v) => +v.toFixed(1));

const tacosCuadros = { cerca: [], lejos: [] };
for (let i = 0; i < 5; i++) { tacosCuadros.cerca.push(tacos(50, 76, i / 5)); tacosCuadros.lejos.push(tacos(-76, -50, i / 5)); }
const sep = Object.fromEntries(Object.entries(SEP).map(([n, o]) => [n, pantalla(o)]));
const solidos = (svg.match(/class="iso-solid/g) || []).length;
const focos = Object.fromEntries([1, 2, 3, 4, 5, 6, 7].map((n) => [n, at(ANCLA[n]).map((v) => +v.toFixed(1))]));
writeFileSync("fig_rover.json", JSON.stringify({ svg, focos, ancho: WIDTH, alto: HEIGHT, sep, encuadre, giros: GIROS, giro0: GIRO0, cabezas, tacos: tacosCuadros, solidos }));
console.log("rover:", solidos, "sólidos,", (svg.match(/<path/g) || []).length, "trazos,", Math.round(svg.length / 1024), "kB · cuadros cabeza", Math.round(JSON.stringify(cabezas).length / 1024), "kB · escala", P.scale.toFixed(2), "· encuadre", encuadre.join(" "));
