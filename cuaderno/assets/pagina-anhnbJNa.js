var Jd=Object.defineProperty;var ec=(e,t,n)=>t in e?Jd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>ec(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Ns={exports:{}},Cl={},Ps={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=Symbol.for("react.element"),tc=Symbol.for("react.portal"),nc=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),sc=Symbol.for("react.suspense"),uc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),pi=Symbol.iterator;function cc(e){return e===null||typeof e!="object"?null:(e=pi&&e[pi]||e["@@iterator"],typeof e=="function"?e:null)}var bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Ls={};function wn(e,t,n){this.props=e,this.context=t,this.refs=Ls,this.updater=n||bs}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rs(){}Rs.prototype=wn.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=Ls,this.updater=n||bs}var fa=ca.prototype=new Rs;fa.constructor=ca;Is(fa,wn.prototype);fa.isPureReactComponent=!0;var hi=Array.isArray,As=Object.prototype.hasOwnProperty,pa={current:null},Ms={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)As.call(t,r)&&!Ms.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:hr,type:e,key:o,ref:a,props:l,_owner:pa.current}}function fc(e,t){return{$$typeof:hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===hr}function pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mi=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pc(""+e.key):t.toString(36)}function Fr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case hr:case tc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Bl(a,0):r,hi(l)?(n="",e!=null&&(n=e.replace(mi,"$&/")+"/"),Fr(l,t,n,"",function(u){return u})):l!=null&&(ha(l)&&(l=fc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(mi,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",hi(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+Bl(o,i);a+=Fr(o,t,n,s,l)}else if(s=cc(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+Bl(o,i++),a+=Fr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _r(e,t,n){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function hc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Ur={transition:null},mc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:pa};function Ds(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=wn;R.Fragment=nc;R.Profiler=lc;R.PureComponent=ca;R.StrictMode=rc;R.Suspense=sc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mc;R.act=Ds;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Is({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)As.call(t,s)&&!Ms.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:hr,type:e.type,key:l,ref:o,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:ac,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oc,_context:e},e.Consumer=e};R.createElement=$s;R.createFactory=function(e){var t=$s.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:ic,render:e}};R.isValidElement=ha;R.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:hc}};R.memo=function(e,t){return{$$typeof:uc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};R.unstable_act=Ds;R.useCallback=function(e,t){return he.current.useCallback(e,t)};R.useContext=function(e){return he.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return he.current.useDeferredValue(e)};R.useEffect=function(e,t){return he.current.useEffect(e,t)};R.useId=function(){return he.current.useId()};R.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return he.current.useMemo(e,t)};R.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};R.useRef=function(e){return he.current.useRef(e)};R.useState=function(e){return he.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return he.current.useTransition()};R.version="18.3.1";Ps.exports=R;var J=Ps.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc=J,vc=Symbol.for("react.element"),yc=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,kc=gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wc={key:!0,ref:!0,__self:!0,__source:!0};function Os(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xc.call(t,r)&&!wc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:vc,type:e,key:o,ref:a,props:l,_owner:kc.current}}Cl.Fragment=yc;Cl.jsx=Os;Cl.jsxs=Os;Ns.exports=Cl;var g=Ns.exports,Fs={exports:{}},ze={},Us={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,N){var P=_.length;_.push(N);e:for(;0<P;){var V=P-1>>>1,L=_[V];if(0<l(L,N))_[V]=N,_[P]=L,P=V;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],P=_.pop();if(P!==N){_[0]=P;e:for(var V=0,L=_.length,$e=L>>>1;V<$e;){var De=2*(V+1)-1,Nt=_[De],Pt=De+1,wr=_[Pt];if(0>l(Nt,P))Pt<L&&0>l(wr,Nt)?(_[V]=wr,_[Pt]=P,V=Pt):(_[V]=Nt,_[De]=P,V=De);else if(Pt<L&&0>l(wr,P))_[V]=wr,_[Pt]=P,V=Pt;else break e}}return N}function l(_,N){var P=_.sortIndex-N.sortIndex;return P!==0?P:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var s=[],u=[],c=1,m=null,h=3,v=!1,y=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=_)r(u),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(u)}}function x(_){if(w=!1,p(_),!y)if(n(s)!==null)y=!0,A(S);else{var N=n(u);N!==null&&B(x,N.startTime-_)}}function S(_,N){y=!1,w&&(w=!1,f(j),j=-1),v=!0;var P=h;try{for(p(N),m=n(s);m!==null&&(!(m.expirationTime>N)||_&&!we());){var V=m.callback;if(typeof V=="function"){m.callback=null,h=m.priorityLevel;var L=V(m.expirationTime<=N);N=e.unstable_now(),typeof L=="function"?m.callback=L:m===n(s)&&r(s),p(N)}else r(s);m=n(s)}if(m!==null)var $e=!0;else{var De=n(u);De!==null&&B(x,De.startTime-N),$e=!1}return $e}finally{m=null,h=P,v=!1}}var T=!1,E=null,j=-1,Q=5,I=-1;function we(){return!(e.unstable_now()-I<Q)}function jt(){if(E!==null){var _=e.unstable_now();I=_;var N=!0;try{N=E(!0,_)}finally{N?Qe():(T=!1,E=null)}}else T=!1}var Qe;if(typeof d=="function")Qe=function(){d(jt)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,z=En.port2;En.port1.onmessage=jt,Qe=function(){z.postMessage(null)}}else Qe=function(){b(jt,0)};function A(_){E=_,T||(T=!0,Qe())}function B(_,N){j=b(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,A(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var P=h;h=N;try{return _()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=h;h=_;try{return N()}finally{h=P}},e.unstable_scheduleCallback=function(_,N,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,_){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=P+L,_={id:c++,callback:N,priorityLevel:_,startTime:P,expirationTime:L,sortIndex:-1},P>V?(_.sortIndex=P,t(u,_),n(s)===null&&_===n(u)&&(w?(f(j),j=-1):w=!0,B(x,P-V))):(_.sortIndex=L,t(s,_),y||v||(y=!0,A(S))),_},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(_){var N=h;return function(){var P=h;h=N;try{return _.apply(this,arguments)}finally{h=P}}}})(Bs);Us.exports=Bs;var _c=Us.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=J,Te=_c;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vs=new Set,Xn={};function Ht(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),go=Object.prototype.hasOwnProperty,Ec=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gi={},vi={};function Cc(e){return go.call(vi,e)?!0:go.call(gi,e)?!1:Ec.test(e)?vi[e]=!0:(gi[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zc(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ma=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ma,ga);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ma,ga);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ma,ga);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function va(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zc(t,n,l,r)&&(n=null),r||l===null?Cc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),vo=Symbol.for("react.profiler"),Hs=Symbol.for("react.provider"),qs=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),xo=Symbol.for("react.suspense_list"),ka=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Qs=Symbol.for("react.offscreen"),yi=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=yi&&e[yi]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Vl;function Mn(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Hl=!1;function ql(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,i=o.length-1;1<=a&&0<=i&&l[a]!==o[i];)i--;for(;1<=a&&0<=i;a--,i--)if(l[a]!==o[i]){if(a!==1||i!==1)do if(a--,i--,0>i||l[a]!==o[i]){var s=`
`+l[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=i);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function jc(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function ko(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Yt:return"Portal";case vo:return"Profiler";case ya:return"StrictMode";case yo:return"Suspense";case xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qs:return(e.displayName||"Context")+".Consumer";case Hs:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ka:return t=e.displayName||null,t!==null?t:ko(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return ko(e(t))}catch{}}return null}function Nc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ko(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pc(e){var t=Ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=Pc(e))}function Ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&va(e,"checked",t,!1)}function _o(e,t){Ys(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?So(e,t.type,n):t.hasOwnProperty("defaultValue")&&So(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ki(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function So(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if($n(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Zs(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _i(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bc=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Js(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Js(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ic=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,t){if(t){if(Ic[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var No=null,un=null,dn=null;function Si(e){if(e=vr(e)){if(typeof No!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Pl(t),No(e.stateNode,e.type,t))}}function tu(e){un?dn?dn.push(e):dn=[e]:un=e}function nu(){if(un){var e=un,t=dn;if(dn=un=null,Si(e),t)for(e=0;e<t.length;e++)Si(t[e])}}function ru(e,t){return e(t)}function lu(){}var Ql=!1;function ou(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return ru(e,t,n)}finally{Ql=!1,(un!==null||dn!==null)&&(lu(),nu())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Po=!1;if(rt)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Po=!1}function Lc(e,t,n,r,l,o,a,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Un=!1,Jr=null,el=!1,bo=null,Rc={onError:function(e){Un=!0,Jr=e}};function Ac(e,t,n,r,l,o,a,i,s){Un=!1,Jr=null,Lc.apply(Rc,arguments)}function Mc(e,t,n,r,l,o,a,i,s){if(Ac.apply(this,arguments),Un){if(Un){var u=Jr;Un=!1,Jr=null}else throw Error(k(198));el||(el=!0,bo=u)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ei(e){if(qt(e)!==e)throw Error(k(188))}function $c(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ei(l),e;if(o===r)return Ei(l),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,i=l.child;i;){if(i===n){a=!0,n=l,r=o;break}if(i===r){a=!0,r=l,n=o;break}i=i.sibling}if(!a){for(i=o.child;i;){if(i===n){a=!0,n=o,r=l;break}if(i===r){a=!0,r=o,n=l;break}i=i.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function iu(e){return e=$c(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var uu=Te.unstable_scheduleCallback,Ci=Te.unstable_cancelCallback,Dc=Te.unstable_shouldYield,Oc=Te.unstable_requestPaint,G=Te.unstable_now,Fc=Te.unstable_getCurrentPriorityLevel,_a=Te.unstable_ImmediatePriority,du=Te.unstable_UserBlockingPriority,tl=Te.unstable_NormalPriority,Uc=Te.unstable_LowPriority,cu=Te.unstable_IdlePriority,Tl=null,Ze=null;function Bc(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:qc,Vc=Math.log,Hc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Vc(e)/Hc|0)|0}var Tr=64,zr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~l;i!==0?r=Dn(i):(o&=a,o!==0&&(r=Dn(o)))}else a=n&~l,a!==0?r=Dn(a):o!==0&&(r=Dn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),l=1<<n,r|=e[n],t&=~l;return r}function Qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ve(o),i=1<<a,s=l[a];s===-1?(!(i&n)||i&r)&&(l[a]=Qc(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function Io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Kc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ve(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,Ea,mu,gu,vu,Lo=!1,jr=[],mt=null,gt=null,vt=null,er=new Map,tr=new Map,ct=[],Yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ti(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=vr(t),t!==null&&Ea(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Zc(e,t,n,r,l){switch(t){case"focusin":return mt=zn(mt,e,t,n,r,l),!0;case"dragenter":return gt=zn(gt,e,t,n,r,l),!0;case"mouseover":return vt=zn(vt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return er.set(o,zn(er.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,tr.set(o,zn(tr.get(o)||null,e,t,n,r,l)),!0}return!1}function yu(e){var t=Lt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=au(n),t!==null){e.blockedOn=t,vu(e.priority,function(){mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ro(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=vr(n),t!==null&&Ea(t),e.blockedOn=n,!1;t.shift()}return!0}function zi(e,t,n){Br(e)&&n.delete(t)}function Xc(){Lo=!1,mt!==null&&Br(mt)&&(mt=null),gt!==null&&Br(gt)&&(gt=null),vt!==null&&Br(vt)&&(vt=null),er.forEach(zi),tr.forEach(zi)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Lo||(Lo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Xc)))}function nr(e){function t(l){return jn(l,e)}if(0<jr.length){jn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&jn(mt,e),gt!==null&&jn(gt,e),vt!==null&&jn(vt,e),er.forEach(t),tr.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)yu(n),n.blockedOn===null&&ct.shift()}var cn=it.ReactCurrentBatchConfig,rl=!0;function Gc(e,t,n,r){var l=D,o=cn.transition;cn.transition=null;try{D=1,Ca(e,t,n,r)}finally{D=l,cn.transition=o}}function Jc(e,t,n,r){var l=D,o=cn.transition;cn.transition=null;try{D=4,Ca(e,t,n,r)}finally{D=l,cn.transition=o}}function Ca(e,t,n,r){if(rl){var l=Ro(e,t,n,r);if(l===null)ro(e,t,r,ll,n),Ti(e,r);else if(Zc(l,e,t,n,r))r.stopPropagation();else if(Ti(e,r),t&4&&-1<Yc.indexOf(e)){for(;l!==null;){var o=vr(l);if(o!==null&&hu(o),o=Ro(e,t,n,r),o===null&&ro(e,t,r,ll,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ro(e,t,r,null,n)}}var ll=null;function Ro(e,t,n,r){if(ll=null,e=wa(r),e=Lt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ll=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fc()){case _a:return 1;case du:return 4;case tl:case Uc:return 16;case cu:return 536870912;default:return 16}default:return 16}}var pt=null,Ta=null,Vr=null;function ku(){if(Vr)return Vr;var e,t=Ta,n=t.length,r,l="value"in pt?pt.value:pt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Vr=l.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function ji(){return!1}function je(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Nr:ji,this.isPropagationStopped=ji,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=je(_n),gr=Z({},_n,{view:0,detail:0}),ef=je(gr),Kl,Yl,Nn,zl=Z({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Kl=e.screenX-Nn.screenX,Yl=e.screenY-Nn.screenY):Yl=Kl=0,Nn=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),Ni=je(zl),tf=Z({},zl,{dataTransfer:0}),nf=je(tf),rf=Z({},gr,{relatedTarget:0}),Zl=je(rf),lf=Z({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),of=je(lf),af=Z({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=je(af),uf=Z({},_n,{data:0}),Pi=je(uf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function ja(){return pf}var hf=Z({},gr,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=je(hf),gf=Z({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bi=je(gf),vf=Z({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),yf=je(vf),xf=Z({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=je(xf),wf=Z({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_f=je(wf),Sf=[9,13,27,32],Na=rt&&"CompositionEvent"in window,Bn=null;rt&&"documentMode"in document&&(Bn=document.documentMode);var Ef=rt&&"TextEvent"in window&&!Bn,wu=rt&&(!Na||Bn&&8<Bn&&11>=Bn),Ii=" ",Li=!1;function _u(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Cf(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(Li=!0,Ii);case"textInput":return e=t.data,e===Ii&&Li?null:e;default:return null}}function Tf(e,t){if(Xt)return e==="compositionend"||!Na&&_u(e,t)?(e=ku(),Vr=Ta=pt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zf[e.type]:t==="textarea"}function Eu(e,t,n,r){tu(r),t=ol(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,rr=null;function jf(e){Au(e,0)}function jl(e){var t=en(e);if(Ks(t))return e}function Nf(e,t){if(e==="change")return t}var Cu=!1;if(rt){var Xl;if(rt){var Gl="oninput"in document;if(!Gl){var Ai=document.createElement("div");Ai.setAttribute("oninput","return;"),Gl=typeof Ai.oninput=="function"}Xl=Gl}else Xl=!1;Cu=Xl&&(!document.documentMode||9<document.documentMode)}function Mi(){Vn&&(Vn.detachEvent("onpropertychange",Tu),rr=Vn=null)}function Tu(e){if(e.propertyName==="value"&&jl(rr)){var t=[];Eu(t,rr,e,wa(e)),ou(jf,t)}}function Pf(e,t,n){e==="focusin"?(Mi(),Vn=t,rr=n,Vn.attachEvent("onpropertychange",Tu)):e==="focusout"&&Mi()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(rr)}function If(e,t){if(e==="click")return jl(t)}function Lf(e,t){if(e==="input"||e==="change")return jl(t)}function Rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Rf;function lr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!go.call(t,l)||!qe(e[l],t[l]))return!1}return!0}function $i(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Di(e,t){var n=$i(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$i(n)}}function zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zu(n.ownerDocument.documentElement,n)){if(r!==null&&Pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Di(n,o);var a=Di(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=rt&&"documentMode"in document&&11>=document.documentMode,Gt=null,Ao=null,Hn=null,Mo=!1;function Oi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mo||Gt==null||Gt!==Gr(r)||(r=Gt,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&lr(Hn,r)||(Hn=r,r=ol(Ao,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},Jl={},Nu={};rt&&(Nu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Nl(e){if(Jl[e])return Jl[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nu)return Jl[e]=t[n];return e}var Pu=Nl("animationend"),bu=Nl("animationiteration"),Iu=Nl("animationstart"),Lu=Nl("transitionend"),Ru=new Map,Fi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Ru.set(e,t),Ht(t,[e])}for(var eo=0;eo<Fi.length;eo++){var to=Fi[eo],$f=to.toLowerCase(),Df=to[0].toUpperCase()+to.slice(1);Ct($f,"on"+Df)}Ct(Pu,"onAnimationEnd");Ct(bu,"onAnimationIteration");Ct(Iu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Lu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Of=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Ui(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mc(r,t,void 0,e),e.currentTarget=null}function Au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var i=r[a],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&l.isPropagationStopped())break e;Ui(l,i,u),o=s}else for(a=0;a<r.length;a++){if(i=r[a],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&l.isPropagationStopped())break e;Ui(l,i,u),o=s}}}if(el)throw e=bo,el=!1,bo=null,e}function H(e,t){var n=t[Uo];n===void 0&&(n=t[Uo]=new Set);var r=e+"__bubble";n.has(r)||(Mu(t,e,2,!1),n.add(r))}function no(e,t,n){var r=0;t&&(r|=4),Mu(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[br]){e[br]=!0,Vs.forEach(function(n){n!=="selectionchange"&&(Of.has(n)||no(n,!1,e),no(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,no("selectionchange",!1,t))}}function Mu(e,t,n,r){switch(xu(t)){case 1:var l=Gc;break;case 4:l=Jc;break;default:l=Ca}n=l.bind(null,t,n,e),l=void 0,!Po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ro(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;a=a.return}for(;i!==null;){if(a=Lt(i),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}i=i.parentNode}}r=r.return}ou(function(){var u=o,c=wa(n),m=[];e:{var h=Ru.get(e);if(h!==void 0){var v=za,y=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":v=mf;break;case"focusin":y="focus",v=Zl;break;case"focusout":y="blur",v=Zl;break;case"beforeblur":case"afterblur":v=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yf;break;case Pu:case bu:case Iu:v=of;break;case Lu:v=kf;break;case"scroll":v=ef;break;case"wheel":v=_f;break;case"copy":case"cut":case"paste":v=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bi}var w=(t&4)!==0,b=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Jn(d,f),x!=null&&w.push(ar(d,x,p)))),b)break;d=d.return}0<w.length&&(h=new v(h,y,null,n,c),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==jo&&(y=n.relatedTarget||n.fromElement)&&(Lt(y)||y[lt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Lt(y):null,y!==null&&(b=qt(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=Ni,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=bi,x="onPointerLeave",f="onPointerEnter",d="pointer"),b=v==null?h:en(v),p=y==null?h:en(y),h=new w(x,d+"leave",v,n,c),h.target=b,h.relatedTarget=p,x=null,Lt(c)===u&&(w=new w(f,d+"enter",y,n,c),w.target=p,w.relatedTarget=b,x=w),b=x,v&&y)t:{for(w=v,f=y,d=0,p=w;p;p=Wt(p))d++;for(p=0,x=f;x;x=Wt(x))p++;for(;0<d-p;)w=Wt(w),d--;for(;0<p-d;)f=Wt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Wt(w),f=Wt(f)}w=null}else w=null;v!==null&&Bi(m,h,v,w,!1),y!==null&&b!==null&&Bi(m,b,y,w,!0)}}e:{if(h=u?en(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=Nf;else if(Ri(h))if(Cu)S=Lf;else{S=bf;var T=Pf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=If);if(S&&(S=S(e,u))){Eu(m,S,n,c);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&So(h,"number",h.value)}switch(T=u?en(u):window,e){case"focusin":(Ri(T)||T.contentEditable==="true")&&(Gt=T,Ao=u,Hn=null);break;case"focusout":Hn=Ao=Gt=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,Oi(m,n,c);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":Oi(m,n,c)}var E;if(Na)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Xt?_u(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(wu&&n.locale!=="ko"&&(Xt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Xt&&(E=ku()):(pt=c,Ta="value"in pt?pt.value:pt.textContent,Xt=!0)),T=ol(u,j),0<T.length&&(j=new Pi(j,e,null,n,c),m.push({event:j,listeners:T}),E?j.data=E:(E=Su(n),E!==null&&(j.data=E)))),(E=Ef?Cf(e,n):Tf(e,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(c=new Pi("onBeforeInput","beforeinput",null,n,c),m.push({event:c,listeners:u}),c.data=E))}Au(m,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ol(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Jn(e,n),o!=null&&r.unshift(ar(e,o,l)),o=Jn(e,t),o!=null&&r.push(ar(e,o,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bi(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&u!==null&&(i=u,l?(s=Jn(n,o),s!=null&&a.unshift(ar(n,s,i))):l||(s=Jn(n,o),s!=null&&a.push(ar(n,s,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ff=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(Uf,"")}function Ir(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(k(425))}function al(){}var $o=null,Do=null;function Oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fo=typeof setTimeout=="function"?setTimeout:void 0,Bf=typeof clearTimeout=="function"?clearTimeout:void 0,Hi=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hi<"u"?function(e){return Hi.resolve(null).then(e).catch(Hf)}:Fo;function Hf(e){setTimeout(function(){throw e})}function lo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);nr(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Sn,ir="__reactProps$"+Sn,lt="__reactContainer$"+Sn,Uo="__reactEvents$"+Sn,qf="__reactListeners$"+Sn,Qf="__reactHandles$"+Sn;function Lt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qi(e);e!==null;){if(n=e[Ye])return n;e=qi(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Ye]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Pl(e){return e[ir]||null}var Bo=[],tn=-1;function Tt(e){return{current:e}}function q(e){0>tn||(e.current=Bo[tn],Bo[tn]=null,tn--)}function U(e,t){tn++,Bo[tn]=e.current,e.current=t}var Et={},ce=Tt(Et),ye=Tt(!1),Dt=Et;function mn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function il(){q(ye),q(ce)}function Qi(e,t,n){if(ce.current!==Et)throw Error(k(168));U(ce,t),U(ye,n)}function $u(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Nc(e)||"Unknown",l));return Z({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Dt=ce.current,U(ce,e),U(ye,ye.current),!0}function Wi(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=$u(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,q(ye),q(ce),U(ce,e)):q(ye),U(ye,n)}var Je=null,bl=!1,oo=!1;function Du(e){Je===null?Je=[e]:Je.push(e)}function Wf(e){bl=!0,Du(e)}function zt(){if(!oo&&Je!==null){oo=!0;var e=0,t=D;try{var n=Je;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,bl=!1}catch(l){throw Je!==null&&(Je=Je.slice(e+1)),uu(_a,zt),l}finally{D=t,oo=!1}}return null}var nn=[],rn=0,ul=null,dl=0,Ne=[],Pe=0,Ot=null,et=1,tt="";function bt(e,t){nn[rn++]=dl,nn[rn++]=ul,ul=e,dl=t}function Ou(e,t,n){Ne[Pe++]=et,Ne[Pe++]=tt,Ne[Pe++]=Ot,Ot=e;var r=et;e=tt;var l=32-Ve(r)-1;r&=~(1<<l),n+=1;var o=32-Ve(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,et=1<<32-Ve(t)+l|n<<l|r,tt=o+e}else et=1<<o|n<<l|r,tt=e}function ba(e){e.return!==null&&(bt(e,1),Ou(e,1,0))}function Ia(e){for(;e===ul;)ul=nn[--rn],nn[rn]=null,dl=nn[--rn],nn[rn]=null;for(;e===Ot;)Ot=Ne[--Pe],Ne[Pe]=null,tt=Ne[--Pe],Ne[Pe]=null,et=Ne[--Pe],Ne[Pe]=null}var Ce=null,Ee=null,W=!1,Be=null;function Fu(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ki(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ee=null,!0):!1;default:return!1}}function Vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ho(e){if(W){var t=Ee;if(t){var n=t;if(!Ki(e,t)){if(Vo(e))throw Error(k(418));t=yt(n.nextSibling);var r=Ce;t&&Ki(e,t)?Fu(r,n):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(Vo(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function Yi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Lr(e){if(e!==Ce)return!1;if(!W)return Yi(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oo(e.type,e.memoizedProps)),t&&(t=Ee)){if(Vo(e))throw Uu(),Error(k(418));for(;t;)Fu(e,t),t=yt(t.nextSibling)}if(Yi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ce?yt(e.stateNode.nextSibling):null;return!0}function Uu(){for(var e=Ee;e;)e=yt(e.nextSibling)}function gn(){Ee=Ce=null,W=!1}function La(e){Be===null?Be=[e]:Be.push(e)}var Kf=it.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var i=l.refs;a===null?delete i[o]:i[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zi(e){var t=e._init;return t(e._payload)}function Bu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=_t(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,d,p,x){return d===null||d.tag!==6?(d=po(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,x){var S=p.type;return S===Zt?c(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&Zi(S)===d.type)?(x=l(d,p.props),x.ref=Pn(f,d,p),x.return=f,x):(x=Xr(p.type,p.key,p.props,null,f.mode,x),x.ref=Pn(f,d,p),x.return=f,x)}function u(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ho(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function c(f,d,p,x,S){return d===null||d.tag!==7?(d=$t(p,f.mode,x,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=po(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sr:return p=Xr(d.type,d.key,d.props,null,f.mode,p),p.ref=Pn(f,null,d),p.return=f,p;case Yt:return d=ho(d,f.mode,p),d.return=f,d;case ut:var x=d._init;return m(f,x(d._payload),p)}if($n(d)||Cn(d))return d=$t(d,f.mode,p,null),d.return=f,d;Rr(f,d)}return null}function h(f,d,p,x){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:i(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===S?s(f,d,p,x):null;case Yt:return p.key===S?u(f,d,p,x):null;case ut:return S=p._init,h(f,d,S(p._payload),x)}if($n(p)||Cn(p))return S!==null?null:c(f,d,p,x,null);Rr(f,p)}return null}function v(f,d,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,i(d,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sr:return f=f.get(x.key===null?p:x.key)||null,s(d,f,x,S);case Yt:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,S);case ut:var T=x._init;return v(f,d,p,T(x._payload),S)}if($n(x)||Cn(x))return f=f.get(p)||null,c(d,f,x,S,null);Rr(d,x)}return null}function y(f,d,p,x){for(var S=null,T=null,E=d,j=d=0,Q=null;E!==null&&j<p.length;j++){E.index>j?(Q=E,E=null):Q=E.sibling;var I=h(f,E,p[j],x);if(I===null){E===null&&(E=Q);break}e&&E&&I.alternate===null&&t(f,E),d=o(I,d,j),T===null?S=I:T.sibling=I,T=I,E=Q}if(j===p.length)return n(f,E),W&&bt(f,j),S;if(E===null){for(;j<p.length;j++)E=m(f,p[j],x),E!==null&&(d=o(E,d,j),T===null?S=E:T.sibling=E,T=E);return W&&bt(f,j),S}for(E=r(f,E);j<p.length;j++)Q=v(E,f,j,p[j],x),Q!==null&&(e&&Q.alternate!==null&&E.delete(Q.key===null?j:Q.key),d=o(Q,d,j),T===null?S=Q:T.sibling=Q,T=Q);return e&&E.forEach(function(we){return t(f,we)}),W&&bt(f,j),S}function w(f,d,p,x){var S=Cn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var T=S=null,E=d,j=d=0,Q=null,I=p.next();E!==null&&!I.done;j++,I=p.next()){E.index>j?(Q=E,E=null):Q=E.sibling;var we=h(f,E,I.value,x);if(we===null){E===null&&(E=Q);break}e&&E&&we.alternate===null&&t(f,E),d=o(we,d,j),T===null?S=we:T.sibling=we,T=we,E=Q}if(I.done)return n(f,E),W&&bt(f,j),S;if(E===null){for(;!I.done;j++,I=p.next())I=m(f,I.value,x),I!==null&&(d=o(I,d,j),T===null?S=I:T.sibling=I,T=I);return W&&bt(f,j),S}for(E=r(f,E);!I.done;j++,I=p.next())I=v(E,f,j,I.value,x),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?j:I.key),d=o(I,d,j),T===null?S=I:T.sibling=I,T=I);return e&&E.forEach(function(jt){return t(f,jt)}),W&&bt(f,j),S}function b(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var S=p.key,T=d;T!==null;){if(T.key===S){if(S=p.type,S===Zt){if(T.tag===7){n(f,T.sibling),d=l(T,p.props.children),d.return=f,f=d;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&Zi(S)===T.type){n(f,T.sibling),d=l(T,p.props),d.ref=Pn(f,T,p),d.return=f,f=d;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===Zt?(d=$t(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=Xr(p.type,p.key,p.props,null,f.mode,x),x.ref=Pn(f,d,p),x.return=f,f=x)}return a(f);case Yt:e:{for(T=p.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ho(p,f.mode,x),d.return=f,f=d}return a(f);case ut:return T=p._init,b(f,d,T(p._payload),x)}if($n(p))return y(f,d,p,x);if(Cn(p))return w(f,d,p,x);Rr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=po(p,f.mode,x),d.return=f,f=d),a(f)):n(f,d)}return b}var vn=Bu(!0),Vu=Bu(!1),cl=Tt(null),fl=null,ln=null,Ra=null;function Aa(){Ra=ln=fl=null}function Ma(e){var t=cl.current;q(cl),e._currentValue=t}function qo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){fl=e,Ra=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(fl===null)throw Error(k(308));ln=e,fl.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Rt=null;function $a(e){Rt===null?Rt=[e]:Rt.push(e)}function Hu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,$a(t)):(n.next=l.next,l.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ot(e,n)}return l=r.interleaved,l===null?(t.next=t,$a(r)):(t.next=l.next,l.next=t),r.interleaved=t,ot(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function Xi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pl(e,t,n,r){var l=e.updateQueue;dt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==a&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;a=0,c=u=s=null,i=o;do{var h=i.lane,v=i.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,w=i;switch(h=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(v,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,m,h):y,h==null)break e;m=Z({},m,h);break e;case 2:dt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[i]:h.push(i))}else v={eventTime:v,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=v,s=m):c=c.next=v,a|=h;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;h=i,i=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(c===null&&(s=m),l.baseState=s,l.firstBaseUpdate=u,l.lastBaseUpdate=c,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ut|=a,e.lanes=a,e.memoizedState=m}}function Gi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var yr={},Xe=Tt(yr),sr=Tt(yr),ur=Tt(yr);function At(e){if(e===yr)throw Error(k(174));return e}function Oa(e,t){switch(U(ur,t),U(sr,e),U(Xe,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Co(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Co(t,e)}q(Xe),U(Xe,t)}function yn(){q(Xe),q(sr),q(ur)}function Qu(e){At(ur.current);var t=At(Xe.current),n=Co(t,e.type);t!==n&&(U(sr,e),U(Xe,n))}function Fa(e){sr.current===e&&(q(Xe),q(sr))}var K=Tt(0);function hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=[];function Ua(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var Qr=it.ReactCurrentDispatcher,io=it.ReactCurrentBatchConfig,Ft=0,Y=null,te=null,re=null,ml=!1,qn=!1,dr=0,Yf=0;function se(){throw Error(k(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Va(e,t,n,r,l,o){if(Ft=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qr.current=e===null||e.memoizedState===null?Jf:ep,e=n(r,l),qn){o=0;do{if(qn=!1,dr=0,25<=o)throw Error(k(301));o+=1,re=te=null,t.updateQueue=null,Qr.current=tp,e=n(r,l)}while(qn)}if(Qr.current=gl,t=te!==null&&te.next!==null,Ft=0,re=te=Y=null,ml=!1,t)throw Error(k(300));return e}function Ha(){var e=dr!==0;return dr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Me(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function cr(e,t){return typeof t=="function"?t(e):t}function so(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var i=a=null,s=null,u=o;do{var c=u.lane;if((Ft&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=m,a=r):s=s.next=m,Y.lanes|=c,Ut|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=i,qe(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Ut|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uo(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);qe(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wu(){}function Ku(e,t){var n=Y,r=Me(),l=t(),o=!qe(r.memoizedState,l);if(o&&(r.memoizedState=l,ve=!0),r=r.queue,qa(Xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,fr(9,Zu.bind(null,n,r,l,t),void 0,null),le===null)throw Error(k(349));Ft&30||Yu(n,t,l)}return l}function Yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zu(e,t,n,r){t.value=n,t.getSnapshot=r,Gu(t)&&Ju(e)}function Xu(e,t,n){return n(function(){Gu(t)&&Ju(e)})}function Gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Ju(e){var t=ot(e,1);t!==null&&He(t,e,1,-1)}function Ji(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,Y,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ed(){return Me().memoizedState}function Wr(e,t,n,r){var l=Ke();Y.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var l=Me();r=r===void 0?null:r;var o=void 0;if(te!==null){var a=te.memoizedState;if(o=a.destroy,r!==null&&Ba(r,a.deps)){l.memoizedState=fr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=fr(1|t,n,o,r)}function es(e,t){return Wr(8390656,8,e,t)}function qa(e,t){return Il(2048,8,e,t)}function td(e,t){return Il(4,2,e,t)}function nd(e,t){return Il(4,4,e,t)}function rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,rd.bind(null,t,e),n)}function Qa(){}function od(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ad(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return Ft&21?(qe(n,t)||(n=fu(),Y.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Zf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{D=n,io.transition=r}}function sd(){return Me().memoizedState}function Xf(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ud(e))dd(t,n);else if(n=Hu(e,t,n,r),n!==null){var l=pe();He(n,e,r,l),cd(n,t,r)}}function Gf(e,t,n){var r=wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ud(e))dd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,i=o(a,n);if(l.hasEagerState=!0,l.eagerState=i,qe(i,a)){var s=t.interleaved;s===null?(l.next=l,$a(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Hu(e,t,l,r),n!==null&&(l=pe(),He(n,e,r,l),cd(n,t,r))}}function ud(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function dd(e,t){qn=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var gl={readContext:Ae,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Jf={readContext:Ae,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:es,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,rd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Ji,useDebugValue:Qa,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Ji(!1),t=e[0];return e=Zf.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=Ke();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));Ft&30||Yu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,es(Xu.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,Zu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ke(),t=le.identifierPrefix;if(W){var n=tt,r=et;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ep={readContext:Ae,useCallback:od,useContext:Ae,useEffect:qa,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ad,useReducer:so,useRef:ed,useState:function(){return so(cr)},useDebugValue:Qa,useDeferredValue:function(e){var t=Me();return id(t,te.memoizedState,e)},useTransition:function(){var e=so(cr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Ku,useId:sd,unstable_isNewReconciler:!1},tp={readContext:Ae,useCallback:od,useContext:Ae,useEffect:qa,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ad,useReducer:uo,useRef:ed,useState:function(){return uo(cr)},useDebugValue:Qa,useDeferredValue:function(e){var t=Me();return te===null?t.memoizedState=e:id(t,te.memoizedState,e)},useTransition:function(){var e=uo(cr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Ku,useId:sd,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=wt(e),o=nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,l),t!==null&&(He(t,e,l,r),qr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=wt(e),o=nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,l),t!==null&&(He(t,e,l,r),qr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=wt(e),l=nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=xt(e,l,r),t!==null&&(He(t,e,r,n),qr(t,e,r))}};function ts(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(l,o):!0}function fd(e,t,n){var r=!1,l=Et,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(l=xe(t)?Dt:ce.current,r=t.contextTypes,o=(r=r!=null)?mn(e,l):Et),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ns(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Wo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Da(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ae(o):(o=xe(t)?Dt:ce.current,l.context=mn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ll.enqueueReplaceState(l,l.state,null),pl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=jc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ko(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function pd(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,la=r),Ko(e,t)},n}function hd(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ko(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ko(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new np;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function os(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var rp=it.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?Vu(t,null,n,r):vn(t,e.child,n,r)}function as(e,t,n,r,l){n=n.render;var o=t.ref;return fn(t,l),r=Va(e,t,n,r,o,l),n=Ha(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(W&&n&&ba(t),t.flags|=1,fe(e,t,r,l),t.child)}function is(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ei(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,md(e,t,o,r,l)):(e=Xr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(a,r)&&e.ref===t.ref)return at(e,t,l)}return t.flags|=1,e=_t(o,r),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,at(e,t,l)}return Yo(e,t,n,r,l)}function gd(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(an,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(an,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(an,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(an,_e),_e|=r;return fe(e,t,l,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,l){var o=xe(n)?Dt:ce.current;return o=mn(t,o),fn(t,l),n=Va(e,t,n,r,o,l),r=Ha(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(W&&r&&ba(t),t.flags|=1,fe(e,t,n,l),t.child)}function ss(e,t,n,r,l){if(xe(n)){var o=!0;sl(t)}else o=!1;if(fn(t,l),t.stateNode===null)Kr(e,t),fd(t,n,r),Wo(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=xe(n)?Dt:ce.current,u=mn(t,u));var c=n.getDerivedStateFromProps,m=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==r||s!==u)&&ns(t,a,r,u),dt=!1;var h=t.memoizedState;a.state=h,pl(t,r,a,l),s=t.memoizedState,i!==r||h!==s||ye.current||dt?(typeof c=="function"&&(Qo(t,n,c,r),s=t.memoizedState),(i=dt||ts(t,n,i,r,h,s,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qu(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Fe(t.type,i),a.props=u,m=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=xe(n)?Dt:ce.current,s=mn(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==m||h!==s)&&ns(t,a,r,s),dt=!1,h=t.memoizedState,a.state=h,pl(t,r,a,l);var y=t.memoizedState;i!==m||h!==y||ye.current||dt?(typeof v=="function"&&(Qo(t,n,v,r),y=t.memoizedState),(u=dt||ts(t,n,u,r,h,y,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zo(e,t,n,r,o,l)}function Zo(e,t,n,r,l,o){vd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Wi(t,n,!1),at(e,t,o);r=t.stateNode,rp.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vn(t,e.child,null,o),t.child=vn(t,null,i,o)):fe(e,t,i,o),t.memoizedState=r.state,l&&Wi(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?Qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qi(e,t.context,!1),Oa(e,t.containerInfo)}function us(e,t,n,r,l){return gn(),La(l),t.flags|=256,fe(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Go(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,l=K.current,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(K,l&1),e===null)return Ho(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ml(a,r,0,null),e=$t(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Go(n),t.memoizedState=Xo,e):Wa(t,a));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return lp(e,t,a,r,i,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=_t(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?o=_t(i,o):(o=$t(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Go(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return o=e.child,e=o.sibling,r=_t(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wa(e,t){return t=Ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&La(r),vn(t,e.child,null,n),e=Wa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lp(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=co(Error(k(422))),Ar(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ml({mode:"visible",children:r.children},l,0,null),o=$t(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vn(t,e.child,null,a),t.child.memoizedState=Go(a),t.memoizedState=Xo,o);if(!(t.mode&1))return Ar(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(k(419)),r=co(o,r,void 0),Ar(e,t,a,r)}if(i=(a&e.childLanes)!==0,ve||i){if(r=le,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,ot(e,l),He(r,e,l,-1))}return Ja(),r=co(Error(k(421))),Ar(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ee=yt(l.nextSibling),Ce=t,W=!0,Be=null,e!==null&&(Ne[Pe++]=et,Ne[Pe++]=tt,Ne[Pe++]=Ot,et=e.id,tt=e.overflow,Ot=t),t=Wa(t,r.children),t.flags|=4096,t)}function ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qo(e.return,t,n)}function fo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function kd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ds(e,n,t);else if(e.tag===19)ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&hl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),fo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&hl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}fo(t,!0,n,null,o);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function op(e,t,n){switch(t.tag){case 3:yd(t),gn();break;case 5:Qu(t);break;case 1:xe(t.type)&&sl(t);break;case 4:Oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(cl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?xd(e,t,n):(U(K,K.current&1),e=at(e,t,n),e!==null?e.sibling:null);U(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n)}return at(e,t,n)}var wd,Jo,_d,Sd;wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jo=function(){};_d=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,At(Xe.current);var o=null;switch(n){case"input":l=wo(e,l),r=wo(e,r),o=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":l=Eo(e,l),r=Eo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}To(n,r);var a;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var i=l[u];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(i=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&i[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sd=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ap(e,t,n){var r=t.pendingProps;switch(Ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return xe(t.type)&&il(),ue(t),null;case 3:return r=t.stateNode,yn(),q(ye),q(ce),Ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(ia(Be),Be=null))),Jo(e,t),ue(t),null;case 5:Fa(t);var l=At(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ue(t),null}if(e=At(Xe.current),Lr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[ir]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)H(On[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":xi(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":wi(r,o),H("invalid",r)}To(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];a==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,i,e),l=["children",""+i]):Xn.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":Er(r),ki(r,o,!0);break;case"textarea":Er(r),_i(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=al)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ye]=t,e[ir]=r,wd(e,t,!1,!1),t.stateNode=e;e:{switch(a=zo(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)H(On[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":xi(e,r),l=wo(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),H("invalid",e);break;case"textarea":wi(e,r),l=Eo(e,r),H("invalid",e);break;default:l=r}To(n,l),i=l;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?eu(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gn(e,s):typeof s=="number"&&Gn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&va(e,o,s,a))}switch(n){case"input":Er(e),ki(e,r,!1);break;case"textarea":Er(e),_i(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=At(ur.current),At(Xe.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ue(t),null;case 13:if(q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ee!==null&&t.mode&1&&!(t.flags&128))Uu(),gn(),t.flags|=98560,o=!1;else if(o=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ye]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Be!==null&&(ia(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Ja())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return yn(),Jo(e,t),e===null&&or(t.stateNode.containerInfo),ue(t),null;case 10:return Ma(t.type._context),ue(t),null;case 17:return xe(t.type)&&il(),ue(t),null;case 19:if(q(K),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)bn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=hl(e),a!==null){for(t.flags|=128,bn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>kn&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=hl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!W)return ue(t),null}else 2*G()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=K.current,U(K,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function ip(e,t){switch(Ia(t),t.tag){case 1:return xe(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),q(ye),q(ce),Ua(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(K),null;case 4:return yn(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return Ga(),null;case 24:return null;default:return null}}var Mr=!1,de=!1,sp=typeof WeakSet=="function"?WeakSet:Set,C=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function ea(e,t,n){try{n()}catch(r){X(e,t,r)}}var cs=!1;function up(e,t){if($o=rl,e=ju(),Pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,i=-1,s=-1,u=0,c=0,m=e,h=null;t:for(;;){for(var v;m!==n||l!==0&&m.nodeType!==3||(i=a+l),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++u===l&&(i=a),h===o&&++c===r&&(s=a),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Do={focusedElem:e,selectionRange:n},rl=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,b=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Fe(t.type,w),b);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=cs,cs=!1,y}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ea(t,n,o)}l=l.next}while(l!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[ir],delete t[Uo],delete t[qf],delete t[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cd(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}var oe=null,Ue=!1;function st(e,t,n){for(n=n.child;n!==null;)Td(e,t,n),n=n.sibling}function Td(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:de||on(n,t);case 6:var r=oe,l=Ue;oe=null,st(e,t,n),oe=r,Ue=l,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?lo(e.parentNode,n):e.nodeType===1&&lo(e,n),nr(e)):lo(oe,n.stateNode));break;case 4:r=oe,l=Ue,oe=n.stateNode.containerInfo,Ue=!0,st(e,t,n),oe=r,Ue=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ea(n,t,a),l=l.next}while(l!==r)}st(e,t,n);break;case 1:if(!de&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){X(n,t,i)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,st(e,t,n),de=r):st(e,t,n);break;default:st(e,t,n)}}function ps(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var l=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:oe=i.stateNode,Ue=!1;break e;case 3:oe=i.stateNode.containerInfo,Ue=!0;break e;case 4:oe=i.stateNode.containerInfo,Ue=!0;break e}i=i.return}if(oe===null)throw Error(k(160));Td(o,a,l),oe=null,Ue=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(u){X(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}function zd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),We(e),r&4){try{Qn(3,e,e.return),Rl(3,e)}catch(w){X(e,e.return,w)}try{Qn(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Oe(t,e),We(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Oe(t,e),We(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var l=e.stateNode;try{Gn(l,"")}catch(w){X(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Ys(l,o),zo(i,a);var u=zo(i,o);for(a=0;a<s.length;a+=2){var c=s[a],m=s[a+1];c==="style"?eu(l,m):c==="dangerouslySetInnerHTML"?Gs(l,m):c==="children"?Gn(l,m):va(l,c,m,u)}switch(i){case"input":_o(l,o);break;case"textarea":Zs(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?sn(l,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?sn(l,!!o.multiple,o.defaultValue,!0):sn(l,!!o.multiple,o.multiple?[]:"",!1))}l[ir]=o}catch(w){X(e,e.return,w)}}break;case 6:if(Oe(t,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(Oe(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Oe(t,e),We(e);break;case 13:Oe(t,e),We(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Za=G())),r&4&&ps(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||c,Oe(t,e),de=u):Oe(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(C=e,c=e.child;c!==null;){for(m=C=c;C!==null;){switch(h=C,v=h.child,h.tag){case 0:case 11:case 14:case 15:Qn(4,h,h.return);break;case 1:on(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:on(h,h.return);break;case 22:if(h.memoizedState!==null){ms(m);continue}}v!==null?(v.return=h,C=v):ms(m)}c=c.sibling}e:for(c=null,m=e;;){if(m.tag===5){if(c===null){c=m;try{l=m.stateNode,u?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Js("display",a))}catch(w){X(e,e.return,w)}}}else if(m.tag===6){if(c===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){X(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;c===m&&(c=null),m=m.return}c===m&&(c=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Oe(t,e),We(e),r&4&&ps(e);break;case 21:break;default:Oe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Gn(l,""),r.flags&=-33);var o=fs(e);ra(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,i=fs(e);na(e,i,a);break;default:throw Error(k(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dp(e,t,n){C=e,jd(e)}function jd(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Mr;if(!a){var i=l.alternate,s=i!==null&&i.memoizedState!==null||de;i=Mr;var u=de;if(Mr=a,(de=s)&&!u)for(C=l;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?gs(l):s!==null?(s.return=a,C=s):gs(l);for(;o!==null;)C=o,jd(o),o=o.sibling;C=l,Mr=i,de=u}hs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,C=o):hs(e)}}function hs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gi(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gi(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var m=c.dehydrated;m!==null&&nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&ta(t)}catch(h){X(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ms(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function gs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){X(t,l,s)}}var o=t.return;try{ta(t)}catch(s){X(t,o,s)}break;case 5:var a=t.return;try{ta(t)}catch(s){X(t,a,s)}}}catch(s){X(t,t.return,s)}if(t===e){C=null;break}var i=t.sibling;if(i!==null){i.return=t.return,C=i;break}C=t.return}}var cp=Math.ceil,vl=it.ReactCurrentDispatcher,Ka=it.ReactCurrentOwner,Re=it.ReactCurrentBatchConfig,M=0,le=null,ee=null,ae=0,_e=0,an=Tt(0),ne=0,pr=null,Ut=0,Al=0,Ya=0,Wn=null,ge=null,Za=0,kn=1/0,Ge=null,yl=!1,la=null,kt=null,$r=!1,ht=null,xl=0,Kn=0,oa=null,Yr=-1,Zr=0;function pe(){return M&6?G():Yr!==-1?Yr:Yr=G()}function wt(e){return e.mode&1?M&2&&ae!==0?ae&-ae:Kf.transition!==null?(Zr===0&&(Zr=fu()),Zr):(e=D,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function He(e,t,n,r){if(50<Kn)throw Kn=0,oa=null,Error(k(185));mr(e,n,r),(!(M&2)||e!==le)&&(e===le&&(!(M&2)&&(Al|=n),ne===4&&ft(e,ae)),ke(e,r),n===1&&M===0&&!(t.mode&1)&&(kn=G()+500,bl&&zt()))}function ke(e,t){var n=e.callbackNode;Wc(e,t);var r=nl(e,e===le?ae:0);if(r===0)n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ci(n),t===1)e.tag===0?Wf(vs.bind(null,e)):Du(vs.bind(null,e)),Vf(function(){!(M&6)&&zt()}),n=null;else{switch(pu(r)){case 1:n=_a;break;case 4:n=du;break;case 16:n=tl;break;case 536870912:n=cu;break;default:n=tl}n=Md(n,Nd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nd(e,t){if(Yr=-1,Zr=0,M&6)throw Error(k(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=nl(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=kl(e,r);else{t=r;var l=M;M|=2;var o=bd();(le!==e||ae!==t)&&(Ge=null,kn=G()+500,Mt(e,t));do try{hp();break}catch(i){Pd(e,i)}while(!0);Aa(),vl.current=o,M=l,ee!==null?t=0:(le=null,ae=0,t=ne)}if(t!==0){if(t===2&&(l=Io(e),l!==0&&(r=l,t=aa(e,l))),t===1)throw n=pr,Mt(e,0),ft(e,r),ke(e,G()),n;if(t===6)ft(e,r);else{if(l=e.current.alternate,!(r&30)&&!fp(l)&&(t=kl(e,r),t===2&&(o=Io(e),o!==0&&(r=o,t=aa(e,o))),t===1))throw n=pr,Mt(e,0),ft(e,r),ke(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:It(e,ge,Ge);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=Za+500-G(),10<t)){if(nl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Fo(It.bind(null,e,ge,Ge),t);break}It(e,ge,Ge);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ve(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cp(r/1960))-r,10<r){e.timeoutHandle=Fo(It.bind(null,e,ge,Ge),r);break}It(e,ge,Ge);break;case 5:It(e,ge,Ge);break;default:throw Error(k(329))}}}return ke(e,G()),e.callbackNode===n?Nd.bind(null,e):null}function aa(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=kl(e,t),e!==2&&(t=ge,ge=n,t!==null&&ia(t)),e}function ia(e){ge===null?ge=e:ge.push.apply(ge,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!qe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Ya,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function vs(e){if(M&6)throw Error(k(327));pn();var t=nl(e,0);if(!(t&1))return ke(e,G()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var r=Io(e);r!==0&&(t=r,n=aa(e,r))}if(n===1)throw n=pr,Mt(e,0),ft(e,t),ke(e,G()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,ge,Ge),ke(e,G()),null}function Xa(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(kn=G()+500,bl&&zt())}}function Bt(e){ht!==null&&ht.tag===0&&!(M&6)&&pn();var t=M;M|=1;var n=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=n,M=t,!(M&6)&&zt()}}function Ga(){_e=an.current,q(an)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:yn(),q(ye),q(ce),Ua();break;case 5:Fa(r);break;case 4:yn();break;case 13:q(K);break;case 19:q(K);break;case 10:Ma(r.type._context);break;case 22:case 23:Ga()}n=n.return}if(le=e,ee=e=_t(e.current,null),ae=_e=t,ne=0,pr=null,Ya=Al=Ut=0,ge=Wn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Rt=null}return e}function Pd(e,t){do{var n=ee;try{if(Aa(),Qr.current=gl,ml){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ml=!1}if(Ft=0,re=te=Y=null,qn=!1,dr=0,Ka.current=null,n===null||n.return===null){ne=1,pr=t,ee=null;break}e:{var o=e,a=n.return,i=n,s=t;if(t=ae,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=i,m=c.tag;if(!(c.mode&1)&&(m===0||m===11||m===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=ls(a);if(v!==null){v.flags&=-257,os(v,a,i,o,t),v.mode&1&&rs(o,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){rs(o,u,t),Ja();break e}s=Error(k(426))}}else if(W&&i.mode&1){var b=ls(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),os(b,a,i,o,t),La(xn(s,i));break e}}o=s=xn(s,i),ne!==4&&(ne=2),Wn===null?Wn=[o]:Wn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=pd(o,s,t);Xi(o,f);break e;case 1:i=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(kt===null||!kt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=hd(o,i,t);Xi(o,x);break e}}o=o.return}while(o!==null)}Ld(n)}catch(S){t=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function bd(){var e=vl.current;return vl.current=gl,e===null?gl:e}function Ja(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Ut&268435455)&&!(Al&268435455)||ft(le,ae)}function kl(e,t){var n=M;M|=2;var r=bd();(le!==e||ae!==t)&&(Ge=null,Mt(e,t));do try{pp();break}catch(l){Pd(e,l)}while(!0);if(Aa(),M=n,vl.current=r,ee!==null)throw Error(k(261));return le=null,ae=0,ne}function pp(){for(;ee!==null;)Id(ee)}function hp(){for(;ee!==null&&!Dc();)Id(ee)}function Id(e){var t=Ad(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Ld(e):ee=t,Ka.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ip(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=ap(n,t,_e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function It(e,t,n){var r=D,l=Re.transition;try{Re.transition=null,D=1,mp(e,t,n,r)}finally{Re.transition=l,D=r}return null}function mp(e,t,n,r){do pn();while(ht!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kc(e,o),e===le&&(ee=le=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$r||($r=!0,Md(tl,function(){return pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var a=D;D=1;var i=M;M|=4,Ka.current=null,up(e,n),zd(n,e),Af(Do),rl=!!$o,Do=$o=null,e.current=n,dp(n),Oc(),M=i,D=a,Re.transition=o}else e.current=n;if($r&&($r=!1,ht=e,xl=l),o=e.pendingLanes,o===0&&(kt=null),Bc(n.stateNode),ke(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(yl)throw yl=!1,e=la,la=null,e;return xl&1&&e.tag!==0&&pn(),o=e.pendingLanes,o&1?e===oa?Kn++:(Kn=0,oa=e):Kn=0,zt(),null}function pn(){if(ht!==null){var e=pu(xl),t=Re.transition,n=D;try{if(Re.transition=null,D=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,xl=0,M&6)throw Error(k(331));var l=M;for(M|=4,C=e.current;C!==null;){var o=C,a=o.child;if(C.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:Qn(8,c,o)}var m=c.child;if(m!==null)m.return=c,C=m;else for(;C!==null;){c=C;var h=c.sibling,v=c.return;if(Ed(c),c===u){C=null;break}if(h!==null){h.return=v,C=h;break}C=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}C=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,C=f;break e}C=o.return}}var d=e.current;for(C=d;C!==null;){a=C;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,C=p;else e:for(a=d;C!==null;){if(i=C,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Rl(9,i)}}catch(S){X(i,i.return,S)}if(i===a){C=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,C=x;break e}C=i.return}}if(M=l,zt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{D=n,Re.transition=t}}return!1}function ys(e,t,n){t=xn(n,t),t=pd(e,t,1),e=xt(e,t,1),t=pe(),e!==null&&(mr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)ys(e,e,n);else for(;t!==null;){if(t.tag===3){ys(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=xn(n,e),e=hd(t,e,1),t=xt(t,e,1),e=pe(),t!==null&&(mr(t,1,e),ke(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>G()-Za?Mt(e,0):Ya|=n),ke(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=zr,zr<<=1,!(zr&130023424)&&(zr=4194304)):t=1);var n=pe();e=ot(e,t),e!==null&&(mr(e,t,n),ke(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Rd(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,op(e,t,n);ve=!!(e.flags&131072)}else ve=!1,W&&t.flags&1048576&&Ou(t,dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var l=mn(t,ce.current);fn(t,n),l=Va(null,t,r,e,l,n);var o=Ha();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,sl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Da(t),l.updater=Ll,t.stateNode=l,l._reactInternals=t,Wo(t,r,e,n),t=Zo(null,t,r,!0,o,n)):(t.tag=0,W&&o&&ba(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=kp(r),e=Fe(r,e),l){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=ss(null,t,r,e,n);break e;case 11:t=as(null,t,r,e,n);break e;case 14:t=is(null,t,r,Fe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Yo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),ss(e,t,r,l,n);case 3:e:{if(yd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,l=o.element,qu(e,t),pl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=xn(Error(k(423)),t),t=us(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(k(424)),t),t=us(e,t,r,n,l);break e}else for(Ee=yt(t.stateNode.containerInfo.firstChild),Ce=t,W=!0,Be=null,n=Vu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===l){t=at(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Qu(t),e===null&&Ho(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Oo(r,l)?a=null:o!==null&&Oo(r,o)&&(t.flags|=32),vd(e,t),fe(e,t,a,n),t.child;case 6:return e===null&&Ho(t),null;case 13:return xd(e,t,n);case 4:return Oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),as(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,U(cl,r._currentValue),r._currentValue=a,o!==null)if(qe(o.value,a)){if(o.children===l.children&&!ye.current){t=at(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){a=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=nt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),qo(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),qo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,fn(t,n),l=Ae(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),is(e,t,r,l,n);case 15:return md(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Kr(e,t),t.tag=1,xe(r)?(e=!0,sl(t)):e=!1,fn(t,n),fd(t,r,l),Wo(t,r,l,n),Zo(null,t,r,!0,e,n);case 19:return kd(e,t,n);case 22:return gd(e,t,n)}throw Error(k(156,t.tag))};function Md(e,t){return uu(e,t)}function xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new xp(e,t,n,r)}function ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return ei(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===ka)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")ei(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return $t(n.children,l,o,t);case ya:a=8,l|=8;break;case vo:return e=be(12,n,t,l|2),e.elementType=vo,e.lanes=o,e;case yo:return e=be(13,n,t,l),e.elementType=yo,e.lanes=o,e;case xo:return e=be(19,n,t,l),e.elementType=xo,e.lanes=o,e;case Qs:return Ml(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hs:a=10;break e;case qs:a=9;break e;case xa:a=11;break e;case ka:a=14;break e;case ut:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=be(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function $t(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Ml(e,t,n,r){return e=be(22,e,r,t),e.elementType=Qs,e.lanes=n,e.stateNode={isHidden:!1},e}function po(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function ho(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ti(e,t,n,r,l,o,a,i,s){return e=new wp(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(o),e}function _p(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return Et;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return $u(e,n,t)}return t}function Dd(e,t,n,r,l,o,a,i,s){return e=ti(n,r,!0,e,l,o,a,i,s),e.context=$d(null),n=e.current,r=pe(),l=wt(n),o=nt(r,l),o.callback=t??null,xt(n,o,l),e.current.lanes=l,mr(e,l,r),ke(e,r),e}function $l(e,t,n,r){var l=t.current,o=pe(),a=wt(l);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(l,t,a),e!==null&&(He(e,l,a,o),qr(e,l,a)),a}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ni(e,t){xs(e,t),(e=e.alternate)&&xs(e,t)}function Sp(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function ri(e){this._internalRoot=e}Dl.prototype.render=ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));$l(e,t,null,null)};Dl.prototype.unmount=ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){$l(null,e,null,null)}),t[lt]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&yu(e)}};function li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function Ep(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var u=wl(a);o.call(u)}}var a=Dd(t,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=a,e[lt]=a.current,or(e.nodeType===8?e.parentNode:e),Bt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var u=wl(s);i.call(u)}}var s=ti(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=s,e[lt]=s.current,or(e.nodeType===8?e.parentNode:e),Bt(function(){$l(t,s,n,r)}),s}function Fl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var i=l;l=function(){var s=wl(a);i.call(s)}}$l(t,a,e,l)}else a=Ep(n,t,e,l,r);return wl(a)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(Sa(t,n|1),ke(t,G()),!(M&6)&&(kn=G()+500,zt()))}break;case 13:Bt(function(){var r=ot(e,1);if(r!==null){var l=pe();He(r,e,1,l)}}),ni(e,1)}};Ea=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=pe();He(t,e,134217728,n)}ni(e,134217728)}};mu=function(e){if(e.tag===13){var t=wt(e),n=ot(e,t);if(n!==null){var r=pe();He(n,e,t,r)}ni(e,t)}};gu=function(){return D};vu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};No=function(e,t,n){switch(t){case"input":if(_o(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Pl(r);if(!l)throw Error(k(90));Ks(r),_o(r,l)}}}break;case"textarea":Zs(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};ru=Xa;lu=Bt;var Cp={usingClientEntryPoint:!1,Events:[vr,en,Pl,tu,nu,Xa]},In={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tp={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{Tl=Dr.inject(Tp),Ze=Dr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!li(t))throw Error(k(200));return _p(e,t,null,n)};ze.createRoot=function(e,t){if(!li(e))throw Error(k(299));var n=!1,r="",l=Od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ti(e,1,!1,null,null,n,!1,r,l),e[lt]=t.current,or(e.nodeType===8?e.parentNode:e),new ri(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Bt(e)};ze.hydrate=function(e,t,n){if(!Ol(t))throw Error(k(200));return Fl(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!li(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Od;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Dd(t,null,e,1,n??null,l,!1,o,a),e[lt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Dl(t)};ze.render=function(e,t,n){if(!Ol(t))throw Error(k(200));return Fl(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(k(40));return e._reactRootContainer?(Bt(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};ze.unstable_batchedUpdates=Xa;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Fl(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd)}catch(e){console.error(e)}}Fd(),Fs.exports=ze;var zp=Fs.exports,Ud,ws=zp;Ud=ws.createRoot,ws.hydrateRoot;const jp="modulepreload",Np=function(e,t){return new URL(e,t).href},_s={},Pp=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));l=Promise.allSettled(n.map(u=>{if(u=Np(u,r),u in _s)return;_s[u]=!0;const c=u.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(!!r)for(let y=a.length-1;y>=0;y--){const w=a[y];if(w.href===u&&(!c||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const v=document.createElement("link");if(v.rel=c?"stylesheet":jp,c||(v.as="script"),v.crossOrigin="",v.href=u,s&&v.setAttribute("nonce",s),document.head.appendChild(v),c)return new Promise((y,w)=>{v.addEventListener("load",y),v.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return l.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return t().catch(o)})};function oi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Qt=oi();function Bd(e){Qt=e}const Vd=/[&<>"']/,bp=new RegExp(Vd.source,"g"),Hd=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ip=new RegExp(Hd.source,"g"),Lp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ss=e=>Lp[e];function Se(e,t){if(t){if(Vd.test(e))return e.replace(bp,Ss)}else if(Hd.test(e))return e.replace(Ip,Ss);return e}const Rp=/(^|[^\[])\^/g;function O(e,t){let n=typeof e=="string"?e:e.source;t=t||"";const r={replace:(l,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Rp,"$1"),n=n.replace(l,a),r},getRegex:()=>new RegExp(n,t)};return r}function Es(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Yn={exec:()=>null};function Cs(e,t){const n=e.replace(/\|/g,(o,a,i)=>{let s=!1,u=a;for(;--u>=0&&i[u]==="\\";)s=!s;return s?"|":" |"}),r=n.split(/ \|/);let l=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(/\\\|/g,"|");return r}function Ln(e,t,n){const r=e.length;if(r===0)return"";let l=0;for(;l<r&&e.charAt(r-l-1)===t;)l++;return e.slice(0,r-l)}function Ap(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return-1}function Ts(e,t,n,r){const l=t.href,o=t.title?Se(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const i={type:"link",raw:n,href:l,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,i}return{type:"image",raw:n,href:l,title:o,text:Se(a)}}function Mp(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const r=n[1];return t.split(`
`).map(l=>{const o=l.match(/^\s+/);if(o===null)return l;const[a]=o;return a.length>=r.length?l.slice(r.length):l}).join(`
`)}class _l{constructor(t){F(this,"options");F(this,"rules");F(this,"lexer");this.options=t||Qt}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ln(r,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const r=n[0],l=Mp(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:l}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let r=n[2].trim();if(/#$/.test(r)){const l=Ln(r,"#");(this.options.pedantic||!l||/ $/.test(l))&&(r=l.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:Ln(n[0],`
`)}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){let r=Ln(n[0],`
`).split(`
`),l="",o="";const a=[];for(;r.length>0;){let i=!1;const s=[];let u;for(u=0;u<r.length;u++)if(/^ {0,3}>/.test(r[u]))s.push(r[u]),i=!0;else if(!i)s.push(r[u]);else break;r=r.slice(u);const c=s.join(`
`),m=c.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");l=l?`${l}
${c}`:c,o=o?`${o}
${m}`:m;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,a,!0),this.lexer.state.top=h,r.length===0)break;const v=a[a.length-1];if((v==null?void 0:v.type)==="code")break;if((v==null?void 0:v.type)==="blockquote"){const y=v,w=y.raw+`
`+r.join(`
`),b=this.blockquote(w);a[a.length-1]=b,l=l.substring(0,l.length-y.raw.length)+b.raw,o=o.substring(0,o.length-y.text.length)+b.text;break}else if((v==null?void 0:v.type)==="list"){const y=v,w=y.raw+`
`+r.join(`
`),b=this.list(w);a[a.length-1]=b,l=l.substring(0,l.length-v.raw.length)+b.raw,o=o.substring(0,o.length-y.raw.length)+b.raw,r=w.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:a,text:o}}}list(t){let n=this.rules.block.list.exec(t);if(n){let r=n[1].trim();const l=r.length>1,o={type:"list",raw:"",ordered:l,start:l?+r.slice(0,-1):"",loose:!1,items:[]};r=l?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=l?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let i=!1;for(;t;){let s=!1,u="",c="";if(!(n=a.exec(t))||this.rules.block.hr.test(t))break;u=n[0],t=t.substring(u.length);let m=n[2].split(`
`,1)[0].replace(/^\t+/,f=>" ".repeat(3*f.length)),h=t.split(`
`,1)[0],v=!m.trim(),y=0;if(this.options.pedantic?(y=2,c=m.trimStart()):v?y=n[1].length+1:(y=n[2].search(/[^ ]/),y=y>4?1:y,c=m.slice(y),y+=n[1].length),v&&/^[ \t]*$/.test(h)&&(u+=h+`
`,t=t.substring(h.length+1),s=!0),!s){const f=new RegExp(`^ {0,${Math.min(3,y-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),d=new RegExp(`^ {0,${Math.min(3,y-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),p=new RegExp(`^ {0,${Math.min(3,y-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,y-1)}}#`),S=new RegExp(`^ {0,${Math.min(3,y-1)}}<[a-z].*>`,"i");for(;t;){const T=t.split(`
`,1)[0];let E;if(h=T,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),E=h):E=h.replace(/\t/g,"    "),p.test(h)||x.test(h)||S.test(h)||f.test(h)||d.test(h))break;if(E.search(/[^ ]/)>=y||!h.trim())c+=`
`+E.slice(y);else{if(v||m.replace(/\t/g,"    ").search(/[^ ]/)>=4||p.test(m)||x.test(m)||d.test(m))break;c+=`
`+h}!v&&!h.trim()&&(v=!0),u+=T+`
`,t=t.substring(T.length+1),m=E.slice(y)}}o.loose||(i?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(u)&&(i=!0));let w=null,b;this.options.gfm&&(w=/^\[[ xX]\] /.exec(c),w&&(b=w[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:u,task:!!w,checked:b,loose:!1,text:c,tokens:[]}),o.raw+=u}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let s=0;s<o.items.length;s++)if(this.lexer.state.top=!1,o.items[s].tokens=this.lexer.blockTokens(o.items[s].text,[]),!o.loose){const u=o.items[s].tokens.filter(m=>m.type==="space"),c=u.length>0&&u.some(m=>/\n.*\n/.test(m.raw));o.loose=c}if(o.loose)for(let s=0;s<o.items.length;s++)o.items[s].loose=!0;return o}}html(t){const n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){const n=this.rules.block.def.exec(t);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),l=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:l,title:o}}}table(t){const n=this.rules.block.table.exec(t);if(!n||!/[:|]/.test(n[2]))return;const r=Cs(n[1]),l=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===l.length){for(const i of l)/^ *-+: *$/.test(i)?a.align.push("right"):/^ *:-+: *$/.test(i)?a.align.push("center"):/^ *:-+ *$/.test(i)?a.align.push("left"):a.align.push(null);for(let i=0;i<r.length;i++)a.header.push({text:r[i],tokens:this.lexer.inline(r[i]),header:!0,align:a.align[i]});for(const i of o)a.rows.push(Cs(i,a.header.length).map((s,u)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:a.align[u]})));return a}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:Se(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Ln(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=Ap(n[2],"()");if(a>-1){const s=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let l=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);a&&(l=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(r)?l=l.slice(1):l=l.slice(1,-1)),Ts(n,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(t,n){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){const l=(r[2]||r[1]).replace(/\s+/g," "),o=n[l.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Ts(r,o,r[0],this.lexer)}}emStrong(t,n,r=""){let l=this.rules.inline.emStrongLDelim.exec(t);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(l[1]||l[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...l[0]].length-1;let i,s,u=a,c=0;const m=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,n=n.slice(-1*t.length+a);(l=m.exec(n))!=null;){if(i=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!i)continue;if(s=[...i].length,l[3]||l[4]){u+=s;continue}else if((l[5]||l[6])&&a%3&&!((a+s)%3)){c+=s;continue}if(u-=s,u>0)continue;s=Math.min(s,s+u+c);const h=[...l[0]][0].length,v=t.slice(0,a+l.index+h+s);if(Math.min(a,s)%2){const w=v.slice(1,-1);return{type:"em",raw:v,text:w,tokens:this.lexer.inlineTokens(w)}}const y=v.slice(2,-2);return{type:"strong",raw:v,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let r=n[2].replace(/\n/g," ");const l=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return l&&o&&(r=r.substring(1,r.length-1)),r=Se(r,!0),{type:"codespan",raw:n[0],text:r}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){const n=this.rules.inline.autolink.exec(t);if(n){let r,l;return n[2]==="@"?(r=Se(n[1]),l="mailto:"+r):(r=Se(n[1]),l=r),{type:"link",raw:n[0],text:r,href:l,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let n;if(n=this.rules.inline.url.exec(t)){let l,o;if(n[2]==="@")l=Se(n[0]),o="mailto:"+l;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);l=Se(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(t){const n=this.rules.inline.text.exec(t);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Se(n[0]),{type:"text",raw:n[0],text:r}}}}const $p=/^(?:[ \t]*(?:\n|$))+/,Dp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Op=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,xr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Fp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,qd=/(?:[*+-]|\d{1,9}[.)])/,Qd=O(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,qd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),ai=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Up=/^[^\n]+/,ii=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Bp=O(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ii).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Vp=O(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,qd).getRegex(),Ul="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",si=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Hp=O("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",si).replace("tag",Ul).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Wd=O(ai).replace("hr",xr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),qp=O(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Wd).getRegex(),ui={blockquote:qp,code:Dp,def:Bp,fences:Op,heading:Fp,hr:xr,html:Hp,lheading:Qd,list:Vp,newline:$p,paragraph:Wd,table:Yn,text:Up},zs=O("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",xr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),Qp={...ui,table:zs,paragraph:O(ai).replace("hr",xr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",zs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex()},Wp={...ui,html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",si).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Yn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(ai).replace("hr",xr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Qd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Kd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Kp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yd=/^( {2,}|\\)\n(?!\s*$)/,Yp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,kr="\\p{P}\\p{S}",Zp=O(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,kr).getRegex(),Xp=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Gp=O(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,kr).getRegex(),Jp=O("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,kr).getRegex(),eh=O("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,kr).getRegex(),th=O(/\\([punct])/,"gu").replace(/punct/g,kr).getRegex(),nh=O(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rh=O(si).replace("(?:-->|$)","-->").getRegex(),lh=O("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Sl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,oh=O(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Sl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zd=O(/^!?\[(label)\]\[(ref)\]/).replace("label",Sl).replace("ref",ii).getRegex(),Xd=O(/^!?\[(ref)\](?:\[\])?/).replace("ref",ii).getRegex(),ah=O("reflink|nolink(?!\\()","g").replace("reflink",Zd).replace("nolink",Xd).getRegex(),di={_backpedal:Yn,anyPunctuation:th,autolink:nh,blockSkip:Xp,br:Yd,code:Kp,del:Yn,emStrongLDelim:Gp,emStrongRDelimAst:Jp,emStrongRDelimUnd:eh,escape:Kd,link:oh,nolink:Xd,punctuation:Zp,reflink:Zd,reflinkSearch:ah,tag:lh,text:Yp,url:Yn},ih={...di,link:O(/^!?\[(label)\]\((.*?)\)/).replace("label",Sl).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Sl).getRegex()},sa={...di,escape:O(Kd).replace("])","~|])").getRegex(),url:O(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},sh={...sa,br:O(Yd).replace("{2,}","*").getRegex(),text:O(sa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Or={normal:ui,gfm:Qp,pedantic:Wp},Rn={normal:di,gfm:sa,breaks:sh,pedantic:ih};class Ie{constructor(t){F(this,"tokens");F(this,"options");F(this,"state");F(this,"tokenizer");F(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Qt,this.options.tokenizer=this.options.tokenizer||new _l,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Or.normal,inline:Rn.normal};this.options.pedantic?(n.block=Or.pedantic,n.inline=Rn.pedantic):this.options.gfm&&(n.block=Or.gfm,this.options.breaks?n.inline=Rn.breaks:n.inline=Rn.gfm),this.tokenizer.rules=n}static get rules(){return{block:Or,inline:Rn}}static lex(t,n){return new Ie(n).lex(t)}static lexInline(t,n){return new Ie(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){this.options.pedantic&&(t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""));let l,o,a;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(l=i.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length),l.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+l.raw,o.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(a=t,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const s=t.slice(1);let u;this.options.extensions.startBlock.forEach(c=>{u=c.call({lexer:this},s),typeof u=="number"&&u>=0&&(i=Math.min(i,u))}),i<1/0&&i>=0&&(a=t.substring(0,i+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(l),r=a.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(l);continue}if(t){const i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r,l,o,a=t,i,s,u;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,i.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(s||(u=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(r=c.call({lexer:this},t,n))?(t=t.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(t)){t=t.substring(r.raw.length),l=n[n.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(r.raw.length),l=n[n.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(t,a,u)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(t)){t=t.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(t))){t=t.substring(r.raw.length),n.push(r);continue}if(o=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const m=t.slice(1);let h;this.options.extensions.startInline.forEach(v=>{h=v.call({lexer:this},m),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(o=t.substring(0,c+1))}if(r=this.tokenizer.inlineText(o)){t=t.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),s=!0,l=n[n.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):n.push(r);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}}class El{constructor(t){F(this,"options");F(this,"parser");this.options=t||Qt}space(t){return""}code({text:t,lang:n,escaped:r}){var a;const l=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=t.replace(/\n$/,"")+`
`;return l?'<pre><code class="language-'+Se(l)+'">'+(r?o:Se(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Se(o,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:n}){return`<h${n}>${this.parser.parseInline(t)}</h${n}>
`}hr(t){return`<hr>
`}list(t){const n=t.ordered,r=t.start;let l="";for(let i=0;i<t.items.length;i++){const s=t.items[i];l+=this.listitem(s)}const o=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+o+a+`>
`+l+"</"+o+`>
`}listitem(t){let n="";if(t.task){const r=this.checkbox({checked:!!t.checked});t.loose?t.tokens.length>0&&t.tokens[0].type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(t.tokens,!!t.loose),`<li>${n}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let n="",r="";for(let o=0;o<t.header.length;o++)r+=this.tablecell(t.header[o]);n+=this.tablerow({text:r});let l="";for(let o=0;o<t.rows.length;o++){const a=t.rows[o];r="";for(let i=0;i<a.length;i++)r+=this.tablecell(a[i]);l+=this.tablerow({text:r})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+l+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const n=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${t}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:n,tokens:r}){const l=this.parser.parseInline(r),o=Es(t);if(o===null)return l;t=o;let a='<a href="'+t+'"';return n&&(a+=' title="'+n+'"'),a+=">"+l+"</a>",a}image({href:t,title:n,text:r}){const l=Es(t);if(l===null)return r;t=l;let o=`<img src="${t}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):t.text}}class ci{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}}class Le{constructor(t){F(this,"options");F(this,"renderer");F(this,"textRenderer");this.options=t||Qt,this.options.renderer=this.options.renderer||new El,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ci}static parse(t,n){return new Le(n).parse(t)}static parseInline(t,n){return new Le(n).parseInline(t)}parse(t,n=!0){let r="";for(let l=0;l<t.length;l++){const o=t[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const i=o,s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){r+=s||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let i=a,s=this.renderer.text(i);for(;l+1<t.length&&t[l+1].type==="text";)i=t[++l],s+=`
`+this.renderer.text(i);n?r+=this.renderer.paragraph({type:"paragraph",raw:s,text:s,tokens:[{type:"text",raw:s,text:s}]}):r+=s;continue}default:{const i='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return r}parseInline(t,n){n=n||this.renderer;let r="";for(let l=0;l<t.length;l++){const o=t[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const i=this.options.extensions.renderers[o.type].call({parser:this},o);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=i||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const i='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return r}}class Zn{constructor(t){F(this,"options");F(this,"block");this.options=t||Qt}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Ie.lex:Ie.lexInline}provideParser(){return this.block?Le.parse:Le.parseInline}}F(Zn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class uh{constructor(...t){F(this,"defaults",oi());F(this,"options",this.setOptions);F(this,"parse",this.parseMarkdown(!0));F(this,"parseInline",this.parseMarkdown(!1));F(this,"Parser",Le);F(this,"Renderer",El);F(this,"TextRenderer",ci);F(this,"Lexer",Ie);F(this,"Tokenizer",_l);F(this,"Hooks",Zn);this.use(...t)}walkTokens(t,n){var l,o;let r=[];for(const a of t)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const i=a;for(const s of i.header)r=r.concat(this.walkTokens(s.tokens,n));for(const s of i.rows)for(const u of s)r=r.concat(this.walkTokens(u.tokens,n));break}case"list":{const i=a;r=r.concat(this.walkTokens(i.items,n));break}default:{const i=a;(o=(l=this.defaults.extensions)==null?void 0:l.childTokens)!=null&&o[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{const u=i[s].flat(1/0);r=r.concat(this.walkTokens(u,n))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,n)))}}return r}use(...t){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{const l={...r};if(l.async=this.defaults.async||l.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...i){let s=o.renderer.apply(this,i);return s===!1&&(s=a.apply(this,i)),s}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),l.extensions=n),r.renderer){const o=this.defaults.renderer||new El(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const i=a,s=r.renderer[i],u=o[i];o[i]=(...c)=>{let m=s.apply(o,c);return m===!1&&(m=u.apply(o,c)),m||""}}l.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new _l(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const i=a,s=r.tokenizer[i],u=o[i];o[i]=(...c)=>{let m=s.apply(o,c);return m===!1&&(m=u.apply(o,c)),m}}l.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Zn;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const i=a,s=r.hooks[i],u=o[i];Zn.passThroughHooks.has(a)?o[i]=c=>{if(this.defaults.async)return Promise.resolve(s.call(o,c)).then(h=>u.call(o,h));const m=s.call(o,c);return u.call(o,m)}:o[i]=(...c)=>{let m=s.apply(o,c);return m===!1&&(m=u.apply(o,c)),m}}l.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;l.walkTokens=function(i){let s=[];return s.push(a.call(this,i)),o&&(s=s.concat(o.call(this,i))),s}}this.defaults={...this.defaults,...l}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,n){return Ie.lex(t,n??this.defaults)}parser(t,n){return Le.parse(t,n??this.defaults)}parseMarkdown(t){return(r,l)=>{const o={...l},a={...this.defaults,...o},i=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=t);const s=a.hooks?a.hooks.provideLexer():t?Ie.lex:Ie.lexInline,u=a.hooks?a.hooks.provideParser():t?Le.parse:Le.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(c=>s(c,a)).then(c=>a.hooks?a.hooks.processAllTokens(c):c).then(c=>a.walkTokens?Promise.all(this.walkTokens(c,a.walkTokens)).then(()=>c):c).then(c=>u(c,a)).then(c=>a.hooks?a.hooks.postprocess(c):c).catch(i);try{a.hooks&&(r=a.hooks.preprocess(r));let c=s(r,a);a.hooks&&(c=a.hooks.processAllTokens(c)),a.walkTokens&&this.walkTokens(c,a.walkTokens);let m=u(c,a);return a.hooks&&(m=a.hooks.postprocess(m)),m}catch(c){return i(c)}}}onError(t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const l="<p>An error occurred:</p><pre>"+Se(r.message+"",!0)+"</pre>";return n?Promise.resolve(l):l}if(n)return Promise.reject(r);throw r}}}const Vt=new uh;function $(e,t){return Vt.parse(e,t)}$.options=$.setOptions=function(e){return Vt.setOptions(e),$.defaults=Vt.defaults,Bd($.defaults),$};$.getDefaults=oi;$.defaults=Qt;$.use=function(...e){return Vt.use(...e),$.defaults=Vt.defaults,Bd($.defaults),$};$.walkTokens=function(e,t){return Vt.walkTokens(e,t)};$.parseInline=Vt.parseInline;$.Parser=Le;$.parser=Le.parse;$.Renderer=El;$.TextRenderer=ci;$.Lexer=Ie;$.lexer=Ie.lex;$.Tokenizer=_l;$.Hooks=Zn;$.parse=$;$.options;$.setOptions;$.use;$.walkTokens;$.parseInline;Le.parse;Ie.lex;const dh=[{id:0,tipo:"md",fuente:`# Cuaderno de planta

**Una semana de la planta virtual LX-SX-EW, leída desde sus datos crudos.**

Los datos salen del mismo motor que mueve la [planta virtual](https://jsnn15.github.io/planta-virtual/). Se corrió una semana, del 2 al 9 de noviembre de 2026, con doce fallas programadas y un operador que responde según un guion. Lo exportado imita lo que entregan los sistemas de una planta: historiador, alarmas, bitácora, monitoreo de condición, laboratorio y cierre de turno.

Por ser un simulador, se sabe qué falló y cuándo (\`datos/verdad.json\`). Ese archivo no se usa para detectar nada. Sirve para medir, al final de cada sección, si el análisis encontró lo que había.

| | Pregunta | Lo que salió |
|---|---|---|
| 1 | ¿Qué datos hay? | 8 archivos crudos, cada uno con su huella para saber si cambia |
| 2 | ¿Se puede confiar en el historiador? | Las pruebas encuentran los 7 defectos sembrados y ninguno de más |
| 3 | ¿Qué le pasó a la planta? | 962 t de 1.084 t planificadas: un cambio de mineral explica la baja |
| 4 | ¿Las alarmas ayudan o estorban? | Pocas en promedio, pero dos alarmas que repican suman 29 de las 50 |
| 5 | ¿Cuánto aviso da la vibración? | 4,3 h antes del disparo; la alarma por límite llegó 2,6 h más tarde |
| 6 | ¿El pHmetro se descalibró o cambió el proceso? | 4 de 4 casos bien separados, con ayuda del laboratorio |
| 7 | ¿Sirve un modelo para anticipar la producción? | No con una semana de datos: no le gana a suponer que nada cambia |`},{id:1,tipo:"code",fuente:`import hashlib
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

Ocho archivos CSV, uno por sistema de origen. El manifiesto guarda la huella SHA-256 de cada uno: si un archivo cambia, la comprobación de abajo lo dice.`},{id:3,tipo:"code",fuente:`manifiesto = json.loads((DATOS / 'manifiesto.json').read_text(encoding='utf-8'))
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

print(f'Semana: {turnos.catodo_t.sum():.0f} t de {turnos.plan_t.sum():.0f} t planificadas ({100 * turnos.catodo_t.sum() / turnos.plan_t.sum():.0f} %)')`,n:11,salidas:[{t:"img",claro:"fig/c20-0.png",oscuro:"fig/o20-0.png",w:1312,h:391},{t:"texto",texto:`Semana: 962 t de 1084 t planificadas (89 %)
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
</table>`,valor:!0}]},{id:41,tipo:"md",fuente:"**Lectura.** El detector solo no distingue un sensor que deriva de un mineral distinto: en los dos casos el valor se mueve. La muestra de laboratorio lo resuelve. Si el sensor y el laboratorio coinciden, cambió el proceso; si no, es el instrumento. En la deriva rápida el aviso llega bastante antes que la alarma de planta. En la lenta también, pero ahí la ganancia viene sobre todo de usar un umbral más fino contra el laboratorio (0,05 en vez de 0,15 pH). Ese umbral se eligió mirando esta semana; habría que probarlo con otra."},{id:42,tipo:"md",fuente:`## 7. Sirve un modelo para anticipar la producción

La pregunta es razonable: el cobre tarda horas en pasar de las pilas a la nave, así que lo que se ve aguas arriba debería anticipar el cátodo. Se prueba pronosticar la producción media de la hora que termina cuatro horas después, con dos modelos de scikit-learn y dos cortes en el tiempo: se entrena con lo anterior al corte y se evalúa con lo posterior. La vara es la persistencia: suponer que en cuatro horas se producirá lo mismo que ahora.`},{id:43,tipo:"code",fuente:`from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.linear_model import RidgeCV
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

HORAS = 4
entradas = ['AIT-206', 'KY-304', 'AIT-405', 'IIT-401', 'KY-405', 'AIT-302', 'FIT-205', 'KY-303', 'AIT-208', 'TIT-403', 'AIT-407']
m10 = h.resample('10min').mean()
X = m10[entradas].copy()
for tag in ('AIT-206', 'KY-304', 'AIT-405'):
    X[tag + ' cambio 2 h'] = m10[tag] - m10[tag].shift(12)
ahora_ = m10['KY-405'].rolling(6).mean()
tabla = X.assign(objetivo=ahora_.shift(-6 * HORAS), persistencia=ahora_).dropna()

filas = []
for corte in ('2026-11-06 08:00', '2026-11-07 00:00'):
    entrena = tabla.loc[:corte]
    prueba = tabla.loc[pd.Timestamp(corte) + pd.Timedelta(hours=HORAS) :]  # se deja un hueco: el objetivo mira 4 h adelante
    Xe, Xp = entrena.drop(columns=['objetivo', 'persistencia']), prueba.drop(columns=['objetivo', 'persistencia'])
    modelos = {
        'regresión ridge': make_pipeline(StandardScaler(), RidgeCV(alphas=np.logspace(-2, 3, 12))),
        'gradient boosting': HistGradientBoostingRegressor(max_depth=3, learning_rate=0.05, max_iter=300, random_state=0),
    }
    fila = {'corte': corte, 'horas de entrenamiento': round(len(entrena) / 6), 'horas de prueba': round(len(prueba) / 6), 'persistencia': (prueba.objetivo - prueba.persistencia).abs().mean()}
    for nombre, modelo in modelos.items():
        fila[nombre] = np.abs(prueba.objetivo - modelo.fit(Xe, entrena.objetivo).predict(Xp)).mean()
    filas.append(fila)
errores = pd.DataFrame(filas).set_index('corte')
errores.columns = pd.MultiIndex.from_tuples([('', c) if 'horas' in c else ('error absoluto medio (t/h)', c) for c in errores.columns])
errores`,n:23,salidas:[{t:"html",html:`<table class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left"></th>
      <th colspan="3" halign="left">error absoluto medio (t/h)</th>
    </tr>
    <tr>
      <th></th>
      <th>horas de entrenamiento</th>
      <th>horas de prueba</th>
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
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2026-11-06 08:00</th>
      <td>90</td>
      <td>62</td>
      <td>0.235</td>
      <td>0.21</td>
      <td>0.349</td>
    </tr>
    <tr>
      <th>2026-11-07 00:00</th>
      <td>106</td>
      <td>46</td>
      <td>0.165</td>
      <td>0.56</td>
      <td>0.396</td>
    </tr>
  </tbody>
</table>`,valor:!0}]},{id:44,tipo:"md",fuente:"**Lectura.** No. La regresión gana por poco en un corte y pierde por mucho en el otro; el gradient boosting pierde en los dos. Una semana trae un solo cambio de mineral: no alcanza para que un modelo aprenda cómo responde la planta. Con meses de historiador la respuesta puede ser otra; con estos datos, lo honesto es no publicar un modelo."},{id:45,tipo:"md",fuente:`## Registro de la corrida

Lo necesario para repetir este cuaderno y comparar con una corrida futura: de qué datos salió, con qué versiones y qué números dio.`},{id:46,tipo:"code",fuente:`import platform

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
        'pronostico_gana_a_persistencia': bool((errores['error absoluto medio (t/h)'].drop(columns='persistencia').min(axis=1) < errores['error absoluto medio (t/h)']['persistencia']).all()),
    },
}
print(json.dumps(registro, indent=2, ensure_ascii=False))`,n:24,salidas:[{t:"texto",texto:`{
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
    "pronostico_gana_a_persistencia": false
  }
}
`}]}],ch={python:"3.13.18",pandas:"3.0.5"},fh="2026-11-15",ph=25,hh=18,Kt={celdas:dh,versiones:ch,ejecutado:fh,descarga_mb:ph,sklearn_mb:hh},mh=[{nombre:"historiador.csv",que:"Historiador de proceso: una fila por minuto, una columna por tag",sistema:"DCS / historiador",filas:10071,bytes:3068198,sha256:"b47e0996af14ea18a14640c85957401c8b7391b3cc41d7312e38ca03644eb9f8",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"WIT-101",tipo:"decimal"},{nombre:"SIT-101",tipo:"decimal"},{nombre:"FIT-102",tipo:"decimal"},{nombre:"KY-102",tipo:"decimal"},{nombre:"FIT-104",tipo:"decimal"},{nombre:"AIT-105",tipo:"decimal"},{nombre:"LIT-103",tipo:"decimal"},{nombre:"PIT-202",tipo:"decimal"},{nombre:"FIT-211",tipo:"decimal"},{nombre:"FIT-212",tipo:"decimal"},{nombre:"FIT-213",tipo:"decimal"},{nombre:"FIT-200",tipo:"decimal"},{nombre:"LIT-201",tipo:"decimal"},{nombre:"FIT-206",tipo:"decimal"},{nombre:"FIT-203",tipo:"decimal"},{nombre:"LIT-204",tipo:"decimal"},{nombre:"AIT-206",tipo:"decimal"},{nombre:"AIT-207",tipo:"decimal"},{nombre:"FIT-205",tipo:"decimal"},{nombre:"AIT-208",tipo:"decimal"},{nombre:"FIT-301",tipo:"decimal"},{nombre:"KY-301",tipo:"decimal"},{nombre:"AIT-302",tipo:"decimal"},{nombre:"KY-303",tipo:"decimal"},{nombre:"LIT-303",tipo:"decimal"},{nombre:"AIT-309",tipo:"decimal"},{nombre:"KY-304",tipo:"decimal"},{nombre:"IIT-401",tipo:"decimal"},{nombre:"EIT-401",tipo:"decimal"},{nombre:"JIT-401",tipo:"decimal"},{nombre:"KY-401",tipo:"decimal"},{nombre:"KY-402",tipo:"decimal"},{nombre:"FIT-402",tipo:"decimal"},{nombre:"TIT-403",tipo:"decimal"},{nombre:"AIT-405",tipo:"decimal"},{nombre:"AIT-406",tipo:"decimal"},{nombre:"AIT-407",tipo:"decimal"},{nombre:"AIT-408",tipo:"decimal"},{nombre:"LIT-401",tipo:"decimal"},{nombre:"KY-405",tipo:"decimal"},{nombre:"KY-406",tipo:"decimal"},{nombre:"KY-407",tipo:"decimal"},{nombre:"FIT-404",tipo:"decimal"},{nombre:"FIT-409",tipo:"decimal"},{nombre:"JIT-500",tipo:"decimal"},{nombre:"KY-501",tipo:"decimal"},{nombre:"KY-502",tipo:"decimal"},{nombre:"LIT-501",tipo:"decimal"},{nombre:"LIT-502",tipo:"decimal"}],muestra:[["2026-11-02 08:00:00",1751.1,77.8,18.71,20.1,120,9.15,55,3.998,732.7,729.9,733.8,2197.3,2.998,65.6,2130.5,2.998,3.25,1.895,2129.9,.227,1919.2,.898,5.633,93.11,.281,146.5,6.417,36.67,313.8,11.51,304.3,1.963,999.4,44.95,43.95,182,700.3,149.7,62.2,6.579,94.94,1739.6,52.4,6.96,14.33,.859,8.52,1398.6,3008.9],["2026-11-02 08:01:00",1753.1,76.3,18.46,19.48,119.4,9.14,54.2,3.968,733,733.6,731.5,2190.3,3.011,66.3,2135,3.002,3.233,1.91,2136.1,.226,1921.8,.898,5.674,92.97,.28,148.2,6.435,36.74,313.7,11.53,306.4,1.963,1006,45.02,43.97,182.1,694.2,150,62,6.609,94.91,1737.7,52.5,7,14.31,.86,8.48,1403.3,3007.9],["2026-11-02 08:02:00",1799.8,77.1,18.86,19.83,121.3,9.2,53.9,3.993,732.7,734.9,735.8,2198.6,3.001,65.5,2134.3,2.997,3.239,1.889,2134.9,.22,1916.9,.903,5.65,93.01,.281,151.8,6.432,36.69,313.3,11.53,304.8,1.961,1000.5,45.03,43.91,182.1,702.8,149.6,61.8,6.606,94.97,1748.3,52.5,7,14.3,.859,8.49,1398.4,3017.1],["2026-11-02 08:03:00",1629,77,18.52,20.17,119,9.25,53.2,3.958,729.1,737.1,731.8,2208.6,3.002,65.7,2129.2,2.988,3.236,1.897,2126.8,.229,1917.9,.903,5.657,93.06,.281,145.8,6.418,36.69,313.3,11.48,305.8,1.959,1004,44.94,43.9,182.1,696.1,150.3,61.9,6.587,94.98,1744.2,52.6,6.96,14.29,.86,8.51,1400.1,3005.1],["2026-11-02 08:04:00",1656.1,76.8,18.34,19.97,118,9.24,53.1,3.984,734,735.4,730,2195.3,2.984,66.2,2128,3.004,3.244,1.904,2137.8,.228,1930.6,.901,5.677,92.9,.282,149.5,6.404,36.58,313.1,11.48,305.4,1.962,1001.7,45,43.94,182.1,705.6,150.6,62.2,6.591,94.93,1743,52.2,7,14.27,.859,8.51,1400.5,3001.8],["2026-11-02 08:05:00",1625.5,78.3,18.03,20.59,115.9,9.15,52.4,3.987,732.5,735,733,2204.8,3.013,65.9,2138.4,3.005,3.249,1.903,2131.2,.225,1915,.901,5.649,92.98,.282,149.4,6.443,36.54,312.6,11.51,305.8,1.961,996.8,45.06,43.88,182.3,698.4,149.9,62.1,6.602,94.87,1736.5,52.7,6.98,14.27,.859,8.52,1401.8,3004.3]]},{nombre:"alarmas.csv",que:"Registro de alarmas: activación, reconocimiento y normalización",sistema:"Sistema de alarmas",filas:129,bytes:13063,sha256:"36cbbac3eef793942ae6ff1317ebfc483708170168fb158ea691d19e06678692",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"alarma",tipo:"texto"},{nombre:"evento",tipo:"texto"},{nombre:"prioridad",tipo:"entero"},{nombre:"area",tipo:"entero"},{nombre:"tag",tipo:"texto"},{nombre:"tipo",tipo:"texto"},{nombre:"descripcion",tipo:"texto"}],muestra:[["2026-11-02 14:20:01","CV-101.TRIP","ACTIVA",1,100,"CV-101","DISC","CV-101 Correa de alimentación: disparo (cordón de emergencia)"],["2026-11-02 14:20:38","CV-101.TRIP","RECONOCE",1,100,"CV-101","DISC","CV-101 Correa de alimentación: disparo (cordón de emergencia)"],["2026-11-02 14:23:01","CV-101.TRIP","NORMALIZA",1,100,"CV-101","DISC","CV-101 Correa de alimentación: disparo"],["2026-11-03 03:10:01","P-201A.TRIP","ACTIVA",1,200,"P-201A","DISC","P-201A Bomba de riego A: disparo (sobrecorriente)"],["2026-11-03 03:11:37","P-201A.TRIP","RECONOCE",1,200,"P-201A","DISC","P-201A Bomba de riego A: disparo (sobrecorriente)"],["2026-11-03 03:45:01","P-201A.TRIP","NORMALIZA",1,200,"P-201A","DISC","P-201A Bomba de riego A: disparo"]]},{nombre:"bitacora.csv",que:"Bitácora: órdenes del operador, disparos, secuencias y mantenimiento",sistema:"Bitácora de sala de control",filas:487,bytes:33599,sha256:"0b642e7e21d13269c4cba7403edc0ab60c9b468377b9839b67353faaec8c75c9",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"quien",tipo:"texto"},{nombre:"clase",tipo:"texto"},{nombre:"mensaje",tipo:"texto"}],muestra:[["2026-11-02 11:50:00","Mantenimiento","op","Ronda manual de la nave: 8 celdas con cortocircuito encontradas"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 4"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 14"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 38"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 48"],["2026-11-02 12:00:00","Mantenimiento","op","Cuadrilla enviada a corregir celda 115"]]},{nombre:"vibraciones.csv",que:"Monitoreo de condición: una lectura cada 5 min por motor",sistema:"Monitoreo de condición",filas:32272,bytes:1476698,sha256:"5a3004d71d7f45b5cfaf4240ccc328baa5318a47b7f39440a3aff477b61aac65",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"equipo",tipo:"texto"},{nombre:"estado",tipo:"texto"},{nombre:"vibracion_mm_s",tipo:"decimal"},{nombre:"temperatura_c",tipo:"decimal"},{nombre:"corriente_a",tipo:"decimal"}],muestra:[["2026-11-02 08:00:00","M-103","RUN",1.723,54.6,33.5],["2026-11-02 08:00:00","CV-101","RUN",2.226,54.6,23.5],["2026-11-02 08:00:00","FD-101","RUN",1.382,54.6,53.5],["2026-11-02 08:00:00","P-102","RUN",1.376,54.6,10.7],["2026-11-02 08:00:00","P-104","RUN",1.343,54.6,39.2],["2026-11-02 08:00:00","P-201A","RUN",2.35,54.7,67.1]]},{nombre:"laboratorio.csv",que:"Laboratorio: pH del PLS cada 2 h y compósito de cátodo por turno",sistema:"Laboratorio",filas:147,bytes:5346,sha256:"63b95806c0a724ad02a6782653f5d18092052a321a7d1165085bb43cb911d4b0",columnas:[{nombre:"fecha",tipo:"fecha y hora"},{nombre:"muestra",tipo:"texto"},{nombre:"analito",tipo:"texto"},{nombre:"valor",tipo:"decimal"},{nombre:"unidad",tipo:"texto"}],muestra:[["2026-11-02 09:50:00","PLS","pH",1.9,"pH"],["2026-11-02 11:50:00","PLS","pH",1.9,"pH"],["2026-11-02 13:50:00","PLS","pH",1.9,"pH"],["2026-11-02 15:50:00","PLS","pH",1.9,"pH"],["2026-11-02 16:00:00","Cátodo","Pb",1.2,"ppm"],["2026-11-02 16:00:00","Cátodo","S",3,"ppm"]]},{nombre:"turnos.csv",que:"Cierre de turno: producción, consumos, pérdidas y alarmas",sistema:"Reporte de turno",filas:21,bytes:1381,sha256:"7ddc54029db765ccf91a9e669d28d7123187da93ee8471cc611d84dc87a4f17e",columnas:[{nombre:"fecha_cierre",tipo:"fecha y hora"},{nombre:"turno",tipo:"texto"},{nombre:"catodo_t",tipo:"decimal"},{nombre:"plan_t",tipo:"decimal"},{nombre:"energia_mwh",tipo:"decimal"},{nombre:"acido_t",tipo:"decimal"},{nombre:"mineral_t",tipo:"entero"},{nombre:"perdida_cortos_t",tipo:"decimal"},{nombre:"perdida_rectificador_t",tipo:"decimal"},{nombre:"detencion_min",tipo:"entero"},{nombre:"alarmas",tipo:"entero"}],muestra:[["2026-11-02 16:00:00","A",49.99,51.6,108.3,268.1,13411,.1,0,0,1],["2026-11-03 00:00:00","B",50.3,51.6,109,272,13600,.04,0,0,0],["2026-11-03 08:00:00","C",50.22,51.6,108.9,272,13600,.07,0,0,1],["2026-11-03 16:00:00","A",50.23,51.6,108.9,272,13600,.06,0,0,1],["2026-11-04 00:00:00","B",50.22,51.6,108.9,272,13600,.05,0,0,0],["2026-11-04 08:00:00","C",50.23,51.6,108.3,241.5,12079,.08,0,0,23]]},{nombre:"tags.csv",que:"Diccionario de tags: descripción, unidad, rango del instrumento y banda normal",sistema:"Configuración",filas:49,bytes:2567,sha256:"2dcb15bbecb5bc0f87eb6c89d06852c4bb92710ace8aa0305e92ae395cb26c25",columnas:[{nombre:"tag",tipo:"texto"},{nombre:"descripcion",tipo:"texto"},{nombre:"unidad",tipo:"texto"},{nombre:"area",tipo:"entero"},{nombre:"rango_min",tipo:"decimal"},{nombre:"rango_max",tipo:"decimal"},{nombre:"normal_min",tipo:"decimal"},{nombre:"normal_max",tipo:"decimal"}],muestra:[["WIT-101","Tonelaje en pesómetro","t/h",100,0,2500,1500,1900],["SIT-101","Velocidad alimentador","%",100,0,100,50,95],["FIT-102","Caudal de ácido","m³/h",100,0,30,14,23],["KY-102","Dosis real de ácido","kg/t",100,0,40,18,22],["FIT-104","Caudal de agua","m³/h",100,0,250,90,150],["AIT-105","Humedad del aglomerado","%",100,0,20,8,10.5]]},{nombre:"equipos.csv",que:"Motores: potencia, centro de control y límites de vibración ISO 20816-3",sistema:"Configuración",filas:16,bytes:1055,sha256:"77377423264f70eb70375f1d9b539dbc617ea2c8f3307b0305a3f1b2b77ba88c",columnas:[{nombre:"equipo",tipo:"texto"},{nombre:"descripcion",tipo:"texto"},{nombre:"area",tipo:"entero"},{nombre:"potencia_kw",tipo:"entero"},{nombre:"mcc",tipo:"texto"},{nombre:"grupo_iso",tipo:"entero"},{nombre:"limite_ab",tipo:"decimal"},{nombre:"limite_bc",tipo:"decimal"},{nombre:"limite_cd",tipo:"decimal"}],muestra:[["M-103","Tambor aglomerador AD-101",100,450,"MCC-100",1,2.3,4.5,7.1],["CV-101","Correa de alimentación",100,315,"MCC-100",1,2.3,4.5,7.1],["FD-101","Alimentador de mineral (VDF)",100,75,"MCC-100",2,1.4,2.8,4.5],["P-102","Bomba de ácido al tambor",100,15,"MCC-100",2,1.4,2.8,4.5],["P-104","Bomba de agua al tambor",100,55,"MCC-100",2,1.4,2.8,4.5],["P-201A","Bomba de riego A",200,900,"MCC-200",1,2.3,4.5,7.1]]}],fi={archivos:mh},gh=new Set("False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield".split(" ")),vh=new Set("print len range int float str bool list dict set tuple min max sum abs round sorted enumerate zip map any all isinstance open type".split(" ")),mo=e=>e.replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),yh=/(#[^\n]*)|((?:[rfbRFB]{0,2})(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'))|(\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|([A-Za-z_]\w*)(?=(\s*\()?)|([\s\S])/g;function ua(e){let t="",n="";return e.replace(yh,(r,l,o,a,i,s,u)=>(l?t+=`<span class="tk-c">${mo(l)}</span>`:o?t+=`<span class="tk-s">${mo(o)}</span>`:a?t+=`<span class="tk-n">${a}</span>`:i?(gh.has(i)?t+=`<span class="tk-k">${i}</span>`:n==="def"||n==="class"?t+=`<span class="tk-d">${i}</span>`:vh.has(i)&&s?t+=`<span class="tk-b">${i}</span>`:s?t+=`<span class="tk-f">${i}</span>`:t+=i,n=i):t+=mo(u),r)),t}function xh(e){const t=new Worker(new URL("kernel.js",document.baseURI),{type:"module"}),n=new Map;let r=0;t.onmessage=o=>{const a=o.data;if(a.estado)return e(a.estado);const i=n.get(a.id);i&&(n.delete(a.id),a.ok?i.res(a):i.rej(new Error(a.error)))},t.onerror=o=>{n.forEach(a=>a.rej(new Error(o.message||"el kernel no pudo arrancar"))),n.clear()};const l=(o,a={},i)=>new Promise((s,u)=>{const c=++r;n.set(c,{res:s,rej:u}),t.postMessage({id:c,op:o,...a},i||[])});return{iniciar:o=>l("iniciar",o),ejecutar:o=>l("ejecutar",{codigo:o}),archivo:(o,a)=>l("archivo",{nombre:o,bytes:a},[a]),tema:o=>l("tema",{tema:o}),terminar:()=>t.terminate()}}const kh=""+new URL("logo-claro-DqBqOQ06.png",import.meta.url).href,wh=""+new URL("logo-oscuro-_7MOzZY0.png",import.meta.url).href,_h=J.lazy(()=>Pp(()=>import("./Editor-TmhM8f6p.js"),[],import.meta.url)),js="https://github.com/JSNN15/jsnn15.github.io/blob/main/cuaderno/",da=e=>e.toLocaleString("es-CL"),Gd=e=>e>=1048576?`${(e/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(e/1024))} kB`,Sh=()=>document.documentElement.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),Eh=e=>e.replace(/<style[\s\S]*?<\/style>/g,"").replace(/ border="1"/g,"").replace(/ style="text-align: right;"/g,""),Ch=e=>new Date(e+"T12:00:00").toLocaleDateString("es-CL",{day:"numeric",month:"long",year:"numeric"});$.use({gfm:!0});const Th=e=>$.parse(e).replace(/<table>/g,'<div class="tabla"><table>').replace(/<\/table>/g,"</table></div>").replace(/<a href="http/g,'<a target="_blank" rel="noopener" href="http'),An=Kt.celdas.flatMap(e=>{const t=e.tipo==="md"&&e.fuente.match(/^## (.+)$/m);return t?[{id:e.id,titulo:t[1]}]:[]}),zh=["datos/manifiesto.json","datos/verdad.json",...fi.archivos.map(e=>"datos/"+e.nombre)],jh=fi.archivos.reduce((e,t)=>e+t.filas,0);function Nh({s:e,tema:t,alt:n}){if(e.t==="texto")return g.jsx("pre",{className:"sal-texto"+(e.valor?" valor":""),children:e.texto});if(e.t==="error")return g.jsx("pre",{className:"sal-error",children:e.texto});if(e.t==="html")return g.jsx("div",{className:"sal-tabla",tabIndex:0,dangerouslySetInnerHTML:{__html:Eh(e.html)}});if(e.t==="img"){const r=e.png?`data:image/png;base64,${e.png}`:t==="dark"?e.oscuro:e.claro;return g.jsx("img",{className:"sal-img",src:r,width:Math.round(e.w/1.44),height:Math.round(e.h/1.44),alt:n,loading:"lazy"})}return null}function Ph({c:e,tema:t,vivo:n,verCodigo:r,alEjecutar:l,alCambiar:o,alQuitar:a}){if(e.tipo==="md")return g.jsx("div",{className:"celda md",id:"sec-"+e.id,dangerouslySetInnerHTML:{__html:e.html}});const i=e.vivo?e.vivo.salidas:e.salidas,s=e.estado?"*":e.vivo?e.vivo.n:e.n??" ",u=(e.fuente.match(/set_title\(f?['"]([^'"{]+)/)||[])[1],c=u?`Gráfico: ${u.trim()}`:"Gráfico generado por esta celda";return g.jsxs("div",{className:"celda codigo"+(e.estado?" "+e.estado:"")+(e.vivo?" viva":""),id:"celda-"+e.id,children:[r&&g.jsxs("div",{className:"entrada",children:[g.jsxs("div",{className:"margen",children:[g.jsxs("span",{className:"cuenta","aria-hidden":"true",children:["[",s,"]:"]}),g.jsx("button",{type:"button",className:"correr",onClick:()=>l(e.id),disabled:!!e.estado,"aria-label":`Ejecutar la celda ${e.n??"nueva"}`,title:"Ejecutar (Mayúsculas + Enter)",children:g.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14","aria-hidden":"true",children:g.jsx("path",{d:"M4 2.5v11l9-5.5z",fill:"currentColor"})})})]}),g.jsxs("div",{className:"fuente",children:[n?g.jsx(J.Suspense,{fallback:g.jsx("pre",{className:"py",dangerouslySetInnerHTML:{__html:ua(e.fuente)}}),children:g.jsx(_h,{valor:e.fuente,alCambiar:m=>o(e.id,m),alEjecutar:()=>l(e.id),etiqueta:`Código de la celda ${e.n??"nueva"}`})}):g.jsx("pre",{className:"py",tabIndex:0,dangerouslySetInnerHTML:{__html:ua(e.fuente)}}),e.nueva&&g.jsx("button",{type:"button",className:"quitar",onClick:()=>a(e.id),children:"Quitar celda"})]})]}),i.length>0&&g.jsxs("div",{className:"salida",children:[g.jsx("div",{className:"margen","aria-hidden":"true",children:e.vivo&&g.jsxs("span",{className:"sello",children:["en vivo",e.vivo.ms!=null&&g.jsx("i",{children:e.vivo.ms<1e3?e.vivo.ms+" ms":(e.vivo.ms/1e3).toFixed(1).replace(".",",")+" s"})]})}),g.jsx("div",{className:"cuerpo",children:i.map((m,h)=>g.jsx(Nh,{s:m,tema:t,alt:c},h))})]})]})}function bh({a:e,alCerrar:t}){const n=J.useRef(null);if(J.useEffect(()=>{const l=n.current;e&&!l.open&&l.showModal()},[e]),!e)return null;const r=e.columnas.filter(l=>l.tipo==="fecha y hora").map(l=>`'${l.nombre}'`);return g.jsx("dialog",{ref:n,className:"vista",onClose:t,onClick:l=>l.target===n.current&&n.current.close(),"aria-labelledby":"vista-t",children:g.jsxs("div",{className:"vista-in",children:[g.jsxs("header",{children:[g.jsxs("div",{children:[g.jsx("p",{className:"rot",children:e.sistema}),g.jsx("h2",{id:"vista-t",children:e.nombre})]}),g.jsx("button",{type:"button",className:"cerrar",onClick:()=>n.current.close(),children:"Cerrar"})]}),g.jsxs("p",{children:[e.que,"."]}),g.jsxs("dl",{className:"ficha",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Filas"}),g.jsx("dd",{children:da(e.filas)})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Columnas"}),g.jsx("dd",{children:e.columnas.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Tamaño"}),g.jsx("dd",{children:Gd(e.bytes)})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"SHA-256"}),g.jsxs("dd",{className:"mono",children:[e.sha256.slice(0,12),"…"]})]})]}),g.jsx("h3",{children:"Primeras filas"}),g.jsx("div",{className:"sal-tabla",tabIndex:0,children:g.jsxs("table",{children:[g.jsx("thead",{children:g.jsx("tr",{children:e.columnas.map(l=>g.jsxs("th",{children:[l.nombre,g.jsx("small",{children:l.tipo})]},l.nombre))})}),g.jsx("tbody",{children:e.muestra.map((l,o)=>g.jsx("tr",{children:l.map((a,i)=>g.jsx("td",{className:typeof a=="number"?"n":"",children:a==null?"":String(a)},i))},o))})]})}),g.jsx("h3",{children:"Cómo se lee"}),g.jsx("pre",{className:"py",dangerouslySetInnerHTML:{__html:ua(`pd.read_csv('datos/${e.nombre}'${r.length?`, parse_dates=[${r.join(", ")}]`:""})`)}}),g.jsx("p",{className:"pie-vista",children:g.jsxs("a",{href:"datos/"+e.nombre,download:!0,children:["Descargar ",e.nombre]})})]})})}function Ih(){const[e,t]=J.useState(Sh),[n,r]=J.useState(()=>Kt.celdas.map(z=>z.tipo==="md"?{...z,html:Th(z.fuente)}:z)),[l,o]=J.useState({fase:"apagado",msg:""}),[a,i]=J.useState(!0),[s,u]=J.useState(null),[c,m]=J.useState(An[0]&&An[0].id),h=J.useRef(null),v=J.useRef(null),y=J.useRef(Promise.resolve()),w=J.useRef(new Set),b=J.useRef(0),f=J.useRef(n);f.current=n;const d=l.fase!=="apagado"&&l.fase!=="error",p=(z,A)=>r(B=>B.map(_=>_.id===z?{..._,...typeof A=="function"?A(_):A}:_)),x=()=>{const z=e==="dark"?"light":"dark";document.documentElement.dataset.theme=z;try{localStorage.setItem("tema",z)}catch{}t(z),h.current&&l.fase==="listo"&&h.current.tema(z).catch(()=>{})};J.useEffect(()=>{let z=0;const A=()=>{z=0;let _=An[0].id;for(const N of An){const P=document.getElementById("sec-"+N.id);P&&P.getBoundingClientRect().top<140&&(_=N.id)}m(_)},B=()=>z||(z=requestAnimationFrame(A));return addEventListener("scroll",B,{passive:!0}),A(),()=>removeEventListener("scroll",B)},[]);const S=()=>{if(v.current)return v.current;o({fase:"arrancando",msg:"Bajando Python"});const z=xh(A=>o(B=>({...B,msg:A})));return h.current=z,v.current=z.iniciar({raiz:new URL(".",document.baseURI).href,archivos:zh,tema:e}).then(A=>(o({fase:"listo",msg:"",versiones:A.versiones}),z)).catch(A=>{throw z.terminar(),h.current=v.current=null,o({fase:"error",msg:`No se pudo arrancar Python en este navegador: ${A.message}. Las salidas guardadas siguen disponibles.`}),A}),v.current},T=()=>{h.current&&h.current.terminar(),h.current=v.current=null,y.current=Promise.resolve(),w.current=new Set,b.current=0,r(z=>z.map(A=>A.estado?{...A,estado:null}:A)),o({fase:"apagado",msg:""})},E=(z,A=!1)=>{y.current=y.current.then(async()=>{const B=await S();A&&(w.current=new Set);const _=f.current.filter(L=>L.tipo==="code"),N=_.findIndex(L=>L.id===z),P=[..._.slice(0,N).filter(L=>!w.current.has(L.id)),_[N]].filter(L=>L.fuente.trim());P.forEach(L=>p(L.id,{estado:"cola"}));let V=!1;for(const L of P){if(V||h.current!==B){p(L.id,{estado:null});continue}p(L.id,{estado:"corre"}),o($e=>({...$e,fase:"ocupado",msg:""}));try{const $e=f.current.find(Nt=>Nt.id===L.id).fuente,De=await B.ejecutar($e);if(h.current!==B)return;V=De.salidas.some(Nt=>Nt.t==="error"),w.current.add(L.id),p(L.id,{estado:null,vivo:{n:++b.current,salidas:De.salidas,ms:De.ms}})}catch($e){V=!0,p(L.id,{estado:null,vivo:{n:++b.current,salidas:[{t:"error",texto:String($e.message||$e)}]}})}}h.current===B&&o(L=>({...L,fase:"listo",msg:""}))}).catch(()=>{})},j=(z,A)=>{w.current.delete(z),p(z,{fuente:A})},Q=(z="")=>{const A="n"+Date.now();return r(B=>[...B,{id:A,tipo:"code",fuente:z,salidas:[],nueva:!0}]),S().catch(()=>{}),setTimeout(()=>{const B=document.getElementById("celda-"+A);B&&B.scrollIntoView({block:"center",behavior:"smooth"})},60),A},I=async z=>{const A=z.target.files[0];if(z.target.value="",!A)return;const B=A.name.replace(/[^\w.\-]/g,"_");try{await(await S()).archivo(B,await A.arrayBuffer()),Q(`mio = pd.read_csv('${B}')
mio.head()`)}catch{}},we=J.useMemo(()=>[...n].reverse().find(z=>z.tipo==="code"),[n]),jt=n.find(z=>z.tipo==="code"),Qe=n.some(z=>z.estado),En=Kt.versiones;return g.jsxs(g.Fragment,{children:[g.jsx("a",{className:"salto",href:"#cuaderno",children:"Ir al cuaderno"}),g.jsxs("header",{className:"top",children:[g.jsxs("a",{className:"marca",href:"../",children:[g.jsx("img",{src:e==="dark"?wh:kh,alt:"DelaCruz",width:"36",height:"36"}),g.jsxs("span",{children:["Cuaderno de planta",g.jsx("small",{children:"cuaderno.ipynb"})]})]}),g.jsxs("div",{className:"acciones",children:[g.jsx("button",{type:"button",className:"conmuta","aria-pressed":a,onClick:()=>i(z=>!z),children:a?"Ocultar código":"Mostrar código"}),g.jsx("button",{type:"button",className:"conmuta",onClick:x,"aria-label":e==="dark"?"Cambiar a tema claro":"Cambiar a tema oscuro",children:e==="dark"?"Claro":"Oscuro"})]})]}),g.jsxs("div",{className:"marco",children:[g.jsx("aside",{className:"lado","aria-label":"Índice y datos",children:g.jsxs("details",{open:typeof matchMedia>"u"||matchMedia("(min-width: 1000px)").matches,children:[g.jsx("summary",{children:"Índice y datos"}),g.jsxs("nav",{"aria-label":"Secciones",children:[g.jsx("h2",{children:"Índice"}),g.jsx("ol",{children:An.map(z=>g.jsx("li",{children:g.jsx("a",{href:"#sec-"+z.id,"aria-current":c===z.id?"true":void 0,children:z.titulo})},z.id))})]}),g.jsxs("section",{"aria-label":"Datos crudos",children:[g.jsx("h2",{children:"Datos crudos"}),g.jsx("ul",{className:"archivos",children:fi.archivos.map(z=>g.jsx("li",{children:g.jsxs("button",{type:"button",onClick:()=>u(z),children:[g.jsx("span",{children:z.nombre}),g.jsxs("small",{children:[da(z.filas)," filas · ",Gd(z.bytes)]})]})},z.nombre))}),g.jsxs("label",{className:"subir",children:[g.jsx("input",{type:"file",accept:".csv,.txt",onChange:I}),g.jsx("span",{children:"Subir un CSV propio"}),g.jsx("small",{children:"Queda en tu navegador: no se envía a ningún servidor."})]})]}),g.jsxs("section",{"aria-label":"Enlaces",children:[g.jsx("h2",{children:"Relacionado"}),g.jsxs("ul",{className:"enlaces",children:[g.jsx("li",{children:g.jsx("a",{href:"../planta-virtual/",children:"Planta virtual: la sala de control"})}),g.jsx("li",{children:g.jsx("a",{href:"cuaderno.ipynb",download:!0,children:"Descargar el .ipynb"})}),g.jsx("li",{children:g.jsx("a",{href:js+"cuaderno.ipynb",target:"_blank",rel:"noopener",children:"Código y datos en GitHub"})}),g.jsx("li",{children:g.jsx("a",{href:"planilla/",children:"Analizar una planilla propia, sin código"})})]})]})]})}),g.jsxs("main",{className:"hoja",id:"cuaderno",children:[g.jsxs("ol",{className:"origen","aria-label":"De dónde salen los datos",children:[g.jsxs("li",{children:[g.jsx("a",{href:"../planta-virtual/",children:"Planta virtual"}),g.jsx("small",{children:"el motor de la sala de control"})]}),g.jsxs("li",{children:[g.jsx("a",{href:js+"herramientas/genera.js",target:"_blank",rel:"noopener",children:"Guion de una semana"}),g.jsx("small",{children:"12 fallas y un operador"})]}),g.jsxs("li",{children:[g.jsx("span",{children:"8 archivos crudos"}),g.jsxs("small",{children:[da(jh)," filas"]})]}),g.jsxs("li",{children:[g.jsx("span",{children:"Este cuaderno"}),g.jsxs("small",{children:["Python ",En.python.split(".").slice(0,2).join(".")," · pandas ",En.pandas]})]})]}),g.jsxs("div",{className:"kernel "+l.fase,role:"status",children:[l.fase==="apagado"&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:[g.jsx("b",{children:"Salidas guardadas."})," Se ejecutó el ",Ch(Kt.ejecutado)," con Jupyter. Puedes volver a correrlo aquí: Python arranca dentro de tu navegador y baja unos ",Kt.descarga_mb," MB la primera vez. La sección 7 usa scikit-learn y suma ",Kt.sklearn_mb," MB."]}),g.jsx("button",{type:"button",className:"primario",onClick:()=>E(jt.id),children:"Arrancar Python"})]}),l.fase==="arrancando"&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:[g.jsx("span",{className:"pulso","aria-hidden":"true"}),l.msg,"…"]}),g.jsx("button",{type:"button",onClick:T,children:"Cancelar"})]}),(l.fase==="listo"||l.fase==="ocupado")&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:[g.jsx("span",{className:"punto"+(Qe?" pulso":""),"aria-hidden":"true"}),g.jsx("b",{children:"Python en vivo"})," (",l.versiones?`Pyodide ${l.versiones.python}, pandas ${l.versiones.pandas}`:"Pyodide","). ",Qe?l.msg||"Ejecutando…":"Edita cualquier celda y ejecútala con Mayúsculas + Enter."]}),g.jsxs("div",{className:"grupo",children:[g.jsx("button",{type:"button",onClick:()=>E(we.id,!0),disabled:Qe,children:"Ejecutar todo"}),g.jsx("button",{type:"button",onClick:T,children:Qe?"Detener":"Apagar"})]})]}),l.fase==="error"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{children:l.msg}),g.jsx("button",{type:"button",onClick:()=>o({fase:"apagado",msg:""}),children:"Entendido"})]})]}),n.map(z=>g.jsx(Ph,{c:z,tema:e,vivo:d,verCodigo:a,alEjecutar:E,alCambiar:j,alQuitar:A=>r(B=>B.filter(_=>_.id!==A))},z.id)),g.jsxs("div",{className:"mas",children:[g.jsx("button",{type:"button",onClick:()=>Q(""),children:"+ Celda de código"}),g.jsx("span",{children:"Para probar algo propio sobre los mismos datos."})]})]})]}),g.jsxs("footer",{className:"pie",children:[g.jsxs("p",{children:["Proyecto personal de ",g.jsx("b",{children:"Julián Neira Nova"}),", ingeniero eléctrico · Servicio y Soluciones Tecnológicas DelaCruz SpA. Los datos son de un simulador: nada proviene de clientes ni de empleadores."]}),g.jsxs("p",{children:[g.jsx("a",{href:"../",children:"Portafolio"})," · ",g.jsx("a",{href:"https://www.linkedin.com/in/julian-neira-nova/",children:"LinkedIn"})," · ",g.jsx("a",{href:"https://github.com/JSNN15",children:"GitHub"})]})]}),g.jsx(bh,{a:s,alCerrar:()=>u(null)})]})}Ud(document.getElementById("root")).render(g.jsx(Ih,{}));export{g as j,J as r};
