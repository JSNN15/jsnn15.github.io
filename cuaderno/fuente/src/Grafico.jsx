import {useEffect, useRef} from 'react';
import uPlot from 'uplot';
import 'uplot/dist/uPlot.min.css';

const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

// Serie de tiempo. `t` en milisegundos; cada serie es {nombre, v, color}. Los huecos se dibujan como huecos.
export default function Grafico({t, series, alto = 300, tema, dosEjes}) {
  const caja = useRef(null);
  useEffect(() => {
    if (!caja.current || !t || !t.length) return;
    // más de 6.000 puntos no se distinguen en pantalla: se promedia por tramos
    const paso = Math.max(1, Math.ceil(t.length / 6000));
    const reducir = (v, esTiempo) => {
      if (paso === 1) return Array.from(v, (x) => (isNaN(x) ? null : esTiempo ? x / 1000 : x));
      const out = [];
      for (let i = 0; i < v.length; i += paso) {
        let s = 0,
          k = 0;
        for (let j = i; j < Math.min(v.length, i + paso); j++) if (!isNaN(v[j])) (s += v[j]), k++;
        out.push(k ? (esTiempo ? s / k / 1000 : s / k) : null);
      }
      return out;
    };
    const colores = [css('--frio'), css('--acc'), css('--mut')];
    const eje = {stroke: css('--mut'), grid: {stroke: css('--line'), width: 1}, ticks: {stroke: css('--line')}, font: '14px Geist, system-ui, sans-serif'};
    const u = new uPlot(
      {
        width: caja.current.clientWidth,
        height: alto,
        tzDate: (ts) => uPlot.tzDate(new Date(ts * 1000), 'UTC'),
        cursor: {drag: {x: true, y: false}},
        scales: {x: {time: true}},
        // con dos variables de escalas distintas, la segunda usa el eje de la derecha
        axes: [eje, {...eje, size: 60}, ...(dosEjes && series.length > 1 ? [{...eje, scale: 'y2', side: 1, size: 60, grid: {show: false}, stroke: colores[1]}] : [])],
        series: [
          {label: 'Hora'},
          ...series.map((s, i) => ({label: s.nombre, stroke: s.color || colores[i % 3], width: 1.5, spanGaps: false, points: {show: false}, scale: dosEjes && i === 1 ? 'y2' : 'y'})),
        ],
      },
      [reducir(t, true), ...series.map((s) => reducir(s.v, false))],
      caja.current
    );
    const ro = new ResizeObserver(() => u.setSize({width: caja.current.clientWidth, height: alto}));
    ro.observe(caja.current);
    return () => (ro.disconnect(), u.destroy());
  }, [t, series, alto, tema, dosEjes]);
  return <div className="grafico" ref={caja} />;
}
