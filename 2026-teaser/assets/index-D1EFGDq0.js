(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Xf={exports:{}},Co={};var f0;function eS(){if(f0)return Co;f0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var d0;function nS(){return d0||(d0=1,Xf.exports=eS()),Xf.exports}var ua=nS(),kf={exports:{}},re={};var h0;function iS(){if(h0)return re;h0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(U,$,mt){this.props=U,this.context=$,this.refs=y,this.updater=mt||R}x.prototype.isReactComponent={},x.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function O(U,$,mt){this.props=U,this.context=$,this.refs=y,this.updater=mt||R}var N=O.prototype=new F;N.constructor=O,C(N,x.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function A(U,$,mt){var bt=mt.ref;return{$$typeof:o,type:U,key:$,ref:bt!==void 0?bt:null,props:mt}}function D(U,$){return A(U.type,$,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function rt(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(mt){return $[mt]})}var at=/\/+/g;function ft(U,$){return typeof U=="object"&&U!==null&&U.key!=null?rt(""+U.key):$.toString(36)}function lt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,$,mt,bt,Bt){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var ut=!1;if(U===null)ut=!0;else switch(J){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(U.$$typeof){case o:case e:ut=!0;break;case v:return ut=U._init,L(ut(U._payload),$,mt,bt,Bt)}}if(ut)return Bt=Bt(U),ut=bt===""?"."+ft(U,0):bt,z(Bt)?(mt="",ut!=null&&(mt=ut.replace(at,"$&/")+"/"),L(Bt,$,mt,"",function(Pt){return Pt})):Bt!=null&&(X(Bt)&&(Bt=D(Bt,mt+(Bt.key==null||U&&U.key===Bt.key?"":(""+Bt.key).replace(at,"$&/")+"/")+ut)),$.push(Bt)),1;ut=0;var At=bt===""?".":bt+":";if(z(U))for(var Nt=0;Nt<U.length;Nt++)bt=U[Nt],J=At+ft(bt,Nt),ut+=L(bt,$,mt,J,Bt);else if(Nt=E(U),typeof Nt=="function")for(U=Nt.call(U),Nt=0;!(bt=U.next()).done;)bt=bt.value,J=At+ft(bt,Nt++),ut+=L(bt,$,mt,J,Bt);else if(J==="object"){if(typeof U.then=="function")return L(lt(U),$,mt,bt,Bt);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ut}function I(U,$,mt){if(U==null)return U;var bt=[],Bt=0;return L(U,bt,"","",function(J){return $.call(mt,J,Bt++)}),bt}function tt(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(mt){(U._status===0||U._status===-1)&&(U._status=1,U._result=mt)},function(mt){(U._status===0||U._status===-1)&&(U._status=2,U._result=mt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var St=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:I,forEach:function(U,$,mt){I(U,function(){$.apply(this,arguments)},mt)},count:function(U){var $=0;return I(U,function(){$++}),$},toArray:function(U){return I(U,function($){return $})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=_,re.Children=xt,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,$,mt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var bt=C({},U.props),Bt=U.key;if($!=null)for(J in $.key!==void 0&&(Bt=""+$.key),$)!j.call($,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&$.ref===void 0||(bt[J]=$[J]);var J=arguments.length-2;if(J===1)bt.children=mt;else if(1<J){for(var ut=Array(J),At=0;At<J;At++)ut[At]=arguments[At+2];bt.children=ut}return A(U.type,Bt,bt)},re.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},re.createElement=function(U,$,mt){var bt,Bt={},J=null;if($!=null)for(bt in $.key!==void 0&&(J=""+$.key),$)j.call($,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Bt[bt]=$[bt]);var ut=arguments.length-2;if(ut===1)Bt.children=mt;else if(1<ut){for(var At=Array(ut),Nt=0;Nt<ut;Nt++)At[Nt]=arguments[Nt+2];Bt.children=At}if(U&&U.defaultProps)for(bt in ut=U.defaultProps,ut)Bt[bt]===void 0&&(Bt[bt]=ut[bt]);return A(U,J,Bt)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:h,render:U}},re.isValidElement=X,re.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:tt}},re.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},re.startTransition=function(U){var $=P.T,mt={};P.T=mt;try{var bt=U(),Bt=P.S;Bt!==null&&Bt(mt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(H,St)}catch(J){St(J)}finally{$!==null&&mt.types!==null&&($.types=mt.types),P.T=$}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(U){return P.H.use(U)},re.useActionState=function(U,$,mt){return P.H.useActionState(U,$,mt)},re.useCallback=function(U,$){return P.H.useCallback(U,$)},re.useContext=function(U){return P.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,$){return P.H.useDeferredValue(U,$)},re.useEffect=function(U,$){return P.H.useEffect(U,$)},re.useEffectEvent=function(U){return P.H.useEffectEvent(U)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(U,$,mt){return P.H.useImperativeHandle(U,$,mt)},re.useInsertionEffect=function(U,$){return P.H.useInsertionEffect(U,$)},re.useLayoutEffect=function(U,$){return P.H.useLayoutEffect(U,$)},re.useMemo=function(U,$){return P.H.useMemo(U,$)},re.useOptimistic=function(U,$){return P.H.useOptimistic(U,$)},re.useReducer=function(U,$,mt){return P.H.useReducer(U,$,mt)},re.useRef=function(U){return P.H.useRef(U)},re.useState=function(U){return P.H.useState(U)},re.useSyncExternalStore=function(U,$,mt){return P.H.useSyncExternalStore(U,$,mt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.3",re}var p0;function Sh(){return p0||(p0=1,kf.exports=iS()),kf.exports}var la=Sh(),Wf={exports:{}},Do={},qf={exports:{}},Yf={};var m0;function aS(){return m0||(m0=1,(function(o){function e(L,I){var tt=L.length;L.push(I);t:for(;0<tt;){var St=tt-1>>>1,xt=L[St];if(0<l(xt,I))L[St]=I,L[tt]=xt,tt=St;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var I=L[0],tt=L.pop();if(tt!==I){L[0]=tt;t:for(var St=0,xt=L.length,U=xt>>>1;St<U;){var $=2*(St+1)-1,mt=L[$],bt=$+1,Bt=L[bt];if(0>l(mt,tt))bt<xt&&0>l(Bt,mt)?(L[St]=Bt,L[bt]=tt,St=bt):(L[St]=mt,L[$]=tt,St=$);else if(bt<xt&&0>l(Bt,tt))L[St]=Bt,L[bt]=tt,St=bt;else break t}}return I}function l(L,I){var tt=L.sortIndex-I.sortIndex;return tt!==0?tt:L.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,E=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var I=i(p);I!==null;){if(I.callback===null)r(p);else if(I.startTime<=L)r(p),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(p)}}function z(L){if(C=!1,N(L),!R)if(i(m)!==null)R=!0,H||(H=!0,rt());else{var I=i(p);I!==null&&lt(z,I.startTime-L)}}var H=!1,P=-1,j=5,A=-1;function D(){return y?!0:!(o.unstable_now()-A<j)}function X(){if(y=!1,H){var L=o.unstable_now();A=L;var I=!0;try{t:{R=!1,C&&(C=!1,F(P),P=-1),E=!0;var tt=S;try{e:{for(N(L),_=i(m);_!==null&&!(_.expirationTime>L&&D());){var St=_.callback;if(typeof St=="function"){_.callback=null,S=_.priorityLevel;var xt=St(_.expirationTime<=L);if(L=o.unstable_now(),typeof xt=="function"){_.callback=xt,N(L),I=!0;break e}_===i(m)&&r(m),N(L)}else r(m);_=i(m)}if(_!==null)I=!0;else{var U=i(p);U!==null&&lt(z,U.startTime-L),I=!1}}break t}finally{_=null,S=tt,E=!1}I=void 0}}finally{I?rt():H=!1}}}var rt;if(typeof O=="function")rt=function(){O(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=X,rt=function(){ft.postMessage(null)}}else rt=function(){x(X,0)};function lt(L,I){P=x(function(){L(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var I=3;break;default:I=S}var tt=S;S=I;try{return L()}finally{S=tt}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var tt=S;S=L;try{return I()}finally{S=tt}},o.unstable_scheduleCallback=function(L,I,tt){var St=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?St+tt:St):tt=St,L){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=tt+xt,L={id:v++,callback:I,priorityLevel:L,startTime:tt,expirationTime:xt,sortIndex:-1},tt>St?(L.sortIndex=tt,e(p,L),i(m)===null&&L===i(p)&&(C?(F(P),P=-1):C=!0,lt(z,tt-St))):(L.sortIndex=xt,e(m,L),R||E||(R=!0,H||(H=!0,rt()))),L},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(L){var I=S;return function(){var tt=S;S=I;try{return L.apply(this,arguments)}finally{S=tt}}}})(Yf)),Yf}var g0;function rS(){return g0||(g0=1,qf.exports=aS()),qf.exports}var Zf={exports:{}},Cn={};var _0;function sS(){if(_0)return Cn;_0=1;var o=Sh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Cn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.2.3",Cn}var v0;function oS(){if(v0)return Zf.exports;v0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=sS(),Zf.exports}var x0;function lS(){if(x0)return Do;x0=1;var o=rS(),e=Sh(),i=oS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case O:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var lt=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function U(t){return{current:t}}function $(t){0>xt||(t.current=St[xt],St[xt]=null,xt--)}function mt(t,n){xt++,St[xt]=t.current,t.current=n}var bt=U(null),Bt=U(null),J=U(null),ut=U(null);function At(t,n){switch(mt(J,n),mt(Bt,t),mt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Og(n),t=Pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(bt),mt(bt,t)}function Nt(){$(bt),$(Bt),$(J)}function Pt(t){t.memoizedState!==null&&mt(ut,t);var n=bt.current,a=Pg(n,t.type);n!==a&&(mt(Bt,t),mt(bt,a))}function ee(t){Bt.current===t&&($(bt),$(Bt)),ut.current===t&&($(ut),To._currentValue=tt)}var Ve,he;function de(t){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+t+he}var ye=!1;function ie(t,n){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){nt=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var B=g.split(`
`),Q=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===Q.length)for(s=B.length-1,u=Q.length-1;1<=s&&0<=u&&B[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==Q[u]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function Ke(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return ie(t.type,!1);case 11:return ie(t.type.render,!1);case 1:return ie(t.type,!0);case 31:return de("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Ke(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ye=Object.prototype.hasOwnProperty,Se=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,qt=o.unstable_shouldYield,w=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Xt=o.log,te=o.unstable_setDisableYieldValue,yt=null,Et=null;function It(t){if(typeof Xt=="function"&&te(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(yt,t)}catch{}}var Ft=Math.clz32?Math.clz32:k,Dt=Math.log,le=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Dt(t)/le|0)|0}var Ut=256,Tt=262144,zt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Mt(s):(g&=T,g!==0?u=Mt(g):a||(a=T&~t,a!==0&&(u=Mt(a))))):(T=s&~f,T!==0?u=Mt(T):g!==0?u=Mt(g):a||(a=s&~t,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Ft(a),gt=1<<dt;T[dt]=0,B[dt]=-1;var nt=Q[dt];if(nt!==null)for(Q[dt]=null,dt=0;dt<nt.length;dt++){var ot=nt[dt];ot!==null&&(ot.lane&=-536870913)}a&=~gt}s!==0&&Zo(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Zo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ft(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ps(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ft(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function wr(t,n){var a=n&-n;return a=(a&42)!==0?1:Fs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Fs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ur(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zs(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:a0(t.type))}function bi(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var $n=Math.random().toString(36).slice(2),nn="__reactFiber$"+$n,gn="__reactProps$"+$n,hi="__reactContainer$"+$n,Lr="__reactEvents$"+$n,Nr="__reactListeners$"+$n,jo="__reactHandles$"+$n,Bs="__reactResources$"+$n,tr="__reactMarker$"+$n;function Is(t){delete t[nn],delete t[gn],delete t[Lr],delete t[Nr],delete t[jo]}function xa(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[hi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[nn])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[nn]||t[hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Bs];return n||(n=t[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(t){t[tr]=!0}var q=new Set,st={};function et(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},Lt={};function Gt(t){return Ye.call(Lt,t)?!0:Ye.call(Ht,t)?!1:wt.test(t)?Lt[t]=!0:(Ht[t]=!0,!1)}function kt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Qt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){if(!t._valueTracker){var n=Ce(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Le(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ce(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var De=/[\n"\\]/g;function ae(t){return t.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _n(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jt(n)):t.value!==""+Jt(n)&&(t.value=""+Jt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?vn(t,g,Jt(n)):a!=null?vn(t,g,Jt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Jt(T):t.removeAttribute("name")}function Ii(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(t);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ke(t)}function vn(t,n,a){n==="number"&&jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ti(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+Jt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Jt(a):""}function xn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Jt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ke(t)}function cn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Sn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Sn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Or(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Mn(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Mn(t,f,n[f])}function pi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return J_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Iu=null;function Hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,Fr=null;function Nh(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(_n(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[gn]||null;if(!u)throw Error(r(90));_n(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Le(s)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(t,!!a.multiple,n,!1)}}}var Gu=!1;function Oh(t,n,a){if(Gu)return t(n,a);Gu=!0;try{var s=t(n);return s}finally{if(Gu=!1,(Pr!==null||Fr!==null)&&(zl(),Pr&&(n=Pr,t=Fr,Fr=Pr=null,Nh(n),t)))for(n=0;n<t.length;n++)Nh(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(Gi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Vu=!1}var ya=null,Xu=null,Qo=null;function Ph(){if(Qo)return Qo;var t,n=Xu,a=n.length,s,u="value"in ya?ya.value:ya.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Qo=u.slice(t,1<s?1-s:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Fh(){return!1}function Pn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Fh,this.isPropagationStopped=Fh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Pn(nr),Vs=_({},nr,{view:0,detail:0}),$_=Pn(Vs),ku,Wu,Xs,el=_({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(ku=t.screenX-Xs.screenX,Wu=t.screenY-Xs.screenY):Wu=ku=0,Xs=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),zh=Pn(el),tv=_({},el,{dataTransfer:0}),ev=Pn(tv),nv=_({},Vs,{relatedTarget:0}),qu=Pn(nv),iv=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Pn(iv),rv=_({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sv=Pn(rv),ov=_({},nr,{data:0}),Bh=Pn(ov),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=cv[t])?!!n[t]:!1}function Yu(){return fv}var dv=_({},Vs,{key:function(t){if(t.key){var n=lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hv=Pn(dv),pv=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=Pn(pv),mv=_({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),gv=Pn(mv),_v=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=Pn(_v),xv=_({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=Pn(xv),Mv=_({},nr,{newState:0,oldState:0}),yv=Pn(Mv),Ev=[9,13,27,32],Zu=Gi&&"CompositionEvent"in window,ks=null;Gi&&"documentMode"in document&&(ks=document.documentMode);var Tv=Gi&&"TextEvent"in window&&!ks,Hh=Gi&&(!Zu||ks&&8<ks&&11>=ks),Gh=" ",Vh=!1;function Xh(t,n){switch(t){case"keyup":return Ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function bv(t,n){switch(t){case"compositionend":return kh(n);case"keypress":return n.which!==32?null:(Vh=!0,Gh);case"textInput":return t=n.data,t===Gh&&Vh?null:t;default:return null}}function Av(t,n){if(zr)return t==="compositionend"||!Zu&&Xh(t,n)?(t=Ph(),Qo=Xu=ya=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hh&&n.locale!=="ko"?null:n.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rv[t.type]:n==="textarea"}function qh(t,n,a,s){Pr?Fr?Fr.push(s):Fr=[s]:Pr=s,n=kl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function Cv(t){Cg(t,0)}function nl(t){var n=er(t);if(Le(n))return t}function Yh(t,n){if(t==="change")return n}var Zh=!1;if(Gi){var ju;if(Gi){var Ku="oninput"in document;if(!Ku){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),Ku=typeof jh.oninput=="function"}ju=Ku}else ju=!1;Zh=ju&&(!document.documentMode||9<document.documentMode)}function Kh(){Ws&&(Ws.detachEvent("onpropertychange",Qh),qs=Ws=null)}function Qh(t){if(t.propertyName==="value"&&nl(qs)){var n=[];qh(n,qs,t,Hu(t)),Oh(Cv,n)}}function Dv(t,n,a){t==="focusin"?(Kh(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",Qh)):t==="focusout"&&Kh()}function wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(qs)}function Uv(t,n){if(t==="click")return nl(n)}function Lv(t,n){if(t==="input"||t==="change")return nl(n)}function Nv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Nv;function Ys(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ye.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,n){var a=Jh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jh(a)}}function tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=jt(t.document)}return n}function Qu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ov=Gi&&"documentMode"in document&&11>=document.documentMode,Br=null,Ju=null,Zs=null,$u=!1;function np(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$u||Br==null||Br!==jt(s)||(s=Br,"selectionStart"in s&&Qu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Zs&&Ys(Zs,s)||(Zs=s,s=kl(Ju,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Br)))}function ir(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},tc={},ip={};Gi&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function ar(t){if(tc[t])return tc[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return tc[t]=n[a];return t}var ap=ar("animationend"),rp=ar("animationiteration"),sp=ar("animationstart"),Pv=ar("transitionrun"),Fv=ar("transitionstart"),zv=ar("transitioncancel"),op=ar("transitionend"),lp=new Map,ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ec.push("scrollEnd");function mi(t,n){lp.set(t,n),et(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Hr=0,nc=0;function al(){for(var t=Hr,n=nc=Hr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&up(a,u,f)}}function rl(t,n,a,s){ei[Hr++]=t,ei[Hr++]=n,ei[Hr++]=a,ei[Hr++]=s,nc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ic(t,n,a,s){return rl(t,n,a,s),sl(t)}function rr(t,n){return rl(t,null,null,n),sl(t)}function up(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ft(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function sl(t){if(50<_o)throw _o=0,hf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function Bv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new Bv(t,n,a,s)}function ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")ac(t)&&(g=1);else if(typeof t=="string")g=Xx(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=kn(31,a,n,u),t.elementType=A,t.lanes=f,t;case C:return sr(a.children,u,f,n);case y:g=8,u|=24;break;case x:return t=kn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=kn(13,a,n,u),t.elementType=z,t.lanes=f,t;case H:return t=kn(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case F:g=9;break t;case N:g=11;break t;case P:g=14;break t;case j:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function rc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function fp(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function sc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},dp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Vr=[],Xr=0,ll=null,js=0,ii=[],ai=0,Ea=null,Ai=1,Ri="";function Xi(t,n){Vr[Xr++]=js,Vr[Xr++]=ll,ll=t,js=n}function hp(t,n,a){ii[ai++]=Ai,ii[ai++]=Ri,ii[ai++]=Ea,Ea=t;var s=Ai;t=Ri;var u=32-Ft(s)-1;s&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ai=1<<32-Ft(n)+u|a<<u|s,Ri=f+t}else Ai=1<<f|a<<u|s,Ri=t}function oc(t){t.return!==null&&(Xi(t,1),hp(t,1,0))}function lc(t){for(;t===ll;)ll=Vr[--Xr],Vr[Xr]=null,js=Vr[--Xr],Vr[Xr]=null;for(;t===Ea;)Ea=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null,Ai=ii[--ai],ii[ai]=null}function pp(t,n){ii[ai++]=Ai,ii[ai++]=Ri,ii[ai++]=Ea,Ai=n.id,Ri=n.overflow,Ea=t}var yn=null,We=null,ve=!1,Ta=null,ri=!1,uc=Error(r(519));function ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ni(n,t)),uc}function mp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nn]=t,n[gn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)me(xo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Ii(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),xn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Lg(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||ba(t,!0)}function gp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function kr(t){if(t!==yn)return!1;if(!ve)return gp(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cf(t.type,t.memoizedProps)),a=!a),a&&We&&ba(t),gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=Gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=Gg(t)}else n===27?(n=We,Ia(t.type)?(t=Nf,Nf=null,We=t):We=n):We=yn?oi(t.stateNode.nextSibling):null;return!0}function or(){We=yn=null,ve=!1}function cc(){var t=Ta;return t!==null&&(In===null?In=t:In.push.apply(In,t),Ta=null),t}function Ks(t){Ta===null?Ta=[t]:Ta.push(t)}var fc=U(null),lr=null,ki=null;function Aa(t,n,a){mt(fc,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=fc.current,$(fc)}function dc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function hc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),dc(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),dc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Wr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;Xn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===ut.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}u=u.return}t!==null&&hc(n,t,a,s),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){lr=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return _p(lr,t)}function cl(t,n){return lr===null&&ur(t),_p(t,n)}function _p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var Iv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Hv=o.unstable_scheduleCallback,Gv=o.unstable_NormalPriority,an={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pc(){return{controller:new Iv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&Hv(Gv,function(){t.controller.abort()})}var Js=null,mc=0,qr=0,Yr=null;function Vv(t,n){if(Js===null){var a=Js=[];mc=0,qr=xf(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return mc++,n.then(vp,vp),n}function vp(){if(--mc===0&&Js!==null){Yr!==null&&(Yr.status="fulfilled");var t=Js;Js=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Xv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var xp=L.S;L.S=function(t,n){ng=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vv(t,n),xp!==null&&xp(t,n)};var cr=U(null);function gc(){var t=cr.current;return t!==null?t:Xe.pooledCache}function fl(t,n){n===null?mt(cr,cr.current):mt(cr,n.pool)}function Sp(){var t=gc();return t===null?null:{parent:an._currentValue,pool:t}}var Zr=Error(r(460)),_c=Error(r(474)),dl=Error(r(542)),hl={then:function(){}};function Mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t}throw dr=n,Zr}}function fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,Zr):a}}var dr=null;function Ep(){if(dr===null)throw Error(r(459));var t=dr;return dr=null,t}function Tp(t){if(t===Zr||t===dl)throw Error(r(483))}var jr=null,$s=0;function pl(t){var n=$s;return $s+=1,jr===null&&(jr=[]),yp(jr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bp(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Vi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,K,pt){return V===null||V.tag!==6?(V=rc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function B(Y,V,K,pt){var Kt=K.type;return Kt===C?dt(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&fr(Kt)===V.type)?(V=u(V,K.props),to(V,K),V.return=Y,V):(V=ol(K.type,K.key,K.props,null,Y.mode,pt),to(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=sc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K.children||[]),V.return=Y,V)}function dt(Y,V,K,pt,Kt){return V===null||V.tag!==7?(V=sr(K,Y.mode,pt,Kt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function gt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=rc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=ol(V.type,V.key,V.props,null,Y.mode,K),to(K,V),K.return=Y,K;case R:return V=sc(V,Y.mode,K),V.return=Y,V;case j:return V=fr(V),gt(Y,V,K)}if(lt(V)||rt(V))return V=sr(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,pl(V),K);if(V.$$typeof===O)return gt(Y,cl(Y,V),K);ml(Y,V)}return null}function nt(Y,V,K,pt){var Kt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Kt!==null?null:T(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Kt?B(Y,V,K,pt):null;case R:return K.key===Kt?Q(Y,V,K,pt):null;case j:return K=fr(K),nt(Y,V,K,pt)}if(lt(K)||rt(K))return Kt!==null?null:dt(Y,V,K,pt,null);if(typeof K.then=="function")return nt(Y,V,pl(K),pt);if(K.$$typeof===O)return nt(Y,V,cl(Y,K),pt);ml(Y,K)}return null}function ot(Y,V,K,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(V,Y,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?K:pt.key)||null,B(V,Y,pt,Kt);case R:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,Kt);case j:return pt=fr(pt),ot(Y,V,K,pt,Kt)}if(lt(pt)||rt(pt))return Y=Y.get(K)||null,dt(V,Y,pt,Kt,null);if(typeof pt.then=="function")return ot(Y,V,K,pl(pt),Kt);if(pt.$$typeof===O)return ot(Y,V,K,cl(V,pt),Kt);ml(V,pt)}return null}function Vt(Y,V,K,pt){for(var Kt=null,be=null,Yt=V,ue=V=0,_e=null;Yt!==null&&ue<K.length;ue++){Yt.index>ue?(_e=Yt,Yt=null):_e=Yt.sibling;var Ae=nt(Y,Yt,K[ue],pt);if(Ae===null){Yt===null&&(Yt=_e);break}t&&Yt&&Ae.alternate===null&&n(Y,Yt),V=f(Ae,V,ue),be===null?Kt=Ae:be.sibling=Ae,be=Ae,Yt=_e}if(ue===K.length)return a(Y,Yt),ve&&Xi(Y,ue),Kt;if(Yt===null){for(;ue<K.length;ue++)Yt=gt(Y,K[ue],pt),Yt!==null&&(V=f(Yt,V,ue),be===null?Kt=Yt:be.sibling=Yt,be=Yt);return ve&&Xi(Y,ue),Kt}for(Yt=s(Yt);ue<K.length;ue++)_e=ot(Yt,Y,ue,K[ue],pt),_e!==null&&(t&&_e.alternate!==null&&Yt.delete(_e.key===null?ue:_e.key),V=f(_e,V,ue),be===null?Kt=_e:be.sibling=_e,be=_e);return t&&Yt.forEach(function(ka){return n(Y,ka)}),ve&&Xi(Y,ue),Kt}function $t(Y,V,K,pt){if(K==null)throw Error(r(151));for(var Kt=null,be=null,Yt=V,ue=V=0,_e=null,Ae=K.next();Yt!==null&&!Ae.done;ue++,Ae=K.next()){Yt.index>ue?(_e=Yt,Yt=null):_e=Yt.sibling;var ka=nt(Y,Yt,Ae.value,pt);if(ka===null){Yt===null&&(Yt=_e);break}t&&Yt&&ka.alternate===null&&n(Y,Yt),V=f(ka,V,ue),be===null?Kt=ka:be.sibling=ka,be=ka,Yt=_e}if(Ae.done)return a(Y,Yt),ve&&Xi(Y,ue),Kt;if(Yt===null){for(;!Ae.done;ue++,Ae=K.next())Ae=gt(Y,Ae.value,pt),Ae!==null&&(V=f(Ae,V,ue),be===null?Kt=Ae:be.sibling=Ae,be=Ae);return ve&&Xi(Y,ue),Kt}for(Yt=s(Yt);!Ae.done;ue++,Ae=K.next())Ae=ot(Yt,Y,ue,Ae.value,pt),Ae!==null&&(t&&Ae.alternate!==null&&Yt.delete(Ae.key===null?ue:Ae.key),V=f(Ae,V,ue),be===null?Kt=Ae:be.sibling=Ae,be=Ae);return t&&Yt.forEach(function(tS){return n(Y,tS)}),ve&&Xi(Y,ue),Kt}function He(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Kt=K.key;V!==null;){if(V.key===Kt){if(Kt=K.type,Kt===C){if(V.tag===7){a(Y,V.sibling),pt=u(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&fr(Kt)===V.type){a(Y,V.sibling),pt=u(V,K.props),to(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===C?(pt=sr(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=ol(K.type,K.key,K.props,null,Y.mode,pt),to(pt,K),pt.return=Y,Y=pt)}return g(Y);case R:t:{for(Kt=K.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=u(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=sc(K,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case j:return K=fr(K),He(Y,V,K,pt)}if(lt(K))return Vt(Y,V,K,pt);if(rt(K)){if(Kt=rt(K),typeof Kt!="function")throw Error(r(150));return K=Kt.call(K),$t(Y,V,K,pt)}if(typeof K.then=="function")return He(Y,V,pl(K),pt);if(K.$$typeof===O)return He(Y,V,cl(Y,K),pt);ml(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=rc(K,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):a(Y,V)}return function(Y,V,K,pt){try{$s=0;var Kt=He(Y,V,K,pt);return jr=null,Kt}catch(Yt){if(Yt===Zr||Yt===dl)throw Yt;var be=kn(29,Yt,null,Y.mode);return be.lanes=pt,be.return=Y,be}}}var hr=bp(!0),Ap=bp(!1),Ra=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=sl(t),up(t,null,a),n}return rl(t,s,n,a),sl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}function Sc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mc=!1;function no(){if(Mc){var t=Yr;if(t!==null)throw t}}function io(t,n,a,s){Mc=!1;var u=t.updateQueue;Ra=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,Q=B.next;B.next=null,g===null?f=Q:g.next=Q,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==g&&(T===null?dt.firstBaseUpdate=Q:T.next=Q,dt.lastBaseUpdate=B))}if(f!==null){var gt=u.baseState;g=0,dt=Q=B=null,T=f;do{var nt=T.lane&-536870913,ot=nt!==T.lane;if(ot?(ge&nt)===nt:(s&nt)===nt){nt!==0&&nt===qr&&(Mc=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,$t=T;nt=n;var He=a;switch($t.tag){case 1:if(Vt=$t.payload,typeof Vt=="function"){gt=Vt.call(He,gt,nt);break t}gt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=$t.payload,nt=typeof Vt=="function"?Vt.call(He,gt,nt):Vt,nt==null)break t;gt=_({},gt,nt);break t;case 2:Ra=!0}}nt=T.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(Q=dt=ot,B=gt):dt=dt.next=ot,g|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);dt===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=Q,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Oa|=g,t.lanes=g,t.memoizedState=gt}}function Rp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Cp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rp(a[t],n)}var Kr=U(null),gl=U(0);function Dp(t,n){t=ta,mt(gl,t),mt(Kr,n),ta=t|n.baseLanes}function yc(){mt(gl,ta),mt(Kr,Kr.current)}function Ec(){ta=gl.current,$(Kr),$(gl)}var Wn=U(null),si=null;function wa(t){var n=t.alternate;mt($e,$e.current&1),mt(Wn,t),si===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(si=t)}function Tc(t){mt($e,$e.current),mt(Wn,t),si===null&&(si=t)}function wp(t){t.tag===22?(mt($e,$e.current),mt(Wn,t),si===null&&(si=t)):Ua()}function Ua(){mt($e,$e.current),mt(Wn,Wn.current)}function qn(t){$(Wn),si===t&&(si=null),$($e)}var $e=U(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Lf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,oe=null,Be=null,rn=null,vl=!1,Qr=!1,pr=!1,xl=0,ao=0,Jr=null,kv=0;function Qe(){throw Error(r(321))}function bc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Ac(t,n,a,s,u,f){return qi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?hm:Gc,pr=!1,f=a(s,u),pr=!1,Qr&&(f=Lp(n,a,s,u)),Up(t),f}function Up(t){L.H=oo;var n=Be!==null&&Be.next!==null;if(qi=0,rn=Be=oe=null,vl=!1,ao=0,Jr=null,n)throw Error(r(300));t===null||sn||(t=t.dependencies,t!==null&&ul(t)&&(sn=!0))}function Lp(t,n,a,s){oe=t;var u=0;do{if(Qr&&(Jr=null),ao=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,rn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=pm,f=n(a,s)}while(Qr);return f}function Wv(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(oe.flags|=1024),n}function Rc(){var t=xl!==0;return xl=0,t}function Cc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Dc(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}qi=0,rn=Be=oe=null,Qr=!1,ao=xl=0,Jr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?oe.memoizedState=rn=t:rn=rn.next=t,rn}function tn(){if(Be===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=rn===null?oe.memoizedState:rn.next;if(n!==null)rn=n,Be=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},rn===null?oe.memoizedState=rn=t:rn=rn.next=t}return rn}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,Jr===null&&(Jr=[]),t=yp(Jr,t,n),n=oe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?hm:Gc),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===O)return En(t)}throw Error(r(438,String(t)))}function wc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=tn();return Uc(n,Be,t)}function Uc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,B=null,Q=n,dt=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(ge&gt)===gt:(qi&gt)===gt){var nt=Q.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===qr&&(dt=!0);else if((qi&nt)===nt){Q=Q.next,nt===qr&&(dt=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(T=B=gt,g=f):B=B.next=gt,oe.lanes|=nt,Oa|=nt;gt=Q.action,pr&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else nt={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(T=B=nt,g=f):B=B.next=nt,oe.lanes|=gt,Oa|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?g=f:B.next=T,!Xn(f,t.memoizedState)&&(sn=!0,dt&&(a=Yr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Lc(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Xn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Np(t,n,a){var s=oe,u=tn(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Xn((Be||u).memoizedState,a);if(g&&(u.memoizedState=a,sn=!0),u=u.queue,Pc(Fp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},Pp.bind(null,s,u,a,n),null),Xe===null)throw Error(r(349));f||(qi&127)!==0||Op(s,n,a)}return a}function Op(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Sl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pp(t,n,a,s){n.value=a,n.getSnapshot=s,zp(n)&&Bp(t)}function Fp(t,n,a){return a(function(){zp(n)&&Bp(t)})}function zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Bp(t){var n=rr(t,2);n!==null&&Hn(n,t,2)}function Nc(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),pr){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function Ip(t,n,a,s){return t.baseState=a,Uc(t,Be,typeof s=="function"?s:Yi)}function qv(t,n,a,s,u){if(bl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var T=a(u,s),B=L.S;B!==null&&B(g,T),Gp(t,n,T)}catch(Q){Oc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(u,s),Gp(t,n,f)}catch(Q){Oc(t,n,Q)}}function Gp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Vp(t,n,s)},function(s){return Oc(t,n,s)}):Vp(t,n,a)}function Vp(t,n,a){n.status="fulfilled",n.value=a,Xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Hp(t,a)))}function Oc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==s)}t.action=null}function Xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function kp(t,n){return n}function Wp(t,n){if(ve){var a=Xe.formState;if(a!==null){t:{var s=oe;if(ve){if(We){e:{for(var u=We,f=ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=oi(u.nextSibling),s=u.data==="F!";break t}}ba(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=s,a=cm.bind(null,oe,s),s.dispatch=a,s=Nc(!1),f=Hc.bind(null,oe,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=qv.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function qp(t){var n=tn();return Yp(n,Be,t)}function Yp(t,n,a){if(n=Uc(t,n,kp)[0],t=yl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(g){throw g===Zr?dl:g}else s=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,$r(9,{destroy:void 0},Yv.bind(null,u,a),null)),[s,f,t]}function Yv(t,n){t.action=n}function Zp(t){var n=tn(),a=Be;if(a!==null)return Yp(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $r(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Sl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function jp(){return tn().memoizedState}function El(t,n,a,s){var u=Ln();oe.flags|=t,u.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(t,n,a,s){var u=tn();s=s===void 0?null:s;var f=u.memoizedState.inst;Be!==null&&s!==null&&bc(s,Be.memoizedState.deps)?u.memoizedState=$r(n,f,a,s):(oe.flags|=t,u.memoizedState=$r(1|n,f,a,s))}function Kp(t,n){El(8390656,8,t,n)}function Pc(t,n){Tl(2048,8,t,n)}function Zv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Sl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Qp(t){var n=tn().memoizedState;return Zv({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Jp(t,n){return Tl(4,2,t,n)}function $p(t,n){return Tl(4,4,t,n)}function tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function em(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,tm.bind(null,n,t),a)}function Fc(){}function nm(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function im(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bc(n,s[1]))return s[0];if(s=t(),pr){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[s,n],s}function zc(t,n,a){return a===void 0||(qi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ag(),oe.lanes|=t,Oa|=t,a)}function am(t,n,a,s){return Xn(a,n)?a:Kr.current!==null?(t=zc(t,a,s),Xn(t,n)||(sn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(ge&261930)===0?(sn=!0,t.memoizedState=a):(t=ag(),oe.lanes|=t,Oa|=t,n)}function rm(t,n,a,s,u){var f=I.p;I.p=f!==0&&8>f?f:8;var g=L.T,T={};L.T=T,Hc(t,!1,n,a);try{var B=u(),Q=L.S;if(Q!==null&&Q(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Xv(B,s);so(t,n,dt,jn(t))}else so(t,n,s,jn(t))}catch(gt){so(t,n,{then:function(){},status:"rejected",reason:gt},jn())}finally{I.p=f,g!==null&&T.types!==null&&(g.types=T.types),L.T=g}}function jv(){}function Bc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=sm(t).queue;rm(t,u,n,tt,a===null?jv:function(){return om(t),a(s)})}function sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function om(t){var n=sm(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},jn())}function Ic(){return En(To)}function lm(){return tn().memoizedState}function um(){return tn().memoizedState}function Kv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=Ca(a);var s=Da(n,t,a);s!==null&&(Hn(s,n,a),eo(s,n,a)),n={cache:pc()},t.payload=n;return}n=n.return}}function Qv(t,n,a){var s=jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?fm(n,a):(a=ic(t,n,a,s),a!==null&&(Hn(a,t,s),dm(a,n,s)))}function cm(t,n,a){var s=jn();so(t,n,a,s)}function so(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))fm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,g))return rl(t,n,u,0),Xe===null&&al(),!1}catch{}if(a=ic(t,n,u,s),a!==null)return Hn(a,t,s),dm(a,n,s),!0}return!1}function Hc(t,n,a,s){if(s={lane:2,revertLane:xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(n)throw Error(r(479))}else n=ic(t,a,s,2),n!==null&&Hn(n,t,2)}function bl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function fm(t,n){Qr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function dm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}var oo={readContext:En,use:Ml,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};oo.useEffectEvent=Qe;var hm={readContext:En,use:Ml,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:Kp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(pr){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(pr){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Qv.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Nc(t);var n=t.queue,a=cm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fc,useDeferredValue:function(t,n){var a=Ln();return zc(a,t,n)},useTransition:function(){var t=Nc(!1);return t=rm.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=Ln();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ge&127)!==0||Op(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Kp(Fp.bind(null,s,f,t),[t]),s.flags|=2048,$r(9,{destroy:void 0},Pp.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Xe.identifierPrefix;if(ve){var a=Ri,s=Ai;a=(s&~(1<<32-Ft(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ic,useFormState:Wp,useActionState:Wp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hc.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:wc,useCacheRefresh:function(){return Ln().memoizedState=Kv.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gc={readContext:En,use:Ml,useCallback:nm,useContext:En,useEffect:Pc,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:yl,useRef:jp,useState:function(){return yl(Yi)},useDebugValue:Fc,useDeferredValue:function(t,n){var a=tn();return am(a,Be.memoizedState,t,n)},useTransition:function(){var t=yl(Yi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Ic,useFormState:qp,useActionState:qp,useOptimistic:function(t,n){var a=tn();return Ip(a,Be,t,n)},useMemoCache:wc,useCacheRefresh:um};Gc.useEffectEvent=Qp;var pm={readContext:En,use:Ml,useCallback:nm,useContext:En,useEffect:Pc,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:Lc,useRef:jp,useState:function(){return Lc(Yi)},useDebugValue:Fc,useDeferredValue:function(t,n){var a=tn();return Be===null?zc(a,t,n):am(a,Be.memoizedState,t,n)},useTransition:function(){var t=Lc(Yi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Ic,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=tn();return Be!==null?Ip(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wc,useCacheRefresh:um};pm.useEffectEvent=Qp;function Vc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=jn(),u=Ca(s);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,s),n!==null&&(Hn(n,t,s),eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=jn(),u=Ca(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,s),n!==null&&(Hn(n,t,s),eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=Da(t,s,a),n!==null&&(Hn(n,t,a),eo(n,t,a))}};function mm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(u,f):!0}function gm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Xc.enqueueReplaceState(n,n.state,null)}function mr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function _m(t){il(t)}function vm(t){console.error(t)}function xm(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Sm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function kc(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function Mm(t){return t=Ca(t),t.tag=3,t}function ym(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Sm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Sm(n,a,s),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Jv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Bl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(t,s,u)),!1;case 22:return a.flags|=65536,s===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(t,s,u)),!1}throw Error(r(435,a.tag))}return gf(t,s,u),Bl(),!1}if(ve)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==uc&&(t=Error(r(422),{cause:s}),Ks(ni(t,a)))):(s!==uc&&(n=Error(r(423),{cause:s}),Ks(ni(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ni(s,a),u=kc(t.stateNode,s,u),Sc(t,u),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),go===null?go=[f]:go.push(f),Je!==4&&(Je=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=kc(a.stateNode,s,t),Sc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Mm(u),ym(u,t,a,s),Sc(a,u),!1}a=a.return}while(a!==null);return!1}var Wc=Error(r(461)),sn=!1;function Tn(t,n,a,s){n.child=t===null?Ap(n,null,a,s):hr(n,t.child,a,s)}function Em(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return ur(n),s=Ac(t,n,a,g,f,u),T=Rc(),t!==null&&!sn?(Cc(t,n,u),Zi(t,n,u)):(ve&&T&&oc(n),n.flags|=1,Tn(t,n,s,u),n.child)}function Tm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!ac(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(t,n,f,s,u)):(t=ol(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!$c(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&t.ref===n.ref)return Zi(t,n,u)}return n.flags|=1,t=Vi(f,s),t.ref=n.ref,t.return=n,n.child=t}function bm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ys(f,s)&&t.ref===n.ref)if(sn=!1,n.pendingProps=s=f,$c(t,u))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,Zi(t,n,u)}return qc(t,n,a,s,u)}function Am(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Rm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Dp(n,f):yc(),wp(n);else return s=n.lanes=536870912,Rm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(fl(n,f.cachePool),Dp(n,f),Ua(),n.memoizedState=null):(t!==null&&fl(n,null),yc(),Ua());return Tn(t,n,u,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rm(t,n,a,s,u){var f=gc();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),yc(),wp(n),t!==null&&Wr(t,n,s,!0),n.childLanes=u,null}function Rl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Cm(t,n,a){return hr(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,qn(n),n.memoizedState=null,t}function $v(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=Rl(n,s),n.lanes=536870912,lo(null,t);if(Tc(n),(t=We)?(t=Hg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,yn=n,We=null)):t=null,t===null)throw ba(n);return n.lanes=536870912,null}return Rl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Tc(n),u)if(n.flags&256)n.flags&=-257,n=Cm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(sn||Wr(t,n,a,!1),u=(a&t.childLanes)!==0,sn||u){if(s=Xe,s!==null&&(g=wr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rr(t,g),Hn(s,t,g),Wc;Bl(),n=Cm(t,n,a)}else t=f.treeContext,We=oi(g.nextSibling),yn=n,ve=!0,Ta=null,ri=!1,t!==null&&pp(n,t),n=Rl(n,s),n.flags|=4096;return n}return t=Vi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qc(t,n,a,s,u){return ur(n),a=Ac(t,n,a,s,void 0,u),s=Rc(),t!==null&&!sn?(Cc(t,n,u),Zi(t,n,u)):(ve&&s&&oc(n),n.flags|=1,Tn(t,n,a,u),n.child)}function Dm(t,n,a,s,u,f){return ur(n),n.updateQueue=null,a=Lp(n,s,a,u),Up(t),s=Rc(),t!==null&&!sn?(Cc(t,n,f),Zi(t,n,f)):(ve&&s&&oc(n),n.flags|=1,Tn(t,n,a,f),n.child)}function wm(t,n,a,s,u){if(ur(n),n.stateNode===null){var f=Gr,g=a.contextType;typeof g=="object"&&g!==null&&(f=En(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},vc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?En(g):Gr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Vc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Xc.enqueueReplaceState(f,f.state,null),io(n,s,f,u),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=mr(a,T);f.props=B;var Q=f.context,dt=a.contextType;g=Gr,typeof dt=="object"&&dt!==null&&(g=En(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==g)&&gm(n,f,s,g),Ra=!1;var nt=n.memoizedState;f.state=nt,io(n,s,f,u),no(),Q=n.memoizedState,T||nt!==Q||Ra?(typeof gt=="function"&&(Vc(n,a,gt,s),Q=n.memoizedState),(B=Ra||mm(n,a,B,s,nt,Q,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,xc(t,n),g=n.memoizedProps,dt=mr(a,g),f.props=dt,gt=n.pendingProps,nt=f.context,Q=a.contextType,B=Gr,typeof Q=="object"&&Q!==null&&(B=En(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||nt!==B)&&gm(n,f,s,B),Ra=!1,nt=n.memoizedState,f.state=nt,io(n,s,f,u),no();var ot=n.memoizedState;g!==gt||nt!==ot||Ra||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof T=="function"&&(Vc(n,a,T,s),ot=n.memoizedState),(dt=Ra||mm(n,a,dt,s,nt,ot,B)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Cl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=hr(n,t.child,null,u),n.child=hr(n,null,a,u)):Tn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Zi(t,n,u),t}function Um(t,n,a,s){return or(),n.flags|=256,Tn(t,n,a,s),n.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zc(t){return{baseLanes:t,cachePool:Sp()}}function jc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function Lm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?wa(n):Ua(),(t=We)?(t=Hg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,yn=n,We=null)):t=null,t===null)throw ba(n);return Lf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Ua(),u=n.mode,T=Dl({mode:"hidden",children:T},u),s=sr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Zc(a),s.childLanes=jc(t,g,a),n.memoizedState=Yc,lo(null,s)):(wa(n),Kc(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(wa(n),n.flags&=-257,n=Qc(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),T=s.fallback,u=n.mode,s=Dl({mode:"visible",children:s.children},u),T=sr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,hr(n,t.child,null,a),s=n.child,s.memoizedState=Zc(a),s.childLanes=jc(t,g,a),n.memoizedState=Yc,n=lo(null,s));else if(wa(n),Lf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Ks({value:s,source:null,stack:null}),n=Qc(t,n,a)}else if(sn||Wr(t,n,a,!1),g=(a&t.childLanes)!==0,sn||g){if(g=Xe,g!==null&&(s=wr(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,rr(t,s),Hn(g,t,s),Wc;Uf(T)||Bl(),n=Qc(t,n,a)}else Uf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,We=oi(T.nextSibling),yn=n,ve=!0,Ta=null,ri=!1,t!==null&&pp(n,t),n=Kc(n,s.children),n.flags|=4096);return n}return u?(Ua(),T=s.fallback,u=n.mode,B=t.child,Q=B.sibling,s=Vi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,Q!==null?T=Vi(Q,T):(T=sr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,lo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=Zc(a):(u=T.cachePool,u!==null?(B=an._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Sp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=jc(t,g,a),n.memoizedState=Yc,lo(t.child,s)):(wa(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Kc(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function Qc(t,n,a){return hr(n,t.child,null,a),t=Kc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Nm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),dc(t.return,n,a)}function Jc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Om(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=$e.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,mt($e,g),Tn(t,n,s,a),s=ve?js:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,a,n);else if(t.tag===19)Nm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Jc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&_l(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Jc(n,!0,a,null,f,s);break;case"together":Jc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $c(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function tx(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Aa(n,an,t.memoizedState.cache),or();break;case 27:case 5:Pt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lm(t,n,a):(wa(n),t=Zi(t,n,a),t!==null?t.sibling:null);wa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Om(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt($e,$e.current),s)break;return null;case 22:return n.lanes=0,Am(t,n,a,n.pendingProps);case 24:Aa(n,an,t.memoizedState.cache)}return Zi(t,n,a)}function Pm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!$c(t,a)&&(n.flags&128)===0)return sn=!1,tx(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,ve&&(n.flags&1048576)!==0&&hp(n,js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=fr(n.elementType),n.type=t,typeof t=="function")ac(t)?(s=mr(t,s),n.tag=1,n=wm(null,n,t,s,a)):(n.tag=0,n=qc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Em(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=Tm(null,n,t,s,a);break t}}throw n=ft(t)||t,Error(r(306,n,""))}}return n;case 0:return qc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=mr(s,n.pendingProps),wm(t,n,s,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,xc(t,n),io(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Aa(n,an,s),s!==f.cache&&hc(n,[an],a,!0),no(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Um(t,n,s,a);break t}else if(s!==u){u=ni(Error(r(424)),n),Ks(u),n=Um(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=oi(t.firstChild),yn=n,ve=!0,Ta=null,ri=!0,a=Ap(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===u){n=Zi(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,s=Wl(J.current).createElement(a),s[nn]=n,s[gn]=t,bn(s,a,t),b(s),n.stateNode=s):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pt(n),t===null&&ve&&(s=n.stateNode=Xg(n.type,n.pendingProps,J.current),yn=n,ri=!0,u=We,Ia(n.type)?(Nf=u,We=oi(s.firstChild)):We=u),Tn(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=We)&&(s=wx(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,yn=n,We=oi(s.firstChild),ri=!1,u=!0):u=!1),u||ba(n)),Pt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Cf(u,f)?s=null:g!==null&&Cf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Ac(t,n,Wv,null,null,a),To._currentValue=u),Cl(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=We)&&(a=Ux(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,We=null,t=!0):t=!1),t||ba(n)),null;case 13:return Lm(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=hr(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return Em(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ur(n),u=En(u),s=s(u),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return Tm(t,n,n.type,n.pendingProps,a);case 15:return bm(t,n,n.type,n.pendingProps,a);case 19:return Om(t,n,a);case 31:return $v(t,n,a);case 22:return Am(t,n,a,n.pendingProps);case 24:return ur(n),s=En(an),t===null?(u=gc(),u===null&&(u=Xe,f=pc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},vc(n),Aa(n,an,u)):((t.lanes&a)!==0&&(xc(t,n),io(n,null,null,a),no()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,an,s)):(s=f.cache,Aa(n,an,s),s!==u.cache&&hc(n,[an],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function tf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(lg())t.flags|=8192;else throw dr=hl,_c}else t.flags&=-16777217}function Fm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n))if(lg())t.flags|=8192;else throw dr=hl,_c}function wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,is|=n)}function uo(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ex(t,n,a){var s=n.pendingProps;switch(lc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Wi(an),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(kr(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cc())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ji(n),f!==null?(qe(n),Fm(n,f)):(qe(n),tf(n,u,null,s,a))):f?f!==t.memoizedState?(ji(n),qe(n),Fm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ji(n),qe(n),tf(n,u,t,s,a)),null;case 27:if(ee(n),a=J.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=bt.current,kr(n)?mp(n):(t=Xg(u,s,a),n.stateNode=t,ji(n))}return qe(n),null;case 5:if(ee(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=bt.current,kr(n))mp(n);else{var g=Wl(J.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[nn]=n,f[gn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(bn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ji(n)}}return qe(n),tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,kr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=yn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||ba(n,!0)}else t=Wl(t).createTextNode(s),t[nn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=kr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[nn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[nn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),qe(n),null);case 4:return Nt(),t===null&&Ef(n.stateNode.containerInfo),qe(n),null;case 10:return Wi(n.type),qe(n),null;case 19:if($($e),s=n.memoizedState,s===null)return qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)uo(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,uo(s,!1),t=f.updateQueue,n.updateQueue=t,wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)cp(a,t),a=a.sibling;return mt($e,$e.current&1|2),ve&&Xi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>Pl&&(n.flags|=128,u=!0,uo(s,!1),n.lanes=4194304)}else{if(!u)if(t=_l(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,wl(n,t),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ve)return qe(n),null}else 2*M()-s.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,u=!0,uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=$e.current,mt($e,u?a&1|2:a&1),ve&&Xi(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return qn(n),Ec(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&$(cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(an),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function nx(t,n){switch(lc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(an),Nt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $($e),null;case 4:return Nt(),null;case 10:return Wi(n.type),null;case 22:case 23:return qn(n),Ec(),t!==null&&$(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(an),null;case 25:return null;default:return null}}function zm(t,n){switch(lc(n),n.tag){case 3:Wi(an),Nt();break;case 26:case 27:case 5:ee(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:$($e);break;case 10:Wi(n.type);break;case 22:case 23:qn(n),Ec(),t!==null&&$(cr);break;case 24:Wi(an)}}function co(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function La(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var B=a,Q=T;try{Q()}catch(dt){Fe(u,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){Fe(n,n.return,dt)}}function Bm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cp(n,a)}catch(s){Fe(t,t.return,s)}}}function Im(t,n,a){a.props=mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Fe(t,n,u)}}function Ci(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function Hm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function ef(t,n,a){try{var s=t.stateNode;Tx(s,t.type,a,n),s[gn]=n}catch(u){Fe(t,t.return,u)}}function Gm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function nf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(s!==4&&(s===27&&Ia(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(af(t,n,a),t=t.sibling;t!==null;)af(t,n,a),t=t.sibling}function Ul(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ia(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function Vm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,s,a),n[nn]=t,n[gn]=a}catch(f){Fe(t,t.return,f)}}var Ki=!1,on=!1,rf=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function ix(t,n){if(t=t.containerInfo,Af=Jl,t=ep(t),Qu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,B=-1,Q=0,dt=0,gt=t,nt=null;e:for(;;){for(var ot;gt!==a||u!==0&&gt.nodeType!==3||(T=g+u),gt!==f||s!==0&&gt.nodeType!==3||(B=g+s),gt.nodeType===3&&(g+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)nt=gt,gt=ot;for(;;){if(gt===t)break e;if(nt===a&&++Q===u&&(T=g),nt===f&&++dt===s&&(B=g),(ot=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:t,selectionRange:a},Jl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=mr(a.type,u);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Fe(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function km(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),s&4&&co(5,a);break;case 1:if(Ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}s&64&&Bm(a),s&512&&fo(a,a.return);break;case 3:if(Ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&s&4&&Vm(a);case 26:case 5:Ji(t,a),n===null&&s&4&&Hm(a),s&512&&fo(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),s&4&&Ym(t,a);break;case 13:Ji(t,a),s&4&&Zm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dx.bind(null,a),Lx(t,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||on,u=Ki;var f=on;Ki=s,(on=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=u,on=f}break;case 30:break;default:Ji(t,a)}}function Wm(t){var n=t.alternate;n!==null&&(t.alternate=null,Wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Is(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)qm(t,n,a),a=a.sibling}function qm(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:on||Ci(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ci(a,n);var s=je,u=Fn;Ia(a.type)&&(je=a.stateNode,Fn=!1),Qi(t,n,a),Mo(a.stateNode),je=s,Fn=u;break;case 5:on||Ci(a,n);case 6:if(s=je,u=Fn,je=null,Qi(t,n,a),je=s,Fn=u,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,Bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):Bg(je,a.stateNode));break;case 4:s=je,u=Fn,je=a.stateNode.containerInfo,Fn=!0,Qi(t,n,a),je=s,Fn=u;break;case 0:case 11:case 14:case 15:La(2,a,n),on||La(4,a,n),Qi(t,n,a);break;case 1:on||(Ci(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Im(a,n,s)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:on=(s=on)||a.memoizedState!==null,Qi(t,n,a),on=s;break;default:Qi(t,n,a)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){Fe(n,n.return,a)}}}function Zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Fe(n,n.return,a)}}function ax(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xm),n;default:throw Error(r(435,t.tag))}}function Ll(t,n){var a=ax(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=hx.bind(null,t,s);s.then(u,u)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){je=T.stateNode,Fn=!1;break t}break;case 5:je=T.stateNode,Fn=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,Fn=!0;break t}T=T.return}if(je===null)throw Error(r(160));qm(f,g,u),je=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jm(n,t),n=n.sibling}var gi=null;function jm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Bn(t),s&4&&(La(3,t,t.return),co(3,t),La(5,t,t.return));break;case 1:zn(n,t),Bn(t),s&512&&(on||a===null||Ci(a,a.return)),s&64&&Ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=gi;if(zn(n,t),Bn(t),s&512&&(on||a===null||Ci(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[tr]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,s,a),f[nn]=t,b(f),s=f;break t;case"link":var g=jg("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),bn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=jg("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),bn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[nn]=t,b(f),s=f}t.stateNode=s}else Kg(u,t.type,t.stateNode);else t.stateNode=Zg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Kg(u,t.type,t.stateNode):Zg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Bn(t),s&512&&(on||a===null||Ci(a,a.return)),a!==null&&s&4&&ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Bn(t),s&512&&(on||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{cn(u,"")}catch(Vt){Fe(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,ef(t,u,a!==null?a.memoizedProps:u)),s&1024&&(rf=!0);break;case 6:if(zn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Fe(t,t.return,Vt)}}break;case 3:if(Zl=null,u=gi,gi=ql(n.containerInfo),zn(n,t),gi=u,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Vt){Fe(t,t.return,Vt)}rf&&(rf=!1,Km(t));break;case 4:s=gi,gi=ql(t.stateNode.containerInfo),zn(n,t),Bn(t),gi=s;break;case 12:zn(n,t),Bn(t);break;case 31:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ll(t,s)));break;case 13:zn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ll(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=Ki,dt=on;if(Ki=Q||u,on=dt||B,zn(n,t),on=dt,Ki=Q,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Ki||on||gr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode;var gt=B.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Vt){Fe(B,B.return,Vt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Vt){Fe(B,B.return,Vt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?Ig(ot,!0):Ig(B.stateNode,!1)}catch(Vt){Fe(B,B.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ll(t,a))));break;case 19:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ll(t,s)));break;case 30:break;case 21:break;default:zn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Gm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=nf(t);Ul(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(cn(g,""),a.flags&=-33);var T=nf(t);Ul(t,T,g);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=nf(t);af(t,Q,B);break;default:throw Error(r(161))}}catch(dt){Fe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(t,n.alternate,n),n=n.sibling}function gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),gr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Im(n,n.return,a),gr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ci(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:$i(u,f,a),co(4,f);break;case 1:if($i(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Fe(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Rp(B[u],T)}catch(Q){Fe(s,s.return,Q)}}a&&g&64&&Bm(f),fo(f,f.return);break;case 27:Vm(f);case 26:case 5:$i(u,f,a),a&&s===null&&g&4&&Hm(f),fo(f,f.return);break;case 12:$i(u,f,a);break;case 31:$i(u,f,a),a&&g&4&&Ym(u,f);break;case 13:$i(u,f,a),a&&g&4&&Zm(u,f);break;case 22:f.memoizedState===null&&$i(u,f,a),fo(f,f.return);break;case 30:break;default:$i(u,f,a)}n=n.sibling}}function sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function _i(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qm(t,n,a,s),n=n.sibling}function Qm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,s),u&2048&&co(9,n);break;case 1:_i(t,n,a,s);break;case 3:_i(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(u&2048){_i(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else _i(t,n,a,s);break;case 31:_i(t,n,a,s);break;case 13:_i(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,s):ho(t,n):f._visibility&2?_i(t,n,a,s):(f._visibility|=2,ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&sf(g,n);break;case 24:_i(t,n,a,s),u&2048&&of(n.alternate,n);break;default:_i(t,n,a,s)}}function ts(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,B=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:ts(f,g,T,B,u),co(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?ts(f,g,T,B,u):ho(f,g):(dt._visibility|=2,ts(f,g,T,B,u)),u&&Q&2048&&sf(g.alternate,g);break;case 24:ts(f,g,T,B,u),u&&Q&2048&&of(g.alternate,g);break;default:ts(f,g,T,B,u)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:ho(a,s),u&2048&&sf(s.alternate,s);break;case 24:ho(a,s),u&2048&&of(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function es(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)Jm(t,n,a),t=t.sibling}function Jm(t,n,a){switch(t.tag){case 26:es(t,n,a),t.flags&po&&t.memoizedState!==null&&kx(a,gi,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,a);break;case 3:case 4:var s=gi;gi=ql(t.stateNode.containerInfo),es(t,n,a),gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,es(t,n,a),po=s):es(t,n,a));break;default:es(t,n,a)}}function $m(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,eg(s,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tg(t),t=t.sibling}function tg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&La(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nl(t)):mo(t);break;default:mo(t)}}function Nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,eg(s,t)}$m(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}t=t.sibling}}function eg(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Wm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var rx={getCacheForType:function(t){var n=En(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(an).controller.signal}},sx=typeof WeakMap=="function"?WeakMap:Map,we=0,Xe=null,pe=null,ge=0,Pe=0,Yn=null,Na=!1,ns=!1,lf=!1,ta=0,Je=0,Oa=0,_r=0,uf=0,Zn=0,is=0,go=null,In=null,cf=!1,Ol=0,ng=0,Pl=1/0,Fl=null,Pa=null,fn=0,Fa=null,as=null,ea=0,ff=0,df=null,ig=null,_o=0,hf=null;function jn(){return(we&2)!==0&&ge!==0?ge&-ge:L.T!==null?xf():zs()}function ag(){if(Zn===0)if((ge&536870912)===0||ve){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Zn=t}else Zn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),Zn}function Hn(t,n,a){(t===Xe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(rs(t,0),za(t,ge,Zn,!1)),Rn(t,a),((we&2)===0||t!==Xe)&&(t===Xe&&((we&2)===0&&(_r|=a),Je===4&&za(t,ge,Zn,!1)),Di(t))}function rg(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Rt(t,n),u=s?ux(t,n):mf(t,n,!0),f=s;do{if(u===0){ns&&!s&&za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ox(a)){u=mf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=go;var B=T.current.memoizedState.isDehydrated;if(B&&(rs(T,g).flags|=256),g=mf(T,g,!1),g!==2){if(lf&&!B){T.errorRecoveryDisabledLanes|=f,_r|=f,u=4;break t}f=In,In=u,f!==null&&(In===null?In=f:In.push.apply(In,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){rs(t,0),za(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:za(s,n,Zn,!Na);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ol+300-M(),10<u)){if(za(s,n,Zn,!Na),_t(s,0,!0)!==0)break t;ea=n,s.timeoutHandle=Fg(sg.bind(null,s,a,In,Fl,cf,n,Zn,_r,is,Na,f,"Throttled",-0,0),u);break t}sg(s,a,In,Fl,cf,n,Zn,_r,is,Na,f,null,-0,0)}}break}while(!0);Di(t)}function sg(t,n,a,s,u,f,g,T,B,Q,dt,gt,nt,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},Jm(n,f,gt);var Vt=(f&62914560)===f?Ol-M():(f&4194048)===f?ng-M():0;if(Vt=Wx(gt,Vt),Vt!==null){ea=f,t.cancelPendingCommit=Vt(pg.bind(null,t,n,f,a,s,u,g,T,B,dt,gt,null,nt,ot)),za(t,f,g,!Q);return}}pg(t,n,f,a,s,u,g,T,B)}function ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,s){n&=~uf,n&=~_r,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Zo(t,a,n)}function zl(){return(we&6)===0?(vo(0),!1):!0}function pf(){if(pe!==null){if(Pe===0)var t=pe.return;else t=pe,ki=lr=null,Dc(t),jr=null,$s=0,t=pe;for(;t!==null;)zm(t.alternate,t),t=t.return;pe=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Rx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,pf(),Xe=t,pe=a=Vi(t.current,null),ge=n,Pe=0,Yn=null,Na=!1,ns=Rt(t,n),lf=!1,is=Zn=uf=_r=Oa=Je=0,In=go=null,cf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ft(s),f=1<<u;n|=t[u],s&=~f}return ta=n,al(),a}function og(t,n){oe=null,L.H=oo,n===Zr||n===dl?(n=Ep(),Pe=3):n===_c?(n=Ep(),Pe=4):Pe=n===Wc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,pe===null&&(Je=1,Al(t,ni(n,t.current)))}function lg(){var t=Wn.current;return t===null?!0:(ge&4194048)===ge?si===null:(ge&62914560)===ge||(ge&536870912)!==0?t===si:!1}function ug(){var t=L.H;return L.H=oo,t===null?oo:t}function cg(){var t=L.A;return L.A=rx,t}function Bl(){Je=4,Na||(ge&4194048)!==ge&&Wn.current!==null||(ns=!0),(Oa&134217727)===0&&(_r&134217727)===0||Xe===null||za(Xe,ge,Zn,!1)}function mf(t,n,a){var s=we;we|=2;var u=ug(),f=cg();(Xe!==t||ge!==n)&&(Fl=null,rs(t,n)),n=!1;var g=Je;t:do try{if(Pe!==0&&pe!==null){var T=pe,B=Yn;switch(Pe){case 8:pf(),g=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var Q=Pe;if(Pe=0,Yn=null,ss(t,T,B,Q),a&&ns){g=0;break t}break;default:Q=Pe,Pe=0,Yn=null,ss(t,T,B,Q)}}lx(),g=Je;break}catch(dt){og(t,dt)}while(!0);return n&&t.shellSuspendCounter++,ki=lr=null,we=s,L.H=u,L.A=f,pe===null&&(Xe=null,ge=0,al()),g}function lx(){for(;pe!==null;)fg(pe)}function ux(t,n){var a=we;we|=2;var s=ug(),u=cg();Xe!==t||ge!==n?(Fl=null,Pl=M()+500,rs(t,n)):ns=Rt(t,n);t:do try{if(Pe!==0&&pe!==null){n=pe;var f=Yn;e:switch(Pe){case 1:Pe=0,Yn=null,ss(t,n,f,1);break;case 2:case 9:if(Mp(f)){Pe=0,Yn=null,dg(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==t||(Pe=7),Di(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Mp(f)?(Pe=0,Yn=null,dg(n)):(Pe=0,Yn=null,ss(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var T=pe;if(g?Qg(g):T.stateNode.complete){Pe=0,Yn=null;var B=T.sibling;if(B!==null)pe=B;else{var Q=T.return;Q!==null?(pe=Q,Il(Q)):pe=null}break e}}Pe=0,Yn=null,ss(t,n,f,5);break;case 6:Pe=0,Yn=null,ss(t,n,f,6);break;case 8:pf(),Je=6;break t;default:throw Error(r(462))}}cx();break}catch(dt){og(t,dt)}while(!0);return ki=lr=null,L.H=s,L.A=u,we=a,pe!==null?0:(Xe=null,ge=0,al(),Je)}function cx(){for(;pe!==null&&!qt();)fg(pe)}function fg(t){var n=Pm(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?Il(t):pe=n}function dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Dm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Dc(n);default:zm(a,n),n=pe=cp(n,ta),n=Pm(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?Il(t):pe=n}function ss(t,n,a,s){ki=lr=null,Dc(n),jr=null,$s=0;var u=n.return;try{if(Jv(t,u,n,a,ge)){Je=1,Al(t,ni(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;Je=1,Al(t,ni(a,t.current)),pe=null;return}n.flags&32768?(ve||s===1?t=!0:ns||(ge&536870912)!==0?t=!1:(Na=t=!0,(s===2||s===9||s===3||s===6)&&(s=Wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),hg(n,t)):Il(n)}function Il(t){var n=t;do{if((n.flags&32768)!==0){hg(n,Na);return}t=n.return;var a=ex(n.alternate,n,ta);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Je===0&&(Je=5)}function hg(t,n){do{var a=nx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Je=6,pe=null}function pg(t,n,a,s,u,f,g,T,B){t.cancelPendingCommit=null;do Hl();while(fn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=nc,di(t,a,f,g,T,B),t===Xe&&(pe=Xe=null,ge=0),as=n,Fa=t,ea=a,ff=f,df=u,ig=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,px(ct,function(){return xg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=I.p,I.p=2,g=we,we|=4;try{ix(t,n,a)}finally{we=g,I.p=u,L.T=s}}fn=1,mg(),gg(),_g()}}function mg(){if(fn===1){fn=0;var t=Fa,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=I.p;I.p=2;var u=we;we|=4;try{jm(n,t);var f=Rf,g=ep(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&tp(T.ownerDocument.documentElement,T)){if(B!==null&&Qu(T)){var Q=B.start,dt=B.end;if(dt===void 0&&(dt=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(dt,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Vt=T.textContent.length,$t=Math.min(B.start,Vt),He=B.end===void 0?$t:Math.min(B.end,Vt);!ot.extend&&$t>He&&(g=He,He=$t,$t=g);var Y=$h(T,$t),V=$h(T,He);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),$t>He?(ot.addRange(K),ot.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ot.addRange(K))}}}}for(gt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var pt=gt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Jl=!!Af,Rf=Af=null}finally{we=u,I.p=s,L.T=a}}t.current=n,fn=2}}function gg(){if(fn===2){fn=0;var t=Fa,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=I.p;I.p=2;var u=we;we|=4;try{km(t,n.alternate,n)}finally{we=u,I.p=s,L.T=a}}fn=3}}function _g(){if(fn===4||fn===3){fn=0,w();var t=Fa,n=as,a=ea,s=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,as=Fa=null,vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Pa=null),Ur(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,u=I.p,I.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{L.T=n,I.p=u}}(ea&3)!==0&&Hl(),Di(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===hf?_o++:(_o=0,hf=t):_o=0,vo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Hl(){return mg(),gg(),_g(),xg()}function xg(){if(fn!==5)return!1;var t=Fa,n=ff;ff=0;var a=Ur(ea),s=L.T,u=I.p;try{I.p=32>a?32:a,L.T=null,a=df,df=null;var f=Fa,g=ea;if(fn=0,as=Fa=null,ea=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,tg(f.current),Qm(f,f.current,g,a),we=T,vo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{I.p=u,L.T=s,vg(t,n)}}function Sg(t,n,a){n=ni(a,n),n=kc(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(Rn(t,2),Di(t))}function Fe(t,n,a){if(t.tag===3)Sg(t,t,a);else for(;n!==null;){if(n.tag===3){Sg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){t=ni(a,t),a=Mm(2),s=Da(n,a,2),s!==null&&(ym(a,s,n,t),Rn(s,2),Di(s));break}}n=n.return}}function gf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new sx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(lf=!0,u.add(a),t=fx.bind(null,t,n,a),n.then(t,t))}function fx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ge&a)===a&&(Je===4||Je===3&&(ge&62914560)===ge&&300>M()-Ol?(we&2)===0&&rs(t,0):uf|=a,is===ge&&(is=0)),Di(t)}function Mg(t,n){n===0&&(n=Ne()),t=rr(t,n),t!==null&&(Rn(t,n),Di(t))}function dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(t,a)}function hx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Mg(t,a)}function px(t,n){return Se(t,n)}var Gl=null,os=null,_f=!1,Vl=!1,vf=!1,Ba=0;function Di(t){t!==os&&t.next===null&&(os===null?Gl=os=t:os=os.next=t),Vl=!0,_f||(_f=!0,gx())}function vo(t,n){if(!vf&&Vl){vf=!0;do for(var a=!1,s=Gl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ft(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(s,f))}else f=ge,f=_t(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,bg(s,f));s=s.next}while(a);vf=!1}}function mx(){yg()}function yg(){Vl=_f=!1;var t=0;Ba!==0&&Ax()&&(t=Ba);for(var n=M(),a=null,s=Gl;s!==null;){var u=s.next,f=Eg(s,n);f===0?(s.next=null,a===null?Gl=u:a.next=u,u===null&&(os=a)):(a=s,(t!==0||(f&3)!==0)&&(Vl=!0)),s=u}fn!==0&&fn!==5||vo(t),Ba!==0&&(Ba=0)}function Eg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ft(f),T=1<<g,B=u[g];B===-1?((T&a)===0||(T&s)!==0)&&(u[g]=ne(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xe,a=ge,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ue(s),Ur(a)){case 2:case 8:a=vt;break;case 32:a=ct;break;case 268435456:a=Ct;break;default:a=ct}return s=Tg.bind(null,t),a=Se(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=ge;return s=_t(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(rg(t,s,n),Eg(t,M()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function bg(t,n){if(Hl())return null;rg(t,n,!0)}function gx(){Cx(function(){(we&6)!==0?Se(ht,mx):yg()})}function xf(){if(Ba===0){var t=qr;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ba=t}return Ba}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _x(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ag((u[gn]||null).action),g=s.submitter;g&&(n=(n=g[gn]||null)?Ag(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new tl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var B=g?Rg(u,g):new FormData(u);Bc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=g?Rg(u,g):new FormData(u),Bc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Sf=0;Sf<ec.length;Sf++){var Mf=ec[Sf],vx=Mf.toLowerCase(),xx=Mf[0].toUpperCase()+Mf.slice(1);mi(vx,"on"+xx)}mi(ap,"onAnimationEnd"),mi(rp,"onAnimationIteration"),mi(sp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Pv,"onTransitionRun"),mi(Fv,"onTransitionStart"),mi(zv,"onTransitionCancel"),mi(op,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],B=T.instance,Q=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(dt){il(dt)}u.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(T=s[g],B=T.instance,Q=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(dt){il(dt)}u.currentTarget=null,f=B}}}}function me(t,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var s=t+"__bubble";a.has(s)||(Dg(n,t,2,!1),a.add(s))}function yf(t,n,a){var s=0;n&&(s|=4),Dg(a,t,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Xl]){t[Xl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Sx.has(a)||yf(a,!1,t),yf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,yf("selectionchange",!1,n))}}function Dg(t,n,a,s){switch(a0(n)){case 2:var u=Zx;break;case 8:u=jx;break;default:u=Bf}a=u.bind(null,n,a,t),u=void 0,!Vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Tf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=xa(T),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Oh(function(){var Q=f,dt=Hu(a),gt=[];t:{var nt=lp.get(t);if(nt!==void 0){var ot=tl,Vt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ot=hv;break;case"focusin":Vt="focus",ot=qu;break;case"focusout":Vt="blur",ot=qu;break;case"beforeblur":case"afterblur":ot=qu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=gv;break;case ap:case rp:case sp:ot=av;break;case op:ot=vv;break;case"scroll":case"scrollend":ot=$_;break;case"wheel":ot=Sv;break;case"copy":case"cut":case"paste":ot=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Ih;break;case"toggle":case"beforetoggle":ot=yv}var $t=(n&4)!==0,He=!$t&&(t==="scroll"||t==="scrollend"),Y=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Hs(V,Y),pt!=null&&$t.push(So(V,pt,K))),He)break;V=V.return}0<$t.length&&(nt=new ot(nt,Vt,null,a,dt),gt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Iu&&(Vt=a.relatedTarget||a.fromElement)&&(xa(Vt)||Vt[hi]))break t;if((ot||nt)&&(nt=dt.window===dt?dt:(nt=dt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=Q,Vt=Vt?xa(Vt):null,Vt!==null&&(He=c(Vt),$t=Vt.tag,Vt!==He||$t!==5&&$t!==27&&$t!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if($t=zh,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Ih,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),He=ot==null?nt:er(ot),K=Vt==null?nt:er(Vt),nt=new $t(pt,V+"leave",ot,a,dt),nt.target=He,nt.relatedTarget=K,pt=null,xa(dt)===Q&&($t=new $t(Y,V+"enter",Vt,a,dt),$t.target=K,$t.relatedTarget=He,pt=$t),He=pt,ot&&Vt)e:{for($t=Mx,Y=ot,V=Vt,K=0,pt=Y;pt;pt=$t(pt))K++;pt=0;for(var Kt=V;Kt;Kt=$t(Kt))pt++;for(;0<K-pt;)Y=$t(Y),K--;for(;0<pt-K;)V=$t(V),pt--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){$t=Y;break e}Y=$t(Y),V=$t(V)}$t=null}else $t=null;ot!==null&&wg(gt,nt,ot,$t,!1),Vt!==null&&He!==null&&wg(gt,He,Vt,$t,!0)}}t:{if(nt=Q?er(Q):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var be=Yh;else if(Wh(nt))if(Zh)be=Lv;else{be=wv;var Yt=Dv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?Q&&pi(Q.elementType)&&(be=Yh):be=Uv;if(be&&(be=be(t,Q))){qh(gt,be,a,dt);break t}Yt&&Yt(t,nt,Q),t==="focusout"&&Q&&nt.type==="number"&&Q.memoizedProps.value!=null&&vn(nt,"number",nt.value)}switch(Yt=Q?er(Q):window,t){case"focusin":(Wh(Yt)||Yt.contentEditable==="true")&&(Br=Yt,Ju=Q,Zs=null);break;case"focusout":Zs=Ju=Br=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,np(gt,a,dt);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":np(gt,a,dt)}var ue;if(Zu)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else zr?Xh(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Hh&&a.locale!=="ko"&&(zr||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&zr&&(ue=Ph()):(ya=dt,Xu="value"in ya?ya.value:ya.textContent,zr=!0)),Yt=kl(Q,_e),0<Yt.length&&(_e=new Bh(_e,t,null,a,dt),gt.push({event:_e,listeners:Yt}),ue?_e.data=ue:(ue=kh(a),ue!==null&&(_e.data=ue)))),(ue=Tv?bv(t,a):Av(t,a))&&(_e=kl(Q,"onBeforeInput"),0<_e.length&&(Yt=new Bh("onBeforeInput","beforeinput",null,a,dt),gt.push({event:Yt,listeners:_e}),Yt.data=ue)),_x(gt,t,Q,a,dt)}Cg(gt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hs(t,a),u!=null&&s.unshift(So(t,u,f)),u=Hs(t,n),u!=null&&s.push(So(t,u,f))),t.tag===3)return s;t=t.return}return[]}function Mx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,B=T.alternate,Q=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||Q===null||(B=Q,u?(Q=Hs(a,f),Q!=null&&g.unshift(So(a,Q,B))):u||(Q=Hs(a,f),Q!=null&&g.push(So(a,Q,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var yx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(yx,`
`).replace(Ex,"")}function Lg(t,n){return n=Ug(n),Ug(t)===n}function Ie(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||cn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&cn(t,""+s);break;case"className":Qt(t,"class",s);break;case"tabIndex":Qt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(t,a,s);break;case"style":Or(t,s,f);break;case"data":if(n!=="object"){Qt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",u.name,u,null),Ie(t,n,"formEncType",u.formEncType,u,null),Ie(t,n,"formMethod",u.formMethod,u,null),Ie(t,n,"formTarget",u.formTarget,u,null)):(Ie(t,n,"encType",u.encType,u,null),Ie(t,n,"method",u.method,u,null),Ie(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Hi);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),kt(t,"popover",s);break;case"xlinkActuate":Wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Q_.get(a)||a,kt(t,a,s))}}function bf(t,n,a,s,u,f){switch(a){case"style":Or(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?cn(t,s):(typeof s=="number"||typeof s=="bigint")&&cn(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):kt(t,a,s)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,g,a,null)}}u&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=g=u=null,B=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":Q=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ie(t,n,s,dt,a,null)}}Ii(t,f,T,B,Q,g,u,!1);return;case"select":me("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Ie(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ti(t,!!s,n,!1):a!=null&&ti(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ie(t,n,g,T,a,null)}xn(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ie(t,n,B,s,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)me(xo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,Q,s,a,null)}return;default:if(pi(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&bf(t,n,dt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ie(t,n,T,s,a,null))}function Tx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,B=null,Q=null,dt=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=gt;default:s.hasOwnProperty(ot)||Ie(t,n,ot,null,s,gt)}}for(var nt in s){var ot=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||gt!=null))switch(nt){case"type":f=ot;break;case"name":u=ot;break;case"checked":Q=ot;break;case"defaultChecked":dt=ot;break;case"value":g=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&Ie(t,n,nt,ot,s,gt)}}_n(t,g,T,B,Q,dt,f,u);return;case"select":ot=g=T=nt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==B&&Ie(t,n,u,f,s,B)}n=T,a=g,s=ot,nt!=null?ti(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ti(t,!!a,n,!0):ti(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ie(t,n,g,u,s,f)}Oe(t,nt,ot);return;case"option":for(var Vt in a)nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!s.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:Ie(t,n,Vt,null,s,nt));for(B in s)nt=s[B],ot=a[B],s.hasOwnProperty(B)&&nt!==ot&&(nt!=null||ot!=null)&&(B==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Ie(t,n,B,nt,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!s.hasOwnProperty($t)&&Ie(t,n,$t,null,s,nt);for(Q in s)if(nt=s[Q],ot=a[Q],s.hasOwnProperty(Q)&&nt!==ot&&(nt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ie(t,n,Q,nt,s,ot)}return;default:if(pi(n)){for(var He in a)nt=a[He],a.hasOwnProperty(He)&&nt!==void 0&&!s.hasOwnProperty(He)&&bf(t,n,He,void 0,s,nt);for(dt in s)nt=s[dt],ot=a[dt],!s.hasOwnProperty(dt)||nt===ot||nt===void 0&&ot===void 0||bf(t,n,dt,nt,s,ot);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!s.hasOwnProperty(Y)&&Ie(t,n,Y,null,s,nt);for(gt in s)nt=s[gt],ot=a[gt],!s.hasOwnProperty(gt)||nt===ot||nt==null&&ot==null||Ie(t,n,gt,nt,s,ot)}function Ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&Ng(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],Q=B.startTime;if(Q>T)break;var dt=B.transferSize,gt=B.initiatorType;dt&&Ng(gt)&&(B=B.responseEnd,g+=dt*(B<T?1:(T-Q)/(B-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Rf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Ax(){var t=window.event;return t&&t.type==="popstate"?t===Df?!1:(Df=t,!0):(Df=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(Dx)}:Fg;function Dx(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function Bg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[tr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=u}while(a);fs(n)}function Ig(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),Is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function wx(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Ux(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function Hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$?"||t.data==="$~"}function Lf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Lx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Nf=null;function Gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Xg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Is(t)}var li=new Map,kg=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=I.d;I.d={f:Nx,r:Ox,D:Px,C:Fx,L:zx,m:Bx,X:Hx,S:Ix,M:Gx};function Nx(){var t=na.f(),n=zl();return t||n}function Ox(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?om(n):na.r(t)}var ls=typeof document>"u"?null:document;function Wg(t,n,a){var s=ls;if(s&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),kg.has(u)||(kg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),bn(n,"link",t),b(n),s.head.appendChild(n)))}}function Px(t){na.D(t),Wg("dns-prefetch",t,null)}function Fx(t,n){na.C(t,n),Wg("preconnect",t,n)}function zx(t,n,a){na.L(t,n,a);var s=ls;if(s&&t&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(t)+'"]';var f=u;switch(n){case"style":f=us(t);break;case"script":f=cs(t)}li.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),bn(n,"link",t),b(n),s.head.appendChild(n)))}}function Bx(t,n){na.m(t,n);var a=ls;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(s)+'"][href="'+ae(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(t)}if(!li.has(f)&&(t=_({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),bn(s,"link",t),b(s),a.head.appendChild(s)}}}function Ix(t,n,a){na.S(t,n,a);var s=ls;if(s&&t){var u=Ma(s).hoistableStyles,f=us(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(yo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&Of(t,a);var B=g=s.createElement("link");b(B),bn(B,"link",t),B._p=new Promise(function(Q,dt){B.onload=Q,B.onerror=dt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function Hx(t,n){na.X(t,n);var a=ls;if(a&&t){var s=Ma(a).hoistableScripts,u=cs(t),f=s.get(u);f||(f=a.querySelector(Eo(u)),f||(t=_({src:t,async:!0},n),(n=li.get(u))&&Pf(t,n),f=a.createElement("script"),b(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Gx(t,n){na.M(t,n);var a=ls;if(a&&t){var s=Ma(a).hoistableScripts,u=cs(t),f=s.get(u);f||(f=a.querySelector(Eo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=li.get(u))&&Pf(t,n),f=a.createElement("script"),b(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function qg(t,n,a,s){var u=(u=J.current)?ql(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=Ma(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var f=Ma(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(yo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||Vx(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=Ma(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+ae(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Vx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),b(n),t.head.appendChild(n))}function cs(t){return'[src="'+ae(t)+'"]'}function Eo(t){return"script[async]"+t}function Zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(s)return n.instance=s,b(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),b(s),bn(s,"style",u),Yl(s,a.precedence,t),n.instance=s;case"stylesheet":u=us(a.href);var f=t.querySelector(yo(u));if(f)return n.state.loading|=4,n.instance=f,b(f),f;s=Yg(a),(u=li.get(u))&&Of(s,u),f=(t.ownerDocument||t).createElement("link"),b(f);var g=f;return g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),bn(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=cs(a.src),(u=t.querySelector(Eo(f)))?(n.instance=u,b(u),u):(s=a,(u=li.get(f))&&(s=_({},a),Pf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),b(u),bn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,t));return n.instance}function Yl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function jg(t,n,a){if(Zl===null){var s=new Map,u=Zl=new Map;u.set(a,s)}else u=Zl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[tr]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Xx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function kx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(s.href),f=n.querySelector(yo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,s=Yg(s),(u=li.get(u))&&Of(s,u),f=f.createElement("link"),b(f);var g=f;g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),bn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function Wx(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*bx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(qx,t),Kl=null,jl.call(t))}function qx(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var s=a.get(null);else{a=new Map,Kl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=jl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var To={$$typeof:O,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Yx(t,n,a,s,u,f,g,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Jg(t,n,a,s,u,f,g,T,B,Q,dt,gt){return t=new Yx(t,n,a,g,B,Q,dt,gt,T),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=pc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},vc(f),t}function $g(t){return t?(t=Gr,t):Gr}function t0(t,n,a,s,u,f){u=$g(u),s.context===null?s.context=u:s.pendingContext=u,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Da(t,s,n),a!==null&&(Hn(a,t,n),eo(a,t,n))}function e0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function zf(t,n){e0(t,n),(t=t.alternate)&&e0(t,n)}function n0(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&Hn(n,t,67108864),zf(t,67108864)}}function i0(t){if(t.tag===13||t.tag===31){var n=jn();n=Fs(n);var a=rr(t,n);a!==null&&Hn(a,t,n),zf(t,n)}}var Jl=!0;function Zx(t,n,a,s){var u=L.T;L.T=null;var f=I.p;try{I.p=2,Bf(t,n,a,s)}finally{I.p=f,L.T=u}}function jx(t,n,a,s){var u=L.T;L.T=null;var f=I.p;try{I.p=8,Bf(t,n,a,s)}finally{I.p=f,L.T=u}}function Bf(t,n,a,s){if(Jl){var u=If(s);if(u===null)Tf(t,n,s,$l,a),r0(t,s);else if(Qx(u,t,n,a,s))s.stopPropagation();else if(r0(t,s),n&4&&-1<Kx.indexOf(t)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var B=1<<31-Ft(g);T.entanglements[1]|=B,g&=~B}Di(f),(we&6)===0&&(Pl=M()+500,vo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Hn(T,f,2),zl(),zf(f,2)}if(f=If(s),f===null&&Tf(t,n,s,$l,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Tf(t,n,s,null,a)}}function If(t){return t=Hu(t),Hf(t)}var $l=null;function Hf(t){if($l=null,t=xa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function a0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case ct:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ha=null,Ga=null,Va=null,bo=new Map,Ao=new Map,Xa=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&n0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Qx(t,n,a,s,u){switch(n){case"focusin":return Ha=Ro(Ha,t,n,a,s,u),!0;case"dragenter":return Ga=Ro(Ga,t,n,a,s,u),!0;case"mouseover":return Va=Ro(Va,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return bo.set(f,Ro(bo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,s,u)),!0}return!1}function s0(t){var n=xa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,bi(t.priority,function(){i0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,bi(t.priority,function(){i0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=If(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Iu=s,a.target.dispatchEvent(s),Iu=null}else return n=Sa(a),n!==null&&n0(n),t.blockedOn=a,!1;n.shift()}return!0}function o0(t,n,a){tu(t)&&a.delete(n)}function Jx(){Gf=!1,Ha!==null&&tu(Ha)&&(Ha=null),Ga!==null&&tu(Ga)&&(Ga=null),Va!==null&&tu(Va)&&(Va=null),bo.forEach(o0),Ao.forEach(o0)}function eu(t,n){t.blockedOn===n&&(t.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jx)))}var nu=null;function l0(t){nu!==t&&(nu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nu===t&&(nu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Hf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,Bc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function fs(t){function n(B){return eu(B,t)}Ha!==null&&eu(Ha,t),Ga!==null&&eu(Ga,t),Va!==null&&eu(Va,t),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)s0(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[gn]||null;if(typeof f=="function")g||l0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[gn]||null)T=g.formAction;else if(Hf(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),l0(a)}}}function u0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Vf(t){this._internalRoot=t}iu.prototype.render=Vf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();t0(a,s,t,n,null,null)},iu.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t0(t.current,2,null,t,null,null),zl(),n[hi]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var n=zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&s0(t)}};var c0=e.version;if(c0!=="19.2.3")throw Error(r(527,c0,"19.2.3"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var $x={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{yt=au.inject($x),Et=au}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=_m,f=vm,g=xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Jg(t,1,!1,null,null,a,s,null,u,f,g,u0),t[hi]=n.current,Ef(t),new Vf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=_m,g=vm,T=xm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Jg(t,1,!0,n,a??null,s,u,B,f,g,T,u0),n.context=$g(null),a=n.current,s=jn(),s=Fs(s),u=Ca(s),u.callback=null,Da(a,u,s),a=s,n.current.lanes=a,Rn(n,a),Di(n),t[hi]=n.current,Ef(t),new iu(n)},Do.version="19.2.3",Do}var S0;function uS(){if(S0)return Wf.exports;S0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wf.exports=lS(),Wf.exports}var cS=uS();const Mh="182",fS=0,M0=1,dS=2,Au=1,hS=2,zo=3,$a=0,Vn=1,ca=2,da=0,As=1,y0=2,E0=3,T0=4,pS=5,br=100,mS=101,gS=102,_S=103,vS=104,xS=200,SS=201,MS=202,yS=203,Ad=204,Rd=205,ES=206,TS=207,bS=208,AS=209,RS=210,CS=211,DS=212,wS=213,US=214,Cd=0,Dd=1,wd=2,Cs=3,Ud=4,Ld=5,Nd=6,Od=7,__=0,LS=1,NS=2,Oi=0,v_=1,x_=2,S_=3,M_=4,y_=5,E_=6,T_=7,b_=300,Dr=301,Ds=302,Pd=303,Fd=304,Pu=306,zd=1e3,fa=1001,Bd=1002,An=1003,OS=1004,ru=1005,Un=1006,jf=1007,Rr=1008,fi=1009,A_=1010,R_=1011,Io=1012,yh=1013,zi=1014,Li=1015,ma=1016,Eh=1017,Th=1018,Ho=1020,C_=35902,D_=35899,w_=1021,U_=1022,Ei=1023,ga=1026,Cr=1027,L_=1028,bh=1029,ws=1030,Ah=1031,Rh=1033,Ru=33776,Cu=33777,Du=33778,wu=33779,Id=35840,Hd=35841,Gd=35842,Vd=35843,Xd=36196,kd=37492,Wd=37496,qd=37488,Yd=37489,Zd=37490,jd=37491,Kd=37808,Qd=37809,Jd=37810,$d=37811,th=37812,eh=37813,nh=37814,ih=37815,ah=37816,rh=37817,sh=37818,oh=37819,lh=37820,uh=37821,ch=36492,fh=36494,dh=36495,hh=36283,ph=36284,mh=36285,gh=36286,PS=3200,FS=0,zS=1,Qa="",ci="srgb",Us="srgb-linear",Lu="linear",ze="srgb",ds=7680,b0=519,BS=512,IS=513,HS=514,Ch=515,GS=516,VS=517,Dh=518,XS=519,A0=35044,R0="300 es",Ni=2e3,Nu=2001;function N_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ou(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kS(){const o=Ou("canvas");return o.style.display="block",o}const C0={};function D0(...o){const e="THREE."+o.shift();console.log(e,...o)}function se(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Re(...o){const e="THREE."+o.shift();console.error(e,...o)}function Go(...o){const e=o.join(" ");e in C0||(C0[e]=!0,se(...o))}function WS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,_h=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function qS(o,e){return(o%e+e)%e}function Qf(o,e,i){return(1-i)*o+i*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,i=0){Me.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=c[d+0],E=c[d+1],R=c[d+2],C=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=C;return}if(_!==C||m!==S||p!==E||v!==R){let y=m*S+p*E+v*R+_*C;y<0&&(S=-S,E=-E,R=-R,C=-C,y=-y);let x=1-h;if(y<.9995){const F=Math.acos(y),O=Math.sin(F);x=Math.sin(x*F)/O,h=Math.sin(h*F)/O,m=m*x+S*h,p=p*x+E*h,v=v*x+R*h,_=_*x+C*h}else{m=m*x+S*h,p=p*x+E*h,v=v*x+R*h,_=_*x+C*h;const F=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=F,p*=F,v*=F,_*=F}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=c[d],S=c[d+1],E=c[d+2],R=c[d+3];return e[i]=h*R+v*_+m*E-p*S,e[i+1]=m*R+v*S+p*_-h*E,e[i+2]=p*R+v*E+h*S-m*_,e[i+3]=v*R-h*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(c/2),S=m(r/2),E=m(l/2),R=m(c/2);switch(d){case"XYZ":this._x=S*v*_+p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_-S*E*R;break;case"YXZ":this._x=S*v*_+p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_+S*E*R;break;case"ZXY":this._x=S*v*_-p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_-S*E*R;break;case"ZYX":this._x=S*v*_-p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_+S*E*R;break;case"YZX":this._x=S*v*_+p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_-S*E*R;break;case"XZY":this._x=S*v*_-p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_+S*E*R;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+h+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-r*p,this._z=c*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-c*l),_=2*(c*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-c*_,this.z=l+m*_+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new it,w0=new ko;class ce{constructor(e,i,r,l,c,d,h,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p)}set(e,i,r,l,c,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],E=r[5],R=r[8],C=l[0],y=l[3],x=l[6],F=l[1],O=l[4],N=l[7],z=l[2],H=l[5],P=l[8];return c[0]=d*C+h*F+m*z,c[3]=d*y+h*O+m*H,c[6]=d*x+h*N+m*P,c[1]=p*C+v*F+_*z,c[4]=p*y+v*O+_*H,c[7]=p*x+v*N+_*P,c[2]=S*C+E*F+R*z,c[5]=S*y+E*O+R*H,c[8]=S*x+E*N+R*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*c*v+r*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,S=h*m-v*c,E=p*c-d*m,R=i*_+r*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(l*p-v*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new ce,U0=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L0=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===ze&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:e,whitePoint:r,transfer:Lu,toXYZ:U0,fromXYZ:L0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:U0,fromXYZ:L0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Te=YS();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class ZS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=Ou("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ha(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(td(l[d].image)):c.push(td(l[d]))}else c=td(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function td(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let KS=0;const ed=new it;class On extends Ns{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=fa,l=fa,c=Un,d=Rr,h=Ei,m=fi,p=On.DEFAULT_ANISOTROPY,v=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Xo(),this.name="",this.source=new wh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=b_;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],R=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(E+1)/2,z=(x+1)/2,H=(v+S)/4,P=(_+C)/4,j=(R+y)/4;return O>N&&O>z?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=H/r,c=P/r):N>z?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=H/l,c=j/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=P/c,l=j/c),this.set(r,l,c,i),this}let F=Math.sqrt((y-R)*(y-R)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(F)<.001&&(F=1),this.x=(y-R)/F,this.y=(_-C)/F,this.z=(S-v)/F,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Ns{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new wh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends QS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class O_ extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(c,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ou.subVectors(this.max,Uo),ps.subVectors(e.a,Uo),ms.subVectors(e.b,Uo),gs.subVectors(e.c,Uo),Wa.subVectors(ms,ps),qa.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!nd(i,ps,ms,gs,ou)||(i=[1,0,0,0,1,0,0,0,1],!nd(i,ps,ms,gs,ou))?!1:(lu.crossVectors(Wa,qa),i=[lu.x,lu.y,lu.z],nd(i,ps,ms,gs,ou))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new it,new it,new it,new it,new it,new it,new it,new it],vi=new it,su=new Wo,ps=new it,ms=new it,gs=new it,Wa=new it,qa=new it,vr=new it,Uo=new it,ou=new it,lu=new it,xr=new it;function nd(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){xr.fromArray(o,c);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),v=r.dot(xr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const $S=new Wo,Lo=new it,id=new it;class Uh{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):$S.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(id)),this.expandByPoint(Lo.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new it,ad=new it,uu=new it,Ya=new it,rd=new it,cu=new it,sd=new it;class tM{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ad.copy(e).add(i).multiplyScalar(.5),uu.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(ad);const c=e.distanceTo(i)*.5,d=-this.direction.dot(uu),h=Ya.dot(this.direction),m=-Ya.dot(uu),p=Ya.lengthSq(),v=Math.abs(1-d*d);let _,S,E,R;if(v>0)if(_=d*m-h,S=d*h-m,R=c*v,_>=0)if(S>=-R)if(S<=R){const C=1/v;_*=C,S*=C,E=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=c,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-d*c+h)),S=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(_=Math.max(0,-(d*c+h)),S=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p);else S=d>0?-c:c,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ad).addScaledVector(uu,S),E}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(c=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,r,l,c){rd.subVectors(i,e),cu.subVectors(r,e),sd.crossVectors(rd,cu);let d=this.direction.dot(sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,e);const m=h*this.direction.dot(cu.crossVectors(Ya,cu));if(m<0)return null;const p=h*this.direction.dot(rd.cross(Ya));if(p<0||m+p>d)return null;const v=-h*Ya.dot(sd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,i,r,l,c,d,h,m,p,v,_,S,E,R,C,y){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p,v,_,S,E,R,C,y)}set(e,i,r,l,c,d,h,m,p,v,_,S,E,R,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),d=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=d*v,E=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=R+E*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,E=m*_,R=p*v,C=p*_;i[0]=S+C*h,i[4]=R*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=E*h-R,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,E=m*_,R=p*v,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,E=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=R*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,E=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=C-S*_,i[8]=R*_+E,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*_+R,i[10]=S-C*_}else if(e.order==="XZY"){const S=d*m,E=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=d*v,i[9]=E*_-R,i[2]=R*_-E,i[6]=h*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eM,e,nM)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Za.crossVectors(r,Kn),Za.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Za.crossVectors(r,Kn)),Za.normalize(),fu.crossVectors(Kn,Za),l[0]=Za.x,l[4]=fu.x,l[8]=Kn.x,l[1]=Za.y,l[5]=fu.y,l[9]=Kn.y,l[2]=Za.z,l[6]=fu.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],E=r[13],R=r[2],C=r[6],y=r[10],x=r[14],F=r[3],O=r[7],N=r[11],z=r[15],H=l[0],P=l[4],j=l[8],A=l[12],D=l[1],X=l[5],rt=l[9],at=l[13],ft=l[2],lt=l[6],L=l[10],I=l[14],tt=l[3],St=l[7],xt=l[11],U=l[15];return c[0]=d*H+h*D+m*ft+p*tt,c[4]=d*P+h*X+m*lt+p*St,c[8]=d*j+h*rt+m*L+p*xt,c[12]=d*A+h*at+m*I+p*U,c[1]=v*H+_*D+S*ft+E*tt,c[5]=v*P+_*X+S*lt+E*St,c[9]=v*j+_*rt+S*L+E*xt,c[13]=v*A+_*at+S*I+E*U,c[2]=R*H+C*D+y*ft+x*tt,c[6]=R*P+C*X+y*lt+x*St,c[10]=R*j+C*rt+y*L+x*xt,c[14]=R*A+C*at+y*I+x*U,c[3]=F*H+O*D+N*ft+z*tt,c[7]=F*P+O*X+N*lt+z*St,c[11]=F*j+O*rt+N*L+z*xt,c[15]=F*A+O*at+N*I+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],E=e[14],R=e[3],C=e[7],y=e[11],x=e[15],F=m*E-p*S,O=h*E-p*_,N=h*S-m*_,z=d*E-p*v,H=d*S-m*v,P=d*_-h*v;return i*(C*F-y*O+x*N)-r*(R*F-y*z+x*H)+l*(R*O-C*z+x*P)-c*(R*N-C*H+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],E=e[11],R=e[12],C=e[13],y=e[14],x=e[15],F=_*y*p-C*S*p+C*m*E-h*y*E-_*m*x+h*S*x,O=R*S*p-v*y*p-R*m*E+d*y*E+v*m*x-d*S*x,N=v*C*p-R*_*p+R*h*E-d*C*E-v*h*x+d*_*x,z=R*_*m-v*C*m-R*h*S+d*C*S+v*h*y-d*_*y,H=i*F+r*O+l*N+c*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=F*P,e[1]=(C*S*c-_*y*c-C*l*E+r*y*E+_*l*x-r*S*x)*P,e[2]=(h*y*c-C*m*c+C*l*p-r*y*p-h*l*x+r*m*x)*P,e[3]=(_*m*c-h*S*c-_*l*p+r*S*p+h*l*E-r*m*E)*P,e[4]=O*P,e[5]=(v*y*c-R*S*c+R*l*E-i*y*E-v*l*x+i*S*x)*P,e[6]=(R*m*c-d*y*c-R*l*p+i*y*p+d*l*x-i*m*x)*P,e[7]=(d*S*c-v*m*c+v*l*p-i*S*p-d*l*E+i*m*E)*P,e[8]=N*P,e[9]=(R*_*c-v*C*c-R*r*E+i*C*E+v*r*x-i*_*x)*P,e[10]=(d*C*c-R*h*c+R*r*p-i*C*p-d*r*x+i*h*x)*P,e[11]=(v*h*c-d*_*c-v*r*p+i*_*p+d*r*E-i*h*E)*P,e[12]=z*P,e[13]=(v*C*l-R*_*l+R*r*S-i*C*S-v*r*y+i*_*y)*P,e[14]=(R*h*l-d*C*l-R*r*m+i*C*m+d*r*y-i*h*y)*P,e[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*S+i*h*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,m=e.z,p=c*d,v=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,_=h+h,S=c*p,E=c*v,R=c*_,C=d*v,y=d*_,x=h*_,F=m*p,O=m*v,N=m*_,z=r.x,H=r.y,P=r.z;return l[0]=(1-(C+x))*z,l[1]=(E+N)*z,l[2]=(R-O)*z,l[3]=0,l[4]=(E-N)*H,l[5]=(1-(S+x))*H,l[6]=(y+F)*H,l[7]=0,l[8]=(R+O)*P,l[9]=(y-F)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=_s.set(l[0],l[1],l[2]).length();const d=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),xi.copy(this);const p=1/c,v=1/d,_=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Ni,m=!1){const p=this.elements,v=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let R,C;if(m)R=c/(d-c),C=d*c/(d-c);else if(h===Ni)R=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Nu)R=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Ni,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,C;if(m)R=1/(d-c),C=d/(d-c);else if(h===Ni)R=-2/(d-c),C=-(d+c)/(d-c);else if(h===Nu)R=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new it,xi=new un,eM=new it(0,0,0),nM=new it(1,1,1),Za=new it,fu=new it,Kn=new it,N0=new un,O0=new ko;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class P_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const P0=new it,vs=new ko,ra=new un,du=new it,No=new it,aM=new it,rM=new ko,F0=new it(1,0,0),z0=new it(0,1,0),B0=new it(0,0,1),I0={type:"added"},sM={type:"removed"},xs={type:"childadded",child:null},od={type:"childremoved",child:null};class Jn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new it,i=new _a,r=new ko,l=new it(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new ce}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(F0,e)}rotateY(e){return this.rotateOnAxis(z0,e)}rotateZ(e){return this.rotateOnAxis(B0,e)}translateOnAxis(e,i){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F0,e)}translateY(e){return this.translateOnAxis(z0,e)}translateZ(e){return this.translateOnAxis(B0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?du.copy(e):du.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(No,du,this.up):ra.lookAt(du,No,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ra),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),xs.child=e,this.dispatchEvent(xs),xs.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(sM),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,rM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),E=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new it(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new it,sa=new it,ld=new it,oa=new it,Ss=new it,Ms=new it,H0=new it,ud=new it,cd=new it,fd=new it,dd=new en,hd=new en,pd=new en;class yi{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Si.subVectors(l,i),sa.subVectors(r,i),ld.subVectors(e,i);const d=Si.dot(Si),h=Si.dot(sa),m=Si.dot(ld),p=sa.dot(sa),v=sa.dot(ld),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(p*m-h*v)*S,R=(d*v-h*m)*S;return c.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,r,l,c,d,h,m){return this.getBarycoord(e,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(d,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return dd.setScalar(0),hd.setScalar(0),pd.setScalar(0),dd.fromBufferAttribute(e,i),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(dd,c.x),d.addScaledVector(hd,c.y),d.addScaledVector(pd,c.z),d}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),sa.subVectors(e,i),Si.cross(sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Si.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;Ss.subVectors(l,r),Ms.subVectors(c,r),ud.subVectors(e,r);const m=Ss.dot(ud),p=Ms.dot(ud);if(m<=0&&p<=0)return i.copy(r);cd.subVectors(e,l);const v=Ss.dot(cd),_=Ms.dot(cd);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Ss,d);fd.subVectors(e,c);const E=Ss.dot(fd),R=Ms.dot(fd);if(R>=0&&E<=R)return i.copy(c);const C=E*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(Ms,h);const y=v*R-E*_;if(y<=0&&_-v>=0&&E-R>=0)return H0.subVectors(c,l),h=(_-v)/(_-v+(E-R)),i.copy(l).addScaledVector(H0,h);const x=1/(y+C+S);return d=C*x,h=S*x,i.copy(r).addScaledVector(Ss,d).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},hu={h:0,s:0,l:0};function md(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ge{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=qS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=md(d,c,e+1/3),this.g=md(d,c,e),this.b=md(d,c,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function r(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const r=F_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Te.workingToColorSpace(wn.copy(this),e),Math.round(xe(wn.r*255,0,255))*65536+Math.round(xe(wn.g*255,0,255))*256+Math.round(xe(wn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ci){Te.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(hu);const r=Qf(ja.h,hu.h,i),l=Qf(ja.s,hu.s,i),c=Qf(ja.l,hu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ge;Ge.NAMES=F_;let oM=0;class Fu extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=As,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ad&&(r.blendSrc=this.blendSrc),this.blendDst!==Rd&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class z_ extends Fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=__,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new it,pu=new Me;let lM=0;class Fi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=A0,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(e),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A0&&(e.usage=this.usage),e}}class B_ extends Fi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class I_ extends Fi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pa extends Fi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let uM=0;const ui=new un,gd=new Jn,ys=new it,Qn=new Wo,Oo=new Wo,mn=new it;class va extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?I_:B_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(mn),mn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(mn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)mn.fromBufferAttribute(h,p),m&&(ys.fromBufferAttribute(e,p),mn.add(ys)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new it,m[j]=new it;const p=new it,v=new it,_=new it,S=new Me,E=new Me,R=new Me,C=new it,y=new it;function x(j,A,D){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),S.fromBufferAttribute(c,j),E.fromBufferAttribute(c,A),R.fromBufferAttribute(c,D),v.sub(p),_.sub(p),E.sub(S),R.sub(S);const X=1/(E.x*R.y-R.x*E.y);isFinite(X)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(X),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-R.x).multiplyScalar(X),h[j].add(C),h[A].add(C),h[D].add(C),m[j].add(y),m[A].add(y),m[D].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let j=0,A=F.length;j<A;++j){const D=F[j],X=D.start,rt=D.count;for(let at=X,ft=X+rt;at<ft;at+=3)x(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const O=new it,N=new it,z=new it,H=new it;function P(j){z.fromBufferAttribute(l,j),H.copy(z);const A=h[j];O.copy(A),O.sub(z.multiplyScalar(z.dot(A))).normalize(),N.crossVectors(H,A);const X=N.dot(m[j])<0?-1:1;d.setXYZW(j,O.x,O.y,O.z,X)}for(let j=0,A=F.length;j<A;++j){const D=F[j],X=D.start,rt=D.count;for(let at=X,ft=X+rt;at<ft;at+=3)P(e.getX(at+0)),P(e.getX(at+1)),P(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new it,c=new it,d=new it,h=new it,m=new it,p=new it,v=new it,_=new it;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let E=0,R=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*v;for(let x=0;x<v;x++)S[R++]=p[E++]}return new Fi(S,v,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new va,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=e(S,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],_=c[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G0=new un,Sr=new tM,mu=new Uh,V0=new it,gu=new it,_u=new it,vu=new it,_d=new it,xu=new it,X0=new it,Su=new it;class Bi extends Jn{constructor(e=new va,i=new z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){xu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&(_d.fromBufferAttribute(_,e),d?xu.addScaledVector(_d,v):xu.addScaledVector(_d.sub(i),v))}i.add(xu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(c),Sr.copy(e.ray).recast(e.near),!(mu.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(mu,V0)===null||Sr.origin.distanceToSquared(V0)>(e.far-e.near)**2))&&(G0.copy(c).invert(),Sr.copy(e.ray).applyMatrix4(G0),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=d[y.materialIndex],F=Math.max(y.start,E.start),O=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let N=F,z=O;N<z;N+=3){const H=h.getX(N),P=h.getX(N+1),j=h.getX(N+2);l=Mu(this,x,e,r,p,v,_,H,P,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const F=h.getX(y),O=h.getX(y+1),N=h.getX(y+2);l=Mu(this,d,e,r,p,v,_,F,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=d[y.materialIndex],F=Math.max(y.start,E.start),O=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=F,z=O;N<z;N+=3){const H=N,P=N+1,j=N+2;l=Mu(this,x,e,r,p,v,_,H,P,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const F=y,O=y+1,N=y+2;l=Mu(this,d,e,r,p,v,_,F,O,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function cM(o,e,i,r,l,c,d,h){let m;if(e.side===Vn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,e.side===$a,h),m===null)return null;Su.copy(h),Su.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Su);return p<i.near||p>i.far?null:{distance:p,point:Su.clone(),object:o}}function Mu(o,e,i,r,l,c,d,h,m,p){o.getVertexPosition(h,gu),o.getVertexPosition(m,_u),o.getVertexPosition(p,vu);const v=cM(o,e,i,r,gu,_u,vu,X0);if(v){const _=new it;yi.getBarycoord(X0,gu,_u,vu,_),l&&(v.uv=yi.getInterpolatedAttribute(l,h,m,p,_,new Me)),c&&(v.uv1=yi.getInterpolatedAttribute(c,h,m,p,_,new Me)),d&&(v.normal=yi.getInterpolatedAttribute(d,h,m,p,_,new it),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new it,materialIndex:0};yi.getNormal(gu,_u,vu,S.normal),v.face=S,v.barycoord=_}return v}class qo extends va{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,r,i,e,d,c,0),R("z","y","x",1,-1,r,i,-e,d,c,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new pa(p,3)),this.setAttribute("normal",new pa(v,3)),this.setAttribute("uv",new pa(_,2));function R(C,y,x,F,O,N,z,H,P,j,A){const D=N/P,X=z/j,rt=N/2,at=z/2,ft=H/2,lt=P+1,L=j+1;let I=0,tt=0;const St=new it;for(let xt=0;xt<L;xt++){const U=xt*X-at;for(let $=0;$<lt;$++){const mt=$*D-rt;St[C]=mt*F,St[y]=U*O,St[x]=ft,p.push(St.x,St.y,St.z),St[C]=0,St[y]=0,St[x]=H>0?1:-1,v.push(St.x,St.y,St.z),_.push($/P),_.push(1-xt/j),I+=1}}for(let xt=0;xt<j;xt++)for(let U=0;U<P;U++){const $=S+U+lt*xt,mt=S+U+lt*(xt+1),bt=S+(U+1)+lt*(xt+1),Bt=S+(U+1)+lt*xt;m.push($,mt,Bt),m.push(mt,bt,Bt),tt+=6}h.addGroup(E,tt,A),E+=tt,S+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)e[l]=r[l]}return e}function fM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function H_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const dM={clone:Ls,merge:Nn};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class G_ extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new it,k0=new Me,W0=new Me;class Mi extends G_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,k0,W0),i.subVectors(W0,k0)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class mM extends Jn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Es,Ts,e,i);l.layers=this.layers,this.add(l);const c=new Mi(Es,Ts,e,i);c.layers=this.layers,this.add(c);const d=new Mi(Es,Ts,e,i);d.layers=this.layers,this.add(d);const h=new Mi(Es,Ts,e,i);h.layers=this.layers,this.add(h);const m=new Mi(Es,Ts,e,i);m.layers=this.layers,this.add(m);const p=new Mi(Es,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class V_ extends On{constructor(e=[],i=Dr,r,l,c,d,h,m,p,v){super(e,i,r,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X_ extends Pi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new V_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qo(5,5,5),c=new Ti({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:da});c.uniforms.tEquirect.value=i;const d=new Bi(l,c),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Un),new mM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class yu extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class _M extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vM extends On{constructor(e=null,i=1,r=1,l,c,d,h,m,p=An,v=An,_,S){super(null,d,h,m,p,v,l,c,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new it,xM=new it,SM=new ce;class Tr{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=xd.subVectors(r,i).cross(xM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||SM.getNormalMatrix(e),l=this.coplanarPoint(xd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Uh,MM=new Me(.5,.5),Eu=new it;class k_{constructor(e=new Tr,i=new Tr,r=new Tr,l=new Tr,c=new Tr,d=new Tr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ni,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],_=c[5],S=c[6],E=c[7],R=c[8],C=c[9],y=c[10],x=c[11],F=c[12],O=c[13],N=c[14],z=c[15];if(l[0].setComponents(p-d,E-v,x-R,z-F).normalize(),l[1].setComponents(p+d,E+v,x+R,z+F).normalize(),l[2].setComponents(p+h,E+_,x+C,z+O).normalize(),l[3].setComponents(p-h,E-_,x-C,z-O).normalize(),r)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,E-S,x-y,z-N).normalize();else if(l[4].setComponents(p-m,E-S,x-y,z-N).normalize(),i===Ni)l[5].setComponents(p+m,E+S,x+y,z+N).normalize();else if(i===Nu)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const i=MM.distanceTo(e.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Eu.x=l.normal.x>0?e.max.x:e.min.x,Eu.y=l.normal.y>0?e.max.y:e.min.y,Eu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vo extends On{constructor(e,i,r=zi,l,c,d,h=An,m=An,p,v=ga,_=1){if(v!==ga&&v!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,c,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class yM extends Vo{constructor(e,i=zi,r=Dr,l,c,d=An,h=An,m,p=ga){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yo extends va{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,S=i/m,E=[],R=[],C=[],y=[];for(let x=0;x<v;x++){const F=x*S-d;for(let O=0;O<p;O++){const N=O*_-c;R.push(N,-F,0),C.push(0,0,1),y.push(O/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<h;F++){const O=F+p*x,N=F+p*(x+1),z=F+1+p*(x+1),H=F+1+p*x;E.push(O,N,H),E.push(N,z,H)}this.setIndex(E),this.setAttribute("position",new pa(R,3)),this.setAttribute("normal",new pa(C,3)),this.setAttribute("uv",new pa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class EM extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TM extends Fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends Fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lh extends G_{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class AM extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function q0(o,e,i,r){const l=CM(r);switch(i){case w_:return o*e;case L_:return o*e/l.components*l.byteLength;case bh:return o*e/l.components*l.byteLength;case ws:return o*e*2/l.components*l.byteLength;case Ah:return o*e*2/l.components*l.byteLength;case U_:return o*e*3/l.components*l.byteLength;case Ei:return o*e*4/l.components*l.byteLength;case Rh:return o*e*4/l.components*l.byteLength;case Ru:case Cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Du:case wu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Vd:return Math.max(o,16)*Math.max(e,8)/4;case Id:case Gd:return Math.max(o,8)*Math.max(e,8)/2;case Xd:case kd:case qd:case Yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wd:case Zd:case jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case nh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ih:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ch:case fh:case dh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case hh:case ph:return Math.ceil(o/4)*Math.ceil(e/4)*8;case mh:case gh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CM(o){switch(o){case fi:case A_:return{byteLength:1,components:1};case Io:case R_:case ma:return{byteLength:2,components:1};case Eh:case Th:return{byteLength:2,components:4};case zi:case yh:case Li:return{byteLength:4,components:1};case C_:case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);function q_(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function DM(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],C=_[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const C=_[E];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
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
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
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
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$M=`#define PI 3.141592653589793
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
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
#endif`,yy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Cy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iy=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zE=`#define DISTANCE
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
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,VE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,kE=`uniform vec3 diffuse;
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
}`,WE=`#define LAMBERT
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
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,YE=`#define MATCAP
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
}`,ZE=`#define MATCAP
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
}`,jE=`#define NORMAL
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
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
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
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,$E=`#define STANDARD
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
}`,tT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,eT=`#define TOON
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
}`,nT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,iT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,sT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,oT=`uniform float rotation;
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
}`,lT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:wM,alphahash_pars_fragment:UM,alphamap_fragment:LM,alphamap_pars_fragment:NM,alphatest_fragment:OM,alphatest_pars_fragment:PM,aomap_fragment:FM,aomap_pars_fragment:zM,batching_pars_vertex:BM,batching_vertex:IM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:XM,bumpmap_pars_fragment:kM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:ZM,color_fragment:jM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ey,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ay,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:oy,envmap_fragment:ly,envmap_common_pars_fragment:uy,envmap_pars_fragment:cy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:yy,envmap_vertex:dy,fog_vertex:hy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:vy,lights_lambert_fragment:xy,lights_lambert_pars_fragment:Sy,lights_pars_begin:My,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:by,lights_phong_pars_fragment:Ay,lights_physical_fragment:Ry,lights_physical_pars_fragment:Cy,lights_fragment_begin:Dy,lights_fragment_maps:wy,lights_fragment_end:Uy,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:Py,map_fragment:Fy,map_pars_fragment:zy,map_particle_fragment:By,map_particle_pars_fragment:Iy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Vy,morphcolor_vertex:Xy,morphnormal_vertex:ky,morphtarget_pars_vertex:Wy,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:Zy,normal_pars_fragment:jy,normal_pars_vertex:Ky,normal_vertex:Qy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:eE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:aE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:dE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:_E,skinnormal_vertex:vE,specularmap_fragment:xE,specularmap_pars_fragment:SE,tonemapping_fragment:ME,tonemapping_pars_fragment:yE,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:bE,uv_pars_vertex:AE,uv_vertex:RE,worldpos_vertex:CE,background_vert:DE,background_frag:wE,backgroundCube_vert:UE,backgroundCube_frag:LE,cube_vert:NE,cube_frag:OE,depth_vert:PE,depth_frag:FE,distance_vert:zE,distance_frag:BE,equirect_vert:IE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:VE,meshbasic_vert:XE,meshbasic_frag:kE,meshlambert_vert:WE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:ZE,meshnormal_vert:jE,meshnormal_frag:KE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:$E,meshphysical_frag:tT,meshtoon_vert:eT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:rT,shadow_frag:sT,sprite_vert:oT,sprite_frag:lT},Ot={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ui={basic:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ge(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Nn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Nn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ge(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Nn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Nn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Nn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Nn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Nn([Ot.common,Ot.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Nn([Ot.lights,Ot.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ui.physical={uniforms:Nn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Tu={r:0,b:0,g:0},yr=new _a,uT=new un;function cT(o,e,i,r,l,c,d){const h=new Ge(0);let m=c===!0?0:1,p,v,_=null,S=0,E=null;function R(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:e).get(N)),N}function C(O){let N=!1;const z=R(O);z===null?x(h,m):z&&z.isColor&&(x(z,1),N=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,N){const z=R(N);z&&(z.isCubeTexture||z.mapping===Pu)?(v===void 0&&(v=new Bi(new qo(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Ls(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),yr.copy(N.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(yr)),v.material.toneMapped=Te.getTransfer(z.colorSpace)!==ze,(_!==z||S!==z.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=z,S=z.version,E=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Bi(new Yo(2,2),new Ti({name:"BackgroundMaterial",uniforms:Ls(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Te.getTransfer(z.colorSpace)!==ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||S!==z.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=z,S=z.version,E=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,N){O.getRGB(Tu,H_(o)),r.buffers.color.setClear(Tu.r,Tu.g,Tu.b,N,d)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,N=1){h.set(O),m=N,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(h,m)},render:C,addToRenderList:y,dispose:F}}function fT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,d=!1;function h(D,X,rt,at,ft){let lt=!1;const L=_(at,rt,X);c!==L&&(c=L,p(c.object)),lt=E(D,at,rt,ft),lt&&R(D,at,rt,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(lt||d)&&(d=!1,N(D,X,rt,at),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function v(D){return o.deleteVertexArray(D)}function _(D,X,rt){const at=rt.wireframe===!0;let ft=r[D.id];ft===void 0&&(ft={},r[D.id]=ft);let lt=ft[X.id];lt===void 0&&(lt={},ft[X.id]=lt);let L=lt[at];return L===void 0&&(L=S(m()),lt[at]=L),L}function S(D){const X=[],rt=[],at=[];for(let ft=0;ft<i;ft++)X[ft]=0,rt[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:rt,attributeDivisors:at,object:D,attributes:{},index:null}}function E(D,X,rt,at){const ft=c.attributes,lt=X.attributes;let L=0;const I=rt.getAttributes();for(const tt in I)if(I[tt].location>=0){const xt=ft[tt];let U=lt[tt];if(U===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;L++}return c.attributesNum!==L||c.index!==at}function R(D,X,rt,at){const ft={},lt=X.attributes;let L=0;const I=rt.getAttributes();for(const tt in I)if(I[tt].location>=0){let xt=lt[tt];xt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),ft[tt]=U,L++}c.attributes=ft,c.attributesNum=L,c.index=at}function C(){const D=c.newAttributes;for(let X=0,rt=D.length;X<rt;X++)D[X]=0}function y(D){x(D,0)}function x(D,X){const rt=c.newAttributes,at=c.enabledAttributes,ft=c.attributeDivisors;rt[D]=1,at[D]===0&&(o.enableVertexAttribArray(D),at[D]=1),ft[D]!==X&&(o.vertexAttribDivisor(D,X),ft[D]=X)}function F(){const D=c.newAttributes,X=c.enabledAttributes;for(let rt=0,at=X.length;rt<at;rt++)X[rt]!==D[rt]&&(o.disableVertexAttribArray(rt),X[rt]=0)}function O(D,X,rt,at,ft,lt,L){L===!0?o.vertexAttribIPointer(D,X,rt,ft,lt):o.vertexAttribPointer(D,X,rt,at,ft,lt)}function N(D,X,rt,at){C();const ft=at.attributes,lt=rt.getAttributes(),L=X.defaultAttributeValues;for(const I in lt){const tt=lt[I];if(tt.location>=0){let St=ft[I];if(St===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),St!==void 0){const xt=St.normalized,U=St.itemSize,$=e.get(St);if($===void 0)continue;const mt=$.buffer,bt=$.type,Bt=$.bytesPerElement,J=bt===o.INT||bt===o.UNSIGNED_INT||St.gpuType===yh;if(St.isInterleavedBufferAttribute){const ut=St.data,At=ut.stride,Nt=St.offset;if(ut.isInstancedInterleavedBuffer){for(let Pt=0;Pt<tt.locationSize;Pt++)x(tt.location+Pt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Pt=0;Pt<tt.locationSize;Pt++)y(tt.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Pt=0;Pt<tt.locationSize;Pt++)O(tt.location+Pt,U/tt.locationSize,bt,xt,At*Bt,(Nt+U/tt.locationSize*Pt)*Bt,J)}else{if(St.isInstancedBufferAttribute){for(let ut=0;ut<tt.locationSize;ut++)x(tt.location+ut,St.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ut=0;ut<tt.locationSize;ut++)y(tt.location+ut);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let ut=0;ut<tt.locationSize;ut++)O(tt.location+ut,U/tt.locationSize,bt,xt,U*Bt,U/tt.locationSize*ut*Bt,J)}}else if(L!==void 0){const xt=L[I];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(tt.location,xt);break;case 3:o.vertexAttrib3fv(tt.location,xt);break;case 4:o.vertexAttrib4fv(tt.location,xt);break;default:o.vertexAttrib1fv(tt.location,xt)}}}}F()}function z(){j();for(const D in r){const X=r[D];for(const rt in X){const at=X[rt];for(const ft in at)v(at[ft].object),delete at[ft];delete X[rt]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const X=r[D.id];for(const rt in X){const at=X[rt];for(const ft in at)v(at[ft].object),delete at[ft];delete X[rt]}delete r[D.id]}function P(D){for(const X in r){const rt=r[X];if(rt[D.id]===void 0)continue;const at=rt[D.id];for(const ft in at)v(at[ft].object),delete at[ft];delete rt[D.id]}}function j(){A(),d=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:F}}function dT(o,e,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=v[R];i.update(E,r,1)}function m(p,v,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)d(p[R],v[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let R=0;for(let C=0;C<_;C++)R+=v[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function hT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ei&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const j=P===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Li&&!j)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(se("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:N,maxSamples:z,samples:H}}function pT(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Tr,h=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||l;return l=S,r=_.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||c&&!y)c?v(null):p();else{const F=c?0:r,O=F*4;let N=x.clippingState||null;m.value=N,N=v(R,S,O,E);for(let z=0;z!==O;++z)N[z]=i[z];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,E,R){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const x=E+C*4,F=S.matrixWorldInverse;h.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,N=E;O!==C;++O,N+=4)d.copy(_[O]).applyMatrix4(F,h),d.normal.toArray(y,N),y[N+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function mT(o){let e=new WeakMap;function i(d,h){return h===Pd?d.mapping=Dr:h===Fd&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Pd||h===Fd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new X_(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ja=4,Y0=[.125,.215,.35,.446,.526,.582],Ar=20,gT=256,Po=new Lh,Z0=new Ge;let Sd=null,Md=0,yd=0,Ed=!1;const _T=new it;class j0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=_T}=c;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,yd),this._renderer.xr.enabled=Ed,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ma,format:Ei,colorSpace:Us,depthBuffer:!1},l=K0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vT(c)),this._blurMaterial=ST(c,e,i),this._ggxMaterial=xT(c,e,i)}return l}_compileMaterial(e){const i=new Bi(new va,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,c){const m=new Mi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(Z0),_.toneMapping=Oi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new qo,new z_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,x=!0):(y.color.copy(Z0),x=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[O],c.y,c.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[O]));const z=this._cubeSize;bs(l,N*z,O>2?z:0,z,z),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Dr||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;bs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:R}=this,C=this._sizeLods[r],y=3*C*(r>R-Ja?r-R+Ja:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,bs(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(h,Po),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-r,bs(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(h,Po)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),C=c/R,y=isFinite(c)?1+Math.floor(v*C):Ar;y>Ar&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const x=[];let F=0;for(let P=0;P<Ar;++P){const j=P/C,A=Math.exp(-j*j/2);x.push(A),P===0?F+=A:P<y&&(F+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=R,S.mipInt.value=O-r;const N=this._sizeLods[l],z=3*N*(l>O-Ja?l-O+Ja:0),H=4*(this._cubeSize-N);bs(i,z,H,3*N,2*N),m.setRenderTarget(i),m.render(_,Po)}}function vT(o){const e=[],i=[],r=[];let l=o;const c=o-Ja+1+Y0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-Ja?m=Y0[d-o+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,R=6,C=3,y=2,x=1,F=new Float32Array(C*R*E),O=new Float32Array(y*R*E),N=new Float32Array(x*R*E);for(let H=0;H<E;H++){const P=H%3*2/3-1,j=H>2?0:-1,A=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];F.set(A,C*R*H),O.set(S,y*R*H);const D=[H,H,H,H,H,H];N.set(D,x*R*H)}const z=new va;z.setAttribute("position",new Fi(F,C)),z.setAttribute("uv",new Fi(O,y)),z.setAttribute("faceIndex",new Fi(N,x)),r.push(new Bi(z,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function K0(o,e,i){const r=new Pi(o,e,i);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function xT(o,e,i){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function ST(o,e,i){const r=new Float32Array(Ar),l=new it(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zu(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function Q0(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function J0(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function MT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Pd||m===Fd,v=m===Dr||m===Ds;if(p||v){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new j0(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new j0(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function yT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Go("WebGLRenderer: "+r+" extension not supported."),l}}}function ET(o,e,i,r){const l={},c=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let C=0;if(E!==null){const F=E.array;C=E.version;for(let O=0,N=F.length;O<N;O+=3){const z=F[O+0],H=F[O+1],P=F[O+2];S.push(z,H,H,P,P,z)}}else if(R!==void 0){const F=R.array;C=R.version;for(let O=0,N=F.length/3-1;O<N;O+=3){const z=O+0,H=O+1,P=O+2;S.push(z,H,H,P,P,z)}}else return;const y=new(N_(S)?I_:B_)(S,1);y.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function v(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function TT(o,e,i){let r;function l(S){r=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,E){o.drawElements(r,E,c,S*d),i.update(E,r,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(r,E,c,S*d,R),i.update(E,r,R))}function v(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,S,0,R);let y=0;for(let x=0;x<R;x++)y+=E[x];i.update(y,r,1)}function _(S,E,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,E[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,c,S,0,C,0,R);let x=0;for(let F=0;F<R;F++)x+=E[F]*C[F];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function bT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Re("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function AT(o,e,i){const r=new WeakMap,l=new en;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let D=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var E=D;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;R===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let z=h.attributes.position.count*N,H=1;z>e.maxTextureSize&&(H=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*H*4*_),j=new O_(P,z,H,_);j.type=Li,j.needsUpdate=!0;const A=N*4;for(let X=0;X<_;X++){const rt=x[X],at=F[X],ft=O[X],lt=z*H*4*X;for(let L=0;L<rt.count;L++){const I=L*A;R===!0&&(l.fromBufferAttribute(rt,L),P[lt+I+0]=l.x,P[lt+I+1]=l.y,P[lt+I+2]=l.z,P[lt+I+3]=0),C===!0&&(l.fromBufferAttribute(at,L),P[lt+I+4]=l.x,P[lt+I+5]=l.y,P[lt+I+6]=l.z,P[lt+I+7]=0),y===!0&&(l.fromBufferAttribute(ft,L),P[lt+I+8]=l.x,P[lt+I+9]=l.y,P[lt+I+10]=l.z,P[lt+I+11]=ft.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new Me(z,H)},r.set(h,S),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function RT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const CT={[v_]:"LINEAR_TONE_MAPPING",[x_]:"REINHARD_TONE_MAPPING",[S_]:"CINEON_TONE_MAPPING",[M_]:"ACES_FILMIC_TONE_MAPPING",[E_]:"AGX_TONE_MAPPING",[T_]:"NEUTRAL_TONE_MAPPING",[y_]:"CUSTOM_TONE_MAPPING"};function DT(o,e,i,r,l){const c=new Pi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Pi(e,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),h=new va;h.setAttribute("position",new pa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pa([0,2,0,0,2,0],2));const m=new EM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Bi(h,m),v=new Lh(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,C=null,y=[],x=!1;this.setSize=function(F,O){c.setSize(F,O),d.setSize(F,O);for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(F,O)}},this.setEffects=function(F){y=F,x=y.length>0&&y[0].isRenderPass===!0;const O=c.width,N=c.height;for(let z=0;z<y.length;z++){const H=y[z];H.setSize&&H.setSize(O,N)}},this.begin=function(F,O){if(E||F.toneMapping===Oi&&y.length===0)return!1;if(C=O,O!==null){const N=O.width,z=O.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return x===!1&&F.setRenderTarget(c),R=F.toneMapping,F.toneMapping=Oi,!0},this.hasRenderPass=function(){return x},this.end=function(F,O){F.toneMapping=R,E=!0;let N=c,z=d;for(let H=0;H<y.length;H++){const P=y[H];if(P.enabled!==!1&&(P.render(F,z,N,O),P.needsSwap!==!1)){const j=N;N=z,z=j}}if(_!==F.outputColorSpace||S!==F.toneMapping){_=F.outputColorSpace,S=F.toneMapping,m.defines={},Te.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const H=CT[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,F.setRenderTarget(C),F.render(p,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Y_=new On,vh=new Vo(1,1),Z_=new O_,j_=new JS,K_=new V_,$0=[],t_=[],e_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function Os(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=$0[l];if(c===void 0&&(c=new Float32Array(l),$0[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Bu(o,e){let i=t_[e];i===void 0&&(i=new Int32Array(e),t_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(dn(i,r))return;i_.set(r),o.uniformMatrix2fv(this.addr,!1,i_),hn(i,r)}}function PT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(dn(i,r))return;n_.set(r),o.uniformMatrix3fv(this.addr,!1,n_),hn(i,r)}}function FT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(dn(i,r))return;e_.set(r),o.uniformMatrix4fv(this.addr,!1,e_),hn(i,r)}}function zT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function GT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(vh.compareFunction=i.isReversedDepthBuffer()?Dh:Ch,c=vh):c=Y_,i.setTexture2D(e||c,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||j_,l)}function YT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||K_,l)}function ZT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Z_,l)}function jT(o){switch(o){case 5126:return wT;case 35664:return UT;case 35665:return LT;case 35666:return NT;case 35674:return OT;case 35675:return PT;case 35676:return FT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return IT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return XT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return ZT}}function KT(o,e){o.uniform1fv(this.addr,e)}function QT(o,e){const i=Os(e,this.size,2);o.uniform2fv(this.addr,i)}function JT(o,e){const i=Os(e,this.size,3);o.uniform3fv(this.addr,i)}function $T(o,e){const i=Os(e,this.size,4);o.uniform4fv(this.addr,i)}function tb(o,e){const i=Os(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function eb(o,e){const i=Os(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function nb(o,e){const i=Os(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ib(o,e){o.uniform1iv(this.addr,e)}function ab(o,e){o.uniform2iv(this.addr,e)}function rb(o,e){o.uniform3iv(this.addr,e)}function sb(o,e){o.uniform4iv(this.addr,e)}function ob(o,e){o.uniform1uiv(this.addr,e)}function lb(o,e){o.uniform2uiv(this.addr,e)}function ub(o,e){o.uniform3uiv(this.addr,e)}function cb(o,e){o.uniform4uiv(this.addr,e)}function fb(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=vh:d=Y_;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function db(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||j_,c[d])}function hb(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||K_,c[d])}function pb(o,e,i){const r=this.cache,l=e.length,c=Bu(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Z_,c[d])}function mb(o){switch(o){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return ab;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return lb;case 36295:return ub;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class _b{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mb(i.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function a_(o,e){o.seq.push(e),o.map[e.id]=e}function xb(o,e,i){const r=o.name,l=r.length;for(Td.lastIndex=0;;){const c=Td.exec(r),d=Td.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){a_(i,p===void 0?new gb(h,o,e):new _b(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new vb(h),a_(i,_)),i=_}}}class Uu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);xb(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function r_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Sb=37297;let Mb=0;function yb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const s_=new ce;function Eb(o){Te._getMatrix(s_,Te.workingColorSpace,o);const e=`mat3( ${s_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Lu:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function o_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+yb(o.getShaderSource(e),h)}else return c}function Tb(o,e){const i=Eb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bb={[v_]:"Linear",[x_]:"Reinhard",[S_]:"Cineon",[M_]:"ACESFilmic",[E_]:"AgX",[T_]:"Neutral",[y_]:"Custom"};function Ab(o,e){const i=bb[e];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bu=new it;function Rb(){Te.getLuminanceCoefficients(bu);const o=bu.x.toFixed(4),e=bu.y.toFixed(4),i=bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Db(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Bo(o){return o!==""}function l_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(o){return o.replace(Ub,Nb)}const Lb=new Map;function Nb(o,e){let i=fe[e];if(i===void 0){const r=Lb.get(e);if(r!==void 0)i=fe[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xh(i)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(o){return o.replace(Ob,Pb)}function Pb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function f_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fb={[Au]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function zb(o){return Fb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bb={[Dr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function Ib(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Bb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hb={[Ds]:"ENVMAP_MODE_REFRACTION"};function Gb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Hb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vb={[__]:"ENVMAP_BLENDING_MULTIPLY",[LS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function Xb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Vb[o.combine]||"ENVMAP_BLENDING_NONE"}function kb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Wb(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=zb(i),p=Ib(i),v=Gb(i),_=Xb(i),S=kb(i),E=Cb(i),R=Db(c),C=l.createProgram();let y,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[f_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[f_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oi?"#define TONE_MAPPING":"",i.toneMapping!==Oi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Oi?Ab("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Tb("linearToOutputTexel",i.outputColorSpace),Rb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),d=xh(d),d=l_(d,i),d=u_(d,i),h=xh(h),h=l_(h,i),h=u_(h,i),d=c_(d),h=c_(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===R0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=F+y+d,N=F+x+h,z=r_(l,l.VERTEX_SHADER,O),H=r_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,z),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(X){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(z)||"",ft=l.getShaderInfoLog(H)||"",lt=rt.trim(),L=at.trim(),I=ft.trim();let tt=!0,St=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(tt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,H);else{const xt=o_(l,z,"vertex"),U=o_(l,H,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+lt+`
`+xt+`
`+U)}else lt!==""?se("WebGLProgram: Program Info Log:",lt):(L===""||I==="")&&(St=!1);St&&(X.diagnostics={runnable:tt,programLog:lt,vertexShader:{log:L,prefix:y},fragmentShader:{log:I,prefix:x}})}l.deleteShader(z),l.deleteShader(H),j=new Uu(l,C),A=wb(l,C)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,Sb)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=H,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Zb(e),i.set(e,r)),r}}class Zb{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function jb(o,e,i,r,l,c,d){const h=new P_,m=new Yb,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,D,X,rt,at){const ft=rt.fog,lt=at.geometry,L=A.isMeshStandardMaterial?rt.environment:null,I=(A.isMeshStandardMaterial?i:e).get(A.envMap||L),tt=I&&I.mapping===Pu?I.image.height:null,St=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&se("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,U=xt!==void 0?xt.length:0;let $=0;lt.morphAttributes.position!==void 0&&($=1),lt.morphAttributes.normal!==void 0&&($=2),lt.morphAttributes.color!==void 0&&($=3);let mt,bt,Bt,J;if(St){const Ee=Ui[St];mt=Ee.vertexShader,bt=Ee.fragmentShader}else mt=A.vertexShader,bt=A.fragmentShader,m.update(A),Bt=m.getVertexShaderID(A),J=m.getFragmentShaderID(A);const ut=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Nt=at.isInstancedMesh===!0,Pt=at.isBatchedMesh===!0,ee=!!A.map,Ve=!!A.matcap,he=!!I,de=!!A.aoMap,ye=!!A.lightMap,ie=!!A.bumpMap,Ke=!!A.normalMap,G=!!A.displacementMap,Ye=!!A.emissiveMap,Se=!!A.metalnessMap,Ue=!!A.roughnessMap,qt=A.anisotropy>0,w=A.clearcoat>0,M=A.dispersion>0,W=A.iridescence>0,ht=A.sheen>0,vt=A.transmission>0,ct=qt&&!!A.anisotropyMap,Zt=w&&!!A.clearcoatMap,Ct=w&&!!A.clearcoatNormalMap,Xt=w&&!!A.clearcoatRoughnessMap,te=W&&!!A.iridescenceMap,yt=W&&!!A.iridescenceThicknessMap,Et=ht&&!!A.sheenColorMap,It=ht&&!!A.sheenRoughnessMap,Ft=!!A.specularMap,Dt=!!A.specularColorMap,le=!!A.specularIntensityMap,k=vt&&!!A.transmissionMap,Ut=vt&&!!A.thicknessMap,Tt=!!A.gradientMap,zt=!!A.alphaMap,Mt=A.alphaTest>0,_t=!!A.alphaHash,Rt=!!A.extensions;let ne=Oi;A.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Ne={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:mt,fragmentShader:bt,defines:A.defines,customVertexShaderID:Bt,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Pt,batchingColor:Pt&&at._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&at.instanceColor!==null,instancingMorph:Nt&&at.morphTexture!==null,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Us,alphaToCoverage:!!A.alphaToCoverage,map:ee,matcap:Ve,envMap:he,envMapMode:he&&I.mapping,envMapCubeUVHeight:tt,aoMap:de,lightMap:ye,bumpMap:ie,normalMap:Ke,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:Ke&&A.normalMapType===zS,normalMapTangentSpace:Ke&&A.normalMapType===FS,metalnessMap:Se,roughnessMap:Ue,anisotropy:qt,anisotropyMap:ct,clearcoat:w,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,dispersion:M,iridescence:W,iridescenceMap:te,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:It,specularMap:Ft,specularColorMap:Dt,specularIntensityMap:le,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===As&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:_t,combine:A.combine,mapUv:ee&&C(A.map.channel),aoMapUv:de&&C(A.aoMap.channel),lightMapUv:ye&&C(A.lightMap.channel),bumpMapUv:ie&&C(A.bumpMap.channel),normalMapUv:Ke&&C(A.normalMap.channel),displacementMapUv:G&&C(A.displacementMap.channel),emissiveMapUv:Ye&&C(A.emissiveMap.channel),metalnessMapUv:Se&&C(A.metalnessMap.channel),roughnessMapUv:Ue&&C(A.roughnessMap.channel),anisotropyMapUv:ct&&C(A.anisotropyMap.channel),clearcoatMapUv:Zt&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&C(A.sheenRoughnessMap.channel),specularMapUv:Ft&&C(A.specularMap.channel),specularColorMapUv:Dt&&C(A.specularColorMap.channel),specularIntensityMapUv:le&&C(A.specularIntensityMap.channel),transmissionMapUv:k&&C(A.transmissionMap.channel),thicknessMapUv:Ut&&C(A.thicknessMap.channel),alphaMapUv:zt&&C(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ke||qt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!lt.attributes.uv&&(ee||zt),fog:!!ft,useFog:A.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:At,skinning:at.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:ee&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===ze,decodeVideoTextureEmissive:Ye&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===ze,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ca,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Rt&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&A.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function x(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const X in A.defines)D.push(X),D.push(A.defines[X]);return A.isRawShaderMaterial===!1&&(F(D,A),O(D,A),D.push(o.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function F(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function O(A,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),A.push(h.mask)}function N(A){const D=R[A.type];let X;if(D){const rt=Ui[D];X=dM.clone(rt.uniforms)}else X=A.uniforms;return X}function z(A,D){let X=_.get(D);return X!==void 0?++X.usedTimes:(X=new Wb(o,D,A,c),v.push(X),_.set(D,X)),X}function H(A){if(--A.usedTimes===0){const D=v.indexOf(A);v[D]=v[v.length-1],v.pop(),_.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:z,releaseProgram:H,releaseShaderCache:P,programs:v,dispose:j}}function Kb(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Qb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function d_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function h_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,E,R,C,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:C,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=R,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function h(_,S,E,R,C,y){const x=d(_,S,E,R,C,y);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,R,C,y){const x=d(_,S,E,R,C,y);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||Qb),r.length>1&&r.sort(S||d_),l.length>1&&l.sort(S||d_)}function v(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function Jb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new h_,o.set(r,[d])):l>=c.length?(d=new h_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function $b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ge};break;case"SpotLight":i={position:new it,direction:new it,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function tA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let eA=0;function nA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iA(o){const e=new $b,i=tA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,c=new un,d=new un;function h(p){let v=0,_=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let E=0,R=0,C=0,y=0,x=0,F=0,O=0,N=0,z=0,H=0,P=0;p.sort(nA);for(let A=0,D=p.length;A<D;A++){const X=p[A],rt=X.color,at=X.intensity,ft=X.distance;let lt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ws?lt=X.shadow.map.texture:lt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=rt.r*at,_+=rt.g*at,S+=rt.b*at;else if(X.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(X.sh.coefficients[L],at);P++}else if(X.isDirectionalLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const I=X.shadow,tt=i.get(X);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize=I.mapSize,r.directionalShadow[E]=tt,r.directionalShadowMap[E]=lt,r.directionalShadowMatrix[E]=X.shadow.matrix,F++}r.directional[E]=L,E++}else if(X.isSpotLight){const L=e.get(X);L.position.setFromMatrixPosition(X.matrixWorld),L.color.copy(rt).multiplyScalar(at),L.distance=ft,L.coneCos=Math.cos(X.angle),L.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),L.decay=X.decay,r.spot[C]=L;const I=X.shadow;if(X.map&&(r.spotLightMap[z]=X.map,z++,I.updateMatrices(X),X.castShadow&&H++),r.spotLightMatrix[C]=I.matrix,X.castShadow){const tt=i.get(X);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize=I.mapSize,r.spotShadow[C]=tt,r.spotShadowMap[C]=lt,N++}C++}else if(X.isRectAreaLight){const L=e.get(X);L.color.copy(rt).multiplyScalar(at),L.halfWidth.set(X.width*.5,0,0),L.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=L,y++}else if(X.isPointLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),L.distance=X.distance,L.decay=X.decay,X.castShadow){const I=X.shadow,tt=i.get(X);tt.shadowIntensity=I.intensity,tt.shadowBias=I.bias,tt.shadowNormalBias=I.normalBias,tt.shadowRadius=I.radius,tt.shadowMapSize=I.mapSize,tt.shadowCameraNear=I.camera.near,tt.shadowCameraFar=I.camera.far,r.pointShadow[R]=tt,r.pointShadowMap[R]=lt,r.pointShadowMatrix[R]=X.shadow.matrix,O++}r.point[R]=L,R++}else if(X.isHemisphereLight){const L=e.get(X);L.skyColor.copy(X.color).multiplyScalar(at),L.groundColor.copy(X.groundColor).multiplyScalar(at),r.hemi[x]=L,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==E||j.pointLength!==R||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==F||j.numPointShadows!==O||j.numSpotShadows!==N||j.numSpotMaps!==z||j.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=N+z-H,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=P,j.directionalLength=E,j.pointLength=R,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=F,j.numPointShadows=O,j.numSpotShadows=N,j.numSpotMaps=z,j.numLightProbes=P,r.version=eA++)}function m(p,v){let _=0,S=0,E=0,R=0,C=0;const y=v.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const O=p[x];if(O.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(O.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const N=r.rectArea[R];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),d.identity(),c.copy(O.matrixWorld),c.premultiply(y),d.extractRotation(c),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),R++}else if(O.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function p_(o){const e=new iA(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function aA(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new p_(o),e.set(l,[h])):c>=d.length?(h=new p_(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oA=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],lA=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],m_=new un,Fo=new it,bd=new it;function uA(o,e,i){let r=new k_;const l=new Me,c=new Me,d=new en,h=new TM,m=new bM,p={},v=i.maxTextureSize,_={[$a]:Vn,[Vn]:$a,[ca]:ca},S=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new va;R.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Bi(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let x=this.type;this.render=function(H,P,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;H.type===hS&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Au);const A=o.getRenderTarget(),D=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(da),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=x!==this.type;at&&P.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(lt=>lt.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,lt=H.length;ft<lt;ft++){const L=H[ft],I=L.shadow;if(I===void 0){se("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const tt=I.getFrameExtents();if(l.multiply(tt),c.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/tt.x),l.x=c.x*tt.x,I.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/tt.y),l.y=c.y*tt.y,I.mapSize.y=c.y)),I.map===null||at===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===zo){if(L.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Pi(l.x,l.y,{format:ws,type:ma,minFilter:Un,magFilter:Un,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new Vo(l.x,l.y,Li),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=ga,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=An,I.map.depthTexture.magFilter=An}else{L.isPointLight?(I.map=new X_(l.x),I.map.depthTexture=new yM(l.x,zi)):(I.map=new Pi(l.x,l.y),I.map.depthTexture=new Vo(l.x,l.y,zi)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=ga;const xt=o.state.buffers.depth.getReversed();this.type===Au?(I.map.depthTexture.compareFunction=xt?Dh:Ch,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=An,I.map.depthTexture.magFilter=An)}I.camera.updateProjectionMatrix()}const St=I.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<St;xt++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(I.map),o.clear());const U=I.getViewport(xt);d.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),rt.viewport(d)}if(L.isPointLight){const U=I.camera,$=I.matrix,mt=L.distance||U.far;mt!==U.far&&(U.far=mt,U.updateProjectionMatrix()),Fo.setFromMatrixPosition(L.matrixWorld),U.position.copy(Fo),bd.copy(U.position),bd.add(oA[xt]),U.up.copy(lA[xt]),U.lookAt(bd),U.updateMatrixWorld(),$.makeTranslation(-Fo.x,-Fo.y,-Fo.z),m_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),I._frustum.setFromProjectionMatrix(m_,U.coordinateSystem,U.reversedDepth)}else I.updateMatrices(L);r=I.getFrustum(),N(P,j,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===zo&&F(I,j),I.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,D,X)};function F(H,P){const j=e.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Pi(l.x,l.y,{format:ws,type:ma})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,j,S,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,j,E,C,null)}function O(H,P,j,A){let D=null;const X=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(X!==void 0)D=X;else if(D=j.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const rt=D.uuid,at=P.uuid;let ft=p[rt];ft===void 0&&(ft={},p[rt]=ft);let lt=ft[at];lt===void 0&&(lt=D.clone(),ft[at]=lt,P.addEventListener("dispose",z)),D=lt}if(D.visible=P.visible,D.wireframe=P.wireframe,A===zo?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:_[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const rt=o.properties.get(D);rt.light=j}return D}function N(H,P,j,A,D){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===zo)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const at=e.update(H),ft=H.material;if(Array.isArray(ft)){const lt=at.groups;for(let L=0,I=lt.length;L<I;L++){const tt=lt[L],St=ft[tt.materialIndex];if(St&&St.visible){const xt=O(H,St,A,D);H.onBeforeShadow(o,H,P,j,at,xt,tt),o.renderBufferDirect(j,null,at,xt,H,tt),H.onAfterShadow(o,H,P,j,at,xt,tt)}}}else if(ft.visible){const lt=O(H,ft,A,D);H.onBeforeShadow(o,H,P,j,at,lt,null),o.renderBufferDirect(j,null,at,lt,H,null),H.onAfterShadow(o,H,P,j,at,lt,null)}}const rt=H.children;for(let at=0,ft=rt.length;at<ft;at++)N(rt[at],P,j,A,D)}function z(H){H.target.removeEventListener("dispose",z);for(const j in p){const A=p[j],D=H.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const cA={[Cd]:Dd,[wd]:Nd,[Ud]:Od,[Cs]:Ld,[Dd]:Cd,[Nd]:wd,[Od]:Ud,[Ld]:Cs};function fA(o,e){function i(){let k=!1;const Ut=new en;let Tt=null;const zt=new en(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!k&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,_t,Rt,ne,Ne){Ne===!0&&(Mt*=ne,_t*=ne,Rt*=ne),Ut.set(Mt,_t,Rt,ne),zt.equals(Ut)===!1&&(o.clearColor(Mt,_t,Rt,ne),zt.copy(Ut))},reset:function(){k=!1,Tt=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Tt=null,zt=null,Mt=null;return{setReversed:function(_t){if(Ut!==_t){const Rt=e.get("EXT_clip_control");_t?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!k&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=cA[_t]),zt!==_t){switch(_t){case Cd:o.depthFunc(o.NEVER);break;case Dd:o.depthFunc(o.ALWAYS);break;case wd:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Ud:o.depthFunc(o.EQUAL);break;case Ld:o.depthFunc(o.GEQUAL);break;case Nd:o.depthFunc(o.GREATER);break;case Od:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Mt!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){k=!1,Tt=null,zt=null,Mt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Tt=null,zt=null,Mt=null,_t=null,Rt=null,ne=null,Ne=null;return{setTest:function(Ee){k||(Ee?ut(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!k&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Rn,di){(Tt!==Ee||zt!==Rn||Mt!==di)&&(o.stencilFunc(Ee,Rn,di),Tt=Ee,zt=Rn,Mt=di)},setOp:function(Ee,Rn,di){(_t!==Ee||Rt!==Rn||ne!==di)&&(o.stencilOp(Ee,Rn,di),_t=Ee,Rt=Rn,ne=di)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){k=!1,Ut=null,Tt=null,zt=null,Mt=null,_t=null,Rt=null,ne=null,Ne=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,F=null,O=null,N=null,z=null,H=null,P=new Ge(0,0,0),j=0,A=!1,D=null,X=null,rt=null,at=null,ft=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const tt=o.getParameter(o.VERSION);tt.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(tt)[1]),L=I>=1):tt.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),L=I>=2);let St=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),mt=new en().fromArray(U),bt=new en().fromArray($);function Bt(k,Ut,Tt,zt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<Tt;Rt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Ut+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const J={};J[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(Cs),ie(!1),Ke(M0),ut(o.CULL_FACE),de(da);function ut(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function At(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Nt(k,Ut){return _[k]!==Ut?(o.bindFramebuffer(k,Ut),_[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Pt(k,Ut){let Tt=E,zt=!1;if(k){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const Mt=k.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Rt=Mt.length;_t<Rt;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=Mt.length,zt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Tt)}function ee(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Ve={[br]:o.FUNC_ADD,[mS]:o.FUNC_SUBTRACT,[gS]:o.FUNC_REVERSE_SUBTRACT};Ve[_S]=o.MIN,Ve[vS]=o.MAX;const he={[xS]:o.ZERO,[SS]:o.ONE,[MS]:o.SRC_COLOR,[Ad]:o.SRC_ALPHA,[RS]:o.SRC_ALPHA_SATURATE,[bS]:o.DST_COLOR,[ES]:o.DST_ALPHA,[yS]:o.ONE_MINUS_SRC_COLOR,[Rd]:o.ONE_MINUS_SRC_ALPHA,[AS]:o.ONE_MINUS_DST_COLOR,[TS]:o.ONE_MINUS_DST_ALPHA,[CS]:o.CONSTANT_COLOR,[DS]:o.ONE_MINUS_CONSTANT_COLOR,[wS]:o.CONSTANT_ALPHA,[US]:o.ONE_MINUS_CONSTANT_ALPHA};function de(k,Ut,Tt,zt,Mt,_t,Rt,ne,Ne,Ee){if(k===da){C===!0&&(At(o.BLEND),C=!1);return}if(C===!1&&(ut(o.BLEND),C=!0),k!==pS){if(k!==y||Ee!==A){if((x!==br||N!==br)&&(o.blendEquation(o.FUNC_ADD),x=br,N=br),Ee)switch(k){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y0:o.blendFunc(o.ONE,o.ONE);break;case E0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case T0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Re("WebGLState: Invalid blending: ",k);break}else switch(k){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case E0:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",k);break}F=null,O=null,z=null,H=null,P.set(0,0,0),j=0,y=k,A=Ee}return}Mt=Mt||Ut,_t=_t||Tt,Rt=Rt||zt,(Ut!==x||Mt!==N)&&(o.blendEquationSeparate(Ve[Ut],Ve[Mt]),x=Ut,N=Mt),(Tt!==F||zt!==O||_t!==z||Rt!==H)&&(o.blendFuncSeparate(he[Tt],he[zt],he[_t],he[Rt]),F=Tt,O=zt,z=_t,H=Rt),(ne.equals(P)===!1||Ne!==j)&&(o.blendColor(ne.r,ne.g,ne.b,Ne),P.copy(ne),j=Ne),y=k,A=!1}function ye(k,Ut){k.side===ca?At(o.CULL_FACE):ut(o.CULL_FACE);let Tt=k.side===Vn;Ut&&(Tt=!Tt),ie(Tt),k.blending===As&&k.transparent===!1?de(da):de(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;h.setTest(zt),zt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(k){D!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),D=k)}function Ke(k){k!==fS?(ut(o.CULL_FACE),k!==X&&(k===M0?o.cullFace(o.BACK):k===dS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),X=k}function G(k){k!==rt&&(L&&o.lineWidth(k),rt=k)}function Ye(k,Ut,Tt){k?(ut(o.POLYGON_OFFSET_FILL),(at!==Ut||ft!==Tt)&&(o.polygonOffset(Ut,Tt),at=Ut,ft=Tt)):At(o.POLYGON_OFFSET_FILL)}function Se(k){k?ut(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Ue(k){k===void 0&&(k=o.TEXTURE0+lt-1),St!==k&&(o.activeTexture(k),St=k)}function qt(k,Ut,Tt){Tt===void 0&&(St===null?Tt=o.TEXTURE0+lt-1:Tt=St);let zt=xt[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},xt[Tt]=zt),(zt.type!==k||zt.texture!==Ut)&&(St!==Tt&&(o.activeTexture(Tt),St=Tt),o.bindTexture(k,Ut||J[k]),zt.type=k,zt.texture=Ut)}function w(){const k=xt[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Ct(){try{o.texStorage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function te(){try{o.texImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Et(k){mt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),mt.copy(k))}function It(k){bt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Ft(k,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let zt=Tt.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,k.name),Tt.set(k,zt))}function Dt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},St=null,xt={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,F=null,O=null,N=null,z=null,H=null,P=new Ge(0,0,0),j=0,A=!1,D=null,X=null,rt=null,at=null,ft=null,mt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ut,disable:At,bindFramebuffer:Nt,drawBuffers:Pt,useProgram:ee,setBlending:de,setMaterial:ye,setFlipSided:ie,setCullFace:Ke,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:Se,activeTexture:Ue,bindTexture:qt,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:te,texImage3D:yt,updateUBOMapping:Ft,uniformBlockBinding:Dt,texStorage2D:Ct,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:Et,viewport:It,reset:le}}function dA(o,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(w,M){return E?new OffscreenCanvas(w,M):Ou("canvas")}function C(w,M,W){let ht=1;const vt=qt(w);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ct=Math.floor(ht*vt.width),Zt=Math.floor(ht*vt.height);_===void 0&&(_=R(ct,Zt));const Ct=M?R(ct,Zt):_;return Ct.width=ct,Ct.height=Zt,Ct.getContext("2d").drawImage(w,0,0,ct,Zt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+Zt+")."),Ct}else return"data"in w&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),w;return w}function y(w){return w.generateMipmaps}function x(w){o.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(w,M,W,ht,vt=!1){if(w!==null){if(o[w]!==void 0)return o[w];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ct=M;if(M===o.RED&&(W===o.FLOAT&&(ct=o.R32F),W===o.HALF_FLOAT&&(ct=o.R16F),W===o.UNSIGNED_BYTE&&(ct=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ct=o.R8UI),W===o.UNSIGNED_SHORT&&(ct=o.R16UI),W===o.UNSIGNED_INT&&(ct=o.R32UI),W===o.BYTE&&(ct=o.R8I),W===o.SHORT&&(ct=o.R16I),W===o.INT&&(ct=o.R32I)),M===o.RG&&(W===o.FLOAT&&(ct=o.RG32F),W===o.HALF_FLOAT&&(ct=o.RG16F),W===o.UNSIGNED_BYTE&&(ct=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ct=o.RG8UI),W===o.UNSIGNED_SHORT&&(ct=o.RG16UI),W===o.UNSIGNED_INT&&(ct=o.RG32UI),W===o.BYTE&&(ct=o.RG8I),W===o.SHORT&&(ct=o.RG16I),W===o.INT&&(ct=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),W===o.UNSIGNED_INT&&(ct=o.RGB32UI),W===o.BYTE&&(ct=o.RGB8I),W===o.SHORT&&(ct=o.RGB16I),W===o.INT&&(ct=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),W===o.UNSIGNED_INT&&(ct=o.RGBA32UI),W===o.BYTE&&(ct=o.RGBA8I),W===o.SHORT&&(ct=o.RGBA16I),W===o.INT&&(ct=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),M===o.RGBA){const Zt=vt?Lu:Te.getTransfer(ht);W===o.FLOAT&&(ct=o.RGBA32F),W===o.HALF_FLOAT&&(ct=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ct=Zt===ze?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function N(w,M){let W;return w?M===null||M===zi||M===Ho?W=o.DEPTH24_STENCIL8:M===Li?W=o.DEPTH32F_STENCIL8:M===Io&&(W=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===Ho?W=o.DEPTH_COMPONENT24:M===Li?W=o.DEPTH_COMPONENT32F:M===Io&&(W=o.DEPTH_COMPONENT16),W}function z(w,M){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==An&&w.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function H(w){const M=w.target;M.removeEventListener("dispose",H),j(M),M.isVideoTexture&&v.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),D(M)}function j(w){const M=r.get(w);if(M.__webglInit===void 0)return;const W=w.source,ht=S.get(W);if(ht){const vt=ht[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(w),Object.keys(ht).length===0&&S.delete(W)}r.remove(w)}function A(w){const M=r.get(w);o.deleteTexture(M.__webglTexture);const W=w.source,ht=S.get(W);delete ht[M.__cacheKey],d.memory.textures--}function D(w){const M=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(M.__webglFramebuffer[ht]))for(let vt=0;vt<M.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ht]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ht])}else{if(Array.isArray(M.__webglFramebuffer))for(let ht=0;ht<M.__webglFramebuffer.length;ht++)o.deleteFramebuffer(M.__webglFramebuffer[ht]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ht=0;ht<M.__webglColorRenderbuffer.length;ht++)M.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ht]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=w.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const ct=r.get(W[ht]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(W[ht])}r.remove(w)}let X=0;function rt(){X=0}function at(){const w=X;return w>=l.maxTextures&&se("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function ft(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function lt(w,M){const W=r.get(w);if(w.isVideoTexture&&Se(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){const ht=w.image;if(ht===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,w,M);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function L(w,M){const W=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){J(W,w,M);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function I(w,M){const W=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){J(W,w,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function tt(w,M){const W=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&W.__version!==w.version){ut(W,w,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const St={[zd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Bd]:o.MIRRORED_REPEAT},xt={[An]:o.NEAREST,[OS]:o.NEAREST_MIPMAP_NEAREST,[ru]:o.NEAREST_MIPMAP_LINEAR,[Un]:o.LINEAR,[jf]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},U={[BS]:o.NEVER,[XS]:o.ALWAYS,[IS]:o.LESS,[Ch]:o.LEQUAL,[HS]:o.EQUAL,[Dh]:o.GEQUAL,[GS]:o.GREATER,[VS]:o.NOTEQUAL};function $(w,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===jf||M.magFilter===ru||M.magFilter===Rr||M.minFilter===Un||M.minFilter===jf||M.minFilter===ru||M.minFilter===Rr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,St[M.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,St[M.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,St[M.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==ru&&M.minFilter!==Rr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function mt(w,M){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",H));const ht=M.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const ct=ft(M);if(ct!==w.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),vt[ct].usedTimes++;const Zt=vt[w.__cacheKey];Zt!==void 0&&(vt[w.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(M)),w.__cacheKey=ct,w.__webglTexture=vt[ct].texture}return W}function bt(w,M,W){return Math.floor(Math.floor(w/W)/M)}function Bt(w,M,W,ht){const ct=w.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,ht,M.data);else{ct.sort((yt,Et)=>yt.start-Et.start);let Zt=0;for(let yt=1;yt<ct.length;yt++){const Et=ct[Zt],It=ct[yt],Ft=Et.start+Et.count,Dt=bt(It.start,M.width,4),le=bt(Et.start,M.width,4);It.start<=Ft+1&&Dt===le&&bt(It.start+It.count-1,M.width,4)===Dt?Et.count=Math.max(Et.count,It.start+It.count-Et.start):(++Zt,ct[Zt]=It)}ct.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let yt=0,Et=ct.length;yt<Et;yt++){const It=ct[yt],Ft=Math.floor(It.start/4),Dt=Math.ceil(It.count/4),le=Ft%M.width,k=Math.floor(Ft/M.width),Ut=Dt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Ut,Tt,W,ht,M.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function J(w,M,W){let ht=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=mt(w,M),ct=M.source;i.bindTexture(ht,w.__webglTexture,o.TEXTURE0+W);const Zt=r.get(ct);if(ct.version!==Zt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Ct=Te.getPrimaries(Te.workingColorSpace),Xt=M.colorSpace===Qa?null:Te.getPrimaries(M.colorSpace),te=M.colorSpace===Qa||Ct===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let yt=C(M.image,!1,l.maxTextureSize);yt=Ue(M,yt);const Et=c.convert(M.format,M.colorSpace),It=c.convert(M.type);let Ft=O(M.internalFormat,Et,It,M.colorSpace,M.isVideoTexture);$(ht,M);let Dt;const le=M.mipmaps,k=M.isVideoTexture!==!0,Ut=Zt.__version===void 0||vt===!0,Tt=ct.dataReady,zt=z(M,yt);if(M.isDepthTexture)Ft=N(M.format===Cr,M.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ft,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Ft,yt.width,yt.height,0,Et,It,null));else if(M.isDataTexture)if(le.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,le[0].width,le[0].height);for(let Mt=0,_t=le.length;Mt<_t;Mt++)Dt=le[Mt],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,It,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,Ft,Dt.width,Dt.height,0,Et,It,Dt.data);M.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,yt.width,yt.height),Tt&&Bt(M,yt,Et,It)):i.texImage2D(o.TEXTURE_2D,0,Ft,yt.width,yt.height,0,Et,It,yt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ft,le[0].width,le[0].height,yt.depth);for(let Mt=0,_t=le.length;Mt<_t;Mt++)if(Dt=le[Mt],M.format!==Ei)if(Et!==null)if(k){if(Tt)if(M.layerUpdates.size>0){const Rt=q0(Dt.width,Dt.height,M.format,M.type);for(const ne of M.layerUpdates){const Ne=Dt.data.subarray(ne*Rt/Dt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Dt.width,Dt.height,1,Et,Ne)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,yt.depth,Et,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Ft,Dt.width,Dt.height,yt.depth,0,Dt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,yt.depth,Et,It,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Ft,Dt.width,Dt.height,yt.depth,0,Et,It,Dt.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,Ft,le[0].width,le[0].height);for(let Mt=0,_t=le.length;Mt<_t;Mt++)Dt=le[Mt],M.format!==Ei?Et!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Ft,Dt.width,Dt.height,0,Dt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Et,It,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,Ft,Dt.width,Dt.height,0,Et,It,Dt.data)}else if(M.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ft,yt.width,yt.height,yt.depth),Tt)if(M.layerUpdates.size>0){const Mt=q0(yt.width,yt.height,M.format,M.type);for(const _t of M.layerUpdates){const Rt=yt.data.subarray(_t*Mt/yt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Et,It,Rt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,It,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,yt.width,yt.height,yt.depth,0,Et,It,yt.data);else if(M.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,zt,Ft,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,It,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,yt.width,yt.height,yt.depth,0,Et,It,yt.data);else if(M.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Ft,yt.width,yt.height);else{let Mt=yt.width,_t=yt.height;for(let Rt=0;Rt<zt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Ft,Mt,_t,0,Et,It,null),Mt>>=1,_t>>=1}}else if(le.length>0){if(k&&Ut){const Mt=qt(le[0]);i.texStorage2D(o.TEXTURE_2D,zt,Ft,Mt.width,Mt.height)}for(let Mt=0,_t=le.length;Mt<_t;Mt++)Dt=le[Mt],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Et,It,Dt):i.texImage2D(o.TEXTURE_2D,Mt,Ft,Et,It,Dt);M.generateMipmaps=!1}else if(k){if(Ut){const Mt=qt(yt);i.texStorage2D(o.TEXTURE_2D,zt,Ft,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,It,yt)}else i.texImage2D(o.TEXTURE_2D,0,Ft,Et,It,yt);y(M)&&x(ht),Zt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ut(w,M,W){if(M.image.length!==6)return;const ht=mt(w,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+W);const ct=r.get(vt);if(vt.version!==ct.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const Zt=Te.getPrimaries(Te.workingColorSpace),Ct=M.colorSpace===Qa?null:Te.getPrimaries(M.colorSpace),Xt=M.colorSpace===Qa||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const te=M.isCompressedTexture||M.image[0].isCompressedTexture,yt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!te&&!yt?Et[_t]=C(M.image[_t],!0,l.maxCubemapSize):Et[_t]=yt?M.image[_t].image:M.image[_t],Et[_t]=Ue(M,Et[_t]);const It=Et[0],Ft=c.convert(M.format,M.colorSpace),Dt=c.convert(M.type),le=O(M.internalFormat,Ft,Dt,M.colorSpace),k=M.isVideoTexture!==!0,Ut=ct.__version===void 0||ht===!0,Tt=vt.dataReady;let zt=z(M,It);$(o.TEXTURE_CUBE_MAP,M);let Mt;if(te){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,It.width,It.height);for(let _t=0;_t<6;_t++){Mt=Et[_t].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];M.format!==Ei?Ft!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,ne.width,ne.height,Ft,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,le,ne.width,ne.height,0,ne.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,ne.width,ne.height,Ft,Dt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,le,ne.width,ne.height,0,Ft,Dt,ne.data)}}}else{if(Mt=M.mipmaps,k&&Ut){Mt.length>0&&zt++;const _t=qt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ft,Dt,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ft,Dt,Et[_t].data);for(let Rt=0;Rt<Mt.length;Rt++){const Ne=Mt[Rt].image[_t].image;k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Ne.width,Ne.height,Ft,Dt,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,le,Ne.width,Ne.height,0,Ft,Dt,Ne.data)}}else{k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft,Dt,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ft,Dt,Et[_t]);for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Ft,Dt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,le,Ft,Dt,ne.image[_t])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),ct.__version=vt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function At(w,M,W,ht,vt,ct){const Zt=c.convert(W.format,W.colorSpace),Ct=c.convert(W.type),Xt=O(W.internalFormat,Zt,Ct,W.colorSpace),te=r.get(M),yt=r.get(W);if(yt.__renderTarget=M,!te.__hasExternalTextures){const Et=Math.max(1,M.width>>ct),It=Math.max(1,M.height>>ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,Xt,Et,It,M.depth,0,Zt,Ct,null):i.texImage2D(vt,ct,Xt,Et,It,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ye(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,0,G(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(w,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,w),M.depthBuffer){const ht=M.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,ct=N(M.stencilBuffer,vt),Zt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),ct,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),ct,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ct,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,w)}else{const ht=M.textures;for(let vt=0;vt<ht.length;vt++){const ct=ht[vt],Zt=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Xt=O(ct.internalFormat,Zt,Ct,ct.colorSpace);Ye(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),Xt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),Xt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(w,M,W){const ht=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),$(o.TEXTURE_CUBE_MAP,M.depthTexture);const te=c.convert(M.depthTexture.format),yt=c.convert(M.depthTexture.type);let Et;M.depthTexture.format===ga?Et=o.DEPTH_COMPONENT24:M.depthTexture.format===Cr&&(Et=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,M.width,M.height,0,te,yt,null)}}else lt(M.depthTexture,0);const ct=vt.__webglTexture,Zt=G(M),Ct=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=M.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===ga)Ye(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,ct,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,ct,0);else if(M.depthTexture.format===Cr)Ye(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,ct,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,ct,0);else throw new Error("Unknown depthTexture format")}function ee(w){const M=r.get(w),W=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const ht=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ht){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ht}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Pt(M.__webglFramebuffer[ht],w,ht);else{const ht=w.texture.mipmaps;ht&&ht.length>0?Pt(M.__webglFramebuffer[0],w,0):Pt(M.__webglFramebuffer,w,0)}else if(W){M.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ht]),M.__webglDepthbuffer[ht]===void 0)M.__webglDepthbuffer[ht]=o.createRenderbuffer(),Nt(M.__webglDepthbuffer[ht],w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}else{const ht=w.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Nt(M.__webglDepthbuffer,w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(w,M,W){const ht=r.get(w);M!==void 0&&At(ht.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ee(w)}function he(w){const M=w.texture,W=r.get(w),ht=r.get(M);w.addEventListener("dispose",P);const vt=w.textures,ct=w.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=M.version,d.memory.textures++),ct){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let Xt=0;Xt<M.mipmaps.length;Xt++)W.__webglFramebuffer[Ct][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,Xt=vt.length;Ct<Xt;Ct++){const te=r.get(vt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&Ye(w)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<vt.length;Ct++){const Xt=vt[Ct];W.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const te=c.convert(Xt.format,Xt.colorSpace),yt=c.convert(Xt.type),Et=O(Xt.internalFormat,te,yt,Xt.colorSpace,w.isXRRenderTarget===!0),It=G(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Et,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(W.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),$(o.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)At(W.__webglFramebuffer[Ct][Xt],w,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Xt);else At(W.__webglFramebuffer[Ct],w,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,Xt=vt.length;Ct<Xt;Ct++){const te=vt[Ct],yt=r.get(te);let Et=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Et=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,yt.__webglTexture),$(Et,te),At(W.__webglFramebuffer,w,te,o.COLOR_ATTACHMENT0+Ct,Et,0),y(te)&&x(Et)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ct=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),$(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)At(W.__webglFramebuffer[Xt],w,M,o.COLOR_ATTACHMENT0,Ct,Xt);else At(W.__webglFramebuffer,w,M,o.COLOR_ATTACHMENT0,Ct,0);y(M)&&x(Ct),i.unbindTexture()}w.depthBuffer&&ee(w)}function de(w){const M=w.textures;for(let W=0,ht=M.length;W<ht;W++){const vt=M[W];if(y(vt)){const ct=F(w),Zt=r.get(vt).__webglTexture;i.bindTexture(ct,Zt),x(ct),i.unbindTexture()}}}const ye=[],ie=[];function Ke(w){if(w.samples>0){if(Ye(w)===!1){const M=w.textures,W=w.width,ht=w.height;let vt=o.COLOR_BUFFER_BIT;const ct=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(w),Ct=M.length>1;if(Ct)for(let te=0;te<M.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=w.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let te=0;te<M.length;te++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const yt=r.get(M[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,o.NEAREST),m===!0&&(ye.length=0,ie.length=0,ye.push(o.COLOR_ATTACHMENT0+te),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ye.push(ct),ie.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ye))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<M.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const yt=r.get(M[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(w){return Math.min(l.maxSamples,w.samples)}function Ye(w){const M=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(w){const M=d.render.frame;v.get(w)!==M&&(v.set(w,M),w.update())}function Ue(w,M){const W=w.colorSpace,ht=w.format,vt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Us&&W!==Qa&&(Te.getTransfer(W)===ze?(ht!==Ei||vt!==fi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",W)),M}function qt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=lt,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=tt,this.rebindTextures=Ve,this.setupRenderTarget=he,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hA(o,e){function i(r,l=Qa){let c;const d=Te.getTransfer(l);if(r===fi)return o.UNSIGNED_BYTE;if(r===Eh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Th)return o.UNSIGNED_SHORT_5_5_5_1;if(r===C_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===D_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===A_)return o.BYTE;if(r===R_)return o.SHORT;if(r===Io)return o.UNSIGNED_SHORT;if(r===yh)return o.INT;if(r===zi)return o.UNSIGNED_INT;if(r===Li)return o.FLOAT;if(r===ma)return o.HALF_FLOAT;if(r===w_)return o.ALPHA;if(r===U_)return o.RGB;if(r===Ei)return o.RGBA;if(r===ga)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===L_)return o.RED;if(r===bh)return o.RED_INTEGER;if(r===ws)return o.RG;if(r===Ah)return o.RG_INTEGER;if(r===Rh)return o.RGBA_INTEGER;if(r===Ru||r===Cu||r===Du||r===wu)if(d===ze)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Hd||r===Gd||r===Vd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd||r===kd||r===Wd||r===qd||r===Yd||r===Zd||r===jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xd||r===kd)return d===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Wd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===qd)return c.COMPRESSED_R11_EAC;if(r===Yd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Zd)return c.COMPRESSED_RG11_EAC;if(r===jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===uh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Kd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$d)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===oh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ch||r===fh||r===dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===ch)return d===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hh||r===ph||r===mh||r===gh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===hh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ph)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new W_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ti({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bi(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends Ns{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",y=new gA,x={},F=i.getContextAttributes();let O=null,N=null;const z=[],H=[],P=new Me;let j=null;const A=new Mi;A.viewport=new en;const D=new Mi;D.viewport=new en;const X=[A,D],rt=new AM;let at=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ut=z[J];return ut===void 0&&(ut=new vd,z[J]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(J){let ut=z[J];return ut===void 0&&(ut=new vd,z[J]=ut),ut.getGripSpace()},this.getHand=function(J){let ut=z[J];return ut===void 0&&(ut=new vd,z[J]=ut),ut.getHandSpace()};function lt(J){const ut=H.indexOf(J.inputSource);if(ut===-1)return;const At=z[ut];At!==void 0&&(At.update(J.inputSource,J.frame,p||d),At.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",I);for(let J=0;J<z.length;J++){const ut=H[J];ut!==null&&(H[J]=null,z[J].disconnect(ut))}at=null,ft=null,y.reset();for(const J in x)delete x[J];e.setRenderTarget(O),E=null,S=null,_=null,l=null,N=null,Bt.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",L),l.addEventListener("inputsourceschange",I),F.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Nt=null,Pt=null;F.depth&&(Pt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=F.stencil?Cr:ga,Nt=F.stencil?Ho:zi);const ee={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(ee),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new Pi(S.textureWidth,S.textureHeight,{format:Ei,type:fi,depthTexture:new Vo(S.textureWidth,S.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const At={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Pi(E.framebufferWidth,E.framebufferHeight,{format:Ei,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Bt.setContext(l),Bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(J){for(let ut=0;ut<J.removed.length;ut++){const At=J.removed[ut],Nt=H.indexOf(At);Nt>=0&&(H[Nt]=null,z[Nt].disconnect(At))}for(let ut=0;ut<J.added.length;ut++){const At=J.added[ut];let Nt=H.indexOf(At);if(Nt===-1){for(let ee=0;ee<z.length;ee++)if(ee>=H.length){H.push(At),Nt=ee;break}else if(H[ee]===null){H[ee]=At,Nt=ee;break}if(Nt===-1)break}const Pt=z[Nt];Pt&&Pt.connect(At)}}const tt=new it,St=new it;function xt(J,ut,At){tt.setFromMatrixPosition(ut.matrixWorld),St.setFromMatrixPosition(At.matrixWorld);const Nt=tt.distanceTo(St),Pt=ut.projectionMatrix.elements,ee=At.projectionMatrix.elements,Ve=Pt[14]/(Pt[10]-1),he=Pt[14]/(Pt[10]+1),de=(Pt[9]+1)/Pt[5],ye=(Pt[9]-1)/Pt[5],ie=(Pt[8]-1)/Pt[0],Ke=(ee[8]+1)/ee[0],G=Ve*ie,Ye=Ve*Ke,Se=Nt/(-ie+Ke),Ue=Se*-ie;if(ut.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ue),J.translateZ(Se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pt[10]===-1)J.projectionMatrix.copy(ut.projectionMatrix),J.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=Ve+Se,w=he+Se,M=G-Ue,W=Ye+(Nt-Ue),ht=de*he/w*qt,vt=ye*he/w*qt;J.projectionMatrix.makePerspective(M,W,ht,vt,qt,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,ut){ut===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ut.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ut=J.near,At=J.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(At=y.depthFar)),rt.near=D.near=A.near=ut,rt.far=D.far=A.far=At,(at!==rt.near||ft!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),at=rt.near,ft=rt.far),rt.layers.mask=J.layers.mask|6,A.layers.mask=rt.layers.mask&3,D.layers.mask=rt.layers.mask&5;const Nt=J.parent,Pt=rt.cameras;U(rt,Nt);for(let ee=0;ee<Pt.length;ee++)U(Pt[ee],Nt);Pt.length===2?xt(rt,A,D):rt.projectionMatrix.copy(A.projectionMatrix),$(J,rt,Nt)};function $(J,ut,At){At===null?J.matrix.copy(ut.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(ut.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ut.projectionMatrix),J.projectionMatrixInverse.copy(ut.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_h*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(rt)},this.getCameraTexture=function(J){return x[J]};let mt=null;function bt(J,ut){if(v=ut.getViewerPose(p||d),R=ut,v!==null){const At=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Nt=!1;At.length!==rt.cameras.length&&(rt.cameras.length=0,Nt=!0);for(let he=0;he<At.length;he++){const de=At[he];let ye=null;if(E!==null)ye=E.getViewport(de);else{const Ke=_.getViewSubImage(S,de);ye=Ke.viewport,he===0&&(e.setRenderTargetTextures(N,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(N))}let ie=X[he];ie===void 0&&(ie=new Mi,ie.layers.enable(he),ie.viewport=new en,X[he]=ie),ie.matrix.fromArray(de.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(de.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ye.x,ye.y,ye.width,ye.height),he===0&&(rt.matrix.copy(ie.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Nt===!0&&rt.cameras.push(ie)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const he=_.getDepthInformation(At[0]);he&&he.isValid&&he.texture&&y.init(he,l.renderState)}if(Pt&&Pt.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let he=0;he<At.length;he++){const de=At[he].camera;if(de){let ye=x[de];ye||(ye=new W_,x[de]=ye);const ie=_.getCameraImage(de);ye.sourceTexture=ie}}}}for(let At=0;At<z.length;At++){const Nt=H[At],Pt=z[At];Nt!==null&&Pt!==void 0&&Pt.update(Nt,ut,p||d)}mt&&mt(J,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),R=null}const Bt=new q_;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(J){mt=J},this.dispose=function(){}}}const Er=new _a,vA=new un;function xA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,H_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,F,O,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(c(y,x),R(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,F,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Vn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Vn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=e.get(x),O=F.envMap,N=F.envMapRotation;O&&(y.envMap.value=O,Er.copy(N),Er.x*=-1,Er.y*=-1,Er.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(Er)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,F,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=O*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const F=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function SA(o,e,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,O){const N=O.program;r.uniformBlockBinding(F,N)}function p(F,O){let N=l[F.id];N===void 0&&(R(F),N=v(F),l[F.id]=N,F.addEventListener("dispose",y));const z=O.program;r.updateUBOMapping(F,z);const H=e.render.frame;c[F.id]!==H&&(S(F),c[F.id]=H)}function v(F){const O=_();F.__bindingPointIndex=O;const N=o.createBuffer(),z=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function _(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const O=l[F.id],N=F.uniforms,z=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,P=N.length;H<P;H++){const j=Array.isArray(N[H])?N[H]:[N[H]];for(let A=0,D=j.length;A<D;A++){const X=j[A];if(E(X,H,A,z)===!0){const rt=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let ft=0;for(let lt=0;lt<at.length;lt++){const L=at[lt],I=C(L);typeof L=="number"||typeof L=="boolean"?(X.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,rt+ft,X.__data)):L.isMatrix3?(X.__data[0]=L.elements[0],X.__data[1]=L.elements[1],X.__data[2]=L.elements[2],X.__data[3]=0,X.__data[4]=L.elements[3],X.__data[5]=L.elements[4],X.__data[6]=L.elements[5],X.__data[7]=0,X.__data[8]=L.elements[6],X.__data[9]=L.elements[7],X.__data[10]=L.elements[8],X.__data[11]=0):(L.toArray(X.__data,ft),ft+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,O,N,z){const H=F.value,P=O+"_"+N;if(z[P]===void 0)return typeof H=="number"||typeof H=="boolean"?z[P]=H:z[P]=H.clone(),!0;{const j=z[P];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return z[P]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function R(F){const O=F.uniforms;let N=0;const z=16;for(let P=0,j=O.length;P<j;P++){const A=Array.isArray(O[P])?O[P]:[O[P]];for(let D=0,X=A.length;D<X;D++){const rt=A[D],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let ft=0,lt=at.length;ft<lt;ft++){const L=at[ft],I=C(L),tt=N%z,St=tt%I.boundary,xt=tt+St;N+=St,xt!==0&&z-xt<I.storage&&(N+=z-xt),rt.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=N,N+=I.storage}}}const H=N%z;return H>0&&(N+=z-H),F.__size=N,F.__cache={},this}function C(F){const O={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(O.boundary=4,O.storage=4):F.isVector2?(O.boundary=8,O.storage=8):F.isVector3||F.isColor?(O.boundary=16,O.storage=12):F.isVector4?(O.boundary=16,O.storage=16):F.isMatrix3?(O.boundary=48,O.storage=48):F.isMatrix4?(O.boundary=64,O.storage=64):F.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",F),O}function y(F){const O=F.target;O.removeEventListener("dispose",y);const N=d.indexOf(O.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function x(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const MA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function yA(){return wi===null&&(wi=new vM(MA,16,16,ws,ma),wi.name="DFG_LUT",wi.minFilter=Un,wi.magFilter=Un,wi.wrapS=fa,wi.wrapT=fa,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class EA{constructor(e={}){const{canvas:i=kS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=fi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const C=E,y=new Set([Rh,Ah,bh]),x=new Set([fi,zi,Io,Ho,Eh,Th]),F=new Uint32Array(4),O=new Int32Array(4);let N=null,z=null;const H=[],P=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=ci;let X=0,rt=0,at=null,ft=-1,lt=null;const L=new en,I=new en;let tt=null;const St=new Ge(0);let xt=0,U=i.width,$=i.height,mt=1,bt=null,Bt=null;const J=new en(0,0,U,$),ut=new en(0,0,U,$);let At=!1;const Nt=new k_;let Pt=!1,ee=!1;const Ve=new un,he=new it,de=new en,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Ke(){return at===null?mt:1}let G=r;function Ye(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Mh}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Ne,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const q="webgl2";if(G=Ye(q,b),G===null)throw Ye(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Re("WebGLRenderer: "+b.message),b}let Se,Ue,qt,w,M,W,ht,vt,ct,Zt,Ct,Xt,te,yt,Et,It,Ft,Dt,le,k,Ut,Tt,zt,Mt;function _t(){Se=new yT(G),Se.init(),Tt=new hA(G,Se),Ue=new hT(G,Se,e,Tt),qt=new fA(G,Se),Ue.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),w=new bT(G),M=new Kb,W=new dA(G,Se,qt,M,Ue,Tt,w),ht=new mT(A),vt=new MT(A),ct=new DM(G),zt=new fT(G,ct),Zt=new ET(G,ct,w,zt),Ct=new RT(G,Zt,ct,w),le=new AT(G,Ue,W),It=new pT(M),Xt=new jb(A,ht,vt,Se,Ue,zt,It),te=new xA(A,M),yt=new Jb,Et=new aA(Se),Dt=new cT(A,ht,vt,qt,Ct,R,m),Ft=new uA(A,Ct,Ue),Mt=new SA(G,w,Ue,qt),k=new dT(G,Se,w),Ut=new TT(G,Se,w),w.programs=Xt.programs,A.capabilities=Ue,A.extensions=Se,A.properties=M,A.renderLists=yt,A.shadowMap=Ft,A.state=qt,A.info=w}_t(),C!==fi&&(j=new DT(C,i.width,i.height,l,c));const Rt=new _A(A,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(U,$,!1))},this.getSize=function(b){return b.set(U,$)},this.setSize=function(b,q,st=!0){if(Rt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,$=q,i.width=Math.floor(b*mt),i.height=Math.floor(q*mt),st===!0&&(i.style.width=b+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(U*mt,$*mt).floor()},this.setDrawingBufferSize=function(b,q,st){U=b,$=q,mt=st,i.width=Math.floor(b*st),i.height=Math.floor(q*st),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,q,st,et){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,q,st,et),qt.viewport(L.copy(J).multiplyScalar(mt).round())},this.getScissor=function(b){return b.copy(ut)},this.setScissor=function(b,q,st,et){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,q,st,et),qt.scissor(I.copy(ut).multiplyScalar(mt).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(b){qt.setScissorTest(At=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Bt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,st=!0){let et=0;if(b){let Z=!1;if(at!==null){const wt=at.texture.format;Z=y.has(wt)}if(Z){const wt=at.texture.type,Ht=x.has(wt),Lt=Dt.getClearColor(),Gt=Dt.getClearAlpha(),kt=Lt.r,Qt=Lt.g,Wt=Lt.b;Ht?(F[0]=kt,F[1]=Qt,F[2]=Wt,F[3]=Gt,G.clearBufferuiv(G.COLOR,0,F)):(O[0]=kt,O[1]=Qt,O[2]=Wt,O[3]=Gt,G.clearBufferiv(G.COLOR,0,O))}else et|=G.COLOR_BUFFER_BIT}q&&(et|=G.DEPTH_BUFFER_BIT),st&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Ne,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),Dt.dispose(),yt.dispose(),Et.dispose(),M.dispose(),ht.dispose(),vt.dispose(),Ct.dispose(),zt.dispose(),Mt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ur),Rt.removeEventListener("sessionend",zs),bi.stop()};function ne(b){b.preventDefault(),D0("WebGLRenderer: Context Lost."),D=!0}function Ne(){D0("WebGLRenderer: Context Restored."),D=!1;const b=w.autoReset,q=Ft.enabled,st=Ft.autoUpdate,et=Ft.needsUpdate,Z=Ft.type;_t(),w.autoReset=b,Ft.enabled=q,Ft.autoUpdate=st,Ft.needsUpdate=et,Ft.type=Z}function Ee(b){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rn(b){const q=b.target;q.removeEventListener("dispose",Rn),di(q)}function di(b){Zo(b),M.remove(b)}function Zo(b){const q=M.get(b).programs;q!==void 0&&(q.forEach(function(st){Xt.releaseProgram(st)}),b.isShaderMaterial&&Xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,st,et,Z,wt){q===null&&(q=ye);const Ht=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=tr(b,q,st,et,Z);qt.setMaterial(et,Ht);let Gt=st.index,kt=1;if(et.wireframe===!0){if(Gt=Zt.getWireframeAttribute(st),Gt===void 0)return;kt=2}const Qt=st.drawRange,Wt=st.attributes.position;let Jt=Qt.start*kt,Ce=(Qt.start+Qt.count)*kt;wt!==null&&(Jt=Math.max(Jt,wt.start*kt),Ce=Math.min(Ce,(wt.start+wt.count)*kt)),Gt!==null?(Jt=Math.max(Jt,0),Ce=Math.min(Ce,Gt.count)):Wt!=null&&(Jt=Math.max(Jt,0),Ce=Math.min(Ce,Wt.count));const Ze=Ce-Jt;if(Ze<0||Ze===1/0)return;zt.setup(Z,et,Lt,st,Gt);let ke,Le=k;if(Gt!==null&&(ke=ct.get(Gt),Le=Ut,Le.setIndex(ke)),Z.isMesh)et.wireframe===!0?(qt.setLineWidth(et.wireframeLinewidth*Ke()),Le.setMode(G.LINES)):Le.setMode(G.TRIANGLES);else if(Z.isLine){let jt=et.linewidth;jt===void 0&&(jt=1),qt.setLineWidth(jt*Ke()),Z.isLineSegments?Le.setMode(G.LINES):Z.isLineLoop?Le.setMode(G.LINE_LOOP):Le.setMode(G.LINE_STRIP)}else Z.isPoints?Le.setMode(G.POINTS):Z.isSprite&&Le.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,De=Z._multiDrawCounts,ae=Z._multiDrawCount,_n=Gt?ct.get(Gt).bytesPerElement:1,Ii=M.get(et).currentProgram.getUniforms();for(let vn=0;vn<ae;vn++)Ii.setValue(G,"_gl_DrawID",vn),Le.render(jt[vn]/_n,De[vn])}else if(Z.isInstancedMesh)Le.renderInstances(Jt,Ze,Z.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,De=Math.min(st.instanceCount,jt);Le.renderInstances(Jt,Ze,De)}else Le.render(Jt,Ze)};function Ps(b,q,st){b.transparent===!0&&b.side===ca&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,Nr(b,q,st),b.side=$a,b.needsUpdate=!0,Nr(b,q,st),b.side=ca):Nr(b,q,st)}this.compile=function(b,q,st=null){st===null&&(st=b),z=Et.get(st),z.init(q),P.push(z),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),b!==st&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const et=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Ht=0;Ht<wt.length;Ht++){const Lt=wt[Ht];Ps(Lt,st,Z),et.add(Lt)}else Ps(wt,st,Z),et.add(wt)}),z=P.pop(),et},this.compileAsync=function(b,q,st=null){const et=this.compile(b,q,st);return new Promise(Z=>{function wt(){if(et.forEach(function(Ht){M.get(Ht).currentProgram.isReady()&&et.delete(Ht)}),et.size===0){Z(b);return}setTimeout(wt,10)}Se.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let wr=null;function Fs(b){wr&&wr(b)}function Ur(){bi.stop()}function zs(){bi.start()}const bi=new q_;bi.setAnimationLoop(Fs),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){wr=b,Rt.setAnimationLoop(b),b===null?bi.stop():bi.start()},Rt.addEventListener("sessionstart",Ur),Rt.addEventListener("sessionend",zs),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const st=Rt.enabled===!0&&Rt.isPresenting===!0,et=j!==null&&(at===null||st)&&j.begin(A,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,q,at),z=Et.get(b,P.length),z.init(q),P.push(z),Ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Nt.setFromProjectionMatrix(Ve,Ni,q.reversedDepth),ee=this.localClippingEnabled,Pt=It.init(this.clippingPlanes,ee),N=yt.get(b,H.length),N.init(),H.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Ht=A.xr.getDepthSensingMesh();Ht!==null&&$n(Ht,q,-1/0,A.sortObjects)}$n(b,q,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(bt,Bt),ie=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ie&&Dt.addToRenderList(N,b),this.info.render.frame++,Pt===!0&&It.beginShadows();const Z=z.state.shadowsArray;if(Ft.render(Z,b,q),Pt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&j.hasRenderPass())===!1){const Ht=N.opaque,Lt=N.transmissive;if(z.setupLights(),q.isArrayCamera){const Gt=q.cameras;if(Lt.length>0)for(let kt=0,Qt=Gt.length;kt<Qt;kt++){const Wt=Gt[kt];gn(Ht,Lt,b,Wt)}ie&&Dt.render(b);for(let kt=0,Qt=Gt.length;kt<Qt;kt++){const Wt=Gt[kt];nn(N,b,Wt,Wt.viewport)}}else Lt.length>0&&gn(Ht,Lt,b,q),ie&&Dt.render(b),nn(N,b,q)}at!==null&&rt===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),et&&j.end(A),b.isScene===!0&&b.onAfterRender(A,b,q),zt.resetDefaultState(),ft=-1,lt=null,P.pop(),P.length>0?(z=P[P.length-1],Pt===!0&&It.setGlobalState(A.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?N=H[H.length-1]:N=null};function $n(b,q,st,et){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)z.pushLight(b),b.castShadow&&z.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Nt.intersectsSprite(b)){et&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ve);const Ht=Ct.update(b),Lt=b.material;Lt.visible&&N.push(b,Ht,Lt,st,de.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Nt.intersectsObject(b))){const Ht=Ct.update(b),Lt=b.material;if(et&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),de.copy(Ht.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(Ve)),Array.isArray(Lt)){const Gt=Ht.groups;for(let kt=0,Qt=Gt.length;kt<Qt;kt++){const Wt=Gt[kt],Jt=Lt[Wt.materialIndex];Jt&&Jt.visible&&N.push(b,Ht,Jt,st,de.z,Wt)}}else Lt.visible&&N.push(b,Ht,Lt,st,de.z,null)}}const wt=b.children;for(let Ht=0,Lt=wt.length;Ht<Lt;Ht++)$n(wt[Ht],q,st,et)}function nn(b,q,st,et){const{opaque:Z,transmissive:wt,transparent:Ht}=b;z.setupLightsView(st),Pt===!0&&It.setGlobalState(A.clippingPlanes,st),et&&qt.viewport(L.copy(et)),Z.length>0&&hi(Z,q,st),wt.length>0&&hi(wt,q,st),Ht.length>0&&hi(Ht,q,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function gn(b,q,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[et.id]===void 0){const Jt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[et.id]=new Pi(1,1,{generateMipmaps:!0,type:Jt?ma:fi,minFilter:Rr,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const wt=z.state.transmissionRenderTarget[et.id],Ht=et.viewport||L;wt.setSize(Ht.z*A.transmissionResolutionScale,Ht.w*A.transmissionResolutionScale);const Lt=A.getRenderTarget(),Gt=A.getActiveCubeFace(),kt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(St),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),ie&&Dt.render(st);const Qt=A.toneMapping;A.toneMapping=Oi;const Wt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),z.setupLightsView(et),Pt===!0&&It.setGlobalState(A.clippingPlanes,et),hi(b,st,et),W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ce=0,Ze=q.length;Ce<Ze;Ce++){const ke=q[Ce],{object:Le,geometry:jt,material:De,group:ae}=ke;if(De.side===ca&&Le.layers.test(et.layers)){const _n=De.side;De.side=Vn,De.needsUpdate=!0,Lr(Le,st,et,jt,De,ae),De.side=_n,De.needsUpdate=!0,Jt=!0}}Jt===!0&&(W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt))}A.setRenderTarget(Lt,Gt,kt),A.setClearColor(St,xt),Wt!==void 0&&(et.viewport=Wt),A.toneMapping=Qt}function hi(b,q,st){const et=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,wt=b.length;Z<wt;Z++){const Ht=b[Z],{object:Lt,geometry:Gt,group:kt}=Ht;let Qt=Ht.material;Qt.allowOverride===!0&&et!==null&&(Qt=et),Lt.layers.test(st.layers)&&Lr(Lt,q,st,Gt,Qt,kt)}}function Lr(b,q,st,et,Z,wt){b.onBeforeRender(A,q,st,et,Z,wt),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(A,q,st,et,b,wt),Z.transparent===!0&&Z.side===ca&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,A.renderBufferDirect(st,q,et,Z,b,wt),Z.side=$a,Z.needsUpdate=!0,A.renderBufferDirect(st,q,et,Z,b,wt),Z.side=ca):A.renderBufferDirect(st,q,et,Z,b,wt),b.onAfterRender(A,q,st,et,Z,wt)}function Nr(b,q,st){q.isScene!==!0&&(q=ye);const et=M.get(b),Z=z.state.lights,wt=z.state.shadowsArray,Ht=Z.state.version,Lt=Xt.getParameters(b,Z.state,wt,q,st),Gt=Xt.getProgramCacheKey(Lt);let kt=et.programs;et.environment=b.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(b.isMeshStandardMaterial?vt:ht).get(b.envMap||et.environment),et.envMapRotation=et.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Rn),kt=new Map,et.programs=kt);let Qt=kt.get(Gt);if(Qt!==void 0){if(et.currentProgram===Qt&&et.lightsStateVersion===Ht)return Bs(b,Lt),Qt}else Lt.uniforms=Xt.getUniforms(b),b.onBeforeCompile(Lt,A),Qt=Xt.acquireProgram(Lt,Gt),kt.set(Gt,Qt),et.uniforms=Lt.uniforms;const Wt=et.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=It.uniform),Bs(b,Lt),et.needsLights=xa(b),et.lightsStateVersion=Ht,et.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=Qt,et.uniformsList=null,Qt}function jo(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Uu.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Bs(b,q){const st=M.get(b);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function tr(b,q,st,et,Z){q.isScene!==!0&&(q=ye),W.resetTextureUnits();const wt=q.fog,Ht=et.isMeshStandardMaterial?q.environment:null,Lt=at===null?A.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Us,Gt=(et.isMeshStandardMaterial?vt:ht).get(et.envMap||Ht),kt=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Wt=!!st.morphAttributes.position,Jt=!!st.morphAttributes.normal,Ce=!!st.morphAttributes.color;let Ze=Oi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ze=A.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Le=ke!==void 0?ke.length:0,jt=M.get(et),De=z.state.lights;if(Pt===!0&&(ee===!0||b!==lt)){const Sn=b===lt&&et.id===ft;It.setState(et,b,Sn)}let ae=!1;et.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==De.state.version||jt.outputColorSpace!==Lt||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Gt||et.fog===!0&&jt.fog!==wt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==It.numPlanes||jt.numIntersection!==It.numIntersection)||jt.vertexAlphas!==kt||jt.vertexTangents!==Qt||jt.morphTargets!==Wt||jt.morphNormals!==Jt||jt.morphColors!==Ce||jt.toneMapping!==Ze||jt.morphTargetsCount!==Le)&&(ae=!0):(ae=!0,jt.__version=et.version);let _n=jt.currentProgram;ae===!0&&(_n=Nr(et,q,Z));let Ii=!1,vn=!1,ti=!1;const Oe=_n.getUniforms(),xn=jt.uniforms;if(qt.useProgram(_n.program)&&(Ii=!0,vn=!0,ti=!0),et.id!==ft&&(ft=et.id,vn=!0),Ii||lt!==b){qt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",b.projectionMatrix),Oe.setValue(G,"viewMatrix",b.matrixWorldInverse);const Mn=Oe.map.cameraPosition;Mn!==void 0&&Mn.setValue(G,he.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),lt!==b&&(lt=b,vn=!0,ti=!0)}if(jt.needsLights&&(De.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),Z.isSkinnedMesh){Oe.setOptional(G,Z,"bindMatrix"),Oe.setOptional(G,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Oe.setValue(G,"boneTexture",Sn.boneTexture,W))}Z.isBatchedMesh&&(Oe.setOptional(G,Z,"batchingTexture"),Oe.setValue(G,"batchingTexture",Z._matricesTexture,W),Oe.setOptional(G,Z,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Oe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const cn=st.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&le.update(Z,st,_n),(vn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Oe.setValue(G,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(xn.envMap.value=Gt,xn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(xn.envMapIntensity.value=q.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=yA()),vn&&(Oe.setValue(G,"toneMappingExposure",A.toneMappingExposure),jt.needsLights&&Is(xn,ti),wt&&et.fog===!0&&te.refreshFogUniforms(xn,wt),te.refreshMaterialUniforms(xn,et,mt,$,z.state.transmissionRenderTarget[b.id]),Uu.upload(G,jo(jt),xn,W)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Uu.upload(G,jo(jt),xn,W),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Oe.setValue(G,"center",Z.center),Oe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(G,"normalMatrix",Z.normalMatrix),Oe.setValue(G,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Sn=et.uniformsGroups;for(let Mn=0,Or=Sn.length;Mn<Or;Mn++){const pi=Sn[Mn];Mt.update(pi,_n),Mt.bind(pi,_n)}}return _n}function Is(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function xa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,q,st){const et=M.get(b);et.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),M.get(b.texture).__webglTexture=q,M.get(b.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const st=M.get(b);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(b,q=0,st=0){at=b,X=q,rt=st;let et=null,Z=!1,wt=!1;if(b){const Lt=M.get(b);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),L.copy(b.viewport),I.copy(b.scissor),tt=b.scissorTest,qt.viewport(L),qt.scissor(I),qt.setScissorTest(tt),ft=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(Lt.__hasExternalTextures)W.rebindTextures(b,M.get(b.texture).__webglTexture,M.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qt=b.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&M.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const kt=M.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?et=kt[q][st]:et=kt[q],Z=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?et=M.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[st]:et=kt,L.copy(b.viewport),I.copy(b.scissor),tt=b.scissorTest}else L.copy(J).multiplyScalar(mt).floor(),I.copy(ut).multiplyScalar(mt).floor(),tt=At;if(st!==0&&(et=Sa),qt.bindFramebuffer(G.FRAMEBUFFER,et)&&qt.drawBuffers(b,et),qt.viewport(L),qt.scissor(I),qt.setScissorTest(tt),Z){const Lt=M.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(wt){const Lt=q;for(let Gt=0;Gt<b.textures.length;Gt++){const kt=M.get(b.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,kt.__webglTexture,st,Lt)}}else if(b!==null&&st!==0){const Lt=M.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}ft=-1},this.readRenderTargetPixels=function(b,q,st,et,Z,wt,Ht,Lt=0){if(!(b&&b.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ht!==void 0&&(Gt=Gt[Ht]),Gt){qt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const kt=b.textures[Lt],Qt=kt.format,Wt=kt.type;if(!Ue.textureFormatReadable(Qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Wt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-et&&st>=0&&st<=b.height-Z&&(b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,et,Z,Tt.convert(Qt),Tt.convert(Wt),wt))}finally{const kt=at!==null?M.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,q,st,et,Z,wt,Ht,Lt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=M.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ht!==void 0&&(Gt=Gt[Ht]),Gt)if(q>=0&&q<=b.width-et&&st>=0&&st<=b.height-Z){qt.bindFramebuffer(G.FRAMEBUFFER,Gt);const kt=b.textures[Lt],Qt=kt.format,Wt=kt.type;if(!Ue.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Jt),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,et,Z,Tt.convert(Qt),Tt.convert(Wt),0);const Ce=at!==null?M.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Ce);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await WS(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(Jt),G.deleteSync(Ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,st=0){const et=Math.pow(2,-st),Z=Math.floor(b.image.width*et),wt=Math.floor(b.image.height*et),Ht=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ht,Lt,Z,wt),qt.unbindTexture()};const er=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(b,q,st=null,et=null,Z=0,wt=null){wt===null&&(Z!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=Z,Z=0):wt=0);let Ht,Lt,Gt,kt,Qt,Wt,Jt,Ce,Ze;const ke=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(st!==null)Ht=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Qt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const cn=Math.pow(2,-Z);Ht=Math.floor(ke.width*cn),Lt=Math.floor(ke.height*cn),b.isDataArrayTexture?Gt=ke.depth:b.isData3DTexture?Gt=Math.floor(ke.depth*cn):Gt=1,kt=0,Qt=0,Wt=0}et!==null?(Jt=et.x,Ce=et.y,Ze=et.z):(Jt=0,Ce=0,Ze=0);const Le=Tt.convert(q.format),jt=Tt.convert(q.type);let De;q.isData3DTexture?(W.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ae=G.getParameter(G.UNPACK_ROW_LENGTH),_n=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ii=G.getParameter(G.UNPACK_SKIP_PIXELS),vn=G.getParameter(G.UNPACK_SKIP_ROWS),ti=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Oe=b.isDataArrayTexture||b.isData3DTexture,xn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const cn=M.get(b),Sn=M.get(q),Mn=M.get(cn.__renderTarget),Or=M.get(Sn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Mn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let pi=0;pi<Gt;pi++)Oe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(b).__webglTexture,Z,Wt+pi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(q).__webglTexture,wt,Ze+pi)),G.blitFramebuffer(kt,Qt,Ht,Lt,Jt,Ce,Ht,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||M.has(b)){const cn=M.get(b),Sn=M.get(q);qt.bindFramebuffer(G.READ_FRAMEBUFFER,er),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let Mn=0;Mn<Gt;Mn++)Oe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,cn.__webglTexture,Z,Wt+Mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,cn.__webglTexture,Z),xn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Sn.__webglTexture,wt,Ze+Mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Sn.__webglTexture,wt),Z!==0?G.blitFramebuffer(kt,Qt,Ht,Lt,Jt,Ce,Ht,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):xn?G.copyTexSubImage3D(De,wt,Jt,Ce,Ze+Mn,kt,Qt,Ht,Lt):G.copyTexSubImage2D(De,wt,Jt,Ce,kt,Qt,Ht,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else xn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(De,wt,Jt,Ce,Ze,Ht,Lt,Gt,Le,jt,ke.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,wt,Jt,Ce,Ze,Ht,Lt,Gt,Le,ke.data):G.texSubImage3D(De,wt,Jt,Ce,Ze,Ht,Lt,Gt,Le,jt,ke):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,Jt,Ce,Ht,Lt,Le,jt,ke.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,Jt,Ce,ke.width,ke.height,Le,ke.data):G.texSubImage2D(G.TEXTURE_2D,wt,Jt,Ce,Ht,Lt,Le,jt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_n),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ii),G.pixelStorei(G.UNPACK_SKIP_ROWS,vn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ti),wt===0&&q.generateMipmaps&&G.generateMipmap(De),qt.unbindTexture()},this.initRenderTarget=function(b){M.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){X=0,rt=0,at=null,qt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const TA=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,bA=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,g_=8;function AA(o){let e=o.trim();e.startsWith("#")&&(e=e.slice(1));let i=255,r=255,l=255;return e.length===3?(i=parseInt(e[0]+e[0],16),r=parseInt(e[1]+e[1],16),l=parseInt(e[2]+e[2],16)):e.length===6&&(i=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),l=parseInt(e.slice(4,6),16)),new it(i/255,r/255,l/255)}function RA({linesGradient:o,enabledWaves:e=["top","middle","bottom"],lineCount:i=[6],lineDistance:r=[5],topWavePosition:l,middleWavePosition:c,bottomWavePosition:d={x:2,y:-.7,rotate:-1},animationSpeed:h=1,interactive:m=!0,bendRadius:p=5,bendStrength:v=-.5,mouseDamping:_=.05,parallax:S=!0,parallaxStrength:E=.2,mixBlendMode:R="screen"}){const C=la.useRef(null),y=la.useRef(new Me(-1e3,-1e3)),x=la.useRef(new Me(-1e3,-1e3)),F=la.useRef(0),O=la.useRef(0),N=la.useRef(new Me(0,0)),z=la.useRef(new Me(0,0)),H=ft=>{if(typeof i=="number")return i;if(!e.includes(ft))return 0;const lt=e.indexOf(ft);return i[lt]??6},P=ft=>{if(typeof r=="number")return r;if(!e.includes(ft))return .1;const lt=e.indexOf(ft);return r[lt]??.1},j=e.includes("top")?H("top"):0,A=e.includes("middle")?H("middle"):0,D=e.includes("bottom")?H("bottom"):0,X=e.includes("top")?P("top")*.01:.01,rt=e.includes("middle")?P("middle")*.01:.01,at=e.includes("bottom")?P("bottom")*.01:.01;return la.useEffect(()=>{if(!C.current)return;const ft=new _M,lt=new Lh(-1,1,1,-1,0,1);lt.position.z=1;const L=new EA({antialias:!0,alpha:!1});L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),L.domElement.style.width="100%",L.domElement.style.height="100%",C.current.appendChild(L.domElement);const I={iTime:{value:0},iResolution:{value:new it(1,1,1)},animationSpeed:{value:h},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:j},middleLineCount:{value:A},bottomLineCount:{value:D},topLineDistance:{value:X},middleLineDistance:{value:rt},bottomLineDistance:{value:at},topWavePosition:{value:new it(l?.x??10,l?.y??.5,l?.rotate??-.4)},middleWavePosition:{value:new it(c?.x??5,c?.y??0,c?.rotate??.2)},bottomWavePosition:{value:new it(d?.x??2,d?.y??-.7,d?.rotate??.4)},iMouse:{value:new Me(-1e3,-1e3)},interactive:{value:m},bendRadius:{value:p},bendStrength:{value:v},bendInfluence:{value:0},parallax:{value:S},parallaxStrength:{value:E},parallaxOffset:{value:new Me(0,0)},lineGradient:{value:Array.from({length:g_},()=>new it(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const At=o.slice(0,g_);I.lineGradientCount.value=At.length,At.forEach((Nt,Pt)=>{const ee=AA(Nt);I.lineGradient.value[Pt].set(ee.x,ee.y,ee.z)})}const tt=new Ti({uniforms:I,vertexShader:TA,fragmentShader:bA}),St=new Yo(2,2),xt=new Bi(St,tt);ft.add(xt);const U=new RM,$=()=>{const At=C.current,Nt=At.clientWidth||1,Pt=At.clientHeight||1;L.setSize(Nt,Pt,!1);const ee=L.domElement.width,Ve=L.domElement.height;I.iResolution.value.set(ee,Ve,1)};$();const mt=typeof ResizeObserver<"u"?new ResizeObserver($):null;mt&&C.current&&mt.observe(C.current);const bt=At=>{const Nt=L.domElement.getBoundingClientRect(),Pt=At.clientX-Nt.left,ee=At.clientY-Nt.top,Ve=L.getPixelRatio();if(y.current.set(Pt*Ve,(Nt.height-ee)*Ve),F.current=1,S){const he=Nt.width/2,de=Nt.height/2,ye=(Pt-he)/Nt.width,ie=-(ee-de)/Nt.height;N.current.set(ye*E,ie*E)}},Bt=()=>{F.current=0};m&&(L.domElement.addEventListener("pointermove",bt),L.domElement.addEventListener("pointerleave",Bt));let J=0;const ut=()=>{I.iTime.value=U.getElapsedTime(),m&&(x.current.lerp(y.current,_),I.iMouse.value.copy(x.current),O.current+=(F.current-O.current)*_,I.bendInfluence.value=O.current),S&&(z.current.lerp(N.current,_),I.parallaxOffset.value.copy(z.current)),L.render(ft,lt),J=requestAnimationFrame(ut)};return ut(),()=>{cancelAnimationFrame(J),mt&&C.current&&mt.disconnect(),m&&(L.domElement.removeEventListener("pointermove",bt),L.domElement.removeEventListener("pointerleave",Bt)),St.dispose(),tt.dispose(),L.dispose(),L.domElement.parentElement&&L.domElement.parentElement.removeChild(L.domElement)}},[o,e,i,r,l,c,d,h,m,p,v,_,S,E]),ua.jsx("div",{ref:C,className:"floating-lines-container",style:{mixBlendMode:R}})}function CA(){return ua.jsxs("div",{className:"app-container",style:{width:"100%",height:"100vh",position:"relative",overflow:"hidden"},children:[ua.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},children:ua.jsx(RA,{enabledWaves:["top","bottom"],lineCount:[10,20],lineDistance:[8,4],bendRadius:5,bendStrength:-.5,interactive:!0,parallax:!0})}),ua.jsxs("div",{className:"content-overlay",style:{position:"relative",zIndex:10},children:[ua.jsx("h1",{className:"coming-soon-text",children:"Spring Camp 2026"}),ua.jsx("p",{className:"subtitle",children:"Coming Soon"})]})]})}cS.createRoot(document.getElementById("root")).render(ua.jsx(la.StrictMode,{children:ua.jsx(CA,{})}));
