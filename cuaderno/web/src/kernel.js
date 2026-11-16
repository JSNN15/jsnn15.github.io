// Lado de la página del kernel: habla con public/kernel.js (un Web Worker con Pyodide).
export function crearKernel(alEstado) {
  const w = new Worker(new URL('kernel.js', document.baseURI), {type: 'module'});
  const espera = new Map();
  let n = 0;
  w.onmessage = (e) => {
    const m = e.data;
    if (m.estado) return alEstado(m.estado);
    const p = espera.get(m.id);
    if (!p) return;
    espera.delete(m.id);
    m.ok ? p.res(m) : p.rej(new Error(m.error));
  };
  w.onerror = (e) => {
    espera.forEach((p) => p.rej(new Error(e.message || 'el kernel no pudo arrancar')));
    espera.clear();
  };
  const pedir = (op, extra = {}, transferir) =>
    new Promise((res, rej) => {
      const id = ++n;
      espera.set(id, {res, rej});
      w.postMessage({id, op, ...extra}, transferir || []);
    });
  return {
    iniciar: (o) => pedir('iniciar', o),
    ejecutar: (codigo) => pedir('ejecutar', {codigo}),
    archivo: (nombre, bytes) => pedir('archivo', {nombre, bytes}, [bytes]),
    tema: (tema) => pedir('tema', {tema}),
    terminar: () => w.terminate(),
  };
}
