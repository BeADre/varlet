import{a as P}from"./provide.5be61ef1.js";import{_ as E}from"./elevation.83e98fef.js";import{d as N,b as C,o as F,c as M,G as R,q as z,r as V,C as G,e as t,i as r,j as l,F as O,Y as L,Z as Y,m as n,t as d,a as x}from"./vendor.8243c41e.js";import{I as q}from"./index.e7741a57.js";import{S as Z}from"./index.7503ec7b.js";import{O as H}from"./index.3a43cd9d.js";import{C as J}from"./index.39a63387.js";import{C as K}from"./index.55d76807.js";import{R as Q,a as W}from"./index.e4a87dfa.js";import{B as X}from"./index.10c9052f.js";import{S as $}from"./index.0955dc6c.js";import{S as ee}from"./index.713876a2.js";import{U as ae}from"./index.dae01f9f.js";import{C as oe}from"./index.d5baf91f.js";import{R as re}from"./index.a667c89c.js";import{A as le}from"./AppType.4ff4df53.js";import{c as y}from"./index.15644cea.js";import{d as se}from"./index.77fe3760.js";import{b as te,w as ne,a as de}from"./utils.16c24a31.js";import{u as ue,a as j,_ as me,b as ce,c as ie}from"./en-US.fd4fd1d9.js";import"./components.33314818.js";import"./index.5c7f3a83.js";import"./index.e8ef3977.js";import"./zIndex.a9a0aa57.js";import"./index.3a42a270.js";import"./index.b947dc5d.js";import"./index.59104e3c.js";import"./index.425e9c34.js";import"./lock.cbce9ccd.js";import"./index.0aa8242a.js";import"./index.fc141f1e.js";import"./provide.3f05ceb9.js";import"./index.9485746c.js";const pe={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};const fe=N({name:"VarForm",props:pe,setup(s){const o=C(()=>s.disabled),f=C(()=>s.readonly),{formItems:e,bindFormItems:g}=P(),u=async()=>(await Promise.all(e.map(({validate:p})=>p()))).every(p=>p===!0),m=()=>e.forEach(({reset:i})=>i()),_=()=>e.forEach(({resetValidation:i})=>i());return g({disabled:o,readonly:f}),{validate:u,reset:m,resetValidation:_}}}),ge={class:"var-form"};function ve(s,o,f,e,g,u){return F(),M("div",ge,[R(s.$slots,"default")])}var k=E(fe,[["render",ve]]);k.install=function(s){s.component(k.name,k)};var _e={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},ke={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:D,use:be,pack:Ve,packs:na,merge:da}=ue(),xe=s=>{ie(s),be(s)};j("zh-CN",me);j("en-US",ce);D("zh-CN",_e);D("en-US",ke);const ye={name:"FormExample",components:{VarForm:k,VarInput:q,VarSelect:Z,VarCheckboxGroup:J,VarCheckbox:K,VarRadioGroup:Q,VarRadio:W,VarOption:H,VarButton:X,VarSlider:ee,VarSwitch:$,VarUploader:ae,VarCounter:oe,VarRate:re,AppType:le},setup(){const s=z({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),o=V(null),f=V(!1),e=V(!1),g=y.touchmoveForbid;return te(u=>{u==="pc"&&(y.touchmoveForbid=!1)}),G(()=>{y.touchmoveForbid=g}),ne(u=>{var m;xe(u),(m=o.value)==null||m.reset()}),de(se),{pack:Ve,form:o,formData:s,disabled:f,readonly:e}}},Ee=s=>(L("data-v-4d60761c"),s=s(),Y(),s),Ce={class:"row mb"},Fe={class:"row mb"},Me=Ee(()=>x("div",{class:"space"},null,-1));function je(s,o,f,e,g,u){const m=t("app-type"),_=t("var-input"),c=t("var-option"),i=t("var-select"),p=t("var-radio"),h=t("var-radio-group"),b=t("var-checkbox"),U=t("var-checkbox-group"),B=t("var-rate"),w=t("var-switch"),A=t("var-counter"),S=t("var-slider"),I=t("var-uploader"),T=t("var-form"),v=t("var-button");return F(),M(O,null,[r(m,null,{default:l(()=>[n(d(e.pack.example),1)]),_:1}),r(T,{ref:"form",disabled:e.disabled,readonly:e.readonly},{default:l(()=>[r(_,{class:"mb",placeholder:e.pack.username,rules:[a=>!!a||e.pack.usernameMessage],modelValue:e.formData.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.username=a)},null,8,["placeholder","rules","modelValue"]),r(_,{class:"mb",type:"password",placeholder:e.pack.password,rules:[a=>!!a||e.pack.passwordMessage],modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.password=a)},null,8,["placeholder","rules","modelValue"]),r(i,{class:"mb",placeholder:e.pack.department,rules:[a=>!!a||e.pack.departmentMessage],modelValue:e.formData.department,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.department=a)},{default:l(()=>[r(c,{label:`${e.pack.eat}${e.pack.departmentUnit}`},null,8,["label"]),r(c,{label:`${e.pack.sleep}${e.pack.departmentUnit}`},null,8,["label"]),r(c,{label:`${e.pack.play}${e.pack.departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(i,{class:"mb",multiple:"",placeholder:e.pack.group,rules:[a=>a.length>=1||e.pack.groupMessage],modelValue:e.formData.group,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.group=a)},{default:l(()=>[r(c,{label:`${e.pack.eat}${e.pack.groupUnit}`},null,8,["label"]),r(c,{label:`${e.pack.sleep}${e.pack.groupUnit}`},null,8,["label"]),r(c,{label:`${e.pack.play}${e.pack.groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(h,{class:"mb",rules:[a=>!!a||e.pack.genderMessage],modelValue:e.formData.gender,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gender=a)},{default:l(()=>[r(p,{"checked-value":1},{default:l(()=>[n(d(e.pack.male),1)]),_:1}),r(p,{"checked-value":2},{default:l(()=>[n(d(e.pack.female),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(U,{class:"mb",rules:[a=>a.length>0||e.pack.likeMessage],modelValue:e.formData.like,"onUpdate:modelValue":o[5]||(o[5]=a=>e.formData.like=a)},{default:l(()=>[r(b,{"checked-value":1},{default:l(()=>[n(d(e.pack.eat),1)]),_:1}),r(b,{"checked-value":2},{default:l(()=>[n(d(e.pack.sleep),1)]),_:1}),r(b,{"checked-value":3},{default:l(()=>[n(d(e.pack.play),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(B,{class:"mb",rules:[a=>a>=3||e.pack.rateMessage],modelValue:e.formData.score,"onUpdate:modelValue":o[6]||(o[6]=a=>e.formData.score=a)},null,8,["rules","modelValue"]),x("div",Ce,[r(w,{rules:[a=>!!a||e.pack.licenseMessage],modelValue:e.formData.license,"onUpdate:modelValue":o[7]||(o[7]=a=>e.formData.license=a)},null,8,["rules","modelValue"])]),x("div",Fe,[r(A,{rules:[a=>a>10||e.pack.countMessage],modelValue:e.formData.count,"onUpdate:modelValue":o[8]||(o[8]=a=>e.formData.count=a)},null,8,["rules","modelValue"])]),r(S,{class:"mb",rules:[a=>a>10||e.pack.rangeMessage],modelValue:e.formData.range,"onUpdate:modelValue":o[9]||(o[9]=a=>e.formData.range=a)},null,8,["rules","modelValue"]),r(I,{class:"mb",rules:[a=>a.length>=1||e.pack.filesMessage],modelValue:e.formData.files,"onUpdate:modelValue":o[10]||(o[10]=a=>e.formData.files=a)},null,8,["rules","modelValue"])]),_:1},8,["disabled","readonly"]),r(m,null,{default:l(()=>[n(d(e.pack.controller),1)]),_:1}),r(v,{class:"mt",block:"",type:"danger",onClick:o[11]||(o[11]=a=>e.form.reset())},{default:l(()=>[n(d(e.pack.reset),1)]),_:1}),r(v,{class:"mt",block:"",type:"warning",onClick:o[12]||(o[12]=a=>e.form.resetValidation())},{default:l(()=>[n(d(e.pack.resetValidation),1)]),_:1}),r(v,{class:"mt",block:"",type:"success",onClick:o[13]||(o[13]=a=>e.form.validate())},{default:l(()=>[n(d(e.pack.validate),1)]),_:1}),r(v,{class:"mt",block:"",type:"info",onClick:o[14]||(o[14]=a=>e.disabled=!e.disabled)},{default:l(()=>[n(d(e.pack.disabled),1)]),_:1}),r(v,{class:"mt",block:"",type:"primary",onClick:o[15]||(o[15]=a=>e.readonly=!e.readonly)},{default:l(()=>[n(d(e.pack.readonly),1)]),_:1}),Me],64)}var ua=E(ye,[["render",je],["__scopeId","data-v-4d60761c"]]);export{ua as default};
