import{A as f}from"./AppType.a5400838.js";import{L as y}from"./index.98cd9a0c.js";import{B as v}from"./index.b52f26c9.js";import{C as g}from"./index.b54424e7.js";import{u as C,a as p,_ as b,b as F,c as k}from"./en-US.fd4fd1d9.js";import{w as x,a as E}from"./utils.16c24a31.js";import{d as h}from"./index.77fe3760.js";import{_ as j}from"./elevation.8fda2ce0.js";import{r as z,e as r,o as B,c as V,a as t,i as e,j as s,m as c,t as d}from"./vendor.8243c41e.js";import"./shared.61f3a471.js";import"./index.b947dc5d.js";import"./index.15644cea.js";import"./components.101c5ac0.js";import"./elements.6bb3d81f.js";var w={type:"\u7C7B\u578B",size:"\u5927\u5C0F",color:"\u989C\u8272",wrap:"\u5305\u88F9\u5185\u5BB9",open:"\u6253\u5F00",close:"\u5173\u95ED",cardTitle:"\u4ECB\u7ECD",cardDesc:"Varlet \u662F\u4E00\u4E2A\u57FA\u4E8EVue3\u5F00\u53D1\u7684 Material \u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\uFF0C\u5168\u9762\u62E5\u62B1Vue3\u751F\u6001\uFF0C\u7531\u793E\u533A\u7684\u5C0F\u4F19\u4F34\u5F00\u53D1\u548C\u7EF4\u62A4\u3002"},A={type:"Type",size:"Size",color:"Color",wrap:"Wrap",open:"Open",close:"Close",cardTitle:"Intro",cardDesc:"Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community."};const{add:u,use:D,pack:N,packs:ie,merge:re}=C(),T=n=>{k(n),D(n)};p("zh-CN",b);p("en-US",F);u("zh-CN",w);u("en-US",A);const L={name:"LoadingExample",components:{VarLoading:y,VarButton:v,VarCard:g,AppType:f},setup(){const n=z(!1);return x(T),E(h),{pack:N,loading:n}}},S={class:"loading-demo"},U={class:"loading-demo__type"},M={class:"loading-demo__type-block"},I={class:"loading-demo__type"},O={class:"loading-demo__type-block"},W={class:"loading-demo__size"},q={class:"loading-demo__size-block"};function G(n,l,H,o,J,K){const i=r("app-type"),a=r("var-loading"),_=r("var-button"),m=r("var-card");return B(),V("div",S,[t("div",U,[e(i,null,{default:s(()=>[c(d(o.pack.type),1)]),_:1}),t("div",M,[e(a,{type:"circle"}),e(a,{type:"cube"}),e(a,{type:"wave"}),e(a,{type:"rect"}),e(a,{type:"disappear"})])]),t("div",I,[e(i,null,{default:s(()=>[c(d(o.pack.color),1)]),_:1}),t("div",O,[e(a,{type:"circle",color:"#2979ff"}),e(a,{type:"cube",color:"#2979ff"}),e(a,{type:"wave",color:"#2979ff"}),e(a,{type:"rect",color:"#2979ff"}),e(a,{type:"disappear",color:"#2979ff"})])]),t("div",W,[e(i,null,{default:s(()=>[c(d(o.pack.size),1)]),_:1}),t("div",q,[e(a,{type:"circle",size:"small"}),e(a,{type:"cube",size:"small"}),e(a,{type:"wave",size:"small"}),e(a,{type:"rect",size:"small"}),e(a,{type:"disappear",size:"small"})])]),t("div",null,[e(i,null,{default:s(()=>[c(d(o.pack.wrap),1)]),_:1}),e(_,{onClick:l[0]||(l[0]=P=>o.loading=!o.loading),style:{"margin-bottom":"8px"}},{default:s(()=>[c(d(o.loading?o.pack.close:o.pack.open),1)]),_:1}),e(a,{description:"loading....",type:"circle",loading:o.loading},{default:s(()=>[e(m,{title:o.pack.cardTitle,description:o.pack.cardDesc},null,8,["title","description"])]),_:1},8,["loading"])])])}var le=j(L,[["render",G],["__scopeId","data-v-17ad58e8"]]);export{le as default};
