import{d as m,_ as l,o as r,x as c,p as d,c as p,a as t,t as o,z as a,k as u,T as f}from"./elevation.4b2b848a.js";import{c as _,h as g,j as F}from"./components.21c4ed88.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const{n:v}=_("form-details"),M=m({name:"VarFormDetails",props:h,setup:()=>({n:v})});function y(e,s,I,T,B,C){return r(),c(f,{name:e.n()},{default:d(()=>[e.errorMessage||e.maxlengthText?(r(),p("div",{key:0,class:a(e.n())},[t("div",{class:a(e.n("message"))},o(e.errorMessage),3),t("div",{class:a(e.n("length"))},o(e.maxlengthText),3)],2)):u("v-if",!0)]),_:1},8,["name"])}var n=l(M,[["render",y]]);n.install=function(e){e.component(n.name,n)};const i=Symbol("FORM_BIND_FORM_ITEM_KEY");function k(){const{bindParent:e,parentProvider:s}=g(i);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=F(i);return{formItems:s,bindFormItems:e}}export{n as F,E as a,k as u};
