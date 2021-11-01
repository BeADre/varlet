import{F as re,u as oe}from"./provide.d55b06dc.js";import{I as ne}from"./index.8afb1785.js";import{P as se}from"./index.3ac668ed.js";import{I as ie}from"./index.202208aa.js";import{R as de}from"./index.931337ba.js";import{q as ue,r as E,b as ce,y as ve,p as k,z as me,d as F,e as pe,o as v,c as m,a as b,F as fe,j as ge,i as H,m as S,t as ye,J as he,h as V,f as w,n as be,B as Ve,w as we}from"./vendor.ea41cd30.js";import{m as W,n as q,i as _e,c as J,t as G}from"./shared.2d2ec151.js";import{u as Pe}from"./components.c996eb06.js";import{_ as Re}from"./elevation.c2941a7c.js";const Ce={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},onBeforeRead:{type:Function},onAfterRead:{type:Function},onOversize:{type:Function},onRemove:{type:Function},"onUpdate:modelValue":{type:Function}};let Be=0;const ke=ue({name:"VarUploader",directives:{Ripple:de},components:{VarIcon:ne,VarPopup:se,VarFormDetails:re},props:Ce,setup(e){const d=E(!1),_=E(null),j=ce(()=>{const{maxlength:a,modelValue:{length:r}}=e;return _e(a)?`${r} / ${a}`:""}),{form:l,bindForm:g}=oe(),{errorMessage:y,validateWithTrigger:P,validate:R,resetValidation:p}=Pe(),t=a=>{const{disabled:r,readonly:o,previewed:s}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||r||o||!s)return;const{url:n}=a;if(J(n)&&q(n)){ie(n);return}J(n)&&W(n)&&(_.value=a,d.value=!0)},f=a=>({id:Be++,url:"",cover:"",name:a.name,file:a}),K=a=>{const r=a.target,{files:o}=r;return Array.from(o)},O=a=>new Promise(r=>{const o=new FileReader;o.onload=()=>{const s=o.result;a.file.type.startsWith("image")&&(a.cover=s),a.url=s,r(a)},o.readAsDataURL(a.file)}),Q=a=>a.map(O),X=a=>{const{onBeforeRead:r}=e;return a.map(o=>new Promise(s=>{const n=r?r(k(o)):!0;Promise.resolve(n).then(u=>s({valid:u,varFile:o}))}))},Y=async a=>{var A;const{maxsize:r,maxlength:o,modelValue:s,onOversize:n,onAfterRead:u,readonly:B,disabled:ee}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||ee||B)return;const ae=i=>i.filter(h=>h.file.size>G(r)?(n==null||n(k(h)),!1):!0),le=i=>{const h=Math.min(i.length,G(o)-s.length);return i.slice(0,h)};let c=K(a).map(f);c=r!=null?ae(c):c,c=o!=null?le(c):c;const te=await Promise.all(Q(c)),I=(await Promise.all(X(te))).filter(({valid:i})=>i).map(({varFile:i})=>i);(A=e["onUpdate:modelValue"])==null||A.call(e,[...s,...I]),a.target.value="",I.forEach(i=>u==null?void 0:u(k(i)))},Z=a=>{var u;const{disabled:r,readonly:o,modelValue:s,onRemove:n}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||r||o||((u=e["onUpdate:modelValue"])==null||u.call(e,s.filter(B=>B!==a)),n==null||n(a),z("onRemove"))},D=()=>e.modelValue.filter(a=>a.state==="success"),U=()=>e.modelValue.filter(a=>a.state==="error"),T=()=>e.modelValue.filter(a=>a.state==="loading"),L={getSuccess:D,getError:U,getLoading:T},z=a=>{me(()=>{const{validateTrigger:r,rules:o,modelValue:s}=e;P(r,a,o,s,L)})};let C=!1;const M=()=>R(e.rules,e.modelValue,L),N=()=>{var a;C=!0,(a=e["onUpdate:modelValue"])==null||a.call(e,[]),p()},x={validate:M,resetValidation:p,reset:N};return g==null||g(x),ve(()=>e.modelValue,()=>{!C&&z("onChange"),C=!1},{deep:!0}),{showPreview:d,currentPreview:_,errorMessage:y,maxlengthText:j,isHTMLSupportVideo:W,isHTMLSupportImage:q,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,preview:t,handleChange:Y,handleRemove:Z,getSuccess:D,getError:U,getLoading:T,validate:M,resetValidation:p,reset:N}}}),Fe={class:"var-uploader var--box"},Se={class:"var-uploader__file-list"},$e=["onClick"],je={class:"var-uploader__file-name"},De=["onClick"],Ue=["src","alt"],Te=["multiple","accept","capture","disabled"],Le=["src"];function ze(e,d,_,j,l,g){const y=F("var-icon"),P=F("var-form-details"),R=F("var-popup"),p=pe("ripple");return v(),m("div",Fe,[b("div",Se,[(v(!0),m(fe,null,ge(e.modelValue,t=>H((v(),m("div",{class:S(["var-uploader__file var-elevation--2",[t.state==="loading"?"var-uploader--loading":null]]),key:t.id,onClick:f=>e.preview(t)},[b("div",je,ye(t.name||t.url),1),e.removable?(v(),m("div",{key:0,class:"var-uploader__file-close",onClick:he(f=>e.handleRemove(t),["stop"])},[V(y,{class:"var-uploader__file-close-icon","var-uploader-cover":"",name:"delete"})],8,De)):w("v-if",!0),t.cover?(v(),m("img",{key:1,class:"var-uploader__file-cover",style:be({objectFit:t.fit}),src:t.cover,alt:t.name},null,12,Ue)):w("v-if",!0),b("div",{class:S(["var-uploader__file-indicator",[t.state==="success"?"var-uploader--success":null,t.state==="error"?"var-uploader--error":null]])},null,2)],10,$e)),[[p,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?H((v(),m("div",{key:0,class:S(["var--relative",[e.$slots.default?null:"var-uploader__action var-elevation--2",e.disabled||e.formDisabled?"var-uploader--disabled":null]])},[b("input",{class:"var-uploader__action-input",type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...t)=>e.handleChange&&e.handleChange(...t))},null,40,Te),Ve(e.$slots,"default",{},()=>[V(y,{class:"var-uploader__action-icon","var-uploader-cover":"",name:"plus"})])],2)),[[p,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):w("v-if",!0)]),V(P,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),V(R,{class:"var-uploader__preview","var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[1]||(d[1]=t=>e.showPreview=t),onClosed:d[2]||(d[2]=t=>e.currentPreview=null)},{default:we(()=>{var t,f;return[e.currentPreview&&e.isHTMLSupportVideo((t=e.currentPreview)==null?void 0:t.url)?(v(),m("video",{key:0,class:"var-uploader__preview-video",playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(f=e.currentPreview)==null?void 0:f.url},null,8,Le)):w("v-if",!0)]}),_:1},8,["show"])])}var $=Re(ke,[["render",ze]]);$.install=function(e){e.component($.name,$)};export{$ as U};
