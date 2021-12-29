import{I as $}from"./index.d35523c4.js";import{h as P,c as L}from"./elements.6bb3d81f.js";import{t as y}from"./shared.61f3a471.js";import{_ as b}from"./elevation.8fda2ce0.js";import{d as M,r as u,b as h,y as x,x as C,e as g,o as _,c as T,a as A,i as F,p as V,n as O,G as U,X as z,l as N,j as R,k as X,m as Y,t as G,F as q}from"./vendor.8243c41e.js";import{C as H}from"./index.91d7258e.js";import{d as J}from"./index.77fe3760.js";import{a as K}from"./utils.16c24a31.js";const Q={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const f=100,v=-50;let w;const W=M({name:"VarPullRefresh",components:{VarIcon:$},props:Q,setup(e){const o=u(null),c=u(0),a=u(v),l=u("arrow-down"),s=u("default"),r=u(!1),t=h(()=>s.value!=="loading"&&s.value!=="success"&&!e.disabled),i=h(()=>({"var-pull-refresh__icon":!0,"var-pull-refresh__animation":s.value==="loading"})),m=h(()=>({transform:`translate3d(0px, ${a.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),E=h(()=>s.value==="success"),k=n=>{!t.value||(s.value="pulling",c.value=n.touches[0].clientY)},I=n=>{const d=L(w);if(d>0||!t.value)return;d===0&&a.value>v&&n.cancelable&&n.preventDefault();const S=(n.touches[0].clientY-c.value)/2+v;a.value=S>=f?f:S,l.value=a.value>=f*.2?"refresh":"arrow-down"},j=()=>{var n,d;!t.value||(r.value=!0,a.value>=f*.2?(s.value="loading",a.value=f*.3,(n=e["onUpdate:modelValue"])==null||n.call(e,!0),(d=e.onRefresh)==null||d.call(e)):(s.value="loosing",l.value="arrow-down",a.value=v,setTimeout(()=>{r.value=!1},y(e.animationDuration))))},B=()=>{setTimeout(()=>{s.value="default",l.value="arrow-down",r.value=!1},y(e.animationDuration))};return x(()=>e.modelValue,n=>{n===!1&&(r.value=!0,s.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{a.value=v,B()},y(e.successDuration)))}),C(()=>{w=P(o.value)}),{freshNode:o,touchStart:k,touchMove:I,touchEnd:j,iconName:l,iconClass:i,controlStyle:m,isSuccess:E}}});function Z(e,o,c,a,l,s){const r=g("var-icon");return _(),T("div",{ref:"freshNode",class:"var-pull-refresh",onTouchstart:o[0]||(o[0]=(...t)=>e.touchStart&&e.touchStart(...t)),onTouchmove:o[1]||(o[1]=(...t)=>e.touchMove&&e.touchMove(...t)),onTouchend:o[2]||(o[2]=(...t)=>e.touchEnd&&e.touchEnd(...t)),onTouchcancel:o[3]||(o[3]=(...t)=>e.touchEnd&&e.touchEnd(...t))},[A("div",{class:V(["var-pull-refresh__control var-elevation--2",[e.isSuccess?"var-pull-refresh__control-success":null]]),style:O(e.controlStyle)},[F(r,{name:e.iconName,transition:200,class:V(e.iconClass),"var-pull-refresh-cover":""},null,8,["name","class"])],6),U(e.$slots,"default")],544)}var p=b(W,[["render",Z]]);p.install=function(e){e.component(p.name,p)};const D=Array(10).fill("List Item"),ee=Array(10).fill("This is new List Item"),oe={name:"PullRefreshExample",components:{VarPullRefresh:p,VarCell:H},setup(){const e=u(!1),o=u(D),c=()=>{setTimeout(()=>{o.value=o.value[0]==="List Item"?ee:D,e.value=!1},2e3)},a=l=>{l.preventDefault()};return C(()=>{document.body.addEventListener("touchmove",a,{passive:!1})}),z(()=>{document.body.removeEventListener("touchmove",a)}),K(J),{refresh:c,isRefresh:e,data:o}}};function ae(e,o,c,a,l,s){const r=g("var-cell"),t=g("var-pull-refresh");return _(),N(t,{onRefresh:a.refresh,modelValue:a.isRefresh,"onUpdate:modelValue":o[0]||(o[0]=i=>a.isRefresh=i),"success-duration":"2000"},{default:R(()=>[(_(!0),T(q,null,X(a.data,(i,m)=>(_(),N(r,{key:m,border:""},{default:R(()=>[Y(G(i+" "+(m+1)),1)]),_:2},1024))),128))]),_:1},8,["onRefresh","modelValue"])}var de=b(oe,[["render",ae],["__scopeId","data-v-5ca1ba7a"]]);export{de as default};
