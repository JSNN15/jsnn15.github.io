# Barra común de las demos: volver al portafolio, código en GitHub y LinkedIn. Idempotente (marcadores <!--jnbar-->).
import sys, re
GH = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>'
IN = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><rect width="16" height="16" rx="3" fill="currentColor"/><path fill="#0b0f13" d="M3.6 6.2h2v6.2h-2zM4.6 3.2a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3zM7 6.2h1.9v.85c.27-.5.93-1 1.9-1 2 0 2.4 1.3 2.4 3v3.35h-2V9.4c0-.73-.01-1.67-1.02-1.67-1.02 0-1.18.8-1.18 1.62v3.05H7z"/></svg>'
CSS = """<style id="jnbar-css">
.jnb{position:relative;z-index:50;display:flex;align-items:center;gap:10px;padding:6px max(14px,env(safe-area-inset-left,0px));background:#0b0f13;border-bottom:1px solid #26313b;font:500 13px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#cfd8df}
.jnb a{color:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:6px;border-radius:999px;white-space:nowrap}
.jnb .jnb-back{background:#e9eef2;color:#0b0f13;font-weight:700;padding:6px 13px 6px 10px;box-shadow:0 0 0 3px rgba(233,238,242,.12)}
.jnb .jnb-back:hover{background:#fff}
.jnb .jnb-who{color:#8a98a5;overflow:hidden;text-overflow:ellipsis}
.jnb .jnb-who b{color:#cfd8df;font-weight:600}
.jnb .jnb-sp{flex:1}
.jnb .jnb-gh,.jnb .jnb-in{border:1px solid #34414d;padding:5px 11px;background:#121920}
.jnb .jnb-gh:hover,.jnb .jnb-in:hover{border-color:#8a98a5;color:#fff}
@media (max-width:640px){.jnb .jnb-who{display:none}.jnb .jnb-gh span,.jnb .jnb-in span{display:none}.jnb .jnb-gh,.jnb .jnb-in{padding:6px 8px}}
@media print{.jnb{display:none}}
</style>"""
def bar(repo, label):
    return (f'<div class="jnb" role="navigation" aria-label="Portafolio y código">'
            f'<a class="jnb-back" href="https://jsnn15.github.io/">← Portafolio</a>'
            f'<span class="jnb-who"><b>{label}</b> · DelaCruz · Julián Neira Nova</span><span class="jnb-sp"></span>'
            f'<a class="jnb-gh" href="https://github.com/JSNN15/{repo}" target="_blank" rel="noopener" title="Ver el código de esta máquina en GitHub">{GH}<span>Código en GitHub</span></a>'
            f'<a class="jnb-in" href="https://www.linkedin.com/in/julian-neira-nova/" target="_blank" rel="noopener" title="Julián Neira Nova en LinkedIn">{IN}<span>LinkedIn</span></a></div>')
def inject(html, repo, label):
    html = re.sub(r'<!--jnbar-->.*?<!--/jnbar-->', '', html, flags=re.S)
    html = re.sub(r'<style id="jnbar-css">.*?</style>', '', html, flags=re.S)
    html = html.replace('</head>', CSS + '\n</head>', 1)
    m = re.search(r'<body[^>]*>', html)
    return html[:m.end()] + '\n<!--jnbar-->' + bar(repo, label) + '<!--/jnbar-->' + html[m.end():]
if __name__ == '__main__':
    f, repo, label = sys.argv[1], sys.argv[2], sys.argv[3]
    src = open(f).read(); assert '<body' in src, 'archivo vacío o sin <body>'
    out = inject(src, repo, label); open(f, 'w').write(out); print('ok', f)
