import{I as M}from"./index.07bfe65b.js";import{F as T,u as W}from"./provide.4b9efbeb.js";import{R as P}from"./index.c3ac679f.js";import{d as A,a as p,t as c,c as E}from"./components.5cba9644.js";import{t as y}from"./elements.b75de382.js";import{_ as L}from"./elevation.c9ea9f5a.js";import{d as X,z as j,e as z,f as q,o as v,c as b,a as G,F as H,k as J,w as K,n as F,p as C,i as I}from"./vendor.49f89f0d.js";const O={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number],default:"24"},gap:{type:[String,Number],default:"2"},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:u}=E("rate"),Q=X({name:"VarRate",components:{VarIcon:M,VarFormDetails:T},directives:{Ripple:P},props:O,setup(e){const{form:a,bindForm:V}=W(),{errorMessage:f,validateWithTrigger:N,validate:R,resetValidation:i}=A(),g=t=>{const{count:o,size:n,gap:l}=e;return{color:d(t).color,marginRight:t!==c(o)?y(l):0,width:y(n),height:y(n),borderRadius:"50%"}},h=t=>{const{type:o,color:n}=d(t);return{[u("content")]:!0,[u("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[u("--error")]:f.value,[u("--primary")]:o!=="empty"&&!n}},r=t=>{const{type:o}=d(t),{icon:n,halfIcon:l,emptyIcon:s}=e;return o==="full"?n:o==="half"?l:s},d=t=>{const{modelValue:o,disabled:n,disabledColor:l,color:s,half:w,emptyColor:$}=e;let m;return n||(a==null?void 0:a.disabled.value)?m=l:s&&(m=s),t<=c(o)?{type:"full",score:t,color:m}:w&&t<=c(o)+.5?{type:"half",score:t,color:m}:{type:"empty",score:t,color:n||(a==null?void 0:a.disabled.value)?l:$}},B=(t,o)=>{if(e.half){const{offsetWidth:n}=o.target;o.offsetX<=Math.floor(n/2)&&(t-=.5)}p(e["onUpdate:modelValue"],t)},_=()=>R(e.rules,c(e.modelValue)),D=()=>j(()=>N(["onChange"],"onChange",e.rules,e.modelValue)),U=(t,o)=>{const{readonly:n,disabled:l,onChange:s}=e;n||l||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value)||(B(t,o),p(s,t),D())},k=()=>{p(e["onUpdate:modelValue"],0),i()};return p(V,{reset:k,validate:_,resetValidation:i}),{errorMessage:f,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:g,getClass:h,getIconName:r,handleClick:U,reset:k,validate:_,resetValidation:i,toSizeUnit:y,toNumber:c,n:u}}}),Y=["onClick"];function Z(e,a,V,f,N,R){const i=z("var-icon"),g=z("var-form-details"),h=q("ripple");return v(),b("div",{class:C(e.n("warp"))},[G("div",{class:C(e.n())},[(v(!0),b(H,null,J(e.toNumber(e.count),r=>K((v(),b("div",{key:r,style:F(e.getStyle(r)),class:C(e.getClass(r)),onClick:d=>e.handleClick(r,d)},[I(i,{transition:0,namespace:e.namespace,name:e.getIconName(r),style:F({fontSize:e.toSizeUnit(e.size)})},null,8,["namespace","name","style"])],14,Y)),[[h,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),I(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var S=L(Q,[["render",Z]]);S.install=function(e){e.component(S.name,S)};export{S as R};
