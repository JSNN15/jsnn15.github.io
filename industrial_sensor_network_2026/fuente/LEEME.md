# Código de las figuras

Las dos figuras de la página se dibujan con código y se guardan como SVG.

- `build_red.mjs` genera la figura 1 (la red completa) en `fig_red.json`.
- `build.mjs` genera la figura 2 (el nodo de vibración en una estación de polines) en `fig_nodo.json`.
- `paleta.css` lleva los colores del kit a los tonos del sitio.

Para regenerarlas, con Node 20 o superior:

    node build_red.mjs
    node build.mjs

La carpeta `kit/` contiene el kit isométrico de [Anatomy](https://github.com/wheresryan22/anatomy), de Ryan, con licencia MIT. Su aviso de licencia está en `kit/LICENSE`. Las figuras y su contenido son de este proyecto.
