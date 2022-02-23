var C=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var v=(a,u,r)=>u in a?C(a,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[u]=r,k=(a,u)=>{for(var r in u||(u={}))E.call(u,r)&&v(a,r,u[r]);if(b)for(var r of b(u))y.call(u,r)&&v(a,r,u[r]);return a};import{S}from"./index.820a6053.js";import{O as U}from"./index.bc2cc43b.js";import{I as A}from"./index.b873ddd6.js";import{A as F}from"./AppType.ed11fb41.js";import{d as _}from"./index.9b1139e6.js";import{w as g,a as M}from"./utils.1735a57b.js";import{u as I,a as f,_ as B,b as P,c as T}from"./en-US.628e0d34.js";import{_ as N}from"./elevation.eb606728.js";import{q as D,$ as w,e as m,o as R,c as z,i as e,j as n,a as V,t as p,F as L,Z as O,_ as Y,m as c}from"./vendor.49f89f0d.js";import"./index.70fd7a58.js";import"./elements.6395be39.js";import"./shared.506a394a.js";import"./zIndex.8c13fd4c.js";import"./index.48ee5316.js";import"./components.721843ff.js";import"./index.e35ca8e8.js";import"./index.dca60924.js";import"./provide.c155b402.js";import"./index.a72abc02.js";var j={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5355\u9009\u503C\u6821\u9A8C",multipleValidate:"\u591A\u9009\u503C\u6821\u9A8C",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",multiplePlaceholder:"\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",clearableText:"\u53EF\u6E05\u9664\u6587\u672C",relation:"\u6587\u672C\u5173\u8054\u503C",multiple:"\u591A\u9009",chipMultiple:"\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",coding:"\u5199\u4EE3\u7801",rest:"\u6478\u9C7C",currentSelect:"\u5F53\u524D\u9009\u62E9\u7684\u662F:",mustSelectRest:"\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C",mustSelectMoreThan:"\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879"},q={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options"};const{add:h,use:Z,pack:G,packs:Cl,merge:El}=I(),H=a=>{T(a),Z(a)};f("zh-CN",B);f("en-US",P);h("zh-CN",j);h("en-US",q);const J={name:"SelectExample",components:{VarSelect:S,VarOption:U,VarIcon:A,AppType:F},setup(){const a=D({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0});return g(u=>{H(u),a.value=void 0,a.value2=void 0,a.value3=void 0,a.value4=void 0,a.value6=void 0,a.value5=[],a.value7=[],a.value8=void 0,a.value9=void 0,a.value10=[],a.value11=void 0}),M(_),k({pack:G},w(a))}},K=a=>(O("data-v-56062e2a"),a=a(),Y(),a),Q={class:"relation"},W=K(()=>V("div",{class:"space"},null,-1));function X(a,u,r,l,x,$){const t=m("app-type"),o=m("var-option"),i=m("var-select"),s=m("var-icon");return R(),z(L,null,[e(t,null,{default:n(()=>[c(p(l.pack.basicUsage),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=d=>a.value=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.plainMode),1)]),_:1}),e(i,{hint:!1,line:!1,placeholder:l.pack.placeholder,modelValue:a.value2,"onUpdate:modelValue":u[1]||(u[1]=d=>a.value2=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.relation),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,modelValue:a.value6,"onUpdate:modelValue":u[2]||(u[2]=d=>a.value6=d)},{default:n(()=>[e(o,{label:l.pack.eat,value:1},null,8,["label"]),e(o,{label:l.pack.sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),V("div",Q,p(l.pack.currentSelect)+" "+p(a.value6),1),e(t,null,{default:n(()=>[c(p(l.pack.disabled),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,disabled:"",modelValue:a.value4,"onUpdate:modelValue":u[3]||(u[3]=d=>a.value4=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.readonly),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,readonly:"",modelValue:a.value3,"onUpdate:modelValue":u[4]||(u[4]=d=>a.value3=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.clearable),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,clearable:"",modelValue:a.value8,"onUpdate:modelValue":u[5]||(u[5]=d=>a.value8=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.displayIcon),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,modelValue:a.value11,"onUpdate:modelValue":u[6]||(u[6]=d=>a.value11=d)},{"prepend-icon":n(()=>[e(s,{class:"prepend-icon",name:"plus"})]),"append-icon":n(()=>[e(s,{class:"append-icon",name:"minus"})]),default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.multiple),1)]),_:1}),e(i,{placeholder:l.pack.multiplePlaceholder,multiple:"",modelValue:a.value5,"onUpdate:modelValue":u[7]||(u[7]=d=>a.value5=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"]),e(o,{label:l.pack.play},null,8,["label"]),e(o,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.chipMultiple),1)]),_:1}),e(i,{placeholder:l.pack.multiplePlaceholder,chip:"",multiple:"",modelValue:a.value7,"onUpdate:modelValue":u[8]||(u[8]=d=>a.value7=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"]),e(o,{label:l.pack.play},null,8,["label"]),e(o,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.validate),1)]),_:1}),e(i,{placeholder:l.pack.placeholder,rules:[d=>d===l.pack.rest||l.pack.mustSelectRest],modelValue:a.value9,"onUpdate:modelValue":u[9]||(u[9]=d=>a.value9=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"]),e(o,{label:l.pack.rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(t,null,{default:n(()=>[c(p(l.pack.multipleValidate),1)]),_:1}),e(i,{placeholder:l.pack.multiplePlaceholder,multiple:"",rules:[d=>d.length>=2||l.pack.mustSelectMoreThan],modelValue:a.value10,"onUpdate:modelValue":u[10]||(u[10]=d=>a.value10=d)},{default:n(()=>[e(o,{label:l.pack.eat},null,8,["label"]),e(o,{label:l.pack.sleep},null,8,["label"]),e(o,{label:l.pack.play},null,8,["label"]),e(o,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),W],64)}var yl=N(J,[["render",X],["__scopeId","data-v-56062e2a"]]);export{yl as default};
