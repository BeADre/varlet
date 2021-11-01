var y=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var _=(t,o,i)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,b=(t,o)=>{for(var i in o||(o={}))B.call(o,i)&&_(t,i,o[i]);if(v)for(var i of v(o))h.call(o,i)&&_(t,i,o[i]);return t},O=(t,o)=>g(t,C(o));import{M as j}from"./index.d9b6be6d.js";import{B as S}from"./index.0d6951cf.js";import{C as A}from"./index.043437d0.js";import{S as U}from"./index.978366b7.js";import{A as E}from"./AppType.44c77136.js";import{c as k}from"./index.510439cf.js";import{u as M,a as w,_ as T,b as N,c as X,w as Y,d as V}from"./en-US.64d12132.js";import{_ as L}from"./elevation.c2941a7c.js";import{p as z,H as I,Z as R,d as r,o as D,c as x,h as n,w as e,a as d,F as H,V as P,W,l,t as a}from"./vendor.ea41cd30.js";import"./elements.1c3a8437.js";import"./shared.2d2ec151.js";import"./zIndex.c624737f.js";import"./index.931337ba.js";import"./index.2bd4354e.js";import"./components.c996eb06.js";import"./index.8afb1785.js";import"./lock.67e58c2a.js";var Z={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},q={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:F,use:G,pack:J,packs:No,merge:Xo}=M(),K=t=>{X(t),G(t)};w("zh-CN",T);w("en-US",N);F("zh-CN",Z);F("en-US",q);const Q={name:"MenuExample",components:{VarMenu:j,VarButton:S,VarCell:A,AppType:E},setup(){const t=z({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1});Y(K);const o=k.touchmoveForbid;return V(i=>{i==="pc"&&(k.touchmoveForbid=!1)}),I(()=>{k.touchmoveForbid=o}),O(b({pack:J},R(t)),{Snackbar:U})}},$=t=>(P("data-v-664c2da0"),t=t(),W(),t),oo={class:"block-1"},eo={class:"cell-list"},to={class:"block"},no={class:"cell-list"},so={class:"block-1"},lo={class:"cell-list"},ao={class:"cell-list"},fo={class:"block-2"},uo={class:"cell-list"},io={class:"cell-list"},po={class:"cell-list"},mo=$(()=>d("div",{style:{"margin-bottom":"100px"}},null,-1));function ro(t,o,i,s,co,ko){const c=r("app-type"),p=r("var-button"),f=r("var-cell"),m=r("var-menu");return D(),x(H,null,[n(c,null,{default:e(()=>[l(a(s.pack.alignmentMethods),1)]),_:1}),d("div",oo,[n(m,{show:t.top,"onUpdate:show":o[1]||(o[1]=u=>t.top=u)},{menu:e(()=>[d("div",eo,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[0]||(o[0]=u=>t.top=!0)},{default:e(()=>[l(a(s.pack.topAlignment),1)]),_:1})]),_:1},8,["show"])]),d("div",to,[n(m,{alignment:"bottom",show:t.bottom,"onUpdate:show":o[3]||(o[3]=u=>t.bottom=u)},{menu:e(()=>[d("div",no,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[2]||(o[2]=u=>t.bottom=!0)},{default:e(()=>[l(a(s.pack.bottomAlignment),1)]),_:1})]),_:1},8,["show"])]),n(c,null,{default:e(()=>[l(a(s.pack.offset),1)]),_:1}),d("div",so,[n(m,{"offset-x":72,show:t.offsetX,"onUpdate:show":o[5]||(o[5]=u=>t.offsetX=u)},{menu:e(()=>[d("div",lo,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[4]||(o[4]=u=>t.offsetX=!0)},{default:e(()=>[l(a(s.pack.offsetRight),1)]),_:1})]),_:1},8,["show"]),n(m,{"offset-x":-72,show:t.offsetX1,"onUpdate:show":o[7]||(o[7]=u=>t.offsetX1=u)},{menu:e(()=>[d("div",ao,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[6]||(o[6]=u=>t.offsetX1=!0)},{default:e(()=>[l(a(s.pack.offsetLeft),1)]),_:1})]),_:1},8,["show"])]),d("div",fo,[n(m,{"offset-y":36,show:t.offsetY,"onUpdate:show":o[9]||(o[9]=u=>t.offsetY=u)},{menu:e(()=>[d("div",uo,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[8]||(o[8]=u=>t.offsetY=!0)},{default:e(()=>[l(a(s.pack.offsetBottom),1)]),_:1})]),_:1},8,["show"]),n(m,{"offset-y":-36,show:t.offsetY1,"onUpdate:show":o[11]||(o[11]=u=>t.offsetY1=u)},{menu:e(()=>[d("div",io,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[10]||(o[10]=u=>t.offsetY1=!0)},{default:e(()=>[l(a(s.pack.offsetTop),1)]),_:1})]),_:1},8,["show"])]),n(c,null,{default:e(()=>[l(a(s.pack.events),1)]),_:1}),n(m,{show:t.event,"onUpdate:show":o[13]||(o[13]=u=>t.event=u),onOpen:o[14]||(o[14]=()=>s.Snackbar.info("open")),onOpened:o[15]||(o[15]=()=>s.Snackbar.success("opened")),onClose:o[16]||(o[16]=()=>s.Snackbar.warning("close")),onClosed:o[17]||(o[17]=()=>s.Snackbar.error("closed"))},{menu:e(()=>[d("div",po,[n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:e(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:e(()=>[n(p,{type:"primary",onClick:o[12]||(o[12]=u=>t.event=!0)},{default:e(()=>[l(a(s.pack.events),1)]),_:1})]),_:1},8,["show"]),mo],64)}var Yo=L(Q,[["render",ro],["__scopeId","data-v-664c2da0"]]);export{Yo as default};
