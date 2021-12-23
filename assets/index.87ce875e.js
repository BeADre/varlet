import{q as F,n as D,_ as g}from"./elevation.83e98fef.js";import{d as b,o as s,c as i,G as B,h as c,n as p,a as u,F as m,k as N,r as k,e as v,i as t,j as o,m as n,t as l}from"./vendor.8243c41e.js";import{B as U}from"./index.10c9052f.js";import{A as z}from"./AppType.4ff4df53.js";import{d as j}from"./index.77fe3760.js";import{w as E,a as M}from"./utils.16c24a31.js";import{u as L,a as y,_ as T,b as V,c as H}from"./en-US.fd4fd1d9.js";import"./index.b947dc5d.js";import"./index.15644cea.js";import"./index.59104e3c.js";import"./components.33314818.js";const R={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};const W=b({name:"VarSkeleton",props:R,setup(){return{toSizeUnit:F,toNumber:D}}}),q={class:"var--box var-skeleton"},G={key:0,class:"var-skeleton__data"},I={key:1,class:"var-skeleton__content"},x=u("div",{class:"var-skeleton--animation"},null,-1),J=[x],K={class:"var-skeleton__article"},O=u("div",{class:"var-skeleton--animation"},null,-1),P=[O],Q={class:"var-skeleton__section"},X=u("div",{class:"var-skeleton--animation"},null,-1),Y=[X],Z=u("div",{class:"var-skeleton--animation"},null,-1),$=[Z],ee={key:2,class:"var-skeleton__fullscreen"},ae=u("div",{class:"var-skeleton--animation"},null,-1),te=[ae];function oe(e,_,S,a,w,A){return s(),i("div",q,[e.loading?c("v-if",!0):(s(),i("div",G,[B(e.$slots,"default")])),e.loading&&!e.fullscreen?(s(),i("div",I,[e.card?(s(),i("div",{key:0,class:"var-skeleton__card",style:p({height:e.toSizeUnit(e.cardHeight)})},J,4)):c("v-if",!0),u("div",K,[e.avatar?(s(),i("div",{key:0,class:"var-skeleton__avatar",style:p({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},P,4)):c("v-if",!0),u("div",Q,[e.title?(s(),i("div",{key:0,class:"var-skeleton__title",style:p({width:e.toSizeUnit(e.titleWidth)})},Y,4)):c("v-if",!0),(s(!0),i(m,null,N(e.toNumber(e.rows),(d,r)=>(s(),i("div",{class:"var-skeleton__row",key:d,style:p({width:e.toSizeUnit(e.rowsWidth[r])})},$,4))),128))])])])):c("v-if",!0),e.loading&&e.fullscreen?(s(),i("div",ee,te)):c("v-if",!0)])}var f=g(W,[["render",oe]]);f.install=function(e){e.component(f.name,f)};var ne={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},le={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"};const{add:h,use:se,pack:ie,packs:Ae,merge:Ce}=L(),de=e=>{H(e),se(e)};y("zh-CN",T);y("en-US",V);h("zh-CN",ne);h("en-US",le);const re={name:"SkeletonExample",components:{VarSkeleton:f,VarButton:U,AppType:z},setup(){const e=k(!0),_=k(!1);return E(de),M(j),{pack:ie,loading:e,fullscreenLoading:_}}};function ue(e,_,S,a,w,A){const d=v("app-type"),r=v("var-skeleton"),C=v("var-button");return s(),i(m,null,[t(d,null,{default:o(()=>[n(l(a.pack.basicUsage),1)]),_:1}),t(r,{loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.displayTitle),1)]),_:1}),t(r,{title:"",loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.customRowsHeight),1)]),_:1}),t(r,{title:"",rows:3,loading:a.loading,"rows-width":["200px","100px","50px"]},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.displayAvatar),1)]),_:1}),t(r,{title:"",avatar:"",rows:3,loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.displayCard),1)]),_:1}),t(r,{title:"",avatar:"",card:"",rows:3,loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.fullscreenMode),1)]),_:1}),t(C,{type:"danger",class:"button",onClick:_[0]||(_[0]=ce=>a.fullscreenLoading=!a.fullscreenLoading)},{default:o(()=>[n(l(a.pack.toggleFullscreenMode),1)]),_:1}),t(r,{fullscreen:"",loading:a.fullscreenLoading},null,8,["loading"])],64)}var Fe=g(re,[["render",ue],["__scopeId","data-v-155188de"]]);export{Fe as default};
