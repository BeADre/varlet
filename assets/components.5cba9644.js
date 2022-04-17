var I=Object.defineProperty;var u=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(t,n,e)=>n in t?I(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,l=(t,n)=>{for(var e in n||(n={}))m.call(n,e)&&f(t,e,n[e]);if(u)for(var e of u(n))g.call(n,e)&&f(t,e,n[e]);return t};var w=(t,n)=>{var e={};for(var s in t)m.call(t,s)&&n.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&u)for(var s of u(t))n.indexOf(s)<0&&g.call(t,s)&&(e[s]=t[s]);return e};import{r as A,x as p,C as v,D as x,E as L,A as d,q as N,W as P,b as C,X as b,z as S,O as $,Y as V,P as B,J as M}from"./vendor.49f89f0d.js";const z=t=>t==null?0:W(t)?(t=parseFloat(t),t=Number.isNaN(t)?0:t,t):D(t)?Number(t):t,_=t=>t==null?!1:t.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(t),G=t=>t==null?!1:t.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(t),W=t=>typeof t=="string",D=t=>typeof t=="boolean",J=t=>typeof t=="number",R=t=>Object.prototype.toString.call(t)==="[object Object]",X=t=>typeof t=="object"&&t!==null,j=t=>Array.isArray(t),Y=t=>t?/^(http)|(\.*\/)/.test(t):!1,Z=t=>t==null||t===""||Array.isArray(t)&&!t.length,h=(t,n)=>{if(t.length){const e=t.indexOf(n);if(e>-1)return t.splice(e,1)}},Q=(t,n=200)=>{let e,s=0;return function o(...r){const i=Date.now(),c=i-s;s||(s=i),e&&window.clearTimeout(e),c>=n?(t.apply(this,r),s=i):e=window.setTimeout(()=>{o.apply(this,r)},n-c)}},k=t=>{const n=[];return{cache:n,has(e){return this.cache.includes(e)},add(e){this.has(e)||(this.cache.length===t&&n.shift(),this.cache.push(e))},remove(e){this.has(e)&&h(this.cache,e)},clear(){this.cache.length=0}}},K=t=>t,y=t=>t**3,T=t=>t<.5?y(t*2)/2:1-y((1-t)*2)/2;function tt(t,n){const e=Object.values(n),s=["DD","HH","mm","ss"],o=[24,60,60,1e3];if(s.forEach((r,i)=>{t.includes(r)?t=t.replace(r,String(e[i]).padStart(2,"0")):e[i+1]+=e[i]*o[i]}),t.includes("S")){const r=String(e[e.length-1]).padStart(3,"0");t.includes("SSS")?t=t.replace("SSS",r):t.includes("SS")?t=t.replace("SS",r.slice(0,2)):t=t.replace("S",r.slice(0,1))}return t}const nt=(t,n)=>t==null?n:t,et=()=>typeof window!="undefined",st=t=>[...new Set(t)];function rt(t){return t.replace(/([A-Z])/g," $1").trim().split(" ").join("-").toLowerCase()}function ot(t,n){return Array.isArray(n)?n.reduce((e,s)=>(e[s]=t[s],e),{}):t[n]}function H(t){const n=$(t),e=document.createElement("div");return document.body.appendChild(e),{instance:n.mount(e),unmount(){n.unmount(),document.body.removeChild(e)}}}function it(t,n={},e={}){const s={setup(){return()=>B(t,l(l({},n),e))}},{unmount:o}=H(s);return{unmountInstance:o}}function q(t){const n=[],e=s=>{if(s==null?void 0:s.component){e(s==null?void 0:s.component.subTree);return}Array.isArray(s==null?void 0:s.children)&&s.children.forEach(o=>{M(o)&&(n.push(o),e(o))})};return e(t),n}function ct(t){const n=N([]),e=d(),s=()=>{const c=q(e.subTree);n.sort((a,O)=>c.indexOf(a.vnode)-c.indexOf(O.vnode))};return P(t,{collect:c=>{n.push(c),s()},clear:c=>{h(n,c)},instances:n}),{length:C(()=>n.length)}}function at(t){if(!E(t))return{index:null};const n=b(t),{collect:e,clear:s,instances:o}=n,r=d();return p(()=>{S().then(()=>e(r))}),v(()=>{S().then(()=>s(r))}),{index:C(()=>o.indexOf(r))}}function ut(t){const n=[],e=r=>{n.push(r)},s=r=>{h(n,r)};return{childProviders:n,bindChildren:r=>{P(t,l({collect:e,clear:s},r))}}}function lt(t){if(!E(t))return{parentProvider:null,bindParent:null};const i=b(t),{collect:e,clear:s}=i;return{parentProvider:w(i,["collect","clear"]),bindParent:c=>{p(()=>e(c)),V(()=>s(c))}}}function E(t){const n=d();return t in n.provides}function dt(){const t=A(""),n=async(o,r,i)=>!j(o)||!o.length?!0:!(await Promise.all(o.map(a=>a(r,i)))).some(a=>a!==!0?(t.value=String(a),!0):!1);return{errorMessage:t,validate:n,resetValidation:()=>{t.value=""},validateWithTrigger:async(o,r,i,c,a)=>{o.includes(r)&&await n(i,c,a)&&(t.value="")}}}function pt(t){p(()=>{window.addEventListener("hashchange",t),window.addEventListener("popstate",t)}),v(()=>{window.removeEventListener("hashchange",t),window.removeEventListener("popstate",t)})}function ht(){const t=A(!1);return x(()=>{t.value=!1}),L(()=>{t.value=!0}),{disabled:t}}function ft(t){const n=d();n&&Object.assign(n.proxy,t)}function mt(t){const n=`var-${t}`;return{n:o=>o?o.startsWith("--")?`${n}${o}`:`${n}__${o}`:n,classes:(...o)=>o.map(r=>{if(j(r)){const[i,c,a=null]=r;return i?c:a}return r})}}function gt(t,...n){if(t)return t(...n)}export{tt as A,D as B,G as C,_ as D,h as E,k as F,K as G,gt as a,Y as b,mt as c,dt as d,ft as e,Z as f,W as g,lt as h,J as i,ut as j,rt as k,ct as l,at as m,R as n,nt as o,ot as p,et as q,it as r,pt as s,z as t,ht as u,T as v,Q as w,X as x,st as y,j as z};
