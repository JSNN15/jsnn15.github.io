// Núcleo del cuaderno: todo el cálculo, sin pantalla. Corre igual en el navegador y en Node (así se prueba contra pandas).
// Una tabla es {n, cols: [{nombre, tipo: 'num' | 'tiempo' | 'texto', v}]}. Los números y las fechas (ms) van en
// Float64Array con NaN donde falta el dato; el texto, en un arreglo común.

// ---------- lectura ----------
const SEPS = [';', ',', '\t', '|'];
// Cuenta separadores fuera de comillas en las primeras líneas y elige el más parejo.
export const detectarSeparador = (texto) => {
  const lineas = texto.slice(0, 20000).split(/\r?\n/).filter(Boolean).slice(0, 12);
  let mejor = ',',
    nota = -1;
  for (const s of SEPS) {
    const c = lineas.map((l) => {
      let n = 0,
        q = false;
      for (const ch of l) {
        if (ch === '"') q = !q;
        else if (ch === s && !q) n++;
      }
      return n;
    });
    const min = Math.min(...c);
    if (min > 0 && min * 10 + (c.every((x) => x === c[0]) ? 5 : 0) > nota) {
      nota = min * 10 + (c.every((x) => x === c[0]) ? 5 : 0);
      mejor = s;
    }
  }
  return mejor;
};

// Recorre el CSV una sola vez y entrega cada celda a `celda(fila, columna, texto)`.
const recorrerCSV = (texto, sep, celda, maxFilas = Infinity) => {
  let i = 0,
    f = 0,
    c = 0;
  const N = texto.length;
  if (texto.charCodeAt(0) === 0xfeff) i = 1;
  while (i < N && f < maxFilas) {
    let v;
    if (texto[i] === '"') {
      let j = i + 1,
        out = '';
      for (;;) {
        const k = texto.indexOf('"', j);
        if (k < 0) {
          out += texto.slice(j);
          j = N;
          break;
        }
        out += texto.slice(j, k);
        if (texto[k + 1] === '"') {
          out += '"';
          j = k + 2;
        } else {
          j = k + 1;
          break;
        }
      }
      v = out;
      i = j;
    } else {
      let j = i;
      while (j < N && texto[j] !== sep && texto[j] !== '\n' && texto[j] !== '\r') j++;
      v = texto.slice(i, j);
      i = j;
    }
    celda(f, c, v);
    if (texto[i] === sep) {
      i++;
      c++;
    } else {
      if (texto[i] === '\r') i++;
      if (texto[i] === '\n') i++;
      f++;
      c = 0;
    }
  }
  return f;
};

const RE_NUM = /^[+-]?(\d{1,3}([.,\s]\d{3})*|\d+)([.,]\d+)?([eE][+-]?\d+)?$/;
const RE_ISO = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?)?/;
const RE_DMA = /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/;
const VACIOS = new Set(['', 'na', 'n/a', 'nan', 'null', '-', '--', '#n/a', '#n/d', '#div/0!', '#valor!', '#value!', 's/d', 'bad', 'error']);

// Las fechas se leen como hora local "de planta", sin zona: se guardan como si fueran UTC para que no cambien según el equipo.
export const aFecha = (s) => {
  let m = RE_ISO.exec(s);
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0));
  m = RE_DMA.exec(s);
  if (m) return Date.UTC(+m[3], +m[2] - 1, +m[1], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0));
  return NaN;
};
// coma = true: la coma es decimal y el punto separa miles ("3.019,53"); coma = false: al revés.
export const aNumero = (s, coma) => {
  if (coma) s = s.replace(/[.\s]/g, '').replace(',', '.');
  else s = s.replace(/[,\s]/g, '');
  const x = Number(s);
  return s === '' ? NaN : x;
};

export const leerCSV = (texto, opc = {}) => {
  const sep = opc.sep || detectarSeparador(texto);
  // 1) muestra para decidir el tipo de cada columna
  const muestra = [];
  recorrerCSV(texto, sep, (f, c, v) => ((muestra[f] ||= [])[c] = v), 400);
  const nombres = (muestra[0] || []).map((x, i) => (x || '').trim() || `Columna ${i + 1}`);
  const cuerpo = muestra.slice(1);
  const tipos = nombres.map((_, c) => {
    let num = 0,
      fec = 0,
      tot = 0,
      conComa = 0,
      conPunto = 0;
    for (const fila of cuerpo) {
      const v = (fila[c] ?? '').trim();
      if (VACIOS.has(v.toLowerCase())) continue;
      tot++;
      if (RE_NUM.test(v)) {
        num++;
        // el último separador que aparece es el decimal
        const ic = v.lastIndexOf(','),
          ip = v.lastIndexOf('.');
        if (ic > ip) conComa++;
        else if (ip > ic) conPunto++;
      } else if (!isNaN(aFecha(v))) fec++;
    }
    if (!tot) return {tipo: 'num', coma: false};
    if (fec / tot > 0.9) return {tipo: 'tiempo'};
    if (num / tot > 0.9) return {tipo: 'num', coma: conComa > conPunto};
    return {tipo: 'texto'};
  });
  // una coma decimal en cualquier columna indica el formato de todo el archivo (un entero "1.200" son mil doscientos)
  const coma = tipos.some((t) => t.coma);
  // 2) lectura completa directo a arreglos por columna
  let cap = Math.max(1024, Math.ceil(texto.length / Math.max(20, (texto.indexOf('\n', 200) + 1 || 200))) + 16);
  const cols = nombres.map((nombre, c) => ({nombre, tipo: tipos[c].tipo, v: tipos[c].tipo === 'texto' ? [] : new Float64Array(cap).fill(NaN)}));
  const crecer = () => {
    cap *= 2;
    for (const col of cols)
      if (col.tipo !== 'texto') {
        const b = new Float64Array(cap).fill(NaN);
        b.set(col.v);
        col.v = b;
      }
  };
  const filas = recorrerCSV(texto, sep, (f, c, v) => {
    if (f === 0 || c >= cols.length) return;
    const r = f - 1;
    if (r >= cap) crecer();
    const col = cols[c];
    if (col.tipo === 'texto') col.v[r] = v;
    else {
      const t = v.trim();
      if (VACIOS.has(t.toLowerCase())) return;
      col.v[r] = col.tipo === 'tiempo' ? aFecha(t) : aNumero(t, coma);
    }
  });
  // la última línea puede venir vacía
  let n = Math.max(0, filas - 1);
  while (n > 0 && cols.every((c) => (c.tipo === 'texto' ? !c.v[n - 1] : isNaN(c.v[n - 1])))) n--;
  for (const col of cols) col.v = col.tipo === 'texto' ? col.v.slice(0, n) : col.v.slice(0, n);
  return {n, cols, formato: {sep, coma}};
};

// Desde una hoja de cálculo ya leída como filas (la primera es el encabezado). Las fechas llegan como Date.
export const deFilas = (filas) => {
  const nombres = (filas[0] || []).map((x, i) => String(x ?? '').trim() || `Columna ${i + 1}`);
  const n = filas.length - 1;
  const cols = nombres.map((nombre, c) => {
    let num = 0,
      fec = 0,
      tot = 0;
    for (let r = 1; r <= Math.min(n, 400); r++) {
      const x = filas[r][c];
      if (x == null || x === '') continue;
      tot++;
      if (x instanceof Date) fec++;
      else if (typeof x === 'number') num++;
      else if (typeof x === 'string' && !isNaN(aFecha(x))) fec++;
    }
    const tipo = tot && fec / tot > 0.9 ? 'tiempo' : !tot || num / tot > 0.9 ? 'num' : 'texto';
    const v = tipo === 'texto' ? new Array(n) : new Float64Array(n).fill(NaN);
    for (let r = 0; r < n; r++) {
      const x = filas[r + 1][c];
      if (tipo === 'texto') v[r] = x == null ? '' : String(x);
      else if (x == null || x === '') continue;
      else if (tipo === 'tiempo') v[r] = x instanceof Date ? x.getTime() : aFecha(String(x));
      else v[r] = typeof x === 'number' ? x : aNumero(String(x), /,\d+$/.test(String(x)));
    }
    return {nombre, tipo, v};
  });
  return {n, cols, formato: {hoja: true}};
};

// ---------- estadística básica ----------
const validos = (v) => {
  const out = new Float64Array(v.length);
  let k = 0;
  for (let i = 0; i < v.length; i++) if (!isNaN(v[i])) out[k++] = v[i];
  return out.subarray(0, k);
};
export const cuantil = (ordenado, q) => {
  if (!ordenado.length) return NaN;
  const p = (ordenado.length - 1) * q,
    a = Math.floor(p),
    b = Math.ceil(p);
  return ordenado[a] + (ordenado[b] - ordenado[a]) * (p - a);
};
export const resumen = (v) => {
  const x = validos(v).slice().sort();
  const n = x.length;
  if (!n) return {n: 0, faltan: v.length, min: NaN, max: NaN, media: NaN, desv: NaN, mediana: NaN, p01: NaN, p99: NaN, mad: NaN};
  let s = 0;
  for (let i = 0; i < n; i++) s += x[i];
  const media = s / n;
  let s2 = 0;
  for (let i = 0; i < n; i++) s2 += (x[i] - media) ** 2;
  const mediana = cuantil(x, 0.5);
  const d = new Float64Array(n);
  for (let i = 0; i < n; i++) d[i] = Math.abs(x[i] - mediana);
  d.sort();
  return {n, faltan: v.length - n, min: x[0], max: x[n - 1], media, desv: n > 1 ? Math.sqrt(s2 / (n - 1)) : 0, mediana, p01: cuantil(x, 0.01), p99: cuantil(x, 0.99), mad: cuantil(d, 0.5)};
};
export const pearson = (a, b) => {
  let n = 0,
    sa = 0,
    sb = 0,
    saa = 0,
    sbb = 0,
    sab = 0;
  for (let i = 0; i < a.length; i++) {
    const x = a[i],
      y = b[i];
    if (isNaN(x) || isNaN(y)) continue;
    n++;
    sa += x;
    sb += y;
    saa += x * x;
    sbb += y * y;
    sab += x * y;
  }
  const d = Math.sqrt((n * saa - sa * sa) * (n * sbb - sb * sb));
  return {r: n > 2 && d > 0 ? (n * sab - sa * sb) / d : NaN, n};
};

// ---------- perfil y hallazgos ----------
const DUR = [
  [86400000, 'd'],
  [3600000, 'h'],
  [60000, 'min'],
  [1000, 's'],
];
export const duracion = (ms) => {
  for (const [u, s] of DUR) if (ms >= u) return `${+(ms / u).toFixed(ms % u ? 1 : 0)} ${s}`.replace('.', ',');
  return `${ms} ms`;
};
export const aDuracion = (t) => {
  const m = /^(\d+(?:[.,]\d+)?)\s*(d|h|min|s)$/.exec(String(t).trim());
  if (!m) return NaN;
  return parseFloat(m[1].replace(',', '.')) * {d: 86400000, h: 3600000, min: 60000, s: 1000}[m[2]];
};

// Cada cuántas filas cambia de valor una columna (mediana del largo de las rachas) y cuál es la racha más larga.
const rachas = (v) => {
  const largos = [];
  let largo = 0,
    prev = NaN,
    max = 0;
  for (let i = 0; i < v.length; i++) {
    const x = v[i];
    if (isNaN(x)) continue;
    if (x === prev) largo++;
    else {
      if (largo) largos.push(largo);
      max = Math.max(max, largo);
      largo = 1;
      prev = x;
    }
  }
  if (largo) largos.push(largo), (max = Math.max(max, largo));
  largos.sort((a, b) => a - b);
  return {tipica: largos.length ? largos[largos.length >> 1] : 0, max, cambios: largos.length};
};

export const perfilTiempo = (t) => {
  const n = t.length;
  let desorden = 0,
    repetidas = 0,
    vacias = 0;
  const pasos = [];
  let prev = NaN,
    marcas = 0;
  for (let i = 0; i < n; i++) {
    const x = t[i];
    if (isNaN(x)) {
      vacias++;
      continue;
    }
    if (!isNaN(prev)) {
      if (x < prev) desorden++;
      else if (x === prev) repetidas++;
      else pasos.push(x - prev);
    }
    if (x !== prev) marcas++;
    prev = x;
  }
  pasos.sort((a, b) => a - b);
  const paso = pasos.length ? pasos[pasos.length >> 1] : NaN;
  const saltos = [];
  prev = NaN;
  for (let i = 0; i < n; i++) {
    const x = t[i];
    if (isNaN(x)) continue;
    if (!isNaN(prev) && x - prev > paso * 5) saltos.push({desde: prev, hasta: x});
    prev = x;
  }
  const v = validos(t);
  let min = Infinity,
    max = -Infinity;
  for (const x of v) {
    if (x < min) min = x;
    if (x > max) max = x;
  }
  return {paso, marcas, porMarca: marcas ? Math.round((n - vacias) / marcas) : 0, repetidas, desorden, vacias, saltos, desde: min, hasta: max};
};

export const perfil = (tabla) => {
  const it = tabla.cols.findIndex((c) => c.tipo === 'tiempo');
  const tiempo = it >= 0 ? perfilTiempo(tabla.cols[it].v) : null;
  const cols = tabla.cols.map((c) => {
    if (c.tipo !== 'num') return {nombre: c.nombre, tipo: c.tipo};
    const r = resumen(c.v);
    const ra = rachas(c.v);
    // atípicos: más lejos de la mediana que 6 desviaciones robustas
    const lim = 6 * 1.4826 * r.mad;
    let atipicos = 0;
    if (lim > 0) for (let i = 0; i < c.v.length; i++) if (!isNaN(c.v[i]) && Math.abs(c.v[i] - r.mediana) > lim) atipicos++;
    return {nombre: c.nombre, tipo: 'num', ...r, racha: ra.tipica, rachaMax: ra.max, cambios: ra.cambios, atipicos, constante: r.n > 0 && r.min === r.max};
  });
  return {n: tabla.n, tiempo, cols, colTiempo: it >= 0 ? tabla.cols[it].nombre : null};
};

// Lo que conviene revisar antes de analizar, con el paso de la receta que lo resuelve.
export const hallazgos = (p) => {
  const H = [];
  const T = p.tiempo;
  if (!T) H.push({nivel: 'alto', texto: 'No encontré una columna de fecha y hora. Sin ella no hay series de tiempo ni validación por fecha.'});
  else {
    if (T.porMarca > 1)
      H.push({
        nivel: 'alto',
        texto: `Cada marca de tiempo se repite en ${T.porMarca} filas: la fecha viene con menos detalle que los datos (un registro cada ${duracion(T.paso / T.porMarca)}, fechas cada ${duracion(T.paso)}).`,
        paso: {op: 'tiempo', col: p.colTiempo, repetidas: 'repartir'},
        accion: 'Repartir las filas dentro de cada marca',
      });
    if (T.desorden) H.push({nivel: 'medio', texto: `${T.desorden} filas vienen fuera de orden en el tiempo.`, paso: {op: 'ordenar'}, accion: 'Ordenar por fecha'});
    for (const s of T.saltos.slice(0, 3)) H.push({nivel: 'medio', texto: `Faltan datos entre ${fecha(s.desde)} y ${fecha(s.hasta)} (${duracion(s.hasta - s.desde)}). No se rellena: un hueco así no se inventa.`});
    if (T.vacias) H.push({nivel: 'medio', texto: `${T.vacias} filas no tienen fecha.`, paso: {op: 'quitar_filas', sin: p.colTiempo}, accion: 'Quitar esas filas'});
  }
  const base = T && T.porMarca > 1 ? T.porMarca : 1;
  for (const c of p.cols) {
    if (c.tipo !== 'num' || !c.n) {
      if (c.tipo === 'num') H.push({nivel: 'medio', col: c.nombre, texto: `«${c.nombre}» viene vacía.`, paso: {op: 'quitar_columnas', cols: [c.nombre]}, accion: 'Quitar la columna'});
      continue;
    }
    if (c.constante) H.push({nivel: 'medio', col: c.nombre, texto: `«${c.nombre}» tiene siempre el mismo valor (${num(c.min)}): no aporta.`, paso: {op: 'quitar_columnas', cols: [c.nombre]}, accion: 'Quitar la columna'});
    else if (c.racha >= 3)
      H.push({
        nivel: 'info',
        col: c.nombre,
        texto: `«${c.nombre}» cambia cada ${c.racha} filas${T ? ` (cada ${duracion((T.paso / base) * c.racha)})` : ''}: parece un dato de laboratorio o de turno, no un sensor en línea.`,
      });
    else if (c.rachaMax >= Math.max(30, 20 * Math.max(1, c.racha)))
      H.push({
        nivel: 'medio',
        col: c.nombre,
        texto: `«${c.nombre}» se queda pegada en un mismo valor hasta ${c.rachaMax} filas seguidas: puede ser un sensor congelado.`,
        paso: {op: 'pegados', cols: [c.nombre], filas: Math.max(30, 20 * Math.max(1, c.racha))},
        accion: 'Borrar los tramos pegados',
      });
    if (c.faltan / p.n > 0.02) H.push({nivel: c.faltan / p.n > 0.3 ? 'alto' : 'medio', col: c.nombre, texto: `A «${c.nombre}» le falta el ${pct(c.faltan / p.n)} de los datos.`});
    // un atípico es raro por definición: si la regla marca más del 2 %, la variable tiene más de un modo de operar
    if (c.atipicos >= 3 && c.atipicos / c.n <= 0.02)
      H.push({
        nivel: 'medio',
        col: c.nombre,
        texto: `«${c.nombre}» tiene ${c.atipicos} valores muy lejos del resto (entre ${num(c.min)} y ${num(c.max)}; lo habitual es ${num(c.p01)} a ${num(c.p99)}).`,
        paso: {op: 'atipicos', cols: [c.nombre], k: 6},
        accion: 'Borrar los valores atípicos',
      });
  }
  return H;
};

// ---------- formato en español de Chile ----------
export const num = (x, d) => {
  if (x == null || isNaN(x)) return '—';
  const a = Math.abs(x);
  const dec = d ?? (a >= 1000 ? 0 : a >= 100 ? 1 : a >= 1 ? 2 : 3);
  return x.toLocaleString('es-CL', {minimumFractionDigits: 0, maximumFractionDigits: dec});
};
export const pct = (x, d = 1) => (isNaN(x) ? '—' : (x * 100).toLocaleString('es-CL', {maximumFractionDigits: d}) + ' %');
const dos = (x) => String(x).padStart(2, '0');
export const fecha = (ms, corta) => {
  if (isNaN(ms)) return '—';
  const d = new Date(ms);
  const f = `${dos(d.getUTCDate())}-${dos(d.getUTCMonth() + 1)}-${d.getUTCFullYear()}`;
  return corta ? f : `${f} ${dos(d.getUTCHours())}:${dos(d.getUTCMinutes())}`;
};

// ---------- receta: pasos de limpieza que se pueden repetir sobre otro archivo ----------
const copia = (t) => ({n: t.n, cols: t.cols.map((c) => ({...c, v: c.v.slice()})), formato: t.formato});
const iTiempo = (t) => t.cols.findIndex((c) => c.tipo === 'tiempo');
const elegir = (t, cols) => t.cols.filter((c) => c.tipo === 'num' && (!cols || cols === 'todas' || cols.includes(c.nombre)));
const filtrarFilas = (t, keep) => {
  let n = 0;
  for (let i = 0; i < t.n; i++) if (keep[i]) n++;
  const cols = t.cols.map((c) => {
    const v = c.tipo === 'texto' ? new Array(n) : new Float64Array(n);
    let k = 0;
    for (let i = 0; i < t.n; i++) if (keep[i]) v[k++] = c.v[i];
    return {...c, v};
  });
  return {n, cols, formato: t.formato};
};

export const OPS = {
  // Fija la columna de tiempo. Si cada marca se repite, reparte las filas de forma pareja hasta la marca siguiente.
  tiempo(t, p) {
    const out = copia(t);
    const c = out.cols.find((x) => x.nombre === p.col);
    if (!c) throw new Error(`No está la columna de tiempo «${p.col}».`);
    if (c.tipo !== 'tiempo') throw new Error(`«${p.col}» no se pudo leer como fecha.`);
    // la columna elegida pasa adelante: es la que usa todo lo demás
    out.cols = [c, ...out.cols.filter((x) => x !== c)];
    let cambiadas = 0;
    if (p.repetidas === 'repartir') {
      const v = c.v,
        P = perfilTiempo(v);
      let i = 0;
      while (i < v.length) {
        let j = i;
        while (j + 1 < v.length && v[j + 1] === v[i]) j++;
        const k = j - i + 1;
        if (k > 1 && !isNaN(v[i])) {
          // el tramo dura hasta la marca siguiente, o un paso típico si hay un hueco o es el final
          const sig = j + 1 < v.length && v[j + 1] - v[i] <= P.paso * 1.5 ? v[j + 1] - v[i] : P.paso;
          const base = v[i];
          for (let m = 1; m < k; m++) (v[i + m] = base + (sig * m) / k), cambiadas++;
        }
        i = j + 1;
      }
    }
    return {tabla: out, nota: cambiadas ? `${num(cambiadas)} filas con hora repartida` : 'columna de tiempo fijada'};
  },
  ordenar(t) {
    const it = iTiempo(t);
    if (it < 0) throw new Error('No hay columna de tiempo para ordenar.');
    const idx = Array.from({length: t.n}, (_, i) => i).sort((a, b) => t.cols[it].v[a] - t.cols[it].v[b]);
    const cols = t.cols.map((c) => ({...c, v: c.tipo === 'texto' ? idx.map((i) => c.v[i]) : Float64Array.from(idx, (i) => c.v[i])}));
    return {tabla: {n: t.n, cols, formato: t.formato}, nota: 'filas ordenadas por fecha'};
  },
  quitar_columnas(t, p) {
    const fuera = t.cols.filter((c) => p.cols.includes(c.nombre)).length;
    return {tabla: {...t, cols: t.cols.filter((c) => !p.cols.includes(c.nombre))}, nota: `${fuera} ${fuera === 1 ? 'columna quitada' : 'columnas quitadas'}`};
  },
  // Quita las filas donde falta el dato de una columna (por ejemplo, la fecha o la variable que se quiere estimar).
  quitar_filas(t, p) {
    const c = t.cols.find((x) => x.nombre === p.sin);
    if (!c) throw new Error(`No está la columna «${p.sin}».`);
    const keep = new Uint8Array(t.n);
    for (let i = 0; i < t.n; i++) keep[i] = c.tipo === 'texto' ? (c.v[i] ? 1 : 0) : isNaN(c.v[i]) ? 0 : 1;
    const out = filtrarFilas(t, keep);
    return {tabla: out, nota: `${num(t.n - out.n)} filas quitadas`};
  },
  // Fuera del rango físico: se borra el valor, no la fila.
  rango(t, p) {
    const out = copia(t);
    const c = out.cols.find((x) => x.nombre === p.col);
    if (!c) throw new Error(`No está la columna «${p.col}».`);
    let k = 0;
    for (let i = 0; i < out.n; i++) if (c.v[i] < (p.min ?? -Infinity) || c.v[i] > (p.max ?? Infinity)) (c.v[i] = NaN), k++;
    return {tabla: out, nota: `${num(k)} valores fuera de rango borrados`};
  },
  // Más lejos de la mediana que k desviaciones robustas (MAD): se borra el valor.
  atipicos(t, p) {
    const out = copia(t);
    let k = 0,
      saltadas = 0;
    for (const c of elegir(out, p.cols)) {
      const r = resumen(c.v),
        lim = (p.k || 6) * 1.4826 * r.mad;
      if (!(lim > 0)) continue;
      let marcados = 0;
      for (let i = 0; i < out.n; i++) if (Math.abs(c.v[i] - r.mediana) > lim) marcados++;
      // si la regla marcaría más del 2 % de la columna, no son atípicos: es otra forma de operar, y no se toca
      if (marcados > r.n * 0.02) {
        if (marcados) saltadas++;
        continue;
      }
      for (let i = 0; i < out.n; i++) if (Math.abs(c.v[i] - r.mediana) > lim) (c.v[i] = NaN), k++;
    }
    return {tabla: out, nota: `${num(k)} valores atípicos borrados${saltadas ? `; ${saltadas} ${saltadas === 1 ? 'columna no se tocó' : 'columnas no se tocaron'} porque tiene más de un modo de operar` : ''}`};
  },
  // Tramos donde el valor no cambia durante `filas` registros o más: sensor congelado. Se conserva el primero.
  pegados(t, p) {
    const out = copia(t);
    let k = 0;
    for (const c of elegir(out, p.cols)) {
      let i = 0;
      while (i < out.n) {
        let j = i;
        while (j + 1 < out.n && c.v[j + 1] === c.v[i]) j++;
        if (j - i + 1 >= p.filas && !isNaN(c.v[i])) for (let m = i + 1; m <= j; m++) (c.v[m] = NaN), k++;
        i = j + 1;
      }
    }
    return {tabla: out, nota: `${num(k)} valores pegados borrados`};
  },
  // Lleva todo a un paso fijo (por ejemplo 1 h) con el promedio de cada tramo. Los tramos sin datos quedan vacíos.
  remuestrear(t, p) {
    const it = iTiempo(t);
    if (it < 0) throw new Error('No hay columna de tiempo para remuestrear.');
    const paso = aDuracion(p.cada);
    if (!(paso > 0)) throw new Error(`No entiendo el paso «${p.cada}». Usa, por ejemplo, 10 min, 1 h o 1 d.`);
    const tv = t.cols[it].v;
    let min = Infinity,
      max = -Infinity;
    for (let i = 0; i < t.n; i++) if (!isNaN(tv[i])) (min = Math.min(min, tv[i])), (max = Math.max(max, tv[i]));
    const t0 = Math.floor(min / paso) * paso;
    const n = Math.floor((max - t0) / paso) + 1;
    if (n > 5e6) throw new Error('Ese paso deja demasiadas filas. Elige uno más grande.');
    const cols = t.cols
      .filter((c) => c.tipo !== 'texto')
      .map((c) => {
        if (c.tipo === 'tiempo') return {...c, v: Float64Array.from({length: n}, (_, i) => t0 + i * paso)};
        const s = new Float64Array(n),
          k = new Uint32Array(n);
        for (let i = 0; i < t.n; i++) {
          const x = c.v[i];
          if (isNaN(x) || isNaN(tv[i])) continue;
          const b = Math.floor((tv[i] - t0) / paso);
          s[b] += x;
          k[b]++;
        }
        const v = new Float64Array(n);
        for (let b = 0; b < n; b++) v[b] = k[b] ? s[b] / k[b] : NaN;
        return {...c, v};
      });
    return {tabla: {n, cols, formato: t.formato}, nota: `${num(t.n)} filas → ${num(n)} filas de ${p.cada}`};
  },
  // Rellena huecos cortos (hasta `max` filas seguidas) entre dos datos buenos. Los huecos largos quedan vacíos.
  rellenar(t, p) {
    const out = copia(t);
    let k = 0;
    const max = p.max || 3;
    for (const c of elegir(out, p.cols)) {
      let i = 0;
      while (i < out.n) {
        if (!isNaN(c.v[i])) {
          i++;
          continue;
        }
        let j = i;
        while (j < out.n && isNaN(c.v[j])) j++;
        if (i > 0 && j < out.n && j - i <= max) {
          const a = c.v[i - 1],
            b = c.v[j];
          for (let m = i; m < j; m++) (c.v[m] = p.como === 'anterior' ? a : a + ((b - a) * (m - i + 1)) / (j - i + 1)), k++;
        }
        i = j;
      }
    }
    return {tabla: out, nota: `${num(k)} huecos cortos rellenados`};
  },
};

export const NOMBRE_OP = {
  tiempo: (p) => `Usar «${p.col}» como tiempo${p.repetidas === 'repartir' ? ' y repartir las filas que comparten marca' : ''}`,
  ordenar: () => 'Ordenar por fecha',
  quitar_columnas: (p) => `Quitar ${p.cols.map((c) => `«${c}»`).join(', ')}`,
  quitar_filas: (p) => `Quitar las filas sin «${p.sin}»`,
  rango: (p) => `Borrar «${p.col}» fuera de ${p.min ?? '−∞'} a ${p.max ?? '∞'}`,
  atipicos: (p) => `Borrar valores atípicos de ${p.cols === 'todas' || !p.cols ? 'todas las columnas' : p.cols.map((c) => `«${c}»`).join(', ')}`,
  pegados: (p) => `Borrar tramos pegados (${p.filas} filas o más) de ${p.cols === 'todas' || !p.cols ? 'todas las columnas' : p.cols.map((c) => `«${c}»`).join(', ')}`,
  remuestrear: (p) => `Promediar cada ${p.cada}`,
  rellenar: (p) => `Rellenar huecos de hasta ${p.max || 3} filas`,
};

// Aplica la receta en orden. Un paso que no se puede aplicar no detiene los demás: queda anotado.
export const aplicar = (tabla, receta) => {
  let t = tabla;
  const bitacora = [];
  for (const paso of receta) {
    if (paso.off) {
      bitacora.push({paso, nota: 'desactivado', filas: t.n});
      continue;
    }
    try {
      const f = OPS[paso.op];
      if (!f) throw new Error(`No conozco el paso «${paso.op}».`);
      const r = f(t, paso);
      t = r.tabla;
      bitacora.push({paso, nota: r.nota, filas: t.n});
    } catch (e) {
      bitacora.push({paso, error: e.message, filas: t.n});
    }
  }
  return {tabla: t, bitacora};
};

// ---------- relación con la variable a estimar ----------
// Momentos en que una columna cambia de valor: sirve para ver qué columnas salen del mismo análisis de laboratorio.
const cambiaEn = (v) => {
  const s = new Set();
  let prev = NaN;
  for (let i = 0; i < v.length; i++) {
    if (isNaN(v[i])) continue;
    if (!isNaN(prev) && v[i] !== prev) s.add(i);
    prev = v[i];
  }
  return s;
};
export const relaciones = (tabla, objetivo) => {
  const y = tabla.cols.find((c) => c.nombre === objetivo);
  if (!y) throw new Error(`No está la columna «${objetivo}».`);
  return tabla.cols
    .filter((c) => c.tipo === 'num' && c.nombre !== objetivo)
    .map((c) => ({nombre: c.nombre, ...pearson(c.v, y.v)}))
    .sort((a, b) => Math.abs(b.r || 0) - Math.abs(a.r || 0));
};
// Columnas que cambian en los mismos momentos que el objetivo: salen del mismo análisis de laboratorio, así que
// no se conocen antes que él y usarlas como entrada sería hacer trampa. Solo se puede saber con los datos crudos,
// cuando el objetivo se mantiene varias filas entre un análisis y otro.
export const delMismoAnalisis = (tabla, objetivo) => {
  const y = tabla.cols.find((c) => c.nombre === objetivo);
  if (!y || y.tipo !== 'num') return [];
  const cy = cambiaEn(y.v);
  if (cy.size < 6 || cy.size > tabla.n * 0.5) return [];
  return tabla.cols
    .filter((c) => c.tipo === 'num' && c.nombre !== objetivo)
    .filter((c) => {
      const cc = cambiaEn(c.v);
      let juntos = 0;
      for (const i of cc) if (cy.has(i)) juntos++;
      return juntos / (cc.size + cy.size - juntos) > 0.6;
    })
    .map((c) => c.nombre);
};

// ---------- modelo: regresión ridge con validación por fecha ----------
// Resuelve A x = b con A simétrica definida positiva (Cholesky).
const resolver = (A, b) => {
  const n = b.length;
  const L = A.map((f) => f.slice());
  for (let j = 0; j < n; j++) {
    let s = L[j][j];
    for (let k = 0; k < j; k++) s -= L[j][k] * L[j][k];
    if (!(s > 0)) throw new Error('Las entradas están repetidas o no varían: no se puede ajustar.');
    L[j][j] = Math.sqrt(s);
    for (let i = j + 1; i < n; i++) {
      let t = L[i][j];
      for (let k = 0; k < j; k++) t -= L[i][k] * L[j][k];
      L[i][j] = t / L[j][j];
    }
  }
  const y = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    let s = b[i];
    for (let k = 0; k < i; k++) s -= L[i][k] * y[k];
    y[i] = s / L[i][i];
  }
  const x = new Float64Array(n);
  for (let i = n - 1; i >= 0; i--) {
    let s = y[i];
    for (let k = i + 1; k < n; k++) s -= L[k][i] * x[k];
    x[i] = s / L[i][i];
  }
  return x;
};
export const metricas = (real, est) => {
  let n = 0,
    sa = 0,
    se = 0,
    sy = 0;
  for (let i = 0; i < real.length; i++) {
    if (isNaN(real[i]) || isNaN(est[i])) continue;
    n++;
    sa += Math.abs(real[i] - est[i]);
    se += (real[i] - est[i]) ** 2;
    sy += real[i];
  }
  const m = sy / n;
  let st = 0;
  for (let i = 0; i < real.length; i++) if (!isNaN(real[i]) && !isNaN(est[i])) st += (real[i] - m) ** 2;
  return {n, mae: sa / n, rmse: Math.sqrt(se / n), r2: st > 0 ? 1 - se / st : NaN};
};

// Arma las entradas del modelo. `ultimo` agrega el último valor conocido del objetivo, con el retraso con que llega
// el laboratorio (en filas): es lo que de verdad se sabe en ese momento.
const armar = (tabla, cfg) => {
  const y = tabla.cols.find((c) => c.nombre === cfg.objetivo);
  if (!y) throw new Error(`No está la columna «${cfg.objetivo}».`);
  const X = cfg.entradas.map((nombre) => {
    const c = tabla.cols.find((x) => x.nombre === nombre);
    if (!c) throw new Error(`Falta la columna «${nombre}».`);
    return c.v;
  });
  const nombres = [...cfg.entradas];
  let ultimo = null;
  if (cfg.retraso > 0) {
    ultimo = new Float64Array(tabla.n).fill(NaN);
    // Si el laboratorio no viene en todas las filas (un análisis cada varias horas), se usa el último análisis que
    // ya se conocía en ese momento, sin ir más atrás que el espacio habitual entre un análisis y el siguiente.
    const separaciones = [];
    let ant = -1;
    for (let i = 0; i < tabla.n; i++)
      if (!isNaN(y.v[i])) {
        if (ant >= 0) separaciones.push(i - ant);
        ant = i;
      }
    separaciones.sort((a, b) => a - b);
    const espacio = separaciones.length ? separaciones[separaciones.length >> 1] : 1;
    for (let i = cfg.retraso; i < tabla.n; i++)
      for (let k = i - cfg.retraso; k >= 0 && k > i - cfg.retraso - espacio; k--)
        if (!isNaN(y.v[k])) {
          ultimo[i] = y.v[k];
          break;
        }
    if (cfg.usarUltimo) {
      X.push(ultimo);
      nombres.push(`${cfg.objetivo} (hace ${cfg.retraso} ${cfg.retraso === 1 ? 'fila' : 'filas'})`);
    }
  }
  return {y: y.v, X, nombres, ultimo};
};
const ajustarRidge = (X, y, filas, lambda) => {
  const p = X.length;
  const mu = new Float64Array(p),
    sd = new Float64Array(p);
  for (let j = 0; j < p; j++) {
    let s = 0;
    for (const i of filas) s += X[j][i];
    mu[j] = s / filas.length;
    let s2 = 0;
    for (const i of filas) s2 += (X[j][i] - mu[j]) ** 2;
    sd[j] = Math.sqrt(s2 / filas.length) || 1;
  }
  let my = 0;
  for (const i of filas) my += y[i];
  my /= filas.length;
  const A = Array.from({length: p}, () => new Float64Array(p)),
    b = new Float64Array(p);
  const z = new Float64Array(p);
  for (const i of filas) {
    for (let j = 0; j < p; j++) z[j] = (X[j][i] - mu[j]) / sd[j];
    const yc = y[i] - my;
    for (let j = 0; j < p; j++) {
      b[j] += z[j] * yc;
      for (let k = 0; k <= j; k++) A[j][k] += z[j] * z[k];
    }
  }
  for (let j = 0; j < p; j++) {
    for (let k = 0; k < j; k++) A[k][j] = A[j][k];
    A[j][j] += lambda;
  }
  return {mu, sd, b0: my, beta: resolver(A, b), lambda};
};
export const predecir = (m, X, n) => {
  const out = new Float64Array(n).fill(NaN);
  for (let i = 0; i < n; i++) {
    let s = m.b0,
      ok = true;
    for (let j = 0; j < X.length; j++) {
      const x = X[j][i];
      if (isNaN(x)) {
        ok = false;
        break;
      }
      s += (m.beta[j] * (x - m.mu[j])) / m.sd[j];
    }
    if (ok) out[i] = s;
  }
  return out;
};

// Entrena con la primera parte del período y prueba con la última: como se usaría de verdad.
export const entrenar = (tabla, cfg) => {
  const {y, X, nombres, ultimo} = armar(tabla, cfg);
  const completas = [];
  for (let i = 0; i < tabla.n; i++) if (!isNaN(y[i]) && X.every((x) => !isNaN(x[i]))) completas.push(i);
  if (completas.length < 60)
    throw new Error(`Quedan ${completas.length} filas con el dato a estimar y todas las entradas. Hacen falta al menos 60 para entrenar y probar: saca las entradas con muchos datos faltantes o promedia a un paso más largo.`);
  if (!X.length) throw new Error('Elige al menos una entrada.');
  const corte = Math.floor(completas.length * (cfg.corte ?? 0.7));
  const ent = completas.slice(0, corte),
    pru = completas.slice(corte);
  // la fuerza del ajuste se elige dentro del entrenamiento, también por fecha (último 25 %)
  const c2 = Math.floor(ent.length * 0.75);
  let mejor = null;
  for (const l of [0.01, 0.1, 1, 10, 100, 1000].map((x) => (x * c2) / 100)) {
    const m = ajustarRidge(X, y, ent.slice(0, c2), l);
    const e = predecir(m, X, tabla.n);
    let se = 0;
    for (const i of ent.slice(c2)) se += (y[i] - e[i]) ** 2;
    if (!mejor || se < mejor.se) mejor = {se, l: (l * ent.length) / c2};
  }
  const m = ajustarRidge(X, y, ent, mejor.l);
  const est = predecir(m, X, tabla.n);
  const sub = (v, idx) => Float64Array.from(idx, (i) => v[i]);
  const yPru = sub(y, pru);
  let media = 0;
  for (const i of ent) media += y[i];
  media /= ent.length;
  const it = iTiempo(tabla);
  const tv = it >= 0 ? tabla.cols[it].v : null;
  const rangos = X.map((x) => {
    const r = resumen(sub(x, ent));
    return {min: r.p01, max: r.p99, media: r.media, desv: r.desv};
  });
  const res = {
    objetivo: cfg.objetivo,
    entradas: cfg.entradas,
    nombres,
    retraso: cfg.retraso || 0,
    usarUltimo: !!cfg.usarUltimo,
    mu: Array.from(m.mu),
    sd: Array.from(m.sd),
    beta: Array.from(m.beta),
    b0: m.b0,
    lambda: m.lambda,
    rangos,
    entrenamiento: {n: ent.length, desde: tv ? tv[ent[0]] : null, hasta: tv ? tv[ent.at(-1)] : null},
    prueba: {n: pru.length, desde: tv ? tv[pru[0]] : null, hasta: tv ? tv[pru.at(-1)] : null},
    metricas: {
      modelo: metricas(yPru, sub(est, pru)),
      promedio: metricas(yPru, new Float64Array(pru.length).fill(media)),
      ultimo: ultimo ? metricas(yPru, sub(ultimo, pru)) : null,
    },
    // peso de cada entrada: cuánto mueve la estimación un cambio típico de esa variable
    pesos: nombres.map((nombre, j) => ({nombre, peso: m.beta[j]})).sort((a, b) => Math.abs(b.peso) - Math.abs(a.peso)),
  };
  return {modelo: res, serie: {filas: pru, t: tv ? sub(tv, pru) : null, real: yPru, est: sub(est, pru), ultimo: ultimo ? sub(ultimo, pru) : null}};
};

// ---------- vigilancia: el mismo modelo sobre datos nuevos ----------
export const vigilar = (modelo, tabla) => {
  const faltan = [modelo.objetivo, ...modelo.entradas].filter((n) => !tabla.cols.some((c) => c.nombre === n && c.tipo === 'num'));
  const sinEntradas = faltan.filter((n) => n !== modelo.objetivo);
  if (sinEntradas.length) return {ok: false, faltan: sinEntradas};
  const hayObjetivo = !faltan.includes(modelo.objetivo);
  const cfg = {objetivo: modelo.objetivo, entradas: modelo.entradas, retraso: modelo.retraso, usarUltimo: modelo.usarUltimo};
  let y, X, ultimo;
  if (hayObjetivo) ({y, X, ultimo} = armar(tabla, cfg));
  else {
    if (modelo.usarUltimo) return {ok: false, faltan: [modelo.objetivo]};
    X = modelo.entradas.map((n) => tabla.cols.find((c) => c.nombre === n).v);
  }
  const m = {mu: modelo.mu, sd: modelo.sd, beta: modelo.beta, b0: modelo.b0};
  const est = predecir(m, X, tabla.n);
  // deriva: cuánto se movió cada entrada respecto del entrenamiento, en desviaciones, y cuánto cae fuera de su rango
  const deriva = modelo.nombres.map((nombre, j) => {
    const r = resumen(X[j]);
    let fuera = 0,
      n = 0;
    for (let i = 0; i < tabla.n; i++) {
      const x = X[j][i];
      if (isNaN(x)) continue;
      n++;
      if (x < modelo.rangos[j].min || x > modelo.rangos[j].max) fuera++;
    }
    const mov = (r.media - modelo.rangos[j].media) / (modelo.rangos[j].desv || 1);
    return {nombre, antes: modelo.rangos[j].media, ahora: r.media, mov, fuera: n ? fuera / n : NaN, alerta: Math.abs(mov) > 1 || fuera / n > 0.2};
  });
  let estimadas = 0;
  for (let i = 0; i < tabla.n; i++) if (!isNaN(est[i])) estimadas++;
  const it = iTiempo(tabla);
  return {
    ok: true,
    filas: tabla.n,
    estimadas,
    deriva,
    metricas: hayObjetivo ? {modelo: metricas(y, est), ultimo: ultimo ? metricas(y, ultimo) : null} : null,
    serie: {t: it >= 0 ? tabla.cols[it].v : null, real: hayObjetivo ? y : null, est},
  };
};

// ---------- salida ----------
export const aCSV = (tabla, sep = ';') => {
  const coma = sep === ';';
  const f = (x) => (isNaN(x) ? '' : coma ? String(x).replace('.', ',') : String(x));
  const iso = (ms) => (isNaN(ms) ? '' : new Date(ms).toISOString().slice(0, 19).replace('T', ' '));
  const q = (s) => (/[";\n,]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);
  const L = [tabla.cols.map((c) => q(c.nombre)).join(sep)];
  for (let i = 0; i < tabla.n; i++) L.push(tabla.cols.map((c) => (c.tipo === 'tiempo' ? iso(c.v[i]) : c.tipo === 'num' ? f(c.v[i]) : q(c.v[i] ?? ''))).join(sep));
  return L.join('\n') + '\n';
};
