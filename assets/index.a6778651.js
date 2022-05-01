import{R as v}from"./index.e49719fd.js";import{t as u}from"./elements.eca917ca.js";import{c as f}from"./components.21c4ed88.js";import{d as m,_ as c,j as y,l as g,o as i,c as t,V as r,z as s,k as n,n as S,t as o}from"./elevation.4b2b848a.js";function k(e){return["fill","contain","cover","none","scale-down"].includes(e)}const C={src:{type:String},fit:{type:String,validator:k,default:"cover"},height:{type:[String,Number]},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:{type:Function}};const{n:$,classes:b}=f("card"),h=m({name:"VarCard",directives:{Ripple:v},props:C,setup(){return{n:$,classes:b,toSizeUnit:u}}}),z=["src","alt"];function N(e,l,V,B,D,j){const p=y("ripple");return g((i(),t("div",{class:s(e.classes(e.n(),[e.elevation,`var-elevation--${e.elevation}`,"var-elevation--2"])),onClick:l[0]||(l[0]=(...d)=>e.onClick&&e.onClick(...d))},[r(e.$slots,"image",{},()=>[e.src?(i(),t("img",{key:0,class:s(e.n("image")),style:S({objectFit:e.fit,height:e.toSizeUnit(e.height)}),src:e.src,alt:e.alt},null,14,z)):n("v-if",!0)]),r(e.$slots,"title",{},()=>[e.title?(i(),t("div",{key:0,class:s(e.n("title"))},o(e.title),3)):n("v-if",!0)]),r(e.$slots,"subtitle",{},()=>[e.subtitle?(i(),t("div",{key:0,class:s(e.n("subtitle"))},o(e.subtitle),3)):n("v-if",!0)]),r(e.$slots,"description",{},()=>[e.description?(i(),t("div",{key:0,class:s(e.n("description"))},o(e.description),3)):n("v-if",!0)]),e.$slots.extra?(i(),t("div",{key:0,class:s(e.n("footer"))},[r(e.$slots,"extra")],2)):n("v-if",!0)],2)),[[p,{disabled:!e.ripple}]])}var a=c(h,[["render",N]]);a.install=function(e){e.component(a.name,a)};export{a as C};