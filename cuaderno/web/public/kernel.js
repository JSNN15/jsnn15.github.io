/* Kernel del cuaderno: Python (Pyodide) dentro de un Web Worker, para no trabar la página.
   Recibe {id, op, ...} y responde {id, ok, ...}. Mientras arranca manda {estado: 'texto'}. */
// Es un worker de tipo módulo: Pyodide 314 ya no funciona en workers clásicos.
import {loadPyodide} from 'https://cdn.jsdelivr.net/pyodide/v314.0.8/full/pyodide.mjs';
const BASE = 'https://cdn.jsdelivr.net/pyodide/v314.0.8/full/';

// Lo mínimo de un kernel de Jupyter: ejecuta la celda en un espacio de nombres que persiste, captura lo impreso,
// las figuras de matplotlib (en el orden en que se muestran) y el valor de la última expresión.
const ARRANQUE = `
import ast, base64, io, json, sys, traceback, warnings
import matplotlib
matplotlib.use('AGG')
import matplotlib.pyplot as plt

_ns = {'__name__': '__main__'}
_sal = []

class _Flujo(io.TextIOBase):
    def write(self, s):
        if s:
            if _sal and _sal[-1]['t'] == 'texto' and not _sal[-1].get('valor'):
                _sal[-1]['texto'] += s
            else:
                _sal.append({'t': 'texto', 'texto': s})
        return len(s)

def _figuras(*a, **k):
    for n in plt.get_fignums():
        b = io.BytesIO()
        with warnings.catch_warnings():  # los avisos de obsolescencia al guardar son del kernel, no de la celda
            warnings.simplefilter('ignore')
            plt.figure(n).savefig(b, format='png', bbox_inches='tight')
        d = b.getvalue()
        _sal.append({'t': 'img', 'png': base64.b64encode(d).decode(), 'w': int.from_bytes(d[16:20], 'big'), 'h': int.from_bytes(d[20:24], 'big')})
    plt.close('all')

plt.show = _figuras

def _ejecutar(codigo):
    _sal.clear()
    viejo = sys.stdout, sys.stderr
    sys.stdout = sys.stderr = _Flujo()
    try:
        arbol = ast.parse(codigo, '<celda>')
        ultimo = None
        if arbol.body and isinstance(arbol.body[-1], ast.Expr):
            ultimo = ast.Expression(arbol.body.pop().value)
        exec(compile(arbol, '<celda>', 'exec'), _ns)
        if ultimo is not None:
            v = eval(compile(ultimo, '<celda>', 'eval'), _ns)
            _figuras()
            if v is not None:
                h = getattr(v, '_repr_html_', None)
                h = h() if callable(h) else None
                _sal.append({'t': 'html', 'html': h, 'valor': True} if h else {'t': 'texto', 'texto': repr(v), 'valor': True})
        _figuras()
    except BaseException:
        _figuras()
        t, v, tb = sys.exc_info()
        _sal.append({'t': 'error', 'texto': ''.join(traceback.format_exception(t, v, tb.tb_next if tb.tb_next else tb))})
    finally:
        sys.stdout, sys.stderr = viejo
    return json.dumps(_sal)
`;

let py;
let estilos = {};
const decir = (estado) => postMessage({estado});
const bajar = async (url) => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`no se pudo bajar ${url} (${r.status})`);
  return new Uint8Array(await r.arrayBuffer());
};

const ops = {
  async iniciar({raiz, archivos, tema}) {
    decir('Bajando Python (paso 1 de 3)');
    py = await loadPyodide({indexURL: BASE});
    decir('Bajando pandas y matplotlib (paso 2 de 3)');
    await py.loadPackage(['numpy', 'pandas', 'matplotlib']);
    decir('Trayendo los datos (paso 3 de 3)');
    py.FS.mkdirTree('/home/pyodide/datos');
    await Promise.all(archivos.map(async (a) => py.FS.writeFile('/home/pyodide/' + a, await bajar(raiz + a))));
    estilos = {light: await bajar(raiz + 'claro.mplstyle'), dark: await bajar(raiz + 'oscuro.mplstyle')};
    py.FS.writeFile('/home/pyodide/planta.mplstyle', estilos[tema] || estilos.light);
    decir('Preparando el kernel');
    py.runPython(ARRANQUE);
    const v = py.runPython(`import pandas, numpy, platform; json.dumps({'python': platform.python_version(), 'pandas': pandas.__version__, 'numpy': numpy.__version__, 'matplotlib': matplotlib.__version__})`);
    return {versiones: JSON.parse(v)};
  },
  async ejecutar({codigo}) {
    const t0 = performance.now();
    if (/\bsklearn\b/.test(codigo)) decir('Bajando scikit-learn, unos 18 MB la primera vez');
    await py.loadPackagesFromImports(codigo);
    const salidas = JSON.parse(py.globals.get('_ejecutar')(codigo));
    return {salidas, ms: Math.round(performance.now() - t0)};
  },
  async archivo({nombre, bytes}) {
    py.FS.writeFile('/home/pyodide/' + nombre, new Uint8Array(bytes));
    return {};
  },
  async tema({tema}) {
    py.FS.writeFile('/home/pyodide/planta.mplstyle', estilos[tema] || estilos.light);
    py.runPython(`plt.style.use('planta.mplstyle')`);
    return {};
  },
};

onmessage = async (e) => {
  const {id, op, ...resto} = e.data;
  try {
    postMessage({id, ok: true, ...(await ops[op](resto))});
  } catch (err) {
    postMessage({id, ok: false, error: String((err && err.message) || err)});
  }
};
