# jsnn15.github.io

Portafolio de Julián Neira Nova, ingeniero eléctrico: máquinas de IA para minería, industria y agro que se prueban en el navegador. Se abre en [jsnn15.github.io](https://jsnn15.github.io/).

## Qué hay aquí

- `index.html`: la portada. Ordena las máquinas activas, las primeras versiones y los estudios.
- `img/`: videos e imágenes de la portada.
- `ia-epp/`, `procesos/`, `simulador-ew/`: estudios y cursos que viven en este repositorio.
- `tools/`: scripts con que se arman y revisan las páginas (ver abajo).

Cada máquina tiene su propio repositorio y se publica bajo este mismo dominio:

| Página | Repositorio |
|---|---|
| `/supervisor/` | [supervisor](https://github.com/JSNN15/supervisor) |
| `/consulta-electrica/` | [consulta-electrica](https://github.com/JSNN15/consulta-electrica) |
| `/planta-virtual/` | [planta-virtual](https://github.com/JSNN15/planta-virtual) |
| `/vigia/` | [vigia](https://github.com/JSNN15/vigia) |
| `/lector/` | [lector](https://github.com/JSNN15/lector) |
| `/monitor-correas/` | [monitor-correas](https://github.com/JSNN15/monitor-correas) |
| `/selector-fruta/` | [selector-fruta](https://github.com/JSNN15/selector-fruta) |
| `/inspector/` (versión anterior) | [inspector](https://github.com/JSNN15/inspector) |
| `/normativa/` (versión anterior) | [normativa](https://github.com/JSNN15/normativa) |
| `/lab-virtual-flotacion/` | [lab-virtual-flotacion](https://github.com/JSNN15/lab-virtual-flotacion) |

Las máquinas que usan IA de NVIDIA llaman a [nv-gateway](https://github.com/JSNN15/nv-gateway).

## tools/

| Script | Para qué |
|---|---|
| `revisar_paginas.js` | Abre cada página publicada con Playwright y lista errores de carga o de JavaScript. `node tools/revisar_paginas.js` |
| `buildpage.py` | Arma una página que usa el intermediario: pone su dirección y escribe `samples.js` desde `samples.json`. |
| `jnbar.py` | Inserta la barra común (volver al portafolio, código en GitHub, LinkedIn). |

Proyectos personales: nada de lo publicado proviene de clientes ni de empleadores.
