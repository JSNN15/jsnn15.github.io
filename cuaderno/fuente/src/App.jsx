import {useEffect, useMemo, useRef, useState} from 'react';
import * as N from './nucleo.js';
import Grafico from './Grafico.jsx';
import logoOscuro from './logo-oscuro.png';
import logoClaro from './logo-claro.png';

const {num, pct, fecha, duracion} = N;
// El asistente es opcional y pasa por el intermediario del portafolio (nv.js agrega la sesión).
const NV = ['localhost', '127.0.0.1'].includes(location.hostname) ? 'http://localhost:8787' : 'https://nv-portafolio.jneiranova.workers.dev';
const temaActual = () => document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
const bajar = (nombre, texto, tipo = 'text/plain') => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([texto], {type: tipo + ';charset=utf-8'}));
  a.download = nombre;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};
// Lee un archivo del equipo. Nada se envía: el texto se procesa en esta misma página.
const abrir = async (archivo) => {
  if (/\.(xlsx|xlsm|xls)$/i.test(archivo.name)) {
    const XLSX = await import('xlsx');
    const libro = XLSX.read(await archivo.arrayBuffer(), {cellDates: true});
    const filas = XLSX.utils.sheet_to_json(libro.Sheets[libro.SheetNames[0]], {header: 1, raw: true, defval: null});
    // las fechas de la planilla son hora local de planta: se guardan tal cual, sin zona
    for (const f of filas) for (let i = 0; i < f.length; i++) if (f[i] instanceof Date) f[i] = new Date(Date.UTC(f[i].getFullYear(), f[i].getMonth(), f[i].getDate(), f[i].getHours(), f[i].getMinutes(), f[i].getSeconds()));
    return {...N.deFilas(filas.filter((f) => f.some((x) => x != null && x !== ''))), hoja: libro.SheetNames[0]};
  }
  return N.leerCSV(await archivo.text());
};

function Celda({n, titulo, ayuda, children}) {
  return (
    <section className="celda">
      <div className="ancho">
        <div className="rotulo">
          <i>{n}</i>
          <h2>{titulo}</h2>
          {ayuda && <p>{ayuda}</p>}
        </div>
        <div className="cuerpo">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  const [tema, setTema] = useState('dark');
  const [crudo, setCrudo] = useState(null);
  const [archivo, setArchivo] = useState('');
  const [esEjemplo, setEsEjemplo] = useState(false);
  const [ocupado, setOcupado] = useState('');
  const [error, setError] = useState('');
  const [receta, setReceta] = useState([]);
  const [cada, setCada] = useState('1 h');
  const [verA, setVerA] = useState('');
  const [verB, setVerB] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [fuera, setFuera] = useState(new Set());
  const [retraso, setRetraso] = useState(2);
  const [usarUltimo, setUsarUltimo] = useState(true);
  const [ajuste, setAjuste] = useState(null);
  const [errModelo, setErrModelo] = useState('');
  const [vig, setVig] = useState(null);
  const [sobre, setSobre] = useState(false);
  const [pedido, setPedido] = useState('');
  const [prop, setProp] = useState(null);
  const [pensando, setPensando] = useState(false);
  const pideArchivo = useRef(null);
  const pideNuevo = useRef(null);
  const pideReceta = useRef(null);

  useEffect(() => {
    let g = null;
    try {
      g = localStorage.getItem('tema');
    } catch {}
    if (g === 'dark' || g === 'light') document.documentElement.dataset.theme = g;
    setTema(temaActual());
  }, []);
  const cambiarTema = () => {
    const s = tema === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = s;
    setTema(s);
    try {
      localStorage.setItem('tema', s);
    } catch {}
  };

  const cargar = (tabla, nombre, ejemplo) => {
    setCrudo(tabla);
    setArchivo(nombre);
    setEsEjemplo(ejemplo);
    setReceta([]);
    setAjuste(null);
    setVig(null);
    setErrModelo('');
    setFuera(new Set());
    const nums = tabla.cols.filter((c) => c.tipo === 'num').map((c) => c.nombre);
    setVerA(nums.at(-1) || '');
    setVerB('');
    setObjetivo(nums.at(-1) || '');
  };
  const conArchivo = async (f) => {
    if (!f) return;
    setError('');
    setOcupado(`Leyendo ${f.name}`);
    try {
      const t = await abrir(f);
      if (!t.n || t.cols.length < 2) throw new Error('No encontré una tabla con encabezado y datos en ese archivo.');
      cargar(t, f.name, false);
    } catch (e) {
      setError(`No pude leer el archivo: ${e.message}`);
    }
    setOcupado('');
  };
  const traer = async (url) => N.leerCSV(await (await fetch(url)).text());
  const ejemplo = async (completo) => {
    setError('');
    setOcupado('Cargando el ejemplo (5 MB)');
    try {
      const t = await traer('../flotacion.csv');
      cargar(t, 'flotacion.csv', true);
      if (completo) {
        const r = [
          {op: 'tiempo', col: 'date', repetidas: 'repartir'},
          {op: 'remuestrear', cada: '1 h'},
        ];
        setReceta(r);
        const y = '% Silica Concentrate';
        setObjetivo(y);
        setVerA(y);
        setVerB('Amina Flow');
        const limpia = N.aplicar(t, r).tabla;
        const mismos = N.delMismoAnalisis(t, y);
        setFuera(new Set(mismos));
        const entradas = limpia.cols.filter((c) => c.tipo === 'num' && c.nombre !== y && !mismos.includes(c.nombre)).map((c) => c.nombre);
        setAjuste(N.entrenar(limpia, {objetivo: y, entradas, retraso: 2, usarUltimo: true}));
      }
    } catch (e) {
      setError(`No pude cargar el ejemplo: ${e.message}`);
    }
    setOcupado('');
  };

  const P = useMemo(() => crudo && N.perfil(crudo), [crudo]);
  const H = useMemo(() => (P ? N.hallazgos(P) : []), [P]);
  const hecho = useMemo(() => (crudo ? N.aplicar(crudo, receta) : null), [crudo, receta]);
  const limpia = hecho && hecho.tabla;
  const PL = useMemo(() => limpia && N.perfil(limpia), [limpia]);
  const nums = limpia ? limpia.cols.filter((c) => c.tipo === 'num').map((c) => c.nombre) : [];
  const tLimpia = limpia && limpia.cols.find((c) => c.tipo === 'tiempo');
  const col = (n) => limpia && limpia.cols.find((c) => c.nombre === n);
  const mismos = useMemo(() => (crudo && objetivo ? N.delMismoAnalisis(crudo, objetivo) : []), [crudo, objetivo]);
  const rel = useMemo(() => {
    try {
      return limpia && objetivo && col(objetivo) ? N.relaciones(limpia, objetivo) : [];
    } catch {
      return [];
    }
  }, [limpia, objetivo]);
  const yaEsta = (p) => receta.some((r) => JSON.stringify({...r, off: undefined}) === JSON.stringify(p));
  const agregar = (p) => {
    setReceta((r) => [...r, p]);
    setAjuste(null);
    setVig(null);
  };
  const entradas = nums.filter((n) => n !== objetivo && !fuera.has(n));
  const paso = PL && PL.tiempo ? PL.tiempo.paso : NaN;

  const entrenar = () => {
    setErrModelo('');
    setVig(null);
    try {
      setAjuste(N.entrenar(limpia, {objetivo, entradas, retraso: Math.max(0, Math.round(retraso)), usarUltimo: usarUltimo && retraso > 0}));
    } catch (e) {
      setAjuste(null);
      setErrModelo(e.message);
    }
  };
  const vigilarCon = async (dame, nombre) => {
    setError('');
    setOcupado(`Aplicando la receta y el modelo a ${nombre}`);
    try {
      const nueva = N.aplicar(await dame(), receta);
      const malos = nueva.bitacora.filter((b) => b.error);
      setVig({nombre, malos, ...N.vigilar(ajuste.modelo, nueva.tabla)});
    } catch (e) {
      setError(`No pude revisar los datos nuevos: ${e.message}`);
    }
    setOcupado('');
  };

  // Lo que propone el asistente se valida contra las columnas reales: un paso con una columna que no existe o con
  // un parámetro sin sentido se descarta y se dice. Nada se aplica sin que la persona lo acepte.
  const validar = (r) => {
    const hay = (n) => limpia.cols.find((c) => c.nombre === n);
    const numsDe = (xs) => (xs || []).filter((n) => hay(n) && hay(n).tipo === 'num');
    const pasos = [],
      malos = [];
    for (const x of Array.isArray(r.pasos) ? r.pasos : []) {
      const todas = (x.cols || []).includes('todas');
      const numero = (t) => (t === '' || t == null ? undefined : Number(String(t).replace(',', '.')));
      let p = null,
        por = '';
      if (x.op === 'tiempo') hay(x.col) && hay(x.col).tipo === 'tiempo' ? (p = {op: 'tiempo', col: x.col, ...((x.cols || []).includes('repartir') ? {repetidas: 'repartir'} : {})}) : (por = `«${x.col}» no es una columna de fecha`);
      else if (x.op === 'ordenar') p = {op: 'ordenar'};
      else if (x.op === 'quitar_columnas') (x.cols || []).filter(hay).length ? (p = {op: 'quitar_columnas', cols: x.cols.filter(hay)}) : (por = 'no nombró columnas que existan');
      else if (x.op === 'quitar_filas') hay(x.col) ? (p = {op: 'quitar_filas', sin: x.col}) : (por = `no existe «${x.col}»`);
      else if (x.op === 'rango') {
        const min = numero(x.min),
          max = numero(x.max);
        hay(x.col) && hay(x.col).tipo === 'num' && [min, max].some((v) => v !== undefined) && ![min, max].some((v) => v !== undefined && isNaN(v))
          ? (p = {op: 'rango', col: x.col, ...(min !== undefined ? {min} : {}), ...(max !== undefined ? {max} : {})})
          : (por = 'el rango no tiene columna o límites válidos');
      } else if (x.op === 'atipicos') todas || numsDe(x.cols).length ? (p = {op: 'atipicos', cols: todas ? 'todas' : numsDe(x.cols), k: 6}) : (por = 'no nombró columnas que existan');
      else if (x.op === 'pegados') numsDe(x.cols).length ? (p = {op: 'pegados', cols: numsDe(x.cols), filas: Math.max(5, Math.round(x.filas) || 30)}) : (por = 'hay que nombrar las columnas: no se aplica a todas porque borraría los datos de laboratorio');
      else if (x.op === 'remuestrear') N.aDuracion(x.cada) > 0 ? (p = {op: 'remuestrear', cada: x.cada.trim()}) : (por = `no entiendo el paso «${x.cada}»`);
      else if (x.op === 'rellenar') todas || numsDe(x.cols).length ? (p = {op: 'rellenar', cols: todas ? 'todas' : numsDe(x.cols), max: Math.min(50, Math.max(1, Math.round(x.filas) || 3))}) : (por = 'no nombró columnas que existan');
      else por = `no conozco el paso «${x.op}»`;
      if (p && yaEsta(p)) por = 'ya está en la receta';
      if (p && !por) pasos.push(p);
      else malos.push(por);
    }
    const objetivoNuevo = hay(r.objetivo) && hay(r.objetivo).tipo === 'num' && r.objetivo !== objetivo ? r.objetivo : '';
    return {pasos, malos, explica: String(r.explica || ''), noPuedo: String(r.no_puedo || ''), objetivo: objetivoNuevo, retraso: Number.isInteger(r.retraso) && r.retraso >= 0 && r.retraso <= 500 ? r.retraso : -1};
  };
  const pedir = async () => {
    if (pedido.trim().length < 3 || pensando) return;
    setPensando(true);
    setProp(null);
    try {
      const r = await fetch(NV + '/cuaderno', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({
          pedido,
          filas: num(limpia.n),
          tiempo: PL.tiempo ? `columna «${PL.colTiempo}», una marca cada ${duracion(PL.tiempo.paso)}${PL.tiempo.porMarca > 1 ? `, cada marca repetida en ${PL.tiempo.porMarca} filas` : ''}` : '',
          columnas: PL.cols.map((c) => ({nombre: c.nombre, tipo: c.tipo, faltan: c.tipo === 'num' ? pct(c.faltan / PL.n) : '', min: num(c.min), max: num(c.max), habitual: `${num(c.p01)} a ${num(c.p99)}`, cambia: String(c.racha || 1)})),
          avisos: N.hallazgos(PL).map((h) => h.texto),
          receta: hecho.bitacora.map((b) => (N.NOMBRE_OP[b.paso.op] || (() => b.paso.op))(b.paso)),
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || !d.ok) throw new Error(d.error || 'el asistente no respondió');
      setProp(validar(d.result));
    } catch (e) {
      setProp({error: e.name === 'TimeoutError' ? 'El asistente tardó demasiado. Es una demo con una API gratuita compartida: intenta de nuevo.' : /Failed to fetch|NetworkError/.test(e.message) ? 'No pude conectar con el asistente.' : e.message});
    }
    setPensando(false);
  };

  const M = ajuste && ajuste.modelo;
  const veredicto = (() => {
    if (!M) return null;
    const base = M.metricas.ultimo || M.metricas.promedio;
    const contra = M.metricas.ultimo ? 'usar el último laboratorio conocido' : 'usar el promedio';
    const mejora = 1 - M.metricas.modelo.mae / base.mae;
    const grandes = 1 - M.metricas.modelo.rmse / base.rmse;
    // el error medio dice cuánto se equivoca en lo habitual; el RMSE castiga los errores grandes. Si no coinciden, se dice.
    if (mejora < -0.02 && grandes >= 0.05)
      return {bien: false, t: `Resultado mixto frente a ${contra}: el modelo evita mejor los errores grandes (RMSE ${num(M.metricas.modelo.rmse, 3)} contra ${num(base.rmse, 3)}), pero en lo habitual se equivoca ${pct(-mejora, 0)} más (error medio ${num(M.metricas.modelo.mae, 3)} contra ${num(base.mae, 3)}). No es una mejora clara.`};
    if (mejora >= 0.05) return {bien: true, t: `El modelo le gana a ${contra}: se equivoca ${pct(mejora, 0)} menos (error medio ${num(M.metricas.modelo.mae, 3)} contra ${num(base.mae, 3)}).`};
    if (mejora > -0.05) return {bien: false, t: `El modelo empata con ${contra} (error medio ${num(M.metricas.modelo.mae, 3)} contra ${num(base.mae, 3)}). Con estos datos todavía no aporta.`};
    return {bien: false, t: `El modelo no le gana a ${contra}: se equivoca ${pct(-mejora, 0)} más (error medio ${num(M.metricas.modelo.mae, 3)} contra ${num(base.mae, 3)}). Con estos datos no conviene usarlo.`};
  })();
  const maxPeso = M ? Math.max(...M.pesos.map((p) => Math.abs(p.peso))) || 1 : 1;
  const seriesExplorar = useMemo(() => [verA, verB].filter((n) => n && col(n)).map((n) => ({nombre: n, v: col(n).v})), [limpia, verA, verB]);
  const seriesModelo = useMemo(
    () =>
      ajuste
        ? [
            {nombre: 'Real', v: ajuste.serie.real},
            {nombre: 'Estimado', v: ajuste.serie.est},
          ]
        : [],
    [ajuste]
  );
  const seriesVig = useMemo(() => (vig && vig.ok ? [...(vig.serie.real ? [{nombre: 'Real', v: vig.serie.real}] : []), {nombre: 'Estimado', v: vig.serie.est}] : []), [vig]);

  return (
    <div className="app">
      <header className="top">
        <a className="marca" href="../../" aria-label="Volver al portafolio">
          <img src={tema === 'dark' ? logoOscuro : logoClaro} alt="DelaCruz" width="36" height="36" />
          <span>
            Julián Neira Nova<small>Cuaderno de planta · tu planilla</small>
          </span>
        </a>
        <nav aria-label="Principal">
          <a href="../">Cuaderno de la planta virtual</a>
          <a href="../../">Portafolio</a>
          <a href="https://github.com/JSNN15/jsnn15.github.io/tree/main/cuaderno/fuente" target="_blank" rel="noopener">
            Código
          </a>
          <button type="button" className="tema" onClick={cambiarTema} aria-label={tema === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
            {tema === 'dark' ? 'Claro' : 'Oscuro'}
          </button>
        </nav>
      </header>

      <main>
        <section className="portada">
          <div className="ancho">
            <p className="eyebrow">Datos de proceso · sin licencias · el archivo no sale de tu equipo</p>
            <h1>De la planilla al modelo</h1>
            <p className="bajada">
              Abre el archivo que exporta la planta y este cuaderno revisa la calidad de los datos, los limpia con una receta que se puede repetir y prueba si un modelo
              sirve de verdad. <b>Todo corre en tu navegador: el archivo no sale de tu equipo.</b>
            </p>
            <div className="acciones">
              <button type="button" className="cta" disabled={!!ocupado} onClick={() => pideArchivo.current.click()}>
                Abrir mi archivo
              </button>
              <button type="button" className="sec" disabled={!!ocupado} onClick={() => ejemplo(true)}>
                Recorrer el ejemplo completo
              </button>
              <button type="button" className="sec" disabled={!!ocupado} onClick={() => ejemplo(false)}>
                Cargar solo los datos del ejemplo
              </button>
              <input ref={pideArchivo} type="file" accept=".csv,.txt,.tsv,.xlsx,.xlsm,.xls" hidden onChange={(e) => (conArchivo(e.target.files[0]), (e.target.value = ''))} />
            </div>
            <p className="nota">
              Lee CSV, TXT y Excel, con coma o punto decimal. El ejemplo son datos públicos de una planta de flotación de hierro: 20.118 filas, una cada 10 minutos, de marzo a
              agosto de 2017.
            </p>
            {ocupado && (
              <p className="nota" role="status">
                {ocupado}…
              </p>
            )}
            {error && (
              <p className="nota" role="alert" style={{color: 'var(--acc)'}}>
                {error}
              </p>
            )}
          </div>
        </section>

        {!crudo && (
          <section className="celda">
            <div className="ancho" style={{display: 'block'}}>
              <div
                className={'suelta' + (sobre ? ' sobre' : '')}
                onDragOver={(e) => (e.preventDefault(), setSobre(true))}
                onDragLeave={() => setSobre(false)}
                onDrop={(e) => (e.preventDefault(), setSobre(false), conArchivo(e.dataTransfer.files[0]))}
              >
                Arrastra aquí un archivo de la planta, o parte por el ejemplo.
              </div>
            </div>
          </section>
        )}

        {crudo && (
          <>
            <Celda n="01" titulo="Datos" ayuda="Lo que venía en el archivo, tal como se leyó.">
              <div className="datos">
                <div>
                  <span className="k">Archivo</span>
                  <span className="v">{archivo}</span>
                </div>
                <div>
                  <span className="k">Filas × columnas</span>
                  <span className="v">
                    {num(crudo.n)} × {crudo.cols.length}
                  </span>
                </div>
                {P.tiempo && (
                  <div>
                    <span className="k">Período</span>
                    <span className="v">
                      {fecha(P.tiempo.desde, true)} a {fecha(P.tiempo.hasta, true)}
                    </span>
                  </div>
                )}
                <div>
                  <span className="k">Formato</span>
                  <span className="v">
                    {crudo.formato.hoja ? `Excel, hoja ${crudo.hoja}` : `separador «${crudo.formato.sep === '\t' ? 'tab' : crudo.formato.sep}», ${crudo.formato.coma ? 'coma' : 'punto'} decimal`}
                  </span>
                </div>
              </div>
              <div className="rueda">
                <table>
                  <thead>
                    <tr>
                      <th>Columna</th>
                      <th>Faltan</th>
                      <th>Mínimo a máximo</th>
                      <th>Lo habitual (1 % a 99 %)</th>
                      <th>Cambia cada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {P.cols.map((c) => (
                      <tr key={c.nombre}>
                        <td>{c.nombre}</td>
                        <td>{c.tipo === 'num' ? pct(c.faltan / P.n) : ''}</td>
                        <td>{c.tipo === 'num' ? `${num(c.min)} a ${num(c.max)}` : c.tipo === 'tiempo' && P.tiempo ? `${fecha(P.tiempo.desde)} a ${fecha(P.tiempo.hasta)}` : 'texto'}</td>
                        <td>{c.tipo === 'num' ? `${num(c.p01)} a ${num(c.p99)}` : ''}</td>
                        <td>{c.tipo === 'num' && c.racha ? `${c.racha} ${c.racha === 1 ? 'fila' : 'filas'}` : ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Celda>

            <Celda n="02" titulo="Calidad" ayuda="Lo que conviene resolver antes de sacar conclusiones. Cada arreglo queda anotado en la receta.">
              {H.length === 0 ? (
                <p className="vacio">No encontré problemas evidentes en estos datos.</p>
              ) : (
                <ul className="avisos">
                  {H.map((h, i) => (
                    <li key={i} className={h.nivel}>
                      <span>{h.texto}</span>
                      {h.paso ? (
                        <button type="button" className="sec chica" disabled={yaEsta(h.paso)} onClick={() => agregar(h.paso)}>
                          {yaEsta(h.paso) ? 'En la receta' : h.accion}
                        </button>
                      ) : (
                        <span />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Celda>

            <Celda n="03" titulo="Receta" ayuda="Los pasos de limpieza, en orden. Se guardan en un archivo y se aplican igual al export del mes siguiente.">
              {receta.length === 0 ? (
                <p className="vacio">Todavía no hay pasos: los datos se usan como vienen.</p>
              ) : (
                <ol className="pasos">
                  {hecho.bitacora.map((b, i) => (
                    <li key={i} className={b.error ? 'err' : ''} style={b.paso.off ? {opacity: 0.5} : null}>
                      <span>
                        {(N.NOMBRE_OP[b.paso.op] || (() => b.paso.op))(b.paso)}
                        <small>{b.error ? `No se aplicó: ${b.error}` : `${b.nota} · quedan ${num(b.filas)} filas`}</small>
                      </span>
                      <span className="fila">
                        <button type="button" className="sec chica" onClick={() => (setReceta((r) => r.map((x, k) => (k === i ? {...x, off: !x.off} : x))), setAjuste(null), setVig(null))}>
                          {b.paso.off ? 'Activar' : 'Pausar'}
                        </button>
                        <button type="button" className="sec chica" onClick={() => (setReceta((r) => r.filter((_, k) => k !== i)), setAjuste(null), setVig(null))}>
                          Quitar
                        </button>
                      </span>
                    </li>
                  ))}
                </ol>
              )}
              <div className="asistente">
                <label htmlFor="pedido">O pídelo con tus palabras</label>
                <div className="fila">
                  <input id="pedido" type="text" maxLength={400} value={pedido} onChange={(e) => setPedido(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && pedir()} placeholder="Ej.: promedia cada hora y borra los sensores pegados" />
                  <button type="button" className="sec chica" disabled={pensando || pedido.trim().length < 3} onClick={pedir}>
                    {pensando ? 'Pensando' : 'Proponer pasos'}
                  </button>
                </div>
                <p className="nota" style={{marginTop: 6}}>
                  Opcional. El asistente envía a un modelo de NVIDIA los nombres de las columnas y sus estadísticas, nunca las filas. Propone pasos; tú decides si se aplican. Es una demo con cupo
                  diario.
                </p>
                {prop && prop.error && (
                  <p className="nota" role="alert" style={{color: 'var(--acc)'}}>
                    {prop.error}
                  </p>
                )}
                {prop && !prop.error && (
                  <div className="propuesta">
                    {prop.explica && <p>{prop.explica}</p>}
                    {prop.pasos.length > 0 && (
                      <>
                        <ol className="pasos">
                          {prop.pasos.map((x, i) => (
                            <li key={i}>
                              <span>{(N.NOMBRE_OP[x.op] || (() => x.op))(x)}</span>
                              <span />
                            </li>
                          ))}
                        </ol>
                        <div className="fila">
                          <button type="button" className="cta chica" onClick={() => (setReceta((r) => [...r, ...prop.pasos]), setAjuste(null), setVig(null), setProp({...prop, pasos: [], explica: 'Pasos agregados a la receta.'}))}>
                            Agregar {prop.pasos.length === 1 ? 'este paso' : 'estos pasos'} a la receta
                          </button>
                        </div>
                      </>
                    )}
                    {(prop.objetivo || prop.retraso >= 0) && (
                      <div className="fila">
                        <span className="nota" style={{margin: 0}}>
                          Para el modelo: {prop.objetivo ? `estimar «${prop.objetivo}»` : ''}
                          {prop.objetivo && prop.retraso >= 0 ? ', ' : ''}
                          {prop.retraso >= 0 ? `laboratorio con ${prop.retraso} ${prop.retraso === 1 ? 'fila' : 'filas'} de retraso` : ''}.
                        </span>
                        <button
                          type="button"
                          className="sec chica"
                          onClick={() => {
                            if (prop.objetivo) (setObjetivo(prop.objetivo), setFuera(new Set(N.delMismoAnalisis(crudo, prop.objetivo))));
                            if (prop.retraso >= 0) setRetraso(prop.retraso);
                            setAjuste(null);
                            setVig(null);
                            setProp({...prop, objetivo: '', retraso: -1});
                          }}
                        >
                          Usar en el modelo
                        </button>
                      </div>
                    )}
                    {prop.noPuedo && <p className="nota">{prop.noPuedo}</p>}
                    {prop.malos.length > 0 && <p className="nota">Dejé fuera {prop.malos.length === 1 ? 'un paso' : `${prop.malos.length} pasos`} que no se podía aplicar: {prop.malos.join('; ')}.</p>}
                  </div>
                )}
              </div>
              <div className="fila">
                <label htmlFor="cada">Promediar cada</label>
                <select id="cada" value={cada} onChange={(e) => setCada(e.target.value)}>
                  {['1 min', '10 min', '30 min', '1 h', '2 h', '4 h', '8 h', '12 h', '1 d'].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
                <button type="button" className="sec chica" disabled={!P.tiempo} onClick={() => agregar({op: 'remuestrear', cada})}>
                  Agregar
                </button>
                <button type="button" className="sec chica" onClick={() => agregar({op: 'rellenar', cols: 'todas', max: 3})}>
                  Rellenar huecos cortos
                </button>
                <button type="button" className="sec chica" onClick={() => agregar({op: 'atipicos', cols: 'todas', k: 6})}>
                  Borrar atípicos en todas
                </button>
              </div>
              <div className="fila">
                <button type="button" className="sec chica" onClick={() => bajar(archivo.replace(/\.\w+$/, '') + '_limpio.csv', N.aCSV(limpia), 'text/csv')}>
                  Descargar datos limpios (CSV)
                </button>
                <button type="button" className="sec chica" disabled={!receta.length} onClick={() => bajar('receta.json', JSON.stringify({cuaderno: 'receta', archivo, receta}, null, 2), 'application/json')}>
                  Guardar receta
                </button>
                <button type="button" className="sec chica" onClick={() => pideReceta.current.click()}>
                  Cargar receta
                </button>
                <input
                  ref={pideReceta}
                  type="file"
                  accept=".json"
                  hidden
                  onChange={async (e) => {
                    try {
                      const j = JSON.parse(await e.target.files[0].text());
                      const r = Array.isArray(j) ? j : j.receta;
                      if (!Array.isArray(r) || !r.every((x) => x && N.OPS[x.op])) throw new Error('no es una receta de este cuaderno');
                      setReceta(r);
                      setAjuste(null);
                      setVig(null);
                    } catch (er) {
                      setError(`No pude cargar la receta: ${er.message}`);
                    }
                    e.target.value = '';
                  }}
                />
              </div>
              <p className="nota">
                Quedan {num(limpia.n)} filas y {limpia.cols.length} columnas{paso ? `, una cada ${duracion(paso)}` : ''}.
              </p>
            </Celda>

            <Celda n="04" titulo="Explorar" ayuda="Las variables en el tiempo, ya limpias, y cuánto se mueve cada una junto con la que te interesa.">
              <div className="fila">
                <label htmlFor="verA">Ver</label>
                <select id="verA" value={col(verA) ? verA : ''} onChange={(e) => setVerA(e.target.value)}>
                  {nums.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
                <label htmlFor="verB">junto con</label>
                <select id="verB" value={col(verB) ? verB : ''} onChange={(e) => setVerB(e.target.value)}>
                  <option value="">ninguna</option>
                  {nums.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              {tLimpia ? <Grafico t={tLimpia.v} series={seriesExplorar} tema={tema} dosEjes /> : <p className="vacio">Sin una columna de fecha y hora no se puede graficar en el tiempo.</p>}
              {rel.length > 0 && (
                <>
                  <p className="nota">
                    Correlación de cada variable con «{objetivo}» en el mismo momento. Mide si se mueven juntas, no si una causa la otra.
                  </p>
                  <ul className="barras">
                    {rel.slice(0, 12).map((r) => (
                      <li key={r.nombre}>
                        <span>{r.nombre}</span>
                        <span className="b">
                          <i className={r.r < 0 ? 'neg' : ''} style={r.r < 0 ? {left: `${50 + r.r * 50}%`, width: `${-r.r * 50}%`} : {width: `${(r.r || 0) * 50}%`}} />
                        </span>
                        <span className="n">{num(r.r, 2)}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Celda>

            <Celda n="05" titulo="Modelo" ayuda="Se entrena con la primera parte del período y se prueba con la última, que no vio. Y se compara con lo más simple que podrías hacer.">
              <div className="fila">
                <label htmlFor="obj">Quiero estimar</label>
                <select id="obj" value={col(objetivo) ? objetivo : ''} onChange={(e) => (setObjetivo(e.target.value), setFuera(new Set(N.delMismoAnalisis(crudo, e.target.value))), setAjuste(null), setVig(null))}>
                  {nums.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="fila">
                <label htmlFor="ret">Su valor real se conoce con</label>
                <input id="ret" type="number" min="0" max="500" value={retraso} onChange={(e) => (setRetraso(+e.target.value), setAjuste(null))} />
                <label htmlFor="ret">
                  {retraso === 1 ? 'fila' : 'filas'} de retraso{paso && retraso > 0 ? ` (${duracion(paso * retraso)})` : ''}
                </label>
                <label>
                  <input type="checkbox" checked={usarUltimo && retraso > 0} disabled={!(retraso > 0)} onChange={(e) => (setUsarUltimo(e.target.checked), setAjuste(null))} /> usar ese último valor conocido como
                  entrada
                </label>
              </div>
              <div>
                <p className="nota" style={{marginTop: 0}}>
                  Entradas del modelo ({entradas.length}). Toca una para sacarla o ponerla.
                  {mismos.length > 0 && ` Dejé fuera ${mismos.map((m) => `«${m}»`).join(', ')}: cambia en los mismos momentos que «${objetivo}», así que sale del mismo análisis y no se conoce antes.`}
                </p>
                <div className="fichas">
                  {nums
                    .filter((n) => n !== objetivo)
                    .map((n) => (
                      <button
                        key={n}
                        type="button"
                        className={fuera.has(n) ? 'no' : 'on'}
                        aria-pressed={!fuera.has(n)}
                        onClick={() => {
                          const s = new Set(fuera);
                          s.has(n) ? s.delete(n) : s.add(n);
                          setFuera(s);
                          setAjuste(null);
                        }}
                      >
                        {n}
                      </button>
                    ))}
                </div>
              </div>
              <div className="fila">
                <button type="button" className="cta" disabled={!objetivo || !entradas.length} onClick={entrenar}>
                  Entrenar y probar
                </button>
              </div>
              {errModelo && (
                <p className="nota" role="alert" style={{color: 'var(--acc)'}}>
                  {errModelo}
                </p>
              )}
              {M && (
                <>
                  <p className={'veredicto' + (veredicto.bien ? ' bien' : '')}>{veredicto.t}</p>
                  <div className="rueda">
                    <table>
                      <thead>
                        <tr>
                          <th>En el período de prueba</th>
                          <th>Error medio (MAE)</th>
                          <th>Errores grandes (RMSE)</th>
                          <th>R²</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Modelo', M.metricas.modelo],
                          ...(M.metricas.ultimo ? [[`Último valor conocido (${M.retraso} ${M.retraso === 1 ? 'fila' : 'filas'} antes)`, M.metricas.ultimo]] : []),
                          ['Promedio del entrenamiento', M.metricas.promedio],
                        ].map(([n, m]) => (
                          <tr key={n}>
                            <td>{n}</td>
                            <td>{num(m.mae, 3)}</td>
                            <td>{num(m.rmse, 3)}</td>
                            <td>{num(m.r2, 2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="nota" style={{marginTop: 0}}>
                    Entrenado con {num(M.entrenamiento.n)} filas ({fecha(M.entrenamiento.desde, true)} a {fecha(M.entrenamiento.hasta, true)}) y probado con {num(M.prueba.n)} filas posteriores (
                    {fecha(M.prueba.desde, true)} a {fecha(M.prueba.hasta, true)}). Regresión lineal regularizada; la prueba nunca se mezcla con el entrenamiento.
                  </p>
                  {ajuste.serie.t && <Grafico t={ajuste.serie.t} series={seriesModelo} tema={tema} />}
                  <p className="nota" style={{marginTop: 0}}>Qué entradas pesan más: cuánto mueve la estimación un cambio típico de cada una.</p>
                  <ul className="barras">
                    {M.pesos.slice(0, 10).map((p) => (
                      <li key={p.nombre}>
                        <span>{p.nombre}</span>
                        <span className="b">
                          <i className={p.peso < 0 ? 'neg' : ''} style={p.peso < 0 ? {left: `${50 + (p.peso / maxPeso) * 50}%`, width: `${(-p.peso / maxPeso) * 50}%`} : {width: `${(p.peso / maxPeso) * 50}%`}} />
                        </span>
                        <span className="n">{num(p.peso, 3)}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Celda>

            <Celda n="06" titulo="Vigilar" ayuda="La misma receta y el mismo modelo sobre datos nuevos: si la planta cambió, aquí se nota antes de confiar en la estimación.">
              {!M ? (
                <p className="vacio">Primero entrena un modelo.</p>
              ) : (
                <>
                  <div className="fila">
                    {esEjemplo && (
                      <button type="button" className="cta" disabled={!!ocupado} onClick={() => vigilarCon(() => traer('../flotacion_nuevo.csv'), 'el mes siguiente del ejemplo')}>
                        Probar con el mes siguiente
                      </button>
                    )}
                    <button type="button" className="sec" disabled={!!ocupado} onClick={() => pideNuevo.current.click()}>
                      Abrir datos nuevos
                    </button>
                    <input ref={pideNuevo} type="file" accept=".csv,.txt,.tsv,.xlsx,.xlsm,.xls" hidden onChange={(e) => (e.target.files[0] && vigilarCon(() => abrir(e.target.files[0]), e.target.files[0].name), (e.target.value = ''))} />
                    <button
                      type="button"
                      className="sec"
                      onClick={() => bajar('ficha_modelo.json', JSON.stringify({cuaderno: 'ficha del modelo', hecho: new Date().toISOString().slice(0, 10), archivo, receta, modelo: M}, null, 2), 'application/json')}
                    >
                      Guardar ficha del modelo
                    </button>
                  </div>
                  {vig && !vig.ok && (
                    <p className="veredicto">
                      A los datos nuevos les falta {vig.faltan.map((f) => `«${f}»`).join(', ')}. Sin esas columnas el modelo no puede estimar: cambió el formato del archivo.
                    </p>
                  )}
                  {vig && vig.ok && (
                    <>
                      {vig.malos.length > 0 && <p className="veredicto">Un paso de la receta no se pudo aplicar a estos datos: {vig.malos.map((b) => b.error).join(' ')}</p>}
                      {vig.metricas ? (
                        <p className={'veredicto' + (vig.metricas.modelo.mae <= M.metricas.modelo.mae * 1.25 ? ' bien' : '')}>
                          En {vig.nombre} el error medio fue {num(vig.metricas.modelo.mae, 3)}; en la prueba original, {num(M.metricas.modelo.mae, 3)}.{' '}
                          {vig.metricas.modelo.mae <= M.metricas.modelo.mae * 1.25 ? 'El modelo se mantiene.' : 'El modelo empeoró: toca revisar la planta o volver a entrenar.'}
                          {vig.metricas.ultimo && ` Usar el último valor conocido habría dado ${num(vig.metricas.ultimo.mae, 3)}.`}
                        </p>
                      ) : (
                        <p className="veredicto bien">
                          Estimé {num(vig.estimadas)} de {num(vig.filas)} filas. Estos datos no traen «{M.objetivo}», así que no se puede medir el error.
                        </p>
                      )}
                      {vig.serie.t && <Grafico t={vig.serie.t} series={seriesVig} tema={tema} />}
                      <div className="rueda">
                        <table>
                          <thead>
                            <tr>
                              <th>Entrada</th>
                              <th>Al entrenar</th>
                              <th>Ahora</th>
                              <th>Se movió</th>
                              <th>Fuera de rango</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...vig.deriva]
                              .sort((a, b) => Math.abs(b.mov) - Math.abs(a.mov))
                              .map((d) => (
                                <tr key={d.nombre}>
                                  <td>{d.nombre}</td>
                                  <td>{num(d.antes)}</td>
                                  <td>{num(d.ahora)}</td>
                                  <td>{num(d.mov, 1)} desv.</td>
                                  <td>{pct(d.fuera, 0)}</td>
                                  <td style={d.alerta ? {color: 'var(--acc)'} : null}>{d.alerta ? 'cambió' : 'igual'}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="nota" style={{marginTop: 0}}>
                        Una entrada «cambió» si su promedio se movió más de una desviación o si más del 20 % de sus datos cae fuera del rango con que se entrenó. Ahí el modelo opera donde no
                        tiene experiencia.
                      </p>
                    </>
                  )}
                </>
              )}
            </Celda>
          </>
        )}
      </main>
      <footer className="legal">
        <div className="ancho">
          Cuaderno de planta · Servicio y Soluciones Tecnológicas DelaCruz SpA · Julián Neira Nova. Los archivos se leen y se procesan en tu navegador; esta página no los envía ni los
          guarda. Si usas el asistente, solo viajan los nombres de las columnas y sus estadísticas. Datos del ejemplo: «Quality Prediction in a Mining Process» (Kaggle, publicado como dominio público CC0), una fila de cada treinta. Cada cálculo se comprueba contra pandas y
          scikit-learn; el detalle está en el repositorio. Es una ayuda de análisis: las decisiones de operación las toma quien conoce la planta.
        </div>
      </footer>
    </div>
  );
}
