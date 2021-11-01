import{F as z,u as M}from"./provide.d55b06dc.js";import{b as q,e as H,u as P,a as J,f as L}from"./components.c996eb06.js";import{_ as U}from"./elevation.c2941a7c.js";import{q as G,b as N,y as I,d as p,o as j,c as E,a as A,B as C,m as b,h as D,z as w,r as F,e as Q,i as X,n as Z,A as x}from"./vendor.ea41cd30.js";import{I as ee}from"./index.8afb1785.js";import{R as ae}from"./index.931337ba.js";function re(e){return["horizontal","vertical"].includes(e)}const oe={modelValue:{type:[String,Number,Boolean,Object,Array],default:void 0},direction:{type:String,default:"horizontal",validator:re},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},K=Symbol("RADIO_GROUP_BIND_RADIO_KEY"),W=Symbol("RADIO_GROUP_COUNT_RADIO_KEY");function ne(){const{bindChildren:e,childProviders:r}=q(K),{length:s}=H(W);return{length:s,radios:r,bindRadios:e}}const ie=G({name:"VarRadioGroup",components:{VarFormDetails:z},props:oe,setup(e){const{length:r,radios:s,bindRadios:g}=ne(),{bindForm:n}=M(),{errorMessage:d,validateWithTrigger:a,validate:c,resetValidation:u}=P(),y=N(()=>d.value),O=i=>{w(()=>{const{validateTrigger:v,rules:f,modelValue:R}=e;a(v,i,f,R)})},h=()=>s.forEach(({sync:i})=>i(e.modelValue)),$=i=>{var v,f;(v=e["onUpdate:modelValue"])==null||v.call(e,i),(f=e.onChange)==null||f.call(e,i),O("onChange")},_=()=>c(e.rules,e.modelValue),k=()=>{var i;(i=e["onUpdate:modelValue"])==null||i.call(e,void 0),u()};I(()=>e.modelValue,h),I(()=>r.value,h);const V={onToggle:$,validate:_,reset:k,resetValidation:u,errorMessage:y};return n==null||n(V),g(V),{errorMessage:d,reset:k,validate:_,resetValidation:u}}}),le={class:"var-radio-group__wrap"};function te(e,r,s,g,n,d){const a=p("var-form-details");return j(),E("div",le,[A("div",{class:b(["var-radio-group",[`var-radio-group--${e.direction}`]])},[C(e.$slots,"default")],2),D(a,{"error-message":e.errorMessage},null,8,["error-message"])])}var B=U(ie,[["render",te]]);B.install=function(e){e.component(B.name,B)};const se={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},checkedColor:{type:String},uncheckedColor:{type:String},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};function de(){const{bindParent:e,parentProvider:r}=J(K),{index:s}=L(W);return{index:s,radioGroup:r,bindRadioGroup:e}}const ce=G({name:"VarRadio",directives:{Ripple:ae},components:{VarIcon:ee,VarFormDetails:z},inheritAttrs:!1,props:se,setup(e){const r=F(!1),s=N(()=>r.value===e.checkedValue),g=F(!1),{radioGroup:n,bindRadioGroup:d}=de(),{form:a,bindForm:c}=M(),{errorMessage:u,validateWithTrigger:y,validate:O,resetValidation:h}=P(),$=o=>{w(()=>{const{validateTrigger:l,rules:t,modelValue:m}=e;y(l,o,t,m)})},_=o=>{var m;const{checkedValue:l,onChange:t}=e;n&&r.value===l||(r.value=o,(m=e["onUpdate:modelValue"])==null||m.call(e,r.value),t==null||t(r.value),n==null||n.onToggle(l),$("onChange"))},k=o=>{const{disabled:l,readonly:t,uncheckedValue:m,checkedValue:Y,onClick:S}=e;(a==null?void 0:a.disabled.value)||l||(S==null||S(o),!((a==null?void 0:a.readonly.value)||t)&&(g.value=!0,_(s.value?m:Y)))},V=o=>{const{checkedValue:l,uncheckedValue:t}=e;r.value=o===l?l:t},i=()=>{var o;(o=e["onUpdate:modelValue"])==null||o.call(e,e.uncheckedValue),h()},v=()=>O(e.rules,e.modelValue),f=o=>{const{uncheckedValue:l,checkedValue:t}=e;![l,t].includes(o)&&(o=s.value?l:t),_(o)};I(()=>e.modelValue,o=>{r.value=o},{immediate:!0});const R={sync:V,validate:v,resetValidation:h,reset:i};return d==null||d(R),c==null||c(R),{withAnimation:g,checked:s,errorMessage:u,radioGroupErrorMessage:n==null?void 0:n.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,handleClick:k,toggle:f,reset:i,validate:v,resetValidation:h}}}),ue={class:"var-radio__wrap"};function ve(e,r,s,g,n,d){const a=p("var-icon"),c=p("var-form-details"),u=Q("ripple");return j(),E("div",ue,[A("div",x({class:"var-radio",onClick:r[0]||(r[0]=(...y)=>e.handleClick&&e.handleClick(...y))},e.$attrs),[X(A("div",{class:b(["var-radio__action",[e.checked?"var-radio--checked":"var-radio--unchecked",e.errorMessage||e.radioGroupErrorMessage?"var-radio--error":null,e.formDisabled||e.disabled?"var-radio--disabled":null]]),style:Z({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?C(e.$slots,"checked-icon",{key:0},()=>[D(a,{class:b(["var-radio__icon",[e.withAnimation?"var-radio--with-animation":null]]),"var-radio-cover":"",name:"radio-marked",size:e.iconSize},null,8,["class","size"])]):C(e.$slots,"unchecked-icon",{key:1},()=>[D(a,{class:b(["var-radio__icon",[e.withAnimation?"var-radio--with-animation":null]]),"var-radio-cover":"",name:"radio-blank",size:e.iconSize},null,8,["class","size"])])],6),[[u,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),A("div",{class:b(["var-radio__text",[e.errorMessage||e.radioGroupErrorMessage?"var-radio--error":null,e.formDisabled||e.disabled?"var-radio--disabled":null]])},[C(e.$slots,"default")],2)],16),D(c,{"error-message":e.errorMessage},null,8,["error-message"])])}var T=U(ce,[["render",ve]]);T.install=function(e){e.component(T.name,T)};export{B as R,T as a};
