import{A as z}from"./AppType.e7bf62d3.js";import{d as I,r as P}from"./elements.6bb3d81f.js";import{t as T,p as R}from"./shared.61f3a471.js";import{_ as A}from"./elevation.7076906a.js";import{q,r as m,y as L,o as D,c as E,B as O,_ as W,$ as Y,l as c,t as n,d as x,a as s,h as a,i as l,F as G,V as J,W as K}from"./vendor.8a125dba.js";import{S as Q}from"./index.d5218f0f.js";import{B as X}from"./index.0f8f6e8b.js";import{d as Z}from"./index.77fe3760.js";import{u as tt,a as M,_ as et,b as ot,c as at}from"./en-US.51e06fb5.js";import{w as nt,a as st}from"./utils.efdc8a96.js";import"./index.143bfef2.js";import"./index.35a7147c.js";import"./zIndex.2c847fc6.js";import"./index.789f7251.js";import"./components.33246c91.js";import"./lock.2797eacf.js";import"./index.23ced9c1.js";const ut={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const y=1e3,F=60*y,b=60*F,N=24*b,rt=q({name:"VarCountdown",props:ut,setup(t){const o=m(0),u=m(!1),e=m(""),h=m(0),C=m(0),r=m({}),d=p=>{var B;const v=Math.floor(p/N),k=Math.floor(p%N/b),w=Math.floor(p%b/F),_=Math.floor(p%F/y),V=Math.floor(p%y),j={days:v,hours:k,minutes:w,seconds:_,milliseconds:V};r.value=j,(B=t.onChange)==null||B.call(t,r.value),e.value=R(t.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:k}=t,w=Date.now();o.value||(o.value=w+T(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,d(_),_===0){v==null||v();return}(k||u.value)&&(h.value=P(f))},i=()=>{u.value||(u.value=!0,o.value=Date.now()+(C.value||T(t.time)),f())},$=()=>{u.value=!1},g=()=>{o.value=0,u.value=!1,I(h.value),f()};return L(()=>t.time,()=>g(),{immediate:!0}),{showTime:e,timeData:r,start:i,pause:$,reset:g}}}),ct={class:"var-countdown"};function lt(t,o,u,e,h,C){return D(),E("div",ct,[O(t.$slots,"default",W(Y(t.timeData)),()=>[c(n(t.showTime),1)])])}var S=A(rt,[["render",lt]]);S.install=function(t){t.component(S.name,S)};var it={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},mt={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:dt,pack:ft,packs:It,merge:Pt}=tt(),pt=t=>{at(t),dt(t)};M("zh-CN",et);M("en-US",ot);U("zh-CN",it);U("en-US",mt);const _t={name:"CountdownExample",components:{VarCountdown:S,VarButton:X,AppType:z},setup(){const t=m(null),o=m(3e3),u=()=>{Q.info("end!")},e=()=>{console.log("change")};return nt(pt),st(Z),{time:o,pack:ft,end:u,countdown:t,change:e}}},H=t=>(J("data-v-4f9fa9e9"),t=t(),K(),t),vt={class:"block"},ht=H(()=>s("span",{class:"colon"},":",-1)),Ct={class:"block"},wt=H(()=>s("span",{class:"colon"},":",-1)),St={class:"block"},kt={class:"btn-container"};function xt(t,o,u,e,h,C){const r=x("app-type"),d=x("var-countdown"),f=x("var-button");return D(),E(G,null,[s("div",null,[a(r,null,{default:l(()=>[c(n(e.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(r,null,{default:l(()=>[c(n(e.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:e.pack.format},null,8,["format"])]),s("div",null,[a(r,null,{default:l(()=>[c(n(e.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(r,null,{default:l(()=>[c(n(e.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:l(i=>[s("span",vt,n(i.hours),1),ht,s("span",Ct,n(i.minutes),1),wt,s("span",St,n(i.seconds),1)]),_:1})]),s("div",null,[a(r,null,{default:l(()=>[c(n(e.pack.manualControl),1)]),_:1}),a(d,{time:e.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:e.end,onChange:e.change},null,8,["time","onEnd","onChange"]),s("div",kt,[a(f,{type:"primary",onClick:o[0]||(o[0]=i=>t.$refs.countdown.start())},{default:l(()=>[c(n(e.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=i=>t.$refs.countdown.pause())},{default:l(()=>[c(n(e.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=i=>t.$refs.countdown.reset())},{default:l(()=>[c(n(e.pack.resetText),1)]),_:1})])])],64)}var Rt=A(_t,[["render",xt],["__scopeId","data-v-4f9fa9e9"]]);export{Rt as default};
