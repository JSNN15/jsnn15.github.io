# Código de las figuras

Las figuras isométricas de la página se dibujan con código y se guardan como SVG. Los diagramas de bloques y los esquemas eléctricos se generan aparte, al armar la página.

- `build_red.mjs` genera la maqueta general de la red (ya no se muestra en la página) en `fig_red.json`.
- `build.mjs` genera la figura 2 (el nodo de vibración en una estación de polines) en `fig_nodo.json`.
- `build_proyectos.mjs` genera las láminas de la solución desplegada (correas, pila, planta, cultivo, dron, malla de emergencia e incendios) en `fig_proyectos.json`.
- `build_nodos.mjs` genera el despiece del nodo de cada proyecto, con sus tarjetas, baterías, antena y panel, en `fig_nodos.json`.
- `build_rover.mjs` genera la figura 3 (el rover de inspección en despiece, con sus conexiones) en `fig_rover.json`.
- `paleta.css` lleva los colores del kit a los tonos del sitio.

Para regenerarlas, con Node 20 o superior:

    node build_red.mjs
    node build.mjs
    node build_rover.mjs
    node build_proyectos.mjs
    node build_nodos.mjs

La carpeta `kit/` contiene el kit isométrico de [Anatomy](https://github.com/wheresryan22/anatomy), de Ryan, con licencia MIT. Su aviso de licencia está en `kit/LICENSE`. Las figuras y su contenido son de este proyecto.
