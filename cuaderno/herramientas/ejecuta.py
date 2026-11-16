"""Convierte cuaderno.py en cuaderno.ipynb y lo ejecuta con Jupyter. Uso: python herramientas/ejecuta.py [claro|oscuro] salida.ipynb"""
import shutil, sys
import jupytext, nbformat
from nbclient import NotebookClient

tema, salida = (sys.argv[1:] + ['claro', 'cuaderno.ipynb'])[:2]
shutil.copy(f'{tema}.mplstyle', 'planta.mplstyle')
nb = jupytext.read('cuaderno.py')
nb.metadata.pop('jupytext', None)
NotebookClient(nb, timeout=600, kernel_name='python3').execute()
nbformat.write(nb, salida)
shutil.copy('claro.mplstyle', 'planta.mplstyle')
print('ok', salida, len(nb.cells), 'celdas')
