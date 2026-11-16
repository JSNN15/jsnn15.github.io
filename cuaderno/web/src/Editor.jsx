import {useEffect, useRef} from 'react';
import {EditorView, keymap} from '@codemirror/view';
import {EditorState, Prec} from '@codemirror/state';
import {minimalSetup} from 'codemirror';
import {python} from '@codemirror/lang-python';
import {HighlightStyle, syntaxHighlighting, indentUnit, bracketMatching} from '@codemirror/language';
import {indentWithTab} from '@codemirror/commands';
import {closeBrackets} from '@codemirror/autocomplete';
import {tags as t} from '@lezer/highlight';

const colores = HighlightStyle.define([
  {tag: [t.keyword, t.operatorKeyword, t.controlKeyword, t.moduleKeyword, t.definitionKeyword, t.bool, t.null], class: 'tk-k'},
  {tag: [t.string, t.special(t.string)], class: 'tk-s'},
  {tag: t.comment, class: 'tk-c'},
  {tag: t.number, class: 'tk-n'},
  {tag: [t.function(t.variableName), t.function(t.propertyName)], class: 'tk-f'},
  {tag: [t.definition(t.variableName), t.className], class: 'tk-d'},
]);

// Editor de una celda. Mayúsculas+Enter ejecuta; Esc y luego Tab saca el foco (Tab solo indenta).
export default function Editor({valor, alCambiar, alEjecutar, etiqueta}) {
  const caja = useRef(null);
  const vista = useRef(null);
  const fn = useRef({alCambiar, alEjecutar});
  fn.current = {alCambiar, alEjecutar};
  useEffect(() => {
    vista.current = new EditorView({
      parent: caja.current,
      state: EditorState.create({
        doc: valor,
        extensions: [
          Prec.highest(keymap.of([{key: 'Shift-Enter', run: () => (fn.current.alEjecutar(), true)}, {key: 'Mod-Enter', run: () => (fn.current.alEjecutar(), true)}])),
          minimalSetup,
          keymap.of([indentWithTab]),
          python(),
          indentUnit.of('    '),
          bracketMatching(),
          closeBrackets(),
          syntaxHighlighting(colores),
          EditorView.contentAttributes.of({'aria-label': etiqueta, spellcheck: 'false', autocapitalize: 'off'}),
          EditorView.updateListener.of((u) => u.docChanged && fn.current.alCambiar(u.state.doc.toString())),
        ],
      }),
    });
    return () => vista.current.destroy();
  }, []);
  return <div className="editor" ref={caja} />;
}
