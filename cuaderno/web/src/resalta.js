// Resaltado de Python para las celdas guardadas (sin editor). Devuelve HTML con las mismas clases que usa el editor en vivo.
const CLAVE = new Set('False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'.split(' '));
const PROPIA = new Set('print len range int float str bool list dict set tuple min max sum abs round sorted enumerate zip map any all isinstance open type'.split(' '));
const esc = (s) => s.replace(/[&<>]/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'})[c]);
const RE = /(#[^\n]*)|((?:[rfbRFB]{0,2})(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'))|(\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|([A-Za-z_]\w*)(?=(\s*\()?)|([\s\S])/g;

export function resalta(codigo) {
  let out = '';
  let previa = '';
  codigo.replace(RE, (m, com, cad, num, nombre, llama, otro) => {
    if (com) out += `<span class="tk-c">${esc(com)}</span>`;
    else if (cad) out += `<span class="tk-s">${esc(cad)}</span>`;
    else if (num) out += `<span class="tk-n">${num}</span>`;
    else if (nombre) {
      if (CLAVE.has(nombre)) out += `<span class="tk-k">${nombre}</span>`;
      else if (previa === 'def' || previa === 'class') out += `<span class="tk-d">${nombre}</span>`;
      else if (PROPIA.has(nombre) && llama) out += `<span class="tk-b">${nombre}</span>`;
      else if (llama) out += `<span class="tk-f">${nombre}</span>`;
      else out += nombre;
      previa = nombre;
    } else out += esc(otro);
    return m;
  });
  return out;
}
