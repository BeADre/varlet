import{R as m}from"./index.b947dc5d.js";import{A as f}from"./AppType.4ff4df53.js";import{c as i}from"./index.15644cea.js";import{b as v,w as b}from"./utils.16c24a31.js";import{u as k,a as u,_ as h,b as C,c as x}from"./en-US.fd4fd1d9.js";import{_ as F}from"./elevation.83e98fef.js";import{C as U,e as S,f as g,o as j,c as B,i as r,j as l,w as n,a as d,m as a,t as o,F as N}from"./vendor.8243c41e.js";var y={click:"\u70B9\u51FB",basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",disabledStatus:"\u7981\u7528\u72B6\u6001"},w={click:"Click",basicUsage:"Basic Usage",customColor:"Custom Color",disabledStatus:"Disabled Status"};const{add:_,use:A,pack:z,packs:W,merge:X}=k(),D=s=>{x(s),A(s)};u("zh-CN",h);u("en-US",C);_("zh-CN",y);_("en-US",w);const E={name:"RippleExample",components:{AppType:f},directives:{Ripple:m},setup(){const s=i.touchmoveForbid;return v(p=>{p==="pc"&&(i.touchmoveForbid=!1)}),b(D),U(()=>{i.touchmoveForbid=s}),{pack:z}}},T={class:"block var-elevation--2"},R={class:"block var-elevation--2"},V={class:"block var-elevation--2"};function L(s,p,I,e,P,q){const c=S("app-type"),t=g("ripple");return j(),B(N,null,[r(c,null,{default:l(()=>[a(o(e.pack.basicUsage),1)]),_:1}),n(d("div",T,[a(o(e.pack.click),1)],512),[[t]]),r(c,null,{default:l(()=>[a(o(e.pack.customColor),1)]),_:1}),n(d("div",R,[a(o(e.pack.click),1)],512),[[t,{color:"#2979ff"}]]),r(c,null,{default:l(()=>[a(o(e.pack.disabledStatus),1)]),_:1}),n(d("div",V,[a(o(e.pack.click),1)],512),[[t,{disabled:!0}]])],64)}var Y=F(E,[["render",L],["__scopeId","data-v-f5e05bac"]]);export{Y as default};
