var L=Object.defineProperty;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var v=(n,t,e)=>t in n?L(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,u=(n,t)=>{for(var e in t||(t={}))m.call(t,e)&&v(n,e,t[e]);if(d)for(var e of d(t))h.call(t,e)&&v(n,e,t[e]);return n};var p=(n,t)=>{var e={};for(var r in n)m.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&d)for(var r of d(n))t.indexOf(r)<0&&h.call(n,r)&&(e[r]=n[r]);return e};import{r as P,x as f,C as A,D as O,E as V,A as l,q as N,W as w,b as x,X as C,z as g,O as W,Y as j,P as D,J as M}from"./vendor.49f89f0d.js";import{d as U,r as I}from"./shared.506a394a.js";function R(n,t){return Array.isArray(t)?t.reduce((e,r)=>(e[r]=n[r],e),{}):n[t]}function q(n){const t=W(n),e=document.createElement("div");return document.body.appendChild(e),{instance:t.mount(e),unmount(){t.unmount(),document.body.removeChild(e)}}}function S(n,t={},e={}){const r={setup(){return()=>D(n,u(u({},t),e))}},{unmount:o}=q(r);return{unmountInstance:o}}function z(n){const t=[],e=r=>{if(r==null?void 0:r.component){e(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(o=>{M(o)&&(t.push(o),e(o))})};return e(n),t}function X(n){const t=N([]),e=l(),r=()=>{const s=z(e.subTree);t.sort((c,y)=>s.indexOf(c.vnode)-s.indexOf(y.vnode))};return w(n,{collect:s=>{t.push(s),r()},clear:s=>{I(t,s)},instances:t}),{length:x(()=>t.length)}}function Y(n){if(!E(n))return{index:null};const t=C(n),{collect:e,clear:r,instances:o}=t,a=l();return f(()=>{g().then(()=>e(a))}),A(()=>{g().then(()=>r(a))}),{index:x(()=>o.indexOf(a))}}function F(n){const t=[],e=a=>{t.push(a)},r=a=>{I(t,a)};return{childProviders:t,bindChildren:a=>{w(n,u({collect:e,clear:r},a))}}}function G(n){if(!E(n))return{parentProvider:null,bindParent:null};const i=C(n),{collect:e,clear:r}=i;return{parentProvider:p(i,["collect","clear"]),bindParent:s=>{f(()=>e(s)),j(()=>r(s))}}}function E(n){const t=l();return n in t.provides}function Q(){const n=P(""),t=async(o,a,i)=>!U(o)||!o.length?!0:!(await Promise.all(o.map(c=>c(a,i)))).some(c=>c!==!0?(n.value=String(c),!0):!1);return{errorMessage:n,validate:t,resetValidation:()=>{n.value=""},validateWithTrigger:async(o,a,i,s,c)=>{o.includes(a)&&await t(i,s,c)&&(n.value="")}}}function Z(n){f(()=>{window.addEventListener("hashchange",n),window.addEventListener("popstate",n)}),A(()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)})}function _(){const n=P(!1);return O(()=>{n.value=!1}),V(()=>{n.value=!0}),{disabled:n}}function $(n){const t=l();t&&Object.assign(t.proxy,n)}export{Q as a,G as b,F as c,X as d,$ as e,Y as f,Z as g,S as m,R as p,_ as u};
