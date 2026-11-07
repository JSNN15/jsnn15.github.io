import sys, json, os, time, re, threading, concurrent.futures as cf, urllib.error
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from nv import post, jpeg_b64, BASE
MODELS = {
 'nemotron-super-vl': ('nvidia/nemotron-3.5-super-vl-120b-a12b', {'chat_template_kwargs': {'enable_thinking': False}}, 300),
 'nemotron-bolt': ('nvidia/nemotron-3.5-bolt-e4b', {}, 300),
 'nemotron-omni': ('nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', {}, 3000),
 'llama-90b-vision': ('meta/llama-3.2-90b-vision-instruct', {}, 300),
}
PROMPT = ('You are a safety inspector reviewing a photo from an industrial worksite. '
          'Count every person whose head is visible, even if small or partly occluded. '
          'For each, decide if they wear a hard hat (safety helmet). Caps, hoods or hair do not count as a hard hat. '
          'Answer ONLY with JSON: {"with_helmet": <int>, "without_helmet": <int>}')
key, workers = sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 4
mdl, extra, mt = MODELS[key]
sp = json.load(open('split.json'))
out_path = f'res_{key}.jsonl'
done = set()
if os.path.exists(out_path):
    for l in open(out_path): done.add(json.loads(l)['f'])
lock = threading.Lock()
def one(r):
    if r['f'] in done: return
    b64 = jpeg_b64('img/' + os.path.basename(r['f']))
    pl = {'model': mdl, 'messages': [{'role': 'user', 'content': [{'type': 'text', 'text': PROMPT}, {'type': 'image_url', 'image_url': {'url': 'data:image/jpeg;base64,' + b64}}]}], 'max_tokens': mt, 'temperature': 0}
    pl.update(extra)
    for att in range(6):
        try:
            out, dt = post(BASE + '/chat/completions', pl, timeout=300)
            msg = out['choices'][0]['message']; txt = msg.get('content') or ''
            m = re.findall(r'\{[^{}]*"with_helmet"[^{}]*\}', txt)
            parsed = json.loads(m[-1]) if m else None
            rec = {'f': r['f'], 'gt_head': r['head'], 'gt_helmet': r['helmet'], 'raw': txt[-400:], 'pred': parsed, 'lat': dt, 'usage': out.get('usage')}
            with lock:
                open(out_path, 'a').write(json.dumps(rec) + '\n')
            return
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503, 504): time.sleep(5 * (att + 1)); continue
            with lock: open(out_path, 'a').write(json.dumps({'f': r['f'], 'gt_head': r['head'], 'gt_helmet': r['helmet'], 'err': f'{e.code}', 'pred': None}) + '\n'); return
        except Exception as e:
            time.sleep(5 * (att + 1))
    with lock: open(out_path, 'a').write(json.dumps({'f': r['f'], 'gt_head': r['head'], 'gt_helmet': r['helmet'], 'err': 'timeout', 'pred': None}) + '\n')
t = time.time()
with cf.ThreadPoolExecutor(workers) as ex: list(ex.map(one, sp['test']))
print(key, 'listo en', round(time.time() - t), 's')
