var O=Object.defineProperty;var s=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(e,o,a)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,p=(e,o)=>{for(var a in o||(o={}))b.call(o,a)&&d(e,a,o[a]);if(s)for(var a of s(o))g.call(o,a)&&d(e,a,o[a]);return e};import{q as j,y as x,h as l,M as k,T as v,w as F,v as I,A as P,U as _}from"./vendor.8a125dba.js";import{u as z}from"./lock.2797eacf.js";import{u as A}from"./zIndex.2c847fc6.js";import{u as B,d as T}from"./components.33246c91.js";import"./index.23ced9c1.js";function V(e){return["top","bottom","right","left","center"].includes(e)}const L={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:V},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{type:String},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}};function R(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}var c=j({name:"VarPopup",inheritAttrs:!1,props:L,setup(e,{slots:o,attrs:a}){const{zIndex:i}=A(()=>e.show,3),{disabled:y}=B(),f=()=>{var r;const{closeOnClickOverlay:t,onClickOverlay:n}=e;n==null||n(),!!t&&((r=e["onUpdate:show"])==null||r.call(e,!1))};z(e,"show","lockScroll"),x(()=>e.show,t=>{const{onOpen:n,onClose:r}=e;t?n==null||n():r==null||r()}),T(()=>{var t;return(t=e.onRouteChange)==null?void 0:t.call(e)});const m=()=>{const{overlayClass:t,overlayStyle:n}=e;return l("div",{class:["var-popup__overlay",t],style:p({zIndex:i.value-1},n),onClick:f},null)},h=()=>{var t;return l("div",P({class:["var-popup__content","var-elevation--3",`var-popup--${e.position}`],style:{zIndex:i.value}},a),[(t=o.default)==null?void 0:t.call(o)])},u=()=>{const{onOpened:t,onClosed:n,show:r,overlay:w,transition:C,position:S}=e;return l(v,{name:"var-fade",onAfterEnter:t,onAfterLeave:n},{default:()=>[F(l("div",{class:"var--box var-popup",style:{zIndex:i.value-2}},[w&&m(),l(v,{name:C||`var-pop-${S}`},{default:()=>[r&&h()]})]),[[I,r]])]})};return()=>{const{teleport:t}=e;if(t){let n;return l(k,{to:t,disabled:y.value},R(n=u())?n:{default:()=>[n]})}return u()}}});c.install=function(e){e.component(c.name,c)};export{c as P,L as p};
