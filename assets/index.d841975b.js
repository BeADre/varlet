import{t as F}from"./elements.1c3a8437.js";import{t as b}from"./shared.2d2ec151.js";import{_ as g}from"./elevation.c2941a7c.js";import{q as B,o as s,c as i,B as D,f as c,n as p,a as u,F as m,j as N,r as k,d as f,h as t,w as o,l as n,t as l}from"./vendor.ea41cd30.js";import{B as U}from"./index.0d6951cf.js";import{A as z}from"./AppType.44c77136.js";import{u as j,a as y,_ as E,b as L,c as M,w as T}from"./en-US.64d12132.js";import"./index.931337ba.js";import"./index.510439cf.js";import"./index.2bd4354e.js";import"./components.c996eb06.js";const V={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};const H=B({name:"VarSkeleton",props:V,setup(){return{toSizeUnit:F,toNumber:b}}}),R={class:"var--box var-skeleton"},W={key:0,class:"var-skeleton__data"},q={key:1,class:"var-skeleton__content"},I=u("div",{class:"var-skeleton--animation"},null,-1),G=[I],J={class:"var-skeleton__article"},K=u("div",{class:"var-skeleton--animation"},null,-1),O=[K],P={class:"var-skeleton__section"},Q=u("div",{class:"var-skeleton--animation"},null,-1),X=[Q],Y=u("div",{class:"var-skeleton--animation"},null,-1),Z=[Y],x={key:2,class:"var-skeleton__fullscreen"},$=u("div",{class:"var-skeleton--animation"},null,-1),ee=[$];function ae(e,_,S,a,w,A){return s(),i("div",R,[e.loading?c("v-if",!0):(s(),i("div",W,[D(e.$slots,"default")])),e.loading&&!e.fullscreen?(s(),i("div",q,[e.card?(s(),i("div",{key:0,class:"var-skeleton__card",style:p({height:e.toSizeUnit(e.cardHeight)})},G,4)):c("v-if",!0),u("div",J,[e.avatar?(s(),i("div",{key:0,class:"var-skeleton__avatar",style:p({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},O,4)):c("v-if",!0),u("div",P,[e.title?(s(),i("div",{key:0,class:"var-skeleton__title",style:p({width:e.toSizeUnit(e.titleWidth)})},X,4)):c("v-if",!0),(s(!0),i(m,null,N(e.toNumber(e.rows),(d,r)=>(s(),i("div",{class:"var-skeleton__row",key:d,style:p({width:e.toSizeUnit(e.rowsWidth[r])})},Z,4))),128))])])])):c("v-if",!0),e.loading&&e.fullscreen?(s(),i("div",x,ee)):c("v-if",!0)])}var v=g(H,[["render",ae]]);v.install=function(e){e.component(v.name,v)};var te={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},oe={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"};const{add:h,use:ne,pack:le,packs:Se,merge:we}=j(),se=e=>{M(e),ne(e)};y("zh-CN",E);y("en-US",L);h("zh-CN",te);h("en-US",oe);const ie={name:"SkeletonExample",components:{VarSkeleton:v,VarButton:U,AppType:z},setup(){const e=k(!0),_=k(!1);return T(se),{pack:le,loading:e,fullscreenLoading:_}}};function de(e,_,S,a,w,A){const d=f("app-type"),r=f("var-skeleton"),C=f("var-button");return s(),i(m,null,[t(d,null,{default:o(()=>[n(l(a.pack.basicUsage),1)]),_:1}),t(r,{loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.displayTitle),1)]),_:1}),t(r,{title:"",loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.customRowsHeight),1)]),_:1}),t(r,{title:"",rows:3,loading:a.loading,"rows-width":["200px","100px","50px"]},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.displayAvatar),1)]),_:1}),t(r,{title:"",avatar:"",rows:3,loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.displayCard),1)]),_:1}),t(r,{title:"",avatar:"",card:"",rows:3,loading:a.loading},{default:o(()=>[n(l(a.pack.loadingData),1)]),_:1},8,["loading"]),t(d,null,{default:o(()=>[n(l(a.pack.fullscreenMode),1)]),_:1}),t(C,{type:"danger",class:"button",onClick:_[0]||(_[0]=re=>a.fullscreenLoading=!a.fullscreenLoading)},{default:o(()=>[n(l(a.pack.toggleFullscreenMode),1)]),_:1}),t(r,{fullscreen:"",loading:a.fullscreenLoading},null,8,["loading"])],64)}var Ae=g(ie,[["render",de],["__scopeId","data-v-1dc748ae"]]);export{Ae as default};
