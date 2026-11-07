import json, os, statistics as st
from score import score, load
sp = json.load(open('split.json')); test = [r['f'] for r in sp['test']]
G = {r['f']: r for r in sp['test']}
probe = json.load(open('probe_per_image.json')); pres = json.load(open('probe_res.json'))
NAMES = {'nemotron-super-vl': 'Nemotron 3.5 Super VL 120B', 'nemotron-omni': 'Nemotron 3 Nano Omni 30B (razonamiento)', 'nemotron-bolt': 'Nemotron 3.5 Bolt E4B', 'llama-90b-vision': 'Llama 3.2 90B Vision'}
res = {'models': [], 'probe': pres, 'n_test': 200, 'n_train_img': 300, 'n_train_crops': 1914, 'n_test_crops': 1316, 'dataset_n': 5000, 'dataset_prev': 0.184}
flags = {}
for k, name in NAMES.items():
    if not os.path.exists(f'res_{k}.jsonl'): continue
    rows = load(k)
    if len(rows) < 200: res.setdefault('incomplete', []).append({'key': k, 'name': name, 'n': len(rows), 'lat_med': st.median([r['lat'] for r in rows if r.get('lat')]) if rows else None}); continue
    s = score(rows); s.update(key=k, name=name, kind='vlm'); res['models'].append(s)
    flags[k] = {r['f']: (not r.get('pred')) or int(r['pred'].get('without_helmet', 0) or 0) > 0 for r in rows}
flags['probe_full'] = {f: bool(probe[f]['full']) for f in test}
flags['probe_crop'] = {f: bool(probe[f]['crop']) for f in test}
def rates(fl):
    pos = [f for f in test if G[f]['head'] > 0]; neg = [f for f in test if G[f]['head'] == 0]
    return {'tpr': sum(fl[f] for f in pos) / len(pos), 'fpr': sum(fl[f] for f in neg) / len(neg)}
tri = {}
for k in flags: tri[k] = rates(flags[k])
if 'nemotron-super-vl' in flags:
    tri['vl_or_probe'] = rates({f: flags['nemotron-super-vl'][f] or flags['probe_full'][f] for f in test})
    tri['vl_and_probe'] = rates({f: flags['nemotron-super-vl'][f] and flags['probe_full'][f] for f in test})
res['triage'] = tri
res['audit'] = {'fp_reviewed': 25, 'label_misses_clear': ['hard_hat_workers1386.png', 'hard_hat_workers3675.png', 'hard_hat_workers4717.png']}
json.dump(res, open('results.json', 'w'), indent=1)
print(json.dumps({k: v for k, v in res.items() if k not in ('probe',)}, indent=1)[:3000])
