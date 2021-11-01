import{b as Y,e as M,a as O,f as R}from"./components.c996eb06.js";import{_ as B}from"./elevation.c2941a7c.js";import{q as I,b as f,o as u,c as S,B as N,n as E,r as C,y as q,d as h,a as y,m as k,k as P,t as r,f as W,h as a,w as i,F as G,l as c}from"./vendor.ea41cd30.js";import{I as H}from"./index.8afb1785.js";import{B as J}from"./index.0d6951cf.js";import{A as Q}from"./AppType.44c77136.js";import{u as X,a as T,_ as Z,b as x,c as ee,w as te}from"./en-US.64d12132.js";import"./shared.2d2ec151.js";import"./elements.1c3a8437.js";import"./index.931337ba.js";import"./index.510439cf.js";import"./index.2bd4354e.js";const V=Symbol("STEPS_BIND_STEP_KEY"),j=Symbol("STEPS_COUNT_STEP_KEY");function ne(){const{bindChildren:e,childProviders:o}=Y(V),{length:s}=M(j);return{length:s,step:o,bindStep:e}}function ae(e){return["horizontal","vertical"].includes(e)}const ie={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:ae},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const oe=I({name:"VarSteps",props:ie,setup(e){const o=f(()=>e.active),s=f(()=>e.activeColor),t=f(()=>e.inactiveColor),d=f(()=>e.direction),{length:p,bindStep:l}=ne();l({active:o,length:p,direction:d,activeColor:s,inactiveColor:t,clickStep:m=>{var _;(_=e.onClickStep)==null||_.call(e,m)}})}});function re(e,o,s,t,d,p){return u(),S("div",{class:"var-steps",style:E({flexDirection:e.direction==="horizontal"?"row":"column"})},[N(e.$slots,"default")],4)}var g=B(oe,[["render",re]]);g.install=function(e){e.component(g.name,g)};const ce={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function se(){const{parentProvider:e,bindParent:o}=O(V),{index:s}=R(j);if(!e||!o||!s)throw Error("[Varlet] Steps: <step/> must in <steps>");return{index:s,steps:e,bindSteps:o}}const le=I({name:"VarStep",components:{VarIcon:H},props:ce,setup(){const e=C(null),o=C(""),s=C(!1),{index:t,steps:d,bindSteps:p}=se(),{active:l,length:n,activeColor:v,inactiveColor:m,direction:_,clickStep:U}=d,z=f(()=>l.value===t.value),$=f(()=>t.value!==-1&&l.value>t.value),w={index:t},D=()=>U(t.value),K=b=>{_.value==="horizontal"&&(e.value=b)};return p(w),q(n,b=>{if(s.value=b-1===t.value,e.value){const L=e.value.offsetWidth/2-14;o.value=`0 -${L}px`}}),{main:e,index:t,isActive:$,isCurrent:z,direction:_,lineMargin:o,activeColor:v,inactiveColor:m,isLastChild:s,click:D,getRef:K}}}),ue={class:"var-step"},de={key:3};function pe(e,o,s,t,d,p){const l=h("var-icon");return u(),S("div",ue,[y("div",{class:k(`var-step-${e.direction}`)},[y("div",{class:k(`var-step-${e.direction}__main`),ref:e.getRef},[y("div",{class:k({[`var-step-${e.direction}__tag`]:!0,[`var-step-${e.direction}__tag--active`]:e.isActive||e.isCurrent}),style:E({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:o[0]||(o[0]=(...n)=>e.click&&e.click(...n))},[e.isActive?(u(),P(l,{key:0,class:"var-step__icon","var-step-cover":"",name:e.activeIcon},null,8,["name"])):e.isCurrent&&e.currentIcon?(u(),P(l,{key:1,class:"var-step__icon","var-step-cover":"",name:e.currentIcon},null,8,["name"])):e.inactiveIcon?(u(),P(l,{key:2,class:"var-step__icon","var-step-cover":"",name:e.inactiveIcon},null,8,["name"])):(u(),S("span",de,r(e.index+1),1))],6),y("div",{class:k({[`var-step-${e.direction}__content`]:!0,[`var-step-${e.direction}__content--active`]:e.isActive||e.isCurrent}),onClick:o[1]||(o[1]=(...n)=>e.click&&e.click(...n))},[N(e.$slots,"default")],2)],2),e.isLastChild?W("v-if",!0):(u(),S("div",{key:0,class:k(`var-step-${e.direction}__line`),style:E({margin:e.lineMargin})},null,6))],2)])}var A=B(le,[["render",pe]]);A.install=function(e){e.component(A.name,A)};var ve={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},fe={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:F,use:me,pack:_e,packs:je,merge:Fe}=X(),Se=e=>{ee(e),me(e)};T("zh-CN",Z);T("en-US",x);F("zh-CN",ve);F("en-US",fe);const he={name:"StepsExample",components:{VarSteps:g,VarStep:A,VarButton:J,AppType:Q},setup(){const e=C(0),o=()=>{e.value=(e.value+1)%4};return te(Se),{pack:_e,next:o,active:e}}};function ke(e,o,s,t,d,p){const l=h("app-type"),n=h("var-step"),v=h("var-steps"),m=h("var-button");return u(),S(G,null,[a(l,null,{default:i(()=>[c(r(t.pack.basicUsage),1)]),_:1}),a(v,{active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[c(r(t.pack.customStyle),1)]),_:1}),a(v,{active:t.active,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(l,null,{default:i(()=>[c(r(t.pack.vertical),1)]),_:1}),a(v,{direction:"vertical",active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(m,{type:"primary",block:"",onClick:t.next,style:{"margin-top":"20px"}},{default:i(()=>[c(r(t.pack.next),1)]),_:1},8,["onClick"])],64)}var Ue=B(he,[["render",ke]]);export{Ue as default};
