# Planta virtual LX-SX-EW

Sala de control simulada de una planta de cobre por lixiviación, extracción por solventes (SX) y electroobtención (EW). Corre entera en el navegador, sin servidor.

## Qué tiene

- **P&ID en vivo** de las cinco áreas, con criterios de HMI de alto desempeño (ISA-101): equipos en grises y color solo para lo anormal. Tema oscuro de sala de control y tema claro, y modo de pantalla completa.
- **Ventanas de equipo (faceplates)** flotantes y arrastrables. Las órdenes se dan en dos pasos (seleccionar y confirmar) y el operador ve qué va a pasar antes de confirmar. Los lazos PID se operan en manual, automático o cascada, con ajustes rápidos de consigna, límites de alarma y tendencia de 30 min.
- **Secuencias automáticas** de partida y parada del área 100 (ISA-88 simplificado). Cada paso espera su confirmación y, si falla, dice la causa: falta un rearme, falta un permisivo o el MCC está sin energía.
- **Alarmas ISA-18.2**: prioridades, reconocimiento, inhibición temporal y supresión por estado de equipo (un área detenida a propósito no genera alarmas de proceso).
- **Bitácora de eventos** con alarmas, normalizaciones, órdenes y pasos de secuencia. Se exporta a CSV, igual que las tendencias.
- **Tendencias** con cursor de lectura y un historiador de 8 h.
- **Vistas de mantenimiento y gerencia**: vibraciones según ISO 10816-3, avisos predictivos, KPI de turno y pérdidas valorizadas.
- **Página del modelo**: la cadena del cobre en línea con la ecuación y la fuente de cada eslabón, el balance del electrolito, el voltaje de celda descompuesto y la eficiencia de corriente.

## Alcance

Es un gemelo de referencia: un modelo físico con parámetros de literatura (ENAMI, encuesta de Sole y otros a plantas de SX, Faraday, LME), no conectado a una planta real. Para ser el gemelo digital de una faena concreta le faltan la conexión al historiador (OPC UA o PI), la estimación en línea de sus parámetros y la validación contra datos de esa planta.

## Archivos

- `sim.js`: motor de simulación con paso de 1 s. Incluye lazos PID, enclavamientos, secuencias, alarmas e historiador. No depende del navegador.
- `hmi.js`: interfaz del operador, mantenimiento y gerencia.
- `test/sim.test.js`: pruebas del motor. Revisan el régimen de diseño, la ley de Faraday, que los escenarios no produzcan valores no finitos, las secuencias, la supresión de alarmas y la compensación de retardo de la correa.

```bash
node planta-virtual/test/sim.test.js
```
