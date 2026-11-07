# Planta virtual LX-SX-EW · simulador de entrenamiento de operadores (OTS)

Simulador de entrenamiento de operadores (OTS, *Operator Training Simulator*) de una planta de cobre por lixiviación, extracción por solventes (SX) y electroobtención (EW). Es un modelo dinámico del proceso con la interfaz de una sala de control, para practicar partidas, paradas y fallas sin riesgo. Corre entero en el navegador, sin servidor.

## Qué tiene

- **P&ID en vivo** de las cinco áreas, con criterios de HMI de alto desempeño (ISA-101): equipos en grises y color solo para lo anormal. Tema oscuro de sala de control y tema claro, y modo de pantalla completa.
- **Ventanas de equipo (faceplates)** flotantes y arrastrables. Las órdenes se dan en dos pasos (seleccionar y confirmar), con cuenta regresiva, y cada orden muestra un aviso: aceptada, o rechazada con su causa. Los lazos PID se operan en manual, automático o cascada, con ajustes rápidos de consigna, límites de alarma y tendencia de 30 min.
- **Interacción de consola**: información al pasar el puntero sobre cada equipo, resalte del equipo abierto, navegación desde una alarma hasta su pantalla y su equipo, y atajos de teclado (0 a 5 para las áreas, A para alarmas, Esc para cerrar).
- **Secuencias automáticas** de partida y parada del área 100 (ISA-106 simplificado). Cada paso espera su confirmación y, si falla, dice la causa: falta un rearme, falta un permisivo o el MCC está sin energía.
- **Alarmas ISA-18.2**: prioridades, reconocimiento, inhibición temporal y supresión por estado de equipo (un área detenida a propósito no genera alarmas de proceso).
- **Bitácora de eventos** con alarmas, normalizaciones, órdenes y pasos de secuencia. Se exporta a CSV, igual que las tendencias.
- **Tendencias** con cursor de lectura y un historiador de 8 h.
- **Vistas de mantenimiento y gerencia**: vibraciones, avisos predictivos, KPI de turno y pérdidas valorizadas.
- **Página del modelo**: la cadena del cobre en línea con la ecuación y la fuente de cada eslabón, el balance del electrolito, el voltaje de celda descompuesto, la eficiencia de corriente y la normativa aplicable.

## Qué es y qué no es

En la clasificación de Kritzinger y otros (2018) este proyecto es un **modelo digital**: no intercambia datos con ninguna planta.

| Nivel | Flujo de datos con la planta | Qué le falta a este proyecto |
|---|---|---|
| Modelo digital | Ninguno automático | Es el nivel actual |
| Sombra digital | La planta alimenta al modelo en línea | Leer el historiador (OPC UA o PI) y ajustar los parámetros con esos datos |
| Gemelo digital | En ambos sentidos | Además, devolver recomendaciones o consignas a la planta |

Los parámetros vienen de literatura (ENAMI, encuesta de Sole y otros a plantas de SX, ley de Faraday, LME). La dinámica es creíble y los balances cierran, pero los valores no representan a ninguna operación real.

## Normativa

| Norma | Ámbito | En este simulador |
|---|---|---|
| ANSI/ISA-101.01 | HMI para automatización de procesos | Aplicada: fondo neutro, color solo para lo anormal, jerarquía de pantallas, modos visibles |
| ANSI/ISA-18.2 · IEC 62682 | Gestión de alarmas | Aplicada: prioridades, estados, inhibición, supresión por estado, tasa por hora |
| EEMUA 191 | Guía de sistemas de alarma | Parcial: tasa por operador y alarmas más frecuentes |
| ANSI/ISA-5.1 · ISO 10628-2 | Identificación de instrumentos y símbolos de P&ID | Parcial: tags según ISA-5.1, símbolos simplificados |
| ISA-106 | Automatización de procedimientos en procesos continuos | Parcial: secuencias de partida y parada del área 100 |
| IEC 61131-3 | Lenguajes de PLC | Para planta real: secuencias en SFC, lazos en bloques PID |
| IEC 61511 | Seguridad funcional (SIS) | Para planta real: aquí los enclavamientos son del control básico |
| ISA/IEC 62443 | Ciberseguridad de sistemas de control | Para planta real: zonas, conductos y acceso de solo lectura al historiador |
| ISA-95 · IEC 62264 | Integración empresa-control | Parcial: roles de nivel 2 (operación) y niveles 3-4 (mantenimiento, gestión) |
| IEC 62541 (OPC UA) | Intercambio de datos industriales | Para planta real: la vía para pasar a sombra digital |
| ISO 23247 · ISO/IEC 30173 · IEC 63278 | Marco, terminología y activos de gemelos digitales | Referencia: definen qué exige un gemelo digital |
| ANSI/ISA-77.20 | Requisitos funcionales de simuladores (centrales térmicas) | Referencia: no hay una norma general de OTS para minería |
| ISO 20816-3 (antes ISO 10816-3) | Vibración de máquinas industriales | Aplicada: zonas A a D, grupo 1, base rígida |
| ISO 17359 | Monitoreo de condición | Parcial: avisos predictivos por tendencia |
| IEEE 519 | Armónicos en sistemas eléctricos | Parcial: distorsión del rectificador con y sin filtro |
| BS EN 1978 (LME grado A) | Calidad del cátodo de cobre | Aplicada: límites de Pb, S y Fe |

## Archivos

- `sim.js`: motor de simulación con paso de 1 s. Incluye lazos PID, enclavamientos, secuencias, alarmas e historiador. No depende del navegador.
- `hmi.js`: interfaz del operador, mantenimiento y gerencia.
- `test/sim.test.js`: pruebas del motor. Revisan el régimen de diseño, la ley de Faraday, que los escenarios no produzcan valores no finitos, las secuencias, la supresión de alarmas y la compensación de retardo de la correa.

```bash
node planta-virtual/test/sim.test.js
```
