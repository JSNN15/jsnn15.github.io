import{r as fe,j as Fe,c as Jx,C as Ug,a as Dv}from"./index-D3DkHUDr.js";function Uv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="169",Kx={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qx={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nv=0,zd=1,Ov=2,$x=3,Fv=0,Ju=1,va=2,Ei=3,hr=0,Bn=1,ti=2,ur=0,gs=1,kd=2,Hd=3,Vd=4,Bv=5,Nr=100,zv=101,kv=102,Hv=103,Vv=104,Gv=200,Wv=201,Xv=202,qv=203,ou=204,au=205,Yv=206,jv=207,Zv=208,Jv=209,Kv=210,Qv=211,$v=212,e_=213,t_=214,lu=0,cu=1,uu=2,Ms=3,hu=4,fu=5,du=6,pu=7,ja=0,n_=1,i_=2,Gi=0,r_=1,s_=2,o_=3,op=4,a_=5,l_=6,c_=7,Gd="attached",u_="detached",Ku=300,fr=301,Or=302,ba=303,Ca=304,Co=306,Ra=1e3,gi=1001,Pa=1002,dn=1003,ap=1004,eS=1004,mo=1005,tS=1005,rn=1006,_a=1007,nS=1007,Hi=1008,iS=1008,Ti=1009,lp=1010,cp=1011,Mo=1012,Qu=1013,dr=1014,qn=1015,Ro=1016,$u=1017,eh=1018,ws=1020,up=35902,hp=1021,fp=1022,Pn=1023,dp=1024,pp=1025,vs=1026,Es=1027,th=1028,Za=1029,mp=1030,nh=1031,rS=1032,ih=1033,ya=33776,xa=33777,Sa=33778,Ma=33779,mu=35840,gu=35841,vu=35842,_u=35843,yu=36196,xu=37492,Su=37496,Mu=37808,wu=37809,Eu=37810,Au=37811,Tu=37812,bu=37813,Cu=37814,Ru=37815,Pu=37816,Iu=37817,Lu=37818,Du=37819,Uu=37820,Nu=37821,wa=36492,Ou=36494,Fu=36495,gp=36283,Bu=36284,zu=36285,ku=36286,h_=2200,f_=2201,d_=2202,Ia=2300,Hu=2301,nu=2302,fs=2400,ds=2401,La=2402,rh=2500,vp=2501,sS=0,oS=1,aS=2,p_=3200,m_=3201,lS=3202,cS=3203,Br=0,g_=1,ar="",mi="srgb",mr="srgb-linear",sh="display-p3",Ja="display-p3-linear",Da="linear",zt="srgb",Ua="rec709",Na="p3",uS=0,cs=7680,hS=7681,fS=7682,dS=7683,pS=34055,mS=34056,gS=5386,vS=512,_S=513,yS=514,xS=515,SS=516,MS=517,wS=518,Wd=519,v_=512,__=513,y_=514,_p=515,x_=516,S_=517,M_=518,w_=519,Oa=35044,ES=35048,AS=35040,TS=35045,bS=35049,CS=35041,RS=35046,PS=35050,IS=35042,LS="100",Xd="300 es",Vi=2e3,Fa=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ng=1234567;const _s=Math.PI/180,wo=180/Math.PI;function ii(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Zt(r,e,t){return Math.max(e,Math.min(t,r))}function yp(r,e){return(r%e+e)%e}function DS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function US(r,e,t){return r!==e?(t-r)/(e-r):0}function Ea(r,e,t){return(1-t)*r+t*e}function NS(r,e,t,n){return Ea(r,e,1-Math.exp(-t*n))}function OS(r,e=1){return e-Math.abs(yp(r,e*2)-e)}function FS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function BS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function zS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function kS(r,e){return r+Math.random()*(e-r)}function HS(r){return r*(.5-Math.random())}function VS(r){r!==void 0&&(Ng=r);let e=Ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GS(r){return r*_s}function WS(r){return r*wo}function XS(r){return(r&r-1)===0&&r!==0}function qS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function YS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jS(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),v=s((n-e)/2),y=a((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*v,c*h);break;case"YXY":r.set(u*v,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*v,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:_s,RAD2DEG:wo,generateUUID:ii,clamp:Zt,euclideanModulo:yp,mapLinear:DS,inverseLerp:US,lerp:Ea,damp:NS,pingpong:OS,smoothstep:FS,smootherstep:BS,randInt:zS,randFloat:kS,randFloatSpread:HS,seededRandom:VS,degToRad:GS,radToDeg:WS,isPowerOfTwo:XS,ceilPowerOfTwo:qS,floorPowerOfTwo:YS,setQuaternionFromProperEuler:jS,normalize:pt,denormalize:Fn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,i,s,a,c,u,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],v=n[5],y=n[8],M=i[0],x=i[3],_=i[6],E=i[1],w=i[4],T=i[7],O=i[2],P=i[5],L=i[8];return s[0]=a*M+c*E+u*O,s[3]=a*x+c*w+u*P,s[6]=a*_+c*T+u*L,s[1]=h*M+f*E+p*O,s[4]=h*x+f*w+p*P,s[7]=h*_+f*T+p*L,s[2]=m*M+v*E+y*O,s[5]=m*x+v*w+y*P,s[8]=m*_+v*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*a-c*h,m=c*u-f*s,v=h*s-a*u,y=t*p+n*m+i*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*a)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=v*M,e[7]=(n*u-h*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Bf.makeScale(e,t)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new dt;function A_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const ZS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function go(r,e){return new ZS[r](e)}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function T_(){const r=Ba("canvas");return r.style.display="block",r}const Og={};function iu(r){r in Og||(Og[r]=!0,console.warn(r))}function JS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function KS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function QS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fg=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bg=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[mr]:{transfer:Da,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[mi]:{transfer:zt,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ja]:{transfer:Da,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Bg),fromReference:r=>r.applyMatrix3(Fg)},[sh]:{transfer:zt,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Bg),fromReference:r=>r.applyMatrix3(Fg).convertLinearToSRGB()}},$S=new Set([mr,Ja]),Dt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$S.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ea[e].toReference,i=ea[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ea[r].primaries},getTransfer:function(r){return r===ar?Da:ea[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ea[e].luminanceCoefficients)}};function So(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class b_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Ba("canvas")),qs.width=e.width,qs.height=e.height;const n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=So(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(So(t[n]/255)*255):t[n]=So(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class ps{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(kf(i[a].image)):s.push(kf(i[a]))}else s=kf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function kf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tM=0;class qt extends qi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=gi,i=gi,s=rn,a=Hi,c=Pn,u=Ti,h=qt.DEFAULT_ANISOTROPY,f=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ii(),this.name="",this.source=new ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Ku;qt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],v=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,T=(v+1)/2,O=(_+1)/2,P=(f+m)/4,L=(p+M)/4,B=(y+x)/4;return w>T&&w>O?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=P/n,s=L/n):T>O?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=P/i,s=B/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=L/s,i=B/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ps(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends C_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends bi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new oh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class xp extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iM extends bi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new xp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[a+0],v=s[a+1],y=s[a+2],M=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=v,e[t+2]=y,e[t+3]=M;return}if(p!==M||u!==m||h!==v||f!==y){let x=1-c;const _=u*m+h*v+f*y+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,_*E);x=Math.sin(x*P)/O,c=Math.sin(c*P)/O}const T=c*E;if(u=u*x+m*T,h=h*x+v*T,f=f*x+y*T,p=p*x+M*T,x===1-c){const O=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=O,h*=O,f*=O,p*=O}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[a],m=s[a+1],v=s[a+2],y=s[a+3];return e[t]=c*y+f*p+u*v-h*m,e[t+1]=u*y+f*m+h*p-c*v,e[t+2]=h*y+f*v+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),v=u(i/2),y=u(s/2);switch(a){case"XYZ":this._x=m*f*p+h*v*y,this._y=h*v*p-m*f*y,this._z=h*f*y+m*v*p,this._w=h*f*p-m*v*y;break;case"YXZ":this._x=m*f*p+h*v*y,this._y=h*v*p-m*f*y,this._z=h*f*y-m*v*p,this._w=h*f*p+m*v*y;break;case"ZXY":this._x=m*f*p-h*v*y,this._y=h*v*p+m*f*y,this._z=h*f*y+m*v*p,this._w=h*f*p-m*v*y;break;case"ZYX":this._x=m*f*p-h*v*y,this._y=h*v*p+m*f*y,this._z=h*f*y-m*v*p,this._w=h*f*p+m*v*y;break;case"YZX":this._x=m*f*p+h*v*y,this._y=h*v*p+m*f*y,this._z=h*f*y-m*v*p,this._w=h*f*p-m*v*y;break;case"XZY":this._x=m*f*p-h*v*y,this._y=h*v*p-m*f*y,this._z=h*f*y+m*v*p,this._w=h*f*p+m*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(f-u)*v,this._y=(s-h)*v,this._z=(a-i)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(f-u)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(s+h)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(s-h)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(u+f)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(a-i)/v,this._x=(s+h)/v,this._y=(u+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*u,this._y=i*f+a*u+s*c-n*h,this._z=s*f+a*h+n*u-i*c,this._w=a*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),f=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hf.copy(this).projectOnVector(e),this.sub(Hf)}reflect(e){return this.sub(Hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hf=new D,zg=new zn;class pn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),ac.subVectors(this.max,ta),Ys.subVectors(e.a,ta),js.subVectors(e.b,ta),Zs.subVectors(e.c,ta),Tr.subVectors(js,Ys),br.subVectors(Zs,js),Kr.subVectors(Ys,Zs);let t=[0,-Tr.z,Tr.y,0,-br.z,br.y,0,-Kr.z,Kr.y,Tr.z,0,-Tr.x,br.z,0,-br.x,Kr.z,0,-Kr.x,-Tr.y,Tr.x,0,-br.y,br.x,0,-Kr.y,Kr.x,0];return!Vf(t,Ys,js,Zs,ac)||(t=[1,0,0,0,1,0,0,0,1],!Vf(t,Ys,js,Zs,ac))?!1:(lc.crossVectors(Tr,br),t=[lc.x,lc.y,lc.z],Vf(t,Ys,js,Zs,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tr=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,oc=new pn,Ys=new D,js=new D,Zs=new D,Tr=new D,br=new D,Kr=new D,ta=new D,ac=new D,lc=new D,Qr=new D;function Vf(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Qr.fromArray(r,s);const c=i.x*Math.abs(Qr.x)+i.y*Math.abs(Qr.y)+i.z*Math.abs(Qr.z),u=e.dot(Qr),h=t.dot(Qr),f=n.dot(Qr);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const rM=new pn,na=new D,Gf=new D;class mn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(na,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Gf)),this.expandByPoint(na.copy(e.center).sub(Gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nr=new D,Wf=new D,cc=new D,Cr=new D,Xf=new D,uc=new D,qf=new D;class Po{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wf.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Wf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cc),c=Cr.dot(this.direction),u=-Cr.dot(cc),h=Cr.lengthSq(),f=Math.abs(1-a*a);let p,m,v,y;if(f>0)if(p=a*u-c,m=a*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const M=1/f;p*=M,m*=M,v=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),v=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),v=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),v=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),v=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),v=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),v=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Wf).addScaledVector(cc,m),v}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const n=nr.dot(this.direction),i=nr.dot(nr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,i,s){Xf.subVectors(t,e),uc.subVectors(n,e),qf.crossVectors(Xf,uc);let a=this.direction.dot(qf),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Cr.subVectors(this.origin,e);const u=c*this.direction.dot(uc.crossVectors(Cr,uc));if(u<0)return null;const h=c*this.direction.dot(Xf.cross(Cr));if(h<0||u+h>a)return null;const f=-c*Cr.dot(qf);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,a,c,u,h,f,p,m,v,y,M,x){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,f,p,m,v,y,M,x)}set(e,t,n,i,s,a,c,u,h,f,p,m,v,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=v,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Js.setFromMatrixColumn(e,0).length(),s=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*f,v=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=v+y*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=y+v*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*f,v=u*p,y=h*f,M=h*p;t[0]=m+M*c,t[4]=y*c-v,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=v*c-y,t[6]=M+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*f,v=u*p,y=h*f,M=h*p;t[0]=m-M*c,t[4]=-a*p,t[8]=y+v*c,t[1]=v+y*c,t[5]=a*f,t[9]=M-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*f,v=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=y*h-v,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=v*h-y,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,v=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=y*p+v,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=v*p+y,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*u,v=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=a*f,t[9]=v*p-y,t[2]=y*p-v,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,oM)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Rr.crossVectors(n,$n),Rr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Rr.crossVectors(n,$n)),Rr.normalize(),hc.crossVectors($n,Rr),i[0]=Rr.x,i[4]=hc.x,i[8]=$n.x,i[1]=Rr.y,i[5]=hc.y,i[9]=$n.y,i[2]=Rr.z,i[6]=hc.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],v=n[13],y=n[2],M=n[6],x=n[10],_=n[14],E=n[3],w=n[7],T=n[11],O=n[15],P=i[0],L=i[4],B=i[8],k=i[12],b=i[1],C=i[5],X=i[9],Y=i[13],J=i[2],ie=i[6],j=i[10],he=i[14],z=i[3],oe=i[7],ee=i[11],ae=i[15];return s[0]=a*P+c*b+u*J+h*z,s[4]=a*L+c*C+u*ie+h*oe,s[8]=a*B+c*X+u*j+h*ee,s[12]=a*k+c*Y+u*he+h*ae,s[1]=f*P+p*b+m*J+v*z,s[5]=f*L+p*C+m*ie+v*oe,s[9]=f*B+p*X+m*j+v*ee,s[13]=f*k+p*Y+m*he+v*ae,s[2]=y*P+M*b+x*J+_*z,s[6]=y*L+M*C+x*ie+_*oe,s[10]=y*B+M*X+x*j+_*ee,s[14]=y*k+M*Y+x*he+_*ae,s[3]=E*P+w*b+T*J+O*z,s[7]=E*L+w*C+T*ie+O*oe,s[11]=E*B+w*X+T*j+O*ee,s[15]=E*k+w*Y+T*he+O*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],v=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*v-n*u*v)+M*(+t*u*v-t*h*m+s*a*m-i*a*v+i*h*f-s*u*f)+x*(+t*h*p-t*c*v-s*a*p+n*a*v+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*a*p-n*a*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],v=e[11],y=e[12],M=e[13],x=e[14],_=e[15],E=p*x*h-M*m*h+M*u*v-c*x*v-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*v+a*x*v+f*u*_-a*m*_,T=f*M*h-y*p*h+y*c*v-a*M*v-f*c*_+a*p*_,O=y*p*u-f*M*u-y*c*m+a*M*m+f*c*x-a*p*x,P=t*E+n*w+i*T+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(M*m*s-p*x*s-M*i*v+n*x*v+p*i*_-n*m*_)*L,e[2]=(c*x*s-M*u*s+M*i*h-n*x*h-c*i*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*v-n*u*v)*L,e[4]=w*L,e[5]=(f*x*s-y*m*s+y*i*v-t*x*v-f*i*_+t*m*_)*L,e[6]=(y*u*s-a*x*s-y*i*h+t*x*h+a*i*_-t*u*_)*L,e[7]=(a*m*s-f*u*s+f*i*h-t*m*h-a*i*v+t*u*v)*L,e[8]=T*L,e[9]=(y*p*s-f*M*s-y*n*v+t*M*v+f*n*_-t*p*_)*L,e[10]=(a*M*s-y*c*s+y*n*h-t*M*h-a*n*_+t*c*_)*L,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*v-t*c*v)*L,e[12]=O*L,e[13]=(f*M*i-y*p*i+y*n*m-t*M*m-f*n*x+t*p*x)*L,e[14]=(y*c*i-a*M*i-y*n*u+t*M*u+a*n*x-t*c*x)*L,e[15]=(a*p*i-f*c*i+f*n*u-t*p*u-a*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*a,0,h*u-i*c,f*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,f=a+a,p=c+c,m=s*h,v=s*f,y=s*p,M=a*f,x=a*p,_=c*p,E=u*h,w=u*f,T=u*p,O=n.x,P=n.y,L=n.z;return i[0]=(1-(M+_))*O,i[1]=(v+T)*O,i[2]=(y-w)*O,i[3]=0,i[4]=(v-T)*P,i[5]=(1-(m+_))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(y+w)*L,i[9]=(x-E)*L,i[10]=(1-(m+M))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Js.set(i[0],i[1],i[2]).length();const a=Js.set(i[4],i[5],i[6]).length(),c=Js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const h=1/s,f=1/a,p=1/c;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,t.setFromRotationMatrix(Mi),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=Vi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let v,y;if(c===Vi)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(c===Fa)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=Vi){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),m=(t+e)*h,v=(n+i)*f;let y,M;if(c===Vi)y=(a+s)*p,M=-2*p;else if(c===Fa)y=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Js=new D,Mi=new rt,sM=new D(0,0,0),oM=new D(1,1,1),Rr=new D,hc=new D,$n=new D,kg=new rt,Hg=new zn;class ri{constructor(e=0,t=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hg.setFromEuler(this),this.setFromQuaternion(Hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class ys{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const Vg=new D,Ks=new zn,ir=new rt,fc=new D,ia=new D,lM=new D,cM=new zn,Gg=new D(1,0,0),Wg=new D(0,1,0),Xg=new D(0,0,1),qg={type:"added"},uM={type:"removed"},Qs={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Ct extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,t=new ri,n=new zn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new dt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,t){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fc.copy(e):fc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(ia,fc,this.up):ir.lookAt(fc,ia,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),Ks.setFromRotationMatrix(ir),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uM),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),v=a(e.animations),y=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=i,n;function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new D,rr=new D,jf=new D,sr=new D,$s=new D,eo=new D,Yg=new D,Zf=new D,Jf=new D,Kf=new D,Qf=new xt,$f=new xt,ed=new xt;class Xn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),rr.subVectors(n,t),jf.subVectors(e,t);const a=wi.dot(wi),c=wi.dot(rr),u=wi.dot(jf),h=rr.dot(rr),f=rr.dot(jf),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,v=(h*u-c*f)*m,y=(a*f-c*u)*m;return s.set(1-v-y,y,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,sr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,sr.x),u.addScaledVector(a,sr.y),u.addScaledVector(c,sr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return Qf.setScalar(0),$f.setScalar(0),ed.setScalar(0),Qf.fromBufferAttribute(e,t),$f.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Qf,s.x),a.addScaledVector($f,s.y),a.addScaledVector(ed,s.z),a}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),rr.subVectors(e,t),wi.cross(rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),wi.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;$s.subVectors(i,n),eo.subVectors(s,n),Zf.subVectors(e,n);const u=$s.dot(Zf),h=eo.dot(Zf);if(u<=0&&h<=0)return t.copy(n);Jf.subVectors(e,i);const f=$s.dot(Jf),p=eo.dot(Jf);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector($s,a);Kf.subVectors(e,s);const v=$s.dot(Kf),y=eo.dot(Kf);if(y>=0&&v<=y)return t.copy(s);const M=v*h-u*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(eo,c);const x=f*y-v*p;if(x<=0&&p-f>=0&&v-y>=0)return Yg.subVectors(s,i),c=(p-f)/(p-f+(v-y)),t.copy(i).addScaledVector(Yg,c);const _=1/(x+M+m);return a=M*_,c=m*_,t.copy(n).addScaledVector($s,a).addScaledVector(eo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function td(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dt.workingColorSpace){if(e=yp(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=td(a,s,e+1/3),this.g=td(a,s,e),this.b=td(a,s,e-1/3)}return Dt.toWorkingColorSpace(this,i),this}setStyle(e,t=mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=R_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=zf(e.r),this.g=zf(e.g),this.b=zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Dt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Zt(Cn.r*255,0,255))*65536+Math.round(Zt(Cn.g*255,0,255))*256+Math.round(Zt(Cn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=mi){Dt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,n=Cn.g,i=Cn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(dc);const n=Ea(Pr.h,dc.h,t),i=Ea(Pr.s,dc.s,t),s=Ea(Pr.l,dc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new De;De.NAMES=R_;let hM=0;class Sn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=gs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ou&&(n.blendSrc=this.blendSrc),this.blendDst!==au&&(n.blendDst=this.blendDst),this.blendEquation!==Nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zr extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lr=fM();function fM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:c}}function Wn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Zt(r,-65504,65504),lr.floatView[0]=r;const e=lr.uint32View[0],t=e>>23&511;return lr.baseTable[t]+((e&8388607)>>lr.shiftTable[t])}function ma(r){const e=r>>10;return lr.uint32View[0]=lr.mantissaTable[lr.offsetTable[e]+(r&1023)]+lr.exponentTable[e],lr.floatView[0]}const dM={toHalfFloat:Wn,fromHalfFloat:ma},tn=new D,pc=new pe;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class pM extends Nt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class mM extends Nt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class gM extends Nt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class vM extends Nt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Sp extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _M extends Nt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Mp extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yM extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ma(this.array[e*this.itemSize]);return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=Wn(t),this}getY(e){let t=ma(this.array[e*this.itemSize+1]);return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=Wn(t),this}getZ(e){let t=ma(this.array[e*this.itemSize+2]);return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=Wn(t),this}getW(e){let t=ma(this.array[e*this.itemSize+3]);return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=Wn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(i),this.array[e+3]=Wn(s),this}}class je extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xM=0;const pi=new rt,nd=new Ct,to=new D,ei=new pn,ra=new pn,fn=new D;class mt extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A_(e)?Mp:Sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];ra.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(ei.min,ra.min),ei.expandByPoint(fn),fn.addVectors(ei.max,ra.max),ei.expandByPoint(fn)):(ei.expandByPoint(ra.min),ei.expandByPoint(ra.max))}ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)fn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)fn.fromBufferAttribute(c,h),u&&(to.fromBufferAttribute(e,h),fn.add(to)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let B=0;B<n.count;B++)c[B]=new D,u[B]=new D;const h=new D,f=new D,p=new D,m=new pe,v=new pe,y=new pe,M=new D,x=new D;function _(B,k,b){h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,k),p.fromBufferAttribute(n,b),m.fromBufferAttribute(s,B),v.fromBufferAttribute(s,k),y.fromBufferAttribute(s,b),f.sub(h),p.sub(h),v.sub(m),y.sub(m);const C=1/(v.x*y.y-y.x*v.y);isFinite(C)&&(M.copy(f).multiplyScalar(y.y).addScaledVector(p,-v.y).multiplyScalar(C),x.copy(p).multiplyScalar(v.x).addScaledVector(f,-y.x).multiplyScalar(C),c[B].add(M),c[k].add(M),c[b].add(M),u[B].add(x),u[k].add(x),u[b].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,k=E.length;B<k;++B){const b=E[B],C=b.start,X=b.count;for(let Y=C,J=C+X;Y<J;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new D,T=new D,O=new D,P=new D;function L(B){O.fromBufferAttribute(i,B),P.copy(O);const k=c[B];w.copy(k),w.sub(O.multiplyScalar(O.dot(k))).normalize(),T.crossVectors(P,k);const C=T.dot(u[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,C)}for(let B=0,k=E.length;B<k;++B){const b=E[B],C=b.start,X=b.count;for(let Y=C,J=C+X;Y<J;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,v=e.count;m<v;m+=3){const y=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,v=t.count;m<v;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let v=0,y=0;for(let M=0,x=u.length;M<x;M++){c.isInterleavedBufferAttribute?v=u[M]*c.data.stride+c.offset:v=u[M]*f;for(let _=0;_<f;_++)m[y++]=h[v++]}return new Nt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],v=e(m,n);u.push(v)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const v=h[p];f.push(v.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,v=p.length;m<v;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new rt,$r=new Po,mc=new mn,Zg=new D,gc=new D,vc=new D,_c=new D,id=new D,yc=new D,Jg=new D,xc=new D;class Qt extends Ct{constructor(e=new mt,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){yc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(id.fromBufferAttribute(p,e),a?yc.addScaledVector(id,f):yc.addScaledVector(id.sub(t),f))}t.add(yc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(mc.containsPoint($r.origin)===!1&&($r.intersectSphere(mc,Zg)===null||$r.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(jg.copy(s).invert(),$r.copy(e.ray).applyMatrix4(jg),!(n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,v=s.drawRange;if(c!==null)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,v.start),w=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let T=E,O=w;T<O;T+=3){const P=c.getX(T),L=c.getX(T+1),B=c.getX(T+2);i=Sc(this,_,e,n,h,f,p,P,L,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let x=y,_=M;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),T=c.getX(x+2);i=Sc(this,a,e,n,h,f,p,E,w,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,v.start),w=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let T=E,O=w;T<O;T+=3){const P=T,L=T+1,B=T+2;i=Sc(this,_,e,n,h,f,p,P,L,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,v.start),M=Math.min(u.count,v.start+v.count);for(let x=y,_=M;x<_;x+=3){const E=x,w=x+1,T=x+2;i=Sc(this,a,e,n,h,f,p,E,w,T),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function SM(r,e,t,n,i,s,a,c){let u;if(e.side===Bn?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===hr,c),u===null)return null;xc.copy(c),xc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(xc);return h<t.near||h>t.far?null:{distance:h,point:xc.clone(),object:r}}function Sc(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,gc),r.getVertexPosition(u,vc),r.getVertexPosition(h,_c);const f=SM(r,e,t,n,gc,vc,_c,Jg);if(f){const p=new D;Xn.getBarycoord(Jg,gc,vc,_c,p),i&&(f.uv=Xn.getInterpolatedAttribute(i,c,u,h,p,new pe)),s&&(f.uv1=Xn.getInterpolatedAttribute(s,c,u,h,p,new pe)),a&&(f.normal=Xn.getInterpolatedAttribute(a,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};Xn.getNormal(gc,vc,_c,m.normal),f.face=m,f.barycoord=p}return f}class Ts extends mt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],p=[];let m=0,v=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(p,2));function y(M,x,_,E,w,T,O,P,L,B,k){const b=T/L,C=O/B,X=T/2,Y=O/2,J=P/2,ie=L+1,j=B+1;let he=0,z=0;const oe=new D;for(let ee=0;ee<j;ee++){const ae=ee*C-Y;for(let Re=0;Re<ie;Re++){const Ue=Re*b-X;oe[M]=Ue*E,oe[x]=ae*w,oe[_]=J,h.push(oe.x,oe.y,oe.z),oe[M]=0,oe[x]=0,oe[_]=P>0?1:-1,f.push(oe.x,oe.y,oe.z),p.push(Re/L),p.push(1-ee/B),he+=1}}for(let ee=0;ee<B;ee++)for(let ae=0;ae<L;ae++){const Re=m+ae+ie*ee,Ue=m+ae+ie*(ee+1),ne=m+(ae+1)+ie*(ee+1),me=m+(ae+1)+ie*ee;u.push(Re,Ue,me),u.push(Ue,ne,me),z+=6}c.addGroup(v,z,k),v+=z,m+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(r){const e={};for(let t=0;t<r.length;t++){const n=Eo(r[t]);for(const i in n)e[i]=n[i]}return e}function MM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function P_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Vu={clone:Eo,merge:On};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=MM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ka extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new D,Kg=new pe,Qg=new pe;class nn extends Ka{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Kg,Qg),t.subVectors(Qg,Kg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class I_ extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(no,io,e,t);i.layers=this.layers,this.add(i);const s=new nn(no,io,e,t);s.layers=this.layers,this.add(s);const a=new nn(no,io,e,t);a.layers=this.layers,this.add(a);const c=new nn(no,io,e,t);c.layers=this.layers,this.add(c);const u=new nn(no,io,e,t);u.layers=this.layers,this.add(u);const h=new nn(no,io,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Qa extends qt{constructor(e,t,n,i,s,a,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,i,s,a,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ts(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:ur});s.uniforms.tEquirect.value=t;const a=new Qt(i,s),c=t.minFilter;return t.minFilter===Hi&&(t.minFilter=rn),new I_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const rd=new D,AM=new D,TM=new dt;class Ur{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rd.subVectors(n,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||TM.getNormalMatrix(e),i=this.coplanarPoint(rd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new mn,Mc=new D;class $a{constructor(e=new Ur,t=new Ur,n=new Ur,i=new Ur,s=new Ur,a=new Ur){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],v=i[8],y=i[9],M=i[10],x=i[11],_=i[12],E=i[13],w=i[14],T=i[15];if(n[0].setComponents(u-s,m-h,x-v,T-_).normalize(),n[1].setComponents(u+s,m+h,x+v,T+_).normalize(),n[2].setComponents(u+a,m+f,x+y,T+E).normalize(),n[3].setComponents(u-a,m-f,x-y,T-E).normalize(),n[4].setComponents(u-c,m-p,x-M,T-w).normalize(),t===Vi)n[5].setComponents(u+c,m+p,x+M,T+w).normalize();else if(t===Fa)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mc.x=i.normal.x>0?e.max.x:e.min.x,Mc.y=i.normal.y>0?e.max.y:e.min.y,Mc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=r.SHORT;else if(h instanceof Uint32Array)v=r.UNSIGNED_INT;else if(h instanceof Int32Array)v=r.INT;else if(h instanceof Int8Array)v=r.BYTE;else if(h instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((v,y)=>v.start-y.start);let m=0;for(let v=1;v<p.length;v++){const y=p[m],M=p[v];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let v=0,y=p.length;v<y;v++){const M=p[v];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:a}}class Io extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,v=[],y=[],M=[],x=[];for(let _=0;_<f;_++){const E=_*m-a;for(let w=0;w<h;w++){const T=w*p-s;y.push(T,-E,0),M.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,T=E+h*(_+1),O=E+1+h*(_+1),P=E+1+h*_;v.push(w,T,P),v.push(T,O,P)}this.setIndex(v),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(M,3)),this.setAttribute("uv",new je(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.widthSegments,e.heightSegments)}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:CM,alphahash_pars_fragment:RM,alphamap_fragment:PM,alphamap_pars_fragment:IM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:NM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:kM,iridescence_fragment:HM,bumpmap_pars_fragment:VM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:jM,color_pars_vertex:ZM,color_vertex:JM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:$M,displacementmap_pars_vertex:e1,displacementmap_vertex:t1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:r1,colorspace_pars_fragment:s1,envmap_fragment:o1,envmap_common_pars_fragment:a1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:x1,envmap_vertex:u1,fog_vertex:h1,fog_pars_vertex:f1,fog_fragment:d1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:v1,lights_lambert_pars_fragment:_1,lights_pars_begin:y1,lights_toon_fragment:S1,lights_toon_pars_fragment:M1,lights_phong_fragment:w1,lights_phong_pars_fragment:E1,lights_physical_fragment:A1,lights_physical_pars_fragment:T1,lights_fragment_begin:b1,lights_fragment_maps:C1,lights_fragment_end:R1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:D1,map_fragment:U1,map_pars_fragment:N1,map_particle_fragment:O1,map_particle_pars_fragment:F1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphinstance_vertex:k1,morphcolor_vertex:H1,morphnormal_vertex:V1,morphtarget_pars_vertex:G1,morphtarget_vertex:W1,normal_fragment_begin:X1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:j1,normal_vertex:Z1,normalmap_pars_fragment:J1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:ew,opaque_fragment:tw,packing:nw,premultiplied_alpha_fragment:iw,project_vertex:rw,dithering_fragment:sw,dithering_pars_fragment:ow,roughnessmap_fragment:aw,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:uw,shadowmap_vertex:hw,shadowmask_pars_fragment:fw,skinbase_vertex:dw,skinning_pars_vertex:pw,skinning_vertex:mw,skinnormal_vertex:gw,specularmap_fragment:vw,specularmap_pars_fragment:_w,tonemapping_fragment:yw,tonemapping_pars_fragment:xw,transmission_fragment:Sw,transmission_pars_fragment:Mw,uv_pars_fragment:ww,uv_pars_vertex:Ew,uv_vertex:Aw,worldpos_vertex:Tw,background_vert:bw,background_frag:Cw,backgroundCube_vert:Rw,backgroundCube_frag:Pw,cube_vert:Iw,cube_frag:Lw,depth_vert:Dw,depth_frag:Uw,distanceRGBA_vert:Nw,distanceRGBA_frag:Ow,equirect_vert:Fw,equirect_frag:Bw,linedashed_vert:zw,linedashed_frag:kw,meshbasic_vert:Hw,meshbasic_frag:Vw,meshlambert_vert:Gw,meshlambert_frag:Ww,meshmatcap_vert:Xw,meshmatcap_frag:qw,meshnormal_vert:Yw,meshnormal_frag:jw,meshphong_vert:Zw,meshphong_frag:Jw,meshphysical_vert:Kw,meshphysical_frag:Qw,meshtoon_vert:$w,meshtoon_frag:eE,points_vert:tE,points_frag:nE,shadow_vert:iE,shadow_frag:rE,sprite_vert:sE,sprite_frag:oE},Te={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ai={basic:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new De(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:On([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:On([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:On([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new De(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:On([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:On([Te.points,Te.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:On([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:On([Te.common,Te.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:On([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:On([Te.sprite,Te.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:On([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:On([Te.lights,Te.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ai.physical={uniforms:On([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const wc={r:0,b:0,g:0},ts=new ri,aE=new rt;function lE(r,e,t,n,i,s,a){const c=new De(0);let u=s===!0?0:1,h,f,p=null,m=0,v=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function M(E){let w=!1;const T=y(E);T===null?_(c,u):T&&T.isColor&&(_(T,1),w=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,w){const T=y(w);T&&(T.isCubeTexture||T.mapping===Co)?(f===void 0&&(f=new Qt(new Ts(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Eo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),ts.copy(w.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(ts)),f.material.toneMapped=Dt.getTransfer(T.colorSpace)!==zt,(p!==T||m!==T.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,v=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Qt(new Io(2,2),new vi({name:"BackgroundMaterial",uniforms:Eo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(T.colorSpace)!==zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,p=T,m=T.version,v=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(wc,P_(r)),n.buffers.color.setClear(wc.r,wc.g,wc.b,w,a)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:M,addToRenderList:x}}function cE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function c(b,C,X,Y,J){let ie=!1;const j=p(Y,X,C);s!==j&&(s=j,h(s.object)),ie=v(b,Y,X,J),ie&&y(b,Y,X,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,T(b,C,X,Y),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function u(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,C,X){const Y=X.wireframe===!0;let J=n[b.id];J===void 0&&(J={},n[b.id]=J);let ie=J[C.id];ie===void 0&&(ie={},J[C.id]=ie);let j=ie[Y];return j===void 0&&(j=m(u()),ie[Y]=j),j}function m(b){const C=[],X=[],Y=[];for(let J=0;J<t;J++)C[J]=0,X[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:X,attributeDivisors:Y,object:b,attributes:{},index:null}}function v(b,C,X,Y){const J=s.attributes,ie=C.attributes;let j=0;const he=X.getAttributes();for(const z in he)if(he[z].location>=0){const ee=J[z];let ae=ie[z];if(ae===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;j++}return s.attributesNum!==j||s.index!==Y}function y(b,C,X,Y){const J={},ie=C.attributes;let j=0;const he=X.getAttributes();for(const z in he)if(he[z].location>=0){let ee=ie[z];ee===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),J[z]=ae,j++}s.attributes=J,s.attributesNum=j,s.index=Y}function M(){const b=s.newAttributes;for(let C=0,X=b.length;C<X;C++)b[C]=0}function x(b){_(b,0)}function _(b,C){const X=s.newAttributes,Y=s.enabledAttributes,J=s.attributeDivisors;X[b]=1,Y[b]===0&&(r.enableVertexAttribArray(b),Y[b]=1),J[b]!==C&&(r.vertexAttribDivisor(b,C),J[b]=C)}function E(){const b=s.newAttributes,C=s.enabledAttributes;for(let X=0,Y=C.length;X<Y;X++)C[X]!==b[X]&&(r.disableVertexAttribArray(X),C[X]=0)}function w(b,C,X,Y,J,ie,j){j===!0?r.vertexAttribIPointer(b,C,X,J,ie):r.vertexAttribPointer(b,C,X,Y,J,ie)}function T(b,C,X,Y){M();const J=Y.attributes,ie=X.getAttributes(),j=C.defaultAttributeValues;for(const he in ie){const z=ie[he];if(z.location>=0){let oe=J[he];if(oe===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const ee=oe.normalized,ae=oe.itemSize,Re=e.get(oe);if(Re===void 0)continue;const Ue=Re.buffer,ne=Re.type,me=Re.bytesPerElement,be=ne===r.INT||ne===r.UNSIGNED_INT||oe.gpuType===Qu;if(oe.isInterleavedBufferAttribute){const Ae=oe.data,tt=Ae.stride,nt=oe.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)_(z.location+Ze,Ae.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)x(z.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<z.locationSize;Ze++)w(z.location+Ze,ae/z.locationSize,ne,ee,tt*me,(nt+ae/z.locationSize*Ze)*me,be)}else{if(oe.isInstancedBufferAttribute){for(let Ae=0;Ae<z.locationSize;Ae++)_(z.location+Ae,oe.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)x(z.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Ae=0;Ae<z.locationSize;Ae++)w(z.location+Ae,ae/z.locationSize,ne,ee,ae*me,ae/z.locationSize*Ae*me,be)}}else if(j!==void 0){const ee=j[he];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(z.location,ee);break;case 3:r.vertexAttrib3fv(z.location,ee);break;case 4:r.vertexAttrib4fv(z.location,ee);break;default:r.vertexAttrib1fv(z.location,ee)}}}}E()}function O(){B();for(const b in n){const C=n[b];for(const X in C){const Y=C[X];for(const J in Y)f(Y[J].object),delete Y[J];delete C[X]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const X in C){const Y=C[X];for(const J in Y)f(Y[J].object),delete Y[J];delete C[X]}delete n[b.id]}function L(b){for(const C in n){const X=n[C];if(X[b.id]===void 0)continue;const Y=X[b.id];for(const J in Y)f(Y[J].object),delete Y[J];delete X[b.id]}}function B(){k(),a=!0,s!==i&&(s=i,h(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:B,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function uE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let v=0;for(let y=0;y<p;y++)v+=f[y];t.update(v,n,1)}function u(h,f,p,m){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<h.length;y++)a(h[y],f[y],m[y]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let M=0;M<p;M++)y+=f[M];for(let M=0;M<m.length;M++)t.update(y,n,m[M])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function hE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Pn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const B=L===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ti&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qn&&!B)}function u(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=y>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:v,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:O,maxSamples:P}}function fE(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ur,c=new dt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const v=p.length!==0||m||n!==0||i;return i=m,n=p.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,v){const y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let T=_.clippingState||null;u.value=T,T=f(y,m,w,v);for(let O=0;O!==w;++O)T[O]=t[O];_.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,v,y){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=v+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,T=v;w!==M;++w,T+=4)a.copy(p[w]).applyMatrix4(E,c),a.normal.toArray(x,T),x[T+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function dE(r){let e=new WeakMap;function t(a,c){return c===ba?a.mapping=fr:c===Ca&&(a.mapping=Or),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===ba||c===Ca)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new L_(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bs extends Ka{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vo=4,$g=[.125,.215,.35,.446,.526,.582],hs=20,sd=new bs,e0=new De;let od=null,ad=0,ld=0,cd=!1;const us=(1+Math.sqrt(5))/2,ro=1/us,t0=[new D(-us,ro,0),new D(us,ro,0),new D(-ro,0,us),new D(ro,0,us),new D(0,us,-ro),new D(0,us,ro),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class qd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ro,format:Pn,colorSpace:mr,depthBuffer:!1},i=n0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pE(s)),this._blurMaterial=mE(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,sd)}_sceneToCubeUV(e,t,n,i){const c=new nn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(e0),f.toneMapping=Gi,f.autoClear=!1;const v=new zr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new Qt(new Ts,v);let M=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,M=!0):(v.color.copy(e0),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;Ec(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),M&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Ec(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,sd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=t0[(i-s-1)%t0.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Qt(this._lodPlanes[i],h),m=h.uniforms,v=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*hs-1),M=s/y,x=isFinite(s)?1+Math.floor(f*M):hs;x>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${hs}`);const _=[];let E=0;for(let L=0;L<hs;++L){const B=L/M,k=Math.exp(-B*B/2);_.push(k),L===0?E+=k:L<x&&(E+=2*k)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const T=this._sizeLods[i],O=3*T*(i>w-vo?i-w+vo:0),P=4*(this._cubeSize-T);Ec(t,O,P,3*T,2*T),u.setRenderTarget(t),u.render(p,sd)}}function pE(r){const e=[],t=[],n=[];let i=r;const s=r-vo+1+$g.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>r-vo?u=$g[a-r+vo-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],v=6,y=6,M=3,x=2,_=1,E=new Float32Array(M*y*v),w=new Float32Array(x*y*v),T=new Float32Array(_*y*v);for(let P=0;P<v;P++){const L=P%3*2/3-1,B=P>2?0:-1,k=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];E.set(k,M*y*P),w.set(m,x*y*P);const b=[P,P,P,P,P,P];T.set(b,_*y*P)}const O=new mt;O.setAttribute("position",new Nt(E,M)),O.setAttribute("uv",new Nt(w,x)),O.setAttribute("faceIndex",new Nt(T,_)),e.push(O),i>vo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function n0(r,e,t){const n=new bi(r,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ec(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function mE(r,e,t){const n=new Float32Array(hs),i=new D(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function i0(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function r0(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function wp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gE(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===ba||u===Ca,f=u===fr||u===Or;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new qd(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return h&&v&&v.height>0||f&&v&&i(v)?(t===null&&(t=new qd(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&iu("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _E(r,e,t,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const M=m.morphAttributes[y];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}m.removeEventListener("dispose",a),delete i[m.id];const v=s.get(m);v&&(e.remove(v),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const v=p.morphAttributes;for(const y in v){const M=v[y];for(let x=0,_=M.length;x<_;x++)e.update(M[x],r.ARRAY_BUFFER)}}function h(p){const m=[],v=p.index,y=p.attributes.position;let M=0;if(v!==null){const E=v.array;M=v.version;for(let w=0,T=E.length;w<T;w+=3){const O=E[w+0],P=E[w+1],L=E[w+2];m.push(O,P,P,L,L,O)}}else if(y!==void 0){const E=y.array;M=y.version;for(let w=0,T=E.length/3-1;w<T;w+=3){const O=w+0,P=w+1,L=w+2;m.push(O,P,P,L,L,O)}}else return;const x=new(A_(m)?Mp:Sp)(m,1);x.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const v=p.index;v!==null&&m.version<v.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function yE(r,e,t){let n;function i(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,v){r.drawElements(n,v,s,m*a),t.update(v,n,1)}function h(m,v,y){y!==0&&(r.drawElementsInstanced(n,v,s,m*a,y),t.update(v,n,y))}function f(m,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=v[_];t.update(x,n,1)}function p(m,v,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/a,v[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,s,m,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=v[E];for(let E=0;E<M.length;E++)t.update(_,n,M[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function xE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function SE(r,e,t){const n=new WeakMap,i=new xt;function s(a,c,u){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let k=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",k)};m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;v===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let T=c.attributes.position.count*w,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*O*4*p),L=new oh(P,T,O,p);L.type=qn,L.needsUpdate=!0;const B=w*4;for(let b=0;b<p;b++){const C=x[b],X=_[b],Y=E[b],J=T*O*4*b;for(let ie=0;ie<C.count;ie++){const j=ie*B;v===!0&&(i.fromBufferAttribute(C,ie),P[J+j+0]=i.x,P[J+j+1]=i.y,P[J+j+2]=i.z,P[J+j+3]=0),y===!0&&(i.fromBufferAttribute(X,ie),P[J+j+4]=i.x,P[J+j+5]=i.y,P[J+j+6]=i.z,P[J+j+7]=0),M===!0&&(i.fromBufferAttribute(Y,ie),P[J+j+8]=i.x,P[J+j+9]=i.y,P[J+j+10]=i.z,P[J+j+11]=Y.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new pe(T,O)},n.set(c,m),c.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let v=0;for(let M=0;M<h.length;M++)v+=h[M];const y=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function ME(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Ep extends qt{constructor(e,t,n,i,s,a,c,u,h,f=vs){if(f!==vs&&f!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===vs&&(n=dr),n===void 0&&f===Es&&(n=ws),super(null,i,s,a,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:dn,this.minFilter=u!==void 0?u:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const U_=new qt,s0=new Ep(1,1),N_=new oh,O_=new xp,F_=new Qa,o0=[],a0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function Lo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=o0[i];if(s===void 0&&(s=new Float32Array(i),o0[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ah(r,e){let t=a0[e];t===void 0&&(t=new Int32Array(e),a0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function EE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function TE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function bE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;u0.set(n),r.uniformMatrix2fv(this.addr,!1,u0),ln(t,n)}}function CE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;c0.set(n),r.uniformMatrix3fv(this.addr,!1,c0),ln(t,n)}}function RE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;l0.set(n),r.uniformMatrix4fv(this.addr,!1,l0),ln(t,n)}}function PE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function IE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function LE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function DE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function UE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function NE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function OE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function FE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function BE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(s0.compareFunction=_p,s=s0):s=U_,t.setTexture2D(e||s,i)}function zE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||O_,i)}function kE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||F_,i)}function HE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||N_,i)}function VE(r){switch(r){case 5126:return wE;case 35664:return EE;case 35665:return AE;case 35666:return TE;case 35674:return bE;case 35675:return CE;case 35676:return RE;case 5124:case 35670:return PE;case 35667:case 35671:return IE;case 35668:case 35672:return LE;case 35669:case 35673:return DE;case 5125:return UE;case 36294:return NE;case 36295:return OE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return HE}}function GE(r,e){r.uniform1fv(this.addr,e)}function WE(r,e){const t=Lo(e,this.size,2);r.uniform2fv(this.addr,t)}function XE(r,e){const t=Lo(e,this.size,3);r.uniform3fv(this.addr,t)}function qE(r,e){const t=Lo(e,this.size,4);r.uniform4fv(this.addr,t)}function YE(r,e){const t=Lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jE(r,e){const t=Lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ZE(r,e){const t=Lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function JE(r,e){r.uniform1iv(this.addr,e)}function KE(r,e){r.uniform2iv(this.addr,e)}function QE(r,e){r.uniform3iv(this.addr,e)}function $E(r,e){r.uniform4iv(this.addr,e)}function eA(r,e){r.uniform1uiv(this.addr,e)}function tA(r,e){r.uniform2uiv(this.addr,e)}function nA(r,e){r.uniform3uiv(this.addr,e)}function iA(r,e){r.uniform4uiv(this.addr,e)}function rA(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||U_,s[a])}function sA(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||O_,s[a])}function oA(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||F_,s[a])}function aA(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||N_,s[a])}function lA(r){switch(r){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return qE;case 35674:return YE;case 35675:return jE;case 35676:return ZE;case 5124:case 35670:return JE;case 35667:case 35671:return KE;case 35668:case 35672:return QE;case 35669:case 35673:return $E;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return aA}}class cA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VE(t.type)}}class uA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lA(t.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function h0(r,e){r.seq.push(e),r.map[e.id]=e}function fA(r,e,t){const n=r.name,i=n.length;for(ud.lastIndex=0;;){const s=ud.exec(n),a=ud.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){h0(t,h===void 0?new cA(c,r,e):new uA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new hA(c),h0(t,p)),t=p}}}class ru{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);fA(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function f0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const dA=37297;let pA=0;function mA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function gA(r){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(r);let n;switch(e===t?n="":e===Na&&t===Ua?n="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Na&&(n="LinearSRGBToLinearDisplayP3"),r){case mr:case Ja:return[n,"LinearTransferOETF"];case mi:case sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function d0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mA(r.getShaderSource(e),a)}else return i}function vA(r,e){const t=gA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _A(r,e){let t;switch(e){case r_:t="Linear";break;case s_:t="Reinhard";break;case o_:t="Cineon";break;case op:t="ACESFilmic";break;case l_:t="AgX";break;case c_:t="Neutral";break;case a_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ac=new D;function yA(){Dt.getLuminanceCoefficients(Ac);const r=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function SA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function ga(r){return r!==""}function p0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(r){return r.replace(wA,AA)}const EA=new Map;function AA(r,e){let t=gt[e];if(t===void 0){const n=EA.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yd(t)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(r){return r.replace(TA,bA)}function bA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function v0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===va?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function RA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case Or:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function IA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function LA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function DA(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=CA(t),h=RA(t),f=PA(t),p=IA(t),m=LA(t),v=xA(t),y=SA(s),M=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ga).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ga).join(`
`),_.length>0&&(_+=`
`)):(x=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),_=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?_A("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,vA("linearToOutputTexel",t.outputColorSpace),yA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),a=Yd(a),a=p0(a,t),a=m0(a,t),c=Yd(c),c=p0(c,t),c=m0(c,t),a=g0(a),c=g0(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+a,T=E+_+c,O=f0(i,i.VERTEX_SHADER,w),P=f0(i,i.FRAGMENT_SHADER,T);i.attachShader(M,O),i.attachShader(M,P),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function L(C){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(M).trim(),Y=i.getShaderInfoLog(O).trim(),J=i.getShaderInfoLog(P).trim();let ie=!0,j=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,O,P);else{const he=d0(i,O,"vertex"),z=d0(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+he+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||J==="")&&(j=!1);j&&(C.diagnostics={runnable:ie,programLog:X,vertexShader:{log:Y,prefix:x},fragmentShader:{log:J,prefix:_}})}i.deleteShader(O),i.deleteShader(P),B=new ru(i,M),k=MA(i,M)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let k;this.getAttributes=function(){return k===void 0&&L(this),k};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,dA)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let UA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new OA(e),t.set(e,n)),n}}class OA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function FA(r,e,t,n,i,s,a){const c=new ys,u=new NA,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,v=i.vertexTextures;let y=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function _(b,C,X,Y,J){const ie=Y.fog,j=J.geometry,he=b.isMeshStandardMaterial?Y.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||he),oe=z&&z.mapping===Co?z.image.height:null,ee=M[b.type];b.precision!==null&&(y=i.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Re=ae!==void 0?ae.length:0;let Ue=0;j.morphAttributes.position!==void 0&&(Ue=1),j.morphAttributes.normal!==void 0&&(Ue=2),j.morphAttributes.color!==void 0&&(Ue=3);let ne,me,be,Ae;if(ee){const gn=Ai[ee];ne=gn.vertexShader,me=gn.fragmentShader}else ne=b.vertexShader,me=b.fragmentShader,u.update(b),be=u.getVertexShaderID(b),Ae=u.getFragmentShaderID(b);const tt=r.getRenderTarget(),nt=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,Ce=!!b.map,ue=!!b.matcap,U=!!z,we=!!b.aoMap,xe=!!b.lightMap,ve=!!b.bumpMap,Se=!!b.normalMap,Je=!!b.displacementMap,Ie=!!b.emissiveMap,N=!!b.metalnessMap,R=!!b.roughnessMap,Z=b.anisotropy>0,le=b.clearcoat>0,de=b.dispersion>0,ce=b.iridescence>0,Ye=b.sheen>0,Ee=b.transmission>0,ke=Z&&!!b.anisotropyMap,St=le&&!!b.clearcoatMap,_e=le&&!!b.clearcoatNormalMap,He=le&&!!b.clearcoatRoughnessMap,at=ce&&!!b.iridescenceMap,lt=ce&&!!b.iridescenceThicknessMap,Ve=Ye&&!!b.sheenColorMap,Mt=Ye&&!!b.sheenRoughnessMap,ut=!!b.specularMap,Ot=!!b.specularColorMap,V=!!b.specularIntensityMap,Be=Ee&&!!b.transmissionMap,re=Ee&&!!b.thicknessMap,ge=!!b.gradientMap,Ne=!!b.alphaMap,ze=b.alphaTest>0,wt=!!b.alphaHash,Gt=!!b.extensions;let Mn=Gi;b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Mn=r.toneMapping);const Et={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:me,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:nt,instancingColor:nt&&J.instanceColor!==null,instancingMorph:nt&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:mr,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:ue,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:oe,aoMap:we,lightMap:xe,bumpMap:ve,normalMap:Se,displacementMap:v&&Je,emissiveMap:Ie,normalMapObjectSpace:Se&&b.normalMapType===g_,normalMapTangentSpace:Se&&b.normalMapType===Br,metalnessMap:N,roughnessMap:R,anisotropy:Z,anisotropyMap:ke,clearcoat:le,clearcoatMap:St,clearcoatNormalMap:_e,clearcoatRoughnessMap:He,dispersion:de,iridescence:ce,iridescenceMap:at,iridescenceThicknessMap:lt,sheen:Ye,sheenColorMap:Ve,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:Ot,specularIntensityMap:V,transmission:Ee,transmissionMap:Be,thicknessMap:re,gradientMap:ge,opaque:b.transparent===!1&&b.blending===gs&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ze,alphaHash:wt,combine:b.combine,mapUv:Ce&&x(b.map.channel),aoMapUv:we&&x(b.aoMap.channel),lightMapUv:xe&&x(b.lightMap.channel),bumpMapUv:ve&&x(b.bumpMap.channel),normalMapUv:Se&&x(b.normalMap.channel),displacementMapUv:Je&&x(b.displacementMap.channel),emissiveMapUv:Ie&&x(b.emissiveMap.channel),metalnessMapUv:N&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:ke&&x(b.anisotropyMap.channel),clearcoatMapUv:St&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(b.sheenRoughnessMap.channel),specularMapUv:ut&&x(b.specularMap.channel),specularColorMapUv:Ot&&x(b.specularColorMap.channel),specularIntensityMapUv:V&&x(b.specularIntensityMap.channel),transmissionMapUv:Be&&x(b.transmissionMap.channel),thicknessMapUv:re&&x(b.thicknessMap.channel),alphaMapUv:Ne&&x(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Se||Z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!j.attributes.uv&&(Ce||Ne),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:J.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mn,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ti,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function E(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)C.push(X),C.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(w(C,b),T(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function w(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function T(b,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.alphaToCoverage&&c.enable(20),b.push(c.mask)}function O(b){const C=M[b.type];let X;if(C){const Y=Ai[C];X=Vu.clone(Y.uniforms)}else X=b.uniforms;return X}function P(b,C){let X;for(let Y=0,J=f.length;Y<J;Y++){const ie=f[Y];if(ie.cacheKey===C){X=ie,++X.usedTimes;break}}return X===void 0&&(X=new DA(r,C,b,s),f.push(X)),X}function L(b){if(--b.usedTimes===0){const C=f.indexOf(b);f[C]=f[f.length-1],f.pop(),b.destroy()}}function B(b){u.remove(b)}function k(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:O,acquireProgram:P,releaseProgram:L,releaseShaderCache:B,programs:f,dispose:k}}function BA(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function n(a){r.delete(a)}function i(a,c,u){r.get(a)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function zA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function y0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,m,v,y,M,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:v,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=v,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=M,_.group=x),e++,_}function c(p,m,v,y,M,x){const _=a(p,m,v,y,M,x);v.transmission>0?n.push(_):v.transparent===!0?i.push(_):t.push(_)}function u(p,m,v,y,M,x){const _=a(p,m,v,y,M,x);v.transmission>0?n.unshift(_):v.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||zA),n.length>1&&n.sort(m||_0),i.length>1&&i.sort(m||_0)}function f(){for(let p=e,m=r.length;p<m;p++){const v=r[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function kA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new y0,r.set(n,[a])):i>=s.length?(a=new y0,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function HA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function VA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let GA=0;function WA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function XA(r){const e=new HA,t=VA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new rt,a=new rt;function c(h){let f=0,p=0,m=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let v=0,y=0,M=0,x=0,_=0,E=0,w=0,T=0,O=0,P=0,L=0;h.sort(WA);for(let k=0,b=h.length;k<b;k++){const C=h[k],X=C.color,Y=C.intensity,J=C.distance,ie=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=X.r*Y,p+=X.g*Y,m+=X.b*Y;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],Y);L++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const he=C.shadow,z=t.get(C);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,n.directionalShadow[v]=z,n.directionalShadowMap[v]=ie,n.directionalShadowMatrix[v]=C.shadow.matrix,E++}n.directional[v]=j,v++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(X).multiplyScalar(Y),j.distance=J,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[M]=j;const he=C.shadow;if(C.map&&(n.spotLightMap[O]=C.map,O++,he.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[M]=he.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=ie,T++}M++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(X).multiplyScalar(Y),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=j,x++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const he=C.shadow,z=t.get(C);z.shadowIntensity=he.intensity,z.shadowBias=he.bias,z.shadowNormalBias=he.normalBias,z.shadowRadius=he.radius,z.shadowMapSize=he.mapSize,z.shadowCameraNear=he.camera.near,z.shadowCameraFar=he.camera.far,n.pointShadow[y]=z,n.pointShadowMap[y]=ie,n.pointShadowMatrix[y]=C.shadow.matrix,w++}n.point[y]=j,y++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(Y),j.groundColor.copy(C.groundColor).multiplyScalar(Y),n.hemi[_]=j,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const B=n.hash;(B.directionalLength!==v||B.pointLength!==y||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==E||B.numPointShadows!==w||B.numSpotShadows!==T||B.numSpotMaps!==O||B.numLightProbes!==L)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,B.directionalLength=v,B.pointLength=y,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=E,B.numPointShadows=w,B.numSpotShadows=T,B.numSpotMaps=O,B.numLightProbes=L,n.version=GA++)}function u(h,f){let p=0,m=0,v=0,y=0,M=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),p++}else if(w.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(x),v++}else if(w.isRectAreaLight){const T=n.rectArea[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),a.identity(),s.copy(w.matrixWorld),s.premultiply(x),a.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),M++}}}return{setup:c,setupView:u,state:n}}function x0(r){const e=new XA(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function qA(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new x0(r),e.set(i,[c])):s>=a.length?(c=new x0(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ap extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZA(r,e,t){let n=new $a;const i=new pe,s=new pe,a=new xt,c=new Ap({depthPacking:m_}),u=new Tp,h={},f=t.maxTextureSize,p={[hr]:Bn,[Bn]:hr,[ti]:ti},m=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:YA,fragmentShader:jA}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const y=new mt;y.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qt(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let _=this.type;this.render=function(P,L,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const k=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),X=r.state;X.setBlending(ur),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Y=_!==Ei&&this.type===Ei,J=_===Ei&&this.type!==Ei;for(let ie=0,j=P.length;ie<j;ie++){const he=P[ie],z=he.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const oe=z.getFrameExtents();if(i.multiply(oe),s.copy(z.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/oe.x),i.x=s.x*oe.x,z.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/oe.y),i.y=s.y*oe.y,z.mapSize.y=s.y)),z.map===null||Y===!0||J===!0){const ae=this.type!==Ei?{minFilter:dn,magFilter:dn}:{};z.map!==null&&z.map.dispose(),z.map=new bi(i.x,i.y,ae),z.map.texture.name=he.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ee=z.getViewportCount();for(let ae=0;ae<ee;ae++){const Re=z.getViewport(ae);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),X.viewport(a),z.updateMatrices(he,ae),n=z.getFrustum(),T(L,B,z.camera,he,this.type)}z.isPointLightShadow!==!0&&this.type===Ei&&E(z,B),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(k,b,C)};function E(P,L){const B=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new bi(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(L,null,B,m,M,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(L,null,B,v,M,null)}function w(P,L,B,k){let b=null;const C=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)b=C;else if(b=B.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const X=b.uuid,Y=L.uuid;let J=h[X];J===void 0&&(J={},h[X]=J);let ie=J[Y];ie===void 0&&(ie=b.clone(),J[Y]=ie,L.addEventListener("dispose",O)),b=ie}if(b.visible=L.visible,b.wireframe=L.wireframe,k===Ei?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:p[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=r.properties.get(b);X.light=B}return b}function T(P,L,B,k,b){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ei)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),J=P.material;if(Array.isArray(J)){const ie=Y.groups;for(let j=0,he=ie.length;j<he;j++){const z=ie[j],oe=J[z.materialIndex];if(oe&&oe.visible){const ee=w(P,oe,k,b);P.onBeforeShadow(r,P,L,B,Y,ee,z),r.renderBufferDirect(B,null,Y,ee,P,z),P.onAfterShadow(r,P,L,B,Y,ee,z)}}}else if(J.visible){const ie=w(P,J,k,b);P.onBeforeShadow(r,P,L,B,Y,ie,null),r.renderBufferDirect(B,null,Y,ie,P,null),P.onAfterShadow(r,P,L,B,Y,ie,null)}}const X=P.children;for(let Y=0,J=X.length;Y<J;Y++)T(X[Y],L,B,k,b)}function O(P){P.target.removeEventListener("dispose",O);for(const B in h){const k=h[B],b=P.target.uuid;b in k&&(k[b].dispose(),delete k[b])}}}const JA={[lu]:cu,[uu]:du,[hu]:pu,[Ms]:fu,[cu]:lu,[du]:uu,[pu]:hu,[fu]:Ms};function KA(r){function e(){let V=!1;const Be=new xt;let re=null;const ge=new xt(0,0,0,0);return{setMask:function(Ne){re!==Ne&&!V&&(r.colorMask(Ne,Ne,Ne,Ne),re=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,ze,wt,Gt,Mn){Mn===!0&&(Ne*=Gt,ze*=Gt,wt*=Gt),Be.set(Ne,ze,wt,Gt),ge.equals(Be)===!1&&(r.clearColor(Ne,ze,wt,Gt),ge.copy(Be))},reset:function(){V=!1,re=null,ge.set(-1,0,0,0)}}}function t(){let V=!1,Be=!1,re=null,ge=null,Ne=null;return{setReversed:function(ze){Be=ze},setTest:function(ze){ze?be(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ze){re!==ze&&!V&&(r.depthMask(ze),re=ze)},setFunc:function(ze){if(Be&&(ze=JA[ze]),ge!==ze){switch(ze){case lu:r.depthFunc(r.NEVER);break;case cu:r.depthFunc(r.ALWAYS);break;case uu:r.depthFunc(r.LESS);break;case Ms:r.depthFunc(r.LEQUAL);break;case hu:r.depthFunc(r.EQUAL);break;case fu:r.depthFunc(r.GEQUAL);break;case du:r.depthFunc(r.GREATER);break;case pu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=ze}},setLocked:function(ze){V=ze},setClear:function(ze){Ne!==ze&&(r.clearDepth(ze),Ne=ze)},reset:function(){V=!1,re=null,ge=null,Ne=null}}}function n(){let V=!1,Be=null,re=null,ge=null,Ne=null,ze=null,wt=null,Gt=null,Mn=null;return{setTest:function(Et){V||(Et?be(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Et){Be!==Et&&!V&&(r.stencilMask(Et),Be=Et)},setFunc:function(Et,gn,si){(re!==Et||ge!==gn||Ne!==si)&&(r.stencilFunc(Et,gn,si),re=Et,ge=gn,Ne=si)},setOp:function(Et,gn,si){(ze!==Et||wt!==gn||Gt!==si)&&(r.stencilOp(Et,gn,si),ze=Et,wt=gn,Gt=si)},setLocked:function(Et){V=Et},setClear:function(Et){Mn!==Et&&(r.clearStencil(Et),Mn=Et)},reset:function(){V=!1,Be=null,re=null,ge=null,Ne=null,ze=null,wt=null,Gt=null,Mn=null}}}const i=new e,s=new t,a=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],v=null,y=!1,M=null,x=null,_=null,E=null,w=null,T=null,O=null,P=new De(0,0,0),L=0,B=!1,k=null,b=null,C=null,X=null,Y=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,j=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(he)[1]),ie=j>=1):he.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),ie=j>=2);let z=null,oe={};const ee=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Re=new xt().fromArray(ee),Ue=new xt().fromArray(ae);function ne(V,Be,re,ge){const Ne=new Uint8Array(4),ze=r.createTexture();r.bindTexture(V,ze),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<re;wt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Be,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Be+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return ze}const me={};me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),be(r.DEPTH_TEST),s.setFunc(Ms),xe(!1),ve(zd),be(r.CULL_FACE),U(ur);function be(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function Ae(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function tt(V,Be){return f[V]!==Be?(r.bindFramebuffer(V,Be),f[V]=Be,V===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Be),V===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Be),!0):!1}function nt(V,Be){let re=m,ge=!1;if(V){re=p.get(Be),re===void 0&&(re=[],p.set(Be,re));const Ne=V.textures;if(re.length!==Ne.length||re[0]!==r.COLOR_ATTACHMENT0){for(let ze=0,wt=Ne.length;ze<wt;ze++)re[ze]=r.COLOR_ATTACHMENT0+ze;re.length=Ne.length,ge=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,ge=!0);ge&&r.drawBuffers(re)}function Ze(V){return v!==V?(r.useProgram(V),v=V,!0):!1}const Ce={[Nr]:r.FUNC_ADD,[zv]:r.FUNC_SUBTRACT,[kv]:r.FUNC_REVERSE_SUBTRACT};Ce[Hv]=r.MIN,Ce[Vv]=r.MAX;const ue={[Gv]:r.ZERO,[Wv]:r.ONE,[Xv]:r.SRC_COLOR,[ou]:r.SRC_ALPHA,[Kv]:r.SRC_ALPHA_SATURATE,[Zv]:r.DST_COLOR,[Yv]:r.DST_ALPHA,[qv]:r.ONE_MINUS_SRC_COLOR,[au]:r.ONE_MINUS_SRC_ALPHA,[Jv]:r.ONE_MINUS_DST_COLOR,[jv]:r.ONE_MINUS_DST_ALPHA,[Qv]:r.CONSTANT_COLOR,[$v]:r.ONE_MINUS_CONSTANT_COLOR,[e_]:r.CONSTANT_ALPHA,[t_]:r.ONE_MINUS_CONSTANT_ALPHA};function U(V,Be,re,ge,Ne,ze,wt,Gt,Mn,Et){if(V===ur){y===!0&&(Ae(r.BLEND),y=!1);return}if(y===!1&&(be(r.BLEND),y=!0),V!==Bv){if(V!==M||Et!==B){if((x!==Nr||w!==Nr)&&(r.blendEquation(r.FUNC_ADD),x=Nr,w=Nr),Et)switch(V){case gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.ONE,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,E=null,T=null,O=null,P.set(0,0,0),L=0,M=V,B=Et}return}Ne=Ne||Be,ze=ze||re,wt=wt||ge,(Be!==x||Ne!==w)&&(r.blendEquationSeparate(Ce[Be],Ce[Ne]),x=Be,w=Ne),(re!==_||ge!==E||ze!==T||wt!==O)&&(r.blendFuncSeparate(ue[re],ue[ge],ue[ze],ue[wt]),_=re,E=ge,T=ze,O=wt),(Gt.equals(P)===!1||Mn!==L)&&(r.blendColor(Gt.r,Gt.g,Gt.b,Mn),P.copy(Gt),L=Mn),M=V,B=!1}function we(V,Be){V.side===ti?Ae(r.CULL_FACE):be(r.CULL_FACE);let re=V.side===Bn;Be&&(re=!re),xe(re),V.blending===gs&&V.transparent===!1?U(ur):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),i.setMask(V.colorWrite);const ge=V.stencilWrite;a.setTest(ge),ge&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Je(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(V){k!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),k=V)}function ve(V){V!==Nv?(be(r.CULL_FACE),V!==b&&(V===zd?r.cullFace(r.BACK):V===Ov?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),b=V}function Se(V){V!==C&&(ie&&r.lineWidth(V),C=V)}function Je(V,Be,re){V?(be(r.POLYGON_OFFSET_FILL),(X!==Be||Y!==re)&&(r.polygonOffset(Be,re),X=Be,Y=re)):Ae(r.POLYGON_OFFSET_FILL)}function Ie(V){V?be(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function N(V){V===void 0&&(V=r.TEXTURE0+J-1),z!==V&&(r.activeTexture(V),z=V)}function R(V,Be,re){re===void 0&&(z===null?re=r.TEXTURE0+J-1:re=z);let ge=oe[re];ge===void 0&&(ge={type:void 0,texture:void 0},oe[re]=ge),(ge.type!==V||ge.texture!==Be)&&(z!==re&&(r.activeTexture(re),z=re),r.bindTexture(V,Be||me[V]),ge.type=V,ge.texture=Be)}function Z(){const V=oe[z];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(V){Re.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Re.copy(V))}function Ve(V){Ue.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ue.copy(V))}function Mt(V,Be){let re=u.get(Be);re===void 0&&(re=new WeakMap,u.set(Be,re));let ge=re.get(V);ge===void 0&&(ge=r.getUniformBlockIndex(Be,V.name),re.set(V,ge))}function ut(V,Be){const ge=u.get(Be).get(V);c.get(Be)!==ge&&(r.uniformBlockBinding(Be,ge,V.__bindingPointIndex),c.set(Be,ge))}function Ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},z=null,oe={},f={},p=new WeakMap,m=[],v=null,y=!1,M=null,x=null,_=null,E=null,w=null,T=null,O=null,P=new De(0,0,0),L=0,B=!1,k=null,b=null,C=null,X=null,Y=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:be,disable:Ae,bindFramebuffer:tt,drawBuffers:nt,useProgram:Ze,setBlending:U,setMaterial:we,setFlipSided:xe,setCullFace:ve,setLineWidth:Se,setPolygonOffset:Je,setScissorTest:Ie,activeTexture:N,bindTexture:R,unbindTexture:Z,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:He,texImage3D:at,updateUBOMapping:Mt,uniformBlockBinding:ut,texStorage2D:St,texStorage3D:_e,texSubImage2D:ce,texSubImage3D:Ye,compressedTexSubImage2D:Ee,compressedTexSubImage3D:ke,scissor:lt,viewport:Ve,reset:Ot}}function QA(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function $A(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function eT(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function jd(r,e,t,n){const i=tT(n);switch(t){case hp:return r*e;case dp:return r*e;case pp:return r*e*2;case th:return r*e/i.components*i.byteLength;case Za:return r*e/i.components*i.byteLength;case mp:return r*e*2/i.components*i.byteLength;case nh:return r*e*2/i.components*i.byteLength;case fp:return r*e*3/i.components*i.byteLength;case Pn:return r*e*4/i.components*i.byteLength;case ih:return r*e*4/i.components*i.byteLength;case ya:case xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gu:case _u:return Math.max(r,16)*Math.max(e,8)/4;case mu:case vu:return Math.max(r,8)*Math.max(e,8)/2;case yu:case xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wa:case Ou:case Fu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gp:case Bu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zu:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tT(r){switch(r){case Ti:case lp:return{byteLength:1,components:1};case Mo:case cp:case Ro:return{byteLength:2,components:1};case $u:case eh:return{byteLength:2,components:4};case dr:case Qu:case qn:return{byteLength:4,components:1};case up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const nT={contain:QA,cover:$A,fill:eT,getByteLength:jd};function iT(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,f=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,R){return v?new OffscreenCanvas(N,R):Ba("canvas")}function M(N,R,Z){let le=1;const de=Ie(N);if((de.width>Z||de.height>Z)&&(le=Z/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(le*de.width),Ye=Math.floor(le*de.height);p===void 0&&(p=y(ce,Ye));const Ee=R?y(ce,Ye):p;return Ee.width=ce,Ee.height=Ye,Ee.getContext("2d").drawImage(N,0,0,ce,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ce+"x"+Ye+")."),Ee}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function x(N){return N.generateMipmaps&&N.minFilter!==dn&&N.minFilter!==rn}function _(N){r.generateMipmap(N)}function E(N,R,Z,le,de=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=R;if(R===r.RED&&(Z===r.FLOAT&&(ce=r.R32F),Z===r.HALF_FLOAT&&(ce=r.R16F),Z===r.UNSIGNED_BYTE&&(ce=r.R8)),R===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.R8UI),Z===r.UNSIGNED_SHORT&&(ce=r.R16UI),Z===r.UNSIGNED_INT&&(ce=r.R32UI),Z===r.BYTE&&(ce=r.R8I),Z===r.SHORT&&(ce=r.R16I),Z===r.INT&&(ce=r.R32I)),R===r.RG&&(Z===r.FLOAT&&(ce=r.RG32F),Z===r.HALF_FLOAT&&(ce=r.RG16F),Z===r.UNSIGNED_BYTE&&(ce=r.RG8)),R===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ce=r.RG16UI),Z===r.UNSIGNED_INT&&(ce=r.RG32UI),Z===r.BYTE&&(ce=r.RG8I),Z===r.SHORT&&(ce=r.RG16I),Z===r.INT&&(ce=r.RG32I)),R===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),Z===r.UNSIGNED_INT&&(ce=r.RGB32UI),Z===r.BYTE&&(ce=r.RGB8I),Z===r.SHORT&&(ce=r.RGB16I),Z===r.INT&&(ce=r.RGB32I)),R===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ce=r.RGBA32UI),Z===r.BYTE&&(ce=r.RGBA8I),Z===r.SHORT&&(ce=r.RGBA16I),Z===r.INT&&(ce=r.RGBA32I)),R===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),R===r.RGBA){const Ye=de?Da:Dt.getTransfer(le);Z===r.FLOAT&&(ce=r.RGBA32F),Z===r.HALF_FLOAT&&(ce=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ce=Ye===zt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(N,R){let Z;return N?R===null||R===dr||R===ws?Z=r.DEPTH24_STENCIL8:R===qn?Z=r.DEPTH32F_STENCIL8:R===Mo&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===dr||R===ws?Z=r.DEPTH_COMPONENT24:R===qn?Z=r.DEPTH_COMPONENT32F:R===Mo&&(Z=r.DEPTH_COMPONENT16),Z}function T(N,R){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==rn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function O(N){const R=N.target;R.removeEventListener("dispose",O),L(R),R.isVideoTexture&&f.delete(R)}function P(N){const R=N.target;R.removeEventListener("dispose",P),k(R)}function L(N){const R=n.get(N);if(R.__webglInit===void 0)return;const Z=N.source,le=m.get(Z);if(le){const de=le[R.__cacheKey];de.usedTimes--,de.usedTimes===0&&B(N),Object.keys(le).length===0&&m.delete(Z)}n.remove(N)}function B(N){const R=n.get(N);r.deleteTexture(R.__webglTexture);const Z=N.source,le=m.get(Z);delete le[R.__cacheKey],a.memory.textures--}function k(N){const R=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(R.__webglFramebuffer[le]))for(let de=0;de<R.__webglFramebuffer[le].length;de++)r.deleteFramebuffer(R.__webglFramebuffer[le][de]);else r.deleteFramebuffer(R.__webglFramebuffer[le]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[le])}else{if(Array.isArray(R.__webglFramebuffer))for(let le=0;le<R.__webglFramebuffer.length;le++)r.deleteFramebuffer(R.__webglFramebuffer[le]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let le=0;le<R.__webglColorRenderbuffer.length;le++)R.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[le]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=N.textures;for(let le=0,de=Z.length;le<de;le++){const ce=n.get(Z[le]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(Z[le])}n.remove(N)}let b=0;function C(){b=0}function X(){const N=b;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),b+=1,N}function Y(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function J(N,R){const Z=n.get(N);if(N.isVideoTexture&&Se(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){const le=N.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Z,N,R);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+R)}function ie(N,R){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){Ue(Z,N,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+R)}function j(N,R){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){Ue(Z,N,R);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+R)}function he(N,R){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){ne(Z,N,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+R)}const z={[Ra]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[Pa]:r.MIRRORED_REPEAT},oe={[dn]:r.NEAREST,[ap]:r.NEAREST_MIPMAP_NEAREST,[mo]:r.NEAREST_MIPMAP_LINEAR,[rn]:r.LINEAR,[_a]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},ee={[v_]:r.NEVER,[w_]:r.ALWAYS,[__]:r.LESS,[_p]:r.LEQUAL,[y_]:r.EQUAL,[M_]:r.GEQUAL,[x_]:r.GREATER,[S_]:r.NOTEQUAL};function ae(N,R){if(R.type===qn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===rn||R.magFilter===_a||R.magFilter===mo||R.magFilter===Hi||R.minFilter===rn||R.minFilter===_a||R.minFilter===mo||R.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,z[R.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,z[R.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,z[R.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,oe[R.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===dn||R.minFilter!==mo&&R.minFilter!==Hi||R.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Re(N,R){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",O));const le=R.source;let de=m.get(le);de===void 0&&(de={},m.set(le,de));const ce=Y(R);if(ce!==N.__cacheKey){de[ce]===void 0&&(de[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),de[ce].usedTimes++;const Ye=de[N.__cacheKey];Ye!==void 0&&(de[N.__cacheKey].usedTimes--,Ye.usedTimes===0&&B(R)),N.__cacheKey=ce,N.__webglTexture=de[ce].texture}return Z}function Ue(N,R,Z){let le=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(le=r.TEXTURE_3D);const de=Re(N,R),ce=R.source;t.bindTexture(le,N.__webglTexture,r.TEXTURE0+Z);const Ye=n.get(ce);if(ce.version!==Ye.__version||de===!0){t.activeTexture(r.TEXTURE0+Z);const Ee=Dt.getPrimaries(Dt.workingColorSpace),ke=R.colorSpace===ar?null:Dt.getPrimaries(R.colorSpace),St=R.colorSpace===ar||Ee===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let _e=M(R.image,!1,i.maxTextureSize);_e=Je(R,_e);const He=s.convert(R.format,R.colorSpace),at=s.convert(R.type);let lt=E(R.internalFormat,He,at,R.colorSpace,R.isVideoTexture);ae(le,R);let Ve;const Mt=R.mipmaps,ut=R.isVideoTexture!==!0,Ot=Ye.__version===void 0||de===!0,V=ce.dataReady,Be=T(R,_e);if(R.isDepthTexture)lt=w(R.format===Es,R.type),Ot&&(ut?t.texStorage2D(r.TEXTURE_2D,1,lt,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,lt,_e.width,_e.height,0,He,at,null));else if(R.isDataTexture)if(Mt.length>0){ut&&Ot&&t.texStorage2D(r.TEXTURE_2D,Be,lt,Mt[0].width,Mt[0].height);for(let re=0,ge=Mt.length;re<ge;re++)Ve=Mt[re],ut?V&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ve.width,Ve.height,He,at,Ve.data):t.texImage2D(r.TEXTURE_2D,re,lt,Ve.width,Ve.height,0,He,at,Ve.data);R.generateMipmaps=!1}else ut?(Ot&&t.texStorage2D(r.TEXTURE_2D,Be,lt,_e.width,_e.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,He,at,_e.data)):t.texImage2D(r.TEXTURE_2D,0,lt,_e.width,_e.height,0,He,at,_e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ut&&Ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,lt,Mt[0].width,Mt[0].height,_e.depth);for(let re=0,ge=Mt.length;re<ge;re++)if(Ve=Mt[re],R.format!==Pn)if(He!==null)if(ut){if(V)if(R.layerUpdates.size>0){const Ne=jd(Ve.width,Ve.height,R.format,R.type);for(const ze of R.layerUpdates){const wt=Ve.data.subarray(ze*Ne/Ve.data.BYTES_PER_ELEMENT,(ze+1)*Ne/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ze,Ve.width,Ve.height,1,He,wt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Ve.width,Ve.height,_e.depth,He,Ve.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,lt,Ve.width,Ve.height,_e.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Ve.width,Ve.height,_e.depth,He,at,Ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,lt,Ve.width,Ve.height,_e.depth,0,He,at,Ve.data)}else{ut&&Ot&&t.texStorage2D(r.TEXTURE_2D,Be,lt,Mt[0].width,Mt[0].height);for(let re=0,ge=Mt.length;re<ge;re++)Ve=Mt[re],R.format!==Pn?He!==null?ut?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Ve.width,Ve.height,He,Ve.data):t.compressedTexImage2D(r.TEXTURE_2D,re,lt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?V&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Ve.width,Ve.height,He,at,Ve.data):t.texImage2D(r.TEXTURE_2D,re,lt,Ve.width,Ve.height,0,He,at,Ve.data)}else if(R.isDataArrayTexture)if(ut){if(Ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,lt,_e.width,_e.height,_e.depth),V)if(R.layerUpdates.size>0){const re=jd(_e.width,_e.height,R.format,R.type);for(const ge of R.layerUpdates){const Ne=_e.data.subarray(ge*re/_e.data.BYTES_PER_ELEMENT,(ge+1)*re/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,_e.width,_e.height,1,He,at,Ne)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,He,at,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,lt,_e.width,_e.height,_e.depth,0,He,at,_e.data);else if(R.isData3DTexture)ut?(Ot&&t.texStorage3D(r.TEXTURE_3D,Be,lt,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,He,at,_e.data)):t.texImage3D(r.TEXTURE_3D,0,lt,_e.width,_e.height,_e.depth,0,He,at,_e.data);else if(R.isFramebufferTexture){if(Ot)if(ut)t.texStorage2D(r.TEXTURE_2D,Be,lt,_e.width,_e.height);else{let re=_e.width,ge=_e.height;for(let Ne=0;Ne<Be;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,lt,re,ge,0,He,at,null),re>>=1,ge>>=1}}else if(Mt.length>0){if(ut&&Ot){const re=Ie(Mt[0]);t.texStorage2D(r.TEXTURE_2D,Be,lt,re.width,re.height)}for(let re=0,ge=Mt.length;re<ge;re++)Ve=Mt[re],ut?V&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,He,at,Ve):t.texImage2D(r.TEXTURE_2D,re,lt,He,at,Ve);R.generateMipmaps=!1}else if(ut){if(Ot){const re=Ie(_e);t.texStorage2D(r.TEXTURE_2D,Be,lt,re.width,re.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,at,_e)}else t.texImage2D(r.TEXTURE_2D,0,lt,He,at,_e);x(R)&&_(le),Ye.__version=ce.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ne(N,R,Z){if(R.image.length!==6)return;const le=Re(N,R),de=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Z);const ce=n.get(de);if(de.version!==ce.__version||le===!0){t.activeTexture(r.TEXTURE0+Z);const Ye=Dt.getPrimaries(Dt.workingColorSpace),Ee=R.colorSpace===ar?null:Dt.getPrimaries(R.colorSpace),ke=R.colorSpace===ar||Ye===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const St=R.isCompressedTexture||R.image[0].isCompressedTexture,_e=R.image[0]&&R.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!St&&!_e?He[ge]=M(R.image[ge],!0,i.maxCubemapSize):He[ge]=_e?R.image[ge].image:R.image[ge],He[ge]=Je(R,He[ge]);const at=He[0],lt=s.convert(R.format,R.colorSpace),Ve=s.convert(R.type),Mt=E(R.internalFormat,lt,Ve,R.colorSpace),ut=R.isVideoTexture!==!0,Ot=ce.__version===void 0||le===!0,V=de.dataReady;let Be=T(R,at);ae(r.TEXTURE_CUBE_MAP,R);let re;if(St){ut&&Ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,Mt,at.width,at.height);for(let ge=0;ge<6;ge++){re=He[ge].mipmaps;for(let Ne=0;Ne<re.length;Ne++){const ze=re[Ne];R.format!==Pn?lt!==null?ut?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,ze.width,ze.height,lt,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,Mt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,ze.width,ze.height,lt,Ve,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,Mt,ze.width,ze.height,0,lt,Ve,ze.data)}}}else{if(re=R.mipmaps,ut&&Ot){re.length>0&&Be++;const ge=Ie(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,Mt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(_e){ut?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,lt,Ve,He[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Mt,He[ge].width,He[ge].height,0,lt,Ve,He[ge].data);for(let Ne=0;Ne<re.length;Ne++){const wt=re[Ne].image[ge].image;ut?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,wt.width,wt.height,lt,Ve,wt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,Mt,wt.width,wt.height,0,lt,Ve,wt.data)}}else{ut?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,lt,Ve,He[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Mt,lt,Ve,He[ge]);for(let Ne=0;Ne<re.length;Ne++){const ze=re[Ne];ut?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,lt,Ve,ze.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,Mt,lt,Ve,ze.image[ge])}}}x(R)&&_(r.TEXTURE_CUBE_MAP),ce.__version=de.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function me(N,R,Z,le,de,ce){const Ye=s.convert(Z.format,Z.colorSpace),Ee=s.convert(Z.type),ke=E(Z.internalFormat,Ye,Ee,Z.colorSpace);if(!n.get(R).__hasExternalTextures){const _e=Math.max(1,R.width>>ce),He=Math.max(1,R.height>>ce);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,ce,ke,_e,He,R.depth,0,Ye,Ee,null):t.texImage2D(de,ce,ke,_e,He,0,Ye,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ve(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,de,n.get(Z).__webglTexture,0,xe(R)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,de,n.get(Z).__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(N,R,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),R.depthBuffer){const le=R.depthTexture,de=le&&le.isDepthTexture?le.type:null,ce=w(R.stencilBuffer,de),Ye=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=xe(R);ve(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ce,R.width,R.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ce,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,N)}else{const le=R.textures;for(let de=0;de<le.length;de++){const ce=le[de],Ye=s.convert(ce.format,ce.colorSpace),Ee=s.convert(ce.type),ke=E(ce.internalFormat,Ye,Ee,ce.colorSpace),St=xe(R);Z&&ve(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ke,R.width,R.height):ve(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,ke,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ke,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),J(R.depthTexture,0);const le=n.get(R.depthTexture).__webglTexture,de=xe(R);if(R.depthTexture.format===vs)ve(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(R.depthTexture.format===Es)ve(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function tt(N){const R=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const le=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),le){const de=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),R.__depthDisposeCallback=de}R.__boundDepthTexture=le}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(R.__webglFramebuffer,N)}else if(Z){R.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[le]),R.__webglDepthbuffer[le]===void 0)R.__webglDepthbuffer[le]=r.createRenderbuffer(),be(R.__webglDepthbuffer[le],N,!1);else{const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=R.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),be(R.__webglDepthbuffer,N,!1);else{const le=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,de)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(N,R,Z){const le=n.get(N);R!==void 0&&me(le.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&tt(N)}function Ze(N){const R=N.texture,Z=n.get(N),le=n.get(R);N.addEventListener("dispose",P);const de=N.textures,ce=N.isWebGLCubeRenderTarget===!0,Ye=de.length>1;if(Ye||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=R.version,a.memory.textures++),ce){Z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[Ee]=[];for(let ke=0;ke<R.mipmaps.length;ke++)Z.__webglFramebuffer[Ee][ke]=r.createFramebuffer()}else Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ee=0,ke=de.length;Ee<ke;Ee++){const St=n.get(de[Ee]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),a.memory.textures++)}if(N.samples>0&&ve(N)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<de.length;Ee++){const ke=de[Ee];Z.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const St=s.convert(ke.format,ke.colorSpace),_e=s.convert(ke.type),He=E(ke.internalFormat,St,_e,ke.colorSpace,N.isXRRenderTarget===!0),at=xe(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,He,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),be(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),ae(r.TEXTURE_CUBE_MAP,R);for(let Ee=0;Ee<6;Ee++)if(R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)me(Z.__webglFramebuffer[Ee][ke],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke);else me(Z.__webglFramebuffer[Ee],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ee=0,ke=de.length;Ee<ke;Ee++){const St=de[Ee],_e=n.get(St);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),ae(r.TEXTURE_2D,St),me(Z.__webglFramebuffer,N,St,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),x(St)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ee=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,le.__webglTexture),ae(Ee,R),R.mipmaps&&R.mipmaps.length>0)for(let ke=0;ke<R.mipmaps.length;ke++)me(Z.__webglFramebuffer[ke],N,R,r.COLOR_ATTACHMENT0,Ee,ke);else me(Z.__webglFramebuffer,N,R,r.COLOR_ATTACHMENT0,Ee,0);x(R)&&_(Ee),t.unbindTexture()}N.depthBuffer&&tt(N)}function Ce(N){const R=N.textures;for(let Z=0,le=R.length;Z<le;Z++){const de=R[Z];if(x(de)){const ce=N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ye=n.get(de).__webglTexture;t.bindTexture(ce,Ye),_(ce),t.unbindTexture()}}}const ue=[],U=[];function we(N){if(N.samples>0){if(ve(N)===!1){const R=N.textures,Z=N.width,le=N.height;let de=r.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=n.get(N),Ee=R.length>1;if(Ee)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[ke]);const St=n.get(R[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,Z,le,0,0,Z,le,de,r.NEAREST),u===!0&&(ue.length=0,U.length=0,ue.push(r.COLOR_ATTACHMENT0+ke),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ue.push(ce),U.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[ke]);const St=n.get(R[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,St,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const R=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function xe(N){return Math.min(i.maxSamples,N.samples)}function ve(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Se(N){const R=a.render.frame;f.get(N)!==R&&(f.set(N,R),N.update())}function Je(N,R){const Z=N.colorSpace,le=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==mr&&Z!==ar&&(Dt.getTransfer(Z)===zt?(le!==Pn||de!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=C,this.setTexture2D=J,this.setTexture2DArray=ie,this.setTexture3D=j,this.setTextureCube=he,this.rebindTextures=nt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ve}function B_(r,e){function t(n,i=ar){let s;const a=Dt.getTransfer(i);if(n===Ti)return r.UNSIGNED_BYTE;if(n===$u)return r.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lp)return r.BYTE;if(n===cp)return r.SHORT;if(n===Mo)return r.UNSIGNED_SHORT;if(n===Qu)return r.INT;if(n===dr)return r.UNSIGNED_INT;if(n===qn)return r.FLOAT;if(n===Ro)return r.HALF_FLOAT;if(n===hp)return r.ALPHA;if(n===fp)return r.RGB;if(n===Pn)return r.RGBA;if(n===dp)return r.LUMINANCE;if(n===pp)return r.LUMINANCE_ALPHA;if(n===vs)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===th)return r.RED;if(n===Za)return r.RED_INTEGER;if(n===mp)return r.RG;if(n===nh)return r.RG_INTEGER;if(n===ih)return r.RGBA_INTEGER;if(n===ya||n===xa||n===Sa||n===Ma)if(a===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mu||n===gu||n===vu||n===_u)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yu||n===xu||n===Su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yu||n===xu)return a===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Su)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mu||n===wu||n===Eu||n===Au||n===Tu||n===bu||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Au)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ru)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return a===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Ou||n===Fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wa)return a===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gp||n===Bu||n===zu||n===ku)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class z_ extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),v=.02,y=.005;h.inputState.pinching&&m>v+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=v-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _o;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:sT,fragmentShader:oT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lT extends qi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,v=null,y=null;const M=new aT,x=t.getContextAttributes();let _=null,E=null;const w=[],T=[],O=new pe;let P=null;const L=new nn;L.layers.enable(1),L.viewport=new xt;const B=new nn;B.layers.enable(2),B.viewport=new xt;const k=[L,B],b=new z_;b.layers.enable(1),b.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=w[ne];return me===void 0&&(me=new hd,w[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=w[ne];return me===void 0&&(me=new hd,w[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=w[ne];return me===void 0&&(me=new hd,w[ne]=me),me.getHandSpace()};function Y(ne){const me=T.indexOf(ne.inputSource);if(me===-1)return;const be=w[me];be!==void 0&&(be.update(ne.inputSource,ne.frame,h||a),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<w.length;ne++){const me=T[ne];me!==null&&(T[ne]=null,w[ne].disconnect(me))}C=null,X=null,M.reset(),e.setRenderTarget(_),v=null,m=null,p=null,i=null,E=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",J),i.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new bi(v.framebufferWidth,v.framebufferHeight,{format:Pn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let me=null,be=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?Es:vs,be=x.stencil?ws:dr);const tt={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(tt),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new bi(m.textureWidth,m.textureHeight,{format:Pn,type:Ti,depthTexture:new Ep(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ie(ne){for(let me=0;me<ne.removed.length;me++){const be=ne.removed[me],Ae=T.indexOf(be);Ae>=0&&(T[Ae]=null,w[Ae].disconnect(be))}for(let me=0;me<ne.added.length;me++){const be=ne.added[me];let Ae=T.indexOf(be);if(Ae===-1){for(let nt=0;nt<w.length;nt++)if(nt>=T.length){T.push(be),Ae=nt;break}else if(T[nt]===null){T[nt]=be,Ae=nt;break}if(Ae===-1)break}const tt=w[Ae];tt&&tt.connect(be)}}const j=new D,he=new D;function z(ne,me,be){j.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(be.matrixWorld);const Ae=j.distanceTo(he),tt=me.projectionMatrix.elements,nt=be.projectionMatrix.elements,Ze=tt[14]/(tt[10]-1),Ce=tt[14]/(tt[10]+1),ue=(tt[9]+1)/tt[5],U=(tt[9]-1)/tt[5],we=(tt[8]-1)/tt[0],xe=(nt[8]+1)/nt[0],ve=Ze*we,Se=Ze*xe,Je=Ae/(-we+xe),Ie=Je*-we;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ie),ne.translateZ(Je),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),tt[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const N=Ze+Je,R=Ce+Je,Z=ve-Ie,le=Se+(Ae-Ie),de=ue*Ce/R*N,ce=U*Ce/R*N;ne.projectionMatrix.makePerspective(Z,le,de,ce,N,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let me=ne.near,be=ne.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(be=M.depthFar)),b.near=B.near=L.near=me,b.far=B.far=L.far=be,(C!==b.near||X!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,X=b.far);const Ae=ne.parent,tt=b.cameras;oe(b,Ae);for(let nt=0;nt<tt.length;nt++)oe(tt[nt],Ae);tt.length===2?z(b,L,B):b.projectionMatrix.copy(L.projectionMatrix),ee(ne,b,Ae)};function ee(ne,me,be){be===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=wo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&v===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let ae=null;function Re(ne,me){if(f=me.getViewerPose(h||a),y=me,f!==null){const be=f.views;v!==null&&(e.setRenderTargetFramebuffer(E,v.framebuffer),e.setRenderTarget(E));let Ae=!1;be.length!==b.cameras.length&&(b.cameras.length=0,Ae=!0);for(let nt=0;nt<be.length;nt++){const Ze=be[nt];let Ce=null;if(v!==null)Ce=v.getViewport(Ze);else{const U=p.getViewSubImage(m,Ze);Ce=U.viewport,nt===0&&(e.setRenderTargetTextures(E,U.colorTexture,m.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(E))}let ue=k[nt];ue===void 0&&(ue=new nn,ue.layers.enable(nt),ue.viewport=new xt,k[nt]=ue),ue.matrix.fromArray(Ze.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ze.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),nt===0&&(b.matrix.copy(ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ae===!0&&b.cameras.push(ue)}const tt=i.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const nt=p.getDepthInformation(be[0]);nt&&nt.isValid&&nt.texture&&M.init(e,nt,i.renderState)}}for(let be=0;be<w.length;be++){const Ae=T[be],tt=w[be];Ae!==null&&tt!==void 0&&tt.update(Ae,me,h||a)}ae&&ae(ne,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),y=null}const Ue=new D_;Ue.setAnimationLoop(Re),this.setAnimationLoop=function(ne){ae=ne},this.dispose=function(){}}}const ns=new ri,cT=new rt;function uT(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,P_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&v(x,_,T)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),M(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,T=E.envMapRotation;w&&(x.envMap.value=w,ns.copy(T),ns.x*=-1,ns.y*=-1,ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(ns)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hT(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const T=w.program;n.uniformBlockBinding(E,T)}function h(E,w){let T=i[E.id];T===void 0&&(y(E),T=f(E),i[E.id]=T,E.addEventListener("dispose",x));const O=w.program;n.updateUBOMapping(E,O);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const w=p();E.__bindingPointIndex=w;const T=r.createBuffer(),O=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,O,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,T),T}function p(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],T=E.uniforms,O=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,L=T.length;P<L;P++){const B=Array.isArray(T[P])?T[P]:[T[P]];for(let k=0,b=B.length;k<b;k++){const C=B[k];if(v(C,P,k,O)===!0){const X=C.__offset,Y=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let ie=0;ie<Y.length;ie++){const j=Y[ie],he=M(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,X+J,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,J),J+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(E,w,T,O){const P=E.value,L=w+"_"+T;if(O[L]===void 0)return typeof P=="number"||typeof P=="boolean"?O[L]=P:O[L]=P.clone(),!0;{const B=O[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function y(E){const w=E.uniforms;let T=0;const O=16;for(let L=0,B=w.length;L<B;L++){const k=Array.isArray(w[L])?w[L]:[w[L]];for(let b=0,C=k.length;b<C;b++){const X=k[b],Y=Array.isArray(X.value)?X.value:[X.value];for(let J=0,ie=Y.length;J<ie;J++){const j=Y[J],he=M(j),z=T%O,oe=z%he.boundary,ee=z+oe;T+=oe,ee!==0&&O-ee<he.storage&&(T+=O-ee),X.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=he.storage}}}const P=T%O;return P>0&&(T+=O-P),E.__size=T,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:u,update:h,dispose:_}}class k_{constructor(e={}){const{canvas:t=T_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),y=new Int32Array(4);let M=null,x=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Gi,this.toneMappingExposure=1;const w=this;let T=!1,O=0,P=0,L=null,B=-1,k=null;const b=new xt,C=new xt;let X=null;const Y=new De(0);let J=0,ie=t.width,j=t.height,he=1,z=null,oe=null;const ee=new xt(0,0,ie,j),ae=new xt(0,0,ie,j);let Re=!1;const Ue=new $a;let ne=!1,me=!1;const be=new rt,Ae=new rt,tt=new D,nt=new xt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function ue(){return L===null?he:1}let U=n;function we(I,G){return t.getContext(I,G)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ze,!1),U===null){const G="webgl2";if(U=we(G,I),U===null)throw we(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let xe,ve,Se,Je,Ie,N,R,Z,le,de,ce,Ye,Ee,ke,St,_e,He,at,lt,Ve,Mt,ut,Ot,V;function Be(){xe=new vE(U),xe.init(),ut=new B_(U,xe),ve=new hE(U,xe,e,ut),Se=new KA(U),ve.reverseDepthBuffer&&Se.buffers.depth.setReversed(!0),Je=new xE(U),Ie=new BA,N=new iT(U,xe,Se,Ie,ve,ut,Je),R=new dE(w),Z=new gE(w),le=new bM(U),Ot=new cE(U,le),de=new _E(U,le,Je,Ot),ce=new ME(U,de,le,Je),lt=new SE(U,ve,N),_e=new fE(Ie),Ye=new FA(w,R,Z,xe,ve,Ot,_e),Ee=new uT(w,Ie),ke=new kA,St=new qA(xe),at=new lE(w,R,Z,Se,ce,m,u),He=new ZA(w,ce,ve),V=new hT(U,Je,ve,Se),Ve=new uE(U,xe,Je),Mt=new yE(U,xe,Je),Je.programs=Ye.programs,w.capabilities=ve,w.extensions=xe,w.properties=Ie,w.renderLists=ke,w.shadowMap=He,w.state=Se,w.info=Je}Be();const re=new lT(w,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const I=xe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=xe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(I){I!==void 0&&(he=I,this.setSize(ie,j,!1))},this.getSize=function(I){return I.set(ie,j)},this.setSize=function(I,G,Q=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=I,j=G,t.width=Math.floor(I*he),t.height=Math.floor(G*he),Q===!0&&(t.style.width=I+"px",t.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(ie*he,j*he).floor()},this.setDrawingBufferSize=function(I,G,Q){ie=I,j=G,he=Q,t.width=Math.floor(I*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(b)},this.getViewport=function(I){return I.copy(ee)},this.setViewport=function(I,G,Q,$){I.isVector4?ee.set(I.x,I.y,I.z,I.w):ee.set(I,G,Q,$),Se.viewport(b.copy(ee).multiplyScalar(he).round())},this.getScissor=function(I){return I.copy(ae)},this.setScissor=function(I,G,Q,$){I.isVector4?ae.set(I.x,I.y,I.z,I.w):ae.set(I,G,Q,$),Se.scissor(C.copy(ae).multiplyScalar(he).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(I){Se.setScissorTest(Re=I)},this.setOpaqueSort=function(I){z=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(I=!0,G=!0,Q=!0){let $=0;if(I){let q=!1;if(L!==null){const Me=L.texture.format;q=Me===ih||Me===nh||Me===Za}if(q){const Me=L.texture.type,Oe=Me===Ti||Me===dr||Me===Mo||Me===ws||Me===$u||Me===eh,Ge=at.getClearColor(),We=at.getClearAlpha(),st=Ge.r,ot=Ge.g,Ke=Ge.b;Oe?(v[0]=st,v[1]=ot,v[2]=Ke,v[3]=We,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=st,y[1]=ot,y[2]=Ke,y[3]=We,U.clearBufferiv(U.COLOR,0,y))}else $|=U.COLOR_BUFFER_BIT}G&&($|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ke.dispose(),St.dispose(),Ie.dispose(),R.dispose(),Z.dispose(),ce.dispose(),Ot.dispose(),V.dispose(),Ye.dispose(),re.dispose(),re.removeEventListener("sessionstart",al),re.removeEventListener("sessionend",ll),ji.stop()};function ge(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=Je.autoReset,G=He.enabled,Q=He.autoUpdate,$=He.needsUpdate,q=He.type;Be(),Je.autoReset=I,He.enabled=G,He.autoUpdate=Q,He.needsUpdate=$,He.type=q}function ze(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function wt(I){const G=I.target;G.removeEventListener("dispose",wt),Gt(G)}function Gt(I){Mn(I),Ie.remove(I)}function Mn(I){const G=Ie.get(I).programs;G!==void 0&&(G.forEach(function(Q){Ye.releaseProgram(Q)}),I.isShaderMaterial&&Ye.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,Q,$,q,Me){G===null&&(G=Ze);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,Ge=Rh(I,G,Q,$,q);Se.setMaterial($,Oe);let We=Q.index,st=1;if($.wireframe===!0){if(We=de.getWireframeAttribute(Q),We===void 0)return;st=2}const ot=Q.drawRange,Ke=Q.attributes.position;let Tt=ot.start*st,Rt=(ot.start+ot.count)*st;Me!==null&&(Tt=Math.max(Tt,Me.start*st),Rt=Math.min(Rt,(Me.start+Me.count)*st)),We!==null?(Tt=Math.max(Tt,0),Rt=Math.min(Rt,We.count)):Ke!=null&&(Tt=Math.max(Tt,0),Rt=Math.min(Rt,Ke.count));const Ut=Rt-Tt;if(Ut<0||Ut===1/0)return;Ot.setup(q,$,Ge,Q,We);let _t,$e=Ve;if(We!==null&&(_t=le.get(We),$e=Mt,$e.setIndex(_t)),q.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*ue()),$e.setMode(U.LINES)):$e.setMode(U.TRIANGLES);else if(q.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),Se.setLineWidth(qe*ue()),q.isLineSegments?$e.setMode(U.LINES):q.isLineLoop?$e.setMode(U.LINE_LOOP):$e.setMode(U.LINE_STRIP)}else q.isPoints?$e.setMode(U.POINTS):q.isSprite&&$e.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)$e.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))$e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qe=q._multiDrawStarts,At=q._multiDrawCounts,ct=q._multiDrawCount,sn=We?le.get(We).bytesPerElement:1,jn=Ie.get($).currentProgram.getUniforms();for(let Ft=0;Ft<ct;Ft++)jn.setValue(U,"_gl_DrawID",Ft),$e.render(qe[Ft]/sn,At[Ft])}else if(q.isInstancedMesh)$e.renderInstances(Tt,Ut,q.count);else if(Q.isInstancedBufferGeometry){const qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,At=Math.min(Q.instanceCount,qe);$e.renderInstances(Tt,Ut,At)}else $e.render(Tt,Ut)};function Et(I,G,Q){I.transparent===!0&&I.side===ti&&I.forceSinglePass===!1?(I.side=Bn,I.needsUpdate=!0,Ds(I,G,Q),I.side=hr,I.needsUpdate=!0,Ds(I,G,Q),I.side=ti):Ds(I,G,Q)}this.compile=function(I,G,Q=null){Q===null&&(Q=I),x=St.get(Q),x.init(G),E.push(x),Q.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),I!==Q&&I.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const $=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Oe=0;Oe<Me.length;Oe++){const Ge=Me[Oe];Et(Ge,Q,q),$.add(Ge)}else Et(Me,Q,q),$.add(Me)}),E.pop(),x=null,$},this.compileAsync=function(I,G,Q=null){const $=this.compile(I,G,Q);return new Promise(q=>{function Me(){if($.forEach(function(Oe){Ie.get(Oe).currentProgram.isReady()&&$.delete(Oe)}),$.size===0){q(I);return}setTimeout(Me,10)}xe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let gn=null;function si(I){gn&&gn(I)}function al(){ji.stop()}function ll(){ji.start()}const ji=new D_;ji.setAnimationLoop(si),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(I){gn=I,re.setAnimationLoop(I),I===null?ji.stop():ji.start()},re.addEventListener("sessionstart",al),re.addEventListener("sessionend",ll),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,G,L),x=St.get(I,E.length),x.init(G),E.push(x),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(Ae),me=this.localClippingEnabled,ne=_e.init(this.clippingPlanes,me),M=ke.get(I,_.length),M.init(),_.push(M),re.enabled===!0&&re.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&Is(Me,G,-1/0,w.sortObjects)}Is(I,G,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(z,oe),Ce=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ce&&at.addToRenderList(M,I),this.info.render.frame++,ne===!0&&_e.beginShadows();const Q=x.state.shadowsArray;He.render(Q,I,G),ne===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,q=M.transmissive;if(x.setupLights(),G.isArrayCamera){const Me=G.cameras;if(q.length>0)for(let Oe=0,Ge=Me.length;Oe<Ge;Oe++){const We=Me[Oe];cl($,q,I,We)}Ce&&at.render(I);for(let Oe=0,Ge=Me.length;Oe<Ge;Oe++){const We=Me[Oe];Ls(M,I,We,We.viewport)}}else q.length>0&&cl($,q,I,G),Ce&&at.render(I),Ls(M,I,G);L!==null&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(w,I,G),Ot.resetDefaultState(),B=-1,k=null,E.pop(),E.length>0?(x=E[E.length-1],ne===!0&&_e.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function Is(I,G,Q,$){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ue.intersectsSprite(I)){$&&nt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ae);const Oe=ce.update(I),Ge=I.material;Ge.visible&&M.push(I,Oe,Ge,Q,nt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ue.intersectsObject(I))){const Oe=ce.update(I),Ge=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),nt.copy(I.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),nt.copy(Oe.boundingSphere.center)),nt.applyMatrix4(I.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const We=Oe.groups;for(let st=0,ot=We.length;st<ot;st++){const Ke=We[st],Tt=Ge[Ke.materialIndex];Tt&&Tt.visible&&M.push(I,Oe,Tt,Q,nt.z,Ke)}}else Ge.visible&&M.push(I,Oe,Ge,Q,nt.z,null)}}const Me=I.children;for(let Oe=0,Ge=Me.length;Oe<Ge;Oe++)Is(Me[Oe],G,Q,$)}function Ls(I,G,Q,$){const q=I.opaque,Me=I.transmissive,Oe=I.transparent;x.setupLightsView(Q),ne===!0&&_e.setGlobalState(w.clippingPlanes,Q),$&&Se.viewport(b.copy($)),q.length>0&&Pi(q,G,Q),Me.length>0&&Pi(Me,G,Q),Oe.length>0&&Pi(Oe,G,Q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function cl(I,G,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new bi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Ro:Ti,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[$.id],Oe=$.viewport||b;Me.setSize(Oe.z,Oe.w);const Ge=w.getRenderTarget();w.setRenderTarget(Me),w.getClearColor(Y),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),Ce&&at.render(Q);const We=w.toneMapping;w.toneMapping=Gi;const st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),ne===!0&&_e.setGlobalState(w.clippingPlanes,$),Pi(I,Q,$),N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ke=0,Tt=G.length;Ke<Tt;Ke++){const Rt=G[Ke],Ut=Rt.object,_t=Rt.geometry,$e=Rt.material,qe=Rt.group;if($e.side===ti&&Ut.layers.test($.layers)){const At=$e.side;$e.side=Bn,$e.needsUpdate=!0,ul(Ut,Q,$,_t,$e,qe),$e.side=At,$e.needsUpdate=!0,ot=!0}}ot===!0&&(N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me))}w.setRenderTarget(Ge),w.setClearColor(Y,J),st!==void 0&&($.viewport=st),w.toneMapping=We}function Pi(I,G,Q){const $=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Me=I.length;q<Me;q++){const Oe=I[q],Ge=Oe.object,We=Oe.geometry,st=$===null?Oe.material:$,ot=Oe.group;Ge.layers.test(Q.layers)&&ul(Ge,G,Q,We,st,ot)}}function ul(I,G,Q,$,q,Me){I.onBeforeRender(w,G,Q,$,q,Me),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(w,G,Q,$,I,Me),q.transparent===!0&&q.side===ti&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,w.renderBufferDirect(Q,G,$,q,I,Me),q.side=hr,q.needsUpdate=!0,w.renderBufferDirect(Q,G,$,q,I,Me),q.side=ti):w.renderBufferDirect(Q,G,$,q,I,Me),I.onAfterRender(w,G,Q,$,q,Me)}function Ds(I,G,Q){G.isScene!==!0&&(G=Ze);const $=Ie.get(I),q=x.state.lights,Me=x.state.shadowsArray,Oe=q.state.version,Ge=Ye.getParameters(I,q.state,Me,G,Q),We=Ye.getProgramCacheKey(Ge);let st=$.programs;$.environment=I.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(I.isMeshStandardMaterial?Z:R).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,st===void 0&&(I.addEventListener("dispose",wt),st=new Map,$.programs=st);let ot=st.get(We);if(ot!==void 0){if($.currentProgram===ot&&$.lightsStateVersion===Oe)return fl(I,Ge),ot}else Ge.uniforms=Ye.getUniforms(I),I.onBeforeCompile(Ge,w),ot=Ye.acquireProgram(Ge,We),st.set(We,ot),$.uniforms=Ge.uniforms;const Ke=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=_e.uniform),fl(I,Ge),$.needsLights=Ih(I),$.lightsStateVersion=Oe,$.needsLights&&(Ke.ambientLightColor.value=q.state.ambient,Ke.lightProbe.value=q.state.probe,Ke.directionalLights.value=q.state.directional,Ke.directionalLightShadows.value=q.state.directionalShadow,Ke.spotLights.value=q.state.spot,Ke.spotLightShadows.value=q.state.spotShadow,Ke.rectAreaLights.value=q.state.rectArea,Ke.ltc_1.value=q.state.rectAreaLTC1,Ke.ltc_2.value=q.state.rectAreaLTC2,Ke.pointLights.value=q.state.point,Ke.pointLightShadows.value=q.state.pointShadow,Ke.hemisphereLights.value=q.state.hemi,Ke.directionalShadowMap.value=q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ke.spotShadowMap.value=q.state.spotShadowMap,Ke.spotLightMatrix.value=q.state.spotLightMatrix,Ke.spotLightMap.value=q.state.spotLightMap,Ke.pointShadowMap.value=q.state.pointShadowMap,Ke.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=ot,$.uniformsList=null,ot}function hl(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=ru.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function fl(I,G){const Q=Ie.get(I);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Rh(I,G,Q,$,q){G.isScene!==!0&&(G=Ze),N.resetTextureUnits();const Me=G.fog,Oe=$.isMeshStandardMaterial?G.environment:null,Ge=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mr,We=($.isMeshStandardMaterial?Z:R).get($.envMap||Oe),st=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ot=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!Q.morphAttributes.position,Tt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let Ut=Gi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=w.toneMapping);const _t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,$e=_t!==void 0?_t.length:0,qe=Ie.get($),At=x.state.lights;if(ne===!0&&(me===!0||I!==k)){const In=I===k&&$.id===B;_e.setState($,I,In)}let ct=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==At.state.version||qe.outputColorSpace!==Ge||q.isBatchedMesh&&qe.batching===!1||!q.isBatchedMesh&&qe.batching===!0||q.isBatchedMesh&&qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||q.isInstancedMesh&&qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qe.instancingMorph===!1&&q.morphTexture!==null||qe.envMap!==We||$.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==st||qe.vertexTangents!==ot||qe.morphTargets!==Ke||qe.morphNormals!==Tt||qe.morphColors!==Rt||qe.toneMapping!==Ut||qe.morphTargetsCount!==$e)&&(ct=!0):(ct=!0,qe.__version=$.version);let sn=qe.currentProgram;ct===!0&&(sn=Ds($,G,q));let jn=!1,Ft=!1,gr=!1;const Ht=sn.getUniforms(),_i=qe.uniforms;if(Se.useProgram(sn.program)&&(jn=!0,Ft=!0,gr=!0),$.id!==B&&(B=$.id,Ft=!0),jn||k!==I){ve.reverseDepthBuffer?(be.copy(I.projectionMatrix),KS(be),QS(be),Ht.setValue(U,"projectionMatrix",be)):Ht.setValue(U,"projectionMatrix",I.projectionMatrix),Ht.setValue(U,"viewMatrix",I.matrixWorldInverse);const In=Ht.map.cameraPosition;In!==void 0&&In.setValue(U,tt.setFromMatrixPosition(I.matrixWorld)),ve.logarithmicDepthBuffer&&Ht.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ht.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),k!==I&&(k=I,Ft=!0,gr=!0)}if(q.isSkinnedMesh){Ht.setOptional(U,q,"bindMatrix"),Ht.setOptional(U,q,"bindMatrixInverse");const In=q.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ht.setValue(U,"boneTexture",In.boneTexture,N))}q.isBatchedMesh&&(Ht.setOptional(U,q,"batchingTexture"),Ht.setValue(U,"batchingTexture",q._matricesTexture,N),Ht.setOptional(U,q,"batchingIdTexture"),Ht.setValue(U,"batchingIdTexture",q._indirectTexture,N),Ht.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&Ht.setValue(U,"batchingColorTexture",q._colorsTexture,N));const vr=Q.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&lt.update(q,Q,sn),(Ft||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,Ht.setValue(U,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_i.envMap.value=We,_i.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(_i.envMapIntensity.value=G.environmentIntensity),Ft&&(Ht.setValue(U,"toneMappingExposure",w.toneMappingExposure),qe.needsLights&&Ph(_i,gr),Me&&$.fog===!0&&Ee.refreshFogUniforms(_i,Me),Ee.refreshMaterialUniforms(_i,$,he,j,x.state.transmissionRenderTarget[I.id]),ru.upload(U,hl(qe),_i,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ru.upload(U,hl(qe),_i,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ht.setValue(U,"center",q.center),Ht.setValue(U,"modelViewMatrix",q.modelViewMatrix),Ht.setValue(U,"normalMatrix",q.normalMatrix),Ht.setValue(U,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const In=$.uniformsGroups;for(let Ln=0,Lh=In.length;Ln<Lh;Ln++){const dl=In[Ln];V.update(dl,sn),V.bind(dl,sn)}}return sn}function Ph(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function Ih(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,G,Q){Ie.get(I.texture).__webglTexture=G,Ie.get(I.depthTexture).__webglTexture=Q;const $=Ie.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){const Q=Ie.get(I);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,Q=0){L=I,O=G,P=Q;let $=!0,q=null,Me=!1,Oe=!1;if(I){const We=Ie.get(I);if(We.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(We.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(We.__hasExternalTextures)N.rebindTextures(I,Ie.get(I.texture).__webglTexture,Ie.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ke=I.depthTexture;if(We.__boundDepthTexture!==Ke){if(Ke!==null&&Ie.has(Ke)&&(I.width!==Ke.image.width||I.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const st=I.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Oe=!0);const ot=Ie.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ot[G])?q=ot[G][Q]:q=ot[G],Me=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?q=Ie.get(I).__webglMultisampledFramebuffer:Array.isArray(ot)?q=ot[Q]:q=ot,b.copy(I.viewport),C.copy(I.scissor),X=I.scissorTest}else b.copy(ee).multiplyScalar(he).floor(),C.copy(ae).multiplyScalar(he).floor(),X=Re;if(Se.bindFramebuffer(U.FRAMEBUFFER,q)&&$&&Se.drawBuffers(I,q),Se.viewport(b),Se.scissor(C),Se.setScissorTest(X),Me){const We=Ie.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,We.__webglTexture,Q)}else if(Oe){const We=Ie.get(I.texture),st=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,Q||0,st)}B=-1},this.readRenderTargetPixels=function(I,G,Q,$,q,Me,Oe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){Se.bindFramebuffer(U.FRAMEBUFFER,Ge);try{const We=I.texture,st=We.format,ot=We.type;if(!ve.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-$&&Q>=0&&Q<=I.height-q&&U.readPixels(G,Q,$,q,ut.convert(st),ut.convert(ot),Me)}finally{const We=L!==null?Ie.get(L).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(I,G,Q,$,q,Me,Oe){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){const We=I.texture,st=We.format,ot=We.type;if(!ve.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-$&&Q>=0&&Q<=I.height-q){Se.bindFramebuffer(U.FRAMEBUFFER,Ge);const Ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(G,Q,$,q,ut.convert(st),ut.convert(ot),0);const Tt=L!==null?Ie.get(L).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,Tt);const Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await JS(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.deleteBuffer(Ke),U.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,G=null,Q=0){I.isTexture!==!0&&(iu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-Q),q=Math.floor(I.image.width*$),Me=Math.floor(I.image.height*$),Oe=G!==null?G.x:0,Ge=G!==null?G.y:0;N.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,Oe,Ge,q,Me),Se.unbindTexture()},this.copyTextureToTexture=function(I,G,Q=null,$=null,q=0){I.isTexture!==!0&&(iu("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],G=arguments[2],q=arguments[3]||0,Q=null);let Me,Oe,Ge,We,st,ot;Q!==null?(Me=Q.max.x-Q.min.x,Oe=Q.max.y-Q.min.y,Ge=Q.min.x,We=Q.min.y):(Me=I.image.width,Oe=I.image.height,Ge=0,We=0),$!==null?(st=$.x,ot=$.y):(st=0,ot=0);const Ke=ut.convert(G.format),Tt=ut.convert(G.type);N.setTexture2D(G,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Rt=U.getParameter(U.UNPACK_ROW_LENGTH),Ut=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_t=U.getParameter(U.UNPACK_SKIP_PIXELS),$e=U.getParameter(U.UNPACK_SKIP_ROWS),qe=U.getParameter(U.UNPACK_SKIP_IMAGES),At=I.isCompressedTexture?I.mipmaps[q]:I.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,We),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,st,ot,Me,Oe,Ke,Tt,At.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,st,ot,At.width,At.height,Ke,At.data):U.texSubImage2D(U.TEXTURE_2D,q,st,ot,Me,Oe,Ke,Tt,At),U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,$e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe),q===0&&G.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(I,G,Q=null,$=null,q=0){I.isTexture!==!0&&(iu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,$=arguments[1]||null,I=arguments[2],G=arguments[3],q=arguments[4]||0);let Me,Oe,Ge,We,st,ot,Ke,Tt,Rt;const Ut=I.isCompressedTexture?I.mipmaps[q]:I.image;Q!==null?(Me=Q.max.x-Q.min.x,Oe=Q.max.y-Q.min.y,Ge=Q.max.z-Q.min.z,We=Q.min.x,st=Q.min.y,ot=Q.min.z):(Me=Ut.width,Oe=Ut.height,Ge=Ut.depth,We=0,st=0,ot=0),$!==null?(Ke=$.x,Tt=$.y,Rt=$.z):(Ke=0,Tt=0,Rt=0);const _t=ut.convert(G.format),$e=ut.convert(G.type);let qe;if(G.isData3DTexture)N.setTexture3D(G,0),qe=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)N.setTexture2DArray(G,0),qe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const At=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),jn=U.getParameter(U.UNPACK_SKIP_ROWS),Ft=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,st),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ot),I.isDataTexture||I.isData3DTexture?U.texSubImage3D(qe,q,Ke,Tt,Rt,Me,Oe,Ge,_t,$e,Ut.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(qe,q,Ke,Tt,Rt,Me,Oe,Ge,_t,Ut.data):U.texSubImage3D(qe,q,Ke,Tt,Rt,Me,Oe,Ge,_t,$e,Ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,At),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,jn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft),q===0&&G.generateMipmaps&&U.generateMipmap(qe),Se.unbindTexture()},this.initRenderTarget=function(I){Ie.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Se.unbindTexture()},this.resetState=function(){O=0,P=0,L=null,Se.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sh?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===Ja?"display-p3":"srgb"}}class lh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new lh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ch{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Gu=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class uh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oa,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new D;class ni{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ni(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bp extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let so;const sa=new D,oo=new D,ao=new D,lo=new pe,oa=new pe,H_=new rt,Tc=new D,aa=new D,bc=new D,S0=new pe,fd=new pe,M0=new pe;class V_ extends Ct{constructor(e=new bp){if(super(),this.isSprite=!0,this.type="Sprite",so===void 0){so=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uh(t,5);so.setIndex([0,1,2,0,2,3]),so.setAttribute("position",new ni(n,3,0,!1)),so.setAttribute("uv",new ni(n,2,3,!1))}this.geometry=so,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),H_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-ao.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Cc(Tc.set(-.5,-.5,0),ao,a,oo,i,s),Cc(aa.set(.5,-.5,0),ao,a,oo,i,s),Cc(bc.set(.5,.5,0),ao,a,oo,i,s),S0.set(0,0),fd.set(1,0),M0.set(1,1);let c=e.ray.intersectTriangle(Tc,aa,bc,!1,sa);if(c===null&&(Cc(aa.set(-.5,.5,0),ao,a,oo,i,s),fd.set(0,1),c=e.ray.intersectTriangle(Tc,bc,aa,!1,sa),c===null))return;const u=e.ray.origin.distanceTo(sa);u<e.near||u>e.far||t.push({distance:u,point:sa.clone(),uv:Xn.getInterpolation(sa,Tc,aa,bc,S0,fd,M0,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cc(r,e,t,n,i,s){lo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(oa.x=s*lo.x-i*lo.y,oa.y=i*lo.x+s*lo.y):oa.copy(lo),r.copy(e),r.x+=oa.x,r.y+=oa.y,r.applyMatrix4(H_)}const Rc=new D,w0=new D;class G_ extends Ct{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Rc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Rc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Rc.setFromMatrixPosition(e.matrixWorld),w0.setFromMatrixPosition(this.matrixWorld);const n=Rc.distanceTo(w0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const E0=new D,A0=new xt,T0=new xt,fT=new D,b0=new rt,Pc=new D,dd=new mn,C0=new rt,pd=new Po;class W_ extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingBox.expandByPoint(Pc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingSphere.expandByPoint(Pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dd.copy(this.boundingSphere),dd.applyMatrix4(i),e.ray.intersectsSphere(dd)!==!1&&(C0.copy(i).invert(),pd.copy(e.ray).applyMatrix4(C0),!(this.boundingBox!==null&&pd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;A0.fromBufferAttribute(i.attributes.skinIndex,e),T0.fromBufferAttribute(i.attributes.skinWeight,e),E0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=T0.getComponent(s);if(a!==0){const c=A0.getComponent(s);b0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(fT.copy(E0).applyMatrix4(b0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cp extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wi extends qt{constructor(e=null,t=1,n=1,i,s,a,c,u,h=dn,f=dn,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const R0=new rt,dT=new rt;class hh{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:dT;R0.multiplyMatrices(c,t[s]),R0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wi(t,e,e,Pn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Cp),this.bones.push(a),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Ao extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const co=new rt,P0=new rt,Ic=[],I0=new pn,pT=new rt,la=new Qt,ca=new mn;class X_ extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,co),I0.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(I0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,co),ca.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,co),P0.multiplyMatrices(n,co),la.matrixWorld=P0,la.raycast(e,Ic);for(let a=0,c=Ic.length;a<c;a++){const u=Ic[a];u.instanceId=s,u.object=this,t.push(u)}Ic.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(i*this.count),i,this.count,th,qn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function mT(r,e){return r.z-e.z}function gT(r,e){return e.z-r.z}class vT{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Lr=new rt,md=new rt,_T=new rt,yT=new De(1,1,1),L0=new rt,gd=new $a,Lc=new pn,is=new mn,ua=new D,D0=new D,xT=new D,vd=new vT,Rn=new Qt,Dc=[];function ST(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class q_ extends Qt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new mt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Wi(t,e,e,Pn,qn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Wi(t,e,e,Za,dr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Wi(t,e,e,Pn,qn);n.colorSpace=Dt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,f=new c.constructor(n*u),p=new Nt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Nt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Lr),this.getBoundingBoxAt(s,Lc).applyMatrix4(Lr),e.union(Lc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Lr),this.getBoundingSphereAt(s,is).applyMatrix4(Lr),e.union(is)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;_T.toArray(a,i*16),s.needsUpdate=!0;const c=this._colorsTexture;return c&&(yT.toArray(c.image.data,i*4),c.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,a.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new pn,sphereInitialized:!1,sphere:new mn}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._reservedRanges[e];if(i&&a.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const v in n.attributes){const y=t.getAttribute(v),M=n.getAttribute(v);ST(y,M,u);const x=y.itemSize;for(let _=y.count,E=h;_<E;_++){const w=u+_;for(let T=0;T<x;T++)M.setComponent(w,T,0)}M.needsUpdate=!0,M.addUpdateRange(u*x,h*x)}if(i){const v=c.indexStart;for(let y=0;y<a.count;y++)s.setX(v+y,u+a.getX(y));for(let y=a.count,M=c.indexCount;y<M;y++)s.setX(v+y,u);s.needsUpdate=!0,s.addUpdateRange(v,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?a.count:m.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;a&&(p=a.getX(p)),i.expandByPoint(ua.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Lc),Lc.getCenter(i.center);const a=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;a&&(m=a.getX(m)),ua.fromBufferAttribute(c,m),h=Math.max(h,i.center.distanceToSquared(ua))}i.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;Rn.material=this.material,Rn.geometry.index=a.index,Rn.geometry.attributes=a.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new pn),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new mn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Rn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Rn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Rn.geometry.boundingBox),this.getBoundingSphereAt(h,Rn.geometry.boundingSphere),Rn.raycast(e,Dc);for(let p=0,m=Dc.length;p<m;p++){const v=Dc[p];v.object=this,v.batchId=c,t.push(v)}Dc.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,v=this._indirectTexture,y=v.image.data;m&&(L0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),gd.setFromProjectionMatrix(L0,e.coordinateSystem));let M=0;if(this.sortObjects){md.copy(this.matrixWorld).invert(),ua.setFromMatrixPosition(n.matrixWorld).applyMatrix4(md),D0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(md);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const T=u[E].geometryIndex;this.getMatrixAt(E,Lr),this.getBoundingSphereAt(T,is).applyMatrix4(Lr);let O=!1;if(m&&(O=!gd.intersectsSphere(is)),!O){const P=xT.subVectors(is.center,ua).dot(D0);vd.push(p[T],P,E)}}const x=vd.list,_=this.customSort;_===null?x.sort(s.transparent?gT:mT):_.call(this,x,n);for(let E=0,w=x.length;E<w;E++){const T=x[E];h[M]=T.start*c,f[M]=T.count,y[M]=T.index,M++}vd.reset()}else for(let x=0,_=u.length;x<_;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(x,Lr),this.getBoundingSphereAt(E,is).applyMatrix4(Lr),w=!gd.intersectsSphere(is)),!w){const T=p[E];h[M]=T.start*c,f[M]=T.count,y[M]=x,M++}}v.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class kn extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wu=new D,Xu=new D,U0=new rt,ha=new Po,Uc=new mn,_d=new D,N0=new D;let Fr=class extends Ct{constructor(e=new mt,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wu.fromBufferAttribute(t,i-1),Xu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wu.distanceTo(Xu);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=s,e.ray.intersectsSphere(Uc)===!1)return;U0.copy(i).invert(),ha.copy(e.ray).applyMatrix4(U0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const v=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let M=v,x=y-1;M<x;M+=h){const _=f.getX(M),E=f.getX(M+1),w=Nc(this,e,ha,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(y-1),x=f.getX(v),_=Nc(this,e,ha,u,M,x);_&&t.push(_)}}else{const v=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let M=v,x=y-1;M<x;M+=h){const _=Nc(this,e,ha,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=Nc(this,e,ha,u,y-1,v);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Nc(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Wu.fromBufferAttribute(a,i),Xu.fromBufferAttribute(a,s),t.distanceSqToSegment(Wu,Xu,_d,N0)>n)return;_d.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(_d);if(!(u<e.near||u>e.far))return{distance:u,point:N0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const O0=new D,F0=new D;class Yi extends Fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)O0.fromBufferAttribute(t,i),F0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+O0.distanceTo(F0);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y_ extends Fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rp extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const B0=new rt,Zd=new Po,Oc=new mn,Fc=new D;class j_ extends Ct{constructor(e=new mt,t=new Rp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(i),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;B0.copy(i).invert(),Zd.copy(e.ray).applyMatrix4(B0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=m,M=v;y<M;y++){const x=h.getX(y);Fc.fromBufferAttribute(p,x),z0(Fc,x,u,i,e,t,this)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=m,M=v;y<M;y++)Fc.fromBufferAttribute(p,y),z0(Fc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function z0(r,e,t,n,i,s,a){const c=Zd.distanceSqToPoint(r);if(c<t){const u=new D;Zd.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class MT extends qt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:rn,this.magFilter=s!==void 0?s:rn,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class wT extends qt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=dn,this.minFilter=dn,this.generateMipmaps=!1,this.needsUpdate=!0}}class fh extends qt{constructor(e,t,n,i,s,a,c,u,h,f,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ET extends fh{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=gi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AT extends fh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,fr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class TT extends qt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-a,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(s-1);const f=n[i],m=n[i+1]-f,v=(a-f)/m;return(i+v)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),c=this.getPoint(s),u=t||(a.isVector2?new pe:new D);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],a=[],c=new D,u=new rt;for(let v=0;v<=e;v++){const y=v/e;i[v]=this.getTangentAt(y,new D)}s[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),a[0].crossVectors(i[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),a[v]=a[v-1].clone(),c.crossVectors(i[v-1],i[v]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(Zt(i[v-1].dot(i[v]),-1,1));s[v].applyMatrix4(u.makeRotationAxis(c,y))}a[v].crossVectors(i[v],s[v])}if(t===!0){let v=Math.acos(Zt(s[0].dot(s[e]),-1,1));v/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],v*y)),a[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dh extends Ci{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,v=h-this.aY;u=m*f-v*p+this.aX,h=m*p+v*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Z_ extends dh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pp(){let r=0,e=0,t=0,n=0;function i(s,a,c,u){r=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){i(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,f,p){let m=(a-s)/h-(c-s)/(h+f)+(c-a)/f,v=(c-a)/f-(u-a)/(f+p)+(u-c)/p;m*=f,v*=f,i(a,c,m,v)},calc:function(s){const a=s*s,c=a*s;return r+e*s+t*a+n*c}}}const Bc=new D,yd=new Pp,xd=new Pp,Sd=new Pp;class J_ extends Ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(Bc.subVectors(i[0],i[1]).add(i[0]),h=Bc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(Bc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),v),M=Math.pow(p.distanceToSquared(m),v),x=Math.pow(m.distanceToSquared(f),v);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),yd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,M,x),xd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,M,x),Sd.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,M,x)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),xd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Sd.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(yd.calc(u),xd.calc(u),Sd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function k0(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*r+t}function bT(r,e){const t=1-r;return t*t*e}function CT(r,e){return 2*(1-r)*r*e}function RT(r,e){return r*r*e}function Aa(r,e,t,n){return bT(r,e)+CT(r,t)+RT(r,n)}function PT(r,e){const t=1-r;return t*t*t*e}function IT(r,e){const t=1-r;return 3*t*t*r*e}function LT(r,e){return 3*(1-r)*r*r*e}function DT(r,e){return r*r*r*e}function Ta(r,e,t,n,i){return PT(r,e)+IT(r,t)+LT(r,n)+DT(r,i)}class Ip extends Ci{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Ta(e,i.x,s.x,a.x,c.x),Ta(e,i.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K_ extends Ci{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Ta(e,i.x,s.x,a.x,c.x),Ta(e,i.y,s.y,a.y,c.y),Ta(e,i.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lp extends Ci{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q_ extends Ci{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends Ci{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Aa(e,i.x,s.x,a.x),Aa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends Ci{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Aa(e,i.x,s.x,a.x),Aa(e,i.y,s.y,a.y),Aa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Up extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),c=s-a,u=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],p=i[a>i.length-3?i.length-1:a+2];return n.set(k0(c,u.x,h.x,f.x,p.x),k0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var qu=Object.freeze({__proto__:null,ArcCurve:Z_,CatmullRomCurve3:J_,CubicBezierCurve:Ip,CubicBezierCurve3:K_,EllipseCurve:dh,LineCurve:Lp,LineCurve3:Q_,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:ph,SplineCurve:Up});class $_ extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new qu[i.type]().fromJSON(i))}return this}}class za extends $_{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lp(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Dp(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const c=new Ip(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Up(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,a,c,u),this}absellipse(e,t,n,i,s,a,c,u){const h=new dh(e,t,n,i,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class el extends mt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Zt(i,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],f=1/t,p=new D,m=new pe,v=new D,y=new D,M=new D;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,v.x=_*1,v.y=-x,v.z=_*0,M.copy(v),v.normalize(),u.push(v.x,v.y,v.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,v.x=_*1,v.y=-x,v.z=_*0,y.copy(v),v.x+=M.x,v.y+=M.y,v.z+=M.z,v.normalize(),u.push(v.x,v.y,v.z),M.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,T=Math.sin(w),O=Math.cos(w);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*T,p.y=e[P].y,p.z=e[P].x*O,a.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const L=u[3*P+0]*T,B=u[3*P+1],k=u[3*P+0]*O;h.push(L,B,k)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const T=w+E*e.length,O=T,P=T+e.length,L=T+e.length+1,B=T+1;s.push(O,P,B),s.push(L,B,P)}this.setIndex(s),this.setAttribute("position",new je(a,3)),this.setAttribute("uv",new je(c,2)),this.setAttribute("normal",new je(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.points,e.segments,e.phiStart,e.phiLength)}}class mh extends el{constructor(e=1,t=1,n=4,i=8){const s=new za;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new mh(e.radius,e.length,e.capSegments,e.radialSegments)}}class gh extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new D,f=new pe;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const v=n+p/t*i;h.x=e*Math.cos(v),h.y=e*Math.sin(v),a.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(a[m]/e+1)/2,f.y=(a[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Do extends mt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],v=[];let y=0;const M=[],x=n/2;let _=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(v,2));function E(){const T=new D,O=new D;let P=0;const L=(t-e)/n;for(let B=0;B<=s;B++){const k=[],b=B/s,C=b*(t-e)+e;for(let X=0;X<=i;X++){const Y=X/i,J=Y*u+c,ie=Math.sin(J),j=Math.cos(J);O.x=C*ie,O.y=-b*n+x,O.z=C*j,p.push(O.x,O.y,O.z),T.set(ie,L,j).normalize(),m.push(T.x,T.y,T.z),v.push(Y,1-b),k.push(y++)}M.push(k)}for(let B=0;B<i;B++)for(let k=0;k<s;k++){const b=M[k][B],C=M[k+1][B],X=M[k+1][B+1],Y=M[k][B+1];e>0&&(f.push(b,C,Y),P+=3),t>0&&(f.push(C,X,Y),P+=3)}h.addGroup(_,P,0),_+=P}function w(T){const O=y,P=new pe,L=new D;let B=0;const k=T===!0?e:t,b=T===!0?1:-1;for(let X=1;X<=i;X++)p.push(0,x*b,0),m.push(0,b,0),v.push(.5,.5),y++;const C=y;for(let X=0;X<=i;X++){const J=X/i*u+c,ie=Math.cos(J),j=Math.sin(J);L.x=k*j,L.y=x*b,L.z=k*ie,p.push(L.x,L.y,L.z),m.push(0,b,0),P.x=ie*.5+.5,P.y=j*.5*b+.5,v.push(P.x,P.y),y++}for(let X=0;X<i;X++){const Y=O+X,J=C+X;T===!0?f.push(J,J+1,Y):f.push(J+1,J,Y),B+=3}h.addGroup(_,B,T===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vh extends Do{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new vh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];c(i),h(n),f(),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(s.slice(),3)),this.setAttribute("uv",new je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new D,T=new D,O=new D;for(let P=0;P<t.length;P+=3)v(t[P+0],w),v(t[P+1],T),v(t[P+2],O),u(w,T,O,E)}function u(E,w,T,O){const P=O+1,L=[];for(let B=0;B<=P;B++){L[B]=[];const k=E.clone().lerp(T,B/P),b=w.clone().lerp(T,B/P),C=P-B;for(let X=0;X<=C;X++)X===0&&B===P?L[B][X]=k:L[B][X]=k.clone().lerp(b,X/C)}for(let B=0;B<P;B++)for(let k=0;k<2*(P-B)-1;k++){const b=Math.floor(k/2);k%2===0?(m(L[B][b+1]),m(L[B+1][b]),m(L[B][b])):(m(L[B][b+1]),m(L[B+1][b+1]),m(L[B+1][b]))}}function h(E){const w=new D;for(let T=0;T<s.length;T+=3)w.x=s[T+0],w.y=s[T+1],w.z=s[T+2],w.normalize().multiplyScalar(E),s[T+0]=w.x,s[T+1]=w.y,s[T+2]=w.z}function f(){const E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const T=x(E)/2/Math.PI+.5,O=_(E)/Math.PI+.5;a.push(T,1-O)}y(),p()}function p(){for(let E=0;E<a.length;E+=6){const w=a[E+0],T=a[E+2],O=a[E+4],P=Math.max(w,T,O),L=Math.min(w,T,O);P>.9&&L<.1&&(w<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),O<.2&&(a[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function v(E,w){const T=E*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function y(){const E=new D,w=new D,T=new D,O=new D,P=new pe,L=new pe,B=new pe;for(let k=0,b=0;k<s.length;k+=9,b+=6){E.set(s[k+0],s[k+1],s[k+2]),w.set(s[k+3],s[k+4],s[k+5]),T.set(s[k+6],s[k+7],s[k+8]),P.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),B.set(a[b+4],a[b+5]),O.copy(E).add(w).add(T).divideScalar(3);const C=x(O);M(P,b+0,E,C),M(L,b+2,w,C),M(B,b+4,T,C)}}function M(E,w,T,O){O<0&&E.x===1&&(a[w]=E.x-1),T.x===0&&T.z===0&&(a[w]=O/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.vertices,e.indices,e.radius,e.details)}}class _h extends kr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _h(e.radius,e.detail)}}const zc=new D,kc=new D,Md=new D,Hc=new Xn;class ey extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(_s*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},v=[];for(let y=0;y<u;y+=3){a?(h[0]=a.getX(y),h[1]=a.getX(y+1),h[2]=a.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:x,c:_}=Hc;if(M.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Hc.getNormal(Md),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,T=p[E],O=p[w],P=Hc[f[E]],L=Hc[f[w]],B=`${T}_${O}`,k=`${O}_${T}`;k in m&&m[k]?(Md.dot(m[k].normal)<=s&&(v.push(P.x,P.y,P.z),v.push(L.x,L.y,L.z)),m[k]=null):B in m||(m[B]={index0:h[E],index1:h[w],normal:Md.clone()})}}for(const y in m)if(m[y]){const{index0:M,index1:x}=m[y];zc.fromBufferAttribute(c,M),kc.fromBufferAttribute(c,x),v.push(zc.x,zc.y,zc.z),v.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new je(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xs extends za{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new za().fromJSON(i))}return this}}const UT={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ty(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h,f,p,m,v;if(n&&(s=zT(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);v=Math.max(h-c,f-u),v=v!==0?32767/v:0}return ka(s,a,t,c,u,v,0),a}};function ty(r,e,t,n,i){let s,a;if(i===JT(r,e,t,n)>0)for(s=e;s<t;s+=n)a=H0(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=H0(s,r[s],r[s+1],a);return a&&yh(a,a.next)&&(Va(a),a=a.next),a}function As(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(yh(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Va(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(r,e,t,n,i,s,a){if(!r)return;!a&&s&&WT(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?OT(r,n,i,s):NT(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Va(r),r=h.next,c=h.next;continue}if(r=h,r===c){a?a===1?(r=FT(As(r),e,t),ka(r,e,t,n,i,s,2)):a===2&&BT(r,e,t,n,i,s):ka(As(r),e,t,n,i,s,1);break}}}function NT(r){const e=r.prev,t=r,n=r.next;if(Xt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<a?i:a:s<a?s:a,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>a?i:a:s>a?s:a,v=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=v&&yo(i,c,s,u,a,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function OT(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Xt(i,s,a)>=0)return!1;const c=i.x,u=s.x,h=a.x,f=i.y,p=s.y,m=a.y,v=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=Jd(v,y,e,t,n),E=Jd(M,x,e,t,n);let w=r.prevZ,T=r.nextZ;for(;w&&w.z>=_&&T&&T.z<=E;){if(w.x>=v&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&yo(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0||(w=w.prevZ,T.x>=v&&T.x<=M&&T.y>=y&&T.y<=x&&T!==i&&T!==a&&yo(c,f,u,p,h,m,T.x,T.y)&&Xt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;w&&w.z>=_;){if(w.x>=v&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&yo(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;T&&T.z<=E;){if(T.x>=v&&T.x<=M&&T.y>=y&&T.y<=x&&T!==i&&T!==a&&yo(c,f,u,p,h,m,T.x,T.y)&&Xt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function FT(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!yh(i,s)&&ny(i,n,n.next,s)&&Ha(i,s)&&Ha(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Va(n),Va(n.next),n=r=s),n=n.next}while(n!==r);return As(n)}function BT(r,e,t,n,i,s){let a=r;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&YT(a,c)){let u=iy(a,c);a=As(a,a.next),u=As(u,u.next),ka(a,e,t,n,i,s,0),ka(u,e,t,n,i,s,0);return}c=c.next}a=a.next}while(a!==r)}function zT(r,e,t,n){const i=[];let s,a,c,u,h;for(s=0,a=e.length;s<a;s++)c=e[s]*n,u=s<a-1?e[s+1]*n:r.length,h=ty(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(qT(h));for(i.sort(kT),s=0;s<i.length;s++)t=HT(i[s],t);return t}function kT(r,e){return r.x-e.x}function HT(r,e){const t=VT(r,e);if(!t)return e;const n=iy(t,r);return As(n,n.next),As(t,t.next)}function VT(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const m=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&yo(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(s-t.x),Ha(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&GT(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function GT(r,e){return Xt(r.prev,r,e.prev)<0&&Xt(e.next,r,r.next)<0}function WT(r,e,t,n){let i=r;do i.z===0&&(i.z=Jd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,XT(i)}function XT(r){let e,t,n,i,s,a,c,u,h=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(a>1);return r}function Jd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function qT(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function yo(r,e,t,n,i,s,a,c){return(i-a)*(e-c)>=(r-a)*(s-c)&&(r-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(i-a)*(n-c)}function YT(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!jT(r,e)&&(Ha(r,e)&&Ha(e,r)&&ZT(r,e)&&(Xt(r.prev,r,e.prev)||Xt(r,e.prev,e))||yh(r,e)&&Xt(r.prev,r,r.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function yh(r,e){return r.x===e.x&&r.y===e.y}function ny(r,e,t,n){const i=Gc(Xt(r,e,t)),s=Gc(Xt(r,e,n)),a=Gc(Xt(t,n,r)),c=Gc(Xt(t,n,e));return!!(i!==s&&a!==c||i===0&&Vc(r,t,e)||s===0&&Vc(r,n,e)||a===0&&Vc(t,r,n)||c===0&&Vc(t,e,n))}function Vc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Gc(r){return r>0?1:r<0?-1:0}function jT(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ny(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ha(r,e){return Xt(r.prev,r,r.next)<0?Xt(r,e,r.next)>=0&&Xt(r,r.prev,e)>=0:Xt(r,e,r.prev)<0||Xt(r,r.next,e)<0}function ZT(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function iy(r,e){const t=new Kd(r.i,r.x,r.y),n=new Kd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function H0(r,e,t,n){const i=new Kd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Va(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JT(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Xi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Xi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];V0(e),G0(n,e);let a=e.length;t.forEach(V0);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,G0(n,t[u]);const c=UT.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function V0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function G0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class xh extends mt{constructor(e=new xs([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new je(i,3)),this.setAttribute("uv",new je(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,v=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:v-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:KT;let w,T=!1,O,P,L,B;_&&(w=_.getSpacedPoints(f),T=!0,m=!1,O=_.computeFrenetFrames(f,!1),P=new D,L=new D,B=new D),m||(x=0,v=0,y=0,M=0);const k=c.extractPoints(h);let b=k.shape;const C=k.holes;if(!Xi.isClockWise(b)){b=b.reverse();for(let ue=0,U=C.length;ue<U;ue++){const we=C[ue];Xi.isClockWise(we)&&(C[ue]=we.reverse())}}const Y=Xi.triangulateShape(b,C),J=b;for(let ue=0,U=C.length;ue<U;ue++){const we=C[ue];b=b.concat(we)}function ie(ue,U,we){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(U,we)}const j=b.length,he=Y.length;function z(ue,U,we){let xe,ve,Se;const Je=ue.x-U.x,Ie=ue.y-U.y,N=we.x-ue.x,R=we.y-ue.y,Z=Je*Je+Ie*Ie,le=Je*R-Ie*N;if(Math.abs(le)>Number.EPSILON){const de=Math.sqrt(Z),ce=Math.sqrt(N*N+R*R),Ye=U.x-Ie/de,Ee=U.y+Je/de,ke=we.x-R/ce,St=we.y+N/ce,_e=((ke-Ye)*R-(St-Ee)*N)/(Je*R-Ie*N);xe=Ye+Je*_e-ue.x,ve=Ee+Ie*_e-ue.y;const He=xe*xe+ve*ve;if(He<=2)return new pe(xe,ve);Se=Math.sqrt(He/2)}else{let de=!1;Je>Number.EPSILON?N>Number.EPSILON&&(de=!0):Je<-Number.EPSILON?N<-Number.EPSILON&&(de=!0):Math.sign(Ie)===Math.sign(R)&&(de=!0),de?(xe=-Ie,ve=Je,Se=Math.sqrt(Z)):(xe=Je,ve=Ie,Se=Math.sqrt(Z/2))}return new pe(xe/Se,ve/Se)}const oe=[];for(let ue=0,U=J.length,we=U-1,xe=ue+1;ue<U;ue++,we++,xe++)we===U&&(we=0),xe===U&&(xe=0),oe[ue]=z(J[ue],J[we],J[xe]);const ee=[];let ae,Re=oe.concat();for(let ue=0,U=C.length;ue<U;ue++){const we=C[ue];ae=[];for(let xe=0,ve=we.length,Se=ve-1,Je=xe+1;xe<ve;xe++,Se++,Je++)Se===ve&&(Se=0),Je===ve&&(Je=0),ae[xe]=z(we[xe],we[Se],we[Je]);ee.push(ae),Re=Re.concat(ae)}for(let ue=0;ue<x;ue++){const U=ue/x,we=v*Math.cos(U*Math.PI/2),xe=y*Math.sin(U*Math.PI/2)+M;for(let ve=0,Se=J.length;ve<Se;ve++){const Je=ie(J[ve],oe[ve],xe);Ae(Je.x,Je.y,-we)}for(let ve=0,Se=C.length;ve<Se;ve++){const Je=C[ve];ae=ee[ve];for(let Ie=0,N=Je.length;Ie<N;Ie++){const R=ie(Je[Ie],ae[Ie],xe);Ae(R.x,R.y,-we)}}}const Ue=y+M;for(let ue=0;ue<j;ue++){const U=m?ie(b[ue],Re[ue],Ue):b[ue];T?(L.copy(O.normals[0]).multiplyScalar(U.x),P.copy(O.binormals[0]).multiplyScalar(U.y),B.copy(w[0]).add(L).add(P),Ae(B.x,B.y,B.z)):Ae(U.x,U.y,0)}for(let ue=1;ue<=f;ue++)for(let U=0;U<j;U++){const we=m?ie(b[U],Re[U],Ue):b[U];T?(L.copy(O.normals[ue]).multiplyScalar(we.x),P.copy(O.binormals[ue]).multiplyScalar(we.y),B.copy(w[ue]).add(L).add(P),Ae(B.x,B.y,B.z)):Ae(we.x,we.y,p/f*ue)}for(let ue=x-1;ue>=0;ue--){const U=ue/x,we=v*Math.cos(U*Math.PI/2),xe=y*Math.sin(U*Math.PI/2)+M;for(let ve=0,Se=J.length;ve<Se;ve++){const Je=ie(J[ve],oe[ve],xe);Ae(Je.x,Je.y,p+we)}for(let ve=0,Se=C.length;ve<Se;ve++){const Je=C[ve];ae=ee[ve];for(let Ie=0,N=Je.length;Ie<N;Ie++){const R=ie(Je[Ie],ae[Ie],xe);T?Ae(R.x,R.y+w[f-1].y,w[f-1].x+we):Ae(R.x,R.y,p+we)}}}ne(),me();function ne(){const ue=i.length/3;if(m){let U=0,we=j*U;for(let xe=0;xe<he;xe++){const ve=Y[xe];tt(ve[2]+we,ve[1]+we,ve[0]+we)}U=f+x*2,we=j*U;for(let xe=0;xe<he;xe++){const ve=Y[xe];tt(ve[0]+we,ve[1]+we,ve[2]+we)}}else{for(let U=0;U<he;U++){const we=Y[U];tt(we[2],we[1],we[0])}for(let U=0;U<he;U++){const we=Y[U];tt(we[0]+j*f,we[1]+j*f,we[2]+j*f)}}n.addGroup(ue,i.length/3-ue,0)}function me(){const ue=i.length/3;let U=0;be(J,U),U+=J.length;for(let we=0,xe=C.length;we<xe;we++){const ve=C[we];be(ve,U),U+=ve.length}n.addGroup(ue,i.length/3-ue,1)}function be(ue,U){let we=ue.length;for(;--we>=0;){const xe=we;let ve=we-1;ve<0&&(ve=ue.length-1);for(let Se=0,Je=f+x*2;Se<Je;Se++){const Ie=j*Se,N=j*(Se+1),R=U+xe+Ie,Z=U+ve+Ie,le=U+ve+N,de=U+xe+N;nt(R,Z,le,de)}}}function Ae(ue,U,we){u.push(ue),u.push(U),u.push(we)}function tt(ue,U,we){Ze(ue),Ze(U),Ze(we);const xe=i.length/3,ve=E.generateTopUV(n,i,xe-3,xe-2,xe-1);Ce(ve[0]),Ce(ve[1]),Ce(ve[2])}function nt(ue,U,we,xe){Ze(ue),Ze(U),Ze(xe),Ze(U),Ze(we),Ze(xe);const ve=i.length/3,Se=E.generateSideWallUV(n,i,ve-6,ve-3,ve-2,ve-1);Ce(Se[0]),Ce(Se[1]),Ce(Se[3]),Ce(Se[1]),Ce(Se[2]),Ce(Se[3])}function Ze(ue){i.push(u[ue*3+0]),i.push(u[ue*3+1]),i.push(u[ue*3+2])}function Ce(ue){s.push(ue.x),s.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return QT(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new qu[i.type]().fromJSON(i)),new xh(n,e.options)}}const KT={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new pe(s,a),new pe(c,u),new pe(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],v=e[i*3+1],y=e[i*3+2],M=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(a-h)?[new pe(a,1-u),new pe(h,1-p),new pe(m,1-y),new pe(M,1-_)]:[new pe(c,1-u),new pe(f,1-p),new pe(v,1-y),new pe(x,1-_)]}};function QT(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sh extends kr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sh(e.radius,e.detail)}}class tl extends kr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tl(e.radius,e.detail)}}class Mh extends mt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,v=new D,y=new pe;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const _=s+x/n*a;v.x=p*Math.cos(_),v.y=p*Math.sin(_),u.push(v.x,v.y,v.z),h.push(0,0,1),y.x=(v.x/t+1)/2,y.y=(v.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let M=0;M<i;M++){const x=M*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,T=E+n+1,O=E+n+2,P=E+1;c.push(w,T,P),c.push(T,O,P)}}this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wh extends mt{constructor(e=new xs([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new je(i,3)),this.setAttribute("normal",new je(s,3)),this.setAttribute("uv",new je(a,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let v=m.shape;const y=m.holes;Xi.isClockWise(v)===!1&&(v=v.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];Xi.isClockWise(E)===!0&&(y[x]=E.reverse())}const M=Xi.triangulateShape(v,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];v=v.concat(E)}for(let x=0,_=v.length;x<_;x++){const E=v[x];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let x=0,_=M.length;x<_;x++){const E=M[x],w=E[0]+p,T=E[1]+p,O=E[2]+p;n.push(w,T,O),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $T(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new wh(n,e.curveSegments)}}function $T(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class nl extends mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const f=[],p=new D,m=new D,v=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let T=0;_===0&&a===0?T=.5/t:_===n&&u===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){const P=O/t;p.x=-e*Math.cos(i+P*s)*Math.sin(a+w*c),p.y=e*Math.cos(a+w*c),p.z=e*Math.sin(i+P*s)*Math.sin(a+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),x.push(P+T,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],T=f[_][E],O=f[_+1][E],P=f[_+1][E+1];(_!==0||a>0)&&v.push(w,T,P),(_!==n-1||u<Math.PI)&&v.push(T,O,P)}this.setIndex(v),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(M,3)),this.setAttribute("uv",new je(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eh extends kr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eh(e.radius,e.detail)}}class Ah extends mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let v=0;v<=n;v++)for(let y=0;y<=i;y++){const M=y/i*s,x=v/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(M),p.y=(e+t*Math.cos(x))*Math.sin(M),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(v/n)}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const M=(i+1)*v+y-1,x=(i+1)*(v-1)+y-1,_=(i+1)*(v-1)+y,E=(i+1)*v+y;a.push(M,x,E),a.push(x,_,E)}this.setIndex(a),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Th extends mt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,v=new D,y=new D,M=new D,x=new D,_=new D;for(let w=0;w<=n;++w){const T=w/n*s*Math.PI*2;E(T,s,a,e,v),E(T+.01,s,a,e,y),x.subVectors(y,v),_.addVectors(y,v),M.crossVectors(x,_),_.crossVectors(M,x),M.normalize(),_.normalize();for(let O=0;O<=i;++O){const P=O/i*Math.PI*2,L=-t*Math.cos(P),B=t*Math.sin(P);p.x=v.x+(L*_.x+B*M.x),p.y=v.y+(L*_.y+B*M.y),p.z=v.z+(L*_.z+B*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,v).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(O/i)}}for(let w=1;w<=n;w++)for(let T=1;T<=i;T++){const O=(i+1)*(w-1)+(T-1),P=(i+1)*w+(T-1),L=(i+1)*w+T,B=(i+1)*(w-1)+T;c.push(O,P,B),c.push(P,L,B)}this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2));function E(w,T,O,P,L){const B=Math.cos(w),k=Math.sin(w),b=O/T*w,C=Math.cos(b);L.x=P*(2+C)*.5*B,L.y=P*(2+C)*k*.5,L.z=P*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class bh extends mt{constructor(e=new ph(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new D,u=new D,h=new pe;let f=new D;const p=[],m=[],v=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(v,2));function M(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const T=a.normals[w],O=a.binormals[w];for(let P=0;P<=i;P++){const L=P/i*Math.PI*2,B=Math.sin(L),k=-Math.cos(L);u.x=k*T.x+B*O.x,u.y=k*T.y+B*O.y,u.z=k*T.z+B*O.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let T=1;T<=i;T++){const O=(i+1)*(w-1)+(T-1),P=(i+1)*w+(T-1),L=(i+1)*w+T,B=(i+1)*(w-1)+T;y.push(O,P,B),y.push(P,L,B)}}function E(){for(let w=0;w<=t;w++)for(let T=0;T<=i;T++)h.x=w/t,h.y=T/i,v.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bh(new qu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Np extends mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,v=p.count;for(let y=m,M=m+v;y<M;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),W0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),W0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function W0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var X0=Object.freeze({__proto__:null,BoxGeometry:Ts,CapsuleGeometry:mh,CircleGeometry:gh,ConeGeometry:vh,CylinderGeometry:Do,DodecahedronGeometry:_h,EdgesGeometry:ey,ExtrudeGeometry:xh,IcosahedronGeometry:Sh,LatheGeometry:el,OctahedronGeometry:tl,PlaneGeometry:Io,PolyhedronGeometry:kr,RingGeometry:Mh,ShapeGeometry:wh,SphereGeometry:nl,TetrahedronGeometry:Eh,TorusGeometry:Ah,TorusKnotGeometry:Th,TubeGeometry:bh,WireframeGeometry:Np});class ry extends Sn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class sy extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Op extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends Op{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ay extends Sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ly extends Sn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class cy extends Sn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class uy extends Sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hy extends Sn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fy extends kn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ms(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function dy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function py(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[c+u]}return i}function Fp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function eb(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let v=0;v<h.times.length;++v){const y=h.times[v]*i;if(!(y<t||y>=n)){p.push(h.times[v]);for(let M=0;M<f;++M)m.push(h.values[v*f+M])}}p.length!==0&&(h.times=ms(p,h.times.constructor),h.values=ms(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function tb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const v=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=v/3);const y=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new zn().fromArray(M).normalize().conjugate().toArray(M);const x=h.times.length;for(let _=0;_<x;++_){const E=_*v+m;if(u==="quaternion")zn.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=v-m*2;for(let T=0;T<w;++T)h.values[E+T]-=M[T]}}}return r.blendMode=vp,r}const nb={convertArray:ms,isTypedArray:dy,getKeyframeOrder:py,sortedArray:Qd,flattenJSON:Fp,subclip:eb,makeClipAdditive:tb};class il{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class my extends il{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fs,endingEnd:fs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],u=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case ds:s=e,c=2*t-n;break;case La:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ds:a=e,u=2*n-t;break;case La:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,v=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-m*x+2*m*M-m*y,E=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*y+1,w=(-1-v)*x+(1.5+v)*M+.5*y,T=v*x-v*M;for(let O=0;O!==c;++O)s[O]=_*a[f+O]+E*a[h+O]+w*a[u+O]+T*a[p+O];return s}}class Bp extends il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*f;return s}}class gy extends il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new my(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Hu:t=this.InterpolantFactoryMethodLinear;break;case nu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Hu;case this.InterpolantFactoryMethodSmooth:return nu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(i!==void 0&&dy(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===nu,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,v=p+n;for(let y=0;y!==n;++y){const M=t[p+y];if(M!==t[m+y]||M!==t[v+y]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let v=0;v!==n;++v)t[m+v]=t[p+v]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Hu;class Cs extends Ri{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ia;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class zp extends Ri{}zp.prototype.ValueTypeName="color";class Ga extends Ri{}Ga.prototype.ValueTypeName="number";class vy extends il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)zn.slerpFlat(s,0,a,h-c,a,h,u);return s}}class rl extends Ri{InterpolantFactoryMethodLinear(e){return new vy(this.times,this.values,this.getValueSize(),e)}}rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Ri{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ia;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Wa extends Ri{}Wa.prototype.ValueTypeName="vector";class Xa{constructor(e="",t=-1,n=[],i=rh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(rb(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ri.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=py(u);u=Qd(u,1,f),h=Qd(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new Ga(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,v,y,M){if(v.length!==0){const x=[],_=[];Fp(v,x,_,y),x.length!==0&&M.push(new p(m,x,_))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let M=0;M<m[y].morphTargets.length;M++)v[m[y].morphTargets[M]]=-1;for(const M in v){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===M?1:0)}i.push(new Ga(".morphTargetInfluence["+M+"]",x,_))}u=v.length*a}else{const v=".bones["+t[p].name+"]";n(Wa,v+".position",m,"pos",i),n(rl,v+".quaternion",m,"rot",i),n(Wa,v+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ib(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ga;case"vector":case"vector2":case"vector3":case"vector4":return Wa;case"color":return zp;case"quaternion":return rl;case"bool":case"boolean":return Cs;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function rb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ib(r.type);if(r.times===void 0){const t=[],n=[];Fp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const cr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kp{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const v=h[p],y=h[p+1];if(v.global&&(v.lastIndex=0),v.test(f))return y}return null}}}const _y=new kp;class Yn{constructor(e){this.manager=e!==void 0?e:_y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";const or={};class sb extends Error{constructor(e,t){super(e),this.response=t}}class pr extends Yn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(or[e]!==void 0){or[e].push({onLoad:t,onProgress:n,onError:i});return}or[e]=[],or[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=or[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=m?parseInt(m):0,y=v!==0;let M=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:T})=>{if(w)_.close();else{M+=T.byteLength;const O=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:v});for(let P=0,L=f.length;P<L;P++){const B=f[P];B.onProgress&&B.onProgress(O)}_.enqueue(T),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new sb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(m);return h.arrayBuffer().then(y=>v.decode(y))}}}).then(h=>{cr.add(e,h);const f=or[e];delete or[e];for(let p=0,m=f.length;p<m;p++){const v=f[p];v.onLoad&&v.onLoad(h)}}).catch(h=>{const f=or[e];if(f===void 0)throw this.manager.itemError(e),h;delete or[e];for(let p=0,m=f.length;p<m;p++){const v=f[p];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ob extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Xa.parse(e[n]);t.push(i)}return t}}class ab extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],c=new fh,u=new pr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const v=s.parse(m,!0);a[p]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},h+=1,h===6&&(v.mipmapCount===1&&(c.minFilter=rn),c.image=a,c.format=v.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const v=m.mipmaps.length/m.mipmapCount;for(let y=0;y<v;y++){a[y]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)a[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+M]),a[y].format=m.format,a[y].width=m.width,a[y].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=rn),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class qa extends Yn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=Ba("img");function u(){f(),cr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class lb extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=new Qa;s.colorSpace=mi;const a=new qa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class cb extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Wi,c=new pr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:gi,a.wrapT=h.wrapT!==void 0?h.wrapT:gi,a.magFilter=h.magFilter!==void 0?h.magFilter:rn,a.minFilter=h.minFilter!==void 0?h.minFilter:rn,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Hi),h.mipmapCount===1&&(a.minFilter=rn),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class ub extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=new qt,a=new qa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Hr extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yy extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wd=new rt,q0=new D,Y0=new D;class Hp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;q0.setFromMatrixPosition(e.matrixWorld),t.position.copy(q0),Y0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Y0),t.updateMatrixWorld(),wd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hb extends Hp{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=wo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xy extends Hr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new hb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const j0=new rt,fa=new D,Ed=new D;class fb extends Hp{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(fa),Ed.copy(n.position),Ed.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ed),n.updateMatrixWorld(),i.makeTranslation(-fa.x,-fa.y,-fa.z),j0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j0)}}class Sy extends Hr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class db extends Hp{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class My extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wy extends Hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ey extends Hr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ay{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Ty extends Hr{constructor(e=new Ay,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ch extends Yn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new pr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new De().setHex(a.value);break;case"v2":i.uniforms[s].value=new pe().fromArray(a.value);break;case"v3":i.uniforms[s].value=new D().fromArray(a.value);break;case"v4":i.uniforms[s].value=new xt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new dt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new rt().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new pe().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ch.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:ry,SpriteMaterial:bp,RawShaderMaterial:sy,ShaderMaterial:vi,PointsMaterial:Rp,MeshPhysicalMaterial:oy,MeshStandardMaterial:Op,MeshPhongMaterial:ay,MeshToonMaterial:ly,MeshNormalMaterial:cy,MeshLambertMaterial:uy,MeshDepthMaterial:Ap,MeshDistanceMaterial:Tp,MeshBasicMaterial:zr,MeshMatcapMaterial:hy,LineDashedMaterial:fy,LineBasicMaterial:kn,Material:Sn};return new t[e]}}class $d{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vp extends mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class by extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pr(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(v,y){if(t[y]!==void 0)return t[y];const x=v.interleavedBuffers[y],_=s(v,x.buffer),E=go(x.type,_),w=new uh(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(v,y){if(n[y]!==void 0)return n[y];const x=v.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const a=e.isInstancedBufferGeometry?new Vp:new mt,c=e.data.index;if(c!==void 0){const v=go(c.type,c.array);a.setIndex(new Nt(v,1))}const u=e.data.attributes;for(const v in u){const y=u[v];let M;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);M=new ni(x,y.itemSize,y.offset,y.normalized)}else{const x=go(y.type,y.array),_=y.isInstancedBufferAttribute?Ao:Nt;M=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),a.setAttribute(v,M)}const h=e.data.morphAttributes;if(h)for(const v in h){const y=h[v],M=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const T=i(e.data,E.data);w=new ni(T,E.itemSize,E.offset,E.normalized)}else{const T=go(E.type,E.array);w=new Nt(T,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}a.morphAttributes[v]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let v=0,y=p.length;v!==y;++v){const M=p[v];a.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const v=new D;m.center!==void 0&&v.fromArray(m.center),a.boundingSphere=new mn(v,m.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class pb extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new pr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new pr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,i,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new xs().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new hh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new by;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in X0?c=X0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Ch;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Xa.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(f)}else return u.data?{data:go(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new kp(t);s=new qa(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const v=[];for(let y=0,M=m.length;y<M;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?v.push(_):v.push(new Wi(_.data,_.width,_.height)))}i[p.uuid]=new ps(v)}else{const v=c(p.url);i[p.uuid]=new ps(v)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return a.data?{data:go(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new qa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const v=h[p],y=await s(v);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new Wi(y.data,y.width,y.height)))}n[u.uuid]=new ps(f)}else{const f=await s(u.url);n[u.uuid]=new ps(f)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new Qa,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Wi:f=new qt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,mb)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],Z0),f.wrapT=n(c.wrap[1],Z0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,J0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,J0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let a;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const v=[];for(let y=0,M=m.length;y<M;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),v.push(n[x])}return v}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":a=new Gu,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new De(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new ch(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new lh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new nn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new bs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new wy(e.color,e.intensity);break;case"DirectionalLight":a=new My(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Sy(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Ey(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new xy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new yy(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Ty().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),a=new W_(f,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),a=new Qt(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,v=e.instanceMatrix,y=e.instanceColor;a=new X_(f,p,m),a.instanceMatrix=new Ao(new Float32Array(v.array),16),y!==void 0&&(a.instanceColor=new Ao(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),a=new q_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=f,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(M=>{const x=new pn;x.min.fromArray(M.boxMin),x.max.fromArray(M.boxMax);const _=new mn;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:x,sphereInitialized:M.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new G_;break;case"Line":a=new Fr(c(e.geometry),u(e.material));break;case"LineLoop":a=new Y_(c(e.geometry),u(e.material));break;case"LineSegments":a=new Yi(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new j_(c(e.geometry),u(e.material));break;case"Sprite":a=new V_(u(e.material));break;case"Group":a=new _o;break;case"Bone":a=new Cp;break;default:a=new Ct}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let v=0;v<m.length;v++)a.add(this.parseObject(m[v],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let v=0;v<m.length;v++){const y=m[v];a.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let v=0;v<m.length;v++){const y=m[v],M=a.getObjectByProperty("uuid",y.object);M!==void 0&&a.addLevel(M,y.distance,y.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Ct}})}}const mb={UVMapping:Ku,CubeReflectionMapping:fr,CubeRefractionMapping:Or,EquirectangularReflectionMapping:ba,EquirectangularRefractionMapping:Ca,CubeUVReflectionMapping:Co},Z0={RepeatWrapping:Ra,ClampToEdgeWrapping:gi,MirroredRepeatWrapping:Pa},J0={NearestFilter:dn,NearestMipmapNearestFilter:ap,NearestMipmapLinearFilter:mo,LinearFilter:rn,LinearMipmapNearestFilter:_a,LinearMipmapLinearFilter:Hi};class gb extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return cr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),cr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});cr.add(e,u),s.manager.itemStart(e)}}let Wc;class Gp{static getContext(){return Wc===void 0&&(Wc=new(window.AudioContext||window.webkitAudioContext)),Wc}static setContext(e){Wc=e}}class vb extends Yn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new pr(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);Gp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const K0=new rt,Q0=new rt,rs=new rt;class _b{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new nn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new nn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,rs.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(_s*t.fov*.5)/t.zoom;let c,u;Q0.elements[12]=-i,K0.elements[12]=i,c=-a*t.aspect+s,u=a*t.aspect+s,rs.elements[0]=2*t.near/(u-c),rs.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(rs),c=-a*t.aspect-s,u=a*t.aspect-s,rs.elements[0]=2*t.near/(u-c),rs.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(rs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Q0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(K0)}}class Wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $0(){return performance.now()}const ss=new D,ev=new zn,yb=new D,os=new D;class xb extends Ct{constructor(){super(),this.type="AudioListener",this.context=Gp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ss,ev,yb),os.set(0,0,-1).applyQuaternion(ev),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ss.x,i),t.positionY.linearRampToValueAtTime(ss.y,i),t.positionZ.linearRampToValueAtTime(ss.z,i),t.forwardX.linearRampToValueAtTime(os.x,i),t.forwardY.linearRampToValueAtTime(os.y,i),t.forwardZ.linearRampToValueAtTime(os.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ss.x,ss.y,ss.z),t.setOrientation(os.x,os.y,os.z,n.x,n.y,n.z)}}class Cy extends Ct{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const as=new D,tv=new zn,Sb=new D,ls=new D;class Mb extends Cy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(as,tv,Sb),ls.set(0,0,1).applyQuaternion(tv);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(as.x,n),t.positionY.linearRampToValueAtTime(as.y,n),t.positionZ.linearRampToValueAtTime(as.z,n),t.orientationX.linearRampToValueAtTime(ls.x,n),t.orientationY.linearRampToValueAtTime(ls.y,n),t.orientationZ.linearRampToValueAtTime(ls.z,n)}else t.setPosition(as.x,as.y,as.z),t.setOrientation(ls.x,ls.y,ls.z)}}class wb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Ry{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==i;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){zn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;zn.multiplyQuaternionsFlat(e,a,e,t,e,n),zn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*i}}}const Xp="\\[\\]\\.:\\/",Eb=new RegExp("["+Xp+"]","g"),qp="[^"+Xp+"]",Ab="[^"+Xp.replace("\\.","")+"]",Tb=/((?:WC+[\/:])*)/.source.replace("WC",qp),bb=/(WCOD+)?/.source.replace("WCOD",Ab),Cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qp),Rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qp),Pb=new RegExp("^"+Tb+bb+Cb+Rb+"$"),Ib=["material","materials","bones","map"];class Lb{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eb,"")}static parseTrackName(e){const t=Pb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ib.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=Lb;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Db{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ii(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],v=m.uuid;let y=t[v];if(y===void 0){y=u++,t[v]=y,e.push(m);for(let M=0,x=a;M!==x;++M)s[M].push(new bt(m,n[M],i[M]))}else if(y<h){c=e[y];const M=--h,x=e[M];t[x.uuid]=y,e[y]=x,t[v]=M,e[M]=m;for(let _=0,E=a;_!==E;++_){const w=s[_],T=w[M];let O=w[y];w[y]=T,O===void 0&&(O=new bt(m,n[_],i[_])),w[M]=O}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let v=0,y=i;v!==y;++v){const M=n[v],x=M[p],_=M[f];M[f]=x,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,v=e[m],y=--a,M=e[y];t[v.uuid]=p,e[p]=v,t[M.uuid]=m,e[m]=M,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],T=E[y];E[p]=w,E[m]=T,E.pop()}}else{const m=--a,v=e[m];m>0&&(t[v.uuid]=p),e[p]=v,e.pop();for(let y=0,M=i;y!==M;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,a.push(e),c.push(t),s.push(p);for(let m=f,v=u.length;m!==v;++m){const y=u[m];p[m]=new bt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class Py{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:fs,endingEnd:fs};for(let h=0;h!==a;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=f_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,c=i/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case vp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulateAdditive(c);break;case rh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===d_;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===h_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ds,i.endingEnd=ds):(e?i.endingStart=this.zeroSlopeAtStart?ds:fs:i.endingStart=La,t?i.endingEnd=this.zeroSlopeAtEnd?ds:fs:i.endingEnd=La)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const Ub=new Float32Array(1);class Nb extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],v=m.name;let y=f[v];if(y!==void 0)++y.referenceCount,a[p]=y;else{if(y=a[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,v));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;y=new Ry(bt.create(n,v,M),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,v),a[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Bp(new Float32Array(2),new Float32Array(2),1,Ub),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Xa.findByName(i,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new Py(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Xa.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Yp{constructor(e){this.value=e}clone(){return new Yp(this.value.clone===void 0?this.value:this.value.clone())}}let Ob=0;class Fb extends qi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ob++}),this.name="",this.usage=Oa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Yu extends uh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Bb{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const nv=new rt;class Iy{constructor(e,t,n=0,i=1/0){this.ray=new Po(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nv),this}intersectObject(e,t=!0,n=[]){return ep(e,this,n,t),n.sort(iv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ep(e[i],this,n,t);return n.sort(iv),n}}function iv(r,e){return r.distance-e.distance}function ep(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)ep(s[a],e,t,!0)}}class zb{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class jp{constructor(e,t,n,i){jp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const rv=new pe;class Hb{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rv.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sv=new D,Xc=new D;class Ly{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){sv.subVectors(e,this.start),Xc.subVectors(this.end,this.start);const n=Xc.dot(Xc);let s=Xc.dot(sv)/n;return t&&(s=Zt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const ov=new D;class Vb extends Ct{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new mt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new je(i,3));const s=new kn({fog:!1,toneMapped:!1});this.cone=new Yi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ov.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ov),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Dr=new D,qc=new rt,Ad=new rt;class Gb extends Yi{constructor(e){const t=Dy(e),n=new mt,i=[],s=[],a=new De(0,0,1),c=new De(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new je(i,3)),n.setAttribute("color",new je(s,3));const u=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ad.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(qc.multiplyMatrices(Ad,c.matrixWorld),Dr.setFromMatrixPosition(qc),i.setXYZ(a,Dr.x,Dr.y,Dr.z),qc.multiplyMatrices(Ad,c.parent.matrixWorld),Dr.setFromMatrixPosition(qc),i.setXYZ(a+1,Dr.x,Dr.y,Dr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Dy(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Dy(r.children[t]));return e}class Wb extends Qt{constructor(e,t,n){const i=new nl(t,4,2),s=new zr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Xb=new D,av=new De,lv=new De;class qb extends Ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new tl(t);i.rotateY(Math.PI*.5),this.material=new zr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new Nt(a,3)),this.add(new Qt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");av.copy(this.light.color),lv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?av:lv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Xb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Yb extends Yi{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,v=0,y=-c;m<=t;m++,y+=a){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const M=m===s?n:i;M.toArray(h,v),v+=3,M.toArray(h,v),v+=3,M.toArray(h,v),v+=3,M.toArray(h,v),v+=3}const f=new mt;f.setAttribute("position",new je(u,3)),f.setAttribute("color",new je(h,3));const p=new kn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class jb extends Yi{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new De(s),a=new De(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),v=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(v,0,y);const M=p&1?s:a;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:a,v=e-e/n*p;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),x=Math.sin(M)*v,_=Math.cos(M)*v;c.push(x,0,_),u.push(m.r,m.g,m.b),M=(y+1)/i*(Math.PI*2),x=Math.sin(M)*v,_=Math.cos(M)*v,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new mt;h.setAttribute("position",new je(c,3)),h.setAttribute("color",new je(u,3));const f=new kn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const cv=new D,Yc=new D,uv=new D;class Zb extends Ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new mt;i.setAttribute("position",new je([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new kn({fog:!1,toneMapped:!1});this.lightPlane=new Fr(i,s),this.add(this.lightPlane),i=new mt,i.setAttribute("position",new je([0,0,0,0,0,1],3)),this.targetLine=new Fr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),cv.setFromMatrixPosition(this.light.matrixWorld),Yc.setFromMatrixPosition(this.light.target.matrixWorld),uv.subVectors(Yc,cv),this.lightPlane.lookAt(Yc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Yc),this.targetLine.scale.z=uv.length()}}const jc=new D,jt=new Ka;class Jb extends Yi{constructor(e){const t=new mt,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){u(y),u(M)}function u(y){i.push(0,0,0),s.push(0,0,0),a[y]===void 0&&(a[y]=[]),a[y].push(i.length/3-1)}t.setAttribute("position",new je(i,3)),t.setAttribute("color",new je(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new De(16755200),f=new De(16711680),p=new De(43775),m=new De(16777215),v=new De(3355443);this.setColors(h,f,p,m,v)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Kt("c",t,e,jt,0,0,-1),Kt("t",t,e,jt,0,0,1),Kt("n1",t,e,jt,-n,-i,-1),Kt("n2",t,e,jt,n,-i,-1),Kt("n3",t,e,jt,-n,i,-1),Kt("n4",t,e,jt,n,i,-1),Kt("f1",t,e,jt,-n,-i,1),Kt("f2",t,e,jt,n,-i,1),Kt("f3",t,e,jt,-n,i,1),Kt("f4",t,e,jt,n,i,1),Kt("u1",t,e,jt,n*.7,i*1.1,-1),Kt("u2",t,e,jt,-n*.7,i*1.1,-1),Kt("u3",t,e,jt,0,i*2,-1),Kt("cf1",t,e,jt,-n,0,1),Kt("cf2",t,e,jt,n,0,1),Kt("cf3",t,e,jt,0,-i,1),Kt("cf4",t,e,jt,0,i,1),Kt("cn1",t,e,jt,-n,0,-1),Kt("cn2",t,e,jt,n,0,-1),Kt("cn3",t,e,jt,0,-i,-1),Kt("cn4",t,e,jt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kt(r,e,t,n,i,s,a){jc.set(i,s,a).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],jc.x,jc.y,jc.z)}}const Zc=new pn;class Kb extends Yi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new mt;s.setIndex(new Nt(n,1)),s.setAttribute("position",new Nt(i,3)),super(s,new kn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Zc.setFromObject(this.object),Zc.isEmpty())return;const t=Zc.min,n=Zc.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qb extends Yi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new mt;s.setIndex(new Nt(n,1)),s.setAttribute("position",new je(i,3)),super(s,new kn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class $b extends Fr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new mt;a.setAttribute("position",new je(s,3)),a.computeBoundingSphere(),super(a,new kn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new mt;u.setAttribute("position",new je(c,3)),u.computeBoundingSphere(),this.add(new Qt(u,new zr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const hv=new D;let Jc,Td;class eC extends Ct{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Jc===void 0&&(Jc=new mt,Jc.setAttribute("position",new je([0,0,0,0,1,0],3)),Td=new Do(0,.5,1,5,1),Td.translate(0,-.5,0)),this.position.copy(t),this.line=new Fr(Jc,new kn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(Td,new zr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{hv.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(hv,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class tC extends Yi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new mt;i.setAttribute("position",new je(t,3)),i.setAttribute("color",new je(n,3));const s=new kn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new De,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nC{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new za,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,T=_.length;w<T;w++){const O=_[w],P=new xs;P.curves=O.curves,E.push(P)}return E}function n(_,E){const w=E.length;let T=!1;for(let O=w-1,P=0;P<w;O=P++){let L=E[O],B=E[P],k=B.x-L.x,b=B.y-L.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(L=E[P],k=-k,B=E[O],b=-b),_.y<L.y||_.y>B.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const C=b*(_.x-L.x)-k*(_.y-L.y);if(C===0)return!0;if(C<0)continue;T=!T}}else{if(_.y!==L.y)continue;if(B.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=B.x)return!0}}return T}const i=Xi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new xs,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let v=[],y=0,M;m[y]=void 0,v[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),a=i(M),a=e?!a:a,a?(!f&&m[y]&&y++,m[y]={s:new xs,p:M},m[y].s.curves=c.curves,f&&y++,v[y]=[]):v[y].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,T=m.length;w<T;w++)p[w]=[];for(let w=0,T=m.length;w<T;w++){const O=v[w];for(let P=0;P<O.length;P++){const L=O[P];let B=!0;for(let k=0;k<m.length;k++)n(L.p,m[k].p)&&(w!==k&&E++,B?(B=!1,p[k].push(L)):_=!0);B&&p[w].push(L)}}E>0&&_===!1&&(v=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=v[_];for(let w=0,T=x.length;w<T;w++)u.holes.push(x[w].h)}return h}}class iC extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class rC extends bi{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);const sC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:op,AddEquation:Nr,AddOperation:i_,AdditiveAnimationBlendMode:vp,AdditiveBlending:kd,AgXToneMapping:l_,AlphaFormat:hp,AlwaysCompare:w_,AlwaysDepth:cu,AlwaysStencilFunc:Wd,AmbientLight:wy,AnimationAction:Py,AnimationClip:Xa,AnimationLoader:ob,AnimationMixer:Nb,AnimationObjectGroup:Db,AnimationUtils:nb,ArcCurve:Z_,ArrayCamera:z_,ArrowHelper:eC,AttachedBindMode:Gd,Audio:Cy,AudioAnalyser:wb,AudioContext:Gp,AudioListener:xb,AudioLoader:vb,AxesHelper:tC,BackSide:Bn,BasicDepthPacking:p_,BasicShadowMap:Fv,BatchedMesh:q_,Bone:Cp,BooleanKeyframeTrack:Cs,Box2:Hb,Box3:pn,Box3Helper:Qb,BoxGeometry:Ts,BoxHelper:Kb,BufferAttribute:Nt,BufferGeometry:mt,BufferGeometryLoader:by,ByteType:lp,Cache:cr,Camera:Ka,CameraHelper:Jb,CanvasTexture:TT,CapsuleGeometry:mh,CatmullRomCurve3:J_,CineonToneMapping:o_,CircleGeometry:gh,ClampToEdgeWrapping:gi,Clock:Wp,Color:De,ColorKeyframeTrack:zp,ColorManagement:Dt,CompressedArrayTexture:ET,CompressedCubeTexture:AT,CompressedTexture:fh,CompressedTextureLoader:ab,ConeGeometry:vh,ConstantAlphaFactor:e_,ConstantColorFactor:Qv,Controls:iC,CubeCamera:I_,CubeReflectionMapping:fr,CubeRefractionMapping:Or,CubeTexture:Qa,CubeTextureLoader:lb,CubeUVReflectionMapping:Co,CubicBezierCurve:Ip,CubicBezierCurve3:K_,CubicInterpolant:my,CullFaceBack:zd,CullFaceFront:Ov,CullFaceFrontBack:$x,CullFaceNone:Nv,Curve:Ci,CurvePath:$_,CustomBlending:Bv,CustomToneMapping:a_,CylinderGeometry:Do,Cylindrical:kb,Data3DTexture:xp,DataArrayTexture:oh,DataTexture:Wi,DataTextureLoader:cb,DataUtils:dM,DecrementStencilOp:dS,DecrementWrapStencilOp:mS,DefaultLoadingManager:_y,DepthFormat:vs,DepthStencilFormat:Es,DepthTexture:Ep,DetachedBindMode:u_,DirectionalLight:My,DirectionalLightHelper:Zb,DiscreteInterpolant:gy,DisplayP3ColorSpace:sh,DodecahedronGeometry:_h,DoubleSide:ti,DstAlphaFactor:Yv,DstColorFactor:Zv,DynamicCopyUsage:PS,DynamicDrawUsage:ES,DynamicReadUsage:bS,EdgesGeometry:ey,EllipseCurve:dh,EqualCompare:y_,EqualDepth:hu,EqualStencilFunc:yS,EquirectangularReflectionMapping:ba,EquirectangularRefractionMapping:Ca,Euler:ri,EventDispatcher:qi,ExtrudeGeometry:xh,FileLoader:pr,Float16BufferAttribute:yM,Float32BufferAttribute:je,FloatType:qn,Fog:ch,FogExp2:lh,FramebufferTexture:wT,FrontSide:hr,Frustum:$a,GLBufferAttribute:Bb,GLSL1:LS,GLSL3:Xd,GreaterCompare:x_,GreaterDepth:du,GreaterEqualCompare:M_,GreaterEqualDepth:fu,GreaterEqualStencilFunc:wS,GreaterStencilFunc:SS,GridHelper:Yb,Group:_o,HalfFloatType:Ro,HemisphereLight:yy,HemisphereLightHelper:qb,IcosahedronGeometry:Sh,ImageBitmapLoader:gb,ImageLoader:qa,ImageUtils:b_,IncrementStencilOp:fS,IncrementWrapStencilOp:pS,InstancedBufferAttribute:Ao,InstancedBufferGeometry:Vp,InstancedInterleavedBuffer:Yu,InstancedMesh:X_,Int16BufferAttribute:vM,Int32BufferAttribute:_M,Int8BufferAttribute:pM,IntType:Qu,InterleavedBuffer:uh,InterleavedBufferAttribute:ni,Interpolant:il,InterpolateDiscrete:Ia,InterpolateLinear:Hu,InterpolateSmooth:nu,InvertStencilOp:gS,KeepStencilOp:cs,KeyframeTrack:Ri,LOD:G_,LatheGeometry:el,Layers:ys,LessCompare:__,LessDepth:uu,LessEqualCompare:_p,LessEqualDepth:Ms,LessEqualStencilFunc:xS,LessStencilFunc:_S,Light:Hr,LightProbe:Ty,Line:Fr,Line3:Ly,LineBasicMaterial:kn,LineCurve:Lp,LineCurve3:Q_,LineDashedMaterial:fy,LineLoop:Y_,LineSegments:Yi,LinearDisplayP3ColorSpace:Ja,LinearFilter:rn,LinearInterpolant:Bp,LinearMipMapLinearFilter:iS,LinearMipMapNearestFilter:nS,LinearMipmapLinearFilter:Hi,LinearMipmapNearestFilter:_a,LinearSRGBColorSpace:mr,LinearToneMapping:r_,LinearTransfer:Da,Loader:Yn,LoaderUtils:$d,LoadingManager:kp,LoopOnce:h_,LoopPingPong:d_,LoopRepeat:f_,LuminanceAlphaFormat:pp,LuminanceFormat:dp,MOUSE:Kx,Material:Sn,MaterialLoader:Ch,MathUtils:E_,Matrix2:jp,Matrix3:dt,Matrix4:rt,MaxEquation:Vv,Mesh:Qt,MeshBasicMaterial:zr,MeshDepthMaterial:Ap,MeshDistanceMaterial:Tp,MeshLambertMaterial:uy,MeshMatcapMaterial:hy,MeshNormalMaterial:cy,MeshPhongMaterial:ay,MeshPhysicalMaterial:oy,MeshStandardMaterial:Op,MeshToonMaterial:ly,MinEquation:Hv,MirroredRepeatWrapping:Pa,MixOperation:n_,MultiplyBlending:Vd,MultiplyOperation:ja,NearestFilter:dn,NearestMipMapLinearFilter:tS,NearestMipMapNearestFilter:eS,NearestMipmapLinearFilter:mo,NearestMipmapNearestFilter:ap,NeutralToneMapping:c_,NeverCompare:v_,NeverDepth:lu,NeverStencilFunc:vS,NoBlending:ur,NoColorSpace:ar,NoToneMapping:Gi,NormalAnimationBlendMode:rh,NormalBlending:gs,NotEqualCompare:S_,NotEqualDepth:pu,NotEqualStencilFunc:MS,NumberKeyframeTrack:Ga,Object3D:Ct,ObjectLoader:pb,ObjectSpaceNormalMap:g_,OctahedronGeometry:tl,OneFactor:Wv,OneMinusConstantAlphaFactor:t_,OneMinusConstantColorFactor:$v,OneMinusDstAlphaFactor:jv,OneMinusDstColorFactor:Jv,OneMinusSrcAlphaFactor:au,OneMinusSrcColorFactor:qv,OrthographicCamera:bs,P3Primaries:Na,PCFShadowMap:Ju,PCFSoftShadowMap:va,PMREMGenerator:qd,Path:za,PerspectiveCamera:nn,Plane:Ur,PlaneGeometry:Io,PlaneHelper:$b,PointLight:Sy,PointLightHelper:Wb,Points:j_,PointsMaterial:Rp,PolarGridHelper:jb,PolyhedronGeometry:kr,PositionalAudio:Mb,PropertyBinding:bt,PropertyMixer:Ry,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:ph,Quaternion:zn,QuaternionKeyframeTrack:rl,QuaternionLinearInterpolant:vy,RED_GREEN_RGTC2_Format:zu,RED_RGTC1_Format:gp,REVISION:Ya,RGBADepthPacking:m_,RGBAFormat:Pn,RGBAIntegerFormat:ih,RGBA_ASTC_10x10_Format:Du,RGBA_ASTC_10x5_Format:Pu,RGBA_ASTC_10x6_Format:Iu,RGBA_ASTC_10x8_Format:Lu,RGBA_ASTC_12x10_Format:Uu,RGBA_ASTC_12x12_Format:Nu,RGBA_ASTC_4x4_Format:Mu,RGBA_ASTC_5x4_Format:wu,RGBA_ASTC_5x5_Format:Eu,RGBA_ASTC_6x5_Format:Au,RGBA_ASTC_6x6_Format:Tu,RGBA_ASTC_8x5_Format:bu,RGBA_ASTC_8x6_Format:Cu,RGBA_ASTC_8x8_Format:Ru,RGBA_BPTC_Format:wa,RGBA_ETC2_EAC_Format:Su,RGBA_PVRTC_2BPPV1_Format:_u,RGBA_PVRTC_4BPPV1_Format:vu,RGBA_S3TC_DXT1_Format:xa,RGBA_S3TC_DXT3_Format:Sa,RGBA_S3TC_DXT5_Format:Ma,RGBDepthPacking:lS,RGBFormat:fp,RGBIntegerFormat:rS,RGB_BPTC_SIGNED_Format:Ou,RGB_BPTC_UNSIGNED_Format:Fu,RGB_ETC1_Format:yu,RGB_ETC2_Format:xu,RGB_PVRTC_2BPPV1_Format:gu,RGB_PVRTC_4BPPV1_Format:mu,RGB_S3TC_DXT1_Format:ya,RGDepthPacking:cS,RGFormat:mp,RGIntegerFormat:nh,RawShaderMaterial:sy,Ray:Po,Raycaster:Iy,Rec709Primaries:Ua,RectAreaLight:Ey,RedFormat:th,RedIntegerFormat:Za,ReinhardToneMapping:s_,RenderTarget:C_,RepeatWrapping:Ra,ReplaceStencilOp:hS,ReverseSubtractEquation:kv,RingGeometry:Mh,SIGNED_RED_GREEN_RGTC2_Format:ku,SIGNED_RED_RGTC1_Format:Bu,SRGBColorSpace:mi,SRGBTransfer:zt,Scene:Gu,ShaderChunk:gt,ShaderLib:Ai,ShaderMaterial:vi,ShadowMaterial:ry,Shape:xs,ShapeGeometry:wh,ShapePath:nC,ShapeUtils:Xi,ShortType:cp,Skeleton:hh,SkeletonHelper:Gb,SkinnedMesh:W_,Source:ps,Sphere:mn,SphereGeometry:nl,Spherical:zb,SphericalHarmonics3:Ay,SplineCurve:Up,SpotLight:xy,SpotLightHelper:Vb,Sprite:V_,SpriteMaterial:bp,SrcAlphaFactor:ou,SrcAlphaSaturateFactor:Kv,SrcColorFactor:Xv,StaticCopyUsage:RS,StaticDrawUsage:Oa,StaticReadUsage:TS,StereoCamera:_b,StreamCopyUsage:IS,StreamDrawUsage:AS,StreamReadUsage:CS,StringKeyframeTrack:Rs,SubtractEquation:zv,SubtractiveBlending:Hd,TOUCH:Qx,TangentSpaceNormalMap:Br,TetrahedronGeometry:Eh,Texture:qt,TextureLoader:ub,TextureUtils:nT,TorusGeometry:Ah,TorusKnotGeometry:Th,Triangle:Xn,TriangleFanDrawMode:aS,TriangleStripDrawMode:oS,TrianglesDrawMode:sS,TubeGeometry:bh,UVMapping:Ku,Uint16BufferAttribute:Sp,Uint32BufferAttribute:Mp,Uint8BufferAttribute:mM,Uint8ClampedBufferAttribute:gM,Uniform:Yp,UniformsGroup:Fb,UniformsLib:Te,UniformsUtils:Vu,UnsignedByteType:Ti,UnsignedInt248Type:ws,UnsignedInt5999Type:up,UnsignedIntType:dr,UnsignedShort4444Type:$u,UnsignedShort5551Type:eh,UnsignedShortType:Mo,VSMShadowMap:Ei,Vector2:pe,Vector3:D,Vector4:xt,VectorKeyframeTrack:Wa,VideoTexture:MT,WebGL3DRenderTarget:iM,WebGLArrayRenderTarget:nM,WebGLCoordinateSystem:Vi,WebGLCubeRenderTarget:L_,WebGLMultipleRenderTargets:rC,WebGLRenderTarget:bi,WebGLRenderer:k_,WebGLUtils:B_,WebGPUCoordinateSystem:Fa,WireframeGeometry:Np,WrapAroundEnding:La,ZeroCurvatureEnding:fs,ZeroFactor:Gv,ZeroSlopeEnding:ds,ZeroStencilOp:uS,createCanvasElement:T_},Symbol.toStringTag,{value:"Module"}));var Uy={exports:{}},Ps={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ps.ConcurrentRoot=1;Ps.ContinuousEventPriority=4;Ps.DefaultEventPriority=16;Ps.DiscreteEventPriority=1;Ps.IdleEventPriority=536870912;Ps.LegacyRoot=0;Uy.exports=Ps;var xo=Uy.exports;function oC(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(v=>v(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function v(){const y=f(e);if(!p(m,y)){const M=m;h(m=y,M)}}return t.add(v),()=>t.delete(v)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const aC=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),fv=aC?fe.useEffect:fe.useLayoutEffect;function lC(r){const e=typeof r=="function"?oC(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=fe.useReducer(x=>x+1,0),a=e.getState(),c=fe.useRef(a),u=fe.useRef(n),h=fe.useRef(i),f=fe.useRef(!1),p=fe.useRef();p.current===void 0&&(p.current=n(a));let m,v=!1;(c.current!==a||u.current!==n||h.current!==i||f.current)&&(m=n(a),v=!i(p.current,m)),fv(()=>{v&&(p.current=m),c.current=a,u.current=n,h.current=i,f.current=!1});const y=fe.useRef(a);fv(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const M=v?m:p.current;return fe.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Ny={exports:{}},Oy={exports:{}},Fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(z,oe){var ee=z.length;z.push(oe);e:for(;0<ee;){var ae=ee-1>>>1,Re=z[ae];if(0<i(Re,oe))z[ae]=oe,z[ee]=Re,ee=ae;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var oe=z[0],ee=z.pop();if(ee!==oe){z[0]=ee;e:for(var ae=0,Re=z.length,Ue=Re>>>1;ae<Ue;){var ne=2*(ae+1)-1,me=z[ne],be=ne+1,Ae=z[be];if(0>i(me,ee))be<Re&&0>i(Ae,me)?(z[ae]=Ae,z[be]=ee,ae=be):(z[ae]=me,z[ne]=ee,ae=ne);else if(be<Re&&0>i(Ae,ee))z[ae]=Ae,z[be]=ee,ae=be;else break e}}return oe}function i(z,oe){var ee=z.sortIndex-oe.sortIndex;return ee!==0?ee:z.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();r.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,v=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var oe=t(h);oe!==null;){if(oe.callback===null)n(h);else if(oe.startTime<=z)n(h),oe.sortIndex=oe.expirationTime,e(u,oe);else break;oe=t(h)}}function T(z){if(M=!1,w(z),!y)if(t(u)!==null)y=!0,j(O);else{var oe=t(h);oe!==null&&he(T,oe.startTime-z)}}function O(z,oe){y=!1,M&&(M=!1,_(B),B=-1),v=!0;var ee=m;try{for(w(oe),p=t(u);p!==null&&(!(p.expirationTime>oe)||z&&!C());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,m=p.priorityLevel;var Re=ae(p.expirationTime<=oe);oe=r.unstable_now(),typeof Re=="function"?p.callback=Re:p===t(u)&&n(u),w(oe)}else n(u);p=t(u)}if(p!==null)var Ue=!0;else{var ne=t(h);ne!==null&&he(T,ne.startTime-oe),Ue=!1}return Ue}finally{p=null,m=ee,v=!1}}var P=!1,L=null,B=-1,k=5,b=-1;function C(){return!(r.unstable_now()-b<k)}function X(){if(L!==null){var z=r.unstable_now();b=z;var oe=!0;try{oe=L(!0,z)}finally{oe?Y():(P=!1,L=null)}}else P=!1}var Y;if(typeof E=="function")Y=function(){E(X)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ie=J.port2;J.port1.onmessage=X,Y=function(){ie.postMessage(null)}}else Y=function(){x(X,0)};function j(z){L=z,P||(P=!0,Y())}function he(z,oe){B=x(function(){z(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){y||v||(y=!0,j(O))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(z){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var ee=m;m=oe;try{return z()}finally{m=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,oe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=m;m=z;try{return oe()}finally{m=ee}},r.unstable_scheduleCallback=function(z,oe,ee){var ae=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ae+ee:ae):ee=ae,z){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ee+Re,z={id:f++,callback:oe,priorityLevel:z,startTime:ee,expirationTime:Re,sortIndex:-1},ee>ae?(z.sortIndex=ee,e(h,z),t(u)===null&&z===t(h)&&(M?(_(B),B=-1):M=!0,he(T,ee-ae))):(z.sortIndex=Re,e(u,z),y||v||(y=!0,j(O))),z},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(z){var oe=m;return function(){var ee=m;m=oe;try{return z.apply(this,arguments)}finally{m=ee}}}})(Fy);Oy.exports=Fy;var tp=Oy.exports;/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cC=function(e){var t={},n=fe,i=tp,s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),O=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=O&&o[O]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case v:return(o._context.displayName||"Context")+".Provider";case M:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return l=o.displayName||null,l!==null?l:L(o.type)||"Memo";case w:l=o._payload,o=o._init;try{return L(o(l))}catch{}}return null}function B(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function k(o){var l=o,d=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,l.flags&4098&&(d=l.return),o=l.return;while(o)}return l.tag===3?d:null}function b(o){if(k(o)!==o)throw Error(a(188))}function C(o){var l=o.alternate;if(!l){if(l=k(o),l===null)throw Error(a(188));return l!==o?null:o}for(var d=o,g=l;;){var S=d.return;if(S===null)break;var A=S.alternate;if(A===null){if(g=S.return,g!==null){d=g;continue}break}if(S.child===A.child){for(A=S.child;A;){if(A===d)return b(S),o;if(A===g)return b(S),l;A=A.sibling}throw Error(a(188))}if(d.return!==g.return)d=S,g=A;else{for(var F=!1,H=S.child;H;){if(H===d){F=!0,d=S,g=A;break}if(H===g){F=!0,g=S,d=A;break}H=H.sibling}if(!F){for(H=A.child;H;){if(H===d){F=!0,d=A,g=S;break}if(H===g){F=!0,g=A,d=S;break}H=H.sibling}if(!F)throw Error(a(189))}}if(d.alternate!==g)throw Error(a(190))}if(d.tag!==3)throw Error(a(188));return d.stateNode.current===d?o:l}function X(o){return o=C(o),o!==null?Y(o):null}function Y(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=Y(o);if(l!==null)return l;o=o.sibling}return null}function J(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=J(o);if(l!==null)return l}o=o.sibling}return null}var ie=Array.isArray,j=e.getPublicInstance,he=e.getRootHostContext,z=e.getChildHostContext,oe=e.prepareForCommit,ee=e.resetAfterCommit,ae=e.createInstance,Re=e.appendInitialChild,Ue=e.finalizeInitialChildren,ne=e.prepareUpdate,me=e.shouldSetTextContent,be=e.createTextInstance,Ae=e.scheduleTimeout,tt=e.cancelTimeout,nt=e.noTimeout,Ze=e.isPrimaryRenderer,Ce=e.supportsMutation,ue=e.supportsPersistence,U=e.supportsHydration,we=e.getInstanceFromNode,xe=e.preparePortalMount,ve=e.getCurrentEventPriority,Se=e.detachDeletedInstance,Je=e.supportsMicrotasks,Ie=e.scheduleMicrotask,N=e.supportsTestSelectors,R=e.findFiberRoot,Z=e.getBoundingRect,le=e.getTextContent,de=e.isHiddenSubtree,ce=e.matchAccessibilityRole,Ye=e.setFocusIfFocusable,Ee=e.setupIntersectionObserver,ke=e.appendChild,St=e.appendChildToContainer,_e=e.commitTextUpdate,He=e.commitMount,at=e.commitUpdate,lt=e.insertBefore,Ve=e.insertInContainerBefore,Mt=e.removeChild,ut=e.removeChildFromContainer,Ot=e.resetTextContent,V=e.hideInstance,Be=e.hideTextInstance,re=e.unhideInstance,ge=e.unhideTextInstance,Ne=e.clearContainer,ze=e.cloneInstance,wt=e.createContainerChildSet,Gt=e.appendChildToContainerChildSet,Mn=e.finalizeContainerChildren,Et=e.replaceContainerChildren,gn=e.cloneHiddenInstance,si=e.cloneHiddenTextInstance,al=e.canHydrateInstance,ll=e.canHydrateTextInstance,ji=e.canHydrateSuspenseInstance,Is=e.isSuspenseInstancePending,Ls=e.isSuspenseInstanceFallback,cl=e.registerSuspenseInstanceRetry,Pi=e.getNextHydratableSibling,ul=e.getFirstHydratableChild,Ds=e.getFirstHydratableChildWithinContainer,hl=e.getFirstHydratableChildWithinSuspenseInstance,fl=e.hydrateInstance,Rh=e.hydrateTextInstance,Ph=e.hydrateSuspenseInstance,Ih=e.getNextHydratableInstanceAfterSuspenseInstance,I=e.commitHydratedContainer,G=e.commitHydratedSuspenseInstance,Q=e.clearSuspenseBoundary,$=e.clearSuspenseBoundaryFromContainer,q=e.shouldDeleteUnhydratedTailInstances,Me=e.didNotMatchHydratedContainerTextInstance,Oe=e.didNotMatchHydratedTextInstance,Ge;function We(o){if(Ge===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);Ge=l&&l[1]||""}return`
`+Ge+o}var st=!1;function ot(o,l){if(!o||st)return"";st=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(ye){var g=ye}Reflect.construct(o,[],l)}else{try{l.call()}catch(ye){g=ye}o.call(l.prototype)}else{try{throw Error()}catch(ye){g=ye}o()}}catch(ye){if(ye&&g&&typeof ye.stack=="string"){for(var S=ye.stack.split(`
`),A=g.stack.split(`
`),F=S.length-1,H=A.length-1;1<=F&&0<=H&&S[F]!==A[H];)H--;for(;1<=F&&0<=H;F--,H--)if(S[F]!==A[H]){if(F!==1||H!==1)do if(F--,H--,0>H||S[F]!==A[H]){var se=`
`+S[F].replace(" at new "," at ");return o.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",o.displayName)),se}while(1<=F&&0<=H);break}}}finally{st=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?We(o):""}var Ke=Object.prototype.hasOwnProperty,Tt=[],Rt=-1;function Ut(o){return{current:o}}function _t(o){0>Rt||(o.current=Tt[Rt],Tt[Rt]=null,Rt--)}function $e(o,l){Rt++,Tt[Rt]=o.current,o.current=l}var qe={},At=Ut(qe),ct=Ut(!1),sn=qe;function jn(o,l){var d=o.type.contextTypes;if(!d)return qe;var g=o.stateNode;if(g&&g.__reactInternalMemoizedUnmaskedChildContext===l)return g.__reactInternalMemoizedMaskedChildContext;var S={},A;for(A in d)S[A]=l[A];return g&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function Ft(o){return o=o.childContextTypes,o!=null}function gr(){_t(ct),_t(At)}function Ht(o,l,d){if(At.current!==qe)throw Error(a(168));$e(At,l),$e(ct,d)}function _i(o,l,d){var g=o.stateNode;if(l=l.childContextTypes,typeof g.getChildContext!="function")return d;g=g.getChildContext();for(var S in g)if(!(S in l))throw Error(a(108,B(o)||"Unknown",S));return s({},d,g)}function vr(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||qe,sn=At.current,$e(At,o),$e(ct,ct.current),!0}function In(o,l,d){var g=o.stateNode;if(!g)throw Error(a(169));d?(o=_i(o,l,sn),g.__reactInternalMemoizedMergedChildContext=o,_t(ct),_t(At),$e(At,o)):_t(ct),$e(ct,d)}var Ln=Math.clz32?Math.clz32:ax,Lh=Math.log,dl=Math.LN2;function ax(o){return o>>>=0,o===0?32:31-(Lh(o)/dl|0)|0}var pl=64,ml=4194304;function No(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function gl(o,l){var d=o.pendingLanes;if(d===0)return 0;var g=0,S=o.suspendedLanes,A=o.pingedLanes,F=d&268435455;if(F!==0){var H=F&~S;H!==0?g=No(H):(A&=F,A!==0&&(g=No(A)))}else F=d&~S,F!==0?g=No(F):A!==0&&(g=No(A));if(g===0)return 0;if(l!==0&&l!==g&&!(l&S)&&(S=g&-g,A=l&-l,S>=A||S===16&&(A&4194240)!==0))return l;if(g&4&&(g|=d&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=g;0<l;)d=31-Ln(l),S=1<<d,g|=o[d],l&=~S;return g}function lx(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cx(o,l){for(var d=o.suspendedLanes,g=o.pingedLanes,S=o.expirationTimes,A=o.pendingLanes;0<A;){var F=31-Ln(A),H=1<<F,se=S[F];se===-1?(!(H&d)||H&g)&&(S[F]=lx(H,l)):se<=l&&(o.expiredLanes|=H),A&=~H}}function Dh(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Uh(o){for(var l=[],d=0;31>d;d++)l.push(o);return l}function Oo(o,l,d){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-Ln(l),o[l]=d}function ux(o,l){var d=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var g=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Ln(d),A=1<<S;l[S]=0,g[S]=-1,o[S]=-1,d&=~A}}function Nh(o,l){var d=o.entangledLanes|=l;for(o=o.entanglements;d;){var g=31-Ln(d),S=1<<g;S&l|o[g]&l&&(o[g]|=l),d&=~S}}var Pt=0;function im(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Oh=i.unstable_scheduleCallback,rm=i.unstable_cancelCallback,hx=i.unstable_shouldYield,fx=i.unstable_requestPaint,cn=i.unstable_now,Fh=i.unstable_ImmediatePriority,dx=i.unstable_UserBlockingPriority,Bh=i.unstable_NormalPriority,px=i.unstable_IdlePriority,vl=null,Ii=null;function mx(o){if(Ii&&typeof Ii.onCommitFiberRoot=="function")try{Ii.onCommitFiberRoot(vl,o,void 0,(o.current.flags&128)===128)}catch{}}function gx(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var Li=typeof Object.is=="function"?Object.is:gx,Zi=null,_l=!1,zh=!1;function sm(o){Zi===null?Zi=[o]:Zi.push(o)}function vx(o){_l=!0,sm(o)}function Di(){if(!zh&&Zi!==null){zh=!0;var o=0,l=Pt;try{var d=Zi;for(Pt=1;o<d.length;o++){var g=d[o];do g=g(!0);while(g!==null)}Zi=null,_l=!1}catch(S){throw Zi!==null&&(Zi=Zi.slice(o+1)),Oh(Fh,Di),S}finally{Pt=l,zh=!1}}return null}var _x=c.ReactCurrentBatchConfig;function yl(o,l){if(Li(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var d=Object.keys(o),g=Object.keys(l);if(d.length!==g.length)return!1;for(g=0;g<d.length;g++){var S=d[g];if(!Ke.call(l,S)||!Li(o[S],l[S]))return!1}return!0}function yx(o){switch(o.tag){case 5:return We(o.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 2:case 15:return o=ot(o.type,!1),o;case 11:return o=ot(o.type.render,!1),o;case 1:return o=ot(o.type,!0),o;default:return""}}function yi(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var d in o)l[d]===void 0&&(l[d]=o[d]);return l}return l}var xl=Ut(null),Sl=null,Us=null,kh=null;function Hh(){kh=Us=Sl=null}function om(o,l,d){Ze?($e(xl,l._currentValue),l._currentValue=d):($e(xl,l._currentValue2),l._currentValue2=d)}function Vh(o){var l=xl.current;_t(xl),Ze?o._currentValue=l:o._currentValue2=l}function Gh(o,l,d){for(;o!==null;){var g=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,g!==null&&(g.childLanes|=l)):g!==null&&(g.childLanes&l)!==l&&(g.childLanes|=l),o===d)break;o=o.return}}function Ns(o,l){Sl=o,kh=Us=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&l&&(Kn=!0),o.firstContext=null)}function oi(o){var l=Ze?o._currentValue:o._currentValue2;if(kh!==o)if(o={context:o,memoizedValue:l,next:null},Us===null){if(Sl===null)throw Error(a(308));Us=o,Sl.dependencies={lanes:0,firstContext:o}}else Us=Us.next=o;return l}var Ui=null,_r=!1;function Wh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Ji(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function yr(o,l){var d=o.updateQueue;d!==null&&(d=d.shared,$t!==null&&o.mode&1&&!(yt&2)?(o=d.interleaved,o===null?(l.next=l,Ui===null?Ui=[d]:Ui.push(d)):(l.next=o.next,o.next=l),d.interleaved=l):(o=d.pending,o===null?l.next=l:(l.next=o.next,o.next=l),d.pending=l))}function Ml(o,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var g=l.lanes;g&=o.pendingLanes,d|=g,l.lanes=d,Nh(o,d)}}function lm(o,l){var d=o.updateQueue,g=o.alternate;if(g!==null&&(g=g.updateQueue,d===g)){var S=null,A=null;if(d=d.firstBaseUpdate,d!==null){do{var F={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};A===null?S=A=F:A=A.next=F,d=d.next}while(d!==null);A===null?S=A=l:A=A.next=l}else S=A=l;d={baseState:g.baseState,firstBaseUpdate:S,lastBaseUpdate:A,shared:g.shared,effects:g.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=l}function wl(o,l,d,g){var S=o.updateQueue;_r=!1;var A=S.firstBaseUpdate,F=S.lastBaseUpdate,H=S.shared.pending;if(H!==null){S.shared.pending=null;var se=H,ye=se.next;se.next=null,F===null?A=ye:F.next=ye,F=se;var Xe=o.alternate;Xe!==null&&(Xe=Xe.updateQueue,H=Xe.lastBaseUpdate,H!==F&&(H===null?Xe.firstBaseUpdate=ye:H.next=ye,Xe.lastBaseUpdate=se))}if(A!==null){var ht=S.baseState;F=0,Xe=ye=se=null,H=A;do{var it=H.lane,Bt=H.eventTime;if((g&it)===it){Xe!==null&&(Xe=Xe.next={eventTime:Bt,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var et=o,Tn=H;switch(it=l,Bt=d,Tn.tag){case 1:if(et=Tn.payload,typeof et=="function"){ht=et.call(Bt,ht,it);break e}ht=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Tn.payload,it=typeof et=="function"?et.call(Bt,ht,it):et,it==null)break e;ht=s({},ht,it);break e;case 2:_r=!0}}H.callback!==null&&H.lane!==0&&(o.flags|=64,it=S.effects,it===null?S.effects=[H]:it.push(H))}else Bt={eventTime:Bt,lane:it,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Xe===null?(ye=Xe=Bt,se=ht):Xe=Xe.next=Bt,F|=it;if(H=H.next,H===null){if(H=S.shared.pending,H===null)break;it=H,H=it.next,it.next=null,S.lastBaseUpdate=it,S.shared.pending=null}}while(!0);if(Xe===null&&(se=ht),S.baseState=se,S.firstBaseUpdate=ye,S.lastBaseUpdate=Xe,l=S.shared.interleaved,l!==null){S=l;do F|=S.lane,S=S.next;while(S!==l)}else A===null&&(S.shared.lanes=0);Ws|=F,o.lanes=F,o.memoizedState=ht}}function cm(o,l,d){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var g=o[l],S=g.callback;if(S!==null){if(g.callback=null,g=d,typeof S!="function")throw Error(a(191,S));S.call(g)}}}var um=new n.Component().refs;function Xh(o,l,d,g){l=o.memoizedState,d=d(g,l),d=d==null?l:s({},l,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var El={isMounted:function(o){return(o=o._reactInternals)?k(o)===o:!1},enqueueSetState:function(o,l,d){o=o._reactInternals;var g=Un(),S=Mr(o),A=Ji(g,S);A.payload=l,d!=null&&(A.callback=d),yr(o,A),l=hi(o,S,g),l!==null&&Ml(l,o,S)},enqueueReplaceState:function(o,l,d){o=o._reactInternals;var g=Un(),S=Mr(o),A=Ji(g,S);A.tag=1,A.payload=l,d!=null&&(A.callback=d),yr(o,A),l=hi(o,S,g),l!==null&&Ml(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var d=Un(),g=Mr(o),S=Ji(d,g);S.tag=2,l!=null&&(S.callback=l),yr(o,S),l=hi(o,g,d),l!==null&&Ml(l,o,g)}};function hm(o,l,d,g,S,A,F){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(g,A,F):l.prototype&&l.prototype.isPureReactComponent?!yl(d,g)||!yl(S,A):!0}function fm(o,l,d){var g=!1,S=qe,A=l.contextType;return typeof A=="object"&&A!==null?A=oi(A):(S=Ft(l)?sn:At.current,g=l.contextTypes,A=(g=g!=null)?jn(o,S):qe),l=new l(d,A),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=El,o.stateNode=l,l._reactInternals=o,g&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=A),l}function dm(o,l,d,g){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,g),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,g),l.state!==o&&El.enqueueReplaceState(l,l.state,null)}function qh(o,l,d,g){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=um,Wh(o);var A=l.contextType;typeof A=="object"&&A!==null?S.context=oi(A):(A=Ft(l)?sn:At.current,S.context=jn(o,A)),S.state=o.memoizedState,A=l.getDerivedStateFromProps,typeof A=="function"&&(Xh(o,l,A,d),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&El.enqueueReplaceState(S,S.state,null),wl(o,d,S,g),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var Os=[],Fs=0,Al=null,Tl=0,ai=[],li=0,Vr=null,Ki=1,Qi="";function Gr(o,l){Os[Fs++]=Tl,Os[Fs++]=Al,Al=o,Tl=l}function pm(o,l,d){ai[li++]=Ki,ai[li++]=Qi,ai[li++]=Vr,Vr=o;var g=Ki;o=Qi;var S=32-Ln(g)-1;g&=~(1<<S),d+=1;var A=32-Ln(l)+S;if(30<A){var F=S-S%5;A=(g&(1<<F)-1).toString(32),g>>=F,S-=F,Ki=1<<32-Ln(l)+S|d<<S|g,Qi=A+o}else Ki=1<<A|d<<S|g,Qi=o}function Yh(o){o.return!==null&&(Gr(o,1),pm(o,1,0))}function jh(o){for(;o===Al;)Al=Os[--Fs],Os[Fs]=null,Tl=Os[--Fs],Os[Fs]=null;for(;o===Vr;)Vr=ai[--li],ai[li]=null,Qi=ai[--li],ai[li]=null,Ki=ai[--li],ai[li]=null}var Zn=null,Jn=null,Vt=!1,Fo=!1,xi=null;function mm(o,l){var d=fi(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=o,l=o.deletions,l===null?(o.deletions=[d],o.flags|=16):l.push(d)}function gm(o,l){switch(o.tag){case 5:return l=al(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,Zn=o,Jn=ul(l),!0):!1;case 6:return l=ll(l,o.pendingProps),l!==null?(o.stateNode=l,Zn=o,Jn=null,!0):!1;case 13:if(l=ji(l),l!==null){var d=Vr!==null?{id:Ki,overflow:Qi}:null;return o.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=fi(18,null,null,0),d.stateNode=l,d.return=o,o.child=d,Zn=o,Jn=null,!0}return!1;default:return!1}}function Zh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Jh(o){if(Vt){var l=Jn;if(l){var d=l;if(!gm(o,l)){if(Zh(o))throw Error(a(418));l=Pi(d);var g=Zn;l&&gm(o,l)?mm(g,d):(o.flags=o.flags&-4097|2,Vt=!1,Zn=o)}}else{if(Zh(o))throw Error(a(418));o.flags=o.flags&-4097|2,Vt=!1,Zn=o}}}function vm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Zn=o}function Bo(o){if(!U||o!==Zn)return!1;if(!Vt)return vm(o),Vt=!0,!1;if(o.tag!==3&&(o.tag!==5||q(o.type)&&!me(o.type,o.memoizedProps))){var l=Jn;if(l){if(Zh(o)){for(o=Jn;o;)o=Pi(o);throw Error(a(418))}for(;l;)mm(o,l),l=Pi(l)}}if(vm(o),o.tag===13){if(!U)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Jn=Ih(o)}else Jn=Zn?Pi(o.stateNode):null;return!0}function Bs(){U&&(Jn=Zn=null,Fo=Vt=!1)}function Kh(o){xi===null?xi=[o]:xi.push(o)}function zo(o,l,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(a(309));var g=d.stateNode}if(!g)throw Error(a(147,o));var S=g,A=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===A?l.ref:(l=function(F){var H=S.refs;H===um&&(H=S.refs={}),F===null?delete H[A]:H[A]=F},l._stringRef=A,l)}if(typeof o!="string")throw Error(a(284));if(!d._owner)throw Error(a(290,o))}return o}function bl(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function _m(o){var l=o._init;return l(o._payload)}function ym(o){function l(K,W){if(o){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function d(K,W){if(!o)return null;for(;W!==null;)l(K,W),W=W.sibling;return null}function g(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function S(K,W){return K=Er(K,W),K.index=0,K.sibling=null,K}function A(K,W,te){return K.index=te,o?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=2,W):te):(K.flags|=2,W)):(K.flags|=1048576,W)}function F(K){return o&&K.alternate===null&&(K.flags|=2),K}function H(K,W,te,Le){return W===null||W.tag!==6?(W=Nf(te,K.mode,Le),W.return=K,W):(W=S(W,te),W.return=K,W)}function se(K,W,te,Le){var Qe=te.type;return Qe===f?Xe(K,W,te.props.children,Le,te.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===w&&_m(Qe)===W.type)?(Le=S(W,te.props),Le.ref=zo(K,W,te),Le.return=K,Le):(Le=rc(te.type,te.key,te.props,null,K.mode,Le),Le.ref=zo(K,W,te),Le.return=K,Le)}function ye(K,W,te,Le){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Of(te,K.mode,Le),W.return=K,W):(W=S(W,te.children||[]),W.return=K,W)}function Xe(K,W,te,Le,Qe){return W===null||W.tag!==7?(W=Jr(te,K.mode,Le,Qe),W.return=K,W):(W=S(W,te),W.return=K,W)}function ht(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Nf(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case u:return te=rc(W.type,W.key,W.props,null,K.mode,te),te.ref=zo(K,null,W),te.return=K,te;case h:return W=Of(W,K.mode,te),W.return=K,W;case w:var Le=W._init;return ht(K,Le(W._payload),te)}if(ie(W)||P(W))return W=Jr(W,K.mode,te,null),W.return=K,W;bl(K,W)}return null}function it(K,W,te,Le){var Qe=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Qe!==null?null:H(K,W,""+te,Le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case u:return te.key===Qe?se(K,W,te,Le):null;case h:return te.key===Qe?ye(K,W,te,Le):null;case w:return Qe=te._init,it(K,W,Qe(te._payload),Le)}if(ie(te)||P(te))return Qe!==null?null:Xe(K,W,te,Le,null);bl(K,te)}return null}function Bt(K,W,te,Le,Qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return K=K.get(te)||null,H(W,K,""+Le,Qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case u:return K=K.get(Le.key===null?te:Le.key)||null,se(W,K,Le,Qe);case h:return K=K.get(Le.key===null?te:Le.key)||null,ye(W,K,Le,Qe);case w:var vt=Le._init;return Bt(K,W,te,vt(Le._payload),Qe)}if(ie(Le)||P(Le))return K=K.get(te)||null,Xe(W,K,Le,Qe,null);bl(W,Le)}return null}function et(K,W,te,Le){for(var Qe=null,vt=null,ft=W,It=W=0,hn=null;ft!==null&&It<te.length;It++){ft.index>It?(hn=ft,ft=null):hn=ft.sibling;var Lt=it(K,ft,te[It],Le);if(Lt===null){ft===null&&(ft=hn);break}o&&ft&&Lt.alternate===null&&l(K,ft),W=A(Lt,W,It),vt===null?Qe=Lt:vt.sibling=Lt,vt=Lt,ft=hn}if(It===te.length)return d(K,ft),Vt&&Gr(K,It),Qe;if(ft===null){for(;It<te.length;It++)ft=ht(K,te[It],Le),ft!==null&&(W=A(ft,W,It),vt===null?Qe=ft:vt.sibling=ft,vt=ft);return Vt&&Gr(K,It),Qe}for(ft=g(K,ft);It<te.length;It++)hn=Bt(ft,K,It,te[It],Le),hn!==null&&(o&&hn.alternate!==null&&ft.delete(hn.key===null?It:hn.key),W=A(hn,W,It),vt===null?Qe=hn:vt.sibling=hn,vt=hn);return o&&ft.forEach(function(Ar){return l(K,Ar)}),Vt&&Gr(K,It),Qe}function Tn(K,W,te,Le){var Qe=P(te);if(typeof Qe!="function")throw Error(a(150));if(te=Qe.call(te),te==null)throw Error(a(151));for(var vt=Qe=null,ft=W,It=W=0,hn=null,Lt=te.next();ft!==null&&!Lt.done;It++,Lt=te.next()){ft.index>It?(hn=ft,ft=null):hn=ft.sibling;var Ar=it(K,ft,Lt.value,Le);if(Ar===null){ft===null&&(ft=hn);break}o&&ft&&Ar.alternate===null&&l(K,ft),W=A(Ar,W,It),vt===null?Qe=Ar:vt.sibling=Ar,vt=Ar,ft=hn}if(Lt.done)return d(K,ft),Vt&&Gr(K,It),Qe;if(ft===null){for(;!Lt.done;It++,Lt=te.next())Lt=ht(K,Lt.value,Le),Lt!==null&&(W=A(Lt,W,It),vt===null?Qe=Lt:vt.sibling=Lt,vt=Lt);return Vt&&Gr(K,It),Qe}for(ft=g(K,ft);!Lt.done;It++,Lt=te.next())Lt=Bt(ft,K,It,Lt.value,Le),Lt!==null&&(o&&Lt.alternate!==null&&ft.delete(Lt.key===null?It:Lt.key),W=A(Lt,W,It),vt===null?Qe=Lt:vt.sibling=Lt,vt=Lt);return o&&ft.forEach(function(Zx){return l(K,Zx)}),Vt&&Gr(K,It),Qe}function di(K,W,te,Le){if(typeof te=="object"&&te!==null&&te.type===f&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case u:e:{for(var Qe=te.key,vt=W;vt!==null;){if(vt.key===Qe){if(Qe=te.type,Qe===f){if(vt.tag===7){d(K,vt.sibling),W=S(vt,te.props.children),W.return=K,K=W;break e}}else if(vt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===w&&_m(Qe)===vt.type){d(K,vt.sibling),W=S(vt,te.props),W.ref=zo(K,vt,te),W.return=K,K=W;break e}d(K,vt);break}else l(K,vt);vt=vt.sibling}te.type===f?(W=Jr(te.props.children,K.mode,Le,te.key),W.return=K,K=W):(Le=rc(te.type,te.key,te.props,null,K.mode,Le),Le.ref=zo(K,W,te),Le.return=K,K=Le)}return F(K);case h:e:{for(vt=te.key;W!==null;){if(W.key===vt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){d(K,W.sibling),W=S(W,te.children||[]),W.return=K,K=W;break e}else{d(K,W);break}else l(K,W);W=W.sibling}W=Of(te,K.mode,Le),W.return=K,K=W}return F(K);case w:return vt=te._init,di(K,W,vt(te._payload),Le)}if(ie(te))return et(K,W,te,Le);if(P(te))return Tn(K,W,te,Le);bl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(d(K,W.sibling),W=S(W,te),W.return=K,K=W):(d(K,W),W=Nf(te,K.mode,Le),W.return=K,K=W),F(K)):d(K,W)}return di}var zs=ym(!0),xm=ym(!1),ko={},ci=Ut(ko),Ho=Ut(ko),ks=Ut(ko);function Ni(o){if(o===ko)throw Error(a(174));return o}function Qh(o,l){$e(ks,l),$e(Ho,o),$e(ci,ko),o=he(l),_t(ci),$e(ci,o)}function Hs(){_t(ci),_t(Ho),_t(ks)}function Sm(o){var l=Ni(ks.current),d=Ni(ci.current);l=z(d,o.type,l),d!==l&&($e(Ho,o),$e(ci,l))}function $h(o){Ho.current===o&&(_t(ci),_t(Ho))}var Wt=Ut(0);function Cl(o){for(var l=o;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Is(d)||Ls(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var ef=[];function tf(){for(var o=0;o<ef.length;o++){var l=ef[o];Ze?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}ef.length=0}var Rl=c.ReactCurrentDispatcher,ui=c.ReactCurrentBatchConfig,Vs=0,Yt=null,wn=null,un=null,Pl=!1,Vo=!1,Go=0,xx=0;function En(){throw Error(a(321))}function nf(o,l){if(l===null)return!1;for(var d=0;d<l.length&&d<o.length;d++)if(!Li(o[d],l[d]))return!1;return!0}function rf(o,l,d,g,S,A){if(Vs=A,Yt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Rl.current=o===null||o.memoizedState===null?Ex:Ax,o=d(g,S),Vo){A=0;do{if(Vo=!1,Go=0,25<=A)throw Error(a(301));A+=1,un=wn=null,l.updateQueue=null,Rl.current=Tx,o=d(g,S)}while(Vo)}if(Rl.current=Nl,l=wn!==null&&wn.next!==null,Vs=0,un=wn=Yt=null,Pl=!1,l)throw Error(a(300));return o}function sf(){var o=Go!==0;return Go=0,o}function $i(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Yt.memoizedState=un=o:un=un.next=o,un}function Oi(){if(wn===null){var o=Yt.alternate;o=o!==null?o.memoizedState:null}else o=wn.next;var l=un===null?Yt.memoizedState:un.next;if(l!==null)un=l,wn=o;else{if(o===null)throw Error(a(310));wn=o,o={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},un===null?Yt.memoizedState=un=o:un=un.next=o}return un}function Wr(o,l){return typeof l=="function"?l(o):l}function Il(o){var l=Oi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var g=wn,S=g.baseQueue,A=d.pending;if(A!==null){if(S!==null){var F=S.next;S.next=A.next,A.next=F}g.baseQueue=S=A,d.pending=null}if(S!==null){A=S.next,g=g.baseState;var H=F=null,se=null,ye=A;do{var Xe=ye.lane;if((Vs&Xe)===Xe)se!==null&&(se=se.next={lane:0,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),g=ye.hasEagerState?ye.eagerState:o(g,ye.action);else{var ht={lane:Xe,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null};se===null?(H=se=ht,F=g):se=se.next=ht,Yt.lanes|=Xe,Ws|=Xe}ye=ye.next}while(ye!==null&&ye!==A);se===null?F=g:se.next=H,Li(g,l.memoizedState)||(Kn=!0),l.memoizedState=g,l.baseState=F,l.baseQueue=se,d.lastRenderedState=g}if(o=d.interleaved,o!==null){S=o;do A=S.lane,Yt.lanes|=A,Ws|=A,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Ll(o){var l=Oi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var g=d.dispatch,S=d.pending,A=l.memoizedState;if(S!==null){d.pending=null;var F=S=S.next;do A=o(A,F.action),F=F.next;while(F!==S);Li(A,l.memoizedState)||(Kn=!0),l.memoizedState=A,l.baseQueue===null&&(l.baseState=A),d.lastRenderedState=A}return[A,g]}function Mm(){}function wm(o,l){var d=Yt,g=Oi(),S=l(),A=!Li(g.memoizedState,S);if(A&&(g.memoizedState=S,Kn=!0),g=g.queue,Xo(Tm.bind(null,d,g,o),[o]),g.getSnapshot!==l||A||un!==null&&un.memoizedState.tag&1){if(d.flags|=2048,Wo(9,Am.bind(null,d,g,S,l),void 0,null),$t===null)throw Error(a(349));Vs&30||Em(d,l,S)}return S}function Em(o,l,d){o.flags|=16384,o={getSnapshot:l,value:d},l=Yt.updateQueue,l===null?(l={lastEffect:null,stores:null},Yt.updateQueue=l,l.stores=[o]):(d=l.stores,d===null?l.stores=[o]:d.push(o))}function Am(o,l,d,g){l.value=d,l.getSnapshot=g,bm(l)&&hi(o,1,-1)}function Tm(o,l,d){return d(function(){bm(l)&&hi(o,1,-1)})}function bm(o){var l=o.getSnapshot;o=o.value;try{var d=l();return!Li(o,d)}catch{return!0}}function of(o){var l=$i();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:o},l.queue=o,o=o.dispatch=wx.bind(null,Yt,o),[l.memoizedState,o]}function Wo(o,l,d,g){return o={tag:o,create:l,destroy:d,deps:g,next:null},l=Yt.updateQueue,l===null?(l={lastEffect:null,stores:null},Yt.updateQueue=l,l.lastEffect=o.next=o):(d=l.lastEffect,d===null?l.lastEffect=o.next=o:(g=d.next,d.next=o,o.next=g,l.lastEffect=o)),o}function Cm(){return Oi().memoizedState}function Dl(o,l,d,g){var S=$i();Yt.flags|=o,S.memoizedState=Wo(1|l,d,void 0,g===void 0?null:g)}function Ul(o,l,d,g){var S=Oi();g=g===void 0?null:g;var A=void 0;if(wn!==null){var F=wn.memoizedState;if(A=F.destroy,g!==null&&nf(g,F.deps)){S.memoizedState=Wo(l,d,A,g);return}}Yt.flags|=o,S.memoizedState=Wo(1|l,d,A,g)}function af(o,l){return Dl(8390656,8,o,l)}function Xo(o,l){return Ul(2048,8,o,l)}function Rm(o,l){return Ul(4,2,o,l)}function Pm(o,l){return Ul(4,4,o,l)}function Im(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function Lm(o,l,d){return d=d!=null?d.concat([o]):null,Ul(4,4,Im.bind(null,l,o),d)}function lf(){}function Dm(o,l){var d=Oi();l=l===void 0?null:l;var g=d.memoizedState;return g!==null&&l!==null&&nf(l,g[1])?g[0]:(d.memoizedState=[o,l],o)}function Um(o,l){var d=Oi();l=l===void 0?null:l;var g=d.memoizedState;return g!==null&&l!==null&&nf(l,g[1])?g[0]:(o=o(),d.memoizedState=[o,l],o)}function Sx(o,l){var d=Pt;Pt=d!==0&&4>d?d:4,o(!0);var g=ui.transition;ui.transition={};try{o(!1),l()}finally{Pt=d,ui.transition=g}}function Nm(){return Oi().memoizedState}function Mx(o,l,d){var g=Mr(o);d={lane:g,action:d,hasEagerState:!1,eagerState:null,next:null},Om(o)?Fm(l,d):(Bm(o,l,d),d=Un(),o=hi(o,g,d),o!==null&&zm(o,l,g))}function wx(o,l,d){var g=Mr(o),S={lane:g,action:d,hasEagerState:!1,eagerState:null,next:null};if(Om(o))Fm(l,S);else{Bm(o,l,S);var A=o.alternate;if(o.lanes===0&&(A===null||A.lanes===0)&&(A=l.lastRenderedReducer,A!==null))try{var F=l.lastRenderedState,H=A(F,d);if(S.hasEagerState=!0,S.eagerState=H,Li(H,F))return}catch{}finally{}d=Un(),o=hi(o,g,d),o!==null&&zm(o,l,g)}}function Om(o){var l=o.alternate;return o===Yt||l!==null&&l===Yt}function Fm(o,l){Vo=Pl=!0;var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}function Bm(o,l,d){$t!==null&&o.mode&1&&!(yt&2)?(o=l.interleaved,o===null?(d.next=d,Ui===null?Ui=[l]:Ui.push(l)):(d.next=o.next,o.next=d),l.interleaved=d):(o=l.pending,o===null?d.next=d:(d.next=o.next,o.next=d),l.pending=d)}function zm(o,l,d){if(d&4194240){var g=l.lanes;g&=o.pendingLanes,d|=g,l.lanes=d,Nh(o,d)}}var Nl={readContext:oi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Ex={readContext:oi,useCallback:function(o,l){return $i().memoizedState=[o,l===void 0?null:l],o},useContext:oi,useEffect:af,useImperativeHandle:function(o,l,d){return d=d!=null?d.concat([o]):null,Dl(4194308,4,Im.bind(null,l,o),d)},useLayoutEffect:function(o,l){return Dl(4194308,4,o,l)},useInsertionEffect:function(o,l){return Dl(4,2,o,l)},useMemo:function(o,l){var d=$i();return l=l===void 0?null:l,o=o(),d.memoizedState=[o,l],o},useReducer:function(o,l,d){var g=$i();return l=d!==void 0?d(l):l,g.memoizedState=g.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},g.queue=o,o=o.dispatch=Mx.bind(null,Yt,o),[g.memoizedState,o]},useRef:function(o){var l=$i();return o={current:o},l.memoizedState=o},useState:of,useDebugValue:lf,useDeferredValue:function(o){var l=of(o),d=l[0],g=l[1];return af(function(){var S=ui.transition;ui.transition={};try{g(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=of(!1),l=o[0];return o=Sx.bind(null,o[1]),$i().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,d){var g=Yt,S=$i();if(Vt){if(d===void 0)throw Error(a(407));d=d()}else{if(d=l(),$t===null)throw Error(a(349));Vs&30||Em(g,l,d)}S.memoizedState=d;var A={value:d,getSnapshot:l};return S.queue=A,af(Tm.bind(null,g,A,o),[o]),g.flags|=2048,Wo(9,Am.bind(null,g,A,d,l),void 0,null),d},useId:function(){var o=$i(),l=$t.identifierPrefix;if(Vt){var d=Qi,g=Ki;d=(g&~(1<<32-Ln(g)-1)).toString(32)+d,l=":"+l+"R"+d,d=Go++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=xx++,l=":"+l+"r"+d.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},Ax={readContext:oi,useCallback:Dm,useContext:oi,useEffect:Xo,useImperativeHandle:Lm,useInsertionEffect:Rm,useLayoutEffect:Pm,useMemo:Um,useReducer:Il,useRef:Cm,useState:function(){return Il(Wr)},useDebugValue:lf,useDeferredValue:function(o){var l=Il(Wr),d=l[0],g=l[1];return Xo(function(){var S=ui.transition;ui.transition={};try{g(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Il(Wr)[0],l=Oi().memoizedState;return[o,l]},useMutableSource:Mm,useSyncExternalStore:wm,useId:Nm,unstable_isNewReconciler:!1},Tx={readContext:oi,useCallback:Dm,useContext:oi,useEffect:Xo,useImperativeHandle:Lm,useInsertionEffect:Rm,useLayoutEffect:Pm,useMemo:Um,useReducer:Ll,useRef:Cm,useState:function(){return Ll(Wr)},useDebugValue:lf,useDeferredValue:function(o){var l=Ll(Wr),d=l[0],g=l[1];return Xo(function(){var S=ui.transition;ui.transition={};try{g(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Ll(Wr)[0],l=Oi().memoizedState;return[o,l]},useMutableSource:Mm,useSyncExternalStore:wm,useId:Nm,unstable_isNewReconciler:!1};function cf(o,l){try{var d="",g=l;do d+=yx(g),g=g.return;while(g);var S=d}catch(A){S=`
Error generating stack: `+A.message+`
`+A.stack}return{value:o,source:l,stack:S}}function uf(o,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function km(o,l,d){d=Ji(-1,d),d.tag=3,d.payload={element:null};var g=l.value;return d.callback=function(){Kl||(Kl=!0,Cf=g),uf(o,l)},d}function Hm(o,l,d){d=Ji(-1,d),d.tag=3;var g=o.type.getDerivedStateFromError;if(typeof g=="function"){var S=l.value;d.payload=function(){return g(S)},d.callback=function(){uf(o,l)}}var A=o.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(d.callback=function(){uf(o,l),typeof g!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var F=l.stack;this.componentDidCatch(l.value,{componentStack:F!==null?F:""})}),d}function Vm(o,l,d){var g=o.pingCache;if(g===null){g=o.pingCache=new bx;var S=new Set;g.set(l,S)}else S=g.get(l),S===void 0&&(S=new Set,g.set(l,S));S.has(d)||(S.add(d),o=Hx.bind(null,o,l,d),l.then(o,o))}function Gm(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function Wm(o,l,d,g,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===l?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=Ji(-1,1),l.tag=2,yr(d,l))),d.lanes|=1),o)}function Fi(o){o.flags|=4}function Xm(o,l){if(o!==null&&o.child===l.child)return!0;if(l.flags&16)return!1;for(o=l.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var qo,Yo,Ol,Fl;if(Ce)qo=function(o,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)Re(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Yo=function(){},Ol=function(o,l,d,g,S){if(o=o.memoizedProps,o!==g){var A=l.stateNode,F=Ni(ci.current);d=ne(A,d,o,g,S,F),(l.updateQueue=d)&&Fi(l)}},Fl=function(o,l,d,g){d!==g&&Fi(l)};else if(ue){qo=function(o,l,d,g){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&g&&(A=gn(A,S.type,S.memoizedProps,S)),Re(o,A)}else if(S.tag===6)A=S.stateNode,d&&g&&(A=si(A,S.memoizedProps,S)),Re(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),qo(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var qm=function(o,l,d,g){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&g&&(A=gn(A,S.type,S.memoizedProps,S)),Gt(o,A)}else if(S.tag===6)A=S.stateNode,d&&g&&(A=si(A,S.memoizedProps,S)),Gt(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),qm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};Yo=function(o,l){var d=l.stateNode;if(!Xm(o,l)){o=d.containerInfo;var g=wt(o);qm(g,l,!1,!1),d.pendingChildren=g,Fi(l),Mn(o,g)}},Ol=function(o,l,d,g,S){var A=o.stateNode,F=o.memoizedProps;if((o=Xm(o,l))&&F===g)l.stateNode=A;else{var H=l.stateNode,se=Ni(ci.current),ye=null;F!==g&&(ye=ne(H,d,F,g,S,se)),o&&ye===null?l.stateNode=A:(A=ze(A,ye,d,F,g,l,o,H),Ue(A,d,g,S,se)&&Fi(l),l.stateNode=A,o?Fi(l):qo(A,l,!1,!1))}},Fl=function(o,l,d,g){d!==g?(o=Ni(ks.current),d=Ni(ci.current),l.stateNode=be(g,o,d,l),Fi(l)):l.stateNode=o.stateNode}}else Yo=function(){},Ol=function(){},Fl=function(){};function jo(o,l){if(!Vt)switch(o.tailMode){case"hidden":l=o.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var g=null;d!==null;)d.alternate!==null&&(g=d),d=d.sibling;g===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:g.sibling=null}}function An(o){var l=o.alternate!==null&&o.alternate.child===o.child,d=0,g=0;if(l)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,g|=S.subtreeFlags&14680064,g|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,g|=S.subtreeFlags,g|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=g,o.childLanes=d,l}function Cx(o,l,d){var g=l.pendingProps;switch(jh(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(l),null;case 1:return Ft(l.type)&&gr(),An(l),null;case 3:return g=l.stateNode,Hs(),_t(ct),_t(At),tf(),g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null),(o===null||o.child===null)&&(Bo(l)?Fi(l):o===null||o.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,xi!==null&&(If(xi),xi=null))),Yo(o,l),An(l),null;case 5:$h(l),d=Ni(ks.current);var S=l.type;if(o!==null&&l.stateNode!=null)Ol(o,l,S,g,d),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!g){if(l.stateNode===null)throw Error(a(166));return An(l),null}if(o=Ni(ci.current),Bo(l)){if(!U)throw Error(a(175));o=fl(l.stateNode,l.type,l.memoizedProps,d,o,l,!Fo),l.updateQueue=o,o!==null&&Fi(l)}else{var A=ae(S,g,d,o,l);qo(A,l,!1,!1),l.stateNode=A,Ue(A,S,g,d,o)&&Fi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return An(l),null;case 6:if(o&&l.stateNode!=null)Fl(o,l,o.memoizedProps,g);else{if(typeof g!="string"&&l.stateNode===null)throw Error(a(166));if(o=Ni(ks.current),d=Ni(ci.current),Bo(l)){if(!U)throw Error(a(176));if(o=l.stateNode,g=l.memoizedProps,(d=Rh(o,g,l,!Fo))&&(S=Zn,S!==null))switch(A=(S.mode&1)!==0,S.tag){case 3:Me(S.stateNode.containerInfo,o,g,A);break;case 5:Oe(S.type,S.memoizedProps,S.stateNode,o,g,A)}d&&Fi(l)}else l.stateNode=be(g,o,d,l)}return An(l),null;case 13:if(_t(Wt),g=l.memoizedState,Vt&&Jn!==null&&l.mode&1&&!(l.flags&128)){for(o=Jn;o;)o=Pi(o);return Bs(),l.flags|=98560,l}if(g!==null&&g.dehydrated!==null){if(g=Bo(l),o===null){if(!g)throw Error(a(318));if(!U)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Ph(o,l)}else Bs(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return An(l),null}return xi!==null&&(If(xi),xi=null),l.flags&128?(l.lanes=d,l):(g=g!==null,d=!1,o===null?Bo(l):d=o.memoizedState!==null,g&&!d&&(l.child.flags|=8192,l.mode&1&&(o===null||Wt.current&1?on===0&&(on=3):Df())),l.updateQueue!==null&&(l.flags|=4),An(l),null);case 4:return Hs(),Yo(o,l),o===null&&xe(l.stateNode.containerInfo),An(l),null;case 10:return Vh(l.type._context),An(l),null;case 17:return Ft(l.type)&&gr(),An(l),null;case 19:if(_t(Wt),S=l.memoizedState,S===null)return An(l),null;if(g=(l.flags&128)!==0,A=S.rendering,A===null)if(g)jo(S,!1);else{if(on!==0||o!==null&&o.flags&128)for(o=l.child;o!==null;){if(A=Cl(o),A!==null){for(l.flags|=128,jo(S,!1),o=A.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=d,g=l.child;g!==null;)d=g,S=o,d.flags&=14680066,A=d.alternate,A===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=A.childLanes,d.lanes=A.lanes,d.child=A.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=A.memoizedProps,d.memoizedState=A.memoizedState,d.updateQueue=A.updateQueue,d.type=A.type,S=A.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),g=g.sibling;return $e(Wt,Wt.current&1|2),l.child}o=o.sibling}S.tail!==null&&cn()>bf&&(l.flags|=128,g=!0,jo(S,!1),l.lanes=4194304)}else{if(!g)if(o=Cl(A),o!==null){if(l.flags|=128,g=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),jo(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Vt)return An(l),null}else 2*cn()-S.renderingStartTime>bf&&d!==1073741824&&(l.flags|=128,g=!0,jo(S,!1),l.lanes=4194304);S.isBackwards?(A.sibling=l.child,l.child=A):(o=S.last,o!==null?o.sibling=A:l.child=A,S.last=A)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=cn(),l.sibling=null,o=Wt.current,$e(Wt,g?o&1|2:o&1),l):(An(l),null);case 22:case 23:return Lf(),g=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==g&&(l.flags|=8192),g&&l.mode&1?Qn&1073741824&&(An(l),Ce&&l.subtreeFlags&6&&(l.flags|=8192)):An(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var Rx=c.ReactCurrentOwner,Kn=!1;function Dn(o,l,d,g){l.child=o===null?xm(l,null,d,g):zs(l,o.child,d,g)}function Ym(o,l,d,g,S){d=d.render;var A=l.ref;return Ns(l,S),g=rf(o,l,d,g,A,S),d=sf(),o!==null&&!Kn?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,er(o,l,S)):(Vt&&d&&Yh(l),l.flags|=1,Dn(o,l,g,S),l.child)}function jm(o,l,d,g,S){if(o===null){var A=d.type;return typeof A=="function"&&!Uf(A)&&A.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=A,Zm(o,l,A,g,S)):(o=rc(d.type,null,g,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(A=o.child,!(o.lanes&S)){var F=A.memoizedProps;if(d=d.compare,d=d!==null?d:yl,d(F,g)&&o.ref===l.ref)return er(o,l,S)}return l.flags|=1,o=Er(A,g),o.ref=l.ref,o.return=l,l.child=o}function Zm(o,l,d,g,S){if(o!==null&&yl(o.memoizedProps,g)&&o.ref===l.ref)if(Kn=!1,(o.lanes&S)!==0)o.flags&131072&&(Kn=!0);else return l.lanes=o.lanes,er(o,l,S);return hf(o,l,d,g,S)}function Jm(o,l,d){var g=l.pendingProps,S=g.children,A=o!==null?o.memoizedState:null;if(g.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},$e(Gs,Qn),Qn|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},g=A!==null?A.baseLanes:d,$e(Gs,Qn),Qn|=g;else return o=A!==null?A.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,$e(Gs,Qn),Qn|=o,null;else A!==null?(g=A.baseLanes|d,l.memoizedState=null):g=d,$e(Gs,Qn),Qn|=g;return Dn(o,l,S,d),l.child}function Km(o,l){var d=l.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function hf(o,l,d,g,S){var A=Ft(d)?sn:At.current;return A=jn(l,A),Ns(l,S),d=rf(o,l,d,g,A,S),g=sf(),o!==null&&!Kn?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,er(o,l,S)):(Vt&&g&&Yh(l),l.flags|=1,Dn(o,l,d,S),l.child)}function Qm(o,l,d,g,S){if(Ft(d)){var A=!0;vr(l)}else A=!1;if(Ns(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),fm(l,d,g),qh(l,d,g,S),g=!0;else if(o===null){var F=l.stateNode,H=l.memoizedProps;F.props=H;var se=F.context,ye=d.contextType;typeof ye=="object"&&ye!==null?ye=oi(ye):(ye=Ft(d)?sn:At.current,ye=jn(l,ye));var Xe=d.getDerivedStateFromProps,ht=typeof Xe=="function"||typeof F.getSnapshotBeforeUpdate=="function";ht||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(H!==g||se!==ye)&&dm(l,F,g,ye),_r=!1;var it=l.memoizedState;F.state=it,wl(l,g,F,S),se=l.memoizedState,H!==g||it!==se||ct.current||_r?(typeof Xe=="function"&&(Xh(l,d,Xe,g),se=l.memoizedState),(H=_r||hm(l,d,H,g,it,se,ye))?(ht||typeof F.UNSAFE_componentWillMount!="function"&&typeof F.componentWillMount!="function"||(typeof F.componentWillMount=="function"&&F.componentWillMount(),typeof F.UNSAFE_componentWillMount=="function"&&F.UNSAFE_componentWillMount()),typeof F.componentDidMount=="function"&&(l.flags|=4194308)):(typeof F.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=g,l.memoizedState=se),F.props=g,F.state=se,F.context=ye,g=H):(typeof F.componentDidMount=="function"&&(l.flags|=4194308),g=!1)}else{F=l.stateNode,am(o,l),H=l.memoizedProps,ye=l.type===l.elementType?H:yi(l.type,H),F.props=ye,ht=l.pendingProps,it=F.context,se=d.contextType,typeof se=="object"&&se!==null?se=oi(se):(se=Ft(d)?sn:At.current,se=jn(l,se));var Bt=d.getDerivedStateFromProps;(Xe=typeof Bt=="function"||typeof F.getSnapshotBeforeUpdate=="function")||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(H!==ht||it!==se)&&dm(l,F,g,se),_r=!1,it=l.memoizedState,F.state=it,wl(l,g,F,S);var et=l.memoizedState;H!==ht||it!==et||ct.current||_r?(typeof Bt=="function"&&(Xh(l,d,Bt,g),et=l.memoizedState),(ye=_r||hm(l,d,ye,g,it,et,se)||!1)?(Xe||typeof F.UNSAFE_componentWillUpdate!="function"&&typeof F.componentWillUpdate!="function"||(typeof F.componentWillUpdate=="function"&&F.componentWillUpdate(g,et,se),typeof F.UNSAFE_componentWillUpdate=="function"&&F.UNSAFE_componentWillUpdate(g,et,se)),typeof F.componentDidUpdate=="function"&&(l.flags|=4),typeof F.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof F.componentDidUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(l.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(l.flags|=1024),l.memoizedProps=g,l.memoizedState=et),F.props=g,F.state=et,F.context=se,g=ye):(typeof F.componentDidUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(l.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||H===o.memoizedProps&&it===o.memoizedState||(l.flags|=1024),g=!1)}return ff(o,l,d,g,A,S)}function ff(o,l,d,g,S,A){Km(o,l);var F=(l.flags&128)!==0;if(!g&&!F)return S&&In(l,d,!1),er(o,l,A);g=l.stateNode,Rx.current=l;var H=F&&typeof d.getDerivedStateFromError!="function"?null:g.render();return l.flags|=1,o!==null&&F?(l.child=zs(l,o.child,null,A),l.child=zs(l,null,H,A)):Dn(o,l,H,A),l.memoizedState=g.state,S&&In(l,d,!0),l.child}function $m(o){var l=o.stateNode;l.pendingContext?Ht(o,l.pendingContext,l.pendingContext!==l.context):l.context&&Ht(o,l.context,!1),Qh(o,l.containerInfo)}function eg(o,l,d,g,S){return Bs(),Kh(S),l.flags|=256,Dn(o,l,d,g),l.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function zl(o){return{baseLanes:o,cachePool:null}}function tg(o,l,d){var g=l.pendingProps,S=Wt.current,A=!1,F=(l.flags&128)!==0,H;if((H=F)||(H=o!==null&&o.memoizedState===null?!1:(S&2)!==0),H?(A=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),$e(Wt,S&1),o===null)return Jh(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(l.mode&1?Ls(o)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=g.children,o=g.fallback,A?(g=l.mode,A=l.child,S={mode:"hidden",children:S},!(g&1)&&A!==null?(A.childLanes=0,A.pendingProps=S):A=sc(S,g,0,null),o=Jr(o,g,d,null),A.return=l,o.return=l,A.sibling=o,l.child=A,l.child.memoizedState=zl(d),l.memoizedState=Bl,o):df(l,S));if(S=o.memoizedState,S!==null){if(H=S.dehydrated,H!==null){if(F)return l.flags&256?(l.flags&=-257,kl(o,l,d,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(A=g.fallback,S=l.mode,g=sc({mode:"visible",children:g.children},S,0,null),A=Jr(A,S,d,null),A.flags|=2,g.return=l,A.return=l,g.sibling=A,l.child=g,l.mode&1&&zs(l,o.child,null,d),l.child.memoizedState=zl(d),l.memoizedState=Bl,A);if(!(l.mode&1))l=kl(o,l,d,null);else if(Ls(H))l=kl(o,l,d,Error(a(419)));else if(g=(d&o.childLanes)!==0,Kn||g){if(g=$t,g!==null){switch(d&-d){case 4:A=2;break;case 16:A=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:A=32;break;case 536870912:A=268435456;break;default:A=0}g=A&(g.suspendedLanes|d)?0:A,g!==0&&g!==S.retryLane&&(S.retryLane=g,hi(o,g,-1))}Df(),l=kl(o,l,d,Error(a(421)))}else Is(H)?(l.flags|=128,l.child=o.child,l=Vx.bind(null,o),cl(H,l),l=null):(d=S.treeContext,U&&(Jn=hl(H),Zn=l,Vt=!0,xi=null,Fo=!1,d!==null&&(ai[li++]=Ki,ai[li++]=Qi,ai[li++]=Vr,Ki=d.id,Qi=d.overflow,Vr=l)),l=df(l,l.pendingProps.children),l.flags|=4096);return l}return A?(g=ig(o,l,g.children,g.fallback,d),A=l.child,S=o.child.memoizedState,A.memoizedState=S===null?zl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,l.memoizedState=Bl,g):(d=ng(o,l,g.children,d),l.memoizedState=null,d)}return A?(g=ig(o,l,g.children,g.fallback,d),A=l.child,S=o.child.memoizedState,A.memoizedState=S===null?zl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,l.memoizedState=Bl,g):(d=ng(o,l,g.children,d),l.memoizedState=null,d)}function df(o,l){return l=sc({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function ng(o,l,d,g){var S=o.child;return o=S.sibling,d=Er(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=g),d.return=l,d.sibling=null,o!==null&&(g=l.deletions,g===null?(l.deletions=[o],l.flags|=16):g.push(o)),l.child=d}function ig(o,l,d,g,S){var A=l.mode;o=o.child;var F=o.sibling,H={mode:"hidden",children:d};return!(A&1)&&l.child!==o?(d=l.child,d.childLanes=0,d.pendingProps=H,l.deletions=null):(d=Er(o,H),d.subtreeFlags=o.subtreeFlags&14680064),F!==null?g=Er(F,g):(g=Jr(g,A,S,null),g.flags|=2),g.return=l,d.return=l,d.sibling=g,l.child=d,g}function kl(o,l,d,g){return g!==null&&Kh(g),zs(l,o.child,null,d),o=df(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function rg(o,l,d){o.lanes|=l;var g=o.alternate;g!==null&&(g.lanes|=l),Gh(o.return,l,d)}function pf(o,l,d,g,S){var A=o.memoizedState;A===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:g,tail:d,tailMode:S}:(A.isBackwards=l,A.rendering=null,A.renderingStartTime=0,A.last=g,A.tail=d,A.tailMode=S)}function sg(o,l,d){var g=l.pendingProps,S=g.revealOrder,A=g.tail;if(Dn(o,l,g.children,d),g=Wt.current,g&2)g=g&1|2,l.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&rg(o,d,l);else if(o.tag===19)rg(o,d,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}g&=1}if($e(Wt,g),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)o=d.alternate,o!==null&&Cl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),pf(l,!1,S,d,A);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Cl(o)===null){l.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}pf(l,!0,d,null,A);break;case"together":pf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function er(o,l,d){if(o!==null&&(l.dependencies=o.dependencies),Ws|=l.lanes,!(d&l.childLanes))return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,d=Er(o,o.pendingProps),l.child=d,d.return=l;o.sibling!==null;)o=o.sibling,d=d.sibling=Er(o,o.pendingProps),d.return=l;d.sibling=null}return l.child}function Px(o,l,d){switch(l.tag){case 3:$m(l),Bs();break;case 5:Sm(l);break;case 1:Ft(l.type)&&vr(l);break;case 4:Qh(l,l.stateNode.containerInfo);break;case 10:om(l,l.type._context,l.memoizedProps.value);break;case 13:var g=l.memoizedState;if(g!==null)return g.dehydrated!==null?($e(Wt,Wt.current&1),l.flags|=128,null):d&l.child.childLanes?tg(o,l,d):($e(Wt,Wt.current&1),o=er(o,l,d),o!==null?o.sibling:null);$e(Wt,Wt.current&1);break;case 19:if(g=(d&l.childLanes)!==0,o.flags&128){if(g)return sg(o,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),$e(Wt,Wt.current),g)break;return null;case 22:case 23:return l.lanes=0,Jm(o,l,d)}return er(o,l,d)}function Ix(o,l){switch(jh(l),l.tag){case 1:return Ft(l.type)&&gr(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return Hs(),_t(ct),_t(At),tf(),o=l.flags,o&65536&&!(o&128)?(l.flags=o&-65537|128,l):null;case 5:return $h(l),null;case 13:if(_t(Wt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));Bs()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return _t(Wt),null;case 4:return Hs(),null;case 10:return Vh(l.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Hl=!1,Xr=!1,Lx=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Vl(o,l){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(g){Gn(o,l,g)}else d.current=null}function mf(o,l,d){try{d()}catch(g){Gn(o,l,g)}}var og=!1;function Dx(o,l){for(oe(o.containerInfo),Pe=l;Pe!==null;)if(o=Pe,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Pe=l;else for(;Pe!==null;){o=Pe;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var g=d.memoizedProps,S=d.memoizedState,A=o.stateNode,F=A.getSnapshotBeforeUpdate(o.elementType===o.type?g:yi(o.type,g),S);A.__reactInternalSnapshotBeforeUpdate=F}break;case 3:Ce&&Ne(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(H){Gn(o,o.return,H)}if(l=o.sibling,l!==null){l.return=o.return,Pe=l;break}Pe=o.return}return d=og,og=!1,d}function qr(o,l,d){var g=l.updateQueue;if(g=g!==null?g.lastEffect:null,g!==null){var S=g=g.next;do{if((S.tag&o)===o){var A=S.destroy;S.destroy=void 0,A!==void 0&&mf(l,d,A)}S=S.next}while(S!==g)}}function Zo(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&o)===o){var g=d.create;d.destroy=g()}d=d.next}while(d!==l)}}function gf(o){var l=o.ref;if(l!==null){var d=o.stateNode;switch(o.tag){case 5:o=j(d);break;default:o=d}typeof l=="function"?l(o):l.current=o}}function ag(o,l,d){if(Ii&&typeof Ii.onCommitFiberUnmount=="function")try{Ii.onCommitFiberUnmount(vl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var g=o=o.next;do{var S=g,A=S.destroy;S=S.tag,A!==void 0&&(S&2||S&4)&&mf(l,d,A),g=g.next}while(g!==o)}break;case 1:if(Vl(l,d),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(F){Gn(l,d,F)}break;case 5:Vl(l,d);break;case 4:Ce?dg(o,l,d):ue&&ue&&(l=l.stateNode.containerInfo,d=wt(l),Et(l,d))}}function lg(o,l,d){for(var g=l;;)if(ag(o,g,d),g.child===null||Ce&&g.tag===4){if(g===l)break;for(;g.sibling===null;){if(g.return===null||g.return===l)return;g=g.return}g.sibling.return=g.return,g=g.sibling}else g.child.return=g,g=g.child}function cg(o){var l=o.alternate;l!==null&&(o.alternate=null,cg(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&Se(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function ug(o){return o.tag===5||o.tag===3||o.tag===4}function hg(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||ug(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function fg(o){if(Ce){e:{for(var l=o.return;l!==null;){if(ug(l))break e;l=l.return}throw Error(a(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(Ot(l),d.flags&=-33),d=hg(o),_f(o,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=hg(o),vf(o,d,l);break;default:throw Error(a(161))}}}function vf(o,l,d){var g=o.tag;if(g===5||g===6)o=o.stateNode,l?Ve(d,o,l):St(d,o);else if(g!==4&&(o=o.child,o!==null))for(vf(o,l,d),o=o.sibling;o!==null;)vf(o,l,d),o=o.sibling}function _f(o,l,d){var g=o.tag;if(g===5||g===6)o=o.stateNode,l?lt(d,o,l):ke(d,o);else if(g!==4&&(o=o.child,o!==null))for(_f(o,l,d),o=o.sibling;o!==null;)_f(o,l,d),o=o.sibling}function dg(o,l,d){for(var g=l,S=!1,A,F;;){if(!S){S=g.return;e:for(;;){if(S===null)throw Error(a(160));switch(A=S.stateNode,S.tag){case 5:F=!1;break e;case 3:A=A.containerInfo,F=!0;break e;case 4:A=A.containerInfo,F=!0;break e}S=S.return}S=!0}if(g.tag===5||g.tag===6)lg(o,g,d),F?ut(A,g.stateNode):Mt(A,g.stateNode);else if(g.tag===18)F?$(A,g.stateNode):Q(A,g.stateNode);else if(g.tag===4){if(g.child!==null){A=g.stateNode.containerInfo,F=!0,g.child.return=g,g=g.child;continue}}else if(ag(o,g,d),g.child!==null){g.child.return=g,g=g.child;continue}if(g===l)break;for(;g.sibling===null;){if(g.return===null||g.return===l)return;g=g.return,g.tag===4&&(S=!1)}g.sibling.return=g.return,g=g.sibling}}function yf(o,l){if(Ce){switch(l.tag){case 0:case 11:case 14:case 15:qr(3,l,l.return),Zo(3,l),qr(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var g=l.memoizedProps;o=o!==null?o.memoizedProps:g;var S=l.type,A=l.updateQueue;l.updateQueue=null,A!==null&&at(d,A,S,o,g,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));d=l.memoizedProps,_e(l.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:U&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);return;case 12:return;case 13:Gl(l);return;case 19:Gl(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:qr(3,l,l.return),Zo(3,l),qr(5,l,l.return);return;case 12:return;case 13:Gl(l);return;case 19:Gl(l);return;case 3:U&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(ue){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,Et(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function Gl(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Lx),l.forEach(function(g){var S=Gx.bind(null,o,g);d.has(g)||(d.add(g),g.then(S,S))})}}function Ux(o,l){for(Pe=l;Pe!==null;){l=Pe;var d=l.deletions;if(d!==null)for(var g=0;g<d.length;g++){var S=d[g];try{var A=o;Ce?dg(A,S,l):lg(A,S,l);var F=S.alternate;F!==null&&(F.return=null),S.return=null}catch(Qe){Gn(S,l,Qe)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Pe=d;else for(;Pe!==null;){l=Pe;try{var H=l.flags;if(H&32&&Ce&&Ot(l.stateNode),H&512){var se=l.alternate;if(se!==null){var ye=se.ref;ye!==null&&(typeof ye=="function"?ye(null):ye.current=null)}}if(H&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var Xe=l.alternate;(Xe===null||Xe.memoizedState===null)&&(Tf=cn())}break;case 22:var ht=l.memoizedState!==null,it=l.alternate,Bt=it!==null&&it.memoizedState!==null;if(d=l,Ce){e:if(g=d,S=ht,A=null,Ce)for(var et=g;;){if(et.tag===5){if(A===null){A=et;var Tn=et.stateNode;S?V(Tn):re(et.stateNode,et.memoizedProps)}}else if(et.tag===6){if(A===null){var di=et.stateNode;S?Be(di):ge(di,et.memoizedProps)}}else if((et.tag!==22&&et.tag!==23||et.memoizedState===null||et===g)&&et.child!==null){et.child.return=et,et=et.child;continue}if(et===g)break;for(;et.sibling===null;){if(et.return===null||et.return===g)break e;A===et&&(A=null),et=et.return}A===et&&(A=null),et.sibling.return=et.return,et=et.sibling}}if(ht&&!Bt&&d.mode&1){Pe=d;for(var K=d.child;K!==null;){for(d=Pe=K;Pe!==null;){g=Pe;var W=g.child;switch(g.tag){case 0:case 11:case 14:case 15:qr(4,g,g.return);break;case 1:Vl(g,g.return);var te=g.stateNode;if(typeof te.componentWillUnmount=="function"){var Le=g.return;try{te.props=g.memoizedProps,te.state=g.memoizedState,te.componentWillUnmount()}catch(Qe){Gn(g,Le,Qe)}}break;case 5:Vl(g,g.return);break;case 22:if(g.memoizedState!==null){gg(d);continue}}W!==null?(W.return=g,Pe=W):gg(d)}K=K.sibling}}}switch(H&4102){case 2:fg(l),l.flags&=-3;break;case 6:fg(l),l.flags&=-3,yf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,yf(l.alternate,l);break;case 4:yf(l.alternate,l)}}catch(Qe){Gn(l,l.return,Qe)}if(d=l.sibling,d!==null){d.return=l.return,Pe=d;break}Pe=l.return}}}function Nx(o,l,d){Pe=o,pg(o)}function pg(o,l,d){for(var g=(o.mode&1)!==0;Pe!==null;){var S=Pe,A=S.child;if(S.tag===22&&g){var F=S.memoizedState!==null||Hl;if(!F){var H=S.alternate,se=H!==null&&H.memoizedState!==null||Xr;H=Hl;var ye=Xr;if(Hl=F,(Xr=se)&&!ye)for(Pe=S;Pe!==null;)F=Pe,se=F.child,F.tag===22&&F.memoizedState!==null?vg(S):se!==null?(se.return=F,Pe=se):vg(S);for(;A!==null;)Pe=A,pg(A),A=A.sibling;Pe=S,Hl=H,Xr=ye}mg(o)}else S.subtreeFlags&8772&&A!==null?(A.return=S,Pe=A):mg(o)}}function mg(o){for(;Pe!==null;){var l=Pe;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Xr||Zo(5,l);break;case 1:var g=l.stateNode;if(l.flags&4&&!Xr)if(d===null)g.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:yi(l.type,d.memoizedProps);g.componentDidUpdate(S,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}var A=l.updateQueue;A!==null&&cm(l,A,g);break;case 3:var F=l.updateQueue;if(F!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=j(l.child.stateNode);break;case 1:d=l.child.stateNode}cm(l,F,d)}break;case 5:var H=l.stateNode;d===null&&l.flags&4&&He(H,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(U&&l.memoizedState===null){var se=l.alternate;if(se!==null){var ye=se.memoizedState;if(ye!==null){var Xe=ye.dehydrated;Xe!==null&&G(Xe)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Xr||l.flags&512&&gf(l)}catch(ht){Gn(l,l.return,ht)}}if(l===o){Pe=null;break}if(d=l.sibling,d!==null){d.return=l.return,Pe=d;break}Pe=l.return}}function gg(o){for(;Pe!==null;){var l=Pe;if(l===o){Pe=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Pe=d;break}Pe=l.return}}function vg(o){for(;Pe!==null;){var l=Pe;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{Zo(4,l)}catch(se){Gn(l,d,se)}break;case 1:var g=l.stateNode;if(typeof g.componentDidMount=="function"){var S=l.return;try{g.componentDidMount()}catch(se){Gn(l,S,se)}}var A=l.return;try{gf(l)}catch(se){Gn(l,A,se)}break;case 5:var F=l.return;try{gf(l)}catch(se){Gn(l,F,se)}}}catch(se){Gn(l,l.return,se)}if(l===o){Pe=null;break}var H=l.sibling;if(H!==null){H.return=l.return,Pe=H;break}Pe=l.return}}var Wl=0,Xl=1,ql=2,Yl=3,jl=4;if(typeof Symbol=="function"&&Symbol.for){var Jo=Symbol.for;Wl=Jo("selector.component"),Xl=Jo("selector.has_pseudo_class"),ql=Jo("selector.role"),Yl=Jo("selector.test_id"),jl=Jo("selector.text")}function xf(o){var l=we(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=R(o),o===null)throw Error(a(362));return o.stateNode.current}function Sf(o,l){switch(l.$$typeof){case Wl:if(o.type===l.value)return!0;break;case Xl:e:{l=l.value,o=[o,0];for(var d=0;d<o.length;){var g=o[d++],S=o[d++],A=l[S];if(g.tag!==5||!de(g)){for(;A!=null&&Sf(g,A);)S++,A=l[S];if(S===l.length){l=!0;break e}else for(g=g.child;g!==null;)o.push(g,S),g=g.sibling}}l=!1}return l;case ql:if(o.tag===5&&ce(o.stateNode,l.value))return!0;break;case jl:if((o.tag===5||o.tag===6)&&(o=le(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case Yl:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function Mf(o){switch(o.$$typeof){case Wl:return"<"+(L(o.value)||"Unknown")+">";case Xl:return":has("+(Mf(o)||"")+")";case ql:return'[role="'+o.value+'"]';case jl:return'"'+o.value+'"';case Yl:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function _g(o,l){var d=[];o=[o,0];for(var g=0;g<o.length;){var S=o[g++],A=o[g++],F=l[A];if(S.tag!==5||!de(S)){for(;F!=null&&Sf(S,F);)A++,F=l[A];if(A===l.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,A),S=S.sibling}}return d}function wf(o,l){if(!N)throw Error(a(363));o=xf(o),o=_g(o,l),l=[],o=Array.from(o);for(var d=0;d<o.length;){var g=o[d++];if(g.tag===5)de(g)||l.push(g.stateNode);else for(g=g.child;g!==null;)o.push(g),g=g.sibling}return l}var Ox=Math.ceil,Zl=c.ReactCurrentDispatcher,Ef=c.ReactCurrentOwner,Jt=c.ReactCurrentBatchConfig,yt=0,$t=null,en=null,vn=0,Qn=0,Gs=Ut(0),on=0,Ko=null,Ws=0,Jl=0,Af=0,Qo=null,Hn=null,Tf=0,bf=1/0;function Xs(){bf=cn()+500}var Kl=!1,Cf=null,xr=null,Ql=!1,Sr=null,$l=0,$o=0,Rf=null,ec=-1,tc=0;function Un(){return yt&6?cn():ec!==-1?ec:ec=cn()}function Mr(o){return o.mode&1?yt&2&&vn!==0?vn&-vn:_x.transition!==null?(tc===0&&(o=pl,pl<<=1,!(pl&4194240)&&(pl=64),tc=o),tc):(o=Pt,o!==0?o:ve()):1}function hi(o,l,d){if(50<$o)throw $o=0,Rf=null,Error(a(185));var g=nc(o,l);return g===null?null:(Oo(g,l,d),(!(yt&2)||g!==$t)&&(g===$t&&(!(yt&2)&&(Jl|=l),on===4&&wr(g,vn)),Vn(g,d),l===1&&yt===0&&!(o.mode&1)&&(Xs(),_l&&Di())),g)}function nc(o,l){o.lanes|=l;var d=o.alternate;for(d!==null&&(d.lanes|=l),d=o,o=o.return;o!==null;)o.childLanes|=l,d=o.alternate,d!==null&&(d.childLanes|=l),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Vn(o,l){var d=o.callbackNode;cx(o,l);var g=gl(o,o===$t?vn:0);if(g===0)d!==null&&rm(d),o.callbackNode=null,o.callbackPriority=0;else if(l=g&-g,o.callbackPriority!==l){if(d!=null&&rm(d),l===1)o.tag===0?vx(xg.bind(null,o)):sm(xg.bind(null,o)),Je?Ie(function(){yt===0&&Di()}):Oh(Fh,Di),d=null;else{switch(im(g)){case 1:d=Fh;break;case 4:d=dx;break;case 16:d=Bh;break;case 536870912:d=px;break;default:d=Bh}d=Rg(d,yg.bind(null,o))}o.callbackPriority=l,o.callbackNode=d}}function yg(o,l){if(ec=-1,tc=0,yt&6)throw Error(a(327));var d=o.callbackNode;if(Zr()&&o.callbackNode!==d)return null;var g=gl(o,o===$t?vn:0);if(g===0)return null;if(g&30||g&o.expiredLanes||l)l=ic(o,g);else{l=g;var S=yt;yt|=2;var A=wg();($t!==o||vn!==l)&&(Xs(),Yr(o,l));do try{zx();break}catch(H){Mg(o,H)}while(!0);Hh(),Zl.current=A,yt=S,en!==null?l=0:($t=null,vn=0,l=on)}if(l!==0){if(l===2&&(S=Dh(o),S!==0&&(g=S,l=Pf(o,S))),l===1)throw d=Ko,Yr(o,0),wr(o,g),Vn(o,cn()),d;if(l===6)wr(o,g);else{if(S=o.current.alternate,!(g&30)&&!Fx(S)&&(l=ic(o,g),l===2&&(A=Dh(o),A!==0&&(g=A,l=Pf(o,A))),l===1))throw d=Ko,Yr(o,0),wr(o,g),Vn(o,cn()),d;switch(o.finishedWork=S,o.finishedLanes=g,l){case 0:case 1:throw Error(a(345));case 2:jr(o,Hn);break;case 3:if(wr(o,g),(g&130023424)===g&&(l=Tf+500-cn(),10<l)){if(gl(o,0)!==0)break;if(S=o.suspendedLanes,(S&g)!==g){Un(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=Ae(jr.bind(null,o,Hn),l);break}jr(o,Hn);break;case 4:if(wr(o,g),(g&4194240)===g)break;for(l=o.eventTimes,S=-1;0<g;){var F=31-Ln(g);A=1<<F,F=l[F],F>S&&(S=F),g&=~A}if(g=S,g=cn()-g,g=(120>g?120:480>g?480:1080>g?1080:1920>g?1920:3e3>g?3e3:4320>g?4320:1960*Ox(g/1960))-g,10<g){o.timeoutHandle=Ae(jr.bind(null,o,Hn),g);break}jr(o,Hn);break;case 5:jr(o,Hn);break;default:throw Error(a(329))}}}return Vn(o,cn()),o.callbackNode===d?yg.bind(null,o):null}function Pf(o,l){var d=Qo;return o.current.memoizedState.isDehydrated&&(Yr(o,l).flags|=256),o=ic(o,l),o!==2&&(l=Hn,Hn=d,l!==null&&If(l)),o}function If(o){Hn===null?Hn=o:Hn.push.apply(Hn,o)}function Fx(o){for(var l=o;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var g=0;g<d.length;g++){var S=d[g],A=S.getSnapshot;S=S.value;try{if(!Li(A(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function wr(o,l){for(l&=~Af,l&=~Jl,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var d=31-Ln(l),g=1<<d;o[d]=-1,l&=~g}}function xg(o){if(yt&6)throw Error(a(327));Zr();var l=gl(o,0);if(!(l&1))return Vn(o,cn()),null;var d=ic(o,l);if(o.tag!==0&&d===2){var g=Dh(o);g!==0&&(l=g,d=Pf(o,g))}if(d===1)throw d=Ko,Yr(o,0),wr(o,l),Vn(o,cn()),d;if(d===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,jr(o,Hn),Vn(o,cn()),null}function Sg(o){Sr!==null&&Sr.tag===0&&!(yt&6)&&Zr();var l=yt;yt|=1;var d=Jt.transition,g=Pt;try{if(Jt.transition=null,Pt=1,o)return o()}finally{Pt=g,Jt.transition=d,yt=l,!(yt&6)&&Di()}}function Lf(){Qn=Gs.current,_t(Gs)}function Yr(o,l){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==nt&&(o.timeoutHandle=nt,tt(d)),en!==null)for(d=en.return;d!==null;){var g=d;switch(jh(g),g.tag){case 1:g=g.type.childContextTypes,g!=null&&gr();break;case 3:Hs(),_t(ct),_t(At),tf();break;case 5:$h(g);break;case 4:Hs();break;case 13:_t(Wt);break;case 19:_t(Wt);break;case 10:Vh(g.type._context);break;case 22:case 23:Lf()}d=d.return}if($t=o,en=o=Er(o.current,null),vn=Qn=l,on=0,Ko=null,Af=Jl=Ws=0,Hn=Qo=null,Ui!==null){for(l=0;l<Ui.length;l++)if(d=Ui[l],g=d.interleaved,g!==null){d.interleaved=null;var S=g.next,A=d.pending;if(A!==null){var F=A.next;A.next=S,g.next=F}d.pending=g}Ui=null}return o}function Mg(o,l){do{var d=en;try{if(Hh(),Rl.current=Nl,Pl){for(var g=Yt.memoizedState;g!==null;){var S=g.queue;S!==null&&(S.pending=null),g=g.next}Pl=!1}if(Vs=0,un=wn=Yt=null,Vo=!1,Go=0,Ef.current=null,d===null||d.return===null){on=1,Ko=l,en=null;break}e:{var A=o,F=d.return,H=d,se=l;if(l=vn,H.flags|=32768,se!==null&&typeof se=="object"&&typeof se.then=="function"){var ye=se,Xe=H,ht=Xe.tag;if(!(Xe.mode&1)&&(ht===0||ht===11||ht===15)){var it=Xe.alternate;it?(Xe.updateQueue=it.updateQueue,Xe.memoizedState=it.memoizedState,Xe.lanes=it.lanes):(Xe.updateQueue=null,Xe.memoizedState=null)}var Bt=Gm(F);if(Bt!==null){Bt.flags&=-257,Wm(Bt,F,H,A,l),Bt.mode&1&&Vm(A,ye,l),l=Bt,se=ye;var et=l.updateQueue;if(et===null){var Tn=new Set;Tn.add(se),l.updateQueue=Tn}else et.add(se);break e}else{if(!(l&1)){Vm(A,ye,l),Df();break e}se=Error(a(426))}}else if(Vt&&H.mode&1){var di=Gm(F);if(di!==null){!(di.flags&65536)&&(di.flags|=256),Wm(di,F,H,A,l),Kh(se);break e}}A=se,on!==4&&(on=2),Qo===null?Qo=[A]:Qo.push(A),se=cf(se,H),H=F;do{switch(H.tag){case 3:H.flags|=65536,l&=-l,H.lanes|=l;var K=km(H,se,l);lm(H,K);break e;case 1:A=se;var W=H.type,te=H.stateNode;if(!(H.flags&128)&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(xr===null||!xr.has(te)))){H.flags|=65536,l&=-l,H.lanes|=l;var Le=Hm(H,A,l);lm(H,Le);break e}}H=H.return}while(H!==null)}Ag(d)}catch(Qe){l=Qe,en===d&&d!==null&&(en=d=d.return);continue}break}while(!0)}function wg(){var o=Zl.current;return Zl.current=Nl,o===null?Nl:o}function Df(){(on===0||on===3||on===2)&&(on=4),$t===null||!(Ws&268435455)&&!(Jl&268435455)||wr($t,vn)}function ic(o,l){var d=yt;yt|=2;var g=wg();$t===o&&vn===l||Yr(o,l);do try{Bx();break}catch(S){Mg(o,S)}while(!0);if(Hh(),yt=d,Zl.current=g,en!==null)throw Error(a(261));return $t=null,vn=0,on}function Bx(){for(;en!==null;)Eg(en)}function zx(){for(;en!==null&&!hx();)Eg(en)}function Eg(o){var l=Cg(o.alternate,o,Qn);o.memoizedProps=o.pendingProps,l===null?Ag(o):en=l,Ef.current=null}function Ag(o){var l=o;do{var d=l.alternate;if(o=l.return,l.flags&32768){if(d=Ix(d,l),d!==null){d.flags&=32767,en=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{on=6,en=null;return}}else if(d=Cx(d,l,Qn),d!==null){en=d;return}if(l=l.sibling,l!==null){en=l;return}en=l=o}while(l!==null);on===0&&(on=5)}function jr(o,l){var d=Pt,g=Jt.transition;try{Jt.transition=null,Pt=1,kx(o,l,d)}finally{Jt.transition=g,Pt=d}return null}function kx(o,l,d){do Zr();while(Sr!==null);if(yt&6)throw Error(a(327));var g=o.finishedWork,S=o.finishedLanes;if(g===null)return null;if(o.finishedWork=null,o.finishedLanes=0,g===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var A=g.lanes|g.childLanes;if(ux(o,A),o===$t&&(en=$t=null,vn=0),!(g.subtreeFlags&2064)&&!(g.flags&2064)||Ql||(Ql=!0,Rg(Bh,function(){return Zr(),null})),A=(g.flags&15990)!==0,g.subtreeFlags&15990||A){A=Jt.transition,Jt.transition=null;var F=Pt;Pt=1;var H=yt;yt|=4,Ef.current=null,Dx(o,g),Ux(o,g),ee(o.containerInfo),o.current=g,Nx(g),fx(),yt=H,Pt=F,Jt.transition=A}else o.current=g;if(Ql&&(Ql=!1,Sr=o,$l=S),A=o.pendingLanes,A===0&&(xr=null),mx(g.stateNode),Vn(o,cn()),l!==null)for(d=o.onRecoverableError,g=0;g<l.length;g++)d(l[g]);if(Kl)throw Kl=!1,o=Cf,Cf=null,o;return $l&1&&o.tag!==0&&Zr(),A=o.pendingLanes,A&1?o===Rf?$o++:($o=0,Rf=o):$o=0,Di(),null}function Zr(){if(Sr!==null){var o=im($l),l=Jt.transition,d=Pt;try{if(Jt.transition=null,Pt=16>o?16:o,Sr===null)var g=!1;else{if(o=Sr,Sr=null,$l=0,yt&6)throw Error(a(331));var S=yt;for(yt|=4,Pe=o.current;Pe!==null;){var A=Pe,F=A.child;if(Pe.flags&16){var H=A.deletions;if(H!==null){for(var se=0;se<H.length;se++){var ye=H[se];for(Pe=ye;Pe!==null;){var Xe=Pe;switch(Xe.tag){case 0:case 11:case 15:qr(8,Xe,A)}var ht=Xe.child;if(ht!==null)ht.return=Xe,Pe=ht;else for(;Pe!==null;){Xe=Pe;var it=Xe.sibling,Bt=Xe.return;if(cg(Xe),Xe===ye){Pe=null;break}if(it!==null){it.return=Bt,Pe=it;break}Pe=Bt}}}var et=A.alternate;if(et!==null){var Tn=et.child;if(Tn!==null){et.child=null;do{var di=Tn.sibling;Tn.sibling=null,Tn=di}while(Tn!==null)}}Pe=A}}if(A.subtreeFlags&2064&&F!==null)F.return=A,Pe=F;else e:for(;Pe!==null;){if(A=Pe,A.flags&2048)switch(A.tag){case 0:case 11:case 15:qr(9,A,A.return)}var K=A.sibling;if(K!==null){K.return=A.return,Pe=K;break e}Pe=A.return}}var W=o.current;for(Pe=W;Pe!==null;){F=Pe;var te=F.child;if(F.subtreeFlags&2064&&te!==null)te.return=F,Pe=te;else e:for(F=W;Pe!==null;){if(H=Pe,H.flags&2048)try{switch(H.tag){case 0:case 11:case 15:Zo(9,H)}}catch(Qe){Gn(H,H.return,Qe)}if(H===F){Pe=null;break e}var Le=H.sibling;if(Le!==null){Le.return=H.return,Pe=Le;break e}Pe=H.return}}if(yt=S,Di(),Ii&&typeof Ii.onPostCommitFiberRoot=="function")try{Ii.onPostCommitFiberRoot(vl,o)}catch{}g=!0}return g}finally{Pt=d,Jt.transition=l}}return!1}function Tg(o,l,d){l=cf(d,l),l=km(o,l,1),yr(o,l),l=Un(),o=nc(o,1),o!==null&&(Oo(o,1,l),Vn(o,l))}function Gn(o,l,d){if(o.tag===3)Tg(o,o,d);else for(;l!==null;){if(l.tag===3){Tg(l,o,d);break}else if(l.tag===1){var g=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof g.componentDidCatch=="function"&&(xr===null||!xr.has(g))){o=cf(d,o),o=Hm(l,o,1),yr(l,o),o=Un(),l=nc(l,1),l!==null&&(Oo(l,1,o),Vn(l,o));break}}l=l.return}}function Hx(o,l,d){var g=o.pingCache;g!==null&&g.delete(l),l=Un(),o.pingedLanes|=o.suspendedLanes&d,$t===o&&(vn&d)===d&&(on===4||on===3&&(vn&130023424)===vn&&500>cn()-Tf?Yr(o,0):Af|=d),Vn(o,l)}function bg(o,l){l===0&&(o.mode&1?(l=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):l=1);var d=Un();o=nc(o,l),o!==null&&(Oo(o,l,d),Vn(o,d))}function Vx(o){var l=o.memoizedState,d=0;l!==null&&(d=l.retryLane),bg(o,d)}function Gx(o,l){var d=0;switch(o.tag){case 13:var g=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:g=o.stateNode;break;default:throw Error(a(314))}g!==null&&g.delete(l),bg(o,d)}var Cg;Cg=function(o,l,d){if(o!==null)if(o.memoizedProps!==l.pendingProps||ct.current)Kn=!0;else{if(!(o.lanes&d)&&!(l.flags&128))return Kn=!1,Px(o,l,d);Kn=!!(o.flags&131072)}else Kn=!1,Vt&&l.flags&1048576&&pm(l,Tl,l.index);switch(l.lanes=0,l.tag){case 2:var g=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=jn(l,At.current);Ns(l,d),S=rf(null,l,g,o,S,d);var A=sf();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Ft(g)?(A=!0,vr(l)):A=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,Wh(l),S.updater=El,l.stateNode=S,S._reactInternals=l,qh(l,g,o,d),l=ff(null,l,g,!0,A,d)):(l.tag=0,Vt&&A&&Yh(l),Dn(null,l,S,d),l=l.child),l;case 16:g=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=g._init,g=S(g._payload),l.type=g,S=l.tag=Xx(g),o=yi(g,o),S){case 0:l=hf(null,l,g,o,d);break e;case 1:l=Qm(null,l,g,o,d);break e;case 11:l=Ym(null,l,g,o,d);break e;case 14:l=jm(null,l,g,yi(g.type,o),d);break e}throw Error(a(306,g,""))}return l;case 0:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:yi(g,S),hf(o,l,g,S,d);case 1:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:yi(g,S),Qm(o,l,g,S,d);case 3:e:{if($m(l),o===null)throw Error(a(387));g=l.pendingProps,A=l.memoizedState,S=A.element,am(o,l),wl(l,g,null,d);var F=l.memoizedState;if(g=F.element,U&&A.isDehydrated)if(A={element:g,isDehydrated:!1,cache:F.cache,transitions:F.transitions},l.updateQueue.baseState=A,l.memoizedState=A,l.flags&256){S=Error(a(423)),l=eg(o,l,g,d,S);break e}else if(g!==S){S=Error(a(424)),l=eg(o,l,g,d,S);break e}else for(U&&(Jn=Ds(l.stateNode.containerInfo),Zn=l,Vt=!0,xi=null,Fo=!1),d=xm(l,null,g,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Bs(),g===S){l=er(o,l,d);break e}Dn(o,l,g,d)}l=l.child}return l;case 5:return Sm(l),o===null&&Jh(l),g=l.type,S=l.pendingProps,A=o!==null?o.memoizedProps:null,F=S.children,me(g,S)?F=null:A!==null&&me(g,A)&&(l.flags|=32),Km(o,l),Dn(o,l,F,d),l.child;case 6:return o===null&&Jh(l),null;case 13:return tg(o,l,d);case 4:return Qh(l,l.stateNode.containerInfo),g=l.pendingProps,o===null?l.child=zs(l,null,g,d):Dn(o,l,g,d),l.child;case 11:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:yi(g,S),Ym(o,l,g,S,d);case 7:return Dn(o,l,l.pendingProps,d),l.child;case 8:return Dn(o,l,l.pendingProps.children,d),l.child;case 12:return Dn(o,l,l.pendingProps.children,d),l.child;case 10:e:{if(g=l.type._context,S=l.pendingProps,A=l.memoizedProps,F=S.value,om(l,g,F),A!==null)if(Li(A.value,F)){if(A.children===S.children&&!ct.current){l=er(o,l,d);break e}}else for(A=l.child,A!==null&&(A.return=l);A!==null;){var H=A.dependencies;if(H!==null){F=A.child;for(var se=H.firstContext;se!==null;){if(se.context===g){if(A.tag===1){se=Ji(-1,d&-d),se.tag=2;var ye=A.updateQueue;if(ye!==null){ye=ye.shared;var Xe=ye.pending;Xe===null?se.next=se:(se.next=Xe.next,Xe.next=se),ye.pending=se}}A.lanes|=d,se=A.alternate,se!==null&&(se.lanes|=d),Gh(A.return,d,l),H.lanes|=d;break}se=se.next}}else if(A.tag===10)F=A.type===l.type?null:A.child;else if(A.tag===18){if(F=A.return,F===null)throw Error(a(341));F.lanes|=d,H=F.alternate,H!==null&&(H.lanes|=d),Gh(F,d,l),F=A.sibling}else F=A.child;if(F!==null)F.return=A;else for(F=A;F!==null;){if(F===l){F=null;break}if(A=F.sibling,A!==null){A.return=F.return,F=A;break}F=F.return}A=F}Dn(o,l,S.children,d),l=l.child}return l;case 9:return S=l.type,g=l.pendingProps.children,Ns(l,d),S=oi(S),g=g(S),l.flags|=1,Dn(o,l,g,d),l.child;case 14:return g=l.type,S=yi(g,l.pendingProps),S=yi(g.type,S),jm(o,l,g,S,d);case 15:return Zm(o,l,l.type,l.pendingProps,d);case 17:return g=l.type,S=l.pendingProps,S=l.elementType===g?S:yi(g,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Ft(g)?(o=!0,vr(l)):o=!1,Ns(l,d),fm(l,g,S),qh(l,g,S,d),ff(null,l,g,!0,o,d);case 19:return sg(o,l,d);case 22:return Jm(o,l,d)}throw Error(a(156,l.tag))};function Rg(o,l){return Oh(o,l)}function Wx(o,l,d,g){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=g,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(o,l,d,g){return new Wx(o,l,d,g)}function Uf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Xx(o){if(typeof o=="function")return Uf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Er(o,l){var d=o.alternate;return d===null?(d=fi(o.tag,l,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=l,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,l=o.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function rc(o,l,d,g,S,A){var F=2;if(g=o,typeof o=="function")Uf(o)&&(F=1);else if(typeof o=="string")F=5;else e:switch(o){case f:return Jr(d.children,S,A,l);case p:F=8,S|=8;break;case m:return o=fi(12,d,l,S|2),o.elementType=m,o.lanes=A,o;case x:return o=fi(13,d,l,S),o.elementType=x,o.lanes=A,o;case _:return o=fi(19,d,l,S),o.elementType=_,o.lanes=A,o;case T:return sc(d,S,A,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case v:F=10;break e;case y:F=9;break e;case M:F=11;break e;case E:F=14;break e;case w:F=16,g=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=fi(F,d,l,S),l.elementType=o,l.type=g,l.lanes=A,l}function Jr(o,l,d,g){return o=fi(7,o,g,l),o.lanes=d,o}function sc(o,l,d,g){return o=fi(22,o,g,l),o.elementType=T,o.lanes=d,o.stateNode={},o}function Nf(o,l,d){return o=fi(6,o,null,l),o.lanes=d,o}function Of(o,l,d){return l=fi(4,o.children!==null?o.children:[],o.key,l),l.lanes=d,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function qx(o,l,d,g,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=nt,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uh(0),this.expirationTimes=Uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uh(0),this.identifierPrefix=g,this.onRecoverableError=S,U&&(this.mutableSourceEagerHydrationData=null)}function Pg(o,l,d,g,S,A,F,H,se){return o=new qx(o,l,d,H,se),l===1?(l=1,A===!0&&(l|=8)):l=0,A=fi(3,null,null,l),o.current=A,A.stateNode=o,A.memoizedState={element:g,isDehydrated:d,cache:null,transitions:null},Wh(A),o}function Ig(o){if(!o)return qe;o=o._reactInternals;e:{if(k(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Ft(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var d=o.type;if(Ft(d))return _i(o,d,l)}return l}function Lg(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=X(l),o===null?null:o.stateNode}function Dg(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<l?d:l}}function Ff(o,l){Dg(o,l),(o=o.alternate)&&Dg(o,l)}function Yx(o){return o=X(o),o===null?null:o.stateNode}function jx(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Un();hi(o,134217728,l),Ff(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Un(),d=Mr(o);hi(o,d,l),Ff(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var d=No(l.pendingLanes);d!==0&&(Nh(l,d|1),Vn(l,cn()),!(yt&6)&&(Xs(),Di()))}break;case 13:var g=Un();Sg(function(){return hi(o,1,g)}),Ff(o,1)}},t.batchedUpdates=function(o,l){var d=yt;yt|=1;try{return o(l)}finally{yt=d,yt===0&&(Xs(),_l&&Di())}},t.createComponentSelector=function(o){return{$$typeof:Wl,value:o}},t.createContainer=function(o,l,d,g,S,A,F){return Pg(o,l,!1,null,d,g,S,A,F)},t.createHasPseudoClassSelector=function(o){return{$$typeof:Xl,value:o}},t.createHydrationContainer=function(o,l,d,g,S,A,F,H,se){return o=Pg(d,g,!0,o,S,A,F,H,se),o.context=Ig(null),d=o.current,g=Un(),S=Mr(d),A=Ji(g,S),A.callback=l??null,yr(d,A),o.current.lanes=S,Oo(o,S,g),Vn(o,g),o},t.createPortal=function(o,l,d){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:g==null?null:""+g,children:o,containerInfo:l,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:ql,value:o}},t.createTestNameSelector=function(o){return{$$typeof:Yl,value:o}},t.createTextSelector=function(o){return{$$typeof:jl,value:o}},t.deferredUpdates=function(o){var l=Pt,d=Jt.transition;try{return Jt.transition=null,Pt=16,o()}finally{Pt=l,Jt.transition=d}},t.discreteUpdates=function(o,l,d,g,S){var A=Pt,F=Jt.transition;try{return Jt.transition=null,Pt=1,o(l,d,g,S)}finally{Pt=A,Jt.transition=F,yt===0&&Xs()}},t.findAllNodes=wf,t.findBoundingRects=function(o,l){if(!N)throw Error(a(363));l=wf(o,l),o=[];for(var d=0;d<l.length;d++)o.push(Z(l[d]));for(l=o.length-1;0<l;l--){d=o[l];for(var g=d.x,S=g+d.width,A=d.y,F=A+d.height,H=l-1;0<=H;H--)if(l!==H){var se=o[H],ye=se.x,Xe=ye+se.width,ht=se.y,it=ht+se.height;if(g>=ye&&A>=ht&&S<=Xe&&F<=it){o.splice(l,1);break}else if(g!==ye||d.width!==se.width||it<A||ht>F){if(!(A!==ht||d.height!==se.height||Xe<g||ye>S)){ye>g&&(se.width+=ye-g,se.x=g),Xe<S&&(se.width=S-ye),o.splice(l,1);break}}else{ht>A&&(se.height+=ht-A,se.y=A),it<F&&(se.height=F-ht),o.splice(l,1);break}}}return o},t.findHostInstance=Lg,t.findHostInstanceWithNoPortals=function(o){return o=C(o),o=o!==null?J(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Lg(o)},t.flushControlled=function(o){var l=yt;yt|=1;var d=Jt.transition,g=Pt;try{Jt.transition=null,Pt=1,o()}finally{Pt=g,Jt.transition=d,yt=l,yt===0&&(Xs(),Di())}},t.flushPassiveEffects=Zr,t.flushSync=Sg,t.focusWithin=function(o,l){if(!N)throw Error(a(363));for(o=xf(o),l=_g(o,l),l=Array.from(l),o=0;o<l.length;){var d=l[o++];if(!de(d)){if(d.tag===5&&Ye(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Pt},t.getFindAllNodesFailureDescription=function(o,l){if(!N)throw Error(a(363));var d=0,g=[];o=[xf(o),0];for(var S=0;S<o.length;){var A=o[S++],F=o[S++],H=l[F];if((A.tag!==5||!de(A))&&(Sf(A,H)&&(g.push(Mf(H)),F++,F>d&&(d=F)),F<l.length))for(A=A.child;A!==null;)o.push(A,F),A=A.sibling}if(d<l.length){for(o=[];d<l.length;d++)o.push(Mf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(g.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return j(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:Yx,findFiberByHostInstance:o.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{vl=l.inject(o),Ii=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,d,g){if(!N)throw Error(a(363));o=wf(o,l);var S=Ee(o,d,g).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var d=l._getVersion;d=d(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,d]:o.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(o,l){var d=Pt;try{return Pt=o,l()}finally{Pt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,d,g){var S=l.current,A=Un(),F=Mr(S);return d=Ig(d),l.context===null?l.context=d:l.pendingContext=d,l=Ji(A,F),l.payload={element:o},g=g===void 0?null:g,g!==null&&(l.callback=g),yr(S,l),o=hi(S,F,A),o!==null&&Ml(o,S,F),F},t};Ny.exports=cC;var uC=Ny.exports;const hC=Uv(uC),Zp={},fC=r=>void Object.assign(Zp,r);function dC(r,e){function t(f,{args:p=[],attach:m,...v},y){let M=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(v.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=v.object;x=fo(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=Zp[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=fo(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x instanceof mt?x.__r3f.attach="geometry":x instanceof Sn&&(x.__r3f.attach="material")),M!=="inject"&&Rd(x,v),x}function n(f,p){let m=!1;if(p){var v,y;(v=p.__r3f)!=null&&v.attach?Cd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||fo(p,{}),p.__r3f.parent=f,ip(p),po(p)}}function i(f,p,m){let v=!1;if(p){var y,M;if((y=p.__r3f)!=null&&y.attach)Cd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],v=!0}v||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||fo(p,{}),p.__r3f.parent=f,ip(p),po(p)}}function s(f,p,m=!1){f&&[...f].forEach(v=>a(p,v,m))}function a(f,p,m){if(p){var v,y,M;if(p.__r3f&&(p.__r3f.parent=null),(v=f.__r3f)!=null&&v.objects&&(f.__r3f.objects=f.__r3f.objects.filter(T=>T!==p)),(y=p.__r3f)!=null&&y.attach)vv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&xC(su(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const T=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?tp.unstable_scheduleCallback(tp.unstable_IdlePriority,T):T()}po(f)}}function c(f,p,m,v){var y;const M=(y=f.__r3f)==null?void 0:y.parent;if(!M)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||a(M,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(M,x),x.raycast&&x.__r3f.eventCount&&su(x).getState().internal.interaction.push(x),[v,v.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:hC({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&a(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const v=f.getState().scene;v.__r3f&&i(v,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,v){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&v.object&&v.object!==f)return[!0];{const{args:x=[],children:_,...E}=v,{args:w=[],children:T,...O}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((L,B)=>L!==w[B]))return[!0];const P=Wy(f,E,O,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],v,y,M,x){p?c(f,v,M,x):Rd(f,m)},commitMount(f,p,m,v){var y;const M=(y=f.__r3f)!=null?y:{};f.raycast&&M.handlers&&M.eventCount&&su(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>fo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:v}=(p=f.__r3f)!=null?p:{};m&&v&&vv(v,f,m),f.isObject3D&&(f.visible=!1),po(f)},unhideInstance(f,p){var m;const{attach:v,parent:y}=(m=f.__r3f)!=null?m:{};v&&y&&Cd(y,f,v),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),po(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():xo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&kt.fun(performance.now)?performance.now:kt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:kt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:kt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Rd}}var dv,pv;const bd=r=>"colorSpace"in r||"outputColorSpace"in r,By=()=>{var r;return(r=Zp.ColorManagement)!=null?r:null},zy=r=>r&&r.isOrthographicCamera,pC=r=>r&&r.hasOwnProperty("current"),sl=typeof window<"u"&&((dv=window.document)!=null&&dv.createElement||((pv=window.navigator)==null?void 0:pv.product)==="ReactNative")?fe.useLayoutEffect:fe.useEffect;function ky(r){const e=fe.useRef(r);return sl(()=>void(e.current=r),[r]),e}function mC({set:r}){return sl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Hy extends fe.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Hy.getDerivedStateFromError=()=>({error:!0});const Vy="__default",mv=new Map,gC=r=>r&&!!r.memoized&&!!r.changes;function Gy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const da=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function su(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const kt={obj:r=>r===Object(r)&&!kt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(kt.str(r)||kt.num(r)||kt.boo(r))return r===e;const s=kt.obj(r);if(s&&n==="reference")return r===e;const a=kt.arr(r);if(a&&t==="reference")return r===e;if((a||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!kt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(kt.und(c)){if(a&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function vC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function fo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function np(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,a)=>s[a],r),{target:t,key:i}}else return{target:t,key:e}}const gv=/-\d+$/;function Cd(r,e,t){if(kt.str(t)){if(gv.test(t)){const s=t.replace(gv,""),{target:a,key:c}=np(r,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:i}=np(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function vv(r,e,t){var n,i;if(kt.str(t)){const{target:s,key:a}=np(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Wy(r,{children:e,key:t,ref:n,...i},{children:s,key:a,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let M=0;M<y.length;M++)i.hasOwnProperty(y[M])||p.unshift([y[M],Vy+"remove"])}p.forEach(([y,M])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||kt.equ(M,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,M,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,M,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const v={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(v.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(v.attach=f.memoizedProps.attach),{memoized:v,changes:m}}function Rd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:a,changes:c}=gC(e)?e:Wy(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=a);for(let f=0;f<c.length;f++){let[p,m,v,y]=c[f];if(bd(r)){const E="srgb",w="srgb-linear";p==="encoding"?(p="colorSpace",m=m===3001?E:w):p==="outputEncoding"&&(p="outputColorSpace",m=m===3001?E:w)}let M=r,x=M[p];if(y.length&&(x=y.reduce((_,E)=>_[E],r),!(x&&x.set))){const[_,...E]=y.reverse();M=E.reverse().reduce((w,T)=>w[T],r),p=_}if(m===Vy+"remove")if(M.constructor){let _=mv.get(M.constructor);_||(_=new M.constructor,mv.set(M.constructor,_)),m=_[p]}else m=0;if(v&&n)m?n.handlers[p]=m:delete n.handlers[p],n.eventCount=Object.keys(n.handlers).length;else if(x&&x.set&&(x.copy||x instanceof ys)){if(Array.isArray(m))x.fromArray?x.fromArray(m):x.set(...m);else if(x.copy&&m&&m.constructor&&x.constructor===m.constructor)x.copy(m);else if(m!==void 0){const _=x instanceof De;!_&&x.setScalar?x.setScalar(m):x instanceof ys&&m instanceof ys?x.mask=m.mask:x.set(m),!By()&&s&&!s.linear&&_&&x.convertSRGBToLinear()}}else if(M[p]=m,M[p]instanceof qt&&M[p].format===Pn&&M[p].type===Ti&&s){const _=M[p];bd(_)&&bd(s.gl)?_.colorSpace=s.gl.outputColorSpace:_.encoding=s.gl.outputEncoding}po(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const f=su(r).getState().internal,p=f.interaction.indexOf(r);p>-1&&f.interaction.splice(p,1),n.eventCount&&f.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&ip(r),r}function po(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function ip(r){r.onUpdate==null||r.onUpdate(r)}function _C(r,e){r.manual||(zy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function Kc(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function yC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return xo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return xo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return xo.ContinuousEventPriority;default:return xo.DefaultEventPriority}}function Xy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function xC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Xy(t.capturedMap,e,n,i)})}function SC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],v=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<v.length;_++){const E=da(v[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=da(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=v.flatMap(y).sort((_,E)=>{const w=da(_.object),T=da(E.object);return!w||!T?_.distance-E.distance:T.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=Kc(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(Kc(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const v={stopped:!1};for(const y of u){const M=da(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=M,T=new D(_.x,_.y,0).unproject(E),O=b=>{var C,X;return(C=(X=w.capturedMap.get(b))==null?void 0:X.has(y.eventObject))!=null?C:!1},P=b=>{const C={intersection:y,target:h.target};w.capturedMap.has(b)?w.capturedMap.get(b).set(y.eventObject,C):w.capturedMap.set(b,new Map([[y.eventObject,C]])),h.target.setPointerCapture(b)},L=b=>{const C=w.capturedMap.get(b);C&&Xy(w.capturedMap,y.eventObject,C,b)};let B={};for(let b in h){let C=h[b];typeof C!="function"&&(B[b]=C)}let k={...y,...B,pointer:_,intersections:u,stopped:v.stopped,delta:f,unprojectedPoint:T,ray:x.ray,camera:E,stopPropagation(){const b="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!b||b.has(y.eventObject))&&(k.stopped=v.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(C=>C.eventObject===y.eventObject))){const C=u.slice(0,u.indexOf(y));s([...C,y])}},target:{hasPointerCapture:O,setPointerCapture:P,releasePointerCapture:L},currentTarget:{hasPointerCapture:O,setPointerCapture:P,releasePointerCapture:L},nativeEvent:h};if(p(k),v.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,v=m==null?void 0:m.handlers;if(h.hovered.delete(Kc(f)),m!=null&&m.eventCount){const y={...f,intersections:u};v.onPointerOut==null||v.onPointerOut(y),v.onPointerLeave==null||v.onPointerLeave(y)}}}function a(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const v=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,v?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(a(f,m.interaction),p&&p(f)),v&&s(x);function E(w){const T=w.eventObject,O=T.__r3f,P=O==null?void 0:O.handlers;if(O!=null&&O.eventCount)if(v){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const L=Kc(w),B=m.hovered.get(L);B?B.stopped&&w.stopPropagation():(m.hovered.set(L,w),P.onPointerOver==null||P.onPointerOver(w),P.onPointerEnter==null||P.onPointerEnter(w))}P.onPointerMove==null||P.onPointerMove(w)}else{const L=P[u];L?(!y||m.initialHits.includes(T))&&(a(f,m.interaction.filter(B=>!m.initialHits.includes(B))),L(w)):y&&m.initialHits.includes(T)&&a(f,m.interaction.filter(B=>!m.initialHits.includes(B)))}}i(x,f,_,E)}}return{handlePointer:c}}const qy=r=>!!(r!=null&&r.render),Yy=fe.createContext(null),MC=(r,e)=>{const t=lC((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,w=u().size){const{width:T,height:O,top:P,left:L}=w,B=T/O;E instanceof D?p.copy(E):p.set(...E);const k=_.getWorldPosition(h).distanceTo(p);if(zy(_))return{width:T/_.zoom,height:O/_.zoom,top:P,left:L,factor:1,distance:k,aspect:B};{const b=_.fov*Math.PI/180,C=2*Math.tan(b/2)*k,X=C*(T/O);return{width:X,height:C,top:P,left:L,factor:T/X,distance:k,aspect:B}}}let v;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new pe;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Wp,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();v&&clearTimeout(v),_.performance.current!==_.performance.min&&y(_.performance.min),v=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,T,O)=>{const P=u().camera,L={width:_,height:E,top:T||0,left:O||0,updateStyle:w};c(B=>({size:L,viewport:{...B.viewport,...m(P,f,L)}}))},setDpr:_=>c(E=>{const w=Gy(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:fe.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const T=u().internal;return T.priority=T.priority+(E>0?1:0),T.subscribers.push({ref:_,priority:E,store:w}),T.subscribers=T.subscribers.sort((O,P)=>O.priority-P.priority),()=>{const O=u().internal;O!=null&&O.subscribers&&(O.priority=O.priority-(E>0?1:0),O.subscribers=O.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,_C(c,u),f.setPixelRatio(h.dpr);const v=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,v)}c!==a&&(a=c,p(v=>({viewport:{...v.viewport,...v.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let Qc,wC=new Set,EC=new Set,AC=new Set;function Pd(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function pa(r,e){switch(r){case"before":return Pd(wC,e);case"after":return Pd(EC,e);case"tail":return Pd(AC,e)}}let Id,Ld;function Dd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Id=e.internal.subscribers,Qc=0;Qc<Id.length;Qc++)Ld=Id[Qc],Ld.ref.current(Ld.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function TC(r){let e=!1,t=!1,n,i,s;function a(h){i=requestAnimationFrame(a),e=!0,n=0,pa("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Dd(h,s))}if(t=!1,pa("after",h),n===0)return pa("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,f=!0,p,m){if(f&&pa("before",h),p)Dd(h,p,m);else for(const v of r.values())Dd(h,v.store.getState());f&&pa("after",h)}return{loop:a,invalidate:c,advance:u}}function jy(){const r=fe.useContext(Yy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function Jp(r=t=>t,e){return jy()(r,e)}function Uo(r,e=0){const t=jy(),n=t.getState().internal.subscribe,i=ky(r);return sl(()=>n(i,e,t),[e,n,t]),null}const To=new Map,{invalidate:_v,advance:yv}=TC(To),{reconciler:ju,applyProps:uo}=dC(To,yC),ho={objects:"shallow",strict:!1},bC=(r,e)=>{const t=typeof r=="function"?r(e):r;return qy(t)?t:new k_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function CC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:a}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function RC(r){const e=To.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||MC(_v,yv),a=t||ju.createContainer(s,xo.ConcurrentRoot,null,!1,null,"",i,null);e||To.set(r,{fiber:a,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:v,events:y,onCreated:M,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:T=!1,frameloop:O="always",dpr:P=[1,2],performance:L,raycaster:B,camera:k,onPointerMissed:b}=f,C=s.getState(),X=C.gl;C.gl||C.set({gl:X=bC(p,r)});let Y=C.raycaster;Y||C.set({raycaster:Y=new Iy});const{params:J,...ie}=B||{};if(kt.equ(ie,Y,ho)||uo(Y,{...ie}),kt.equ(J,Y.params,ho)||uo(Y,{params:{...Y.params,...J}}),!C.camera||C.camera===h&&!kt.equ(h,k,ho)){h=k;const ee=k instanceof Ka,ae=ee?k:T?new bs(0,0,0,0,.1,1e3):new nn(75,0,.1,1e3);ee||(ae.position.z=5,k&&(uo(ae,k),("aspect"in k||"left"in k||"right"in k||"bottom"in k||"top"in k)&&(ae.manual=!0,ae.updateProjectionMatrix())),!C.camera&&!(k!=null&&k.rotation)&&ae.lookAt(0,0,0)),C.set({camera:ae}),Y.camera=ae}if(!C.scene){let ee;v instanceof Gu?ee=v:(ee=new Gu,v&&uo(ee,v)),C.set({scene:fo(ee)})}if(!C.xr){var j;const ee=(Ue,ne)=>{const me=s.getState();me.frameloop!=="never"&&yv(Ue,!0,me,ne)},ae=()=>{const Ue=s.getState();Ue.gl.xr.enabled=Ue.gl.xr.isPresenting,Ue.gl.xr.setAnimationLoop(Ue.gl.xr.isPresenting?ee:null),Ue.gl.xr.isPresenting||_v(Ue)},Re={connect(){const Ue=s.getState().gl;Ue.xr.addEventListener("sessionstart",ae),Ue.xr.addEventListener("sessionend",ae)},disconnect(){const Ue=s.getState().gl;Ue.xr.removeEventListener("sessionstart",ae),Ue.xr.removeEventListener("sessionend",ae)}};typeof((j=X.xr)==null?void 0:j.addEventListener)=="function"&&Re.connect(),C.set({xr:Re})}if(X.shadowMap){const ee=X.shadowMap.enabled,ae=X.shadowMap.type;if(X.shadowMap.enabled=!!x,kt.boo(x))X.shadowMap.type=va;else if(kt.str(x)){var he;const Re={basic:Fv,percentage:Ju,soft:va,variance:Ei};X.shadowMap.type=(he=Re[x])!=null?he:va}else kt.obj(x)&&Object.assign(X.shadowMap,x);(ee!==X.shadowMap.enabled||ae!==X.shadowMap.type)&&(X.shadowMap.needsUpdate=!0)}const z=By();z&&("enabled"in z?z.enabled=!w:"legacyMode"in z&&(z.legacyMode=w)),u||uo(X,{outputEncoding:_?3e3:3001,toneMapping:E?Gi:op}),C.legacy!==w&&C.set(()=>({legacy:w})),C.linear!==_&&C.set(()=>({linear:_})),C.flat!==E&&C.set(()=>({flat:E})),p&&!kt.fun(p)&&!qy(p)&&!kt.equ(p,X,ho)&&uo(X,p),y&&!C.events.handlers&&C.set({events:y(s)});const oe=CC(r,m);return kt.equ(oe,C.size,ho)||C.setSize(oe.width,oe.height,oe.updateStyle,oe.top,oe.left),P&&C.viewport.dpr!==Gy(P)&&C.setDpr(P),C.frameloop!==O&&C.setFrameloop(O),C.onPointerMissed||C.set({onPointerMissed:b}),L&&!kt.equ(L,C.performance,ho)&&C.set(ee=>({performance:{...ee.performance,...L}})),c=M,u=!0,this},render(f){return u||this.configure(),ju.updateContainer(Fe.jsx(PC,{store:s,children:f,onCreated:c,rootElement:r}),a,null,()=>{}),s},unmount(){Zy(r)}}}function PC({store:r,children:e,onCreated:t,rootElement:n}){return sl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Fe.jsx(Yy.Provider,{value:r,children:e})}function Zy(r,e){const t=To.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),ju.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,a,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),vC(i),To.delete(r)}catch{}},500)})}}ju.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:fe.version});const Ud={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function IC(r){const{handlePointer:e}=SC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Ud).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=Ud[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Ud[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function rp(r,e,t){var n,i,s,a,c;e==null&&(e=100);function u(){var f=Date.now()-a;f<e&&f>=0?n=setTimeout(u,e-f):(n=null,t||(c=r.apply(s,i),s=i=null))}var h=function(){s=this,i=arguments,a=Date.now();var f=t&&!n;return n||(n=setTimeout(u,e)),f&&(c=r.apply(s,i),s=i=null),c};return h.clear=function(){n&&(clearTimeout(n),n=null)},h.flush=function(){n&&(c=r.apply(s,i),s=i=null,clearTimeout(n),n=null)},h}rp.debounce=rp;var LC=rp;const xv=Uv(LC);var DC=Object.defineProperty,UC=Object.defineProperties,NC=Object.getOwnPropertyDescriptors,Sv=Object.getOwnPropertySymbols,OC=Object.prototype.hasOwnProperty,FC=Object.prototype.propertyIsEnumerable,Mv=(r,e,t)=>e in r?DC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,wv=(r,e)=>{for(var t in e||(e={}))OC.call(e,t)&&Mv(r,t,e[t]);if(Sv)for(var t of Sv(e))FC.call(e,t)&&Mv(r,t,e[t]);return r},BC=(r,e)=>UC(r,NC(e)),Ev,Av;typeof window<"u"&&((Ev=window.document)!=null&&Ev.createElement||((Av=window.navigator)==null?void 0:Av.product)==="ReactNative")?fe.useLayoutEffect:fe.useEffect;function Jy(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=Jy(n,e,t);if(i)return i;n=n.sibling}}function Ky(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const Tv=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=Tv;return}return Tv.apply(this,arguments)};const Kp=Ky(fe.createContext(null));class Qy extends fe.Component{render(){return fe.createElement(Kp.Provider,{value:this._reactInternals},this.props.children)}}function zC(){const r=fe.useContext(Kp);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=fe.useId();return fe.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=Jy(n,!1,s=>{let a=s.memoizedState;for(;a;){if(a.memoizedState===e)return!0;a=a.next}});if(i)return i}},[r,e])}function kC(){const r=zC(),[e]=fe.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==Kp&&!e.has(i)&&e.set(i,fe.useContext(Ky(i)))}t=t.return}return e}function HC(){const r=kC();return fe.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>fe.createElement(e,null,fe.createElement(t.Provider,BC(wv({},n),{value:r.get(t)}))),e=>fe.createElement(Qy,wv({},e))),[r])}function VC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||typeof window<"u"&&window.ResizeObserver,[s,a]=fe.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0});if(!i)return s.width=1280,s.height=800,[()=>{},s,()=>{}];const c=fe.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=fe.useRef(!1);fe.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,v]=fe.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:T,height:O,bottom:P,right:L,x:B,y:k}=c.current.element.getBoundingClientRect(),b={left:E,top:w,width:T,height:O,bottom:P,right:L,x:B,y:k};c.current.element instanceof HTMLElement&&n&&(b.height=c.current.element.offsetHeight,b.width=c.current.element.offsetWidth),Object.freeze(b),f.current&&!qC(c.current.lastBounds,b)&&a(c.current.lastBounds=b)};return[_,h?xv(_,h):_,u?xv(_,u):_]},[a,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",v,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){var _;c.current.element&&(c.current.resizeObserver=new i(m),(_=c.current.resizeObserver)==null||_.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(E=>E.addEventListener("scroll",v,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{v()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=$y(_),M())};return WC(v,!!e),GC(m),fe.useEffect(()=>{y(),M()},[e,v,m]),fe.useEffect(()=>y,[]),[x,s,p]}function GC(r){fe.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function WC(r,e){fe.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function $y(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...$y(r.parentElement)]}const XC=["x","y","top","bottom","left","right","width","height"],qC=(r,e)=>XC.every(t=>r[t]===e[t]),YC=fe.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:a=IC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:v,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:T,onCreated:O,...P},L){fe.useMemo(()=>fC(sC),[]);const B=HC(),[k,b]=VC({scroll:!0,debounce:{scroll:50,resize:0},...n}),C=fe.useRef(null),X=fe.useRef(null);fe.useImperativeHandle(L,()=>C.current);const Y=ky(T),[J,ie]=fe.useState(!1),[j,he]=fe.useState(!1);if(J)throw J;if(j)throw j;const z=fe.useRef(null);sl(()=>{const ee=C.current;b.width>0&&b.height>0&&ee&&(z.current||(z.current=RC(ee)),z.current.configure({gl:s,events:a,shadows:h,linear:f,flat:p,legacy:m,orthographic:v,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,size:b,onPointerMissed:(...ae)=>Y.current==null?void 0:Y.current(...ae),onCreated:ae=>{ae.events.connect==null||ae.events.connect(c?pC(c)?c.current:c:X.current),u&&ae.setEvents({compute:(Re,Ue)=>{const ne=Re[u+"X"],me=Re[u+"Y"];Ue.pointer.set(ne/Ue.size.width*2-1,-(me/Ue.size.height)*2+1),Ue.raycaster.setFromCamera(Ue.pointer,Ue.camera)}}),O==null||O(ae)}}),z.current.render(Fe.jsx(B,{children:Fe.jsx(Hy,{set:he,children:Fe.jsx(fe.Suspense,{fallback:Fe.jsx(mC,{set:ie}),children:e})})})))}),fe.useEffect(()=>{const ee=C.current;if(ee)return()=>Zy(ee)},[]);const oe=c?"none":"auto";return Fe.jsx("div",{ref:X,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:oe,...i},...P,children:Fe.jsx("div",{ref:k,style:{width:"100%",height:"100%"},children:Fe.jsx("canvas",{ref:C,style:{display:"block"},children:t})})})}),jC=fe.forwardRef(function(e,t){return Fe.jsx(Qy,{children:Fe.jsx(YC,{...e,ref:t})})});function bo(){return bo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},bo.apply(null,arguments)}const ol=new D,Qp=new D,ZC=new D,bv=new pe;function JC(r,e,t){const n=ol.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]}function KC(r,e){const t=ol.setFromMatrixPosition(r.matrixWorld),n=Qp.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(ZC);return i.angleTo(s)>Math.PI/2}function QC(r,e,t,n){const i=ol.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),bv.set(s.x,s.y),t.setFromCamera(bv,e);const a=t.intersectObjects(n,!0);if(a.length){const c=a[0].distance;return i.distanceTo(t.ray.origin)<c}return!0}function $C(r,e){if(e instanceof bs)return e.zoom;if(e instanceof nn){const t=ol.setFromMatrixPosition(r.matrixWorld),n=Qp.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function eR(r,e,t){if(e instanceof nn||e instanceof bs){const n=ol.setFromMatrixPosition(r.matrixWorld),i=Qp.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),a=(t[1]-t[0])/(e.far-e.near),c=t[1]-a*e.far;return Math.round(a*s+c)}}const sp=r=>Math.abs(r)<1e-10?0:r;function ex(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=sp(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const tR=(r=>e=>ex(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),nR=(r=>(e,t)=>ex(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function iR(r){return r&&typeof r=="object"&&"current"in r}const $p=fe.forwardRef(({children:r,eps:e=.001,style:t,className:n,prepend:i,center:s,fullscreen:a,portal:c,distanceFactor:u,sprite:h=!1,transform:f=!1,occlude:p,onOcclude:m,castShadow:v,receiveShadow:y,material:M,geometry:x,zIndexRange:_=[16777271,0],calculatePosition:E=JC,as:w="div",wrapperClass:T,pointerEvents:O="auto",...P},L)=>{const{gl:B,camera:k,scene:b,size:C,raycaster:X,events:Y,viewport:J}=Jp(),[ie]=fe.useState(()=>document.createElement(w)),j=fe.useRef(),he=fe.useRef(null),z=fe.useRef(0),oe=fe.useRef([0,0]),ee=fe.useRef(null),ae=fe.useRef(null),Re=(c==null?void 0:c.current)||Y.connected||B.domElement.parentNode,Ue=fe.useRef(null),ne=fe.useRef(!1),me=fe.useMemo(()=>p&&p!=="blending"||Array.isArray(p)&&p.length&&iR(p[0]),[p]);fe.useLayoutEffect(()=>{const Ze=B.domElement;p&&p==="blending"?(Ze.style.zIndex=`${Math.floor(_[0]/2)}`,Ze.style.position="absolute",Ze.style.pointerEvents="none"):(Ze.style.zIndex=null,Ze.style.position=null,Ze.style.pointerEvents=null)},[p]),fe.useLayoutEffect(()=>{if(he.current){const Ze=j.current=Jx(ie);if(b.updateMatrixWorld(),f)ie.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const Ce=E(he.current,k,C);ie.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${Ce[0]}px,${Ce[1]}px,0);transform-origin:0 0;`}return Re&&(i?Re.prepend(ie):Re.appendChild(ie)),()=>{Re&&Re.removeChild(ie),Ze.unmount()}}},[Re,f]),fe.useLayoutEffect(()=>{T&&(ie.className=T)},[T]);const be=fe.useMemo(()=>f?{position:"absolute",top:0,left:0,width:C.width,height:C.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...a&&{top:-C.height/2,left:-C.width/2,width:C.width,height:C.height},...t},[t,s,a,C,f]),Ae=fe.useMemo(()=>({position:"absolute",pointerEvents:O}),[O]);fe.useLayoutEffect(()=>{if(ne.current=!1,f){var Ze;(Ze=j.current)==null||Ze.render(fe.createElement("div",{ref:ee,style:be},fe.createElement("div",{ref:ae,style:Ae},fe.createElement("div",{ref:L,className:n,style:t,children:r}))))}else{var Ce;(Ce=j.current)==null||Ce.render(fe.createElement("div",{ref:L,style:be,className:n,children:r}))}});const tt=fe.useRef(!0);Uo(Ze=>{if(he.current){k.updateMatrixWorld(),he.current.updateWorldMatrix(!0,!1);const Ce=f?oe.current:E(he.current,k,C);if(f||Math.abs(z.current-k.zoom)>e||Math.abs(oe.current[0]-Ce[0])>e||Math.abs(oe.current[1]-Ce[1])>e){const ue=KC(he.current,k);let U=!1;me&&(Array.isArray(p)?U=p.map(Se=>Se.current):p!=="blending"&&(U=[b]));const we=tt.current;if(U){const Se=QC(he.current,k,X,U);tt.current=Se&&!ue}else tt.current=!ue;we!==tt.current&&(m?m(!tt.current):ie.style.display=tt.current?"block":"none");const xe=Math.floor(_[0]/2),ve=p?me?[_[0],xe]:[xe-1,0]:_;if(ie.style.zIndex=`${eR(he.current,k,ve)}`,f){const[Se,Je]=[C.width/2,C.height/2],Ie=k.projectionMatrix.elements[5]*Je,{isOrthographicCamera:N,top:R,left:Z,bottom:le,right:de}=k,ce=tR(k.matrixWorldInverse),Ye=N?`scale(${Ie})translate(${sp(-(de+Z)/2)}px,${sp((R+le)/2)}px)`:`translateZ(${Ie}px)`;let Ee=he.current.matrixWorld;h&&(Ee=k.matrixWorldInverse.clone().transpose().copyPosition(Ee).scale(he.current.scale),Ee.elements[3]=Ee.elements[7]=Ee.elements[11]=0,Ee.elements[15]=1),ie.style.width=C.width+"px",ie.style.height=C.height+"px",ie.style.perspective=N?"":`${Ie}px`,ee.current&&ae.current&&(ee.current.style.transform=`${Ye}${ce}translate(${Se}px,${Je}px)`,ae.current.style.transform=nR(Ee,1/((u||10)/400)))}else{const Se=u===void 0?1:$C(he.current,k)*u;ie.style.transform=`translate3d(${Ce[0]}px,${Ce[1]}px,0) scale(${Se})`}oe.current=Ce,z.current=k.zoom}}if(!me&&Ue.current&&!ne.current)if(f){if(ee.current){const Ce=ee.current.children[0];if(Ce!=null&&Ce.clientWidth&&Ce!=null&&Ce.clientHeight){const{isOrthographicCamera:ue}=k;if(ue||x)P.scale&&(Array.isArray(P.scale)?P.scale instanceof D?Ue.current.scale.copy(P.scale.clone().divideScalar(1)):Ue.current.scale.set(1/P.scale[0],1/P.scale[1],1/P.scale[2]):Ue.current.scale.setScalar(1/P.scale));else{const U=(u||10)/400,we=Ce.clientWidth*U,xe=Ce.clientHeight*U;Ue.current.scale.set(we,xe,1)}ne.current=!0}}}else{const Ce=ie.children[0];if(Ce!=null&&Ce.clientWidth&&Ce!=null&&Ce.clientHeight){const ue=1/J.factor,U=Ce.clientWidth*ue,we=Ce.clientHeight*ue;Ue.current.scale.set(U,we,1),ne.current=!0}Ue.current.lookAt(Ze.camera.position)}});const nt=fe.useMemo(()=>({vertexShader:f?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[f]);return fe.createElement("group",bo({},P,{ref:he}),p&&!me&&fe.createElement("mesh",{castShadow:v,receiveShadow:y,ref:Ue},x||fe.createElement("planeGeometry",null),M||fe.createElement("shaderMaterial",{side:ti,vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader})))}),tx=parseInt(Ya.replace(/\D+/g,"")),nx=tx>=125?"uv1":"uv2",Cv=new pn,$c=new D;class em extends Vp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new je(e,3)),this.setAttribute("uv",new je(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Yu(t,6,1);return this.setAttribute("instanceStart",new ni(n,3,0)),this.setAttribute("instanceEnd",new ni(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Yu(n,t*2,1);return this.setAttribute("instanceColorStart",new ni(i,t,0)),this.setAttribute("instanceColorEnd",new ni(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Np(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Cv.setFromBufferAttribute(t),this.boundingBox.union(Cv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)$c.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($c)),$c.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared($c));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class ix extends em{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class tm extends vi{constructor(e){super({type:"LineMaterial",uniforms:Vu.clone(Vu.merge([Te.common,Te.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${tx>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Nd=new xt,Rv=new D,Pv=new D,_n=new xt,yn=new xt,Bi=new xt,Od=new D,Fd=new rt,xn=new Ly,Iv=new D,eu=new pn,tu=new mn,zi=new xt;let ki,Ss;function Lv(r,e,t){return zi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),zi.multiplyScalar(1/zi.w),zi.x=Ss/t.width,zi.y=Ss/t.height,zi.applyMatrix4(r.projectionMatrixInverse),zi.multiplyScalar(1/zi.w),Math.abs(Math.max(zi.x,zi.y))}function rR(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let c=0,u=a;c<u;c++){xn.start.fromBufferAttribute(i,c),xn.end.fromBufferAttribute(s,c),xn.applyMatrix4(t);const h=new D,f=new D;ki.distanceSqToSegment(xn.start,xn.end,f,h),f.distanceTo(h)<Ss*.5&&e.push({point:f,pointOnLine:h,distance:ki.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[nx]:null})}}function sR(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;ki.at(1,Bi),Bi.w=1,Bi.applyMatrix4(e.matrixWorldInverse),Bi.applyMatrix4(n),Bi.multiplyScalar(1/Bi.w),Bi.x*=s.x/2,Bi.y*=s.y/2,Bi.z=0,Od.copy(Bi),Fd.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,v=f;m<v;m++){if(_n.fromBufferAttribute(u,m),yn.fromBufferAttribute(h,m),_n.w=1,yn.w=1,_n.applyMatrix4(Fd),yn.applyMatrix4(Fd),_n.z>p&&yn.z>p)continue;if(_n.z>p){const w=_n.z-yn.z,T=(_n.z-p)/w;_n.lerp(yn,T)}else if(yn.z>p){const w=yn.z-_n.z,T=(yn.z-p)/w;yn.lerp(_n,T)}_n.applyMatrix4(n),yn.applyMatrix4(n),_n.multiplyScalar(1/_n.w),yn.multiplyScalar(1/yn.w),_n.x*=s.x/2,_n.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,xn.start.copy(_n),xn.start.z=0,xn.end.copy(yn),xn.end.z=0;const M=xn.closestPointToPointParameter(Od,!0);xn.at(M,Iv);const x=E_.lerp(_n.z,yn.z,M),_=x>=-1&&x<=1,E=Od.distanceTo(Iv)<Ss*.5;if(_&&E){xn.start.fromBufferAttribute(u,m),xn.end.fromBufferAttribute(h,m),xn.start.applyMatrix4(a),xn.end.applyMatrix4(a);const w=new D,T=new D;ki.distanceSqToSegment(xn.start,xn.end,T,w),t.push({point:T,pointOnLine:w,distance:ki.origin.distanceTo(T),object:r,face:null,faceIndex:m,uv:null,[nx]:null})}}}class rx extends Qt{constructor(e=new em,t=new tm({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,c=0,u=t.count;a<u;a++,c+=2)Rv.fromBufferAttribute(t,a),Pv.fromBufferAttribute(n,a),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+Rv.distanceTo(Pv);const s=new Yu(i,2,1);return e.setAttribute("instanceDistanceStart",new ni(s,1,0)),e.setAttribute("instanceDistanceEnd",new ni(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ki=e.ray;const a=this.matrixWorld,c=this.geometry,u=this.material;Ss=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),tu.copy(c.boundingSphere).applyMatrix4(a);let h;if(n)h=Ss*.5;else{const p=Math.max(i.near,tu.distanceToPoint(ki.origin));h=Lv(i,p,u.resolution)}if(tu.radius+=h,ki.intersectsSphere(tu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),eu.copy(c.boundingBox).applyMatrix4(a);let f;if(n)f=Ss*.5;else{const p=Math.max(i.near,eu.distanceToPoint(ki.origin));f=Lv(i,p,u.resolution)}eu.expandByScalar(f),ki.intersectsBox(eu)!==!1&&(n?rR(this,t):sR(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Nd),this.material.uniforms.resolution.value.set(Nd.z,Nd.w))}}class oR extends rx{constructor(e=new ix,t=new tm({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const sx=fe.forwardRef(function({children:e,follow:t=!0,lockX:n=!1,lockY:i=!1,lockZ:s=!1,...a},c){const u=fe.useRef(null),h=fe.useRef(null),f=new zn;return Uo(({camera:p})=>{if(!t||!h.current)return;const m=h.current.rotation.clone();h.current.updateMatrix(),h.current.updateWorldMatrix(!1,!1),h.current.getWorldQuaternion(f),p.getWorldQuaternion(u.current.quaternion).premultiply(f.invert()),n&&(h.current.rotation.x=m.x),i&&(h.current.rotation.y=m.y),s&&(h.current.rotation.z=m.z)}),fe.useImperativeHandle(c,()=>h.current,[]),fe.createElement("group",bo({ref:h},a),fe.createElement("group",{ref:u},e))}),Zu=fe.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:a,dashed:c,...u},h){var f,p;const m=Jp(_=>_.size),v=fe.useMemo(()=>a?new rx:new oR,[a]),[y]=fe.useState(()=>new tm),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=fe.useMemo(()=>{const _=a?new em:new ix,E=e.map(w=>{const T=Array.isArray(w);return w instanceof D||w instanceof xt?[w.x,w.y,w.z]:w instanceof pe?[w.x,w.y,0]:T&&w.length===3?[w[0],w[1],w[2]]:T&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(T=>T instanceof De?T.toArray():T);_.setColors(w.flat(),M)}return _},[e,a,n,M]);return fe.useLayoutEffect(()=>{v.computeLineDistances()},[e,v]),fe.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),fe.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),fe.createElement("primitive",bo({object:v,ref:h},u),fe.createElement("primitive",{object:x,attach:"geometry"}),fe.createElement("primitive",bo({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))}),ox=6,nm=(r,e)=>{const t=Math.hypot(r*.9,e*1.15);if(t<15)return-Math.min(ox,Math.floor((15-t)/1.7))*1.05;const n=Math.min(1,(t-15)/9);return(Math.sin(r*.21+1.3)*Math.cos(e*.17)*1.7+Math.sin((r+e)*.09)*1.3)*n};function aR({color:r}){const e=fe.useMemo(()=>{const c=new Float32Array(201600),u=new Float32Array(280*240*3),h=new De(r);let f=0;for(let m=0;m<240;m++)for(let v=0;v<280;v++){const y=(v/279-.5)*156,M=(m/239-.5)*134,x=nm(y,M),_=.35+.65*Math.min(1,Math.max(0,(x+6.3)/8.5));u[f]=h.r*_,u[f+1]=h.g*_,u[f+2]=h.b*_,c[f++]=y,c[f++]=x,c[f++]=M}const p=new mt;return p.setAttribute("position",new Nt(c,3)),p.setAttribute("color",new Nt(u,3)),p},[r]),t=fe.useMemo(()=>Array.from({length:ox},(n,i)=>{const s=15-i*1.7;return Array.from({length:97},(a,c)=>{const u=c/96*Math.PI*2;return[Math.cos(u)*s/.9,-i*1.05+.02,Math.sin(u)*s/1.15]})}),[]);return Fe.jsxs("group",{children:[Fe.jsx("points",{geometry:e,children:Fe.jsx("pointsMaterial",{size:.12,vertexColors:!0,transparent:!0,opacity:.75,sizeAttenuation:!0,depthWrite:!1})}),t.map((n,i)=>Fe.jsx(Zu,{points:n,color:r,lineWidth:1,transparent:!0,opacity:.55},i))]})}const lR=r=>{const[e,t]=r.anchor,n=new D(e,nm(e,t)+2.4,t),i=new D(...r.node),s=n.clone().lerp(i,.5);return s.y=Math.max(n.y,i.y)+1.5,new ph(n,s,i)};function cR({cap:r,activo:e,paleta:t,rafaga:n,quieto:i}){const s=fe.useMemo(()=>lR(r),[r]),a=fe.useMemo(()=>s.getPoints(48),[s]),c=fe.useMemo(()=>[r.node,Dv],[r]),u=fe.useRef(),h=fe.useRef(),f=fe.useRef(),p=fe.useRef({marca:0,t0:-10});return Uo(m=>{const v=m.clock.elapsedTime;n!==p.current.marca&&(p.current={marca:n,t0:v});const y=r.anchor[0]*.07;if(u.current&&s.getPoint(i?.35:(v*.16+y+10)%1,u.current.position),h.current&&s.getPoint(i?.7:(v*.16+y+10.5)%1,h.current.position),f.current){const M=(v-p.current.t0)/1.5;f.current.visible=M>=0&&M<=1&&!i,f.current.visible&&(s.getPoint(M,f.current.position),f.current.scale.setScalar(1+Math.sin(M*Math.PI)*1.4))}}),Fe.jsxs("group",{children:[Fe.jsx(Zu,{points:a,color:e?t.acc:t.line,lineWidth:e?2:1,transparent:!0,opacity:e?1:.9}),Fe.jsx(Zu,{points:c,color:e?t.acc:t.line,lineWidth:1,transparent:!0,opacity:e?.9:.55}),Fe.jsxs("mesh",{ref:u,children:[Fe.jsx("sphereGeometry",{args:[.13,12,12]}),Fe.jsx("meshBasicMaterial",{color:t.acc})]}),Fe.jsxs("mesh",{ref:h,children:[Fe.jsx("sphereGeometry",{args:[.13,12,12]}),Fe.jsx("meshBasicMaterial",{color:t.acc})]}),Fe.jsxs("mesh",{ref:f,visible:!1,children:[Fe.jsx("sphereGeometry",{args:[.2,16,16]}),Fe.jsx("meshBasicMaterial",{color:t.acc})]})]})}function uR({cap:r,activo:e,paleta:t}){const[n,i]=r.anchor,s=nm(n,i);return Fe.jsxs("group",{position:[n,s,i],children:[Fe.jsx(Zu,{points:[[0,0,0],[0,2.4,0]],color:e?t.acc:t.mut,lineWidth:1}),Fe.jsxs("mesh",{position:[0,2.4,0],children:[Fe.jsx("octahedronGeometry",{args:[.3]}),Fe.jsx("meshBasicMaterial",{color:e?t.acc:t.fg,wireframe:!0})]}),Fe.jsx(sx,{position:[0,.05,0],children:Fe.jsxs("mesh",{rotation:[0,0,0],children:[Fe.jsx("ringGeometry",{args:[.5,.56,40]}),Fe.jsx("meshBasicMaterial",{color:e?t.acc:t.mut,transparent:!0,opacity:.8,side:ti})]})}),Fe.jsx($p,{center:!0,position:[0,-1.1,0],zIndexRange:[4,0],style:{pointerEvents:"none"},children:Fe.jsx("span",{className:"albl"+(e?" on":""),children:r.asset})})]})}const Bd=new D;function hR({cap:r,sel:e,sobre:t,alElegir:n,alPasar:i,paleta:s}){const a=fe.useRef(),c=fe.useRef(),u=fe.useRef("");Uo((f,p)=>{if(c.current){Bd.set(...r.node).project(f.camera);const m=f.camera.view,v=m&&m.enabled?((Bd.x+1)/2*m.fullWidth-m.offsetX)/m.width:(Bd.x+1)/2,M=r.lado==="izq"||v*f.size.width+40+c.current.offsetWidth>f.size.width-12?"translate(calc(-100% - 26px), -50%)":"translate(26px, -50%)";M!==u.current&&(c.current.style.transform=u.current=M)}if(a.current){const m=e?1.25:t?1.1:.85,v=a.current.scale.x+(m-a.current.scale.x)*Math.min(1,p*8);a.current.scale.setScalar(v)}});const h=e||t;return Fe.jsxs("group",{position:r.node,children:[Fe.jsxs("mesh",{onClick:f=>(f.stopPropagation(),n(r.id)),onPointerOver:f=>(f.stopPropagation(),i(r.id)),onPointerOut:()=>i(null),children:[Fe.jsx("sphereGeometry",{args:[1.3,12,12]}),Fe.jsx("meshBasicMaterial",{transparent:!0,opacity:0,depthWrite:!1})]}),Fe.jsxs("mesh",{children:[Fe.jsx("sphereGeometry",{args:[.36,24,24]}),Fe.jsx("meshBasicMaterial",{color:h?s.acc:s.frio})]}),Fe.jsx(sx,{ref:a,children:Fe.jsxs("mesh",{children:[Fe.jsx("ringGeometry",{args:[.82,.9,56]}),Fe.jsx("meshBasicMaterial",{color:h?s.acc:s.frio,transparent:!0,opacity:h?1:.75,side:ti})]})}),Fe.jsx($p,{position:[0,0,0],zIndexRange:[6,0],children:Fe.jsxs("button",{ref:c,style:{transform:"translate(26px, -50%)"},type:"button",className:"nlbl"+(e?" on":""),onClick:()=>n(r.id),onMouseEnter:()=>i(r.id),onMouseLeave:()=>i(null),"aria-pressed":e,children:[Fe.jsx("i",{children:r.tag}),Fe.jsx("span",{children:r.name})]})})]})}function fR({paleta:r,quieto:e,pensando:t}){const n=fe.useRef();return Uo((i,s)=>{if(!n.current)return;const a=n.current.scale.x+((t?1.35:1)-n.current.scale.x)*Math.min(1,s*5);n.current.scale.setScalar(a),e||(n.current.rotation.y+=s*(t?1.6:.25),n.current.rotation.x+=s*(t?.7:.11))}),Fe.jsxs("group",{position:Dv,children:[Fe.jsxs("mesh",{ref:n,children:[Fe.jsx("icosahedronGeometry",{args:[1.6,1]}),Fe.jsx("meshBasicMaterial",{color:t?r.acc:r.frio,wireframe:!0})]}),Fe.jsxs("mesh",{children:[Fe.jsx("sphereGeometry",{args:[.34,20,20]}),Fe.jsx("meshBasicMaterial",{color:t?r.acc:r.frio})]}),Fe.jsx($p,{center:!0,position:[1.6,3.7,0],zIndexRange:[4,0],style:{pointerEvents:"none"},children:Fe.jsx("span",{className:"albl nucleo",children:"Capa de decisión"})})]})}function dR({foco:r,quieto:e}){const{camera:t,pointer:n,size:i}=Jp();fe.useEffect(()=>{i.width>920?t.setViewOffset(i.width,i.height,-Math.round(i.width*.15),-Math.round(i.height*.01),i.width,i.height):t.clearViewOffset(),t.updateProjectionMatrix()},[t,i.width,i.height]);const s=fe.useRef(new D(0,6,0)),a=fe.useRef(new D),c=fe.useRef(new D);return Uo((u,h)=>{const f=u.clock.elapsedTime,p=(e?0:Math.sin(f*.07)*.3)+n.x*.14+(r?Math.atan2(r[0],60)*.6:0),m=(r?52:57)*(i.width<700?1.28:1);a.current.set(Math.sin(p)*m,(i.width<700?40:34)-n.y*2.5,Math.cos(p)*m),t.position.lerp(a.current,1-Math.pow(.02,h)),r?c.current.set(r[0]*.3,5,r[2]*.3):c.current.set(0,5,0),s.current.lerp(c.current,1-Math.pow(.03,h)),t.lookAt(s.current)}),null}function vR({sel:r,sobre:e,alElegir:t,alPasar:n,paleta:i,rafagas:s,quieto:a,pensando:c}){const u=Ug.find(h=>h.id===r);return Fe.jsxs(jC,{dpr:[1,2],camera:{fov:38,near:.1,far:400,position:[0,25,48]},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},onPointerMissed:()=>n(null),children:[Fe.jsx("fog",{attach:"fog",args:[i.bg,70,190]}),Fe.jsx(dR,{foco:u?u.node:null,quieto:a}),Fe.jsx(aR,{color:i.terreno}),Fe.jsx(fR,{paleta:i,quieto:a,pensando:c}),Ug.map(h=>{const f=!c&&(h.id===r||h.id===e);return Fe.jsxs("group",{children:[Fe.jsx(uR,{cap:h,activo:f,paleta:i}),Fe.jsx(cR,{cap:h,activo:f,paleta:i,rafaga:s[h.id]||0,quieto:a}),Fe.jsx(hR,{cap:h,sel:h.id===r,sobre:h.id===e,alElegir:t,alPasar:n,paleta:i})]},h.id)})]})}export{nm as altura,vR as default};
