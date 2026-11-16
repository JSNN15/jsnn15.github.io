// Figura "Nodo de vibración en una estación de polines", construida con el kit isométrico de Anatomy
// (github.com/wheresryan22/anatomy, licencia MIT, copiado en ./kit). Uso: node build.mjs  → fig_nodo.json
import { writeFileSync } from "node:fs";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";

const WIDTH = 760, HEIGHT = 520;

// ---- el mundo (unidades ≈ mm a escala; x a lo largo de la correa, y a lo ancho, z hacia arriba) ----
const X0 = -152, XL = 150;                        // inicio de la correa y medio largo de los largueros
const PLATE = { x: -162, y: -118, w: 324, d: 244, r: 8 };
const PLATE_H = 12, FOOT_H = 6;
const LARGUERO = { z: 0, h: 30, d: 12 };          // dos perfiles a lo largo
const Y_LARG = [-82, 70];                          // y de inicio de cada larguero
const TRAV = { x: -7, y: -94, w: 14, d: 188, r: 1.2 }; // travesaño de la estación
const Z_TRAV = 30, H_TRAV = 6, Z_BASE = Z_TRAV + H_TRAV;
const R_POL = 15;
const Z_EJE = 62;                                  // eje del polín central
const ALA = { y0: 36, z0: 64, y1: 84, z1: 92 };    // eje de los polines laterales
const NODO = { x: 84, y: 88, w: 56, d: 32, r: 3 }; // caja del nodo, sobre una ménsula del larguero cercano
const Z_NODO = 26, H_CAJA = 24, H_TAPA = 4, Z_TAPA = Z_NODO + H_CAJA + H_TAPA;
const SENSOR = [0, 88];                            // acelerómetro sobre el soporte extremo cercano
const Z_SOP = 96;
const LEVANTE = 30;                               // cuánto sube la tapa al abrir el nodo

const P = k.fitProjection(
  [...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0), [X0, -80, 112], [NODO.x + 47, 97, Z_TAPA + 56 + LEVANTE], [0, 90, 120]],
  WIDTH, HEIGHT, { pad: 34, azimuth: 38 },
);
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (pts, style) => k.dotsSvg(pts, style);
const depth = (p) => k.depthOf(p, P);
const items = [];
const put = (ref, svg, part) => items.push({ key: typeof ref === "number" ? ref : depth(ref), svg: Array.isArray(svg) ? svg.join("") : svg, part });
// Capas fijas para lo que no se ordena con un solo punto: lo que queda bajo las estaciones va primero;
// lo que está del lado de acá del larguero cercano (y ≥ 82) va después de él.
const FONDO = -1e6, CERCA = 1e4;
const cerca = (ref) => CERCA + depth(ref);
const travesano = (x) => {
  const mitad = (y, d) => S(k.slabOf({ x: x - 7, y, w: 14, d, r: 1.2 }, Z_TRAV, H_TRAV, P, 3, 0.5), { tone: "mid" });
  put([x, -60, Z_TRAV + 1], [mitad(-94, 164), D([-88, -40, 40].map((y) => at([x, y, Z_BASE])), { size: 0.5 })]);
  put(cerca([x, 80, Z_TRAV]) - 50, [mitad(70, 24), D([at([x, 88, Z_BASE])], { size: 0.5 })]);
};

// ---- base ----
function base() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`];
  const pies = [...k.corners(PLATE, 24)].sort((a, b) => depth([a[0], a[1], 0]) - depth([b[0], b[1], 0]));
  for (const [x, y] of pies) {
    out.push(S(k.cylinder(x, y, 8, -PLATE_H - FOOT_H, 1.8, P, 28), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 6, -PLATE_H - FOOT_H + 1.8, FOOT_H - 1.8, P, 28), { tone: "mid" }));
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.6), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(PLATE, 6), 0, P), { tone: "lo" }));
  const tornillos = k.corners(PLATE, 12);
  out.push(L(tornillos.map(([x, y]) => k.ring(x, y, 2.4, 0, P, 16)).join(""), { tone: "lo" }));
  out.push(D(tornillos.map(([x, y]) => at([x, y, 0])), { size: 0.55 }));
  // regla a lo largo del borde cercano
  const regla = { x: -138, y: PLATE.y + PLATE.d - 17, w: 276, d: 8, r: 1 };
  out.push(S(k.slabOf(regla, 0, 0.7, P, 3), { tone: "lo", crease: "none" }));
  const t = k.topTicks(regla.x + 5, regla.x + regla.w - 5, 5, 5, regla.y + 1, 0.7, [2.2, 4], P);
  out.push(L(t.minor, { tone: "lo" }), L(t.major, { tone: "mid" }));
  out.push(D([at([regla.x + 2.5, regla.y + 4, 0.7]), at([regla.x + regla.w - 2.5, regla.y + 4, 0.7])], { size: 0.45 }));
  // placa de identificación con tres líneas
  const placa = { x: 92, y: -104, w: 58, d: 26, r: 1.5 };
  out.push(S(k.slabOf(placa, 0, 0.8, P, 3, 0.2), { tone: "lo" }));
  for (let i = 0; i < 3; i++) out.push(L(k.lineOnTop([placa.x + 6, placa.y + 7 + i * 6], [placa.x + placa.w - 6 - i * 9, placa.y + 7 + i * 6], 0.8, P), { tone: "lo", free: true }));
  out.push(D([[placa.x + 3, placa.y + 3], [placa.x + placa.w - 3, placa.y + placa.d - 3]].map(([x, y]) => at([x, y, 0.8])), { size: 0.4 }));
  return out.join("");
}

// ---- un larguero: perfil a lo largo, con costura y pernos ----
function larguero(y0) {
  const plan = { x: -XL, y: y0, w: 2 * XL, d: LARGUERO.d, r: 1 };
  const out = [S(k.slabOf(plan, 0, LARGUERO.h, P, 3, 0.6), { tone: "mid", inner: L(k.sideSeam(plan, 4, P, 3), { tone: "faint" }) + L(k.sideSeam(plan, LARGUERO.h - 4, P, 3), { tone: "faint" }) })];
  out.push(L(k.lineOnTop([plan.x, y0 + 3], [plan.x + plan.w, y0 + 3], LARGUERO.h, P), { tone: "faint" }));
  out.push(L(k.lineOnTop([plan.x, y0 + 9], [plan.x + plan.w, y0 + 9], LARGUERO.h, P), { tone: "faint" }));
  const pernos = [-138, -100, -56, 56, 100, 138].map((x) => at([x, y0 + 6, LARGUERO.h]));
  out.push(D(pernos, { size: 0.5 }));
  return out.join("");
}

// ---- soportes de la estación ----
const soporte = (x, y, w, d, z0, z1, extra = "") => S(k.slabOf({ x: x - w / 2, y: y - d / 2, w, d, r: 1 }, z0, z1 - z0, P, 3, 0.5), { tone: "mid" }) + extra;

// ---- un polín: cilindro sobre cualquier eje, con tapas, eje, costuras y generatrices que marcan el giro ----
function polin(o, a, largo, fase = 0) {
  const F = G.frameAlong(o, a);
  const cuerpo = G.disc(0, largo, R_POL, F, P);
  const costuras = L(G.arcOf(F, 5, R_POL, P) + G.arcOf(F, largo - 5, R_POL, P), { tone: "faint" });
  const tapa = (s0, s1) => S(G.disc(s0, s1, 5.2, F, P), { tone: "mid" });
  const eje = (s0, s1) => S(G.disc(s0, s1, 2.2, F, P), { tone: "mid", crease: "none" });
  return { F, largo, cuerpo: S(cuerpo, { tone: "hi", crease: "lo", inner: costuras }), tapas: [eje(-7, -2) + tapa(-2, 0), tapa(largo, largo + 2) + eje(largo + 2, largo + 7)] };
}
const marcas = (F, largo, fase) => k.fadedSvg(G.ribsOf(F, 6, largo - 6, R_POL, 10, P, { phase: fase, fade: [0.05, 0.5] }), { tone: "lo" });

// ---- la correa: tres prismas que siguen la artesa ----
const FB = G.frameOf([X0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
const n = [-(ALA.z1 - ALA.z0), ALA.y1 - ALA.y0].map((v) => v / Math.hypot(ALA.z1 - ALA.z0, ALA.y1 - ALA.y0)); // normal del ala (en y,z)
const alaInf = [[ALA.y0 + n[0] * R_POL - 4, ALA.z0 + n[1] * R_POL - 2.3], [ALA.y1 + n[0] * R_POL + 3, ALA.z1 + n[1] * R_POL + 1.75]];
const ESP = 3.2;
const pol = {
  centro: [[-30, Z_EJE + R_POL], [30, Z_EJE + R_POL], [30, Z_EJE + R_POL + ESP], [-30, Z_EJE + R_POL + ESP]],
  cerca: [alaInf[0], alaInf[1], [alaInf[1][0] + n[0] * ESP, alaInf[1][1] + n[1] * ESP], [alaInf[0][0] + n[0] * ESP, alaInf[0][1] + n[1] * ESP]],
};
pol.lejos = pol.cerca.map(([y, z]) => [-y, z]);
const X_CORTE = 130; // la correa llega desde el fondo y se corta antes de la estación, para dejar ver los polines
const tramo = (poly) => S(G.prismOf(FB, poly, 0, X_CORTE, P), { tone: "mid", crease: "lo" });
const lineaCorrea = (y, z) => L(k.segment([X0, y, z], [X0 + X_CORTE, y, z], P), { tone: "faint" });

// ---- el nodo: caja, interior (se ve al levantar la tapa) y tapa con antena ----
function nodo() {
  const caja = [], dentro = [], tapaG = [];
  const mensula = { x: NODO.x - 4, y: 82, w: NODO.w + 8, d: NODO.d + 12, r: 1.5 };
  caja.push(S(k.slabOf(mensula, Z_NODO - 3, 3, P, 3, 0.4), { tone: "mid" }));
  caja.push(D(k.corners(mensula, 4).map(([x, y]) => at([x, y, Z_NODO])), { size: 0.45 }));
  caja.push(S(k.slabOf(NODO, Z_NODO, H_CAJA, P, 6, 0.8), { tone: "mid", inner: L(k.sideSeam(NODO, Z_NODO + H_CAJA - 1.2, P, 6), { tone: "lo" }) }));
  caja.push(L(k.planOutline(k.insetPlan(NODO, 2.2), Z_NODO + H_CAJA, P, 6), { tone: "lo" })); // junta
  // prensaestopas en la cara que mira a la estación
  const FG = G.frameAlong([NODO.x, NODO.y + 9, Z_NODO + 10], [-1, 0, 0]);
  caja.push(S(G.disc(0, 3, 4.2, FG, P), { tone: "mid" }), S(G.disc(3, 8, 3, FG, P), { tone: "mid" }));
  caja.push(k.fadedSvg(G.ribsOf(FG, 0, 3, 4.2, 12, P, { fade: [0.05, 0.5] }), { tone: "lo" }));
  // interior, apoyado en el borde de la caja: placa con procesador, módulo de radio y dos pilas
  const zi = Z_NODO + H_CAJA;
  const pcb = { x: NODO.x + 4, y: NODO.y + 4, w: 31, d: 24, r: 1 };
  dentro.push(S(k.slabOf(pcb, zi, 1, P, 3), { tone: "lo", crease: "none" }));
  dentro.push(D(k.corners(pcb, 2.2).map(([x, y]) => at([x, y, zi + 1])), { size: 0.4 }));
  const chip = { x: pcb.x + 4, y: pcb.y + 4, w: 9, d: 9, r: 0.4 };
  dentro.push(S(k.slabOf(chip, zi + 1, 1.6, P, 2, 0.2), { tone: "hi", crease: "lo" }));
  dentro.push(D([0, 1, 2, 3].flatMap((i) => [[chip.x + 1.4 + i * 2.1, chip.y - 1.2], [chip.x + 1.4 + i * 2.1, chip.y + chip.d + 1.2]]).map(([x, y]) => at([x, y, zi + 1])), { size: 0.3, tone: "lo" }));
  const radio = { x: pcb.x + 16, y: pcb.y + 3, w: 12, d: 15, r: 1.6 };
  dentro.push(S(k.slabOf(radio, zi + 1, 2.6, P, 3, 0.3), { tone: "mid" }));
  dentro.push(D([0, 1, 2, 3, 4, 5].flatMap((i) => [[radio.x + 1, radio.y + 1.6 + i * 2.3], [radio.x + radio.w - 1, radio.y + 1.6 + i * 2.3]]).map(([x, y]) => at([x, y, zi + 3.6])), { size: 0.28, tone: "lo" }));
  dentro.push(L(k.lineOnTop([chip.x + chip.w, chip.y + 4.5], [radio.x, chip.y + 4.5], zi + 1, P) + k.lineOnTop([chip.x + 4.5, chip.y + chip.d], [chip.x + 4.5, pcb.y + pcb.d - 3], zi + 1, P), { tone: "lo" }));
  dentro.push(S(k.slabOf({ x: pcb.x + 3, y: pcb.y + pcb.d - 6, w: 8, d: 4, r: 0.4 }, zi + 1, 2.2, P, 2), { tone: "mid", crease: "none" })); // conector
  for (const x of [NODO.x + 41, NODO.x + 49]) {
    const FP = G.frameAlong([x, NODO.y + 5, zi + 4.4], [0, 1, 0]);
    dentro.push(S(G.disc(0, 21, 3.8, FP, P), { tone: "mid", crease: "lo", inner: L(G.arcOf(FP, 3, 3.8, P) + G.arcOf(FP, 18, 3.8, P), { tone: "faint" }) }), S(G.disc(21, 22.4, 1.5, FP, P), { tone: "mid" }));
  }
  // tapa con bisel, cuatro tornillos, placa, antena y luz
  const tapa = k.insetPlan(NODO, -1);
  tapaG.push(S(k.slabOf(tapa, zi, H_TAPA, P, 6, 1), { tone: "hi", crease: "lo" }));
  tapaG.push(L(k.planOutline(k.insetPlan(tapa, 3.5), Z_TAPA, P, 6), { tone: "faint" }));
  const tor = k.corners(tapa, 5);
  tapaG.push(L(tor.map(([x, y]) => k.ring(x, y, 1.9, Z_TAPA, P, 14)).join(""), { tone: "lo" }));
  tapaG.push(D(tor.map(([x, y]) => at([x, y, Z_TAPA])), { size: 0.5 }));
  const placa = { x: NODO.x + 12, y: NODO.y + 14, w: 24, d: 11, r: 1 };
  tapaG.push(S(k.slabOf(placa, Z_TAPA, 0.5, P, 3), { tone: "lo", crease: "none" }));
  tapaG.push(k.faceTextSvg(k.topMatrix([placa.x + 3, placa.y + 7.4], Z_TAPA + 0.5, P, "x"), "V-01", { size: 5.2, tone: "mid" }));
  const [ax, ay] = [NODO.x + NODO.w - 9, NODO.y + 9];
  tapaG.push(S(k.cylinder(ax, ay, 3.4, Z_TAPA, 5, P, 24), { tone: "mid" }));
  tapaG.push(L(k.knurl(ax, ay, 3.4, Z_TAPA, Z_TAPA + 5, 20, P), { tone: "lo" }));
  tapaG.push(S(k.cylinder(ax, ay, 1.9, Z_TAPA + 5, 3, P, 20), { tone: "mid" }));
  tapaG.push(S(k.cylinder(ax, ay, 1, Z_TAPA + 8, 44, P, 14), { tone: "hi", crease: "none" }));
  tapaG.push(S(k.cylinder(ax, ay, 1.6, Z_TAPA + 52, 3, P, 16), { tone: "hi" }));
  tapaG.push(`<g data-part="luz">${D([at([NODO.x + 8, NODO.y + 7, Z_TAPA])], { size: 1.1, tone: "hi", pulse: true })}</g>`);
  // guías de despiece: de cada esquina de la caja a la esquina de la tapa levantada (solo se ven con la tapa arriba)
  const guias = L(k.corners(NODO, 2).map(([x, y]) => k.rise([x, y], zi, zi + LEVANTE, P)).join(""), { tone: "mid", dotted: true });
  return { svg: caja.join("") + dentro.join("") + `<g data-part="guias">${guias}</g><g data-part="tapa">${tapaG.join("")}</g>`, antena: [ax, ay, Z_TAPA + 55] };
}

// ---- el acelerómetro (la única pieza encendida) ----
function sensor() {
  const [x, y] = SENSOR;
  const out = [];
  out.push(S(k.cylinder(x, y, 7.4, Z_SOP, 2.2, P, 28), { tone: "mid" }));                 // base magnética
  out.push(S(k.cylinder(x, y, 6, Z_SOP + 2.2, 9, P, 28, 0.8), { tone: "hi", lit: true })); // cuerpo
  out.push(L(k.ring(x, y, 3.6, Z_SOP + 11.2, P, 20), { tone: "lo" }));
  out.push(D([at([x, y, Z_SOP + 11.2])], { size: 0.6, tone: "hi" }));
  return out.join("");
}

// ================= armado, de atrás hacia adelante =================
const N = nodo();
put(FONDO, base());
put(FONDO + 1, larguero(Y_LARG[0]));
// correa de retorno entre los largueros, sobre su polín
const FR = G.frameAlong([96, -66, 13], [0, 1, 0]);
put(FONDO + 2, [S(G.disc(-3, 0, 3.4, FR, P), { tone: "mid" }), S(G.disc(0, 132, 8, FR, P), { tone: "mid", crease: "lo", inner: L(G.arcOf(FR, 6, 8, P) + G.arcOf(FR, 126, 8, P), { tone: "faint" }) }), S(G.disc(132, 135, 3.4, FR, P), { tone: "mid" })]);
put(FONDO + 3, [S(k.slabOf({ x: -XL, y: -58, w: 2 * XL, d: 116, r: 0.5 }, 21.2, 2.2, P, 2), { tone: "lo", crease: "none" }), L(k.lineOnTop([-XL, -44], [XL, -44], 23.4, P) + k.lineOnTop([-XL, 44], [XL, 44], 23.4, P), { tone: "faint" })], "retorno");
travesano(0);
// soportes: extremos altos y centrales bajos
const a = [0, ALA.y1 - ALA.y0, ALA.z1 - ALA.z0], largoAla = Math.hypot(a[1], a[2]);
const polC = polin([0, -30, Z_EJE], [0, 1, 0], 60);
const polLejos = polin([0, -ALA.y1, ALA.z1], [0, a[1] / largoAla, -a[2] / largoAla], largoAla);
const polCerca = polin([0, ALA.y0, ALA.z0], [0, a[1] / largoAla, a[2] / largoAla], largoAla);
// estación del fondo: sostiene la correa que llega; se ven sus soportes y los extremos de sus polines
const XF = -112;
travesano(XF);
for (const [y, z1] of [[-88, Z_SOP], [-33, Z_EJE + 4], [33, Z_EJE + 4], [88, Z_SOP]]) put(y > 80 ? cerca([XF, y, 50]) : [XF, y, 50], soporte(XF, y, 10, y * y > 2000 ? 8 : 6, Z_BASE, z1));
const fC = polin([XF, -30, Z_EJE], [0, 1, 0], 60), fL = polin([XF, -ALA.y1, ALA.z1], [0, a[1] / largoAla, -a[2] / largoAla], largoAla), fN = polin([XF, ALA.y0, ALA.z0], [0, a[1] / largoAla, a[2] / largoAla], largoAla);
put([XF, -60, 78], [fL.tapas[0], fL.cuerpo, fL.tapas[1]]); put([XF, 0, 60], [fC.tapas[0], fC.cuerpo, fC.tapas[1]]); put([XF, 60, 78], [fN.tapas[0], fN.cuerpo, fN.tapas[1]]);
// correa: lado lejano, centro y lado cercano; cada tramo con dos líneas de desgaste
put([-100, -60, 95], [tramo(pol.lejos), lineaCorrea(-(alaInf[0][0] + 14 * (ALA.y1 - ALA.y0) / largoAla + n[0] * ESP), alaInf[0][1] + 14 * (ALA.z1 - ALA.z0) / largoAla + n[1] * ESP)]);
put([0, -88, 60], soporte(0, -88, 10, 8, Z_BASE, Z_SOP, D([at([0, -88, Z_SOP])], { size: 0.5 })));
put([0, -60, 80], [polLejos.tapas[0], `<g data-part="polin">${polLejos.cuerpo}<g data-marcas="lejos">${marcas(polLejos.F, largoAla, 0)}</g></g>`, polLejos.tapas[1]]);
put([0, -33, 50], soporte(0, -33, 10, 6, Z_BASE, Z_EJE + 4));
put([-100, 0, 80], [tramo(pol.centro), lineaCorrea(-12, Z_EJE + R_POL + ESP), lineaCorrea(12, Z_EJE + R_POL + ESP)]);
put([0, 0, 62], [polC.tapas[0], `<g data-part="polin">${polC.cuerpo}<g data-marcas="centro">${marcas(polC.F, 60, 0)}</g></g>`, polC.tapas[1]]);
put([0, 33, 50], soporte(0, 33, 10, 6, Z_BASE, Z_EJE + 4));
put([-100, 60, 96], [tramo(pol.cerca), lineaCorrea(alaInf[0][0] + 14 * (ALA.y1 - ALA.y0) / largoAla + n[0] * ESP, alaInf[0][1] + 14 * (ALA.z1 - ALA.z0) / largoAla + n[1] * ESP)]);
put([0, 60, 80], [polCerca.tapas[0], `<g data-part="polin">${polCerca.cuerpo}<g data-marcas="cerca">${marcas(polCerca.F, largoAla, 0)}</g></g>`, polCerca.tapas[1]]);
put(CERCA - 500, larguero(Y_LARG[1]));
put(cerca([0, 88, 70]), [soporte(0, 88, 10, 8, Z_BASE, Z_SOP - 2), S(k.slabOf({ x: -9, y: 79, w: 18, d: 18, r: 1.5 }, Z_SOP - 2, 2, P, 3, 0.3), { tone: "mid" })]);
put(cerca([0, 88, 100]), `<g data-part="sensor">${sensor()}</g>`);
put(cerca([NODO.x + 20, 104, 40]), N.svg);
// cable: sale del prensaestopas, corre sobre el larguero con dos abrazaderas, sube por el soporte y llega al acelerómetro
const ruta = [[NODO.x - 8, NODO.y + 9, Z_NODO + 10], [NODO.x - 14, 79, LARGUERO.h + 1], [8, 79, LARGUERO.h + 1], [6.5, 84, Z_BASE + 2], [6.5, 84, Z_SOP - 4], [5.5, 88, Z_SOP + 6]];
const cable = ruta.map(at);
put(cerca([0, 88, 100]) + 1, [k.wireSvg(cable[0], cable[cable.length - 1], { via: cable.slice(1, -1), tone: "hi", size: 1.1 }), ...[46, 22].map((x) => S(k.slabOf({ x: x - 2.5, y: 76.5, w: 5, d: 5, r: 0.8 }, LARGUERO.h, 1.6, P, 2), { tone: "mid", crease: "none" }))]);

items.sort((p, q) => p.key - q.key);
const svg = k.figureSvg({
  width: WIDTH, height: HEIGHT,
  label: "Una estación de polines de una correa transportadora sobre una base. Tres polines forman la artesa y la correa llega desde el fondo. Sobre el soporte del extremo cercano hay un acelerómetro, unido por un cable a una caja estanca con antena fijada al larguero: el nodo.",
  body: items.map((i) => i.svg),
});

// cuadros de las marcas de giro: una vuelta de paso dividida en 6
const CUADROS = 6, PASO = (Math.PI * 2) / 10;
const cuadros = { centro: [], lejos: [], cerca: [] };
for (let i = 0; i < CUADROS; i++) {
  const f = (i / CUADROS) * PASO;
  cuadros.centro.push(marcas(polC.F, 60, f)); cuadros.lejos.push(marcas(polLejos.F, largoAla, f)); cuadros.cerca.push(marcas(polCerca.F, largoAla, f));
}
const sube = k.axisVector(P, [0, 0, 1]);
writeFileSync("fig_nodo.json", JSON.stringify({ svg, ancho: WIDTH, alto: HEIGHT, foco: at([NODO.x + NODO.w / 2 - 6, NODO.y + NODO.d / 2 - 6, Z_NODO + H_CAJA + 16]), levante: LEVANTE, sensor: at([SENSOR[0], SENSOR[1], Z_SOP + 6]), css: k.ISO_CSS, cuadros, sube, antena: at(N.antena), partes: items.length, solidos: (svg.match(/class="iso-solid/g) || []).length }));
console.log("orden cable<nodo:", depth([0, 88, 100]) + 1 < depth([NODO.x + 20, 104, 40]));
console.log("figura:", (svg.match(/class="iso-solid/g) || []).length, "sólidos,", (svg.match(/<path/g) || []).length, "trazos,", Math.round(svg.length / 1024), "kB");
