import sys, os, json, io, base64, time, concurrent.futures as cf, urllib.error
import numpy as np
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from nv import post, BASE
M = 'nvidia/llama-nemotron-embed-vl-1b-v2'
def b64(im):
    b = io.BytesIO(); im.convert('RGB').save(b, 'JPEG', quality=90); return 'data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()
def emb_batch(ims):
    for att in range(6):
        try:
            out, _ = post(BASE + '/embeddings', {'model': M, 'input': [b64(i) for i in ims], 'encoding_format': 'float', 'input_type': 'passage'}, timeout=120)
            return [d['embedding'] for d in sorted(out['data'], key=lambda d: d['index'])]
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503, 504): time.sleep(4 * (att + 1)); continue
            raise
        except Exception: time.sleep(4 * (att + 1))
    raise RuntimeError('embedding failed')
if __name__ == '__main__':
    sp = json.load(open('split.json'))
    S = {s['filepath']: s for s in json.load(open('data/samples.json'))['samples']}
    items = []  # (split, kind, file, label, image)
    for split in ('train', 'test'):
        for r in sp[split]:
            im = Image.open('img/' + os.path.basename(r['f'])).convert('RGB'); W, H = im.size
            items.append((split, 'full', r['f'], int(r['head'] > 0), im))
            for d in S[r['f']]['ground_truth']['detections']:
                if d['label'] not in ('head', 'helmet'): continue
                x, y, w, h = d['bounding_box']
                cx, cy = (x + w / 2) * W, (y + h / 2) * H; s = max(w * W, h * H) * 1.6
                box = (max(0, cx - s / 2), max(0, cy - s / 2), min(W, cx + s / 2), min(H, cy + s / 2))
                if box[2] - box[0] < 8 or box[3] - box[1] < 8: continue
                items.append((split, 'crop', r['f'], int(d['label'] == 'head'), im.crop(box).resize((112, 112))))
    print('items', len(items), 'crops', sum(i[1] == 'crop' for i in items))
    B = 8; batches = [items[i:i + B] for i in range(0, len(items), B)]
    t = time.time()
    with cf.ThreadPoolExecutor(4) as ex: res = list(ex.map(lambda b: emb_batch([x[4] for x in b]), batches))
    E = np.array([e for r in res for e in r], dtype=np.float32)
    meta = [{'split': i[0], 'kind': i[1], 'f': i[2], 'y': i[3]} for i in items]
    np.save('emb.npy', E); json.dump(meta, open('emb_meta.json', 'w'))
    print('listo', E.shape, round(time.time() - t), 's')
