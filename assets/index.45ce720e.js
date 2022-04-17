var k=Object.defineProperty;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(e,a,u)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,h=(e,a)=>{for(var u in a||(a={}))g.call(a,u)&&v(e,u,a[u]);if(i)for(var u of i(a))F.call(a,u)&&v(e,u,a[u]);return e};import{I as U}from"./index.f3db583b.js";import{I as y}from"./index.07bfe65b.js";import{A as C}from"./AppType.d4c1c6c3.js";import{d as I}from"./index.079ade67.js";import{u as E,a as b,_ as x,b as B,c as _}from"./en-US.628e0d34.js";import{w as A,a as M}from"./utils.3a4595f4.js";import{_ as N}from"./elevation.c9ea9f5a.js";import{q as T,$ as S,e as m,o as D,c as w,i as l,j as p,F as z,Z as L,_ as P,m as s,t,a as R}from"./vendor.49f89f0d.js";import"./provide.4b9efbeb.js";import"./components.5cba9644.js";import"./elements.b75de382.js";var j={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",textarea:"\u6587\u672C\u57DF",maxlength:"\u6700\u5927\u957F\u5EA6",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5B57\u6BB5\u6821\u9A8C",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",maxMessage:"\u6587\u672C\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E6",clearableText:"\u53EF\u6E05\u9664\u6587\u672C"},q={basicUsage:"Basic Usage",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"};const{add:f,use:Z,pack:V,packs:se,merge:te}=E(),G=e=>{_(e),Z(e)};b("zh-CN",x);b("en-US",B);f("zh-CN",j);f("en-US",q);const H={name:"InputExample",components:{VarInput:U,VarIcon:y,AppType:C},setup(){const e=T({value:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:""});return A(a=>{G(a),e.value5=V.value.clearableText}),M(I),h({pack:V},S(e))}},J=e=>(L("data-v-01e614d4"),e=e(),P(),e),K=J(()=>R("div",{style:{height:"40px"}},null,-1));function O(e,a,u,o,Q,W){const r=m("app-type"),n=m("var-input"),c=m("var-icon");return D(),w(z,null,[l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.basicUsage),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.plainMode),1)]),_:1}),l(n,{hint:!1,line:!1,placeholder:o.pack.placeholder,modelValue:e.value7,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value7=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.textarea),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,textarea:"",modelValue:e.value2,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value2=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.maxlength),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,maxlength:10,modelValue:e.value8,"onUpdate:modelValue":a[3]||(a[3]=d=>e.value8=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.disabled),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,disabled:"",modelValue:e.value3,"onUpdate:modelValue":a[4]||(a[4]=d=>e.value3=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.readonly),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,readonly:"",modelValue:e.value4,"onUpdate:modelValue":a[5]||(a[5]=d=>e.value4=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.clearable),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,clearable:"",modelValue:e.value5,"onUpdate:modelValue":a[6]||(a[6]=d=>e.value5=d)},null,8,["placeholder","modelValue"]),l(r,{class:"pb"},{default:p(()=>[s(t(o.pack.displayIcon),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=d=>e.value6=d)},{"prepend-icon":p(()=>[l(c,{class:"prepend-icon",name:"plus"})]),"append-icon":p(()=>[l(c,{class:"append-icon",name:"minus"})]),_:1},8,["placeholder","modelValue"]),l(r,null,{default:p(()=>[s(t(o.pack.validate),1)]),_:1}),l(n,{placeholder:o.pack.placeholder,rules:[d=>d.length>6||o.pack.maxMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=d=>e.value9=d)},null,8,["placeholder","rules","modelValue"]),K],64)}var me=N(H,[["render",O],["__scopeId","data-v-01e614d4"]]);export{me as default};
