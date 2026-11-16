var Jd=Object.defineProperty;var ec=(e,t,n)=>t in e?Jd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var O=(e,t,n)=>ec(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var zs={exports:{}},bo={},Ns={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=Symbol.for("react.element"),tc=Symbol.for("react.portal"),nc=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),lc=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),sc=Symbol.for("react.suspense"),uc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),pi=Symbol.iterator;function cc(e){return e===null||typeof e!="object"?null:(e=pi&&e[pi]||e["@@iterator"],typeof e=="function"?e:null)}var Ps={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Ls={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Ls,this.updater=n||Ps}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rs(){}Rs.prototype=_n.prototype;function fl(e,t,n){this.props=e,this.context=t,this.refs=Ls,this.updater=n||Ps}var pl=fl.prototype=new Rs;pl.constructor=fl;Is(pl,_n.prototype);pl.isPureReactComponent=!0;var hi=Array.isArray,As=Object.prototype.hasOwnProperty,hl={current:null},Ds={key:!0,ref:!0,__self:!0,__source:!0};function Ms(e,t,n){var r,o={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)As.call(t,r)&&!Ds.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:hr,type:e,key:a,ref:l,props:o,_owner:hl.current}}function fc(e,t){return{$$typeof:hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===hr}function pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mi=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pc(""+e.key):t.toString(36)}function Or(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case hr:case tc:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ho(l,0):r,hi(o)?(n="",e!=null&&(n=e.replace(mi,"$&/")+"/"),Or(o,t,n,"",function(u){return u})):o!=null&&(ml(o)&&(o=fc(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(mi,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",hi(e))for(var i=0;i<e.length;i++){a=e[i];var s=r+Ho(a,i);l+=Or(a,t,n,s,o)}else if(s=cc(e),typeof s=="function")for(e=s.call(e),i=0;!(a=e.next()).done;)a=a.value,s=r+Ho(a,i++),l+=Or(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function wr(e,t,n){if(e==null)return e;var r=[],o=0;return Or(e,r,"","",function(a){return t.call(n,a,o++)}),r}function hc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Ur={transition:null},mc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:hl};function $s(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=_n;R.Fragment=nc;R.Profiler=oc;R.PureComponent=fl;R.StrictMode=rc;R.Suspense=sc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mc;R.act=$s;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Is({},e.props),o=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=hl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)As.call(t,s)&&!Ds.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:hr,type:e.type,key:o,ref:a,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:lc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};R.createElement=Ms;R.createFactory=function(e){var t=Ms.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:ic,render:e}};R.isValidElement=ml;R.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:hc}};R.memo=function(e,t){return{$$typeof:uc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};R.unstable_act=$s;R.useCallback=function(e,t){return he.current.useCallback(e,t)};R.useContext=function(e){return he.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return he.current.useDeferredValue(e)};R.useEffect=function(e,t){return he.current.useEffect(e,t)};R.useId=function(){return he.current.useId()};R.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return he.current.useMemo(e,t)};R.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};R.useRef=function(e){return he.current.useRef(e)};R.useState=function(e){return he.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return he.current.useTransition()};R.version="18.3.1";Ns.exports=R;var X=Ns.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc=X,vc=Symbol.for("react.element"),yc=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,kc=gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function Fs(e,t,n){var r,o={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)xc.call(t,r)&&!_c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:vc,type:e,key:a,ref:l,props:o,_owner:kc.current}}bo.Fragment=yc;bo.jsx=Fs;bo.jsxs=Fs;zs.exports=bo;var g=zs.exports,Os={exports:{}},be={},Us={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(w,z){var N=w.length;w.push(z);e:for(;0<N;){var V=N-1>>>1,L=w[V];if(0<o(L,z))w[V]=z,w[N]=L,N=V;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var z=w[0],N=w.pop();if(N!==z){w[0]=N;e:for(var V=0,L=w.length,Me=L>>>1;V<Me;){var $e=2*(V+1)-1,zt=w[$e],Nt=$e+1,_r=w[Nt];if(0>o(zt,N))Nt<L&&0>o(_r,zt)?(w[V]=_r,w[Nt]=N,V=Nt):(w[V]=zt,w[$e]=N,V=$e);else if(Nt<L&&0>o(_r,N))w[V]=_r,w[Nt]=N,V=Nt;else break e}}return z}function o(w,z){var N=w.sortIndex-z.sortIndex;return N!==0?N:w.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],u=[],c=1,m=null,h=3,v=!1,y=!1,_=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(w){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=w)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(w){if(_=!1,p(w),!y)if(n(s)!==null)y=!0,A(S);else{var z=n(u);z!==null&&B(x,z.startTime-w)}}function S(w,z){y=!1,_&&(_=!1,f(j),j=-1),v=!0;var N=h;try{for(p(z),m=n(s);m!==null&&(!(m.expirationTime>z)||w&&!_e());){var V=m.callback;if(typeof V=="function"){m.callback=null,h=m.priorityLevel;var L=V(m.expirationTime<=z);z=e.unstable_now(),typeof L=="function"?m.callback=L:m===n(s)&&r(s),p(z)}else r(s);m=n(s)}if(m!==null)var Me=!0;else{var $e=n(u);$e!==null&&B(x,$e.startTime-z),Me=!1}return Me}finally{m=null,h=N,v=!1}}var C=!1,E=null,j=-1,Q=5,I=-1;function _e(){return!(e.unstable_now()-I<Q)}function jt(){if(E!==null){var w=e.unstable_now();I=w;var z=!0;try{z=E(!0,w)}finally{z?Qe():(C=!1,E=null)}}else C=!1}var Qe;if(typeof d=="function")Qe=function(){d(jt)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,b=En.port2;En.port1.onmessage=jt,Qe=function(){b.postMessage(null)}}else Qe=function(){P(jt,0)};function A(w){E=w,C||(C=!0,Qe())}function B(w,z){j=P(function(){w(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,A(S))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(w){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var N=h;h=z;try{return w()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,z){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var N=h;h=w;try{return z()}finally{h=N}},e.unstable_scheduleCallback=function(w,z,N){var V=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,w){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=N+L,w={id:c++,callback:z,priorityLevel:w,startTime:N,expirationTime:L,sortIndex:-1},N>V?(w.sortIndex=N,t(u,w),n(s)===null&&w===n(u)&&(_?(f(j),j=-1):_=!0,B(x,N-V))):(w.sortIndex=L,t(s,w),y||v||(y=!0,A(S))),w},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(w){var z=h;return function(){var N=h;h=z;try{return w.apply(this,arguments)}finally{h=N}}}})(Bs);Us.exports=Bs;var wc=Us.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=X,Ce=wc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vs=new Set,Xn={};function Ht(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),va=Object.prototype.hasOwnProperty,Ec=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gi={},vi={};function Tc(e){return va.call(vi,e)?!0:va.call(gi,e)?!1:Ec.test(e)?vi[e]=!0:(gi[e]=!0,!1)}function Cc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bc(e,t,n,r){if(t===null||typeof t>"u"||Cc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,o,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gl,vl);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gl,vl);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gl,vl);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,t,n,r){var o=ie.hasOwnProperty(t)?ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bc(t,n,o,r)&&(n=null),r||o===null?Tc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),Hs=Symbol.for("react.provider"),qs=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),ka=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Qs=Symbol.for("react.offscreen"),yi=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=yi&&e[yi]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,qo;function Dn(e){if(qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qo=t&&t[1]||""}return`
`+qo+e}var Qo=!1;function Wo(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),l=o.length-1,i=a.length-1;1<=l&&0<=i&&o[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||o[l]!==a[i]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function jc(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Wo(e.type,!1),e;case 11:return e=Wo(e.type.render,!1),e;case 1:return e=Wo(e.type,!0),e;default:return""}}function _a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Yt:return"Portal";case ya:return"Profiler";case xl:return"StrictMode";case xa:return"Suspense";case ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qs:return(e.displayName||"Context")+".Consumer";case Hs:return(e._context.displayName||"Context")+".Provider";case kl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:_a(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return _a(e(t))}catch{}}return null}function zc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(t);case 8:return t===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nc(e){var t=Ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=Nc(e))}function Ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wa(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&yl(e,"checked",t,!1)}function Sa(e,t){Ys(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ea(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ki(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ea(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ta(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _i(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Mn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Zs(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pc=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Pc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Js(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Js(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ic=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(e,t){if(t){if(Ic[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,un=null,dn=null;function Si(e){if(e=vr(e)){if(typeof Na!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Io(t),Na(e.stateNode,e.type,t))}}function tu(e){un?dn?dn.push(e):dn=[e]:un=e}function nu(){if(un){var e=un,t=dn;if(dn=un=null,Si(e),t)for(e=0;e<t.length;e++)Si(t[e])}}function ru(e,t){return e(t)}function ou(){}var Ko=!1;function au(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return ru(e,t,n)}finally{Ko=!1,(un!==null||dn!==null)&&(ou(),nu())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Pa=!1;if(rt)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Pa=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Pa=!1}function Lc(e,t,n,r,o,a,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Un=!1,Jr=null,eo=!1,Ia=null,Rc={onError:function(e){Un=!0,Jr=e}};function Ac(e,t,n,r,o,a,l,i,s){Un=!1,Jr=null,Lc.apply(Rc,arguments)}function Dc(e,t,n,r,o,a,l,i,s){if(Ac.apply(this,arguments),Un){if(Un){var u=Jr;Un=!1,Jr=null}else throw Error(k(198));eo||(eo=!0,Ia=u)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ei(e){if(qt(e)!==e)throw Error(k(188))}function Mc(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Ei(o),e;if(a===r)return Ei(o),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,i=o.child;i;){if(i===n){l=!0,n=o,r=a;break}if(i===r){l=!0,r=o,n=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===n){l=!0,n=a,r=o;break}if(i===r){l=!0,r=a,n=o;break}i=i.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function iu(e){return e=Mc(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var uu=Ce.unstable_scheduleCallback,Ti=Ce.unstable_cancelCallback,$c=Ce.unstable_shouldYield,Fc=Ce.unstable_requestPaint,J=Ce.unstable_now,Oc=Ce.unstable_getCurrentPriorityLevel,Sl=Ce.unstable_ImmediatePriority,du=Ce.unstable_UserBlockingPriority,to=Ce.unstable_NormalPriority,Uc=Ce.unstable_LowPriority,cu=Ce.unstable_IdlePriority,jo=null,Ze=null;function Bc(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:qc,Vc=Math.log,Hc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Vc(e)/Hc|0)|0}var Cr=64,br=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~o;i!==0?r=$n(i):(a&=l,a!==0&&(r=$n(a)))}else l=n&~o,l!==0?r=$n(l):a!==0&&(r=$n(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),o=1<<n,r|=e[n],t&=~o;return r}function Qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ve(a),i=1<<l,s=o[l];s===-1?(!(i&n)||i&r)&&(o[l]=Qc(i,t)):s<=t&&(e.expiredLanes|=i),a&=~i}}function La(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Kc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ve(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function El(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,Tl,mu,gu,vu,Ra=!1,jr=[],mt=null,gt=null,vt=null,er=new Map,tr=new Map,ct=[],Yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ci(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function bn(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=vr(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zc(e,t,n,r,o){switch(t){case"focusin":return mt=bn(mt,e,t,n,r,o),!0;case"dragenter":return gt=bn(gt,e,t,n,r,o),!0;case"mouseover":return vt=bn(vt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return er.set(a,bn(er.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,tr.set(a,bn(tr.get(a)||null,e,t,n,r,o)),!0}return!1}function yu(e){var t=Lt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=lu(n),t!==null){e.blockedOn=t,vu(e.priority,function(){mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);za=r,n.target.dispatchEvent(r),za=null}else return t=vr(n),t!==null&&Tl(t),e.blockedOn=n,!1;t.shift()}return!0}function bi(e,t,n){Br(e)&&n.delete(t)}function Xc(){Ra=!1,mt!==null&&Br(mt)&&(mt=null),gt!==null&&Br(gt)&&(gt=null),vt!==null&&Br(vt)&&(vt=null),er.forEach(bi),tr.forEach(bi)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Xc)))}function nr(e){function t(o){return jn(o,e)}if(0<jr.length){jn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&jn(mt,e),gt!==null&&jn(gt,e),vt!==null&&jn(vt,e),er.forEach(t),tr.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)yu(n),n.blockedOn===null&&ct.shift()}var cn=it.ReactCurrentBatchConfig,ro=!0;function Gc(e,t,n,r){var o=$,a=cn.transition;cn.transition=null;try{$=1,Cl(e,t,n,r)}finally{$=o,cn.transition=a}}function Jc(e,t,n,r){var o=$,a=cn.transition;cn.transition=null;try{$=4,Cl(e,t,n,r)}finally{$=o,cn.transition=a}}function Cl(e,t,n,r){if(ro){var o=Aa(e,t,n,r);if(o===null)aa(e,t,r,oo,n),Ci(e,r);else if(Zc(o,e,t,n,r))r.stopPropagation();else if(Ci(e,r),t&4&&-1<Yc.indexOf(e)){for(;o!==null;){var a=vr(o);if(a!==null&&hu(a),a=Aa(e,t,n,r),a===null&&aa(e,t,r,oo,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var oo=null;function Aa(e,t,n,r){if(oo=null,e=wl(r),e=Lt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oc()){case Sl:return 1;case du:return 4;case to:case Uc:return 16;case cu:return 536870912;default:return 16}default:return 16}}var pt=null,bl=null,Vr=null;function ku(){if(Vr)return Vr;var e,t=bl,n=t.length,r,o="value"in pt?pt.value:pt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[a-r];r++);return Vr=o.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function ji(){return!1}function je(e){function t(n,r,o,a,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zr:ji,this.isPropagationStopped=ji,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=je(wn),gr=Z({},wn,{view:0,detail:0}),ef=je(gr),Zo,Xo,zn,zo=Z({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Zo=e.screenX-zn.screenX,Xo=e.screenY-zn.screenY):Xo=Zo=0,zn=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),zi=je(zo),tf=Z({},zo,{dataTransfer:0}),nf=je(tf),rf=Z({},gr,{relatedTarget:0}),Go=je(rf),of=Z({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),af=je(of),lf=Z({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=je(lf),uf=Z({},wn,{data:0}),Ni=je(uf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function zl(){return pf}var hf=Z({},gr,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=je(hf),gf=Z({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pi=je(gf),vf=Z({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),yf=je(vf),xf=Z({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=je(xf),_f=Z({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=je(_f),Sf=[9,13,27,32],Nl=rt&&"CompositionEvent"in window,Bn=null;rt&&"documentMode"in document&&(Bn=document.documentMode);var Ef=rt&&"TextEvent"in window&&!Bn,_u=rt&&(!Nl||Bn&&8<Bn&&11>=Bn),Ii=" ",Li=!1;function wu(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Tf(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(Li=!0,Ii);case"textInput":return e=t.data,e===Ii&&Li?null:e;default:return null}}function Cf(e,t){if(Xt)return e==="compositionend"||!Nl&&wu(e,t)?(e=ku(),Vr=bl=pt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bf[e.type]:t==="textarea"}function Eu(e,t,n,r){tu(r),t=ao(t,"onChange"),0<t.length&&(n=new jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,rr=null;function jf(e){Au(e,0)}function No(e){var t=en(e);if(Ks(t))return e}function zf(e,t){if(e==="change")return t}var Tu=!1;if(rt){var Jo;if(rt){var ea="oninput"in document;if(!ea){var Ai=document.createElement("div");Ai.setAttribute("oninput","return;"),ea=typeof Ai.oninput=="function"}Jo=ea}else Jo=!1;Tu=Jo&&(!document.documentMode||9<document.documentMode)}function Di(){Vn&&(Vn.detachEvent("onpropertychange",Cu),rr=Vn=null)}function Cu(e){if(e.propertyName==="value"&&No(rr)){var t=[];Eu(t,rr,e,wl(e)),au(jf,t)}}function Nf(e,t,n){e==="focusin"?(Di(),Vn=t,rr=n,Vn.attachEvent("onpropertychange",Cu)):e==="focusout"&&Di()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(rr)}function If(e,t){if(e==="click")return No(t)}function Lf(e,t){if(e==="input"||e==="change")return No(t)}function Rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Rf;function or(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!va.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Mi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $i(e,t){var n=Mi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mi(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&Pl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=$i(n,a);var l=$i(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=rt&&"documentMode"in document&&11>=document.documentMode,Gt=null,Da=null,Hn=null,Ma=!1;function Fi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Gt==null||Gt!==Gr(r)||(r=Gt,"selectionStart"in r&&Pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&or(Hn,r)||(Hn=r,r=ao(Da,"onSelect"),0<r.length&&(t=new jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},ta={},zu={};rt&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Po(e){if(ta[e])return ta[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return ta[e]=t[n];return e}var Nu=Po("animationend"),Pu=Po("animationiteration"),Iu=Po("animationstart"),Lu=Po("transitionend"),Ru=new Map,Oi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Ru.set(e,t),Ht(t,[e])}for(var na=0;na<Oi.length;na++){var ra=Oi[na],Mf=ra.toLowerCase(),$f=ra[0].toUpperCase()+ra.slice(1);Tt(Mf,"on"+$f)}Tt(Nu,"onAnimationEnd");Tt(Pu,"onAnimationIteration");Tt(Iu,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Lu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Ui(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dc(r,t,void 0,e),e.currentTarget=null}function Au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==a&&o.isPropagationStopped())break e;Ui(o,i,u),a=s}else for(l=0;l<r.length;l++){if(i=r[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==a&&o.isPropagationStopped())break e;Ui(o,i,u),a=s}}}if(eo)throw e=Ia,eo=!1,Ia=null,e}function H(e,t){var n=t[Ba];n===void 0&&(n=t[Ba]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Pr]){e[Pr]=!0,Vs.forEach(function(n){n!=="selectionchange"&&(Ff.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,oa("selectionchange",!1,t))}}function Du(e,t,n,r){switch(xu(t)){case 1:var o=Gc;break;case 4:o=Jc;break;default:o=Cl}n=o.bind(null,t,n,e),o=void 0,!Pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;i!==null;){if(l=Lt(i),l===null)return;if(s=l.tag,s===5||s===6){r=a=l;continue e}i=i.parentNode}}r=r.return}au(function(){var u=a,c=wl(n),m=[];e:{var h=Ru.get(e);if(h!==void 0){var v=jl,y=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":v=mf;break;case"focusin":y="focus",v=Go;break;case"focusout":y="blur",v=Go;break;case"beforeblur":case"afterblur":v=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yf;break;case Nu:case Pu:case Iu:v=af;break;case Lu:v=kf;break;case"scroll":v=ef;break;case"wheel":v=wf;break;case"copy":case"cut":case"paste":v=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Pi}var _=(t&4)!==0,P=!_&&e==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var d=u,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Jn(d,f),x!=null&&_.push(lr(d,x,p)))),P)break;d=d.return}0<_.length&&(h=new v(h,y,null,n,c),m.push({event:h,listeners:_}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==za&&(y=n.relatedTarget||n.fromElement)&&(Lt(y)||y[ot]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Lt(y):null,y!==null&&(P=qt(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=zi,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(_=Pi,x="onPointerLeave",f="onPointerEnter",d="pointer"),P=v==null?h:en(v),p=y==null?h:en(y),h=new _(x,d+"leave",v,n,c),h.target=P,h.relatedTarget=p,x=null,Lt(c)===u&&(_=new _(f,d+"enter",y,n,c),_.target=p,_.relatedTarget=P,x=_),P=x,v&&y)t:{for(_=v,f=y,d=0,p=_;p;p=Wt(p))d++;for(p=0,x=f;x;x=Wt(x))p++;for(;0<d-p;)_=Wt(_),d--;for(;0<p-d;)f=Wt(f),p--;for(;d--;){if(_===f||f!==null&&_===f.alternate)break t;_=Wt(_),f=Wt(f)}_=null}else _=null;v!==null&&Bi(m,h,v,_,!1),y!==null&&P!==null&&Bi(m,P,y,_,!0)}}e:{if(h=u?en(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=zf;else if(Ri(h))if(Tu)S=Lf;else{S=Pf;var C=Nf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=If);if(S&&(S=S(e,u))){Eu(m,S,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ea(h,"number",h.value)}switch(C=u?en(u):window,e){case"focusin":(Ri(C)||C.contentEditable==="true")&&(Gt=C,Da=u,Hn=null);break;case"focusout":Hn=Da=Gt=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,Fi(m,n,c);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Fi(m,n,c)}var E;if(Nl)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Xt?wu(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(_u&&n.locale!=="ko"&&(Xt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Xt&&(E=ku()):(pt=c,bl="value"in pt?pt.value:pt.textContent,Xt=!0)),C=ao(u,j),0<C.length&&(j=new Ni(j,e,null,n,c),m.push({event:j,listeners:C}),E?j.data=E:(E=Su(n),E!==null&&(j.data=E)))),(E=Ef?Tf(e,n):Cf(e,n))&&(u=ao(u,"onBeforeInput"),0<u.length&&(c=new Ni("onBeforeInput","beforeinput",null,n,c),m.push({event:c,listeners:u}),c.data=E))}Au(m,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Jn(e,n),a!=null&&r.unshift(lr(e,a,o)),a=Jn(e,t),a!=null&&r.push(lr(e,a,o))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bi(e,t,n,r,o){for(var a=t._reactName,l=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,o?(s=Jn(n,a),s!=null&&l.unshift(lr(n,s,i))):o||(s=Jn(n,a),s!=null&&l.push(lr(n,s,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Of=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(Of,`
`).replace(Uf,"")}function Ir(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(k(425))}function lo(){}var $a=null,Fa=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,Bf=typeof clearTimeout=="function"?clearTimeout:void 0,Hi=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hi<"u"?function(e){return Hi.resolve(null).then(e).catch(Hf)}:Ua;function Hf(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);nr(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Sn,ir="__reactProps$"+Sn,ot="__reactContainer$"+Sn,Ba="__reactEvents$"+Sn,qf="__reactListeners$"+Sn,Qf="__reactHandles$"+Sn;function Lt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qi(e);e!==null;){if(n=e[Ye])return n;e=qi(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Ye]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Io(e){return e[ir]||null}var Va=[],tn=-1;function Ct(e){return{current:e}}function q(e){0>tn||(e.current=Va[tn],Va[tn]=null,tn--)}function U(e,t){tn++,Va[tn]=e.current,e.current=t}var Et={},ce=Ct(Et),ye=Ct(!1),$t=Et;function mn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function xe(e){return e=e.childContextTypes,e!=null}function io(){q(ye),q(ce)}function Qi(e,t,n){if(ce.current!==Et)throw Error(k(168));U(ce,t),U(ye,n)}function Mu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,zc(e)||"Unknown",o));return Z({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,$t=ce.current,U(ce,e),U(ye,ye.current),!0}function Wi(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Mu(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,q(ye),q(ce),U(ce,e)):q(ye),U(ye,n)}var Je=null,Lo=!1,ia=!1;function $u(e){Je===null?Je=[e]:Je.push(e)}function Wf(e){Lo=!0,$u(e)}function bt(){if(!ia&&Je!==null){ia=!0;var e=0,t=$;try{var n=Je;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,Lo=!1}catch(o){throw Je!==null&&(Je=Je.slice(e+1)),uu(Sl,bt),o}finally{$=t,ia=!1}}return null}var nn=[],rn=0,uo=null,co=0,ze=[],Ne=0,Ft=null,et=1,tt="";function Pt(e,t){nn[rn++]=co,nn[rn++]=uo,uo=e,co=t}function Fu(e,t,n){ze[Ne++]=et,ze[Ne++]=tt,ze[Ne++]=Ft,Ft=e;var r=et;e=tt;var o=32-Ve(r)-1;r&=~(1<<o),n+=1;var a=32-Ve(t)+o;if(30<a){var l=o-o%5;a=(r&(1<<l)-1).toString(32),r>>=l,o-=l,et=1<<32-Ve(t)+o|n<<o|r,tt=a+e}else et=1<<a|n<<o|r,tt=e}function Il(e){e.return!==null&&(Pt(e,1),Fu(e,1,0))}function Ll(e){for(;e===uo;)uo=nn[--rn],nn[rn]=null,co=nn[--rn],nn[rn]=null;for(;e===Ft;)Ft=ze[--Ne],ze[Ne]=null,tt=ze[--Ne],ze[Ne]=null,et=ze[--Ne],ze[Ne]=null}var Te=null,Ee=null,W=!1,Be=null;function Ou(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ki(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Ee=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Ee=null,!0):!1;default:return!1}}function Ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qa(e){if(W){var t=Ee;if(t){var n=t;if(!Ki(e,t)){if(Ha(e))throw Error(k(418));t=yt(n.nextSibling);var r=Te;t&&Ki(e,t)?Ou(r,n):(e.flags=e.flags&-4097|2,W=!1,Te=e)}}else{if(Ha(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Te=e}}}function Yi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Lr(e){if(e!==Te)return!1;if(!W)return Yi(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=Ee)){if(Ha(e))throw Uu(),Error(k(418));for(;t;)Ou(e,t),t=yt(t.nextSibling)}if(Yi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Te?yt(e.stateNode.nextSibling):null;return!0}function Uu(){for(var e=Ee;e;)e=yt(e.nextSibling)}function gn(){Ee=Te=null,W=!1}function Rl(e){Be===null?Be=[e]:Be.push(e)}var Kf=it.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var i=o.refs;l===null?delete i[a]:i[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zi(e){var t=e._init;return t(e._payload)}function Bu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=wt(f,d),f.index=0,f.sibling=null,f}function a(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,d,p,x){return d===null||d.tag!==6?(d=ha(p,f.mode,x),d.return=f,d):(d=o(d,p),d.return=f,d)}function s(f,d,p,x){var S=p.type;return S===Zt?c(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&Zi(S)===d.type)?(x=o(d,p.props),x.ref=Nn(f,d,p),x.return=f,x):(x=Xr(p.type,p.key,p.props,null,f.mode,x),x.ref=Nn(f,d,p),x.return=f,x)}function u(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ma(p,f.mode,x),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function c(f,d,p,x,S){return d===null||d.tag!==7?(d=Mt(p,f.mode,x,S),d.return=f,d):(d=o(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ha(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sr:return p=Xr(d.type,d.key,d.props,null,f.mode,p),p.ref=Nn(f,null,d),p.return=f,p;case Yt:return d=ma(d,f.mode,p),d.return=f,d;case ut:var x=d._init;return m(f,x(d._payload),p)}if(Mn(d)||Tn(d))return d=Mt(d,f.mode,p,null),d.return=f,d;Rr(f,d)}return null}function h(f,d,p,x){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:i(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===S?s(f,d,p,x):null;case Yt:return p.key===S?u(f,d,p,x):null;case ut:return S=p._init,h(f,d,S(p._payload),x)}if(Mn(p)||Tn(p))return S!==null?null:c(f,d,p,x,null);Rr(f,p)}return null}function v(f,d,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,i(d,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sr:return f=f.get(x.key===null?p:x.key)||null,s(d,f,x,S);case Yt:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,S);case ut:var C=x._init;return v(f,d,p,C(x._payload),S)}if(Mn(x)||Tn(x))return f=f.get(p)||null,c(d,f,x,S,null);Rr(d,x)}return null}function y(f,d,p,x){for(var S=null,C=null,E=d,j=d=0,Q=null;E!==null&&j<p.length;j++){E.index>j?(Q=E,E=null):Q=E.sibling;var I=h(f,E,p[j],x);if(I===null){E===null&&(E=Q);break}e&&E&&I.alternate===null&&t(f,E),d=a(I,d,j),C===null?S=I:C.sibling=I,C=I,E=Q}if(j===p.length)return n(f,E),W&&Pt(f,j),S;if(E===null){for(;j<p.length;j++)E=m(f,p[j],x),E!==null&&(d=a(E,d,j),C===null?S=E:C.sibling=E,C=E);return W&&Pt(f,j),S}for(E=r(f,E);j<p.length;j++)Q=v(E,f,j,p[j],x),Q!==null&&(e&&Q.alternate!==null&&E.delete(Q.key===null?j:Q.key),d=a(Q,d,j),C===null?S=Q:C.sibling=Q,C=Q);return e&&E.forEach(function(_e){return t(f,_e)}),W&&Pt(f,j),S}function _(f,d,p,x){var S=Tn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var C=S=null,E=d,j=d=0,Q=null,I=p.next();E!==null&&!I.done;j++,I=p.next()){E.index>j?(Q=E,E=null):Q=E.sibling;var _e=h(f,E,I.value,x);if(_e===null){E===null&&(E=Q);break}e&&E&&_e.alternate===null&&t(f,E),d=a(_e,d,j),C===null?S=_e:C.sibling=_e,C=_e,E=Q}if(I.done)return n(f,E),W&&Pt(f,j),S;if(E===null){for(;!I.done;j++,I=p.next())I=m(f,I.value,x),I!==null&&(d=a(I,d,j),C===null?S=I:C.sibling=I,C=I);return W&&Pt(f,j),S}for(E=r(f,E);!I.done;j++,I=p.next())I=v(E,f,j,I.value,x),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?j:I.key),d=a(I,d,j),C===null?S=I:C.sibling=I,C=I);return e&&E.forEach(function(jt){return t(f,jt)}),W&&Pt(f,j),S}function P(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var S=p.key,C=d;C!==null;){if(C.key===S){if(S=p.type,S===Zt){if(C.tag===7){n(f,C.sibling),d=o(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&Zi(S)===C.type){n(f,C.sibling),d=o(C,p.props),d.ref=Nn(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Zt?(d=Mt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Xr(p.type,p.key,p.props,null,f.mode,x),x.ref=Nn(f,d,p),x.return=f,f=x)}return l(f);case Yt:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ma(p,f.mode,x),d.return=f,f=d}return l(f);case ut:return C=p._init,P(f,d,C(p._payload),x)}if(Mn(p))return y(f,d,p,x);if(Tn(p))return _(f,d,p,x);Rr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=ha(p,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return P}var vn=Bu(!0),Vu=Bu(!1),fo=Ct(null),po=null,on=null,Al=null;function Dl(){Al=on=po=null}function Ml(e){var t=fo.current;q(fo),e._currentValue=t}function Qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){po=e,Al=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(po===null)throw Error(k(308));on=e,po.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Rt=null;function $l(e){Rt===null?Rt=[e]:Rt.push(e)}function Hu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,$l(t)):(n.next=o.next,o.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,at(e,n)}return o=r.interleaved,o===null?(t.next=t,$l(r)):(t.next=o.next,o.next=t),r.interleaved=t,at(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,El(e,n)}}function Xi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var o=e.updateQueue;dt=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?a=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==l&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(a!==null){var m=o.baseState;l=0,c=u=s=null,i=a;do{var h=i.lane,v=i.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,_=i;switch(h=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){m=y.call(v,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(v,m,h):y,h==null)break e;m=Z({},m,h);break e;case 2:dt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[i]:h.push(i))}else v={eventTime:v,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=v,s=m):c=c.next=v,l|=h;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;h=i,i=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Ut|=l,e.lanes=l,e.memoizedState=m}}function Gi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var yr={},Xe=Ct(yr),sr=Ct(yr),ur=Ct(yr);function At(e){if(e===yr)throw Error(k(174));return e}function Ol(e,t){switch(U(ur,t),U(sr,e),U(Xe,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}q(Xe),U(Xe,t)}function yn(){q(Xe),q(sr),q(ur)}function Qu(e){At(ur.current);var t=At(Xe.current),n=Ca(t,e.type);t!==n&&(U(sr,e),U(Xe,n))}function Ul(e){sr.current===e&&(q(Xe),q(sr))}var K=Ct(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function Bl(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var Qr=it.ReactCurrentDispatcher,ua=it.ReactCurrentBatchConfig,Ot=0,Y=null,te=null,re=null,go=!1,qn=!1,dr=0,Yf=0;function se(){throw Error(k(321))}function Vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Hl(e,t,n,r,o,a){if(Ot=a,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qr.current=e===null||e.memoizedState===null?Jf:ep,e=n(r,o),qn){a=0;do{if(qn=!1,dr=0,25<=a)throw Error(k(301));a+=1,re=te=null,t.updateQueue=null,Qr.current=tp,e=n(r,o)}while(qn)}if(Qr.current=vo,t=te!==null&&te.next!==null,Ot=0,re=te=Y=null,go=!1,t)throw Error(k(300));return e}function ql(){var e=dr!==0;return dr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function De(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function cr(e,t){return typeof t=="function"?t(e):t}function da(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var i=l=null,s=null,u=a;do{var c=u.lane;if((Ot&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=m,l=r):s=s.next=m,Y.lanes|=c,Ut|=c}u=u.next}while(u!==null&&u!==a);s===null?l=r:s.next=i,qe(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Y.lanes|=a,Ut|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ca(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);qe(a,t.memoizedState)||(ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wu(){}function Ku(e,t){var n=Y,r=De(),o=t(),a=!qe(r.memoizedState,o);if(a&&(r.memoizedState=o,ve=!0),r=r.queue,Ql(Xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,fr(9,Zu.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(k(349));Ot&30||Yu(n,t,o)}return o}function Yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zu(e,t,n,r){t.value=n,t.getSnapshot=r,Gu(t)&&Ju(e)}function Xu(e,t,n){return n(function(){Gu(t)&&Ju(e)})}function Gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Ju(e){var t=at(e,1);t!==null&&He(t,e,1,-1)}function Ji(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,Y,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ed(){return De().memoizedState}function Wr(e,t,n,r){var o=Ke();Y.flags|=e,o.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var o=De();r=r===void 0?null:r;var a=void 0;if(te!==null){var l=te.memoizedState;if(a=l.destroy,r!==null&&Vl(r,l.deps)){o.memoizedState=fr(t,n,a,r);return}}Y.flags|=e,o.memoizedState=fr(1|t,n,a,r)}function es(e,t){return Wr(8390656,8,e,t)}function Ql(e,t){return Ro(2048,8,e,t)}function td(e,t){return Ro(4,2,e,t)}function nd(e,t){return Ro(4,4,e,t)}function rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,rd.bind(null,t,e),n)}function Wl(){}function ad(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ld(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return Ot&21?(qe(n,t)||(n=fu(),Y.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Zf(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{$=n,ua.transition=r}}function sd(){return De().memoizedState}function Xf(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ud(e))dd(t,n);else if(n=Hu(e,t,n,r),n!==null){var o=pe();He(n,e,r,o),cd(n,t,r)}}function Gf(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ud(e))dd(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,i=a(l,n);if(o.hasEagerState=!0,o.eagerState=i,qe(i,l)){var s=t.interleaved;s===null?(o.next=o,$l(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Hu(e,t,o,r),n!==null&&(o=pe(),He(n,e,r,o),cd(n,t,r))}}function ud(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function dd(e,t){qn=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,El(e,n)}}var vo={readContext:Ae,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Jf={readContext:Ae,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:es,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,rd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Ji,useDebugValue:Wl,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Ji(!1),t=e[0];return e=Zf.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Ke();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),oe===null)throw Error(k(349));Ot&30||Yu(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,es(Xu.bind(null,r,a,e),[e]),r.flags|=2048,fr(9,Zu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ke(),t=oe.identifierPrefix;if(W){var n=tt,r=et;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ep={readContext:Ae,useCallback:ad,useContext:Ae,useEffect:Ql,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ld,useReducer:da,useRef:ed,useState:function(){return da(cr)},useDebugValue:Wl,useDeferredValue:function(e){var t=De();return id(t,te.memoizedState,e)},useTransition:function(){var e=da(cr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Ku,useId:sd,unstable_isNewReconciler:!1},tp={readContext:Ae,useCallback:ad,useContext:Ae,useEffect:Ql,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ld,useReducer:ca,useRef:ed,useState:function(){return ca(cr)},useDebugValue:Wl,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:id(t,te.memoizedState,e)},useTransition:function(){var e=ca(cr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Ku,useId:sd,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),o=_t(e),a=nt(r,o);a.payload=t,n!=null&&(a.callback=n),t=xt(e,a,o),t!==null&&(He(t,e,o,r),qr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),o=_t(e),a=nt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=xt(e,a,o),t!==null&&(He(t,e,o,r),qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=_t(e),o=nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=xt(e,o,r),t!==null&&(He(t,e,r,n),qr(t,e,r))}};function ts(e,t,n,r,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(o,a):!0}function fd(e,t,n){var r=!1,o=Et,a=t.contextType;return typeof a=="object"&&a!==null?a=Ae(a):(o=xe(t)?$t:ce.current,r=t.contextTypes,a=(r=r!=null)?mn(e,o):Et),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ns(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Ka(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ae(a):(a=xe(t)?$t:ce.current,o.context=mn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Wa(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ao.enqueueReplaceState(o,o.state,null),ho(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=jc(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function pd(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,al=r),Ya(e,t)},n}function hd(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ya(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ya(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function rs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new np;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function os(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function as(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var rp=it.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?Vu(t,null,n,r):vn(t,e.child,n,r)}function ls(e,t,n,r,o){n=n.render;var a=t.ref;return fn(t,o),r=Hl(e,t,n,r,a,o),n=ql(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(W&&n&&Il(t),t.flags|=1,fe(e,t,r,o),t.child)}function is(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!ti(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,md(e,t,a,r,o)):(e=Xr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(l,r)&&e.ref===t.ref)return lt(e,t,o)}return t.flags|=1,e=wt(a,r),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(or(a,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,lt(e,t,o)}return Za(e,t,n,r,o)}function gd(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ln,we),we|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ln,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,U(ln,we),we|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,U(ln,we),we|=r;return fe(e,t,o,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,n,r,o){var a=xe(n)?$t:ce.current;return a=mn(t,a),fn(t,o),n=Hl(e,t,n,r,a,o),r=ql(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(W&&r&&Il(t),t.flags|=1,fe(e,t,n,o),t.child)}function ss(e,t,n,r,o){if(xe(n)){var a=!0;so(t)}else a=!1;if(fn(t,o),t.stateNode===null)Kr(e,t),fd(t,n,r),Ka(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=xe(n)?$t:ce.current,u=mn(t,u));var c=n.getDerivedStateFromProps,m=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||s!==u)&&ns(t,l,r,u),dt=!1;var h=t.memoizedState;l.state=h,ho(t,r,l,o),s=t.memoizedState,i!==r||h!==s||ye.current||dt?(typeof c=="function"&&(Wa(t,n,c,r),s=t.memoizedState),(i=dt||ts(t,n,i,r,h,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,qu(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Oe(t.type,i),l.props=u,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=xe(n)?$t:ce.current,s=mn(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==m||h!==s)&&ns(t,l,r,s),dt=!1,h=t.memoizedState,l.state=h,ho(t,r,l,o);var y=t.memoizedState;i!==m||h!==y||ye.current||dt?(typeof v=="function"&&(Wa(t,n,v,r),y=t.memoizedState),(u=dt||ts(t,n,u,r,h,y,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Xa(e,t,n,r,a,o)}function Xa(e,t,n,r,o,a){vd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Wi(t,n,!1),lt(e,t,a);r=t.stateNode,rp.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=vn(t,e.child,null,a),t.child=vn(t,null,i,a)):fe(e,t,i,a),t.memoizedState=r.state,o&&Wi(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?Qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qi(e,t.context,!1),Ol(e,t.containerInfo)}function us(e,t,n,r,o){return gn(),Rl(o),t.flags|=256,fe(e,t,n,r),t.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,o=K.current,a=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(K,o&1),e===null)return qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=$o(l,r,0,null),e=Mt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ja(n),t.memoizedState=Ga,e):Kl(t,l));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return op(e,t,l,r,i,o,n);if(a){a=r.fallback,l=t.mode,o=e.child,i=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?a=wt(i,a):(a=Mt(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Ja(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Ga,r}return a=e.child,e=a.sibling,r=wt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kl(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Rl(r),vn(t,e.child,null,n),e=Kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,n,r,o,a,l){if(n)return t.flags&256?(t.flags&=-257,r=fa(Error(k(422))),Ar(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=$o({mode:"visible",children:r.children},o,0,null),a=Mt(a,o,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&vn(t,e.child,null,l),t.child.memoizedState=Ja(l),t.memoizedState=Ga,a);if(!(t.mode&1))return Ar(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(k(419)),r=fa(a,r,void 0),Ar(e,t,l,r)}if(i=(l&e.childLanes)!==0,ve||i){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,at(e,o),He(r,e,o,-1))}return ei(),r=fa(Error(k(421))),Ar(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Ee=yt(o.nextSibling),Te=t,W=!0,Be=null,e!==null&&(ze[Ne++]=et,ze[Ne++]=tt,ze[Ne++]=Ft,et=e.id,tt=e.overflow,Ft=t),t=Kl(t,r.children),t.flags|=4096,t)}function ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qa(e.return,t,n)}function pa(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(fe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ds(e,n,t);else if(e.tag===19)ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pa(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pa(t,!0,n,null,a);break;case"together":pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:yd(t),gn();break;case 5:Qu(t);break;case 1:xe(t.type)&&so(t);break;case 4:Ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(fo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?xd(e,t,n):(U(K,K.current&1),e=lt(e,t,n),e!==null?e.sibling:null);U(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n)}return lt(e,t,n)}var _d,el,wd,Sd;_d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};el=function(){};wd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(Xe.current);var a=null;switch(n){case"input":o=wa(e,o),r=wa(e,r),a=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),a=[];break;case"textarea":o=Ta(e,o),r=Ta(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}ba(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var i=o[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(i=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),a||i===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Sd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lp(e,t,n){var r=t.pendingProps;switch(Ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return xe(t.type)&&io(),ue(t),null;case 3:return r=t.stateNode,yn(),q(ye),q(ce),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(sl(Be),Be=null))),el(e,t),ue(t),null;case 5:Ul(t);var o=At(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)wd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ue(t),null}if(e=At(Xe.current),Lr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ye]=t,r[ir]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<Fn.length;o++)H(Fn[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":xi(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":_i(r,a),H("invalid",r)}ba(n,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Ir(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Ir(r.textContent,i,e),o=["children",""+i]):Xn.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Er(r),ki(r,a,!0);break;case"textarea":Er(r),wi(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ye]=t,e[ir]=r,_d(e,t,!1,!1),t.stateNode=e;e:{switch(l=ja(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fn.length;o++)H(Fn[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":xi(e,r),o=wa(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),H("invalid",e);break;case"textarea":_i(e,r),o=Ta(e,r),H("invalid",e);break;default:o=r}ba(n,o),i=o;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="style"?eu(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gs(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gn(e,s):typeof s=="number"&&Gn(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xn.hasOwnProperty(a)?s!=null&&a==="onScroll"&&H("scroll",e):s!=null&&yl(e,a,s,l))}switch(n){case"input":Er(e),ki(e,r,!1);break;case"textarea":Er(e),wi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?sn(e,!!r.multiple,a,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=At(ur.current),At(Xe.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(a=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ue(t),null;case 13:if(q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ee!==null&&t.mode&1&&!(t.flags&128))Uu(),gn(),t.flags|=98560,a=!1;else if(a=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[Ye]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),a=!1}else Be!==null&&(sl(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):ei())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return yn(),el(e,t),e===null&&ar(t.stateNode.containerInfo),ue(t),null;case 10:return Ml(t.type._context),ue(t),null;case 17:return xe(t.type)&&io(),ue(t),null;case 19:if(q(K),a=t.memoizedState,a===null)return ue(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Pn(a,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=mo(e),l!==null){for(t.flags|=128,Pn(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(K,K.current&1|2),t.child}e=e.sibling}a.tail!==null&&J()>kn&&(t.flags|=128,r=!0,Pn(a,!1),t.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!W)return ue(t),null}else 2*J()-a.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=J(),t.sibling=null,n=K.current,U(K,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Jl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function ip(e,t){switch(Ll(t),t.tag){case 1:return xe(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),q(ye),q(ce),Bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(K),null;case 4:return yn(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return Jl(),null;case 24:return null;default:return null}}var Dr=!1,de=!1,sp=typeof WeakSet=="function"?WeakSet:Set,T=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){G(e,t,r)}}var cs=!1;function up(e,t){if($a=ro,e=ju(),Pl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,i=-1,s=-1,u=0,c=0,m=e,h=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(i=l+o),m!==a||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++u===o&&(i=l),h===a&&++c===r&&(s=l),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:e,selectionRange:n},ro=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,P=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:Oe(t.type,_),P);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=cs,cs=!1,y}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&tl(t,n,a)}o=o.next}while(o!==r)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[ir],delete t[Ba],delete t[qf],delete t[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}var ae=null,Ue=!1;function st(e,t,n){for(n=n.child;n!==null;)Cd(e,t,n),n=n.sibling}function Cd(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:de||an(n,t);case 6:var r=ae,o=Ue;ae=null,st(e,t,n),ae=r,Ue=o,ae!==null&&(Ue?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ue?(e=ae,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),nr(e)):la(ae,n.stateNode));break;case 4:r=ae,o=Ue,ae=n.stateNode.containerInfo,Ue=!0,st(e,t,n),ae=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&tl(n,t,l),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!de&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){G(n,t,i)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,st(e,t,n),de=r):st(e,t,n);break;default:st(e,t,n)}}function ps(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var o=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:ae=i.stateNode,Ue=!1;break e;case 3:ae=i.stateNode.containerInfo,Ue=!0;break e;case 4:ae=i.stateNode.containerInfo,Ue=!0;break e}i=i.return}if(ae===null)throw Error(k(160));Cd(a,l,o),ae=null,Ue=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){G(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bd(t,e),t=t.sibling}function bd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),We(e),r&4){try{Qn(3,e,e.return),Do(3,e)}catch(_){G(e,e.return,_)}try{Qn(5,e,e.return)}catch(_){G(e,e.return,_)}}break;case 1:Fe(t,e),We(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Fe(t,e),We(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Gn(o,"")}catch(_){G(e,e.return,_)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&Ys(o,a),ja(i,l);var u=ja(i,a);for(l=0;l<s.length;l+=2){var c=s[l],m=s[l+1];c==="style"?eu(o,m):c==="dangerouslySetInnerHTML"?Gs(o,m):c==="children"?Gn(o,m):yl(o,c,m,u)}switch(i){case"input":Sa(o,a);break;case"textarea":Zs(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?sn(o,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?sn(o,!!a.multiple,a.defaultValue,!0):sn(o,!!a.multiple,a.multiple?[]:"",!1))}o[ir]=a}catch(_){G(e,e.return,_)}}break;case 6:if(Fe(t,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(_){G(e,e.return,_)}}break;case 3:if(Fe(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(_){G(e,e.return,_)}break;case 4:Fe(t,e),We(e);break;case 13:Fe(t,e),We(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Xl=J())),r&4&&ps(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||c,Fe(t,e),de=u):Fe(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(m=T=c;T!==null;){switch(h=T,v=h.child,h.tag){case 0:case 11:case 14:case 15:Qn(4,h,h.return);break;case 1:an(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:an(h,h.return);break;case 22:if(h.memoizedState!==null){ms(m);continue}}v!==null?(v.return=h,T=v):ms(m)}c=c.sibling}e:for(c=null,m=e;;){if(m.tag===5){if(c===null){c=m;try{o=m.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Js("display",l))}catch(_){G(e,e.return,_)}}}else if(m.tag===6){if(c===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(_){G(e,e.return,_)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;c===m&&(c=null),m=m.return}c===m&&(c=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Fe(t,e),We(e),r&4&&ps(e);break;case 21:break;default:Fe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Gn(o,""),r.flags&=-33);var a=fs(e);ol(e,a,o);break;case 3:case 4:var l=r.stateNode.containerInfo,i=fs(e);rl(e,i,l);break;default:throw Error(k(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dp(e,t,n){T=e,jd(e)}function jd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,a=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Dr;if(!l){var i=o.alternate,s=i!==null&&i.memoizedState!==null||de;i=Dr;var u=de;if(Dr=l,(de=s)&&!u)for(T=o;T!==null;)l=T,s=l.child,l.tag===22&&l.memoizedState!==null?gs(o):s!==null?(s.return=l,T=s):gs(o);for(;a!==null;)T=a,jd(a),a=a.sibling;T=o,Dr=i,de=u}hs(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,T=a):hs(e)}}function hs(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Do(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Gi(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gi(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var m=c.dehydrated;m!==null&&nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&nl(t)}catch(h){G(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ms(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function gs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Do(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){G(t,o,s)}}var a=t.return;try{nl(t)}catch(s){G(t,a,s)}break;case 5:var l=t.return;try{nl(t)}catch(s){G(t,l,s)}}}catch(s){G(t,t.return,s)}if(t===e){T=null;break}var i=t.sibling;if(i!==null){i.return=t.return,T=i;break}T=t.return}}var cp=Math.ceil,yo=it.ReactCurrentDispatcher,Yl=it.ReactCurrentOwner,Re=it.ReactCurrentBatchConfig,D=0,oe=null,ee=null,le=0,we=0,ln=Ct(0),ne=0,pr=null,Ut=0,Mo=0,Zl=0,Wn=null,ge=null,Xl=0,kn=1/0,Ge=null,xo=!1,al=null,kt=null,Mr=!1,ht=null,ko=0,Kn=0,ll=null,Yr=-1,Zr=0;function pe(){return D&6?J():Yr!==-1?Yr:Yr=J()}function _t(e){return e.mode&1?D&2&&le!==0?le&-le:Kf.transition!==null?(Zr===0&&(Zr=fu()),Zr):(e=$,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function He(e,t,n,r){if(50<Kn)throw Kn=0,ll=null,Error(k(185));mr(e,n,r),(!(D&2)||e!==oe)&&(e===oe&&(!(D&2)&&(Mo|=n),ne===4&&ft(e,le)),ke(e,r),n===1&&D===0&&!(t.mode&1)&&(kn=J()+500,Lo&&bt()))}function ke(e,t){var n=e.callbackNode;Wc(e,t);var r=no(e,e===oe?le:0);if(r===0)n!==null&&Ti(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ti(n),t===1)e.tag===0?Wf(vs.bind(null,e)):$u(vs.bind(null,e)),Vf(function(){!(D&6)&&bt()}),n=null;else{switch(pu(r)){case 1:n=Sl;break;case 4:n=du;break;case 16:n=to;break;case 536870912:n=cu;break;default:n=to}n=Dd(n,zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zd(e,t){if(Yr=-1,Zr=0,D&6)throw Error(k(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=no(e,e===oe?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_o(e,r);else{t=r;var o=D;D|=2;var a=Pd();(oe!==e||le!==t)&&(Ge=null,kn=J()+500,Dt(e,t));do try{hp();break}catch(i){Nd(e,i)}while(!0);Dl(),yo.current=a,D=o,ee!==null?t=0:(oe=null,le=0,t=ne)}if(t!==0){if(t===2&&(o=La(e),o!==0&&(r=o,t=il(e,o))),t===1)throw n=pr,Dt(e,0),ft(e,r),ke(e,J()),n;if(t===6)ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!fp(o)&&(t=_o(e,r),t===2&&(a=La(e),a!==0&&(r=a,t=il(e,a))),t===1))throw n=pr,Dt(e,0),ft(e,r),ke(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:It(e,ge,Ge);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=Xl+500-J(),10<t)){if(no(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ua(It.bind(null,e,ge,Ge),t);break}It(e,ge,Ge);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ve(r);a=1<<l,l=t[l],l>o&&(o=l),r&=~a}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cp(r/1960))-r,10<r){e.timeoutHandle=Ua(It.bind(null,e,ge,Ge),r);break}It(e,ge,Ge);break;case 5:It(e,ge,Ge);break;default:throw Error(k(329))}}}return ke(e,J()),e.callbackNode===n?zd.bind(null,e):null}function il(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=_o(e,t),e!==2&&(t=ge,ge=n,t!==null&&sl(t)),e}function sl(e){ge===null?ge=e:ge.push.apply(ge,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!qe(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Zl,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function vs(e){if(D&6)throw Error(k(327));pn();var t=no(e,0);if(!(t&1))return ke(e,J()),null;var n=_o(e,t);if(e.tag!==0&&n===2){var r=La(e);r!==0&&(t=r,n=il(e,r))}if(n===1)throw n=pr,Dt(e,0),ft(e,t),ke(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,ge,Ge),ke(e,J()),null}function Gl(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(kn=J()+500,Lo&&bt())}}function Bt(e){ht!==null&&ht.tag===0&&!(D&6)&&pn();var t=D;D|=1;var n=Re.transition,r=$;try{if(Re.transition=null,$=1,e)return e()}finally{$=r,Re.transition=n,D=t,!(D&6)&&bt()}}function Jl(){we=ln.current,q(ln)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:yn(),q(ye),q(ce),Bl();break;case 5:Ul(r);break;case 4:yn();break;case 13:q(K);break;case 19:q(K);break;case 10:Ml(r.type._context);break;case 22:case 23:Jl()}n=n.return}if(oe=e,ee=e=wt(e.current,null),le=we=t,ne=0,pr=null,Zl=Mo=Ut=0,ge=Wn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=o,r.next=l}n.pending=r}Rt=null}return e}function Nd(e,t){do{var n=ee;try{if(Dl(),Qr.current=vo,go){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}go=!1}if(Ot=0,re=te=Y=null,qn=!1,dr=0,Yl.current=null,n===null||n.return===null){ne=1,pr=t,ee=null;break}e:{var a=e,l=n.return,i=n,s=t;if(t=le,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=i,m=c.tag;if(!(c.mode&1)&&(m===0||m===11||m===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=os(l);if(v!==null){v.flags&=-257,as(v,l,i,a,t),v.mode&1&&rs(a,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(s),t.updateQueue=_}else y.add(s);break e}else{if(!(t&1)){rs(a,u,t),ei();break e}s=Error(k(426))}}else if(W&&i.mode&1){var P=os(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),as(P,l,i,a,t),Rl(xn(s,i));break e}}a=s=xn(s,i),ne!==4&&(ne=2),Wn===null?Wn=[a]:Wn.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=pd(a,s,t);Xi(a,f);break e;case 1:i=s;var d=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(kt===null||!kt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=hd(a,i,t);Xi(a,x);break e}}a=a.return}while(a!==null)}Ld(n)}catch(S){t=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Pd(){var e=yo.current;return yo.current=vo,e===null?vo:e}function ei(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Ut&268435455)&&!(Mo&268435455)||ft(oe,le)}function _o(e,t){var n=D;D|=2;var r=Pd();(oe!==e||le!==t)&&(Ge=null,Dt(e,t));do try{pp();break}catch(o){Nd(e,o)}while(!0);if(Dl(),D=n,yo.current=r,ee!==null)throw Error(k(261));return oe=null,le=0,ne}function pp(){for(;ee!==null;)Id(ee)}function hp(){for(;ee!==null&&!$c();)Id(ee)}function Id(e){var t=Ad(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Ld(e):ee=t,Yl.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ip(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=lp(n,t,we),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function It(e,t,n){var r=$,o=Re.transition;try{Re.transition=null,$=1,mp(e,t,n,r)}finally{Re.transition=o,$=r}return null}function mp(e,t,n,r){do pn();while(ht!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Kc(e,a),e===oe&&(ee=oe=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Dd(to,function(){return pn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Re.transition,Re.transition=null;var l=$;$=1;var i=D;D|=4,Yl.current=null,up(e,n),bd(n,e),Af(Fa),ro=!!$a,Fa=$a=null,e.current=n,dp(n),Fc(),D=i,$=l,Re.transition=a}else e.current=n;if(Mr&&(Mr=!1,ht=e,ko=o),a=e.pendingLanes,a===0&&(kt=null),Bc(n.stateNode),ke(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xo)throw xo=!1,e=al,al=null,e;return ko&1&&e.tag!==0&&pn(),a=e.pendingLanes,a&1?e===ll?Kn++:(Kn=0,ll=e):Kn=0,bt(),null}function pn(){if(ht!==null){var e=pu(ko),t=Re.transition,n=$;try{if(Re.transition=null,$=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,ko=0,D&6)throw Error(k(331));var o=D;for(D|=4,T=e.current;T!==null;){var a=T,l=a.child;if(T.flags&16){var i=a.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Qn(8,c,a)}var m=c.child;if(m!==null)m.return=c,T=m;else for(;T!==null;){c=T;var h=c.sibling,v=c.return;if(Ed(c),c===u){T=null;break}if(h!==null){h.return=v,T=h;break}T=v}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var P=_.sibling;_.sibling=null,_=P}while(_!==null)}}T=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,T=l;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,T=f;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){l=T;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,T=p;else e:for(l=d;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Do(9,i)}}catch(S){G(i,i.return,S)}if(i===l){T=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,T=x;break e}T=i.return}}if(D=o,bt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(jo,e)}catch{}r=!0}return r}finally{$=n,Re.transition=t}}return!1}function ys(e,t,n){t=xn(n,t),t=pd(e,t,1),e=xt(e,t,1),t=pe(),e!==null&&(mr(e,1,t),ke(e,t))}function G(e,t,n){if(e.tag===3)ys(e,e,n);else for(;t!==null;){if(t.tag===3){ys(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=xn(n,e),e=hd(t,e,1),t=xt(t,e,1),e=pe(),t!==null&&(mr(t,1,e),ke(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(le&n)===n&&(ne===4||ne===3&&(le&130023424)===le&&500>J()-Xl?Dt(e,0):Zl|=n),ke(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=pe();e=at(e,t),e!==null&&(mr(e,t,n),ke(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Rd(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,ap(e,t,n);ve=!!(e.flags&131072)}else ve=!1,W&&t.flags&1048576&&Fu(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var o=mn(t,ce.current);fn(t,n),o=Hl(null,t,r,e,o,n);var a=ql();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(a=!0,so(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fl(t),o.updater=Ao,t.stateNode=o,o._reactInternals=t,Ka(t,r,e,n),t=Xa(null,t,r,!0,a,n)):(t.tag=0,W&&a&&Il(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=kp(r),e=Oe(r,e),o){case 0:t=Za(null,t,r,e,n);break e;case 1:t=ss(null,t,r,e,n);break e;case 11:t=ls(null,t,r,e,n);break e;case 14:t=is(null,t,r,Oe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Za(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),ss(e,t,r,o,n);case 3:e:{if(yd(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,o=a.element,qu(e,t),ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=xn(Error(k(423)),t),t=us(e,t,r,n,o);break e}else if(r!==o){o=xn(Error(k(424)),t),t=us(e,t,r,n,o);break e}else for(Ee=yt(t.stateNode.containerInfo.firstChild),Te=t,W=!0,Be=null,n=Vu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===o){t=lt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Qu(t),e===null&&qa(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,Oa(r,o)?l=null:a!==null&&Oa(r,a)&&(t.flags|=32),vd(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&qa(t),null;case 13:return xd(e,t,n);case 4:return Ol(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),ls(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,U(fo,r._currentValue),r._currentValue=l,a!==null)if(qe(a.value,l)){if(a.children===o.children&&!ye.current){t=lt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=nt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Qa(a.return,n,t),i.lanes|=n;break}s=s.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(k(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Qa(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fn(t,n),o=Ae(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),is(e,t,r,o,n);case 15:return md(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Kr(e,t),t.tag=1,xe(r)?(e=!0,so(t)):e=!1,fn(t,n),fd(t,r,o),Ka(t,r,o,n),Xa(null,t,r,!0,e,n);case 19:return kd(e,t,n);case 22:return gd(e,t,n)}throw Error(k(156,t.tag))};function Dd(e,t){return uu(e,t)}function xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new xp(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kl)return 11;if(e===_l)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,o,a){var l=2;if(r=e,typeof e=="function")ti(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zt:return Mt(n.children,o,a,t);case xl:l=8,o|=8;break;case ya:return e=Pe(12,n,t,o|2),e.elementType=ya,e.lanes=a,e;case xa:return e=Pe(13,n,t,o),e.elementType=xa,e.lanes=a,e;case ka:return e=Pe(19,n,t,o),e.elementType=ka,e.lanes=a,e;case Qs:return $o(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hs:l=10;break e;case qs:l=9;break e;case kl:l=11;break e;case _l:l=14;break e;case ut:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Pe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Mt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Qs,e.lanes=n,e.stateNode={isHidden:!1},e}function ha(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ma(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ni(e,t,n,r,o,a,l,i,s){return e=new _p(e,t,n,i,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(a),e}function wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Md(e){if(!e)return Et;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Mu(e,n,t)}return t}function $d(e,t,n,r,o,a,l,i,s){return e=ni(n,r,!0,e,o,a,l,i,s),e.context=Md(null),n=e.current,r=pe(),o=_t(n),a=nt(r,o),a.callback=t??null,xt(n,a,o),e.current.lanes=o,mr(e,o,r),ke(e,r),e}function Fo(e,t,n,r){var o=t.current,a=pe(),l=_t(o);return n=Md(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(o,t,l),e!==null&&(He(e,o,l,a),qr(e,o,l)),l}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ri(e,t){xs(e,t),(e=e.alternate)&&xs(e,t)}function Sp(){return null}var Fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function oi(e){this._internalRoot=e}Oo.prototype.render=oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Fo(e,t,null,null)};Oo.prototype.unmount=oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Fo(null,e,null,null)}),t[ot]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&yu(e)}};function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function Ep(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=wo(l);a.call(u)}}var l=$d(t,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=l,e[ot]=l.current,ar(e.nodeType===8?e.parentNode:e),Bt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var u=wo(s);i.call(u)}}var s=ni(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=s,e[ot]=s.current,ar(e.nodeType===8?e.parentNode:e),Bt(function(){Fo(t,s,n,r)}),s}function Bo(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var i=o;o=function(){var s=wo(l);i.call(s)}}Fo(t,l,e,o)}else l=Ep(n,t,e,o,r);return wo(l)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(El(t,n|1),ke(t,J()),!(D&6)&&(kn=J()+500,bt()))}break;case 13:Bt(function(){var r=at(e,1);if(r!==null){var o=pe();He(r,e,1,o)}}),ri(e,1)}};Tl=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=pe();He(t,e,134217728,n)}ri(e,134217728)}};mu=function(e){if(e.tag===13){var t=_t(e),n=at(e,t);if(n!==null){var r=pe();He(n,e,t,r)}ri(e,t)}};gu=function(){return $};vu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Na=function(e,t,n){switch(t){case"input":if(Sa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Io(r);if(!o)throw Error(k(90));Ks(r),Sa(r,o)}}}break;case"textarea":Zs(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};ru=Gl;ou=Bt;var Tp={usingClientEntryPoint:!1,Events:[vr,en,Io,tu,nu,Gl]},In={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cp={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{jo=$r.inject(Cp),Ze=$r}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ai(t))throw Error(k(200));return wp(e,t,null,n)};be.createRoot=function(e,t){if(!ai(e))throw Error(k(299));var n=!1,r="",o=Fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ni(e,1,!1,null,null,n,!1,r,o),e[ot]=t.current,ar(e.nodeType===8?e.parentNode:e),new oi(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Bt(e)};be.hydrate=function(e,t,n){if(!Uo(t))throw Error(k(200));return Bo(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!ai(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",l=Fd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=$d(t,null,e,1,n??null,o,!1,a,l),e[ot]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Oo(t)};be.render=function(e,t,n){if(!Uo(t))throw Error(k(200));return Bo(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(k(40));return e._reactRootContainer?(Bt(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};be.unstable_batchedUpdates=Gl;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Bo(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od)}catch(e){console.error(e)}}Od(),Os.exports=be;var bp=Os.exports,Ud,_s=bp;Ud=_s.createRoot,_s.hydrateRoot;const jp="modulepreload",zp=function(e,t){return new URL(e,t).href},ws={},Np=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=zp(u,r),u in ws)return;ws[u]=!0;const c=u.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(!!r)for(let y=l.length-1;y>=0;y--){const _=l[y];if(_.href===u&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const v=document.createElement("link");if(v.rel=c?"stylesheet":jp,c||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),c)return new Promise((y,_)=>{v.addEventListener("load",y),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return o.then(l=>{for(const i of l||[])i.status==="rejected"&&a(i.reason);return t().catch(a)})};function li(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Qt=li();function Bd(e){Qt=e}const Vd=/[&<>"']/,Pp=new RegExp(Vd.source,"g"),Hd=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ip=new RegExp(Hd.source,"g"),Lp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ss=e=>Lp[e];function Se(e,t){if(t){if(Vd.test(e))return e.replace(Pp,Ss)}else if(Hd.test(e))return e.replace(Ip,Ss);return e}const Rp=/(^|[^\[])\^/g;function F(e,t){let n=typeof e=="string"?e:e.source;t=t||"";const r={replace:(o,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(Rp,"$1"),n=n.replace(o,l),r},getRegex:()=>new RegExp(n,t)};return r}function Es(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Yn={exec:()=>null};function Ts(e,t){const n=e.replace(/\|/g,(a,l,i)=>{let s=!1,u=l;for(;--u>=0&&i[u]==="\\";)s=!s;return s?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function Ln(e,t,n){const r=e.length;if(r===0)return"";let o=0;for(;o<r&&e.charAt(r-o-1)===t;)o++;return e.slice(0,r-o)}function Ap(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return-1}function Cs(e,t,n,r){const o=t.href,a=t.title?Se(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const i={type:"link",raw:n,href:o,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,i}return{type:"image",raw:n,href:o,title:a,text:Se(l)}}function Dp(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const r=n[1];return t.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[l]=a;return l.length>=r.length?o.slice(r.length):o}).join(`
`)}class So{constructor(t){O(this,"options");O(this,"rules");O(this,"lexer");this.options=t||Qt}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ln(r,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const r=n[0],o=Dp(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=Ln(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:Ln(n[0],`
`)}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){let r=Ln(n[0],`
`).split(`
`),o="",a="";const l=[];for(;r.length>0;){let i=!1;const s=[];let u;for(u=0;u<r.length;u++)if(/^ {0,3}>/.test(r[u]))s.push(r[u]),i=!0;else if(!i)s.push(r[u]);else break;r=r.slice(u);const c=s.join(`
`),m=c.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${c}`:c,a=a?`${a}
${m}`:m;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,l,!0),this.lexer.state.top=h,r.length===0)break;const v=l[l.length-1];if((v==null?void 0:v.type)==="code")break;if((v==null?void 0:v.type)==="blockquote"){const y=v,_=y.raw+`
`+r.join(`
`),P=this.blockquote(_);l[l.length-1]=P,o=o.substring(0,o.length-y.raw.length)+P.raw,a=a.substring(0,a.length-y.text.length)+P.text;break}else if((v==null?void 0:v.type)==="list"){const y=v,_=y.raw+`
`+r.join(`
`),P=this.list(_);l[l.length-1]=P,o=o.substring(0,o.length-v.raw.length)+P.raw,a=a.substring(0,a.length-y.raw.length)+P.raw,r=_.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:l,text:a}}}list(t){let n=this.rules.block.list.exec(t);if(n){let r=n[1].trim();const o=r.length>1,a={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const l=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let i=!1;for(;t;){let s=!1,u="",c="";if(!(n=l.exec(t))||this.rules.block.hr.test(t))break;u=n[0],t=t.substring(u.length);let m=n[2].split(`
`,1)[0].replace(/^\t+/,f=>" ".repeat(3*f.length)),h=t.split(`
`,1)[0],v=!m.trim(),y=0;if(this.options.pedantic?(y=2,c=m.trimStart()):v?y=n[1].length+1:(y=n[2].search(/[^ ]/),y=y>4?1:y,c=m.slice(y),y+=n[1].length),v&&/^[ \t]*$/.test(h)&&(u+=h+`
`,t=t.substring(h.length+1),s=!0),!s){const f=new RegExp(`^ {0,${Math.min(3,y-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),d=new RegExp(`^ {0,${Math.min(3,y-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),p=new RegExp(`^ {0,${Math.min(3,y-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,y-1)}}#`),S=new RegExp(`^ {0,${Math.min(3,y-1)}}<[a-z].*>`,"i");for(;t;){const C=t.split(`
`,1)[0];let E;if(h=C,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),E=h):E=h.replace(/\t/g,"    "),p.test(h)||x.test(h)||S.test(h)||f.test(h)||d.test(h))break;if(E.search(/[^ ]/)>=y||!h.trim())c+=`
`+E.slice(y);else{if(v||m.replace(/\t/g,"    ").search(/[^ ]/)>=4||p.test(m)||x.test(m)||d.test(m))break;c+=`
`+h}!v&&!h.trim()&&(v=!0),u+=C+`
`,t=t.substring(C.length+1),m=E.slice(y)}}a.loose||(i?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(u)&&(i=!0));let _=null,P;this.options.gfm&&(_=/^\[[ xX]\] /.exec(c),_&&(P=_[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:u,task:!!_,checked:P,loose:!1,text:c,tokens:[]}),a.raw+=u}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let s=0;s<a.items.length;s++)if(this.lexer.state.top=!1,a.items[s].tokens=this.lexer.blockTokens(a.items[s].text,[]),!a.loose){const u=a.items[s].tokens.filter(m=>m.type==="space"),c=u.length>0&&u.some(m=>/\n.*\n/.test(m.raw));a.loose=c}if(a.loose)for(let s=0;s<a.items.length;s++)a.items[s].loose=!0;return a}}html(t){const n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){const n=this.rules.block.def.exec(t);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:a}}}table(t){const n=this.rules.block.table.exec(t);if(!n||!/[:|]/.test(n[2]))return;const r=Ts(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const i of o)/^ *-+: *$/.test(i)?l.align.push("right"):/^ *:-+: *$/.test(i)?l.align.push("center"):/^ *:-+ *$/.test(i)?l.align.push("left"):l.align.push(null);for(let i=0;i<r.length;i++)l.header.push({text:r[i],tokens:this.lexer.inline(r[i]),header:!0,align:l.align[i]});for(const i of a)l.rows.push(Ts(i,l.header.length).map((s,u)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:l.align[u]})));return l}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:Se(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const l=Ln(r.slice(0,-1),"\\");if((r.length-l.length)%2===0)return}else{const l=Ap(n[2],"()");if(l>-1){const s=(n[0].indexOf("!")===0?5:4)+n[1].length+l;n[2]=n[2].substring(0,l),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let o=n[2],a="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],a=l[3])}else a=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),Cs(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(t,n){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){const o=(r[2]||r[1]).replace(/\s+/g," "),a=n[o.toLowerCase()];if(!a){const l=r[0].charAt(0);return{type:"text",raw:l,text:l}}return Cs(r,a,r[0],this.lexer)}}emStrong(t,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(t);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const l=[...o[0]].length-1;let i,s,u=l,c=0;const m=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,n=n.slice(-1*t.length+l);(o=m.exec(n))!=null;){if(i=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!i)continue;if(s=[...i].length,o[3]||o[4]){u+=s;continue}else if((o[5]||o[6])&&l%3&&!((l+s)%3)){c+=s;continue}if(u-=s,u>0)continue;s=Math.min(s,s+u+c);const h=[...o[0]][0].length,v=t.slice(0,l+o.index+h+s);if(Math.min(l,s)%2){const _=v.slice(1,-1);return{type:"em",raw:v,text:_,tokens:this.lexer.inlineTokens(_)}}const y=v.slice(2,-2);return{type:"strong",raw:v,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return o&&a&&(r=r.substring(1,r.length-1)),r=Se(r,!0),{type:"codespan",raw:n[0],text:r}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){const n=this.rules.inline.autolink.exec(t);if(n){let r,o;return n[2]==="@"?(r=Se(n[1]),o="mailto:"+r):(r=Se(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let n;if(n=this.rules.inline.url.exec(t)){let o,a;if(n[2]==="@")o=Se(n[0]),a="mailto:"+o;else{let l;do l=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(l!==n[0]);o=Se(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(t){const n=this.rules.inline.text.exec(t);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Se(n[0]),{type:"text",raw:n[0],text:r}}}}const Mp=/^(?:[ \t]*(?:\n|$))+/,$p=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Fp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,xr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Op=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,qd=/(?:[*+-]|\d{1,9}[.)])/,Qd=F(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,qd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),ii=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Up=/^[^\n]+/,si=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Bp=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",si).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Vp=F(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,qd).getRegex(),Vo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ui=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Hp=F("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ui).replace("tag",Vo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Wd=F(ii).replace("hr",xr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vo).getRegex(),qp=F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Wd).getRegex(),di={blockquote:qp,code:$p,def:Bp,fences:Fp,heading:Op,hr:xr,html:Hp,lheading:Qd,list:Vp,newline:Mp,paragraph:Wd,table:Yn,text:Up},bs=F("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",xr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vo).getRegex(),Qp={...di,table:bs,paragraph:F(ii).replace("hr",xr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",bs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vo).getRegex()},Wp={...di,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ui).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Yn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(ii).replace("hr",xr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Qd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Kd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Kp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yd=/^( {2,}|\\)\n(?!\s*$)/,Yp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,kr="\\p{P}\\p{S}",Zp=F(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,kr).getRegex(),Xp=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Gp=F(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,kr).getRegex(),Jp=F("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,kr).getRegex(),eh=F("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,kr).getRegex(),th=F(/\\([punct])/,"gu").replace(/punct/g,kr).getRegex(),nh=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rh=F(ui).replace("(?:-->|$)","-->").getRegex(),oh=F("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Eo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ah=F(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Eo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zd=F(/^!?\[(label)\]\[(ref)\]/).replace("label",Eo).replace("ref",si).getRegex(),Xd=F(/^!?\[(ref)\](?:\[\])?/).replace("ref",si).getRegex(),lh=F("reflink|nolink(?!\\()","g").replace("reflink",Zd).replace("nolink",Xd).getRegex(),ci={_backpedal:Yn,anyPunctuation:th,autolink:nh,blockSkip:Xp,br:Yd,code:Kp,del:Yn,emStrongLDelim:Gp,emStrongRDelimAst:Jp,emStrongRDelimUnd:eh,escape:Kd,link:ah,nolink:Xd,punctuation:Zp,reflink:Zd,reflinkSearch:lh,tag:oh,text:Yp,url:Yn},ih={...ci,link:F(/^!?\[(label)\]\((.*?)\)/).replace("label",Eo).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Eo).getRegex()},ul={...ci,escape:F(Kd).replace("])","~|])").getRegex(),url:F(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},sh={...ul,br:F(Yd).replace("{2,}","*").getRegex(),text:F(ul.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Fr={normal:di,gfm:Qp,pedantic:Wp},Rn={normal:ci,gfm:ul,breaks:sh,pedantic:ih};class Ie{constructor(t){O(this,"tokens");O(this,"options");O(this,"state");O(this,"tokenizer");O(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Qt,this.options.tokenizer=this.options.tokenizer||new So,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Fr.normal,inline:Rn.normal};this.options.pedantic?(n.block=Fr.pedantic,n.inline=Rn.pedantic):this.options.gfm&&(n.block=Fr.gfm,this.options.breaks?n.inline=Rn.breaks:n.inline=Rn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Fr,inline:Rn}}static lex(t,n){return new Ie(n).lex(t)}static lexInline(t,n){return new Ie(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){this.options.pedantic&&(t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,l;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(o=i.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(l=t,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const s=t.slice(1);let u;this.options.extensions.startBlock.forEach(c=>{u=c.call({lexer:this},s),typeof u=="number"&&u>=0&&(i=Math.min(i,u))}),i<1/0&&i>=0&&(l=t.substring(0,i+1))}if(this.state.top&&(o=this.tokenizer.paragraph(l))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o),r=l.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(t){const i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r,o,a,l=t,i,s,u;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(s||(u=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(r=c.call({lexer:this},t,n))?(t=t.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(t)){t=t.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(t,l,u)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(t)){t=t.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(t))){t=t.substring(r.raw.length),n.push(r);continue}if(a=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const m=t.slice(1);let h;this.options.extensions.startInline.forEach(v=>{h=v.call({lexer:this},m),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(a=t.substring(0,c+1))}if(r=this.tokenizer.inlineText(a)){t=t.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),s=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}}class To{constructor(t){O(this,"options");O(this,"parser");this.options=t||Qt}space(t){return""}code({text:t,lang:n,escaped:r}){var l;const o=(l=(n||"").match(/^\S*/))==null?void 0:l[0],a=t.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Se(o)+'">'+(r?a:Se(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:Se(a,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:n}){return`<h${n}>${this.parser.parseInline(t)}</h${n}>
`}hr(t){return`<hr>
`}list(t){const n=t.ordered,r=t.start;let o="";for(let i=0;i<t.items.length;i++){const s=t.items[i];o+=this.listitem(s)}const a=n?"ol":"ul",l=n&&r!==1?' start="'+r+'"':"";return"<"+a+l+`>
`+o+"</"+a+`>
`}listitem(t){let n="";if(t.task){const r=this.checkbox({checked:!!t.checked});t.loose?t.tokens.length>0&&t.tokens[0].type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(t.tokens,!!t.loose),`<li>${n}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let n="",r="";for(let a=0;a<t.header.length;a++)r+=this.tablecell(t.header[a]);n+=this.tablerow({text:r});let o="";for(let a=0;a<t.rows.length;a++){const l=t.rows[a];r="";for(let i=0;i<l.length;i++)r+=this.tablecell(l[i]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+o+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const n=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${t}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:n,tokens:r}){const o=this.parser.parseInline(r),a=Es(t);if(a===null)return o;t=a;let l='<a href="'+t+'"';return n&&(l+=' title="'+n+'"'),l+=">"+o+"</a>",l}image({href:t,title:n,text:r}){const o=Es(t);if(o===null)return r;t=o;let a=`<img src="${t}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):t.text}}class fi{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}}class Le{constructor(t){O(this,"options");O(this,"renderer");O(this,"textRenderer");this.options=t||Qt,this.options.renderer=this.options.renderer||new To,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new fi}static parse(t,n){return new Le(n).parse(t)}static parseInline(t,n){return new Le(n).parseInline(t)}parse(t,n=!0){let r="";for(let o=0;o<t.length;o++){const a=t[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const i=a,s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){r+=s||"";continue}}const l=a;switch(l.type){case"space":{r+=this.renderer.space(l);continue}case"hr":{r+=this.renderer.hr(l);continue}case"heading":{r+=this.renderer.heading(l);continue}case"code":{r+=this.renderer.code(l);continue}case"table":{r+=this.renderer.table(l);continue}case"blockquote":{r+=this.renderer.blockquote(l);continue}case"list":{r+=this.renderer.list(l);continue}case"html":{r+=this.renderer.html(l);continue}case"paragraph":{r+=this.renderer.paragraph(l);continue}case"text":{let i=l,s=this.renderer.text(i);for(;o+1<t.length&&t[o+1].type==="text";)i=t[++o],s+=`
`+this.renderer.text(i);n?r+=this.renderer.paragraph({type:"paragraph",raw:s,text:s,tokens:[{type:"text",raw:s,text:s}]}):r+=s;continue}default:{const i='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return r}parseInline(t,n){n=n||this.renderer;let r="";for(let o=0;o<t.length;o++){const a=t[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const i=this.options.extensions.renderers[a.type].call({parser:this},a);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=i||"";continue}}const l=a;switch(l.type){case"escape":{r+=n.text(l);break}case"html":{r+=n.html(l);break}case"link":{r+=n.link(l);break}case"image":{r+=n.image(l);break}case"strong":{r+=n.strong(l);break}case"em":{r+=n.em(l);break}case"codespan":{r+=n.codespan(l);break}case"br":{r+=n.br(l);break}case"del":{r+=n.del(l);break}case"text":{r+=n.text(l);break}default:{const i='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return r}}class Zn{constructor(t){O(this,"options");O(this,"block");this.options=t||Qt}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Ie.lex:Ie.lexInline}provideParser(){return this.block?Le.parse:Le.parseInline}}O(Zn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class uh{constructor(...t){O(this,"defaults",li());O(this,"options",this.setOptions);O(this,"parse",this.parseMarkdown(!0));O(this,"parseInline",this.parseMarkdown(!1));O(this,"Parser",Le);O(this,"Renderer",To);O(this,"TextRenderer",fi);O(this,"Lexer",Ie);O(this,"Tokenizer",So);O(this,"Hooks",Zn);this.use(...t)}walkTokens(t,n){var o,a;let r=[];for(const l of t)switch(r=r.concat(n.call(this,l)),l.type){case"table":{const i=l;for(const s of i.header)r=r.concat(this.walkTokens(s.tokens,n));for(const s of i.rows)for(const u of s)r=r.concat(this.walkTokens(u.tokens,n));break}case"list":{const i=l;r=r.concat(this.walkTokens(i.items,n));break}default:{const i=l;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{const u=i[s].flat(1/0);r=r.concat(this.walkTokens(u,n))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,n)))}}return r}use(...t){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const l=n.renderers[a.name];l?n.renderers[a.name]=function(...i){let s=a.renderer.apply(this,i);return s===!1&&(s=l.apply(this,i)),s}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=n[a.level];l?l.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),o.extensions=n),r.renderer){const a=this.defaults.renderer||new To(this.defaults);for(const l in r.renderer){if(!(l in a))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const i=l,s=r.renderer[i],u=a[i];a[i]=(...c)=>{let m=s.apply(a,c);return m===!1&&(m=u.apply(a,c)),m||""}}o.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new So(this.defaults);for(const l in r.tokenizer){if(!(l in a))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const i=l,s=r.tokenizer[i],u=a[i];a[i]=(...c)=>{let m=s.apply(a,c);return m===!1&&(m=u.apply(a,c)),m}}o.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new Zn;for(const l in r.hooks){if(!(l in a))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;const i=l,s=r.hooks[i],u=a[i];Zn.passThroughHooks.has(l)?a[i]=c=>{if(this.defaults.async)return Promise.resolve(s.call(a,c)).then(h=>u.call(a,h));const m=s.call(a,c);return u.call(a,m)}:a[i]=(...c)=>{let m=s.apply(a,c);return m===!1&&(m=u.apply(a,c)),m}}o.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,l=r.walkTokens;o.walkTokens=function(i){let s=[];return s.push(l.call(this,i)),a&&(s=s.concat(a.call(this,i))),s}}this.defaults={...this.defaults,...o}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,n){return Ie.lex(t,n??this.defaults)}parser(t,n){return Le.parse(t,n??this.defaults)}parseMarkdown(t){return(r,o)=>{const a={...o},l={...this.defaults,...a},i=this.onError(!!l.silent,!!l.async);if(this.defaults.async===!0&&a.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));l.hooks&&(l.hooks.options=l,l.hooks.block=t);const s=l.hooks?l.hooks.provideLexer():t?Ie.lex:Ie.lexInline,u=l.hooks?l.hooks.provideParser():t?Le.parse:Le.parseInline;if(l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(r):r).then(c=>s(c,l)).then(c=>l.hooks?l.hooks.processAllTokens(c):c).then(c=>l.walkTokens?Promise.all(this.walkTokens(c,l.walkTokens)).then(()=>c):c).then(c=>u(c,l)).then(c=>l.hooks?l.hooks.postprocess(c):c).catch(i);try{l.hooks&&(r=l.hooks.preprocess(r));let c=s(r,l);l.hooks&&(c=l.hooks.processAllTokens(c)),l.walkTokens&&this.walkTokens(c,l.walkTokens);let m=u(c,l);return l.hooks&&(m=l.hooks.postprocess(m)),m}catch(c){return i(c)}}}onError(t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const o="<p>An error occurred:</p><pre>"+Se(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const Vt=new uh;function M(e,t){return Vt.parse(e,t)}M.options=M.setOptions=function(e){return Vt.setOptions(e),M.defaults=Vt.defaults,Bd(M.defaults),M};M.getDefaults=li;M.defaults=Qt;M.use=function(...e){return Vt.use(...e),M.defaults=Vt.defaults,Bd(M.defaults),M};M.walkTokens=function(e,t){return Vt.walkTokens(e,t)};M.parseInline=Vt.parseInline;M.Parser=Le;M.parser=Le.parse;M.Renderer=To;M.TextRenderer=fi;M.Lexer=Ie;M.lexer=Ie.lex;M.Tokenizer=So;M.Hooks=Zn;M.parse=M;M.options;M.setOptions;M.use;M.walkTokens;M.parseInline;Le.parse;Ie.lex;const dh=[{id:0,tipo:"md",fuente:`# Cuaderno de planta

**Una semana de la planta virtual LX-SX-EW, leída desde sus datos crudos.**

Los datos salen del mismo motor que mueve la [planta virtual](https://jsnn15.github.io/copper_plant_simulator_2026/). Se corrió una semana, del 2 al 9 de noviembre de 2026, con doce fallas programadas y un operador que responde según un guion. Lo exportado imita lo que entregan los sistemas de una planta: historiador, alarmas, bitácora, monitoreo de condición, laboratorio y cierre de turno.

Por ser un simulador, se sabe qué falló y cuándo (\`datos/verdad.json\`). Ese archivo no se usa para detectar nada. Sirve para medir, al final de cada sección, si el análisis encontró lo que había.

Cada sección es un caso de uso y termina con el mismo contraste: qué habría pasado sin el análisis y qué cambia con él.

| | Caso de uso | Sin el análisis | Con el análisis |
|---|---|---|---|
| 2 | Datos confiables | 580 celdas malas entran a los cálculos sin aviso | Las pruebas marcan los 7 defectos sembrados y ninguno de más |
| 3 | Qué pasó en la semana | 121 t bajo el plan, sin causa a la vista | El 79 % de la baja cae en los 7 turnos con mineral distinto |
| 4 | Alarmas | 50 anuncios; 29 son dos alarmas que repican | 28 anuncios con un retardo de 60 s |
| 5 | Vibración | La alarma por límite avisa 1,7 h antes del disparo | La tendencia avisa 4,3 h antes y pone hora al disparo |
| 6 | pH: sensor o proceso | La alarma de planta tarda 110 y 410 min | El detector tarda 29 y 168 min, y dice si es el sensor |
| 7 | Anticipar la producción | Suponer que nada cambia: error de 0,73 t/h cuando cambia el mineral | Un modelo con ocho semanas de historia: 0,27 t/h |

La sección 1 presenta los datos. La última junta estas cifras, calculadas por el mismo cuaderno.`},{id:1,tipo:"code",fuente:`import hashlib
import json
from pathlib import Path

import matplotlib.dates as mdates
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

DATOS = Path('datos')
if not DATOS.exists():  # fuera del repositorio (solo se bajó el .ipynb): trae los datos publicados
    from urllib.request import urlretrieve

    DATOS.mkdir()
    for nombre in ('planta.mplstyle', 'datos/manifiesto.json', 'datos/verdad.json'):
        urlretrieve('https://jsnn15.github.io/cuaderno/' + nombre, nombre)
    for nombre in json.loads((DATOS / 'manifiesto.json').read_text(encoding='utf-8'))['archivos']:
        urlretrieve('https://jsnn15.github.io/cuaderno/datos/' + nombre, DATOS / nombre)

plt.style.use('planta.mplstyle')
pd.set_option('display.precision', 3, 'display.max_columns', 12, 'display.max_colwidth', 100)
AZUL, NARANJA, VERDE, AMARILLO = plt.rcParams['axes.prop_cycle'].by_key()['color']
ALERTA, GRAVE, CRITICO = '#fab219', '#ec835a', '#d03b3b'  # solo para límites y estados
TENUE = plt.rcParams['xtick.color']`,n:1,salidas:[]},{id:2,tipo:"md",fuente:`## 1. Qué datos hay

Un archivo CSV por sistema de origen, más una campaña larga que usa la sección 7. El manifiesto guarda la huella SHA-256 de cada uno: si un archivo cambia, la comprobación de abajo lo dice.`},{id:3,tipo:"code",fuente:`manifiesto = json.loads((DATOS / 'manifiesto.json').read_text(encoding='utf-8'))
catalogo = pd.DataFrame(manifiesto['archivos']).T
catalogo['huella_ok'] = [hashlib.sha256((DATOS / n).read_bytes()).hexdigest() == h for n, h in catalogo['sha256'].items()]
catalogo['kB'] = (catalogo['bytes'] / 1024).astype(float).round(0).astype(int)
catalogo[['sistema', 'que', 'filas', 'kB', 'huella_ok']]`,n:2,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>sistema</th>
      <th>que</th>
      <th>filas</th>
      <th>kB</th>
      <th>huella_ok</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>historiador.csv</th>
      <td>DCS / historiador</td>
      <td>Historiador de proceso: una fila por minuto, una columna por tag</td>
      <td>10071</td>
      <td>2996</td>
      <td>True</td>
    </tr>
    <tr>
      <th>alarmas.csv</th>
      <td>Sistema de alarmas</td>
      <td>Registro de alarmas: activación, reconocimiento y normalización</td>
      <td>129</td>
      <td>13</td>
      <td>True</td>
    </tr>
    <tr>
      <th>bitacora.csv</th>
      <td>Bitácora de sala de control</td>
      <td>Bitácora: órdenes del operador, disparos, secuencias y mantenimiento</td>
      <td>487</td>
      <td>33</td>
      <td>True</td>
    </tr>
    <tr>
      <th>vibraciones.csv</th>
      <td>Monitoreo de condición</td>
      <td>Monitoreo de condición: una lectura cada 5 min por motor</td>
      <td>32272</td>
      <td>1442</td>
      <td>True</td>
    </tr>
    <tr>
      <th>laboratorio.csv</th>
      <td>Laboratorio</td>
      <td>Laboratorio: pH del PLS cada 2 h y compósito de cátodo por turno</td>
      <td>147</td>
      <td>5</td>
      <td>True</td>
    </tr>
    <tr>
      <th>turnos.csv</th>
      <td>Reporte de turno</td>
      <td>Cierre de turno: producción, consumos, pérdidas y alarmas</td>
      <td>21</td>
      <td>1</td>
      <td>True</td>
    </tr>
    <tr>
      <th>tags.csv</th>
      <td>Configuración</td>
      <td>Diccionario de tags: descripción, unidad, rango del instrumento y banda normal</td>
      <td>49</td>
      <td>3</td>
      <td>True</td>
    </tr>
    <tr>
      <th>equipos.csv</th>
      <td>Configuración</td>
      <td>Motores: potencia, centro de control y límites de vibración ISO 20816-3</td>
      <td>16</td>
      <td>1</td>
      <td>True</td>
    </tr>
    <tr>
      <th>historiador_8_semanas.csv</th>
      <td>DCS / historiador</td>
      <td>Campaña larga: ocho semanas con 15 cambios de mineral, medias de 10 minutos de 12 tags</td>
      <td>8065</td>
      <td>816</td>
      <td>True</td>
    </tr>
    <tr>
      <th>historiador_8_semanas_eventos.csv</th>
      <td>DCS / historiador</td>
      <td>Campaña larga: cuándo cambió el mineral y cuándo disparó el rectificador</td>
      <td>20</td>
      <td>1</td>
      <td>True</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:4,tipo:"md",fuente:"El historiador es una tabla ancha: una fila por minuto y una columna por tag. El diccionario de tags dice qué mide cada columna, en qué unidad, el rango del instrumento y la banda normal de operación."},{id:5,tipo:"code",fuente:`crudo = pd.read_csv(DATOS / 'historiador.csv', parse_dates=['fecha'])
tags = pd.read_csv(DATOS / 'tags.csv', index_col='tag')
print(f'{len(crudo):,} filas × {crudo.shape[1] - 1} tags · {crudo.fecha.min()} a {crudo.fecha.max()}'.replace(',', '.'))
crudo.iloc[:4, :8]`,n:3,salidas:[{t:"texto",texto:`10.071 filas × 49 tags · 2026-11-02 08:00:00 a 2026-11-09 08:00:00
`},{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>fecha</th>
      <th>WIT-101</th>
      <th>SIT-101</th>
      <th>FIT-102</th>
      <th>KY-102</th>
      <th>FIT-104</th>
      <th>AIT-105</th>
      <th>LIT-103</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2026-11-02 08:00:00</td>
      <td>1751.1</td>
      <td>77.8</td>
      <td>18.71</td>
      <td>20.10</td>
      <td>120.0</td>
      <td>9.15</td>
      <td>55.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2026-11-02 08:01:00</td>
      <td>1753.1</td>
      <td>76.3</td>
      <td>18.46</td>
      <td>19.48</td>
      <td>119.4</td>
      <td>9.14</td>
      <td>54.2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2026-11-02 08:02:00</td>
      <td>1799.8</td>
      <td>77.1</td>
      <td>18.86</td>
      <td>19.83</td>
      <td>121.3</td>
      <td>9.20</td>
      <td>53.9</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2026-11-02 08:03:00</td>
      <td>1629.0</td>
      <td>77.0</td>
      <td>18.52</td>
      <td>20.17</td>
      <td>119.0</td>
      <td>9.25</td>
      <td>53.2</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:6,tipo:"code",fuente:"tags.loc[['AIT-206', 'AIT-207', 'IIT-401', 'TIT-403', 'KY-405', 'KY-406']]",n:4,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>descripcion</th>
      <th>unidad</th>
      <th>area</th>
      <th>rango_min</th>
      <th>rango_max</th>
      <th>normal_min</th>
      <th>normal_max</th>
    </tr>
    <tr>
      <th>tag</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>AIT-206</th>
      <td>Cobre en PLS</td>
      <td>g/L</td>
      <td>200</td>
      <td>0.0</td>
      <td>6.0</td>
      <td>2.5</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>AIT-207</th>
      <td>pH del PLS</td>
      <td>pH</td>
      <td>200</td>
      <td>0.0</td>
      <td>4.0</td>
      <td>1.6</td>
      <td>2.2</td>
    </tr>
    <tr>
      <th>IIT-401</th>
      <td>Corriente del rectificador</td>
      <td>kA</td>
      <td>400</td>
      <td>0.0</td>
      <td>50.0</td>
      <td>33.0</td>
      <td>40.0</td>
    </tr>
    <tr>
      <th>TIT-403</th>
      <td>Temperatura del electrolito</td>
      <td>°C</td>
      <td>400</td>
      <td>20.0</td>
      <td>65.0</td>
      <td>42.0</td>
      <td>50.0</td>
    </tr>
    <tr>
      <th>KY-405</th>
      <td>Producción de cátodo</td>
      <td>t/h</td>
      <td>400</td>
      <td>0.0</td>
      <td>10.0</td>
      <td>5.5</td>
      <td>7.5</td>
    </tr>
    <tr>
      <th>KY-406</th>
      <td>Eficiencia de corriente</td>
      <td>%</td>
      <td>400</td>
      <td>60.0</td>
      <td>100.0</td>
      <td>88.0</td>
      <td>100.0</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:7,tipo:"md",fuente:`## 2. Se puede confiar en el historiador

Antes de calcular nada, cinco pruebas sobre el archivo tal como llegó. Cada una busca un defecto típico de la adquisición de datos:

| Prueba | Qué busca |
|---|---|
| Filas repetidas | La misma marca de tiempo dos veces |
| Filas que faltan | Minutos sin registro |
| Sin dato | Celdas vacías |
| Fuera de rango | Valores que el instrumento no puede medir |
| Congelado | Un transmisor que repite el mismo valor 20 minutos o más |`},{id:8,tipo:"code",fuente:`def tramos(mascara):
    """Convierte una tabla de verdadero/falso (minutos × tags) en una lista de tramos."""
    filas = []
    for tag in mascara.columns[mascara.any()]:
        m = mascara[tag]
        grupo = (m != m.shift()).cumsum()[m]
        for _, g in m[m].groupby(grupo):
            filas.append({'tag': tag, 'desde': g.index[0], 'hasta': g.index[-1], 'minutos': len(g)})
    return pd.DataFrame(filas, columns=['tag', 'desde', 'hasta', 'minutos'])


# 1 · filas repetidas
repetidas = crudo[crudo.duplicated('fecha')]
h = crudo.drop_duplicates('fecha').set_index('fecha')

# 2 · filas que faltan: se compara con la malla completa de minutos
malla = pd.date_range(h.index[0], h.index[-1], freq='1min')
faltantes = malla.difference(h.index)
h = h.reindex(malla)

# 3 · sin dato: celdas vacías que venían así en el archivo
sin_dato = h.isna() & ~h.index.isin(faltantes)[:, None]

# 4 · fuera del rango del instrumento
fuera = (h < tags.rango_min) | (h > tags.rango_max)

# 5 · congelado: 20 min o más con el mismo valor, sin estar pegado a un extremo del rango
largo = h.apply(lambda s: s.groupby((s != s.shift()).cumsum()).transform('size'))
congelado = (largo >= 20) & h.notna() & (h > tags.rango_min) & (h < tags.rango_max)

pruebas = pd.DataFrame(
    [
        ['Filas repetidas', len(repetidas), 'filas'],
        ['Filas que faltan', len(faltantes), 'minutos'],
        ['Sin dato', int(sin_dato.values.sum()), 'celdas'],
        ['Fuera de rango', int(fuera.values.sum()), 'celdas'],
        ['Congelado', int(congelado.values.sum()), 'celdas'],
    ],
    columns=['prueba', 'encontrado', 'unidad'],
).set_index('prueba')
pruebas['% del archivo'] = (100 * pruebas['encontrado'] / [len(crudo), len(malla), h.size, h.size, h.size]).round(3)
pruebas`,n:5,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>encontrado</th>
      <th>unidad</th>
      <th>% del archivo</th>
    </tr>
    <tr>
      <th>prueba</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Filas repetidas</th>
      <td>2</td>
      <td>filas</td>
      <td>0.020</td>
    </tr>
    <tr>
      <th>Filas que faltan</th>
      <td>12</td>
      <td>minutos</td>
      <td>0.119</td>
    </tr>
    <tr>
      <th>Sin dato</th>
      <td>376</td>
      <td>celdas</td>
      <td>0.076</td>
    </tr>
    <tr>
      <th>Fuera de rango</th>
      <td>3</td>
      <td>celdas</td>
      <td>0.001</td>
    </tr>
    <tr>
      <th>Congelado</th>
      <td>201</td>
      <td>celdas</td>
      <td>0.041</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:9,tipo:"md",fuente:"Dónde y cuándo. Cada barra es un tramo con datos no válidos."},{id:10,tipo:"code",fuente:`hallazgos = pd.concat(
    [tramos(sin_dato).assign(prueba='Sin dato'), tramos(fuera).assign(prueba='Fuera de rango'), tramos(congelado).assign(prueba='Congelado')],
    ignore_index=True,
)
orden = hallazgos.groupby('tag').desde.min().sort_values(ascending=False).index
fila = {tag: i for i, tag in enumerate(orden)}
fig, ax = plt.subplots(figsize=(9, 0.32 * len(orden) + 0.9))
for prueba, color in [('Sin dato', AZUL), ('Congelado', NARANJA), ('Fuera de rango', VERDE)]:
    t = hallazgos[hallazgos.prueba == prueba]
    ancho = (t.hasta - t.desde).clip(lower=pd.Timedelta('40min'))  # un minuto suelto no se vería
    ax.barh(t.tag.map(fila), ancho, left=t.desde, height=0.5, color=color, label=prueba)
ax.set_yticks(range(len(orden)), orden)
ax.set_xlim(malla[0], malla[-1])
ax.set_title('Tramos no válidos por tag')
ax.legend(ncols=3, loc='lower right', bbox_to_anchor=(1, 1), borderaxespad=0.2)
plt.show()`,n:6,salidas:[{t:"img",claro:"fig/c10-0.png",oscuro:"fig/o10-0.png",w:1312,h:699}]},{id:11,tipo:"md",fuente:"**Contra lo sembrado.** El generador dejó anotados los defectos que metió en el historiador. Se cruza cada uno con lo encontrado."},{id:12,tipo:"code",fuente:`verdad = json.loads((DATOS / 'verdad.json').read_text(encoding='utf-8'))
sembrado = pd.DataFrame(verdad['defectos'])
sembrado[['desde', 'hasta']] = sembrado[['desde', 'hasta']].apply(pd.to_datetime)


def encontrado(d):
    if d.tipo == 'duplicado':
        return repetidas.fecha.between(d.desde, d.hasta).sum() == 2
    if d.tipo == 'filas_faltantes':
        return set(pd.date_range(d.desde, d.hasta, freq='1min')) <= set(faltantes)
    mascara = {'sin_dato': sin_dato, 'congelado': congelado, 'fuera_de_rango': fuera}[d.tipo]
    return bool(mascara.loc[d.desde : d.hasta, d.tags].all().all())


sembrado['encontrado'] = sembrado.apply(encontrado, axis=1)
sembrado['tags'] = sembrado.tags.map(lambda x: ', '.join(x[:3]) + (f' y {len(x) - 3} más' if len(x) > 3 else ''))

# falsos positivos: tramos encontrados que no calzan con ningún defecto sembrado
calza = lambda t: any((t.desde <= d.hasta) and (t.hasta >= d.desde) for d in sembrado.itertuples())
de_mas = hallazgos[~hallazgos.apply(calza, axis=1)]
print(f'Defectos sembrados encontrados: {sembrado.encontrado.sum()} de {len(sembrado)} · tramos de más: {len(de_mas)}')
sembrado[['tipo', 'tags', 'desde', 'hasta', 'nota', 'encontrado']]`,n:7,salidas:[{t:"texto",texto:`Defectos sembrados encontrados: 7 de 7 · tramos de más: 0
`},{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>tipo</th>
      <th>tags</th>
      <th>desde</th>
      <th>hasta</th>
      <th>nota</th>
      <th>encontrado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>sin_dato</td>
      <td>AIT-208, FIT-301, KY-301 y 5 más</td>
      <td>2026-11-03 21:14:00</td>
      <td>2026-11-03 22:00:00</td>
      <td>Pérdida de comunicación con el PLC del área 300</td>
      <td>True</td>
    </tr>
    <tr>
      <th>1</th>
      <td>congelado</td>
      <td>TIT-403</td>
      <td>2026-11-05 02:11:00</td>
      <td>2026-11-05 05:30:00</td>
      <td>El transmisor repite el último valor</td>
      <td>True</td>
    </tr>
    <tr>
      <th>2</th>
      <td>fuera_de_rango</td>
      <td>FIT-205</td>
      <td>2026-11-02 19:41:00</td>
      <td>2026-11-02 19:41:00</td>
      <td>Valor 9999</td>
      <td>True</td>
    </tr>
    <tr>
      <th>3</th>
      <td>fuera_de_rango</td>
      <td>AIT-405</td>
      <td>2026-11-04 11:05:00</td>
      <td>2026-11-04 11:05:00</td>
      <td>Valor -1</td>
      <td>True</td>
    </tr>
    <tr>
      <th>4</th>
      <td>fuera_de_rango</td>
      <td>IIT-401</td>
      <td>2026-11-06 20:17:00</td>
      <td>2026-11-06 20:17:00</td>
      <td>Valor 655.35</td>
      <td>True</td>
    </tr>
    <tr>
      <th>5</th>
      <td>duplicado</td>
      <td></td>
      <td>2026-11-03 22:01:00</td>
      <td>2026-11-03 22:02:00</td>
      <td>Dos filas reenviadas tras la reconexión</td>
      <td>True</td>
    </tr>
    <tr>
      <th>6</th>
      <td>filas_faltantes</td>
      <td></td>
      <td>2026-11-08 06:20:00</td>
      <td>2026-11-08 06:31:00</td>
      <td>Reinicio del servidor del historiador</td>
      <td>True</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:13,tipo:"md",fuente:"Para el resto del cuaderno se trabaja con `h`: sin filas repetidas, con la malla completa de minutos y con lo no válido marcado como vacío. No se rellena nada."},{id:14,tipo:"code",fuente:`h = h.mask(fuera | congelado)
print(f'Celdas válidas: {100 * h.notna().values.mean():.2f} %')`,n:8,salidas:[{t:"texto",texto:`Celdas válidas: 99.76 %
`}]},{id:15,tipo:"md",fuente:`## 3. Qué le pasó a la planta

Cuatro variables bastan para ver la semana: el cobre que llega desde las pilas, la corriente de la nave, la temperatura del electrolito y el cátodo producido. Las líneas verticales son los disparos anotados en la bitácora.`},{id:16,tipo:"code",fuente:`bitacora = pd.read_csv(DATOS / 'bitacora.csv', parse_dates=['fecha'])
disparos = bitacora[bitacora.clase == 'trip']

ver = ['AIT-206', 'IIT-401', 'TIT-403', 'KY-405']
media10 = h[ver].resample('10min').mean()
fig, ejes = plt.subplots(len(ver), 1, figsize=(9, 6.4), sharex=True)
for ax, tag in zip(ejes, ver):
    ax.axhspan(tags.normal_min[tag], tags.normal_max[tag], color=TENUE, alpha=0.10, lw=0)
    for f in disparos.fecha:
        ax.axvline(f, color=TENUE, lw=0.8, alpha=0.7)
    ax.plot(media10.index, media10[tag], color=AZUL)
    ax.set_title(f'{tags.descripcion[tag]} · {tag} ({tags.unidad[tag]})', fontsize=9.5, pad=4)
    ax.margins(x=0)
ejes[0].annotate('banda normal', (media10.index[6], tags.normal_max['AIT-206']), xytext=(0, -11), textcoords='offset points', fontsize=8, color=TENUE)
plt.show()

disparos[['fecha', 'mensaje']].reset_index(drop=True)`,n:9,salidas:[{t:"img",claro:"fig/c16-0.png",oscuro:"fig/o16-0.png",w:1312,h:938},{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>fecha</th>
      <th>mensaje</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2026-11-02 14:20:00</td>
      <td>CV-101 disparado: cordón de emergencia</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2026-11-03 03:10:00</td>
      <td>P-201A disparado: sobrecorriente</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2026-11-04 06:24:22</td>
      <td>M-103 disparado: vibración muy alta (&gt; 8,9 mm/s)</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2026-11-04 16:30:00</td>
      <td>Interruptor MCC-200 abierto por protección</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2026-11-04 16:30:01</td>
      <td>P-201B disparado: sin tensión en MCC-200</td>
    </tr>
    <tr>
      <th>5</th>
      <td>2026-11-04 16:30:01</td>
      <td>P-202A disparado: sin tensión en MCC-200</td>
    </tr>
    <tr>
      <th>6</th>
      <td>2026-11-06 01:00:00</td>
      <td>Racha de cortocircuitos en la nave</td>
    </tr>
    <tr>
      <th>7</th>
      <td>2026-11-06 13:00:00</td>
      <td>RT-401 disparado: falla de refrigeración del transformador</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:17,tipo:"md",fuente:`**Lectura.** El cobre en el PLS cae desde el jueves 5 y vuelve el sábado 7: es un cambio de mineral, no un disparo, y arrastra a la corriente y a la producción durante dos días. La temperatura baja el sábado 7 por la madrugada sin que la bitácora anote ninguna falla hasta que mantenimiento repara el intercambiador. El disparo del rectificador del viernes 6 se ve como un corte breve.

**Una comprobación física.** La ley de Faraday fija cuánto cobre deposita la corriente: 1,1855 g por ampere-hora y por celda, por la eficiencia de corriente. Si las unidades y los tags están bien, el cátodo medido tiene que calzar con ese cálculo.`},{id:18,tipo:"code",fuente:`CELDAS = 160
faraday = h['IIT-401'] * 1.1855 * CELDAS / 1000 * h['KY-406'] / 100  # t/h
con_corriente = h['IIT-401'] > 5
diferencia = (100 * (h['KY-405'] - faraday) / faraday)[con_corriente]
print(f'Cátodo medido contra Faraday: mediana {diferencia.median():+.2f} %, 90 % de los minutos dentro de ±{diferencia.abs().quantile(0.9):.1f} %')`,n:10,salidas:[{t:"texto",texto:`Cátodo medido contra Faraday: mediana +0.00 %, 90 % de los minutos dentro de ±0.6 %
`}]},{id:19,tipo:"md",fuente:"El cierre de turno resume lo mismo en toneladas. La línea es el plan."},{id:20,tipo:"code",fuente:`turnos = pd.read_csv(DATOS / 'turnos.csv', parse_dates=['fecha_cierre'])
etiqueta = turnos.fecha_cierre.sub(pd.Timedelta('1min')).dt.strftime('%d') + ' ' + turnos.turno
fig, ax = plt.subplots(figsize=(9, 2.6))
ax.bar(etiqueta, turnos.catodo_t, width=0.62, color=AZUL)
ax.axhline(turnos.plan_t.iloc[0], color=TENUE, lw=1)
ax.annotate(f'plan {turnos.plan_t.iloc[0]:.1f} t', (len(turnos) - 0.6, turnos.plan_t.iloc[0]), xytext=(0, 4), textcoords='offset points', ha='right', fontsize=8.5, color=TENUE)
ax.set_title('Cátodo por turno (t)')
ax.grid(axis='x', visible=False)
ax.margins(x=0.01)
plt.show()

print(f'Semana: {turnos.catodo_t.sum():.0f} t de {turnos.plan_t.sum():.0f} t planificadas ({100 * turnos.catodo_t.sum() / turnos.plan_t.sum():.0f} %)')

# ¿Dónde se perdió? Turnos en que el cobre del PLS estuvo bajo su banda normal (mineral distinto) contra el resto.
inicio_turno = turnos.fecha_cierre - pd.Timedelta('8h')
cobre_turno = [h['AIT-206'].loc[a:b].mean() for a, b in zip(inicio_turno, turnos.fecha_cierre)]
mineral_distinto = np.array(cobre_turno) < 3.0
falta = turnos.plan_t - turnos.catodo_t
bajo_plan = falta.sum()
por_mineral = falta[mineral_distinto].sum()
print(f'Bajo el plan: {bajo_plan:.0f} t. En los {mineral_distinto.sum()} turnos con mineral distinto: {por_mineral:.0f} t ({100 * por_mineral / bajo_plan:.0f} %)')`,n:11,salidas:[{t:"img",claro:"fig/c20-0.png",oscuro:"fig/o20-0.png",w:1312,h:391},{t:"texto",texto:`Semana: 962 t de 1084 t planificadas (89 %)
Bajo el plan: 121 t. En los 7 turnos con mineral distinto: 96 t (79 %)
`}]},{id:21,tipo:"md",fuente:`## 4. Alarmas: ayudan o estorban

La norma ISA-18.2 da valores de referencia para saber si un operador puede atender lo que el sistema le anuncia. Se calculan sobre el registro de alarmas de la semana.`},{id:22,tipo:"code",fuente:`alarmas = pd.read_csv(DATOS / 'alarmas.csv', parse_dates=['fecha'])
activas = alarmas[alarmas.evento == 'ACTIVA']
ventanas = pd.date_range(malla[0], malla[-1], freq='10min')
por_10min = activas.set_index('fecha').resample('10min').size().reindex(ventanas, fill_value=0)

# repique: la misma alarma se activa 3 veces o más en un minuto
veces_1min = activas.set_index('fecha').groupby('alarma').alarma.rolling('60s').count()
repican = veces_1min[veces_1min >= 3].index.get_level_values(0).unique().tolist()

# alarmas pegadas: activas más de 24 h seguidas
fin = alarmas[alarmas.evento == 'NORMALIZA'].groupby('alarma').fecha.apply(list)
dura = activas.apply(lambda a: min([f for f in fin.get(a.alarma, []) if f >= a.fecha], default=malla[-1]) - a.fecha, axis=1)

indicadores = pd.DataFrame(
    [
        ['Alarmas por 10 min, promedio', round(por_10min.mean(), 2), 'cerca de 1 es aceptable; 2 es el máximo manejable'],
        ['Máximo en 10 min', int(por_10min.max()), '10 o menos'],
        ['Ventanas de 10 min con más de 10 alarmas', f'{100 * (por_10min > 10).mean():.2f} %', 'menos de 1 %'],
        ['Alarmas que repican', len(repican), 'ninguna'],
        ['Alarmas activas más de 24 h', int((dura > pd.Timedelta('24h')).sum()), 'menos de 5 por día'],
        ['Prioridad 1 · 2 · 3', ' · '.join(f'{100 * (activas.prioridad == p).mean():.0f} %' for p in (1, 2, 3)), 'cerca de 5 % · 15 % · 80 %'],
    ],
    columns=['indicador', 'esta semana', 'referencia ISA-18.2'],
).set_index('indicador')
pegadas = activas[dura > pd.Timedelta('24h')].assign(horas=(dura.dt.total_seconds() / 3600).round(0))
indicadores`,n:12,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>esta semana</th>
      <th>referencia ISA-18.2</th>
    </tr>
    <tr>
      <th>indicador</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Alarmas por 10 min, promedio</th>
      <td>0.05</td>
      <td>cerca de 1 es aceptable; 2 es el máximo manejable</td>
    </tr>
    <tr>
      <th>Máximo en 10 min</th>
      <td>15</td>
      <td>10 o menos</td>
    </tr>
    <tr>
      <th>Ventanas de 10 min con más de 10 alarmas</th>
      <td>0.10 %</td>
      <td>menos de 1 %</td>
    </tr>
    <tr>
      <th>Alarmas que repican</th>
      <td>2</td>
      <td>ninguna</td>
    </tr>
    <tr>
      <th>Alarmas activas más de 24 h</th>
      <td>1</td>
      <td>menos de 5 por día</td>
    </tr>
    <tr>
      <th>Prioridad 1 · 2 · 3</th>
      <td>16 % · 36 % · 48 %</td>
      <td>cerca de 5 % · 15 % · 80 %</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:23,tipo:"md",fuente:"La alarma que estuvo activa más de un día:"},{id:24,tipo:"code",fuente:"pegadas[['fecha', 'alarma', 'descripcion', 'horas']]",n:13,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>fecha</th>
      <th>alarma</th>
      <th>descripcion</th>
      <th>horas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>91</th>
      <td>2026-11-05 22:55:24</td>
      <td>AIT-206.L</td>
      <td>Cobre bajo en PLS</td>
      <td>36.0</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:25,tipo:"code",fuente:`conteo = activas.alarma.value_counts().head(8).sort_values()
fig, ax = plt.subplots(figsize=(9, 2.9))
ax.barh(conteo.index, conteo.values, height=0.62, color=AZUL)
for y, v in enumerate(conteo.values):
    ax.annotate(str(v), (v, y), xytext=(4, 0), textcoords='offset points', va='center', fontsize=8.5, color=TENUE)
ax.set_title(f'Las 8 alarmas más frecuentes (de {len(activas)} activaciones en la semana)')
ax.grid(axis='y', visible=False)
ax.set_xlim(0, conteo.max() * 1.08)
plt.show()`,n:14,salidas:[{t:"img",claro:"fig/c25-0.png",oscuro:"fig/o25-0.png",w:1312,h:434}]},{id:26,tipo:"md",fuente:"**Lectura.** En promedio la planta anuncia poco, pero casi toda la carga viene de una sola fuente: las alarmas de vibración del tambor M-103, que repican cuando el valor cruza el límite ida y vuelta. Se puede medir cuánto bajaría con un retardo de 60 segundos antes de volver a anunciar."},{id:27,tipo:"code",fuente:`separadas = activas.groupby('alarma').fecha.diff().fillna(pd.Timedelta('1D')) > pd.Timedelta('60s')
antes, despues = activas.alarma.value_counts(), activas[separadas].alarma.value_counts()
comparacion = pd.DataFrame({'activaciones': antes, 'con retardo de 60 s': despues}).loc[repican]
print(f'Total de la semana: {len(activas)} → {int(separadas.sum())} activaciones')
comparacion`,n:15,salidas:[{t:"texto",texto:`Total de la semana: 50 → 28 activaciones
`},{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>activaciones</th>
      <th>con retardo de 60 s</th>
    </tr>
    <tr>
      <th>alarma</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>M-103.VIB</th>
      <td>21</td>
      <td>5</td>
    </tr>
    <tr>
      <th>M-103.VIBH</th>
      <td>8</td>
      <td>2</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:28,tipo:"md",fuente:`## 5. Vibraciones: cuánto aviso da la tendencia

El monitoreo de condición entrega una lectura cada 5 minutos por motor. Primero, dónde está cada equipo respecto de las zonas de ISO 20816-3 (A: recién puesto en marcha; B: operación sin restricción; C: no apto para operar en forma continua; D: daño).`},{id:29,tipo:"code",fuente:`vib = pd.read_csv(DATOS / 'vibraciones.csv', parse_dates=['fecha'])
equipos = pd.read_csv(DATOS / 'equipos.csv', index_col='equipo')
andando = vib[vib.estado == 'RUN']


def zona(v, eq):
    return 'ABCD'[int(np.searchsorted(equipos.loc[eq, ['limite_ab', 'limite_bc', 'limite_cd']].astype(float).values, v))]


resumen = andando.groupby('equipo').vibracion_mm_s.agg(horas=lambda s: round(len(s) / 12), mediana='median', maximo='max')
resumen['zona habitual'] = [zona(v, e) for e, v in resumen.mediana.items()]
resumen['peor zona'] = [zona(v, e) for e, v in resumen.maximo.items()]
resumen.join(equipos[['descripcion', 'potencia_kw']]).sort_values('maximo', ascending=False).head(6)`,n:16,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>horas</th>
      <th>mediana</th>
      <th>maximo</th>
      <th>zona habitual</th>
      <th>peor zona</th>
      <th>descripcion</th>
      <th>potencia_kw</th>
    </tr>
    <tr>
      <th>equipo</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>M-103</th>
      <td>167</td>
      <td>1.725</td>
      <td>8.583</td>
      <td>A</td>
      <td>D</td>
      <td>Tambor aglomerador AD-101</td>
      <td>450</td>
    </tr>
    <tr>
      <th>P-202A</th>
      <td>168</td>
      <td>2.354</td>
      <td>2.410</td>
      <td>B</td>
      <td>B</td>
      <td>Bomba de PLS a SX A</td>
      <td>750</td>
    </tr>
    <tr>
      <th>P-201A</th>
      <td>19</td>
      <td>2.362</td>
      <td>2.410</td>
      <td>B</td>
      <td>B</td>
      <td>Bomba de riego A</td>
      <td>900</td>
    </tr>
    <tr>
      <th>P-201B</th>
      <td>149</td>
      <td>2.362</td>
      <td>2.409</td>
      <td>B</td>
      <td>B</td>
      <td>Bomba de riego B (respaldo)</td>
      <td>900</td>
    </tr>
    <tr>
      <th>P-202B</th>
      <td>111</td>
      <td>2.302</td>
      <td>2.349</td>
      <td>B</td>
      <td>B</td>
      <td>Bomba de PLS a SX B (respaldo)</td>
      <td>750</td>
    </tr>
    <tr>
      <th>CV-101</th>
      <td>166</td>
      <td>2.228</td>
      <td>2.289</td>
      <td>A</td>
      <td>A</td>
      <td>Correa de alimentación</td>
      <td>315</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:30,tipo:"md",fuente:"Solo el tambor M-103 salió de la zona B. Un detector simple para todos los motores: la pendiente de la última hora, por mínimos cuadrados. Avisa si supera 0,25 mm/s por hora en un motor que lleva al menos dos horas andando (así no confunde una partida con una falla)."},{id:31,tipo:"code",fuente:`v = vib.pivot(index='fecha', columns='equipo', values='vibracion_mm_s')
marcha = vib.pivot(index='fecha', columns='equipo', values='estado').eq('RUN')
estable = marcha.rolling(24).sum() == 24  # 24 lecturas = 2 h seguidas andando

x = np.arange(12) * 5 / 60  # horas
x = x - x.mean()
pendiente = v.where(marcha).rolling(12).apply(lambda y: (x * (y - y.mean())).sum() / (x**2).sum(), raw=True)
aviso = (pendiente > 0.25) & estable
inicio = aviso & ~aviso.shift(1, fill_value=False)
avisos = inicio.stack().loc[lambda s: s].index.to_frame(index=False).rename(columns={'fecha': 'aviso de tendencia'})
avisos`,n:17,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>aviso de tendencia</th>
      <th>equipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2026-11-04 02:05:00</td>
      <td>M-103</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2026-11-08 10:05:00</td>
      <td>M-103</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:32,tipo:"md",fuente:"Dos avisos en la semana, los dos en M-103, ninguno en los otros quince motores. Ahora el pronóstico: con cada lectura nueva se ajusta un crecimiento exponencial a la última hora y se calcula a qué hora cruzaría el límite de disparo."},{id:33,tipo:"code",fuente:`m103 = v['M-103'].where(marcha['M-103'])
lim_c, lim_d = equipos.loc['M-103', ['limite_bc', 'limite_cd']].astype(float)
lim_disparo = 1.25 * lim_d


def pronostico(ahora, limite, lecturas=12):
    """Hora en que la vibración cruzaría \`limite\`, con lo visto hasta \`ahora\`."""
    base = m103.loc[: ahora - pd.Timedelta('3h')].tail(144).median()  # nivel sano: mediana de 12 h
    ventana = m103.loc[:ahora].tail(lecturas)
    horas = (ventana.index - ahora).total_seconds() / 3600
    tasa, nivel = np.polyfit(horas, np.log((ventana - base).clip(lower=1e-3)), 1)
    return ahora + pd.Timedelta(hours=(np.log(limite - base) - nivel) / tasa) if tasa > 0 else pd.NaT


def hora_real(patron, desde):
    f = bitacora[bitacora.mensaje.str.contains(patron) & (bitacora.fecha >= desde)].fecha
    return f.iloc[0] if len(f) else pd.NaT


alarma_c = activas[activas.alarma == 'M-103.VIB'].fecha
filas = []
for n, t0 in enumerate(avisos['aviso de tendencia'], 1):
    disparo = hora_real('M-103 disparado', t0)
    disparo = disparo if disparo - t0 < pd.Timedelta('12h') else pd.NaT
    cruce_c = alarma_c[alarma_c >= t0].iloc[0]
    for minutos in (60, 90, 120, 180):
        ahora = t0 + pd.Timedelta(minutes=minutos)
        if ahora >= cruce_c:
            continue
        p_c, p_disp = pronostico(ahora, lim_c), pronostico(ahora, lim_disparo)
        filas.append({'episodio': n, 'pronóstico hecho a las': ahora, 'zona C: error (min)': round((p_c - cruce_c).total_seconds() / 60), 'disparo pronosticado': p_disp.round('min'), 'disparo real': disparo.round('s'), 'disparo: error (min)': round((p_disp - disparo).total_seconds() / 60) if pd.notna(disparo) else None})
evaluacion = pd.DataFrame(filas).set_index(['episodio', 'pronóstico hecho a las'])
evaluacion`,n:18,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th>zona C: error (min)</th>
      <th>disparo pronosticado</th>
      <th>disparo real</th>
      <th>disparo: error (min)</th>
    </tr>
    <tr>
      <th>episodio</th>
      <th>pronóstico hecho a las</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" valign="top">1</th>
      <th>2026-11-04 03:05:00</th>
      <td>-19</td>
      <td>2026-11-04 05:40:00</td>
      <td>2026-11-04 06:24:22</td>
      <td>-44.0</td>
    </tr>
    <tr>
      <th>2026-11-04 03:35:00</th>
      <td>-3</td>
      <td>2026-11-04 06:11:00</td>
      <td>2026-11-04 06:24:22</td>
      <td>-14.0</td>
    </tr>
    <tr>
      <th>2026-11-04 04:05:00</th>
      <td>-4</td>
      <td>2026-11-04 06:07:00</td>
      <td>2026-11-04 06:24:22</td>
      <td>-18.0</td>
    </tr>
    <tr>
      <th rowspan="3" valign="top">2</th>
      <th>2026-11-08 11:05:00</th>
      <td>-6</td>
      <td>2026-11-08 13:59:00</td>
      <td>NaT</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2026-11-08 11:35:00</th>
      <td>-6</td>
      <td>2026-11-08 14:00:00</td>
      <td>NaT</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2026-11-08 12:05:00</th>
      <td>0</td>
      <td>2026-11-08 14:15:00</td>
      <td>NaT</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:34,tipo:"code",fuente:`t0 = avisos['aviso de tendencia'].iloc[0]
disparo = hora_real('M-103 disparado', t0)
tramo = m103.loc[t0 - pd.Timedelta('3h') : disparo]
ahora = t0 + pd.Timedelta('90min')
base = m103.loc[: ahora - pd.Timedelta('3h')].tail(144).median()
ventana = m103.loc[:ahora].tail(12)
tasa, nivel = np.polyfit((ventana.index - ahora).total_seconds() / 3600, np.log(ventana - base), 1)
futuro = pd.date_range(ahora, pronostico(ahora, lim_disparo), freq='5min')

fig, ax = plt.subplots(figsize=(9, 3.6))
for limite, color, nombre in [(lim_c, ALERTA, 'zona C'), (lim_d, GRAVE, 'zona D'), (lim_disparo, CRITICO, 'disparo')]:
    ax.axhline(limite, color=color, lw=1)
    ax.annotate(f'{nombre} · {limite:.1f}', (tramo.index[0], limite), xytext=(2, 3), textcoords='offset points', fontsize=8.5, color=plt.rcParams['axes.labelcolor'])
ax.plot(tramo.index, tramo, color=AZUL, label='medido')
ax.plot(futuro, base + np.exp(nivel + tasa * (futuro - ahora).total_seconds() / 3600), color=NARANJA, lw=1.5, ls=(0, (4, 3)), label=f'pronóstico hecho a las {ahora:%H:%M}')
ax.axvline(t0, color=TENUE, lw=0.8)
ax.annotate('aviso de tendencia', (t0, 0.4), xytext=(4, 0), textcoords='offset points', fontsize=8.5, color=TENUE)
ax.set_ylim(0, lim_disparo * 1.08)
ax.set_title(f'M-103, primer episodio ({t0:%d-%m}): vibración (mm/s) y pronóstico')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%H:%M'))
ax.legend(loc='lower right')
ax.margins(x=0.01)
plt.show()

antes_alarma = (alarma_c[alarma_c >= t0].iloc[0] - t0).total_seconds() / 60
print(f'Aviso de tendencia: {(disparo - t0).total_seconds() / 3600:.1f} h antes del disparo. La alarma de zona C llegó {antes_alarma:.0f} min después del aviso.')`,n:19,salidas:[{t:"img",claro:"fig/c34-0.png",oscuro:"fig/o34-0.png",w:1312,h:535},{t:"texto",texto:`Aviso de tendencia: 4.3 h antes del disparo. La alarma de zona C llegó 155 min después del aviso.
`}]},{id:35,tipo:"md",fuente:"**Lectura.** La tendencia avisa horas antes que la alarma por límite, y desde la primera hora pone el disparo dentro de un margen de menos de una hora, siempre por el lado temprano. En el segundo episodio mantenimiento cambió el rodamiento antes del disparo, así que ahí solo se puede comprobar el cruce a zona C. Son dos episodios del mismo motor y de un simulador: el método queda mostrado, no validado para una planta."},{id:36,tipo:"md",fuente:`## 6. El pHmetro: se descalibró o cambió el proceso

El pH del PLS se mide en línea (AIT-207) y el laboratorio toma una muestra cada 2 horas. Un detector estadístico mira solo el sensor: compara su media de 30 minutos con la mediana de las 6 horas anteriores y avisa si se separan más de 0,015 pH durante 10 minutos seguidos. En las horas tranquilas del lunes esa diferencia nunca pasó de 0,004.`},{id:37,tipo:"code",fuente:`ph = h['AIT-207']
lab = pd.read_csv(DATOS / 'laboratorio.csv', parse_dates=['fecha']).query("analito == 'pH'").set_index('fecha').valor

corto = ph.rolling(30, min_periods=20).mean()
referencia = ph.rolling(360, min_periods=120).median().shift(60)
separacion = corto - referencia
fuera_banda = (separacion.abs() > 0.015).rolling(10).sum() == 10
inicios = fuera_banda.index[fuera_banda & ~fuera_banda.shift(1, fill_value=False)]

calibraciones = bitacora[bitacora.mensaje.str.contains('AIT-207 calibrado')].fecha
filas = []
for t in inicios:
    muestra = lab[lab.index >= t].index[0]  # primera muestra de laboratorio después del aviso
    dif = ph.loc[muestra - pd.Timedelta('5min') : muestra].mean() - lab[muestra]
    tras_calibrar = ((t - calibraciones) > pd.Timedelta(0)) & ((t - calibraciones) < pd.Timedelta('45min'))
    veredicto = 'calibración (bitácora)' if tras_calibrar.any() else 'sensor' if abs(dif) > 0.05 else 'proceso'
    filas.append({'aviso': t, 'muestra de laboratorio': muestra, 'sensor − laboratorio': round(dif, 3), 'veredicto': veredicto})
avisos_ph = pd.DataFrame(filas)
avisos_ph`,n:20,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>aviso</th>
      <th>muestra de laboratorio</th>
      <th>sensor − laboratorio</th>
      <th>veredicto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2026-11-03 10:29:00</td>
      <td>2026-11-03 11:50:00</td>
      <td>0.216</td>
      <td>sensor</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2026-11-05 09:50:00</td>
      <td>2026-11-05 09:50:00</td>
      <td>0.001</td>
      <td>proceso</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2026-11-07 09:45:00</td>
      <td>2026-11-07 09:50:00</td>
      <td>-0.002</td>
      <td>proceso</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2026-11-07 17:48:00</td>
      <td>2026-11-07 17:50:00</td>
      <td>0.076</td>
      <td>sensor</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2026-11-07 23:23:00</td>
      <td>2026-11-07 23:50:00</td>
      <td>0.002</td>
      <td>calibración (bitácora)</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:38,tipo:"code",fuente:`fig, ax = plt.subplots(figsize=(9, 3.3))
ax.plot(ph.index, ph.rolling(10, min_periods=5).mean(), color=AZUL, label='sensor AIT-207 (media de 10 min)')
ax.plot(lab.index, lab, ls='none', marker='o', ms=4.5, mfc=NARANJA, mec=plt.rcParams['axes.facecolor'], mew=1, label='laboratorio')
for a in avisos_ph.itertuples():
    ax.axvline(a.aviso, color=TENUE, lw=0.8)
    ax.annotate(a.veredicto.split(' ')[0], (a.aviso, 2.36), xytext=(3, 0), textcoords='offset points', fontsize=8, color=TENUE, rotation=90, va='top')
ax.set_ylim(1.85, 2.37)
ax.set_title('pH del PLS: sensor, laboratorio y avisos del detector')
ax.legend(loc='lower right', bbox_to_anchor=(1, 1), ncols=2, borderaxespad=0.2)
ax.margins(x=0)
plt.show()`,n:21,salidas:[{t:"img",claro:"fig/c38-0.png",oscuro:"fig/o38-0.png",w:1312,h:491}]},{id:39,tipo:"md",fuente:"**Contra lo sembrado.** Se compara cada aviso con lo que el generador hizo en ese momento, y con la hora en que saltó la alarma que ya trae la planta (desviación mayor a 0,15 pH contra el laboratorio)."},{id:40,tipo:"code",fuente:`fallas = pd.DataFrame(verdad['fallas'])
fallas['inicio'] = pd.to_datetime(fallas.inicio)
causa = {'ph': 'sensor', 'ph_lenta': 'sensor', 'ore': 'proceso'}
sembradas = fallas[fallas.id.isin(causa)].assign(real=lambda d: d.id.map(causa))
alarma_ph = activas[activas.alarma == 'AIT-207.DEV'].fecha

filas = []
for f in sembradas.itertuples():
    a = avisos_ph[avisos_ph.aviso >= f.inicio].iloc[0]
    al = alarma_ph[alarma_ph >= f.inicio]
    con_alarma = f.real == 'sensor' and len(al) > 0
    filas.append({'sembrado': f.nombre, 'inicio': f.inicio, 'aviso (min después)': round((a.aviso - f.inicio).total_seconds() / 60), 'alarma de planta (min después)': round((al.iloc[0] - f.inicio).total_seconds() / 60) if con_alarma else None, 'veredicto': a.veredicto, 'real': f.real})
resultado_ph = pd.DataFrame(filas)
print(f'Veredictos correctos: {(resultado_ph.veredicto == resultado_ph.real).sum()} de {len(resultado_ph)}')
resultado_ph`,n:22,salidas:[{t:"texto",texto:`Veredictos correctos: 4 de 4
`},{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>sembrado</th>
      <th>inicio</th>
      <th>aviso (min después)</th>
      <th>alarma de planta (min después)</th>
      <th>veredicto</th>
      <th>real</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Deriva del pHmetro AIT-207</td>
      <td>2026-11-03 10:00:00</td>
      <td>29</td>
      <td>110.0</td>
      <td>sensor</td>
      <td>sensor</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Cambio de mineral</td>
      <td>2026-11-05 09:00:00</td>
      <td>50</td>
      <td>NaN</td>
      <td>proceso</td>
      <td>proceso</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Vuelve el mineral original</td>
      <td>2026-11-07 09:00:00</td>
      <td>45</td>
      <td>NaN</td>
      <td>proceso</td>
      <td>proceso</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Deriva lenta del pHmetro AIT-207</td>
      <td>2026-11-07 15:00:00</td>
      <td>168</td>
      <td>410.0</td>
      <td>sensor</td>
      <td>sensor</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:41,tipo:"md",fuente:"**Lectura.** El detector solo no distingue un sensor que deriva de un mineral distinto: en los dos casos el valor se mueve. La muestra de laboratorio lo resuelve. Si el sensor y el laboratorio coinciden, cambió el proceso; si no, es el instrumento. En la deriva rápida el aviso llega bastante antes que la alarma de planta. En la lenta también, pero ahí la ganancia viene sobre todo de usar un umbral más fino contra el laboratorio (0,05 en vez de 0,15 pH). Ese umbral se eligió mirando esta semana; habría que probarlo con otra."},{id:42,tipo:"md",fuente:`## 7. Anticipar la producción cuatro horas antes

El cobre tarda horas en pasar de las pilas a la nave, así que lo que se ve aguas arriba debería anticipar el cátodo. El objetivo es la producción media de la hora que termina cuatro horas después. La vara es la persistencia: suponer que en cuatro horas se producirá lo mismo que ahora. Se entrena con lo anterior a un corte en el tiempo y se evalúa con lo posterior.

**Primer intento: con la semana de este cuaderno.**`},{id:43,tipo:"code",fuente:`from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.linear_model import RidgeCV
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

ENTRADAS = ['AIT-206', 'FIT-205', 'AIT-208', 'KY-303', 'KY-304', 'AIT-302', 'AIT-405', 'TIT-403', 'AIT-407', 'IIT-401', 'KY-406', 'KY-405']


def preparar(m10, horas):
    """Tabla para pronosticar: entradas de ahora, su cambio reciente, el objetivo a \`horas\` y la persistencia."""
    X = m10[ENTRADAS].copy()
    for tag in ('AIT-206', 'KY-304', 'AIT-405'):
        X[tag + ' cambio 2 h'] = m10[tag] - m10[tag].shift(12)
        X[tag + ' cambio 6 h'] = m10[tag] - m10[tag].shift(36)
    ahora = m10['KY-405'].rolling(6).mean()
    return X.assign(objetivo=ahora.shift(-6 * horas), persistencia=ahora).dropna()


def evaluar(tabla, corte, horas):
    """Entrena antes del corte y mide después, dejando un hueco igual al horizonte."""
    entrena, prueba = tabla.loc[:corte], tabla.loc[pd.Timestamp(corte) + pd.Timedelta(hours=horas) :]
    Xe, Xp = entrena.drop(columns=['objetivo', 'persistencia']), prueba.drop(columns=['objetivo', 'persistencia'])
    ridge = make_pipeline(StandardScaler(), RidgeCV(alphas=np.logspace(-2, 3, 12))).fit(Xe, entrena.objetivo)
    boosting = HistGradientBoostingRegressor(max_depth=3, learning_rate=0.05, max_iter=300, random_state=0).fit(Xe, entrena.objetivo)
    return prueba.assign(ridge=ridge.predict(Xp), boosting=boosting.predict(Xp)), len(entrena)


def error(p, columna, filas=slice(None)):
    return float((p.objetivo - p[columna]).abs()[filas].mean())


filas = []
for corte in ('2026-11-06 08:00', '2026-11-07 00:00'):
    p, n = evaluar(preparar(h.resample('10min').mean(), 4), corte, 4)
    filas.append({'corte': corte, 'horas de entrenamiento': round(n / 6), 'persistencia': error(p, 'persistencia'), 'regresión ridge': error(p, 'ridge'), 'gradient boosting': error(p, 'boosting')})
una_semana = pd.DataFrame(filas).set_index('corte')
una_semana`,n:23,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>horas de entrenamiento</th>
      <th>persistencia</th>
      <th>regresión ridge</th>
      <th>gradient boosting</th>
    </tr>
    <tr>
      <th>corte</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2026-11-06 08:00</th>
      <td>85</td>
      <td>0.235</td>
      <td>0.343</td>
      <td>0.342</td>
    </tr>
    <tr>
      <th>2026-11-07 00:00</th>
      <td>101</td>
      <td>0.166</td>
      <td>0.559</td>
      <td>0.409</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:44,tipo:"md",fuente:"No alcanza: ninguno de los dos modelos le gana a la persistencia, en ninguno de los dos cortes. La semana trae un solo cambio de mineral: no hay de dónde aprender cómo responde la planta.\n\n**Segundo intento: con ocho semanas.** El mismo motor se corrió ocho semanas con 15 cambios de mineral a intervalos irregulares (`herramientas/genera_largo.js`). El archivo trae medias de 10 minutos. Se entrena con las seis primeras semanas y se prueba con las dos últimas, a 2, 4 y 8 horas. Aparte se mide el error en los momentos que importan: cuando la producción cambia más de 0,3 t/h dentro del horizonte."},{id:45,tipo:"code",fuente:`largo = pd.read_csv(DATOS / 'historiador_8_semanas.csv', parse_dates=['fecha'], index_col='fecha')
corte_largo = largo.index[0] + pd.Timedelta(weeks=6)

filas, pruebas = [], {}
for horas in (2, 4, 8):
    p, n = evaluar(preparar(largo, horas), corte_largo, horas)
    cambia = (p.objetivo - p.persistencia).abs() > 0.3
    pruebas[horas] = p
    filas.append({
        'horizonte (h)': horas,
        'persistencia': error(p, 'persistencia'), 'regresión ridge': error(p, 'ridge'), 'gradient boosting': error(p, 'boosting'),
        'horas con cambio': round(cambia.sum() / 6),
        'persistencia, con cambio': error(p, 'persistencia', cambia), 'ridge, con cambio': error(p, 'ridge', cambia),
    })
ocho_semanas = pd.DataFrame(filas).set_index('horizonte (h)')
print(f'Entrenamiento: {largo.index[0]:%d-%m} a {corte_largo:%d-%m} · prueba: hasta {largo.index[-1]:%d-%m} · error absoluto medio en t/h')
ocho_semanas`,n:24,salidas:[{t:"texto",texto:`Entrenamiento: 07-09 a 19-10 · prueba: hasta 02-11 · error absoluto medio en t/h
`},{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>persistencia</th>
      <th>regresión ridge</th>
      <th>gradient boosting</th>
      <th>horas con cambio</th>
      <th>persistencia, con cambio</th>
      <th>ridge, con cambio</th>
    </tr>
    <tr>
      <th>horizonte (h)</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>0.038</td>
      <td>0.029</td>
      <td>0.047</td>
      <td>6</td>
      <td>1.069</td>
      <td>0.577</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.058</td>
      <td>0.033</td>
      <td>0.081</td>
      <td>14</td>
      <td>0.728</td>
      <td>0.271</td>
    </tr>
    <tr>
      <th>8</th>
      <td>0.094</td>
      <td>0.083</td>
      <td>0.269</td>
      <td>40</td>
      <td>0.541</td>
      <td>0.264</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:46,tipo:"code",fuente:`p4 = pruebas[4]
a_la_hora = lambda col: p4[col].set_axis(p4.index + pd.Timedelta('4h'))  # cada pronóstico, puesto en la hora que pronostica
real = a_la_hora('objetivo')
# el cambio de mineral más grande del período de prueba, según el registro de la campaña
eventos = pd.read_csv(DATOS / 'historiador_8_semanas_eventos.csv', parse_dates=['fecha']).query("evento == 'mineral'")
eventos['salto'] = eventos.factor_mineral.diff().abs()
cambio = eventos[eventos.fecha > corte_largo + pd.Timedelta('1D')].sort_values('salto').iloc[-1]
tramo = slice(cambio.fecha - pd.Timedelta('4h'), cambio.fecha + pd.Timedelta('32h'))

fig, ax = plt.subplots(figsize=(9, 3.4))
ax.plot(real[tramo].index, real[tramo], color=TENUE, lw=2.4, label='producción real')
ax.plot(a_la_hora('persistencia')[tramo].index, a_la_hora('persistencia')[tramo], color=NARANJA, label='persistencia (4 h antes)')
ax.plot(a_la_hora('ridge')[tramo].index, a_la_hora('ridge')[tramo], color=AZUL, label='modelo (4 h antes)')
ax.axvline(cambio.fecha, color=TENUE, lw=0.8)
ax.annotate('cambia el mineral', (cambio.fecha, real[tramo].max()), xytext=(4, 0), textcoords='offset points', va='top', fontsize=8.5, color=TENUE)
ax.set_title('Un cambio de mineral del período de prueba: cátodo (t/h) y lo pronosticado 4 h antes')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%d-%m %H:%M'))
ax.legend(loc='best')
ax.margins(x=0.01)
plt.show()

mejora = 100 * (1 - ocho_semanas.loc[4, 'ridge, con cambio'] / ocho_semanas.loc[4, 'persistencia, con cambio'])
print(f"A 4 h, cuando la producción cambia: persistencia {ocho_semanas.loc[4, 'persistencia, con cambio']:.2f} t/h, modelo {ocho_semanas.loc[4, 'ridge, con cambio']:.2f} t/h ({mejora:.0f} % menos error)")`,n:25,salidas:[{t:"img",claro:"fig/c46-0.png",oscuro:"fig/o46-0.png",w:1312,h:506},{t:"texto",texto:`A 4 h, cuando la producción cambia: persistencia 0.73 t/h, modelo 0.27 t/h (63 % menos error)
`}]},{id:47,tipo:"md",fuente:"**Lectura.** Con ocho semanas, sí. La regresión le gana a la persistencia en los tres horizontes, y la diferencia grande está donde sirve: cuando cambia el mineral, el error a cuatro horas baja a menos de la mitad. Eso alcanza para avisar al turno que viene que la producción va a caer, y cuánto. Un disparo del rectificador no se anticipa con estos datos: ahí ningún método sirve. El gradient boosting, más flexible, pierde contra el modelo simple: con estos datos, más complejidad no ayuda. Y el primer intento deja la otra lección: una semana no basta; hace falta historia con varios cambios."},{id:48,tipo:"md",fuente:`## Qué cambia con el análisis

Las cifras de cada caso, tomadas de las variables que calculó el cuaderno.`},{id:49,tipo:"code",fuente:`min_alarma_disparo = (disparo - alarma_c[alarma_c >= t0].iloc[0]).total_seconds() / 60
sensor = resultado_ph[resultado_ph.real == 'sensor']
contraste = pd.DataFrame(
    [
        ['Datos confiables', f'{int(sin_dato.values.sum() + fuera.values.sum() + congelado.values.sum())} celdas malas sin marcar', f'{int(sembrado.encontrado.sum())} de {len(sembrado)} defectos encontrados, {len(de_mas)} de más'],
        ['Qué pasó en la semana', f'{bajo_plan:.0f} t bajo el plan', f'{100 * por_mineral / bajo_plan:.0f} % en turnos con mineral distinto'],
        ['Alarmas', f'{len(activas)} anuncios', f'{int(separadas.sum())} con retardo de 60 s'],
        ['Vibración', f'aviso {min_alarma_disparo / 60:.1f} h antes del disparo (alarma por límite)', f'aviso {(disparo - t0).total_seconds() / 3600:.1f} h antes (tendencia)'],
        ['pH: sensor o proceso', ' y '.join(f'{v:.0f}' for v in sensor['alarma de planta (min después)']) + ' min hasta la alarma de planta', ' y '.join(f'{v:.0f}' for v in sensor['aviso (min después)']) + ' min hasta el aviso'],
        ['Anticipar la producción', f"{ocho_semanas.loc[4, 'persistencia, con cambio']:.2f} t/h de error a 4 h cuando cambia", f"{ocho_semanas.loc[4, 'ridge, con cambio']:.2f} t/h"],
    ],
    columns=['caso de uso', 'sin el análisis', 'con el análisis'],
).set_index('caso de uso')
contraste`,n:26,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>sin el análisis</th>
      <th>con el análisis</th>
    </tr>
    <tr>
      <th>caso de uso</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Datos confiables</th>
      <td>580 celdas malas sin marcar</td>
      <td>7 de 7 defectos encontrados, 0 de más</td>
    </tr>
    <tr>
      <th>Qué pasó en la semana</th>
      <td>121 t bajo el plan</td>
      <td>79 % en turnos con mineral distinto</td>
    </tr>
    <tr>
      <th>Alarmas</th>
      <td>50 anuncios</td>
      <td>28 con retardo de 60 s</td>
    </tr>
    <tr>
      <th>Vibración</th>
      <td>aviso 1.7 h antes del disparo (alarma por límite)</td>
      <td>aviso 4.3 h antes (tendencia)</td>
    </tr>
    <tr>
      <th>pH: sensor o proceso</th>
      <td>110 y 410 min hasta la alarma de planta</td>
      <td>29 y 168 min hasta el aviso</td>
    </tr>
    <tr>
      <th>Anticipar la producción</th>
      <td>0.73 t/h de error a 4 h cuando cambia</td>
      <td>0.27 t/h</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:50,tipo:"md",fuente:"Son datos de un simulador, con fallas más rápidas que las de una planta y un operador que sigue un guion. Lo que se traslada a una planta real es el procedimiento: probar los datos antes de usarlos, medir cada método contra lo que ya existe (la alarma, la muestra de laboratorio, la persistencia) y publicar también lo que no funcionó."},{id:51,tipo:"md",fuente:`## Registro de la corrida

Lo necesario para repetir este cuaderno y comparar con una corrida futura: de qué datos salió, con qué versiones y qué números dio.`},{id:52,tipo:"code",fuente:`import platform

import matplotlib
import sklearn

registro = {
    'datos': {'desde': manifiesto['desde'], 'hasta': manifiesto['hasta'], 'motor_sha256': manifiesto['motor_sha256'][:12], 'historiador_sha256': manifiesto['archivos']['historiador.csv']['sha256'][:12]},
    'versiones': {'python': platform.python_version(), 'pandas': pd.__version__, 'numpy': np.__version__, 'scikit-learn': sklearn.__version__, 'matplotlib': matplotlib.__version__},
    'resultados': {
        'calidad_defectos_encontrados': f'{int(sembrado.encontrado.sum())} de {len(sembrado)}',
        'calidad_tramos_de_mas': int(len(de_mas)),
        'celdas_validas_pct': round(100 * h.notna().values.mean(), 2),
        'catodo_semana_t': round(float(turnos.catodo_t.sum()), 1),
        'alarmas_por_10min': round(float(por_10min.mean()), 2),
        'alarmas_que_repican': repican,
        'vibracion_avisos': len(avisos),
        'vibracion_error_disparo_min': evaluacion['disparo: error (min)'].dropna().astype(int).tolist(),
        'ph_veredictos_correctos': f'{int((resultado_ph.veredicto == resultado_ph.real).sum())} de {len(resultado_ph)}',
        'baja_en_turnos_con_mineral_distinto_pct': round(float(100 * por_mineral / bajo_plan)),
        'pronostico_una_semana_gana': bool((una_semana['regresión ridge'] < una_semana['persistencia']).all()),
        'pronostico_8_semanas_error_4h': {'persistencia': round(ocho_semanas.loc[4, 'persistencia'], 3), 'ridge': round(ocho_semanas.loc[4, 'regresión ridge'], 3)},
        'pronostico_8_semanas_error_4h_con_cambio': {'persistencia': round(ocho_semanas.loc[4, 'persistencia, con cambio'], 2), 'ridge': round(ocho_semanas.loc[4, 'ridge, con cambio'], 2)},
    },
}
print(json.dumps(registro, indent=2, ensure_ascii=False))`,n:27,salidas:[{t:"texto",texto:`{
  "datos": {
    "desde": "2026-11-02 08:00:00",
    "hasta": "2026-11-09 08:00:00",
    "motor_sha256": "280b343ca785",
    "historiador_sha256": "b47e0996af14"
  },
  "versiones": {
    "python": "3.13.18",
    "pandas": "3.0.5",
    "numpy": "2.5.3",
    "scikit-learn": "1.9.1",
    "matplotlib": "3.11.2"
  },
  "resultados": {
    "calidad_defectos_encontrados": "7 de 7",
    "calidad_tramos_de_mas": 0,
    "celdas_validas_pct": 99.76,
    "catodo_semana_t": 962.4,
    "alarmas_por_10min": 0.05,
    "alarmas_que_repican": [
      "M-103.VIB",
      "M-103.VIBH"
    ],
    "vibracion_avisos": 2,
    "vibracion_error_disparo_min": [
      -44,
      -14,
      -18
    ],
    "ph_veredictos_correctos": "4 de 4",
    "baja_en_turnos_con_mineral_distinto_pct": 79,
    "pronostico_una_semana_gana": false,
    "pronostico_8_semanas_error_4h": {
      "persistencia": 0.058,
      "ridge": 0.033
    },
    "pronostico_8_semanas_error_4h_con_cambio": {
      "persistencia": 0.73,
      "ridge": 0.27
    }
  }
}
`}]}],ch={python:"3.13.18",pandas:"3.0.5"},fh="2026-11-16",ph=25,hh=18,Kt={celdas:dh,versiones:ch,ejecutado:fh,descarga_mb:ph,sklearn_mb:hh},mh=[{nombre:"historiador.csv",que:"Historiador de proceso: una fila por minuto, una columna por tag",sistema:"DCS / historiador",filas:10071,bytes:3068198,sha256:"b47e0996af14ea18a14640c85957401c8b7391b3cc41d7312e38ca03644eb9f8",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"WIT-101",tipo:"decimal"},{nombre:"SIT-101",tipo:"decimal"},{nombre:"FIT-102",tipo:"decimal"},{nombre:"KY-102",tipo:"decimal"},{nombre:"FIT-104",tipo:"decimal"},{nombre:"AIT-105",tipo:"decimal"},{nombre:"LIT-103",tipo:"decimal"},{nombre:"PIT-202",tipo:"decimal"},{nombre:"FIT-211",tipo:"decimal"},{nombre:"FIT-212",tipo:"decimal"},{nombre:"FIT-213",tipo:"decimal"},{nombre:"FIT-200",tipo:"decimal"},{nombre:"LIT-201",tipo:"decimal"},{nombre:"FIT-206",tipo:"decimal"},{nombre:"FIT-203",tipo:"decimal"},{nombre:"LIT-204",tipo:"decimal"},{nombre:"AIT-206",tipo:"decimal"},{nombre:"AIT-207",tipo:"decimal"},{nombre:"FIT-205",tipo:"decimal"},{nombre:"AIT-208",tipo:"decimal"},{nombre:"FIT-301",tipo:"decimal"},{nombre:"KY-301",tipo:"decimal"},{nombre:"AIT-302",tipo:"decimal"},{nombre:"KY-303",tipo:"decimal"},{nombre:"LIT-303",tipo:"decimal"},{nombre:"AIT-309",tipo:"decimal"},{nombre:"KY-304",tipo:"decimal"},{nombre:"IIT-401",tipo:"decimal"},{nombre:"EIT-401",tipo:"decimal"},{nombre:"JIT-401",tipo:"decimal"},{nombre:"KY-401",tipo:"decimal"},{nombre:"KY-402",tipo:"decimal"},{nombre:"FIT-402",tipo:"decimal"},{nombre:"TIT-403",tipo:"decimal"},{nombre:"AIT-405",tipo:"decimal"},{nombre:"AIT-406",tipo:"decimal"},{nombre:"AIT-407",tipo:"decimal"},{nombre:"AIT-408",tipo:"decimal"},{nombre:"LIT-401",tipo:"decimal"},{nombre:"KY-405",tipo:"decimal"},{nombre:"KY-406",tipo:"decimal"},{nombre:"KY-407",tipo:"decimal"},{nombre:"FIT-404",tipo:"decimal"},{nombre:"FIT-409",tipo:"decimal"},{nombre:"JIT-500",tipo:"decimal"},{nombre:"KY-501",tipo:"decimal"},{nombre:"KY-502",tipo:"decimal"},{nombre:"LIT-501",tipo:"decimal"},{nombre:"LIT-502",tipo:"decimal"}],muestra:[["2026-11-02 08:00:00",1751.1,77.8,18.71,20.1,120,9.15,55,3.998,732.7,729.9,733.8,2197.3,2.998,65.6,2130.5,2.998,3.25,1.895,2129.9,.227,1919.2,.898,5.633,93.11,.281,146.5,6.417,36.67,313.8,11.51,304.3,1.963,999.4,44.95,43.95,182,700.3,149.7,62.2,6.579,94.94,1739.6,52.4,6.96,14.33,.859,8.52,1398.6,3008.9],["2026-11-02 08:01:00",1753.1,76.3,18.46,19.48,119.4,9.14,54.2,3.968,733,733.6,731.5,2190.3,3.011,66.3,2135,3.002,3.233,1.91,2136.1,.226,1921.8,.898,5.674,92.97,.28,148.2,6.435,36.74,313.7,11.53,306.4,1.963,1006,45.02,43.97,182.1,694.2,150,62,6.609,94.91,1737.7,52.5,7,14.31,.86,8.48,1403.3,3007.9],["2026-11-02 08:02:00",1799.8,77.1,18.86,19.83,121.3,9.2,53.9,3.993,732.7,734.9,735.8,2198.6,3.001,65.5,2134.3,2.997,3.239,1.889,2134.9,.22,1916.9,.903,5.65,93.01,.281,151.8,6.432,36.69,313.3,11.53,304.8,1.961,1000.5,45.03,43.91,182.1,702.8,149.6,61.8,6.606,94.97,1748.3,52.5,7,14.3,.859,8.49,1398.4,3017.1],["2026-11-02 08:03:00",1629,77,18.52,20.17,119,9.25,53.2,3.958,729.1,737.1,731.8,2208.6,3.002,65.7,2129.2,2.988,3.236,1.897,2126.8,.229,1917.9,.903,5.657,93.06,.281,145.8,6.418,36.69,313.3,11.48,305.8,1.959,1004,44.94,43.9,182.1,696.1,150.3,61.9,6.587,94.98,1744.2,52.6,6.96,14.29,.86,8.51,1400.1,3005.1],["2026-11-02 08:04:00",1656.1,76.8,18.34,19.97,118,9.24,53.1,3.984,734,735.4,730,2195.3,2.984,66.2,2128,3.004,3.244,1.904,2137.8,.228,1930.6,.901,5.677,92.9,.282,149.5,6.404,36.58,313.1,11.48,305.4,1.962,1001.7,45,43.94,182.1,705.6,150.6,62.2,6.591,94.93,1743,52.2,7,14.27,.859,8.51,1400.5,3001.8],["2026-11-02 08:05:00",1625.5,78.3,18.03,20.59,115.9,9.15,52.4,3.987,732.5,735,733,2204.8,3.013,65.9,2138.4,3.005,3.249,1.903,2131.2,.225,1915,.901,5.649,92.98,.282,149.4,6.443,36.54,312.6,11.51,305.8,1.961,996.8,45.06,43.88,182.3,698.4,149.9,62.1,6.602,94.87,1736.5,52.7,6.98,14.27,.859,8.52,1401.8,3004.3]]},{nombre:"alarmas.csv",que:"Registro de alarmas: activación, reconocimiento y normalización",sistema:"Sistema de alarmas",filas:129,bytes:13063,sha256:"36cbbac3eef793942ae6ff1317ebfc483708170168fb158ea691d19e06678692",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"alarma",tipo:"texto"},{nombre:"evento",tipo:"texto"},{nombre:"prioridad",tipo:"entero"},{nombre:"area",tipo:"entero"},{nombre:"tag",tipo:"texto"},{nombre:"tipo",tipo:"texto"},{nombre:"descripcion",tipo:"texto"}],muestra:[["2026-11-02 14:20:01","CV-101.TRIP","ACTIVA",1,100,"CV-101","DISC","CV-101 Correa de alimentación: disparo (cordón de emergencia)"],["2026-11-02 14:20:38","CV-101.TRIP","RECONOCE",1,100,"CV-101","DISC","CV-101 Correa de alimentación: disparo (cordón de emergencia)"],["2026-11-02 14:23:01","CV-101.TRIP","NORMALIZA",1,100,"CV-101","DISC","CV-101 Correa de alimentación: disparo"],["2026-11-03 03:10:01","P-201A.TRIP","ACTIVA",1,200,"P-201A","DISC","P-201A Bomba de riego A: disparo (sobrecorriente)"],["2026-11-03 03:11:37","P-201A.TRIP","RECONOCE",1,200,"P-201A","DISC","P-201A Bomba de riego A: disparo (sobrecorriente)"],["2026-11-03 03:45:01","P-201A.TRIP","NORMALIZA",1,200,"P-201A","DISC","P-201A Bomba de riego A: disparo"]]},{nombre:"bitacora.csv",que:"Bitácora: órdenes del operador, disparos, secuencias y mantenimiento",sistema:"Bitácora de sala de control",filas:487,bytes:33599,sha256:"0b642e7e21d13269c4cba7403edc0ab60c9b468377b9839b67353faaec8c75c9",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"quien",tipo:"texto"},{nombre:"clase",tipo:"texto"},{nombre:"mensaje",tipo:"texto"}],muestra:[["2026-11-02 11:50:00","Mantenimiento","op","Ronda manual de la nave: 8 celdas con cortocircuito encontradas"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 4"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 14"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 38"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 48"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 115"]]},{nombre:"vibraciones.csv",que:"Monitoreo de condición: una lectura cada 5 min por motor",sistema:"Monitoreo de condición",filas:32272,bytes:1476698,sha256:"5a3004d71d7f45b5cfaf4240ccc328baa5318a47b7f39440a3aff477b61aac65",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"equipo",tipo:"texto"},{nombre:"estado",tipo:"texto"},{nombre:"vibracion_mm_s",tipo:"decimal"},{nombre:"temperatura_c",tipo:"decimal"},{nombre:"corriente_a",tipo:"decimal"}],muestra:[["2026-11-02 08:00:00","M-103","RUN",1.723,54.6,33.5],["2026-11-02 08:00:00","CV-101","RUN",2.226,54.6,23.5],["2026-11-02 08:00:00","FD-101","RUN",1.382,54.6,53.5],["2026-11-02 08:00:00","P-102","RUN",1.376,54.6,10.7],["2026-11-02 08:00:00","P-104","RUN",1.343,54.6,39.2],["2026-11-02 08:00:00","P-201A","RUN",2.35,54.7,67.1]]},{nombre:"laboratorio.csv",que:"Laboratorio: pH del PLS cada 2 h y compósito de cátodo por turno",sistema:"Laboratorio",filas:147,bytes:5346,sha256:"63b95806c0a724ad02a6782653f5d18092052a321a7d1165085bb43cb911d4b0",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"muestra",tipo:"texto"},{nombre:"analito",tipo:"texto"},{nombre:"valor",tipo:"decimal"},{nombre:"unidad",tipo:"texto"}],muestra:[["2026-11-02 09:50:00","PLS","pH",1.9,"pH"],["2026-11-02 11:50:00","PLS","pH",1.9,"pH"],["2026-11-02 13:50:00","PLS","pH",1.9,"pH"],["2026-11-02 15:50:00","PLS","pH",1.9,"pH"],["2026-11-02 16:00:00","Cátodo","Pb",1.2,"ppm"],["2026-11-02 16:00:00","Cátodo","S",3,"ppm"]]},{nombre:"turnos.csv",que:"Cierre de turno: producción, consumos, pérdidas y alarmas",sistema:"Reporte de turno",filas:21,bytes:1381,sha256:"7ddc54029db765ccf91a9e669d28d7123187da93ee8471cc611d84dc87a4f17e",columnas:[{nombre:"fecha_cierre",tipo:"fecha y hora"},{nombre:"turno",tipo:"texto"},{nombre:"catodo_t",tipo:"decimal"},{nombre:"plan_t",tipo:"decimal"},{nombre:"energia_mwh",tipo:"decimal"},{nombre:"acido_t",tipo:"decimal"},{nombre:"mineral_t",tipo:"entero"},{nombre:"perdida_cortos_t",tipo:"decimal"},{nombre:"perdida_rectificador_t",tipo:"decimal"},{nombre:"detencion_min",tipo:"entero"},{nombre:"alarmas",tipo:"entero"}],muestra:[["2026-11-02 16:00:00","A",49.99,51.6,108.3,268.1,13411,.1,0,0,1],["2026-11-03 00:00:00","B",50.3,51.6,109,272,13600,.04,0,0,0],["2026-11-03 08:00:00","C",50.22,51.6,108.9,272,13600,.07,0,0,1],["2026-11-03 16:00:00","A",50.23,51.6,108.9,272,13600,.06,0,0,1],["2026-11-04 00:00:00","B",50.22,51.6,108.9,272,13600,.05,0,0,0],["2026-11-04 08:00:00","C",50.23,51.6,108.3,241.5,12079,.08,0,0,23]]},{nombre:"tags.csv",que:"Diccionario de tags: descripción, unidad, rango del instrumento y banda normal",sistema:"Configuración",filas:49,bytes:2567,sha256:"2dcb15bbecb5bc0f87eb6c89d06852c4bb92710ace8aa0305e92ae395cb26c25",columnas:[{nombre:"tag",tipo:"texto"},{nombre:"descripcion",tipo:"texto"},{nombre:"unidad",tipo:"texto"},{nombre:"area",tipo:"entero"},{nombre:"rango_min",tipo:"decimal"},{nombre:"rango_max",tipo:"decimal"},{nombre:"normal_min",tipo:"decimal"},{nombre:"normal_max",tipo:"decimal"}],muestra:[["WIT-101","Tonelaje en pesómetro","t/h",100,0,2500,1500,1900],["SIT-101","Velocidad alimentador","%",100,0,100,50,95],["FIT-102","Caudal de ácido","m³/h",100,0,30,14,23],["KY-102","Dosis real de ácido","kg/t",100,0,40,18,22],["FIT-104","Caudal de agua","m³/h",100,0,250,90,150],["AIT-105","Humedad del aglomerado","%",100,0,20,8,10.5]]},{nombre:"equipos.csv",que:"Motores: potencia, centro de control y límites de vibración ISO 20816-3",sistema:"Configuración",filas:16,bytes:1055,sha256:"77377423264f70eb70375f1d9b539dbc617ea2c8f3307b0305a3f1b2b77ba88c",columnas:[{nombre:"equipo",tipo:"texto"},{nombre:"descripcion",tipo:"texto"},{nombre:"area",tipo:"entero"},{nombre:"potencia_kw",tipo:"entero"},{nombre:"mcc",tipo:"texto"},{nombre:"grupo_iso",tipo:"entero"},{nombre:"limite_ab",tipo:"decimal"},{nombre:"limite_bc",tipo:"decimal"},{nombre:"limite_cd",tipo:"decimal"}],muestra:[["M-103","Tambor aglomerador AD-101",100,450,"MCC-100",1,2.3,4.5,7.1],["CV-101","Correa de alimentación",100,315,"MCC-100",1,2.3,4.5,7.1],["FD-101","Alimentador de mineral (VDF)",100,75,"MCC-100",2,1.4,2.8,4.5],["P-102","Bomba de ácido al tambor",100,15,"MCC-100",2,1.4,2.8,4.5],["P-104","Bomba de agua al tambor",100,55,"MCC-100",2,1.4,2.8,4.5],["P-201A","Bomba de riego A",200,900,"MCC-200",1,2.3,4.5,7.1]]},{nombre:"historiador_8_semanas.csv",que:"Campaña larga: ocho semanas con 15 cambios de mineral, medias de 10 minutos de 12 tags",sistema:"DCS / historiador",filas:8065,bytes:835255,sha256:"7a47983014659d6c75b867c01c46d5634ba7ac0b2ccc08fad61f51c4bada0bbc",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"AIT-206",tipo:"decimal"},{nombre:"FIT-205",tipo:"decimal"},{nombre:"AIT-208",tipo:"decimal"},{nombre:"KY-303",tipo:"decimal"},{nombre:"KY-304",tipo:"decimal"},{nombre:"AIT-302",tipo:"decimal"},{nombre:"AIT-405",tipo:"decimal"},{nombre:"TIT-403",tipo:"decimal"},{nombre:"AIT-407",tipo:"decimal"},{nombre:"IIT-401",tipo:"decimal"},{nombre:"KY-406",tipo:"decimal"},{nombre:"KY-405",tipo:"decimal"}],muestra:[["2026-09-07 08:00:00",3.223,2135.22,.2243,93.032,6.4455,5.6459,44.012,44.942,699.94,36.622,94.885,6.6335],["2026-09-07 08:10:00",3.2421,2132.77,.2271,92.979,6.4356,5.6562,43.924,44.989,700.91,36.585,94.923,6.5887],["2026-09-07 08:20:00",3.2666,2133.61,.231,92.891,6.4687,5.6889,43.865,44.993,699.87,36.337,94.931,6.5448],["2026-09-07 08:30:00",3.2776,2133.44,.2339,92.875,6.504,5.7028,43.833,44.993,699.72,36.113,94.877,6.4999],["2026-09-07 08:40:00",3.2914,2134.21,.237,92.772,6.5227,5.709,43.819,44.972,700.32,35.908,94.873,6.4622],["2026-09-07 08:50:00",3.3024,2134.91,.2393,92.77,6.5372,5.7194,43.811,45.005,699.31,35.692,94.877,6.4263]]},{nombre:"historiador_8_semanas_eventos.csv",que:"Campaña larga: cuándo cambió el mineral y cuándo disparó el rectificador",sistema:"DCS / historiador",filas:20,bytes:692,sha256:"8f7a694c5aefa33823fa8262049a62a53b83713b0cd5c71a3987498bd0febe70",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"evento",tipo:"texto"},{nombre:"factor_mineral",tipo:"decimal"}],muestra:[["2026-09-10 14:28:58","mineral",.86],["2026-09-13 10:41:42","mineral",.75],["2026-09-14 19:28:45","rectificador",null],["2026-09-17 06:38:11","mineral",.95],["2026-09-20 09:35:03","mineral",.98],["2026-09-23 13:52:07","rectificador",null]]}],Co={archivos:mh},gh=new Set("False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield".split(" ")),vh=new Set("print len range int float str bool list dict set tuple min max sum abs round sorted enumerate zip map any all isinstance open type".split(" ")),ga=e=>e.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),yh=/(#[^\n]*)|((?:[rfbRFB]{0,2})(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'))|(\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|([A-Za-z_]\w*)(?=(\s*\()?)|([\s\S])/g;function dl(e){let t="",n="";return e.replace(yh,(r,o,a,l,i,s,u)=>(o?t+=`<span class="tk-c">${ga(o)}</span>`:a?t+=`<span class="tk-s">${ga(a)}</span>`:l?t+=`<span class="tk-n">${l}</span>`:i?(gh.has(i)?t+=`<span class="tk-k">${i}</span>`:n==="def"||n==="class"?t+=`<span class="tk-d">${i}</span>`:vh.has(i)&&s?t+=`<span class="tk-b">${i}</span>`:s?t+=`<span class="tk-f">${i}</span>`:t+=i,n=i):t+=ga(u),r)),t}function xh(e){const t=new Worker(new URL("kernel.js",document.baseURI),{type:"module"}),n=new Map;let r=0;t.onmessage=a=>{const l=a.data;if(l.estado)return e(l.estado);const i=n.get(l.id);i&&(n.delete(l.id),l.ok?i.res(l):i.rej(new Error(l.error)))},t.onerror=a=>{n.forEach(l=>l.rej(new Error(a.message||"el kernel no pudo arrancar"))),n.clear()};const o=(a,l={},i)=>new Promise((s,u)=>{const c=++r;n.set(c,{res:s,rej:u}),t.postMessage({id:c,op:a,...l},i||[])});return{iniciar:a=>o("iniciar",a),ejecutar:a=>o("ejecutar",{codigo:a}),archivo:(a,l)=>o("archivo",{nombre:a,bytes:l},[l]),tema:a=>o("tema",{tema:a}),terminar:()=>t.terminate()}}const kh=""+new URL("logo-claro-DqBqOQ06.png",import.meta.url).href,_h=""+new URL("logo-oscuro-_7MOzZY0.png",import.meta.url).href,wh=X.lazy(()=>Np(()=>import("./Editor-YbP4rreV.js"),[],import.meta.url)),js="https://github.com/JSNN15/jsnn15.github.io/blob/main/cuaderno/",cl=e=>e.toLocaleString("es-CL"),Gd=e=>e>=1048576?`${(e/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(e/1024))} kB`,Sh=()=>document.documentElement.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),Eh=e=>e.replace(/<style[\s\S]*?<\/style>/g,"").replace(/ border="1"/g,"").replace(/ style="text-align: right;"/g,""),Th=e=>new Date(e+"T12:00:00").toLocaleDateString("es-CL",{day:"numeric",month:"long",year:"numeric"});M.use({gfm:!0});const Ch=e=>M.parse(e).replace(/<table>/g,'<div class="tabla"><table>').replace(/<\/table>/g,"</table></div>").replace(/<a href="http/g,'<a target="_blank" rel="noopener" href="http'),An=Kt.celdas.flatMap(e=>{const t=e.tipo==="md"&&e.fuente.match(/^## (.+)$/m);return t?[{id:e.id,titulo:t[1]}]:[]}),bh=["datos/manifiesto.json","datos/verdad.json",...Co.archivos.map(e=>"datos/"+e.nombre)],jh=Co.archivos.reduce((e,t)=>e+t.filas,0);function zh({s:e,tema:t,alt:n}){if(e.t==="texto")return g.jsx("pre",{className:"sal-texto"+(e.valor?" valor":""),children:e.texto});if(e.t==="error")return g.jsx("pre",{className:"sal-error",children:e.texto});if(e.t==="html")return g.jsx("div",{className:"sal-tabla",tabIndex:0,dangerouslySetInnerHTML:{__html:Eh(e.html)}});if(e.t==="img"){const r=e.png?`data:image/png;base64,${e.png}`:t==="dark"?e.oscuro:e.claro;return g.jsx("img",{className:"sal-img",src:r,width:Math.round(e.w/1.44),height:Math.round(e.h/1.44),alt:n,loading:"lazy"})}return null}function Nh({c:e,tema:t,vivo:n,verCodigo:r,alEjecutar:o,alCambiar:a,alQuitar:l}){if(e.tipo==="md")return g.jsx("div",{className:"celda md",id:"sec-"+e.id,dangerouslySetInnerHTML:{__html:e.html}});const i=e.vivo?e.vivo.salidas:e.salidas,s=e.estado?"*":e.vivo?e.vivo.n:e.n??" ",u=(e.fuente.match(/set_title\(f?['"]([^'"{]+)/)||[])[1],c=u?`Gráfico: ${u.trim()}`:"Gráfico generado por esta celda";return g.jsxs("div",{className:"celda codigo"+(e.estado?" "+e.estado:"")+(e.vivo?" viva":""),id:"celda-"+e.id,children:[r&&g.jsxs("div",{className:"entrada",children:[g.jsxs("div",{className:"margen",children:[g.jsxs("span",{className:"cuenta","aria-hidden":"true",children:["[",s,"]:"]}),g.jsx("button",{type:"button",className:"correr",onClick:()=>o(e.id),disabled:!!e.estado,"aria-label":`Ejecutar la celda ${e.n??"nueva"}`,title:"Ejecutar (Mayúsculas + Enter)",children:g.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14","aria-hidden":"true",children:g.jsx("path",{d:"M4 2.5v11l9-5.5z",fill:"currentColor"})})})]}),g.jsxs("div",{className:"fuente",children:[n?g.jsx(X.Suspense,{fallback:g.jsx("pre",{className:"py",dangerouslySetInnerHTML:{__html:dl(e.fuente)}}),children:g.jsx(wh,{valor:e.fuente,alCambiar:m=>a(e.id,m),alEjecutar:()=>o(e.id),etiqueta:`Código de la celda ${e.n??"nueva"}`})}):g.jsx("pre",{className:"py",tabIndex:0,dangerouslySetInnerHTML:{__html:dl(e.fuente)}}),e.nueva&&g.jsx("button",{type:"button",className:"quitar",onClick:()=>l(e.id),children:"Quitar celda"})]})]}),i.length>0&&g.jsxs("div",{className:"salida",children:[g.jsx("div",{className:"margen","aria-hidden":"true",children:e.vivo&&g.jsxs("span",{className:"sello",children:["en vivo",e.vivo.ms!=null&&g.jsx("i",{children:e.vivo.ms<1e3?e.vivo.ms+" ms":(e.vivo.ms/1e3).toFixed(1).replace(".",",")+" s"})]})}),g.jsx("div",{className:"cuerpo",children:i.map((m,h)=>g.jsx(zh,{s:m,tema:t,alt:c},h))})]})]})}function Ph(){const[e,t]=X.useState(0);return X.useEffect(()=>{const n=Date.now(),r=setInterval(()=>t(Math.round((Date.now()-n)/1e3)),1e3);return()=>clearInterval(r)},[]),g.jsxs("span",{className:"reloj",children:[e," s"]})}function Ih({a:e,alCerrar:t}){const n=X.useRef(null);if(X.useEffect(()=>{const o=n.current;e&&!o.open&&o.showModal()},[e]),!e)return null;const r=e.columnas.filter(o=>o.tipo==="fecha y hora").map(o=>`'${o.nombre}'`);return g.jsx("dialog",{ref:n,className:"vista",onClose:t,onClick:o=>o.target===n.current&&n.current.close(),"aria-labelledby":"vista-t",children:g.jsxs("div",{className:"vista-in",children:[g.jsxs("header",{children:[g.jsxs("div",{children:[g.jsx("p",{className:"rot",children:e.sistema}),g.jsx("h2",{id:"vista-t",children:e.nombre})]}),g.jsx("button",{type:"button",className:"cerrar",onClick:()=>n.current.close(),children:"Cerrar"})]}),g.jsxs("p",{children:[e.que,"."]}),g.jsxs("dl",{className:"ficha",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Filas"}),g.jsx("dd",{children:cl(e.filas)})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Columnas"}),g.jsx("dd",{children:e.columnas.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Tamaño"}),g.jsx("dd",{children:Gd(e.bytes)})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"SHA-256"}),g.jsxs("dd",{className:"mono",children:[e.sha256.slice(0,12),"…"]})]})]}),g.jsx("h3",{children:"Primeras filas"}),g.jsx("div",{className:"sal-tabla",tabIndex:0,children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsx("tr",{children:e.columnas.map(o=>g.jsxs("th",{children:[o.nombre,g.jsx("small",{children:o.tipo})]},o.nombre))})}),g.jsx("tbody",{children:e.muestra.map((o,a)=>g.jsx("tr",{children:o.map((l,i)=>g.jsx("td",{className:typeof l=="number"?"n":"",children:l==null?"":String(l)},i))},a))})]})}),g.jsx("h3",{children:"Cómo se lee"}),g.jsx("pre",{className:"py",dangerouslySetInnerHTML:{__html:dl(`pd.read_csv('datos/${e.nombre}'${r.length?`, parse_dates=[${r.join(", ")}]`:""})`)}}),g.jsx("p",{className:"pie-vista",children:g.jsxs("a",{href:"datos/"+e.nombre,download:!0,children:["Descargar ",e.nombre]})})]})})}function Lh(){const[e,t]=X.useState(Sh),[n,r]=X.useState(()=>Kt.celdas.map(b=>b.tipo==="md"?{...b,html:Ch(b.fuente)}:b)),[o,a]=X.useState({fase:"apagado",msg:""}),[l,i]=X.useState(!0),[s,u]=X.useState(null),[c,m]=X.useState(An[0]&&An[0].id),h=X.useRef(null),v=X.useRef(null),y=X.useRef(Promise.resolve()),_=X.useRef(new Set),P=X.useRef(0),f=X.useRef(n);f.current=n;const d=o.fase!=="apagado"&&o.fase!=="error",p=(b,A)=>r(B=>B.map(w=>w.id===b?{...w,...typeof A=="function"?A(w):A}:w)),x=()=>{const b=e==="dark"?"light":"dark";document.documentElement.dataset.theme=b;try{localStorage.setItem("tema",b)}catch{}t(b),h.current&&o.fase==="listo"&&h.current.tema(b).catch(()=>{})};X.useEffect(()=>{let b=0;const A=()=>{b=0;let w=An[0].id;for(const z of An){const N=document.getElementById("sec-"+z.id);N&&N.getBoundingClientRect().top<140&&(w=z.id)}m(w)},B=()=>b||(b=requestAnimationFrame(A));return addEventListener("scroll",B,{passive:!0}),A(),()=>removeEventListener("scroll",B)},[]);const S=()=>{if(v.current)return v.current;a({fase:"arrancando",msg:"Bajando Python (paso 1 de 3)"});const b=xh(A=>a(B=>({...B,msg:A})));return h.current=b,v.current=b.iniciar({raiz:new URL(".",document.baseURI).href,archivos:bh,tema:e}).then(A=>(a({fase:"listo",msg:"",versiones:A.versiones}),b)).catch(A=>{throw b.terminar(),h.current=v.current=null,a({fase:"error",msg:`No se pudo arrancar Python en este navegador: ${A.message}. Las salidas guardadas siguen disponibles.`}),A}),v.current},C=()=>{h.current&&h.current.terminar(),h.current=v.current=null,y.current=Promise.resolve(),_.current=new Set,P.current=0,r(b=>b.map(A=>A.estado?{...A,estado:null}:A)),a({fase:"apagado",msg:""})},E=(b,A=!1)=>{y.current=y.current.then(async()=>{const B=await S();A&&(_.current=new Set);const w=f.current.filter(L=>L.tipo==="code"),z=w.findIndex(L=>L.id===b),N=[...w.slice(0,z).filter(L=>!_.current.has(L.id)),w[z]].filter(L=>L.fuente.trim());N.forEach(L=>p(L.id,{estado:"cola"}));let V=!1;for(const L of N){if(V||h.current!==B){p(L.id,{estado:null});continue}p(L.id,{estado:"corre"}),a(Me=>({...Me,fase:"ocupado",msg:""}));try{const Me=f.current.find(zt=>zt.id===L.id).fuente,$e=await B.ejecutar(Me);if(h.current!==B)return;V=$e.salidas.some(zt=>zt.t==="error"),_.current.add(L.id),p(L.id,{estado:null,vivo:{n:++P.current,salidas:$e.salidas,ms:$e.ms}})}catch(Me){V=!0,p(L.id,{estado:null,vivo:{n:++P.current,salidas:[{t:"error",texto:String(Me.message||Me)}]}})}}h.current===B&&a(L=>({...L,fase:"listo",msg:""}))}).catch(()=>{})},j=(b,A)=>{_.current.delete(b),p(b,{fuente:A})},Q=(b="")=>{const A="n"+Date.now();return r(B=>[...B,{id:A,tipo:"code",fuente:b,salidas:[],nueva:!0}]),S().catch(()=>{}),setTimeout(()=>{const B=document.getElementById("celda-"+A);B&&B.scrollIntoView({block:"center",behavior:"smooth"})},60),A},I=async b=>{const A=b.target.files[0];if(b.target.value="",!A)return;const B=A.name.replace(/[^\w.\-]/g,"_");try{await(await S()).archivo(B,await A.arrayBuffer()),Q(`mio = pd.read_csv('${B}')
mio.head()`)}catch{}},_e=X.useMemo(()=>[...n].reverse().find(b=>b.tipo==="code"),[n]),jt=n.find(b=>b.tipo==="code"),Qe=n.some(b=>b.estado),En=Kt.versiones;return g.jsxs(g.Fragment,{children:[g.jsx("a",{className:"salto",href:"#cuaderno",children:"Ir al cuaderno"}),g.jsxs("header",{className:"top",children:[g.jsxs("a",{className:"marca",href:"../",children:[g.jsx("img",{src:e==="dark"?_h:kh,alt:"DelaCruz",width:"36",height:"36"}),g.jsxs("span",{children:["Cuaderno de planta",g.jsx("small",{children:"cuaderno.ipynb"})]})]}),g.jsxs("div",{className:"acciones",children:[g.jsx("button",{type:"button",className:"conmuta","aria-pressed":l,onClick:()=>i(b=>!b),children:l?"Ocultar código":"Mostrar código"}),g.jsx("button",{type:"button",className:"conmuta",onClick:x,"aria-label":e==="dark"?"Cambiar a tema claro":"Cambiar a tema oscuro",children:e==="dark"?"Claro":"Oscuro"})]})]}),g.jsxs("div",{className:"marco",children:[g.jsx("aside",{className:"lado","aria-label":"Índice y datos",children:g.jsxs("details",{open:typeof matchMedia>"u"||matchMedia("(min-width: 1000px)").matches,children:[g.jsx("summary",{children:"Índice y datos"}),g.jsxs("nav",{"aria-label":"Secciones",children:[g.jsx("h2",{children:"Índice"}),g.jsx("ol",{children:An.map(b=>g.jsx("li",{children:g.jsx("a",{href:"#sec-"+b.id,"aria-current":c===b.id?"true":void 0,children:b.titulo})},b.id))})]}),g.jsxs("section",{"aria-label":"Datos crudos",children:[g.jsx("h2",{children:"Datos crudos"}),g.jsx("ul",{className:"archivos",children:Co.archivos.map(b=>g.jsx("li",{children:g.jsxs("button",{type:"button",onClick:()=>u(b),children:[g.jsx("span",{children:b.nombre}),g.jsxs("small",{children:[cl(b.filas)," filas · ",Gd(b.bytes)]})]})},b.nombre))}),g.jsxs("label",{className:"subir",children:[g.jsx("input",{type:"file",accept:".csv,.txt",onChange:I}),g.jsx("span",{children:"Subir un CSV propio"}),g.jsx("small",{children:"Queda en tu navegador: no se envía a ningún servidor."})]})]}),g.jsxs("section",{"aria-label":"Enlaces",children:[g.jsx("h2",{children:"Relacionado"}),g.jsxs("ul",{className:"enlaces",children:[g.jsx("li",{children:g.jsx("a",{href:"../copper_plant_simulator_2026/",children:"Planta virtual: la sala de control"})}),g.jsx("li",{children:g.jsx("a",{href:"cuaderno.ipynb",download:!0,children:"Descargar el .ipynb"})}),g.jsx("li",{children:g.jsx("a",{href:js+"cuaderno.ipynb",target:"_blank",rel:"noopener",children:"Código y datos en GitHub"})}),g.jsx("li",{children:g.jsx("a",{href:"planilla/",children:"Analizar una planilla propia, sin código"})})]})]})]})}),g.jsxs("main",{className:"hoja",id:"cuaderno",children:[g.jsxs("ol",{className:"origen","aria-label":"De dónde salen los datos",children:[g.jsxs("li",{children:[g.jsx("a",{href:"../copper_plant_simulator_2026/",children:"Planta virtual"}),g.jsx("small",{children:"el motor de la sala de control"})]}),g.jsxs("li",{children:[g.jsx("a",{href:js+"herramientas/genera.js",target:"_blank",rel:"noopener",children:"Guion de una semana"}),g.jsx("small",{children:"12 fallas y un operador"})]}),g.jsxs("li",{children:[g.jsxs("span",{children:[Co.archivos.length," archivos crudos"]}),g.jsxs("small",{children:[cl(jh)," filas"]})]}),g.jsxs("li",{children:[g.jsx("span",{children:"Este cuaderno"}),g.jsxs("small",{children:["Python ",En.python.split(".").slice(0,2).join(".")," · pandas ",En.pandas]})]})]}),g.jsxs("div",{className:"kernel "+o.fase,role:"status",children:[o.fase==="apagado"&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:[g.jsx("b",{children:"Salidas guardadas."})," Se ejecutó el ",Th(Kt.ejecutado)," con Jupyter. Puedes volver a correrlo aquí: Python arranca dentro de tu navegador y baja unos ",Kt.descarga_mb," MB la primera vez (de segundos a un par de minutos, según la conexión). La sección 7 usa scikit-learn y suma ",Kt.sklearn_mb," MB."]}),g.jsx("button",{type:"button",className:"primario",onClick:()=>E(jt.id),children:"Arrancar Python"})]}),o.fase==="arrancando"&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:[g.jsx("span",{className:"pulso","aria-hidden":"true"}),o.msg,"… ",g.jsx(Ph,{}),g.jsx("small",{children:"Con una conexión lenta puede tardar un par de minutos. Queda guardado para la próxima vez."})]}),g.jsx("button",{type:"button",onClick:C,children:"Cancelar"})]}),(o.fase==="listo"||o.fase==="ocupado")&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:[g.jsx("span",{className:"punto"+(Qe?" pulso":""),"aria-hidden":"true"}),g.jsx("b",{children:"Python en vivo"})," (",o.versiones?`Pyodide ${o.versiones.python}, pandas ${o.versiones.pandas}`:"Pyodide","). ",Qe?o.msg||"Ejecutando…":"Edita cualquier celda y ejecútala con Mayúsculas + Enter."]}),g.jsxs("div",{className:"grupo",children:[g.jsx("button",{type:"button",onClick:()=>E(_e.id,!0),disabled:Qe,children:"Ejecutar todo"}),g.jsx("button",{type:"button",onClick:C,children:Qe?"Detener":"Apagar"})]})]}),o.fase==="error"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{children:o.msg}),g.jsx("button",{type:"button",onClick:()=>a({fase:"apagado",msg:""}),children:"Entendido"})]})]}),n.map(b=>g.jsx(Nh,{c:b,tema:e,vivo:d,verCodigo:l,alEjecutar:E,alCambiar:j,alQuitar:A=>r(B=>B.filter(w=>w.id!==A))},b.id)),g.jsxs("div",{className:"mas",children:[g.jsx("button",{type:"button",onClick:()=>Q(""),children:"+ Celda de código"}),g.jsx("span",{children:"Para probar algo propio sobre los mismos datos."})]})]})]}),g.jsxs("footer",{className:"pie",children:[g.jsxs("p",{children:["Proyecto personal de ",g.jsx("b",{children:"Julián Neira Nova"}),", ingeniero eléctrico · Servicio y Soluciones Tecnológicas DelaCruz SpA. Los datos son de un simulador: nada proviene de clientes ni de empleadores."]}),g.jsxs("p",{children:[g.jsx("a",{href:"../",children:"Portafolio"})," · ",g.jsx("a",{href:"https://www.linkedin.com/in/julian-neira-nova/",children:"LinkedIn"})," · ",g.jsx("a",{href:"https://github.com/JSNN15",children:"GitHub"})]})]}),g.jsx(Ih,{a:s,alCerrar:()=>u(null)})]})}Ud(document.getElementById("root")).render(g.jsx(Lh,{}));export{g as j,X as r};
