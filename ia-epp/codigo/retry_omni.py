import json, os, re, sys, time, concurrent.futures as cf, urllib.error
sys.path.insert(0, '.')
from nv import post, jpeg_b64, BASE
from prompt_def import PROMPT
rows = [json.loads(l) for l in open('res_nemotron-omni.jsonl')]
todo = [i for i, r in enumerate(rows) if not r.get('pred')]
def one(i):
    r = rows[i]
    pl = {'model': 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', 'messages': [{'role': 'user', 'content': [{'type': 'text', 'text': PROMPT}, {'type': 'image_url', 'image_url': {'url': 'data:image/jpeg;base64,' + jpeg_b64('img/' + os.path.basename(r['f']))}}]}], 'max_tokens': 12000, 'temperature': 0}
    for att in range(5):
        try:
            out, dt = post(BASE + '/chat/completions', pl, timeout=600)
            txt = out['choices'][0]['message'].get('content') or ''
            m = re.findall(r'\{[^{}]*"with_helmet"[^{}]*\}', txt)
            r.update(pred=json.loads(m[-1]) if m else None, raw=txt[-400:], lat2=dt, usage2=out.get('usage')); return
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503, 504): time.sleep(5 * (att + 1)); continue
            return
        except Exception: time.sleep(5 * (att + 1))
with cf.ThreadPoolExecutor(4) as ex: list(ex.map(one, todo))
with open('res_nemotron-omni.jsonl', 'w') as fo:
    for r in rows: fo.write(json.dumps(r) + '\n')
print('reintentos', len(todo), 'aún sin respuesta', sum(1 for r in rows if not r.get('pred')))
