const l=e=>e==null?0:u(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):p(e)?Number(e):e,d=e=>e==null?!1:e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(e),g=e=>e==null?!1:e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),u=e=>typeof e=="string",p=e=>typeof e=="boolean",S=e=>typeof e=="number",f=e=>Object.prototype.toString.call(e)==="[object Object]",b=e=>Array.isArray(e),w=e=>e?/^(http)|(\.*\/)/.test(e):!1,y=e=>e==null||e===""||Array.isArray(e)&&!e.length,h=(e,t)=>{if(e.length){const s=e.indexOf(t);if(s>-1)return e.splice(s,1)}},m=(e,t=200)=>{let s,c=0;return function r(...n){const i=Date.now(),o=i-c;c||(c=i),s&&window.clearTimeout(s),o>=t?(e.apply(this,n),c=i):s=window.setTimeout(()=>{r.apply(this,n)},t-o)}},j=e=>{const t=[];return{cache:t,has(s){return this.cache.includes(s)},add(s){this.has(s)||(this.cache.length===e&&t.shift(),this.cache.push(s))},remove(s){this.has(s)&&h(this.cache,s)},clear(){this.cache.length=0}}},A=e=>e,a=e=>e**3,N=e=>e<.5?a(e*2)/2:1-a((1-e)*2)/2;function O(e,t){const s=Object.values(t),c=["DD","HH","mm","ss"],r=[24,60,60,1e3];if(c.forEach((n,i)=>{e.includes(n)?e=e.replace(n,String(s[i]).padStart(2,"0")):s[i+1]+=s[i]*r[i]}),e.includes("S")){const n=String(s[s.length-1]).padStart(3,"0");e.includes("SSS")?e=e.replace("SSS",n):e.includes("SS")?e=e.replace("SS",n.slice(0,2)):e=e.replace("S",n.slice(0,1))}return e}const $=(e,t)=>e==null?t:e,T=()=>typeof window!="undefined",C=e=>[...new Set(e)];function H(e){const t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()}export{w as a,y as b,u as c,b as d,$ as e,T as f,f as g,N as h,S as i,m as j,H as k,p as l,g as m,d as n,j as o,O as p,A as q,h as r,l as t,C as u};
