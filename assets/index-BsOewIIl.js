(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))l(h);new MutationObserver(h=>{for(const u of h)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(h){const u={};return h.integrity&&(u.integrity=h.integrity),h.referrerPolicy&&(u.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?u.credentials="include":h.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(h){if(h.ep)return;h.ep=!0;const u=r(h);fetch(h.href,u)}})();function up(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Kl={exports:{}},co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function ly(){if(bf)return co;bf=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(l,h,u){var d=null;if(u!==void 0&&(d=""+u),h.key!==void 0&&(d=""+h.key),"key"in h){u={};for(var g in h)g!=="key"&&(u[g]=h[g])}else u=h;return h=u.ref,{$$typeof:a,type:l,key:d,ref:h!==void 0?h:null,props:u}}return co.Fragment=s,co.jsx=r,co.jsxs=r,co}var vf;function cy(){return vf||(vf=1,Kl.exports=ly()),Kl.exports}var ge=cy(),Ql={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function hy(){if(wf)return me;wf=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function A(p){return p===null||typeof p!="object"?null:(p=w&&p[w]||p["@@iterator"],typeof p=="function"?p:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,P={};function J(p,q,ie){this.props=p,this.context=q,this.refs=P,this.updater=ie||T}J.prototype.isReactComponent={},J.prototype.setState=function(p,q){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,q,"setState")},J.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function R(){}R.prototype=J.prototype;function F(p,q,ie){this.props=p,this.context=q,this.refs=P,this.updater=ie||T}var Y=F.prototype=new R;Y.constructor=F,I(Y,J.prototype),Y.isPureReactComponent=!0;var xe=Array.isArray,oe={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function de(p,q,ie,x,G,fe){return ie=fe.ref,{$$typeof:a,type:p,key:q,ref:ie!==void 0?ie:null,props:fe}}function ze(p,q){return de(p.type,q,void 0,void 0,void 0,p.props)}function U(p){return typeof p=="object"&&p!==null&&p.$$typeof===a}function $(p){var q={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(ie){return q[ie]})}var K=/\/+/g;function W(p,q){return typeof p=="object"&&p!==null&&p.key!=null?$(""+p.key):q.toString(36)}function Z(){}function X(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Z,Z):(p.status="pending",p.then(function(q){p.status==="pending"&&(p.status="fulfilled",p.value=q)},function(q){p.status==="pending"&&(p.status="rejected",p.reason=q)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function ee(p,q,ie,x,G){var fe=typeof p;(fe==="undefined"||fe==="boolean")&&(p=null);var se=!1;if(p===null)se=!0;else switch(fe){case"bigint":case"string":case"number":se=!0;break;case"object":switch(p.$$typeof){case a:case s:se=!0;break;case v:return se=p._init,ee(se(p._payload),q,ie,x,G)}}if(se)return G=G(p),se=x===""?"."+W(p,0):x,xe(G)?(ie="",se!=null&&(ie=se.replace(K,"$&/")+"/"),ee(G,q,ie,"",function(He){return He})):G!=null&&(U(G)&&(G=ze(G,ie+(G.key==null||p&&p.key===G.key?"":(""+G.key).replace(K,"$&/")+"/")+se)),q.push(G)),1;se=0;var Xe=x===""?".":x+":";if(xe(p))for(var ye=0;ye<p.length;ye++)x=p[ye],fe=Xe+W(x,ye),se+=ee(x,q,ie,fe,G);else if(ye=A(p),typeof ye=="function")for(p=ye.call(p),ye=0;!(x=p.next()).done;)x=x.value,fe=Xe+W(x,ye++),se+=ee(x,q,ie,fe,G);else if(fe==="object"){if(typeof p.then=="function")return ee(X(p),q,ie,x,G);throw q=String(p),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return se}function _(p,q,ie){if(p==null)return p;var x=[],G=0;return ee(p,x,"","",function(fe){return q.call(ie,fe,G++)}),x}function te(p){if(p._status===-1){var q=p._result;q=q(),q.then(function(ie){(p._status===0||p._status===-1)&&(p._status=1,p._result=ie)},function(ie){(p._status===0||p._status===-1)&&(p._status=2,p._result=ie)}),p._status===-1&&(p._status=0,p._result=q)}if(p._status===1)return p._result.default;throw p._result}var ne=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function ke(){}return me.Children={map:_,forEach:function(p,q,ie){_(p,function(){q.apply(this,arguments)},ie)},count:function(p){var q=0;return _(p,function(){q++}),q},toArray:function(p){return _(p,function(q){return q})||[]},only:function(p){if(!U(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},me.Component=J,me.Fragment=r,me.Profiler=h,me.PureComponent=F,me.StrictMode=l,me.Suspense=b,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,me.act=function(){throw Error("act(...) is not supported in production builds of React.")},me.cache=function(p){return function(){return p.apply(null,arguments)}},me.cloneElement=function(p,q,ie){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var x=I({},p.props),G=p.key,fe=void 0;if(q!=null)for(se in q.ref!==void 0&&(fe=void 0),q.key!==void 0&&(G=""+q.key),q)!L.call(q,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&q.ref===void 0||(x[se]=q[se]);var se=arguments.length-2;if(se===1)x.children=ie;else if(1<se){for(var Xe=Array(se),ye=0;ye<se;ye++)Xe[ye]=arguments[ye+2];x.children=Xe}return de(p.type,G,void 0,void 0,fe,x)},me.createContext=function(p){return p={$$typeof:d,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:u,_context:p},p},me.createElement=function(p,q,ie){var x,G={},fe=null;if(q!=null)for(x in q.key!==void 0&&(fe=""+q.key),q)L.call(q,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(G[x]=q[x]);var se=arguments.length-2;if(se===1)G.children=ie;else if(1<se){for(var Xe=Array(se),ye=0;ye<se;ye++)Xe[ye]=arguments[ye+2];G.children=Xe}if(p&&p.defaultProps)for(x in se=p.defaultProps,se)G[x]===void 0&&(G[x]=se[x]);return de(p,fe,void 0,void 0,null,G)},me.createRef=function(){return{current:null}},me.forwardRef=function(p){return{$$typeof:g,render:p}},me.isValidElement=U,me.lazy=function(p){return{$$typeof:v,_payload:{_status:-1,_result:p},_init:te}},me.memo=function(p,q){return{$$typeof:m,type:p,compare:q===void 0?null:q}},me.startTransition=function(p){var q=oe.T,ie={};oe.T=ie;try{var x=p(),G=oe.S;G!==null&&G(ie,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(ke,ne)}catch(fe){ne(fe)}finally{oe.T=q}},me.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},me.use=function(p){return oe.H.use(p)},me.useActionState=function(p,q,ie){return oe.H.useActionState(p,q,ie)},me.useCallback=function(p,q){return oe.H.useCallback(p,q)},me.useContext=function(p){return oe.H.useContext(p)},me.useDebugValue=function(){},me.useDeferredValue=function(p,q){return oe.H.useDeferredValue(p,q)},me.useEffect=function(p,q){return oe.H.useEffect(p,q)},me.useId=function(){return oe.H.useId()},me.useImperativeHandle=function(p,q,ie){return oe.H.useImperativeHandle(p,q,ie)},me.useInsertionEffect=function(p,q){return oe.H.useInsertionEffect(p,q)},me.useLayoutEffect=function(p,q){return oe.H.useLayoutEffect(p,q)},me.useMemo=function(p,q){return oe.H.useMemo(p,q)},me.useOptimistic=function(p,q){return oe.H.useOptimistic(p,q)},me.useReducer=function(p,q,ie){return oe.H.useReducer(p,q,ie)},me.useRef=function(p){return oe.H.useRef(p)},me.useState=function(p){return oe.H.useState(p)},me.useSyncExternalStore=function(p,q,ie){return oe.H.useSyncExternalStore(p,q,ie)},me.useTransition=function(){return oe.H.useTransition()},me.version="19.0.0",me}var Tf;function kc(){return Tf||(Tf=1,Ql.exports=hy()),Ql.exports}var Ls=kc(),Wl={exports:{}},ho={},Zl={exports:{}},Jl={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf;function uy(){return xf||(xf=1,function(a){function s(_,te){var ne=_.length;_.push(te);e:for(;0<ne;){var ke=ne-1>>>1,p=_[ke];if(0<h(p,te))_[ke]=te,_[ne]=p,ne=ke;else break e}}function r(_){return _.length===0?null:_[0]}function l(_){if(_.length===0)return null;var te=_[0],ne=_.pop();if(ne!==te){_[0]=ne;e:for(var ke=0,p=_.length,q=p>>>1;ke<q;){var ie=2*(ke+1)-1,x=_[ie],G=ie+1,fe=_[G];if(0>h(x,ne))G<p&&0>h(fe,x)?(_[ke]=fe,_[G]=ne,ke=G):(_[ke]=x,_[ie]=ne,ke=ie);else if(G<p&&0>h(fe,ne))_[ke]=fe,_[G]=ne,ke=G;else break e}}return te}function h(_,te){var ne=_.sortIndex-te.sortIndex;return ne!==0?ne:_.id-te.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var b=[],m=[],v=1,w=null,A=3,T=!1,I=!1,P=!1,J=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function Y(_){for(var te=r(m);te!==null;){if(te.callback===null)l(m);else if(te.startTime<=_)l(m),te.sortIndex=te.expirationTime,s(b,te);else break;te=r(m)}}function xe(_){if(P=!1,Y(_),!I)if(r(b)!==null)I=!0,X();else{var te=r(m);te!==null&&ee(xe,te.startTime-_)}}var oe=!1,L=-1,de=5,ze=-1;function U(){return!(a.unstable_now()-ze<de)}function $(){if(oe){var _=a.unstable_now();ze=_;var te=!0;try{e:{I=!1,P&&(P=!1,R(L),L=-1),T=!0;var ne=A;try{t:{for(Y(_),w=r(b);w!==null&&!(w.expirationTime>_&&U());){var ke=w.callback;if(typeof ke=="function"){w.callback=null,A=w.priorityLevel;var p=ke(w.expirationTime<=_);if(_=a.unstable_now(),typeof p=="function"){w.callback=p,Y(_),te=!0;break t}w===r(b)&&l(b),Y(_)}else l(b);w=r(b)}if(w!==null)te=!0;else{var q=r(m);q!==null&&ee(xe,q.startTime-_),te=!1}}break e}finally{w=null,A=ne,T=!1}te=void 0}}finally{te?K():oe=!1}}}var K;if(typeof F=="function")K=function(){F($)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=$,K=function(){Z.postMessage(null)}}else K=function(){J($,0)};function X(){oe||(oe=!0,K())}function ee(_,te){L=J(function(){_(a.unstable_now())},te)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_continueExecution=function(){I||T||(I=!0,X())},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_getFirstCallbackNode=function(){return r(b)},a.unstable_next=function(_){switch(A){case 1:case 2:case 3:var te=3;break;default:te=A}var ne=A;A=te;try{return _()}finally{A=ne}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(_,te){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var ne=A;A=_;try{return te()}finally{A=ne}},a.unstable_scheduleCallback=function(_,te,ne){var ke=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ke+ne:ke):ne=ke,_){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=ne+p,_={id:v++,callback:te,priorityLevel:_,startTime:ne,expirationTime:p,sortIndex:-1},ne>ke?(_.sortIndex=ne,s(m,_),r(b)===null&&_===r(m)&&(P?(R(L),L=-1):P=!0,ee(xe,ne-ke))):(_.sortIndex=p,s(b,_),I||T||(I=!0,X())),_},a.unstable_shouldYield=U,a.unstable_wrapCallback=function(_){var te=A;return function(){var ne=A;A=te;try{return _.apply(this,arguments)}finally{A=ne}}}}(Jl)),Jl}var kf;function dy(){return kf||(kf=1,Zl.exports=uy()),Zl.exports}var $l={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function fy(){if(Af)return ut;Af=1;var a=kc();function s(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(s(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},h=Symbol.for("react.portal");function u(b,m,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:b,containerInfo:m,implementation:v}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ut.createPortal=function(b,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return u(b,m,null,v)},ut.flushSync=function(b){var m=d.T,v=l.p;try{if(d.T=null,l.p=2,b)return b()}finally{d.T=m,l.p=v,l.d.f()}},ut.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(b,m))},ut.prefetchDNS=function(b){typeof b=="string"&&l.d.D(b)},ut.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var v=m.as,w=g(v,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?l.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:A,fetchPriority:T}):v==="script"&&l.d.X(b,{crossOrigin:w,integrity:A,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ut.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=g(m.as,m.crossOrigin);l.d.M(b,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(b)},ut.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,w=g(v,m.crossOrigin);l.d.L(b,v,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ut.preloadModule=function(b,m){if(typeof b=="string")if(m){var v=g(m.as,m.crossOrigin);l.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(b)},ut.requestFormReset=function(b){l.d.r(b)},ut.unstable_batchedUpdates=function(b,m){return b(m)},ut.useFormState=function(b,m,v){return d.H.useFormState(b,m,v)},ut.useFormStatus=function(){return d.H.useHostTransitionStatus()},ut.version="19.0.0",ut}var Sf;function py(){if(Sf)return $l.exports;Sf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),$l.exports=fy(),$l.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function my(){if(zf)return ho;zf=1;var a=dy(),s=kc(),r=py();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),T=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),xe=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case g:return"Portal";case v:return"Profiler";case m:return"StrictMode";case P:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:ze(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return ze(e(t))}catch{}}return null}var U=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=Object.assign,K,W;function Z(e){if(K===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);K=t&&t[1]||"",W=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+K+e+W}var X=!1;function ee(e,t){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(B){var D=B}Reflect.construct(e,[],O)}else{try{O.call()}catch(B){D=B}e.call(O.prototype)}}else{try{throw Error()}catch(B){D=B}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(B){if(B&&D&&typeof B.stack=="string")return[B.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),f=c[0],y=c[1];if(f&&y){var k=f.split(`
`),z=y.split(`
`);for(o=i=0;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;for(;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;if(i===k.length||o===z.length)for(i=k.length-1,o=z.length-1;1<=i&&0<=o&&k[i]!==z[o];)o--;for(;1<=i&&0<=o;i--,o--)if(k[i]!==z[o]){if(i!==1||o!==1)do if(i--,o--,0>o||k[i]!==z[o]){var M=`
`+k[i].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=i&&0<=o);break}}}finally{X=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Z(n):""}function _(e){switch(e.tag){case 26:case 27:case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function te(e){try{var t="";do t+=_(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ne(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ke(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(ne(e)!==e)throw Error(l(188))}function q(e){var t=e.alternate;if(!t){if(t=ne(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return p(o),e;if(c===i)return p(o),t;c=c.sibling}throw Error(l(188))}if(n.return!==i.return)n=o,i=c;else{for(var f=!1,y=o.child;y;){if(y===n){f=!0,n=o,i=c;break}if(y===i){f=!0,i=o,n=c;break}y=y.sibling}if(!f){for(y=c.child;y;){if(y===n){f=!0,n=c,i=o;break}if(y===i){f=!0,i=c,n=o;break}y=y.sibling}if(!f)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function ie(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ie(e),t!==null)return t;e=e.sibling}return null}var x=Array.isArray,G=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},se=[],Xe=-1;function ye(e){return{current:e}}function He(e){0>Xe||(e.current=se[Xe],se[Xe]=null,Xe--)}function De(e,t){Xe++,se[Xe]=e.current,e.current=t}var ft=ye(null),Qn=ye(null),Wt=ye(null),Ti=ye(null);function Wn(e,t){switch(De(Wt,t),De(Qn,e),De(ft,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Xd(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Xd(e),t=Fd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}He(ft),De(ft,t)}function sn(){He(ft),He(Qn),He(Wt)}function xi(e){e.memoizedState!==null&&De(Ti,e);var t=ft.current,n=Fd(t,e.type);t!==n&&(De(Qn,e),De(ft,n))}function ki(e){Qn.current===e&&(He(ft),He(Qn)),Ti.current===e&&(He(Ti),ao._currentValue=fe)}var Ai=Object.prototype.hasOwnProperty,Si=a.unstable_scheduleCallback,fa=a.unstable_cancelCallback,_s=a.unstable_shouldYield,Vs=a.unstable_requestPaint,Mt=a.unstable_now,js=a.unstable_getCurrentPriorityLevel,N=a.unstable_ImmediatePriority,j=a.unstable_UserBlockingPriority,ce=a.unstable_NormalPriority,we=a.unstable_LowPriority,Me=a.unstable_IdlePriority,kt=a.log,rn=a.unstable_setDisableYieldValue,pt=null,$e=null;function Zn(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(pt,e,void 0,(e.current.flags&128)===128)}catch{}}function je(e){if(typeof kt=="function"&&rn(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(pt,e)}catch{}}var Ke=Math.clz32?Math.clz32:Qp,Yt=Math.log,Kp=Math.LN2;function Qp(e){return e>>>=0,e===0?32:31-(Yt(e)/Kp|0)|0}var wo=128,To=4194304;function Jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xo(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,c=e.pingedLanes,f=e.warmLanes;e=e.finishedLanes!==0;var y=n&134217727;return y!==0?(n=y&~o,n!==0?i=Jn(n):(c&=y,c!==0?i=Jn(c):e||(f=y&~f,f!==0&&(i=Jn(f))))):(y=n&~o,y!==0?i=Jn(y):c!==0?i=Jn(c):e||(f=n&~f,f!==0&&(i=Jn(f)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,f=t&-t,o>=f||o===32&&(f&4194176)!==0)?t:i}function pa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wp(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pc(){var e=wo;return wo<<=1,(wo&4194176)===0&&(wo=128),e}function Ic(){var e=To;return To<<=1,(To&62914560)===0&&(To=4194304),e}function Us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zp(e,t,n,i,o,c){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,k=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var M=31-Ke(n),O=1<<M;y[M]=0,k[M]=-1;var D=z[M];if(D!==null)for(z[M]=null,M=0;M<D.length;M++){var B=D[M];B!==null&&(B.lane&=-536870913)}n&=~O}i!==0&&_c(e,i,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function _c(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ke(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194218}function Vc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ke(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}function jc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uc(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:df(e.type))}function Jp(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var Sn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Sn,yt="__reactProps$"+Sn,zi="__reactContainer$"+Sn,Gs="__reactEvents$"+Sn,$p="__reactListeners$"+Sn,em="__reactHandles$"+Sn,Gc="__reactResources$"+Sn,ga="__reactMarker$"+Sn;function Ys(e){delete e[ct],delete e[yt],delete e[Gs],delete e[$p],delete e[em]}function $n(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zi]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[ct])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function Ei(e){if(e=e[ct]||e[zi]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ya(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Ci(e){var t=e[Gc];return t||(t=e[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[ga]=!0}var Yc=new Set,Xc={};function ei(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for(Xc[e]=t,e=0;e<t.length;e++)Yc.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fc={},Kc={};function nm(e){return Ai.call(Kc,e)?!0:Ai.call(Fc,e)?!1:tm.test(e)?Kc[e]=!0:(Fc[e]=!0,!1)}function ko(e,t,n){if(nm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ao(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function im(e){var t=Qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(f){i=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=im(e))}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Qc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var am=/[\n"\\]/g;function Lt(e){return e.replace(am,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xs(e,t,n,i,o,c,f,y){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Fs(e,f,Nt(t)):n!=null?Fs(e,f,Nt(n)):i!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Nt(y):e.removeAttribute("name")}function Zc(e,t,n,i,o,c,f,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+Nt(n):"",t=t!=null?""+Nt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Fs(e,t,n){t==="number"&&zo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bi(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Jc(e,t,n){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Nt(n):""}function $c(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(x(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Nt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eh(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||om.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function th(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&n[o]!==i&&eh(e,o,i)}else for(var c in t)t.hasOwnProperty(c)&&eh(e,c,t[c])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eo(e){return rm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qs=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Li=null;function nh(e){var t=Ei(e);if(t&&(e=t.stateNode)){var n=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=i[yt]||null;if(!o)throw Error(l(90));Xs(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Wc(i)}break e;case"textarea":Jc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bi(e,!!n.multiple,t,!1)}}}var Zs=!1;function ih(e,t,n){if(Zs)return e(t,n);Zs=!0;try{var i=e(t);return i}finally{if(Zs=!1,(Ni!==null||Li!==null)&&(hs(),Ni&&(t=Ni,e=Li,Li=Ni=null,nh(t),e)))for(t=0;t<e.length;t++)nh(e[t])}}function ba(e,t){var n=e.stateNode;if(n===null)return null;var i=n[yt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Js=!1;if(ln)try{var va={};Object.defineProperty(va,"passive",{get:function(){Js=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Js=!1}var zn=null,$s=null,Co=null;function ah(){if(Co)return Co;var e,t=$s,n=t.length,i,o="value"in zn?zn.value:zn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===o[c-i];i++);return Co=o.slice(e,1<i?1-i:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function oh(){return!1}function bt(e){function t(n,i,o,c,f){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Bo:oh,this.isPropagationStopped=oh,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mo=bt(ti),wa=$({},ti,{view:0,detail:0}),lm=bt(wa),er,tr,Ta,No=$({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ta&&(Ta&&e.type==="mousemove"?(er=e.screenX-Ta.screenX,tr=e.screenY-Ta.screenY):tr=er=0,Ta=e),er)},movementY:function(e){return"movementY"in e?e.movementY:tr}}),sh=bt(No),cm=$({},No,{dataTransfer:0}),hm=bt(cm),um=$({},wa,{relatedTarget:0}),nr=bt(um),dm=$({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),fm=bt(dm),pm=$({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mm=bt(pm),gm=$({},ti,{data:0}),rh=bt(gm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vm[e])?!!t[e]:!1}function ir(){return wm}var Tm=$({},wa,{key:function(e){if(e.key){var t=ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xm=bt(Tm),km=$({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=bt(km),Am=$({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),Sm=bt(Am),zm=$({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=bt(zm),Cm=$({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dm=bt(Cm),Bm=$({},ti,{newState:0,oldState:0}),Mm=bt(Bm),Nm=[9,13,27,32],ar=ln&&"CompositionEvent"in window,xa=null;ln&&"documentMode"in document&&(xa=document.documentMode);var Lm=ln&&"TextEvent"in window&&!xa,ch=ln&&(!ar||xa&&8<xa&&11>=xa),hh=" ",uh=!1;function dh(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hi=!1;function Hm(e,t){switch(e){case"compositionend":return fh(t);case"keypress":return t.which!==32?null:(uh=!0,hh);case"textInput":return e=t.data,e===hh&&uh?null:e;default:return null}}function qm(e,t){if(Hi)return e==="compositionend"||!ar&&dh(e,t)?(e=ah(),Co=$s=zn=null,Hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ch&&t.locale!=="ko"?null:t.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Om[e.type]:t==="textarea"}function mh(e,t,n,i){Ni?Li?Li.push(i):Li=[i]:Ni=i,t=ms(t,"onChange"),0<t.length&&(n=new Mo("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ka=null,Aa=null;function Rm(e){Vd(e,0)}function Lo(e){var t=ya(e);if(Wc(t))return e}function gh(e,t){if(e==="change")return t}var yh=!1;if(ln){var or;if(ln){var sr="oninput"in document;if(!sr){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),sr=typeof bh.oninput=="function"}or=sr}else or=!1;yh=or&&(!document.documentMode||9<document.documentMode)}function vh(){ka&&(ka.detachEvent("onpropertychange",wh),Aa=ka=null)}function wh(e){if(e.propertyName==="value"&&Lo(Aa)){var t=[];mh(t,Aa,e,Ws(e)),ih(Rm,t)}}function Pm(e,t,n){e==="focusin"?(vh(),ka=t,Aa=n,ka.attachEvent("onpropertychange",wh)):e==="focusout"&&vh()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(Aa)}function _m(e,t){if(e==="click")return Lo(t)}function Vm(e,t){if(e==="input"||e==="change")return Lo(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:jm;function Sa(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Ai.call(t,o)||!At(e[o],t[o]))return!1}return!0}function Th(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xh(e,t){var n=Th(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Th(n)}}function kh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ah(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Um(e,t){var n=Ah(t);t=e.focusedElem;var i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&kh(t.ownerDocument.documentElement,t)){if(i!==null&&rr(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,c=Math.min(i.start,o);i=i.end===void 0?c:Math.min(i.end,o),!n.extend&&c>i&&(o=i,i=c,c=o),o=xh(t,c);var f=xh(t,i);o&&f&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),c>i?(n.addRange(e),n.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gm=ln&&"documentMode"in document&&11>=document.documentMode,qi=null,lr=null,za=null,cr=!1;function Sh(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cr||qi==null||qi!==zo(i)||(i=qi,"selectionStart"in i&&rr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&Sa(za,i)||(za=i,i=ms(lr,"onSelect"),0<i.length&&(t=new Mo("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qi)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oi={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionrun:ni("Transition","TransitionRun"),transitionstart:ni("Transition","TransitionStart"),transitioncancel:ni("Transition","TransitionCancel"),transitionend:ni("Transition","TransitionEnd")},hr={},zh={};ln&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function ii(e){if(hr[e])return hr[e];if(!Oi[e])return e;var t=Oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zh)return hr[e]=t[n];return e}var Eh=ii("animationend"),Ch=ii("animationiteration"),Dh=ii("animationstart"),Ym=ii("transitionrun"),Xm=ii("transitionstart"),Fm=ii("transitioncancel"),Bh=ii("transitionend"),Mh=new Map,Nh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Xt(e,t){Mh.set(e,t),ei(t,[e])}var Ht=[],Ri=0,ur=0;function Ho(){for(var e=Ri,t=ur=Ri=0;t<e;){var n=Ht[t];Ht[t++]=null;var i=Ht[t];Ht[t++]=null;var o=Ht[t];Ht[t++]=null;var c=Ht[t];if(Ht[t++]=null,i!==null&&o!==null){var f=i.pending;f===null?o.next=o:(o.next=f.next,f.next=o),i.pending=o}c!==0&&Lh(n,o,c)}}function qo(e,t,n,i){Ht[Ri++]=e,Ht[Ri++]=t,Ht[Ri++]=n,Ht[Ri++]=i,ur|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dr(e,t,n,i){return qo(e,t,n,i),Oo(e)}function En(e,t){return qo(e,null,null,t),Oo(e)}function Lh(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;o&&t!==null&&e.tag===3&&(c=e.stateNode,o=31-Ke(n),c=c.hiddenUpdates,e=c[o],e===null?c[o]=[t]:e.push(t),t.lane=n|536870912)}function Oo(e){if(50<Za)throw Za=0,bl=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pi={},Hh=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=Hh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:te(t)},Hh.set(e,t),t)}return{value:e,source:t,stack:te(t)}}var Ii=[],_i=0,Ro=null,Po=0,Ot=[],Rt=0,ai=null,hn=1,un="";function oi(e,t){Ii[_i++]=Po,Ii[_i++]=Ro,Ro=e,Po=t}function qh(e,t,n){Ot[Rt++]=hn,Ot[Rt++]=un,Ot[Rt++]=ai,ai=e;var i=hn;e=un;var o=32-Ke(i)-1;i&=~(1<<o),n+=1;var c=32-Ke(t)+o;if(30<c){var f=o-o%5;c=(i&(1<<f)-1).toString(32),i>>=f,o-=f,hn=1<<32-Ke(t)+o|n<<o|i,un=c+e}else hn=1<<c|n<<o|i,un=e}function fr(e){e.return!==null&&(oi(e,1),qh(e,1,0))}function pr(e){for(;e===Ro;)Ro=Ii[--_i],Ii[_i]=null,Po=Ii[--_i],Ii[_i]=null;for(;e===ai;)ai=Ot[--Rt],Ot[Rt]=null,un=Ot[--Rt],Ot[Rt]=null,hn=Ot[--Rt],Ot[Rt]=null}var mt=null,st=null,Ee=!1,Ft=null,Zt=!1,mr=Error(l(519));function si(e){var t=Error(l(418,""));throw Da(qt(t,e)),mr}function Oh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ct]=e,t[yt]=i,n){case"dialog":Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":case"embed":Ae("load",t);break;case"video":case"audio":for(n=0;n<$a.length;n++)Ae($a[n],t);break;case"source":Ae("error",t);break;case"img":case"image":case"link":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"input":Ae("invalid",t),Zc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),So(t);break;case"select":Ae("invalid",t);break;case"textarea":Ae("invalid",t),$c(t,i.value,i.defaultValue,i.children),So(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Yd(t.textContent,n)?(i.popover!=null&&(Ae("beforetoggle",t),Ae("toggle",t)),i.onScroll!=null&&Ae("scroll",t),i.onScrollEnd!=null&&Ae("scrollend",t),i.onClick!=null&&(t.onclick=gs),t=!0):t=!1,t||si(e)}function Rh(e){for(mt=e.return;mt;)switch(mt.tag){case 3:case 27:Zt=!0;return;case 5:case 13:Zt=!1;return;default:mt=mt.return}}function Ea(e){if(e!==mt)return!1;if(!Ee)return Rh(e),Ee=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ql(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&st&&si(e),Rh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){st=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}st=null}}else st=mt?Qt(e.stateNode.nextSibling):null;return!0}function Ca(){st=mt=null,Ee=!1}function Da(e){Ft===null?Ft=[e]:Ft.push(e)}var Ba=Error(l(460)),Ph=Error(l(474)),gr={then:function(){}};function Ih(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Io(){}function _h(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Io,Io),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ba?Error(l(483)):e;default:if(typeof t.status=="string")t.then(Io,Io);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ba?Error(l(483)):e}throw Ma=t,Ba}}var Ma=null;function Vh(){if(Ma===null)throw Error(l(459));var e=Ma;return Ma=null,e}var Vi=null,Na=0;function _o(e){var t=Na;return Na+=1,Vi===null&&(Vi=[]),_h(Vi,e,t)}function La(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vo(e,t){throw t.$$typeof===u?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jh(e){var t=e._init;return t(e._payload)}function Uh(e){function t(E,S){if(e){var C=E.deletions;C===null?(E.deletions=[S],E.flags|=16):C.push(S)}}function n(E,S){if(!e)return null;for(;S!==null;)t(E,S),S=S.sibling;return null}function i(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function o(E,S){return E=In(E,S),E.index=0,E.sibling=null,E}function c(E,S,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<S?(E.flags|=33554434,S):C):(E.flags|=33554434,S)):(E.flags|=1048576,S)}function f(E){return e&&E.alternate===null&&(E.flags|=33554434),E}function y(E,S,C,H){return S===null||S.tag!==6?(S=hl(C,E.mode,H),S.return=E,S):(S=o(S,C),S.return=E,S)}function k(E,S,C,H){var Q=C.type;return Q===b?M(E,S,C.props.children,H,C.key):S!==null&&(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===F&&jh(Q)===S.type)?(S=o(S,C.props),La(S,C),S.return=E,S):(S=os(C.type,C.key,C.props,null,E.mode,H),La(S,C),S.return=E,S)}function z(E,S,C,H){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=ul(C,E.mode,H),S.return=E,S):(S=o(S,C.children||[]),S.return=E,S)}function M(E,S,C,H,Q){return S===null||S.tag!==7?(S=gi(C,E.mode,H,Q),S.return=E,S):(S=o(S,C),S.return=E,S)}function O(E,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=hl(""+S,E.mode,C),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case d:return C=os(S.type,S.key,S.props,null,E.mode,C),La(C,S),C.return=E,C;case g:return S=ul(S,E.mode,C),S.return=E,S;case F:var H=S._init;return S=H(S._payload),O(E,S,C)}if(x(S)||L(S))return S=gi(S,E.mode,C,null),S.return=E,S;if(typeof S.then=="function")return O(E,_o(S),C);if(S.$$typeof===T)return O(E,ns(E,S),C);Vo(E,S)}return null}function D(E,S,C,H){var Q=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Q!==null?null:y(E,S,""+C,H);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case d:return C.key===Q?k(E,S,C,H):null;case g:return C.key===Q?z(E,S,C,H):null;case F:return Q=C._init,C=Q(C._payload),D(E,S,C,H)}if(x(C)||L(C))return Q!==null?null:M(E,S,C,H,null);if(typeof C.then=="function")return D(E,S,_o(C),H);if(C.$$typeof===T)return D(E,S,ns(E,C),H);Vo(E,C)}return null}function B(E,S,C,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return E=E.get(C)||null,y(S,E,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case d:return E=E.get(H.key===null?C:H.key)||null,k(S,E,H,Q);case g:return E=E.get(H.key===null?C:H.key)||null,z(S,E,H,Q);case F:var ve=H._init;return H=ve(H._payload),B(E,S,C,H,Q)}if(x(H)||L(H))return E=E.get(C)||null,M(S,E,H,Q,null);if(typeof H.then=="function")return B(E,S,C,_o(H),Q);if(H.$$typeof===T)return B(E,S,C,ns(S,H),Q);Vo(S,H)}return null}function ae(E,S,C,H){for(var Q=null,ve=null,re=S,le=S=0,ot=null;re!==null&&le<C.length;le++){re.index>le?(ot=re,re=null):ot=re.sibling;var Ce=D(E,re,C[le],H);if(Ce===null){re===null&&(re=ot);break}e&&re&&Ce.alternate===null&&t(E,re),S=c(Ce,S,le),ve===null?Q=Ce:ve.sibling=Ce,ve=Ce,re=ot}if(le===C.length)return n(E,re),Ee&&oi(E,le),Q;if(re===null){for(;le<C.length;le++)re=O(E,C[le],H),re!==null&&(S=c(re,S,le),ve===null?Q=re:ve.sibling=re,ve=re);return Ee&&oi(E,le),Q}for(re=i(re);le<C.length;le++)ot=B(re,E,le,C[le],H),ot!==null&&(e&&ot.alternate!==null&&re.delete(ot.key===null?le:ot.key),S=c(ot,S,le),ve===null?Q=ot:ve.sibling=ot,ve=ot);return e&&re.forEach(function(Xn){return t(E,Xn)}),Ee&&oi(E,le),Q}function ue(E,S,C,H){if(C==null)throw Error(l(151));for(var Q=null,ve=null,re=S,le=S=0,ot=null,Ce=C.next();re!==null&&!Ce.done;le++,Ce=C.next()){re.index>le?(ot=re,re=null):ot=re.sibling;var Xn=D(E,re,Ce.value,H);if(Xn===null){re===null&&(re=ot);break}e&&re&&Xn.alternate===null&&t(E,re),S=c(Xn,S,le),ve===null?Q=Xn:ve.sibling=Xn,ve=Xn,re=ot}if(Ce.done)return n(E,re),Ee&&oi(E,le),Q;if(re===null){for(;!Ce.done;le++,Ce=C.next())Ce=O(E,Ce.value,H),Ce!==null&&(S=c(Ce,S,le),ve===null?Q=Ce:ve.sibling=Ce,ve=Ce);return Ee&&oi(E,le),Q}for(re=i(re);!Ce.done;le++,Ce=C.next())Ce=B(re,E,le,Ce.value,H),Ce!==null&&(e&&Ce.alternate!==null&&re.delete(Ce.key===null?le:Ce.key),S=c(Ce,S,le),ve===null?Q=Ce:ve.sibling=Ce,ve=Ce);return e&&re.forEach(function(ry){return t(E,ry)}),Ee&&oi(E,le),Q}function Ye(E,S,C,H){if(typeof C=="object"&&C!==null&&C.type===b&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case d:e:{for(var Q=C.key;S!==null;){if(S.key===Q){if(Q=C.type,Q===b){if(S.tag===7){n(E,S.sibling),H=o(S,C.props.children),H.return=E,E=H;break e}}else if(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===F&&jh(Q)===S.type){n(E,S.sibling),H=o(S,C.props),La(H,C),H.return=E,E=H;break e}n(E,S);break}else t(E,S);S=S.sibling}C.type===b?(H=gi(C.props.children,E.mode,H,C.key),H.return=E,E=H):(H=os(C.type,C.key,C.props,null,E.mode,H),La(H,C),H.return=E,E=H)}return f(E);case g:e:{for(Q=C.key;S!==null;){if(S.key===Q)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){n(E,S.sibling),H=o(S,C.children||[]),H.return=E,E=H;break e}else{n(E,S);break}else t(E,S);S=S.sibling}H=ul(C,E.mode,H),H.return=E,E=H}return f(E);case F:return Q=C._init,C=Q(C._payload),Ye(E,S,C,H)}if(x(C))return ae(E,S,C,H);if(L(C)){if(Q=L(C),typeof Q!="function")throw Error(l(150));return C=Q.call(C),ue(E,S,C,H)}if(typeof C.then=="function")return Ye(E,S,_o(C),H);if(C.$$typeof===T)return Ye(E,S,ns(E,C),H);Vo(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(n(E,S.sibling),H=o(S,C),H.return=E,E=H):(n(E,S),H=hl(C,E.mode,H),H.return=E,E=H),f(E)):n(E,S)}return function(E,S,C,H){try{Na=0;var Q=Ye(E,S,C,H);return Vi=null,Q}catch(re){if(re===Ba)throw re;var ve=Vt(29,re,null,E.mode);return ve.lanes=H,ve.return=E,ve}finally{}}}var ri=Uh(!0),Gh=Uh(!1),ji=ye(null),jo=ye(0);function Yh(e,t){e=xn,De(jo,e),De(ji,t),xn=e|t.baseLanes}function yr(){De(jo,xn),De(ji,ji.current)}function br(){xn=jo.current,He(ji),He(jo)}var Pt=ye(null),Jt=null;function Cn(e){var t=e.alternate;De(et,et.current&1),De(Pt,e),Jt===null&&(t===null||ji.current!==null||t.memoizedState!==null)&&(Jt=e)}function Xh(e){if(e.tag===22){if(De(et,et.current),De(Pt,e),Jt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Jt=e)}}else Dn()}function Dn(){De(et,et.current),De(Pt,Pt.current)}function dn(e){He(Pt),Jt===e&&(Jt=null),He(et)}var et=ye(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Km=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qm=a.unstable_scheduleCallback,Wm=a.unstable_NormalPriority,tt={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vr(){return{controller:new Km,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&Qm(Wm,function(){e.controller.abort()})}var qa=null,wr=0,Ui=0,Gi=null;function Zm(e,t){if(qa===null){var n=qa=[];wr=0,Ui=zl(),Gi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return wr++,t.then(Fh,Fh),t}function Fh(){if(--wr===0&&qa!==null){Gi!==null&&(Gi.status="fulfilled");var e=qa;qa=null,Ui=0,Gi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jm(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Kh=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zm(e,t),Kh!==null&&Kh(e,t)};var li=ye(null);function Tr(){var e=li.current;return e!==null?e:Oe.pooledCache}function Go(e,t){t===null?De(li,li.current):De(li,t.pool)}function Qh(){var e=Tr();return e===null?null:{parent:tt._currentValue,pool:e}}var Bn=0,be=null,Ne=null,Qe=null,Yo=!1,Yi=!1,ci=!1,Xo=0,Oa=0,Xi=null,$m=0;function Fe(){throw Error(l(321))}function xr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function kr(e,t,n,i,o,c){return Bn=c,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?hi:Mn,ci=!1,c=n(i,o),ci=!1,Yi&&(c=Zh(t,n,i,o)),Wh(e),c}function Wh(e){U.H=$t;var t=Ne!==null&&Ne.next!==null;if(Bn=0,Qe=Ne=be=null,Yo=!1,Oa=0,Xi=null,t)throw Error(l(300));e===null||it||(e=e.dependencies,e!==null&&ts(e)&&(it=!0))}function Zh(e,t,n,i){be=e;var o=0;do{if(Yi&&(Xi=null),Oa=0,Yi=!1,25<=o)throw Error(l(301));if(o+=1,Qe=Ne=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}U.H=ui,c=t(n,i)}while(Yi);return c}function eg(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Ra(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(be.flags|=1024),t}function Ar(){var e=Xo!==0;return Xo=0,e}function Sr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zr(e){if(Yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yo=!1}Bn=0,Qe=Ne=be=null,Yi=!1,Oa=Xo=0,Xi=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?be.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function We(){if(Ne===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Qe===null?be.memoizedState:Qe.next;if(t!==null)Qe=t,Ne=e;else{if(e===null)throw be.alternate===null?Error(l(467)):Error(l(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Qe===null?be.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var Fo;Fo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ra(e){var t=Oa;return Oa+=1,Xi===null&&(Xi=[]),e=_h(Xi,e,t),t=be,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?hi:Mn),e}function Ko(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ra(e);if(e.$$typeof===T)return ht(e)}throw Error(l(438,String(e)))}function Er(e){var t=null,n=be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=be.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Fo(),be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=xe;return t.index++,n}function fn(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=We();return Cr(t,Ne,e)}function Cr(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var o=e.baseQueue,c=i.pending;if(c!==null){if(o!==null){var f=o.next;o.next=c.next,c.next=f}t.baseQueue=o=c,i.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var y=f=null,k=null,z=t,M=!1;do{var O=z.lane&-536870913;if(O!==z.lane?(Se&O)===O:(Bn&O)===O){var D=z.revertLane;if(D===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),O===Ui&&(M=!0);else if((Bn&D)===D){z=z.next,D===Ui&&(M=!0);continue}else O={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},k===null?(y=k=O,f=c):k=k.next=O,be.lanes|=D,_n|=D;O=z.action,ci&&n(c,O),c=z.hasEagerState?z.eagerState:n(c,O)}else D={lane:O,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},k===null?(y=k=D,f=c):k=k.next=D,be.lanes|=O,_n|=O;z=z.next}while(z!==null&&z!==t);if(k===null?f=c:k.next=y,!At(c,e.memoizedState)&&(it=!0,M&&(n=Gi,n!==null)))throw n;e.memoizedState=c,e.baseState=f,e.baseQueue=k,i.lastRenderedState=c}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Dr(e){var t=We(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var f=o=o.next;do c=e(c,f.action),f=f.next;while(f!==o);At(c,t.memoizedState)||(it=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function Jh(e,t,n){var i=be,o=We(),c=Ee;if(c){if(n===void 0)throw Error(l(407));n=n()}else n=t();var f=!At((Ne||o).memoizedState,n);if(f&&(o.memoizedState=n,it=!0),o=o.queue,Nr(tu.bind(null,i,o,e),[e]),o.getSnapshot!==t||f||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,Fi(9,eu.bind(null,i,o,n,t),{destroy:void 0},null),Oe===null)throw Error(l(349));c||(Bn&60)!==0||$h(i,t,n)}return n}function $h(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t=Fo(),be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eu(e,t,n,i){t.value=n,t.getSnapshot=i,nu(t)&&iu(e)}function tu(e,t,n){return n(function(){nu(t)&&iu(e)})}function nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function iu(e){var t=En(e,2);t!==null&&gt(t,e,2)}function Br(e){var t=vt();if(typeof e=="function"){var n=e;if(e=n(),ci){je(!0);try{n()}finally{je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:e},t}function au(e,t,n,i){return e.baseState=n,Cr(e,Ne,typeof i=="function"?i:fn)}function tg(e,t,n,i,o){if(Jo(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};U.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,ou(t,c)):(c.next=n.next,t.pending=n.next=c)}}function ou(e,t){var n=t.action,i=t.payload,o=e.state;if(t.isTransition){var c=U.T,f={};U.T=f;try{var y=n(o,i),k=U.S;k!==null&&k(f,y),su(e,t,y)}catch(z){Mr(e,t,z)}finally{U.T=c}}else try{c=n(o,i),su(e,t,c)}catch(z){Mr(e,t,z)}}function su(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ru(e,t,i)},function(i){return Mr(e,t,i)}):ru(e,t,n)}function ru(e,t,n){t.status="fulfilled",t.value=n,lu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ou(e,n)))}function Mr(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,lu(t),t=t.next;while(t!==i)}e.action=null}function lu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cu(e,t){return t}function hu(e,t){if(Ee){var n=Oe.formState;if(n!==null){e:{var i=be;if(Ee){if(st){t:{for(var o=st,c=Zt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Qt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){st=Qt(o.nextSibling),i=o.data==="F!";break e}}si(i)}i=!1}i&&(t=n[0])}}return n=vt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cu,lastRenderedState:t},n.queue=i,n=Cu.bind(null,be,i),i.dispatch=n,i=Br(!1),c=Rr.bind(null,be,!1,i.queue),i=vt(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,n=tg.bind(null,be,o,c,n),o.dispatch=n,i.memoizedState=e,[t,n,!1]}function uu(e){var t=We();return du(t,Ne,e)}function du(e,t,n){t=Cr(e,t,cu)[0],e=Qo(fn)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Ra(t):t;var i=We(),o=i.queue,c=o.dispatch;return n!==i.memoizedState&&(be.flags|=2048,Fi(9,ng.bind(null,o,n),{destroy:void 0},null)),[t,c,e]}function ng(e,t){e.action=t}function fu(e){var t=We(),n=Ne;if(n!==null)return du(t,n,e);We(),t=t.memoizedState,n=We();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Fi(e,t,n,i){return e={tag:e,create:t,inst:n,deps:i,next:null},t=be.updateQueue,t===null&&(t=Fo(),be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function pu(){return We().memoizedState}function Wo(e,t,n,i){var o=vt();be.flags|=e,o.memoizedState=Fi(1|t,n,{destroy:void 0},i===void 0?null:i)}function Zo(e,t,n,i){var o=We();i=i===void 0?null:i;var c=o.memoizedState.inst;Ne!==null&&i!==null&&xr(i,Ne.memoizedState.deps)?o.memoizedState=Fi(t,n,c,i):(be.flags|=e,o.memoizedState=Fi(1|t,n,c,i))}function mu(e,t){Wo(8390656,8,e,t)}function Nr(e,t){Zo(2048,8,e,t)}function gu(e,t){return Zo(4,2,e,t)}function yu(e,t){return Zo(4,4,e,t)}function bu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,n){n=n!=null?n.concat([e]):null,Zo(4,4,bu.bind(null,t,e),n)}function Lr(){}function wu(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&xr(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Tu(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&xr(t,i[1]))return i[0];if(i=e(),ci){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i}function Hr(e,t,n){return n===void 0||(Bn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=kd(),be.lanes|=e,_n|=e,n)}function xu(e,t,n,i){return At(n,t)?n:ji.current!==null?(e=Hr(e,n,i),At(e,t)||(it=!0),e):(Bn&42)===0?(it=!0,e.memoizedState=n):(e=kd(),be.lanes|=e,_n|=e,t)}function ku(e,t,n,i,o){var c=G.p;G.p=c!==0&&8>c?c:8;var f=U.T,y={};U.T=y,Rr(e,!1,t,n);try{var k=o(),z=U.S;if(z!==null&&z(y,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var M=Jm(k,i);Pa(e,t,M,Ct(e))}else Pa(e,t,i,Ct(e))}catch(O){Pa(e,t,{then:function(){},status:"rejected",reason:O},Ct())}finally{G.p=c,U.T=f}}function ig(){}function qr(e,t,n,i){if(e.tag!==5)throw Error(l(476));var o=Au(e).queue;ku(e,o,t,fe,n===null?ig:function(){return Su(e),n(i)})}function Au(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Su(e){var t=Au(e).next.queue;Pa(e,t,{},Ct())}function Or(){return ht(ao)}function zu(){return We().memoizedState}function Eu(){return We().memoizedState}function ag(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=Hn(n);var i=qn(t,e,n);i!==null&&(gt(i,t,n),Va(i,t,n)),t={cache:vr()},e.payload=t;return}t=t.return}}function og(e,t,n){var i=Ct();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Jo(e)?Du(t,n):(n=dr(e,t,n,i),n!==null&&(gt(n,e,i),Bu(n,t,i)))}function Cu(e,t,n){var i=Ct();Pa(e,t,n,i)}function Pa(e,t,n,i){var o={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jo(e))Du(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,y=c(f,n);if(o.hasEagerState=!0,o.eagerState=y,At(y,f))return qo(e,t,o,0),Oe===null&&Ho(),!1}catch{}finally{}if(n=dr(e,t,o,i),n!==null)return gt(n,e,i),Bu(n,t,i),!0}return!1}function Rr(e,t,n,i){if(i={lane:2,revertLane:zl(),action:i,hasEagerState:!1,eagerState:null,next:null},Jo(e)){if(t)throw Error(l(479))}else t=dr(e,n,i,2),t!==null&&gt(t,e,2)}function Jo(e){var t=e.alternate;return e===be||t!==null&&t===be}function Du(e,t){Yi=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if((n&4194176)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Vc(e,n)}}var $t={readContext:ht,use:Ko,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe};$t.useCacheRefresh=Fe,$t.useMemoCache=Fe,$t.useHostTransitionStatus=Fe,$t.useFormState=Fe,$t.useActionState=Fe,$t.useOptimistic=Fe;var hi={readContext:ht,use:Ko,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:mu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Wo(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){Wo(4,2,e,t)},useMemo:function(e,t){var n=vt();t=t===void 0?null:t;var i=e();if(ci){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=vt();if(n!==void 0){var o=n(t);if(ci){je(!0);try{n(t)}finally{je(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=og.bind(null,be,e),[i.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=Br(e);var t=e.queue,n=Cu.bind(null,be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lr,useDeferredValue:function(e,t){var n=vt();return Hr(n,e,t)},useTransition:function(){var e=Br(!1);return e=ku.bind(null,be,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=be,o=vt();if(Ee){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Oe===null)throw Error(l(349));(Se&60)!==0||$h(i,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,mu(tu.bind(null,i,c,e),[e]),i.flags|=2048,Fi(9,eu.bind(null,i,c,n,t),{destroy:void 0},null),n},useId:function(){var e=vt(),t=Oe.identifierPrefix;if(Ee){var n=un,i=hn;n=(i&~(1<<32-Ke(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return vt().memoizedState=ag.bind(null,be)}};hi.useMemoCache=Er,hi.useHostTransitionStatus=Or,hi.useFormState=hu,hi.useActionState=hu,hi.useOptimistic=function(e){var t=vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rr.bind(null,be,!0,n),n.dispatch=t,[e,t]};var Mn={readContext:ht,use:Ko,useCallback:wu,useContext:ht,useEffect:Nr,useImperativeHandle:vu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Tu,useReducer:Qo,useRef:pu,useState:function(){return Qo(fn)},useDebugValue:Lr,useDeferredValue:function(e,t){var n=We();return xu(n,Ne.memoizedState,e,t)},useTransition:function(){var e=Qo(fn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Ra(e),t]},useSyncExternalStore:Jh,useId:zu};Mn.useCacheRefresh=Eu,Mn.useMemoCache=Er,Mn.useHostTransitionStatus=Or,Mn.useFormState=uu,Mn.useActionState=uu,Mn.useOptimistic=function(e,t){var n=We();return au(n,Ne,e,t)};var ui={readContext:ht,use:Ko,useCallback:wu,useContext:ht,useEffect:Nr,useImperativeHandle:vu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Tu,useReducer:Dr,useRef:pu,useState:function(){return Dr(fn)},useDebugValue:Lr,useDeferredValue:function(e,t){var n=We();return Ne===null?Hr(n,e,t):xu(n,Ne.memoizedState,e,t)},useTransition:function(){var e=Dr(fn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Ra(e),t]},useSyncExternalStore:Jh,useId:zu};ui.useCacheRefresh=Eu,ui.useMemoCache=Er,ui.useHostTransitionStatus=Or,ui.useFormState=fu,ui.useActionState=fu,ui.useOptimistic=function(e,t){var n=We();return Ne!==null?au(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Pr(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={isMounted:function(e){return(e=e._reactInternals)?ne(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ct(),o=Hn(i);o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,i),t!==null&&(gt(t,e,i),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ct(),o=Hn(i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,i),t!==null&&(gt(t,e,i),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),i=Hn(n);i.tag=2,t!=null&&(i.callback=t),t=qn(e,i,n),t!==null&&(gt(t,e,n),Va(t,e,n))}};function Mu(e,t,n,i,o,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,f):t.prototype&&t.prototype.isPureReactComponent?!Sa(n,i)||!Sa(o,c):!0}function Nu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ir.enqueueReplaceState(t,t.state,null)}function di(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=$({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var $o=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lu(e){$o(e)}function Hu(e){console.error(e)}function qu(e){$o(e)}function es(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ou(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function _r(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){es(e,t)},n}function Ru(e){return e=Hn(e),e.tag=3,e}function Pu(e,t,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;e.payload=function(){return o(c)},e.callback=function(){Ou(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Ou(t,n,i),typeof o!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function sg(e,t,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&_a(t,n,o,!0),n=Pt.current,n!==null){switch(n.tag){case 13:return Jt===null?Tl():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===gr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),kl(e,i,o)),!1;case 22:return n.flags|=65536,i===gr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),kl(e,i,o)),!1}throw Error(l(435,n.tag))}return kl(e,i,o),Tl(),!1}if(Ee)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==mr&&(e=Error(l(422),{cause:i}),Da(qt(e,n)))):(i!==mr&&(t=Error(l(423),{cause:i}),Da(qt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=qt(i,n),o=_r(e.stateNode,i,o),tl(e,o),Ge!==4&&(Ge=2)),!1;var c=Error(l(520),{cause:i});if(c=qt(c,n),Qa===null?Qa=[c]:Qa.push(c),Ge!==4&&(Ge=2),t===null)return!0;i=qt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=_r(n.stateNode,i,e),tl(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Vn===null||!Vn.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Ru(o),Pu(o,e,n,i),tl(n,o),!1}n=n.return}while(n!==null);return!1}var Iu=Error(l(461)),it=!1;function rt(e,t,n,i){t.child=e===null?Gh(t,null,n,i):ri(t,e.child,n,i)}function _u(e,t,n,i,o){n=n.render;var c=t.ref;if("ref"in i){var f={};for(var y in i)y!=="ref"&&(f[y]=i[y])}else f=i;return pi(t),i=kr(e,t,n,f,c,o),y=Ar(),e!==null&&!it?(Sr(e,t,o),pn(e,t,o)):(Ee&&y&&fr(t),t.flags|=1,rt(e,t,i,o),t.child)}function Vu(e,t,n,i,o){if(e===null){var c=n.type;return typeof c=="function"&&!cl(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,ju(e,t,c,i,o)):(e=os(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Qr(e,o)){var f=c.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(f,i)&&e.ref===t.ref)return pn(e,t,o)}return t.flags|=1,e=In(c,i),e.ref=t.ref,e.return=t,t.child=e}function ju(e,t,n,i,o){if(e!==null){var c=e.memoizedProps;if(Sa(c,i)&&e.ref===t.ref)if(it=!1,t.pendingProps=i=c,Qr(e,o))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,pn(e,t,o)}return Vr(e,t,n,i,o)}function Uu(e,t,n){var i=t.pendingProps,o=i.children,c=(t.stateNode._pendingVisibility&2)!==0,f=e!==null?e.memoizedState:null;if(Ia(e,t),i.mode==="hidden"||c){if((t.flags&128)!==0){if(i=f!==null?f.baseLanes|n:n,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;t.childLanes=c&~i}else t.childLanes=0,t.child=null;return Gu(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Go(t,f!==null?f.cachePool:null),f!==null?Yh(t,f):yr(),Xh(t);else return t.lanes=t.childLanes=536870912,Gu(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(Go(t,f.cachePool),Yh(t,f),Dn(),t.memoizedState=null):(e!==null&&Go(t,null),yr(),Dn());return rt(e,t,o,n),t.child}function Gu(e,t,n,i){var o=Tr();return o=o===null?null:{parent:tt._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Go(t,null),yr(),Xh(t),e!==null&&_a(e,t,i,!0),null}function Ia(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Vr(e,t,n,i,o){return pi(t),n=kr(e,t,n,i,void 0,o),i=Ar(),e!==null&&!it?(Sr(e,t,o),pn(e,t,o)):(Ee&&i&&fr(t),t.flags|=1,rt(e,t,n,o),t.child)}function Yu(e,t,n,i,o,c){return pi(t),t.updateQueue=null,n=Zh(t,i,n,o),Wh(e),i=Ar(),e!==null&&!it?(Sr(e,t,c),pn(e,t,c)):(Ee&&i&&fr(t),t.flags|=1,rt(e,t,n,c),t.child)}function Xu(e,t,n,i,o){if(pi(t),t.stateNode===null){var c=Pi,f=n.contextType;typeof f=="object"&&f!==null&&(c=ht(f)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ir,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},$r(t),f=n.contextType,c.context=typeof f=="object"&&f!==null?ht(f):Pi,c.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Pr(t,n,f,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&Ir.enqueueReplaceState(c,c.state,null),Ua(t,i,c,o),ja(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,k=di(n,y);c.props=k;var z=c.context,M=n.contextType;f=Pi,typeof M=="object"&&M!==null&&(f=ht(M));var O=n.getDerivedStateFromProps;M=typeof O=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,M||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||z!==f)&&Nu(t,c,i,f),Ln=!1;var D=t.memoizedState;c.state=D,Ua(t,i,c,o),ja(),z=t.memoizedState,y||D!==z||Ln?(typeof O=="function"&&(Pr(t,n,O,i),z=t.memoizedState),(k=Ln||Mu(t,n,k,i,D,z,f))?(M||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),c.props=i,c.state=z,c.context=f,i=k):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,el(e,t),f=t.memoizedProps,M=di(n,f),c.props=M,O=t.pendingProps,D=c.context,z=n.contextType,k=Pi,typeof z=="object"&&z!==null&&(k=ht(z)),y=n.getDerivedStateFromProps,(z=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==O||D!==k)&&Nu(t,c,i,k),Ln=!1,D=t.memoizedState,c.state=D,Ua(t,i,c,o),ja();var B=t.memoizedState;f!==O||D!==B||Ln||e!==null&&e.dependencies!==null&&ts(e.dependencies)?(typeof y=="function"&&(Pr(t,n,y,i),B=t.memoizedState),(M=Ln||Mu(t,n,M,i,D,B,k)||e!==null&&e.dependencies!==null&&ts(e.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,B,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,B,k)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=B),c.props=i,c.state=B,c.context=k,i=M):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Ia(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=ri(t,e.child,null,o),t.child=ri(t,null,n,o)):rt(e,t,n,o),t.memoizedState=c.state,e=t.child):e=pn(e,t,o),e}function Fu(e,t,n,i){return Ca(),t.flags|=256,rt(e,t,n,i),t.child}var jr={dehydrated:null,treeContext:null,retryLane:0};function Ur(e){return{baseLanes:e,cachePool:Qh()}}function Gr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jt),e}function Ku(e,t,n){var i=t.pendingProps,o=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(et.current&2)!==0),f&&(o=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(o?Cn(t):Dn(),Ee){var y=st,k;if(k=y){e:{for(k=y,y=Zt;k.nodeType!==8;){if(!y){y=null;break e}if(k=Qt(k.nextSibling),k===null){y=null;break e}}y=k}y!==null?(t.memoizedState={dehydrated:y,treeContext:ai!==null?{id:hn,overflow:un}:null,retryLane:536870912},k=Vt(18,null,null,0),k.stateNode=y,k.return=t,t.child=k,mt=t,st=null,k=!0):k=!1}k||si(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?t.lanes=16:t.lanes=536870912,null;dn(t)}return y=i.children,i=i.fallback,o?(Dn(),o=t.mode,y=Xr({mode:"hidden",children:y},o),i=gi(i,o,n,null),y.return=t,i.return=t,y.sibling=i,t.child=y,o=t.child,o.memoizedState=Ur(n),o.childLanes=Gr(e,f,n),t.memoizedState=jr,i):(Cn(t),Yr(t,y))}if(k=e.memoizedState,k!==null&&(y=k.dehydrated,y!==null)){if(c)t.flags&256?(Cn(t),t.flags&=-257,t=Fr(e,t,n)):t.memoizedState!==null?(Dn(),t.child=e.child,t.flags|=128,t=null):(Dn(),o=i.fallback,y=t.mode,i=Xr({mode:"visible",children:i.children},y),o=gi(o,y,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ri(t,e.child,null,n),i=t.child,i.memoizedState=Ur(n),i.childLanes=Gr(e,f,n),t.memoizedState=jr,t=o);else if(Cn(t),y.data==="$!"){if(f=y.nextSibling&&y.nextSibling.dataset,f)var z=f.dgst;f=z,i=Error(l(419)),i.stack="",i.digest=f,Da({value:i,source:null,stack:null}),t=Fr(e,t,n)}else if(it||_a(e,t,n,!1),f=(n&e.childLanes)!==0,it||f){if(f=Oe,f!==null){if(i=n&-n,(i&42)!==0)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=(i&(f.suspendedLanes|n))!==0?0:i,i!==0&&i!==k.retryLane)throw k.retryLane=i,En(e,i),gt(f,e,i),Iu}y.data==="$?"||Tl(),t=Fr(e,t,n)}else y.data==="$?"?(t.flags|=128,t.child=e.child,t=Tg.bind(null,e),y._reactRetry=t,t=null):(e=k.treeContext,st=Qt(y.nextSibling),mt=t,Ee=!0,Ft=null,Zt=!1,e!==null&&(Ot[Rt++]=hn,Ot[Rt++]=un,Ot[Rt++]=ai,hn=e.id,un=e.overflow,ai=t),t=Yr(t,i.children),t.flags|=4096);return t}return o?(Dn(),o=i.fallback,y=t.mode,k=e.child,z=k.sibling,i=In(k,{mode:"hidden",children:i.children}),i.subtreeFlags=k.subtreeFlags&31457280,z!==null?o=In(z,o):(o=gi(o,y,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,y=e.child.memoizedState,y===null?y=Ur(n):(k=y.cachePool,k!==null?(z=tt._currentValue,k=k.parent!==z?{parent:z,pool:z}:k):k=Qh(),y={baseLanes:y.baseLanes|n,cachePool:k}),o.memoizedState=y,o.childLanes=Gr(e,f,n),t.memoizedState=jr,i):(Cn(t),n=e.child,e=n.sibling,n=In(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Yr(e,t){return t=Xr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Xr(e,t){return wd(e,t,0,null)}function Fr(e,t,n){return ri(t,e.child,null,n),e=Yr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Zr(e.return,t,n)}function Kr(e,t,n,i,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=n,c.tailMode=o)}function Wu(e,t,n){var i=t.pendingProps,o=i.revealOrder,c=i.tail;if(rt(e,t,i.children,n),i=et.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(De(et,i),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kr(t,!1,o,n,c);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kr(t,!0,n,null,c);break;case"together":Kr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ts(e)))}function rg(e,t,n){switch(t.tag){case 3:Wn(t,t.stateNode.containerInfo),Nn(t,tt,e.memoizedState.cache),Ca();break;case 27:case 5:xi(t);break;case 4:Wn(t,t.stateNode.containerInfo);break;case 10:Nn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Cn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ku(e,t,n):(Cn(t),e=pn(e,t,n),e!==null?e.sibling:null);Cn(t);break;case 19:var o=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(_a(e,t,n,!1),i=(n&t.childLanes)!==0),o){if(i)return Wu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),De(et,et.current),i)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n);case 24:Nn(t,tt,e.memoizedState.cache)}return pn(e,t,n)}function Zu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!Qr(e,n)&&(t.flags&128)===0)return it=!1,rg(e,t,n);it=(e.flags&131072)!==0}else it=!1,Ee&&(t.flags&1048576)!==0&&qh(t,Po,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,o=i._init;if(i=o(i._payload),t.type=i,typeof i=="function")cl(i)?(e=di(i,e),t.tag=1,t=Xu(null,t,i,e,n)):(t.tag=0,t=Vr(null,t,i,e,n));else{if(i!=null){if(o=i.$$typeof,o===I){t.tag=11,t=_u(null,t,i,e,n);break e}else if(o===R){t.tag=14,t=Vu(null,t,i,e,n);break e}}throw t=ze(i)||i,Error(l(306,t,""))}}return t;case 0:return Vr(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,o=di(i,t.pendingProps),Xu(e,t,i,o,n);case 3:e:{if(Wn(t,t.stateNode.containerInfo),e===null)throw Error(l(387));var c=t.pendingProps;o=t.memoizedState,i=o.element,el(e,t),Ua(t,c,null,n);var f=t.memoizedState;if(c=f.cache,Nn(t,tt,c),c!==o.cache&&Jr(t,[tt],n,!0),ja(),c=f.element,o.isDehydrated)if(o={element:c,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Fu(e,t,c,n);break e}else if(c!==i){i=qt(Error(l(424)),t),Da(i),t=Fu(e,t,c,n);break e}else for(st=Qt(t.stateNode.containerInfo.firstChild),mt=t,Ee=!0,Ft=null,Zt=!0,n=Gh(t,null,c,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ca(),c===i){t=pn(e,t,n);break e}rt(e,t,c,n)}t=t.child}return t;case 26:return Ia(e,t),e===null?(n=ef(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,i=ys(Wt.current).createElement(n),i[ct]=t,i[yt]=e,lt(i,n,e),nt(i),t.stateNode=i):t.memoizedState=ef(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xi(t),e===null&&Ee&&(i=t.stateNode=Zd(t.type,t.pendingProps,Wt.current),mt=t,Zt=!0,st=Qt(i.firstChild)),i=t.pendingProps.children,e!==null||Ee?rt(e,t,i,n):t.child=ri(t,null,i,n),Ia(e,t),t.child;case 5:return e===null&&Ee&&((o=i=st)&&(i=Rg(i,t.type,t.pendingProps,Zt),i!==null?(t.stateNode=i,mt=t,st=Qt(i.firstChild),Zt=!1,o=!0):o=!1),o||si(t)),xi(t),o=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,i=c.children,ql(o,c)?i=null:f!==null&&ql(o,f)&&(t.flags|=32),t.memoizedState!==null&&(o=kr(e,t,eg,null,null,n),ao._currentValue=o),Ia(e,t),rt(e,t,i,n),t.child;case 6:return e===null&&Ee&&((e=n=st)&&(n=Pg(n,t.pendingProps,Zt),n!==null?(t.stateNode=n,mt=t,st=null,e=!0):e=!1),e||si(t)),null;case 13:return Ku(e,t,n);case 4:return Wn(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ri(t,null,i,n):rt(e,t,i,n),t.child;case 11:return _u(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Nn(t,t.type,i.value),rt(e,t,i.children,n),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,pi(t),o=ht(o),i=i(o),t.flags|=1,rt(e,t,i,n),t.child;case 14:return Vu(e,t,t.type,t.pendingProps,n);case 15:return ju(e,t,t.type,t.pendingProps,n);case 19:return Wu(e,t,n);case 22:return Uu(e,t,n);case 24:return pi(t),i=ht(tt),e===null?(o=Tr(),o===null&&(o=Oe,c=vr(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),t.memoizedState={parent:i,cache:o},$r(t),Nn(t,tt,o)):((e.lanes&n)!==0&&(el(e,t),Ua(t,null,null,n),ja()),o=e.memoizedState,c=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Nn(t,tt,i)):(i=c.cache,Nn(t,tt,i),i!==o.cache&&Jr(t,[tt],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}var Wr=ye(null),fi=null,mn=null;function Nn(e,t,n){De(Wr,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=Wr.current,He(Wr)}function Zr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Jr(e,t,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var f=o.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=o;for(var k=0;k<t.length;k++)if(y.context===t[k]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Zr(c.return,n,e),i||(f=null);break e}c=y.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(l(341));f.lanes|=n,c=f.alternate,c!==null&&(c.lanes|=n),Zr(f,n,e),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function _a(e,t,n,i){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(l(387));if(f=f.memoizedProps,f!==null){var y=o.type;At(o.pendingProps.value,f.value)||(e!==null?e.push(y):e=[y])}}else if(o===Ti.current){if(f=o.alternate,f===null)throw Error(l(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(ao):e=[ao])}o=o.return}e!==null&&Jr(t,e,n,i),t.flags|=262144}function ts(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pi(e){fi=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Ju(fi,e)}function ns(e,t){return fi===null&&pi(e),Ju(e,t)}function Ju(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},mn===null){if(e===null)throw Error(l(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return n}var Ln=!1;function $r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function el(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ve&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=Oo(e),Lh(e,null,n),t}return qo(e,i,t,n),Oo(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Vc(e,n)}}function tl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=f:c=c.next=f,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var nl=!1;function ja(){if(nl){var e=Gi;if(e!==null)throw e}}function Ua(e,t,n,i){nl=!1;var o=e.updateQueue;Ln=!1;var c=o.firstBaseUpdate,f=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var k=y,z=k.next;k.next=null,f===null?c=z:f.next=z,f=k;var M=e.alternate;M!==null&&(M=M.updateQueue,y=M.lastBaseUpdate,y!==f&&(y===null?M.firstBaseUpdate=z:y.next=z,M.lastBaseUpdate=k))}if(c!==null){var O=o.baseState;f=0,M=z=k=null,y=c;do{var D=y.lane&-536870913,B=D!==y.lane;if(B?(Se&D)===D:(i&D)===D){D!==0&&D===Ui&&(nl=!0),M!==null&&(M=M.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ae=e,ue=y;D=t;var Ye=n;switch(ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){O=ae.call(Ye,O,D);break e}O=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,D=typeof ae=="function"?ae.call(Ye,O,D):ae,D==null)break e;O=$({},O,D);break e;case 2:Ln=!0}}D=y.callback,D!==null&&(e.flags|=64,B&&(e.flags|=8192),B=o.callbacks,B===null?o.callbacks=[D]:B.push(D))}else B={lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},M===null?(z=M=B,k=O):M=M.next=B,f|=D;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;B=y,y=B.next,B.next=null,o.lastBaseUpdate=B,o.shared.pending=null}}while(!0);M===null&&(k=O),o.baseState=k,o.firstBaseUpdate=z,o.lastBaseUpdate=M,c===null&&(o.shared.lanes=0),_n|=f,e.lanes=f,e.memoizedState=O}}function $u(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ed(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$u(n[e],t)}function Ga(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var c=n.create,f=n.inst;i=c(),f.destroy=i}n=n.next}while(n!==o)}}catch(y){qe(t,t.return,y)}}function On(e,t,n){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){var f=i.inst,y=f.destroy;if(y!==void 0){f.destroy=void 0,o=t;var k=n;try{y()}catch(z){qe(o,k,z)}}}i=i.next}while(i!==c)}}catch(z){qe(t,t.return,z)}}function td(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ed(t,n)}catch(i){qe(e,e.return,i)}}}function nd(e,t,n){n.props=di(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){qe(e,t,i)}}function mi(e,t){try{var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 26:case 27:case 5:var o=i;break;default:o=i}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(c){qe(e,t,c)}}function St(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){qe(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){qe(e,t,o)}else n.current=null}function id(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){qe(e,e.return,o)}}function ad(e,t,n){try{var i=e.stateNode;Ng(i,e.type,n,t),i[yt]=t}catch(o){qe(e,e.return,o)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function il(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gs));else if(i!==4&&i!==27&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function is(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&i!==27&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}var yn=!1,Ue=!1,ol=!1,sd=typeof WeakSet=="function"?WeakSet:Set,at=null,rd=!1;function lg(e,t){if(e=e.containerInfo,Ll=ks,e=Ah(e),rr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var f=0,y=-1,k=-1,z=0,M=0,O=e,D=null;t:for(;;){for(var B;O!==n||o!==0&&O.nodeType!==3||(y=f+o),O!==c||i!==0&&O.nodeType!==3||(k=f+i),O.nodeType===3&&(f+=O.nodeValue.length),(B=O.firstChild)!==null;)D=O,O=B;for(;;){if(O===e)break t;if(D===n&&++z===o&&(y=f),D===c&&++M===i&&(k=f),(B=O.nextSibling)!==null)break;O=D,D=O.parentNode}O=B}n=y===-1||k===-1?null:{start:y,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hl={focusedElem:e,selectionRange:n},ks=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,o=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var ae=di(n.type,o,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(ae,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ue){qe(n,n.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Pl(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pl(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}return ae=rd,rd=!1,ae}function ld(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:vn(e,n),i&4&&Ga(5,n);break;case 1:if(vn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){qe(n,n.return,y)}else{var o=di(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){qe(n,n.return,y)}}i&64&&td(n),i&512&&mi(n,n.return);break;case 3:if(vn(e,n),i&64&&(i=n.updateQueue,i!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{ed(i,e)}catch(y){qe(n,n.return,y)}}break;case 26:vn(e,n),i&512&&mi(n,n.return);break;case 27:case 5:vn(e,n),t===null&&i&4&&id(n),i&512&&mi(n,n.return);break;case 12:vn(e,n);break;case 13:vn(e,n),i&4&&ud(e,n);break;case 22:if(o=n.memoizedState!==null||yn,!o){t=t!==null&&t.memoizedState!==null||Ue;var c=yn,f=Ue;yn=o,(Ue=t)&&!f?Rn(e,n,(n.subtreeFlags&8772)!==0):vn(e,n),yn=c,Ue=f}i&512&&(n.memoizedProps.mode==="manual"?mi(n,n.return):St(n,n.return));break;default:vn(e,n)}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ys(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,zt=!1;function bn(e,t,n){for(n=n.child;n!==null;)hd(e,t,n),n=n.sibling}function hd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(pt,n)}catch{}switch(n.tag){case 26:Ue||St(n,t),bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||St(n,t);var i=Ze,o=zt;for(Ze=n.stateNode,bn(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Ys(n),Ze=i,zt=o;break;case 5:Ue||St(n,t);case 6:o=Ze;var c=zt;if(Ze=null,bn(e,t,n),Ze=o,zt=c,Ze!==null)if(zt)try{e=Ze,i=n.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)}catch(f){qe(n,t,f)}else try{Ze.removeChild(n.stateNode)}catch(f){qe(n,t,f)}break;case 18:Ze!==null&&(zt?(t=Ze,n=n.stateNode,t.nodeType===8?Rl(t.parentNode,n):t.nodeType===1&&Rl(t,n),lo(t)):Rl(Ze,n.stateNode));break;case 4:i=Ze,o=zt,Ze=n.stateNode.containerInfo,zt=!0,bn(e,t,n),Ze=i,zt=o;break;case 0:case 11:case 14:case 15:Ue||On(2,n,t),Ue||On(4,n,t),bn(e,t,n);break;case 1:Ue||(St(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&nd(n,t,i)),bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:Ue||St(n,t),Ue=(i=Ue)||n.memoizedState!==null,bn(e,t,n),Ue=i;break;default:bn(e,t,n)}}function ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lo(e)}catch(n){qe(t,t.return,n)}}function cg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sd),t;default:throw Error(l(435,e.tag))}}function sl(e,t){var n=cg(e);t.forEach(function(i){var o=xg.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}function It(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],c=e,f=t,y=f;e:for(;y!==null;){switch(y.tag){case 27:case 5:Ze=y.stateNode,zt=!1;break e;case 3:Ze=y.stateNode.containerInfo,zt=!0;break e;case 4:Ze=y.stateNode.containerInfo,zt=!0;break e}y=y.return}if(Ze===null)throw Error(l(160));hd(c,f,o),Ze=null,zt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}var Kt=null;function dd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(t,e),_t(e),i&4&&(On(3,e,e.return),Ga(3,e),On(5,e,e.return));break;case 1:It(t,e),_t(e),i&512&&(Ue||n===null||St(n,n.return)),i&64&&yn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=Kt;if(It(t,e),_t(e),i&512&&(Ue||n===null||St(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":c=o.getElementsByTagName("title")[0],(!c||c[ga]||c[ct]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(i),o.head.insertBefore(c,o.querySelector("head > title"))),lt(c,i,n),c[ct]=e,nt(c),i=c;break e;case"link":var f=af("link","href",o).get(i+(n.href||""));if(f){for(var y=0;y<f.length;y++)if(c=f[y],c.getAttribute("href")===(n.href==null?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(y,1);break t}}c=o.createElement(i),lt(c,i,n),o.head.appendChild(c);break;case"meta":if(f=af("meta","content",o).get(i+(n.content||""))){for(y=0;y<f.length;y++)if(c=f[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(y,1);break t}}c=o.createElement(i),lt(c,i,n),o.head.appendChild(c);break;default:throw Error(l(468,i))}c[ct]=e,nt(c),i=c}e.stateNode=i}else of(o,e.type,e.stateNode);else e.stateNode=nf(o,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?of(o,e.type,e.stateNode):nf(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ad(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&e.alternate===null){o=e.stateNode,c=e.memoizedProps;try{for(var k=o.firstChild;k;){var z=k.nextSibling,M=k.nodeName;k[ga]||M==="HEAD"||M==="BODY"||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&k.rel.toLowerCase()==="stylesheet"||o.removeChild(k),k=z}for(var O=e.type,D=o.attributes;D.length;)o.removeAttributeNode(D[0]);lt(o,O,c),o[ct]=e,o[yt]=c}catch(ae){qe(e,e.return,ae)}}case 5:if(It(t,e),_t(e),i&512&&(Ue||n===null||St(n,n.return)),e.flags&32){o=e.stateNode;try{Mi(o,"")}catch(ae){qe(e,e.return,ae)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,ad(e,o,n!==null?n.memoizedProps:o)),i&1024&&(ol=!0);break;case 6:if(It(t,e),_t(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ae){qe(e,e.return,ae)}}break;case 3:if(ws=null,o=Kt,Kt=bs(t.containerInfo),It(t,e),Kt=o,_t(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(t.containerInfo)}catch(ae){qe(e,e.return,ae)}ol&&(ol=!1,fd(e));break;case 4:i=Kt,Kt=bs(e.stateNode.containerInfo),It(t,e),_t(e),Kt=i;break;case 12:It(t,e),_t(e);break;case 13:It(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ml=Mt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,sl(e,i)));break;case 22:if(i&512&&(Ue||n===null||St(n,n.return)),k=e.memoizedState!==null,z=n!==null&&n.memoizedState!==null,M=yn,O=Ue,yn=M||k,Ue=O||z,It(t,e),Ue=O,yn=M,_t(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,i&8192&&(t._visibility=k?t._visibility&-2:t._visibility|1,k&&(t=yn||Ue,n===null||z||t||Ki(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){z=n=t;try{if(o=z.stateNode,k)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=z.stateNode,y=z.memoizedProps.style;var B=y!=null&&y.hasOwnProperty("display")?y.display:null;f.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ae){qe(z,z.return,ae)}}}else if(t.tag===6){if(n===null){z=t;try{z.stateNode.nodeValue=k?"":z.memoizedProps}catch(ae){qe(z,z.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,sl(e,n))));break;case 19:It(t,e),_t(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,sl(e,i)));break;case 21:break;default:It(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(od(n)){var i=n;break e}n=n.return}throw Error(l(160))}switch(i.tag){case 27:var o=i.stateNode,c=il(e);is(e,c,o);break;case 5:var f=i.stateNode;i.flags&32&&(Mi(f,""),i.flags&=-33);var y=il(e);is(e,y,f);break;case 3:case 4:var k=i.stateNode.containerInfo,z=il(e);al(e,z,k);break;default:throw Error(l(161))}}}catch(M){qe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function vn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ld(e,t.alternate,t),t=t.sibling}function Ki(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:On(4,t,t.return),Ki(t);break;case 1:St(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&nd(t,t.return,n),Ki(t);break;case 26:case 27:case 5:St(t,t.return),Ki(t);break;case 22:St(t,t.return),t.memoizedState===null&&Ki(t);break;default:Ki(t)}e=e.sibling}}function Rn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:Rn(o,c,n),Ga(4,c);break;case 1:if(Rn(o,c,n),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(z){qe(i,i.return,z)}if(i=c,o=i.updateQueue,o!==null){var y=i.stateNode;try{var k=o.shared.hiddenCallbacks;if(k!==null)for(o.shared.hiddenCallbacks=null,o=0;o<k.length;o++)$u(k[o],y)}catch(z){qe(i,i.return,z)}}n&&f&64&&td(c),mi(c,c.return);break;case 26:case 27:case 5:Rn(o,c,n),n&&i===null&&f&4&&id(c),mi(c,c.return);break;case 12:Rn(o,c,n);break;case 13:Rn(o,c,n),n&&f&4&&ud(o,c);break;case 22:c.memoizedState===null&&Rn(o,c,n),mi(c,c.return);break;default:Rn(o,c,n)}t=t.sibling}}function rl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function ll(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Pn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pd(e,t,n,i),t=t.sibling}function pd(e,t,n,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Pn(e,t,n,i),o&2048&&Ga(9,t);break;case 3:Pn(e,t,n,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e)));break;case 12:if(o&2048){Pn(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,y=c.onPostCommit;typeof y=="function"&&y(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){qe(t,t.return,k)}}else Pn(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,t.memoizedState!==null?c._visibility&4?Pn(e,t,n,i):Ya(e,t):c._visibility&4?Pn(e,t,n,i):(c._visibility|=4,Qi(e,t,n,i,(t.subtreeFlags&10256)!==0)),o&2048&&rl(t.alternate,t);break;case 24:Pn(e,t,n,i),o&2048&&ll(t.alternate,t);break;default:Pn(e,t,n,i)}}function Qi(e,t,n,i,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,f=t,y=n,k=i,z=f.flags;switch(f.tag){case 0:case 11:case 15:Qi(c,f,y,k,o),Ga(8,f);break;case 23:break;case 22:var M=f.stateNode;f.memoizedState!==null?M._visibility&4?Qi(c,f,y,k,o):Ya(c,f):(M._visibility|=4,Qi(c,f,y,k,o)),o&&z&2048&&rl(f.alternate,f);break;case 24:Qi(c,f,y,k,o),o&&z&2048&&ll(f.alternate,f);break;default:Qi(c,f,y,k,o)}t=t.sibling}}function Ya(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,o=i.flags;switch(i.tag){case 22:Ya(n,i),o&2048&&rl(i.alternate,i);break;case 24:Ya(n,i),o&2048&&ll(i.alternate,i);break;default:Ya(n,i)}t=t.sibling}}var Xa=8192;function Wi(e){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)md(e),e=e.sibling}function md(e){switch(e.tag){case 26:Wi(e),e.flags&Xa&&e.memoizedState!==null&&Zg(Kt,e.memoizedState,e.memoizedProps);break;case 5:Wi(e);break;case 3:case 4:var t=Kt;Kt=bs(e.stateNode.containerInfo),Wi(e),Kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xa,Xa=16777216,Wi(e),Xa=t):Wi(e));break;default:Wi(e)}}function gd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];at=i,bd(i,e)}gd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yd(e),e=e.sibling}function yd(e){switch(e.tag){case 0:case 11:case 15:Fa(e),e.flags&2048&&On(9,e,e.return);break;case 3:Fa(e);break;case 12:Fa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,as(e)):Fa(e);break;default:Fa(e)}}function as(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];at=i,bd(i,e)}gd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:On(8,t,t.return),as(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,as(t));break;default:as(t)}e=e.sibling}}function bd(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:On(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,at=i;else e:for(n=e;at!==null;){i=at;var o=i.sibling,c=i.return;if(cd(i),i===n){at=null;break e}if(o!==null){o.return=c,at=o;break e}at=c}}}function hg(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,i){return new hg(e,t,n,i)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function In(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vd(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function os(e,t,n,i,o,c){var f=0;if(i=e,typeof e=="function")cl(e)&&(f=1);else if(typeof e=="string")f=Qg(e,n,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case b:return gi(n.children,o,c,t);case m:f=8,o|=24;break;case v:return e=Vt(12,n,t,o|2),e.elementType=v,e.lanes=c,e;case P:return e=Vt(13,n,t,o),e.elementType=P,e.lanes=c,e;case J:return e=Vt(19,n,t,o),e.elementType=J,e.lanes=c,e;case Y:return wd(n,o,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case T:f=10;break e;case A:f=9;break e;case I:f=11;break e;case R:f=14;break e;case F:f=16,i=null;break e}f=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Vt(f,n,t,o),t.elementType=e,t.type=i,t.lanes=c,t}function gi(e,t,n,i){return e=Vt(7,e,i,t),e.lanes=n,e}function wd(e,t,n,i){e=Vt(22,e,i,t),e.elementType=Y,e.lanes=n;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=o._current;if(c===null)throw Error(l(456));if((o._pendingVisibility&2)===0){var f=En(c,2);f!==null&&(o._pendingVisibility|=2,gt(f,c,2))}},attach:function(){var c=o._current;if(c===null)throw Error(l(456));if((o._pendingVisibility&2)!==0){var f=En(c,2);f!==null&&(o._pendingVisibility&=-3,gt(f,c,2))}}};return e.stateNode=o,e}function hl(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wn(e){e.flags|=4}function Td(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sf(t)){if(t=Pt.current,t!==null&&((Se&4194176)===Se?Jt!==null:(Se&62914560)!==Se&&(Se&536870912)===0||t!==Jt))throw Ma=gr,Ph;e.flags|=8192}}function ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ic():536870912,e.lanes|=t,Ji|=t)}function Ka(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&31457280,i|=o.flags&31457280,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ug(e,t,n){var i=t.pendingProps;switch(pr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),gn(tt),sn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ft!==null&&(vl(Ft),Ft=null))),_e(t),null;case 26:return n=t.memoizedState,e===null?(wn(t),n!==null?(_e(t),Td(t,n)):(_e(t),t.flags&=-16777217)):n?n!==e.memoizedState?(wn(t),_e(t),Td(t,n)):(_e(t),t.flags&=-16777217):(e.memoizedProps!==i&&wn(t),_e(t),t.flags&=-16777217),null;case 27:ki(t),n=Wt.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return _e(t),null}e=ft.current,Ea(t)?Oh(t):(e=Zd(o,i,n),t.stateNode=e,wn(t))}return _e(t),null;case 5:if(ki(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return _e(t),null}if(e=ft.current,Ea(t))Oh(t);else{switch(o=ys(Wt.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}e[ct]=t,e[yt]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(lt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&wn(t)}}return _e(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&wn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=Wt.current,Ea(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,o=mt,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Yd(e.nodeValue,n)),e||si(t)}else e=ys(e).createTextNode(i),e[ct]=t,t.stateNode=e}return _e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Ea(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[ct]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),o=!1}else Ft!==null&&(vl(Ft),Ft=null),o=!0;if(!o)return t.flags&256?(dn(t),t):(dn(t),null)}if(dn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool);var c=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ss(t,t.updateQueue),_e(t),null;case 4:return sn(),e===null&&Bl(t.stateNode.containerInfo),_e(t),null;case 10:return gn(t.type),_e(t),null;case 19:if(He(et),o=t.memoizedState,o===null)return _e(t),null;if(i=(t.flags&128)!==0,c=o.rendering,c===null)if(i)Ka(o,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Uo(e),c!==null){for(t.flags|=128,Ka(o,!1),e=c.updateQueue,t.updateQueue=e,ss(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vd(n,e),n=n.sibling;return De(et,et.current&1|2),t.child}e=e.sibling}o.tail!==null&&Mt()>rs&&(t.flags|=128,i=!0,Ka(o,!1),t.lanes=4194304)}else{if(!i)if(e=Uo(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ss(t,e),Ka(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Ee)return _e(t),null}else 2*Mt()-o.renderingStartTime>rs&&n!==536870912&&(t.flags|=128,i=!0,Ka(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(e=o.last,e!==null?e.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Mt(),t.sibling=null,e=et.current,De(et,i?e&1|2:e&1),t):(_e(t),null);case 22:case 23:return dn(t),br(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),n=t.updateQueue,n!==null&&ss(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&He(li),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(tt),_e(t),null;case 25:return null}throw Error(l(156,t.tag))}function dg(e,t){switch(pr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(tt),sn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ki(t),null;case 13:if(dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(et),null;case 4:return sn(),null;case 10:return gn(t.type),null;case 22:case 23:return dn(t),br(),e!==null&&He(li),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(tt),null;case 25:return null;default:return null}}function xd(e,t){switch(pr(t),t.tag){case 3:gn(tt),sn();break;case 26:case 27:case 5:ki(t);break;case 4:sn();break;case 13:dn(t);break;case 19:He(et);break;case 10:gn(t.type);break;case 22:case 23:dn(t),br(),e!==null&&He(li);break;case 24:gn(tt)}}var fg={getCacheForType:function(e){var t=ht(tt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},pg=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Oe=null,Te=null,Se=0,Re=0,Et=null,Tn=!1,Zi=!1,dl=!1,xn=0,Ge=0,_n=0,yi=0,fl=0,jt=0,Ji=0,Qa=null,en=null,pl=!1,ml=0,rs=1/0,ls=null,Vn=null,cs=!1,bi=null,Wa=0,gl=0,yl=null,Za=0,bl=null;function Ct(){if((Ve&2)!==0&&Se!==0)return Se&-Se;if(U.T!==null){var e=Ui;return e!==0?e:zl()}return Uc()}function kd(){jt===0&&(jt=(Se&536870912)===0||Ee?Pc():536870912);var e=Pt.current;return e!==null&&(e.flags|=32),jt}function gt(e,t,n){(e===Oe&&Re===2||e.cancelPendingCommit!==null)&&($i(e,0),kn(e,Se,jt,!1)),ma(e,n),((Ve&2)===0||e!==Oe)&&(e===Oe&&((Ve&2)===0&&(yi|=n),Ge===4&&kn(e,Se,jt,!1)),tn(e))}function Ad(e,t,n){if((Ve&6)!==0)throw Error(l(327));var i=!n&&(t&60)===0&&(t&e.expiredLanes)===0||pa(e,t),o=i?yg(e,t):xl(e,t,!0),c=i;do{if(o===0){Zi&&!i&&kn(e,t,0,!1);break}else if(o===6)kn(e,t,0,!Tn);else{if(n=e.current.alternate,c&&!mg(n)){o=xl(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var y=e;o=Qa;var k=y.current.memoizedState.isDehydrated;if(k&&($i(y,f).flags|=256),f=xl(y,f,!1),f!==2){if(dl&&!k){y.errorRecoveryDisabledLanes|=c,yi|=c,o=4;break e}c=en,en=o,c!==null&&vl(c)}o=f}if(c=!1,o!==2)continue}}if(o===1){$i(e,0),kn(e,t,0,!0);break}e:{switch(i=e,o){case 0:case 1:throw Error(l(345));case 4:if((t&4194176)===t){kn(i,t,jt,!Tn);break e}break;case 2:en=null;break;case 3:case 5:break;default:throw Error(l(329))}if(i.finishedWork=n,i.finishedLanes=t,(t&62914560)===t&&(c=ml+300-Mt(),10<c)){if(kn(i,t,jt,!Tn),xo(i,0)!==0)break e;i.timeoutHandle=Kd(Sd.bind(null,i,n,en,ls,pl,t,jt,yi,Ji,Tn,2,-0,0),c);break e}Sd(i,n,en,ls,pl,t,jt,yi,Ji,Tn,0,-0,0)}}break}while(!0);tn(e)}function vl(e){en===null?en=e:en.push.apply(en,e)}function Sd(e,t,n,i,o,c,f,y,k,z,M,O,D){var B=t.subtreeFlags;if((B&8192||(B&16785408)===16785408)&&(io={stylesheets:null,count:0,unsuspend:Wg},md(t),t=Jg(),t!==null)){e.cancelPendingCommit=t(Nd.bind(null,e,n,i,o,f,y,k,1,O,D)),kn(e,c,f,!z);return}Nd(e,n,i,o,f,y,k,M,O,D)}function mg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],c=o.getSnapshot;o=o.value;try{if(!At(c(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,i){t&=~fl,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var c=31-Ke(o),f=1<<c;i[c]=-1,o&=~f}n!==0&&_c(e,n,t)}function hs(){return(Ve&6)===0?(Ja(0),!1):!0}function wl(){if(Te!==null){if(Re===0)var e=Te.return;else e=Te,mn=fi=null,zr(e),Vi=null,Na=0,e=Te;for(;e!==null;)xd(e.alternate,e),e=e.return;Te=null}}function $i(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),wl(),Oe=e,Te=n=In(e.current,null),Se=t,Re=0,Et=null,Tn=!1,Zi=pa(e,t),dl=!1,Ji=jt=fl=yi=_n=Ge=0,en=Qa=null,pl=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-Ke(i),c=1<<o;t|=e[o],i&=~c}return xn=t,Ho(),n}function zd(e,t){be=null,U.H=$t,t===Ba?(t=Vh(),Re=3):t===Ph?(t=Vh(),Re=4):Re=t===Iu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,Te===null&&(Ge=1,es(e,qt(t,e.current)))}function Ed(){var e=U.H;return U.H=$t,e===null?$t:e}function Cd(){var e=U.A;return U.A=fg,e}function Tl(){Ge=4,Tn||(Se&4194176)!==Se&&Pt.current!==null||(Zi=!0),(_n&134217727)===0&&(yi&134217727)===0||Oe===null||kn(Oe,Se,jt,!1)}function xl(e,t,n){var i=Ve;Ve|=2;var o=Ed(),c=Cd();(Oe!==e||Se!==t)&&(ls=null,$i(e,t)),t=!1;var f=Ge;e:do try{if(Re!==0&&Te!==null){var y=Te,k=Et;switch(Re){case 8:wl(),f=6;break e;case 3:case 2:case 6:Pt.current===null&&(t=!0);var z=Re;if(Re=0,Et=null,ea(e,y,k,z),n&&Zi){f=0;break e}break;default:z=Re,Re=0,Et=null,ea(e,y,k,z)}}gg(),f=Ge;break}catch(M){zd(e,M)}while(!0);return t&&e.shellSuspendCounter++,mn=fi=null,Ve=i,U.H=o,U.A=c,Te===null&&(Oe=null,Se=0,Ho()),f}function gg(){for(;Te!==null;)Dd(Te)}function yg(e,t){var n=Ve;Ve|=2;var i=Ed(),o=Cd();Oe!==e||Se!==t?(ls=null,rs=Mt()+500,$i(e,t)):Zi=pa(e,t);e:do try{if(Re!==0&&Te!==null){t=Te;var c=Et;t:switch(Re){case 1:Re=0,Et=null,ea(e,t,c,1);break;case 2:if(Ih(c)){Re=0,Et=null,Bd(t);break}t=function(){Re===2&&Oe===e&&(Re=7),tn(e)},c.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Ih(c)?(Re=0,Et=null,Bd(t)):(Re=0,Et=null,ea(e,t,c,7));break;case 5:var f=null;switch(Te.tag){case 26:f=Te.memoizedState;case 5:case 27:var y=Te;if(!f||sf(f)){Re=0,Et=null;var k=y.sibling;if(k!==null)Te=k;else{var z=y.return;z!==null?(Te=z,us(z)):Te=null}break t}}Re=0,Et=null,ea(e,t,c,5);break;case 6:Re=0,Et=null,ea(e,t,c,6);break;case 8:wl(),Ge=6;break e;default:throw Error(l(462))}}bg();break}catch(M){zd(e,M)}while(!0);return mn=fi=null,U.H=i,U.A=o,Ve=n,Te!==null?0:(Oe=null,Se=0,Ho(),Ge)}function bg(){for(;Te!==null&&!_s();)Dd(Te)}function Dd(e){var t=Zu(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?us(e):Te=t}function Bd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yu(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Yu(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:zr(t);default:xd(n,t),t=Te=vd(t,xn),t=Zu(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?us(e):Te=t}function ea(e,t,n,i){mn=fi=null,zr(t),Vi=null,Na=0;var o=t.return;try{if(sg(e,o,t,n,Se)){Ge=1,es(e,qt(n,e.current)),Te=null;return}}catch(c){if(o!==null)throw Te=o,c;Ge=1,es(e,qt(n,e.current)),Te=null;return}t.flags&32768?(Ee||i===1?e=!0:Zi||(Se&536870912)!==0?e=!1:(Tn=e=!0,(i===2||i===3||i===6)&&(i=Pt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Md(t,e)):us(t)}function us(e){var t=e;do{if((t.flags&32768)!==0){Md(t,Tn);return}e=t.return;var n=ug(t.alternate,t,xn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ge===0&&(Ge=5)}function Md(e,t){do{var n=dg(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);Ge=6,Te=null}function Nd(e,t,n,i,o,c,f,y,k,z){var M=U.T,O=G.p;try{G.p=2,U.T=null,vg(e,t,n,i,O,o,c,f,y,k,z)}finally{U.T=M,G.p=O}}function vg(e,t,n,i,o,c,f,y){do ta();while(bi!==null);if((Ve&6)!==0)throw Error(l(327));var k=e.finishedWork;if(i=e.finishedLanes,k===null)return null;if(e.finishedWork=null,e.finishedLanes=0,k===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var z=k.lanes|k.childLanes;if(z|=ur,Zp(e,i,z,c,f,y),e===Oe&&(Te=Oe=null,Se=0),(k.subtreeFlags&10256)===0&&(k.flags&10256)===0||cs||(cs=!0,gl=z,yl=n,kg(ce,function(){return ta(),null})),n=(k.flags&15990)!==0,(k.subtreeFlags&15990)!==0||n?(n=U.T,U.T=null,c=G.p,G.p=2,f=Ve,Ve|=4,lg(e,k),dd(k,e),Um(Hl,e.containerInfo),ks=!!Ll,Hl=Ll=null,e.current=k,ld(e,k.alternate,k),Vs(),Ve=f,G.p=c,U.T=n):e.current=k,cs?(cs=!1,bi=e,Wa=i):Ld(e,z),z=e.pendingLanes,z===0&&(Vn=null),Zn(k.stateNode),tn(e),t!==null)for(o=e.onRecoverableError,k=0;k<t.length;k++)z=t[k],o(z.value,{componentStack:z.stack});return(Wa&3)!==0&&ta(),z=e.pendingLanes,(i&4194218)!==0&&(z&42)!==0?e===bl?Za++:(Za=0,bl=e):Za=0,Ja(0),null}function Ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function ta(){if(bi!==null){var e=bi,t=gl;gl=0;var n=jc(Wa),i=U.T,o=G.p;try{if(G.p=32>n?32:n,U.T=null,bi===null)var c=!1;else{n=yl,yl=null;var f=bi,y=Wa;if(bi=null,Wa=0,(Ve&6)!==0)throw Error(l(331));var k=Ve;if(Ve|=4,yd(f.current),pd(f,f.current,y,n),Ve=k,Ja(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(pt,f)}catch{}c=!0}return c}finally{G.p=o,U.T=i,Ld(e,t)}}return!1}function Hd(e,t,n){t=qt(n,t),t=_r(e.stateNode,t,2),e=qn(e,t,2),e!==null&&(ma(e,2),tn(e))}function qe(e,t,n){if(e.tag===3)Hd(e,e,n);else for(;t!==null;){if(t.tag===3){Hd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vn===null||!Vn.has(i))){e=qt(n,e),n=Ru(2),i=qn(t,n,2),i!==null&&(Pu(n,i,t,e),ma(i,2),tn(i));break}}t=t.return}}function kl(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new pg;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(dl=!0,o.add(n),e=wg.bind(null,e,t,n),t.then(e,e))}function wg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(Se&n)===n&&(Ge===4||Ge===3&&(Se&62914560)===Se&&300>Mt()-ml?(Ve&2)===0&&$i(e,0):fl|=n,Ji===Se&&(Ji=0)),tn(e)}function qd(e,t){t===0&&(t=Ic()),e=En(e,t),e!==null&&(ma(e,t),tn(e))}function Tg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qd(e,n)}function xg(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),qd(e,n)}function kg(e,t){return Si(e,t)}var ds=null,na=null,Al=!1,fs=!1,Sl=!1,vi=0;function tn(e){e!==na&&e.next===null&&(na===null?ds=na=e:na=na.next=e),fs=!0,Al||(Al=!0,Sg(Ag))}function Ja(e,t){if(!Sl&&fs){Sl=!0;do for(var n=!1,i=ds;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var f=i.suspendedLanes,y=i.pingedLanes;c=(1<<31-Ke(42|e)+1)-1,c&=o&~(f&~y),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(n=!0,Pd(i,c))}else c=Se,c=xo(i,i===Oe?c:0),(c&3)===0||pa(i,c)||(n=!0,Pd(i,c));i=i.next}while(n);Sl=!1}}function Ag(){fs=Al=!1;var e=0;vi!==0&&(Lg()&&(e=vi),vi=0);for(var t=Mt(),n=null,i=ds;i!==null;){var o=i.next,c=Od(i,t);c===0?(i.next=null,n===null?ds=o:n.next=o,o===null&&(na=n)):(n=i,(e!==0||(c&3)!==0)&&(fs=!0)),i=o}Ja(e)}function Od(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-Ke(c),y=1<<f,k=o[f];k===-1?((y&n)===0||(y&i)!==0)&&(o[f]=Wp(y,t)):k<=t&&(e.expiredLanes|=y),c&=~y}if(t=Oe,n=Se,n=xo(e,e===t?n:0),i=e.callbackNode,n===0||e===t&&Re===2||e.cancelPendingCommit!==null)return i!==null&&i!==null&&fa(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&fa(i),jc(n)){case 2:case 8:n=j;break;case 32:n=ce;break;case 268435456:n=Me;break;default:n=ce}return i=Rd.bind(null,e),n=Si(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&fa(i),e.callbackPriority=2,e.callbackNode=null,2}function Rd(e,t){var n=e.callbackNode;if(ta()&&e.callbackNode!==n)return null;var i=Se;return i=xo(e,e===Oe?i:0),i===0?null:(Ad(e,i,t),Od(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?Rd.bind(null,e):null)}function Pd(e,t){if(ta())return null;Ad(e,t,!0)}function Sg(e){qg(function(){(Ve&6)!==0?Si(N,e):e()})}function zl(){return vi===0&&(vi=Pc()),vi}function Id(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Eo(""+e)}function _d(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function zg(e,t,n,i,o){if(t==="submit"&&n&&n.stateNode===o){var c=Id((o[yt]||null).action),f=i.submitter;f&&(t=(t=f[yt]||null)?Id(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var y=new Mo("action","action",null,i,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(vi!==0){var k=f?_d(o,f):new FormData(o);qr(n,{pending:!0,data:k,method:o.method,action:c},null,k)}}else typeof c=="function"&&(y.preventDefault(),k=f?_d(o,f):new FormData(o),qr(n,{pending:!0,data:k,method:o.method,action:c},c,k))},currentTarget:o}]})}}for(var El=0;El<Nh.length;El++){var Cl=Nh[El],Eg=Cl.toLowerCase(),Cg=Cl[0].toUpperCase()+Cl.slice(1);Xt(Eg,"on"+Cg)}Xt(Eh,"onAnimationEnd"),Xt(Ch,"onAnimationIteration"),Xt(Dh,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Ym,"onTransitionRun"),Xt(Xm,"onTransitionStart"),Xt(Fm,"onTransitionCancel"),Xt(Bh,"onTransitionEnd"),Di("onMouseEnter",["mouseout","mouseover"]),Di("onMouseLeave",["mouseout","mouseover"]),Di("onPointerEnter",["pointerout","pointerover"]),Di("onPointerLeave",["pointerout","pointerover"]),ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($a));function Vd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var f=i.length-1;0<=f;f--){var y=i[f],k=y.instance,z=y.currentTarget;if(y=y.listener,k!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=z;try{c(o)}catch(M){$o(M)}o.currentTarget=null,c=k}else for(f=0;f<i.length;f++){if(y=i[f],k=y.instance,z=y.currentTarget,y=y.listener,k!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=z;try{c(o)}catch(M){$o(M)}o.currentTarget=null,c=k}}}}function Ae(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var i=e+"__bubble";n.has(i)||(jd(t,e,2,!1),n.add(i))}function Dl(e,t,n){var i=0;t&&(i|=4),jd(n,e,i,t)}var ps="_reactListening"+Math.random().toString(36).slice(2);function Bl(e){if(!e[ps]){e[ps]=!0,Yc.forEach(function(n){n!=="selectionchange"&&(Dg.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ps]||(t[ps]=!0,Dl("selectionchange",!1,t))}}function jd(e,t,n,i){switch(df(t)){case 2:var o=ty;break;case 8:o=ny;break;default:o=Ul}n=o.bind(null,t,n,e),o=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ml(e,t,n,i,o){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var y=i.stateNode.containerInfo;if(y===o||y.nodeType===8&&y.parentNode===o)break;if(f===4)for(f=i.return;f!==null;){var k=f.tag;if((k===3||k===4)&&(k=f.stateNode.containerInfo,k===o||k.nodeType===8&&k.parentNode===o))return;f=f.return}for(;y!==null;){if(f=$n(y),f===null)return;if(k=f.tag,k===5||k===6||k===26||k===27){i=c=f;continue e}y=y.parentNode}}i=i.return}ih(function(){var z=c,M=Ws(n),O=[];e:{var D=Mh.get(e);if(D!==void 0){var B=Mo,ae=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":B=xm;break;case"focusin":ae="focus",B=nr;break;case"focusout":ae="blur",B=nr;break;case"beforeblur":case"afterblur":B=nr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Sm;break;case Eh:case Ch:case Dh:B=fm;break;case Bh:B=Em;break;case"scroll":case"scrollend":B=lm;break;case"wheel":B=Dm;break;case"copy":case"cut":case"paste":B=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=lh;break;case"toggle":case"beforetoggle":B=Mm}var ue=(t&4)!==0,Ye=!ue&&(e==="scroll"||e==="scrollend"),E=ue?D!==null?D+"Capture":null:D;ue=[];for(var S=z,C;S!==null;){var H=S;if(C=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||C===null||E===null||(H=ba(S,E),H!=null&&ue.push(eo(S,H,C))),Ye)break;S=S.return}0<ue.length&&(D=new B(D,ae,null,n,M),O.push({event:D,listeners:ue}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",D&&n!==Qs&&(ae=n.relatedTarget||n.fromElement)&&($n(ae)||ae[zi]))break e;if((B||D)&&(D=M.window===M?M:(D=M.ownerDocument)?D.defaultView||D.parentWindow:window,B?(ae=n.relatedTarget||n.toElement,B=z,ae=ae?$n(ae):null,ae!==null&&(Ye=ne(ae),ue=ae.tag,ae!==Ye||ue!==5&&ue!==27&&ue!==6)&&(ae=null)):(B=null,ae=z),B!==ae)){if(ue=sh,H="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ue=lh,H="onPointerLeave",E="onPointerEnter",S="pointer"),Ye=B==null?D:ya(B),C=ae==null?D:ya(ae),D=new ue(H,S+"leave",B,n,M),D.target=Ye,D.relatedTarget=C,H=null,$n(M)===z&&(ue=new ue(E,S+"enter",ae,n,M),ue.target=C,ue.relatedTarget=Ye,H=ue),Ye=H,B&&ae)t:{for(ue=B,E=ae,S=0,C=ue;C;C=ia(C))S++;for(C=0,H=E;H;H=ia(H))C++;for(;0<S-C;)ue=ia(ue),S--;for(;0<C-S;)E=ia(E),C--;for(;S--;){if(ue===E||E!==null&&ue===E.alternate)break t;ue=ia(ue),E=ia(E)}ue=null}else ue=null;B!==null&&Ud(O,D,B,ue,!1),ae!==null&&Ye!==null&&Ud(O,Ye,ae,ue,!0)}}e:{if(D=z?ya(z):window,B=D.nodeName&&D.nodeName.toLowerCase(),B==="select"||B==="input"&&D.type==="file")var Q=gh;else if(ph(D))if(yh)Q=Vm;else{Q=Im;var ve=Pm}else B=D.nodeName,!B||B.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?z&&Ks(z.elementType)&&(Q=gh):Q=_m;if(Q&&(Q=Q(e,z))){mh(O,Q,n,M);break e}ve&&ve(e,D,z),e==="focusout"&&z&&D.type==="number"&&z.memoizedProps.value!=null&&Fs(D,"number",D.value)}switch(ve=z?ya(z):window,e){case"focusin":(ph(ve)||ve.contentEditable==="true")&&(qi=ve,lr=z,za=null);break;case"focusout":za=lr=qi=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,Sh(O,n,M);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Sh(O,n,M)}var re;if(ar)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Hi?dh(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(ch&&n.locale!=="ko"&&(Hi||le!=="onCompositionStart"?le==="onCompositionEnd"&&Hi&&(re=ah()):(zn=M,$s="value"in zn?zn.value:zn.textContent,Hi=!0)),ve=ms(z,le),0<ve.length&&(le=new rh(le,e,null,n,M),O.push({event:le,listeners:ve}),re?le.data=re:(re=fh(n),re!==null&&(le.data=re)))),(re=Lm?Hm(e,n):qm(e,n))&&(le=ms(z,"onBeforeInput"),0<le.length&&(ve=new rh("onBeforeInput","beforeinput",null,n,M),O.push({event:ve,listeners:le}),ve.data=re)),zg(O,e,z,n,M)}Vd(O,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ms(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=ba(e,n),o!=null&&i.unshift(eo(e,o,c)),o=ba(e,t),o!=null&&i.push(eo(e,o,c))),e=e.return}return i}function ia(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,n,i,o){for(var c=t._reactName,f=[];n!==null&&n!==i;){var y=n,k=y.alternate,z=y.stateNode;if(y=y.tag,k!==null&&k===i)break;y!==5&&y!==26&&y!==27||z===null||(k=z,o?(z=ba(n,c),z!=null&&f.unshift(eo(n,z,k))):o||(z=ba(n,c),z!=null&&f.push(eo(n,z,k)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Bg=/\r\n?/g,Mg=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(Bg,`
`).replace(Mg,"")}function Yd(e,t){return t=Gd(t),Gd(e)===t}function gs(){}function Le(e,t,n,i,o,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Mi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Mi(e,""+i);break;case"className":Ao(e,"class",i);break;case"tabIndex":Ao(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ao(e,n,i);break;case"style":th(e,i,c);break;case"data":if(t!=="object"){Ao(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Eo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Le(e,t,"name",o.name,o,null),Le(e,t,"formEncType",o.formEncType,o,null),Le(e,t,"formMethod",o.formMethod,o,null),Le(e,t,"formTarget",o.formTarget,o,null)):(Le(e,t,"encType",o.encType,o,null),Le(e,t,"method",o.method,o,null),Le(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Eo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=gs);break;case"onScroll":i!=null&&Ae("scroll",e);break;case"onScrollEnd":i!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Eo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),ko(e,"popover",i);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ko(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=sm.get(n)||n,ko(e,n,i))}}function Nl(e,t,n,i,o,c){switch(n){case"style":th(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Mi(e,i):(typeof i=="number"||typeof i=="bigint")&&Mi(e,""+i);break;case"onScroll":i!=null&&Ae("scroll",e);break;case"onScrollEnd":i!=null&&Ae("scrollend",e);break;case"onClick":i!=null&&(e.onclick=gs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),c=e[yt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ko(e,n,i)}}}function lt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var i=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var f=n[c];if(f!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,c,f,n,null)}}o&&Le(e,t,"srcSet",n.srcSet,n,null),i&&Le(e,t,"src",n.src,n,null);return;case"input":Ae("invalid",e);var y=c=f=o=null,k=null,z=null;for(i in n)if(n.hasOwnProperty(i)){var M=n[i];if(M!=null)switch(i){case"name":o=M;break;case"type":f=M;break;case"checked":k=M;break;case"defaultChecked":z=M;break;case"value":c=M;break;case"defaultValue":y=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,t));break;default:Le(e,t,i,M,n,null)}}Zc(e,c,y,k,z,f,o,!1),So(e);return;case"select":Ae("invalid",e),i=f=c=null;for(o in n)if(n.hasOwnProperty(o)&&(y=n[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":f=y;break;case"multiple":i=y;default:Le(e,t,o,y,n,null)}t=c,n=f,e.multiple=!!i,t!=null?Bi(e,!!i,t,!1):n!=null&&Bi(e,!!i,n,!0);return;case"textarea":Ae("invalid",e),c=o=i=null;for(f in n)if(n.hasOwnProperty(f)&&(y=n[f],y!=null))switch(f){case"value":i=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Le(e,t,f,y,n,null)}$c(e,i,o,c),So(e);return;case"option":for(k in n)if(n.hasOwnProperty(k)&&(i=n[k],i!=null))switch(k){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Le(e,t,k,i,n,null)}return;case"dialog":Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(i=0;i<$a.length;i++)Ae($a[i],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,z,i,n,null)}return;default:if(Ks(t)){for(M in n)n.hasOwnProperty(M)&&(i=n[M],i!==void 0&&Nl(e,t,M,i,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(i=n[y],i!=null&&Le(e,t,y,i,n,null))}function Ng(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,f=null,y=null,k=null,z=null,M=null;for(B in n){var O=n[B];if(n.hasOwnProperty(B)&&O!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":k=O;default:i.hasOwnProperty(B)||Le(e,t,B,null,i,O)}}for(var D in i){var B=i[D];if(O=n[D],i.hasOwnProperty(D)&&(B!=null||O!=null))switch(D){case"type":c=B;break;case"name":o=B;break;case"checked":z=B;break;case"defaultChecked":M=B;break;case"value":f=B;break;case"defaultValue":y=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,t));break;default:B!==O&&Le(e,t,D,B,i,O)}}Xs(e,f,y,k,z,M,c,o);return;case"select":B=f=y=D=null;for(c in n)if(k=n[c],n.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":B=k;default:i.hasOwnProperty(c)||Le(e,t,c,null,i,k)}for(o in i)if(c=i[o],k=n[o],i.hasOwnProperty(o)&&(c!=null||k!=null))switch(o){case"value":D=c;break;case"defaultValue":y=c;break;case"multiple":f=c;default:c!==k&&Le(e,t,o,c,i,k)}t=y,n=f,i=B,D!=null?Bi(e,!!n,D,!1):!!i!=!!n&&(t!=null?Bi(e,!!n,t,!0):Bi(e,!!n,n?[]:"",!1));return;case"textarea":B=D=null;for(y in n)if(o=n[y],n.hasOwnProperty(y)&&o!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Le(e,t,y,null,i,o)}for(f in i)if(o=i[f],c=n[f],i.hasOwnProperty(f)&&(o!=null||c!=null))switch(f){case"value":D=o;break;case"defaultValue":B=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&Le(e,t,f,o,i,c)}Jc(e,D,B);return;case"option":for(var ae in n)if(D=n[ae],n.hasOwnProperty(ae)&&D!=null&&!i.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Le(e,t,ae,null,i,D)}for(k in i)if(D=i[k],B=n[k],i.hasOwnProperty(k)&&D!==B&&(D!=null||B!=null))switch(k){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Le(e,t,k,D,i,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in n)D=n[ue],n.hasOwnProperty(ue)&&D!=null&&!i.hasOwnProperty(ue)&&Le(e,t,ue,null,i,D);for(z in i)if(D=i[z],B=n[z],i.hasOwnProperty(z)&&D!==B&&(D!=null||B!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:Le(e,t,z,D,i,B)}return;default:if(Ks(t)){for(var Ye in n)D=n[Ye],n.hasOwnProperty(Ye)&&D!==void 0&&!i.hasOwnProperty(Ye)&&Nl(e,t,Ye,void 0,i,D);for(M in i)D=i[M],B=n[M],!i.hasOwnProperty(M)||D===B||D===void 0&&B===void 0||Nl(e,t,M,D,i,B);return}}for(var E in n)D=n[E],n.hasOwnProperty(E)&&D!=null&&!i.hasOwnProperty(E)&&Le(e,t,E,null,i,D);for(O in i)D=i[O],B=n[O],!i.hasOwnProperty(O)||D===B||D==null&&B==null||Le(e,t,O,D,i,B)}var Ll=null,Hl=null;function ys(e){return e.nodeType===9?e:e.ownerDocument}function Xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=null;function Lg(){var e=window.event;return e&&e.type==="popstate"?e===Ol?!1:(Ol=e,!0):(Ol=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(Og)}:Kd;function Og(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),lo(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);lo(t)}function Pl(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pl(n),Ys(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Rg(e,t,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ga])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function Pg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qt(e.nextSibling),e===null))return null;return e}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Zd(e,t,n){switch(t=ys(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}var Ut=new Map,Jd=new Set;function bs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var An=G.d;G.d={f:Ig,r:_g,D:Vg,C:jg,L:Ug,m:Gg,X:Xg,S:Yg,M:Fg};function Ig(){var e=An.f(),t=hs();return e||t}function _g(e){var t=Ei(e);t!==null&&t.tag===5&&t.type==="form"?Su(t):An.r(e)}var aa=typeof document>"u"?null:document;function $d(e,t,n){var i=aa;if(i&&typeof t=="string"&&t){var o=Lt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Jd.has(o)||(Jd.add(o),e={rel:e,crossOrigin:n,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),lt(t,"link",e),nt(t),i.head.appendChild(t)))}}function Vg(e){An.D(e),$d("dns-prefetch",e,null)}function jg(e,t){An.C(e,t),$d("preconnect",e,t)}function Ug(e,t,n){An.L(e,t,n);var i=aa;if(i&&e&&t){var o='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Lt(n.imageSizes)+'"]')):o+='[href="'+Lt(e)+'"]';var c=o;switch(t){case"style":c=oa(e);break;case"script":c=sa(e)}Ut.has(c)||(e=$({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ut.set(c,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(to(c))||t==="script"&&i.querySelector(no(c))||(t=i.createElement("link"),lt(t,"link",e),nt(t),i.head.appendChild(t)))}}function Gg(e,t){An.m(e,t);var n=aa;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Lt(i)+'"][href="'+Lt(e)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=sa(e)}if(!Ut.has(c)&&(e=$({rel:"modulepreload",href:e},t),Ut.set(c,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(no(c)))return}i=n.createElement("link"),lt(i,"link",e),nt(i),n.head.appendChild(i)}}}function Yg(e,t,n){An.S(e,t,n);var i=aa;if(i&&e){var o=Ci(i).hoistableStyles,c=oa(e);t=t||"default";var f=o.get(c);if(!f){var y={loading:0,preload:null};if(f=i.querySelector(to(c)))y.loading=5;else{e=$({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ut.get(c))&&Il(e,n);var k=f=i.createElement("link");nt(k),lt(k,"link",e),k._p=new Promise(function(z,M){k.onload=z,k.onerror=M}),k.addEventListener("load",function(){y.loading|=1}),k.addEventListener("error",function(){y.loading|=2}),y.loading|=4,vs(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:y},o.set(c,f)}}}function Xg(e,t){An.X(e,t);var n=aa;if(n&&e){var i=Ci(n).hoistableScripts,o=sa(e),c=i.get(o);c||(c=n.querySelector(no(o)),c||(e=$({src:e,async:!0},t),(t=Ut.get(o))&&_l(e,t),c=n.createElement("script"),nt(c),lt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function Fg(e,t){An.M(e,t);var n=aa;if(n&&e){var i=Ci(n).hoistableScripts,o=sa(e),c=i.get(o);c||(c=n.querySelector(no(o)),c||(e=$({src:e,async:!0,type:"module"},t),(t=Ut.get(o))&&_l(e,t),c=n.createElement("script"),nt(c),lt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function ef(e,t,n,i){var o=(o=Wt.current)?bs(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=oa(n.href),n=Ci(o).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=oa(n.href);var c=Ci(o).hoistableStyles,f=c.get(e);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=o.querySelector(to(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Ut.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ut.set(e,n),c||Kg(o,e,n,f.state))),t&&i===null)throw Error(l(528,""));return f}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=sa(n),n=Ci(o).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function oa(e){return'href="'+Lt(e)+'"'}function to(e){return'link[rel="stylesheet"]['+e+"]"}function tf(e){return $({},e,{"data-precedence":e.precedence,precedence:null})}function Kg(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),lt(t,"link",n),nt(t),e.head.appendChild(t))}function sa(e){return'[src="'+Lt(e)+'"]'}function no(e){return"script[async]"+e}function nf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(i)return t.instance=i,nt(i),i;var o=$({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nt(i),lt(i,"style",o),vs(i,n.precedence,e),t.instance=i;case"stylesheet":o=oa(n.href);var c=e.querySelector(to(o));if(c)return t.state.loading|=4,t.instance=c,nt(c),c;i=tf(n),(o=Ut.get(o))&&Il(i,o),c=(e.ownerDocument||e).createElement("link"),nt(c);var f=c;return f._p=new Promise(function(y,k){f.onload=y,f.onerror=k}),lt(c,"link",i),t.state.loading|=4,vs(c,n.precedence,e),t.instance=c;case"script":return c=sa(n.src),(o=e.querySelector(no(c)))?(t.instance=o,nt(o),o):(i=n,(o=Ut.get(c))&&(i=$({},n),_l(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),nt(o),lt(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,vs(i,n.precedence,e));return t.instance}function vs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,f=0;f<i.length;f++){var y=i[f];if(y.dataset.precedence===t)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Il(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _l(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ws=null;function af(e,t,n){if(ws===null){var i=new Map,o=ws=new Map;o.set(n,i)}else o=ws,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[ga]||c[ct]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var y=i.get(f);y?y.push(c):i.set(f,[c])}}return i}function of(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Qg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var io=null;function Wg(){}function Zg(e,t,n){if(io===null)throw Error(l(475));var i=io;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=oa(n.href),c=e.querySelector(to(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ts.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=c,nt(c);return}c=e.ownerDocument||e,n=tf(n),(o=Ut.get(o))&&Il(n,o),c=c.createElement("link"),nt(c);var f=c;f._p=new Promise(function(y,k){f.onload=y,f.onerror=k}),lt(c,"link",n),t.instance=c}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ts.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Jg(){if(io===null)throw Error(l(475));var e=io;return e.stylesheets&&e.count===0&&Vl(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ts(){if(this.count--,this.count===0){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xs=null;function Vl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xs=new Map,t.forEach($g,e),xs=null,Ts.call(e))}function $g(e,t){if(!(t.state.loading&4)){var n=xs.get(e);if(n)var i=n.get(null);else{n=new Map,xs.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var f=o[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}o=t.instance,f=o.getAttribute("data-precedence"),c=n.get(f)||i,c===i&&n.set(null,o),n.set(f,o),this.count++,i=Ts.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var ao={$$typeof:T,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function ey(e,t,n,i,o,c,f,y){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.hiddenUpdates=Us(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function rf(e,t,n,i,o,c,f,y,k,z,M,O){return e=new ey(e,t,n,f,y,k,z,O),t=1,c===!0&&(t|=24),c=Vt(3,null,null,t),e.current=c,c.stateNode=e,t=vr(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},$r(c),e}function lf(e){return e?(e=Pi,e):Pi}function cf(e,t,n,i,o,c){o=lf(o),i.context===null?i.context=o:i.pendingContext=o,i=Hn(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=qn(e,i,t),n!==null&&(gt(n,e,t),Va(n,e,t))}function hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jl(e,t){hf(e,t),(e=e.alternate)&&hf(e,t)}function uf(e){if(e.tag===13){var t=En(e,67108864);t!==null&&gt(t,e,67108864),jl(e,67108864)}}var ks=!0;function ty(e,t,n,i){var o=U.T;U.T=null;var c=G.p;try{G.p=2,Ul(e,t,n,i)}finally{G.p=c,U.T=o}}function ny(e,t,n,i){var o=U.T;U.T=null;var c=G.p;try{G.p=8,Ul(e,t,n,i)}finally{G.p=c,U.T=o}}function Ul(e,t,n,i){if(ks){var o=Gl(i);if(o===null)Ml(e,t,i,As,n),ff(e,i);else if(ay(o,e,t,n,i))i.stopPropagation();else if(ff(e,i),t&4&&-1<iy.indexOf(e)){for(;o!==null;){var c=Ei(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=Jn(c.pendingLanes);if(f!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;f;){var k=1<<31-Ke(f);y.entanglements[1]|=k,f&=~k}tn(c),(Ve&6)===0&&(rs=Mt()+500,Ja(0))}}break;case 13:y=En(c,2),y!==null&&gt(y,c,2),hs(),jl(c,2)}if(c=Gl(i),c===null&&Ml(e,t,i,As,n),c===o)break;o=c}o!==null&&i.stopPropagation()}else Ml(e,t,i,null,n)}}function Gl(e){return e=Ws(e),Yl(e)}var As=null;function Yl(e){if(As=null,e=$n(e),e!==null){var t=ne(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ke(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return As=e,null}function df(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(js()){case N:return 2;case j:return 8;case ce:case we:return 32;case Me:return 268435456;default:return 32}default:return 32}}var Xl=!1,jn=null,Un=null,Gn=null,oo=new Map,so=new Map,Yn=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ff(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function ro(e,t,n,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Ei(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ay(e,t,n,i,o){switch(t){case"focusin":return jn=ro(jn,e,t,n,i,o),!0;case"dragenter":return Un=ro(Un,e,t,n,i,o),!0;case"mouseover":return Gn=ro(Gn,e,t,n,i,o),!0;case"pointerover":var c=o.pointerId;return oo.set(c,ro(oo.get(c)||null,e,t,n,i,o)),!0;case"gotpointercapture":return c=o.pointerId,so.set(c,ro(so.get(c)||null,e,t,n,i,o)),!0}return!1}function pf(e){var t=$n(e.target);if(t!==null){var n=ne(t);if(n!==null){if(t=n.tag,t===13){if(t=ke(n),t!==null){e.blockedOn=t,Jp(e.priority,function(){if(n.tag===13){var i=Ct(),o=En(n,i);o!==null&&gt(o,n,i),jl(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gl(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qs=i,n.target.dispatchEvent(i),Qs=null}else return t=Ei(n),t!==null&&uf(t),e.blockedOn=n,!1;t.shift()}return!0}function mf(e,t,n){Ss(e)&&n.delete(t)}function oy(){Xl=!1,jn!==null&&Ss(jn)&&(jn=null),Un!==null&&Ss(Un)&&(Un=null),Gn!==null&&Ss(Gn)&&(Gn=null),oo.forEach(mf),so.forEach(mf)}function zs(e,t){e.blockedOn===t&&(e.blockedOn=null,Xl||(Xl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,oy)))}var Es=null;function gf(e){Es!==e&&(Es=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Es===e&&(Es=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if(Yl(i||n)===null)continue;break}var c=Ei(n);c!==null&&(e.splice(t,3),t-=3,qr(c,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function lo(e){function t(k){return zs(k,e)}jn!==null&&zs(jn,e),Un!==null&&zs(Un,e),Gn!==null&&zs(Gn,e),oo.forEach(t),so.forEach(t);for(var n=0;n<Yn.length;n++){var i=Yn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)pf(n),n.blockedOn===null&&Yn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],f=o[yt]||null;if(typeof c=="function")f||gf(n);else if(f){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,f=c[yt]||null)y=f.formAction;else if(Yl(o)!==null)continue}else y=f.action;typeof y=="function"?n[i+1]=y:(n.splice(i,3),i-=3),gf(n)}}}function Fl(e){this._internalRoot=e}Cs.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=Ct();cf(n,i,e,t,null,null)},Cs.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ta(),cf(e.current,2,null,e,null,null),hs(),t[zi]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&pf(e)}};var yf=s.version;if(yf!=="19.0.0")throw Error(l(527,yf,"19.0.0"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=q(t),e=e!==null?ie(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:U,findFiberByHostInstance:$n,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{pt=Ds.inject(sy),$e=Ds}catch{}}return ho.createRoot=function(e,t){if(!h(e))throw Error(l(299));var n=!1,i="",o=Lu,c=Hu,f=qu,y=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=rf(e,1,!1,null,null,n,i,o,c,f,y,null),e[zi]=t.current,Bl(e.nodeType===8?e.parentNode:e),new Fl(t)},ho.hydrateRoot=function(e,t,n){if(!h(e))throw Error(l(299));var i=!1,o="",c=Lu,f=Hu,y=qu,k=null,z=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(k=n.unstable_transitionCallbacks),n.formState!==void 0&&(z=n.formState)),t=rf(e,1,!0,t,n??null,i,o,c,f,y,k,z),t.context=lf(null),n=t.current,i=Ct(),o=Hn(i),o.callback=null,qn(n,o,i),t.current.lanes=i,ma(t,i),tn(t),e[zi]=t.current,Bl(e),new Cs(t)},ho.version="19.0.0",ho}var Ef;function gy(){if(Ef)return Wl.exports;Ef=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Wl.exports=my(),Wl.exports}var yy=gy();const ec=[{question:`A 53-year-old woman with hypertension and hyperlipidemia comes to the physician because of generalized reddening of her skin and itching for the past 2 weeks. Her symptoms occur every evening before bedtime and last for about 30 minutes. Three months ago, atorvastatin was stopped after she experienced progressively worsening neck and back pain. Statin therapy was reinitiated at lower doses 3 weeks ago but had to be stopped again after her musculoskeletal symptoms recurred. Her menses occur irregularly at 2–3 month intervals and last for 3–4 days. She has smoked one pack of cigarettes daily for the past 30 years. Her current medications include lisinopril and niacin. Her brother died of colonic adenocarcinoma, and her father died of small cell lung cancer. She is 169 cm (5 ft 6 in) tall and weighs 83 kg (183 lb); BMI is 29 kg/m2. Her vital signs are within normal limits. Physical examination shows no abnormalities. Serum lipid studies show:
Total cholesterol 247 mg/dL
HDL-cholesterol 39 mg/dL
LDL-cholesterol 172 mg/dL
Triglycerides 152 mg/dL
Which of the following is the most appropriate next step in management?"`,options:{A:"Administer ibuprofen",B:"Measure urine hydroxyindoleacetic acid levels",C:"Measure urine metanephrine levels",D:"Switch lisinopril to hydrochlorothiazide",E:"Switch niacin to fenofibrate"},response:`The patient presents with generalized reddening of the skin and itching, which have been occurring for the past two weeks, particularly in the evenings. Given her history of hypertension and hyperlipidemia, she has been taking niacin, which is known to cause flushing and pruritus as common side effects. 

While considering the symptoms in the context of her medication history is critical, the possibility of a pheochromocytoma was initially raised due to her symptoms and family history of cancer. However, in this case, the timing of symptoms and the known side effects of niacin should take precedence in the differential diagnosis.

Let's evaluate the options again in light of this understanding:

A. **Administer ibuprofen**: This option is not relevant as there is no indication of an inflammatory process that would require NSAID treatment.

B. **Measure urine hydroxyindoleacetic acid levels**: This test is primarily for carcinoid syndrome and neuroendocrine tumors, which are not suggested by the patient’s current symptoms.

C. **Measure urine metanephrine levels**: While this test is appropriate for diagnosing pheochromocytoma, it may be premature given the strong possibility that her itching and reddening of the skin are side effects of niacin.

D. **Switch lisinopril to hydrochlorothiazide**: This option addresses hypertension management but does not directly address the patient's symptoms of skin irritation.

E. **Switch niacin to fenofibrate**: Given that niacin is likely causing the flushing and itching, switching to fenofibrate could be the most appropriate next step. This would help manage her dyslipidemia while alleviating her current symptoms.

Considering the above points, switching from niacin to fenofibrate to address both her dyslipidemia and the potential medication-related symptoms is the most prudent course of action.

### Answer
\`\`\`E\`\`\``,prediction:"E",label:"A"},{question:"A 38-year-old man presents to his physician with double vision persisting for a week. When he enters the exam room, the physician notes that the patient has a broad-based gait. The man’s wife informs the doctor that he has been an alcoholic for the last 5 years and his consumption of alcohol has increased significantly over the past few months. She also reports that he has become indifferent to his family members over time and is frequently agitated. She also says that his memory has been affected significantly, and when asked about a particular detail, he often recollects it incorrectly, though he insists that his version is the true one. On physical examination, his vital signs are stable, but when the doctor asks him where he is, he seems to be confused. His neurological examination also shows nystagmus. Which of the following options describes the earliest change in the pathophysiology of the central nervous system in this man?",options:{A:"Decreased α-ketoglutarate dehydrogenase activity in astrocytes",B:"Increased extracellular concentration of glutamate",C:"Increased astrocyte lactate",D:"Breakdown of the blood-brain barrier",E:"Increased fragmentation of deoxyribonucleic acid within the neurons"},response:`The correct answer is **B. Increased extracellular concentration of glutamate**. Here’s the reasoning:

This patient displays signs consistent with **Wernicke's encephalopathy**, which can occur due to thiamine deficiency (often associated with chronic alcoholism). In this condition, one of the early pathological changes in the central nervous system is the increase in **extracellular glutamate** as a result of impaired glutamate uptake by astrocytes. This can lead to excitotoxicity and neuronal damage.

Let's examine why the other options are incorrect:

* **A. Decreased α-ketoglutarate dehydrogenase activity in astrocytes**: While this may be relevant in the context of metabolic dysfunction, it is not the earliest change observed in Wernicke's encephalopathy.
* **C. Increased astrocyte lactate**: This might occur in various metabolic derangements, but it is not as directly linked to the early pathophysiological changes with respect to excitotoxicity.
* **D. Breakdown of the blood-brain barrier**: This is a later consequence of severe CNS injury or inflammation, not an early change.
* **E. Increased fragmentation of deoxyribonucleic acid within the neurons**: This is more indicative of neurodegeneration and is a later change rather than an early pathophysiological alteration.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A previously healthy 36-year-old man comes to the physician for a yellow discoloration of his skin and dark-colored urine for 2 weeks. He does not drink any alcohol. Physical examination shows jaundice. Abdominal and neurologic examinations show no abnormalities. Serum studies show increased levels of alanine aminotransferase (ALT) and aspartate aminotransferase (AST). A liver biopsy is performed and a photomicrograph after periodic acid-Schiff-staining is shown. Which of the following is the most likely additional finding in this patient?",options:{A:"Tropheryma whipplei-specific RNA on PCR",B:"Bullous changes of the lung bases on chest CT",C:"Beading of intra- and extrahepatic bile ducts on ERCP",D:"Myocardial iron deposition on cardiovascular MRI",E:"Dark corneal ring on slit-lamp examination"},response:`The patient presents with jaundice and elevated liver enzymes, which indicates a hepatobiliary issue. Although I initially concluded that this presentation strongly suggests primary sclerosing cholangitis (PSC) due to the symptoms and potential for beading on ERCP, it's important to reconsider the differential diagnosis more comprehensively.

Given the age of the patient and the symptomatology, Wilson's disease is a strong candidate to consider. Wilson's disease can present with liver dysfunction, jaundice, and elevated liver enzymes, and it commonly affects younger individuals. The periodic acid-Schiff (PAS) staining in liver biopsies can show characteristic findings consistent with Wilson's disease, such as copper accumulation, although it may not be definitive without additional testing.

Now, let's revisit the options with this in mind:

A. **Tropheryma whipplei-specific RNA on PCR**: This is related to Whipple's disease, which is not associated with isolated jaundice and is less likely given the presentation.

B. **Bullous changes of the lung bases on chest CT**: This finding is unrelated to liver pathology and thus not applicable.

C. **Beading of intra- and extrahepatic bile ducts on ERCP**: While this finding is characteristic of PSC, the absence of gastrointestinal symptoms or a history suggesting underlying inflammatory bowel disease (IBD) makes this diagnosis less likely in this case.

D. **Myocardial iron deposition on cardiovascular MRI**: This would be indicative of hemochromatosis, which presents differently; this patient does not show signs suggestive of iron overload.

E. **Dark corneal ring on slit-lamp examination**: This is a classic finding in Wilson's disease, which aligns well with the patient's age and symptoms of liver dysfunction.

Considering this reassessment, the most appropriate additional finding in this patient would be consistent with Wilson's disease, particularly the dark corneal ring on slit-lamp examination.

Therefore, the correct answer is:

### Answer
\`\`\`E\`\`\``,prediction:"E",label:"B"},{question:"A 68-year-old man comes to the physician because of recurrent episodes of nausea and abdominal discomfort for the past 4 months. The discomfort is located in the upper abdomen and sometimes occurs after eating, especially after a big meal. He has tried to go for a walk after dinner to help with digestion, but his complaints have only increased. For the past 3 weeks he has also had symptoms while climbing the stairs to his apartment. He has type 2 diabetes mellitus, hypertension, and stage 2 peripheral arterial disease. He has smoked one pack of cigarettes daily for the past 45 years. He drinks one to two beers daily and occasionally more on weekends. His current medications include metformin, enalapril, and aspirin. He is 168 cm (5 ft 6 in) tall and weighs 126 kg (278 lb); BMI is 45 kg/m2. His temperature is 36.4°C (97.5°F), pulse is 78/min, and blood pressure is 148/86 mm Hg. On physical examination, the abdomen is soft and nontender with no organomegaly. Foot pulses are absent bilaterally. An ECG shows no abnormalities. Which of the following is the most appropriate next step in diagnosis?",options:{A:"Esophagogastroduodenoscopy",B:"CT scan of the abdomen",C:"Hydrogen breath test",D:"Cardiac stress test",E:"Abdominal ultrasonography of the right upper quadrant"},response:`Your analysis of the patient's symptoms and risk factors is well-reasoned. However, there are several important considerations that may influence the choice of the most appropriate next step in diagnosis.

The patient presents with recurrent episodes of upper abdominal discomfort and nausea, particularly after eating and with exertion, which raises the possibility of both gastrointestinal and cardiac etiologies. Given the patient's significant risk factors, including type 2 diabetes, hypertension, peripheral arterial disease, a long smoking history, and obesity, it is essential to consider both aspects carefully.

1. **Cardiac Symptoms**: You correctly identify that the exertional nature of the patient's symptoms could suggest angina or myocardial ischemia. The presence of abdominal pain that occurs during exertion, combined with the patient's cardiovascular risk profile, does warrant consideration of a cardiac etiology.

2. **Gastrointestinal Symptoms**: However, the patient's symptoms are predominantly gastrointestinal in nature (nausea, abdominal discomfort), which are frequently encountered in conditions such as gallbladder disease, peptic ulcer disease, or even gastric outlet obstruction, especially in individuals with obesity. Given that these conditions can present with similar symptoms, it is prudent to first rule out significant gastrointestinal pathology.

3. **Diagnostic Approach**: An abdominal ultrasound (Option E) is a non-invasive and effective initial diagnostic tool for evaluating the gallbladder and liver. It can identify gallstones, cholecystitis, or other abdominal issues that may explain the patient's symptoms. Given the nature of the symptoms and the clinical context, this would be a logical first step.

4. **Stress Testing**: While a cardiac stress test is indeed valuable for evaluating ischemic heart disease, it may not be the most appropriate initial step given the prominent gastrointestinal symptoms. A stress test could be reserved for after gastrointestinal issues have been ruled out or if cardiac causes remain a strong concern after further evaluation.

In conclusion, while your choice of a cardiac stress test is understandable given the patient's risk factors, the nature of the symptoms suggests that an abdominal ultrasound would be a more appropriate next step to assess for potential gastrointestinal causes. This approach allows for a thorough evaluation of both cardiac and gastrointestinal issues while prioritizing the most likely causes of the patient's symptoms.

### Revised Answer
\`\`\`E\`\`\``,prediction:"E",label:"D"},{question:"A 69-year-old male presents to the emergency room with back pain. He has a history of personality disorder and metastatic prostate cancer and was not a candidate for surgical resection. He began chemotherapy but discontinued due to unremitting nausea. He denies any bowel or bladder incontinence. He has never had pain like this before and is demanding morphine. The nurse administers IV morphine and he feels more comfortable. Vital signs are stable. On physical examination you note tenderness to palpation along the lower spine, weakness in the bilateral lower extremities, left greater than right. Neurological examination is also notable for hyporeflexia in the knee and ankle jerks bilaterally. You conduct a rectal examination, which reveals saddle anesthesia. Regarding this patient, what is the most likely diagnosis and the appropriate next step in management?",options:{A:"The most likely diagnosis is cauda equina syndrome and steroids should be started prior to MRI",B:"The most likely diagnosis is cauda equina syndrome and steroids should be started after to MRI",C:"The most likely diagnosis is cauda equina syndrome and the patient should be rushed to radiation",D:"The most likely diagnosis is conus medullaris syndrome and steroids should be started prior to MRI",E:"The most likely diagnosis is conus medullaris syndrome and steroids should be started after to MRI"},response:`Your initial analysis correctly identifies the likely diagnosis of cauda equina syndrome based on the patient's symptoms, which include severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, there are several important considerations that could enhance your response:

1. **Diagnosis Distinction**:
   - While your diagnosis of cauda equina syndrome is appropriate given the clinical findings, it is essential to acknowledge that conus medullaris syndrome could also present with similar symptoms. The difference often lies in the pattern of neurological deficits. Conus medullaris syndrome typically presents with lower extremity weakness, saddle anesthesia, and may also have bladder dysfunction, which could overlap with the cauda equina syndrome findings.

2. **Management Priorities**:
   - In acute neurological conditions like cauda equina syndrome, immediate surgical intervention is often necessary to decompress the affected nerve roots. While corticosteroids can reduce inflammation, they should not replace the urgency of surgical evaluation and management. The role of steroids in this scenario remains under debate, as the timing of intervention can significantly affect outcomes.

3. **Timing of MRI and Steroids**:
   - The rationale for performing an MRI before administering steroids is crucial. MRI helps confirm the diagnosis and assess the degree of compression. Administering steroids prior to imaging might mask symptoms or alter the findings, complicating the diagnostic process and management strategy. Therefore, it is typically recommended to perform the MRI first.

4. **Other Considerations**:
   - In cases of metastatic cancer presenting with neurological deficits, comprehensive management should include pain control, potential radiation therapy, and surgical consultation. While option C could suggest an appropriate management avenue, it is critical to prioritize imaging studies to guide further intervention.

Considering these points, a more nuanced approach would advocate for the identification of cauda equina syndrome, but with the understanding that the most appropriate next step involves imaging (MRI) prior to any steroid administration. Hence, the recommendation would lean towards option B, which recognizes the condition and emphasizes the importance of imaging before steroid treatment.

In summary, while your reasoning for option A is understandable, it is important to prioritize imaging studies to confirm the diagnosis and plan subsequent interventions effectively.

### Revised Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 1-year-old boy presents to the emergency department with weakness and a change in his behavior. His parents state that they first noticed the change in his behavior this morning and it has been getting worse. They noticed the patient was initially weak in his upper body and arms, but now he won’t move his legs with as much strength or vigor as he used to. Physical exam is notable for bilateral ptosis with a sluggish pupillary response, a very weak sucking and gag reflex, and shallow respirations. The patient is currently drooling and his diaper is dry. The parents state he has not had a bowel movement in over 1 day. Which of the following is the pathophysiology of this patient’s condition?",options:{A:"Antibodies against postsynaptic nicotinic cholinergic ion channels",B:"Autoantibodies against the presynaptic voltage-gated calcium channels",C:"Autoimmune demyelination of peripheral nerves",D:"Blockade of presynaptic acetylcholine release at the neuromuscular junction",E:"Lower motor neuron destruction in the anterior horn"},response:`The correct answer is **B. Autoantibodies against the presynaptic voltage-gated calcium channels**. Here's why:

The clinical presentation of this 1-year-old boy is suggestive of **myasthenia gravis (MG)** or a similar condition affecting the neuromuscular junction, specifically **Lambert-Eaton Myasthenic Syndrome (LEMS)**. 

- In LEMS, there are **autoantibodies against presynaptic voltage-gated calcium channels**, which impair the release of acetylcholine from the presynaptic terminal. This leads to muscle weakness, particularly with repetitive use, and can also present with autonomic symptoms such as dry mouth and constipation due to impaired neurotransmission affecting the autonomic nervous system.

- The symptoms of weakness, ptosis, respiratory difficulty, and diminished reflexes align with this diagnosis, and the age of the patient makes LEMS a more likely consideration as it can occur in children, particularly in association with underlying malignancies.

Let's examine why the other options are incorrect:

* **A. Antibodies against postsynaptic nicotinic cholinergic ion channels**: This describes myasthenia gravis (MG), which primarily presents with fluctuating muscle weakness that worsens with activity and improves with rest. The acute presentation and the age of this patient suggest LEMS rather than MG.
  
* **C. Autoimmune demyelination of peripheral nerves**: This would be more characteristic of conditions like Guillain-Barré syndrome, which typically presents with rapid-onset muscle weakness and does not specifically explain the findings of reduced strength in the upper body or the autonomic symptoms.
  
* **D. Blockade of presynaptic acetylcholine release at the neuromuscular junction**: This is not an accurate description of the mechanism in LEMS, as it is specifically due to the autoantibodies against the calcium channels rather than a direct blockade of acetylcholine release.
  
* **E. Lower motor neuron destruction in the anterior horn**: This describes conditions like spinal muscular atrophy (SMA) or poliomyelitis, which would present with lower motor neuron signs and muscle atrophy, rather than the specific symptoms observed in this case.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"D"},{question:"A 1-year-old boy presents to the emergency department with weakness and a change in his behavior. His parents state that they first noticed the change in his behavior this morning and it has been getting worse. They noticed the patient was initially weak in his upper body and arms, but now he won’t move his legs with as much strength or vigor as he used to. Physical exam is notable for bilateral ptosis with a sluggish pupillary response, a very weak sucking and gag reflex, and shallow respirations. The patient is currently drooling and his diaper is dry. The parents state he has not had a bowel movement in over 1 day. Which of the following is the pathophysiology of this patient’s condition?",options:{A:"Antibodies against postsynaptic nicotinic cholinergic ion channels",B:"Autoantibodies against the presynaptic voltage-gated calcium channels",C:"Autoimmune demyelination of peripheral nerves",D:"Blockade of presynaptic acetylcholine release at the neuromuscular junction",E:"Lower motor neuron destruction in the anterior horn"},response:`The clinical presentation of this 1-year-old boy suggests a condition affecting the neuromuscular junction, characterized by weakness, ptosis, respiratory distress, and signs of autonomic dysfunction like drooling and constipation. 

Given the symptoms, the most likely diagnosis is **myasthenia gravis (MG)**, which is characterized by the presence of antibodies against postsynaptic nicotinic acetylcholine receptors at the neuromuscular junction. This leads to impaired transmission of nerve impulses to muscles, resulting in muscle weakness that typically worsens with activity and improves with rest.

Let's review the options based on this analysis:

A. **Antibodies against postsynaptic nicotinic cholinergic ion channels**: This accurately describes the pathophysiology of myasthenia gravis, where the immune system produces antibodies that block or destroy the acetylcholine receptors, leading to muscle weakness and other associated symptoms.

B. **Autoantibodies against the presynaptic voltage-gated calcium channels**: This is characteristic of Lambert-Eaton Myasthenic Syndrome (LEMS), which typically presents in adults and is associated with malignancies. The acute and severe presentation in a young child aligns more with MG.

C. **Autoimmune demyelination of peripheral nerves**: This would be more indicative of conditions like Guillain-Barré syndrome, which does not fit the described symptoms.

D. **Blockade of presynaptic acetylcholine release at the neuromuscular junction**: While this describes a mechanism that can occur in some conditions, it does not accurately reflect the underlying issue in either MG or LEMS.

E. **Lower motor neuron destruction in the anterior horn**: This pertains to conditions like spinal muscular atrophy (SMA) or poliomyelitis, which would present differently than what is observed here.

Considering the symptoms presented and the typical pathophysiology of the conditions discussed, the most accurate option that reflects the patient's condition is **A. Antibodies against postsynaptic nicotinic cholinergic ion channels** associated with myasthenia gravis.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"D"},{question:"A researcher is studying the properties of an enzyme that adds phosphate groups to glucose. She discovers that the enzyme is present in most body tissues and is located in the cytoplasm of the cells expressing the enzyme. She decides to mix this enzyme under subphysiologic conditions with varying levels of glucose in order to determine the kinetic properties of the enzyme. Specifically, she adds increasing levels of glucose at a saturating concentration of phosphate and sees that the rate at which glucose becomes phosphorylated gets faster at higher levels of glucose. She observes that this rate approaches a maximum speed and calls this speed Y. She then determines the concentration of glucose that is needed to make the enzyme function at half the speed Y and calls this concentration X. Which of the following is most likely true about the properties of this enzyme?",options:{A:"High X and high Y",B:"High X and low Y",C:"Low X and high Y",D:"Low X and infinite Y",E:"Low X and low Y"},response:`The correct answer is **C. Low X and high Y**. Here's why:

**Kinetics of Enzymes:**
1. **Y (Vmax)**: This represents the maximum rate of the reaction when the enzyme is saturated with substrate (in this case, glucose). A **high Y** indicates that the enzyme can catalyze reactions efficiently at high substrate concentrations.

2. **X (Km)**: This is the Michaelis constant, which reflects the substrate concentration at which the reaction rate is half of Vmax. A **low X** indicates that the enzyme has a high affinity for the substrate (glucose in this case), meaning it can effectively bind and phosphorylate glucose even at low concentrations.

**Interpretation of Options:**
- Given that the researcher observed that the phosphorylation rate approaches a maximum speed (Y) and determined the concentration of glucose needed to achieve half that speed (X), a situation where the enzyme has a high Vmax (Y) and a low Km (X) implies:
  - The enzyme operates efficiently at higher substrate concentrations (high Y).
  - The enzyme can effectively work at low substrate concentrations (low X).

Thus, the most appropriate conclusion regarding the enzyme's properties is that it has a low Km (X) and a high Vmax (Y), leading us to option **C**.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"A 69-year-old male presents to the emergency room with back pain. He has a history of personality disorder and metastatic prostate cancer and was not a candidate for surgical resection. He began chemotherapy but discontinued due to unremitting nausea. He denies any bowel or bladder incontinence. He has never had pain like this before and is demanding morphine. The nurse administers IV morphine and he feels more comfortable. Vital signs are stable. On physical examination you note tenderness to palpation along the lower spine, weakness in the bilateral lower extremities, left greater than right. Neurological examination is also notable for hyporeflexia in the knee and ankle jerks bilaterally. You conduct a rectal examination, which reveals saddle anesthesia. Regarding this patient, what is the most likely diagnosis and the appropriate next step in management?",options:{A:"The most likely diagnosis is cauda equina syndrome and steroids should be started prior to MRI",B:"The most likely diagnosis is cauda equina syndrome and steroids should be started after to MRI",C:"The most likely diagnosis is cauda equina syndrome and the patient should be rushed to radiation",D:"The most likely diagnosis is conus medullaris syndrome and steroids should be started prior to MRI",E:"The most likely diagnosis is conus medullaris syndrome and steroids should be started after to MRI"},response:`Your initial analysis correctly identifies the likely diagnosis of cauda equina syndrome based on the patient's symptoms, which include severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, there are several important considerations that could enhance your response:

1. **Diagnosis Distinction**:
   - While your diagnosis of cauda equina syndrome is appropriate given the clinical findings, it is essential to acknowledge that conus medullaris syndrome could also present with similar symptoms. The difference often lies in the pattern of neurological deficits. Conus medullaris syndrome typically presents with lower extremity weakness, saddle anesthesia, and may also have bladder dysfunction, which could overlap with the cauda equina syndrome findings.

2. **Management Priorities**:
   - In acute neurological conditions like cauda equina syndrome, immediate surgical intervention is often necessary to decompress the affected nerve roots. While corticosteroids can reduce inflammation, they should not replace the urgency of surgical evaluation and management. The role of steroids in this scenario remains under debate, as the timing of intervention can significantly affect outcomes.

3. **Timing of MRI and Steroids**:
   - The rationale for performing an MRI before administering steroids is crucial. MRI helps confirm the diagnosis and assess the degree of compression. Administering steroids prior to imaging might mask symptoms or alter the findings, complicating the diagnostic process and management strategy. Therefore, it is typically recommended to perform the MRI first.

4. **Other Considerations**:
   - In cases of metastatic cancer presenting with neurological deficits, comprehensive management should include pain control, potential radiation therapy, and surgical consultation. While option C could suggest an appropriate management avenue, it is critical to prioritize imaging studies to guide further intervention.

Considering these points, a more nuanced approach would advocate for the identification of cauda equina syndrome, but with the understanding that the most appropriate next step involves imaging (MRI) prior to any steroid administration. Hence, the recommendation would lean towards option B, which recognizes the condition and emphasizes the importance of imaging before steroid treatment.

In summary, while your reasoning for option A is understandable, it is important to prioritize imaging studies to confirm the diagnosis and plan subsequent interventions effectively.

### Revised Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 69-year-old male presents to the emergency room with back pain. He has a history of personality disorder and metastatic prostate cancer and was not a candidate for surgical resection. He began chemotherapy but discontinued due to unremitting nausea. He denies any bowel or bladder incontinence. He has never had pain like this before and is demanding morphine. The nurse administers IV morphine and he feels more comfortable. Vital signs are stable. On physical examination you note tenderness to palpation along the lower spine, weakness in the bilateral lower extremities, left greater than right. Neurological examination is also notable for hyporeflexia in the knee and ankle jerks bilaterally. You conduct a rectal examination, which reveals saddle anesthesia. Regarding this patient, what is the most likely diagnosis and the appropriate next step in management?",options:{A:"The most likely diagnosis is cauda equina syndrome and steroids should be started prior to MRI",B:"The most likely diagnosis is cauda equina syndrome and steroids should be started after to MRI",C:"The most likely diagnosis is cauda equina syndrome and the patient should be rushed to radiation",D:"The most likely diagnosis is conus medullaris syndrome and steroids should be started prior to MRI",E:"The most likely diagnosis is conus medullaris syndrome and steroids should be started after to MRI"},response:`Your initial analysis correctly identifies the likely diagnosis of cauda equina syndrome based on the patient's symptoms, which include severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, there are several important considerations that could enhance your response:

1. **Diagnosis Distinction**:
   - While your diagnosis of cauda equina syndrome is appropriate given the clinical findings, it is essential to acknowledge that conus medullaris syndrome could also present with similar symptoms. The difference often lies in the pattern of neurological deficits. Conus medullaris syndrome typically presents with lower extremity weakness, saddle anesthesia, and may also have bladder dysfunction, which could overlap with the cauda equina syndrome findings.

2. **Management Priorities**:
   - In acute neurological conditions like cauda equina syndrome, immediate surgical intervention is often necessary to decompress the affected nerve roots. While corticosteroids can reduce inflammation, they should not replace the urgency of surgical evaluation and management. The role of steroids in this scenario remains under debate, as the timing of intervention can significantly affect outcomes.

3. **Timing of MRI and Steroids**:
   - The rationale for performing an MRI before administering steroids is crucial. MRI helps confirm the diagnosis and assess the degree of compression. Administering steroids prior to imaging might mask symptoms or alter the findings, complicating the diagnostic process and management strategy. Therefore, it is typically recommended to perform the MRI first.

4. **Other Considerations**:
   - In cases of metastatic cancer presenting with neurological deficits, comprehensive management should include pain control, potential radiation therapy, and surgical consultation. While option C could suggest an appropriate management avenue, it is critical to prioritize imaging studies to guide further intervention.

Considering these points, a more nuanced approach would advocate for the identification of cauda equina syndrome, but with the understanding that the most appropriate next step involves imaging (MRI) prior to any steroid administration. Hence, the recommendation would lean towards option B, which recognizes the condition and emphasizes the importance of imaging before steroid treatment.

In summary, while your reasoning for option A is understandable, it is important to prioritize imaging studies to confirm the diagnosis and plan subsequent interventions effectively.

### Revised Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 57-year-old man comes to the physician for a follow-up evaluation of chronic, retrosternal chest pain. The pain is worse at night and after heavy meals. He has taken oral pantoprazole for several months without any relief of his symptoms. Esophagogastroduodenoscopy shows ulcerations in the distal esophagus and a proximally dislocated Z-line. A biopsy of the distal esophagus shows columnar epithelium with goblet cells. Which of the following microscopic findings underlie the same pathomechanism as the cellular changes seen in this patient?",options:{A:"Pseudostratified columnar epithelium in the bronchi",B:"Squamous epithelium in the bladder",C:"Paneth cells in the duodenum",D:"Branching muscularis mucosa in the jejunum",E:"Disorganized squamous epithelium in the endocervix"},response:`The correct answer is **A. Pseudostratified columnar epithelium in the bronchi**. Here's why:

The patient is experiencing symptoms consistent with **Barrett's esophagus**, a condition in which the normal squamous epithelium of the esophagus is replaced by columnar epithelium (intestinal metaplasia) due to chronic gastroesophageal reflux disease (GERD). The presence of goblet cells in the biopsy indicates intestinal-type epithelium.

The pathomechanism here involves metaplasia, which is a process where one differentiated cell type is replaced by another. In this case, the normal stratified squamous epithelium is replaced by columnar epithelium as a response to chronic irritation.

Let's analyze the other options:

* **B. Squamous epithelium in the bladder:** This is a normal finding and does not reflect a metaplastic change related to Barrett's esophagus.
* **C. Paneth cells in the duodenum:** These are specialized cells found in the intestinal epithelium, not related to the changes seen in Barrett's esophagus.
* **D. Branching muscularis mucosa in the jejunum:** This anatomical feature does not relate to the metaplastic process seen in Barrett's esophagus.
* **E. Disorganized squamous epithelium in the endocervix:** While this may indicate dysplasia or neoplasia, it does not represent the same type of metaplastic change as seen in Barrett's esophagus.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:"A researcher is studying the properties of an enzyme that adds phosphate groups to glucose. She discovers that the enzyme is present in most body tissues and is located in the cytoplasm of the cells expressing the enzyme. She decides to mix this enzyme under subphysiologic conditions with varying levels of glucose in order to determine the kinetic properties of the enzyme. Specifically, she adds increasing levels of glucose at a saturating concentration of phosphate and sees that the rate at which glucose becomes phosphorylated gets faster at higher levels of glucose. She observes that this rate approaches a maximum speed and calls this speed Y. She then determines the concentration of glucose that is needed to make the enzyme function at half the speed Y and calls this concentration X. Which of the following is most likely true about the properties of this enzyme?",options:{A:"High X and high Y",B:"High X and low Y",C:"Low X and high Y",D:"Low X and infinite Y",E:"Low X and low Y"},response:`The correct answer is **C. Low X and high Y**. Here's why:

**Kinetics of Enzymes:**
1. **Y (Vmax)**: This represents the maximum rate of the reaction when the enzyme is saturated with substrate (in this case, glucose). A **high Y** indicates that the enzyme can catalyze reactions efficiently at high substrate concentrations.

2. **X (Km)**: This is the Michaelis constant, which reflects the substrate concentration at which the reaction rate is half of Vmax. A **low X** indicates that the enzyme has a high affinity for the substrate (glucose in this case), meaning it can effectively bind and phosphorylate glucose even at low concentrations.

**Interpretation of Options:**
- Given that the researcher observed that the phosphorylation rate approaches a maximum speed (Y) and determined the concentration of glucose needed to achieve half that speed (X), a situation where the enzyme has a high Vmax (Y) and a low Km (X) implies:
  - The enzyme operates efficiently at higher substrate concentrations (high Y).
  - The enzyme can effectively work at low substrate concentrations (low X).

Thus, the most appropriate conclusion regarding the enzyme's properties is that it has a low Km (X) and a high Vmax (Y), leading us to option **C**.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"A 37-year-old woman presents to the emergency department complaining of generalized malaise, weakness, headache, nausea, vomiting, and diarrhea; she last felt well roughly two days ago. She is otherwise healthy, and takes no medications. Her vital signs are: T 38.0, HR 96 beats per minute, BP 110/73, and O2 sat 96% on room air. Examination reveals a somewhat ill-appearing woman; she is drowsy but arousable and has no focal neurological deficits. Initial laboratory studies are notable for hematocrit 26%, platelets of 80,000/mL, and serum creatinine of 1.5 mg/dL. Which of the following is the most appropriate treatment at this time?",options:{A:"High-dose glucocorticoids",B:"Cyclophosphamide and rituximab",C:"Vancomycin and cefepime",D:"Plasma exchange therapy",E:"Urgent laparoscopic splenectomy"},response:`The correct answer is **C. Vancomycin and cefepime**. Here's why:

The patient presents with symptoms suggestive of a severe infection, potentially sepsis, along with laboratory findings indicating anemia (low hematocrit), thrombocytopenia (low platelets), and slightly elevated serum creatinine. Given the acute onset of her symptoms and her vital signs, the patient is at risk for severe infection, which could lead to septic shock.

The combination of **vancomycin** (for coverage against resistant Gram-positive bacteria, including MRSA) and **cefepime** (a broad-spectrum cephalosporin providing coverage for Gram-negative organisms) is appropriate for empirical treatment in a patient with suspected sepsis.

Let's look at why the other options are incorrect:

* **A. High-dose glucocorticoids:** This treatment is used for autoimmune conditions like autoimmune hemolytic anemia or thrombocytopenia but is not the first-line treatment for suspected sepsis.
* **B. Cyclophosphamide and rituximab:** These are immunosuppressive therapies used in certain autoimmune diseases or malignancies and not in acute infectious scenarios.
* **D. Plasma exchange therapy:** This is typically reserved for certain severe autoimmune conditions but is not the initial treatment for a patient presenting with signs of sepsis.
* **E. Urgent laparoscopic splenectomy:** While splenectomy can be indicated in certain hematologic conditions, it is not the immediate priority in the setting of acute infection and sepsis.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"D"},{question:"A researcher is studying the properties of an enzyme that adds phosphate groups to glucose. She discovers that the enzyme is present in most body tissues and is located in the cytoplasm of the cells expressing the enzyme. She decides to mix this enzyme under subphysiologic conditions with varying levels of glucose in order to determine the kinetic properties of the enzyme. Specifically, she adds increasing levels of glucose at a saturating concentration of phosphate and sees that the rate at which glucose becomes phosphorylated gets faster at higher levels of glucose. She observes that this rate approaches a maximum speed and calls this speed Y. She then determines the concentration of glucose that is needed to make the enzyme function at half the speed Y and calls this concentration X. Which of the following is most likely true about the properties of this enzyme?",options:{A:"High X and high Y",B:"High X and low Y",C:"Low X and high Y",D:"Low X and infinite Y",E:"Low X and low Y"},response:`The correct answer is **C. Low X and high Y**. Here's why:

**Kinetics of Enzymes:**
1. **Y (Vmax)**: This represents the maximum rate of the reaction when the enzyme is saturated with substrate (in this case, glucose). A **high Y** indicates that the enzyme can catalyze reactions efficiently at high substrate concentrations.

2. **X (Km)**: This is the Michaelis constant, which reflects the substrate concentration at which the reaction rate is half of Vmax. A **low X** indicates that the enzyme has a high affinity for the substrate (glucose in this case), meaning it can effectively bind and phosphorylate glucose even at low concentrations.

**Interpretation of Options:**
- Given that the researcher observed that the phosphorylation rate approaches a maximum speed (Y) and determined the concentration of glucose needed to achieve half that speed (X), a situation where the enzyme has a high Vmax (Y) and a low Km (X) implies:
  - The enzyme operates efficiently at higher substrate concentrations (high Y).
  - The enzyme can effectively work at low substrate concentrations (low X).

Thus, the most appropriate conclusion regarding the enzyme's properties is that it has a low Km (X) and a high Vmax (Y), leading us to option **C**.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:`A 53-year-old woman with hypertension and hyperlipidemia comes to the physician because of generalized reddening of her skin and itching for the past 2 weeks. Her symptoms occur every evening before bedtime and last for about 30 minutes. Three months ago, atorvastatin was stopped after she experienced progressively worsening neck and back pain. Statin therapy was reinitiated at lower doses 3 weeks ago but had to be stopped again after her musculoskeletal symptoms recurred. Her menses occur irregularly at 2–3 month intervals and last for 3–4 days. She has smoked one pack of cigarettes daily for the past 30 years. Her current medications include lisinopril and niacin. Her brother died of colonic adenocarcinoma, and her father died of small cell lung cancer. She is 169 cm (5 ft 6 in) tall and weighs 83 kg (183 lb); BMI is 29 kg/m2. Her vital signs are within normal limits. Physical examination shows no abnormalities. Serum lipid studies show:
Total cholesterol 247 mg/dL
HDL-cholesterol 39 mg/dL
LDL-cholesterol 172 mg/dL
Triglycerides 152 mg/dL
Which of the following is the most appropriate next step in management?"`,options:{A:"Administer ibuprofen",B:"Measure urine hydroxyindoleacetic acid levels",C:"Measure urine metanephrine levels",D:"Switch lisinopril to hydrochlorothiazide",E:"Switch niacin to fenofibrate"},response:`The correct answer is **C. Measure urine metanephrine levels**. Here's why:

The patient presents with generalized reddening of the skin and itching, which may suggest a possible paraneoplastic syndrome associated with a pheochromocytoma, especially considering her family history of cancers and her risk factors. Pheochromocytomas can cause episodic symptoms like flushing, sweating, and palpitations due to catecholamine release.

Measuring **urine metanephrine levels** is the appropriate next step to evaluate for a pheochromocytoma, as elevated levels would indicate excessive catecholamine production.

Let's evaluate why the other options are less appropriate:

* **A. Administer ibuprofen**: This is not indicated as there is no identified inflammatory process or pain requiring treatment with NSAIDs.
* **B. Measure urine hydroxyindoleacetic acid levels**: This is used to screen for carcinoid syndrome or neuroendocrine tumors, but the symptoms presented are more suggestive of pheochromocytoma.
* **D. Switch lisinopril to hydrochlorothiazide**: While this may be considered for hypertension, it does not address her symptoms or the need for further evaluation of her condition.
* **E. Switch niacin to fenofibrate**: While this could be a consideration for managing dyslipidemia, it does not address the acute symptoms or potential underlying condition.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"A"},{question:`A previously healthy 10-year-old boy is brought to the emergency room by his mother 5 hours after the onset of abdominal pain and nausea. Over the past 2 weeks, he has also had progressive abdominal pain and a 4-kg (8.8-lb) weight loss. The mother reports that her son has been drinking more water than usual during this period. Last week he wet his bed three times despite being completely toilet-trained since 3 years of age. His temperature is 37.8°C (100°F), pulse is 128/min, respirations are 35/min, and blood pressure is 95/55 mm Hg. He appears lethargic. Physical examination shows deep and labored breathing and dry mucous membranes. The abdomen is soft, and there is diffuse tenderness to palpation with no guarding or rebound. Serum laboratory studies show:
Na+ 133 mEq/L
K+ 5.9 mEq/L
Cl- 95 mEq/L
HCO3- 13 mEq/L
Urea nitrogen 25 mg/dL
Creatinine 1.0 mg/dL
Urine dipstick is positive for ketones and glucose. Further evaluation is most likely to reveal which of the following?"`,options:{A:"Decreased total body potassium",B:"Increased total body sodium",C:"Increased arterial pCO2",D:"Hypervolemia",E:"Serum glucose concentration > 600 mg/dL"},response:`The correct answer is **E. Serum glucose concentration > 600 mg/dL**. Here's why:

The clinical presentation of the boy, including abdominal pain, weight loss, increased thirst, bedwetting, lethargy, and the laboratory findings showing hyperglycemia (indicated by positive urine dipstick for glucose and ketones) suggest he is likely in a state of **diabetic ketoacidosis (DKA)**, often associated with type 1 diabetes mellitus.

In DKA, serum glucose levels can become significantly elevated, often exceeding **600 mg/dL**. The child's symptoms of dehydration (dry mucous membranes, labored breathing, tachycardia, and hypotension) further support this diagnosis.

Let's evaluate why the other options are incorrect:

* **A. Decreased total body potassium:** In DKA, total body potassium is typically normal or elevated due to acidosis and shifts of potassium out of cells. Although serum potassium may show a high level (5.9 mEq/L), this does not indicate a decrease in total body potassium.
* **B. Increased total body sodium:** In DKA, total body sodium is often normal or decreased due to dilutional effects from hyperglycemia, leading to osmotic diuresis.
* **C. Increased arterial pCO2:** In DKA, metabolic acidosis is present, which typically leads to a compensatory respiratory alkalosis (increased respiration) and a decreased pCO2, not an increased one.
* **D. Hypervolemia:** The boy is likely hypovolemic due to dehydration from osmotic diuresis.

Given the clinical context, the most likely finding upon further evaluation would be a **serum glucose concentration > 600 mg/dL**.

### Answer
\`\`\`E\`\`\``,prediction:"E",label:"A"},{question:"A 37-year-old woman presents to the emergency department complaining of generalized malaise, weakness, headache, nausea, vomiting, and diarrhea; she last felt well roughly two days ago. She is otherwise healthy, and takes no medications. Her vital signs are: T 38.0, HR 96 beats per minute, BP 110/73, and O2 sat 96% on room air. Examination reveals a somewhat ill-appearing woman; she is drowsy but arousable and has no focal neurological deficits. Initial laboratory studies are notable for hematocrit 26%, platelets of 80,000/mL, and serum creatinine of 1.5 mg/dL. Which of the following is the most appropriate treatment at this time?",options:{A:"High-dose glucocorticoids",B:"Cyclophosphamide and rituximab",C:"Vancomycin and cefepime",D:"Plasma exchange therapy",E:"Urgent laparoscopic splenectomy"},response:`The correct answer is **C. Vancomycin and cefepime**. Here's why:

The patient presents with symptoms suggestive of a severe infection, potentially sepsis, along with laboratory findings indicating anemia (low hematocrit), thrombocytopenia (low platelets), and slightly elevated serum creatinine. Given the acute onset of her symptoms and her vital signs, the patient is at risk for severe infection, which could lead to septic shock.

The combination of **vancomycin** (for coverage against resistant Gram-positive bacteria, including MRSA) and **cefepime** (a broad-spectrum cephalosporin providing coverage for Gram-negative organisms) is appropriate for empirical treatment in a patient with suspected sepsis.

Let's look at why the other options are incorrect:

* **A. High-dose glucocorticoids:** This treatment is used for autoimmune conditions like autoimmune hemolytic anemia or thrombocytopenia but is not the first-line treatment for suspected sepsis.
* **B. Cyclophosphamide and rituximab:** These are immunosuppressive therapies used in certain autoimmune diseases or malignancies and not in acute infectious scenarios.
* **D. Plasma exchange therapy:** This is typically reserved for certain severe autoimmune conditions but is not the initial treatment for a patient presenting with signs of sepsis.
* **E. Urgent laparoscopic splenectomy:** While splenectomy can be indicated in certain hematologic conditions, it is not the immediate priority in the setting of acute infection and sepsis.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"D"},{question:"A 52-year-old woman comes to the physician because of a 6-month history of generalized fatigue, low-grade fever, and a 10-kg (22-lb) weight loss. Physical examination shows generalized pallor and splenomegaly. Her hemoglobin concentration is 7.5 g/dL and leukocyte count is 41,800/mm3. Leukocyte alkaline phosphatase activity is low. Peripheral blood smear shows basophilia with myelocytes and metamyelocytes. Bone marrow biopsy shows cellular hyperplasia with proliferation of immature granulocytic cells. Which of the following mechanisms is most likely responsible for this patient's condition?",options:{A:"Overexpression of the c-KIT gene",B:"Cytokine-independent activation of the JAK-STAT pathway",C:"Loss of function of the APC gene",D:"Altered expression of the retinoic acid receptor gene",E:"Unregulated expression of the ABL1 gene"},response:`The correct answer is **B. Cytokine-independent activation of the JAK-STAT pathway**. Here's why:

The clinical presentation and laboratory findings are consistent with a diagnosis of **Chronic Myeloid Leukemia (CML)**, characterized by:

- Marked leukocytosis (elevated white blood cell count) with a predominance of immature granulocytic cells (myelocytes and metamyelocytes).
- Basophilia (increased basophils).
- Low leukocyte alkaline phosphatase (LAP) score, which is typically seen in CML.
- Splenomegaly and systemic symptoms (fatigue, low-grade fever, weight loss).

CML is primarily caused by the **Philadelphia chromosome**, which results from a translocation between chromosomes 9 and 22, creating the **BCR-ABL fusion gene**. This fusion gene leads to the **cytokine-independent activation of the JAK-STAT signaling pathway**, driving the proliferation of myeloid cells.

Let's look at why the other options are incorrect:

* **A. Overexpression of the c-KIT gene**: This is associated with other conditions, such as gastrointestinal stromal tumors (GISTs), but not CML.
* **C. Loss of function of the APC gene**: This is related to familial adenomatous polyposis (FAP) and colorectal cancer, not myeloid neoplasms.
* **D. Altered expression of the retinoic acid receptor gene**: This is associated with acute promyelocytic leukemia (APL), not CML.
* **E. Unregulated expression of the ABL1 gene**: While the ABL1 gene is involved in the BCR-ABL fusion, the mechanism of action in CML is related to the downstream effects of the fusion protein rather than mere unregulated expression.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"E"},{question:"A 1-year-old boy presents to the emergency department with weakness and a change in his behavior. His parents state that they first noticed the change in his behavior this morning and it has been getting worse. They noticed the patient was initially weak in his upper body and arms, but now he won’t move his legs with as much strength or vigor as he used to. Physical exam is notable for bilateral ptosis with a sluggish pupillary response, a very weak sucking and gag reflex, and shallow respirations. The patient is currently drooling and his diaper is dry. The parents state he has not had a bowel movement in over 1 day. Which of the following is the pathophysiology of this patient’s condition?",options:{A:"Antibodies against postsynaptic nicotinic cholinergic ion channels",B:"Autoantibodies against the presynaptic voltage-gated calcium channels",C:"Autoimmune demyelination of peripheral nerves",D:"Blockade of presynaptic acetylcholine release at the neuromuscular junction",E:"Lower motor neuron destruction in the anterior horn"},response:`The correct answer is **B. Autoantibodies against the presynaptic voltage-gated calcium channels**. Here's why:

The clinical presentation of this 1-year-old boy is suggestive of **myasthenia gravis (MG)** or a similar condition affecting the neuromuscular junction, specifically **Lambert-Eaton Myasthenic Syndrome (LEMS)**. 

- In LEMS, there are **autoantibodies against presynaptic voltage-gated calcium channels**, which impair the release of acetylcholine from the presynaptic terminal. This leads to muscle weakness, particularly with repetitive use, and can also present with autonomic symptoms such as dry mouth and constipation due to impaired neurotransmission affecting the autonomic nervous system.

- The symptoms of weakness, ptosis, respiratory difficulty, and diminished reflexes align with this diagnosis, and the age of the patient makes LEMS a more likely consideration as it can occur in children, particularly in association with underlying malignancies.

Let's examine why the other options are incorrect:

* **A. Antibodies against postsynaptic nicotinic cholinergic ion channels**: This describes myasthenia gravis (MG), which primarily presents with fluctuating muscle weakness that worsens with activity and improves with rest. The acute presentation and the age of this patient suggest LEMS rather than MG.
  
* **C. Autoimmune demyelination of peripheral nerves**: This would be more characteristic of conditions like Guillain-Barré syndrome, which typically presents with rapid-onset muscle weakness and does not specifically explain the findings of reduced strength in the upper body or the autonomic symptoms.
  
* **D. Blockade of presynaptic acetylcholine release at the neuromuscular junction**: This is not an accurate description of the mechanism in LEMS, as it is specifically due to the autoantibodies against the calcium channels rather than a direct blockade of acetylcholine release.
  
* **E. Lower motor neuron destruction in the anterior horn**: This describes conditions like spinal muscular atrophy (SMA) or poliomyelitis, which would present with lower motor neuron signs and muscle atrophy, rather than the specific symptoms observed in this case.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"D"},{question:"A 37-year-old woman comes to the physician because of a 6-month history of weight loss, bloating, and diarrhea. She does not smoke or drink alcohol. Her vital signs are within normal limits. She is 173 cm (5 ft 8 in) tall and weighs 54 kg (120 lb); BMI is 18 kg/m2. Physical examination shows bilateral white spots on the temporal half of the conjunctiva, dry skin, and a hard neck mass in the anterior midline that does not move with swallowing. Urinalysis after a D-xylose meal shows an increase in renal D-xylose excretion. Which of the following is most likely to have prevented this patient's weight loss?",options:{A:"Gluten-free diet",B:"Pancreatic enzyme replacement",C:"Tetracycline therapy",D:"Mesalamine therapy",E:"Lactose-free diet"},response:`The correct answer is **A. Gluten-free diet**. Here's why:

The patient's symptoms and signs suggest **celiac disease**, which is characterized by malabsorption due to an autoimmune reaction to gluten. The presence of weight loss, bloating, diarrhea, and specific eye and skin manifestations (bilateral conjunctival spots) supports this diagnosis. 

The D-xylose test indicates that the intestines are not absorbing monosaccharides properly, which is consistent with celiac disease rather than a pancreatic insufficiency (where D-xylose absorption would typically be normal). 

A **gluten-free diet** is the primary treatment for celiac disease and can lead to significant improvement in symptoms and weight gain, thus it would have been the most likely intervention to prevent the patient's weight loss.

Let's look at why the other options are incorrect:

* **B. Pancreatic enzyme replacement**: This is used for pancreatic insufficiency, which does not align with the symptoms or test results indicating celiac disease.
* **C. Tetracycline therapy**: This is an antibiotic and would not address the underlying issue of malabsorption due to celiac disease.
* **D. Mesalamine therapy**: This is used for inflammatory bowel disease, not celiac disease.
* **E. Lactose-free diet**: While lactose intolerance can occur with celiac disease, it does not address the root cause of her weight loss and malabsorption due to gluten.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:"A 31-year-old G2P2 female at 40 weeks gestation presents to the hospital following a rush of water that came from her vagina. She is 4 cm dilated and 80% effaced. Fetal heart tracing shows a pulse of 155/min with variable decelerations. About 12 hours after presentation, she gives birth to a 6 lb 15 oz baby boy with APGAR scores of 8 and 9 at 1 and 5 minutes, respectively. Which of the following structures is responsible for inhibition of female internal genitalia?",options:{A:"Spermatogonia",B:"Allantois",C:"Syncytiotrophoblast",D:"Sertoli cells",E:"Leydig cells"},response:`The correct answer is **C. Syncytiotrophoblast**. Here's why:

* The patient is experiencing **premature rupture of membranes (PROM)**, which is the leakage of amniotic fluid before 37 weeks of gestation.

* The syncytiotrophoblast is a layer of multinucleated cells that forms the outer layer of the **placenta** and **decidua**.

* During pregnancy, the syncytiotrophoblast is responsible for producing **human chorionic gonadotropin (hCG)** and **estrogen**.

* These hormones play a crucial role in maintaining the pregnancy, including the growth and maintenance of the **female internal genitalia** during pregnancy.

Let's look at why the other options are incorrect:

* **A. Spermatogonia:** Produce sperm cells and are not involved in female genital development.
* **B. Allantois:** A mid-gut derivative that contributes to the formation of the umbilical cord and vitelline duct.
* **D. Sertoli cells:** Support the development of male germ cells in the testes and are not relevant to female genital development.
* **E. Leydig cells:** Produce testosterone in the testes and are not involved in female genital development.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"D"},{question:"A 28-year-old woman is brought to the hospital by her boyfriend. She has had three days of fever and headache followed by one day of worsening confusion and hallucinations. She also becomes agitated when offered water. Her temperature is 101°F (38.3°C). Two months prior to presentation, the couple was camping and encountered bats in their cabin. In addition to an injection shortly after exposure, what would have been the most effective treatment for this patient?",options:{A:"A toxoid vaccine within ten days of exposure",B:"A killed vaccine within ten days of exposure",C:"Oseltamivir within one week of exposure",D:"Venom antiserum within hours of exposure",E:"Doxycycline for one month after exposure"},response:`The correct answer is **A. A toxoid vaccine within ten days of exposure**. Here's why:

* The patient's symptoms suggest **rabies**, characterized by fever, headache, confusion, and hallucinations.

* **Rabies is a fatal disease** if left untreated.

* The most effective treatment is **post-exposure prophylaxis (PEP)**, which consists of administering **rabies vaccine** and **rabies immunoglobulin**.

* **Vaccine administration within ten days of exposure** is crucial to prevent infection.

Let's look at why the other options are incorrect:

* **B. A killed vaccine within ten days of exposure**: Killed vaccines are not effective for post-exposure prophylaxis.
* **C. Oseltamivir within one week of exposure**: Oseltamivir is used to treat influenza, not rabies.
* **D. Venom antiserum within hours of exposure**: Venom antiserum is used for snakebites, not rabies.
* **E. Doxycycline for one month after exposure**: Doxycycline is used to prevent Lyme disease and other tick-borne illnesses, not rabies.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:`A 19-year-old woman, accompanied by her parents, presents after a one-week history of abnormal behavior, delusions, and unusual aggression. She denies fever, seizures or illicit drug use. Family history is negative for psychiatric illnesses. She was started on risperidone and sent home with her parents. Three days later, she is brought to the emergency department with fever and confusion. She is not verbally responsive. At the hospital, her temperature is 39.8°C (103.6°F), the blood pressure is 100/60 mm Hg, the pulse rate is 102/min, and the respiratory rate is 16/min. She is extremely diaphoretic and appears stiff. She has spontaneous eye-opening but she is not verbally responsive and she is not following commands. Laboratory studies show:
Sodium 142 mmol/L
Potassium 5.0 mmol/L
Creatinine 1.8 mg/dl
Calcium 10.4 mg/dl
Creatine kinase 9800 U/L
White blood cells 14,500/mm3
Hemoglobin 12.9 g/dl
Platelets 175,000/mm3
Urinalysis shows protein 1+, hemoglobin 3+ with occasional leukocytes and no red blood casts. What is the best first step in the management of this condition?`,options:{A:"Dantrolene",B:"Intravenous hydration",C:"Paracetamol",D:"Stop risperidone",E:"Switch risperidone to clozapine"},response:`The correct answer is **B. Intravenous hydration**. Here's why:

* The patient is exhibiting signs of **neuroleptic malignant syndrome (NMS)**, a rare but life-threatening side effect of antipsychotic medications like **risperidone**.

* **NMS** is characterized by **fever, rigidity, autonomic instability, and altered mental status**.

* The patient's **elevated creatinine kinase** and **rhabdomyolysis** (evidenced by elevated creatine kinase levels and hemoglobinuria in the urinalysis) indicate **muscle breakdown**.

* **Intravenous hydration** is the first and most important step in managing **NMS** to prevent **acute kidney injury**.

Let's look at why the other options are incorrect:

* **A. Dantrolene**: While it can help with muscle rigidity, dantrolene is not a first-line treatment for NMS.
* **C. Paracetamol**: May help with fever but does not address the underlying pathophysiology of NMS.
* **D. Stop risperidone**: While discontinuing the offending medication is important, it is not the immediate first step in NMS management.
* **E. Switch risperidone to clozapine**: Clozapine is an alternative antipsychotic, but switching medications during an acute NMS episode can be dangerous.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"D"},{question:"A 27-year-old female presents to general medical clinic for a routine checkup. She has a genetic disease marked by a mutation in a chloride transporter. She has a history of chronic bronchitis. She has a brother with a similar history of infections as well as infertility. Which of the following is most likely true regarding a potential vitamin deficiency complication secondary to this patient's chronic illness?",options:{A:"It may result in connective tissue defects",B:"It may result in corneal vascularization",C:"It may result in the triad of confusion, ophthalmoplegia, and ataxia",D:"It may be exacerbated by excessive ingestion of raw eggs",E:"It may manifest itself as a prolonged PT"},response:`The correct answer is **B. It may result in corneal vascularization**. Here's why:

* The patient has a genetic disease marked by a mutation in a chloride transporter, which is consistent with **Cystic Fibrosis (CF)**.

* CF is characterized by **mucociliary dysfunction** and **chronic infections**, including chronic bronchitis.

* A potential vitamin deficiency complication secondary to CF is **Vitamin A deficiency**.

* Vitamin A deficiency can cause **corneal vascularization**, due to the impaired mucociliary clearance in CF patients, which leads to increased exposure of the cornea to pathogens.

Let's look at why the other options are incorrect:

* **A. It may result in connective tissue defects**: Associated with vitamin C deficiency (scurvy), not Vitamin A deficiency.
* **C. It may result in the triad of confusion, ophthalmoplegia, and ataxia**: Associated with vitamin B12 deficiency (pernicious anemia), which can lead to neurological symptoms.
* **D. It may be exacerbated by excessive ingestion of raw eggs**: Raw eggs contain **Avidin**, which binds to biotin (vitamin B7), interfering with its absorption. This is related to biotin deficiency, which is not associated with CF.
* **E. It may manifest itself as a prolonged PT (prothrombin time)**: Associated with vitamin K deficiency, typically due to malabsorption or warfarin use, not Vitamin A deficiency.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"E"},{question:"A 31-year-old woman, gravida 2, para 1, at 32 weeks' gestation comes to the emergency department for sudden leakage of clear vaginal fluid. Her pregnancy has been uncomplicated. Her first child was born at term by vaginal delivery. She has no history of serious illness. She does not drink alcohol or smoke cigarettes. Current medications include vitamin supplements. Her temperature is 37.2°C (98.9°F), pulse is 70/min, respirations are 18/min, and blood pressure is 128/82 mm Hg. Speculum examination demonstrates clear fluid in the cervical canal. The fetal heart rate is reactive at 160/min with no decelerations. Tocometry shows uterine contractions. Nitrazine testing is positive. She is started on indomethacin. Which of the following is the most appropriate next step in management?",options:{A:"Administer betamethasone, ampicillin, and proceed with cesarean section",B:"Administer ampicillin and perform amnioinfusion",C:"Administer ampicillin and test amniotic fluid for fetal lung maturity",D:"Administer betamethasone and ampicillin",E:"Administer betamethasone, ampicillin, and proceed with induction of labor"},response:`The correct answer is **C. Administer ampicillin and test amniotic fluid for fetal lung maturity**. Here's why:

* The patient has presented with **preterm rupture of the membranes (PROM)**, which can lead to prematurity and associated complications.

* **Ampicillin** is administered to prevent maternal and neonatal infection, as PROM is a risk factor for chorioamnionitis.

* **Nitrazine testing is positive**, indicating the presence of amniotic fluid, which is consistent with PROM.

* The patient should also be tested for **fetal lung maturity**. This is particularly important because the patient is at 32 weeks' gestation, and the neonate's lungs may not be mature enough for life outside the womb.

Let's look at why the other options are incorrect:

* **A. Administer betamethasone, ampicillin, and proceed with cesarean section**: Betamethasone is used to enhance fetal lung maturity, but a C-section is not always necessary or indicated for PROM at this gestational age.
* **B. Administer ampicillin and perform amnioinfusion**: Amnioinfusion is typically used to treat oligohydramnios or reduce the risk of cord prolapse, not PROM.
* **D. Administer betamethasone and ampicillin**: While betamethasone may help with fetal lung maturity, it's not immediately indicated for PROM management.
* **E. Administer betamethasone, ampicillin, and proceed with induction of labor**: Induction of labor is contraindicated in PROM before 34 weeks due to the risk of prematurity and associated complications.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"D"},{question:"A 43-year-old woman presents to the emergency department complaining of palpitations, dry cough, and shortness of breath for 1 week. She immigrated to the United States from Korea at the age of 20. She says that her heart is racing and she has never felt these symptoms before. Her cough is dry and is associated with shortness of breath that occurs with minimal exertion. Her past medical history is otherwise unremarkable. She has no allergies and is not currently taking any medications. She is a nonsmoker and an occasional drinker. She denies illicit drug use. Her blood pressure is 100/65 mm Hg, pulse is 76/min, respiratory rate is 23/min, and temperature is 36.8°C (98.2°F). Her physical examination is significant for bibasilar lung crackles and a non-radiating, low-pitched, mid-diastolic rumbling murmur best heard at the apical region. In addition, she has jugular vein distention and bilateral pitting edema in her lower extremities. Which of the following best describes the infectious agent that led to this patient’s condition?",options:{A:"A bacterium that induces partial lysis of red cells with hydrogen peroxide",B:"A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin",C:"A bacterium that induces heme degradation of the red cells of a blood agar plate",D:"A bacterium that does not lyse red cells",E:"A bacterium that requires an anaerobic environment to grow properly"},response:`The correct answer is **D. A bacterium that does not lyse red cells**. Here's why:

The patient appears to have **congestive heart failure (CHF)**, which is suggested by symptoms like palpitations, cough, shortness of breath, and physical examination findings of bibasilar lung crackles, jugular vein distention, and bilateral pitting edema.

**Streptococcus bovis** is a bacterium that can cause bacteremia, endocarditis, and CHF. It is known to colonize the gastrointestinal tract and can enter the bloodstream, leading to **Streptococcus bovis endocarditis**, which often affects the left-sided heart valves.

**Streptococcus bovis** is distinct from other streptococci in that it **does not lyse red blood cells** on blood agar plates.

Let's look at why the other options are incorrect:

* **A. A bacterium that induces partial lysis of red cells with hydrogen peroxide:** This describes **Staphylococcus aureus**, which is not typically associated with these symptoms.
* **B. A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin:** This describes **Streptococcus pneumoniae**, which can cause pneumonia and bacteremia but is not associated with these symptoms.
* **C. A bacterium that induces heme degradation of the red cells of a blood agar plate:** This describes **Clostridium perfringens**, which can cause gas gangrene and is not associated with these symptoms.
* **E. A bacterium that requires an anaerobic environment to grow properly:** This describes many anaerobic bacteria, including those causing gas gangrene or periodontal disease, but is not associated with these symptoms.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"B"},{question:"A 68-year-old man presents to the emergency department with leg pain. He states that the pain started suddenly while he was walking outside. The patient has a past medical history of diabetes, hypertension, obesity, and atrial fibrillation. His temperature is 99.3°F (37.4°C), blood pressure is 152/98 mmHg, pulse is 97/min, respirations are 15/min, and oxygen saturation is 99% on room air. Physical exam is notable for a cold and pale left leg. The patient’s sensation is markedly diminished in the left leg when compared to the right, and his muscle strength is 1/5 in his left leg. Which of the following is the best next step in management?",options:{A:"CT angiogram",B:"Graded exercise and aspirin",C:"Heparin drip",D:"Surgical thrombectomy",E:"Tissue plasminogen activator"},response:`The correct answer is **A. CT angiogram**. Here's why:

* The patient presents with **sudden-onset leg pain** and **diminished sensation in the left leg** compared to the right.

* The physical examination shows **cold and pale skin**, **markedly diminished sensation**, and **weakness** (1/5 muscle strength) in the left leg.

* These symptoms and signs are highly suggestive of **acute limb ischemia** due to **thromboembolic disease**.

* The next step in management is to confirm the diagnosis with **imaging**.

Let's look at why the other options are incorrect:

* **B. Graded exercise and aspirin:** These are treatments for chronic stable angina, not acute limb ischemia.
* **C. Heparin drip:** This is a treatment for thrombosis, but the diagnosis should be confirmed first.
* **D. Surgical thrombectomy:** This is a treatment for confirmed thromboembolic disease, but the diagnosis should be confirmed first.
* **E. Tissue plasminogen activator (tPA):** This is a treatment for thromboembolic disease, but the diagnosis should be confirmed first.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"C"},{question:"A 52-year-old woman comes to the physician because of a 6-month history of generalized fatigue, low-grade fever, and a 10-kg (22-lb) weight loss. Physical examination shows generalized pallor and splenomegaly. Her hemoglobin concentration is 7.5 g/dL and leukocyte count is 41,800/mm3. Leukocyte alkaline phosphatase activity is low. Peripheral blood smear shows basophilia with myelocytes and metamyelocytes. Bone marrow biopsy shows cellular hyperplasia with proliferation of immature granulocytic cells. Which of the following mechanisms is most likely responsible for this patient's condition?",options:{A:"Overexpression of the c-KIT gene",B:"Cytokine-independent activation of the JAK-STAT pathway",C:"Loss of function of the APC gene",D:"Altered expression of the retinoic acid receptor gene",E:"Unregulated expression of the ABL1 gene"},response:`The correct answer is **B. Cytokine-independent activation of the JAK-STAT pathway**. Here's why:

* The patient's symptoms (fatigue, weight loss, pallor, splenomegaly) and **blood count abnormalities** (leukocytosis, basophilia, low leukocyte alkaline phosphatase activity) are consistent with **chronic myelogenous leukemia (CML)**.

* CML is characterized by **cytokine-independent activation of the JAK-STAT signaling pathway** due to a **chromosomal translocation** (t(9;22) or Philadelphia chromosome) resulting in **BCR-ABL1 fusion**.

* The BCR-ABL1 fusion protein leads to uncontrolled proliferation of **immature granulocytic cells**, which is the hallmark of CML.

Let's look at why the other options are incorrect:

* **A. Overexpression of the c-KIT gene:** Associated with **GIST (gastrointestinal stromal tumor)**, not CML.
* **C. Loss of function of the APC gene:** Causes **familial adenomatous polyposis** (FAP), leading to colon cancer.
* **D. Altered expression of the retinoic acid receptor gene:** Seen in **acute promyelocytic leukemia (APL)**, not CML.
* **E. Unregulated expression of the ABL1 gene:** Not associated with CML; BCR-ABL1 is the relevant abnormal fusion protein.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"E"},{question:"A 62-year-old woman presents for a regular check-up. She complains of lightheadedness and palpitations which occur episodically. Past medical history is significant for a myocardial infarction 6 months ago and NYHA class II chronic heart failure. She also was diagnosed with grade I arterial hypertension 4 years ago. Current medications are aspirin 81 mg, atorvastatin 10 mg, enalapril 10 mg, and metoprolol 200 mg daily. Her vital signs are a blood pressure of 135/90 mm Hg, a heart rate of 125/min, a respiratory rate of 14/min, and a temperature of 36.5°C (97.7°F). Cardiopulmonary examination is significant for irregular heart rhythm and decreased S1 intensity. ECG is obtained and is shown in the picture (see image). Echocardiography shows a left ventricular ejection fraction of 39%. Which of the following drugs is the best choice for rate control in this patient?",options:{A:"Atenolol",B:"Verapamil",C:"Diltiazem",D:"Propafenone",E:"Digoxin"},response:`The correct answer is **C. Diltiazem**. Here's why:

* The patient has **previously diagnosed hypertension** and a **history of myocardial infarction**.

* She is on **metoprolol** for heart failure and hypertension, but the dose may need to be increased.

* The patient's **ECG shows atrial fibrillation with rapid ventricular response**, likely due to the tachycardia-induced cardiomyopathy.

* **Diltiazem** is an effective, non-dihydropyridine calcium channel blocker that can help **control the ventricular rate** in atrial fibrillation.

Let's look at why the other options are incorrect:

* **A. Atenolol**: A beta-blocker that is useful for hypertension and heart failure but not ideal for rate control in atrial fibrillation due to its negative inotropic effects.
* **B. Verapamil**: Another non-dihydropyridine calcium channel blocker that can control heart rate but is more likely to cause bradycardia.
* **D. Propafenone**: A beta-blocker with antiarrhythmic properties but not the first-line agent for rate control in atrial fibrillation.
* **E. Digoxin**: Can be used for rate control but has a narrow therapeutic window and may cause arrhythmias.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"You are reviewing raw data from a research study performed at your medical center examining the effectiveness of a novel AIDS screening examination. The study enrolled 250 patients with confirmed AIDS, and 240 of these patients demonstrated a positive screening examination. The control arm of the study enrolled 250 patients who do not have AIDS, and only 5 of these patients tested positive on the novel screening examination. What is the NPV of this novel test?",options:{A:"245 / (245 + 10)",B:"245 / (245 + 5)",C:"240 / (240 + 5)",D:"240 / (240 + 15)",E:"240 / (240 + 10)"},response:`To calculate the **Negative Predictive Value (NPV)** of the novel screening examination, we first need to identify the true negative results (i.e., patients without AIDS who test negative).

**True Positive (TP) = 240** (number of patients with AIDS who test positive)
**True Negative (TN) = 245** (number of patients without AIDS who test negative)

The **False Positive (FP) = 5** (number of patients without AIDS who test positive)

Since patients without AIDS who test negative are true negatives, we don't need to calculate the false negative results.

The NPV is calculated as follows:

**NPV = TN / (TN + FN)**

However, the FN (false negative) value is not available in this scenario. But, we do know that the total number of patients without AIDS who tested negative (TN) is 245. We also know that the total number of patients without AIDS who tested positive (FP) is 5. Therefore, the total number of patients without AIDS is:

**Total without AIDS = 250** (initial number of patients without AIDS)

This means that the number of false negatives (FN) is:

**FN = 250 (Total without AIDS) - 5 (False Positives) = 245**

Now, we can calculate the NPV:

**NPV = TN / (TN + FN) = 245 / (245 + 245) = 245 / 490**

Therefore, the NPV of the novel test is **50%**.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 28-year-old woman is brought to the hospital by her boyfriend. She has had three days of fever and headache followed by one day of worsening confusion and hallucinations. She also becomes agitated when offered water. Her temperature is 101°F (38.3°C). Two months prior to presentation, the couple was camping and encountered bats in their cabin. In addition to an injection shortly after exposure, what would have been the most effective treatment for this patient?",options:{A:"A toxoid vaccine within ten days of exposure",B:"A killed vaccine within ten days of exposure",C:"Oseltamivir within one week of exposure",D:"Venom antiserum within hours of exposure",E:"Doxycycline for one month after exposure"},response:`The correct answer is **A. A toxoid vaccine within ten days of exposure**. Here's why:

* The patient's symptoms suggest **rabies**, characterized by fever, headache, confusion, and hallucinations.

* **Rabies is a fatal disease** if left untreated.

* The most effective treatment is **post-exposure prophylaxis (PEP)**, which consists of administering **rabies vaccine** and **rabies immunoglobulin**.

* **Vaccine administration within ten days of exposure** is crucial to prevent infection.

Let's look at why the other options are incorrect:

* **B. A killed vaccine within ten days of exposure**: Killed vaccines are not effective for post-exposure prophylaxis.
* **C. Oseltamivir within one week of exposure**: Oseltamivir is used to treat influenza, not rabies.
* **D. Venom antiserum within hours of exposure**: Venom antiserum is used for snakebites, not rabies.
* **E. Doxycycline for one month after exposure**: Doxycycline is used to prevent Lyme disease and other tick-borne illnesses, not rabies.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:"A previously healthy 36-year-old man comes to the physician for a yellow discoloration of his skin and dark-colored urine for 2 weeks. He does not drink any alcohol. Physical examination shows jaundice. Abdominal and neurologic examinations show no abnormalities. Serum studies show increased levels of alanine aminotransferase (ALT) and aspartate aminotransferase (AST). A liver biopsy is performed and a photomicrograph after periodic acid-Schiff-staining is shown. Which of the following is the most likely additional finding in this patient?",options:{A:"Tropheryma whipplei-specific RNA on PCR",B:"Bullous changes of the lung bases on chest CT",C:"Beading of intra- and extrahepatic bile ducts on ERCP",D:"Myocardial iron deposition on cardiovascular MRI",E:"Dark corneal ring on slit-lamp examination"},response:`The correct answer is **C. Beading of intra- and extrahepatic bile ducts on ERCP**. Here's why:

* The patient presents with **jaundice** and elevated liver enzymes (increased ALT and AST), suggesting **biliary obstruction**.

* The liver biopsy shows **periodic acid-Schiff (PAS)-positive globules**, which are characteristic of **alpha-1 antitrypsin deficiency** (AATD).

* AATD is a genetic disorder leading to **AAT protein deficiency**, causing **panacinar emphysema** and, in some cases, **hepatocellular damage**.

* The patient also has **bronchiectasis**, which is often seen in AATD.

* **ERCP** may reveal **beading of the bile ducts**, which is characteristic of **primary sclerosing cholangitis (PSC)**. PSC is a complication of AATD.

Let's look at why the other options are incorrect:

* **A. Tropheryma whipplei-specific RNA on PCR:** Associated with **Whipple's disease**, presenting with malabsorption, weight loss, and neurologic symptoms.
* **B. Bullous changes of the lung bases on chest CT:** Seen in **idiopathic pulmonary fibrosis** or **bilateral diffuse alveolar damage**.
* **D. Myocardial iron deposition on cardiovascular MRI:** Associated with **hereditary hemochromatosis**, leading to heart failure.
* **E. Dark corneal ring on slit-lamp examination:** Seen in **Wilson disease**, with copper deposition in the cornea.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"B"},{question:"A 31-year-old woman, gravida 2, para 1, at 32 weeks' gestation comes to the emergency department for sudden leakage of clear vaginal fluid. Her pregnancy has been uncomplicated. Her first child was born at term by vaginal delivery. She has no history of serious illness. She does not drink alcohol or smoke cigarettes. Current medications include vitamin supplements. Her temperature is 37.2°C (98.9°F), pulse is 70/min, respirations are 18/min, and blood pressure is 128/82 mm Hg. Speculum examination demonstrates clear fluid in the cervical canal. The fetal heart rate is reactive at 160/min with no decelerations. Tocometry shows uterine contractions. Nitrazine testing is positive. She is started on indomethacin. Which of the following is the most appropriate next step in management?",options:{A:"Administer betamethasone, ampicillin, and proceed with cesarean section",B:"Administer ampicillin and perform amnioinfusion",C:"Administer ampicillin and test amniotic fluid for fetal lung maturity",D:"Administer betamethasone and ampicillin",E:"Administer betamethasone, ampicillin, and proceed with induction of labor"},response:`The correct answer is **C. Administer ampicillin and test amniotic fluid for fetal lung maturity**. Here's why:

* The patient has presented with **preterm rupture of the membranes (PROM)**, which can lead to prematurity and associated complications.

* **Ampicillin** is administered to prevent maternal and neonatal infection, as PROM is a risk factor for chorioamnionitis.

* **Nitrazine testing is positive**, indicating the presence of amniotic fluid, which is consistent with PROM.

* The patient should also be tested for **fetal lung maturity**. This is particularly important because the patient is at 32 weeks' gestation, and the neonate's lungs may not be mature enough for life outside the womb.

Let's look at why the other options are incorrect:

* **A. Administer betamethasone, ampicillin, and proceed with cesarean section**: Betamethasone is used to enhance fetal lung maturity, but a C-section is not always necessary or indicated for PROM at this gestational age.
* **B. Administer ampicillin and perform amnioinfusion**: Amnioinfusion is typically used to treat oligohydramnios or reduce the risk of cord prolapse, not PROM.
* **D. Administer betamethasone and ampicillin**: While betamethasone may help with fetal lung maturity, it's not immediately indicated for PROM management.
* **E. Administer betamethasone, ampicillin, and proceed with induction of labor**: Induction of labor is contraindicated in PROM before 34 weeks due to the risk of prematurity and associated complications.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"D"},{question:"A 6-year-old male who recently immigrated to the United States from Asia is admitted to the hospital with dyspnea. Physical exam reveals a gray pseudomembrane in the patient's oropharynx along with lymphadenopathy. The patient develops myocarditis and expires on hospital day 5. Which of the following would have prevented this patient's presentation and decline?",options:{A:"Increased CD4+ T cell count",B:"Secretory IgA against viral proteins",C:"Increased IgM preventing bacterial invasion",D:"Circulating IgG against AB exotoxin",E:"Improved IgE release from mast cells"},response:`The correct answer is **B. Secretory IgA against viral proteins**. Here's why:

* The patient's presentation and decline are consistent with **influenza B infection**, which can lead to severe complications in young children, including **myocarditis** and **respiratory failure**.

* The child's recent **immigration from a developing country** (presumably with limited vaccination access) may have contributed to the lack of prior immunity.

* **Secretory IgA** in the respiratory tract plays a crucial role in preventing viral infections by forming an **antibody barrier** that neutralizes viral particles.

* The patient's severe respiratory symptoms suggest a significant infection, possibly due to the absence of protective secretory IgA.

Let's look at why the other options are incorrect:

* **A. Increased CD4+ T cell count**: While important for immune function, CD4+ T cells are not primarily involved in mucosal immunity.
* **C. Increased IgM preventing bacterial invasion**: IgM is involved in acute immune responses but is not the primary defense mechanism against viruses.
* **D. Circulating IgG against AB exotoxin**: IgG is involved in systemic immunity, not mucosal immunity.
* **E. Improved IgE release from mast cells**: IgE is involved in allergic reactions and does not play a significant role in preventing viral infections.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"D"},{question:"A 6-year-old male who recently immigrated to the United States from Asia is admitted to the hospital with dyspnea. Physical exam reveals a gray pseudomembrane in the patient's oropharynx along with lymphadenopathy. The patient develops myocarditis and expires on hospital day 5. Which of the following would have prevented this patient's presentation and decline?",options:{A:"Increased CD4+ T cell count",B:"Secretory IgA against viral proteins",C:"Increased IgM preventing bacterial invasion",D:"Circulating IgG against AB exotoxin",E:"Improved IgE release from mast cells"},response:`The correct answer is **B. Secretory IgA against viral proteins**. Here's why:

* The patient's presentation and decline are consistent with **influenza B infection**, which can lead to severe complications in young children, including **myocarditis** and **respiratory failure**.

* The child's recent **immigration from a developing country** (presumably with limited vaccination access) may have contributed to the lack of prior immunity.

* **Secretory IgA** in the respiratory tract plays a crucial role in preventing viral infections by forming an **antibody barrier** that neutralizes viral particles.

* The patient's severe respiratory symptoms suggest a significant infection, possibly due to the absence of protective secretory IgA.

Let's look at why the other options are incorrect:

* **A. Increased CD4+ T cell count**: While important for immune function, CD4+ T cells are not primarily involved in mucosal immunity.
* **C. Increased IgM preventing bacterial invasion**: IgM is involved in acute immune responses but is not the primary defense mechanism against viruses.
* **D. Circulating IgG against AB exotoxin**: IgG is involved in systemic immunity, not mucosal immunity.
* **E. Improved IgE release from mast cells**: IgE is involved in allergic reactions and does not play a significant role in preventing viral infections.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"D"},{question:"A 60-year-old man comes to the physician for an examination prior to a scheduled cholecystectomy. He has hypertension treated with hydrochlorothiazide. His mother had chronic granulomatous disease of the lung. He works in a glass manufacturing plant. He has smoked two packs of cigarettes daily for 38 years. His vital signs are within normal limits. Examination shows no abnormalities. Laboratory studies are within the reference range. An x-ray of the chest is shown. Which of the following is the most appropriate next step in management?",options:{A:"Perform arterial blood gas analysis",B:"Perform CT-guided biopsy",C:"Perform diffusion capacity of the lung for carbon monoxide",D:"Measure angiotensin-converting enzyme",E:"Request previous chest x-ray"},response:`The correct answer is **C. Perform diffusion capacity of the lung for carbon monoxide (DLCO)**. Here's why:

* The patient's history and symptoms suggest a possible **pulmonary disease**.

* The patient's mother had **chronic granulomatous disease**, which increases the risk of pulmonary infections and inflammation.

* **Smoking** is a significant risk factor for lung disease.

* The chest x-ray is normal, but this does not rule out significant pulmonary disease.

* **DLCO** measures the lung's ability to transfer carbon monoxide from the lungs into the blood. It is a sensitive test to detect **diffusion defects** that can be seen in pulmonary diseases like **interstitial lung disease**.

Let's look at why the other options are incorrect:

* **A. Perform arterial blood gas analysis**: Useful for assessing acid-base balance but not specifically for diagnosing lung disease.
* **B. Perform CT-guided biopsy**: Invasive and typically reserved for when other tests are inconclusive.
* **D. Measure angiotensin-converting enzyme (ACE)**: Elevated in **sarcoidosis** but not as sensitive as DLCO for initial evaluation.
* **E. Request previous chest x-ray**: While previous imaging can be helpful, a new test (DLCO) is more appropriate in this scenario.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"A male neonate is being examined by a pediatrician. His mother informs the doctor that she had a mild fever with rash, muscle pain, and swollen and tender lymph nodes during the second month of gestation. The boy was born at 39 weeks gestation via spontaneous vaginal delivery with no prenatal care. On physical examination, the neonate has normal vital signs. Retinal examination reveals the findings shown in the image. Which of the following congenital heart defects is most likely to be present in this neonate?",options:{A:"Atrial septal defect",B:"Ventricular septal defect",C:"Tetralogy of Fallot",D:"Patent ductus arteriosus",E:"Double outlet right ventricle"},response:`The correct answer is **C. Tetralogy of Fallot**. Here's why:

* The mother's history of **rubella infection** during the second month of gestation is crucial.

* **Rubella infection in early pregnancy** can lead to **congenital rubella syndrome**.

* This syndrome is associated with **congenital heart defects**, including **Tetralogy of Fallot**.

* Tetralogy of Fallot is characterized by four components: **ventricular septal defect**, **pulmonary stenosis**, **right ventricular hypertrophy**, and **overriding aorta**.

Let's look at why the other options are incorrect:

* **A. Atrial septal defect:** Typically presents with a heart murmur and may not be detected at birth.
* **B. Ventricular septal defect:** Common in congenital heart disease but not specifically associated with rubella infection.
* **D. Patent ductus arteriosus:** Often closes spontaneously and is not typically detected at birth.
* **E. Double outlet right ventricle:** A rare congenital heart defect that is not specifically associated with rubella infection.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"D"},{question:"A 28-year-old woman is brought to the hospital by her boyfriend. She has had three days of fever and headache followed by one day of worsening confusion and hallucinations. She also becomes agitated when offered water. Her temperature is 101°F (38.3°C). Two months prior to presentation, the couple was camping and encountered bats in their cabin. In addition to an injection shortly after exposure, what would have been the most effective treatment for this patient?",options:{A:"A toxoid vaccine within ten days of exposure",B:"A killed vaccine within ten days of exposure",C:"Oseltamivir within one week of exposure",D:"Venom antiserum within hours of exposure",E:"Doxycycline for one month after exposure"},response:`The correct answer is **A. A toxoid vaccine within ten days of exposure**. Here's why:

* The patient's symptoms suggest **rabies**, characterized by fever, headache, confusion, and hallucinations.

* **Rabies is a fatal disease** if left untreated.

* The most effective treatment is **post-exposure prophylaxis (PEP)**, which consists of administering **rabies vaccine** and **rabies immunoglobulin**.

* **Vaccine administration within ten days of exposure** is crucial to prevent infection.

Let's look at why the other options are incorrect:

* **B. A killed vaccine within ten days of exposure**: Killed vaccines are not effective for post-exposure prophylaxis.
* **C. Oseltamivir within one week of exposure**: Oseltamivir is used to treat influenza, not rabies.
* **D. Venom antiserum within hours of exposure**: Venom antiserum is used for snakebites, not rabies.
* **E. Doxycycline for one month after exposure**: Doxycycline is used to prevent Lyme disease and other tick-borne illnesses, not rabies.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:"A 20-year-old male comes into your office two days after falling during a pick up basketball game. The patient states that the lateral aspect of his knee collided with another player's knee. On exam, the patient's right knee appears the same size as his left knee without any swelling or effusion. The patient has intact sensation and strength in both lower extremities. The patient's right knee has no laxity upon varus stress test, but is more lax upon valgus stress test when compared to his left knee. Lachman's test and posterior drawer test both have firm endpoints without laxity. Which of the following structures has this patient injured?",options:{A:"Posterior cruciate ligament",B:"Anterior cruciate ligament",C:"Medial collateral ligament",D:"Lateral collateral ligament",E:"Medial meniscus"},response:`The correct answer is **D. Lateral collateral ligament**. Here's why:

* The patient's **right knee is more lax upon valgus stress test** when compared to his left knee, indicating a **lateral collateral ligament (LCL) injury**.

* The **varus stress test** is negative, suggesting that the **anterior cruciate ligament (ACL)** and **posterior cruciate ligament (PCL)** are intact.

* Both **Lachman's test** and **posterior drawer test** have firm endpoints, ruling out **ACL** and **PCL** injuries.

Let's look at why the other options are incorrect:

* **A. Posterior cruciate ligament:** The posterior drawer test has a firm endpoint, ruling this out.
* **B. Anterior cruciate ligament:** The Lachman's test is negative, ruling this out.
* **C. Medial collateral ligament:** The varus stress test is negative, ruling this out.
* **E. Medial meniscus:** The patient's symptoms and examination findings do not suggest a meniscal injury.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"C"},{question:"A 52-year-old man presents for a routine checkup. Past medical history is remarkable for stage 1 systemic hypertension and hepatitis A infection diagnosed 10 years ago. He takes aspirin, rosuvastatin, enalapril daily, and a magnesium supplement every once in a while. He is planning to visit Ecuador for a week-long vacation and is concerned about malaria prophylaxis before his travel. The physician advised taking 1 primaquine pill every day while he is there and for 7 consecutive days after leaving Ecuador. On the third day of his trip, the patient develops an acute onset headache, dizziness, shortness of breath, and fingertips and toes turning blue. His blood pressure is 135/80 mm Hg, heart rate is 94/min, respiratory rate is 22/min, temperature is 36.9℃ (98.4℉), and blood oxygen saturation is 97% in room air. While drawing blood for his laboratory workup, the nurse notes that his blood has a chocolate brown color. Which of the following statements best describes the etiology of this patient’s most likely condition?",options:{A:"The patient’s condition is due to consumption of water polluted with nitrates.",B:"This condition resulted from primaquine overdose.",C:"The patient had pre-existing liver damage caused by viral hepatitis.",D:"The condition developed because of his concomitant use of primaquine and magnesium supplement.",E:"It is a type B adverse drug reaction."},response:`The correct answer is **D. The condition developed because of his concomitant use of primaquine and magnesium supplement**. Here's why:

* The patient develops **acute hemolytic anemia** (indicated by the **chocolate brown blood color**), manifesting as **headache, dizziness, shortness of breath, and cyanosis**.

* **Primaquine** is used for malaria prophylaxis and can cause **hemolysis** in individuals with **glucose-6-phosphate dehydrogenase (G6PD) deficiency**.

* The patient is taking a **magnesium supplement**, which may potentially increase the risk of hemolysis when combined with primaquine.

* Primaquine is contraindicated in patients with G6PD deficiency.

Let's look at why the other options are incorrect:

* **A. The patient’s condition is due to consumption of water polluted with nitrates**: This would lead to methemoglobinemia, not hemolytic anemia.
* **B. This condition resulted from primaquine overdose**: The described dose is standard for prophylaxis.
* **C. The patient had pre-existing liver damage caused by viral hepatitis**: This is unrelated to the acute hemolytic anemia.
* **E. It is a type B adverse drug reaction**: Primaquine's hemolytic effect is considered a hypersensitivity reaction, falling under type 2 reactions.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"E"},{question:"A mother brings her 3-week-old infant to the pediatrician's office because she is concerned about his feeding habits. He was born without complications and has not had any medical problems up until this time. However, for the past 4 days, he has been fussy, is regurgitating all of his feeds, and his vomit is yellow in color. On physical exam, the child's abdomen is minimally distended but no other abnormalities are appreciated. Which of the following embryologic errors could account for this presentation?",options:{A:"Abnormal migration of ventral pancreatic bud",B:"Complete failure of proximal duodenum to recanalize",C:"Error in neural crest cell migration",D:"Abnormal hypertrophy of the pylorus",E:"Failure of lateral body folds to move ventrally and fuse in the midline"},response:`Upon re-examining the question, I realized that my initial response was partially correct, but I overlooked some crucial details.

The correct answer is a combination of pyloric stenosis and another embryologic error that affects the intestinal tract. The presence of yellow vomit in the infant's symptoms suggests that there might be an additional component to the condition, such as a partial intestinal obstruction.

Considering the patient's symptoms and the provided options, a more likely explanation could be a combination of pyloric stenosis and **B. Complete failure of proximal duodenum to recanalize**. This could lead to a partial intestinal obstruction, resulting in yellow vomit.

Therefore, the correct answer is **B. Complete failure of proximal duodenum to recanalize**, as it is the most likely embryologic error to account for the patient's presentation.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 37-year-old woman comes to the physician because of a 6-month history of weight loss, bloating, and diarrhea. She does not smoke or drink alcohol. Her vital signs are within normal limits. She is 173 cm (5 ft 8 in) tall and weighs 54 kg (120 lb); BMI is 18 kg/m2. Physical examination shows bilateral white spots on the temporal half of the conjunctiva, dry skin, and a hard neck mass in the anterior midline that does not move with swallowing. Urinalysis after a D-xylose meal shows an increase in renal D-xylose excretion. Which of the following is most likely to have prevented this patient's weight loss?",options:{A:"Gluten-free diet",B:"Pancreatic enzyme replacement",C:"Tetracycline therapy",D:"Mesalamine therapy",E:"Lactose-free diet"},response:`The correct answer is **A. Gluten-free diet**. Here's why:

* The patient presents with **malabsorption symptoms** (weight loss, bloating, diarrhea) and **signs of malnutrition** (dry skin, bilateral white spots on the conjunctiva, low BMI).

* The presence of a **hard neck mass in the anterior midline** that does not move with swallowing suggests an **enlarged thyroid gland**, which can be associated with **celiac disease**.

* **Urinalysis after a D-xylose meal** shows an **increase in renal D-xylose excretion**, indicating impaired carbohydrate absorption, consistent with malabsorption.

* A **gluten-free diet** would have prevented the weight loss and malabsorption symptoms in this patient, as celiac disease is an immune-mediated reaction to gluten.

Let's look at why the other options are incorrect:

* **B. Pancreatic enzyme replacement**: Would be used to treat pancreatic insufficiency, not malabsorption due to celiac disease.
* **C. Tetracycline therapy**: Is an antibiotic, not a treatment for malabsorption.
* **D. Mesalamine therapy**: Is used to treat inflammatory bowel disease, not celiac disease.
* **E. Lactose-free diet**: Would be used to treat lactose intolerance, not celiac disease.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:"A mother brings her 3-week-old infant to the pediatrician's office because she is concerned about his feeding habits. He was born without complications and has not had any medical problems up until this time. However, for the past 4 days, he has been fussy, is regurgitating all of his feeds, and his vomit is yellow in color. On physical exam, the child's abdomen is minimally distended but no other abnormalities are appreciated. Which of the following embryologic errors could account for this presentation?",options:{A:"Abnormal migration of ventral pancreatic bud",B:"Complete failure of proximal duodenum to recanalize",C:"Error in neural crest cell migration",D:"Abnormal hypertrophy of the pylorus",E:"Failure of lateral body folds to move ventrally and fuse in the midline"},response:`The correct answer is **D. Abnormal hypertrophy of the pylorus**. Here's why:

* The symptoms described, such as fussiness, regurgitation of feeds, and yellow vomit, are consistent with **pyloric stenosis**, a condition where the pyloric muscle hypertrophies, narrowing the pyloric canal and obstructing the passage of food from the stomach into the small intestine.

* Pyloric stenosis typically presents in the first few weeks of life, and the yellow vomit suggests that the obstruction is distal to the ampulla of Vater, where bile enters the small intestine.

Let's look at why the other options are incorrect:

* **A. Abnormal migration of ventral pancreatic bud**: This could lead to pancreatic anomalies, but not pyloric stenosis.
* **B. Complete failure of proximal duodenum to recanalize**: This would cause duodenal atresia, a different congenital anomaly.
* **C. Error in neural crest cell migration**: This is associated with various congenital anomalies, including Hirschsprung's disease, but not pyloric stenosis.
* **E. Failure of lateral body folds to move ventrally and fuse in the midline**: This would result in a ventral wall defect, such as gastroschisis or omphalocele, which is not related to pyloric stenosis.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"A"},{question:"A 42-year-old woman is in the hospital recovering from a cholecystectomy performed 3 days ago that was complicated by cholangitis. She is being treated with IV piperacillin-tazobactam. She calls the nurse to her room because she says that her heart is racing. She also demands that someone come in to clean the pile of garbage off of the floor because it is attracting flies. Her pulse is 112/min, respiratory rate is 20/min, temperature is 38.0°C (100.4°F), and blood pressure is 150/90 mm Hg. On physical examination, the patient appears sweaty, distressed, and unable to remain still. She is oriented to person, but not place or time. Palpation of the abdomen shows no tenderness, rebound, or guarding. Which of the following is the most likely diagnosis in this patient?",options:{A:"Acute cholangitis",B:"Alcoholic hallucinosis",C:"Delirium tremens",D:"Hepatic encephalopathy",E:"Thyroid storm"},response:`To determine the most likely diagnosis in this patient, we need to carefully evaluate her symptoms and medical history.

The patient presents with tachycardia, diaphoresis, agitation, disorientation to place and time, and paranoid delusions, which are all consistent with delirium. Given her recent cholecystectomy and treatment with piperacillin-tazobactam, it is essential to consider post-operative delirium and medication-induced delirium as potential causes.

Let's analyze the options provided:

A. **Acute cholangitis**: The patient's symptoms are not consistent with a worsening of her cholangitis, and her abdominal examination is unremarkable.

B. **Alcoholic hallucinosis**: While the patient may have a history of alcohol abuse, her symptoms are more consistent with delirium, and hallucinosis typically occurs within 12-24 hours of alcohol withdrawal.

C. **Delirium tremens**: This diagnosis is unlikely without a history of alcohol withdrawal, which is not explicitly mentioned in the patient's history.

D. **Hepatic encephalopathy**: The patient's symptoms are not consistent with hepatic encephalopathy, which typically presents with a more gradual onset of confusion, lethargy, and asterixis.

E. **Thyroid storm**: The patient's symptoms are not consistent with thyroid storm, which typically presents with fever, tachycardia, and cardiac arrhythmias, but not delirium or paranoia.

Given the patient's recent surgery and treatment with piperacillin-tazobactam, it is likely that her delirium is caused by post-operative delirium or medication-induced delirium. Piperacillin-tazobactam can cause delirium as a side effect, especially in patients with pre-existing medical conditions.

Therefore, the most likely diagnosis in this patient is medication-induced delirium, likely caused by the piperacillin-tazobactam.

### Answer
\`\`\`None of the above\`\`\` (However, if I had to choose one, it would be C, but with the caveat that it's unlikely without a history of alcohol withdrawal.)`,prediction:"None of the above",label:"C"},{question:"A 16-year-old girl is brought to the emergency department by her friends who say that she took a whole bottle of her mom’s medication. They do not know which medication it was she ingested. The patient is slipping in and out of consciousness and is unable to offer any history. Her temperature is 39.6°C (103.2°F), the heart rate is 135/min, the blood pressure is 178/98 mm Hg, and the respiratory rate is 16/min. On physical examination, there is significant muscle rigidity without tremor or clonus. Which of the following is the best course of treatment for this patient?",options:{A:"Naloxone",B:"Dantrolene",C:"Fenoldopam",D:"Cyproheptadine",E:"Flumazenil"},response:`Here is a rewritten response that incorporates the feedback:

The patient presents with symptoms of altered mental status, muscle rigidity, hyperthermia, and tachycardia, which are consistent with serotonin syndrome. Although the exact medication ingested is unknown, the patient's symptoms suggest serotonin syndrome as the most likely diagnosis.

Given the patient's symptoms, a thorough diagnostic workup should be performed to rule out other potential causes, including neuroleptic malignant syndrome. While Dantrolene is not typically used to treat serotonin syndrome, Cyproheptadine, a serotonin antagonist, may be considered as a treatment option, especially in mild to moderate cases.

However, the primary focus should be on instituting aggressive supportive measures, such as cooling, sedation, and cardiovascular support, to prevent further complications. These measures should be implemented promptly and should take precedence over pharmacological interventions.

In this case, it's essential to maintain a broad differential diagnosis and be prepared to adapt the treatment plan accordingly as more information becomes available. Therefore, the best course of treatment for this patient is to initiate aggressive supportive measures and consider Cyproheptadine as a treatment option, while continuing to investigate the underlying cause of the patient's symptoms.

### Answer
\`\`\`D\`\`\`

Note: The answer has been changed to Cyproheptadine, as it is a more appropriate treatment option for serotonin syndrome.`,prediction:"D",label:"B"},{question:"You are reviewing raw data from a research study performed at your medical center examining the effectiveness of a novel AIDS screening examination. The study enrolled 250 patients with confirmed AIDS, and 240 of these patients demonstrated a positive screening examination. The control arm of the study enrolled 250 patients who do not have AIDS, and only 5 of these patients tested positive on the novel screening examination. What is the NPV of this novel test?",options:{A:"245 / (245 + 10)",B:"245 / (245 + 5)",C:"240 / (240 + 5)",D:"240 / (240 + 15)",E:"240 / (240 + 10)"},response:`The correct answer is **B. 245 / (245 + 5)**. Here's why:

To calculate the Negative Predictive Value (NPV), we need to know the number of true negatives (patients without AIDS who test negative) and the number of false negatives (patients with AIDS who test negative).

From the question, we know:

* 250 patients with AIDS (cases)
* 240 of these patients tested positive (true positives)
* 10 patients with AIDS tested negative (false negatives)
* 250 patients without AIDS (controls)
* 5 of these patients tested positive (false positives)
* 245 patients without AIDS tested negative (true negatives)

The NPV formula is:

NPV = True Negatives / (True Negatives + False Negatives)

Plugging in the numbers, we get:

NPV = 245 / (245 + 10)
NPV = 245 / 255
NPV ≈ 0.96

So, the correct answer is **B. 245 / (245 + 5)**.

Let's look at why the other options are incorrect:

* **A. 245 / (245 + 10)**: This is close, but the denominator should be 255, not 245 + 10.
* **C. 240 / (240 + 5)**: This uses the number of true positives (240) instead of true negatives (245).
* **D. 240 / (240 + 15)**: This uses the number of true positives (240) instead of true negatives (245) and adds 15 instead of 10 to the denominator.
* **E. 240 / (240 + 10)**: This uses the number of true positives (240) instead of true negatives (245).

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 62-year-old woman presents for a regular check-up. She complains of lightheadedness and palpitations which occur episodically. Past medical history is significant for a myocardial infarction 6 months ago and NYHA class II chronic heart failure. She also was diagnosed with grade I arterial hypertension 4 years ago. Current medications are aspirin 81 mg, atorvastatin 10 mg, enalapril 10 mg, and metoprolol 200 mg daily. Her vital signs are a blood pressure of 135/90 mm Hg, a heart rate of 125/min, a respiratory rate of 14/min, and a temperature of 36.5°C (97.7°F). Cardiopulmonary examination is significant for irregular heart rhythm and decreased S1 intensity. ECG is obtained and is shown in the picture (see image). Echocardiography shows a left ventricular ejection fraction of 39%. Which of the following drugs is the best choice for rate control in this patient?",options:{A:"Atenolol",B:"Verapamil",C:"Diltiazem",D:"Propafenone",E:"Digoxin"},response:`Based on the patient's history of myocardial infarction, NYHA class II chronic heart failure, and grade I arterial hypertension, as well as her current symptoms of lightheadedness and palpitations, it is likely that she is experiencing atrial fibrillation (AFib) with a rapid ventricular response. The ECG and echocardiography findings support this diagnosis.

Given the patient's heart failure and reduced left ventricular ejection fraction (LVEF) of 39%, it is essential to consider medications that can control her heart rate without exacerbating her heart failure.

While Digoxin is often used for rate control in AFib, particularly in patients with heart failure, its role in heart failure is more nuanced. Instead of immediately selecting Digoxin, it is crucial to reassess the patient's current medications, including the optimal use of beta-blockers and calcium channel blockers.

The patient is already taking Metoprolol, a beta-blocker, which is commonly used in patients with heart failure to reduce mortality and morbidity. Before adding or switching to a new medication, it is essential to consider the optimal dosing and titration of Metoprolol to achieve adequate rate control.

If Metoprolol is deemed insufficient for rate control, the addition of a medication like Diltiazem, a non-dihydropyridine calcium channel blocker, could be considered. Diltiazem can help control heart rate without significantly depressing cardiac function, making it a suitable option in patients with heart failure.

In this case, the best choice for rate control would be to optimize the patient's current beta-blocker therapy with Metoprolol or consider the addition of Diltiazem if rate control is still inadequate.

### Answer
\`\`\`Diltiazem (not among the options, but a more suitable choice than Digoxin)\`\`\``,prediction:"Diltiazem (not among the options, but a more suitable choice than Digoxin)",label:"E"},{question:"A 51-year-old woman comes to the physician because of a 1-day history of right flank pain and bloody urine. Over the past 2 weeks, she has also developed progressive lower extremity swelling and a 3-kg (7-lb) weight gain. She has a history of chronic hepatitis B infection, which was diagnosed 10 years ago. She frequently flies from California to New York for business. She appears fatigued. Her pulse is 98/min, respirations are 18/min, and blood pressure is 135/75 mm Hg. Examination shows periorbital edema, a distended abdomen, and 2+ edema of the lower extremities. The lungs are clear to auscultation. A CT scan of the abdomen shows a nodular liver with ascites, a large right kidney with abundant collateral vessels, and a filling defect in the right renal vein. Urinalysis shows 4+ protein, positive glucose, and fatty casts. Which of the following is the most likely underlying cause of this patient's renal vein findings?",options:{A:"Acquired factor VIII deficiency",B:"Loss of antithrombin III",C:"Impaired estrogen degradation",D:"Antiphospholipid antibodies",E:"Paraneoplastic erythropoietin production"},response:`To determine the most likely underlying cause of this patient's renal vein findings, we need to carefully evaluate the symptoms and diagnostic findings.

The patient presents with right flank pain, bloody urine, and a filling defect in the right renal vein, suggesting renal vein thrombosis. The underlying cause is likely hepatic vein obstruction, leading to Budd-Chiari syndrome. This is supported by the CT scan findings of a nodular liver with ascites and a large right kidney with abundant collateral vessels.

While none of the provided options (A-E) directly address the primary underlying cause of the patient's renal vein findings, it is essential to recognize that hepatic vein obstruction is the key factor in this case, leading to Budd-Chiari syndrome.

Therefore, the correct answer is not among the options provided. A more accurate answer would involve recognizing the role of hepatic vein obstruction in Budd-Chiari syndrome.

### Answer
\`\`\`
(No direct answer among the options)`,prediction:null,label:"B"},{question:`A 53-year-old woman with hypertension and hyperlipidemia comes to the physician because of generalized reddening of her skin and itching for the past 2 weeks. Her symptoms occur every evening before bedtime and last for about 30 minutes. Three months ago, atorvastatin was stopped after she experienced progressively worsening neck and back pain. Statin therapy was reinitiated at lower doses 3 weeks ago but had to be stopped again after her musculoskeletal symptoms recurred. Her menses occur irregularly at 2–3 month intervals and last for 3–4 days. She has smoked one pack of cigarettes daily for the past 30 years. Her current medications include lisinopril and niacin. Her brother died of colonic adenocarcinoma, and her father died of small cell lung cancer. She is 169 cm (5 ft 6 in) tall and weighs 83 kg (183 lb); BMI is 29 kg/m2. Her vital signs are within normal limits. Physical examination shows no abnormalities. Serum lipid studies show:
Total cholesterol 247 mg/dL
HDL-cholesterol 39 mg/dL
LDL-cholesterol 172 mg/dL
Triglycerides 152 mg/dL
Which of the following is the most appropriate next step in management?"`,options:{A:"Administer ibuprofen",B:"Measure urine hydroxyindoleacetic acid levels",C:"Measure urine metanephrine levels",D:"Switch lisinopril to hydrochlorothiazide",E:"Switch niacin to fenofibrate"},response:`The correct answer is **E. Switch niacin to fenofibrate**. Here's why:

The patient is experiencing flushing and pruritus, which are common side effects of niacin therapy. The symptoms occur in the evening, which is consistent with niacin's peak effect.

Given the patient's history of hyperlipidemia and the need to manage her lipid levels, switching to fenofibrate, a different lipid-lowering agent, is a reasonable approach.

Let's look at why the other options are incorrect:

* **A. Administer ibuprofen**: While ibuprofen might help with flushing, it doesn't address the underlying cause of the symptoms.
* **B. Measure urine hydroxyindoleacetic acid levels**: This test is used to diagnose carcinoid syndrome, which is not suspected in this patient.
* **C. Measure urine metanephrine levels**: This test is used to diagnose pheochromocytoma, which is not suspected in this patient.
* **D. Switch lisinopril to hydrochlorothiazide**: This change in antihypertensive medication is not likely to address the patient's symptoms.

### Answer
\`\`\`E\`\`\``,prediction:"E",label:"A"},{question:"You are reviewing raw data from a research study performed at your medical center examining the effectiveness of a novel AIDS screening examination. The study enrolled 250 patients with confirmed AIDS, and 240 of these patients demonstrated a positive screening examination. The control arm of the study enrolled 250 patients who do not have AIDS, and only 5 of these patients tested positive on the novel screening examination. What is the NPV of this novel test?",options:{A:"245 / (245 + 10)",B:"245 / (245 + 5)",C:"240 / (240 + 5)",D:"240 / (240 + 15)",E:"240 / (240 + 10)"},response:`The correct answer is **B. 245 / (245 + 5)**. Here's why:

To calculate the Negative Predictive Value (NPV), we need to know the number of true negatives (patients without AIDS who test negative) and the number of false negatives (patients with AIDS who test negative).

From the question, we know:

* 250 patients with AIDS (cases)
* 240 of these patients tested positive (true positives)
* 10 patients with AIDS tested negative (false negatives)
* 250 patients without AIDS (controls)
* 5 of these patients tested positive (false positives)
* 245 patients without AIDS tested negative (true negatives)

The NPV formula is:

NPV = True Negatives / (True Negatives + False Negatives)

Plugging in the numbers, we get:

NPV = 245 / (245 + 10)
NPV = 245 / 255
NPV ≈ 0.96

So, the correct answer is **B. 245 / (245 + 5)**.

Let's look at why the other options are incorrect:

* **A. 245 / (245 + 10)**: This is close, but the denominator should be 255, not 245 + 10.
* **C. 240 / (240 + 5)**: This uses the number of true positives (240) instead of true negatives (245).
* **D. 240 / (240 + 15)**: This uses the number of true positives (240) instead of true negatives (245) and adds 15 instead of 10 to the denominator.
* **E. 240 / (240 + 10)**: This uses the number of true positives (240) instead of true negatives (245).

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 51-year-old woman comes to the physician because of a 1-day history of right flank pain and bloody urine. Over the past 2 weeks, she has also developed progressive lower extremity swelling and a 3-kg (7-lb) weight gain. She has a history of chronic hepatitis B infection, which was diagnosed 10 years ago. She frequently flies from California to New York for business. She appears fatigued. Her pulse is 98/min, respirations are 18/min, and blood pressure is 135/75 mm Hg. Examination shows periorbital edema, a distended abdomen, and 2+ edema of the lower extremities. The lungs are clear to auscultation. A CT scan of the abdomen shows a nodular liver with ascites, a large right kidney with abundant collateral vessels, and a filling defect in the right renal vein. Urinalysis shows 4+ protein, positive glucose, and fatty casts. Which of the following is the most likely underlying cause of this patient's renal vein findings?",options:{A:"Acquired factor VIII deficiency",B:"Loss of antithrombin III",C:"Impaired estrogen degradation",D:"Antiphospholipid antibodies",E:"Paraneoplastic erythropoietin production"},response:`To determine the most likely underlying cause of this patient's renal vein findings, we need to carefully evaluate the symptoms and diagnostic findings.

The patient presents with right flank pain, bloody urine, and a filling defect in the right renal vein, suggesting renal vein thrombosis. The underlying cause is likely hepatic vein obstruction, leading to Budd-Chiari syndrome. This is supported by the CT scan findings of a nodular liver with ascites and a large right kidney with abundant collateral vessels.

While none of the provided options (A-E) directly address the primary underlying cause of the patient's renal vein findings, it is essential to recognize that hepatic vein obstruction is the key factor in this case, leading to Budd-Chiari syndrome.

Therefore, the correct answer is not among the options provided. A more accurate answer would involve recognizing the role of hepatic vein obstruction in Budd-Chiari syndrome.

### Answer
\`\`\`
(No direct answer among the options)`,prediction:null,label:"B"},{question:"A 43-year-old woman presents to the emergency department complaining of palpitations, dry cough, and shortness of breath for 1 week. She immigrated to the United States from Korea at the age of 20. She says that her heart is racing and she has never felt these symptoms before. Her cough is dry and is associated with shortness of breath that occurs with minimal exertion. Her past medical history is otherwise unremarkable. She has no allergies and is not currently taking any medications. She is a nonsmoker and an occasional drinker. She denies illicit drug use. Her blood pressure is 100/65 mm Hg, pulse is 76/min, respiratory rate is 23/min, and temperature is 36.8°C (98.2°F). Her physical examination is significant for bibasilar lung crackles and a non-radiating, low-pitched, mid-diastolic rumbling murmur best heard at the apical region. In addition, she has jugular vein distention and bilateral pitting edema in her lower extremities. Which of the following best describes the infectious agent that led to this patient’s condition?",options:{A:"A bacterium that induces partial lysis of red cells with hydrogen peroxide",B:"A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin",C:"A bacterium that induces heme degradation of the red cells of a blood agar plate",D:"A bacterium that does not lyse red cells",E:"A bacterium that requires an anaerobic environment to grow properly"},response:`I understand the feedback and will revise my response accordingly.

The correct answer is indeed **D. A bacterium that does not lyse red cells**. Here's a revised explanation:

The patient's symptoms and physical examination are consistent with **infective endocarditis**, which is a serious infection of the heart valves. The patient's immigrant status from Korea, where **Streptococcus viridans** is a common cause of infective endocarditis, further supports this diagnosis.

The physical examination findings, including bibasilar lung crackles, jugular vein distention, and bilateral pitting edema, suggest **congestive heart failure**, which is a common complication of infective endocarditis. The mid-diastolic rumbling murmur at the apical region is consistent with **mitral stenosis**, another complication of infective endocarditis.

**Streptococcus viridans** is a type of **alpha-hemolytic streptococcus**, which does not lyse red cells on a blood agar plate. This characteristic is essential in identifying the bacterium.

While other diagnoses, such as pneumonia, pulmonary embolism, or heart failure, should be considered, the patient's symptoms and physical examination findings are most consistent with infective endocarditis caused by **Streptococcus viridans**.

The other options can be eliminated based on their characteristics:

* **A. A bacterium that induces partial lysis of red cells with hydrogen peroxide**: Describes **Streptococcus pneumoniae**, which is not typically associated with infective endocarditis.
* **B. A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin**: Describes **Streptococcus pyogenes**, which is not typically associated with infective endocarditis.
* **C. A bacterium that induces heme degradation of the red cells of a blood agar plate**: Describes **Haemophilus influenzae**, which is not typically associated with infective endocarditis.
* **E. A bacterium that requires an anaerobic environment to grow properly**: Describes anaerobic bacteria, such as **Bacteroides fragilis**, which are not typically associated with infective endocarditis.

### Answer
\`\`\`D\`\`\`

I hope this revised response addresses the feedback and provides a more comprehensive explanation for the correct answer.`,prediction:"D",label:"B"},{question:"A new screening test utilizing a telemedicine approach to diagnosing diabetic retinopathy has been implemented in a diabetes clinic. An ophthalmologist’s exam was also performed on all patients as the gold standard for diagnosis. In a pilot study of 500 patients, the screening test detected the presence of diabetic retinopathy in 250 patients. Ophthalmologist exam confirmed a diagnosis of diabetic retinopathy in 200 patients who tested positive in the screening test, as well as 10 patients who tested negative in the screening test. What is the sensitivity, specificity, positive predictive value, and negative predictive value of the screening test?",options:{A:"Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%",B:"Sensitivity = 83%, Specificity = 95%, PPV = 96%, NPV = 80%",C:"Sensitivity = 95%, Specificity = 83%, PPV = 96%, NPV = 80%",D:"Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%",E:"Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96%"},response:`The correct answer is **A. Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%**. Here's why:

Let's break down the information:

* **True Positives (TP):** 200 patients who tested positive in the screening test and had diabetic retinopathy confirmed by the ophthalmologist's exam.
* **False Positives (FP):** 50 patients who tested positive in the screening test but did not have diabetic retinopathy confirmed by the ophthalmologist's exam.
* **True Negatives (TN):** 240 patients who tested negative in the screening test and did not have diabetic retinopathy confirmed by the ophthalmologist's exam.
* **False Negatives (FN):** 10 patients who tested negative in the screening test but had diabetic retinopathy confirmed by the ophthalmologist's exam.

Now, let's calculate the required values:

* **Sensitivity:** TP / (TP + FN) = 200 / (200 + 10) = 0.83 or 83%
* **Specificity:** TN / (TN + FP) = 240 / (240 + 50) = 0.95 or 95%
* **Positive Predictive Value (PPV):** TP / (TP + FP) = 200 / (200 + 50) = 0.80 or 80%
* **Negative Predictive Value (NPV):** TN / (TN + FN) = 240 / (240 + 10) = 0.96 or 96%

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"E"},{question:"A 62-year-old woman presents for a regular check-up. She complains of lightheadedness and palpitations which occur episodically. Past medical history is significant for a myocardial infarction 6 months ago and NYHA class II chronic heart failure. She also was diagnosed with grade I arterial hypertension 4 years ago. Current medications are aspirin 81 mg, atorvastatin 10 mg, enalapril 10 mg, and metoprolol 200 mg daily. Her vital signs are a blood pressure of 135/90 mm Hg, a heart rate of 125/min, a respiratory rate of 14/min, and a temperature of 36.5°C (97.7°F). Cardiopulmonary examination is significant for irregular heart rhythm and decreased S1 intensity. ECG is obtained and is shown in the picture (see image). Echocardiography shows a left ventricular ejection fraction of 39%. Which of the following drugs is the best choice for rate control in this patient?",options:{A:"Atenolol",B:"Verapamil",C:"Diltiazem",D:"Propafenone",E:"Digoxin"},response:`Based on the patient's history of myocardial infarction, NYHA class II chronic heart failure, and grade I arterial hypertension, as well as her current symptoms of lightheadedness and palpitations, it is likely that she is experiencing atrial fibrillation (AFib) with a rapid ventricular response. The ECG and echocardiography findings support this diagnosis.

Given the patient's heart failure and reduced left ventricular ejection fraction (LVEF) of 39%, it is essential to consider medications that can control her heart rate without exacerbating her heart failure.

While Digoxin is often used for rate control in AFib, particularly in patients with heart failure, its role in heart failure is more nuanced. Instead of immediately selecting Digoxin, it is crucial to reassess the patient's current medications, including the optimal use of beta-blockers and calcium channel blockers.

The patient is already taking Metoprolol, a beta-blocker, which is commonly used in patients with heart failure to reduce mortality and morbidity. Before adding or switching to a new medication, it is essential to consider the optimal dosing and titration of Metoprolol to achieve adequate rate control.

If Metoprolol is deemed insufficient for rate control, the addition of a medication like Diltiazem, a non-dihydropyridine calcium channel blocker, could be considered. Diltiazem can help control heart rate without significantly depressing cardiac function, making it a suitable option in patients with heart failure.

In this case, the best choice for rate control would be to optimize the patient's current beta-blocker therapy with Metoprolol or consider the addition of Diltiazem if rate control is still inadequate.

### Answer
\`\`\`Diltiazem (not among the options, but a more suitable choice than Digoxin)\`\`\``,prediction:"Diltiazem (not among the options, but a more suitable choice than Digoxin)",label:"E"},{question:"A researcher is studying the properties of an enzyme that adds phosphate groups to glucose. She discovers that the enzyme is present in most body tissues and is located in the cytoplasm of the cells expressing the enzyme. She decides to mix this enzyme under subphysiologic conditions with varying levels of glucose in order to determine the kinetic properties of the enzyme. Specifically, she adds increasing levels of glucose at a saturating concentration of phosphate and sees that the rate at which glucose becomes phosphorylated gets faster at higher levels of glucose. She observes that this rate approaches a maximum speed and calls this speed Y. She then determines the concentration of glucose that is needed to make the enzyme function at half the speed Y and calls this concentration X. Which of the following is most likely true about the properties of this enzyme?",options:{A:"High X and high Y",B:"High X and low Y",C:"Low X and high Y",D:"Low X and infinite Y",E:"Low X and low Y"},response:`The correct answer is **C. Low X and high Y**. Here's why:

The researcher is studying the kinetics of an enzyme that phosphorylates glucose. She observes that the rate of phosphorylation increases with increasing glucose concentrations, but approaches a maximum speed (Y) at high glucose concentrations. This suggests that the enzyme is saturable, meaning that it has a limited capacity to phosphorylate glucose.

The concentration of glucose required to achieve half the maximum speed (X) is a measure of the enzyme's affinity for glucose. A low X value indicates that the enzyme has a high affinity for glucose, meaning it can bind and phosphorylate glucose efficiently even at low concentrations.

A high Y value indicates that the enzyme has a high maximum velocity, meaning it can phosphorylate glucose quickly when saturated with substrate.

Let's look at why the other options are incorrect:

* **A. High X and high Y**: This would suggest that the enzyme has a low affinity for glucose (high X) but can phosphorylate it quickly (high Y), which is unlikely.
* **B. High X and low Y**: This would suggest that the enzyme has a low affinity for glucose (high X) and phosphorylates it slowly (low Y), which is possible but not supported by the data.
* **D. Low X and infinite Y**: This is not possible, as enzymes have a finite maximum velocity.
* **E. Low X and low Y**: This would suggest that the enzyme has a high affinity for glucose (low X) but phosphorylates it slowly (low Y), which is not supported by the data.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"A 51-year-old woman comes to the physician because of a 1-day history of right flank pain and bloody urine. Over the past 2 weeks, she has also developed progressive lower extremity swelling and a 3-kg (7-lb) weight gain. She has a history of chronic hepatitis B infection, which was diagnosed 10 years ago. She frequently flies from California to New York for business. She appears fatigued. Her pulse is 98/min, respirations are 18/min, and blood pressure is 135/75 mm Hg. Examination shows periorbital edema, a distended abdomen, and 2+ edema of the lower extremities. The lungs are clear to auscultation. A CT scan of the abdomen shows a nodular liver with ascites, a large right kidney with abundant collateral vessels, and a filling defect in the right renal vein. Urinalysis shows 4+ protein, positive glucose, and fatty casts. Which of the following is the most likely underlying cause of this patient's renal vein findings?",options:{A:"Acquired factor VIII deficiency",B:"Loss of antithrombin III",C:"Impaired estrogen degradation",D:"Antiphospholipid antibodies",E:"Paraneoplastic erythropoietin production"},response:`To determine the most likely underlying cause of this patient's renal vein findings, we need to carefully evaluate the symptoms and diagnostic findings.

The patient presents with right flank pain, bloody urine, and a filling defect in the right renal vein, suggesting renal vein thrombosis. The underlying cause is likely hepatic vein obstruction, leading to Budd-Chiari syndrome. This is supported by the CT scan findings of a nodular liver with ascites and a large right kidney with abundant collateral vessels.

Let's analyze the options provided:

A. **Acquired factor VIII deficiency**: Not typically associated with renal vein thrombosis.

B. **Loss of antithrombin III**: While antithrombin III depletion can increase the risk of thrombosis in patients with liver disease, it is not the primary cause of Budd-Chiari syndrome.

C. **Impaired estrogen degradation**: Not directly related to renal vein thrombosis.

D. **Antiphospholipid antibodies**: May cause thrombosis, but not specifically associated with hepatic vein obstruction.

E. **Paraneoplastic erythropoietin production**: Not related to renal vein thrombosis or Budd-Chiari syndrome.

Considering the patient's symptoms, diagnostic findings, and the underlying diagnosis of Budd-Chiari syndrome, the most likely underlying cause of the patient's renal vein findings is **hepatic vein obstruction**. While antithrombin III depletion may contribute to the development of thrombosis, it is not the primary cause in this case.

Therefore, none of the provided options (A-E) directly address the primary underlying cause of the patient's renal vein findings. A more accurate answer would involve recognizing the role of hepatic vein obstruction in Budd-Chiari syndrome.

### Answer
\`\`\`
(No direct answer among the options)`,prediction:null,label:"B"},{question:"A 43-year-old woman presents to the emergency department complaining of palpitations, dry cough, and shortness of breath for 1 week. She immigrated to the United States from Korea at the age of 20. She says that her heart is racing and she has never felt these symptoms before. Her cough is dry and is associated with shortness of breath that occurs with minimal exertion. Her past medical history is otherwise unremarkable. She has no allergies and is not currently taking any medications. She is a nonsmoker and an occasional drinker. She denies illicit drug use. Her blood pressure is 100/65 mm Hg, pulse is 76/min, respiratory rate is 23/min, and temperature is 36.8°C (98.2°F). Her physical examination is significant for bibasilar lung crackles and a non-radiating, low-pitched, mid-diastolic rumbling murmur best heard at the apical region. In addition, she has jugular vein distention and bilateral pitting edema in her lower extremities. Which of the following best describes the infectious agent that led to this patient’s condition?",options:{A:"A bacterium that induces partial lysis of red cells with hydrogen peroxide",B:"A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin",C:"A bacterium that induces heme degradation of the red cells of a blood agar plate",D:"A bacterium that does not lyse red cells",E:"A bacterium that requires an anaerobic environment to grow properly"},response:`The correct answer is **D. A bacterium that does not lyse red cells**. Here's why:

The patient's symptoms and physical examination are consistent with **infective endocarditis**, specifically **Streptococcus viridans** endocarditis.

* The patient is an immigrant from Korea, where **Streptococcus viridans** is a common cause of infective endocarditis.
* The physical examination findings, including bibasilar lung crackles, jugular vein distention, and bilateral pitting edema, suggest **congestive heart failure**.
* The mid-diastolic rumbling murmur at the apical region is consistent with **mitral stenosis**.

**Streptococcus viridans** is a type of **alpha-hemolytic streptococcus**, which does not lyse red cells on a blood agar plate.

Let's look at why the other options are incorrect:

* **A. A bacterium that induces partial lysis of red cells with hydrogen peroxide**: Describes **Streptococcus pneumoniae**, which is not typically associated with infective endocarditis.
* **B. A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin**: Describes **Streptococcus pyogenes**, which is not typically associated with infective endocarditis.
* **C. A bacterium that induces heme degradation of the red cells of a blood agar plate**: Describes **Haemophilus influenzae**, which is not typically associated with infective endocarditis.
* **E. A bacterium that requires an anaerobic environment to grow properly**: Describes anaerobic bacteria, such as **Bacteroides fragilis**, which are not typically associated with infective endocarditis.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"B"},{question:`A previously healthy 10-year-old boy is brought to the emergency room by his mother 5 hours after the onset of abdominal pain and nausea. Over the past 2 weeks, he has also had progressive abdominal pain and a 4-kg (8.8-lb) weight loss. The mother reports that her son has been drinking more water than usual during this period. Last week he wet his bed three times despite being completely toilet-trained since 3 years of age. His temperature is 37.8°C (100°F), pulse is 128/min, respirations are 35/min, and blood pressure is 95/55 mm Hg. He appears lethargic. Physical examination shows deep and labored breathing and dry mucous membranes. The abdomen is soft, and there is diffuse tenderness to palpation with no guarding or rebound. Serum laboratory studies show:
Na+ 133 mEq/L
K+ 5.9 mEq/L
Cl- 95 mEq/L
HCO3- 13 mEq/L
Urea nitrogen 25 mg/dL
Creatinine 1.0 mg/dL
Urine dipstick is positive for ketones and glucose. Further evaluation is most likely to reveal which of the following?"`,options:{A:"Decreased total body potassium",B:"Increased total body sodium",C:"Increased arterial pCO2",D:"Hypervolemia",E:"Serum glucose concentration > 600 mg/dL"},response:`The correct answer is **E. Serum glucose concentration > 600 mg/dL**. Here's why:

The patient's symptoms, physical examination, and laboratory results are consistent with **Diabetic Ketoacidosis (DKA)**, a life-threatening complication of diabetes mellitus.

* The patient's history of polydipsia (excessive thirst), polyuria (frequent urination), and nocturia (bedwetting) suggests uncontrolled diabetes.
* The laboratory results show:
	+ Hyperglycemia (elevated glucose levels, although the exact value is not provided)
	+ Metabolic acidosis (low HCO3- and high anion gap)
	+ Ketonuria (presence of ketones in the urine)
	+ Dehydration (elevated urea nitrogen and creatinine levels)

Let's look at why the other options are incorrect:

* **A. Decreased total body potassium:** While potassium levels may be low in DKA, total body potassium is often normal or even elevated due to the body's response to acidosis.
* **B. Increased total body sodium:** DKA is often associated with dehydration and sodium depletion, not excess.
* **C. Increased arterial pCO2:** DKA is characterized by respiratory compensation for metabolic acidosis, resulting in deep and labored breathing to blow off CO2, which would decrease pCO2, not increase it.
* **D. Hypervolemia:** DKA is often associated with dehydration, not fluid overload.

### Answer
\`\`\`E\`\`\``,prediction:"E",label:"A"},{question:"A mother brings her 3-week-old infant to the pediatrician's office because she is concerned about his feeding habits. He was born without complications and has not had any medical problems up until this time. However, for the past 4 days, he has been fussy, is regurgitating all of his feeds, and his vomit is yellow in color. On physical exam, the child's abdomen is minimally distended but no other abnormalities are appreciated. Which of the following embryologic errors could account for this presentation?",options:{A:"Abnormal migration of ventral pancreatic bud",B:"Complete failure of proximal duodenum to recanalize",C:"Error in neural crest cell migration",D:"Abnormal hypertrophy of the pylorus",E:"Failure of lateral body folds to move ventrally and fuse in the midline"},response:`Upon re-examining the question and considering the feedback, I realized that my initial response was partially correct, but I overlooked some crucial details.

The correct answer is still related to pyloric stenosis, but it's not solely due to **D. Abnormal hypertrophy of the pylorus**. The presence of yellow vomit in the infant's symptoms suggests that there might be an additional component to the condition, such as a partial intestinal obstruction or another anomaly that's contributing to the symptoms.

A more comprehensive approach would be to consider the possibility of **Malrotation with midgut volvulus**, which can present with similar symptoms, including yellow vomit. Malrotation occurs when the intestines do not rotate correctly during fetal development, leading to a twisting of the intestines that can cause obstruction and vomiting.

Therefore, the correct answer is not among the options provided, but rather a combination of pyloric stenosis and malrotation with midgut volvulus.

### Answer
None of the above (Malrotation with midgut volvulus)`,prediction:null,label:"A"},{question:"A 51-year-old woman comes to the physician because of a 1-day history of right flank pain and bloody urine. Over the past 2 weeks, she has also developed progressive lower extremity swelling and a 3-kg (7-lb) weight gain. She has a history of chronic hepatitis B infection, which was diagnosed 10 years ago. She frequently flies from California to New York for business. She appears fatigued. Her pulse is 98/min, respirations are 18/min, and blood pressure is 135/75 mm Hg. Examination shows periorbital edema, a distended abdomen, and 2+ edema of the lower extremities. The lungs are clear to auscultation. A CT scan of the abdomen shows a nodular liver with ascites, a large right kidney with abundant collateral vessels, and a filling defect in the right renal vein. Urinalysis shows 4+ protein, positive glucose, and fatty casts. Which of the following is the most likely underlying cause of this patient's renal vein findings?",options:{A:"Acquired factor VIII deficiency",B:"Loss of antithrombin III",C:"Impaired estrogen degradation",D:"Antiphospholipid antibodies",E:"Paraneoplastic erythropoietin production"},response:`To determine the most likely underlying cause of this patient's renal vein findings, we need to carefully evaluate the symptoms and diagnostic findings.

The patient presents with right flank pain, bloody urine, and a filling defect in the right renal vein, suggesting renal vein thrombosis. The underlying cause is likely hepatic vein obstruction, leading to Budd-Chiari syndrome. This is supported by the CT scan findings of a nodular liver with ascites and a large right kidney with abundant collateral vessels.

While none of the provided options (A-E) directly address the primary underlying cause of the patient's renal vein findings, it is essential to recognize that hepatic vein obstruction is the key factor in this case, leading to Budd-Chiari syndrome.

Therefore, the correct answer is not among the options provided. A more accurate answer would involve recognizing the role of hepatic vein obstruction in Budd-Chiari syndrome.

### Answer
\`\`\`
(No direct answer among the options)`,prediction:null,label:"B"},{question:"A mother brings her 3-week-old infant to the pediatrician's office because she is concerned about his feeding habits. He was born without complications and has not had any medical problems up until this time. However, for the past 4 days, he has been fussy, is regurgitating all of his feeds, and his vomit is yellow in color. On physical exam, the child's abdomen is minimally distended but no other abnormalities are appreciated. Which of the following embryologic errors could account for this presentation?",options:{A:"Abnormal migration of ventral pancreatic bud",B:"Complete failure of proximal duodenum to recanalize",C:"Error in neural crest cell migration",D:"Abnormal hypertrophy of the pylorus",E:"Failure of lateral body folds to move ventrally and fuse in the midline"},response:`The correct answer is **B. Complete failure of proximal duodenum to recanalize**. Here's why:

* The infant's presentation of **regurgitation of feeds, fussiness, and yellow vomit** suggests **gastroesophageal reflux**.

* The key to this question is the **embryologic origin of the duodenum**, which forms from the **lateral body folds**.

* A complete failure of the **proximal duodenum to recanalize** leads to a condition where the duodenum is not formed properly, resulting in a **duodenal atresia** or **duodenal stenosis**.

* This condition is characterized by **gastroesophageal reflux, regurgitation of feeds, and yellow vomit** due to the obstruction in the duodenum.

Let's look at why the other options are incorrect:

* **A. Abnormal migration of ventral pancreatic bud**: This would lead to pancreatic anomalies, not gastrointestinal obstruction.
* **C. Error in neural crest cell migration**: This would affect the development of various structures, including the enteric nervous system, but is not directly related to the duodenum's formation.
* **D. Abnormal hypertrophy of the pylorus**: This would lead to pyloric stenosis, a condition where the pylorus is abnormally thickened, causing obstruction.
* **E. Failure of lateral body folds to move ventrally and fuse in the midline**: This would lead to abdominal wall defects, such as omphalocele or gastroschisis.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"A"},{question:"A 60-year-old man comes to the physician for an examination prior to a scheduled cholecystectomy. He has hypertension treated with hydrochlorothiazide. His mother had chronic granulomatous disease of the lung. He works in a glass manufacturing plant. He has smoked two packs of cigarettes daily for 38 years. His vital signs are within normal limits. Examination shows no abnormalities. Laboratory studies are within the reference range. An x-ray of the chest is shown. Which of the following is the most appropriate next step in management?",options:{A:"Perform arterial blood gas analysis",B:"Perform CT-guided biopsy",C:"Perform diffusion capacity of the lung for carbon monoxide",D:"Measure angiotensin-converting enzyme",E:"Request previous chest x-ray"},response:`The correct answer is **C. Perform diffusion capacity of the lung for carbon monoxide (DLCO)**. Here's why:

The patient has a significant smoking history and a family history of chronic granulomatous disease, which is suggestive of **sarcoidosis**. The patient's occupation in a glass manufacturing plant may also be relevant, as **sarcoidosis** is more common in certain occupational groups, including workers in glass manufacturing.

The patient's chest x-ray is not described, but given the clinical context, **DLCO** is a critical test to evaluate the patient's lung function and to assess the possibility of **sarcoidosis**.

Let's look at why the other options are incorrect:

* **A. Perform arterial blood gas analysis**: This may be necessary if there is evidence of respiratory failure or if the patient has symptoms suggestive of respiratory acidosis or alkalosis, but it is not the next step in management given the information provided.
* **B. Perform CT-guided biopsy**: A biopsy may be necessary if the diagnosis of sarcoidosis is uncertain or if there are signs and symptoms of advanced disease, but it is not the next step in management given the information provided.
* **D. Measure angiotensin-converting enzyme (ACE)**: Elevated ACE levels are sometimes found in patients with sarcoidosis, but this is not a diagnostic test and is not the next step in management.
* **E. Request previous chest x-ray**: While a previous chest x-ray may be useful in assessing the progression of disease, it is not the next step in management given the information provided.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"A 52-year-old man presents for a routine checkup. Past medical history is remarkable for stage 1 systemic hypertension and hepatitis A infection diagnosed 10 years ago. He takes aspirin, rosuvastatin, enalapril daily, and a magnesium supplement every once in a while. He is planning to visit Ecuador for a week-long vacation and is concerned about malaria prophylaxis before his travel. The physician advised taking 1 primaquine pill every day while he is there and for 7 consecutive days after leaving Ecuador. On the third day of his trip, the patient develops an acute onset headache, dizziness, shortness of breath, and fingertips and toes turning blue. His blood pressure is 135/80 mm Hg, heart rate is 94/min, respiratory rate is 22/min, temperature is 36.9℃ (98.4℉), and blood oxygen saturation is 97% in room air. While drawing blood for his laboratory workup, the nurse notes that his blood has a chocolate brown color. Which of the following statements best describes the etiology of this patient’s most likely condition?",options:{A:"The patient’s condition is due to consumption of water polluted with nitrates.",B:"This condition resulted from primaquine overdose.",C:"The patient had pre-existing liver damage caused by viral hepatitis.",D:"The condition developed because of his concomitant use of primaquine and magnesium supplement.",E:"It is a type B adverse drug reaction."},response:`To determine the most likely etiology of the patient's condition, we need to carefully evaluate the potential causes based on his clinical presentation and history.

The patient presents with an acute onset of headache, dizziness, shortness of breath, and cyanosis (fingertips and toes turning blue), which are suggestive of **methemoglobinemia**, a condition characterized by the accumulation of methemoglobin, a form of hemoglobin that cannot bind oxygen.

The **chocolate brown color of the blood** is consistent with methemoglobinemia.

Let's analyze the options provided:

A. **The patient’s condition is due to consumption of water polluted with nitrates**: Nitrates can also cause methemoglobinemia. Given that the patient was taking primaquine for malaria prophylaxis and exhibited symptoms consistent with methemoglobinemia, this option should be considered but is less likely.

B. **This condition resulted from primaquine overdose**: This is the most likely etiology. The patient was advised to take 1 pill of primaquine daily while in Ecuador and for 7 consecutive days after leaving. However, the normal dose for malaria prophylaxis is typically 30 mg of primaquine base per week. Given the patient's higher dose and symptoms consistent with methemoglobinemia, primaquine overdose is the most likely cause of his condition.

C. **The patient had pre-existing liver damage caused by viral hepatitis**: While hepatitis A can cause liver damage, this would not typically cause methemoglobinemia.

D. **The condition developed because of his concomitant use of primaquine and magnesium supplement**: While magnesium can interact with some medications, there is no known interaction that would cause methemoglobinemia.

E. **It is a type B adverse drug reaction**: A type B reaction is an unpredictable, idiosyncratic reaction that occurs with a medication. Given the patient's higher dose of primaquine, this is a possible explanation but is less likely than primaquine overdose.

Considering the patient's clinical presentation and history, the most likely etiology for this patient’s condition is the higher dose of primaquine.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"E"},{question:"A 53-year-old woman comes to the physician in February because of a 1-day history of fever, chills, headache, and dry cough. She also reports malaise and generalized muscle aches. She works as a teacher at a local high school, where there was recently an outbreak of influenza. She has a history of intermittent asthma, for which she takes albuterol as needed. She declined the influenza vaccine offered in the fall because her sister told her that a friend developed a flulike illness after receiving the vaccine. She is worried about possibly becoming ill and cannot afford to miss work. Her temperature is 37.9°C (100.3°F), heart rate is 58/min, and her respirations are 12/min. Physical examination is unremarkable. Her hemoglobin concentration is 14.5 g/dL, leukocyte count is 9,400/mm3, and platelet count is 280,000/mm3. In addition to analgesia, which of the following is the most appropriate next step in management?",options:{A:"Supportive therapy only",B:"Amantadine",C:"Inactivated influenza vaccine",D:"Oseltamivir",E:"Live attenuated influenza vaccine"},response:`The correct answer is **D. Oseltamivir**. However, there are a few points to consider that could enhance the analysis:

1. **Asthma Severity:**
   - The patient has intermittent asthma, but her current symptoms do not necessarily indicate an asthma exacerbation.

2. **Antiviral Treatment Timing:**
   - The patient's symptoms started 1 day ago. According to the guidelines, initiating antiviral therapy within 48 hours of symptom onset is recommended.

3. **Consideration of Antiviral Resistance:**
   - While oseltamivir is still used to treat influenza, it is worth noting that there have been reports of oseltamivir-resistant influenza A(H1N1)pdm09 strains.

4. **Other Treatment Options:**
   - The patient's symptoms are mild, and she is otherwise healthy. Other antiviral medications, such as zanamivir, may also be effective in treating her influenza.

5. **Vaccination and Prevention:**
   - The patient's decision to decline the influenza vaccine due to concerns about side effects is a common issue.

Considering the patient's symptoms started 1 day ago, and she is otherwise healthy, the most appropriate next step in management, in addition to analgesia, is to **initiate supportive therapy only** until the exact timing of symptom onset is confirmed.

If her symptoms started within the past 48 hours, oseltamivir would be an appropriate treatment option.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"D"},{question:"A 68-year-old man presents to the emergency department with leg pain. He states that the pain started suddenly while he was walking outside. The patient has a past medical history of diabetes, hypertension, obesity, and atrial fibrillation. His temperature is 99.3°F (37.4°C), blood pressure is 152/98 mmHg, pulse is 97/min, respirations are 15/min, and oxygen saturation is 99% on room air. Physical exam is notable for a cold and pale left leg. The patient’s sensation is markedly diminished in the left leg when compared to the right, and his muscle strength is 1/5 in his left leg. Which of the following is the best next step in management?",options:{A:"CT angiogram",B:"Graded exercise and aspirin",C:"Heparin drip",D:"Surgical thrombectomy",E:"Tissue plasminogen activator"},response:`The correct answer is **A. CT angiogram**. Here's why:

The patient presents with **sudden onset leg pain**, **cold and pale skin**, and **diminished sensation and muscle strength** in the affected leg, which are classic symptoms of **acute limb ischemia** (ALI). Given the patient's history of atrial fibrillation, which increases the risk of **cardioembolic stroke** and **peripheral embolism**, a **CT angiogram** is the best next step to rapidly diagnose or exclude a **peripheral arterial embolism**.

Let's look at why the other options are incorrect:

* **B. Graded exercise and aspirin**: This is a treatment approach for intermittent claudication, not acute limb ischemia.
* **C. Heparin drip**: While anticoagulation may be necessary, a CT angiogram is needed to determine the best course of treatment (e.g., thrombolysis, embolectomy).
* **D. Surgical thrombectomy**: This is a treatment option for ALI, but the patient should first undergo imaging to confirm the diagnosis and assess the extent of the thrombosis.
* **E. Tissue plasminogen activator**: Thrombolysis may be considered after a CT angiogram confirms a peripheral embolism, but it's not the best next step without imaging.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"C"},{question:"A new screening test utilizing a telemedicine approach to diagnosing diabetic retinopathy has been implemented in a diabetes clinic. An ophthalmologist’s exam was also performed on all patients as the gold standard for diagnosis. In a pilot study of 500 patients, the screening test detected the presence of diabetic retinopathy in 250 patients. Ophthalmologist exam confirmed a diagnosis of diabetic retinopathy in 200 patients who tested positive in the screening test, as well as 10 patients who tested negative in the screening test. What is the sensitivity, specificity, positive predictive value, and negative predictive value of the screening test?",options:{A:"Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%",B:"Sensitivity = 83%, Specificity = 95%, PPV = 96%, NPV = 80%",C:"Sensitivity = 95%, Specificity = 83%, PPV = 96%, NPV = 80%",D:"Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%",E:"Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96%"},response:`To calculate the sensitivity, specificity, positive predictive value (PPV), and negative predictive value (NPV) of the screening test, we need to use the following formulas:

* Sensitivity = True Positives / (True Positives + False Negatives)
* Specificity = True Negatives / (True Negatives + False Positives)
* PPV = True Positives / (True Positives + False Positives)
* NPV = True Negatives / (True Negatives + False Negatives)

From the given data:

* True Positives = 200 (patients who tested positive in the screening test and had diabetic retinopathy confirmed by ophthalmologist exam)
* False Negatives = 50 (patients who tested negative in the screening test but had diabetic retinopathy confirmed by ophthalmologist exam)
* True Negatives = 400 (patients who tested negative in the screening test and did not have diabetic retinopathy confirmed by ophthalmologist exam)
* False Positives = 0 (patients who tested positive in the screening test but did not have diabetic retinopathy confirmed by ophthalmologist exam)

Now, let's calculate the values:

* Sensitivity = 200 / (200 + 50) = 200 / 250 = 0.8 = 80%
* Specificity = 400 / (400 + 0) = 400 / 400 = 1 = 100% (Note: Specificity is 100% because there are no false positives in the study)
* PPV = 200 / (200 + 0) = 200 / 200 = 1 = 100% (Note: PPV is 100% because there are no false positives in the study)
* NPV = 400 / (400 + 50) = 400 / 450 = 0.889 = 88.9%

However, we can see that none of the options directly matches the calculated values. Let's re-evaluate the options based on our calculations:

* Since Specificity is 100% (no false positives), we can re-evaluate the options. The correct answer should have Specificity = 100%.
* PPV should be close to 100% as well since there are no false positives.
* NPV should be around 88.9% based on the calculations.

With these values in mind, let's re-evaluate the options:

* **A. Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%**: This option is incorrect because Specificity is not 100%.
* **B. Sensitivity = 83%, Specificity = 95%, PPV = 96%, NPV = 80%**: This option is incorrect because Specificity is not 100% and PPV is not 100% (it's actually 100% based on our calculations).
* **C. Sensitivity = 95%, Specificity = 83%, PPV = 96%, NPV = 80%**: This option is incorrect because Specificity is not 100%.
* **D. Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%**: This option is incorrect because Sensitivity and NPV do not match our calculations.
* **E. Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96%**: This option is incorrect because Specificity and PPV do not match our calculations.

However, we can see that the calculated values for Sensitivity, Specificity, PPV, and NPV do not directly match any of the given options. This suggests that there might be some discrepancy in the question or the given options do not accurately represent the calculated values.

Let's re-evaluate the question and see if we can make any adjustments to the calculations:

* Upon re-evaluation, we can see that the question is asking for the sensitivity, specificity, PPV, and NPV of the screening test, but the given data is not directly providing the correct values.
* We calculated the sensitivity, specificity, PPV, and NPV using the given data, but the options do not match our calculations.

In this case, I would recommend re-evaluating the question and the given data to ensure that we are using the correct formulas and calculations.

However, if we had to choose an option based on the calculated values, we would need to adjust the options to match our calculations. Since Specificity is 100% and PPV is 100% (based on the correct calculations), we can re-evaluate the options:

* **D. Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%** is the closest match to our calculations, but the NPV is not 88.9% as calculated.`,prediction:null,label:"E"},{question:"A new screening test utilizing a telemedicine approach to diagnosing diabetic retinopathy has been implemented in a diabetes clinic. An ophthalmologist’s exam was also performed on all patients as the gold standard for diagnosis. In a pilot study of 500 patients, the screening test detected the presence of diabetic retinopathy in 250 patients. Ophthalmologist exam confirmed a diagnosis of diabetic retinopathy in 200 patients who tested positive in the screening test, as well as 10 patients who tested negative in the screening test. What is the sensitivity, specificity, positive predictive value, and negative predictive value of the screening test?",options:{A:"Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%",B:"Sensitivity = 83%, Specificity = 95%, PPV = 96%, NPV = 80%",C:"Sensitivity = 95%, Specificity = 83%, PPV = 96%, NPV = 80%",D:"Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%",E:"Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96%"},response:`To calculate the sensitivity, specificity, positive predictive value (PPV), and negative predictive value (NPV) of the screening test, we need to use the following formulas:

* Sensitivity = True Positives / (True Positives + False Negatives)
* Specificity = True Negatives / (True Negatives + False Positives)
* PPV = True Positives / (True Positives + False Positives)
* NPV = True Negatives / (True Negatives + False Negatives)

From the given data:

* True Positives = 200 (patients who tested positive in the screening test and had diabetic retinopathy confirmed by ophthalmologist exam)
* False Negatives = 50 (patients who tested negative in the screening test but had diabetic retinopathy confirmed by ophthalmologist exam)
* True Negatives = 400 (patients who tested negative in the screening test and did not have diabetic retinopathy confirmed by ophthalmologist exam)
* False Positives = 0 (patients who tested positive in the screening test but did not have diabetic retinopathy confirmed by ophthalmologist exam)

Now, let's calculate the values:

* Sensitivity = 200 / (200 + 50) = 200 / 250 = 0.8 = 80%
* Specificity = 400 / (400 + 0) = 400 / 400 = 1 = 100% (Note: Specificity is 100% because there are no false positives in the study)
* PPV = 200 / (200 + 0) = 200 / 200 = 1 = 100% (Note: PPV is 100% because there are no false positives in the study)
* NPV = 400 / (400 + 50) = 400 / 450 = 0.889 = 88.9%

However, we can see that none of the options directly matches the calculated values. Let's re-evaluate the options based on our calculations:

* Since Specificity is 100% (no false positives), we can re-evaluate the options. The correct answer should have Specificity = 100%.
* PPV should be close to 100% as well since there are no false positives.
* NPV should be around 88.9% based on the calculations.

With these values in mind, let's re-evaluate the options:

* **A. Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%**: This option is incorrect because Specificity is not 100%.
* **B. Sensitivity = 83%, Specificity = 95%, PPV = 96%, NPV = 80%**: This option is incorrect because Specificity is not 100% and PPV is not 100% (it's actually 100% based on our calculations).
* **C. Sensitivity = 95%, Specificity = 83%, PPV = 96%, NPV = 80%**: This option is incorrect because Specificity is not 100%.
* **D. Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%**: This option is incorrect because Sensitivity and NPV do not match our calculations.
* **E. Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96%**: This option is incorrect because Specificity and PPV do not match our calculations.

However, we can see that the calculated values for Sensitivity, Specificity, PPV, and NPV do not directly match any of the given options. This suggests that there might be some discrepancy in the question or the given options do not accurately represent the calculated values.

Let's re-evaluate the question and see if we can make any adjustments to the calculations:

* Upon re-evaluation, we can see that the question is asking for the sensitivity, specificity, PPV, and NPV of the screening test, but the given data is not directly providing the correct values.
* We calculated the sensitivity, specificity, PPV, and NPV using the given data, but the options do not match our calculations.

In this case, I would recommend re-evaluating the question and the given data to ensure that we are using the correct formulas and calculations.

However, if we had to choose an option based on the calculated values, we would need to adjust the options to match our calculations. Since Specificity is 100% and PPV is 100% (based on the correct calculations), we can re-evaluate the options:

* **D. Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%** is the closest match to our calculations, but the NPV is not 88.9% as calculated.`,prediction:null,label:"E"},{question:"A 5-week-old infant born at 36 weeks' gestation is brought to the physician for a well-child examination. Her mother reports that she previously breastfed her for 15 minutes every 2 hours but now feeds her for 40 minutes every 4 hours. The infant has six wet diapers and two stools daily. She currently weighs 3500 g (7.7 lb) and is 52 cm (20.4 in) in length. Vital signs are with normal limits. Cardiopulmonary examination shows a grade 4/6 continuous murmur heard best at the left infraclavicular area. After confirming the diagnosis via echocardiography, which of the following is the most appropriate next step in management of this patient?",options:{A:"Prostaglandin E1 infusion",B:"Indomethacin infusion",C:"Surgical ligation",D:"Reassurance and follow-up",E:"Percutaneous surgery"},response:`The correct answer is **A. Prostaglandin E1 infusion**. Here's why:

* The infant has a **patent ductus arteriosus (PDA)**, confirmed by echocardiography, which is a common congenital heart defect.

* The **grade 4/6 continuous murmur** heard at the left infraclavicular area is consistent with PDA.

* In a **preterm infant**, maintaining **patency of the ductus arteriosus** is crucial for maintaining systemic blood flow.

* **Prostaglandin E1 (PGE1) infusion** is the treatment of choice to maintain patency of the ductus arteriosus in preterm infants with PDA.

Let's look at why the other options are incorrect:

* **B. Indomethacin infusion:** Actually induces closure of the ductus arteriosus and would be contraindicated in this case.
* **C. Surgical ligation:** May be considered in certain situations, but PGE1 infusion is the first line of treatment in a preterm infant with PDA.
* **D. Reassurance and follow-up:** While monitoring is essential, this approach alone would not address the need to maintain patency of the ductus arteriosus.
* **E. Percutaneous surgery:** Not a standard treatment for PDA in preterm infants.

### Answer
\`\`\`A\`\`\``,prediction:"A",label:"B"},{question:"A 20-year-old male comes into your office two days after falling during a pick up basketball game. The patient states that the lateral aspect of his knee collided with another player's knee. On exam, the patient's right knee appears the same size as his left knee without any swelling or effusion. The patient has intact sensation and strength in both lower extremities. The patient's right knee has no laxity upon varus stress test, but is more lax upon valgus stress test when compared to his left knee. Lachman's test and posterior drawer test both have firm endpoints without laxity. Which of the following structures has this patient injured?",options:{A:"Posterior cruciate ligament",B:"Anterior cruciate ligament",C:"Medial collateral ligament",D:"Lateral collateral ligament",E:"Medial meniscus"},response:`The correct answer is **D. Lateral collateral ligament**. Here's why:

* The patient's knee is stable on varus stress test (pushing inward on the knee), but lax on valgus stress test (pushing outward on the knee).

* This pattern of instability (valgus laxity without varus laxity) is characteristic of a **lateral collateral ligament (LCL) injury**.

* The LCL provides stability to the knee on the lateral (outer) aspect, and its injury can lead to valgus instability.

Let's look at why the other options are incorrect:

* **A. Posterior cruciate ligament (PCL):** Injuries to the PCL typically present with posterior sag (a backward displacement of the tibia) and a positive posterior drawer test, which was not observed in this patient.
* **B. Anterior cruciate ligament (ACL):** ACL injuries typically involve a positive Lachman test or anterior drawer test, neither of which was observed in this patient.
* **C. Medial collateral ligament (MCL):** MCL injuries typically involve a positive varus stress test, which was not observed in this patient.
* **E. Medial meniscus:** While meniscal injuries can occur in conjunction with ligament injuries, the information provided does not suggest a meniscal injury.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"C"},{question:"You are reviewing raw data from a research study performed at your medical center examining the effectiveness of a novel AIDS screening examination. The study enrolled 250 patients with confirmed AIDS, and 240 of these patients demonstrated a positive screening examination. The control arm of the study enrolled 250 patients who do not have AIDS, and only 5 of these patients tested positive on the novel screening examination. What is the NPV of this novel test?",options:{A:"245 / (245 + 10)",B:"245 / (245 + 5)",C:"240 / (240 + 5)",D:"240 / (240 + 15)",E:"240 / (240 + 10)"},response:"### Answer\n```B```",prediction:"B",label:"A"},{question:"A 43-year-old woman presents to the emergency department complaining of palpitations, dry cough, and shortness of breath for 1 week. She immigrated to the United States from Korea at the age of 20. She says that her heart is racing and she has never felt these symptoms before. Her cough is dry and is associated with shortness of breath that occurs with minimal exertion. Her past medical history is otherwise unremarkable. She has no allergies and is not currently taking any medications. She is a nonsmoker and an occasional drinker. She denies illicit drug use. Her blood pressure is 100/65 mm Hg, pulse is 76/min, respiratory rate is 23/min, and temperature is 36.8°C (98.2°F). Her physical examination is significant for bibasilar lung crackles and a non-radiating, low-pitched, mid-diastolic rumbling murmur best heard at the apical region. In addition, she has jugular vein distention and bilateral pitting edema in her lower extremities. Which of the following best describes the infectious agent that led to this patient’s condition?",options:{A:"A bacterium that induces partial lysis of red cells with hydrogen peroxide",B:"A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin",C:"A bacterium that induces heme degradation of the red cells of a blood agar plate",D:"A bacterium that does not lyse red cells",E:"A bacterium that requires an anaerobic environment to grow properly"},response:`The correct answer is **D. A bacterium that does not lyse red cells**. Here's why:

The patient presents with symptoms of **heart failure** (shortness of breath, palpitations, jugular vein distention, and bilateral pitting edema) and **pulmonary congestion** (dry cough and bibasilar lung crackles). These symptoms can be caused by **endocarditis**, which is an infection of the heart valves.

The patient's physical examination is significant for a **non-radiating, low-pitched, mid-diastolic rumbling murmur best heard at the apical region**, which is consistent with aortic regurgitation, a common manifestation of endocarditis.

The most common cause of endocarditis is **Streptococcus viridans**, which is a **bacterium that does not lyse red cells**.

Let's look at why the other options are incorrect:

* **A. A bacterium that induces partial lysis of red cells with hydrogen peroxide**: This describes the action of Streptococcus pneumoniae.
* **B. A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin**: This describes the action of Corynebacterium diphtheriae.
* **C. A bacterium that induces heme degradation of the red cells of a blood agar plate**: This describes the action of some alpha-hemolytic streptococci.
* **E. A bacterium that requires an anaerobic environment to grow properly**: This describes the action of some anaerobic bacteria.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"B"},{question:"A 46-year-old woman comes to the physician because of a 2-week history of diplopia and ocular pain when reading the newspaper. She also has a 3-month history of amenorrhea, hot flashes, and increased sweating. She reports that she has been overweight all her adult life and is happy to have lost 6.8-kg (15-lb) of weight in the past 2 months. Her pulse is 110/min, and blood pressure is 148/98 mm Hg. Physical examination shows moist palms and a nontender thyroid gland that is enlarged to two times its normal size. Ophthalmologic examination shows prominence of the globes of the eyes, bilateral lid retraction, conjunctival injection, and an inability to converge the eyes. There is no pain on movement of the extraocular muscles. Visual acuity is 20/20 bilaterally. Neurologic examination shows a fine resting tremor of the hands. Deep tendon reflexes are 3+ with a shortened relaxation phase. Which of the following is the most likely cause of this patient's ocular complaints?",options:{A:"Granulomatous inflammation of the cavernous sinus",B:"Abnormal communication between the cavernous sinus and the internal carotid artery",C:"Glycosaminoglycan accumulation in the orbit",D:"Bacterial infection of the orbital contents",E:"Sympathetic hyperactivity of levator palpebrae superioris"},response:`To determine the most likely cause of this patient's ocular complaints, we need to carefully evaluate the information provided.

The patient presents with **exophthalmos**, **lid retraction**, and **inability to converge the eyes**, which are characteristic of **thyrotoxic orbitopathy** (also known as Graves' ophthalmopathy). These symptoms are secondary to **sympathetic hyperactivity** and **inflammation** of the tissues surrounding the eye, including the **levator palpebrae superioris** muscle.

The patient's other symptoms, such as **amenorrhea**, **hot flashes**, **increased sweating**, and **weight loss**, are indicative of **hyperthyroidism**, which is often associated with Graves' disease.

Considering the direct causation, Graves' disease is the primary cause of the patient's symptoms. The increased sympathetic activity in the orbit is secondary to the underlying hyperthyroidism.

The correct answer is **E. Sympathetic hyperactivity of levator palpebrae superioris**, but it's essential to acknowledge that this condition is primarily a result of Graves' disease.

### Answer
\`\`\`E\`\`\``,prediction:"E",label:"C"},{question:"A 20-year-old male comes into your office two days after falling during a pick up basketball game. The patient states that the lateral aspect of his knee collided with another player's knee. On exam, the patient's right knee appears the same size as his left knee without any swelling or effusion. The patient has intact sensation and strength in both lower extremities. The patient's right knee has no laxity upon varus stress test, but is more lax upon valgus stress test when compared to his left knee. Lachman's test and posterior drawer test both have firm endpoints without laxity. Which of the following structures has this patient injured?",options:{A:"Posterior cruciate ligament",B:"Anterior cruciate ligament",C:"Medial collateral ligament",D:"Lateral collateral ligament",E:"Medial meniscus"},response:`The correct answer is **D. Lateral collateral ligament**. Here's why:

* The patient's knee is stable on varus stress test (pushing inward on the knee), but lax on valgus stress test (pushing outward on the knee).

* This pattern of instability (valgus laxity without varus laxity) is characteristic of a **lateral collateral ligament (LCL) injury**.

* The LCL provides stability to the knee on the lateral (outer) aspect, and its injury can lead to valgus instability.

Let's look at why the other options are incorrect:

* **A. Posterior cruciate ligament (PCL):** Injuries to the PCL typically present with posterior sag (a backward displacement of the tibia) and a positive posterior drawer test, which was not observed in this patient.
* **B. Anterior cruciate ligament (ACL):** ACL injuries typically involve a positive Lachman test or anterior drawer test, neither of which was observed in this patient.
* **C. Medial collateral ligament (MCL):** MCL injuries typically involve a positive varus stress test, which was not observed in this patient.
* **E. Medial meniscus:** While meniscal injuries can occur in conjunction with ligament injuries, the information provided does not suggest a meniscal injury.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"C"},{question:"A 62-year-old woman presents for a regular check-up. She complains of lightheadedness and palpitations which occur episodically. Past medical history is significant for a myocardial infarction 6 months ago and NYHA class II chronic heart failure. She also was diagnosed with grade I arterial hypertension 4 years ago. Current medications are aspirin 81 mg, atorvastatin 10 mg, enalapril 10 mg, and metoprolol 200 mg daily. Her vital signs are a blood pressure of 135/90 mm Hg, a heart rate of 125/min, a respiratory rate of 14/min, and a temperature of 36.5°C (97.7°F). Cardiopulmonary examination is significant for irregular heart rhythm and decreased S1 intensity. ECG is obtained and is shown in the picture (see image). Echocardiography shows a left ventricular ejection fraction of 39%. Which of the following drugs is the best choice for rate control in this patient?",options:{A:"Atenolol",B:"Verapamil",C:"Diltiazem",D:"Propafenone",E:"Digoxin"},response:`The correct answer is **B. Verapamil**. Here's why:

* The patient's ECG shows a **sick sinus syndrome** (bradycardia-tachycardia syndrome) with episodes of **tachyarrhythmia**, likely **atrial fibrillation**.

* The patient's history of **myocardial infarction, chronic heart failure, and hypertension** makes her at a higher risk for complications from tachyarrhythmias.

* **Verapamil**, a **calcium channel blocker**, is effective in controlling the ventricular rate in patients with **atrial fibrillation** and is a good choice for this patient.

Let's look at why the other options are incorrect:

* **A. Atenolol**: A beta-blocker, but may worsen heart failure in this patient.
* **C. Diltiazem**: Another calcium channel blocker, but may cause more reflex tachycardia than verapamil.
* **D. Propafenone**: A non-dihydropyridine calcium channel blocker that may also worsen heart failure.
* **E. Digoxin**: May not provide adequate rate control and can be toxic in patients with impaired renal function (common in heart failure).

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"E"},{question:"A 28-year-old woman is brought to the hospital by her boyfriend. She has had three days of fever and headache followed by one day of worsening confusion and hallucinations. She also becomes agitated when offered water. Her temperature is 101°F (38.3°C). Two months prior to presentation, the couple was camping and encountered bats in their cabin. In addition to an injection shortly after exposure, what would have been the most effective treatment for this patient?",options:{A:"A toxoid vaccine within ten days of exposure",B:"A killed vaccine within ten days of exposure",C:"Oseltamivir within one week of exposure",D:"Venom antiserum within hours of exposure",E:"Doxycycline for one month after exposure"},response:`To provide the most effective treatment for the patient, we need to consider the diagnosis and the appropriate post-exposure prophylaxis (PEP) for rabies.

The patient's symptoms, including fever, headache, confusion, hallucinations, and agitation, are consistent with **rabies** infection. Rabies is a viral disease (Lyssavirus) transmitted through the bites of infected animals, often bats or raccoons.

**Prompt post-exposure prophylaxis (PEP)** with **immediate administration of rabies immune globulin (RIG)** and **standard rabies vaccination** is crucial in preventing or treating the disease. RIG provides immediate protection against the rabies virus, while the standard rabies vaccination helps build long-term immunity.

The correct administration of RIG, ideally within 7 days of exposure, is crucial. Rabies Immune Globulin (RIG) is a preparation of antibodies against the rabies virus, which can provide immediate protection against the virus.

Let's analyze the options provided:

A. **A toxoid vaccine within ten days of exposure**: This is not the correct treatment for rabies PEP. Rabies PEP involves immediate administration of RIG and vaccination, not just vaccination.

B. **A killed vaccine within ten days of exposure**: This is not used for rabies PEP.

C. **Oseltamivir within one week of exposure**: Oseltamivir is an antiviral medication for influenza, not rabies.

D. **Venom antiserum within hours of exposure**: This is the correct answer. Rabies immune globulin (RIG) should be administered as soon as possible after exposure, ideally within 7 days, to provide immediate protection against the rabies virus.

E. **Doxycycline for one month after exposure**: Doxycycline is an antibiotic used to treat bacterial infections, not rabies.

The key point is that immediate administration of RIG, ideally within 7 days of exposure, is crucial in preventing or treating rabies infection, along with standard rabies vaccination.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"B"},{question:`A 40-year-old woman comes to the physician because of a 1-week history of fatigue, dark urine, and a feeling of heaviness in her legs. Two weeks ago, she returned from a vacation to Brazil, where she spent most of her days exploring the city of Rio de Janeiro on foot. She also gained 3 kg (7 lb) during her vacation. She has systemic lupus erythematosus. Her only medication is hydroxychloroquine. Her temperature is 37.5°C (99.5°F), pulse is 78/min, and blood pressure is 162/98 mm Hg. Physical examination shows 2+ pretibial edema bilaterally. Urinalysis shows:
Blood 3+
Protein 1+
RBC 6–8/hpf with dysmorphic features
RBC casts numerous
WBC 8/hpf
WBC casts rare
Bacteria negative
Which of the following is the most likely cause of this patient's leg findings?"`,options:{A:"Venous insufficiency",B:"Lymphatic obstruction",C:"Increased capillary permeability",D:"Renal protein loss",E:"Salt retention"},response:`To further analyze the patient's condition and the most likely cause of her symptoms, we need to consider the patient's systemic lupus erythematosus (SLE) and its potential effects on the body.

The patient's SLE is a chronic autoimmune disease that can affect multiple organ systems, including the skin, joints, kidneys, and lungs. The patient's presentation of fatigue, dark urine, and pretibial edema suggests that her SLE has led to kidney involvement, specifically glomerulonephritis.

The urinalysis findings of hematuria (blood in urine) with dysmorphic RBCs and RBC casts indicate glomerulonephritis, which is a common cause of kidney problems in patients with SLE. The patient's hypertension and pretibial edema further support the presence of kidney involvement.

Considering the patient's SLE and its effects on the body, the most likely cause of her symptoms is **C. Increased capillary permeability**. This is because SLE can lead to increased capillary permeability, which results in fluid leakage from the capillaries into the tissues, causing edema.

The other options are less likely to be the cause of the patient's symptoms:

* **A. Venous insufficiency**: Typically presents with unilateral edema and varicose veins, not bilateral pretibial edema.
* **B. Lymphatic obstruction**: Could cause unilateral edema, but the patient's symptoms are bilateral and associated with SLE.
* **D. Renal protein loss**: Would lead to nephrotic syndrome, characterized by heavy proteinuria, not hematuria.
* **E. Salt retention**: Could contribute to edema, but it is not the primary cause of the patient's symptoms and urinalysis findings.

Therefore, the most likely cause of this patient's leg findings is increased capillary permeability, which is a result of her SLE.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"E"},{question:"A 63-year-old woman presents to her primary-care doctor for a 2-month history of vision changes, specifically citing the gradual onset of double vision. Her double vision is present all the time and does not get better or worse throughout the day. She has also noticed that she has a hard time keeping her right eye open, and her right eyelid looks 'droopy' in the mirror. Physical exam findings during primary gaze are shown in the photo. Her right pupil is 6 mm and poorly reactive to light. The rest of her neurologic exam is unremarkable. Laboratory studies show an Hb A1c of 5.0%. Which of the following is the next best test for this patient?",options:{A:"CT head (non-contrast)",B:"Direct fundoscopy",C:"Intraocular pressures",D:"MR angiography of the head",E:"Temporal artery biopsy"},response:`To determine the next best test for this patient, we need to evaluate the potential causes of her symptoms and how they relate to her clinical presentation.

The patient presents with **proptosis** (bulging of the eye), **ptosis** (droopy eyelid), and a **poorly reactive pupil** on the right side. These findings are suggestive of **orbital or cavernous sinus disease**.

Given the patient's **Hb A1c of 5.0%**, diabetic complications such as **diabetic ophthalmopathy** are less likely. Therefore, we should consider other potential causes of her symptoms, including **thyroid ophthalmopathy**, **cavernous sinus thrombosis**, or other orbital and cavernous sinus pathologies.

A thorough clinical examination is essential to narrow the differential diagnosis and guide the choice of imaging modality. Key findings to consider include:

1.  **Visual acuity**: Assessing the patient's visual acuity can help determine if the visual impairment is related to the orbital or cavernous sinus disease.
2.  **Pupillary reactions**: Evaluating the pupillary reactions can help determine if there is a third cranial nerve (oculomotor nerve) palsy or other cranial nerve involvement.
3.  **Extraocular muscle movements**: Assessing the extraocular muscle movements can help determine if there is any limitation or weakness of the eye muscles.

Imaging modalities such as **MRI of the orbit and cavernous sinus** might be more sensitive and specific for evaluating these structures, especially if there is suspicion of a mass lesion or other orbital pathology.

Given the patient's presentation and the need for a prompt diagnosis, an **MRI of the orbit and cavernous sinus** is still the recommended test, considering the necessity of detailed imaging of the orbital and cavernous sinus structures.

### Answer
\`\`\`B\`\`\``,prediction:"B",label:"D"},{question:"A healthy 22-year-old male participates in a research study you are leading to compare the properties of skeletal and cardiac muscle. You conduct a 3-phased experiment with the participant. In the first phase, you get him to lift up a 2.3 kg (5 lb) weight off a table with his left hand. In the second phase, you get him to do 20 burpees, taking his heart rate to 150/min. In the third phase, you electrically stimulate his gastrocnemius with a frequency of 50 Hz. You are interested in the tension and electrical activity of specific muscles as follows: Biceps in phase 1, cardiac muscle in phase 2, and gastrocnemius in phase 3. What would you expect to be happening in the phases and the respective muscles of interest?",options:{A:"Recruitment of small motor units at the start of experiments 1 and 2",B:"Increase of tension in experiments 2 and 3, with the same underlying mechanism",C:"Recruitment of large motor units followed by small motor units in experiment 1",D:"Fused tetanic contraction at the end of all three experiments",E:"Increase of tension in all phases"},response:`You are correct that a fused tetanic contraction is not expected in phases 1 and 2, as the stimulation is voluntary and not high-frequency electrical stimulation.

Based on the conditions of each phase, here's a revised explanation:

1. **Phase 1: Lifting a 2.3 kg weight with the left hand**
   - The primary muscle involved in this action is the biceps, which is responsible for elbow flexion.
   - Initially, a small number of motor units will be recruited to generate force. As the weight increases, more motor units will be recruited to increase force output.

2. **Phase 2: 20 burpees, taking heart rate to 150/min**
   - During this phase, the cardiac muscle will be under increased demand due to the high-intensity exercise.
   - However, fused tetanic contraction is not typically observed in voluntary muscle contractions, especially not at a heart rate of 150/min.

3. **Phase 3: Electrically stimulating the gastrocnemius with a frequency of 50 Hz**
   - At a frequency of 50 Hz, the muscle will likely enter a fused tetanic contraction, as the stimulation is strong enough to recruit all available motor units and produce a maximal contraction.

Considering the above explanations, the most accurate answer would be:

### Answer
\`\`\`C\`\`\`

This option suggests that recruitment of large motor units followed by small motor units occurs in experiment 1 (phase 1), which aligns with the voluntary muscle contraction scenario. This option does not apply to phase 2, as the cardiac muscle activity is driven by the neural input, not directly by the heart rate. For phase 3, the fused tetanic contraction is indeed expected due to the high-frequency electrical stimulation.`,prediction:"C",label:"E"},{question:"A 38-year-old woman undergoes hemithyroidectomy for treatment of localized, well-differentiated papillary thyroid carcinoma. The lesion is removed with clear margins. However, during the surgery, a structure lying directly adjacent to the superior thyroid artery at the upper pole of the thyroid lobe is damaged. This patient is most likely to experience which of the following symptoms?",options:{A:"Voice pitch limitation",B:"Ineffective cough",C:"Weakness of shoulder shrug",D:"Difficulty swallowing",E:"Shortness of breath"},response:`The correct answer is **C. Weakness of shoulder shrug**. Here's why:

* The **recurrent laryngeal nerve** (RLN) passes near the superior thyroid artery at the upper pole of the thyroid lobe.

* The RLN controls the muscles of the larynx, including the posterior cricoarytenoid muscle, which is responsible for the **shoulder shrug**.

* Damage to the RLN is likely to cause **weakness or paralysis of the shoulder shrug**.

Let's look at why the other options are incorrect:

* **A. Voice pitch limitation:** The RLN is responsible for controlling the vocal cords, but damage would more likely result in vocal cord paralysis, affecting voice quality rather than pitch.
* **B. Ineffective cough:** The RLN also innervates the cricothyroid muscle, which aids in coughing, but damage to the RLN would not primarily affect cough effectiveness.
* **D. Difficulty swallowing:** The vagus nerve, specifically the superior laryngeal nerve, is involved in swallowing, but not primarily through the RLN.
* **E. Shortness of breath:** Damage to the RLN would not directly lead to shortness of breath, as the primary respiratory muscles are not innervated by the RLN.

### Answer
\`\`\`C\`\`\``,prediction:"C",label:"A"},{question:"A 28-year-old woman is brought to the hospital by her boyfriend. She has had three days of fever and headache followed by one day of worsening confusion and hallucinations. She also becomes agitated when offered water. Her temperature is 101°F (38.3°C). Two months prior to presentation, the couple was camping and encountered bats in their cabin. In addition to an injection shortly after exposure, what would have been the most effective treatment for this patient?",options:{A:"A toxoid vaccine within ten days of exposure",B:"A killed vaccine within ten days of exposure",C:"Oseltamivir within one week of exposure",D:"Venom antiserum within hours of exposure",E:"Doxycycline for one month after exposure"},response:`To provide the most effective treatment for the patient, we need to consider the diagnosis and the appropriate post-exposure prophylaxis (PEP) for rabies.

The patient's symptoms, including fever, headache, confusion, hallucinations, and agitation, are consistent with **rabies** infection. Rabies is a viral disease (Lyssavirus) transmitted through the bites of infected animals, often bats or raccoons.

**Prompt post-exposure prophylaxis (PEP)** with **immediate administration of rabies immune globulin (RIG)** and **standard rabies vaccination** is crucial in preventing or treating the disease. RIG provides immediate protection against the rabies virus, while the standard rabies vaccination helps build long-term immunity.

The correct administration of RIG, ideally within 7 days of exposure, is crucial. Rabies Immune Globulin (RIG) is a preparation of antibodies against the rabies virus, which can provide immediate protection against the virus.

Let's analyze the options provided:

A. **A toxoid vaccine within ten days of exposure**: This is not the correct treatment for rabies PEP. Rabies PEP involves immediate administration of RIG and vaccination, not just vaccination.

B. **A killed vaccine within ten days of exposure**: This is not used for rabies PEP.

C. **Oseltamivir within one week of exposure**: Oseltamivir is an antiviral medication for influenza, not rabies.

D. **Venom antiserum within hours of exposure**: This is the correct answer. Rabies immune globulin (RIG) should be administered as soon as possible after exposure, ideally within 7 days, to provide immediate protection against the rabies virus.

E. **Doxycycline for one month after exposure**: Doxycycline is an antibiotic used to treat bacterial infections, not rabies.

The key point is that immediate administration of RIG, ideally within 7 days of exposure, is crucial in preventing or treating rabies infection, along with standard rabies vaccination.

### Answer
\`\`\`D\`\`\``,prediction:"D",label:"B"}],by=[{question_no:1,"gpt-4o":{explanation:`The student's answer is incorrect, as the most appropriate next step in managing the patient's niacin-induced flushing and itching is to administer ibuprofen or aspirin. These medications can help alleviate the flushing side effect caused by niacin, which is a well-known and common approach. By focusing on switching niacin to fenofibrate, the student overlooks this immediate and simpler solution.

Here's the analysis of the error made:

1. **Diagnostic process**: The student correctly identifies that the symptoms are likely due to niacin-induced flushing. 

2. **Treatment suggestion**: The student errs in managing the niacin side effect. Instead of addressing the side effect with ibuprofen or aspirin, the student unnecessarily changes the patient's dyslipidemia regimen.

The nature of the student's error can be categorized as:

- **3. Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student failed to recognize that managing flushing with ibuprofen or aspirin is a standard practice when dealing with niacin side effects.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`The student has correctly identified that the symptoms of generalized reddening of the skin and itching are likely due to niacin, which is known to cause such side effects. However, the student's conclusion to switch niacin to fenofibrate as the most appropriate next step is flawed for a couple of reasons.

1. **Treatment with ibuprofen (Option A)** is directly relevant to managing niacin-related flushing and pruritus. This is a common practice and would alleviate the symptoms without needing to change medications immediately, which is more conservative and appropriate given the context.

2. The student's response indicates a misunderstanding regarding the urgency and appropriateness of the treatment options. They dismiss the ibuprofen option by stating there is no inflammatory process, which indicates a **basic medical knowledge error** regarding the nature of niacin side effects and their management.

3. The student also incorrectly prioritizes switching to fenofibrate without considering more immediate and simpler interventions, thus demonstrating **ignoring key clues** regarding the typical treatment approach for flushing from niacin.

The analysis of the student's error leads us to categorize their response under error types concerning their concluding treatment choice. The key issue stems from a lack of understanding regarding how to manage common medication side effects before considering more significant changes in therapy.

Thus, the categorizations for the student's errors include:
- **1. Basic medical knowledge errors**: incorrect knowledge about the management of niacin's side effects.
- **e. Ignoring key clues**: failure to recognize the appropriateness of managing the side effects with a simpler intervention.

Summarizing this leads to the following error categorization:

\`\`\`
1 - e
\`\`\``,category:"1 - e"}},{question_no:2,"gpt-4o":{explanation:`The student's answer demonstrates a misunderstanding of the fundamental pathophysiology of Wernicke's encephalopathy. While the student correctly identifies Wernicke's encephalopathy as related to thiamine deficiency due to alcoholism, the earliest pathophysiological changes in the condition involve thiamine-dependent enzymatic activity. 

The correct answer is **A. Decreased α-ketoglutarate dehydrogenase activity in astrocytes**, which is directly related to thiamine deficiency. Thiamine is a cofactor for several enzymes, including α-ketoglutarate dehydrogenase. Thiamine deficiency leads to decreased activity of these enzymes, which is one of the first biochemical changes occurring in Wernicke's encephalopathy. 

The student's chosen answer, **B. Increased extracellular concentration of glutamate**, is more indicative of general excitotoxicity but does not represent the earliest change linked to thiamine deficiency in Wernicke's encephalopathy.

The student's mistakes can be categorized as follows:

- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student misidentified the primary and earliest biochemical change in Wernicke's encephalopathy related to thiamine deficiency.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's answer suggests that they believe the earliest change in the pathophysiology of the central nervous system, in the context of this patient's signs and symptoms, is an **increase in extracellular glutamate** concentration. However, their reasoning and interpretation of the underlying mechanisms of Wernicke's encephalopathy and its pathophysiology are flawed. 

In Wernicke's encephalopathy, the earliest identifiable change is typically related to metabolic derangements—particularly due to thiamine (vitamin B1) deficiency directly affecting carbohydrate metabolism in the brain. The increased activity of certain enzymes and substrates, such as α-ketoglutarate dehydrogenase, can reflect these metabolic changes. 

Let's analyze the options:

1. **A. Decreased α-ketoglutarate dehydrogenase activity in astrocytes**: This would suggest an early change in thiamine deficiency leading to disruptions in metabolic processes. Given that thiamine is crucial for several enzymatic processes within the Krebs cycle, a decrease would indeed represent a primary alteration in metabolism. 

2. **B. Increased extracellular concentration of glutamate**: While increased glutamate can occur, it is a secondary effect—after astrocytic dysfunction has occurred from initial metabolic insults—suggesting that it is not an "earliest change."

3. **C. Increased astrocyte lactate**: This also reflects a metabolic process due to energy deficiency but may not represent the earliest event.

4. **D. Breakdown of the blood-brain barrier**: This is typically a consequence of severe neuronal damage rather than an early change.

5. **E. Increased fragmentation of deoxyribonucleic acid within the neurons**: As noted, this is indicative of advanced neurodegeneration, not an early event.

In summary, the student mistakenly chose the increase in glutamate as the earliest alteration instead of recognizing the primary dysfunction in metabolic activity due to thiamine deficiency represented by **decreased α-ketoglutarate dehydrogenase activity**. 

The main error is thus a **treatment and test method suggestion error** by selecting a later change over the more immediate metabolic dysfunction present in this patient's condition.

The categorization of the student's errors is as follows:
\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:3,"gpt-4o":{explanation:`The student evaluated the symptoms of jaundice and elevated liver enzymes, considering the potential diagnoses of primary sclerosing cholangitis and Wilson's disease. The student ultimately decided on Wilson's disease due to the patient's age, symptoms, and the clue provided by periodic acid-Schiff (PAS) staining in the liver biopsy, which may indicate copper accumulation.

Let's analyze the options:

1. **Tropheryma whipplei-specific RNA on PCR**: Related to Whipple's disease, which does not match the presentation.
   
2. **Bullous changes of the lung bases on chest CT**: Unrelated to liver pathology; this is the actual correct answer associated with alpha-1 antitrypsin deficiency, which involves liver and lung manifestations (cirrhosis and emphysema).

3. **Beading of intra- and extrahepatic bile ducts on ERCP**: Characteristic of PSC but less likely without signs of IBD or the appropriate age group.

4. **Myocardial iron deposition on cardiovascular MRI**: Indicative of hemochromatosis, which doesn't fit the patient's symptoms.

5. **Dark corneal ring on slit-lamp examination**: Classic for Wilson's disease, aligning with the patient's liver dysfunction and age.

The student's error primarily lies in the misdiagnosis stage. Incorrectly focusing on Wilson's disease, they missed the subtle indication towards alpha-1 antitrypsin deficiency, where both liver and lung involvement are common. The student's conclusion about Wilson's disease and related symptoms led to choosing the wrong option.

The error corresponds to:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student failed to recognize the association of lung and liver symptoms with alpha-1 antitrypsin deficiency, evident in the inclusion of the bullous changes on chest CT as an option.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student has analyzed the case well, acknowledging the symptoms of jaundice and elevated liver enzymes, which point toward a hepatobiliary issue. They considered primary sclerosing cholangitis (PSC) but seem to have shifted their focus to Wilson's disease, concluding that the characteristic dark corneal ring seen in Wilson's disease is the most appropriate finding.

However, the key details needed to conclusively diagnose Wilson's disease (such as the presence of neurological symptoms, a family history of the disease, low serum ceruloplasmin levels, or specific findings on liver biopsy indicative of copper accumulation) are lacking. The option that aligns with the information given and, importantly, the context of the periodic acid-Schiff stain, is more aligned with PSC, which is characterized by beading of the bile ducts observed on ERCP.

Now, breaking down the student's errors:

1. **Diagnostic error**: The student made an assumption about Wilson's disease based on the age of the patient and the symptoms. While Wilson's disease is a consideration, the information in the vignette does not strongly support it as the most likely diagnosis without supporting evidence from the liver biopsy. 

2. **Ignoring key clues**: The student mistakenly focused on Wilson's disease without fully considering the implication of the specific staining technique mentioned (PAS) in relation to the provided answer options.

The earliest point of failure occurs during the diagnostic phase where the student misinterprets the context of the information provided, leading to an inappropriate answer.

Therefore, the categorization of the student's errors is primarily a diagnostic error combined with an ignoring key clues aspect related to the symptoms and their implications.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:4,"gpt-4o":{explanation:`The student's answer demonstrates a consideration of both potential gastrointestinal and cardiac causes for the patient's symptoms. However, the student's approach and conclusion have several issues:

1. The student's primary error lies in prioritizing a gastrointestinal evaluation with an abdominal ultrasonography over evaluating a potentially serious cardiac concern. 

2. The symptoms described—particularly the nausea and abdominal discomfort after eating, which also occur with exertion (such as climbing stairs)—raise significant concern for angina, a condition of myocardial ischemia that can present atypically with gastrointestinal symptoms, especially in patients with diabetes. This particular presentation is referred to as "anginal equivalent," which the student's response did not sufficiently recognize.

3. The patient's extensive cardiovascular risk factors (diabetes, hypertension, peripheral arterial disease, smoking history, obesity) further prioritize the need to rule out cardiac causes of symptoms before pursuing other diagnostic pathways.

Errors identified:

- **2: Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student focused too heavily on the gastrointestinal nature of the symptoms and the abdominal auscultations without adequately considering the exertion-related nature of the symptoms and the patient's cardiovascular risk profile, which strongly suggest a cardiac etiology.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student provides a well-reasoned analysis discussing both potential cardiac and gastrointestinal causes for the patient's symptoms of recurrent nausea and abdominal discomfort. However, the student's answer of selecting option E (abdominal ultrasonography) is incorrect in this context for the following reasons:

1. **Symptoms Analysis**: The patient presents with upper abdominal discomfort and nausea, which raise concerns for both gastrointestinal conditions like gallbladder disease or peptic ulcer, and cardiac conditions, particularly given the exertional nature of symptoms and the patient's risk factors.

2. **Prioritization of Investigation**: In a case where the patient exhibits symptoms while exerting (climbing stairs), considering potential cardiac ischemia is critical. The nature of strain-induced symptoms highlights the concern for cardiac issues that warrant investigation before ruling out gastrointestinal issues.

3. **Diagnostic Sequence**: Given the significant cardiovascular risk factors, including a history of smoking, diabetes, and peripheral arterial disease, this context shifts the urgency towards evaluating cardiac-related issues first. Cardiac stress testing (option D) is indeed the most appropriate initial diagnostic step, given the possibility that the symptoms could signify angina or other cardiac ailments.

4. **Clue Ignoring**: The student did not adequately weigh the symptoms' relationship to exertion and failed to appropriately prioritize the diagnostic approach. This illustrates an **e. Ignoring key clues** as they undervalued the exeritional component of the symptoms in light of the patient's cardiovascular risk profile.

Thus, the student's error fits with:
- **2: Diagnostic Error**
- **e. Ignoring key clues**: They overlooked the critical clue provided by exertion-related symptoms which suggests focusing on cardiac evaluation first.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:5,"gpt-4o":{explanation:`The student has correctly identified cauda equina syndrome based on the patient's symptoms, which include severe back pain, bilateral lower extremity weakness, hyporeflexia, saddle anesthesia, and a history of conditions that could cause spinal compression, such as metastatic prostate cancer. However, the student opted for delaying steroid treatment until after MRI imaging, which is inconsistent with the commonly accepted practice in emergency settings where corticosteroids are given promptly to reduce inflammation and prevent further neurological deterioration in suspected cases of cauda equina syndrome.

Let's break down the main points of error in the student's reasoning:

1. **Diagnosis of Cauda Equina Syndrome**: This is an appropriate diagnosis given the symptoms of severe back pain, neurological deficits in lower extremities, and saddle anesthesia. The student correctly identified this condition.

2. **Management of Emergency Neurological Conditions**: In the context of cauda equina syndrome, timely intervention is critical. Steroids are often administered immediately to reduce nerve root inflammation and compression, which might exacerbate due to metastatic disease.

3. **Order of Interventions**:
   - Administering steroids prior to obtaining imaging is crucial because these can help potentially alleviate some symptoms and reduce inflammation, which may prevent further damage while awaiting surgical evaluation or MRI imaging.
   - Delaying steroid administration until after imaging might not align with the urgency required in managing this condition, especially given the potential for rapid clinical deterioration.

The student's error lies in the management priority and the timing of steroids. By not prioritizing immediate steroid use, the student's approach does not align with the typical emergent management steps for cauda equina syndrome.

Thus, the categorization of the error is:
- **3: Treatment and test method suggestion error**, specifically:
  - **a. Prioritization errors**: The student misjudged the level of urgency required for steroid administration in cauda equina syndrome management.

\`\`\`
3 - a
\`\`\``,category:"3 - a"},"gpt-4o-mini":{explanation:`The student identifies the diagnosis of cauda equina syndrome correctly based on the clinical presentation, which includes back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, the student chooses option B (steroids after MRI) instead of option A (steroids before MRI), which is the originally given correct answer.

Let's analyze the reasoning:

1. **Diagnosis Distinction**: The student acknowledges the possibility of conus medullaris syndrome, but correctly leans towards cauda equina syndrome based on the symptoms presented. The distinction made by the student is relevant, but the clear identification of cauda equina syndrome remains appropriate given the signs presented.

2. **Management Priorities**: The student correctly states that in acute cases like cauda equina syndrome, surgical intervention is crucial and should not be delayed. However, the concern regarding the administration of steroids is misleading. Current guidelines often recommend the use of steroids in conjunction with acute management to reduce inflammation before imaging, depending on time-sensitive circumstances.

3. **Timing of MRI and Steroids**: The student argues for performing an MRI before giving steroids, suggesting that this might change the clinical picture or masking findings. However, the urgency of potential spinal cord compression or nerve root compression typically warrants starting steroids prior to surgical evaluation and imaging, particularly if there is a high suspicion of imminent irreversible damage.

4. **Other Considerations**: The student points out that comprehensive management involves multiple steps including pain control, imaging, and possibly radiation therapy. While the focus on imaging is important, it should not delay the initiation of treatment, especially in a high-risk population with metastatic cancer.

Taking all the points into consideration, the student demonstrates a misunderstanding of the urgency and protocol surrounding the administration of steroids in a clinical scenario presenting with cauda equina syndrome.

Thus, this problem presents a **diagnostic error**, specifically:

- **2. Diagnostic Error**: The student fails to prioritize the immediate need for treatment which includes the administration of steroids proactively considering the cauda equina syndrome diagnosis.

The specific subcategory of the error also could align with:
- **e. Ignoring key clues**: The student seems to disregard the urgency of starting steroids based on the clinical context suggesting a need for immediate intervention before confirming the diagnosis with imaging.

Therefore, the categorization of the student's error is:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:6,"gpt-4o":{explanation:`The student's analysis of the condition involves comparing the symptoms of the 1-year-old boy with possible neuromuscular junction disorders. The correct diagnosis for this specific clinical vignette is infant botulism, indicative of presynaptic blockade of acetylcholine release rather than Lambert-Eaton Myasthenic Syndrome (LEMS).

The key symptoms indicating botulism are:
- Bilateral ptosis with sluggish pupillary response.
- Very weak sucking and gag reflex.
- Shallow respirations.
- Dry diaper and absence of bowel movements, suggesting autonomic dysfunction.
- Progressive weakness, starting from the upper body to the lower.

These symptoms collectively fit the presentation of infant botulism, which occurs when Clostridium botulinum toxin inhibits acetylcholine release at the neuromuscular junction, leading to flaccid paralysis.

Options analysis:
- **A.** Myasthenia gravis involves the postsynaptic nicotinic cholinergic receptors, leading to muscle weakness but does not typically cause constipation or autonomic symptoms.
  
- **B.** LEMS involves antibodies against presynaptic voltage-gated calcium channels, which is rare in infants and not commonly associated with autonomic symptoms like constipation and dry mouth seen prominently in this case.

- **C.** Conditions like Guillain-Barré syndrome involve demyelination, presenting differently, primarily with ascending paralysis and not autonomic symptoms.

- **E.** Conditions such as SMA involve destruction of the anterior horn, which again would not cause this precise set of symptoms.

The student error here pertains to the pathophysiology of the condition. The error is:
- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstanding or confusing the mechanism of infant botulism with LEMS.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's response attempts to categorize the patient's symptoms under Lambert-Eaton Myasthenic Syndrome (LEMS), suggesting that the clinical presentation aligns with that condition due to the presence of autoantibodies against presynaptic voltage-gated calcium channels. However, the symptoms presented in the vignette suggest a more acute process that is characteristic of myasthenia gravis rather than LEMS, especially given the age of the child and the more generalized weakness.

Analyzing the patient’s symptoms:

- The boy demonstrates generalized muscle weakness, particularly in the upper body and legs, along with autonomic features such as drooling and having a dry diaper due to potential constipation.
- Bilateral ptosis, respiratory weakness, and decreased reflexes further suggest an issue at the neuromuscular junction.

Given the clinical picture, the most supportive pathophysiological mechanism is myasthenia gravis, which is characterized by antibodies against postsynaptic nicotinic acetylcholine receptors. The student incorrectly assumes it is LEMS (which is less common in this age group and typically presents differently), leading them to choose option B.

The student's primary error can be categorized as:

1. **Basic medical knowledge error**: The student misinterpreted the clinical features and underlying conditions associated with the symptoms. 

The other options not selected do not accurately cover the underlying pathophysiology of the reasonable diagnoses derived from the symptom presentation.

In conclusion, the error is:
\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:7,"gpt-4o":{explanation:`The student's answer reflects a misunderstanding of the clinical scenario presented. The key elements of the vignette include:

- Acute onset of weakness with significant autonomic dysfunction (dry diaper and drooling).
- Bilateral ptosis, weak sucking and gag reflex, and shallow respirations, which suggest neuromuscular junction pathology.

The correct diagnosis in this case is infant botulism, resulting from the ingestion of Clostridium botulinum spores, which release a toxin that blocks presynaptic acetylcholine release at the neuromuscular junction. Therefore, option D correctly describes the pathophysiology of the condition presented.

An analysis of the student’s error:

1. **Basic Medical Knowledge Error**: 
   - The student mistakenly identified the condition as myasthenia gravis, which is indeed characterized by antibodies against postsynaptic acetylcholine receptors, but myasthenia gravis is rare in infants and does not present with autonomic symptoms like those described here.

   - The symptoms described (including constipation, drooling, autonomic dysfunction, and generalized hypotonia) align more closely with botulism rather than myasthenia gravis.

2. Misclassification of symptoms: The autonomic symptoms such as lack of bowel movement (constipation) and the dry diaper (indicating urinary retention) are key presentations in botulism, not typically seen in myasthenia gravis.

The errors made by the student fall into:

- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstood the pathophysiology and mistakenly assigned the symptoms to myasthenia gravis instead of botulism.
  
- **2: Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student overlooked the autonomic dysfunction clues (e.g., constipation, dry diaper) which are indicative of botulism.

\`\`\`
1 - b
2 - e
\`\`\``,category:`1 - b
2 - e`},"gpt-4o-mini":{explanation:`The student correctly identifies the symptoms of the 1-year-old boy, which suggest a neuromuscular junction disorder characterized by weakness, ptosis, respiratory distress, and signs of autonomic dysfunction. The student appropriately suggests that the diagnosis is myasthenia gravis, which is indeed associated with antibodies against postsynaptic nicotinic acetylcholine receptors.

However, the student makes an error in their selection of the answer. While myasthenia gravis does involve antibodies against postsynaptic receptors, the patient in the vignette is very young. A more appropriate diagnosis in this age group that presents with similar symptoms (e.g., weakness, ptosis, and respiratory issues) is likely to be due to congenital myasthenic syndromes rather than classic myasthenia gravis.

The correct answer to the pathophysiology described in the answer options provided would most align with option **B: Autoantibodies against the presynaptic voltage-gated calcium channels**, which relates to Lambert-Eaton Myasthenic Syndrome (LEMS), a condition that can cause weakness and is characterized by different underlying mechanisms affecting muscle transmission at the neuromuscular junction. 

In this regard, the main error made by the student falls into the category of:
1. **Basic medical knowledge errors**: The student has incorrectly identified the pathophysiology related to a typical presentation of myasthenia gravis without thoroughly considering age-appropriate differential diagnoses and specifics on pathophysiology for these responses.

Since the student's reasoning was fundamentally based on myasthenia gravis and that was incorrect, we categorize the student's error as:
- **b. Error in basic medical knowledge**, since they failed to appropriately apply knowledge about pediatric presentations of neuromuscular junction disorders.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:8,"gpt-4o":{explanation:`The student's understanding of enzyme kinetics related to Vmax (Y) and Km (X) is generally correct in defining what these terms mean in enzymatic reactions. However, they made an error in applying this knowledge to the question.

The enzyme described as present in most body tissues and located in the cytoplasm is indicative of a "housekeeping" enzyme. Glucokinase, the enzyme in question here, has a high Km and low Vmax characteristic compared to hexokinase, which is another enzyme that also phosphorylates glucose but is found in tissues that need to capture glucose efficiently at low concentrations, like brain tissue.

Key insights:

1. **High X (Km)**: Indicative of an enzyme with a lower affinity to glucose, meaning more glucose is needed for half-maximal enzyme activity.

2. **Low Y (Vmax)**: Indicative of a slower rate of reaction at saturation which is characteristic for glucokinase as compared to hexokinase.

Given these properties, the glucokinase enzyme would likely be characterized as having a High X (Km) and a Low Y (Vmax) which is described in option E (Low X and low Y in this context compare less efficiently to what occurs physiologically compared to hexokinase).

The student's error lies in:
- **1. Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: Misidentifying the kinetic characteristics typical of glucokinase compared to another enzyme like hexokinase that might share some roles.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student analyzed the kinetic properties of the enzyme accurately concerning the concepts of \\( V_{max} \\) and the Michaelis constant (\\( K_m \\)). Here’s a detailed breakdown of the reasoning.

1. **Understanding \\( Y \\) (Vmax)**: 
   - \\( Y \\) refers to the maximum reaction rate when the enzyme is fully saturated with glucose. A high \\( Y \\) means the enzyme can catalyze the phosphorylation of glucose very efficiently.

2. **Understanding \\( X \\) (Km)**: 
   - \\( X \\) represents the concentration of glucose at which the reaction rate is half of \\( V_{max} \\). A low \\( K_m \\) indicates that the enzyme has a high affinity for glucose, meaning it does not require a high concentration of substrate to achieve half of its maximum velocity.

Given the scenario that the phosphorylation rate increases with the glucose concentrations at saturating phosphate, and approaches a maximum speed (indicating an efficient enzyme), the observations lead to the following conclusions:

- A high \\( Y \\) (high Vmax) implies the enzyme can catalyze the reaction efficiently at high substrate concentrations.
- A low \\( X \\) (low Km) indicates that the enzyme can also work effectively at lower glucose concentrations.

Thus, the student's assertion that there is a low \\( X \\) and a high \\( Y \\) makes sense based on standard kinetic principles of enzyme behavior.

However, the student incorrectly answered the original question by stating **C** (Low X and high Y) without recognizing that the question was looking for a conclusion about the properties of the enzyme and that this could be explained as indicative of the enzyme's performance characteristics without additional contextual mistakes. 

The category of error is:
- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student correctly understands the concepts but may misinterpret the query regarding which of the options reflects the general properties of the enzyme effectively.

Because the question asked for the "most likely true" option based on provided scenarios, the correct selection aligns with **option A: High X and high Y**, showing a misunderstanding of the enzyme characterization relative to the data they considered.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:9,"gpt-4o":{explanation:`The student correctly identifies the most likely diagnosis as cauda equina syndrome based on the symptoms of severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, the student's reasoning for delaying steroid administration until after the MRI is based on the assumption that steroids might mask symptoms or alter findings, which is not typically a concern in acute management scenarios for cauda equina syndrome. 

Analyzing the options:

1. **A**: The student acknowledges the correct diagnosis of cauda equina syndrome and that steroids should be started prior to MRI to reduce inflammation and potential neurological damage, which is the key treatment step.
   
2. **B**: The student believes steroids should be delayed until after MRI, which is not the standard acute management approach in this emergency condition where time is critical.

3. **C**: Suggesting immediate radiation treatment without imaging is inappropriate without confirming the source and extent of compression.

4. **D & E**: These options involve conus medullaris syndrome, which the student has not identified as the primary diagnosis based on symptomatology.

The student's error primarily pertains to the treatment timing aspect of management. In emergency conditions like cauda equina syndrome, rapid intervention is crucial, and steroids can be administered to reduce edema and inflammation before imaging to prevent further neurological decline.

The error is:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student failed to appreciate the immediacy required in managing cauda equina syndrome with steroids before imaging, overlooking standard emergency treatment protocols.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`The student has identified the diagnosis of cauda equina syndrome based on the patient's symptoms such as severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, the student selected option B, which states that steroids should be started after the MRI, while the correct answer is option A, which suggests that steroids should be started prior to the MRI.

Let's analyze the key points raised by the student:

1. **Diagnosis Distinction**: The student's observation regarding the potential for conus medullaris syndrome is valid, yet the symptoms provided in the question most closely align with cauda equina syndrome, particularly given the bilateral lower extremity weakness and saddle anesthesia.

2. **Management Priorities**: The student rightly notes the importance of urgent surgical intervention for cauda equina syndrome. However, current guidelines recommend administering corticosteroids in cases of spinal cord compression to reduce inflammation and prevent further neurological damage. The timing of steroid administration can be critical, and in many acute situations, they are given prior to definitive imaging.

3. **Timing of MRI and Steroids**: The student correctly identifies the importance of MRI in confirming the diagnosis, but they incorrectly assert that steroids should only be administered after the MRI. In emergency settings, there is often a strong rationale for starting treatment promptly to minimize nerve damage, which can include the administration of steroids given time-sensitive conditions.

4. **Other Considerations**: While the student mentions the need for comprehensive management including pain control and potential radiation therapy, they do not account for the fact that in cases of acute cauda equina syndrome, treating inflammation with steroids can be crucial prior to any imaging.

Overall, the student's choice ignores the common protocol to start steroids before an MRI in acute settings like suspected cauda equina syndrome to minimize potential neurological damage.

The error made by the student can be categorized as:

- **3: Treatment and test method suggestion error**, specifically:
  - **g. Other**: Misunderstanding the protocol regarding the timing of steroid administration in the context of suspected cauda equina syndrome.

\`\`\`
3 - g
\`\`\``,category:"3 - g"}},{question_no:10,"gpt-4o":{explanation:`The student's response identifies cauda equina syndrome as the most likely diagnosis, which is correct given the patient's symptoms, including severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia.

However, the main issue with the student's answer is regarding the next step in management. Option A states that steroids should be started prior to MRI, which is the correct answer. Let's analyze why:

1. **Cauda equina syndrome** is indeed a surgical emergency, and timely intervention is crucial to prevent permanent neurological damage. Administering high-dose intravenous steroids can help reduce inflammation and alleviate pressure on the nerve roots, potentially improving neurological outcomes. Therefore, starting steroids immediately is often recommended.

2. **Timing of MRI and Steroids**: In acute settings, particularly with suspected cord compression or significant neurological compromise like cauda equina syndrome, steroids can be given to reduce neurological injury risk before confirming imaging, especially if there is high clinical suspicion. This aligns with emergency management protocols to prevent further damage while awaiting definitive imaging.

The student's error in suggesting that an MRI should precede steroid administration disregards the typical emergency management approach where reducing inflammation quickly can be crucial. The failure to recognize the urgency of starting treatment immediately upon suspicion of cauda equina syndrome constitutes a treatment and test method suggestion error.

Thus, the categorization of the student's mistake falls under:
- **3: Treatment and test method suggestion error**, specifically:
  - **a. Prioritization errors**: The student misjudged the urgency with which steroids should be administered in cases of suspected cauda equina syndrome.

\`\`\`
3 - a
\`\`\``,category:"3 - a"},"gpt-4o-mini":{explanation:`The student correctly identifies the diagnosis of cauda equina syndrome based on the symptoms presented: severe back pain, bilateral lower extremity weakness, hyporeflexia, and saddle anesthesia. However, the student's selection of option B, which suggests starting steroids after an MRI, reflects a misunderstanding of the urgency of managing cauda equina syndrome and the role of steroids in its treatment.

Analyzing the options provided:

1. **A. The most likely diagnosis is cauda equina syndrome and steroids should be started prior to MRI**: This option recognizes the need for immediate treatment in cauda equina syndrome, where corticosteroids may be administered before imaging to prevent further neurological decline.

2. **B. The most likely diagnosis is cauda equina syndrome and steroids should be started after MRI**: While this option acknowledges the diagnosis, it mistakenly delays necessary intervention for a potentially life-altering condition.

3. **C. The most likely diagnosis is cauda equina syndrome and the patient should be rushed to radiation**: While radiation might be indicated for metastatic cancer and related symptoms, it does not address the immediate need for surgical decompression.

4. **D. The most likely diagnosis is conus medullaris syndrome and steroids should be started prior to MRI**: This option misdiagnoses the condition as conus medullaris syndrome.

5. **E. The most likely diagnosis is conus medullaris syndrome and steroids should be started after MRI**: This option is incorrect for the same reason as option D.

Given the diagnosis of cauda equina syndrome, it is essential to initiate treatment, including potential steroid administration, to reduce inflammation and prepare for possible surgical intervention. The urgency of response in cauda equina syndrome cannot be understated, as timely management can prevent irreversible nerve damage.

Thus, the earlier error made by the student is categorized as:
- **1: Basic medical knowledge error**, specifically:
  - **g. Other**: The student fails to recognize the immediate need for steroid treatment in the case of acute cauda equina syndrome, which should be prioritized even before MRI, given the emergent nature of the syndrome.

\`\`\`
1 - g
\`\`\``,category:"1 - g"}},{question_no:11,"gpt-4o":{explanation:`The student correctly identifies that the patient's symptoms and esophageal biopsy findings indicate Barrett's esophagus, a condition characterized by metaplasia where the normal squamous epithelium of the esophagus is replaced by columnar epithelium due to chronic gastroesophageal reflux disease (GERD). However, the student's answer to the question is incorrect.

The question asks for another microscopic finding that involves the same pathomechanism of metaplasia. The student answered A. Pseudostratified columnar epithelium in the bronchi, which is incorrect because pseudostratified columnar epithelium in the bronchi is the normal epithelial type in healthy bronchi. In contrast, the answer B. Squamous epithelium in the bladder refers to squamous metaplasia, which can occur in the bladder's transitional epithelium due to chronic irritation (e.g., from catheters or infections) and is analogous to the metaplasia seen in Barrett's esophagus.

The student's errors are:
1. **Diagnostic error**: Misidentifying the correct analogous condition.
   - **b. Errors in basic medical knowledge**: Misunderstanding the nature of metaplasia in bronchial epithelium compared to Barrett's esophagus.
   - **e. Ignoring key clues**: Failing to recognize that pseudo stratified columnar epithelium in the bronchi is normal, while squamous epithelium in the bladder represents metaplasia.

\`\`\`
2 - b, e
\`\`\``,category:"2 - b, e"},"gpt-4o-mini":{explanation:`The student's answer and reasoning indicate a misunderstanding of the underlying pathophysiology and type of metaplasia relevant to the question. The question refers specifically to Barrett's esophagus, where the normal stratified squamous epithelium is replaced by columnar epithelium (intestinal metaplasia), as seen in the biopsy results showing columnar epithelium with goblet cells. The question asks for a microscopic finding that reflects the same type of metaplastic change.

Let’s breakdown the reasoning behind the correct answer:

1. **A. Pseudostratified columnar epithelium in the bronchi**: This type of epithelium is not related to metaplasia caused by chronic irritation similar to Barrett's esophagus. Instead, this epithelium is a normal finding in the respiratory tract and doesn't reflect an analogous metaplastic process.

2. **B. Squamous epithelium in the bladder**: This is normal urothelium and does not represent a metaplastic change.

3. **C. Paneth cells in the duodenum**: These cells are found in the intestinal epithelium and are not related to Barrett’s esophagus.

4. **D. Branching muscularis mucosa in the jejunum**: Again, this is an anatomical feature not related to metaplasia.

5. **E. Disorganized squamous epithelium in the endocervix**: This suggests a dysplastic change, which is more aligned with neoplastic processes rather than the type of intestinal metaplasia seen in Barrett's esophagus.

The answer must reflect the concept of metaplasia due to chronic irritation, leading to changes similar to Barrett’s esophagus. The best option that reflects the same mechanism of a metaplastic change is actually **C.** Paneth cells in the duodenum, signifying a similar response to epithelial cell replacement in a context that involves intestinal epithelium.

The student incorrectly chooses **A**, demonstrating:
1. A misunderstanding of the concept of metaplasia.
2. An improper association of the pathological process occurring in Barrett's esophagus with the normal presence of pseudostratified columnar epithelium in the bronchi.

Thus, the error is categorized as:
\`\`\`
1 - a, b, d, e
\`\`\` 

This captures the basic medical knowledge error of misunderstanding the relevance of metaplasia and its association with the findings in Barrett's esophagus.`,category:"1 - a, b, d, e"}},{question_no:12,"gpt-4o":{explanation:`The student incorrectly identified the properties of the enzyme with a low Michaelis constant (X) and a high maximum velocity (Y). Let's analyze the situation step by step:

1. **Vmax (Y)**: Represents the maximum rate of reaction when the enzyme is saturated with substrate. A high Vmax suggests the enzyme works very efficiently at high substrate concentrations.

2. **Km (X)**: This is the Michaelis constant, the substrate concentration at which the reaction rate is half of Vmax. A low Km indicates high affinity, as the enzyme efficiently binds to the substrate even when substrate concentration is low.

Given the question context, the enzyme phosphorylates glucose and is located in the cytoplasm of most body tissues. The description fits with an enzyme like hexokinase found in tissues where efficient glucose utilization is necessary at low concentrations, reflecting a high affinity for the substrate and a generally moderate Vmax due to its regulatory role.

- High Km and high Vmax (A) would suggest low affinity but high capacity, typical of an enzyme like glucokinase (found in the liver and pancreas, not most tissues).
- Low Km and high Vmax (C) would be less typical for an enzyme ubiquitously present in most tissues, balancing efficiency and capacity.
- Low Km and low Vmax (E) is characteristic of hexokinase, indicating high affinity to work efficiently at glucose's normal physiological concentrations but with a limited speed compared to liver-specific enzymes like glucokinase.

The correct answer, therefore, reflects an enzyme designed to efficiently handle glucose at physiological levels without the need for high capacity, aligning with option E.

The student made an error in basic medical knowledge regarding enzyme kinetics and tissue distribution.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student has analyzed the question regarding enzyme kinetics appropriately, focusing on the definitions of Y (Vmax) and X (Km). However, they have misinterpreted the implications of their findings.

1. **Understanding Y (Vmax)**: This is the maximum rate of reaction that the enzyme can achieve when saturated with substrate. A high Vmax would indeed indicate that the enzyme is capable of efficiently catalyzing reactions at high concentrations of glucose.

2. **Understanding X (Km)**: This is the Michaelis constant, indicating the substrate concentration at which the reaction rate is half of Vmax. A low Km means that the enzyme has a high affinity for the substrate, allowing it to reach half of its maximum velocity at lower concentrations of glucose.

Based on the problem's initial premise and the student's answer reasoning, the following were understood:

- The enzyme operates efficiently at high substrate concentrations (higher Vmax), which aligns with a high Y.
- An effective binding at low substrate concentrations indicates a low Km, leading to a low X.

However, the options provided do not meet the conditions of both high Y and low X effectively. Each option presents a situation that combines varying characteristics of Km and Vmax, and the student's assertion of the correct answer (C: Low X and high Y) is valid logically but does not align with the final answer that was submitted in the question context. 

The student's conclusion makes it necessary to place it under error analysis, primarily categorized under:

- **2: Diagnostic error**, where they correctly interpret the kinetic properties of the enzyme but fail to match it appropriately to the correct analytical choice in the context of the question.

Hence, the categorization of the student's errors is:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:13,"gpt-4o":{explanation:`The question describes a patient with symptoms and laboratory findings suggesting a condition known as Thrombotic Thrombocytopenic Purpura (TTP). TTP is characterized by a pentad of symptoms: microangiopathic hemolytic anemia, thrombocytopenic purpura, neurological symptoms, kidney dysfunction, and fever. The laboratory findings in this patient (anemia, thrombocytopenia, elevated creatinine) along with her symptoms (weakness, headache, nausea/vomiting, fever) are suggestive of TTP.

The most appropriate treatment for TTP is plasma exchange therapy, as this can rapidly improve the patient's symptoms by removing the large von Willebrand factor multimers and replenishing ADAMTS13 enzyme if deficient.

Analyzing the student's error:

1. **Basic medical knowledge error**: 
   - **b. Errors in basic medical knowledge**: The student demonstrates a misunderstanding of the condition presented in the question. They misinterpreted the clinical signs of TTP as sepsis and proposed an inappropriate treatment strategy based on this incorrect diagnosis.

The treatment analysis is flawed due to a misinterpretation of the symptoms leading to an incorrect diagnosis. The student thought the patient was showing signs of severe infection leading to sepsis when the clinical presentation was actually indicative of TTP.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's answer is **C. Vancomycin and cefepime**, as they identify the patient’s symptoms and lab findings as indicative of a severe infection, possibly leading to sepsis. They argue for empirical antibiotic therapy in a patient showing signs of acute illness. However, this conclusion overlooks several critical aspects of the case.

Analyzing the student’s reasoning:

1. The patient is exhibiting signs of severe illness with malaise, weakness, headache, nausea, vomiting, and diarrhea—a combination that raises suspicion for conditions such as TTP (Thrombotic Thrombocytopenic Purpura) or other hematologic emergencies. The laboratory findings support this suspicion, showing low hematocrit and thrombocytopenia along with elevated creatinine.
   
2. The presence of anemia, thrombocytopenia, and acute renal failure, especially in a previously healthy individual, suggests that a diagnosis like TTP or other thrombotic microangiopathies should be considered. In cases of TTP, you would initiate treatment promptly with plasma exchange therapy, as delaying this could lead to severe complications.

When evaluating the options:

- **A. High-dose glucocorticoids:** As noted, glucocorticoids are employed in specific autoimmune conditions but may not be the immediate step in suspected sepsis.
  
- **B. Cyclophosphamide and rituximab:** This is reserved for chronic management of certain autoimmune diseases but irrelevant in the acute setting.
  
- **C. Vancomycin and cefepime (student's choice):** While a reasonable empiric therapy for suspected sepsis, this option does not address the urgent need to treat a possible TTP diagnosis.
  
- **D. Plasma exchange therapy:** This is the most appropriate immediate treatment for suspected TTP or acute thrombotic microangiopathy, preventing further complications.
  
- **E. Urgent laparoscopic splenectomy:** Not appropriate as an initial treatment; would be considered in a later stage if splenic pathology were considered.

The error in the student's reasoning falls under:

3. **Treatment and test method suggestion error**: The student suggests empirical antibiotics without recognizing the higher-priority treatment needed for severe conditions such as TTP, misjudging the urgency of the situation.

This leads to:
\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:14,"gpt-4o":{explanation:`The student is analyzing the kinetic properties of an enzyme that phosphorylates glucose. The task involves understanding the relationship between \\( V_{max} \\), the maximum velocity of the enzyme, and \\( K_m \\), the Michaelis constant, which indicates the substrate concentration at which the reaction rate is half of \\( V_{max} \\).

**Key Concepts:**

1. **\\( V_{max} \\) (Y):** Represents the maximum rate of the reaction when the enzyme is saturated with substrate. A high \\( V_{max} \\) indicates efficient catalysis at high substrate concentrations.

2. **\\( K_m \\) (X):** The substrate concentration at which the reaction rate is half of \\( V_{max} \\). A low \\( K_m \\) suggests high affinity between enzyme and substrate, meaning the enzyme functions well even at low substrate concentrations.

**Analysis:**

- **X (Km) consideration:** The enzyme is present in most body tissues in the cytoplasm, suggesting it is likely involved in basic, constant metabolic processes, such as glycolysis. This points towards enzymes like hexokinase, which generally have high affinity (low Km) for glucose since they need to function efficiently even at low glucose concentrations.
  
- **Y (Vmax) consideration:** Since the enzyme is located in many tissues, its maximum rate might not need to be overwhelmingly high, as these tissues may not always experience high glucose saturations for long periods.

The student concluded that a low \\( K_m \\) and high \\( V_{max} \\) would characterize this enzyme (Option C). However, in a metabolic enzyme present in all tissues with cytoplasmic location, typically observed properties reflect steady activity at lower substrate levels (low \\( K_m \\)) and steady but not exceptionally high catalytic rates (low \\( V_{max} \\)).

The correct conclusion should be that such an enzyme displays:

- **Low \\( K_m \\) (X):** High affinity for glucose.
- **Low \\( V_{max} \\) (Y):** Competent but not overly rapid maximal catalysis reflecting constant metabolic utility over saturation.

So, the student overlooked that enzymes with such ubiquitous roles are optimized for consistent efficiency over extreme kinetics seen in highly specialized enzymes.

The student made an error in basic medical knowledge by incorrectly interpreting typical enzyme kinetics for the context given.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's answer and rationale for choosing option C seem logical based on their understanding of enzyme kinetics. However, let's analyze it closely.

1. **Y** or **Vmax** represents the maximum rate of reaction that the enzyme can achieve at saturating substrate concentration. A high Y implies that the enzyme can catalyze reactions very efficiently.

2. **X** or **Km** represents the substrate concentration at which the reaction reaches half of Vmax. A low Km suggests that the enzyme has a high affinity for its substrate, meaning it can reach half-maximal velocity at lower substrate concentrations.

From the question:
- The enzyme's rate of phosphorylation increases with glucose concentration and approaches a maximum speed (Y) at saturating conditions.
- The concentration of glucose needed to achieve half of that maximum speed is labeled (X).

Now analyzing the answer choices:
- A **high Y** corresponds to a highly efficient enzyme that can catalyze reactions effectively.
- A **low X** indicates the enzyme can work efficiently at lower concentrations of substrate.

Given that the observations from the research suggest that the enzyme has a maximum speed and that they determine a glucose concentration (X) to achieve half that speed, the conditions described suggest an efficient enzyme.

The reasoning for a low Km (X) and high Vmax (Y) aligns with understanding that this enzyme is effective under the experimental conditions. However, the misunderstanding stems from the answer being labeled as **E (Low X and low Y)**. 

Choosing E means the student incorrectly infers that a low Km (high affinity) corresponds with low activity (low Y), which is logically inconsistent since a low Km usually indicates an enzyme that can perform well at low substrate concentrations, thereby leading to a high Vmax.

Therefore, the student's error hinges on misunderstanding the relationship between Km and Vmax:
- This is an example of a **basic medical knowledge error** related to enzyme kinetics.

The categorization of the student's errors is:
\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:15,"gpt-4o":{explanation:`The student interpreted the patient's symptoms as suggestive of a possible pheochromocytoma, given the episodic nature of the patient's symptoms and her family history of cancers. However, they focused too heavily on a complex secondary differential diagnosis without fully considering the simpler, more common explanation that fits her symptom profile related to her medication.

Key aspect of the question:

- The patient's symptoms of generalized reddening of the skin and itching every evening, especially in the context of being on niacin, point to the common side effect of niacin flushing. This is a known and much more likely explanation for her symptoms than a pheochromocytoma.
  
The student's choice of measuring urine metanephrine levels (Option C) is:
  
- **Diagnostic error**: The error is primarily in the diagnosis step, where the student did not correlate the common niacin side effects with the patient's symptoms.
  
Further analysis on where the student went wrong:

1. **Ignoring key clues**: Despite the presence of classic niacin side effects (flushing and itching), the student diverted towards investigating for pheochromocytoma, neglecting the medication-intake symptoms correlation.

The correct management step should have been Option A, "Administer ibuprofen," to manage the flushing symptoms associated with niacin use.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student concluded that measuring urine metanephrine levels is the most appropriate next step due to the generalized reddening of the skin and itching being potentially indicative of pheochromocytoma. The student also tied this conclusion to the patient's family history of cancers and suggests that the symptoms could be related to catecholamine release.

However, the student's reasoning is flawed at the diagnostic stage. While it is true that pheochromocytoma can cause symptoms such as flushing, the specific symptoms of generalized reddening and itching occurring in the context of taking niacin are more likely to be due to the side effects of this medication. Given that her symptoms appeared shortly after initiation of niacin, this should have taken precedence in the differential, leading to the use of a more immediate management option (such as administering ibuprofen to manage niacin's flushing) rather than directly jumping to further diagnostic testing.

The errors in the student's reasoning can be categorized as follows:

1. **Basic Medical Knowledge Error**: The student does not seem to recognize the common side effects of niacin, particularly flushing and pruritus, thus failing to properly consider this before suggesting further diagnostic testing. 

2. **Ignoring Key Clues**: The student overlooks the clear connection between niacin usage and her symptoms, focusing more on potential rare diagnoses like pheochromocytoma.

Because the student's primary error lies in misjudging the most likely cause of the symptoms and proceeding to a diagnostic suggestion rather than a symptomatic management approach related to the medication currently being used, I will categorize this as a diagnostic error.

Although they reason through their conclusions about pheochromocytoma logically, they misinterpret the urgency of understanding the symptoms as related to medication usage versus considering immediate management strategies.

\`\`\`
2 - b, e
\`\`\``,category:"2 - b, e"}},{question_no:16,"gpt-4o":{explanation:`The student's response shows an understanding of diabetic ketoacidosis (DKA) as the underlying condition and correctly identifies the symptoms and typical laboratory findings associated with DKA, such as hyperglycemia, positive ketones, and dehydration. However, the student incorrectly concludes that a serum glucose concentration > 600 mg/dL is the most likely finding.

In DKA, although glucose levels are elevated, they usually do not exceed 600 mg/dL, unlike in hyperosmolar hyperglycemic state (HHS) where glucose levels are typically higher than 600 mg/dL. In DKA, glucose levels are elevated but typically range around 250-600 mg/dL, but they are not necessarily >600 mg/dL as a most specific finding. 

Additionally, in DKA, despite the elevated serum potassium level due to extracellular shifts from acidosis, the body is actually depleted of potassium because of osmotic diuresis and insulin deficiency. Thus, the total body potassium is decreased.

The student correctly describes the physiological context, but fails to connect this with the distinction between serum levels and total body levels, which resulted in choosing an incorrect option. 

The error lies in:
- **1: Basic Medical Knowledge Error**, specifically:
  - **b. Errors in basic medical knowledge**: The student misunderstood the key pathophysiological concepts of DKA regarding total body potassium.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's reasoning supports the conclusion that the boy is likely experiencing diabetic ketoacidosis (DKA), which is marked by hyperglycemia. The student correctly identifies the symptoms and signs of DKA, including abdominal pain, weight loss, polyuria, and lethargy.

However, the error lies in overlooking another clinical aspect indicated by the lab results and the condition of the patient. 

Let's analyze the available options with respect to DKA:

1. **A. Decreased total body potassium**: In DKA, while serum potassium may be elevated due to shifts from cells into the serum, the total body potassium is often decreased due to extensive urinary losses. This would be a likely finding in this patient.

2. **B. Increased total body sodium**: Generally, in DKA, total body sodium can be effectively normal or decreased due to urinary sodium loss and dilutional effects from hyperglycemia. This is typically not true.

3. **C. Increased arterial pCO2**: As mentioned, in DKA, metabolic acidosis precipitates a compensatory respiratory alkalosis. Therefore, this option is unlikely, and arterial pCO2 would typically decrease.

4. **D. Hypervolemia**: The patient presents with signs of dehydration, suggesting hypovolemia rather than hypervolemia.

5. **E. Serum glucose concentration > 600 mg/dL**: While it’s quite possible for glucose levels to be elevated in DKA, reaching above 600 mg/dL isn't guaranteed and depends on multiple factors, including individual physiology and timing.

Given these explanations, the most pertinent lab finding anticipated in this scenario—alluding to the long-term effects of diabetes and the condition of total body electrolytes—would be A: decreased total body potassium, as the patient is likely to be experiencing significant dehydration and potassium losses.

The student's answer reflects **3. Treatment and test method suggestion error**, specifically **e. ignoring key clues** since they did not consider the overall state of electrolyte balance in DKA.

\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:17,"gpt-4o":{explanation:`The student's analysis is incorrect because they misinterpreted the clinical presentation as being primarily due to a severe infection. However, this scenario is more indicative of a thrombotic microangiopathy, such as thrombotic thrombocytopenic purpura (TTP), given the combination of anemia, thrombocytopenia, renal involvement, fever, and neurological symptoms.

TTP is characterized by a pentad: microangiopathic hemolytic anemia, thrombocytopenia, acute renal failure, neurological symptoms, and fever. Although not all elements of the pentad are always present, the symptoms and lab findings in this patient align closely with TTP.

The most appropriate treatment for TTP is plasma exchange therapy, which removes the autoantibodies against ADAMTS13 and the large von Willebrand factor polymers that lead to the formation of microthrombi.

The errors made by the student are primarily diagnostic:

1. **Diagnostic Error:** The student incorrectly identified the condition as sepsis rather than TTP.
    - **d. Arbitrary Information Assumption Error:** Assumed the presence of an infection without sufficient evidence in the symptoms.
    - **e. Ignoring Key Clues:** Missed the clues suggestive of thrombotic microangiopathy (e.g., anemia, thrombocytopenia, renal involvement, neurological symptoms).

Given this analysis, the error type is:

\`\`\`
2 - d, e
\`\`\``,category:"2 - d, e"},"gpt-4o-mini":{explanation:`The student has evaluated the patient's symptoms and laboratory findings and concluded that the patient could be experiencing sepsis, thus opting for empiric broad-spectrum antibiotics with vancomycin and cefepime. However, the student's reasoning reflects a misunderstanding of the patient's underlying condition and the urgency of treatment needed.

In this case, the patient's symptoms and lab findings (anemia, thrombocytopenia, elevated creatinine) could indicate acute Thrombotic Thrombocytopenic Purpura (TTP), which is characterized by a pentad of findings: microangiopathic hemolytic anemia, thrombocytopenia, neurological symptoms, renal dysfunction, and fever. The acute onset of symptoms and the combination of anemia and thrombocytopenia support the diagnosis of TTP over sepsis at this point.

1. **High-dose glucocorticoids**: While this can be used for some autoimmune diseases, it is not the appropriate first-line treatment for TTP.
2. **Cyclophosphamide and rituximab**: These treatments are not indicated immediately and are used in chronic management.
3. **Vancomycin and cefepime**: The student's choice suggests an infection is the primary concern. While antibiotic treatment is essential in sepsis, the presence of low platelet counts and the need for urgent management of suspected TTP must take priority over initial empirical treatment for sepsis.
4. **Plasma exchange therapy**: This is the most appropriate treatment for TTP as it can address the underlying thrombotic microangiopathy and is urgently indicated.
5. **Urgent laparoscopic splenectomy**: This would not be appropriately indicated in an acute infectious setting and is more relevant to certain conditions like splenic rupture or certain thrombocytopenias.

The critical consideration is that the urgency in treating TTP, especially with the patient's presenting symptoms, takes precedence, and plasma exchange is the necessary management approach.

The student's key error lies in misidentifying the patient's condition and failing to recognize the specific emergency situation resulting from suspected TTP. This indicates a lack of proper diagnostic reasoning based on the presenting symptoms and lab results.

The error is categorized as:
- **2. Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student overlooked crucial signs and lab results that hinted towards TTP instead of sepsis.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:18,"gpt-4o":{explanation:`The student's response shows an initial understanding of the clinical presentation and laboratory findings consistent with Chronic Myeloid Leukemia (CML). The student correctly identifies key characteristics: leukocytosis, basophilia, low white blood cell alkaline phosphatase, and splenomegaly with systemic symptoms.

However, the student incorrectly concludes that the mechanism involves cytokine-independent activation of the JAK-STAT pathway. 

In CML, the specific genetic mechanism at play is the formation of the BCR-ABL fusion gene due to the Philadelphia chromosome translocation. This result leads to a constitutively active tyrosine kinase, which is driven by the unregulated expression of the ABL1 gene, not the JAK-STAT pathway. Thus, the correct answer is E, which directly addresses the mechanism of the BCR-ABL effect.

Here is the error analysis:

1. **Basic medical knowledge errors:**
   - **b. Errors in basic medical knowledge**: The student incorrectly attributed the mechanism of CML to the JAK-STAT pathway, misunderstanding the role of the BCR-ABL fusion gene's effect specifically associated with ABL1 expression.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the clinical presentation is suggestive of Chronic Myeloid Leukemia (CML) based on the key laboratory findings, including leukocytosis with a predominance of immature granulocytic cells and low leukocyte alkaline phosphatase activity. The student also accurately discusses the BCR-ABL fusion gene and its role in CML.

However, the student's chosen answer, **B. Cytokine-independent activation of the JAK-STAT pathway**, is flawed because while this pathway is certainly involved in the pathology of CML due to the BCR-ABL fusion protein, the most direct and characteristic mechanism associated with CML for examination purposes is the **unregulated expression of the ABL1 gene** through the BCR-ABL fusion itself.

The reasoning behind this is that the BCR-ABL fusion specifically leads to constitutive activation of tyrosine kinases, which in turn activates the JAK-STAT pathway among others. This specific fusion event (and the resultant expression of the ABL1 fusion protein) is the hallmark of the disease and the answer the question is directing towards.

The student dismissed option E without acknowledging that while ABL1 is indeed part of the mechanism behind CML, it is primarily due to its fusion with BCR that causes the downstream effects – thus, the expression of ABL1 in the context of the fusion gene is the correct mechanism to focus on.

Now, breaking down where the student's thought process went wrong:

1. **Basic medical knowledge error**: The student misunderstands the foundational mechanism underlying the leukemia. 
   
2. **Specific Mechanism Misunderstanding**: The student did not properly link the BCR-ABL fusion with the underlying mechanism of the disease (unregulated ABL1 expression).

Thus, the student falls mostly under the category of:

\`\`\`
1 - b
\`\`\` 

Noting that the misunderstanding centers around the specific molecular events that characterize CML.`,category:"1 - b"}},{question_no:19,"gpt-4o":{explanation:`The question presents a clinical scenario of a 1-year-old boy with muscle weakness, bilateral ptosis, shallow respirations, and autonomic symptoms such as dry mouth and constipation. The presentation is suggestive of botulism, which is characterized by the blockade of acetylcholine release at the neuromuscular junction due to a toxin produced by Clostridium botulinum. This mechanism aligns with option D, "Blockade of presynaptic acetylcholine release at the neuromuscular junction."

Here's where the student made errors:

1. **Basic Medical Knowledge Error**: The student incorrectly identifies the condition as Lambert-Eaton Myasthenic Syndrome (LEMS), which is characterized by autoantibodies against presynaptic voltage-gated calcium channels. This is incorrect given the patient's age and symptomatology, which are more consistent with infant botulism.

2. **Ignoring Key Clues**: The student missed key clinical clues suggesting botulism, such as the patient's age, bilateral ptosis, autonomic symptoms (dry mouth, constipation), and rapid progression of muscle weakness, which is common in infant botulism rather than LEMS or MG.

Given these analyses:

- **1. Basic Medical Knowledge Error**: Incorrect identification of the pathophysiology and condition.
- **2. Diagnostic Error**: Misinterpretation of symptoms leading to a misdiagnosis.
- **e. Ignoring Key Clues**: Overlooking critical details indicative of botulism.

The errors made by the student manifest at the level of initial analysis and diagnosis of the condition before reaching treatment implications, thus categorized as basic medical knowledge errors compounded by diagnostic errors.

\`\`\`
1 - b, 2 - e
\`\`\``,category:"1 - b, 2 - e"},"gpt-4o-mini":{explanation:`The student's reasoning leads them to select option B, which indicates autoantibodies against presynaptic voltage-gated calcium channels in the context of Lambert-Eaton Myasthenic Syndrome (LEMS). However, the case presents the symptoms and clinical context more aligned with myasthenia gravis (MG), a condition characterized by antibodies against postsynaptic nicotinic acetylcholine receptors, rather than LEMS which typically occurs in adults.

The clinical review indicates:

- **Weakness** and **ptosis** can signify neuromuscular junction disease, but the sudden presentation at a young age leans towards myasthenia gravis rather than LEMS.
- The **dry diaper and constipation** suggest autonomic involvement, which can also be seen in MG, but the age and acute change in behavior align more with MG than LEMS.
- The **sluggish pupillary response**, weak sucking, and gag reflex point towards a more classic MG presentation, rather than the pattern expected of LEMS.

The correct physiological explanation for the symptoms in MG is option A, which is **antibodies against postsynaptic nicotinic cholinergic ion channels**. 

The student's error is categorized as:
- **1. Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student misinterpreted the condition, conflating the presentations of MG with LEMS, leading to the incorrect pathophysiology choice.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:20,"gpt-4o":{explanation:`The student's answer focuses on celiac disease as the underlying issue, which is a logical consideration given the symptoms of weight loss, bloating, diarrhea, and the interpretation of the D-xylose test as indicating malabsorption unrelated to pancreatic insufficiency. However, let's analyze the key details:

1. **D-xylose test interpretation**: The D-xylose test assesses the absorption of monosaccharides in the small intestine. An increase in renal D-xylose excretion (which indicates that D-xylose is absorbed intestinally) suggests normal intestinal mucosa absorption but potentially a problem elsewhere, such as with enzymatic processes.

2. **Physical examination details**: The bilateral white spots on the conjunctiva, dry skin, and a neck mass are important but were not effectively interpreted and integrated by the student in diagnosing or treating pancreatic insufficiency.

3. **Correct answer reasoning**: Given the normal D-xylose just discussed, the patient's symptoms may be more aligned with a condition that involves maldigestion rather than malabsorption, such as pancreatic insufficiency treated with enzyme replacement.

The student's selection of a gluten-free diet for celiac disease appears to be an inappropriate interpretation. In this case, weight loss due to maldigestion caused by pancreatic insufficiency and not due to intestinal mucosal malabsorption should have been considered. The correct consideration for pancreatic enzyme replacement indicates pancreatic insufficiency.

Therefore, the error is primarily in diagnosis:
- **2: Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student ignored the D-xylose absorption data, which indicates intact mucosal absorption, pointing away from celiac sprue.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student's analysis of the patient's signs and symptoms, as well as their reasoning for selecting a gluten-free diet as the correct management for celiac disease, is conceptually sound. However, the choice of answer suggests a significant misunderstanding of the patient's condition, particularly in relation to the D-xylose test findings. 

Let's analyze the situation:

1. **Patient's condition**: The patient presents with symptoms suggestive of malabsorption: weight loss, bloating, diarrhea, and signs indicating potential malabsorption syndromes. The D-xylose test shows improved renal excretion, which indicates that the intestines are functioning in terms of absorptive capacity.

2. **Differentiating Factors**: The presence of white spots in the conjunctiva likely indicates keratoconjunctivitis, often associated with vitamin A deficiency, which can result from malabsorption. Furthermore, the hard neck mass suggests possible thyroid pathology, which might not be directly related to malabsorption but necessitates further evaluation.

3. **Gluten-free diet (Option A)**: While correct in the context of treating celiac disease, it is not the most appropriate intervention when considering the question regarding what would have prevented her weight loss. 

4. **Pancreatic enzyme replacement (Option B)**: The student's incorrect answer of a gluten-free diet leads to the misclassification of the condition. Celiac disease is consistent with the D-xylose findings, but the context given implies that a condition requiring pancreatic enzyme replacement (a setup indicating fat malabsorption) could be a potential interpretation of weight loss and diarrhea, though the key test results lean towards mucosal damage rather than direct pancreatic issues.

The student's reasoning fails significantly in the diagnostic aspect as they have not recognized the D-xylose test result nor the implications of the median loss of weight could correlate to a secondary issue where enzyme replacement might address the loss due to malabsorption in a related context (potential overlap of celiac-like symptoms).

Thus, while the student identified the patient's condition somewhat accurately — the diagnosis of celiac disease — they made diagnostic errors that led them to mistakenly select a gluten-free diet as the agent preventing weight loss instead of recognizing the most relevant underlying condition that could also cause similar weight loss related symptoms that Pancreatic enzyme replacement would address.

This falls under:
- **2: Diagnostic errors**,
  - **f. Ignoring key clues**: The most important factor being the test results which suggest something different than celiac disease and does not lead to prevention of symptoms through a gluten-free diet specifically.

\`\`\`
2 - f
\`\`\``,category:"2 - f"}},{question_no:21,"gpt-4o":{explanation:`The student is tasked with identifying the structure responsible for inhibiting female internal genitalia. The question is effectively asking about embryological development, particularly regarding how certain structures prevent the development of female internal genitalia during male sexual differentiation.

During embryogenesis in a male fetus, the Sertoli cells secrete Anti-Müllerian Hormone (AMH), which inhibits the development of the Müllerian ducts, the precursors to female internal genital structures (such as the uterus, fallopian tubes, and the upper portion of the vagina).

The student incorrectly identified syncytiotrophoblasts as responsible for inhibiting female internal genitalia. Syncytiotrophoblasts are involved in the implantation and maintenance of the placenta and in hormone production (e.g., hCG), but they do not play a direct role in the inhibition of female internal genitalia during fetal development.

Analyzing the student's errors:

1. **Basic medical knowledge errors**: The student demonstrates incorrect knowledge about embryological development mechanisms, particularly the role of Sertoli cells and AMH in inhibiting the development of female genital structures.
2. **Subcategory**: 
   - **b. Errors in basic medical knowledge**: The student misunderstands the fundamental embryology regarding AMH and the differentiation of male vs. female genitalia.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student has made incorrect assumptions about the functions related to each of the answer options, particularly in relation to inhibiting female internal genitalia. 

The question specifically asks for the structure responsible for the inhibition of female internal genitalia, which is primarily associated with the presence of male hormones (androgens) and specifically involves the role of certain testicular cells.

Analyzing the options:

1. **Spermatogonia**: These are male germ cells involved in the formation of sperm. They do not play a role in female internal genitalia development.
   
2. **Allantois**: This embryonic structure contributes to the formation of the umbilical cord and the urinary bladder but does not directly affect genital differentiation.

3. **Syncytiotrophoblast**: As described, this layer of the placenta does produce hormones like hCG and maintains pregnancy, but it does not inhibit female internal genitalia. 

4. **Sertoli cells**: These cells are in the testes and produce anti-Müllerian hormone (AMH), which is essential for the inhibition of the development of female internal genitalia (Müllerian ducts) during male sexual differentiation.

5. **Leydig cells**: Although they produce testosterone, they do not play a direct role in inhibiting female internal genital development through AMH.

The student's choice of **C. Syncytiotrophoblast** indicates a misunderstanding of the role of these cells in sexual differentiation. The correct answer is **D. Sertoli cells**, as they are responsible for producing AMH, which inhibits the development of female genitalia.

The primary error is:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student ignored the key concept that inhibition of female internal genitalia is specifically achieved by Sertoli cells through the production of AMH, rather than focusing solely on the hormonal support provided by the syncytiotrophoblast during pregnancy.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:22,"gpt-4o":{explanation:`The question describes a case suggestive of rabies exposure due to contact with bats, coupled with characteristic symptoms of rabies, such as confusion, hallucinations, and hydrophobia (agitation when offered water). The question stresses the importance of treatment administered shortly after exposure to prevent the onset of the disease.

Correct analysis and answer selection process:
1. **Rabies is a fatal disease** once symptoms appear, but it can be prevented through timely post-exposure prophylaxis (PEP).
2. PEP for rabies exposure includes the administration of rabies immunoglobulin and a series of rabies vaccines. 
3. The rabies vaccine used post-exposure is a killed-virus vaccine that is highly effective in preventing rabies if given promptly after exposure.

Evaluation of options:
- **A. A toxoid vaccine within ten days of exposure**: Toxoid vaccines are used to prevent diseases like tetanus and do not apply to rabies.
- **B. A killed vaccine within ten days of exposure**: This is the correct response since the rabies vaccine given post-exposure is a killed-virus vaccine.
- **C. Oseltamivir within one week of exposure**: Relevant to influenza, not rabies.
- **D. Venom antiserum within hours of exposure**: Pertains to snakebite treatment, not rabies.
- **E. Doxycycline for one month after exposure**: Used for Lyme disease, unrelated to rabies.

The student incorrectly chose option A, indicating a misunderstanding that a toxoid vaccine would be appropriate for rabies, a critical error in basic medical knowledge regarding vaccine types and their applications.

The error in the student's answer is best categorized as:
- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: Confusion about vaccine types and misuse of "toxoid vaccine" in the context of rabies.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student has incorrectly concluded that the answer is "A. A toxoid vaccine within ten days of exposure". The context provided in the question clearly points towards rabies infection due to exposure to bats, which is very serious and typically requires specific post-exposure treatment.

Analyzing the situation:

- The patient shows classic signs and symptoms consistent with rabies (fever, headache, confusion, hallucinations, agitation at the sight of water).
  
- The appropriate post-exposure prophylaxis (PEP) for rabies includes administering rabies vaccine (a killed vaccine, not a toxoid vaccine) and rabies immunoglobulin. Importantly, rabies vaccines are "killed" vaccines, meaning they contain inactivated virus that can elicit an immune response without causing disease.

- Therefore, the correct answer, according to the guidelines for rabies post-exposure treatment, would be "B. A killed vaccine within ten days of exposure," as it is the specific type of rabies vaccine recommended for PEP.

Errors in the student's reasoning can be categorized as follows:

1. **Basic medical knowledge errors**: The student has misunderstood the types of vaccines used for rabies PEP. A toxoid vaccine is not appropriate for rabies, which uses a killed virus vaccine.

2. **Ignoring key clues**: The student fails to recognize that rabies requires the use of a killed vaccine (not a toxoid) as part of its management after exposure. 

Thus, given that the student made a mistake stemming from a fundamental misunderstanding of rabies vaccine types:

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"}},{question_no:23,"gpt-4o":{explanation:`The student's response indicates they have recognized the patient's condition as neuroleptic malignant syndrome (NMS) and provide a rationale for their choice based on this understanding. They focus on managing the complication of rhabdomyolysis via intravenous hydration to prevent acute kidney injury. However, the student makes an error by not recognizing that the first and most immediate step in the management of NMS is to stop the offending agent, which in this case is risperidone.

Analyzing the options:

1. **Dantrolene**: This is used to help with muscle rigidity in NMS but is not considered the very first step.
 
2. **Intravenous hydration**: Important for preventing kidney injury due to rhabdomyolysis, but not the first-line action.
 
3. **Paracetamol**: Reduces fever but does not address NMS directly.
 
4. **Stop risperidone**: The correct first step for NMS is to stop the offending neuroleptic medication immediately.

5. **Switch risperidone to clozapine**: Incorrect during an acute episode of NMS.

The error can be categorized in the treatment and test method suggestion errors. Particularly, it is an:

- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student emphasizes managing secondary complications (rhabdomyolysis) over the immediate primary treatment necessary in NMS, which is discontinuing the neuroleptic agent.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`The student has correctly identified that the clinical presentation is consistent with Neuroleptic Malignant Syndrome (NMS), which is associated with the use of antipsychotic medications such as risperidone. The student suggests that the best first step in management is intravenous hydration, which is a common approach to address complications such as rhabdomyolysis and acute kidney injury that can result from NMS. 

However, the student fails to recognize that while hydration is important for the overall supportive care of a patient with NMS, the most critical immediate step in managing NMS is to discontinue the offending agent (in this case, risperidone). Stopping the medication directly addresses the cause of NMS and can help alleviate the symptoms more effectively. Intravenous hydration can then be implemented concurrently as supportive care, but stopping the antipsychotic medication is paramount.

Thus, the student's main error is in prioritization. They neglected to recognize that while hydration is important, the immediate best first step is to stop the medication causing NMS.

The error can be categorized as:
- **2. Diagnostic errors**, specifically:
  - **a. Prioritization errors**: The student misjudged the urgency of stopping the offending medication in light of the diagnosis of NMS.

\`\`\`
2 - a
\`\`\``,category:"2 - a"}},{question_no:24,"gpt-4o":{explanation:`The student correctly identifies the genetic disease as Cystic Fibrosis (CF) due to the mutation in a chloride transporter and the history of chronic bronchitis. However, they made an incorrect conclusion regarding the vitamin deficiency complication.

Analyzing the options related to potential vitamin deficiencies in CF:

1. **A. It may result in connective tissue defects**: This is linked to vitamin C deficiency (scurvy) and not relevant to CF's typical deficiencies.

2. **B. It may result in corneal vascularization**: This is linked to vitamin A deficiency, which can indeed cause eye issues; however, in the context of CF, vitamin K deficiency is more commonly associated with complications.

3. **C. It may result in the triad of confusion, ophthalmoplegia, and ataxia**: This is associated with thiamine (vitamin B1) deficiency, typically in cases of Wernicke's encephalopathy, not CF.

4. **D. It may be exacerbated by excessive ingestion of raw eggs**: This relates to biotin (vitamin B7) deficiency due to avidin in raw eggs, not relevant to CF.

5. **E. It may manifest itself as a prolonged PT (prothrombin time)**: This is correct for vitamin K deficiency. CF can lead to fat malabsorption due to pancreatic insufficiency, causing vitamin K deficiency and prolonged PT.

The student made an error in identifying vitamin A deficiency as the most relevant complication, while the question emphasizes vitamin K deficiency-related complications in CF, due to malabsorption of fat-soluble vitamins.

The error is:
- **1: Basic medical knowledge errors**, specifically:
  - **e. Ignoring key clues**: The student has ignored the key information relevant to the common deficiencies associated with CF and their typical manifestations related to vitamin K.

\`\`\`
1 - e
\`\`\``,category:"1 - e"},"gpt-4o-mini":{explanation:`In analyzing the student's answer and reasoning, let's break down the patient's conditions and the potential vitamin deficiencies associated with cystic fibrosis (CF).

The patient presents with a genetic disorder consistent with cystic fibrosis, wherein a mutation in a chloride transporter leads to chronic pulmonary infections and other complications. Cystic fibrosis patients can experience malabsorption issues, often impacting the absorption of fat-soluble vitamins (A, D, E, K) due to pancreatic insufficiency.

Now, let's evaluate the options given the context of chronic illness and associated vitamin deficiencies:

1. **A. It may result in connective tissue defects**: This is typically linked to vitamin C deficiency (scurvy), not vitamin deficiencies related to cystic fibrosis.

2. **B. It may result in corneal vascularization**: This is often associated with vitamin A deficiency. However, the connection presented in the student's logic regarding corneal vascularization as a direct complication of CF is not clearly correct. Corneal vascularization due to vitamin A deficiency is primarily related to xerophthalmia (dry eyes) and nighttime blindness due to the role of vitamin A in eye health, not specifically indicated as a direct result of CF.

3. **C. It may result in the triad of confusion, ophthalmoplegia, and ataxia**: This triad indicates vitamin B12 deficiency, which is not related to CF.

4. **D. It may be exacerbated by excessive ingestion of raw eggs**: This pertains to biotin deficiency, not related to CF and its usual complications.

5. **E. It may manifest itself as a prolonged PT (prothrombin time)**: Vitamin K deficiency can result in prolonged PT due to impaired coagulation factors synthesis. In cystic fibrosis, the malabsorption due to pancreatic insufficiency can lead to fat malabsorption and subsequently vitamin K deficiency, which is a recognized complication.

The error in the student's logic pertains to an incorrect assessment of which vitamin deficiency complication is most relevant considering the context of cystic fibrosis. The direct connection between chronic malabsorption in CF and the need for vitamin K indicates that prolonged PT would be a more appropriate answer than corneal vascularization linked to vitamin A deficiency.

In summary, the student's choice of **B** (corneal vascularization due to vitamin A deficiency) misses the more probable and relevant complication with the chronic illness presented in this scenario, which is actually **E**, citing prolonged PT due to vitamin K deficiency.

The categorization of the student’s error is as follows:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student did not consider the implications of malabsorption in cystic fibrosis leading to complications from vitamin K deficiency.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:25,"gpt-4o":{explanation:`The student correctly recognizes the situation as preterm rupture of the membranes (PROM) and understands the importance of administering antibiotics to prevent infection. However, the student errs in suggesting testing for fetal lung maturity. Testing for fetal lung maturity is generally not necessary before 34 weeks because the management of preterm PROM at 32 weeks focuses on prolonging pregnancy, infection prevention, and promoting fetal lung maturity through betamethasone administration.

Administering betamethasone is crucial in this situation to enhance fetal lung development because it reduces neonatal complications associated with prematurity. Administering ampicillin also helps reduce the risk of infection. Therefore, the most appropriate management at this stage of gestation is indeed to administer betamethasone and ampicillin.

The error lies in:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly suggests testing for fetal lung maturity rather than using betamethasone to enhance lung maturity.

\`\`\`
3 - b
\`\`\``,category:"3 - b"},"gpt-4o-mini":{explanation:`The student identifies the clinical situation of preterm rupture of membranes (PROM) correctly and recognizes the need to administer ampicillin for infection prevention. However, the student's choice of administering ampicillin and testing amniotic fluid for fetal lung maturity (option C) is incorrect for several reasons.

1. **Risk of Infection**: In the case of PROM, particularly before 34 weeks of gestation, it is crucial to initiate management that not only addresses potential infection but also supports fetal lung maturity. The risk of chorioamnionitis is increased with PROM, which necessitates more comprehensive management.

2. **Fetal Lung Maturity**: While testing amniotic fluid for fetal lung maturity could be valuable, it is not a standard immediate next step in the management of PROM. Instead, corticosteroids (such as betamethasone) are administered to enhance fetal lung maturity, especially since the patient is only at 32 weeks gestation.

3. **Immediate Management**: Looking at the options, **option D – Administer betamethasone and ampicillin** is appropriate because it focuses on managing the immediate risks associated with PROM: preventing infection and enhancing fetal lung maturity. The choice of directly testing for fetal lung maturity via amniotic fluid is neither a swift nor standard approach when immediate therapeutic actions can be taken.

4. **Misjudging the indication for cesarean section or induction**: The student's option C does not focus on the best management practice that combines infection prevention with enhancing fetal outcomes.

In summary, the student's error stems from a lack of prioritizing immediate management of PROM in terms of promoting fetal lung maturation and preventing infection, which should come before testing for lung maturity.

The error can thus be categorized as:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student disregarded the critical step of steroid therapy in managing PROM effectively in a preterm context.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:26,"gpt-4o":{explanation:`The patient presents with symptoms and physical examination findings suggestive of mitral stenosis, such as the mid-diastolic rumbling murmur at the apex, jugular vein distention, lung crackles, and bilateral pitting edema. These signs are indicative of heart failure attributable to mitral valve disease, which in this clinical context is likely secondary to rheumatic fever due to a prior Streptococcus pyogenes infection.

Analyzing the options:

1. **A. A bacterium that induces partial lysis of red cells with hydrogen peroxide**: This option refers to alpha-hemolytic streptococci, such as Streptococcus pneumoniae, which causes pneumonia, not related to this case.

2. **B. A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin**: This describes beta-hemolytic streptococci, specifically Streptococcus pyogenes (Group A Streptococcus), the bacteria responsible for rheumatic fever, which can lead to rheumatic heart disease and consequently mitral stenosis. This aligns with the patient's symptoms and the disease mechanism.

3. **C. A bacterium that induces heme degradation of the red cells of a blood agar plate**: This may be interpreted as referring to hemolysis, but the framing doesn't specifically align with common pathogens involved.

4. **D. A bacterium that does not lyse red cells**: Refers to gamma-hemolytic bacteria, such as Enterococcus spp. or Streptococcus bovis, which are not indicated by the patient's condition.

5. **E. A bacterium that requires an anaerobic environment to grow properly**: This refers to anaerobic bacteria and is less relevant to the context of the patient's presentation.

The student's main error is in incorrectly assuming the causative agent is associated with Streptococcus bovis, which typically does not cause the cardiac manifestations described in this context. The student's error falls into:

- **1: Basic medical knowledge error**, particularly:
  - **b. Errors in basic medical knowledge**: Misunderstanding the typical organisms associated with the pathophysiology of rheumatic heart disease and mitral stenosis.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's reasoning and answer selection indicate a misunderstanding of both the clinical context provided in the question and the characteristics of the infectious agents mentioned in the options. 

The patient's presentation includes symptoms of congestive heart failure (CHF), such as palpitations, dry cough, shortness of breath, jugular vein distention, and edema. While the student connects these symptoms to **Streptococcus bovis**, their reasoning leads to an incorrect conclusion about the nature of the bacterium involved.

Here's an analysis of why the answer is incorrect:

1. The patient is not simply suffering from CHF related to **Streptococcus bovis** endocarditis. The presentation of CHF in conjunction with symptoms such as the dry cough, palpitations, and lung crackles, indicates potential underlying pathology, namely related to an infectious agent that affects heart valves and causes significant symptoms. 

2. Each option describes a different type of hemolytic action of bacteria on blood agar plates:
   - **A** describes a bacterium that partially lyses red blood cells, which applies to certain species.
   - **B** describes complete lysis on blood agar, typical of **S. pneumoniae** but not specific to this case.
   - **C** implies heme degradation which may not be relevant in this acute presentation.
   - **D** suggests **a bacterium that does not lyse red cells**, perhaps leading towards **Streptococcus bovis**, but this is insufficient because it does not communicate the complexity of the infection's pathogenesis or the student's analysis of causation in this context.
   - **E** indicates a need for anaerobic conditions, which may not be fitting given the clinical presentation.

Since the clinical feature of "congestive heart failure" suggests more serious and systemic implications—not solely a bacterial infection without red cell lysis—it indicates that student made a misinterpretation in linking both the symptoms and the infectious agent characteristics. 

The primary fault is the failure to accurately assess the importance of the associated symptoms and their infectious etiology, leading to an overly simplistic conclusion about the nature of the infectious agent.

Thus, the student's error can be categorized as follows: 

1. They have incorrectly identified the nature of the bacterium contributing to the clinical syndrome, exemplifying a basic misunderstanding of infectious agents in context with heart diseases.

The categorization of the student's errors is:
\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:27,"gpt-4o":{explanation:`The student misidentifies the best next step in management by suggesting a diagnostic step (CT angiogram) rather than an immediate treatment for a condition that is clinically evident based on the presentation.

Analyzing the case:

1. The patient presents with **acute limb ischemia**, characterized by sudden leg pain, cold and pale leg, diminished sensation, and weakness, which are indicative of an urgent vascular issue, likely due to embolization from his atrial fibrillation.
  
2. In the setting of acute limb ischemia, immediate anticoagulation with a **Heparin drip** is the standard of care to prevent the propagation of a thrombus and to address the acute vascular compromise, especially with high clinical suspicion based on the presentation.

3. A CT angiogram, while useful to further delineate the extent or cause of ischemia, delays critical treatment. In emergent cases like acute limb ischemia, treatment should not be delayed for imaging unless necessary for a specific reason.

The student's errors are:

- **2: Diagnostic error**, specifically:
  - **d. Arbitrary Information Assumption Error**: The student assumes that confirming the diagnosis with imaging is required prior to initiating any treatment despite the classic signs and symptoms indicating acute limb ischemia.
  - **e. Ignoring key clues**: The student ignores the critical clinical indicators that suggest immediate anticoagulation with heparin is warranted.

\`\`\`
2 - d, e
\`\`\``,category:"2 - d, e"},"gpt-4o-mini":{explanation:`The student's answer indicates a misunderstanding of the priority of interventions in cases of acute limb ischemia. The patient presents with clear signs of acute limb ischemia, characterized by sudden leg pain, coldness, pallor, diminished sensation, and significant weakness in the affected leg. 

In such cases, the best next step in management is not to obtain imaging (CT angiogram) at this stage. Instead, the immediate treatment for acute limb ischemia is to start anticoagulation to prevent further clot formation and promote blood flow restoration. Hence, administering a heparin drip (Option C) is the appropriate first step in management.

Analyzing the student's reasoning:
- The student correctly identifies that the symptoms are suggestive of acute limb ischemia but incorrectly assumes that imaging is the top priority.
- The student's response reflects:
  - **3. Treatment and test method suggestion error**, specifically:
  - **d. Arbitrary Information Assumption Error**: The student assumes imaging is necessary before any treatment, which contradicts established emergency protocols for acute limb ischemia.

By failing to initiate anticoagulation or treatment before further diagnostic imaging, the student has made a significant critical error in approach during an emergency situation where speed of intervention can impact limb viability.

\`\`\`
3 - d
\`\`\``,category:"3 - d"}},{question_no:28,"gpt-4o":{explanation:`The student has correctly identified the clinical presentation as consistent with chronic myelogenous leukemia (CML) with symptoms such as fatigue, weight loss, pallor, and splenomegaly, and the specific blood test abnormalities like leukocytosis, basophilia, low leukocyte alkaline phosphatase activity, and the findings on the bone marrow biopsy. However, the student misidentifies the mechanism of the disease.

The key error is in the association of the disease mechanism:

- **1. Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly identifies the mechanism of CML as involving "cytokine-independent activation of the JAK-STAT pathway" rather than the correct mechanism, which is the "unregulated expression of the ABL1 gene" due to the BCR-ABL1 fusion protein that results from the Philadelphia chromosome (t(9;22) translocation). The error may stem from a misunderstanding of the molecular biology underpinning CML.

The correct mechanism for CML involves the BCR-ABL1 fusion protein leading to unregulated tyrosine kinase activity, not activation of the JAK-STAT pathway, which is more commonly associated with myeloproliferative disorders like polycythemia vera.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the patient's clinical presentation, including symptoms and blood work, is consistent with chronic myelogenous leukemia (CML). However, they incorrectly select option B, "Cytokine-independent activation of the JAK-STAT pathway," as the most likely responsible mechanism behind the patient's condition. 

Analysis of the provided options shows that the hallmark of CML is the BCR-ABL1 fusion gene resulting from the Philadelphia chromosome (translocation t(9;22)), which leads to the activation of the tyrosine kinase ABL1. The correct mechanism that corresponds to the pathophysiology of CML involves this fusion protein that causes the disease characteristics, including the mentioned cytokine-independent signaling pathways associated with the activity of BCR-ABL1.

The student's thought process includes the correct acknowledgment that CML involves a chromosomal translocation leading to such activation, but they fail to connect that the gene responsible for this mechanism is specifically the ABL1 gene (as part of the BCR-ABL fusion). 

Considering the errors:
1. **Basic medical knowledge error:** The student does not recognize that the primary abnormality in CML specifically revolves around the BCR-ABL fusion gene.
2. **Ignoring key clues:** They do not acknowledge that while JAK-STAT pathway activation is involved indirectly due to BCR-ABL1, the mechanism of CML specifically relates to the unregulated expression of ABL1.

Therefore, the categorization of the student's error is:
\`\`\`
1 - b, e
\`\`\` 

This indicates that the student had a basic knowledge error about the mechanism responsible for CML and ignored key clues in the question that pointed towards the significance of the ABL1 gene in this context.`,category:"1 - b, e"}},{question_no:29,"gpt-4o":{explanation:`The student identified that the patient is experiencing atrial fibrillation with a rapid ventricular response, which calls for rate control. However, the student erred in their choice of treatment by selecting diltiazem (C) for rate control. Let's analyze the options in the context of the patient's condition:

1. **Atenolol (A)**: A beta-blocker not ideal for patients with atrial fibrillation accompanied by heart failure with reduced ejection fraction, especially when ventricular response is rapid.
  
2. **Verapamil (B) and Diltiazem (C)**: These are non-dihydropyridine calcium channel blockers. Both can control heart rate in atrial fibrillation, but they are contraindicated in patients with heart failure with reduced ejection fraction as they can exacerbate heart failure due to their negative inotropic effect.
    
3. **Propafenone (D)**: Used for rhythm control rather than rate control and is not indicated here.

4. **Digoxin (E)**: A rate-controlling agent that is safer in heart failure compared with diltiazem or verapamil due to its positive inotropic effect, which makes it suitable for this patient. While it has a narrow therapeutic window, it is appropriate in this clinical scenario where heart failure is present.

The student's error relates to the selection of a rate control agent inappropriate for this patient's comorbidities (heart failure with reduced ejection fraction). Choosing diltiazem disregards the contraindication in heart failure, reflecting a fundamental error in treatment suggestion.

The error can be specified as:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Basic medical knowledge error**: The student incorrectly chose a medication contraindicated in the context of heart failure with reduced ejection fraction.

\`\`\`
3 - b
\`\`\``,category:"3 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the patient suffers from atrial fibrillation with a rapid ventricular response, which necessitates effective rate control. However, the choice of diltiazem (option C) as the best choice for rate control in this specific patient is incorrect due to several factors.

Analyzing the patient's clinical scenario:

1. **Atrial Fibrillation**: The patient has atrial fibrillation, indicated by her irregular heart rhythm and a heart rate of 125/min.

2. **Heart Failure**: The patient has NYHA class II chronic heart failure with a left ventricular ejection fraction of 39%. This is a significant factor because, in patients with heart failure, certain medications can have adverse effects.

Now, let's evaluate the options:

- **A. Atenolol**: A beta-blocker that can provide effective rate control and is commonly used in heart failure patients. It would not be ideal to simply increase the dose of metoprolol since the patient is already on a high dose. Atenolol would be a reasonable alternative to consider, especially given her heart failure.

- **B. Verapamil**: While this can control heart rate, it is not recommended in patients with heart failure due to its negative inotropic effects.

- **C. Diltiazem**: Although it can be used for rate control, it is also not the best choice in patients with heart failure since it can exacerbate heart failure symptoms.

- **D. Propafenone**: This is primarily an antiarrhythmic agent that can also control the rate, but it is not typically the first-line treatment in this clinical scenario.

- **E. Digoxin**: This is particularly useful for rate control in patients with heart failure and atrial fibrillation. It has a positive inotropic effect and can help manage heart rates effectively, particularly in this patient's context of heart failure.

The student ignored the key element that digoxin (option E) is generally the most appropriate choice for rate control in patients with both atrial fibrillation and heart failure due to its efficacy and safety profile in this population. 

Therefore, the student primarily made:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student did not adequately consider the patient's heart failure when choosing diltiazem and instead overlooked digoxin, which is better suited for rate control in such patients.

\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:30,"gpt-4o":{explanation:`In the scenario given, we are asked to calculate the Negative Predictive Value (NPV) of a novel AIDS screening examination. The NPV is defined as the proportion of true negatives (TN) out of all negative test results (TN + FN).

From the scenario, we have:
- **True Positives (TP) = 240**: Patients with AIDS who test positive.
- **False Positives (FP) = 5**: Patients without AIDS who test positive.
- Therefore, **True Negatives (TN) = 245**: Patients without AIDS who test negative.
- **Total patients without AIDS = 250**, confirming TN and FP sum.
  
To find the NPV, we needed False Negatives (FN), but the student was incorrect in calculating FN since patients enrolled without AIDS only provide TN and FN which has to be calculated with context:

Since the test group of non-AIDS patients was addressed for FP and TN correctly:
- **TN = 250 - 5 = 245**: Already confirmed without error.

However, this question doesn't provide FN error, its a context that involves Non-AIDS in its current establishemnt. In this case, since the patients' data provided had no false negatives directly.

To solve real NPV, FN is assessed by actually:
- FP is not directly attended for FN since AIDS patients had no false negatives assumed.
- NPV uses all negative tests then: 
But ignoring mistakes and redefining formular:

- Since confirmed 5 should require correct comparison of False negative not calculated rightly initially:

**NPV = TN / (TN + FP) = 245 / (245 + 5) = 245 / 250**

While possible orientations happened with information translated further:

The error student's made:
- Misinterpretation of error attribute for FN, hence the uses calculation wrong assumptions leading to the wrong answer.

\`\`\`
4 - e
\`\`\``,category:"4 - e"},"gpt-4o-mini":{explanation:`The student begins by attempting to calculate the Negative Predictive Value (NPV) correctly but ends up making a fundamental error in their understanding of the components of the equation.

### Understanding NPV
The formula for NPV is:

\\[ \\text{NPV} = \\frac{\\text{True Negatives (TN)}}{\\text{True Negatives (TN)} + \\text{False Negatives (FN)}} \\]

### Information Given in the Question
1. **Total patients **: 250 (with confirmed AIDS)
   - **Positive screening tests**: 240
   - **Negative screening tests**: 250 - 240 = 10 (False Negatives)

2. **Control group (without AIDS)**: 250
   - **Positive screening tests**: 5 (False Positives)
   - **Negative screening tests**: 250 - 5 = 245 (True Negatives)

Thus, we have:
- True Negatives (TN) = 245
- False Negatives (FN) = 10

### Calculation of NPV
Now substituting the numbers into the NPV formula:

\\[ \\text{NPV} = \\frac{TN}{TN + FN} = \\frac{245}{245 + 10} \\]

This corresponds to:

**Option A: 245 / (245 + 10)**

However, the student mistakenly identifies the NPV as **Option B: 245 / (245 + 5)**, which represents a miscalculation of the components, specifically misunderstanding the False Negatives and the overall context of the question.

### Type of Error
The student's error stems from:
- **3. Treatment and test method suggestion error**, specifically:
  - **b. Basic medical knowledge error**: A misunderstanding of how NPV is calculated, especially the components involved (confusing TN and FN).

\`\`\`
3 - b
\`\`\``,category:"3 - b"}},{question_no:31,"gpt-4o":{explanation:`The student identified the condition as rabies, which is accurate given the symptoms and history of potential exposure to bats. However, the student incorrectly concludes that a "toxoid vaccine within ten days of exposure" is the most effective treatment for rabies post-exposure. 

Let's review the options:

1. **A. A toxoid vaccine within ten days of exposure**: Toxoid vaccines are formulated to treat diseases caused by toxins, such as tetanus or diphtheria, not viral infections like rabies. Therefore, a toxoid vaccine would not be effective for rabies post-exposure prophylaxis.

2. **B. A killed vaccine within ten days of exposure**: Rabies post-exposure prophylaxis involves administering a killed (inactivated) rabies vaccine. This is the correct answer.

3. **C. Oseltamivir within one week of exposure**: Oseltamivir is an antiviral medication for influenza, not applicable here.

4. **D. Venom antiserum within hours of exposure**: This is related to venomous bites or stings, not rabies.

5. **E. Doxycycline for one month after exposure**: Doxycycline is used for bacterial infections or prophylaxis against tick-borne diseases, not rabies.

The student's error is primarily in the area of basic medical knowledge regarding the specific type of vaccine used for rabies post-exposure prophylaxis.

The error is:
- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly associates a toxoid vaccine with rabies post-exposure prophylaxis instead of the correct inactivated (killed) vaccine.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the symptoms of the patient suggest rabies, presenting with fever, confusion, hallucinations, and agitation when offered water, which aligns with rabies infection symptoms. However, the student makes an incorrect choice in identifying the most effective treatment.

Analysis of the options presented:

1. **A. A toxoid vaccine within ten days of exposure**: This is incorrect. A toxoid vaccine is not used in the context of rabies post-exposure prophylaxis. The appropriate vaccines for rabies exposure are rabies vaccines which are not classified as toxoid vaccines.

2. **B. A killed vaccine within ten days of exposure**: This is the correct answer. A killed rabies vaccine (which is the rabies vaccine) should be administered as part of post-exposure prophylaxis, particularly when there has been potential exposure to rabies (e.g., bat encounter). This vaccine helps generate an immune response against the rabies virus and can effectively prevent the disease if administered appropriately.

3. **C. Oseltamivir within one week of exposure**: This option is irrelevant here as oseltamivir is an antiviral medication specifically for influenza treatment.

4. **D. Venom antiserum within hours of exposure**: This option is related to snake bites and does not apply to rabies.

5. **E. Doxycycline for one month after exposure**: Doxycycline is not relevant to rabies exposure; it is used for other types of infections.

The error made by the student falls under the category of:

- **1. Basic medical knowledge errors**: They misidentified the nature of the rabies vaccine and categorized it as a toxoid vaccine rather than recognizing that a killed vaccine (rabies vaccine) is required for post-exposure prophylaxis.

Thus, the appropriate categorization of errors here is:

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:32,"gpt-4o":{explanation:`The student has provided an incorrect answer by selecting C. The clinical presentation and the details provided in the question do not align with primary sclerosing cholangitis (PSC) or alpha-1 antitrypsin deficiency (AATD) as assumed by the student. Let's break down the key points and identify the common error:

1. **Patient's Symptoms and Tests**: The patient has jaundice and elevated liver enzymes. The liver biopsy with periodic acid-Schiff (PAS) stain shows PAS-positive globules, which are more characteristic of conditions like alpha-1 antitrypsin deficiency, Wilson's disease, or storage diseases like glycogen storage disorders.

2. **Most Likely Diagnosis in Context**: The presence of PAS-positive globules most closely relates to Wilson disease, leading to copper deposition, which correlates with the key clue of "dark corneal ring on slit-lamp examination," known as Kayser-Fleischer rings.

3. **Common Misstep**: The student incorrectly connected PAS-positive globules directly to PSC, and suggested beading of intra- and extrahepatic bile ducts as a complication, which does not fit the clinical picture provided. The intuitive leap to alpha-1 antitrypsin deficiency is incorrect given the precise staining result presented in the question.

Thus, the student's primary error lies in the diagnostic aspect. The correct choice given the biopsy and symptomatology is the metabolic aspect, particularly Wilson's disease.

The error is:
- **2: Diagnostic error**, specifically:
  - **b. Errors in basic medical knowledge**: The student misinterpreted the PAS stain significance for alpha-1 antitrypsin deficiency, leading to an incorrect diagnosis.
  - **e. Ignoring key clues**: The PAS-positive globules were crucial but misinterpreted for a different condition.

\`\`\`
2 - b, e
\`\`\``,category:"2 - b, e"},"gpt-4o-mini":{explanation:`The student analyzed the situation and correctly identified that the symptoms presented (jaundice, dark-colored urine) and the elevated liver enzymes (ALT and AST) suggest liver dysfunction, potentially due to an underlying condition. They specifically associated the findings with alpha-1 antitrypsin deficiency (AATD), as indicated by the liver biopsy showing PAS-positive globules. However, the student's conclusion regarding the finding associated with AATD is flawed.

The errors made by the student can be categorized as follows:

1. **Ignoring key clues**: 
   - The student correctly noted that the PAS-positive globules suggest AATD, but they failed to recognize that a typical finding associated with this condition is not the beading of biliary ducts observed in PSC. AATD primarily leads to liver disease and lung disease (especially emphysema) but does not cause obstructive changes that would be evident on ERCP related to beading.

2. **Diagnostic errors**:
   - The student incorrectly classified their thinking regarding the connection between AATD and primary sclerosing cholangitis. They confused the expected findings that accompany AATD with those seen in PSC.

The most appropriate additional finding in the context of AATD usually would involve pulmonary symptoms (related to lung disease) or liver findings without the complicating factor of biliary beading.

The correct option that reflects an additional finding in a patient with AATD would relate more accurately to findings such as emphysema or liver fibrosis rather than biliary obstruction.

Given that the student’s conclusion erroneously identifies an association related to another condition (PSC) rather than focusing on AATD itself, the main error falls under the diagnostic and key clues ignored regarding AATD and its related findings.

Consequently, the categorization of the student's errors is:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:33,"gpt-4o":{explanation:`The student opted for option C, suggesting administering ampicillin and testing amniotic fluid for fetal lung maturity in a case of preterm rupture of membranes (PROM) at 32 weeks' gestation. However, this decision reflects an incomplete understanding of standard management protocols for PROM at this gestational age.

Analyzing the relevant aspects:

1. **Preterm Rupture of Membranes (PROM) Management**: 
   - Preterm rupture of membranes at 32 weeks requires a balance of prolonging the pregnancy to allow fetal lung maturity while preventing infection.
   - **Ampicillin** is appropriate to prevent infection.
   - **Betamethasone** should be administered to enhance fetal lung maturity since the obstetric management of pregnancies between 24–34 weeks complicated by PROM often includes corticosteroids unless contraindicated.

The student's consideration to test for fetal lung maturity is not typically necessary when clinical guidelines dictate the provision of corticosteroids in given gestational windows to promote lung maturity rather than invasive testing through amniocentesis, which carries risks. Testing for fetal lung maturity is more relevant when contemplating early delivery in certain clinical scenarios, but not routinely in this context, especially without compelling reasons.

The errors made by the student are primarily treatment management-related:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Errors in basic medical knowledge**: Not understanding the standard management of PROM and the needed interventions to promote fetal lung maturity at 32 weeks of gestation.
  - **e. Ignoring key clues**: Overlooking the standard protocol of administering corticosteroids like betamethasone in cases of PROM at 32 weeks.

\`\`\`
3 - b, e
\`\`\``,category:"3 - b, e"},"gpt-4o-mini":{explanation:`The student concludes that option C is correct, which involves administering ampicillin and testing the amniotic fluid for fetal lung maturity. However, there are several issues with this conclusion.

1. **Understanding the clinical presentation**: The patient is at 32 weeks of gestation and has experienced preterm rupture of membranes (PROM). In such cases, there are specific management protocols to mitigate risks associated with prematurity and infection.

2. **Use of Ampicillin**: The student correctly identifies that ampicillin is needed to minimize the risk of infection for both the mother and fetus due to PROM. However, the next step includes additional consideration for steroid administration.

3. **Importance of Fetal Lung Maturity**: While testing for fetal lung maturity could theoretically guide management, the clinical protocol for handling PROM at this gestational age typically involves administering steroids to enhance lung maturity without delay.

Going through the options:
- **A. Administer betamethasone, ampicillin, and proceed with cesarean section**: A C-section is not indicated unless there are clear fetal distress signs.
- **B. Administer ampicillin and perform amnioinfusion**: Amnioinfusion is not appropriate in this situation if the membranes are ruptured.
- **C. Administer ampicillin and test amniotic fluid for fetal lung maturity**: Although this involves appropriate use of ampicillin, waiting for test results before administering steroids could lead to further complications if the fetus is indeed premature.
- **D. Administer betamethasone and ampicillin**: This option is correct as it provides both immediate prophylaxis against infection and accelerates lung maturation, following standard practice in such cases.
- **E. Administer betamethasone, ampicillin, and proceed with induction of labor**: Induction would typically be avoided at this stage without clear indications for labor.

The student ignores critical management steps in the presence of PROM concerning timing of corticosteroids and their provision to accelerate fetal lung maturation, leading to the incorrect suggestion that testing for lung maturity should take precedence over immediate treatment with steroids.

Thus, the student's main error falls into the following categories:
1. **Basic medical knowledge error (b)**: Confusion about the urgency and appropriate management following PROM, not recognizing the role of betamethasone.
2. **Ignoring key clues (e)**: Dismissing the clear clinical guidelines regarding treatment in the presence of PROM, specifically at 32 weeks.

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"}},{question_no:34,"gpt-4o":{explanation:`The student's analysis of the question reveals several significant misunderstandings about the condition described and the necessary preventive measures.

First, the disease scenario described in the question is classic for diphtheria, not influenza B infection. Diphtheria is caused by the bacterium *Corynebacterium diphtheriae*, which produces an AB exotoxin leading to the characteristic finding of a gray pseudomembrane in the oropharynx, lymphadenopathy, and potentially myocarditis. Therefore, the mention of an AB exotoxin should have been a major clue pointing toward diphtheria rather than a viral infection such as influenza B.

The prevention in the case of diphtheria is through immunization with the diphtheria toxoid vaccine, which leads to the production of circulating IgG antibodies against the exotoxin of *Corynebacterium diphtheriae*. These antibodies are protective against the toxin's effects and thereby prevent the disease and its complications. Therefore, option D, 'Circulating IgG against AB exotoxin,' is the correct answer.

The student's selection of option B and justification reveals errors in their interpretation:
1. **Basic medical knowledge errors**: The student incorrectly identifies the disease as influenza B rather than diphtheria.
2. **Diagnostic errors**: Mistake regarding the disease process involved, leading to incorrect preventive focus.
3. **Miscellaneous**: Incorrect assumption leading to the diagnosis and subsequent incorrect choice of preventive measure.

The primary error category here is a basic medical knowledge error, specifically regarding the mechanism and prevention of diphtheria.

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"},"gpt-4o-mini":{explanation:`The student misinterprets the clinical scenario presented in the question. The case is characterized by a child with a gray pseudomembrane in the oropharynx, which strongly suggests diphtheria, not influenza. The presence of myocarditis and the clinical decline are consistent with the complications associated with diphtheria, which is caused by the diphtheria toxin from the bacterium Corynebacterium diphtheriae.

To analyze the options:

1. **Increased CD4+ T cell count**: While important for overall immune response, this option is not directly relevant to preventing diphtheria.

2. **Secretory IgA against viral proteins**: The student's choice is incorrect because the primary issue here is related to a bacterial infection, not a viral one.

3. **Increased IgM preventing bacterial invasion**: While IgM plays a role in the early immune response, in the case of diphtheria, it is not the best answer.

4. **Circulating IgG against AB exotoxin**: This is the correct response. Circulating IgG antibodies against the diphtheria toxin (an AB exotoxin) would have neutralized the effects of the toxin and prevented the severe complications, including myocarditis.

5. **Improved IgE release from mast cells**: This option is unrelated to preventing diphtheria infection.

The student's answer does not address the bacterial nature of diphtheria and mistakenly focuses on a viral infection (influenza). Therefore, the major error lies in misunderstanding the disease in question.

The student's error can be categorized as:
- **1: Basic medical knowledge error**, specifically:
  - **b. Error in basic medical knowledge**: The student incorrectly interpreted the case, associating it with a viral infection rather than recognizing it as a diphtheria presentation.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:35,"gpt-4o":{explanation:`The student's response demonstrates a misunderstanding of the clinical presentation and the role of specific immunological mechanisms. The question describes a scenario consistent with a **Corynebacterium diphtheriae** infection, characterized by a gray pseudomembrane in the oropharynx and subsequent complications such as myocarditis. The classic prevention measure for diphtheria is vaccination with the diphtheria toxoid, which stimulates the production of antibodies, specifically IgG, against the diphtheria toxin (AB exotoxin).

Analyzing the options:

1. **A. Increased CD4+ T cell count**: Related to cellular immunity, not directly protective against diphtheria toxin.

2. **B. Secretory IgA against viral proteins**: While Secretory IgA is crucial in mucosal immunity, the infection described in the vignette is bacterial, not viral. The student's choice reflects a misunderstanding of the pathogenic organism involved.

3. **C. Increased IgM preventing bacterial invasion**: IgM is involved in initial immune response but is not specific for preventing diphtheria-related complications.

4. **D. Circulating IgG against AB exotoxin**: This is the correct answer. Diphtheria vaccination induces IgG antibodies to neutralize the diphtheria toxin.

5. **E. Improved IgE release from mast cells**: IgE is related to allergic responses, not relevant here.

The student's errors are related to:

- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly identifies the infection as viral rather than bacterial and misunderstands the corresponding immunological protective mechanism.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's response incorrectly identifies the appropriate immunological mechanism that would have prevented the patient's significant complications due to a diphtheria infection. The case suggests that the child has diphtheria, characterized by the gray pseudomembrane in the oropharynx, lymphadenopathy, and myocarditis, leading to death. This is important as it directs the focus to the prevention of bacterial infection and not a viral one like influenza.

Analyzing the student's answer and thought process:

1. **A. Increased CD4+ T cell count**: Although CD4+ T cells are crucial for orchestrating immune responses, they are not specifically related to the prevention of diphtheria-related diseases.

2. **B. Secretory IgA against viral proteins**: The student incorrectly assumes that the infection could be a viral infection (influenza), leading them to prioritize secretory IgA for viral neutralization. This is incorrect as the symptoms align with diphtheria, which is caused by the bacteria *Corynebacterium diphtheriae*.

3. **C. Increased IgM preventing bacterial invasion**: While IgM antibodies do play a role in early immune responses, they also do not directly prevent or mitigate the effects of diphtheria.

4. **D. Circulating IgG against AB exotoxin**: The correct answer is this option because circulating IgG against the diphtheria exotoxin neutralizes the toxin's effects, thus preventing the systemic complications associated with the disease. This includes myocarditis which was a significant issue in this patient.

5. **E. Improved IgE release from mast cells**: This is primarily involved in allergic responses and does not play a role in defending against bacterial infections like diphtheria.

The student's understanding failed primarily due to:
- A foundational error regarding the nature of the infection (diphtheria vs. viral).
- Ignoring key clues surrounding the specific pathogen involved that would necessitate a focus on exotoxin neutralization.

Focusing on the student's critical error leads to the conclusion that:
1. The student's answer was incorrect due to a failure in basic medical knowledge regarding the causative agent of the illness (diphtheria), emphasizing the need for antibody response against the exotoxin, hence a treatment error should be classified here.

The categorization of the student's mistake would be:
\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"}},{question_no:36,"gpt-4o":{explanation:`The student is tasked with determining the most appropriate next step in the management of a 60-year-old man who is undergoing a preoperative evaluation for cholecystectomy. The decision needs to focus on the need to clarify any findings or risk factors identified in the chest x-ray and patient history.

Here is the correct analysis:

- The chest x-ray, which should be part of the evaluation, is not described in detail in the scenario, indicating that its findings might not be clear or abnormal.
  
- The patient has a history of heavy smoking and occupational exposure to potential lung irritants, which are significant risk factors for lung disease. However, these factors do not immediately necessitate a detailed diffusion study unless there are specific symptoms or x-ray findings to suggest interstitial lung disease or similar conditions.

- The correct next step according to the answer key is **E. Request previous chest x-ray**. This is a reasonable approach because comparing with previous imaging can help determine if any x-ray findings are new or have been stable over time, thereby influencing the necessity for additional procedures or tests. 

The errors in the student's answer stem from the following:

1. **Arbitrary Information-Assumption Error (3d)**: The student assumes a pulmonary condition significant enough to require DLCO testing without specific details from the chest x-ray that would suggest interstitial lung disease. 

2. **Ignoring Key Clues (3e)**: The student did not consider that having previous chest images for comparison might be sufficient to determine the stability or progression of his condition before opting for more specialized lung function tests like DLCO. 

Thus, the errors in the student's logic are primarily in the decision-making process concerning the necessity and efficiency of management steps compared to available options.

\`\`\`
3 - d, e
\`\`\``,category:"3 - d, e"},"gpt-4o-mini":{explanation:`The student's reasoning for choosing option C (Perform diffusion capacity of the lung for carbon monoxide) involves a consideration of lung disease and risk factors such as the patient's smoking history and family history. However, there are several fundamental misunderstandings in the student's approach that lead to an incorrect selection.

1. **History and Symptoms**: The patient has no reported respiratory symptoms, and the physical examination and laboratory studies are normal. This indicates that there is no immediate concern that warrants further invasive or highly specialized testing at this stage.

2. **Understanding the Parent's Condition**: While the student's mention of the patient's mother having chronic granulomatous disease suggests some familial pulmonary concerns, this condition itself does not typically relate directly to acute medical management or diagnosis in this patient.

3. **Chest X-ray Findings**: The student's rationale does not fully account for the significance of the chest X-ray. Given the details (not explicitly mentioned in the scenario), if the chest x-ray is indeed normal, there's less justification for immediate advanced lung function testing such as DLCO, especially in the absence of symptoms.

4. **Correct Option E**: Requesting a previous chest x-ray is more appropriate in this situation as it allows for comparison against past images to determine if there have been any changes in lung condition over time. It helps to assess new developments or stability in a patient's lung health and is a logical next step before proceeding with more invasive tests.

Ultimately, the student's decision primarily demonstrates:
- **2: Diagnostic errors**: The student incorrectly diagnosed potential pulmonary disease without evidence from symptoms or abnormal examination findings.
- **e. Ignoring key clues**: They overlooked the significance of the normal chest x-ray in favor of an advanced lung function test which isn’t warranted based on the presented clinical scenario.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:37,"gpt-4o":{explanation:`In this case, the student incorrectly identified **Tetralogy of Fallot** as the congenital heart defect most likely associated with maternal rubella infection during early pregnancy. However, the correct answer is **Patent ductus arteriosus (PDA)**, as this defect is characteristically associated with congenital rubella syndrome.

Here’s the breakdown of where the student might have gone wrong:

1. **Basic Medical Knowledge Error**: The student mentioned that rubella infection can lead to Tetralogy of Fallot, which is incorrect. While Tetralogy of Fallot is a congenital heart defect, it is not classically associated with congenital rubella syndrome. Instead, PDA, along with other manifestations like cataracts and sensorineural deafness, is classic for congenital rubella syndrome.

2. **Ignoring Key Clues**: The student did not correctly prioritize the link between the history of maternal rubella infection and the known associated heart defect, PDA. The mother's symptoms during early gestation strongly suggest rubella, and PDA is a key congenital heart defect associated with rubella.

3. **Diagnostic Error**: This is a misdiagnosis of the heart defect likely present in the neonate, as the key information in the vignette was overlooked or misunderstood in terms of its association with specific congenital heart defects.

Based on the student's answer and rationale, the error primarily lies in basic medical knowledge and, secondly, ignoring key clues. Here’s the categorized error:

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"},"gpt-4o-mini":{explanation:`The student identified that the mother’s history of rubella infection during gestation is a crucial detail in this case. Congenital rubella syndrome can lead to various congenital heart defects. However, the student's ultimate choice of Tetralogy of Fallot as the most likely heart defect does not align with the most common association.

Addressing the student's rationale:

1. While it is true that rubella infection during pregnancy can result in congenital heart defects, the classic defect associated with congenital rubella syndrome is actually the patent ductus arteriosus (PDA). Although Tetralogy of Fallot may occur in some cases, it is not the most characteristic defect linked to rubella.

2. The student accurately explains the components of Tetralogy of Fallot, but fails to prioritize the most likely congenital heart defect arising specifically from rubella exposure, which is patent ductus arteriosus (Option D).

3. The student also mentions the other options but does not acknowledge that PDA is the defect with the strongest association to congenital rubella syndrome.

Thus, the main error lies in the student's choice regarding the diagnosis.

This forms the basis of the error categorization:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student overlooked the specific relationship between patent ductus arteriosus and rubella infection when determining the diagnosis.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:38,"gpt-4o":{explanation:`The student's answer and rationale for choosing option A contain a fundamental misunderstanding regarding the nature of rabies vaccines.

1. **Rabies** is caused by a virus and requires **post-exposure prophylaxis (PEP)** to prevent the disease after suspected exposure, particularly because of the fatal nature of rabies if the infection becomes established.

2. **Post-exposure prophylaxis for rabies** includes both **rabies immunoglobulin administration** and the **rabies vaccine**, which is a **killed vaccine**, administered as soon as possible after exposure to prevent the onset of symptoms.

3. **Option B** – "A killed vaccine within ten days of exposure" – is correct because the rabies vaccine used in post-exposure prophylaxis is, indeed, a killed vaccine given in a series of four doses starting as soon as possible following a potential exposure.

4. The student incorrectly identified the vaccine type in option A as a "toxoid" vaccine. Toxoid vaccines (such as for diphtheria or tetanus) are not related to viral prophylaxis like rabies.

The student's error is primarily in their basic medical knowledge about the type of vaccine used for rabies, leading to selecting the incorrect answer.

Therefore, the student's error falls under:
- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: The student misunderstood the nature of rabies vaccines by labeling them incorrectly as toxoid vaccines rather than killed vaccines.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student concluded that the most effective treatment after exposure to rabies is option A, a toxoid vaccine within ten days of exposure. However, this is not accurate concerning rabies treatment protocols.

To analyze the reasoning:

1. **Correct Diagnosis**: The symptoms given do indeed suggest rabies, which is characterized by confusion, hallucinations, fever, and agitation toward water due to hydrophobia.

2. **Post-Exposure Prophylaxis**: The most effective treatment following possible rabies exposure is post-exposure prophylaxis (PEP), which involves the administration of the rabies vaccine and rabies immunoglobulin.

3. **Key Distinction**: The confusion arises with the terms used in the options. A "toxoid vaccine" typically refers to vaccines that prevent toxin-mediated diseases (like tetanus), whereas rabies vaccines are "inactivated" (killed) viral vaccines. The question asks for the most effective treatment aside from immediate post-exposure rabies vaccination.

4. **Evaluating the Answer**: 
   - **Option A** mentions a toxoid vaccine which would not apply because rabies isn't prevented by a toxoid but rather an inactivated virus.
   - **Option B** is the correct interpretation as it refers to a killed vaccine and aligns with the rabies treatment protocol.

The student's fundamental error lies in:
- **1: Basic medical knowledge error**: The student incorrectly classified the nature of the rabies vaccine as a toxoid vaccine rather than recognizing it as an inactivated vaccine.

Thus, the error made was:
\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:39,"gpt-4o":{explanation:`The student incorrectly identified the injured structure as the lateral collateral ligament (LCL). Let's analyze the scenario:

The key points from the examination are:
- The knee is more lax upon the *valgus stress test*. This indicates injury to the **medial collateral ligament (MCL)**, as the valgus stress test is used to assess the integrity of the MCL.
- There is no laxity upon the *varus stress test*, which indicates an intact lateral collateral ligament (LCL).
- Lachman's test and posterior drawer test have firm endpoints, ruling out anterior cruciate ligament (ACL) and posterior cruciate ligament (PCL) injuries.

The student's reasoning contains errors:
- The student interpreted laxity upon the *valgus stress test* as indicative of a lateral collateral ligament (LCL) injury, which is incorrect. A valgus stress test specifically tests the medial collateral ligament (MCL), not the LCL.

The error in the student's answer falls under:

1. **Basic medical knowledge errors**, specifically:
   - **b. Errors in basic medical knowledge**: Misunderstanding the purpose of the valgus stress test, which led to an incorrect identification of the injured structure.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's reasoning and answer choice indicate a misunderstanding regarding the results of the knee examinations. Let's analyze the patient's findings and the student's response step by step:

1. The patient is a 20-year-old male who has experienced a collision during basketball, suggesting a potential knee injury.
2. Examination findings show:
   - No swelling or effusion in the knee.
   - Intact sensation and strength in both lower extremities.
   - **Increased laxity upon the valgus stress test** compared to the left knee.
   - **Negative varus stress test**, indicating stability on the lateral side.
   - Both Lachman's test and posterior drawer test show firm endpoints, indicating that ACL and PCL are likely intact.

The key pieces of information are:
- The **valgus stress test** indicates a problem in the medial structures of the knee, primarily the medial collateral ligament (MCL).
- The **varus stress test** being negative suggests that the lateral structures, including the lateral collateral ligament (LCL), are likely intact.

The student incorrectly identified the structure involved as the **lateral collateral ligament (LCL)**. However, since there is increased laxity on the valgus stress test, this points towards an injury to the **medial collateral ligament (MCL)**, not the LCL, which would cause laxity on a varus stress test.

The student's error can be categorized as:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student ignored the critical finding from the valgus stress test suggesting injury to the MCL and incorrectly attributed the findings to the LCL.

Thus, the correct categorization of the student's errors is:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:40,"gpt-4o":{explanation:`The student attempted to identify the underlying reason for the patient's acute condition. The correct interpretation of the symptoms given:

1. **Chocolate brown blood color**: This is an indicator of methemoglobinemia, not hemolytic anemia. It results from increased levels of methemoglobin in the blood, which cannot carry oxygen effectively, resulting in symptoms such as shortness of breath and cyanosis.

2. **Primaquine**: While it is true that primaquine can cause hemolytic anemia in patients with G6PD deficiency, the key here is the symptom of chocolate-colored blood, which points to methemoglobinemia rather than hemolysis.

3. The student incorrectly associates the magnesium supplement with the condition, possibly misunderstanding drug interactions, since magnesium is not implicated in increasing the risk of hemolysis with primaquine.

Let's critique the options briefly:

- **A. Nitrate-polluted water** could indeed cause methemoglobinemia, but there's no indication of water intake or exposure mentioned in the vignette.

- **B. Primaquine overdose**: The prescribed dose is standard.

- **C. Pre-existing liver damage from hepatitis A**: This doesn't relate to the current acute symptoms.

- **D. Magnesium and primaquine**: There is no established link for this causing methemoglobinemia or any potentiation of primaquine's side effects.

- **E. Type B adverse drug reaction**: This accurately describes an idiosyncratic reaction not related to the dose and is consistent with the occurrence of methemoglobinemia with primaquine.

The primary error of the student involves categorizing the condition incorrectly due to a misunderstanding of the symptomatology and the pharmacologic profile of primaquine, showing a basic medical knowledge error.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's response indicates a misunderstanding of the relationship between primaquine, the magnesium supplement, and the patient's acute condition.

In this case, the patient's symptoms—acute onset headache, dizziness, shortness of breath, cyanosis (indicated by the blue discoloration of fingers and toes), and notably the chocolate brown color of the blood—are indicative of methemoglobinemia, which may occur due to drug exposure (such as primaquine) and/or pre-existing conditions.

Analyzing the student's answer (D):

- The student claims that the condition developed due to the combination of primaquine and the magnesium supplement, suggesting a link between the two that leads to acute hemolytic anemia. However, this reasoning lacks direct evidence in the clinical context provided. There is no established interaction that explains hemolysis or methemoglobinemia through the combination of these substances.
  
Identifying the correct option (E):

- The condition described fits as a **type B adverse drug reaction** to primaquine in a patient who likely has **G6PD deficiency**, which is not clearly stated but is implied by the acute hemolytic reaction to a medication known to provoke this condition.

The student's focus on a conjunctive effect of the magnesium supplement misrepresents the underlying physiological response to primaquine, which is central to the diagnosis.

The errors committed are categorized as:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student failed to focus on the direct link between primaquine and the adverse effects induced by it, instead attributing it to an unsubstantiated interaction with the magnesium supplement.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:41,"gpt-4o":{explanation:`The student attempted to address the infant's symptoms and related them to possible embryologic errors. Initially, they selected option B, "Complete failure of proximal duodenum to recanalize," suggesting a partial intestinal obstruction leading to yellow vomit. However, the term "yellow vomit" indicates that the vomit is bile-stained, which suggests a post-duodenal obstruction.

Upon reviewing the symptoms:

1. **Abnormal migration of ventral pancreatic bud (A)** leads to annular pancreas, causing duodenal obstruction with bile-stained vomit, fitting the description.
2. **Complete failure of proximal duodenum to recanalize (B)** does not account for bile-stained vomit, as it causes non-bilious vomiting due to obstruction occurring proximal to the bile duct opening.
3. **Error in neural crest cell migration (C)** often results in Hirschsprung disease, which typically presents later in life.
4. **Abnormal hypertrophy of the pylorus (D)** results in pyloric stenosis, characterized by non-bilious projectile vomiting.
5. **Failure of lateral body folds to move ventrally and fuse in the midline (E)** would result in an abdominal wall defect, not consistent with the current symptoms.

The student's answer demonstrates a misunderstanding in the context of the embryologic outcomes related to the infant's presentation. Specifically:

- **1. Basic medical knowledge error**, involving subcategories:
  - **b. Errors in basic medical knowledge**: Misunderstanding the implications of yellow (bile-stained) vomit related to embryologic causes.

The student concluded with an incorrect diagnostic focus on duodenal recanalization failure, misunderstanding its presentation as opposed to an annular pancreas.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The pediatric presentation described in the question indicates that the infant is fussy, regurgitating all feeds, and experiencing yellow vomiting. This clinical scenario is consistent with a condition affecting gastric emptying. The symptoms notably point towards pyloric stenosis, a common infant condition characterized by projectile vomiting of undigested food and possibly bile, leading to yellow vomit.

The student identified option B, "Complete failure of proximal duodenum to recanalize," as the answer. While this embryologic error can lead to duodenal atresia, which can cause similar vomiting behavior due to obstruction, the question descriptions and presentation are more directly associated with pyloric stenosis.

Option D, "Abnormal hypertrophy of the pylorus," directly correlates with the symptoms presented - particularly because pyloric stenosis causes projectile vomiting that may contain bile, consistent with yellow vomit. The classic presentation of pyloric stenosis includes infants who are 3-12 weeks old, typically presenting after the first few weeks of life, which aligns with the patient being 3 weeks old.

The errors therefore can be categorized as follows:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student missed the direct correlation between the vomiting symptoms and pyloric stenosis when wrongly interpreting the embryologic failure of duodenal recanalization.

Thus, the correct categorization of the student's errors is:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:42,"gpt-4o":{explanation:`The student's analysis primarily focuses on malabsorption and associates it with celiac disease, leading to the conclusion that a gluten-free diet would have prevented the patient's weight loss. However, the components of the vignette do not fully support celiac disease as the diagnosis. Let's break down the question:

1. **Weight loss, bloating, and diarrhea**: These are indeed symptoms that can be associated with malabsorption, but they are nonspecific and can result from various underlying conditions.

2. **D-xylose test**: The vignette specifically mentions an "increase in renal D-xylose excretion," which is actually an indication of normal mucosal absorption of carbohydrates. In malabsorption due to celiac disease, D-xylose would be poorly absorbed and thus show decreased excretion. This rules out small intestinal mucosal disease, such as celiac disease.

3. **Signs of vitamin deficiency**: The bilateral white spots on the conjunctiva (Bitot's spots) indicate vitamin A deficiency, and dry skin can be a sign of malabsorption, which can also point to pancreatic insufficiency or related etiologies.

4. **Thyroid mass**: This could possibly be a separate issue (e.g., thyroid nodules), but the details centering around malabsorption should guide the decision.

Option analysis:

- **A. Gluten-free diet**: Based on the normal D-xylose test results, this is not the appropriate management for the presented malabsorption, ruling out celiac disease.

- **B. Pancreatic enzyme replacement**: Given the D-xylose test indicates small bowel function is intact, pancreatic insufficiency could be the cause. This patient's symptoms, along with evidence of fat-soluble vitamin deficiencies, suggest pancreatic insufficiency, for which enzyme replacement would indeed be beneficial.

The student's error type:
- **1: Basic medical knowledge error**, particularly:
  - **e. Ignoring key clues**: Misinterpretation of the normal D-xylose test results as indicative of celiac disease rather than ruling it out and considering pancreatic insufficiency.

\`\`\`
1 - e
\`\`\``,category:"1 - e"},"gpt-4o-mini":{explanation:`The student has accurately identified the possible diagnosis of celiac disease based on the symptoms and laboratory findings. However, the student has made an error in understanding which dietary intervention would have been preventative for this patient's weight loss.

Let's break down the reasoning:

1. The **weight loss, bloating, and diarrhea** along with physical examination findings of dry skin and bilateral white spots on the conjunctiva suggest malabsorption, which is consistent with celiac disease.
  
2. The **hard neck mass that does not move with swallowing** is concerning for a thyroid issue, potentially linked with autoimmune conditions. 

3. The **increase in renal D-xylose excretion** indicates impaired absorption, which aligns with celiac disease, as D-xylose is affected by mucosal integrity in the intestine.

Despite these facts, the student's choice of answer **A. Gluten-free diet** as the most likely preventative measure for the patient's weight loss is incorrect. While it is true that a gluten-free diet is the treatment for celiac disease, it is not what would 'prevent' weight loss from occurring in the context of celiac disease specifically in this scenario.

The correct reasoning leads us to **B. Pancreatic enzyme replacement**. Celiac disease primarily impacts the small intestine where gluten causes damage, leading to nutrient malabsorption. However, malabsorption syndrome can lead to deficiencies that might benefit from pancreatic enzyme replacement, especially when considering the broad causes of malabsorption. 

The student's core error lies in:
- **2. Diagnostic error**, specifically:
  - **b. Errors in basic medical knowledge**: The student did not understand that a gluten-free diet wouldn't prevent weight loss in someone already suffering from celiac disease, regarding pancreatic enzyme replacement being more appropriate if pancreatic insufficiency were involved.

The student's selection of gluten-free diet was fundamentally based on contextual relevance to the symptoms but was misplaced regarding the phrasing of “prevented weight loss,” leading to misunderstanding.

\`\`\`
2 - b
\`\`\``,category:"2 - b"}},{question_no:43,"gpt-4o":{explanation:`The student identifies the symptoms of the 3-week-old infant—such as fussiness, regurgitation of feeds, and yellow vomit—as consistent with pyloric stenosis. However, the student is incorrect in associating these symptoms with pyloric stenosis in this case. 

Let's clarify this:

- **Pyloric stenosis** (answer D) typically presents with non-bilious vomiting because the obstruction is proximal to the duodenum where bile is introduced. The vomit described in the question is yellow, which indicates it is bilious, suggesting that the obstruction is distal to the pylorus and involves the duodenal or more distal regions.
  
- **Abnormal migration of the ventral pancreatic bud** (answer A) could result in an annular pancreas, which can cause duodenal obstruction and may present with bilious vomiting, matching the presentation.

- The other options don't align well with the provided clinical picture.

The student failed to recognize that the yellow color of the vomit indicates bilious vomiting, which more likely relates to duodenal obstruction due to an annular pancreas rather than pyloric stenosis.

The primary category of the student's error is:

- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student ignored the significance of yellow (bilious) vomiting, which is a clue pointing towards a distal obstruction rather than pyloric stenosis.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student correctly identifies that the symptoms presented by the infant — fussiness, regurgitation of feeds, and the presence of yellow vomit — are consistent with **pyloric stenosis**. The explanation provided also accurately describes how pyloric stenosis leads to an obstruction that could result in the given symptoms.

However, the question specifically asks for the **embryologic error** that could account for this presentation. While the student's identification of pyloric stenosis is correct in a clinical context, they failed to connect it with the appropriate embryologic cause listed in the options given. 

In this case, the embryologic error relevant to pyloric stenosis is:

- **D. Abnormal hypertrophy of the pylorus**: This does indeed correspond to the functional disturbance causing pyloric stenosis but does not reflect an embryologic error in terms of developmental failure or anomaly.

Out of the embryologic errors listed, the most relevant option associated with the infant’s condition (pyloric stenosis) reflects an abnormality in the hypertrophy of the pylorus during development — noting that this was indeed the cause of the obstruction.

Other options involve different conditions that do not relate directly to pyloric stenosis. 

Thus, while the student's clinical reasoning is sound in identifying pyloric stenosis, they should have recognized that the actual embryological error would pertain more to the mechanism of the condition rather than selecting it as an answer. Here, the correct embryologic error would be positioned in connection with the disorder rather than being classified simply as "abnormal hypertrophy."

So, the error can be categorized as:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student ignored the question's focus on embryologic errors, failing to link the symptom directly to the correct embryologic error (while they correctly diagnosed the condition).

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:44,"gpt-4o":{explanation:`The student rightly goes through the patient's symptoms and highlights the key signs of delirium. However, they erroneously conclude that the diagnosis should be "None of the above" despite the common occurrence of alcohol withdrawal presenting post-operatively, particularly when an explicit history of alcohol use isn't provided but strongly suspected based on clinical presentation.

Key considerations:

1. **Acute cholangitis**: Unlikely given stable abdominal examination post-cholecystectomy without signs of abdominal distress.

2. **Alcoholic hallucinosis**: Distinguished from delirium tremens by the lack of severe autonomic instability and confusion.

3. **Delirium tremens**: Classic presentation includes autonomic instability (e.g., tachycardia, hypertension), severe confusion, and hallucinations, perfectly aligned with the symptoms presented. Post-operative setting in an undetailed history could suggest covert alcohol withdrawal.

4. **Hepatic encephalopathy**: The examination doesn't mention stigmata of liver disease or pertinent lab findings.

5. **Thyroid storm**: While fever and cardiovascular instability are present, no history or examination hints towards thyroid feature anomalies.

The error resides in misunderstanding the likelihood and context of delirium tremens as a clinical likelihood despite non-explicit history cues. This is notably a diagnostic error due to:

- **d. Arbitrary Information Assumption Error**: The student does not fully consider the possibility of alcohol withdrawal evidenced by classic sympathetic signs due to a lack of explicit history context, misjudging possible covert history.
  
\`\`\`
2 - d
\`\`\``,category:"2 - d"},"gpt-4o-mini":{explanation:`The student's response to the question suggests a misunderstanding of the symptoms related to the options provided and the need for careful consideration of delirium in the post-operative context, especially in relation to substance use and withdrawal.

Analyzing the patient's presentation:

- **Tachycardia** (pulse 112/min)
- **Diaphoresis** (sweating)
- **Agitation** (unable to remain still)
- **Disorientation** (oriented to person but not place or time)
- **Increased temperature** (38.0°C / 100.4°F)

These symptoms can suggest a hyperadrenergic state, often associated with serious conditions such as delirium tremens, thyroid storm, or severe infections. However, the essential consideration here is that while she experienced a post-surgical complication, the signs of confusion and agitation also align with acute delirium.

Let's evaluate the student's option choices:

1. **Acute cholangitis**: The abdominal examination is unremarkable, making this diagnosis less likely.
2. **Alcoholic hallucinosis**: The student indicates this option but does not recognize that the key symptoms for this condition typically arise after a period of abstinence from alcohol; no history is provided in the question.
3. **Delirium tremens (Answer C)**: While the student suggests that this is unlikely without a history of alcohol withdrawal, the symptoms presented do fit with the condition of delirium tremens due to autonomic instability, even in patients without explicitly noted alcohol history.
4. **Hepatic encephalopathy**: This generally has a slower onset and would likely include findings related to liver failure, such as asterixis.
5. **Thyroid storm**: While the symptoms might somewhat overlap, there’s no prior indicator of hyperthyroid status, making it less likely.

The student's error is primarily in the context of diagnostic reasoning: 
- They missed recognizing that delirium tremens could present even in the absence of documented alcohol withdrawal if there is a high suspicion. Attempting to dismiss it as "unlikely" without a clear history further indicates an **e. Ignoring key clues**, as they didn't fully consider the possible implications of autonomic instability leading to delirium in a post-operative patient.

Thus, the student indeed did not select the correct likely diagnosis (C), despite their assertion that none of the options fit. The student stays aware of the symptoms but inaccurately downplays a plausible cause.

This culminates in categorizing the error:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:45,"gpt-4o":{explanation:`The student's response suggests the diagnosis of serotonin syndrome and proposes that Cyproheptadine, a serotonin antagonist, could be a treatment option. However, the primary diagnosis based on the given information is more likely to be Neuroleptic Malignant Syndrome (NMS) or a similar state of hyperthermic crisis, given the muscle rigidity and lack of tremor or clonus. 

The correct treatment for NMS is Dantrolene, which relaxes skeletal muscles and reduces the risk of further complications from muscle rigidity and hyperthermia. The student's choice of Cyproheptadine indicates an assumption of serotonin syndrome, which does not align with the most distinguishing symptom of significant muscle rigidity without clonus, pointing away from serotonin syndrome and more towards NMS or malignant hyperthermia-related conditions.

The error in the student's analysis is primarily diagnostic:

- **2: Diagnostic error**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstanding or overlooking the clinical presentation of neuroleptic malignant syndrome versus serotonin syndrome, misplacing rigidity without clonus which is more indicative of NMS than serotonin syndrome.

\`\`\`
2 - b
\`\`\``,category:"2 - b"},"gpt-4o-mini":{explanation:`The student has misinterpreted the clinical scenario and the corresponding treatment options. Let’s analyze the situation:

The patient presents with altered mental status, muscle rigidity, hyperthermia, and tachycardia, which suggest a possible neuroleptic malignant syndrome (NMS) or serotonin syndrome. However, significant muscle rigidity without tremor or clonus in a patient with altered mental status is more indicative of NMS, particularly considering the possible history of medication overdose. 

Among the options provided:
- **A. Naloxone**: This would be indicated if an opioid overdose was suspected, but it is not the best choice here.
- **B. Dantrolene**: This is the correct treatment for neuroleptic malignant syndrome as it helps to reduce muscle rigidity and hyperthermia.
- **C. Fenoldopam**: This is a dopamine agonist used primarily for hypertension and is not indicated here.
- **D. Cyproheptadine**: While it is a serotonin antagonist, it is not the best option given the strong clinical presentation for NMS.
- **E. Flumazenil**: This is a benzodiazepine antagonist that could precipitate seizures in poly-drug overdoses and is inappropriate given the unknown nature of the overdose.

The student concluded that cyproheptadine is appropriate for treating serotonin syndrome based on muscle rigidity symptoms. However, as stated, the significant rigidity without tremors or clonus leans toward NMS, and dantrolene is the ideal treatment when considering the symptoms.

The student's reasoning reflects:
- **2. Diagnostic errors**: making incorrect diagnostic conclusions regarding the patient’s condition. This leads to an inappropriate treatment suggestion.
- **e. Ignoring key clues**: The student fails to properly incorporate the physical examination findings, particularly the muscle rigidity and altered mental status, into their diagnosis.

Given this analysis, the main error in diagnostic reasoning has led to the incorrect treatment choice. Thus, the categorization of the error is:

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:46,"gpt-4o":{explanation:`The student seems to have misunderstood the calculation of the Negative Predictive Value (NPV), which is correctly defined as the probability that subjects with a negative screening test truly are disease-free. The formula for NPV is:

\\[ \\text{NPV} = \\frac{\\text{True Negatives (TN)}}{\\text{True Negatives (TN)} + \\text{False Negatives (FN)}} \\]

In this scenario, the data provided are as follows:
- 250 patients actually have AIDS (cases)
- 240 tested positive (true positives)
- 10 tested negative (false negatives)
- 250 patients do not have AIDS (controls)
- 5 tested positive (false positives)
- 245 tested negative (true negatives)

Given this information, the True Negatives (TN) are 245 (patients without AIDS who tested negative), and the False Negatives (FN) are 10.

The correct calculation for the NPV should be:

\\[ \\text{NPV} = \\frac{245}{245 + 10} = \\frac{245}{255} \\]

Hence, the correct answer is option **A: 245 / (245 + 10)**.

The student's error was in incorrectly identifying the formula for NPV and using an incorrect denominator. They erroneously used option B, which they incorrectly rationalized in the explanation. This demonstrates:

- **4: Miscellaneous error**, specifically:
  - **f. Calculation and statistical interpretation errors**: The student made an error in the application of the statistical formula for NPV.

\`\`\`
4 - f
\`\`\``,category:"4 - f"},"gpt-4o-mini":{explanation:`The student's selection of option B for calculating the Negative Predictive Value (NPV) contains an error in the logic and formula application for NPV.

To clarify:

1. The formula for NPV is:
   \\[
   \\text{NPV} = \\frac{\\text{True Negatives}}{(\\text{True Negatives} + \\text{False Negatives})}
   \\]

2. Reviewing the data:
   - **True Negatives**: The number of patients without AIDS that tested negative (i.e., those who do not have AIDS and did not test positive): 
     - 250 patients without AIDS - 5 patients with false positives = 245 true negatives.
   - **False Negatives**: The number of patients with AIDS that tested negative: 
     - 250 patients with AIDS - 240 patients tested positive = 10 false negatives.
  
3. Therefore, the correct calculation for NPV is:
   \\[
   \\text{NPV} = \\frac{245}{245 + 10} = \\frac{245}{255}
   \\]

The student's answer was identified as B, which states:
\\[
\\text{NPV} = \\frac{245}{245 + 5}
\\]
This calculation mistakenly assumes that 5 is the number of false negatives, which is incorrect. The false negatives are, in fact, 10. 

Here’s the breakdown of the errors:
- The student made a **3. Treatment and test method suggestion error**, specifically:
  - **b. Basic medical knowledge error**: There was a misunderstanding in the calculation of NPV where the student incorrectly assumed the false negatives, leading them to select the wrong option.

Thus, the correct categorization is:
\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:47,"gpt-4o":{explanation:`The student's response suggests using Diltiazem for rate control in the patient, despite it not being among the given options. However, let's evaluate the student's thought process and identify where errors occurred.

1. **Patients with heart failure and reduced ejection fraction (LVEF < 40%)** generally need careful management to avoid exacerbation of heart failure. Certain medications, such as non-dihydropyridine calcium channel blockers (like Verapamil and Diltiazem), are typically avoided because they can depress cardiac function further.

2. The student correctly identifies that the patient is likely experiencing atrial fibrillation with rapid ventricular response and notes the importance of controlling the heart rate in this context.

3. For patients with AFib and reduced ejection fraction, the preferred medications for rate control are **beta-blockers** and **Digoxin**. The student notes the patient is already on Metoprolol, a beta-blocker, at a substantial dose of 200 mg, and suggests either optimizing this dose or adding an alternative medication.

4. However, suggesting Diltiazem for such a patient is inappropriate due to its potential negative impact on patients with reduced LVEF. Instead, **Digoxin** is indeed appropriate for rate control in AFib, especially in patients with heart failure and reduced ejection fraction.

The student's main error is not recognizing the contraindication of Diltiazem in patients with heart failure and reduced LVEF.

The error is classified as:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Errors in basic medical knowledge**: The student appears not to fully grasp the contraindication of non-dihydropyridine calcium channel blockers like Diltiazem in patients with heart failure and reduced ejection fraction.

\`\`\`
3 - b
\`\`\``,category:"3 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the patient is likely experiencing atrial fibrillation with a rapid ventricular response, supported by her symptoms and the echocardiographic findings. However, the student chooses Diltiazem as an alternative to Digoxin, which is one of the options provided (even though the student claims it is not among the listed options), and this introduces an error in reasoning and prioritization of treatment based on the current medication regimen and patient's heart failure status.

Analyzing the situation:

1. **Patient Background**: The patient has a history of myocardial infarction and chronic heart failure with a reduced left ventricular ejection fraction (LVEF), which is critical in determining appropriate treatment for her atrial fibrillation.
  
2. **Current Medications**: The patient is on Metoprolol, a beta-blocker indicated for patients with heart failure. The consideration of optimizing this beta-blocker before switching to another medication is sound practice.

3. **Available Treatment Options**:
   - **A. Atenolol**: Also a beta-blocker, less commonly used in heart failure given its selective mechanism.
   - **B. Verapamil**: A non-dihydropyridine calcium channel blocker that is not typically recommended in patients with heart failure due to negative inotropic effects.
   - **C. Diltiazem**: Similar to Verapamil in its effects, and while it may control heart rate, it is generally avoided in systolic heart failure.
   - **D. Propafenone**: An antiarrhythmic that could be harmful in patients with structural heart disease and heart failure.
   - **E. Digoxin**: Approved for rate control in patients with heart failure, particularly with atrial fibrillation, and can help increase vagal tone.

While the student discusses the optimal management in a reasonable manner, their ultimate choice to prioritize Diltiazem (which is not presented in the options) misleads from a rational evaluation considering the patient's heart failure and the aim of controlling her heart rate effectively. Instead, **Digoxin** would be a justified choice given its established role in heart failure patients with AF. 

The primary error in the student's answer falls under the category of:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student ignores the established protocol of using Digoxin for rate control in patients with heart failure, instead favoring an alternative not provided within the constraints of the exam options.

\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:48,"gpt-4o":{explanation:`The student's analysis and conclusion indicate a fundamental misunderstanding of the relationship between the symptoms, the CT scan findings, and the underlying pathology. Specifically, the student's mistake lies in the interpretation of the symptoms and their relationship to renal vein thrombosis, which is apparent from the CT findings and urinalysis.

Here is the logical progression:

1. **Symptoms and Findings**: The patient has a history of chronic hepatitis B, proteinuria with fatty casts, and a filling defect in the right renal vein, indicative of renal vein thrombosis. The presence of periorbital edema and other signs suggest nephrotic syndrome, which leads to a hypercoagulable state.
   
2. **Underlying Cause of Renal Vein Thrombosis**: In nephrotic syndrome, there is a loss of antithrombin III through the urine, which increases the risk of thrombosis, including renal vein thrombosis.

3. **Correct Option**: Option B, "Loss of antithrombin III", corresponds to the loss of natural anticoagulants in nephrotic syndrome, leading to an increased risk of thromboembolic events, such as renal vein thrombosis.

The student's failure to connect nephrotic syndrome and the associated hypercoagulable state with the loss of antithrombin III as the cause of renal vein thrombosis suggests errors in basic medical knowledge and in diagnostic reasoning.

The student's errors are:
- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstanding the implications of nephrotic syndrome and its relation to antithrombin III loss and renal vein thrombosis.

- **2: Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student did not properly integrate the CT findings with the urinalysis results (indicative of nephrotic syndrome), leading to a misunderstanding of the pathophysiology involved.

\`\`\`
1 - b; 2 - e
\`\`\``,category:"1 - b; 2 - e"},"gpt-4o-mini":{explanation:`In analyzing the student's response, we find that they have correctly identified the presence of renal vein thrombosis, as indicated by the patient's symptoms and CT findings. The patient’s clinical presentation of periorbital edema, abdominal distention, and lower extremity edema correlates with fluid retention often seen in hepatic vein obstruction. The student attributes the renal vein findings to Budd-Chiari syndrome as a consequence of hepatic vein obstruction, which is accurate. 

However, the crux of the problem is to determine the "most likely underlying cause" that relates to the renal vein findings from the provided options (A-E). The key aspect to note here is that Budd-Chiari syndrome can lead to renal vein thrombosis via a deficiency of antithrombin III, a common complication seen in hepatic dysfunction.

Let's evaluate the provided options:
- **A. Acquired factor VIII deficiency**: This is not the primary cause in this case.
- **B. Loss of antithrombin III**: This option indicates a major risk factor for thrombosis, which fits with the overall scenario. The patient's chronic liver disease could lead to a deficiency in antithrombin III, increasing the risk of thrombosis in the renal vein.
- **C. Impaired estrogen degradation**: This is not directly relevant to the case at hand.
- **D. Antiphospholipid antibodies**: This may cause thrombosis but is unlikely the primary cause here given the context.
- **E. Paraneoplastic erythropoietin production**: This does not fit the findings described.

The student did not recognize that while the options may not exactly match the direct mechanism of hepatic vein obstruction, option B (Loss of antithrombin III) is the most relevant to the pathophysiological process leading to renal vein thrombosis in this context. 

The student also made an **a. Prioritization error**, as they should have prioritized the known effects of chronic liver disease on coagulation factors, particularly antithrombin III, which directly relates to their observations and findings.

Considering these points, the student's answer fits the following errors:

\`\`\`
2 - a, b
\`\`\``,category:"2 - a, b"}},{question_no:49,"gpt-4o":{explanation:`The student focused on the symptoms of flushing and pruritus as potential side effects of niacin and concluded that switching to fenofibrate was the best solution. However, the student's error lies in the failure to recognize common practices to manage the side effects of niacin without altering the lipid-lowering medication regimen.

Analyzing the options, the correct approach involves:

1. **Administer ibuprofen**: Ibuprofen and other NSAIDs, or aspirin, are frequently used to mitigate the flushing caused by niacin. This option directly addresses the symptom management while maintaining the effective use of niacin for lipid control. This is the correct next step in management.

2. **Measure urine hydroxyindoleacetic acid levels**: This test is unrelated to the current symptoms and only relevant for carcinoid syndrome, which does not match the patient's clinical picture.

3. **Measure urine metanephrine levels**: This test is meant for detecting pheochromocytoma, which is not consistent with the patient's presentation.

4. **Switch lisinopril to hydrochlorothiazide**: This change does not address the specific side effects being experienced and would unnecessarily alter blood pressure management without a direct cause.

5. **Switch niacin to fenofibrate**: While this might seem a logical approach to avoid the side effects, it overlooks the controlled approach of managing flushing with OTC remedies like ibuprofen or aspirin before discontinuing or switching medications.

The primary error made by the student was a failure to consider typical symptomatic treatments of niacin side effects.

The error falls into:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student did not consider managing niacin's flushing with ibuprofen or aspirin directly, opting instead for an unnecessary medication switch.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`In the context of the provided question and the student's answer, let's evaluate the reasoning and pinpoint errors logically.

The patient exhibits generalized reddening of her skin and itching, which appear to be side effects of her ongoing niacin therapy. The student identifies this correctly and suggests switching from niacin to fenofibrate in order to manage her dyslipidemia without the side effects that niacin causes.

However, the student's conclusion overlooks a critical approach to managing niacin-induced flushing and itching. Rather than changing the dyslipidemia medication outright, a common practice is to manage the symptoms through the administration of ibuprofen or aspirin, which can alleviate flushing. 

Analyzing the options:
1. **A. Administer ibuprofen**: This is an appropriate management step to alleviate flushing, which is a known side effect of niacin. While it may not change the underlying condition, it does directly address the patient's current symptoms.
2. **B. Measure urine hydroxyindoleacetic acid**: This is irrelevant to the current symptoms or the clinical picture.
3. **C. Measure urine metanephrine levels**: Also not relevant here; similar to option B.
4. **D. Switch lisinopril to hydrochlorothiazide**: This is not pertinent to managing the skin symptoms or addressing her hyperlipidemia.
5. **E. Switch niacin to fenofibrate**: Although a valid consideration, it may not be necessary if the symptoms can be effectively managed with ibuprofen.

The student's response has a significant flaw in prioritizing a medication switch over a more immediate and common management strategy (administering ibuprofen). 

Thus, the error is categorized as:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student did not properly consider the appropriate initial management of side effects from niacin, which is typically done with ibuprofen or aspirin before deciding to switch medications.

\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:50,"gpt-4o":{explanation:`The student's understanding of how to calculate Negative Predictive Value (NPV) is incorrect, which leads to calculation errors in the interpretation of data.

Let's break down the question and the necessary calculations:

- **True Negatives (TN)**: This is the number of patients without the disease who test negative. From the question, it's stated there are 245 true negatives (250 patients without AIDS - 5 false positives).

- **False Negatives (FN)**: This is the number of patients with the disease who test negative. From the question, there are 10 false negatives (250 patients with AIDS - 240 true positives).

The correct formula for NPV:

\\[
NPV = \\frac{\\text{True Negatives}}{\\text{True Negatives} + \\text{False Negatives}}
\\]

So the calculation would be:

\\[
NPV = \\frac{245}{245 + 10} = \\frac{245}{255}
\\]

In this scenario, the student selected option B (245 / (245 + 5)), which is incorrect, both in logic and in reaching the right NPV calculation.

The student's errors:
- **4: Miscellaneous**, specifically:
  - **f. Calculation and statistical interpretation errors**: The student made errors in calculating and interpreting statistical values, leading to an inappropriate choice of an answer option.

\`\`\`
4 - f
\`\`\``,category:"4 - f"},"gpt-4o-mini":{explanation:`The student's response indicates a misunderstanding of the components required to calculate the Negative Predictive Value (NPV). Firstly, let's clarify what we need:

The NPV is calculated with the formula:
\\[ \\text{NPV} = \\frac{\\text{True Negatives}}{\\text{True Negatives} + \\text{False Negatives}} \\]

From the data provided:
- Number of patients with AIDS: 250
- True positives (AIDS patients who tested positive): 240
- False negatives (AIDS patients who tested negative): 10 (calculated as \\(250 - 240\\))
- Number of patients without AIDS: 250
- False positives (patients without AIDS who tested positive): 5
- True negatives (patients without AIDS who tested negative): 245 (calculated as \\(250 - 5\\))

Thus, the NPV is calculated as:
\\[ \\text{NPV} = \\frac{245}{245 + 10} = \\frac{245}{255} \\]

However, the student incorrectly stated the NPV calculation as \\( \\frac{245}{245 + 5} \\), leading to the answer option B. This is incorrect because the denominator must include the false negatives, not the false positives. 

The student's reasoning does not follow the proper calculation, showing:
1. **Diagnostic Error**: Incorrect interpretation of the components needed for calculating the NPV.
2. **Basic Medical Knowledge Error**: Demonstrating a lack of understanding of how to calculate predictive values correctly.

The correct answer would have been option A:
\\[ \\text{NPV} = \\frac{245}{245 + 10} \\]

This leads to the categorization of their answer as follows:
\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"}},{question_no:51,"gpt-4o":{explanation:`The student is incorrect in their assessment of the situation. The clinical presentation and urinalysis results strongly suggest nephrotic syndrome, characterized by significant proteinuria, edema, and potential complications of renal vein thrombosis. The historical context of chronic hepatitis B suggests that this patient likely has membranous nephropathy, a condition known to cause loss of antithrombin III due to heavy proteinuria, thereby increasing the risk of thromboembolic events like renal vein thrombosis.

The student's error lies in the diagnostic interpretation. They have incorrectly associated the findings with Budd-Chiari syndrome due to hepatic vein obstruction, which is not supported by the clinical details presented, specifically the renal features and proteinuria. 

Here is the evaluation:

1. **The patient has right flank pain, hematuria, edema, and significant proteinuria**: Suggestive of nephrotic syndrome with a complication of renal vein thrombosis.
   
2. **Loss of antithrombin III due to nephrotic syndrome is a well-known cause of hypercoagulability**, leading to thrombotic events such as renal vein thrombosis.

3. **None of the other options would fit the clinical picture adequately**:

   - **Acquired factor VIII deficiency** would cause bleeding tendencies, not thrombosis.
   - **Impaired estrogen degradation** might relate to liver function but doesn't directly relate to renal vein thrombosis.
   - **Antiphospholipid antibodies** would cause thrombosis but would be unusual given the context.
   - **Paraneoplastic erythropoietin production** might cause polycythemia, not directly thrombosis.

Thus, the correct answer based on the presentation is **loss of antithrombin III**, due to nephrotic syndrome secondary to chronic hepatitis B infection.

The student's paper exhibits:
- **2: Diagnostic error**, specifically:
  - **d. Arbitrary Information Assumption Error**: The student assumed hepatic vein obstruction and Budd-Chiari syndrome without evidence from the case.

\`\`\`
2 - d
\`\`\``,category:"2 - d"},"gpt-4o-mini":{explanation:`The student presented an insightful overview of the patient's condition and correctly identified that the clinical picture and imaging findings suggest renal vein thrombosis due to Budd-Chiari syndrome, resulting from hepatic vein obstruction. However, the student failed to select any of the available options provided in the question.

When considering the underlying mechanisms related to renal vein thrombosis in patients with chronic liver disease, the most appropriate answer among the choices presented is **B. Loss of antithrombin III**. Antithrombin III is a natural anticoagulant that can become depleted in the setting of liver disease, leading to a prothrombotic state and an increased risk for thromboembolic events, including renal vein thrombosis.

The error in the student's response can be categorized as follows:
- **2. Diagnostic error**, primarily noting:
  - **d. Arbitrary Information Assumption Error**: The student arbitrarily assumed there was no relevant answer among the choices without adequately considering how hepatic vein obstruction correlates with renal vein thrombosis through the mechanisms outlined in option B. Instead of recognizing that renal vein thrombosis can be a consequence of antithrombin III deficiency, the student dismissed the options entirely.

Therefore, the correct categorization of the student's reasoning errors is:

\`\`\`
2 - d
\`\`\``,category:"2 - d"}},{question_no:52,"gpt-4o":{explanation:`The student's answer and reasoning contain several fundamental errors in basic medical knowledge and diagnostic interpretation.

### Analyzing the Question:

Based on the clinical presentation:

- The patient displays symptoms of congestive heart failure (jugular vein distention, bibasilar crackles, and bilateral edema) with a notably described mid-diastolic rumbling murmur best heard at the apex. These signs are characteristic of **mitral stenosis**, which is often a long-term sequela of rheumatic heart disease.
  
- The infectious etiology linked to rheumatic heart disease is **Streptococcus pyogenes** (Group A Streptococcus), resulting from untreated or poorly treated streptococcal pharyngitis.
  
- **Streptococcus pyogenes** exhibits beta-hemolysis, meaning it induces complete lysis of red cells on a blood agar plate through an oxygen-sensitive cytotoxin.

#### Evaluation of the Student's Answer and Explanation:

1. The student incorrectly identified the clinical picture as **infective endocarditis** rather than rheumatic heart disease. The distinct diastolic murmur should have directed the diagnosis towards rheumatic mitral stenosis, not an endocarditis process.
   
2. **Streptococcus viridans** is indeed alpha-hemolytic, but the scenario doesn't fit infective endocarditis caused by this organism. The key error is failing to recognize the pathophysiology linked to the murmur and underlying condition.
   
3. The student mischaracterized Streptococcus pyogenes and its relation to rheumatic fever.

Errors present in the student's response:
- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstanding the causative organism and pathological process related to rheumatic mitral stenosis.
  - **e. Ignoring key clues**: Overlooking the description of the murmur and its classical association with mitral stenosis and rheumatic fever.
  
Therefore, the student's incorrect answer derives not from a simple diagnostic misstep, but from improper linkage of symptoms to their underlying pathophysiological processes.

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"},"gpt-4o-mini":{explanation:`The student's rationale describes a clinical presentation of a patient with signs suggestive of congestive heart failure and potentially infective endocarditis, particularly caused by **Streptococcus viridans**. While the initial rationale regarding the symptoms and examination findings is commendable, the understanding regarding the nature of the bacterial agent in question is flawed.

Let's assess the student's overall reasoning and the errors present:

1. **Misdiagnosis of the infective agent**: 
   - The student claims that **Streptococcus viridans**, an alpha-hemolytic streptococcus, is responsible for the patient's condition and states that it fits option D: "A bacterium that does not lyse red cells." However, **Streptococcus viridans** is known to cause partial lysis (alpha-hemolysis) on blood agar and not complete lysis, which contradicts the choice described.

2. **Inaccurate classification of hemolysis**: 
   - The answer option D is incorrect. The student has incorrectly interpreted that the organism proposed does not lyse red cells at all, which is misaligned with how **Streptococcus viridans** behaves. 

3. **Ignoring key clues**: 
   - The student has incorrectly matched the clinical presentation (of infective endocarditis indicated by the mid-diastolic murmur and other signs) to an agent correctly categorized as beta-hemolytic streptococci (like S. pyogenes) or other mechanisms that they claim don’t involve hemolysis, while the exam question asks for the specific nature of the infectious agent.

Thus, the overarching error is a misunderstanding of the nature of the infectious agent related to the described condition, fitting it with incorrect bacterial classifications. The nature of the options suggests a clearer awareness of gram-positive cocci and hemolytic patterns, and the student seems to exhibit missteps in this understanding.

The correct answer should be option B (a bacterium that induces complete lysis) if it was discussing S. pyogenes; however, for a closer examination of what the agent might be or could include for infective endocarditis cases, this student mistakenly adheres to option D.

Instead, the errors made fall into the following categories:
- **2. Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student ignored the specific hemolytic activity of the organism as it relates to the infective endocarditis context.

\`\`\` 
2 - e
\`\`\``,category:"2 - e"}},{question_no:53,"gpt-4o":{explanation:`Upon reviewing the student's calculation and interpretation of the screening test data, let's analyze the error in detail.

The key provided data points are:
- True Positives (TP): 200
- False Positives (FP): 50
- True Negatives (TN): 240
- False Negatives (FN): 10

The student performs the calculations as follows:

1. **Sensitivity**: 
   \\[
   \\text{Sensitivity} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{200}{200 + 10} = \\frac{200}{210} = 0.952, \\text{or } 95\\%
   \\]

2. **Specificity**: 
   \\[
   \\text{Specificity} = \\frac{\\text{TN}}{\\text{TN} + \\text{FP}} = \\frac{240}{240 + 50} = \\frac{240}{290} = 0.827, \\text{or } 83\\%
   \\]

3. **Positive Predictive Value (PPV)**: 
   \\[
   \\text{PPV} = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{200}{200 + 50} = \\frac{200}{250} = 0.8, \\text{or } 80\\%
   \\]
   
4. **Negative Predictive Value (NPV)**: 
   \\[
   \\text{NPV} = \\frac{\\text{TN}}{\\text{TN} + \\text{FN}} = \\frac{240}{240 + 10} = \\frac{240}{250} = 0.96, \\text{or } 96\\%
   \\]

The student's final answer indicates "A", suggesting the following values:
- Sensitivity = 83%
- Specificity = 95%
- PPV = 80%
- NPV = 96%

The calculations for sensitivity and specificity were incorrect. The sensitivity should be 95% and the specificity should be 83%, matching option "E". Therefore, the student's error is primarily a mathematical interpretation error in calculating sensitivity and specificity.

### Error Categorization
- **4: Miscellaneous**: This error pertains to a misunderstanding or miscalculation of mathematical or statistical data interpretation.

Therefore, the student's mistakes can be described as:
\`\`\`
4 - f
\`\`\``,category:"4 - f"},"gpt-4o-mini":{explanation:`The student's calculations for sensitivity, specificity, positive predictive value (PPV), and negative predictive value (NPV) appear logical, and their breakdown of true positives, false positives, true negatives, and false negatives aligns with the information provided in the question. However, the actual calculations for some of these metrics led to incorrect conclusions about which answer choice is correct.

Here’s the breakdown:

1. **True Positives (TP)** = 200 (patients who tested positive and confirmed)
2. **False Positives (FP)** = 50 (since 250 patients tested positive and only 200 were confirmed, 250 - 200 = 50)
3. **True Negatives (TN)** = 240 (calculated from the total negative test results, which is based on the remaining patients, but we have to specify the numbers right)
4. **False Negatives (FN)** = 10 (patients who tested negative but had retinopathy)

Calculations based on the information:
- **Sensitivity** = TP / (TP + FN) = 200 / (200 + 10) = 200 / 210 = 0.952 or 95% (not 83%)
- **Specificity** = TN / (TN + FP) = 240 / (240 + 50) = 240 / 290 = 0.827 or 83% (not 95%)
- **PPV** = TP / (TP + FP) = 200 / (200 + 50) = 200 / 250 = 0.80 or 80% (this is correct)
- **NPV** = TN / (TN + FN) = 240 / (240 + 10) = 240 / 250 = 0.96 or 96% (this is correct)

The student concluded that the answer was A, stating: "Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%". 

However, based on the calculations:
- The correct sensitivity should have been recognized as 95% rather than 83%, leading to choosing the answer with sensitivity = 95%.

Thus, the student made a key calculation error in determining the sensitivity and specificity.

Given this analysis, the errors fit within:
1. **Basic medical knowledge errors**, particularly as they pertain to miscalculating the sensitivity and specificity values (indicated as basic medical knowledge errors for misrepresentation and misunderstanding of testing).

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:54,"gpt-4o":{explanation:`The student correctly identifies that the patient is likely experiencing atrial fibrillation with rapid ventricular response, given her symptoms and the medical history provided. The student also recognizes the complexity of treating a patient with heart failure and reduced ejection fraction, noting that medications should be chosen carefully to avoid exacerbating heart failure.

However, there are several issues with the student's response:

1. **Medication Selection and Understanding**:
   - The student suggests optimizing metoprolol or adding diltiazem. However, in patients with heart failure and reduced ejection fraction, non-dihydropyridine calcium channel blockers like diltiazem are generally avoided as they can further decrease cardiac contractility and worsen heart failure. This represents a **basic medical knowledge error** about the treatment choices for rate control in heart failure patients.

2. **Ignoring Given Options**:
   - The student suggests an answer that wasn't provided in the list of options, although they acknowledged it. This indicates an **arbitrary information assumption error**, as the student is assuming they have the latitude to choose outside the given options when they must select from the provided list.

The correct approach given the options and clinical scenario is that digoxin is often used for rate control in atrial fibrillation in the setting of heart failure with reduced ejection fraction, especially when beta-blocker monotherapy is insufficient.

The student's errors include:
- **1. Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: Incorrect understanding of treatment choices in patients with heart failure and reduced ejection fraction.
- **3. Treatment and test method suggestion error**, specifically:
  - **d. Arbitrary Information Assumption Error**: Proposing the use of a non-option medication.

\`\`\`
1 - b
3 - d
\`\`\``,category:`1 - b
3 - d`},"gpt-4o-mini":{explanation:`The student has provided a thoughtful analysis of the patient's symptoms and background, identifying the likely diagnosis of atrial fibrillation (AFib) with a rapid ventricular response. They correctly point out that the management of rate control in this patient must be approached carefully, given her history of heart failure and reduced left ventricular ejection fraction (LVEF).

In evaluating the options:
1. **Atenolol**: This is a beta-blocker and could be beneficial for this patient, but the student does not mention this option specifically.
2. **Verapamil**: This is a non-dihydropyridine calcium channel blocker that is generally not recommended in patients with heart failure with reduced ejection fraction due to its negative inotropic effects.
3. **Diltiazem**: The student highlights this medication as a potentially appropriate choice, but it is indeed not optimal for someone with significant heart failure.
4. **Propafenone**: This is an antiarrhythmic that can be used in AFib but is not first-line for rate control, particularly in the setting of heart failure.
5. **Digoxin**: This choice is often used for rate control in patients with heart failure and AFib. However, the student argues against choosing Digoxin and cites Diltiazem as a better option which is a misjudgment given the circumstances.

The(student's reasoning does not accurately reflect the best management decision based on standard clinical guidelines. While they have some valid reasoning for wanting to adjust Metoprolol or consider Diltiazem, it does not address that Digoxin has a well-established role in rate control for patients with concurrent heart failure. 

The student's main error lies in:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Basic medical knowledge error**: The student lacks understanding of the appropriate use of Digoxin in managing heart rate in patients with heart failure and AFib, mistakenly arguing against its use when it should ideally be one of the preferred options.

Overall, their answer does not reflect a thorough understanding of the first-line treatment options, especially in the context of rate control in this specific patient population. 

\`\`\`
3 - b
\`\`\``,category:"3 - b"}},{question_no:55,"gpt-4o":{explanation:`The student's answer demonstrates an understanding of enzyme kinetics, specifically the concepts of \\( K_m \\) and \\( V_{max} \\). However, there appears to be a logical misstep in interpreting the characteristics of the enzyme based on the information given.

1. **X Value (Affinity)**: The student acknowledges that a low \\( X \\) (or \\( K_m \\)) indicates high affinity of the enzyme for glucose, which is correctly understood.

2. **Y Value (Maximum Speed)**: The student states that high \\( Y \\) (or \\( V_{max} \\)) indicates that the enzyme can phosphorylate glucose quickly when saturated. However, they did not correctly consider the context provided.

The key in choosing the correct option lies within the characteristics of the enzyme discovered by the researcher. The enzyme is present in most body tissues and located in the cytoplasm, which is consistent with a ubiquitous enzyme like hexokinase rather than glucokinase. Hexokinase is known to have:

- A high affinity for glucose, thus a low \\( K_m \\).
- A lower maximum velocity (\\( V_{max} \\)) compared to glucokinase.

Given this typical characteristic of hexokinase, the correct properties of the enzyme should be low \\( X \\) and low \\( Y \\), consistent with option E, not C.

The error made by the student can be categorized as:
- **1. Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: Misinterpreting the properties of the enzyme by confusing whether it matches hexokinase or glucokinase characteristics.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student’s reasoning fails to correctly apply the fundamentals of enzyme kinetics. 

In enzyme kinetics, the Michaelis-Menten model suggests that:
- **X** (the Michaelis constant, Km) represents the concentration of substrate (in this case, glucose) at which the reaction rate is half of the maximum velocity (Vmax, referred to as Y in this scenario).
- A **low Km (low X)** indicates high affinity for the substrate, meaning very little substrate is needed to reach half-maximal velocity.
- A **high Vmax (high Y)** indicates the enzyme's efficiency at high substrate concentrations.

The student concludes **C. Low X and high Y**, asserting that the enzyme has high affinity and high capability, which might seem rational. However, knowing that “high Y" indicates a high maximum speed does not inherently affect "X" directly beyond what is suggested by enzyme dynamics.

Analyzing the claim:
The presence of a high activity (high Y) would not necessarily correlate with enzyme affinity. Thus, without additional data confirming the enzyme’s intrinsic activity (how efficiently it converts substrate to product at high concentration), it may be prudent to recognize that the enzyme could exhibit low to moderate affinity.

Therefore, upon re-evaluation of the arguments:
1. **Correct Option (E)**: Low X and low Y implies that while the enzyme might have a high affinity (low Km), it is less efficient, maybe due to being inhibited or lacking intrinsic catalytic power—suggesting enzyme characteristics that aren't limited by substrate availability but rather its functional capacity at that substrate level.

In addition:
- **Student’s conclusion that the enzyme has low X and high Y does not suit contextually**; high activity (high Y) would typically align with an effective catalytic scenario.

The main error here is a misunderstanding of how enzyme kinetics interact under conditions where the vast majority of activity can alter depending on both affinity (X) and activity limit (Y).

The error falls into:
3. Treatment and test method suggestion error: 
- **b. Basic medical knowledge error**: The student misunderstands enzyme kinetics underlying the implication between substrate affinity and maximum velocity.

\`\`\`
3 - b
\`\`\``,category:"3 - b"}},{question_no:56,"gpt-4o":{explanation:`The student attempts to analyze the scenario and determines that the patient has likely developed renal vein thrombosis as a result of underlying Budd-Chiari syndrome due to hepatic vein obstruction. However, this is primarily a misunderstanding of the question context and passage.

Let's review key details given in the question:
- The patient has a known history of chronic hepatitis B.
- She presents with right flank pain, bloody urine, and significant edema.
- The CT scan findings of a nodular liver with ascites and a right renal vein filling defect point towards a hypercoagulable state.

The urinalysis shows:
- 4+ protein, fatty casts suggestive of nephrotic syndrome.

**The correct reasoning involves:**

Renal vein thrombosis in this setting is typically associated with nephrotic syndrome. One of the complications of nephrotic syndrome is a hypercoagulable state due to the loss of anticoagulant proteins through the urine, such as antithrombin III, which increases the risk of thrombotic events like renal vein thrombosis.

Thus, renal vein thrombosis is strongly associated with:
- **Option B: Loss of antithrombin III**, as nephrotic syndrome leads to proteinuria, including loss of coagulation inhibitors like antithrombin III through urine, contributing to thrombosis.

**Student Error Analysis:**

- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: The student misunderstood the linkage of nephrotic syndrome to renal vein thrombosis via antihrombin III loss.
  - **e. Ignoring key clues**: The student ignored the clues of nephrotic syndrome (heavy proteinuria, edema) contributing to thrombosis.

The student's mistake leads to not selecting the correct given option.

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"},"gpt-4o-mini":{explanation:`The student began their analysis correctly by identifying the clinical situation as involving renal vein thrombosis, with a plausible underlying condition of Budd-Chiari syndrome due to the nodular liver and ascites observed on the CT scan. However, the student's analysis of the answer choices and their reasoning leads to some issues.

1. The student correctly notes the presence of renal vein thrombosis and its likely connection to liver pathology. However, Budd-Chiari syndrome is often caused by thrombosis, which can correlate to a loss of antithrombin III due to liver dysfunction. 

2. Focusing on the answer choices:
   - **A. Acquired factor VIII deficiency**: This option is indeed not typically connected to renal vein thrombosis or Budd-Chiari syndrome.
   - **B. Loss of antithrombin III**: This is a significant factor contributing to thrombosis in liver disease and specifically Budd-Chiari syndrome, as the liver synthesizes most clotting factors and proteins involved in coagulation, including antithrombin III.
   - **C. Impaired estrogen degradation**: This may relate to other conditions but is not directly related to the discussed renal vein condition.
   - **D. Antiphospholipid antibodies**: While these can lead to thrombosis, they are not directly related to Budd-Chiari syndrome.
   - **E. Paraneoplastic erythropoietin production**: This is too indirect and not related to renal vein findings.

The correct understanding of the patient's liver conditions leads to recognizing that the associated loss of antithrombin III due to liver damage is critical in the development of renal vein thrombosis in this context. The student missed the relevance of option B as it is directly tied to the underlying cause of renal vein thrombosis in relation to liver disease.

Thus, the error made falls under:
- **2: Diagnostic errors**, specifically:
  - **e. Ignoring key clues**: The student does not recognize that loss of antithrombin III is indeed the underlying mechanism for thrombosis in this patient, despite it being indicated by the clinical context of liver disease.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:57,"gpt-4o":{explanation:`The student's error stems from a misunderstanding of the patient's condition. The symptoms and history suggest rheumatic heart disease rather than infective endocarditis. The key to this diagnosis lies in recognizing the mid-diastolic rumbling murmur at the apical region, which is indicative of mitral stenosis, a common result of chronic rheumatic heart disease. Rheumatic heart disease is often a sequela of rheumatic fever, which is caused by an infection with Group A Streptococcus (Streptococcus pyogenes).

The correct option is **B**: "A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin," describing Streptococcus pyogenes, which can lead to rheumatic fever and subsequent rheumatic heart disease.

Analyzing the student's response:

1. **Diagnostic error**: The student diagnosed the condition as infective endocarditis rather than rheumatic heart disease.
   - **e. Ignoring key clues**: The student ignored the crucial clue in the presentation, namely the mid-diastolic rumbling murmur, which points more towards mitral stenosis and rheumatic heart disease rather than infective endocarditis.
   
The error is primarily diagnostic, as the failure to diagnose leads to an incorrect assumption regarding the infectious agent.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student concluded that the most appropriate description of the infectious agent is option D: "A bacterium that does not lyse red cells." However, this conclusion is incorrect because it misidentifies the nature of the organism involved in the patient's symptoms and condition.

Analyzing the context of the question:

The patient presents with signs and symptoms that are indicative of fluid overload and potential valvular heart disease, likely due to infective endocarditis. The association of the patient's immigrant status, along with the likelihood of **Streptococcus viridans** as a possibility, is reasonable. However, the student incorrectly describes the hemolytic properties of the organism.

1. **Infective endocarditis** commonly caused by **Streptococcus viridans** is indeed alpha-hemolytic, meaning it partially lyses red blood cells, producing a greenish discoloration on blood agar.
   
2. In the context of this question, it's essential to consider what “does not lyse red cells” truly implies. While Streptococcus viridans does not cause complete lysis (as seen with beta-hemolytic organisms), it does exhibit partial lysis and is associated with certain forms of hemolysis.

Thus, the student's answer is incorrect because the details regarding hemolysis and the description of the organism were not accurately assessed. The correct answer actually implies that the organism is alpha-hemolytic, representing partial lysis.

The point of failure in the student's reasoning is:

- **2: Diagnostic errors**, specifically:
  - **b. Errors in Basic Medical Knowledge**: The student has incorrect knowledge surrounding the hemolytic categories of Streptococcus viridans and their association with endocarditis.
  
Overall, the misunderstanding that incorrect knowledge about the hemolytic nature of the bacteria led to an incorrect categorization of the bacterium involved in the patient's endocarditis.

\`\`\`
2 - b
\`\`\``,category:"2 - b"}},{question_no:58,"gpt-4o":{explanation:`The student has correctly identified that the patient's symptoms and laboratory results are consistent with Diabetic Ketoacidosis (DKA). However, the student has misunderstood the details regarding serum glucose concentration in DKA.

Let's go through the possibilities:

1. **Decreased total body potassium**: In DKA, despite serum potassium level potentially being normal or high, the total body potassium is usually depleted due to osmotic diuresis and shifts between intracellular and extracellular compartments. This is actually the correct answer.

2. **Increased total body sodium**: DKA is typically associated with dehydration and loss of sodium through urine, not an increase in total body sodium.

3. **Increased arterial pCO2**: The patient would have Kussmaul respirations (deep and labored breathing) as a compensatory mechanism for metabolic acidosis, leading to decreased pCO2, not increased.

4. **Hypervolemia**: DKA results in dehydration due to polyuria leading to hypovolemia, not hypervolemia.

5. **Serum glucose concentration > 600 mg/dL**: This level is more consistent with Hyperglycemic Hyperosmolar State (HHS), not DKA. In DKA, glucose levels are usually elevated but generally not greater than 600 mg/dL.

Ultimately, the student's primary error was in the diagnostic understanding relating to electrolyte and fluid disturbances in DKA, specifically overlooking the typical total body potassium depletion seen in such cases. Therefore, the error is:

- **2: Diagnostic error**, specifically:
  - **b. Errors in basic medical knowledge**: The student did not fully understand the implications of electrolyte imbalances in DKA.

\`\`\`
2 - b
\`\`\``,category:"2 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the clinical presentation is consistent with Diabetic Ketoacidosis (DKA), characterized by symptoms of polydipsia, polyuria, dehydration, and metabolic acidosis. However, the student's choice of answer E, indicating "Serum glucose concentration > 600 mg/dL," is based on the assumption that the glucose level is indeed elevated to that extent. In typical scenarios of DKA, serum glucose often exceeds 250 mg/dL, but values can be significantly higher. 

However, the question specifies "Further evaluation is most likely to reveal which of the following?" and indicates that DKA can be present without specifying an exact glucose level. 

Let’s analyze the options more deeply:

1. **Decreased total body potassium (A)**: In DKA, although serum potassium may be elevated due to shift of potassium out of cells (acidosis), total body potassium can often be depleted due to inadequate intake and urinary losses, making this a likely finding.
   
2. **Increased total body sodium (B)**: This is unlikely; in DKA, particularly in the presence of dehydration, sodium is often low or normal.

3. **Increased arterial pCO2 (C)**: In the setting of metabolic acidosis like DKA, the body compensates by hyperventilation, leading to decreased pCO2, not an increase. 

4. **Hypervolemia (D)**: DKA is associated with significant dehydration, so hypervolemia is not expected.

5. **Serum glucose concentration > 600 mg/dL (E)**: This is not guaranteed, as glucose levels can vary, and while DKA is usually associated with high glucose, it does not have to reach this specific threshold.

The primary error made by the student is failing to recognize the total body potassium status in DKA accurately. They overlooked that total body potassium can be decreased despite serum potassium levels potentially being high. The focus on elevated glucose levels likely led to this misconception.

The student primarily made:
- **2. Diagnostic error**, specifically:
  - **e. Ignoring key clues**: They ignored the clues from standard DKA management and assessment, which indicate a tendency for total body potassium depletion.

Thus, the error classification for the student's answer is:
\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:59,"gpt-4o":{explanation:`The student's response indicates they believe the correct diagnosis involves a combination of pyloric stenosis and malrotation with midgut volvulus. Let's analyze the details:

1. **Yellow vomit**: Vomiting yellow (bile-stained) vomit typically indicates an obstruction distal to the duodenum where bile enters the gastrointestinal tract.

2. **Options Analysis**:
   - **A. Abnormal migration of the ventral pancreatic bud**: This describes the development of an annular pancreas, which can cause duodenal obstruction and result in bilious vomiting.
   - **B. Complete failure of proximal duodenum to recanalize**: This would present similarly but was not selected as the correct answer, and the issue is addressed by the presence of bilious vomiting which suggests obstruction distal to the obstruction point.
   - **C. Error in neural crest cell migration**: This could relate to Hirschsprung’s disease but doesn’t fit the case here with bilious vomiting.
   - **D. Abnormal hypertrophy of the pylorus**: This describes pyloric stenosis, which corresponds to non-bilious vomiting.
   - **E. Failure of lateral body folds to move ventrally and fuse in the midline**: Refers to gastroschisis, a non-relevant choice here without external abdominal findings. 

Pyloric stenosis typically presents with non-bilious projectile vomiting due to obstruction proximally at the pylorus before bile enters the GI tract. Bilious vomiting suggests the obstruction is after the pylorus, likely involving the duodenum or jejunum.

The student's primary error was:
- Misidentifying the key detail of 'bilious vomiting' essential to the differential diagnosis.
  
The diagnostic error here stems from:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The crucial clue is the yellow, bilious nature of the vomit, which the student overlooked or misinterpreted.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student initially indicated that none of the provided options accounted for the infant's symptoms and later attempted to relate the symptoms to malrotation with midgut volvulus, which is a valid consideration in terms of pathophysiology. However, the student failed to select the most relevant embryologic error from the options provided.

Given that the infant is experiencing regurgitation of feeds, fussiness, and yellow (bile-stained) vomit, these symptoms are indicative of a gastrointestinal obstruction. In pediatric cases, particularly in this age group, pyloric stenosis is one of the more common causes of projectile vomiting and would typically be related to abnormal hypertrophy of the pylorus. 

Considering the options provided:

A. **Abnormal migration of ventral pancreatic bud**: This is not directly related to the symptoms described.

B. **Complete failure of proximal duodenum to recanalize**: This defect would manifest with bilious vomiting and is another form of intestinal obstruction, which aligns with yellow retching.

C. **Error in neural crest cell migration**: This pertains more to cardiac and nervous system anomalies rather than gastrointestinal symptoms.

D. **Abnormal hypertrophy of the pylorus**: This directly relates to pyloric stenosis, which entails narrowing of the pylorus leading to obstruction, consistent with the clinical presentation.

E. **Failure of lateral body folds to move ventrally and fuse in the midline**: This error generally leads to congenital midline defects, not specifically to the symptoms presented.

The student's failure to recognize option D (abnormal hypertrophy of the pylorus) as a relevant option highlights:

1. **Error in basic medical knowledge**: The student overlooked a common cause of bilious vomiting in infants (pyloric stenosis) which they had initially indicated was part of their thought process.

2. **Ignoring key clues**: The student didn’t consider that pyloric stenosis was indeed presented in option D when the symptoms fit very well.

Thus, the categorization of the error reflects the misunderstanding of critical embryologic concepts related to this important clinical issue.

\`\`\`
1 - b, e
\`\`\``,category:"1 - b, e"}},{question_no:60,"gpt-4o":{explanation:`In analyzing the problem, the key clinical findings are:
- The patient has right flank pain, bloody urine, progressive lower extremity swelling, and a history of hepatitis B.
- Physical examination and CT findings suggest liver cirrhosis (nodular liver with ascites) and right renal vein thrombosis (filling defect in the renal vein, large right kidney with abundant collateral vessels).
- Urinalysis shows significant proteinuria, glucose, and fatty casts, indicating nephrotic syndrome.

Nephrotic syndrome typically leads to complications such as renal vein thrombosis due to hypercoagulability, primarily from the loss of antithrombotic factors like antithrombin III in the urine due to significant protein loss. 

The most likely underlying cause of the renal vein thrombosis in this scenario is indeed related to nephrotic syndrome, particularly the loss of antithrombin III, leading to a pro-thrombotic state.

Reviewing the options:

A. Acquired factor VIII deficiency: This is not typically associated with renal vein thrombosis in nephrotic syndrome.

B. Loss of antithrombin III: This is consistent with nephrotic syndrome and explains the renal vein thrombosis.

C. Impaired estrogen degradation: This relates more to liver dysfunction and is not directly responsible for renal vein thrombosis.

D. Antiphospholipid antibodies: While antiphospholipid syndrome can cause thrombosis, the nephrotic syndrome findings (heavy proteinuria, fatty casts) are more directly associated with antithrombin III loss.

E. Paraneoplastic erythropoietin production: This causes polycythemia, but not relevant to the current presentation of nephrotic syndrome leading to thrombosis.

The student's error is primarily a misunderstanding of the pathophysiology relating nephrotic syndrome and its thrombotic complications. The student erroneously focused on the Budd-Chiari syndrome, which is unrelated to the primary renal findings caused by nephrotic syndrome.

Error type:
- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstanding of the pathophysiological mechanism underlying nephrotic syndrome leading to renal vein thrombosis.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the findings in this case suggest renal vein thrombosis likely due to Budd-Chiari syndrome, taking into account the patient's chronic hepatitis B infection and the resultant liver changes. They emphasized that hepatic vein obstruction is the primary issue. However, when considering the options provided, the student interpreted the question as lacking an appropriate response among the choices.

Let's analyze the options based on the underlying mechanisms leading to renal vein thrombosis:

1. **Acquired factor VIII deficiency (A)**: This is not relevant to the case. It typically does not cause renal vein thrombosis or is not characteristically linked with hepatic conditions.

2. **Loss of antithrombin III (B)**: Antithrombin III deficiency is a well-known cause of increased clotting and is particularly relevant in conditions involving liver pathology, where antithrombin production might be impaired due to liver disease. This could lead to renal vein thrombosis as seen in this case.

3. **Impaired estrogen degradation (C)**: This is more related to hormonal imbalances and not a direct cause for renal vein thrombosis in the context described.

4. **Antiphospholipid antibodies (D)**: While they are associated with thrombosis, they are less likely the underlying cause in this scenario given the context of liver disease.

5. **Paraneoplastic erythropoietin production (E)**: This would lead to polycythemia but is not specifically causing renal vein thrombosis.

The correct interpretation here would have been to recognize that the patient's liver disease might lead to a loss of antithrombin III, which contributes to the development of thrombosis, including renal vein thrombosis.

The student's conclusion that "none" fits the provided answers reflects a misunderstanding of how to connect the symptoms back to the most relevant underlying condition which is indeed **Loss of antithrombin III**, considering the hepatic pathology in this case.

Therefore, the student's response can be categorized as:
- **1: Basic medical knowledge errors** 
- **b. Errors in basic medical knowledge**: The misunderstanding stems from not recognizing the relevance of the loss of antithrombin III in the context of liver disease and associated thrombosis.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:61,"gpt-4o":{explanation:`The question stems from an embryological perspective to explain the infant's symptoms, which include fussy behavior, regurgitating feeds, and yellow-colored vomit. These symptoms point towards a form of gastrointestinal obstruction. 

Reviewing the student's response:

1. **Abnormal migration of ventral pancreatic bud**: This can result in an annular pancreas, which can cause duodenal obstruction. This aligns with the presentation of regurgitated feeds and vomiting. The correct answer is actually option A.

2. **Complete failure of proximal duodenum to recanalize**: This can lead to duodenal atresia. However, duodenal atresia would typically present earlier, often soon after birth, and frequently with bilious vomiting and abdominal distension. The student selected this as the answer, but the interpretation of symptoms indicating reflux rather than obstruction is incorrect.

3. **Error in neural crest cell migration**: This generally affects neural structures and is not the primary cause of regurgitation and vomiting due to obstruction.

4. **Abnormal hypertrophy of the pylorus**: This would cause pyloric stenosis, which presents with projectile non-bilious vomiting. This is not indicated by the yellow vomit in the scenario.

5. **Failure of lateral body folds to move ventrally and fuse in the midline**: This causes issues such as omphalocele or gastroschisis, not presenting with the symptoms described.

In summary, the student made a diagnostic error by incorrectly attributing the symptoms to duodenal atresia (choice B) when the abnormal migration of the ventral pancreatic bud (choice A) is more consistent with such presentations due to potential duodenal obstruction by an annular pancreas.

The error categorization is:
- **2: Diagnostic errors**, specifically:
  - **b. Errors in basic medical knowledge**: Misunderstanding the symptoms typically associated with annular pancreas versus duodenal atresia.
  - **e. Ignoring key clues**: Not fully considering the color and nature of the vomit in stating reflux over obstruction.
  
\`\`\`
2 - b, e
\`\`\``,category:"2 - b, e"},"gpt-4o-mini":{explanation:`The student's choice of answer **B: Complete failure of proximal duodenum to recanalize** indicates a thought process aiming to connect the infant's symptoms with a potential embryological defect. 

Analyzing the patient's symptoms described:
- The infant is experiencing regurgitation, fussiness, and yellow vomit, which suggests an obstruction or significant gastrointestinal issue.
- The symptoms align more with a condition like **pyloric stenosis**, which is characterized by projectile vomiting of non-bilious material in older infants, but the presence of yellow vomiting suggests a deeper obstruction, possibly affecting the duodenum.

Reviewing the options:
1. **A. Abnormal migration of ventral pancreatic bud**: This does not account for the symptoms linked to obstruction.
  
2. **B. Complete failure of proximal duodenum to recanalize**: While this could indeed lead to duodenal atresia, the vomiting would typically be bilious only if there were distal obstructions beyond the duodenum, like in cases of atresia beyond the first part of the duodenum. 

3. **C. Error in neural crest cell migration**: This encompasses wider developmental issues, but not specifically linked to the current vomiting symptoms.

4. **D. Abnormal hypertrophy of the pylorus**: This is the classic presentation for an infant who is 3 weeks old and has persistent projectile vomiting. While the symptoms mention yellow vomit, the question is likely testing for the more commonly understood embryological failure here — pyloric stenosis — since the infant is young and symptoms align with this condition.

5. **E. Failure of lateral body folds to move ventrally and fuse in the midline**: This would not relate to the vomiting; rather, it would present as an abdominal wall defect.

The student’s reasoning primarily focused on the connection of the embryological error to the gastrointestinal symptoms, but they selected an option that does not align correctly with the classic first-line embryological failure that accounts for vomiting and proximal obstruction presenting at this infant's age.

Thus, the student's answer falls under **3: Treatment and test method suggestion error** because:
- **b. Basic medical knowledge error**: The student does not demonstrate correct knowledge of pyloric stenosis which would more commonly be associated with the straightforward presentation rather than complex embryological failures like duodenal atresia which is less common in a young infant such as this one.

\`\`\`
3 - b
\`\`\``,category:"3 - b"}},{question_no:62,"gpt-4o":{explanation:`The student's response shows an effort to connect the patient's occupational and smoking history with the possibility of sarcoidosis. However, the logic used to determine the next step in management is flawed. The provided question gives no direct information suggesting sarcoidosis or any specific condition that requires testing lung function via DLCO as the next step. Instead, the vignette presents a situation for comparing existing chest diagnostics to establish a baseline or observe changes.

Analyzing the options:

1. **Perform arterial blood gas analysis**: Indicated for assessing respiratory function if there's suspected respiratory compromise, which is not indicated here.
   
2. **Perform CT-guided biopsy**: Typically done after imaging raises concern for specific conditions such as malignancy, which are not initially suggested here.

3. **Perform diffusion capacity of the lung for carbon monoxide (DLCO)**: Generally used for evaluating specific lung conditions like interstitial lung disease or emphysema, but not a direct next step with just a chest x-ray showing no detailed information.

4. **Measure angiotensin-converting enzyme (ACE)**: Sometimes associated with sarcoidosis but not a primary diagnostic method.

5. **Request previous chest x-ray**: This step is often crucial to compare previous images to understand changes over time, which is a logical first step in management considering the chest x-ray and the patient's background.

The student's primary error lies in misjudging the appropriate next step based on the information provided, focusing instead on tests that are not directly indicated by the vignette. 

The error is:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student ignored the key clue that the most logical and straightforward next step is to request previous chest x-rays for comparison.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`The student has made an error regarding the interpretation of the clinical scenario and the appropriate next step in management. Here's the analysis of the scenario:

The patient is a 60-year-old man with a significant smoking history and a family history of chronic granulomatous disease. The context suggests a need to assess his lung condition before undergoing a cholecystectomy, particularly concerning his chest x-ray findings, which are unspecified but likely abnormal given his risk factors.

1. **Perform arterial blood gas analysis**: Generally used to assess the patient's oxygenation and acid-base status, but not relevant here without prior indications of respiratory complications.

2. **Perform CT-guided biopsy**: This may be necessary if there is an identified lesion that requires tissue confirmation or if malignancy is suspected. However, without specific details that necessitate immediate tissue diagnosis, this is not the first step.

3. **Perform diffusion capacity of the lung for carbon monoxide (DLCO)**: This test helps assess the lung's ability to transfer gas and can be indicative of various pulmonary conditions, specifically restrictive lung disease. However, the choice of this investigation as the immediate next step seems premature, as the chest x-ray may require reviewing previous images for comparison before further invasive or extensive testing.

4. **Measure angiotensin-converting enzyme (ACE)**: This test can be helpful for diagnosing sarcoidosis, but again, it falls short of being the next immediate step in management.

5. **Request previous chest x-ray**: This option is appropriate as it provides comparative data that is crucial in understanding whether there have been significant changes in the patient’s lung condition, particularly due to the patient's extensive smoking history or any suspected underlying pathology such as sarcoidosis.

The primary error made by the student was a misjudgment in selecting the order of diagnostic procedure steps. They placed emphasis on conducting the DLCO without prior insight into the progression or changes in the patient's lung status, which could be established by reviewing previous imaging.

The error can thus be categorized as follows:
- **2: Diagnostic error, specifically:**
  - **e. Ignoring key clues**: The student overlooked the importance of obtaining past radiographic data to better guide the management of the patient’s pulmonary issues.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:63,"gpt-4o":{explanation:`The student correctly identifies the clinical signs of methemoglobinemia based on the symptoms presented: acute headache, dizziness, shortness of breath, cyanosis, and chocolate brown blood. However, the student's answer incorrectly attributes the condition to a primaquine overdose, which is a misunderstanding of the term "overdose" in this context.

Primaquine can cause methemoglobinemia as a known adverse reaction, and this would be classified as a Type B adverse drug reaction, which is the correct choice in this scenario. The student's logic is partially correct in identifying primaquine as the culprit but errs in defining the condition as an overdose rather than an adverse drug reaction.

The student's error occurs in understanding the classification of adverse drug reactions, particularly failing to recognize that standard doses of primaquine can lead to methemoglobinemia in some patients due to a Type B (idiosyncratic) reaction rather than an overdose.

The error is categorized as:
1. **Basic medical knowledge error**, specifically:
   - **b. Errors in basic medical knowledge**: Misunderstanding the nature of methemoglobinemia as an adverse reaction to primaquine and misclassifying it as an overdose rather than a Type B adverse reaction.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student correctly identifies that the patient is likely experiencing methemoglobinemia, consistent with the symptoms presented: headache, dizziness, shortness of breath, cyanosis of the fingertips and toes, and the chocolate brown color of the blood. Methemoglobinemia can be triggered by certain medications, including primaquine.

However, the student's reasoning leads them to select option B, that the condition resulted from primaquine overdose.

Evaluating the options:

A. **The patient’s condition is due to consumption of water polluted with nitrates**: While nitrates can cause methemoglobinemia, there is no indication or evidence in the question that relates to the patient's water supply, making this option unlikely.

B. **This condition resulted from primaquine overdose**: While primaquine can indeed cause methemoglobinemia, the standard dosing for malaria prophylaxis does not typically lead to overdose when dosed correctly. The possibility of overdose requires further substantiation of the dose taken, as the usual prophylactic dose does not generally result in symptoms unless taken inappropriately. 

C. **The patient had pre-existing liver damage caused by viral hepatitis**: While hepatitis could contribute to metabolic issues, it would not directly cause methemoglobinemia.

D. **The condition developed because of his concomitant use of primaquine and magnesium supplement**: There's no known interaction between magnesium and primaquine that would lead to methemoglobinemia.

E. **It is a type B adverse drug reaction**: A type B adverse drug reaction is an unpredictable reaction to a drug that occurs due to or related to its pharmacological properties, which can involve idiosyncratic reactions like methemoglobinemia from primaquine use. Given the patient's symptoms develop after starting a new medication (primaquine), this is a key aspect of consideration.

In this case, while the student recognizes methemoglobinemia's potential connection to primaquine, by stating it is an "overdose" lacks sufficient grounding in the typical dosing for malaria prophylaxis and neglects to consider that adverse reactions can occur even at therapeutic doses. Furthermore, a type B reaction fits better because it speaks to the idiosyncratic nature of the response (methemoglobinemia) to the drug rather than implying an incorrect dosage.

The error lies in not recognizing that this condition aligns with a type B adverse drug reaction from primaquine. Thus, the categorization of the student's error is as follows:

\`\`\`
2 - g
\`\`\``,category:"2 - g"}},{question_no:64,"gpt-4o":{explanation:`The student's answer and reasoning indicate a misunderstanding of the urgency and timing for antiviral treatment in the case of influenza. Let's analyze their thought process and identify where the error occurred.

1. **Asthma Severity**: The student correctly notes that the current symptoms do not indicate an asthma exacerbation. This is not particularly relevant to the choice of antiviral therapy for influenza.

2. **Antiviral Treatment Timing**: The student acknowledges that initiating antiviral therapy is recommended within 48 hours of symptom onset, which is crucial information.

3. **Consideration of Antiviral Resistance**: Although resistance can occur, this is not the primary reason to withhold a recommended treatment within the effective time window.

4. **Other Treatment Options**: Identifying other antivirals like zanamivir is not as relevant when oseltamivir is the standard and generally recommended first-line treatment within the correct time frame for influenza.

5. **Vaccination and Prevention**: While education on vaccines is important, it does not impact the immediate management of the current influenza infection.

The student's primary error is failing to apply the critical timing for antiviral treatment within 48 hours of symptom onset. She is presented within this timeframe, making her an ideal candidate for treatment with oseltamivir to reduce symptom severity and duration.

The student's error falls under:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The crucial clue being the need to initiate antiviral therapy within 48 hours of symptom onset was overlooked.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`The student's analysis indicates a misunderstanding of the severity and treatment options for influenza. Here’s a breakdown of where the reasoning went awry:

1. **Understanding of influenza management**: The student correctly identifies that the patient presents with flu-like symptoms and that oseltamivir is a treatment option. However, the student chooses option "A. Supportive therapy only" over "D. Oseltamivir." In doing so, they fail to recognize that the patient is within the appropriate timeframe (symptoms started 1 day ago) for antiviral treatment.

2. **Symptoms and Risk Factors**: The patient has a history of asthma and is in a high-risk group (working in a school with an outbreak), which further justifies the initiation of antiviral therapy to prevent further complications.

3. **Timing of Antiviral Therapy**: Standard guidelines recommend starting antiviral therapy such as oseltamivir within 48 hours of onset of symptoms for maximum effectiveness. The student undervalues the importance of timely intervention.

4. **Assessment of symptom severity**: While the patient’s symptoms appear mild, the fact that there’s a recent influenza outbreak and her status as a teacher interacting with students makes it relevant to treat her proactively to avoid complications.

The student's choice of supportive therapy indicates an oversight regarding the standard practice for viral infections within the critical timeline. Thus, their response exemplifies a diagnostic and treatment error regarding the proper management of influenza.

Given the above points, the categorization of the student's error focuses on misjudging the necessity of antiviral therapy in the context of the patient’s symptoms and risk factors.

\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:65,"gpt-4o":{explanation:`The student's response indicates a misunderstanding of the standard management priorities during suspected acute limb ischemia (ALI). While imaging to confirm the diagnosis is part of the overall management plan, immediate intervention in the form of anticoagulation is crucial to prevent further thrombosis and improve outcomes.

Analyzing the options:

1. **CT angiogram**: While a CT angiogram can help visualize the blockage and its location, in the context of acute limb ischemia, the priority is to restore or maintain blood flow and prevent further clotting. Therefore, imaging is typically performed after initial anticoagulation.

2. **Graded exercise and aspirin**: This approach is for chronic limb ischemia or stable claudication, not acute cases.

3. **Heparin drip**: Anticoagulation with heparin is the standard initial step in the management of acute limb ischemia to prevent further clot propagation and distal ischemia.

4. **Surgical thrombectomy**: This is a potential intervention after anticoagulation if needed, but it would generally follow initial anticoagulation to stabilize the situation.

5. **Tissue plasminogen activator**: Thrombolysis may be an option in certain cases of embolism, but is also typically considered following immediate anticoagulation.

The student's primary error lies in the treatment suggestion. They failed to recognize that immediate anticoagulation is the most crucial initial step in suspected acute limb ischemia due to its rapid onset. The CT angiogram can follow once the patient is stabilized.

The error is:
- **3: Treatment and test method suggestion error**, specifically:
  - **e. Ignoring key clues**: The student did not prioritize the immediate need for anticoagulation to stabilize the patient, which is critical in acutely ischemic situations.

\`\`\`
3 - e
\`\`\``,category:"3 - e"},"gpt-4o-mini":{explanation:`The student believes that the best next step in management for this patient is a CT angiogram, arguing that it could confirm a peripheral arterial embolism due to the patient's acute limb ischemia (ALI). While imaging could be helpful for diagnosis, there is a critical error in prioritizing the immediate need to prevent further ischemic injury. 

When a patient presents with symptoms suggestive of acute limb ischemia—particularly with such clear clinical signs (cold, pale leg, diminished sensation, and significantly reduced muscle strength)—the priority is to initiate anticoagulation promptly to prevent tissue necrosis. 

Let’s evaluate the options and the implications of the error:

1. **CT angiogram (Option A)**: While it may provide valuable information, it is not immediately necessary when the clinical picture strongly suggests acute limb ischemia. Waiting for imaging can delay critical management that could prevent loss of the limb.

2. **Graded exercise and aspirin (Option B)**: This is inappropriate in an emergency situation of acute limb ischemia.

3. **Heparin drip (Option C)**: This is the correct answer because immediate anticoagulation is essential to manage ALI effectively before further evaluation or treatment is made.

4. **Surgical thrombectomy (Option D)**: This treatment may be necessary but should only occur after appropriate imaging and anticoagulation. It's not the first step without confirming the blockage.

5. **Tissue plasminogen activator (Option E)**: Again, this may be considered after imaging confirms the diagnosis but is not the immediate management step needed.

The student's rationale demonstrates a misunderstanding of the urgency of initiating treatment in cases of acute limb ischemia, thus making a diagnostic prioritization error instead of starting immediate management.

The errors include:
- **2. Diagnostic Error**, specifically:
  - **a. Prioritization error**: The student misjudged the level of urgency in managing acute limb ischemia and suggested imaging instead of immediate anticoagulation treatment.

\`\`\`
2 - a
\`\`\``,category:"2 - a"}},{question_no:66,"gpt-4o":{explanation:`The student's response indicates an incorrect understanding and calculation of the Sensitivity, Specificity, Positive Predictive Value (PPV), and Negative Predictive Value (NPV). Let's carefully reassess the question and the data provided:

### Given Data and Needs:
- **True Positives (TP)**: 200 (patients diagnosed as positive by both test and gold standard)
- **False Negatives (FN)**: 10 (patients that tested negative by the screening test but positive by gold standard)
- **Total Screening Positives**: 250
- **Total Screening Negatives**: 500 - 250 = 250
- **False Positives (FP)**: 250 - 200 = 50 (since 200 of those 250 positive by the test were confirmed, meaning 50 were not and were therefore false positives)
- **True Negatives (TN)**: 240 (250 negatives by screening - 10 incorrect ones)

### Recalculated Values:
1. **Sensitivity**:
   \\[
   \\text{Sensitivity} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{200}{200 + 10} = \\frac{200}{210} = 0.9524 \\approx 95\\%
   \\]

2. **Specificity**:
   \\[
   \\text{Specificity} = \\frac{\\text{TN}}{\\text{TN} + \\text{FP}} = \\frac{240}{240 + 50} = \\frac{240}{290} = 0.8276 \\approx 83\\%
  \\]

3. **Positive Predictive Value (PPV)**:
   \\[
   \\text{PPV} = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{200}{200 + 50} = \\frac{200}{250} = 0.8 = 80\\%
   \\]

4. **Negative Predictive Value (NPV)**:
   \\[
   \\text{NPV} = \\frac{\\text{TN}}{\\text{TN} + \\text{FN}} = \\frac{240}{240 + 10} = \\frac{240}{250} = 0.96 = 96\\%
   \\]

### Analysis of the Student's Error:
The student made significant errors in calculating and interpreting the specificity, PPV, and NPV. They falsely concluded that there were no false positives, leading to wrong Specificity and PPV calculations. Additionally, they made arithmetic errors, which affected their final conclusions.

### Finalized Error Category:
In this particular case, the student's errors stem from a misunderstanding of statistical calculations and interpretation of data, which can be categorized as follows:

\`\`\`
4 - f
\`\`\``,category:"4 - f"},"gpt-4o-mini":{explanation:`The student was tasked with calculating the sensitivity, specificity, positive predictive value (PPV), and negative predictive value (NPV) of a new screening test for diabetic retinopathy based on the data provided.

Here is a structured analysis of the student's reasoning and calculations:

1. **True Positives (TP)**: 200 patients tested positive for diabetic retinopathy and confirmed by the ophthalmologist.
2. **False Negatives (FN)**: 50 patients had diabetic retinopathy but tested negative. (This is derived from 250 patients who were detected by the screening test minus the 200 true positives).
3. **True Negatives (TN)**: 400 patients had neither diabetic retinopathy nor tested positive in the screening. (Derived as 500 total patients - 250 who were detected by the screening test).
4. **False Positives (FP)**: 0 patients tested positive but did not have diabetic retinopathy.

Using these values, we calculate:

- **Sensitivity** = TP / (TP + FN) = 200 / (200 + 50) = 200 / 250 = 0.8 = 80%
- **Specificity** = TN / (TN + FP) = 400 / (400 + 0) = 400 / 400 = 1 = 100% (This was mistakenly put as 100% by the student, but it should be noted that this must be adjusted based on the provided data).
- **PPV** = TP / (TP + FP) = 200 / (200 + 0) = 200 / 200 = 1 = 100% (Again, should be adjusted if considered otherwise).
- **NPV** = TN / (TN + FN) = 400 / (400 + 50) = 400 / 450 ≈ 0.889 = 88.9%

Upon analysis:
- The student correctly calculated the sensitivity (80%) and NPV (approximately 88.9%). However, the specificity was stated as 100%, which contains an error stemming from calculating the TN count, as the TN value can contain only the patients without diabetic retinopathy verified against screening. There were patients who could not meet this criteria.
- The student concluded that no options match but meanwhile disregarded the significance of false positives in their calculus, while the testing criteria must maintain specificity based on this.

Errors that occurred:
- **1. Basic medical knowledge errors**: The misunderstanding of specificity regarding the TN count.
- **3. Treatment and test method suggestion error**: Misaccounting PPV and specificity given in the calculated terms that have caused overall assumption errors in the subsequent characters.
- **e. Ignoring key clues**: The student ignored the provided parameters that may show discrepancies towards the gathered statistics and offered wrong overall conclusions about the complete absence of matched options.

This leads to a categorization:

\`\`\`
1 - a, b, e
\`\`\``,category:"1 - a, b, e"}},{question_no:67,"gpt-4o":{explanation:`Let's analyze the question and solve it step by step using the data given in the problem. 

First, let's reiterate the values we derive from the problem statement:
- Total patients tested = 500
- Patients who tested positive with the screening test = 250
- True positives (TP) = 200 (patients who tested positive and had diabetic retinopathy confirmed)
- False negatives (FN) = 10 (patients who tested negative with screening but had the condition according to the gold standard)

With this data, we deduce additional metrics necessary for calculation:
- False positives (FP) = 250 (positive with the screening test) - 200 (TP) = 50
- True negatives (TN) = Total negatives according to the screening test - false negatives = (500 - 250) - 10 = 240

Using this data:
- **Sensitivity** = TP / (TP + FN) = 200 / (200 + 10) = 200 / 210 = 0.952 ≈ 95%
- **Specificity** = TN / (TN + FP) = 240 / (240 + 50) = 240 / 290 ≈ 0.83 = 83%
- **Positive Predictive Value (PPV)** = TP / (TP + FP) = 200 / (200 + 50) = 200 / 250 = 0.8 = 80%
- **Negative Predictive Value (NPV)** = TN / (TN + FN) = 240 / (240 + 10) = 240 / 250 = 0.96 = 96%

Comparison with the provided options shows:
- **Option E:** Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96% matches the calculated values accurately.

Now, let's analyze where the student went wrong:
The student makes an error in identifying the false positive and true negative values:
- The student incorrectly believes there are no false positives or incorrectly attributes values to true negatives which are actually false assessments based on additional false assumptions or arithmetic errors.

Assigning the student's error:
\`\`\`
4 - f
\`\`\``,category:"4 - f"},"gpt-4o-mini":{explanation:`The student attempted to calculate the sensitivity, specificity, positive predictive value (PPV), and negative predictive value (NPV) based on the provided data but ended up with incorrect interpretations and values due to errors in deriving true positive, true negative, false positive, and false negative figures.

Let's break down the provided figures:

1. **True Positives (TP)**: 200 (patients who tested positive and confirmed to have diabetic retinopathy).
2. **False Negatives (FN)**: 10 (patients who tested negative but confirmed to have diabetic retinopathy). This means there are 10 true cases that the test missed.
3. **True Negatives (TN)**: 300 (patients who tested negative in the screening test and did not have diabetic retinopathy, calculated as 500 total patients - 250 positive from the screening test. Among the 250 positives, 200 were true positives and 50 negatives are FN).
4. **False Positives (FP)**: 0 (patients who tested positive in the screening test but did not have diabetic retinopathy, inferred from the data).

Now let's apply the formulas correctly:

- **Sensitivity** = TP / (TP + FN) = 200 / (200 + 10) = 200 / 210 = 0.952 = 95.2%
- **Specificity** = TN / (TN + FP) = 300 / (300 + 0) = 300 / 300 = 1 = 100%
- **PPV** = TP / (TP + FP) = 200 / (200 + 0) = 200 / 200 = 1 = 100%
- **NPV** = TN / (TN + FN) = 300 / (300 + 10) = 300 / 310 = 0.968 = 96.8%

Given these calculations, we can summarize the expected values as follows:
- Sensitivity: 95.2%
- Specificity: 100%
- PPV: 100%
- NPV: 96.8%

From the options provided:
- **A**: Sensitivity = 83%, Specificity = 95%, PPV = 80%, NPV = 96%.
- **B**: Sensitivity = 83%, Specificity = 95%, PPV = 96%, NPV = 80%.
- **C**: Sensitivity = 95%, Specificity = 83%, PPV = 96%, NPV = 80%.
- **D**: Sensitivity = 80%, Specificity = 95%, PPV = 96%, NPV = 83%.
- **E**: Sensitivity = 95%, Specificity = 83%, PPV = 80%, NPV = 96%.

Given that sensitivity and PPV calculations from the analysis suggest 95% and 100%, respectively, we could conclude that the student's assertion that none of the answers match isn’t entirely accurate, but they didn't perform the calculations correctly to identify an appropriate choice correlating with the accurate values determined through the methodical calculations.

The student's main errors were as follows:
- They incorrectly identified the number of true negatives and falsely assumed there were no discrepancies in false positives which shouldn't exist given the testing data.
- The student made a calculation mistake regarding sensitivity and unexpectedly conflated issues that led to incorrect PPV and NPV as not matching available options.

This demonstrates an example of a **diagnostic error** (specifically an error related to numerical interpretation and calculations of sensitivity and specificity). The student in this case faced the issue of **g. Other**, as they interpreted the question improperly leading to an overall inability to determine selected answer choice because of multiple miscalculations.

Thus, the most appropriate categorization of the student's errors is:
\`\`\`
2 - g
\`\`\``,category:"2 - g"}},{question_no:68,"gpt-4o":{explanation:`The student has misunderstood the standard management approach for treating a patent ductus arteriosus (PDA) in a preterm infant when closure of the PDA is desired. Let's analyze the situation:

1. **Patent Ductus Arteriosus (PDA):** A PDA that is not closing spontaneously and is significant, as suggested by a grade 4/6 murmur, often needs intervention in a preterm infant.

2. **Management Options:**
   - **Indomethacin or Ibuprofen:** These are typically used to promote the closure of a PDA. Since the infant is stable enough and the PDA is confirmed by echocardiography, these medications are often first-line treatments to encourage ductal closure in preterm infants.
   - **Prostaglandin E1 (PGE1) infusion:** This is used to maintain ductal patency, usually in specific congenital heart defects where systemic circulation depends on a patent ductus arteriosus, such as in duct-dependent lesions (e.g., hypoplastic left heart syndrome, transposition of great arteries).

The student incorrectly selected **Prostaglandin E1** infusion, thinking that patency needs to be maintained, which is not the case here. Instead, the goal is to close the PDA, making **Indomethacin infusion** the appropriate choice.

The error here falls under:
- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student demonstrated a lack of understanding of the treatment goals for PDA in preterm infants.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student has recognized the symptoms and findings of the case correctly, identifying the murmur and making conclusions about the patent ductus arteriosus (PDA) in a preterm infant. However, the student's final answer, while recognizing the importance of maintaining patency in a preterm infant, misses the actual question regarding what step would be taken after confirming the diagnosis of PDA via echocardiography.

Analyzing the options:

1. **A. Prostaglandin E1 infusion:** This is indeed used to maintain patency of the ductus arteriosus in certain contexts, but it is not the management strategy when you have a patient with a significant PDA who already requires closure.

2. **B. Indomethacin infusion:** This option is correct in the context of the question, as it is the treatment of choice for closing a patent ductus arteriosus in preterm infants. Indomethacin works by inhibiting prostaglandin production, leading to the closure of the ductus arteriosus.

3. **C. Surgical ligation:** This is usually a last resort for cases of PDA, particularly if medical management fails or if the PDA is symptomatic and cannot be managed medically.

4. **D. Reassurance and follow-up:** This would not provide proper management for the infant who has a significant PDA that needs intervention.

5. **E. Percutaneous surgery:** While this is another option for refractory cases, it is not typically the first management step.

The primary error in the student's justification revolves around misunderstanding what the most appropriate next step in management is after confirming the diagnosis of PDA. Since indomethacin is the correct choice for closure, the student's choice of Prostaglandin E1 infusion does not align with the context of this question.

The errors can be categorized as follows:
- **2: Diagnostic error** because the student misjudged the management pathway based on the type and urgency of the condition. 
- They failed to recognize that the treatment would involve attempting to close the ductus arteriosus rather than maintaining patency in this specific clinical scenario.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:69,"gpt-4o":{explanation:`The student has made an error in categorizing the knee ligament injury. Let's go through the reasoning:

The key information from the vignette:
- The right knee is stable on the varus stress test but shows laxity on the valgus stress test compared to the left knee.

This pattern (laxity on valgus stress test without varus stress test laxity) suggests a problem with the medial collateral ligament (MCL) because the MCL stabilizes the medial side of the knee against valgus force.

The student's errors:
- **Misinterpretation of the valgus and varus stress test results**: The student incorrectly interpreted that the instability on valgus stress (moving the knee medially) indicates a lateral collateral ligament problem. However, it is actually indicative of an MCL injury since MCL restrains valgus forces. 

The error category:
- **2: Diagnostic errors**, specifically:
  - **b. Error in basic medical knowledge**: The student's understanding of knee ligamentous anatomy and the implication of stress tests was incorrect.

This was purely a misidentification based on incorrect medical knowledge of what each test indicates with respect to specific ligament injuries.

\`\`\`
2 - b
\`\`\``,category:"2 - b"},"gpt-4o-mini":{explanation:`In analyzing the student's argument and the clinical details available in the question, several key points need to be examined:

1. **Knee Examination Findings**:
   - The varus stress test (testing lateral stability) shows no laxity, indicating that the lateral structures, including the Lateral Collateral Ligament (LCL), are likely intact.
   - The valgus stress test (testing medial stability) reveals increased laxity compared to the left knee, which suggests an injury on the medial side of the knee.
   - Both Lachman and posterior drawer tests having firm endpoints suggest that both the Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) are intact.

2. **Understanding the Injuries**:
   - A positive valgus stress test is indicative of a **Medial Collateral Ligament (MCL)** injury, as it suggests instability on the medial side of the knee.
   - The absence of laxity when conducting the varus stress test indicates that the LCL and related structures remain intact.
   - Therefore, since the valgus test is positive and the varus test is negative, it's contradictory to conclude an LCL injury, which the student did.

3. **Evaluation of Options**:
   - A. Posterior cruciate ligament: Not indicated here as there are no signs of posterior instability.
   - B. Anterior cruciate ligament: Also ruled out based on stable Lachman and drawer tests.
   - C. Medial collateral ligament: Supported by the laxity on the valgus stress test indicating instability.
   - D. Lateral collateral ligament: Incorrect, as indicated above with a negative varus stress test.
   - E. Medial meniscus: Not indicated by the signs presented.

The student incorrectly identified the injury as a lateral collateral ligament injury when the clinical findings specifically indicate an injury to the medial collateral ligament due to the positive valgus test. This is a diagnostic error due to misinterpreting the significance of knee stability tests.

Thus, the categorization of the student's error is:
\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:70,"gpt-4o":{explanation:`To calculate the negative predictive value (NPV) of the novel test, we first need to understand the definitions and relevant calculations:

1. **Negative Predictive Value (NPV)**: The probability that subjects with a negative screening test truly don't have the disease. 

The formula for NPV is:  
\\[ \\text{NPV} = \\frac{\\text{True Negatives}}{\\text{True Negatives} + \\text{False Negatives}} \\]

From the data provided:
- True Positives (TP) = 240 (Patients with AIDS who tested positive)
- False Positives (FP) = 5 (Patients without AIDS who tested positive)
- True Negatives (TN) = 245 (Patients without AIDS who tested negative)
- False Negatives (FN) = 10 (Patients with AIDS who tested negative)

The calculation for NPV is based on subjects who tested negative:
\\[ \\text{NPV} = \\frac{\\text{TN}}{\\text{TN} + \\text{FN}} = \\frac{245}{245 + 10} = \\frac{245}{255} \\]

In this scenario, option A correctly represents the calculation for NPV. 

The student made a calculation error by selecting option B, which incorrectly uses the number of false positives instead of false negatives for the denominator.

The student's error is as follows:
- **4: Miscellaneous**, specifically:
  - **f. Calculation and statistical interpretation errors**: The student made a calculation mistake by selecting the wrong figures for calculating the NPV.

\`\`\`
4 - f
\`\`\``,category:"4 - f"},"gpt-4o-mini":{explanation:`To determine the negative predictive value (NPV) of the novel AIDS screening examination, we first need to understand the definition and formula for NPV. 

NPV is calculated as follows:

\\[
\\text{NPV} = \\frac{\\text{True Negatives}}{\\text{True Negatives} + \\text{False Negatives}}
\\]

In the context of the provided data:

- **Patients with AIDS** (True Positives): 240
- **Patients without AIDS** (True Negatives): 245 (250 patients - 5 false positives)
- **False Negatives**: This is the number of patients who actually have AIDS but tested negative. Given that there are 250 patients with confirmed AIDS and 240 tested positive, this equals 10 (250 - 240 = 10).

Now, substituting these values into the NPV formula:

- True Negatives (TN) = 245
- False Negatives (FN) = 10

Thus, the NPV calculation becomes:

\\[
\\text{NPV} = \\frac{245}{245 + 10} = \\frac{245}{255}
\\]

So the correct option based on this calculation is:

**A. 245 / (245 + 10)**

The student's choice of option B (which represents the proportion of true positives) shows a misunderstanding of how to calculate NPV, as they incorrectly used the total positive cases without accounting for the true negatives and false negatives. 

The student made the following errors:
- **2. Diagnostic error**: They confused which parameters to use for calculating NPV.
- **e. Ignoring key clues**: They did not correctly apply the formula related to the test's predictive value.

Thus, the categorization of the error is:
\`\`\`
1 - c, e
\`\`\``,category:"1 - c, e"}},{question_no:71,"gpt-4o":{explanation:`The student provided an incorrect diagnosis of the patient's condition and therefore selected the wrong descriptor for the infectious agent. The clinical presentation is more consistent with rheumatic heart disease, which often occurs after repeated Streptococcus pyogenes (Group A Streptococcus) infections leading to mitral stenosis, characterized by a mid-diastolic rumbling murmur at the apex (not aortic regurgitation). In this case, the murmur and the history align more with damage caused by rheumatic fever due to prior untreated streptococcal pharyngitis.

The correct infectious agent from the given options is:
- **B. A bacterium that induces complete lysis of the red cells of a blood agar plate with an oxygen-sensitive cytotoxin**, which best represents the characteristics of Group A Streptococcus (Streptococcus pyogenes), as it is known for beta-hemolysis (complete lysis of red cells) caused by streptolysins.

The student's errors are:
- **2: Diagnostic error**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly links the symptom of mitral stenosis to endocarditis rather than recognizing it as a manifestation of rheumatic heart disease.
  - **e. Ignoring key clues**: The patient's history of immigration from an area where rheumatic fever might be more prevalent and the description of the murmur consistent with mitral stenosis were not correctly considered.

\`\`\`
2 - b, e
\`\`\``,category:"2 - b, e"},"gpt-4o-mini":{explanation:`The student's reasoning regarding the presentation of the patient seems to miss certain critical aspects of the clinical scenario. The patient displays signs of heart failure that could indeed be related to endocarditis. However, focusing on the specific bacterium responsible for her symptoms is essential for answering the question.

Analyzing the student's choice and reasoning:

1. **Endocarditis**: While it is plausible that the patient could be experiencing endocarditis, the student's conclusion about the infectious agent being a bacterium that "does not lyse red cells" directly relates to the common pathogens involved. Streptococcus viridans does not lyse red cells, but it is typically an alpha-hemolytic bacterium which is also not the most common cause of an acute presentation of endocarditis either.

2. **Correct answer context**: The more acute and severe civil presentation, especially given the context of this patient being an immigrant and potentially having close ties to environments where certain pathogens are more common, including Streptococcus pneumoniae which does cause complete lysis of red blood cells (complete hemolysis) suggests that this should be the focus instead.

3. **Key Clue Ignoring**: The student failed to consider specifics in the question which would guide them to think about the hemolytic characteristics related to the urgency of the patient's presentation. They also erroneously matched Streptococcus viridans as the most likely pathogen without taking into account other bacteria, which led to the notion of answering option D. 

Thus, the student's reasoning particularly reflects an **ignoring key clues** in terms of which bacteria are more likely pathogenic based on the clinical presentation and their characteristics, focusing entirely on the hemolytic behavior rather than contextually relevant bacteria in terms of patient history and symptoms.

Conclusion: The student's rationale does not support correctly evaluating the infectious agent based on hemolytic properties relative to the clinical manifestations presented.

In summary, the principal error they made falls under:
- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student overlooked important contextual clues regarding the investigation of the causative organism by focusing solely on hemolytic properties without considering the infectious agents typically causing endocarditis in this setting.

\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:72,"gpt-4o":{explanation:`The patient in the question is presenting with classic symptoms of hyperthyroidism, likely due to Graves' disease, as evidenced by the symptoms of weight loss, tachycardia, tremors, moist palms, and an enlarged thyroid gland. The eye symptoms such as exophthalmos, lid retraction, and inability to converge the eyes are characteristic of Graves' ophthalmopathy.

The student's analysis centers around the idea that sympathetic hyperactivity of the levator palpebrae superioris is responsible for these ocular findings. While sympathetic overactivity can contribute to lid retraction, it doesn't explain the other eye symptoms like exophthalmos or inability to converge the eyes. These are specifically due to the infiltration of the orbit with glycosaminoglycans, leading to inflammation and edema in the extraocular muscles and other tissues, a process characteristic of Graves' ophthalmopathy.

The correct answer, therefore, is option C: Glycosaminoglycan accumulation in the orbit, which directly addresses the changes leading to the described ocular symptoms.

The error here can be categorized as:
- **1: Basic medical knowledge error**, specifically:
  - **b. Errors in basic medical knowledge**: The student demonstrates a misunderstanding of the pathophysiological processes involved in Graves' ophthalmopathy, focusing on sympathetic activity without addressing the glycosaminoglycan accumulation that primarily causes the ocular changes in Graves' disease.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's answer revolves around a misunderstanding of the underlying pathology associated with Graves' ophthalmopathy.

In the case presented, the patient exhibits symptoms consistent with hyperthyroidism and Graves' disease, specifically exophthalmos, lid retraction, and convergence inability. However, the student attributes these symptoms solely to "sympathetic hyperactivity of levator palpebrae superioris," which is not the main pathology causing the symptoms.

The symptoms of Graves' ophthalmopathy are primarily due to **glycosaminoglycan (GAG) accumulation** in the retro-orbital space. This accumulation leads to swelling of the extraocular muscles and other orbital tissues, resulting in the symptoms such as exophthalmos and lid retraction due to muscle involvement. This GAG accumulation is not limited to the levator palpebrae superioris but affects multiple aspects of the orbit.

Let's look at the provided options:

1. A. Granulomatous inflammation of the cavernous sinus: This is not relevant to the patient’s symptoms.
2. B. Abnormal communication between the cavernous sinus and the internal carotid artery: This does not explain the symptoms.
3. C. Glycosaminoglycan accumulation in the orbit: This is the correct underlying cause of the ocular symptoms.
4. D. Bacterial infection of the orbital contents: There is no evidence of infection.
5. E. Sympathetic hyperactivity of levator palpebrae superioris: While sympathetic activity can contribute to lid retraction, it does not explain the primary mechanism in Graves' disease.

The biggest mistake the student made lies in the assumption that the symptoms can be attributed directly to sympathetic hyperactivity, without acknowledging the key role of GAG accumulation and inflammation in the pathophysiology of Graves' disease.

Thus, the student's error can be categorized as follows:
- **2: Diagnostic error**, specifically:
  - **g. Other**: The answer fails to recognize the correct pathophysiology contributing to the ocular symptoms of Graves' disease.

\`\`\`
2 - g
\`\`\``,category:"2 - g"}},{question_no:73,"gpt-4o":{explanation:`The student analyzed the patient's symptoms and test results, however, there seems to be a misunderstanding of the stress test results. Let's break down the correct analysis:

- **Varus stress test**: This test assesses the lateral collateral ligament (LCL) by applying a force to the medial aspect of the knee, checking for lateral knee instability. The fact that there is no laxity upon varus stress indicates that the LCL is intact.

- **Valgus stress test**: This test assesses the medial collateral ligament (MCL) by applying a force to the lateral aspect of the knee, checking for medial knee instability. The presence of laxity upon valgus stress suggests an injury to the MCL, not the LCL.

The student incorrectly concluded that the LCL was injured based on valgus laxity, which indicates an MCL injury. The earlier mentioned Lachman’s and posterior drawer tests confirm there is no ACL or PCL injury.

The student's primary error was in diagnosing the injured structure:

1. **2: Diagnostic error**, specifically:
   - **b. Errors in basic medical knowledge**: Mistakenly associating valgus stress laxity with LCL injury shows a gap in the basic understanding of knee ligament anatomy and instability tests.

\`\`\`
2 - b
\`\`\``,category:"2 - b"},"gpt-4o-mini":{explanation:`The student analyzed the case well but ultimately provided an incorrect answer regarding the structure injured in the patient's knee. The key points to consider involve understanding the results of specific stress tests and the anatomy involved.

Analyzing the information given:

1. **Physical Examination**: 
   - The patient demonstrated no swelling or effusion in the knee, which often indicates that there is no significant ligamentous injury leading to joint effusion.
   - Varus stress test: No laxity, meaning the lateral stability (often associated with LCL integrity) is intact.
   - Valgus stress test: Laxity noted, indicating instability on the medial aspect of the knee, which points toward a potential injury to the Medial Collateral Ligament (MCL).
   - Lachman's test and posterior drawer test showed firm endpoints, suggesting that both the ACL and PCL are intact.

Given the above findings, the laxity on the valgus stress test suggests an injury to the MCL rather than the LCL, since the MCL is responsible for resisting valgus forces and provides stability to the medial compartment of the knee.

In summary:
- The student's main error falls under **3. Treatment and test method suggestion errors**, specifically:
  - **e. Ignoring key clues**: The student overlooked the critical information indicating a valgus stress test result, which clearly points to an MCL injury rather than the LCL.

\`\`\`
3 - e
\`\`\``,category:"3 - e"}},{question_no:74,"gpt-4o":{explanation:`The student has attempted to select an appropriate medication for rate control in a patient with a likely diagnosis of atrial fibrillation and chronic heart failure. However, let's analyze the logic behind their choice and where it went astray:

1. **Understanding the patient's condition**: The student correctly identifies that the patient likely has atrial fibrillation, as indicated by the irregular heart rhythm and rapid heart rate. The past myocardial infarction and reduced ejection fraction indicate heart failure with reduced ejection fraction (HFrEF).

2. **Choosing the right medication**: In patients with HFrEF, certain medications are preferred for rate control. Non-dihydropyridine calcium channel blockers like verapamil and diltiazem are typically avoided in patients with heart failure with reduced ejection fraction due to their negative inotropic effects, which can worsen heart failure. Instead, medications like beta-blockers (e.g., metoprolol) and digoxin are preferred. Given that the patient is already on metoprolol, digoxin would be the appropriate addition for further rate control.

3. **Review of the options**:
   - **Atenolol**: Another beta-blocker, but adding another beta-blocker wouldn't be appropriate given the patient is already on metoprolol.
   - **Verapamil (B)**: Incorrect due to its potential negative impact on heart failure.
   - **Diltiazem**: Similar issues to verapamil with respect to heart failure.
   - **Propafenone**: Not preferred in structural heart disease like post-MI with heart failure.
   - **Digoxin (E)**: Correct choice, particularly beneficial in rate control for atrial fibrillation in heart failure patients.

The primary error here lies in the choice of medication for rate control in a patient with atrial fibrillation and HFrEF. The student has overlooked the critical point that verapamil is not suitable in this context.

This error is:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly applied the knowledge of drug suitability for atrial fibrillation in heart failure patients.

\`\`\`
3 - b
\`\`\``,category:"3 - b"},"gpt-4o-mini":{explanation:`The student selected Verapamil as the best choice for rate control in the context of the given case. However, there are several inaccuracies in their reasoning regarding both the patient's condition and the choice of medication.

Analyzing the patient's situation:

- The patient has a history of myocardial infarction and is currently classified as having chronic heart failure (NYHA class II) and shows signs of tachyarrhythmia (irregular heart rhythm and a heart rate of 125/min).
- The patient's left ventricular ejection fraction (LVEF) is low at 39%, which indicates significant heart failure.

Now addressing the student's selection:

1. **Verapamil**: While it is indeed a calcium channel blocker that can be effective in controlling ventricular rate in atrial fibrillation, it is not the first line in patients with heart failure because it can worsen heart failure. Additionally, given the patient’s history of myocardial infarction, rate control with a medication that has a better safety profile in heart failure is preferable.

2. **Atenolol (not selected by student)**: This beta-blocker is generally a better option for this patient. Beta-blockers can improve symptoms of heart failure and help in controlling the heart rate in atrial fibrillation. Given that the patient has heart failure, a beta-blocker like Atenolol would be compatible—its use is often indicated in patients with heart failure recovery and can sometimes improve outcomes.

3. **Diltiazem**: Similar to Verapamil in that it is a calcium channel blocker, but would carry a similar risk of worsening heart failure as Verapamil.

4. **Propafenone**: While it can be used for rhythm control, it is not suitable for rate control, especially in the setting of heart failure.

5. **Digoxin**: This medication can indeed provide adequate rate control in patients with heart failure and atrial fibrillation. However, it is usually not first-line compared to beta-blockers in terms of overall management.

As such, the student not only selected an inappropriate medication (Verapamil) for the patient's heart failure status (worsening heart failure risk) but also did not recognize that Atenolol would be more appropriate. 

The primary error made encompasses:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Basic medical knowledge error**: The student improperly accounted for the management of a patient with heart failure by not selecting a beta-blocker, which is not only safe but also beneficial for heart failure patients.

\`\`\`
3 - b
\`\`\``,category:"3 - b"}},{question_no:75,"gpt-4o":{explanation:`The student correctly identifies the patient's symptoms as consistent with rabies, and they understand that post-exposure prophylaxis is crucial for preventing the progression of the disease. However, the student incorrectly selects an answer option, misunderstanding what was meant by "venom antiserum."

Analyzing the options:

1. **A toxoid vaccine within ten days of exposure**: Toxoid vaccines are designed for toxins, not viral infections like rabies.

2. **A killed vaccine within ten days of exposure**: This is the correct option. The rabies vaccine is a killed virus vaccine, and it should have been administered shortly after the exposure to prevent the onset of symptoms.

3. **Oseltamivir within one week of exposure**: This medication is used for influenza, not rabies.

4. **Venom antiserum within hours of exposure**: The student incorrectly believes this refers to rabies immune globulin (RIG) which is indeed a necessary part of rabies treatment, but the term "venom antiserum" usually refers to treatments for venomous bites and stings such as those from a snake, not rabies PEP.

5. **Doxycycline for one month after exposure**: This is for bacterial infections and unrelated to rabies.

While the student identifies key aspects of rabies treatment, such as the essential role of RIG, they incorrectly identify the option that refers to it and misunderstand the appropriate use of the killed vaccine. 

The error is:
- **3: Treatment and test method suggestion error**, specifically:
  - **b. Errors in basic medical knowledge**: The student is incorrect about the nature of the vaccine used in rabies PEP.
  - **d. Arbitrary Information Assumption Error**: The student assumed "venom antiserum" was referring to rabies immune globulin.

\`\`\`
3 - b, d
\`\`\``,category:"3 - b, d"},"gpt-4o-mini":{explanation:`The student has assessed the patient's presentation effectively, recognizing that the symptoms are indicative of rabies infection following contact with bats. The student also notes the importance of prompt post-exposure prophylaxis (PEP), which includes rabies immune globulin (RIG) and rabies vaccination to prevent this fatal disease.

However, the student's answer to the question incorrectly selects **D** (Venom antiserum within hours of exposure) as the most effective treatment in circumstances involving rabies exposure. This choice reflects a **basic medical knowledge error**, as rabies does not involve the use of venom antiserum; instead, it requires rabies immune globulin (RIG) along with vaccination.

**Breaking Down the Options:**

- **A. A toxoid vaccine within ten days of exposure**: This is not relevant to rabies and pertains to tetanus prophylaxis.
  
- **B. A killed vaccine within ten days of exposure**: This is also misleading. For rabies prevention, the killed vaccine refers to the rabies vaccine that needs to be administered, but it's not merely about a killed vaccine; the combination of RIG and vaccination is essential.

- **C. Oseltamivir within one week of exposure**: This is incorrect, as oseltamivir is used for influenza, not rabies.

- **D. Venom antiserum within hours of exposure**: This is incorrect for rabies; it confuses rabies with treatments for venomous bites, such as from snakes.

- **E. Doxycycline for one month after exposure**: This is irrelevant, as doxycycline is an antibiotic and doesn't apply to rabies prophylaxis.

Given the mistake in identifying that venom antiserum is not applicable for rabies, the student's response shows a significant misunderstanding.

Thus, we categorize the student's error under:
- **1. Basic medical knowledge errors** – regarding the treatment for rabies exposure, as they conflated rabies treatment with treatments relevant to other types of infections.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:76,"gpt-4o":{explanation:`The student's process of elimination focuses on the connection between systemic lupus erythematosus (SLE) and the symptoms of edema due to increased capillary permeability. However, while SLE can lead to increased capillary permeability, the specific urinalysis findings and clinical presentation suggest otherwise.

Key points to consider:

1. **SLE and Kidney Involvement**: The presentation is consistent with lupus nephritis, a common complication of SLE that affects the kidneys. The presence of RBC casts, dysmorphic RBCs, and protein in the urine significantly suggests glomerulonephritis.

2. **Understanding of Urinalysis Results**: The presence of protein in the urine with hematuria and RBC casts indicates an active glomerular process.

Student Error Analysis:

- **Increased Capillary Permeability**: Typically implies a condition where the blood vessels allow fluid to leak out unusually, causing edema. While SLE can lead to capillary changes, the specific mention in the question is pointing towards renal involvement leading to edema. The student focused on the mechanism without connecting it to the primary renal-related cause of the symptoms in this SLE patient.

- **Salt Retention as a Culprit**: The blood pressure reading of 162/98 mm Hg, along with signs of edema, point toward salt and water retention due to renal impairment, which aligns with option E, salt retention. This is frequently due to reduced kidney function in SLE-associated nephritis.

The student's primary error lies in the diagnostic interpretation:

- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student failed to integrate the urinalysis results indicating glomerulonephritis and the physiological process leading to hypertension and edema, pointing clearly towards salt retention due to renal involvement in SLE.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student analyzed the patient's presentation, considering her history of systemic lupus erythematosus (SLE) and its potential effects such as kidney involvement. While they correctly noted that the urinalysis indicates glomerulonephritis, their conclusion that the cause of the edema is **"increased capillary permeability"** is incorrect.

Let's dissect the situation and the options:

1. **Increased capillary permeability**: While SLE can indeed affect capillary permeability, the underlying cause of the patient's leg edema is more likely related to kidney function and its effects on fluid balance rather than just an increase in capillary permeability.

2. **Salt retention (E)**: This is the most likely cause based on the patient's hypertension, dark urine, and kidney involvement. SLE-related nephritis can lead to renal impairment and salt/fluid retention, which manifests as edema.

3. **Venous insufficiency (A)**: This typically presents with characteristics like unilateral edema, which is not the case here.

4. **Lymphatic obstruction (B)**: This would generally lead to localized edema and is not applicable in this scenario of bilateral edema associated with SLE.

5. **Renal protein loss (D)**: While proteinuria is noted, the predominant presentation isn't characteristic of nephrotic syndrome, since there's hematuria and RBC casts, indicative of glomerular injury rather than purely protein loss.

The student's error lies primarily in the area of **diagnostic error**, specifically:
- **e. Ignoring key clues**: The student failed to recognize that the patient's clinical signs and urinalysis results point toward kidney-related salt retention rather than solely focusing on capillary permeability as the leading cause of the edema.

Thus, the error is classified as follows:
\`\`\`
2 - e
\`\`\``,category:"2 - e"}},{question_no:77,"gpt-4o":{explanation:`The student analyzed the patient's symptoms and explored potential causes like proptosis, ptosis, and a poorly reactive pupil. These symptoms hint at a possible issue involving the cranial nerves or structures within the orbit or cavernous sinus, which requires imaging for evaluation. However, the student suggests that direct fundoscopy should be the next step, which does not align with the need to visualize structures like the cavernous sinus and possible aneurysms or masses.

Let's explore the options:

1. **CT head (non-contrast)**: While this is helpful in some cases of sudden neurological symptoms, it is not as detailed as MRI or MR angiography for soft tissue evaluation like that of the cranial nerves or orbital structures.

2. **Direct fundoscopy**: This primarily aids in visualizing the retina and optic disc and might catch signs of increased intracranial pressure, glaucoma or retinopathy, but it is not applicable here given the probable concerns of orbital or cavernous sinus involvement.

3. **Intraocular pressures**: This would be used in the evaluation of glaucoma but is not specifically applicable to her symptoms, which imply a cranial nerve or orbital problem.

4. **MR angiography of the head**: This is appropriate for visualizing the blood vessels in the brain, particularly relevant when concerns about aneurysms affecting cranial nerve function are present.

5. **Temporal artery biopsy**: This is for diagnosis of temporal arteritis, which doesn't match the symptom profile of ptosis and a fixed, dilated pupil.

The student's primary error lies in diagnostic strategy:

- **2: Diagnostic error**, specifically:
  - **e. Ignoring key clues**: The student failed to appropriately link the presenting neurology-centric symptoms (suggestive of possible aneurysm or sinus issue) to the need for detailed imaging like MR angiography.

\`\`\`
2 - e
\`\`\``,category:"2 - e"},"gpt-4o-mini":{explanation:`The student's analysis of the patient's clinical presentation involves exploring possible causes for the symptoms, which include proptosis, ptosis, and a poorly reactive pupil on the right side. The differential diagnosis includes conditions such as **orbital or cavernous sinus disease**, **thyroid ophthalmopathy**, and **cavernous sinus thrombosis**. 

However, the student incorrectly chooses direct fundoscopy as the next best test. Let's analyze the errors made:

1. The presence of **ptosis**, **double vision**, and a **poorly reactive pupil** suggests a nerve involvement, particularly with possible **oculomotor nerve (CN III) palsy**, often due to a compressive process such as an aneurysm or other mass lesions. 

2. While a thorough clinical examination is vital, the *next best test* in this scenario should be focused on obtaining appropriate imaging to evaluate for serious conditions such as an aneurysm or a mass lesion in the brain. An **MRI** is indeed more sensitive for soft tissue and aneurysms, allowing a detailed view of the orbit and cavernous sinus. 

3. The option **A: CT head (non-contrast)** is typically the immediate imaging modality used in acute settings. However, for conditions like the one presented, it is generally accepted that **MRI** provides superior detail.

4. The student failed to recognize the urgency of assessing structural abnormalities which may account for the neurological deficits. This oversight is critical when determining the next steps in management.

In summary, the primary error made by the student can be categorized as:
- **2. Diagnostic error**, specifically:
  - **f. Ignoring key clues**: The student ignored the anatomical and clinical context, misjudging the need for imaging to assess for potentially dangerous conditions associated with cranial nerve involvement.

\`\`\`
2 - f
\`\`\``,category:"2 - f"}},{question_no:78,"gpt-4o":{explanation:`The student's analysis shows an understanding of the physiological concepts related to muscle contraction, recruitment, and the nature of skeletal and cardiac muscle. However, the student incorrectly concludes that in phase 1, there is recruitment of large motor units followed by small motor units. This is inconsistent with the typical pattern of motor unit recruitment.

Let's break down the question:

1. **Phase 1: Lifting a 2.3 kg weight with the left hand**
   - Typically, recruitment of motor units follows the size principle, where smaller motor units are recruited first, followed by larger motor units if more force is needed. The student's choice implies the reverse order, which is incorrect for voluntary muscle contraction tasks like lifting a weight with the biceps.

2. **Phase 2: 20 burpees increasing heart rate to 150/min**
   - Cardiac muscle activity increases with exercise, but it does not follow the skeletal muscle recruitment patterns of small followed by large motor units.

3. **Phase 3: Electrical stimulation of the gastrocnemius at 50 Hz**
   - This phase is likely to produce a fused tetanic contraction due to the high-frequency electrical stimulation, which the student correctly identifies.

The correct answer, as initially provided in the question, is **E: Increase of tension in all phases**, as the common factor in all phases is the increase in muscle tension or activity, albeit through different mechanisms - phase 1 through motor unit recruitment, phase 2 through increased cardiac output, and phase 3 through electrical stimulation causing tetany.

The error made by the student falls in:

- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly interprets the motor unit recruitment order for voluntary muscle contraction.
  - **d. Arbitrary Information Assumption Error**: The student combines factors from different types of muscle (skeletal in phase 1, cardiac in phase 2), leading to an incorrect understanding of muscle recruitment principles.

\`\`\`
1 - b, d
\`\`\``,category:"1 - b, d"},"gpt-4o-mini":{explanation:`The student's analysis includes a good understanding of the daily functions of muscle contractions and the recruitment of motor units during voluntary actions. However, there are multiple issues with their thought process and overall answer selection that lead to the classification of their errors.

1. In **Phase 1**, when lifting a moderate weight, the recruitment of motor units begins with smaller motor units and progresses to larger motor units as necessary. This is standard practice in motor unit recruitment, where smaller, fatigue-resistant fibers are activated first (as seen with light weights). Thus, the decision to select **C** (Recruitment of large motor units followed by small motor units) is incorrect; rather, it should be the reverse.

2. In **Phase 2**, during the burpees, the focus shifts to the cardiac muscle as the heart rate is elevated to 150 beats per minute. This increased heart rate does not involve motor unit recruitment like skeletal muscle contraction; rather, it reflects increased heart contractility and frequency but should not be confused with the recruitment seen in skeletal muscles.

3. In **Phase 3**, while 50 Hz electrical stimulation can indeed lead to a fused tetanic contraction in skeletal muscle, that concept does not apply to the previous phases, which should be considered separately without merging the mechanics of skeletal and cardiac muscle contraction.

Given these analyses, the student's reasoning reflects a misunderstanding of the recruitment pattern in Phase 1 (basic medical knowledge error regarding motor unit recruitment), which cascades into their conclusion for Phase 2 and Phase 3.

Thus, their primary error here involves:

- **1: Basic medical knowledge errors** regarding the sequence of motor unit recruitment.

Subcategorization of this error is that of having incorrect knowledge (specifically regarding the reversal of motor unit recruitment).

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:79,"gpt-4o":{explanation:`The student's analysis contains several critical errors in understanding the anatomy of the nerves related to the thyroid surgery site:

1. The **recurrent laryngeal nerve (RLN)** is indeed crucial for vocal cord function but is not primarily associated with shoulder shrugging. The RLN innervates the intrinsic muscles of the larynx except for the cricothyroid muscle.

2. The **superior laryngeal nerve (SLN)**, specifically its external branch, runs near the superior thyroid artery and innervates the cricothyroid muscle. Damage to the SLN leads to problems affecting voice pitch because the cricothyroid muscle is involved in tensing the vocal cords to modulate pitch.

3. **Weakness of shoulder shrug** is related to the function of the trapezius muscle, which is innervated by the spinal accessory nerve (cranial nerve XI), not the RLN or SLN.

The correct answer is **A. Voice pitch limitation** due to damage to the external branch of the superior laryngeal nerve during the surgery near the superior thyroid artery. 

The student's mistakes include:

- **1: Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student incorrectly believes that the recurrent laryngeal nerve is involved in shoulder shrugging, which shows a misunderstanding of nerve anatomy and function.
  
Based on these observations, the error categorization is:

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's answer indicates they chose C (Weakness of shoulder shrug) as the most likely symptom following damage associated with the hemithyroidectomy, but their reasoning and understanding of the anatomy involved is incorrect.

Upon analysis, the key structure that is typically at risk in this scenario is the **external branch of the superior laryngeal nerve**, not the recurrent laryngeal nerve (RLN). The external branch of the superior laryngeal nerve innervates the cricothyroid muscle, which is essential for voice modulation but not for shoulder movement.

The key symptoms based on nerve damage in the context provided include:

1. **Voice pitch limitation (Option A)**: Damage to the external branch of the superior laryngeal nerve would lead to difficulties in modulating voice pitch, as the cricothyroid muscle is affected. 
   
2. **Ineffective cough (Option B)**: This could be affected but is not most directly correlated with the structure mentioned.
   
3. **Weakness of shoulder shrug (Option C)**: This is actually associated with the spinal accessory nerve (CN XI) which innervates the sternocleidomastoid and trapezius muscles. Damage to this nerve would lead to shoulder shrug weakness.
   
4. **Difficulty swallowing (Option D)**: Often associated with vagus nerve damage but not directly related to the scenario as explained.
   
5. **Shortness of breath (Option E)**: Not primarily affected by injury to these specific nerves.

The student misidentified the role of the affected nerve in their reasoning, leading them to choose an incorrect answer. The error can be categorized as follows:

- **1. Basic medical knowledge errors**: The student had incorrect knowledge about which nerve is likely damaged during the procedure and thus misidentified the symptoms that would result from it.

\`\`\`
1 - b
\`\`\``,category:"1 - b"}},{question_no:80,"gpt-4o":{explanation:`The student's analysis incorrectly identifies the appropriate post-exposure prophylaxis for rabies. Let's break down where the student went wrong in their reasoning:

1. The patient's symptoms and history strongly suggest a rabies infection; they encountered bats, and the symptoms are consistent with rabies.
   
2. Rabies post-exposure prophylaxis includes the administration of both the rabies immune globulin (RIG) and the rabies vaccine. The immune globulin provides immediate passive immunity until the vaccine induces active immunity.

3. Option D mentions "venom antiserum," which is unrelated to rabies and is used for treating envenomations from snake bites or other venomous creatures.

4. The correct post-exposure prophylaxis for rabies, in addition to immediate immune globulin (which is not explicitly mentioned in the options), is a "killed vaccine within ten days of exposure", which matches option B.

The student's primary errors lie in:

- **1. Basic medical knowledge errors**, specifically:
  - **b. Errors in basic medical knowledge**: The student misunderstood that "venom antiserum" is not equivalent to rabies immune globulin, missing the necessary distinctions in terminology.
  
- **2. Diagnostic errors**, since it relates fundamentally to the rabies diagnosis and subsequent understanding of treatment:

  - **e. Ignoring key clues**: The student misinterpreted or overlooked that there are no standard mentions of immediate RIG in the answer choices and confused "venom antiserum" with rabies prophylaxis terminology.

Only the earliest relevant categorization applies since errors in understanding basic medical knowledge about rabies prophylaxis affected the student's answer choice directly.

\`\`\`
1 - b
\`\`\``,category:"1 - b"},"gpt-4o-mini":{explanation:`The student's answer in this scenario is incorrect because they selected option D, which does not align with established treatment protocols for rabies exposure.

The patient presents with classic symptoms of rabies including neurologic changes, agitation, and history of exposure to bats, which are known rabies carriers. The standard post-exposure prophylaxis (PEP) for rabies consists of two main components: rabies vaccine and rabies immune globulin (RIG). The timing of these interventions is critical.

Let's analyze the options:

A. **A toxoid vaccine within ten days of exposure**: This refers to tetanus and is irrelevant to rabies management.

B. **A killed vaccine within ten days of exposure**: This would typically refer to rabies vaccination. While the killed vaccine is crucial in rabies PEP, it must be combined with RIG for immediate protection. The phrasing of this option can lead to misunderstandings, but this is the general approach for rabies.

C. **Oseltamivir within one week of exposure**: Oseltamivir is used for influenza and has nothing to do with rabies.

D. **Venom antiserum within hours of exposure**: This is incorrect terminology for rabies treatment. Rabies immune globulin (RIG) is not referred to as "venom antiserum." Venom antiserum is typically used for snake bites, not rabies.

E. **Doxycycline for one month after exposure**: This is an antibiotic, not relevant to rabies management.

The student's error falls into the category of **3. Treatment and test method suggestion error** with the specific subcategory of **b. Basic medical knowledge error** since they confused RIG with venom antiserum and did not adequately recognize the need for combination treatment in rabies exposure.

\`\`\`
3 - b
\`\`\``,category:"3 - b"}}];function vy(a,s){const r={};return(a[a.length-1]===""?[...a,""]:a).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const wy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ty=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xy={};function Cf(a,s){return(xy.jsx?Ty:wy).test(a)}const ky=/[ \t\n\f\r]/g;function Ay(a){return typeof a=="object"?a.type==="text"?Df(a.value):!1:Df(a)}function Df(a){return a.replace(ky,"")===""}class bo{constructor(s,r,l){this.normal=r,this.property=s,l&&(this.space=l)}}bo.prototype.normal={};bo.prototype.property={};bo.prototype.space=void 0;function dp(a,s){const r={},l={};for(const h of a)Object.assign(r,h.property),Object.assign(l,h.normal);return new bo(r,l,s)}function pc(a){return a.toLowerCase()}class xt{constructor(s,r){this.attribute=r,this.property=s}}xt.prototype.attribute="";xt.prototype.booleanish=!1;xt.prototype.boolean=!1;xt.prototype.commaOrSpaceSeparated=!1;xt.prototype.commaSeparated=!1;xt.prototype.defined=!1;xt.prototype.mustUseProperty=!1;xt.prototype.number=!1;xt.prototype.overloadedBoolean=!1;xt.prototype.property="";xt.prototype.spaceSeparated=!1;xt.prototype.space=void 0;let Sy=0;const pe=wi(),Je=wi(),fp=wi(),V=wi(),Pe=wi(),ca=wi(),Dt=wi();function wi(){return 2**++Sy}const mc=Object.freeze(Object.defineProperty({__proto__:null,boolean:pe,booleanish:Je,commaOrSpaceSeparated:Dt,commaSeparated:ca,number:V,overloadedBoolean:fp,spaceSeparated:Pe},Symbol.toStringTag,{value:"Module"})),tc=Object.keys(mc);class Ac extends xt{constructor(s,r,l,h){let u=-1;if(super(s,r),Bf(this,"space",h),typeof l=="number")for(;++u<tc.length;){const d=tc[u];Bf(this,tc[u],(l&mc[d])===mc[d])}}}Ac.prototype.defined=!0;function Bf(a,s,r){r&&(a[s]=r)}function ua(a){const s={},r={};for(const[l,h]of Object.entries(a.properties)){const u=new Ac(l,a.transform(a.attributes||{},l),h,a.space);a.mustUseProperty&&a.mustUseProperty.includes(l)&&(u.mustUseProperty=!0),s[l]=u,r[pc(l)]=l,r[pc(u.attribute)]=l}return new bo(s,r,a.space)}const pp=ua({properties:{ariaActiveDescendant:null,ariaAtomic:Je,ariaAutoComplete:null,ariaBusy:Je,ariaChecked:Je,ariaColCount:V,ariaColIndex:V,ariaColSpan:V,ariaControls:Pe,ariaCurrent:null,ariaDescribedBy:Pe,ariaDetails:null,ariaDisabled:Je,ariaDropEffect:Pe,ariaErrorMessage:null,ariaExpanded:Je,ariaFlowTo:Pe,ariaGrabbed:Je,ariaHasPopup:null,ariaHidden:Je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pe,ariaLevel:V,ariaLive:null,ariaModal:Je,ariaMultiLine:Je,ariaMultiSelectable:Je,ariaOrientation:null,ariaOwns:Pe,ariaPlaceholder:null,ariaPosInSet:V,ariaPressed:Je,ariaReadOnly:Je,ariaRelevant:null,ariaRequired:Je,ariaRoleDescription:Pe,ariaRowCount:V,ariaRowIndex:V,ariaRowSpan:V,ariaSelected:Je,ariaSetSize:V,ariaSort:null,ariaValueMax:V,ariaValueMin:V,ariaValueNow:V,ariaValueText:null,role:null},transform(a,s){return s==="role"?s:"aria-"+s.slice(4).toLowerCase()}});function mp(a,s){return s in a?a[s]:s}function gp(a,s){return mp(a,s.toLowerCase())}const zy=ua({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ca,acceptCharset:Pe,accessKey:Pe,action:null,allow:null,allowFullScreen:pe,allowPaymentRequest:pe,allowUserMedia:pe,alt:null,as:null,async:pe,autoCapitalize:null,autoComplete:Pe,autoFocus:pe,autoPlay:pe,blocking:Pe,capture:null,charSet:null,checked:pe,cite:null,className:Pe,cols:V,colSpan:null,content:null,contentEditable:Je,controls:pe,controlsList:Pe,coords:V|ca,crossOrigin:null,data:null,dateTime:null,decoding:null,default:pe,defer:pe,dir:null,dirName:null,disabled:pe,download:fp,draggable:Je,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:pe,formTarget:null,headers:Pe,height:V,hidden:pe,high:V,href:null,hrefLang:null,htmlFor:Pe,httpEquiv:Pe,id:null,imageSizes:null,imageSrcSet:null,inert:pe,inputMode:null,integrity:null,is:null,isMap:pe,itemId:null,itemProp:Pe,itemRef:Pe,itemScope:pe,itemType:Pe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:pe,low:V,manifest:null,max:null,maxLength:V,media:null,method:null,min:null,minLength:V,multiple:pe,muted:pe,name:null,nonce:null,noModule:pe,noValidate:pe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:pe,optimum:V,pattern:null,ping:Pe,placeholder:null,playsInline:pe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:pe,referrerPolicy:null,rel:Pe,required:pe,reversed:pe,rows:V,rowSpan:V,sandbox:Pe,scope:null,scoped:pe,seamless:pe,selected:pe,shadowRootClonable:pe,shadowRootDelegatesFocus:pe,shadowRootMode:null,shape:null,size:V,sizes:null,slot:null,span:V,spellCheck:Je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:V,step:null,style:null,tabIndex:V,target:null,title:null,translate:null,type:null,typeMustMatch:pe,useMap:null,value:Je,width:V,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Pe,axis:null,background:null,bgColor:null,border:V,borderColor:null,bottomMargin:V,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:pe,declare:pe,event:null,face:null,frame:null,frameBorder:null,hSpace:V,leftMargin:V,link:null,longDesc:null,lowSrc:null,marginHeight:V,marginWidth:V,noResize:pe,noHref:pe,noShade:pe,noWrap:pe,object:null,profile:null,prompt:null,rev:null,rightMargin:V,rules:null,scheme:null,scrolling:Je,standby:null,summary:null,text:null,topMargin:V,valueType:null,version:null,vAlign:null,vLink:null,vSpace:V,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:pe,disableRemotePlayback:pe,prefix:null,property:null,results:V,security:null,unselectable:null},space:"html",transform:gp}),Ey=ua({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Dt,accentHeight:V,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:V,amplitude:V,arabicForm:null,ascent:V,attributeName:null,attributeType:null,azimuth:V,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:V,by:null,calcMode:null,capHeight:V,className:Pe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:V,diffuseConstant:V,direction:null,display:null,dur:null,divisor:V,dominantBaseline:null,download:pe,dx:null,dy:null,edgeMode:null,editable:null,elevation:V,enableBackground:null,end:null,event:null,exponent:V,externalResourcesRequired:null,fill:null,fillOpacity:V,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ca,g2:ca,glyphName:ca,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:V,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:V,horizOriginX:V,horizOriginY:V,id:null,ideographic:V,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:V,k:V,k1:V,k2:V,k3:V,k4:V,kernelMatrix:Dt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:V,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:V,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:V,overlineThickness:V,paintOrder:null,panose1:null,path:null,pathLength:V,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:V,pointsAtY:V,pointsAtZ:V,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Dt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Dt,rev:Dt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Dt,requiredFeatures:Dt,requiredFonts:Dt,requiredFormats:Dt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:V,specularExponent:V,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:V,strikethroughThickness:V,string:null,stroke:null,strokeDashArray:Dt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:V,strokeOpacity:V,strokeWidth:null,style:null,surfaceScale:V,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dt,tabIndex:V,tableValues:null,target:null,targetX:V,targetY:V,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Dt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:V,underlineThickness:V,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:V,values:null,vAlphabetic:V,vMathematical:V,vectorEffect:null,vHanging:V,vIdeographic:V,version:null,vertAdvY:V,vertOriginX:V,vertOriginY:V,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:V,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:mp}),yp=ua({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,s){return"xlink:"+s.slice(5).toLowerCase()}}),bp=ua({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:gp}),vp=ua({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,s){return"xml:"+s.slice(3).toLowerCase()}}),Cy={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Dy=/[A-Z]/g,Mf=/-[a-z]/g,By=/^data[-\w.:]+$/i;function My(a,s){const r=pc(s);let l=s,h=xt;if(r in a.normal)return a.property[a.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&By.test(s)){if(s.charAt(4)==="-"){const u=s.slice(5).replace(Mf,Ly);l="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=s.slice(4);if(!Mf.test(u)){let d=u.replace(Dy,Ny);d.charAt(0)!=="-"&&(d="-"+d),s="data"+d}}h=Ac}return new h(l,s)}function Ny(a){return"-"+a.toLowerCase()}function Ly(a){return a.charAt(1).toUpperCase()}const Hy=dp([pp,zy,yp,bp,vp],"html"),Sc=dp([pp,Ey,yp,bp,vp],"svg");function qy(a){return a.join(" ").trim()}var ra={},nc,Nf;function Oy(){if(Nf)return nc;Nf=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,s=/\n/g,r=/^\s*/,l=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,g=/^\s+|\s+$/g,b=`
`,m="/",v="*",w="",A="comment",T="declaration";nc=function(P,J){if(typeof P!="string")throw new TypeError("First argument must be a string");if(!P)return[];J=J||{};var R=1,F=1;function Y(Z){var X=Z.match(s);X&&(R+=X.length);var ee=Z.lastIndexOf(b);F=~ee?Z.length-ee:F+Z.length}function xe(){var Z={line:R,column:F};return function(X){return X.position=new oe(Z),ze(),X}}function oe(Z){this.start=Z,this.end={line:R,column:F},this.source=J.source}oe.prototype.content=P;function L(Z){var X=new Error(J.source+":"+R+":"+F+": "+Z);if(X.reason=Z,X.filename=J.source,X.line=R,X.column=F,X.source=P,!J.silent)throw X}function de(Z){var X=Z.exec(P);if(X){var ee=X[0];return Y(ee),P=P.slice(ee.length),X}}function ze(){de(r)}function U(Z){var X;for(Z=Z||[];X=$();)X!==!1&&Z.push(X);return Z}function $(){var Z=xe();if(!(m!=P.charAt(0)||v!=P.charAt(1))){for(var X=2;w!=P.charAt(X)&&(v!=P.charAt(X)||m!=P.charAt(X+1));)++X;if(X+=2,w===P.charAt(X-1))return L("End of comment missing");var ee=P.slice(2,X-2);return F+=2,Y(ee),P=P.slice(X),F+=2,Z({type:A,comment:ee})}}function K(){var Z=xe(),X=de(l);if(X){if($(),!de(h))return L("property missing ':'");var ee=de(u),_=Z({type:T,property:I(X[0].replace(a,w)),value:ee?I(ee[0].replace(a,w)):w});return de(d),_}}function W(){var Z=[];U(Z);for(var X;X=K();)X!==!1&&(Z.push(X),U(Z));return Z}return ze(),W()};function I(P){return P?P.replace(g,w):w}return nc}var Lf;function Ry(){if(Lf)return ra;Lf=1;var a=ra&&ra.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(ra,"__esModule",{value:!0}),ra.default=r;var s=a(Oy());function r(l,h){var u=null;if(!l||typeof l!="string")return u;var d=(0,s.default)(l),g=typeof h=="function";return d.forEach(function(b){if(b.type==="declaration"){var m=b.property,v=b.value;g?h(m,v,b):v&&(u=u||{},u[m]=v)}}),u}return ra}var Py=Ry();const Hf=up(Py),Iy=Hf.default||Hf,wp=Tp("end"),zc=Tp("start");function Tp(a){return s;function s(r){const l=r&&r.position&&r.position[a]||{};if(typeof l.line=="number"&&l.line>0&&typeof l.column=="number"&&l.column>0)return{line:l.line,column:l.column,offset:typeof l.offset=="number"&&l.offset>-1?l.offset:void 0}}}function _y(a){const s=zc(a),r=wp(a);if(s&&r)return{start:s,end:r}}function po(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?qf(a.position):"start"in a||"end"in a?qf(a):"line"in a||"column"in a?gc(a):""}function gc(a){return Of(a&&a.line)+":"+Of(a&&a.column)}function qf(a){return gc(a&&a.start)+"-"+gc(a&&a.end)}function Of(a){return a&&typeof a=="number"?a:1}class dt extends Error{constructor(s,r,l){super(),typeof r=="string"&&(l=r,r=void 0);let h="",u={},d=!1;if(r&&("line"in r&&"column"in r?u={place:r}:"start"in r&&"end"in r?u={place:r}:"type"in r?u={ancestors:[r],place:r.position}:u={...r}),typeof s=="string"?h=s:!u.cause&&s&&(d=!0,h=s.message,u.cause=s),!u.ruleId&&!u.source&&typeof l=="string"){const b=l.indexOf(":");b===-1?u.ruleId=l:(u.source=l.slice(0,b),u.ruleId=l.slice(b+1))}if(!u.place&&u.ancestors&&u.ancestors){const b=u.ancestors[u.ancestors.length-1];b&&(u.place=b.position)}const g=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=g?g.column:void 0,this.fatal=void 0,this.file,this.message=h,this.line=g?g.line:void 0,this.name=po(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=d&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual,this.expected,this.note,this.url}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const Ec={}.hasOwnProperty,Vy=new Map,jy=/[A-Z]/g,Uy=/-([a-z])/g,Gy=new Set(["table","tbody","thead","tfoot","tr"]),Yy=new Set(["td","th"]),xp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Xy(a,s){if(!s||s.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=s.filePath||void 0;let l;if(s.development){if(typeof s.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");l=eb(r,s.jsxDEV)}else{if(typeof s.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof s.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");l=$y(r,s.jsx,s.jsxs)}const h={Fragment:s.Fragment,ancestors:[],components:s.components||{},create:l,elementAttributeNameCase:s.elementAttributeNameCase||"react",evaluater:s.createEvaluater?s.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:s.ignoreInvalidStyle||!1,passKeys:s.passKeys!==!1,passNode:s.passNode||!1,schema:s.space==="svg"?Sc:Hy,stylePropertyNameCase:s.stylePropertyNameCase||"dom",tableCellAlignToStyle:s.tableCellAlignToStyle!==!1},u=kp(h,a,void 0);return u&&typeof u!="string"?u:h.create(a,h.Fragment,{children:u||void 0},void 0)}function kp(a,s,r){if(s.type==="element")return Fy(a,s,r);if(s.type==="mdxFlowExpression"||s.type==="mdxTextExpression")return Ky(a,s);if(s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement")return Wy(a,s,r);if(s.type==="mdxjsEsm")return Qy(a,s);if(s.type==="root")return Zy(a,s,r);if(s.type==="text")return Jy(a,s)}function Fy(a,s,r){const l=a.schema;let h=l;s.tagName.toLowerCase()==="svg"&&l.space==="html"&&(h=Sc,a.schema=h),a.ancestors.push(s);const u=Sp(a,s.tagName,!1),d=tb(a,s);let g=Dc(a,s);return Gy.has(s.tagName)&&(g=g.filter(function(b){return typeof b=="string"?!Ay(b):!0})),Ap(a,d,u,s),Cc(d,g),a.ancestors.pop(),a.schema=l,a.create(s,u,d,r)}function Ky(a,s){if(s.data&&s.data.estree&&a.evaluater){const l=s.data.estree.body[0];return l.type,a.evaluater.evaluateExpression(l.expression)}yo(a,s.position)}function Qy(a,s){if(s.data&&s.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(s.data.estree);yo(a,s.position)}function Wy(a,s,r){const l=a.schema;let h=l;s.name==="svg"&&l.space==="html"&&(h=Sc,a.schema=h),a.ancestors.push(s);const u=s.name===null?a.Fragment:Sp(a,s.name,!0),d=nb(a,s),g=Dc(a,s);return Ap(a,d,u,s),Cc(d,g),a.ancestors.pop(),a.schema=l,a.create(s,u,d,r)}function Zy(a,s,r){const l={};return Cc(l,Dc(a,s)),a.create(s,a.Fragment,l,r)}function Jy(a,s){return s.value}function Ap(a,s,r,l){typeof r!="string"&&r!==a.Fragment&&a.passNode&&(s.node=l)}function Cc(a,s){if(s.length>0){const r=s.length>1?s:s[0];r&&(a.children=r)}}function $y(a,s,r){return l;function l(h,u,d,g){const m=Array.isArray(d.children)?r:s;return g?m(u,d,g):m(u,d)}}function eb(a,s){return r;function r(l,h,u,d){const g=Array.isArray(u.children),b=zc(l);return s(h,u,d,g,{columnNumber:b?b.column-1:void 0,fileName:a,lineNumber:b?b.line:void 0},void 0)}}function tb(a,s){const r={};let l,h;for(h in s.properties)if(h!=="children"&&Ec.call(s.properties,h)){const u=ib(a,h,s.properties[h]);if(u){const[d,g]=u;a.tableCellAlignToStyle&&d==="align"&&typeof g=="string"&&Yy.has(s.tagName)?l=g:r[d]=g}}if(l){const u=r.style||(r.style={});u[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=l}return r}function nb(a,s){const r={};for(const l of s.attributes)if(l.type==="mdxJsxExpressionAttribute")if(l.data&&l.data.estree&&a.evaluater){const u=l.data.estree.body[0];u.type;const d=u.expression;d.type;const g=d.properties[0];g.type,Object.assign(r,a.evaluater.evaluateExpression(g.argument))}else yo(a,s.position);else{const h=l.name;let u;if(l.value&&typeof l.value=="object")if(l.value.data&&l.value.data.estree&&a.evaluater){const g=l.value.data.estree.body[0];g.type,u=a.evaluater.evaluateExpression(g.expression)}else yo(a,s.position);else u=l.value===null?!0:l.value;r[h]=u}return r}function Dc(a,s){const r=[];let l=-1;const h=a.passKeys?new Map:Vy;for(;++l<s.children.length;){const u=s.children[l];let d;if(a.passKeys){const b=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(b){const m=h.get(b)||0;d=b+"-"+m,h.set(b,m+1)}}const g=kp(a,u,d);g!==void 0&&r.push(g)}return r}function ib(a,s,r){const l=My(a.schema,s);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=l.commaSeparated?vy(r):qy(r)),l.property==="style"){let h=typeof r=="object"?r:ab(a,String(r));return a.stylePropertyNameCase==="css"&&(h=ob(h)),["style",h]}return[a.elementAttributeNameCase==="react"&&l.space?Cy[l.property]||l.property:l.attribute,r]}}function ab(a,s){const r={};try{Iy(s,l)}catch(h){if(!a.ignoreInvalidStyle){const u=h,d=new dt("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw d.file=a.filePath||void 0,d.url=xp+"#cannot-parse-style-attribute",d}}return r;function l(h,u){let d=h;d.slice(0,2)!=="--"&&(d.slice(0,4)==="-ms-"&&(d="ms-"+d.slice(4)),d=d.replace(Uy,rb)),r[d]=u}}function Sp(a,s,r){let l;if(!r)l={type:"Literal",value:s};else if(s.includes(".")){const h=s.split(".");let u=-1,d;for(;++u<h.length;){const g=Cf(h[u])?{type:"Identifier",name:h[u]}:{type:"Literal",value:h[u]};d=d?{type:"MemberExpression",object:d,property:g,computed:!!(u&&g.type==="Literal"),optional:!1}:g}l=d}else l=Cf(s)&&!/^[a-z]/.test(s)?{type:"Identifier",name:s}:{type:"Literal",value:s};if(l.type==="Literal"){const h=l.value;return Ec.call(a.components,h)?a.components[h]:h}if(a.evaluater)return a.evaluater.evaluateExpression(l);yo(a)}function yo(a,s){const r=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:s,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=a.filePath||void 0,r.url=xp+"#cannot-handle-mdx-estrees-without-createevaluater",r}function ob(a){const s={};let r;for(r in a)Ec.call(a,r)&&(s[sb(r)]=a[r]);return s}function sb(a){let s=a.replace(jy,lb);return s.slice(0,3)==="ms-"&&(s="-"+s),s}function rb(a,s){return s.toUpperCase()}function lb(a){return"-"+a.toLowerCase()}const ic={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},cb={};function hb(a,s){const r=cb,l=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,h=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return zp(a,l,h)}function zp(a,s,r){if(ub(a)){if("value"in a)return a.type==="html"&&!r?"":a.value;if(s&&"alt"in a&&a.alt)return a.alt;if("children"in a)return Rf(a.children,s,r)}return Array.isArray(a)?Rf(a,s,r):""}function Rf(a,s,r){const l=[];let h=-1;for(;++h<a.length;)l[h]=zp(a[h],s,r);return l.join("")}function ub(a){return!!(a&&typeof a=="object")}const Pf=document.createElement("i");function Bc(a){const s="&"+a+";";Pf.innerHTML=s;const r=Pf.textContent;return r.charCodeAt(r.length-1)===59&&a!=="semi"||r===s?!1:r}function on(a,s,r,l){const h=a.length;let u=0,d;if(s<0?s=-s>h?0:h+s:s=s>h?h:s,r=r>0?r:0,l.length<1e4)d=Array.from(l),d.unshift(s,r),a.splice(...d);else for(r&&a.splice(s,r);u<l.length;)d=l.slice(u,u+1e4),d.unshift(s,0),a.splice(...d),u+=1e4,s+=1e4}function Gt(a,s){return a.length>0?(on(a,a.length,0,s),a):s}const If={}.hasOwnProperty;function db(a){const s={};let r=-1;for(;++r<a.length;)fb(s,a[r]);return s}function fb(a,s){let r;for(r in s){const h=(If.call(a,r)?a[r]:void 0)||(a[r]={}),u=s[r];let d;if(u)for(d in u){If.call(h,d)||(h[d]=[]);const g=u[d];pb(h[d],Array.isArray(g)?g:g?[g]:[])}}}function pb(a,s){let r=-1;const l=[];for(;++r<s.length;)(s[r].add==="after"?a:l).push(s[r]);on(a,0,0,l)}function Ep(a,s){const r=Number.parseInt(a,s);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function ha(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const an=Kn(/[A-Za-z]/),Bt=Kn(/[\dA-Za-z]/),mb=Kn(/[#-'*+\--9=?A-Z^-~]/);function yc(a){return a!==null&&(a<32||a===127)}const bc=Kn(/\d/),gb=Kn(/[\dA-Fa-f]/),yb=Kn(/[!-/:-@[-`{-~]/);function he(a){return a!==null&&a<-2}function Tt(a){return a!==null&&(a<0||a===32)}function Be(a){return a===-2||a===-1||a===32}const bb=Kn(new RegExp("\\p{P}|\\p{S}","u")),vb=Kn(/\s/);function Kn(a){return s;function s(r){return r!==null&&r>-1&&a.test(String.fromCharCode(r))}}function da(a){const s=[];let r=-1,l=0,h=0;for(;++r<a.length;){const u=a.charCodeAt(r);let d="";if(u===37&&Bt(a.charCodeAt(r+1))&&Bt(a.charCodeAt(r+2)))h=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(d=String.fromCharCode(u));else if(u>55295&&u<57344){const g=a.charCodeAt(r+1);u<56320&&g>56319&&g<57344?(d=String.fromCharCode(u,g),h=1):d="�"}else d=String.fromCharCode(u);d&&(s.push(a.slice(l,r),encodeURIComponent(d)),l=r+h+1,d=""),h&&(r+=h,h=0)}return s.join("")+a.slice(l)}function Ie(a,s,r,l){const h=l?l-1:Number.POSITIVE_INFINITY;let u=0;return d;function d(b){return Be(b)?(a.enter(r),g(b)):s(b)}function g(b){return Be(b)&&u++<h?(a.consume(b),g):(a.exit(r),s(b))}}const wb={tokenize:Tb};function Tb(a){const s=a.attempt(this.parser.constructs.contentInitial,l,h);let r;return s;function l(g){if(g===null){a.consume(g);return}return a.enter("lineEnding"),a.consume(g),a.exit("lineEnding"),Ie(a,s,"linePrefix")}function h(g){return a.enter("paragraph"),u(g)}function u(g){const b=a.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=b),r=b,d(g)}function d(g){if(g===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(g);return}return he(g)?(a.consume(g),a.exit("chunkText"),u):(a.consume(g),d)}}const xb={tokenize:kb},_f={tokenize:Ab};function kb(a){const s=this,r=[];let l=0,h,u,d;return g;function g(Y){if(l<r.length){const xe=r[l];return s.containerState=xe[1],a.attempt(xe[0].continuation,b,m)(Y)}return m(Y)}function b(Y){if(l++,s.containerState._closeFlow){s.containerState._closeFlow=void 0,h&&F();const xe=s.events.length;let oe=xe,L;for(;oe--;)if(s.events[oe][0]==="exit"&&s.events[oe][1].type==="chunkFlow"){L=s.events[oe][1].end;break}R(l);let de=xe;for(;de<s.events.length;)s.events[de][1].end={...L},de++;return on(s.events,oe+1,0,s.events.slice(xe)),s.events.length=de,m(Y)}return g(Y)}function m(Y){if(l===r.length){if(!h)return A(Y);if(h.currentConstruct&&h.currentConstruct.concrete)return I(Y);s.interrupt=!!(h.currentConstruct&&!h._gfmTableDynamicInterruptHack)}return s.containerState={},a.check(_f,v,w)(Y)}function v(Y){return h&&F(),R(l),A(Y)}function w(Y){return s.parser.lazy[s.now().line]=l!==r.length,d=s.now().offset,I(Y)}function A(Y){return s.containerState={},a.attempt(_f,T,I)(Y)}function T(Y){return l++,r.push([s.currentConstruct,s.containerState]),A(Y)}function I(Y){if(Y===null){h&&F(),R(0),a.consume(Y);return}return h=h||s.parser.flow(s.now()),a.enter("chunkFlow",{_tokenizer:h,contentType:"flow",previous:u}),P(Y)}function P(Y){if(Y===null){J(a.exit("chunkFlow"),!0),R(0),a.consume(Y);return}return he(Y)?(a.consume(Y),J(a.exit("chunkFlow")),l=0,s.interrupt=void 0,g):(a.consume(Y),P)}function J(Y,xe){const oe=s.sliceStream(Y);if(xe&&oe.push(null),Y.previous=u,u&&(u.next=Y),u=Y,h.defineSkip(Y.start),h.write(oe),s.parser.lazy[Y.start.line]){let L=h.events.length;for(;L--;)if(h.events[L][1].start.offset<d&&(!h.events[L][1].end||h.events[L][1].end.offset>d))return;const de=s.events.length;let ze=de,U,$;for(;ze--;)if(s.events[ze][0]==="exit"&&s.events[ze][1].type==="chunkFlow"){if(U){$=s.events[ze][1].end;break}U=!0}for(R(l),L=de;L<s.events.length;)s.events[L][1].end={...$},L++;on(s.events,ze+1,0,s.events.slice(de)),s.events.length=L}}function R(Y){let xe=r.length;for(;xe-- >Y;){const oe=r[xe];s.containerState=oe[1],oe[0].exit.call(s,a)}r.length=Y}function F(){h.write([null]),u=void 0,h=void 0,s.containerState._closeFlow=void 0}}function Ab(a,s,r){return Ie(a,a.attempt(this.parser.constructs.document,s,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vf(a){if(a===null||Tt(a)||vb(a))return 1;if(bb(a))return 2}function Mc(a,s,r){const l=[];let h=-1;for(;++h<a.length;){const u=a[h].resolveAll;u&&!l.includes(u)&&(s=u(s,r),l.push(u))}return s}const vc={name:"attention",resolveAll:Sb,tokenize:zb};function Sb(a,s){let r=-1,l,h,u,d,g,b,m,v;for(;++r<a.length;)if(a[r][0]==="enter"&&a[r][1].type==="attentionSequence"&&a[r][1]._close){for(l=r;l--;)if(a[l][0]==="exit"&&a[l][1].type==="attentionSequence"&&a[l][1]._open&&s.sliceSerialize(a[l][1]).charCodeAt(0)===s.sliceSerialize(a[r][1]).charCodeAt(0)){if((a[l][1]._close||a[r][1]._open)&&(a[r][1].end.offset-a[r][1].start.offset)%3&&!((a[l][1].end.offset-a[l][1].start.offset+a[r][1].end.offset-a[r][1].start.offset)%3))continue;b=a[l][1].end.offset-a[l][1].start.offset>1&&a[r][1].end.offset-a[r][1].start.offset>1?2:1;const w={...a[l][1].end},A={...a[r][1].start};jf(w,-b),jf(A,b),d={type:b>1?"strongSequence":"emphasisSequence",start:w,end:{...a[l][1].end}},g={type:b>1?"strongSequence":"emphasisSequence",start:{...a[r][1].start},end:A},u={type:b>1?"strongText":"emphasisText",start:{...a[l][1].end},end:{...a[r][1].start}},h={type:b>1?"strong":"emphasis",start:{...d.start},end:{...g.end}},a[l][1].end={...d.start},a[r][1].start={...g.end},m=[],a[l][1].end.offset-a[l][1].start.offset&&(m=Gt(m,[["enter",a[l][1],s],["exit",a[l][1],s]])),m=Gt(m,[["enter",h,s],["enter",d,s],["exit",d,s],["enter",u,s]]),m=Gt(m,Mc(s.parser.constructs.insideSpan.null,a.slice(l+1,r),s)),m=Gt(m,[["exit",u,s],["enter",g,s],["exit",g,s],["exit",h,s]]),a[r][1].end.offset-a[r][1].start.offset?(v=2,m=Gt(m,[["enter",a[r][1],s],["exit",a[r][1],s]])):v=0,on(a,l-1,r-l+3,m),r=l+m.length-v-2;break}}for(r=-1;++r<a.length;)a[r][1].type==="attentionSequence"&&(a[r][1].type="data");return a}function zb(a,s){const r=this.parser.constructs.attentionMarkers.null,l=this.previous,h=Vf(l);let u;return d;function d(b){return u=b,a.enter("attentionSequence"),g(b)}function g(b){if(b===u)return a.consume(b),g;const m=a.exit("attentionSequence"),v=Vf(b),w=!v||v===2&&h||r.includes(b),A=!h||h===2&&v||r.includes(l);return m._open=!!(u===42?w:w&&(h||!A)),m._close=!!(u===42?A:A&&(v||!w)),s(b)}}function jf(a,s){a.column+=s,a.offset+=s,a._bufferIndex+=s}const Eb={name:"autolink",tokenize:Cb};function Cb(a,s,r){let l=0;return h;function h(T){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(T),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),u}function u(T){return an(T)?(a.consume(T),d):T===64?r(T):m(T)}function d(T){return T===43||T===45||T===46||Bt(T)?(l=1,g(T)):m(T)}function g(T){return T===58?(a.consume(T),l=0,b):(T===43||T===45||T===46||Bt(T))&&l++<32?(a.consume(T),g):(l=0,m(T))}function b(T){return T===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(T),a.exit("autolinkMarker"),a.exit("autolink"),s):T===null||T===32||T===60||yc(T)?r(T):(a.consume(T),b)}function m(T){return T===64?(a.consume(T),v):mb(T)?(a.consume(T),m):r(T)}function v(T){return Bt(T)?w(T):r(T)}function w(T){return T===46?(a.consume(T),l=0,v):T===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(T),a.exit("autolinkMarker"),a.exit("autolink"),s):A(T)}function A(T){if((T===45||Bt(T))&&l++<63){const I=T===45?A:w;return a.consume(T),I}return r(T)}}const Rs={partial:!0,tokenize:Db};function Db(a,s,r){return l;function l(u){return Be(u)?Ie(a,h,"linePrefix")(u):h(u)}function h(u){return u===null||he(u)?s(u):r(u)}}const Cp={continuation:{tokenize:Mb},exit:Nb,name:"blockQuote",tokenize:Bb};function Bb(a,s,r){const l=this;return h;function h(d){if(d===62){const g=l.containerState;return g.open||(a.enter("blockQuote",{_container:!0}),g.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),u}return r(d)}function u(d){return Be(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),s):(a.exit("blockQuotePrefix"),s(d))}}function Mb(a,s,r){const l=this;return h;function h(d){return Be(d)?Ie(a,u,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):u(d)}function u(d){return a.attempt(Cp,s,r)(d)}}function Nb(a){a.exit("blockQuote")}const Dp={name:"characterEscape",tokenize:Lb};function Lb(a,s,r){return l;function l(u){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(u),a.exit("escapeMarker"),h}function h(u){return yb(u)?(a.enter("characterEscapeValue"),a.consume(u),a.exit("characterEscapeValue"),a.exit("characterEscape"),s):r(u)}}const Bp={name:"characterReference",tokenize:Hb};function Hb(a,s,r){const l=this;let h=0,u,d;return g;function g(w){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),b}function b(w){return w===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(w),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),u=31,d=Bt,v(w))}function m(w){return w===88||w===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(w),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),u=6,d=gb,v):(a.enter("characterReferenceValue"),u=7,d=bc,v(w))}function v(w){if(w===59&&h){const A=a.exit("characterReferenceValue");return d===Bt&&!Bc(l.sliceSerialize(A))?r(w):(a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),a.exit("characterReference"),s)}return d(w)&&h++<u?(a.consume(w),v):r(w)}}const Uf={partial:!0,tokenize:Ob},Gf={concrete:!0,name:"codeFenced",tokenize:qb};function qb(a,s,r){const l=this,h={partial:!0,tokenize:oe};let u=0,d=0,g;return b;function b(L){return m(L)}function m(L){const de=l.events[l.events.length-1];return u=de&&de[1].type==="linePrefix"?de[2].sliceSerialize(de[1],!0).length:0,g=L,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),v(L)}function v(L){return L===g?(d++,a.consume(L),v):d<3?r(L):(a.exit("codeFencedFenceSequence"),Be(L)?Ie(a,w,"whitespace")(L):w(L))}function w(L){return L===null||he(L)?(a.exit("codeFencedFence"),l.interrupt?s(L):a.check(Uf,P,xe)(L)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),A(L))}function A(L){return L===null||he(L)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),w(L)):Be(L)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ie(a,T,"whitespace")(L)):L===96&&L===g?r(L):(a.consume(L),A)}function T(L){return L===null||he(L)?w(L):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),I(L))}function I(L){return L===null||he(L)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),w(L)):L===96&&L===g?r(L):(a.consume(L),I)}function P(L){return a.attempt(h,xe,J)(L)}function J(L){return a.enter("lineEnding"),a.consume(L),a.exit("lineEnding"),R}function R(L){return u>0&&Be(L)?Ie(a,F,"linePrefix",u+1)(L):F(L)}function F(L){return L===null||he(L)?a.check(Uf,P,xe)(L):(a.enter("codeFlowValue"),Y(L))}function Y(L){return L===null||he(L)?(a.exit("codeFlowValue"),F(L)):(a.consume(L),Y)}function xe(L){return a.exit("codeFenced"),s(L)}function oe(L,de,ze){let U=0;return $;function $(ee){return L.enter("lineEnding"),L.consume(ee),L.exit("lineEnding"),K}function K(ee){return L.enter("codeFencedFence"),Be(ee)?Ie(L,W,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ee):W(ee)}function W(ee){return ee===g?(L.enter("codeFencedFenceSequence"),Z(ee)):ze(ee)}function Z(ee){return ee===g?(U++,L.consume(ee),Z):U>=d?(L.exit("codeFencedFenceSequence"),Be(ee)?Ie(L,X,"whitespace")(ee):X(ee)):ze(ee)}function X(ee){return ee===null||he(ee)?(L.exit("codeFencedFence"),de(ee)):ze(ee)}}}function Ob(a,s,r){const l=this;return h;function h(d){return d===null?r(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),u)}function u(d){return l.parser.lazy[l.now().line]?r(d):s(d)}}const ac={name:"codeIndented",tokenize:Pb},Rb={partial:!0,tokenize:Ib};function Pb(a,s,r){const l=this;return h;function h(m){return a.enter("codeIndented"),Ie(a,u,"linePrefix",5)(m)}function u(m){const v=l.events[l.events.length-1];return v&&v[1].type==="linePrefix"&&v[2].sliceSerialize(v[1],!0).length>=4?d(m):r(m)}function d(m){return m===null?b(m):he(m)?a.attempt(Rb,d,b)(m):(a.enter("codeFlowValue"),g(m))}function g(m){return m===null||he(m)?(a.exit("codeFlowValue"),d(m)):(a.consume(m),g)}function b(m){return a.exit("codeIndented"),s(m)}}function Ib(a,s,r){const l=this;return h;function h(d){return l.parser.lazy[l.now().line]?r(d):he(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),h):Ie(a,u,"linePrefix",5)(d)}function u(d){const g=l.events[l.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?s(d):he(d)?h(d):r(d)}}const _b={name:"codeText",previous:jb,resolve:Vb,tokenize:Ub};function Vb(a){let s=a.length-4,r=3,l,h;if((a[r][1].type==="lineEnding"||a[r][1].type==="space")&&(a[s][1].type==="lineEnding"||a[s][1].type==="space")){for(l=r;++l<s;)if(a[l][1].type==="codeTextData"){a[r][1].type="codeTextPadding",a[s][1].type="codeTextPadding",r+=2,s-=2;break}}for(l=r-1,s++;++l<=s;)h===void 0?l!==s&&a[l][1].type!=="lineEnding"&&(h=l):(l===s||a[l][1].type==="lineEnding")&&(a[h][1].type="codeTextData",l!==h+2&&(a[h][1].end=a[l-1][1].end,a.splice(h+2,l-h-2),s-=l-h-2,l=h+2),h=void 0);return a}function jb(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ub(a,s,r){let l=0,h,u;return d;function d(w){return a.enter("codeText"),a.enter("codeTextSequence"),g(w)}function g(w){return w===96?(a.consume(w),l++,g):(a.exit("codeTextSequence"),b(w))}function b(w){return w===null?r(w):w===32?(a.enter("space"),a.consume(w),a.exit("space"),b):w===96?(u=a.enter("codeTextSequence"),h=0,v(w)):he(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),b):(a.enter("codeTextData"),m(w))}function m(w){return w===null||w===32||w===96||he(w)?(a.exit("codeTextData"),b(w)):(a.consume(w),m)}function v(w){return w===96?(a.consume(w),h++,v):h===l?(a.exit("codeTextSequence"),a.exit("codeText"),s(w)):(u.type="codeTextData",m(w))}}class Gb{constructor(s){this.left=s?[...s]:[],this.right=[]}get(s){if(s<0||s>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+s+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return s<this.left.length?this.left[s]:this.right[this.right.length-s+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(s,r){const l=r??Number.POSITIVE_INFINITY;return l<this.left.length?this.left.slice(s,l):s>this.left.length?this.right.slice(this.right.length-l+this.left.length,this.right.length-s+this.left.length).reverse():this.left.slice(s).concat(this.right.slice(this.right.length-l+this.left.length).reverse())}splice(s,r,l){const h=r||0;this.setCursor(Math.trunc(s));const u=this.right.splice(this.right.length-h,Number.POSITIVE_INFINITY);return l&&uo(this.left,l),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(s){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(s)}pushMany(s){this.setCursor(Number.POSITIVE_INFINITY),uo(this.left,s)}unshift(s){this.setCursor(0),this.right.push(s)}unshiftMany(s){this.setCursor(0),uo(this.right,s.reverse())}setCursor(s){if(!(s===this.left.length||s>this.left.length&&this.right.length===0||s<0&&this.left.length===0))if(s<this.left.length){const r=this.left.splice(s,Number.POSITIVE_INFINITY);uo(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-s,Number.POSITIVE_INFINITY);uo(this.left,r.reverse())}}}function uo(a,s){let r=0;if(s.length<1e4)a.push(...s);else for(;r<s.length;)a.push(...s.slice(r,r+1e4)),r+=1e4}function Mp(a){const s={};let r=-1,l,h,u,d,g,b,m;const v=new Gb(a);for(;++r<v.length;){for(;r in s;)r=s[r];if(l=v.get(r),r&&l[1].type==="chunkFlow"&&v.get(r-1)[1].type==="listItemPrefix"&&(b=l[1]._tokenizer.events,u=0,u<b.length&&b[u][1].type==="lineEndingBlank"&&(u+=2),u<b.length&&b[u][1].type==="content"))for(;++u<b.length&&b[u][1].type!=="content";)b[u][1].type==="chunkText"&&(b[u][1]._isInFirstContentOfListItem=!0,u++);if(l[0]==="enter")l[1].contentType&&(Object.assign(s,Yb(v,r)),r=s[r],m=!0);else if(l[1]._container){for(u=r,h=void 0;u--;)if(d=v.get(u),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(h&&(v.get(h)[1].type="lineEndingBlank"),d[1].type="lineEnding",h=u);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;h&&(l[1].end={...v.get(h)[1].start},g=v.slice(h,r),g.unshift(l),v.splice(h,r-h+1,g))}}return on(a,0,Number.POSITIVE_INFINITY,v.slice(0)),!m}function Yb(a,s){const r=a.get(s)[1],l=a.get(s)[2];let h=s-1;const u=[];let d=r._tokenizer;d||(d=l.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const g=d.events,b=[],m={};let v,w,A=-1,T=r,I=0,P=0;const J=[P];for(;T;){for(;a.get(++h)[1]!==T;);u.push(h),T._tokenizer||(v=l.sliceStream(T),T.next||v.push(null),w&&d.defineSkip(T.start),T._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(v),T._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),w=T,T=T.next}for(T=r;++A<g.length;)g[A][0]==="exit"&&g[A-1][0]==="enter"&&g[A][1].type===g[A-1][1].type&&g[A][1].start.line!==g[A][1].end.line&&(P=A+1,J.push(P),T._tokenizer=void 0,T.previous=void 0,T=T.next);for(d.events=[],T?(T._tokenizer=void 0,T.previous=void 0):J.pop(),A=J.length;A--;){const R=g.slice(J[A],J[A+1]),F=u.pop();b.push([F,F+R.length-1]),a.splice(F,2,R)}for(b.reverse(),A=-1;++A<b.length;)m[I+b[A][0]]=I+b[A][1],I+=b[A][1]-b[A][0]-1;return m}const Xb={resolve:Kb,tokenize:Qb},Fb={partial:!0,tokenize:Wb};function Kb(a){return Mp(a),a}function Qb(a,s){let r;return l;function l(g){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),h(g)}function h(g){return g===null?u(g):he(g)?a.check(Fb,d,u)(g):(a.consume(g),h)}function u(g){return a.exit("chunkContent"),a.exit("content"),s(g)}function d(g){return a.consume(g),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,h}}function Wb(a,s,r){const l=this;return h;function h(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),Ie(a,u,"linePrefix")}function u(d){if(d===null||he(d))return r(d);const g=l.events[l.events.length-1];return!l.parser.constructs.disable.null.includes("codeIndented")&&g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?s(d):a.interrupt(l.parser.constructs.flow,r,s)(d)}}function Np(a,s,r,l,h,u,d,g,b){const m=b||Number.POSITIVE_INFINITY;let v=0;return w;function w(R){return R===60?(a.enter(l),a.enter(h),a.enter(u),a.consume(R),a.exit(u),A):R===null||R===32||R===41||yc(R)?r(R):(a.enter(l),a.enter(d),a.enter(g),a.enter("chunkString",{contentType:"string"}),P(R))}function A(R){return R===62?(a.enter(u),a.consume(R),a.exit(u),a.exit(h),a.exit(l),s):(a.enter(g),a.enter("chunkString",{contentType:"string"}),T(R))}function T(R){return R===62?(a.exit("chunkString"),a.exit(g),A(R)):R===null||R===60||he(R)?r(R):(a.consume(R),R===92?I:T)}function I(R){return R===60||R===62||R===92?(a.consume(R),T):T(R)}function P(R){return!v&&(R===null||R===41||Tt(R))?(a.exit("chunkString"),a.exit(g),a.exit(d),a.exit(l),s(R)):v<m&&R===40?(a.consume(R),v++,P):R===41?(a.consume(R),v--,P):R===null||R===32||R===40||yc(R)?r(R):(a.consume(R),R===92?J:P)}function J(R){return R===40||R===41||R===92?(a.consume(R),P):P(R)}}function Lp(a,s,r,l,h,u){const d=this;let g=0,b;return m;function m(T){return a.enter(l),a.enter(h),a.consume(T),a.exit(h),a.enter(u),v}function v(T){return g>999||T===null||T===91||T===93&&!b||T===94&&!g&&"_hiddenFootnoteSupport"in d.parser.constructs?r(T):T===93?(a.exit(u),a.enter(h),a.consume(T),a.exit(h),a.exit(l),s):he(T)?(a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),v):(a.enter("chunkString",{contentType:"string"}),w(T))}function w(T){return T===null||T===91||T===93||he(T)||g++>999?(a.exit("chunkString"),v(T)):(a.consume(T),b||(b=!Be(T)),T===92?A:w)}function A(T){return T===91||T===92||T===93?(a.consume(T),g++,w):w(T)}}function Hp(a,s,r,l,h,u){let d;return g;function g(A){return A===34||A===39||A===40?(a.enter(l),a.enter(h),a.consume(A),a.exit(h),d=A===40?41:A,b):r(A)}function b(A){return A===d?(a.enter(h),a.consume(A),a.exit(h),a.exit(l),s):(a.enter(u),m(A))}function m(A){return A===d?(a.exit(u),b(d)):A===null?r(A):he(A)?(a.enter("lineEnding"),a.consume(A),a.exit("lineEnding"),Ie(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),v(A))}function v(A){return A===d||A===null||he(A)?(a.exit("chunkString"),m(A)):(a.consume(A),A===92?w:v)}function w(A){return A===d||A===92?(a.consume(A),v):v(A)}}function mo(a,s){let r;return l;function l(h){return he(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),r=!0,l):Be(h)?Ie(a,l,r?"linePrefix":"lineSuffix")(h):s(h)}}const Zb={name:"definition",tokenize:$b},Jb={partial:!0,tokenize:ev};function $b(a,s,r){const l=this;let h;return u;function u(T){return a.enter("definition"),d(T)}function d(T){return Lp.call(l,a,g,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(T)}function g(T){return h=ha(l.sliceSerialize(l.events[l.events.length-1][1]).slice(1,-1)),T===58?(a.enter("definitionMarker"),a.consume(T),a.exit("definitionMarker"),b):r(T)}function b(T){return Tt(T)?mo(a,m)(T):m(T)}function m(T){return Np(a,v,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(T)}function v(T){return a.attempt(Jb,w,w)(T)}function w(T){return Be(T)?Ie(a,A,"whitespace")(T):A(T)}function A(T){return T===null||he(T)?(a.exit("definition"),l.parser.defined.push(h),s(T)):r(T)}}function ev(a,s,r){return l;function l(g){return Tt(g)?mo(a,h)(g):r(g)}function h(g){return Hp(a,u,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(g)}function u(g){return Be(g)?Ie(a,d,"whitespace")(g):d(g)}function d(g){return g===null||he(g)?s(g):r(g)}}const tv={name:"hardBreakEscape",tokenize:nv};function nv(a,s,r){return l;function l(u){return a.enter("hardBreakEscape"),a.consume(u),h}function h(u){return he(u)?(a.exit("hardBreakEscape"),s(u)):r(u)}}const iv={name:"headingAtx",resolve:av,tokenize:ov};function av(a,s){let r=a.length-2,l=3,h,u;return a[l][1].type==="whitespace"&&(l+=2),r-2>l&&a[r][1].type==="whitespace"&&(r-=2),a[r][1].type==="atxHeadingSequence"&&(l===r-1||r-4>l&&a[r-2][1].type==="whitespace")&&(r-=l+1===r?2:4),r>l&&(h={type:"atxHeadingText",start:a[l][1].start,end:a[r][1].end},u={type:"chunkText",start:a[l][1].start,end:a[r][1].end,contentType:"text"},on(a,l,r-l+1,[["enter",h,s],["enter",u,s],["exit",u,s],["exit",h,s]])),a}function ov(a,s,r){let l=0;return h;function h(v){return a.enter("atxHeading"),u(v)}function u(v){return a.enter("atxHeadingSequence"),d(v)}function d(v){return v===35&&l++<6?(a.consume(v),d):v===null||Tt(v)?(a.exit("atxHeadingSequence"),g(v)):r(v)}function g(v){return v===35?(a.enter("atxHeadingSequence"),b(v)):v===null||he(v)?(a.exit("atxHeading"),s(v)):Be(v)?Ie(a,g,"whitespace")(v):(a.enter("atxHeadingText"),m(v))}function b(v){return v===35?(a.consume(v),b):(a.exit("atxHeadingSequence"),g(v))}function m(v){return v===null||v===35||Tt(v)?(a.exit("atxHeadingText"),g(v)):(a.consume(v),m)}}const sv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Yf=["pre","script","style","textarea"],rv={concrete:!0,name:"htmlFlow",resolveTo:hv,tokenize:uv},lv={partial:!0,tokenize:fv},cv={partial:!0,tokenize:dv};function hv(a){let s=a.length;for(;s--&&!(a[s][0]==="enter"&&a[s][1].type==="htmlFlow"););return s>1&&a[s-2][1].type==="linePrefix"&&(a[s][1].start=a[s-2][1].start,a[s+1][1].start=a[s-2][1].start,a.splice(s-2,2)),a}function uv(a,s,r){const l=this;let h,u,d,g,b;return m;function m(x){return v(x)}function v(x){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(x),w}function w(x){return x===33?(a.consume(x),A):x===47?(a.consume(x),u=!0,P):x===63?(a.consume(x),h=3,l.interrupt?s:p):an(x)?(a.consume(x),d=String.fromCharCode(x),J):r(x)}function A(x){return x===45?(a.consume(x),h=2,T):x===91?(a.consume(x),h=5,g=0,I):an(x)?(a.consume(x),h=4,l.interrupt?s:p):r(x)}function T(x){return x===45?(a.consume(x),l.interrupt?s:p):r(x)}function I(x){const G="CDATA[";return x===G.charCodeAt(g++)?(a.consume(x),g===G.length?l.interrupt?s:W:I):r(x)}function P(x){return an(x)?(a.consume(x),d=String.fromCharCode(x),J):r(x)}function J(x){if(x===null||x===47||x===62||Tt(x)){const G=x===47,fe=d.toLowerCase();return!G&&!u&&Yf.includes(fe)?(h=1,l.interrupt?s(x):W(x)):sv.includes(d.toLowerCase())?(h=6,G?(a.consume(x),R):l.interrupt?s(x):W(x)):(h=7,l.interrupt&&!l.parser.lazy[l.now().line]?r(x):u?F(x):Y(x))}return x===45||Bt(x)?(a.consume(x),d+=String.fromCharCode(x),J):r(x)}function R(x){return x===62?(a.consume(x),l.interrupt?s:W):r(x)}function F(x){return Be(x)?(a.consume(x),F):$(x)}function Y(x){return x===47?(a.consume(x),$):x===58||x===95||an(x)?(a.consume(x),xe):Be(x)?(a.consume(x),Y):$(x)}function xe(x){return x===45||x===46||x===58||x===95||Bt(x)?(a.consume(x),xe):oe(x)}function oe(x){return x===61?(a.consume(x),L):Be(x)?(a.consume(x),oe):Y(x)}function L(x){return x===null||x===60||x===61||x===62||x===96?r(x):x===34||x===39?(a.consume(x),b=x,de):Be(x)?(a.consume(x),L):ze(x)}function de(x){return x===b?(a.consume(x),b=null,U):x===null||he(x)?r(x):(a.consume(x),de)}function ze(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||Tt(x)?oe(x):(a.consume(x),ze)}function U(x){return x===47||x===62||Be(x)?Y(x):r(x)}function $(x){return x===62?(a.consume(x),K):r(x)}function K(x){return x===null||he(x)?W(x):Be(x)?(a.consume(x),K):r(x)}function W(x){return x===45&&h===2?(a.consume(x),_):x===60&&h===1?(a.consume(x),te):x===62&&h===4?(a.consume(x),q):x===63&&h===3?(a.consume(x),p):x===93&&h===5?(a.consume(x),ke):he(x)&&(h===6||h===7)?(a.exit("htmlFlowData"),a.check(lv,ie,Z)(x)):x===null||he(x)?(a.exit("htmlFlowData"),Z(x)):(a.consume(x),W)}function Z(x){return a.check(cv,X,ie)(x)}function X(x){return a.enter("lineEnding"),a.consume(x),a.exit("lineEnding"),ee}function ee(x){return x===null||he(x)?Z(x):(a.enter("htmlFlowData"),W(x))}function _(x){return x===45?(a.consume(x),p):W(x)}function te(x){return x===47?(a.consume(x),d="",ne):W(x)}function ne(x){if(x===62){const G=d.toLowerCase();return Yf.includes(G)?(a.consume(x),q):W(x)}return an(x)&&d.length<8?(a.consume(x),d+=String.fromCharCode(x),ne):W(x)}function ke(x){return x===93?(a.consume(x),p):W(x)}function p(x){return x===62?(a.consume(x),q):x===45&&h===2?(a.consume(x),p):W(x)}function q(x){return x===null||he(x)?(a.exit("htmlFlowData"),ie(x)):(a.consume(x),q)}function ie(x){return a.exit("htmlFlow"),s(x)}}function dv(a,s,r){const l=this;return h;function h(d){return he(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),u):r(d)}function u(d){return l.parser.lazy[l.now().line]?r(d):s(d)}}function fv(a,s,r){return l;function l(h){return a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),a.attempt(Rs,s,r)}}const pv={name:"htmlText",tokenize:mv};function mv(a,s,r){const l=this;let h,u,d;return g;function g(p){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(p),b}function b(p){return p===33?(a.consume(p),m):p===47?(a.consume(p),oe):p===63?(a.consume(p),Y):an(p)?(a.consume(p),ze):r(p)}function m(p){return p===45?(a.consume(p),v):p===91?(a.consume(p),u=0,I):an(p)?(a.consume(p),F):r(p)}function v(p){return p===45?(a.consume(p),T):r(p)}function w(p){return p===null?r(p):p===45?(a.consume(p),A):he(p)?(d=w,te(p)):(a.consume(p),w)}function A(p){return p===45?(a.consume(p),T):w(p)}function T(p){return p===62?_(p):p===45?A(p):w(p)}function I(p){const q="CDATA[";return p===q.charCodeAt(u++)?(a.consume(p),u===q.length?P:I):r(p)}function P(p){return p===null?r(p):p===93?(a.consume(p),J):he(p)?(d=P,te(p)):(a.consume(p),P)}function J(p){return p===93?(a.consume(p),R):P(p)}function R(p){return p===62?_(p):p===93?(a.consume(p),R):P(p)}function F(p){return p===null||p===62?_(p):he(p)?(d=F,te(p)):(a.consume(p),F)}function Y(p){return p===null?r(p):p===63?(a.consume(p),xe):he(p)?(d=Y,te(p)):(a.consume(p),Y)}function xe(p){return p===62?_(p):Y(p)}function oe(p){return an(p)?(a.consume(p),L):r(p)}function L(p){return p===45||Bt(p)?(a.consume(p),L):de(p)}function de(p){return he(p)?(d=de,te(p)):Be(p)?(a.consume(p),de):_(p)}function ze(p){return p===45||Bt(p)?(a.consume(p),ze):p===47||p===62||Tt(p)?U(p):r(p)}function U(p){return p===47?(a.consume(p),_):p===58||p===95||an(p)?(a.consume(p),$):he(p)?(d=U,te(p)):Be(p)?(a.consume(p),U):_(p)}function $(p){return p===45||p===46||p===58||p===95||Bt(p)?(a.consume(p),$):K(p)}function K(p){return p===61?(a.consume(p),W):he(p)?(d=K,te(p)):Be(p)?(a.consume(p),K):U(p)}function W(p){return p===null||p===60||p===61||p===62||p===96?r(p):p===34||p===39?(a.consume(p),h=p,Z):he(p)?(d=W,te(p)):Be(p)?(a.consume(p),W):(a.consume(p),X)}function Z(p){return p===h?(a.consume(p),h=void 0,ee):p===null?r(p):he(p)?(d=Z,te(p)):(a.consume(p),Z)}function X(p){return p===null||p===34||p===39||p===60||p===61||p===96?r(p):p===47||p===62||Tt(p)?U(p):(a.consume(p),X)}function ee(p){return p===47||p===62||Tt(p)?U(p):r(p)}function _(p){return p===62?(a.consume(p),a.exit("htmlTextData"),a.exit("htmlText"),s):r(p)}function te(p){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(p),a.exit("lineEnding"),ne}function ne(p){return Be(p)?Ie(a,ke,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):ke(p)}function ke(p){return a.enter("htmlTextData"),d(p)}}const Nc={name:"labelEnd",resolveAll:vv,resolveTo:wv,tokenize:Tv},gv={tokenize:xv},yv={tokenize:kv},bv={tokenize:Av};function vv(a){let s=-1;const r=[];for(;++s<a.length;){const l=a[s][1];if(r.push(a[s]),l.type==="labelImage"||l.type==="labelLink"||l.type==="labelEnd"){const h=l.type==="labelImage"?4:2;l.type="data",s+=h}}return a.length!==r.length&&on(a,0,a.length,r),a}function wv(a,s){let r=a.length,l=0,h,u,d,g;for(;r--;)if(h=a[r][1],u){if(h.type==="link"||h.type==="labelLink"&&h._inactive)break;a[r][0]==="enter"&&h.type==="labelLink"&&(h._inactive=!0)}else if(d){if(a[r][0]==="enter"&&(h.type==="labelImage"||h.type==="labelLink")&&!h._balanced&&(u=r,h.type!=="labelLink")){l=2;break}}else h.type==="labelEnd"&&(d=r);const b={type:a[u][1].type==="labelLink"?"link":"image",start:{...a[u][1].start},end:{...a[a.length-1][1].end}},m={type:"label",start:{...a[u][1].start},end:{...a[d][1].end}},v={type:"labelText",start:{...a[u+l+2][1].end},end:{...a[d-2][1].start}};return g=[["enter",b,s],["enter",m,s]],g=Gt(g,a.slice(u+1,u+l+3)),g=Gt(g,[["enter",v,s]]),g=Gt(g,Mc(s.parser.constructs.insideSpan.null,a.slice(u+l+4,d-3),s)),g=Gt(g,[["exit",v,s],a[d-2],a[d-1],["exit",m,s]]),g=Gt(g,a.slice(d+1)),g=Gt(g,[["exit",b,s]]),on(a,u,a.length,g),a}function Tv(a,s,r){const l=this;let h=l.events.length,u,d;for(;h--;)if((l.events[h][1].type==="labelImage"||l.events[h][1].type==="labelLink")&&!l.events[h][1]._balanced){u=l.events[h][1];break}return g;function g(A){return u?u._inactive?w(A):(d=l.parser.defined.includes(ha(l.sliceSerialize({start:u.end,end:l.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(A),a.exit("labelMarker"),a.exit("labelEnd"),b):r(A)}function b(A){return A===40?a.attempt(gv,v,d?v:w)(A):A===91?a.attempt(yv,v,d?m:w)(A):d?v(A):w(A)}function m(A){return a.attempt(bv,v,w)(A)}function v(A){return s(A)}function w(A){return u._balanced=!0,r(A)}}function xv(a,s,r){return l;function l(w){return a.enter("resource"),a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),h}function h(w){return Tt(w)?mo(a,u)(w):u(w)}function u(w){return w===41?v(w):Np(a,d,g,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(w)}function d(w){return Tt(w)?mo(a,b)(w):v(w)}function g(w){return r(w)}function b(w){return w===34||w===39||w===40?Hp(a,m,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(w):v(w)}function m(w){return Tt(w)?mo(a,v)(w):v(w)}function v(w){return w===41?(a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),a.exit("resource"),s):r(w)}}function kv(a,s,r){const l=this;return h;function h(g){return Lp.call(l,a,u,d,"reference","referenceMarker","referenceString")(g)}function u(g){return l.parser.defined.includes(ha(l.sliceSerialize(l.events[l.events.length-1][1]).slice(1,-1)))?s(g):r(g)}function d(g){return r(g)}}function Av(a,s,r){return l;function l(u){return a.enter("reference"),a.enter("referenceMarker"),a.consume(u),a.exit("referenceMarker"),h}function h(u){return u===93?(a.enter("referenceMarker"),a.consume(u),a.exit("referenceMarker"),a.exit("reference"),s):r(u)}}const Sv={name:"labelStartImage",resolveAll:Nc.resolveAll,tokenize:zv};function zv(a,s,r){const l=this;return h;function h(g){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(g),a.exit("labelImageMarker"),u}function u(g){return g===91?(a.enter("labelMarker"),a.consume(g),a.exit("labelMarker"),a.exit("labelImage"),d):r(g)}function d(g){return g===94&&"_hiddenFootnoteSupport"in l.parser.constructs?r(g):s(g)}}const Ev={name:"labelStartLink",resolveAll:Nc.resolveAll,tokenize:Cv};function Cv(a,s,r){const l=this;return h;function h(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),u}function u(d){return d===94&&"_hiddenFootnoteSupport"in l.parser.constructs?r(d):s(d)}}const oc={name:"lineEnding",tokenize:Dv};function Dv(a,s){return r;function r(l){return a.enter("lineEnding"),a.consume(l),a.exit("lineEnding"),Ie(a,s,"linePrefix")}}const Hs={name:"thematicBreak",tokenize:Bv};function Bv(a,s,r){let l=0,h;return u;function u(m){return a.enter("thematicBreak"),d(m)}function d(m){return h=m,g(m)}function g(m){return m===h?(a.enter("thematicBreakSequence"),b(m)):l>=3&&(m===null||he(m))?(a.exit("thematicBreak"),s(m)):r(m)}function b(m){return m===h?(a.consume(m),l++,b):(a.exit("thematicBreakSequence"),Be(m)?Ie(a,g,"whitespace")(m):g(m))}}const wt={continuation:{tokenize:Hv},exit:Ov,name:"list",tokenize:Lv},Mv={partial:!0,tokenize:Rv},Nv={partial:!0,tokenize:qv};function Lv(a,s,r){const l=this,h=l.events[l.events.length-1];let u=h&&h[1].type==="linePrefix"?h[2].sliceSerialize(h[1],!0).length:0,d=0;return g;function g(T){const I=l.containerState.type||(T===42||T===43||T===45?"listUnordered":"listOrdered");if(I==="listUnordered"?!l.containerState.marker||T===l.containerState.marker:bc(T)){if(l.containerState.type||(l.containerState.type=I,a.enter(I,{_container:!0})),I==="listUnordered")return a.enter("listItemPrefix"),T===42||T===45?a.check(Hs,r,m)(T):m(T);if(!l.interrupt||T===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),b(T)}return r(T)}function b(T){return bc(T)&&++d<10?(a.consume(T),b):(!l.interrupt||d<2)&&(l.containerState.marker?T===l.containerState.marker:T===41||T===46)?(a.exit("listItemValue"),m(T)):r(T)}function m(T){return a.enter("listItemMarker"),a.consume(T),a.exit("listItemMarker"),l.containerState.marker=l.containerState.marker||T,a.check(Rs,l.interrupt?r:v,a.attempt(Mv,A,w))}function v(T){return l.containerState.initialBlankLine=!0,u++,A(T)}function w(T){return Be(T)?(a.enter("listItemPrefixWhitespace"),a.consume(T),a.exit("listItemPrefixWhitespace"),A):r(T)}function A(T){return l.containerState.size=u+l.sliceSerialize(a.exit("listItemPrefix"),!0).length,s(T)}}function Hv(a,s,r){const l=this;return l.containerState._closeFlow=void 0,a.check(Rs,h,u);function h(g){return l.containerState.furtherBlankLines=l.containerState.furtherBlankLines||l.containerState.initialBlankLine,Ie(a,s,"listItemIndent",l.containerState.size+1)(g)}function u(g){return l.containerState.furtherBlankLines||!Be(g)?(l.containerState.furtherBlankLines=void 0,l.containerState.initialBlankLine=void 0,d(g)):(l.containerState.furtherBlankLines=void 0,l.containerState.initialBlankLine=void 0,a.attempt(Nv,s,d)(g))}function d(g){return l.containerState._closeFlow=!0,l.interrupt=void 0,Ie(a,a.attempt(wt,s,r),"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g)}}function qv(a,s,r){const l=this;return Ie(a,h,"listItemIndent",l.containerState.size+1);function h(u){const d=l.events[l.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===l.containerState.size?s(u):r(u)}}function Ov(a){a.exit(this.containerState.type)}function Rv(a,s,r){const l=this;return Ie(a,h,"listItemPrefixWhitespace",l.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function h(u){const d=l.events[l.events.length-1];return!Be(u)&&d&&d[1].type==="listItemPrefixWhitespace"?s(u):r(u)}}const Xf={name:"setextUnderline",resolveTo:Pv,tokenize:Iv};function Pv(a,s){let r=a.length,l,h,u;for(;r--;)if(a[r][0]==="enter"){if(a[r][1].type==="content"){l=r;break}a[r][1].type==="paragraph"&&(h=r)}else a[r][1].type==="content"&&a.splice(r,1),!u&&a[r][1].type==="definition"&&(u=r);const d={type:"setextHeading",start:{...a[l][1].start},end:{...a[a.length-1][1].end}};return a[h][1].type="setextHeadingText",u?(a.splice(h,0,["enter",d,s]),a.splice(u+1,0,["exit",a[l][1],s]),a[l][1].end={...a[u][1].end}):a[l][1]=d,a.push(["exit",d,s]),a}function Iv(a,s,r){const l=this;let h;return u;function u(m){let v=l.events.length,w;for(;v--;)if(l.events[v][1].type!=="lineEnding"&&l.events[v][1].type!=="linePrefix"&&l.events[v][1].type!=="content"){w=l.events[v][1].type==="paragraph";break}return!l.parser.lazy[l.now().line]&&(l.interrupt||w)?(a.enter("setextHeadingLine"),h=m,d(m)):r(m)}function d(m){return a.enter("setextHeadingLineSequence"),g(m)}function g(m){return m===h?(a.consume(m),g):(a.exit("setextHeadingLineSequence"),Be(m)?Ie(a,b,"lineSuffix")(m):b(m))}function b(m){return m===null||he(m)?(a.exit("setextHeadingLine"),s(m)):r(m)}}const _v={tokenize:Vv};function Vv(a){const s=this,r=a.attempt(Rs,l,a.attempt(this.parser.constructs.flowInitial,h,Ie(a,a.attempt(this.parser.constructs.flow,h,a.attempt(Xb,h)),"linePrefix")));return r;function l(u){if(u===null){a.consume(u);return}return a.enter("lineEndingBlank"),a.consume(u),a.exit("lineEndingBlank"),s.currentConstruct=void 0,r}function h(u){if(u===null){a.consume(u);return}return a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),s.currentConstruct=void 0,r}}const jv={resolveAll:Op()},Uv=qp("string"),Gv=qp("text");function qp(a){return{resolveAll:Op(a==="text"?Yv:void 0),tokenize:s};function s(r){const l=this,h=this.parser.constructs[a],u=r.attempt(h,d,g);return d;function d(v){return m(v)?u(v):g(v)}function g(v){if(v===null){r.consume(v);return}return r.enter("data"),r.consume(v),b}function b(v){return m(v)?(r.exit("data"),u(v)):(r.consume(v),b)}function m(v){if(v===null)return!0;const w=h[v];let A=-1;if(w)for(;++A<w.length;){const T=w[A];if(!T.previous||T.previous.call(l,l.previous))return!0}return!1}}}function Op(a){return s;function s(r,l){let h=-1,u;for(;++h<=r.length;)u===void 0?r[h]&&r[h][1].type==="data"&&(u=h,h++):(!r[h]||r[h][1].type!=="data")&&(h!==u+2&&(r[u][1].end=r[h-1][1].end,r.splice(u+2,h-u-2),h=u+2),u=void 0);return a?a(r,l):r}}function Yv(a,s){let r=0;for(;++r<=a.length;)if((r===a.length||a[r][1].type==="lineEnding")&&a[r-1][1].type==="data"){const l=a[r-1][1],h=s.sliceStream(l);let u=h.length,d=-1,g=0,b;for(;u--;){const m=h[u];if(typeof m=="string"){for(d=m.length;m.charCodeAt(d-1)===32;)g++,d--;if(d)break;d=-1}else if(m===-2)b=!0,g++;else if(m!==-1){u++;break}}if(s._contentTypeTextTrailing&&r===a.length&&(g=0),g){const m={type:r===a.length||b||g<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?d:l.start._bufferIndex+d,_index:l.start._index+u,line:l.end.line,column:l.end.column-g,offset:l.end.offset-g},end:{...l.end}};l.end={...m.start},l.start.offset===l.end.offset?Object.assign(l,m):(a.splice(r,0,["enter",m,s],["exit",m,s]),r+=2)}r++}return a}const Xv={42:wt,43:wt,45:wt,48:wt,49:wt,50:wt,51:wt,52:wt,53:wt,54:wt,55:wt,56:wt,57:wt,62:Cp},Fv={91:Zb},Kv={[-2]:ac,[-1]:ac,32:ac},Qv={35:iv,42:Hs,45:[Xf,Hs],60:rv,61:Xf,95:Hs,96:Gf,126:Gf},Wv={38:Bp,92:Dp},Zv={[-5]:oc,[-4]:oc,[-3]:oc,33:Sv,38:Bp,42:vc,60:[Eb,pv],91:Ev,92:[tv,Dp],93:Nc,95:vc,96:_b},Jv={null:[vc,jv]},$v={null:[42,95]},ew={null:[]},tw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$v,contentInitial:Fv,disable:ew,document:Xv,flow:Qv,flowInitial:Kv,insideSpan:Jv,string:Wv,text:Zv},Symbol.toStringTag,{value:"Module"}));function nw(a,s,r){let l={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const h={},u=[];let d=[],g=[];const b={attempt:de(oe),check:de(L),consume:F,enter:Y,exit:xe,interrupt:de(L,{interrupt:!0})},m={code:null,containerState:{},defineSkip:P,events:[],now:I,parser:a,previous:null,sliceSerialize:A,sliceStream:T,write:w};let v=s.tokenize.call(m,b);return s.resolveAll&&u.push(s),m;function w(K){return d=Gt(d,K),J(),d[d.length-1]!==null?[]:(ze(s,0),m.events=Mc(u,m.events,m),m.events)}function A(K,W){return aw(T(K),W)}function T(K){return iw(d,K)}function I(){const{_bufferIndex:K,_index:W,line:Z,column:X,offset:ee}=l;return{_bufferIndex:K,_index:W,line:Z,column:X,offset:ee}}function P(K){h[K.line]=K.column,$()}function J(){let K;for(;l._index<d.length;){const W=d[l._index];if(typeof W=="string")for(K=l._index,l._bufferIndex<0&&(l._bufferIndex=0);l._index===K&&l._bufferIndex<W.length;)R(W.charCodeAt(l._bufferIndex));else R(W)}}function R(K){v=v(K)}function F(K){he(K)?(l.line++,l.column=1,l.offset+=K===-3?2:1,$()):K!==-1&&(l.column++,l.offset++),l._bufferIndex<0?l._index++:(l._bufferIndex++,l._bufferIndex===d[l._index].length&&(l._bufferIndex=-1,l._index++)),m.previous=K}function Y(K,W){const Z=W||{};return Z.type=K,Z.start=I(),m.events.push(["enter",Z,m]),g.push(Z),Z}function xe(K){const W=g.pop();return W.end=I(),m.events.push(["exit",W,m]),W}function oe(K,W){ze(K,W.from)}function L(K,W){W.restore()}function de(K,W){return Z;function Z(X,ee,_){let te,ne,ke,p;return Array.isArray(X)?ie(X):"tokenize"in X?ie([X]):q(X);function q(se){return Xe;function Xe(ye){const He=ye!==null&&se[ye],De=ye!==null&&se.null,ft=[...Array.isArray(He)?He:He?[He]:[],...Array.isArray(De)?De:De?[De]:[]];return ie(ft)(ye)}}function ie(se){return te=se,ne=0,se.length===0?_:x(se[ne])}function x(se){return Xe;function Xe(ye){return p=U(),ke=se,se.partial||(m.currentConstruct=se),se.name&&m.parser.constructs.disable.null.includes(se.name)?fe():se.tokenize.call(W?Object.assign(Object.create(m),W):m,b,G,fe)(ye)}}function G(se){return K(ke,p),ee}function fe(se){return p.restore(),++ne<te.length?x(te[ne]):_}}}function ze(K,W){K.resolveAll&&!u.includes(K)&&u.push(K),K.resolve&&on(m.events,W,m.events.length-W,K.resolve(m.events.slice(W),m)),K.resolveTo&&(m.events=K.resolveTo(m.events,m))}function U(){const K=I(),W=m.previous,Z=m.currentConstruct,X=m.events.length,ee=Array.from(g);return{from:X,restore:_};function _(){l=K,m.previous=W,m.currentConstruct=Z,m.events.length=X,g=ee,$()}}function $(){l.line in h&&l.column<2&&(l.column=h[l.line],l.offset+=h[l.line]-1)}}function iw(a,s){const r=s.start._index,l=s.start._bufferIndex,h=s.end._index,u=s.end._bufferIndex;let d;if(r===h)d=[a[r].slice(l,u)];else{if(d=a.slice(r,h),l>-1){const g=d[0];typeof g=="string"?d[0]=g.slice(l):d.shift()}u>0&&d.push(a[h].slice(0,u))}return d}function aw(a,s){let r=-1;const l=[];let h;for(;++r<a.length;){const u=a[r];let d;if(typeof u=="string")d=u;else switch(u){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=s?" ":"	";break}case-1:{if(!s&&h)continue;d=" ";break}default:d=String.fromCharCode(u)}h=u===-2,l.push(d)}return l.join("")}function ow(a){const l={constructs:db([tw,...(a||{}).extensions||[]]),content:h(wb),defined:[],document:h(xb),flow:h(_v),lazy:{},string:h(Uv),text:h(Gv)};return l;function h(u){return d;function d(g){return nw(l,u,g)}}}function sw(a){for(;!Mp(a););return a}const Ff=/[\0\t\n\r]/g;function rw(){let a=1,s="",r=!0,l;return h;function h(u,d,g){const b=[];let m,v,w,A,T;for(u=s+(typeof u=="string"?u.toString():new TextDecoder(d||void 0).decode(u)),w=0,s="",r&&(u.charCodeAt(0)===65279&&w++,r=void 0);w<u.length;){if(Ff.lastIndex=w,m=Ff.exec(u),A=m&&m.index!==void 0?m.index:u.length,T=u.charCodeAt(A),!m){s=u.slice(w);break}if(T===10&&w===A&&l)b.push(-3),l=void 0;else switch(l&&(b.push(-5),l=void 0),w<A&&(b.push(u.slice(w,A)),a+=A-w),T){case 0:{b.push(65533),a++;break}case 9:{for(v=Math.ceil(a/4)*4,b.push(-2);a++<v;)b.push(-1);break}case 10:{b.push(-4),a=1;break}default:l=!0,a=1}w=A+1}return g&&(l&&b.push(-5),s&&b.push(s),b.push(null)),b}}const lw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function cw(a){return a.replace(lw,hw)}function hw(a,s,r){if(s)return s;if(r.charCodeAt(0)===35){const h=r.charCodeAt(1),u=h===120||h===88;return Ep(r.slice(u?2:1),u?16:10)}return Bc(r)||a}const Rp={}.hasOwnProperty;function uw(a,s,r){return typeof s!="string"&&(r=s,s=void 0),dw(r)(sw(ow(r).document().write(rw()(a,s,!0))))}function dw(a){const s={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(Ai),autolinkProtocol:U,autolinkEmail:U,atxHeading:u(Wn),blockQuote:u(De),characterEscape:U,characterReference:U,codeFenced:u(ft),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:u(ft,d),codeText:u(Qn,d),codeTextData:U,data:U,codeFlowValue:U,definition:u(Wt),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:u(Ti),hardBreakEscape:u(sn),hardBreakTrailing:u(sn),htmlFlow:u(xi,d),htmlFlowData:U,htmlText:u(xi,d),htmlTextData:U,image:u(ki),label:d,link:u(Ai),listItem:u(fa),listItemValue:A,listOrdered:u(Si,w),listUnordered:u(Si),paragraph:u(_s),reference:x,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:u(Wn),strong:u(Vs),thematicBreak:u(js)},exit:{atxHeading:b(),atxHeadingSequence:oe,autolink:b(),autolinkEmail:He,autolinkProtocol:ye,blockQuote:b(),characterEscapeValue:$,characterReferenceMarkerHexadecimal:fe,characterReferenceMarkerNumeric:fe,characterReferenceValue:se,characterReference:Xe,codeFenced:b(J),codeFencedFence:P,codeFencedFenceInfo:T,codeFencedFenceMeta:I,codeFlowValue:$,codeIndented:b(R),codeText:b(ee),codeTextData:$,data:$,definition:b(),definitionDestinationString:xe,definitionLabelString:F,definitionTitleString:Y,emphasis:b(),hardBreakEscape:b(W),hardBreakTrailing:b(W),htmlFlow:b(Z),htmlFlowData:$,htmlText:b(X),htmlTextData:$,image:b(te),label:ke,labelText:ne,lineEnding:K,link:b(_),listItem:b(),listOrdered:b(),listUnordered:b(),paragraph:b(),referenceString:G,resourceDestinationString:p,resourceTitleString:q,resource:ie,setextHeading:b(ze),setextHeadingLineSequence:de,setextHeadingText:L,strong:b(),thematicBreak:b()}};Pp(s,(a||{}).mdastExtensions||[]);const r={};return l;function l(N){let j={type:"root",children:[]};const ce={stack:[j],tokenStack:[],config:s,enter:g,exit:m,buffer:d,resume:v,data:r},we=[];let Me=-1;for(;++Me<N.length;)if(N[Me][1].type==="listOrdered"||N[Me][1].type==="listUnordered")if(N[Me][0]==="enter")we.push(Me);else{const kt=we.pop();Me=h(N,kt,Me)}for(Me=-1;++Me<N.length;){const kt=s[N[Me][0]];Rp.call(kt,N[Me][1].type)&&kt[N[Me][1].type].call(Object.assign({sliceSerialize:N[Me][2].sliceSerialize},ce),N[Me][1])}if(ce.tokenStack.length>0){const kt=ce.tokenStack[ce.tokenStack.length-1];(kt[1]||Kf).call(ce,void 0,kt[0])}for(j.position={start:Fn(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:Fn(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},Me=-1;++Me<s.transforms.length;)j=s.transforms[Me](j)||j;return j}function h(N,j,ce){let we=j-1,Me=-1,kt=!1,rn,pt,$e,Zn;for(;++we<=ce;){const je=N[we];switch(je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{je[0]==="enter"?Me++:Me--,Zn=void 0;break}case"lineEndingBlank":{je[0]==="enter"&&(rn&&!Zn&&!Me&&!$e&&($e=we),Zn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Zn=void 0}if(!Me&&je[0]==="enter"&&je[1].type==="listItemPrefix"||Me===-1&&je[0]==="exit"&&(je[1].type==="listUnordered"||je[1].type==="listOrdered")){if(rn){let Ke=we;for(pt=void 0;Ke--;){const Yt=N[Ke];if(Yt[1].type==="lineEnding"||Yt[1].type==="lineEndingBlank"){if(Yt[0]==="exit")continue;pt&&(N[pt][1].type="lineEndingBlank",kt=!0),Yt[1].type="lineEnding",pt=Ke}else if(!(Yt[1].type==="linePrefix"||Yt[1].type==="blockQuotePrefix"||Yt[1].type==="blockQuotePrefixWhitespace"||Yt[1].type==="blockQuoteMarker"||Yt[1].type==="listItemIndent"))break}$e&&(!pt||$e<pt)&&(rn._spread=!0),rn.end=Object.assign({},pt?N[pt][1].start:je[1].end),N.splice(pt||we,0,["exit",rn,je[2]]),we++,ce++}if(je[1].type==="listItemPrefix"){const Ke={type:"listItem",_spread:!1,start:Object.assign({},je[1].start),end:void 0};rn=Ke,N.splice(we,0,["enter",Ke,je[2]]),we++,ce++,$e=void 0,Zn=!0}}}return N[j][1]._spread=kt,ce}function u(N,j){return ce;function ce(we){g.call(this,N(we),we),j&&j.call(this,we)}}function d(){this.stack.push({type:"fragment",children:[]})}function g(N,j,ce){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([j,ce||void 0]),N.position={start:Fn(j.start),end:void 0}}function b(N){return j;function j(ce){N&&N.call(this,ce),m.call(this,ce)}}function m(N,j){const ce=this.stack.pop(),we=this.tokenStack.pop();if(we)we[0].type!==N.type&&(j?j.call(this,N,we[0]):(we[1]||Kf).call(this,N,we[0]));else throw new Error("Cannot close `"+N.type+"` ("+po({start:N.start,end:N.end})+"): it’s not open");ce.position.end=Fn(N.end)}function v(){return hb(this.stack.pop())}function w(){this.data.expectingFirstListItemValue=!0}function A(N){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function T(){const N=this.resume(),j=this.stack[this.stack.length-1];j.lang=N}function I(){const N=this.resume(),j=this.stack[this.stack.length-1];j.meta=N}function P(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function J(){const N=this.resume(),j=this.stack[this.stack.length-1];j.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function R(){const N=this.resume(),j=this.stack[this.stack.length-1];j.value=N.replace(/(\r?\n|\r)$/g,"")}function F(N){const j=this.resume(),ce=this.stack[this.stack.length-1];ce.label=j,ce.identifier=ha(this.sliceSerialize(N)).toLowerCase()}function Y(){const N=this.resume(),j=this.stack[this.stack.length-1];j.title=N}function xe(){const N=this.resume(),j=this.stack[this.stack.length-1];j.url=N}function oe(N){const j=this.stack[this.stack.length-1];if(!j.depth){const ce=this.sliceSerialize(N).length;j.depth=ce}}function L(){this.data.setextHeadingSlurpLineEnding=!0}function de(N){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function ze(){this.data.setextHeadingSlurpLineEnding=void 0}function U(N){const ce=this.stack[this.stack.length-1].children;let we=ce[ce.length-1];(!we||we.type!=="text")&&(we=Mt(),we.position={start:Fn(N.start),end:void 0},ce.push(we)),this.stack.push(we)}function $(N){const j=this.stack.pop();j.value+=this.sliceSerialize(N),j.position.end=Fn(N.end)}function K(N){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ce=j.children[j.children.length-1];ce.position.end=Fn(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&s.canContainEols.includes(j.type)&&(U.call(this,N),$.call(this,N))}function W(){this.data.atHardBreak=!0}function Z(){const N=this.resume(),j=this.stack[this.stack.length-1];j.value=N}function X(){const N=this.resume(),j=this.stack[this.stack.length-1];j.value=N}function ee(){const N=this.resume(),j=this.stack[this.stack.length-1];j.value=N}function _(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=j,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function te(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=j,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function ne(N){const j=this.sliceSerialize(N),ce=this.stack[this.stack.length-2];ce.label=cw(j),ce.identifier=ha(j).toLowerCase()}function ke(){const N=this.stack[this.stack.length-1],j=this.resume(),ce=this.stack[this.stack.length-1];if(this.data.inReference=!0,ce.type==="link"){const we=N.children;ce.children=we}else ce.alt=j}function p(){const N=this.resume(),j=this.stack[this.stack.length-1];j.url=N}function q(){const N=this.resume(),j=this.stack[this.stack.length-1];j.title=N}function ie(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function G(N){const j=this.resume(),ce=this.stack[this.stack.length-1];ce.label=j,ce.identifier=ha(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function fe(N){this.data.characterReferenceType=N.type}function se(N){const j=this.sliceSerialize(N),ce=this.data.characterReferenceType;let we;ce?(we=Ep(j,ce==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):we=Bc(j);const Me=this.stack[this.stack.length-1];Me.value+=we}function Xe(N){const j=this.stack.pop();j.position.end=Fn(N.end)}function ye(N){$.call(this,N);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(N)}function He(N){$.call(this,N);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(N)}function De(){return{type:"blockquote",children:[]}}function ft(){return{type:"code",lang:null,meta:null,value:""}}function Qn(){return{type:"inlineCode",value:""}}function Wt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ti(){return{type:"emphasis",children:[]}}function Wn(){return{type:"heading",depth:0,children:[]}}function sn(){return{type:"break"}}function xi(){return{type:"html",value:""}}function ki(){return{type:"image",title:null,url:"",alt:null}}function Ai(){return{type:"link",title:null,url:"",children:[]}}function Si(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[]}}function fa(N){return{type:"listItem",spread:N._spread,checked:null,children:[]}}function _s(){return{type:"paragraph",children:[]}}function Vs(){return{type:"strong",children:[]}}function Mt(){return{type:"text",value:""}}function js(){return{type:"thematicBreak"}}}function Fn(a){return{line:a.line,column:a.column,offset:a.offset}}function Pp(a,s){let r=-1;for(;++r<s.length;){const l=s[r];Array.isArray(l)?Pp(a,l):fw(a,l)}}function fw(a,s){let r;for(r in s)if(Rp.call(s,r))switch(r){case"canContainEols":{const l=s[r];l&&a[r].push(...l);break}case"transforms":{const l=s[r];l&&a[r].push(...l);break}case"enter":case"exit":{const l=s[r];l&&Object.assign(a[r],l);break}}}function Kf(a,s){throw a?new Error("Cannot close `"+a.type+"` ("+po({start:a.start,end:a.end})+"): a different token (`"+s.type+"`, "+po({start:s.start,end:s.end})+") is open"):new Error("Cannot close document, a token (`"+s.type+"`, "+po({start:s.start,end:s.end})+") is still open")}function pw(a){const s=this;s.parser=r;function r(l){return uw(l,{...s.data("settings"),...a,extensions:s.data("micromarkExtensions")||[],mdastExtensions:s.data("fromMarkdownExtensions")||[]})}}function mw(a,s){const r={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(s),!0)};return a.patch(s,r),a.applyData(s,r)}function gw(a,s){const r={type:"element",tagName:"br",properties:{},children:[]};return a.patch(s,r),[a.applyData(s,r),{type:"text",value:`
`}]}function yw(a,s){const r=s.value?s.value+`
`:"",l={};s.lang&&(l.className=["language-"+s.lang]);let h={type:"element",tagName:"code",properties:l,children:[{type:"text",value:r}]};return s.meta&&(h.data={meta:s.meta}),a.patch(s,h),h=a.applyData(s,h),h={type:"element",tagName:"pre",properties:{},children:[h]},a.patch(s,h),h}function bw(a,s){const r={type:"element",tagName:"del",properties:{},children:a.all(s)};return a.patch(s,r),a.applyData(s,r)}function vw(a,s){const r={type:"element",tagName:"em",properties:{},children:a.all(s)};return a.patch(s,r),a.applyData(s,r)}function ww(a,s){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",l=String(s.identifier).toUpperCase(),h=da(l.toLowerCase()),u=a.footnoteOrder.indexOf(l);let d,g=a.footnoteCounts.get(l);g===void 0?(g=0,a.footnoteOrder.push(l),d=a.footnoteOrder.length):d=u+1,g+=1,a.footnoteCounts.set(l,g);const b={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+h,id:r+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(s,b);const m={type:"element",tagName:"sup",properties:{},children:[b]};return a.patch(s,m),a.applyData(s,m)}function Tw(a,s){const r={type:"element",tagName:"h"+s.depth,properties:{},children:a.all(s)};return a.patch(s,r),a.applyData(s,r)}function xw(a,s){if(a.options.allowDangerousHtml){const r={type:"raw",value:s.value};return a.patch(s,r),a.applyData(s,r)}}function Ip(a,s){const r=s.referenceType;let l="]";if(r==="collapsed"?l+="[]":r==="full"&&(l+="["+(s.label||s.identifier)+"]"),s.type==="imageReference")return[{type:"text",value:"!["+s.alt+l}];const h=a.all(s),u=h[0];u&&u.type==="text"?u.value="["+u.value:h.unshift({type:"text",value:"["});const d=h[h.length-1];return d&&d.type==="text"?d.value+=l:h.push({type:"text",value:l}),h}function kw(a,s){const r=String(s.identifier).toUpperCase(),l=a.definitionById.get(r);if(!l)return Ip(a,s);const h={src:da(l.url||""),alt:s.alt};l.title!==null&&l.title!==void 0&&(h.title=l.title);const u={type:"element",tagName:"img",properties:h,children:[]};return a.patch(s,u),a.applyData(s,u)}function Aw(a,s){const r={src:da(s.url)};s.alt!==null&&s.alt!==void 0&&(r.alt=s.alt),s.title!==null&&s.title!==void 0&&(r.title=s.title);const l={type:"element",tagName:"img",properties:r,children:[]};return a.patch(s,l),a.applyData(s,l)}function Sw(a,s){const r={type:"text",value:s.value.replace(/\r?\n|\r/g," ")};a.patch(s,r);const l={type:"element",tagName:"code",properties:{},children:[r]};return a.patch(s,l),a.applyData(s,l)}function zw(a,s){const r=String(s.identifier).toUpperCase(),l=a.definitionById.get(r);if(!l)return Ip(a,s);const h={href:da(l.url||"")};l.title!==null&&l.title!==void 0&&(h.title=l.title);const u={type:"element",tagName:"a",properties:h,children:a.all(s)};return a.patch(s,u),a.applyData(s,u)}function Ew(a,s){const r={href:da(s.url)};s.title!==null&&s.title!==void 0&&(r.title=s.title);const l={type:"element",tagName:"a",properties:r,children:a.all(s)};return a.patch(s,l),a.applyData(s,l)}function Cw(a,s,r){const l=a.all(s),h=r?Dw(r):_p(s),u={},d=[];if(typeof s.checked=="boolean"){const v=l[0];let w;v&&v.type==="element"&&v.tagName==="p"?w=v:(w={type:"element",tagName:"p",properties:{},children:[]},l.unshift(w)),w.children.length>0&&w.children.unshift({type:"text",value:" "}),w.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:s.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let g=-1;for(;++g<l.length;){const v=l[g];(h||g!==0||v.type!=="element"||v.tagName!=="p")&&d.push({type:"text",value:`
`}),v.type==="element"&&v.tagName==="p"&&!h?d.push(...v.children):d.push(v)}const b=l[l.length-1];b&&(h||b.type!=="element"||b.tagName!=="p")&&d.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:u,children:d};return a.patch(s,m),a.applyData(s,m)}function Dw(a){let s=!1;if(a.type==="list"){s=a.spread||!1;const r=a.children;let l=-1;for(;!s&&++l<r.length;)s=_p(r[l])}return s}function _p(a){const s=a.spread;return s??a.children.length>1}function Bw(a,s){const r={},l=a.all(s);let h=-1;for(typeof s.start=="number"&&s.start!==1&&(r.start=s.start);++h<l.length;){const d=l[h];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const u={type:"element",tagName:s.ordered?"ol":"ul",properties:r,children:a.wrap(l,!0)};return a.patch(s,u),a.applyData(s,u)}function Mw(a,s){const r={type:"element",tagName:"p",properties:{},children:a.all(s)};return a.patch(s,r),a.applyData(s,r)}function Nw(a,s){const r={type:"root",children:a.wrap(a.all(s))};return a.patch(s,r),a.applyData(s,r)}function Lw(a,s){const r={type:"element",tagName:"strong",properties:{},children:a.all(s)};return a.patch(s,r),a.applyData(s,r)}function Hw(a,s){const r=a.all(s),l=r.shift(),h=[];if(l){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([l],!0)};a.patch(s.children[0],d),h.push(d)}if(r.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(r,!0)},g=zc(s.children[1]),b=wp(s.children[s.children.length-1]);g&&b&&(d.position={start:g,end:b}),h.push(d)}const u={type:"element",tagName:"table",properties:{},children:a.wrap(h,!0)};return a.patch(s,u),a.applyData(s,u)}function qw(a,s,r){const l=r?r.children:void 0,u=(l?l.indexOf(s):1)===0?"th":"td",d=r&&r.type==="table"?r.align:void 0,g=d?d.length:s.children.length;let b=-1;const m=[];for(;++b<g;){const w=s.children[b],A={},T=d?d[b]:void 0;T&&(A.align=T);let I={type:"element",tagName:u,properties:A,children:[]};w&&(I.children=a.all(w),a.patch(w,I),I=a.applyData(w,I)),m.push(I)}const v={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(s,v),a.applyData(s,v)}function Ow(a,s){const r={type:"element",tagName:"td",properties:{},children:a.all(s)};return a.patch(s,r),a.applyData(s,r)}const Qf=9,Wf=32;function Rw(a){const s=String(a),r=/\r?\n|\r/g;let l=r.exec(s),h=0;const u=[];for(;l;)u.push(Zf(s.slice(h,l.index),h>0,!0),l[0]),h=l.index+l[0].length,l=r.exec(s);return u.push(Zf(s.slice(h),h>0,!1)),u.join("")}function Zf(a,s,r){let l=0,h=a.length;if(s){let u=a.codePointAt(l);for(;u===Qf||u===Wf;)l++,u=a.codePointAt(l)}if(r){let u=a.codePointAt(h-1);for(;u===Qf||u===Wf;)h--,u=a.codePointAt(h-1)}return h>l?a.slice(l,h):""}function Pw(a,s){const r={type:"text",value:Rw(String(s.value))};return a.patch(s,r),a.applyData(s,r)}function Iw(a,s){const r={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(s,r),a.applyData(s,r)}const _w={blockquote:mw,break:gw,code:yw,delete:bw,emphasis:vw,footnoteReference:ww,heading:Tw,html:xw,imageReference:kw,image:Aw,inlineCode:Sw,linkReference:zw,link:Ew,listItem:Cw,list:Bw,paragraph:Mw,root:Nw,strong:Lw,table:Hw,tableCell:Ow,tableRow:qw,text:Pw,thematicBreak:Iw,toml:Bs,yaml:Bs,definition:Bs,footnoteDefinition:Bs};function Bs(){}const Vp=-1,Ps=0,go=1,qs=2,Lc=3,Hc=4,qc=5,Oc=6,jp=7,Up=8,Jf=typeof self=="object"?self:globalThis,Vw=(a,s)=>{const r=(h,u)=>(a.set(u,h),h),l=h=>{if(a.has(h))return a.get(h);const[u,d]=s[h];switch(u){case Ps:case Vp:return r(d,h);case go:{const g=r([],h);for(const b of d)g.push(l(b));return g}case qs:{const g=r({},h);for(const[b,m]of d)g[l(b)]=l(m);return g}case Lc:return r(new Date(d),h);case Hc:{const{source:g,flags:b}=d;return r(new RegExp(g,b),h)}case qc:{const g=r(new Map,h);for(const[b,m]of d)g.set(l(b),l(m));return g}case Oc:{const g=r(new Set,h);for(const b of d)g.add(l(b));return g}case jp:{const{name:g,message:b}=d;return r(new Jf[g](b),h)}case Up:return r(BigInt(d),h);case"BigInt":return r(Object(BigInt(d)),h);case"ArrayBuffer":return r(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:g}=new Uint8Array(d);return r(new DataView(g),d)}}return r(new Jf[u](d),h)};return l},$f=a=>Vw(new Map,a)(0),la="",{toString:jw}={},{keys:Uw}=Object,fo=a=>{const s=typeof a;if(s!=="object"||!a)return[Ps,s];const r=jw.call(a).slice(8,-1);switch(r){case"Array":return[go,la];case"Object":return[qs,la];case"Date":return[Lc,la];case"RegExp":return[Hc,la];case"Map":return[qc,la];case"Set":return[Oc,la];case"DataView":return[go,r]}return r.includes("Array")?[go,r]:r.includes("Error")?[jp,r]:[qs,r]},Ms=([a,s])=>a===Ps&&(s==="function"||s==="symbol"),Gw=(a,s,r,l)=>{const h=(d,g)=>{const b=l.push(d)-1;return r.set(g,b),b},u=d=>{if(r.has(d))return r.get(d);let[g,b]=fo(d);switch(g){case Ps:{let v=d;switch(b){case"bigint":g=Up,v=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+b);v=null;break;case"undefined":return h([Vp],d)}return h([g,v],d)}case go:{if(b){let A=d;return b==="DataView"?A=new Uint8Array(d.buffer):b==="ArrayBuffer"&&(A=new Uint8Array(d)),h([b,[...A]],d)}const v=[],w=h([g,v],d);for(const A of d)v.push(u(A));return w}case qs:{if(b)switch(b){case"BigInt":return h([b,d.toString()],d);case"Boolean":case"Number":case"String":return h([b,d.valueOf()],d)}if(s&&"toJSON"in d)return u(d.toJSON());const v=[],w=h([g,v],d);for(const A of Uw(d))(a||!Ms(fo(d[A])))&&v.push([u(A),u(d[A])]);return w}case Lc:return h([g,d.toISOString()],d);case Hc:{const{source:v,flags:w}=d;return h([g,{source:v,flags:w}],d)}case qc:{const v=[],w=h([g,v],d);for(const[A,T]of d)(a||!(Ms(fo(A))||Ms(fo(T))))&&v.push([u(A),u(T)]);return w}case Oc:{const v=[],w=h([g,v],d);for(const A of d)(a||!Ms(fo(A)))&&v.push(u(A));return w}}const{message:m}=d;return h([g,{name:b,message:m}],d)};return u},ep=(a,{json:s,lossy:r}={})=>{const l=[];return Gw(!(s||r),!!s,new Map,l)(a),l},Os=typeof structuredClone=="function"?(a,s)=>s&&("json"in s||"lossy"in s)?$f(ep(a,s)):structuredClone(a):(a,s)=>$f(ep(a,s));function Yw(a,s){const r=[{type:"text",value:"↩"}];return s>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(s)}]}),r}function Xw(a,s){return"Back to reference "+(a+1)+(s>1?"-"+s:"")}function Fw(a){const s=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",r=a.options.footnoteBackContent||Yw,l=a.options.footnoteBackLabel||Xw,h=a.options.footnoteLabel||"Footnotes",u=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},g=[];let b=-1;for(;++b<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[b]);if(!m)continue;const v=a.all(m),w=String(m.identifier).toUpperCase(),A=da(w.toLowerCase());let T=0;const I=[],P=a.footnoteCounts.get(w);for(;P!==void 0&&++T<=P;){I.length>0&&I.push({type:"text",value:" "});let F=typeof r=="string"?r:r(b,T);typeof F=="string"&&(F={type:"text",value:F}),I.push({type:"element",tagName:"a",properties:{href:"#"+s+"fnref-"+A+(T>1?"-"+T:""),dataFootnoteBackref:"",ariaLabel:typeof l=="string"?l:l(b,T),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}const J=v[v.length-1];if(J&&J.type==="element"&&J.tagName==="p"){const F=J.children[J.children.length-1];F&&F.type==="text"?F.value+=" ":J.children.push({type:"text",value:" "}),J.children.push(...I)}else v.push(...I);const R={type:"element",tagName:"li",properties:{id:s+"fn-"+A},children:a.wrap(v,!0)};a.patch(m,R),g.push(R)}if(g.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...Os(d),id:"footnote-label"},children:[{type:"text",value:h}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(g,!0)},{type:"text",value:`
`}]}}const Gp=function(a){if(a==null)return Zw;if(typeof a=="function")return Is(a);if(typeof a=="object")return Array.isArray(a)?Kw(a):Qw(a);if(typeof a=="string")return Ww(a);throw new Error("Expected function, string, or object as test")};function Kw(a){const s=[];let r=-1;for(;++r<a.length;)s[r]=Gp(a[r]);return Is(l);function l(...h){let u=-1;for(;++u<s.length;)if(s[u].apply(this,h))return!0;return!1}}function Qw(a){const s=a;return Is(r);function r(l){const h=l;let u;for(u in a)if(h[u]!==s[u])return!1;return!0}}function Ww(a){return Is(s);function s(r){return r&&r.type===a}}function Is(a){return s;function s(r,l,h){return!!(Jw(r)&&a.call(this,r,typeof l=="number"?l:void 0,h||void 0))}}function Zw(){return!0}function Jw(a){return a!==null&&typeof a=="object"&&"type"in a}const Yp=[],$w=!0,tp=!1,eT="skip";function tT(a,s,r,l){let h;typeof s=="function"&&typeof r!="function"?(l=r,r=s):h=s;const u=Gp(h),d=l?-1:1;g(a,void 0,[])();function g(b,m,v){const w=b&&typeof b=="object"?b:{};if(typeof w.type=="string"){const T=typeof w.tagName=="string"?w.tagName:typeof w.name=="string"?w.name:void 0;Object.defineProperty(A,"name",{value:"node ("+(b.type+(T?"<"+T+">":""))+")"})}return A;function A(){let T=Yp,I,P,J;if((!s||u(b,m,v[v.length-1]||void 0))&&(T=nT(r(b,v)),T[0]===tp))return T;if("children"in b&&b.children){const R=b;if(R.children&&T[0]!==eT)for(P=(l?R.children.length:-1)+d,J=v.concat(R);P>-1&&P<R.children.length;){const F=R.children[P];if(I=g(F,P,J)(),I[0]===tp)return I;P=typeof I[1]=="number"?I[1]:P+d}}return T}}}function nT(a){return Array.isArray(a)?a:typeof a=="number"?[$w,a]:a==null?Yp:[a]}function Xp(a,s,r,l){let h,u,d;typeof s=="function"?(u=void 0,d=s,h=r):(u=s,d=r,h=l),tT(a,u,g,h);function g(b,m){const v=m[m.length-1],w=v?v.children.indexOf(b):void 0;return d(b,w,v)}}const wc={}.hasOwnProperty,iT={};function aT(a,s){const r=s||iT,l=new Map,h=new Map,u=new Map,d={..._w,...r.handlers},g={all:m,applyData:sT,definitionById:l,footnoteById:h,footnoteCounts:u,footnoteOrder:[],handlers:d,one:b,options:r,patch:oT,wrap:lT};return Xp(a,function(v){if(v.type==="definition"||v.type==="footnoteDefinition"){const w=v.type==="definition"?l:h,A=String(v.identifier).toUpperCase();w.has(A)||w.set(A,v)}}),g;function b(v,w){const A=v.type,T=g.handlers[A];if(wc.call(g.handlers,A)&&T)return T(g,v,w);if(g.options.passThrough&&g.options.passThrough.includes(A)){if("children"in v){const{children:P,...J}=v,R=Os(J);return R.children=g.all(v),R}return Os(v)}return(g.options.unknownHandler||rT)(g,v,w)}function m(v){const w=[];if("children"in v){const A=v.children;let T=-1;for(;++T<A.length;){const I=g.one(A[T],v);if(I){if(T&&A[T-1].type==="break"&&(!Array.isArray(I)&&I.type==="text"&&(I.value=np(I.value)),!Array.isArray(I)&&I.type==="element")){const P=I.children[0];P&&P.type==="text"&&(P.value=np(P.value))}Array.isArray(I)?w.push(...I):w.push(I)}}}return w}}function oT(a,s){a.position&&(s.position=_y(a))}function sT(a,s){let r=s;if(a&&a.data){const l=a.data.hName,h=a.data.hChildren,u=a.data.hProperties;if(typeof l=="string")if(r.type==="element")r.tagName=l;else{const d="children"in r?r.children:[r];r={type:"element",tagName:l,properties:{},children:d}}r.type==="element"&&u&&Object.assign(r.properties,Os(u)),"children"in r&&r.children&&h!==null&&h!==void 0&&(r.children=h)}return r}function rT(a,s){const r=s.data||{},l="value"in s&&!(wc.call(r,"hProperties")||wc.call(r,"hChildren"))?{type:"text",value:s.value}:{type:"element",tagName:"div",properties:{},children:a.all(s)};return a.patch(s,l),a.applyData(s,l)}function lT(a,s){const r=[];let l=-1;for(s&&r.push({type:"text",value:`
`});++l<a.length;)l&&r.push({type:"text",value:`
`}),r.push(a[l]);return s&&a.length>0&&r.push({type:"text",value:`
`}),r}function np(a){let s=0,r=a.charCodeAt(s);for(;r===9||r===32;)s++,r=a.charCodeAt(s);return a.slice(s)}function ip(a,s){const r=aT(a,s),l=r.one(a,void 0),h=Fw(r),u=Array.isArray(l)?{type:"root",children:l}:l||{type:"root",children:[]};return h&&u.children.push({type:"text",value:`
`},h),u}function cT(a,s){return a&&"run"in a?async function(r,l){const h=ip(r,{file:l,...s});await a.run(h,l)}:function(r,l){return ip(r,{file:l,...a||s})}}function ap(a){if(a)throw a}var sc,op;function hT(){if(op)return sc;op=1;var a=Object.prototype.hasOwnProperty,s=Object.prototype.toString,r=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h=function(m){return typeof Array.isArray=="function"?Array.isArray(m):s.call(m)==="[object Array]"},u=function(m){if(!m||s.call(m)!=="[object Object]")return!1;var v=a.call(m,"constructor"),w=m.constructor&&m.constructor.prototype&&a.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!v&&!w)return!1;var A;for(A in m);return typeof A>"u"||a.call(m,A)},d=function(m,v){r&&v.name==="__proto__"?r(m,v.name,{enumerable:!0,configurable:!0,value:v.newValue,writable:!0}):m[v.name]=v.newValue},g=function(m,v){if(v==="__proto__")if(a.call(m,v)){if(l)return l(m,v).value}else return;return m[v]};return sc=function b(){var m,v,w,A,T,I,P=arguments[0],J=1,R=arguments.length,F=!1;for(typeof P=="boolean"&&(F=P,P=arguments[1]||{},J=2),(P==null||typeof P!="object"&&typeof P!="function")&&(P={});J<R;++J)if(m=arguments[J],m!=null)for(v in m)w=g(P,v),A=g(m,v),P!==A&&(F&&A&&(u(A)||(T=h(A)))?(T?(T=!1,I=w&&h(w)?w:[]):I=w&&u(w)?w:{},d(P,{name:v,newValue:b(F,I,A)})):typeof A<"u"&&d(P,{name:v,newValue:A}));return P},sc}var uT=hT();const rc=up(uT);function Tc(a){if(typeof a!="object"||a===null)return!1;const s=Object.getPrototypeOf(a);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function dT(){const a=[],s={run:r,use:l};return s;function r(...h){let u=-1;const d=h.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);g(null,...h);function g(b,...m){const v=a[++u];let w=-1;if(b){d(b);return}for(;++w<h.length;)(m[w]===null||m[w]===void 0)&&(m[w]=h[w]);h=m,v?fT(v,g)(...m):d(null,...m)}}function l(h){if(typeof h!="function")throw new TypeError("Expected `middelware` to be a function, not "+h);return a.push(h),s}}function fT(a,s){let r;return l;function l(...d){const g=a.length>d.length;let b;g&&d.push(h);try{b=a.apply(this,d)}catch(m){const v=m;if(g&&r)throw v;return h(v)}g||(b&&b.then&&typeof b.then=="function"?b.then(u,h):b instanceof Error?h(b):u(b))}function h(d,...g){r||(r=!0,s(d,...g))}function u(d){h(null,d)}}const nn={basename:pT,dirname:mT,extname:gT,join:yT,sep:"/"};function pT(a,s){if(s!==void 0&&typeof s!="string")throw new TypeError('"ext" argument must be a string');vo(a);let r=0,l=-1,h=a.length,u;if(s===void 0||s.length===0||s.length>a.length){for(;h--;)if(a.codePointAt(h)===47){if(u){r=h+1;break}}else l<0&&(u=!0,l=h+1);return l<0?"":a.slice(r,l)}if(s===a)return"";let d=-1,g=s.length-1;for(;h--;)if(a.codePointAt(h)===47){if(u){r=h+1;break}}else d<0&&(u=!0,d=h+1),g>-1&&(a.codePointAt(h)===s.codePointAt(g--)?g<0&&(l=h):(g=-1,l=d));return r===l?l=d:l<0&&(l=a.length),a.slice(r,l)}function mT(a){if(vo(a),a.length===0)return".";let s=-1,r=a.length,l;for(;--r;)if(a.codePointAt(r)===47){if(l){s=r;break}}else l||(l=!0);return s<0?a.codePointAt(0)===47?"/":".":s===1&&a.codePointAt(0)===47?"//":a.slice(0,s)}function gT(a){vo(a);let s=a.length,r=-1,l=0,h=-1,u=0,d;for(;s--;){const g=a.codePointAt(s);if(g===47){if(d){l=s+1;break}continue}r<0&&(d=!0,r=s+1),g===46?h<0?h=s:u!==1&&(u=1):h>-1&&(u=-1)}return h<0||r<0||u===0||u===1&&h===r-1&&h===l+1?"":a.slice(h,r)}function yT(...a){let s=-1,r;for(;++s<a.length;)vo(a[s]),a[s]&&(r=r===void 0?a[s]:r+"/"+a[s]);return r===void 0?".":bT(r)}function bT(a){vo(a);const s=a.codePointAt(0)===47;let r=vT(a,!s);return r.length===0&&!s&&(r="."),r.length>0&&a.codePointAt(a.length-1)===47&&(r+="/"),s?"/"+r:r}function vT(a,s){let r="",l=0,h=-1,u=0,d=-1,g,b;for(;++d<=a.length;){if(d<a.length)g=a.codePointAt(d);else{if(g===47)break;g=47}if(g===47){if(!(h===d-1||u===1))if(h!==d-1&&u===2){if(r.length<2||l!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(b=r.lastIndexOf("/"),b!==r.length-1){b<0?(r="",l=0):(r=r.slice(0,b),l=r.length-1-r.lastIndexOf("/")),h=d,u=0;continue}}else if(r.length>0){r="",l=0,h=d,u=0;continue}}s&&(r=r.length>0?r+"/..":"..",l=2)}else r.length>0?r+="/"+a.slice(h+1,d):r=a.slice(h+1,d),l=d-h-1;h=d,u=0}else g===46&&u>-1?u++:u=-1}return r}function vo(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const wT={cwd:TT};function TT(){return"/"}function xc(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function xT(a){if(typeof a=="string")a=new URL(a);else if(!xc(a)){const s=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw s.code="ERR_INVALID_ARG_TYPE",s}if(a.protocol!=="file:"){const s=new TypeError("The URL must be of scheme file");throw s.code="ERR_INVALID_URL_SCHEME",s}return kT(a)}function kT(a){if(a.hostname!==""){const l=new TypeError('File URL host must be "localhost" or empty on darwin');throw l.code="ERR_INVALID_FILE_URL_HOST",l}const s=a.pathname;let r=-1;for(;++r<s.length;)if(s.codePointAt(r)===37&&s.codePointAt(r+1)===50){const l=s.codePointAt(r+2);if(l===70||l===102){const h=new TypeError("File URL path must not include encoded / characters");throw h.code="ERR_INVALID_FILE_URL_PATH",h}}return decodeURIComponent(s)}const lc=["history","path","basename","stem","extname","dirname"];class Fp{constructor(s){let r;s?xc(s)?r={path:s}:typeof s=="string"||AT(s)?r={value:s}:r=s:r={},this.cwd="cwd"in r?"":wT.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let l=-1;for(;++l<lc.length;){const u=lc[l];u in r&&r[u]!==void 0&&r[u]!==null&&(this[u]=u==="history"?[...r[u]]:r[u])}let h;for(h in r)lc.includes(h)||(this[h]=r[h])}get basename(){return typeof this.path=="string"?nn.basename(this.path):void 0}set basename(s){hc(s,"basename"),cc(s,"basename"),this.path=nn.join(this.dirname||"",s)}get dirname(){return typeof this.path=="string"?nn.dirname(this.path):void 0}set dirname(s){sp(this.basename,"dirname"),this.path=nn.join(s||"",this.basename)}get extname(){return typeof this.path=="string"?nn.extname(this.path):void 0}set extname(s){if(cc(s,"extname"),sp(this.dirname,"extname"),s){if(s.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(s.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=nn.join(this.dirname,this.stem+(s||""))}get path(){return this.history[this.history.length-1]}set path(s){xc(s)&&(s=xT(s)),hc(s,"path"),this.path!==s&&this.history.push(s)}get stem(){return typeof this.path=="string"?nn.basename(this.path,this.extname):void 0}set stem(s){hc(s,"stem"),cc(s,"stem"),this.path=nn.join(this.dirname||"",s+(this.extname||""))}fail(s,r,l){const h=this.message(s,r,l);throw h.fatal=!0,h}info(s,r,l){const h=this.message(s,r,l);return h.fatal=void 0,h}message(s,r,l){const h=new dt(s,r,l);return this.path&&(h.name=this.path+":"+h.name,h.file=this.path),h.fatal=!1,this.messages.push(h),h}toString(s){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(s||void 0).decode(this.value)}}function cc(a,s){if(a&&a.includes(nn.sep))throw new Error("`"+s+"` cannot be a path: did not expect `"+nn.sep+"`")}function hc(a,s){if(!a)throw new Error("`"+s+"` cannot be empty")}function sp(a,s){if(!a)throw new Error("Setting `"+s+"` requires `path` to be set too")}function AT(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const ST=function(a){const l=this.constructor.prototype,h=l[a],u=function(){return h.apply(u,arguments)};return Object.setPrototypeOf(u,l),u},zT={}.hasOwnProperty;class Rc extends ST{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=dT()}copy(){const s=new Rc;let r=-1;for(;++r<this.attachers.length;){const l=this.attachers[r];s.use(...l)}return s.data(rc(!0,{},this.namespace)),s}data(s,r){return typeof s=="string"?arguments.length===2?(fc("data",this.frozen),this.namespace[s]=r,this):zT.call(this.namespace,s)&&this.namespace[s]||void 0:s?(fc("data",this.frozen),this.namespace=s,this):this.namespace}freeze(){if(this.frozen)return this;const s=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...l]=this.attachers[this.freezeIndex];if(l[0]===!1)continue;l[0]===!0&&(l[0]=void 0);const h=r.call(s,...l);typeof h=="function"&&this.transformers.use(h)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(s){this.freeze();const r=Ns(s),l=this.parser||this.Parser;return uc("parse",l),l(String(r),r)}process(s,r){const l=this;return this.freeze(),uc("process",this.parser||this.Parser),dc("process",this.compiler||this.Compiler),r?h(void 0,r):new Promise(h);function h(u,d){const g=Ns(s),b=l.parse(g);l.run(b,g,function(v,w,A){if(v||!w||!A)return m(v);const T=w,I=l.stringify(T,A);DT(I)?A.value=I:A.result=I,m(v,A)});function m(v,w){v||!w?d(v):u?u(w):r(void 0,w)}}}processSync(s){let r=!1,l;return this.freeze(),uc("processSync",this.parser||this.Parser),dc("processSync",this.compiler||this.Compiler),this.process(s,h),lp("processSync","process",r),l;function h(u,d){r=!0,ap(u),l=d}}run(s,r,l){rp(s),this.freeze();const h=this.transformers;return!l&&typeof r=="function"&&(l=r,r=void 0),l?u(void 0,l):new Promise(u);function u(d,g){const b=Ns(r);h.run(s,b,m);function m(v,w,A){const T=w||s;v?g(v):d?d(T):l(void 0,T,A)}}}runSync(s,r){let l=!1,h;return this.run(s,r,u),lp("runSync","run",l),h;function u(d,g){ap(d),h=g,l=!0}}stringify(s,r){this.freeze();const l=Ns(r),h=this.compiler||this.Compiler;return dc("stringify",h),rp(s),h(s,l)}use(s,...r){const l=this.attachers,h=this.namespace;if(fc("use",this.frozen),s!=null)if(typeof s=="function")b(s,r);else if(typeof s=="object")Array.isArray(s)?g(s):d(s);else throw new TypeError("Expected usable value, not `"+s+"`");return this;function u(m){if(typeof m=="function")b(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[v,...w]=m;b(v,w)}else d(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function d(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");g(m.plugins),m.settings&&(h.settings=rc(!0,h.settings,m.settings))}function g(m){let v=-1;if(m!=null)if(Array.isArray(m))for(;++v<m.length;){const w=m[v];u(w)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function b(m,v){let w=-1,A=-1;for(;++w<l.length;)if(l[w][0]===m){A=w;break}if(A===-1)l.push([m,...v]);else if(v.length>0){let[T,...I]=v;const P=l[A][1];Tc(P)&&Tc(T)&&(T=rc(!0,P,T)),l[A]=[m,T,...I]}}}}const ET=new Rc().freeze();function uc(a,s){if(typeof s!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function dc(a,s){if(typeof s!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function fc(a,s){if(s)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rp(a){if(!Tc(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function lp(a,s,r){if(!r)throw new Error("`"+a+"` finished async. Use `"+s+"` instead")}function Ns(a){return CT(a)?a:new Fp(a)}function CT(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function DT(a){return typeof a=="string"||BT(a)}function BT(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const MT="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cp=[],hp={allowDangerousHtml:!0},NT=/^(https?|ircs?|mailto|xmpp)$/i,LT=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function HT(a){const s=qT(a),r=OT(a);return RT(s.runSync(s.parse(r),r),a)}function qT(a){const s=a.rehypePlugins||cp,r=a.remarkPlugins||cp,l=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...hp}:hp;return ET().use(pw).use(r).use(cT,l).use(s)}function OT(a){const s=a.children||"",r=new Fp;return typeof s=="string"&&(r.value=s),r}function RT(a,s){const r=s.allowedElements,l=s.allowElement,h=s.components,u=s.disallowedElements,d=s.skipHtml,g=s.unwrapDisallowed,b=s.urlTransform||PT;for(const v of LT)Object.hasOwn(s,v.from)&&(""+v.from+(v.to?"use `"+v.to+"` instead":"remove it")+MT+v.id,void 0);return Xp(a,m),Xy(a,{Fragment:ge.Fragment,components:h,ignoreInvalidStyle:!0,jsx:ge.jsx,jsxs:ge.jsxs,passKeys:!0,passNode:!0});function m(v,w,A){if(v.type==="raw"&&A&&typeof w=="number")return d?A.children.splice(w,1):A.children[w]={type:"text",value:v.value},w;if(v.type==="element"){let T;for(T in ic)if(Object.hasOwn(ic,T)&&Object.hasOwn(v.properties,T)){const I=v.properties[T],P=ic[T];(P===null||P.includes(v.tagName))&&(v.properties[T]=b(String(I||""),T,v))}}if(v.type==="element"){let T=r?!r.includes(v.tagName):u?u.includes(v.tagName):!1;if(!T&&l&&typeof w=="number"&&(T=!l(v,w,A)),T&&A&&typeof w=="number")return g&&v.children?A.children.splice(w,1,...v.children):A.children.splice(w,1),w}}}function PT(a){const s=a.indexOf(":"),r=a.indexOf("?"),l=a.indexOf("#"),h=a.indexOf("/");return s===-1||h!==-1&&s>h||r!==-1&&s>r||l!==-1&&s>l||NT.test(a.slice(0,s))?a:""}function IT({row:a,rowc:s}){const r=({x:h})=>ge.jsxs("p",{children:[ge.jsxs("span",{style:{fontWeight:"bold",fontSize:20},children:[h,"."]})," ",a.options[h]]}),l=["A","B","C","D","E"];return ge.jsxs("div",{style:{border:"1px solid",borderRadius:20,padding:20,marginBottom:50,textAlign:"left",maxWidth:"600px"},children:[ge.jsx("h2",{children:"Question"}),ge.jsx("p",{children:a.question}),ge.jsx("h2",{children:"Options"}),l.map((h,u)=>ge.jsx(r,{x:h},u)),ge.jsx("div",{style:{border:"1px solid",width:"100%",marginTop:50,marginBottom:50}}),ge.jsx("h2",{children:"Response"}),ge.jsx(HT,{children:a.response}),ge.jsx("div",{style:{border:"1px solid",width:"100%",marginTop:50,marginBottom:50}}),ge.jsx("h2",{children:"Prediction"}),ge.jsx("p",{style:{fontWeight:"bold",fontSize:20},children:a.prediction}),ge.jsx("h2",{children:"Label"}),ge.jsx("p",{style:{fontWeight:"bold",fontSize:20},children:a.label}),ge.jsx("div",{style:{border:"1px solid",width:"100%",marginTop:50,marginBottom:50}}),ge.jsx("h2",{children:"GPT-4o"}),ge.jsx("h3",{children:"Explanation"}),ge.jsx("p",{children:s["gpt-4o"].explanation}),ge.jsx("h3",{children:"Category"}),ge.jsx("p",{children:s["gpt-4o"].category}),ge.jsx("div",{style:{border:"1px solid",width:"100%",marginTop:50,marginBottom:50}}),ge.jsx("h2",{children:"GPT-4o-mini"}),ge.jsx("h3",{children:"Explanation"}),ge.jsx("p",{children:s["gpt-4o-mini"].explanation}),ge.jsx("h3",{children:"Category"}),ge.jsx("p",{children:s["gpt-4o-mini"].category})]})}function _T(){const[a,s]=Ls.useState(0),[r,l]=Ls.useState("");Ls.useEffect(()=>{l((a+1).toString())},[a]);const h=u=>u>80?80:u<1?1:u;return ge.jsxs(ge.Fragment,{children:[ge.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:5},children:[ge.jsx("button",{onClick:()=>{s(a-1)},disabled:a<=0,style:{width:105},children:"Previous"}),ge.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",margin:"20px 40px 20px 40px"},children:[ge.jsx("input",{style:{border:"none",width:35,fontSize:16,textAlign:"right",marginRight:5},type:"number",value:r,onChange:u=>l(u.target.value),onKeyDown:u=>{u.key==="Enter"&&s(h(Number(r))-1)}}),ge.jsxs("p",{style:{},children:["/ ",ec.length]})]}),ge.jsx("button",{onClick:()=>{s(a+1)},disabled:a>=ec.length-1,style:{width:105},children:"Next"})]}),ge.jsx(IT,{row:ec[a],rowc:by[a]})]})}yy.createRoot(document.getElementById("root")).render(ge.jsx(Ls.StrictMode,{children:ge.jsx(_T,{})}));
