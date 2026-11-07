import base64, io, json, time, urllib.request, urllib.error, os
from PIL import Image
KEY=os.environ['NVIDIA_API_KEY']  # clave de build.nvidia.com, nunca en el repositorio
BASE='https://integrate.api.nvidia.com/v1'
def jpeg_b64(path, q=90):
    im=Image.open(path).convert('RGB'); b=io.BytesIO(); im.save(b,'JPEG',quality=q); return base64.b64encode(b.getvalue()).decode()
def post(url, payload, timeout=120):
    req=urllib.request.Request(url, data=json.dumps(payload).encode(), headers={'Authorization':'Bearer '+KEY,'Content-Type':'application/json','Accept':'application/json'})
    t=time.time()
    with urllib.request.urlopen(req, timeout=timeout) as r: return json.load(r), time.time()-t
def chat(model, prompt, img, max_tokens=300, temperature=0.0, sys_prompt=None, mode='openai'):
    b64=jpeg_b64(img)
    if mode=='openai':
        content=[{'type':'text','text':prompt},{'type':'image_url','image_url':{'url':'data:image/jpeg;base64,'+b64}}]
    else:
        content=f'{prompt} <img src="data:image/jpeg;base64,{b64}" />'
    msgs=([{'role':'system','content':sys_prompt}] if sys_prompt else [])+[{'role':'user','content':content}]
    return post(BASE+'/chat/completions', {'model':model,'messages':msgs,'max_tokens':max_tokens,'temperature':temperature,'stream':False})
