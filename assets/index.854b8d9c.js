import{e as C,h as z}from"./elements.6bb3d81f.js";import{t as B}from"./shared.61f3a471.js";import{_ as N}from"./elevation.8fda2ce0.js";import{d as H,r as t,b as u,y as I,D as j,E as D,x as P,C as R,o as V,c as A,a as G,G as O,n as M,p as U}from"./vendor.8243c41e.js";const q={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};const J=H({name:"VarSticky",props:q,setup(e){const d=t(null),l=t(null),n=t(!1),r=t("0px"),f=t("0px"),m=t("auto"),b=t("auto"),h=t("auto"),y=t("auto"),k=u(()=>!e.disabled&&e.cssMode),$=u(()=>!e.disabled&&n.value),i=u(()=>C(e.offsetTop));let o;const s=()=>{const{onScroll:a,cssMode:E,disabled:F}=e;if(F)return;let p=0;if(o!==window){const{top:T}=o.getBoundingClientRect();p=T}const g=l.value,c=d.value,{top:W,left:L}=c.getBoundingClientRect(),S=W-p;S<=i.value?(E||(m.value=`${c.offsetWidth}px`,b.value=`${c.offsetHeight}px`,r.value=`${p+i.value}px`,f.value=`${L}px`,h.value=`${g.offsetWidth}px`,y.value=`${g.offsetHeight}px`,n.value=!0),a==null||a(i.value,!0)):(n.value=!1,a==null||a(S,!1))},x=()=>{o=z(d.value),o!==window&&o.addEventListener("scroll",s),window.addEventListener("scroll",s),s()},w=()=>{o!==window&&o.removeEventListener("scroll",s),window.removeEventListener("scroll",s)};return I(()=>e.disabled,s),j(x),D(w),P(x),R(w),{stickyEl:d,wrapperEl:l,isFixed:n,offsetTop:i,fixedTop:r,fixedLeft:f,fixedWidth:m,fixedHeight:b,fixedWrapperWidth:h,fixedWrapperHeight:y,enableCSSMode:k,enableFixedMode:$,toNumber:B}}});function K(e,d,l,n,r,f){return V(),A("div",{class:U(["var-sticky",[e.enableCSSMode?"var-sticky--css-mode":null]]),ref:"stickyEl",style:M({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[G("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:M({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[O(e.$slots,"default")],4)],6)}var v=N(J,[["render",K]]);v.install=function(e){e.component(v.name,v)};export{v as S,q as p};
