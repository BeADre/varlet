import{A as g}from"./AppType.44c77136.js";import{B as y}from"./index.0d6951cf.js";import{R as B}from"./index.931337ba.js";import{t as D}from"./elements.1c3a8437.js";import{_ as C}from"./elevation.c2941a7c.js";import{q as S,e as w,i as A,o as r,c as n,B as p,f as d,m as j,n as U,t as i,H as N,d as F,h as u,w as a,F as z,l}from"./vendor.ea41cd30.js";import{c as v}from"./index.510439cf.js";import{u as I,a as E,_ as V,b as R,c as T,w as L,d as q}from"./en-US.64d12132.js";import"./index.2bd4354e.js";import"./shared.2d2ec151.js";import"./components.c996eb06.js";function P(e){return["fill","contain","cover","none","scale-down"].includes(e)}const H={src:{type:String},fit:{type:String,validator:P,default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}};const G=S({name:"VarCard",directives:{Ripple:B},props:H,setup(){return{toSizeUnit:D}}}),J=["src","alt"],K={key:0,class:"var-card__title"},M={key:0,class:"var-card__subtitle"},O={key:0,class:"var-card__description"},Q={key:0,class:"var-card__footer"};function W(e,c,_,t,b,k){const o=w("ripple");return A((r(),n("div",{class:j(["var-card",[e.elevation?`var-elevation--${e.elevation}`:"var-elevation--2"]]),onClick:c[0]||(c[0]=(...s)=>e.onClick&&e.onClick(...s))},[p(e.$slots,"image",{},()=>[e.src?(r(),n("img",{key:0,class:"var-card__image",style:U({objectFit:e.fit,height:e.toSizeUnit(e.height)}),src:e.src,alt:e.alt},null,12,J)):d("v-if",!0)]),p(e.$slots,"title",{},()=>[e.title?(r(),n("div",K,i(e.title),1)):d("v-if",!0)]),p(e.$slots,"subtitle",{},()=>[e.subtitle?(r(),n("div",M,i(e.subtitle),1)):d("v-if",!0)]),p(e.$slots,"description",{},()=>[e.description?(r(),n("div",O,i(e.description),1)):d("v-if",!0)]),e.$slots.extra?(r(),n("div",Q,[p(e.$slots,"extra")])):d("v-if",!0)],2)),[[o,{disabled:!e.ripple}]])}var m=C(G,[["render",W]]);m.install=function(e){e.component(m.name,m)};var X={basicUsage:"\u57FA\u672C\u4F7F\u7528",title:"\u98CE\u666F",showSubtitle:"\u663E\u793A\u526F\u6807\u9898",subtitle:"\u516C\u56ED\u91CC\u7684\u98CE\u666F",description:"\u516C\u56ED\u7684\u6811\u6797\u4E5F\u5F88\u7F8E\u3002\u5728\u516C\u56ED\u7684\u5C0F\u5C71\u4E0A\u683D\u6EE1\u4E86\u6811\u6728\uFF0C\u68A7\u6850\u6811\u7684\u53F6\u5B50\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\u6162\u6162\u53D8\u9EC4\uFF0C\u7EB7\u7EB7\u98D8\u843D\uFF1B\u67AB\u6811\u7684\u53F6\u5B50\u5374\u53D8\u7EA2\u4E86\uFF0C\u516C\u56ED\u7B3C\u7F69\u5728\u7247\u7247\u7EA2\u4E91\u4E2D\uFF0C\u4E5F\u4F7F\u79CB\u5929\u589E\u6DFB\u4E86\u4E00\u5206\u70ED\u60C5\u3002\u800C\u67CF\u6811\u7684\u53F6\u5B50\u4ECD\u662F\u90A3\u4E48\u9752\u7FE0\u6B32\u6EF4\uFF0C\u4EE4\u4F60\u9676\u9189\u6781\u4E86\u3002\u5C71\u4E0A\u6709\u4E00\u7FA4\u5B69\u5B50\u5728\u5FEB\u4E50\u7684\u5B09\u620F\uFF0C\u4E0D\u65F6\u4F20\u6765\u9635\u9635\u6B22\u7B11\u58F0\uFF0C\u77A7\uFF0C\u4ED6\u4EEC\u73A9\u5F97\u591A\u8D77\u52B2\u5440\uFF0C\u7ED9\u6811\u6797\u589E\u6DFB\u4E86\u6D3B\u529B\u3002",showImage:"\u663E\u793A\u56FE\u7247",useSlot:"\u4F7F\u7528\u63D2\u69FD",button:"\u6DFB\u52A0\u6309\u94AE",showRipple:"\u6C34\u6CE2\u6548\u679C"},Y={basicUsage:"Basic Usage",title:"Little Prince",showSubtitle:"Show Subtitlewhere",subtitle:"little prince from",description:"It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.",showImage:"Show Image",useSlot:"Use Slot",button:"Use Button",showRipple:"Ripple Effect"};const{add:h,use:Z,pack:x,packs:me,merge:Fe}=I(),$=e=>{T(e),Z(e)};E("zh-CN",V);E("en-US",R);h("zh-CN",X);h("en-US",Y);const ee={name:"CardExample",components:{VarButton:y,VarCard:m,AppType:g},setup(){L($);const e=v.touchmoveForbid;return q(c=>{c==="pc"&&(v.touchmoveForbid=!1)}),N(()=>{v.touchmoveForbid=e}),{pack:x}}};function te(e,c,_,t,b,k){const o=F("app-type"),s=F("var-card"),f=F("var-button");return r(),n(z,null,[u(o,null,{default:a(()=>[l(i(t.pack.basicUsage),1)]),_:1}),u(s,{title:t.pack.title,description:t.pack.description},null,8,["title","description"]),u(o,null,{default:a(()=>[l(i(t.pack.showSubtitle),1)]),_:1}),u(s,{title:t.pack.title,subtitle:t.pack.subtitle,description:t.pack.description},null,8,["title","subtitle","description"]),u(o,null,{default:a(()=>[l(i(t.pack.showImage),1)]),_:1}),u(s,{title:t.pack.title,subtitle:t.pack.subtitle,description:t.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},null,8,["title","subtitle","description"]),u(o,null,{default:a(()=>[l(i(t.pack.useSlot),1)]),_:1}),u(s,{title:t.pack.title,subtitle:t.pack.subtitle,description:t.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{extra:a(()=>[u(f,{type:"primary",style:{"margin-right":"10px"}},{default:a(()=>[l(i(t.pack.button),1)]),_:1}),u(f,{type:"warning"},{default:a(()=>[l(i(t.pack.button),1)]),_:1})]),_:1},8,["title","subtitle","description"]),u(o,null,{default:a(()=>[l(i(t.pack.showRipple),1)]),_:1}),u(s,{title:t.pack.title,subtitle:t.pack.subtitle,description:t.pack.description,ripple:""},null,8,["title","subtitle","description"])],64)}var ve=C(ee,[["render",te],["__scopeId","data-v-3c79ddf7"]]);export{ve as default};
