import {lazy, Suspense, useEffect, useMemo, useRef, useState} from 'react';
import {marked} from 'marked';
import cuaderno from './cuaderno.json';
import catalogo from './catalogo.json';
import {resalta} from './resalta.js';
import {crearKernel} from './kernel.js';
import logoClaro from './logo-claro.png';
import logoOscuro from './logo-oscuro.png';

const Editor = lazy(() => import('./Editor.jsx'));

const REPO = 'https://github.com/JSNN15/jsnn15.github.io/blob/main/cuaderno/';
const num = (n) => n.toLocaleString('es-CL');
const peso = (b) => (b >= 1048576 ? `${(b / 1048576).toFixed(1).replace('.', ',')} MB` : `${Math.max(1, Math.round(b / 1024))} kB`);
const temaActual = () => document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
const limpiaHtml = (h) => h.replace(/<style[\s\S]*?<\/style>/g, '').replace(/ border="1"/g, '').replace(/ style="text-align: right;"/g, '');
const fechaLarga = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-CL', {day: 'numeric', month: 'long', year: 'numeric'});

marked.use({gfm: true});
const md = (texto) => marked.parse(texto).replace(/<table>/g, '<div class="tabla"><table>').replace(/<\/table>/g, '</table></div>').replace(/<a href="http/g, '<a target="_blank" rel="noopener" href="http');

// secciones del índice: los títulos de segundo nivel de las celdas de texto
const SECCIONES = cuaderno.celdas.flatMap((c) => {
  const m = c.tipo === 'md' && c.fuente.match(/^## (.+)$/m);
  return m ? [{id: c.id, titulo: m[1]}] : [];
});
const ARCHIVOS_KERNEL = ['datos/manifiesto.json', 'datos/verdad.json', ...catalogo.archivos.map((a) => 'datos/' + a.nombre)];
const FILAS = catalogo.archivos.reduce((s, a) => s + a.filas, 0);

function Salida({s, tema, alt}) {
  if (s.t === 'texto') return <pre className={'sal-texto' + (s.valor ? ' valor' : '')}>{s.texto}</pre>;
  if (s.t === 'error') return <pre className="sal-error">{s.texto}</pre>;
  if (s.t === 'html') return <div className="sal-tabla" tabIndex={0} dangerouslySetInnerHTML={{__html: limpiaHtml(s.html)}} />;
  if (s.t === 'img') {
    const src = s.png ? `data:image/png;base64,${s.png}` : tema === 'dark' ? s.oscuro : s.claro;
    return <img className="sal-img" src={src} width={Math.round(s.w / 1.44)} height={Math.round(s.h / 1.44)} alt={alt} loading="lazy" />;
  }
  return null;
}

function Celda({c, tema, vivo, verCodigo, alEjecutar, alCambiar, alQuitar}) {
  if (c.tipo === 'md') return <div className="celda md" id={'sec-' + c.id} dangerouslySetInnerHTML={{__html: c.html}} />;
  const salidas = c.vivo ? c.vivo.salidas : c.salidas;
  const n = c.estado ? '*' : c.vivo ? c.vivo.n : c.n ?? ' ';
  const titulo = (c.fuente.match(/set_title\(f?['"]([^'"{]+)/) || [])[1];
  const alt = titulo ? `Gráfico: ${titulo.trim()}` : 'Gráfico generado por esta celda';
  return (
    <div className={'celda codigo' + (c.estado ? ' ' + c.estado : '') + (c.vivo ? ' viva' : '')} id={'celda-' + c.id}>
      {verCodigo && (
        <div className="entrada">
          <div className="margen">
            <span className="cuenta" aria-hidden="true">
              [{n}]:
            </span>
            <button type="button" className="correr" onClick={() => alEjecutar(c.id)} disabled={!!c.estado} aria-label={`Ejecutar la celda ${c.n ?? 'nueva'}`} title="Ejecutar (Mayúsculas + Enter)">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div className="fuente">
            {vivo ? (
              <Suspense fallback={<pre className="py" dangerouslySetInnerHTML={{__html: resalta(c.fuente)}} />}>
                <Editor valor={c.fuente} alCambiar={(v) => alCambiar(c.id, v)} alEjecutar={() => alEjecutar(c.id)} etiqueta={`Código de la celda ${c.n ?? 'nueva'}`} />
              </Suspense>
            ) : (
              <pre className="py" tabIndex={0} dangerouslySetInnerHTML={{__html: resalta(c.fuente)}} />
            )}
            {c.nueva && (
              <button type="button" className="quitar" onClick={() => alQuitar(c.id)}>
                Quitar celda
              </button>
            )}
          </div>
        </div>
      )}
      {salidas.length > 0 && (
        <div className="salida">
          <div className="margen" aria-hidden="true">
            {c.vivo && (
              <span className="sello">
                en vivo{c.vivo.ms != null && <i>{c.vivo.ms < 1000 ? c.vivo.ms + ' ms' : (c.vivo.ms / 1000).toFixed(1).replace('.', ',') + ' s'}</i>}
              </span>
            )}
          </div>
          <div className="cuerpo">
            {salidas.map((s, i) => (
              <Salida key={i} s={s} tema={tema} alt={alt} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Segundos transcurridos, para que una descarga lenta no parezca una página colgada.
function Reloj() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const t0 = Date.now();
    const i = setInterval(() => setS(Math.round((Date.now() - t0) / 1000)), 1000);
    return () => clearInterval(i);
  }, []);
  return <span className="reloj">{s} s</span>;
}

function VistaArchivo({a, alCerrar}) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (a && !d.open) d.showModal();
  }, [a]);
  if (!a) return null;
  const fechas = a.columnas.filter((c) => c.tipo === 'fecha y hora').map((c) => `'${c.nombre}'`);
  return (
    <dialog ref={ref} className="vista" onClose={alCerrar} onClick={(e) => e.target === ref.current && ref.current.close()} aria-labelledby="vista-t">
      <div className="vista-in">
        <header>
          <div>
            <p className="rot">{a.sistema}</p>
            <h2 id="vista-t">{a.nombre}</h2>
          </div>
          <button type="button" className="cerrar" onClick={() => ref.current.close()}>
            Cerrar
          </button>
        </header>
        <p>{a.que}.</p>
        <dl className="ficha">
          <div>
            <dt>Filas</dt>
            <dd>{num(a.filas)}</dd>
          </div>
          <div>
            <dt>Columnas</dt>
            <dd>{a.columnas.length}</dd>
          </div>
          <div>
            <dt>Tamaño</dt>
            <dd>{peso(a.bytes)}</dd>
          </div>
          <div>
            <dt>SHA-256</dt>
            <dd className="mono">{a.sha256.slice(0, 12)}…</dd>
          </div>
        </dl>
        <h3>Primeras filas</h3>
        <div className="sal-tabla" tabIndex={0}>
          <table>
            <thead>
              <tr>
                {a.columnas.map((c) => (
                  <th key={c.nombre}>
                    {c.nombre}
                    <small>{c.tipo}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {a.muestra.map((f, i) => (
                <tr key={i}>
                  {f.map((v, j) => (
                    <td key={j} className={typeof v === 'number' ? 'n' : ''}>
                      {v == null ? '' : String(v)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Cómo se lee</h3>
        <pre className="py" dangerouslySetInnerHTML={{__html: resalta(`pd.read_csv('datos/${a.nombre}'${fechas.length ? `, parse_dates=[${fechas.join(', ')}]` : ''})`)}} />
        <p className="pie-vista">
          <a href={'datos/' + a.nombre} download>
            Descargar {a.nombre}
          </a>
        </p>
      </div>
    </dialog>
  );
}

export default function App() {
  const [tema, setTema] = useState(temaActual);
  const [celdas, setCeldas] = useState(() => cuaderno.celdas.map((c) => (c.tipo === 'md' ? {...c, html: md(c.fuente)} : c)));
  const [k, setK] = useState({fase: 'apagado', msg: ''});
  const [verCodigo, setVerCodigo] = useState(true);
  const [archivo, setArchivo] = useState(null);
  const [activa, setActiva] = useState(SECCIONES[0] && SECCIONES[0].id);
  const kernel = useRef(null);
  const arranque = useRef(null);
  const cola = useRef(Promise.resolve());
  const hechas = useRef(new Set());
  const cuenta = useRef(0);
  const ref = useRef(celdas);
  ref.current = celdas;
  const vivo = k.fase !== 'apagado' && k.fase !== 'error';

  const cambiar = (id, cambios) => setCeldas((cs) => cs.map((c) => (c.id === id ? {...c, ...(typeof cambios === 'function' ? cambios(c) : cambios)} : c)));

  const cambiarTema = () => {
    const s = tema === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = s;
    try {
      localStorage.setItem('tema', s);
    } catch (e) {}
    setTema(s);
    if (kernel.current && k.fase === 'listo') kernel.current.tema(s).catch(() => {});
  };

  // índice: marca la sección que se está leyendo (la última cuyo título ya pasó bajo la barra)
  useEffect(() => {
    let pedido = 0;
    const medir = () => {
      pedido = 0;
      let actual = SECCIONES[0].id;
      for (const s of SECCIONES) {
        const el = document.getElementById('sec-' + s.id);
        if (el && el.getBoundingClientRect().top < 140) actual = s.id;
      }
      setActiva(actual);
    };
    const alMover = () => pedido || (pedido = requestAnimationFrame(medir));
    addEventListener('scroll', alMover, {passive: true});
    medir();
    return () => removeEventListener('scroll', alMover);
  }, []);

  const arrancar = () => {
    if (arranque.current) return arranque.current;
    setK({fase: 'arrancando', msg: 'Bajando Python (paso 1 de 3)'});
    const kn = crearKernel((msg) => setK((x) => ({...x, msg})));
    kernel.current = kn;
    arranque.current = kn
      .iniciar({raiz: new URL('.', document.baseURI).href, archivos: ARCHIVOS_KERNEL, tema})
      .then((r) => (setK({fase: 'listo', msg: '', versiones: r.versiones}), kn))
      .catch((e) => {
        kn.terminar();
        kernel.current = arranque.current = null;
        setK({fase: 'error', msg: `No se pudo arrancar Python en este navegador: ${e.message}. Las salidas guardadas siguen disponibles.`});
        throw e;
      });
    return arranque.current;
  };

  const detener = () => {
    kernel.current && kernel.current.terminar();
    kernel.current = arranque.current = null;
    cola.current = Promise.resolve();
    hechas.current = new Set();
    cuenta.current = 0;
    setCeldas((cs) => cs.map((c) => (c.estado ? {...c, estado: null} : c)));
    setK({fase: 'apagado', msg: ''});
  };

  // Ejecuta una celda y, antes, las de más arriba que aún no se han intentado en este kernel. Si una falla, la tanda se detiene.
  const ejecutar = (id, todo = false) => {
    cola.current = cola.current
      .then(async () => {
        const kn = await arrancar();
        if (todo) hechas.current = new Set();
        const lista = ref.current.filter((c) => c.tipo === 'code');
        const i = lista.findIndex((c) => c.id === id);
        const tanda = [...lista.slice(0, i).filter((c) => !hechas.current.has(c.id)), lista[i]].filter((c) => c.fuente.trim());
        tanda.forEach((c) => cambiar(c.id, {estado: 'cola'}));
        let fallo = false;
        for (const c of tanda) {
          if (fallo || kernel.current !== kn) {
            cambiar(c.id, {estado: null});
            continue;
          }
          cambiar(c.id, {estado: 'corre'});
          setK((x) => ({...x, fase: 'ocupado', msg: ''}));
          try {
            const fuente = ref.current.find((x) => x.id === c.id).fuente;
            const r = await kn.ejecutar(fuente);
            if (kernel.current !== kn) return;
            fallo = r.salidas.some((s) => s.t === 'error');
            hechas.current.add(c.id); // ya se intentó: si falló, no vuelve a correr sola antes de otra celda
            cambiar(c.id, {estado: null, vivo: {n: ++cuenta.current, salidas: r.salidas, ms: r.ms}});
          } catch (e) {
            fallo = true;
            cambiar(c.id, {estado: null, vivo: {n: ++cuenta.current, salidas: [{t: 'error', texto: String(e.message || e)}]}});
          }
        }
        if (kernel.current === kn) setK((x) => ({...x, fase: 'listo', msg: ''}));
      })
      .catch(() => {});
  };

  const editar = (id, fuente) => {
    hechas.current.delete(id);
    cambiar(id, {fuente});
  };

  const nuevaCelda = (fuente = '') => {
    const id = 'n' + Date.now();
    setCeldas((cs) => [...cs, {id, tipo: 'code', fuente, salidas: [], nueva: true}]);
    arrancar().catch(() => {});
    setTimeout(() => {
      const el = document.getElementById('celda-' + id);
      el && el.scrollIntoView({block: 'center', behavior: 'smooth'});
    }, 60);
    return id;
  };

  const subir = async (e) => {
    const f = e.target.files[0];
    e.target.value = '';
    if (!f) return;
    const nombre = f.name.replace(/[^\w.\-]/g, '_');
    try {
      const kn = await arrancar();
      await kn.archivo(nombre, await f.arrayBuffer());
      nuevaCelda(`mio = pd.read_csv('${nombre}')\nmio.head()`);
    } catch (err) {}
  };

  const ultima = useMemo(() => [...celdas].reverse().find((c) => c.tipo === 'code'), [celdas]);
  const primera = celdas.find((c) => c.tipo === 'code');
  const corriendo = celdas.some((c) => c.estado);
  const v = cuaderno.versiones;

  return (
    <>
      <a className="salto" href="#cuaderno">
        Ir al cuaderno
      </a>
      <header className="top">
        <a className="marca" href="../">
          <img src={tema === 'dark' ? logoOscuro : logoClaro} alt="DelaCruz" width="36" height="36" />
          <span>
            Cuaderno de planta
            <small>cuaderno.ipynb</small>
          </span>
        </a>
        <div className="acciones">
          <button type="button" className="conmuta" aria-pressed={verCodigo} onClick={() => setVerCodigo((x) => !x)}>
            {verCodigo ? 'Ocultar código' : 'Mostrar código'}
          </button>
          <button type="button" className="conmuta" onClick={cambiarTema} aria-label={tema === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
            {tema === 'dark' ? 'Claro' : 'Oscuro'}
          </button>
        </div>
      </header>

      <div className="marco">
        <aside className="lado" aria-label="Índice y datos">
          <details open={typeof matchMedia === 'undefined' || matchMedia('(min-width: 1000px)').matches}>
            <summary>Índice y datos</summary>
            <nav aria-label="Secciones">
              <h2>Índice</h2>
              <ol>
                {SECCIONES.map((s) => (
                  <li key={s.id}>
                    <a href={'#sec-' + s.id} aria-current={activa === s.id ? 'true' : undefined}>
                      {s.titulo}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <section aria-label="Datos crudos">
              <h2>Datos crudos</h2>
              <ul className="archivos">
                {catalogo.archivos.map((a) => (
                  <li key={a.nombre}>
                    <button type="button" onClick={() => setArchivo(a)}>
                      <span>{a.nombre}</span>
                      <small>
                        {num(a.filas)} filas · {peso(a.bytes)}
                      </small>
                    </button>
                  </li>
                ))}
              </ul>
              <label className="subir">
                <input type="file" accept=".csv,.txt" onChange={subir} />
                <span>Subir un CSV propio</span>
                <small>Queda en tu navegador: no se envía a ningún servidor.</small>
              </label>
            </section>
            <section aria-label="Enlaces">
              <h2>Relacionado</h2>
              <ul className="enlaces">
                <li>
                  <a href="../copper_plant_simulator_2026/">Planta virtual: la sala de control</a>
                </li>
                <li>
                  <a href="cuaderno.ipynb" download>
                    Descargar el .ipynb
                  </a>
                </li>
                <li>
                  <a href={REPO + 'cuaderno.ipynb'} target="_blank" rel="noopener">
                    Código y datos en GitHub
                  </a>
                </li>
                <li>
                  <a href="planilla/">Analizar una planilla propia, sin código</a>
                </li>
              </ul>
            </section>
          </details>
        </aside>

        <main className="hoja" id="cuaderno">
          <ol className="origen" aria-label="De dónde salen los datos">
            <li>
              <a href="../copper_plant_simulator_2026/">Planta virtual</a>
              <small>el motor de la sala de control</small>
            </li>
            <li>
              <a href={REPO + 'herramientas/genera.js'} target="_blank" rel="noopener">
                Guion de una semana
              </a>
              <small>12 fallas y un operador</small>
            </li>
            <li>
              <span>{catalogo.archivos.length} archivos crudos</span>
              <small>{num(FILAS)} filas</small>
            </li>
            <li>
              <span>Este cuaderno</span>
              <small>Python {v.python.split('.').slice(0, 2).join('.')} · pandas {v.pandas}</small>
            </li>
          </ol>

          <div className={'kernel ' + k.fase} role="status">
            {k.fase === 'apagado' && (
              <>
                <p>
                  <b>Salidas guardadas.</b> Se ejecutó el {fechaLarga(cuaderno.ejecutado)} con Jupyter. Puedes volver a correrlo aquí: Python arranca dentro de tu navegador y baja unos {cuaderno.descarga_mb} MB la primera vez (de segundos a un par de minutos, según la conexión). La sección 7 usa scikit-learn y suma {cuaderno.sklearn_mb} MB.
                </p>
                <button type="button" className="primario" onClick={() => ejecutar(primera.id)}>
                  Arrancar Python
                </button>
              </>
            )}
            {k.fase === 'arrancando' && (
              <>
                <p>
                  <span className="pulso" aria-hidden="true" />
                  {k.msg}… <Reloj />
                  <small>Con una conexión lenta puede tardar un par de minutos. Queda guardado para la próxima vez.</small>
                </p>
                <button type="button" onClick={detener}>
                  Cancelar
                </button>
              </>
            )}
            {(k.fase === 'listo' || k.fase === 'ocupado') && (
              <>
                <p>
                  <span className={'punto' + (corriendo ? ' pulso' : '')} aria-hidden="true" />
                  <b>Python en vivo</b> ({k.versiones ? `Pyodide ${k.versiones.python}, pandas ${k.versiones.pandas}` : 'Pyodide'}). {corriendo ? k.msg || 'Ejecutando…' : 'Edita cualquier celda y ejecútala con Mayúsculas + Enter.'}
                </p>
                <div className="grupo">
                  <button type="button" onClick={() => ejecutar(ultima.id, true)} disabled={corriendo}>
                    Ejecutar todo
                  </button>
                  <button type="button" onClick={detener}>
                    {corriendo ? 'Detener' : 'Apagar'}
                  </button>
                </div>
              </>
            )}
            {k.fase === 'error' && (
              <>
                <p>{k.msg}</p>
                <button type="button" onClick={() => setK({fase: 'apagado', msg: ''})}>
                  Entendido
                </button>
              </>
            )}
          </div>

          {celdas.map((c) => (
            <Celda key={c.id} c={c} tema={tema} vivo={vivo} verCodigo={verCodigo} alEjecutar={ejecutar} alCambiar={editar} alQuitar={(id) => setCeldas((cs) => cs.filter((x) => x.id !== id))} />
          ))}

          <div className="mas">
            <button type="button" onClick={() => nuevaCelda('')}>
              + Celda de código
            </button>
            <span>Para probar algo propio sobre los mismos datos.</span>
          </div>
        </main>
      </div>

      <footer className="pie">
        <p>
          Proyecto personal de <b>Julián Neira Nova</b>, ingeniero eléctrico · Servicio y Soluciones Tecnológicas DelaCruz SpA. Los datos son de un simulador: nada proviene de clientes ni de empleadores.
        </p>
        <p>
          <a href="../">Portafolio</a> · <a href="https://www.linkedin.com/in/julian-neira-nova/">LinkedIn</a> · <a href="https://github.com/JSNN15">GitHub</a>
        </p>
      </footer>

      <VistaArchivo a={archivo} alCerrar={() => setArchivo(null)} />
    </>
  );
}
