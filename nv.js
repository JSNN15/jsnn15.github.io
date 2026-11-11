// Sesión con el intermediario de IA (github.com/JSNN15/nv-gateway).
// Las páginas siguen llamando con fetch: este archivo pide la sesión una vez, la renueva sola
// y la agrega a cada consulta. Si el intermediario lo exige, comprueba antes que hay un navegador
// real con Cloudflare Turnstile; casi siempre sin que la persona tenga que hacer nada.
(() => {
  const BASES = [
    'https://nv-portafolio.jneiranova.workers.dev',
    'http://localhost:8787',
    'http://127.0.0.1:8787',
  ];
  const nativo = window.fetch.bind(window);
  const baseDe = (u) => BASES.find((b) => typeof u === 'string' && u.startsWith(b + '/'));
  let ses = null,
    vence = 0,
    enCurso = null;

  const verificar = (sitekey) =>
    new Promise((ok, ko) => {
      const corte = setTimeout(() => ko(new Error('la verificación del navegador tardó demasiado')), 60000);
      const fin = (f, v) => {
        clearTimeout(corte);
        f(v);
      };
      const mostrar = () => {
        let caja = document.getElementById('nv-verifica');
        if (!caja) {
          caja = document.createElement('div');
          caja.id = 'nv-verifica';
          caja.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9999';
          document.body.appendChild(caja);
        }
        const id = window.turnstile.render(caja, {
          sitekey,
          appearance: 'interaction-only',
          language: 'es',
          callback: (t) => {
            fin(ok, t);
            setTimeout(() => window.turnstile.remove(id), 400);
          },
          'error-callback': () => fin(ko, new Error('no se pudo verificar el navegador')),
        });
      };
      if (window.turnstile) return mostrar();
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.onload = mostrar;
      s.onerror = () => fin(ko, new Error('no cargó la verificación del navegador'));
      document.head.appendChild(s);
    });

  const pedir = async (b, t) => {
    const r = await nativo(b + '/sesion', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(t ? {t} : {}),
    });
    const d = await r.json().catch(() => ({}));
    if (r.ok && d.s) {
      ses = d.s;
      vence = Date.now() + ((d.min || 30) - 1) * 60000;
      return;
    }
    if (r.status === 401 && d.sitekey && !t) return pedir(b, await verificar(d.sitekey));
    throw new Error(
      d.error === 'verificacion' ? 'no se pudo verificar el navegador' : d.error || 'sin sesión'
    );
  };
  const sesion = (b) =>
    ses && Date.now() < vence
      ? Promise.resolve()
      : (enCurso ??= pedir(b).finally(() => {
          enCurso = null;
        }));

  window.fetch = async (u, o = {}) => {
    const b = baseDe(u);
    if (!b) return nativo(u, o);
    const ir = async () => {
      await sesion(b);
      const headers = new Headers(o.headers || {});
      headers.set('X-NV-Sesion', ses);
      return nativo(u, {...o, headers});
    };
    let r = await ir();
    if (r.status === 401) {
      // la sesión venció o cambió la IP: se pide otra y se repite una vez
      ses = null;
      r = await ir();
    }
    return r;
  };
  window.nvSesion = {verificar};
})();
