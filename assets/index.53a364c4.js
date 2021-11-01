var _=Object.defineProperty;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var V=(e,a,n)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,b=(e,a)=>{for(var n in a||(a={}))g.call(a,n)&&V(e,n,a[n]);if(f)for(var n of f(a))y.call(a,n)&&V(e,n,a[n]);return e};import{C as x}from"./index.3dd1f6e5.js";import{C as B}from"./index.74474091.js";import{I as A}from"./index.8afb1785.js";import{B as S}from"./index.0d6951cf.js";import{A as U}from"./AppType.44c77136.js";import{u as j,a as h,_ as G,b as F,c as E,w as D}from"./en-US.64d12132.js";import{_ as I}from"./elevation.c2941a7c.js";import{p as N,Z as M,d as p,o as z,c as w,h as o,w as d,a as i,t as l,F as T,V as L,W as P,l as c}from"./vendor.ea41cd30.js";import"./provide.d55b06dc.js";import"./components.c996eb06.js";import"./shared.2d2ec151.js";import"./index.931337ba.js";import"./index.510439cf.js";import"./elements.1c3a8437.js";import"./index.2bd4354e.js";var R={basicUsage:"\u57FA\u672C\u4F7F\u7528",currentValue:"\u5F53\u524D\u7684\u503C:",setState:"\u8BBE\u7F6E\u72B6\u6001\u503C",setStyle:"\u4FEE\u6539\u56FE\u6807\u548C\u989C\u8272",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",eat:"\u5403\u996D",sleep:"\u7761\u89C9",checkAll:"\u5168\u9009",inverseAll:"\u53CD\u9009",checkboxGroup:"\u590D\u9009\u6846\u7EC4",checkboxValidate:"\u590D\u9009\u6846\u5B57\u6BB5\u6821\u9A8C",checkboxGroupValidate:"\u590D\u9009\u6846\u7EC4\u5B57\u6BB5\u6821\u9A8C",checkboxValidateMessage:"\u8BF7\u52FE\u9009",checkboxGroupValidateMessage:"\u8BF7\u5168\u9009"},W={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State value",setStyle:"Modify the icon and color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",checkboxValidate:"Checkbox validation",checkboxGroupValidate:"CheckboxGroup validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all"};const{add:C,use:Z,pack:q,packs:Ve,merge:be}=j(),H=e=>{E(e),Z(e)};h("zh-CN",G);h("en-US",F);C("zh-CN",R);C("en-US",W);const J={name:"CheckboxGroupExample",components:{VarCheckboxGroup:x,VarCheckbox:B,VarIcon:A,VarButton:S,AppType:U},setup(){const e=N({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],group:null});return D(H),b({pack:q},M(e))}},K=e=>(L("data-v-15cabebf"),e=e(),P(),e),O={class:"relation"},Q={class:"relation"},X=K(()=>i("div",{class:"space"},null,-1));function Y(e,a,n,u,$,ee){const t=p("app-type"),s=p("var-checkbox"),k=p("var-icon"),v=p("var-button"),m=p("var-checkbox-group");return z(),w(T,null,[o(t,null,{default:d(()=>[c(l(u.pack.basicUsage),1)]),_:1}),o(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r)},{default:d(()=>[c(l(u.pack.currentValue)+" "+l(e.value),1)]),_:1},8,["modelValue"]),o(t,null,{default:d(()=>[c(l(u.pack.setState),1)]),_:1}),o(s,{"unchecked-value":0,"checked-value":1,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=r=>e.value2=r)},{default:d(()=>[c(l(u.pack.currentValue)+" "+l(e.value2),1)]),_:1},8,["modelValue"]),o(t,null,{default:d(()=>[c(l(u.pack.setStyle),1)]),_:1}),o(s,{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=r=>e.value3=r)},{"unchecked-icon":d(()=>[o(k,{name:"heart-half-full",size:"24px"})]),"checked-icon":d(()=>[o(k,{name:"heart",size:"24px"})]),default:d(()=>[c(l(u.pack.currentValue)+" "+l(e.value3),1)]),_:1},8,["modelValue"]),o(t,null,{default:d(()=>[c(l(u.pack.disabled),1)]),_:1}),o(s,{disabled:"",modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=r=>e.value4=r)},{default:d(()=>[c(l(u.pack.currentValue)+" "+l(e.value4),1)]),_:1},8,["modelValue"]),o(t,null,{default:d(()=>[c(l(u.pack.readonly),1)]),_:1}),o(s,{readonly:"",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=r=>e.value5=r)},{default:d(()=>[c(l(u.pack.currentValue)+" "+l(e.value5),1)]),_:1},8,["modelValue"]),o(t,null,{default:d(()=>[c(l(u.pack.checkboxGroup),1)]),_:1}),o(m,{ref:"group",modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=r=>e.value6=r)},{default:d(()=>[o(s,{"checked-value":0},{default:d(()=>[c(l(u.pack.eat),1)]),_:1}),o(s,{"checked-value":1},{default:d(()=>[c(l(u.pack.sleep),1)]),_:1}),o(v,{class:"button",type:"primary",onClick:a[5]||(a[5]=r=>e.$refs.group.checkAll())},{default:d(()=>[c(l(u.pack.checkAll),1)]),_:1}),o(v,{class:"button",type:"primary",onClick:a[6]||(a[6]=r=>e.$refs.group.inverseAll())},{default:d(()=>[c(l(u.pack.inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),i("div",O,l(u.pack.currentValue)+" "+l(e.value6),1),o(t,null,{default:d(()=>[c(l(u.pack.checkboxValidate),1)]),_:1}),o(s,{modelValue:e.value7,"onUpdate:modelValue":a[8]||(a[8]=r=>e.value7=r),rules:[r=>r||u.pack.checkboxValidateMessage]},{default:d(()=>[c(l(u.pack.currentValue)+" "+l(e.value7),1)]),_:1},8,["modelValue","rules"]),o(t,null,{default:d(()=>[c(l(u.pack.checkboxGroupValidate),1)]),_:1}),o(m,{modelValue:e.value8,"onUpdate:modelValue":a[9]||(a[9]=r=>e.value8=r),rules:[r=>r.length===2||u.pack.checkboxGroupValidateMessage]},{default:d(()=>[o(s,{"checked-value":0},{default:d(()=>[c(l(u.pack.eat),1)]),_:1}),o(s,{"checked-value":1},{default:d(()=>[c(l(u.pack.sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),i("div",Q,l(u.pack.currentValue)+" "+l(e.value8),1),X],64)}var he=I(J,[["render",Y],["__scopeId","data-v-15cabebf"]]);export{he as default};
