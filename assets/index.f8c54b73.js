import{A as m}from"./AppType.44c77136.js";import{I as _}from"./index.8afb1785.js";import{C as f}from"./index.043437d0.js";import{u as h,a as p,_ as k,b as w,c as C,w as F}from"./en-US.64d12132.js";import{_ as v}from"./elevation.c2941a7c.js";import{d,o as x,c as B,a as s,h as e,w as o,F as U,l as c,t}from"./vendor.ea41cd30.js";import"./shared.2d2ec151.js";import"./elements.1c3a8437.js";var j={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},N={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:u,use:S,pack:b,packs:M,merge:O}=h(),g=l=>{C(l),S(l)};p("zh-CN",k);p("en-US",w);u("zh-CN",j);u("en-US",N);const A={name:"CellExample",components:{VarIcon:_,VarCell:f,AppType:m},setup(){return F(g),{pack:b}}};function D(l,I,E,a,y,V){const r=d("app-type"),n=d("var-cell"),i=d("var-icon");return x(),B(U,null,[s("div",null,[e(r,null,{default:o(()=>[c(t(a.pack.basicUsage),1)]),_:1}),e(n,null,{default:o(()=>[c(t(a.pack.content),1)]),_:1}),e(n,null,{default:o(()=>[c(t(a.pack.content),1)]),_:1})]),s("div",null,[e(r,null,{default:o(()=>[c(t(a.pack.showIcon),1)]),_:1}),e(n,{icon:"fire",title:a.pack.content},{extra:o(()=>[e(i,{name:"information"})]),_:1},8,["title"]),e(n,{icon:"fire",title:a.pack.content},{extra:o(()=>[e(i,{name:"information"})]),_:1},8,["title"])]),s("div",null,[e(r,null,{default:o(()=>[c(t(a.pack.showDesc),1)]),_:1}),e(n,{icon:"fire",title:a.pack.content,desc:a.pack.description},{extra:o(()=>[e(i,{name:"information"})]),_:1},8,["title","desc"]),e(n,{title:a.pack.content,desc:a.pack.description},null,8,["title","desc"])]),s("div",null,[e(r,null,{default:o(()=>[c(t(a.pack.showBorder),1)]),_:1}),e(n,{border:""},{default:o(()=>[c(t(a.pack.content),1)]),_:1}),e(n,{border:""},{default:o(()=>[c(t(a.pack.content),1)]),_:1})])],64)}var P=v(A,[["render",D]]);export{P as default};
