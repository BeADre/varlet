var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,z=(t,a)=>{for(var e in a||(a={}))I.call(a,e)&&g(t,e,a[e]);if(y)for(var e of y(a))b.call(a,e)&&g(t,e,a[e]);return t};import{D as O,a0 as R,a1 as C,O as h,a2 as G}from"./elevation.83e98fef.js";const N="background-image",W="lazy-loading",B="lazy-error",_="lazy-attempt",D=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],f="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",s=[],u=[],p=G(100),n={loading:f,error:f,attempt:3,throttleWait:300,events:D};let l=h(i,n.throttleWait);function A(t,a){t._lazy.arg===N?t.style.backgroundImage=`url(${a})`:t.setAttribute("src",a)}function P(t){t._lazy.loading&&A(t,t._lazy.loading),i()}function T(t){t._lazy.error&&A(t,t._lazy.error),t._lazy.state="error",d(t),i()}function E(t,a){A(t,a),t._lazy.state="success",d(t),i()}function M(t){var a;u.includes(t)||(u.push(t),(a=n.events)==null||a.forEach(e=>{t.addEventListener(e,l,{passive:!0})}))}function S(){u.forEach(t=>{var a;(a=n.events)==null||a.forEach(e=>{t.removeEventListener(e,l)})}),u.length=0}function Y(t,a){var r,o,c;const e={loading:(r=t.getAttribute(W))!=null?r:n.loading,error:(o=t.getAttribute(B))!=null?o:n.error,attempt:t.getAttribute(_)?Number(t.getAttribute(_)):n.attempt};t._lazy=z({src:a.value,arg:a.arg,currentAttempt:0,state:"pending",attemptLock:!1},e),A(t,f),(c=n.filter)==null||c.call(n,t._lazy)}function Z(t,a){const e=new Image;e.src=a,t._lazy.preloadImage=e,e.addEventListener("load",()=>{t._lazy.attemptLock=!1,p.add(a),E(t,a)}),e.addEventListener("error",()=>{t._lazy.attemptLock=!1,t._lazy.currentAttempt>=t._lazy.attempt?T(t):L(t)})}function L(t){if(t._lazy.attemptLock)return;t._lazy.attemptLock=!0,t._lazy.currentAttempt++;const{src:a}=t._lazy;if(p.has(a)){E(t,a),t._lazy.attemptLock=!1;return}P(t),Z(t,a)}async function m(t){await R(t)&&L(t)}function i(){s.forEach(t=>m(t))}async function V(t){!s.includes(t)&&s.push(t),C(t).forEach(M),await m(t)}function d(t){O(s,t),s.length===0&&S()}function j(t,a){const{src:e,arg:r}=t._lazy;return e!==a.value||r!==a.arg}async function v(t,a){Y(t,a),await V(t)}async function x(t,a){if(!j(t,a)){s.includes(t)&&await m(t);return}await v(t,a)}function H(t={}){const{events:a,loading:e,error:r,attempt:o,throttleWait:c,filter:k}=t;n.events=a!=null?a:n.events,n.loading=e!=null?e:n.loading,n.error=r!=null?r:n.error,n.attempt=o!=null?o:n.attempt,n.throttleWait=c!=null?c:n.throttleWait,n.filter=k}const U={mounted:v,unmounted:d,updated:x,install(t,a){H(a),l=h(i,n.throttleWait),t.directive("lazy",this)}};export{U as L};
