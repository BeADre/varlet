import{u as x}from"./provide.3f05ceb9.js";import{n as C,_ as ee,o as te,$ as j}from"./elevation.83e98fef.js";import{d as ae,r as m,b as le,y as ne,x as oe,C as re,o as g,c as k,a as ue,G as V,p as M,n as W,F as ie,k as se,h as ve}from"./vendor.8243c41e.js";const ce={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}};const de=250,fe=20,pe=ae({name:"VarSwipe",props:ce,setup(t){const v=m(null),u=m(0),A=le(()=>t.vertical),s=m(0),r=m(0),i=m(!1),n=m(0),{swipeItems:L,bindSwipeItems:q,length:l}=x();let w=!1,I=-1,T,y,P,f,p;const c=e=>L.find(({index:a})=>a.value===e),G=()=>{!t.loop||(r.value>=0&&c(l.value-1).setTranslate(-s.value),r.value<=-(s.value-u.value)&&c(0).setTranslate(s.value),r.value>-(s.value-u.value)&&r.value<0&&(c(l.value-1).setTranslate(0),c(0).setTranslate(0)))},$=e=>{const a=te(e)?e:Math.floor((r.value-u.value/2)/-u.value),{loop:o}=t;return a<=-1?o?-1:0:a>=l.value?o?l.value:l.value-1:a},H=e=>{const{loop:a}=t;return e===-1?a?l.value-1:0:e===l.value?a?0:l.value-1:e},z=e=>{const{loop:a}=t;return e<0?a?l.value-1:0:e>l.value-1?a?0:l.value-1:e},E=e=>{const a=r.value>=u.value,o=r.value<=-s.value,d=0,h=-(s.value-u.value);i.value=!0,(a||o)&&(i.value=!0,r.value=o?d:h,c(0).setTranslate(0),c(l.value-1).setTranslate(0)),j(()=>{i.value=!1,e==null||e()})},R=()=>{i.value=!0,n.value=z(C(t.initialIndex)),r.value=n.value*-u.value,j(()=>{i.value=!1})},D=()=>{const{autoplay:e}=t;!e||l.value<=1||(N(),I=window.setTimeout(()=>{B(),D()},C(e)))},N=()=>{I&&clearInterval(I)},U=(e,a)=>{if(e>a&&e>10)return"horizontal";if(a>e&&a>10)return"vertical"},J=e=>{if(l.value<=1||!t.touchable)return;const{clientX:a,clientY:o}=e.touches[0];T=a,y=o,P=performance.now(),w=!0,N(),E(()=>{i.value=!0})},K=e=>{const{touchable:a,vertical:o}=t;if(!w||!a)return;const{clientX:d,clientY:h}=e.touches[0],b=Math.abs(d-T),Y=Math.abs(h-y);if(U(b,Y)===(o?"vertical":"horizontal")){e.preventDefault();const Z=f!==void 0?d-f:0,_=p!==void 0?h-p:0;f=d,p=h,r.value+=o?_:Z,G()}},O=()=>{if(!w)return;const{vertical:e,onChange:a}=t,o=e?p<y:f<T,d=Math.abs(e?y-p:T-f),b=performance.now()-P<=de&&d>=fe?$(o?n.value+1:n.value-1):$();w=!1,i.value=!1,f=void 0,p=void 0,r.value=b*-u.value;const Y=n.value;n.value=H(b),D(),Y!==n.value&&(a==null||a(n.value))},S=()=>{u.value=t.vertical?v.value.offsetHeight:v.value.offsetWidth,s.value=u.value*l.value,R(),D()},B=()=>{if(l.value<=1)return;const{loop:e,onChange:a}=t,o=n.value;n.value=z(o+1),a==null||a(n.value),E(()=>{if(o===l.value-1&&e){c(0).setTranslate(s.value),r.value=l.value*-u.value;return}o!==l.value-1&&(r.value=n.value*-u.value)})},F=()=>{if(l.value<=1)return;const{loop:e,onChange:a}=t,o=n.value;n.value=z(o-1),a==null||a(n.value),E(()=>{if(o===0&&e){c(l.value-1).setTranslate(-s.value),r.value=u.value;return}o!==0&&(r.value=n.value*-u.value)})},Q=e=>{if(l.value<=1||e===n.value)return;e=e<0?0:e,e=e>=l.value?l.value:e;const a=e>n.value?B:F;Array.from({length:Math.abs(e-n.value)}).forEach(a)};return q({size:u,vertical:A}),ne(()=>l.value,S),oe(()=>{window.addEventListener("resize",S)}),re(()=>{window.removeEventListener("resize",S),N()}),{length:l,index:n,swipeEl:v,trackSize:s,translate:r,lockDuration:i,handleTouchstart:J,handleTouchmove:K,handleTouchend:O,next:B,prev:F,to:Q,resize:S,toNumber:C}}}),he={class:"var-swipe",ref:"swipeEl"},me=["onClick"];function we(t,v,u,A,s,r){return g(),k("div",he,[ue("div",{class:M(["var-swipe__track",[t.vertical?"var-swipe--vertical":null]]),style:W({width:t.vertical?void 0:`${t.trackSize}px`,height:t.vertical?`${t.trackSize}px`:void 0,transform:`translate${t.vertical?"Y":"X"}(${t.translate}px)`,transitionDuration:t.lockDuration?"0ms":`${t.toNumber(t.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...i)=>t.handleTouchstart&&t.handleTouchstart(...i)),onTouchmove:v[1]||(v[1]=(...i)=>t.handleTouchmove&&t.handleTouchmove(...i)),onTouchend:v[2]||(v[2]=(...i)=>t.handleTouchend&&t.handleTouchend(...i))},[V(t.$slots,"default")],38),V(t.$slots,"indicator",{index:t.index,length:t.length},()=>[t.indicator&&t.length?(g(),k("div",{key:0,class:M(["var-swipe__indicators",[t.vertical?"var-swipe--indicators-vertical":null]])},[(g(!0),k(ie,null,se(t.length,(i,n)=>(g(),k("div",{class:M(["var-swipe__indicator",[t.index===n?"var-swipe--indicator-active":null,t.vertical?"var-swipe--indicator-vertical":null]]),style:W({background:t.indicatorColor}),key:i,onClick:L=>t.to(n)},null,14,me))),128))],2)):ve("v-if",!0)])],512)}var X=ee(pe,[["render",we]]);X.install=function(t){t.component(X.name,X)};export{X as S,ce as p};
