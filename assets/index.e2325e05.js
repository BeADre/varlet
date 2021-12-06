import{A as w}from"./AppType.e7bf62d3.js";import{I as E}from"./index.35a7147c.js";import{q as S,b as y,d as g,o as f,c as B,h as e,i as n,w as j,v as A,a as V,k as F,t as d,A as L,T as N,B as I,r as m,l as i}from"./vendor.8a125dba.js";import{t as R}from"./shared.61f3a471.js";import{_ as C}from"./elevation.7076906a.js";import{B as U}from"./index.0f8f6e8b.js";import{C as P}from"./index.36d12ab9.js";import{d as z}from"./index.77fe3760.js";import{u as M,a as b,_ as q,b as W,c as G}from"./en-US.51e06fb5.js";import{w as H,a as J}from"./utils.efdc8a96.js";import"./elements.6bb3d81f.js";import"./index.23ced9c1.js";import"./index.789f7251.js";import"./index.143bfef2.js";import"./components.33246c91.js";function K(t){return["default","primary","info","success","warning","danger"].includes(t)}function O(t){return["right-top","right-bottom","left-top","left-bottom"].includes(t)}const Q={type:{type:String,default:"default",validator:K},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:O},icon:{type:String}};const X=S({name:"VarBadge",components:{VarIcon:E},inheritAttrs:!1,props:Q,setup(t,{slots:s}){const c=y(()=>{var v;const{type:l,position:r,dot:o,icon:u}=t,h=((v=s.default)==null?void 0:v.call(s))&&`var-badge__position var-badge--${r}`,x=o&&"var-badge__dot",T=p(),D=u&&"var-badge__icon";return[`var-badge--${l}`,h,x,T,D]}),a=y(()=>{const{dot:l,value:r,maxValue:o}=t;return l?"":r!==void 0&&o!==void 0&&R(r)>o?`${o}+`:r}),p=()=>{const{position:l,dot:r}=t;if(r&&l.includes("right"))return"var-badge__dot--right";if(r&&l.includes("left"))return"var-badge__dot--left"};return{values:a,contentClass:c}}}),Y={class:"var-badge var--box"},Z={key:1};function $(t,s,c,a,p,l){const r=g("var-icon");return f(),B("div",Y,[e(N,{name:"var-badge-fade"},{default:n(()=>[j(V("span",L(t.$attrs,{class:["var-badge__content",t.contentClass],style:{background:t.color}}),[t.icon&&!t.dot?(f(),F(r,{key:0,name:t.icon,size:"10px"},null,8,["name"])):(f(),B("span",Z,d(t.values),1))],16),[[A,!t.hidden]])]),_:1}),I(t.$slots,"default")])}var _=C(X,[["render",$]]);_.install=function(t){t.component(_.name,_)};var ee={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},ae={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:k,use:te,pack:oe,packs:ke,merge:xe}=M(),ne=t=>{G(t),te(t)};b("zh-CN",q);b("en-US",W);k("zh-CN",ee);k("en-US",ae);const re={name:"BadgeExample",components:{VarBadge:_,VarButton:U,VarChip:P,AppType:w},setup(){const t=m(88),s=m(188),c=m(99),a=m(!1),p=()=>{a.value=!a.value};return H(ne),J(z),{value:t,value1:s,maxValue:c,hidden:a,pack:oe,handleChange:p}}},de={class:"example"};function ie(t,s,c,a,p,l){const r=g("app-type"),o=g("var-badge"),u=g("var-chip"),h=g("var-button");return f(),B("div",de,[e(r,null,{default:n(()=>[i(d(a.pack.themeColorBadge),1)]),_:1}),e(o),e(o,{type:"primary"}),e(o,{type:"info"}),e(o,{type:"warning"}),e(o,{type:"success"}),e(o,{type:"danger"}),e(r,null,{default:n(()=>[i(d(a.pack.dotBadge),1)]),_:1}),e(o,{dot:"",type:"danger"}),e(r,null,{default:n(()=>[i(d(a.pack.customContentBadge),1)]),_:1}),e(o,{type:"danger",value:"badge"}),e(o,{type:"danger",value:"hot"}),e(o,{type:"danger",value:"66"}),e(r,null,{default:n(()=>[i(d(a.pack.maximum),1)]),_:1}),e(o,{type:"danger",value:a.value,"max-value":a.maxValue},null,8,["value","max-value"]),e(o,{type:"danger",value:a.value1,"max-value":a.maxValue},null,8,["value","max-value"]),e(r,null,{default:n(()=>[i(d(a.pack.differentPositioningBadges),1)]),_:1}),e(o,{type:"danger",position:"right-top"},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.upperRight),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"right-bottom"},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.lowerRight),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"left-top"},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.upperLeft),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"left-bottom"},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.lowerLeft),1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[i(d(a.pack.whetherToDisplayTheBadge),1)]),_:1}),e(h,{onClick:a.handleChange},{default:n(()=>[i(d(a.pack.clickToChangeTheState),1)]),_:1},8,["onClick"]),e(o,{type:"danger",position:"right-top",hidden:a.hidden},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.badge),1)]),_:1})]),_:1},8,["hidden"]),e(r,null,{default:n(()=>[i(d(a.pack.customBadgeColors),1)]),_:1}),e(o,{color:"#6200ea",position:"right-top"},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.badge),1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[i(d(a.pack.customBadgeIcons),1)]),_:1}),e(o,{color:"#6200ea",position:"right-top",icon:"notebook"},{default:n(()=>[e(u,{plain:"",round:!1,color:"#009688"},{default:n(()=>[i(d(a.pack.badge),1)]),_:1})]),_:1})])}var Te=C(re,[["render",ie],["__scopeId","data-v-539a21d4"]]);export{Te as default};
