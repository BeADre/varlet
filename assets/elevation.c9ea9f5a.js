var pe=Object.defineProperty,he=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var I=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))fe.call(t,o)&&I(e,o,t[o]);if(O)for(var o of O(t))ge.call(t,o)&&I(e,o,t[o]);return e},U=(e,t)=>he(e,me(t));import{r as _,D as ye,E as ve,O as be,P as Se,C as K,x as Ce,g as Ne,d as z,y as ze,o as c,l as H,p as u,n as N,Q as we,z as Ue,e as W,c as d,G as y,h as f,a as g,i as ke,m as F,t as D,q,F as k,k as M,f as $e,w as Le}from"./vendor.49f89f0d.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}};Te();const xe="Varlet",Ee="var",_e="localhost",Be=8080,Pe="VARLET",Re="VARLET_THEMES",Ae="https://varlet.gitee.io/varlet-ui/varlet_icon.png",Oe="zh-CN",Ie={style:null},Fe={baidu:"https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa"},De=!0,Me={menu:[{text:{"zh-CN":"\u5F00\u53D1\u6307\u5357","en-US":"Developer guide"},type:1},{text:{"zh-CN":"\u57FA\u672C\u4ECB\u7ECD","en-US":"Basic Introduce"},doc:"home",type:3},{text:{"zh-CN":"\u5FEB\u901F\u5F00\u59CB","en-US":"Quickstart"},doc:"quickstart",type:3},{text:{"zh-CN":"\u6309\u9700\u5F15\u5165","en-US":"Import on demand"},doc:"importOnDemand",type:3},{text:{"zh-CN":"\u6697\u9ED1\u6A21\u5F0F","en-US":"Dark Mode"},doc:"themes",type:2},{text:{"zh-CN":"\u670D\u52A1\u7AEF\u6E32\u67D3","en-US":"Server side rendering"},doc:"serverSideRendering",type:3},{text:{"zh-CN":"\u6D4F\u89C8\u5668\u9002\u914D","en-US":"Browser Adaptation"},doc:"browserAdaptation",type:3},{text:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Locale"},doc:"locale",type:3},{text:{"zh-CN":"\u5F00\u53D1\u5DE5\u5177\u652F\u6301","en-US":"IDE Code Support"},doc:"ide",type:3},{text:{"zh-CN":"\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6210\u578B\u5DE5\u5177","en-US":"Components Library Tools"},doc:"cli",type:3},{text:{"zh-CN":"\u5F00\u6E90\u6307\u5357","en-US":"Open Source Guide"},doc:"openSourceGuide",type:3},{text:{"zh-CN":"\u57FA\u7840\u7EC4\u4EF6","en-US":"Basic Components"},type:1},{text:{"zh-CN":"StyleProvider \u6837\u5F0F\u5B9A\u5236","en-US":"StyleProvider"},doc:"style-provider",type:2},{text:{"zh-CN":"Button \u6309\u94AE","en-US":"Button"},doc:"button",type:2},{text:{"zh-CN":"Cell \u5355\u5143\u683C","en-US":"Cell"},doc:"cell",type:2},{text:{"zh-CN":"Icon \u56FE\u6807","en-US":"Icon"},doc:"icon",type:2},{text:{"zh-CN":"Image \u56FE\u7247","en-US":"Image"},doc:"image",type:2},{text:{"zh-CN":"Loading \u52A0\u8F7D","en-US":"Loading"},doc:"loading",type:2},{text:{"zh-CN":"Chip \u7EB8\u7247","en-US":"Chip"},doc:"chip",type:2},{text:{"zh-CN":"Badge \u5FBD\u6807","en-US":"Badge"},doc:"badge",type:2},{text:{"zh-CN":"Elevation \u6D77\u62D4\u6548\u679C","en-US":"Elevation"},doc:"styles",type:2},{text:{"zh-CN":"\u5C55\u793A\u7EC4\u4EF6","en-US":"Display Components"},type:1},{text:{"zh-CN":"Skeleton \u9AA8\u67B6\u5C4F","en-US":"Skeleton"},doc:"skeleton",type:2},{text:{"zh-CN":"Collapse \u62D3\u5C55\u9762\u677F","en-US":"Collapse"},doc:"collapse",type:2},{text:{"zh-CN":"Space \u95F4\u9694","en-US":"Space"},doc:"space",type:2},{text:{"zh-CN":"Layout \u5E03\u5C40","en-US":"Layout"},doc:"row",type:2},{text:{"zh-CN":"Sticky \u7C98\u6027\u5E03\u5C40","en-US":"Sticky"},doc:"sticky",type:2},{text:{"zh-CN":"Progress \u8FDB\u5EA6\u6761","en-US":"Progress"},doc:"progress",type:2},{text:{"zh-CN":"List \u65E0\u9650\u6EDA\u52A8\u5217\u8868","en-US":"List"},doc:"list",type:2},{text:{"zh-CN":"Swipe \u8F6E\u64AD","en-US":"Swipe"},doc:"swipe",type:2},{text:{"zh-CN":"Steps \u6B65\u9AA4\u6761","en-US":"Steps"},doc:"steps",type:2},{text:{"zh-CN":"ImagePreview \u56FE\u7247\u9884\u89C8","en-US":"ImagePreview"},doc:"image-preview",type:2},{text:{"zh-CN":"Card \u5361\u7247","en-US":"Card"},doc:"card",type:2},{text:{"zh-CN":"Divider \u5206\u5272\u7EBF","en-US":"Divider"},doc:"divider",type:2},{text:{"zh-CN":"Table \u8868\u683C","en-US":"Table"},doc:"table",type:2},{text:{"zh-CN":"\u5BFC\u822A\u7EC4\u4EF6","en-US":"Navigation Components"},type:1},{text:{"zh-CN":"Tabs \u9009\u9879\u5361","en-US":"Tabs"},doc:"tabs",type:2},{text:{"zh-CN":"IndexBar \u7D22\u5F15\u680F","en-US":"IndexBar"},doc:"index-bar",type:2},{text:{"zh-CN":"AppBar \u5BFC\u822A\u680F","en-US":"AppBar"},doc:"app-bar",type:2},{text:{"zh-CN":"BottomNavigation \u5E95\u90E8\u5BFC\u822A\u680F","en-US":"BottomNavigation"},doc:"bottom-navigation",type:2},{text:{"zh-CN":"\u529F\u80FD\u6307\u4EE4","en-US":"Functional Directives"},type:1},{text:{"zh-CN":"Ripple \u6C34\u6CE2\u6307\u4EE4","en-US":"Ripple"},doc:"ripple",type:2},{text:{"zh-CN":"Lazy \u61D2\u52A0\u8F7D","en-US":"Lazy"},doc:"lazy",type:2},{text:{"zh-CN":"\u53CD\u9988\u7EC4\u4EF6","en-US":"Action Components"},type:1},{text:{"zh-CN":"Snackbar \u6D88\u606F\u6761","en-US":"Snackbar"},doc:"snackbar",type:2},{text:{"zh-CN":"ActionSheet \u52A8\u4F5C\u9762\u677F","en-US":"ActionSheet"},doc:"action-sheet",type:2},{text:{"zh-CN":"Dialog \u5BF9\u8BDD\u6846","en-US":"Dialog"},doc:"dialog",type:2},{text:{"zh-CN":"PullRefresh \u4E0B\u62C9\u5237\u65B0","en-US":"PullRefresh"},doc:"pull-refresh",type:2},{text:{"zh-CN":"Popup \u5F39\u51FA\u5C42","en-US":"Popup"},doc:"popup",type:2},{text:{"zh-CN":"Pagination \u5206\u9875","en-US":"Pagination"},doc:"pagination",type:2},{text:{"zh-CN":"Menu \u83DC\u5355","en-US":"Menu"},doc:"menu",type:2},{text:{"zh-CN":"BackTop \u56DE\u5230\u9876\u90E8","en-US":"BackTop"},doc:"back-top",type:2},{text:{"zh-CN":"Countdown \u5012\u8BA1\u65F6","en-US":"Countdown"},doc:"countdown",type:2},{text:{"zh-CN":"Picker \u591A\u5217\u9009\u62E9\u5668","en-US":"Picker"},doc:"picker",type:2},{text:{"zh-CN":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","en-US":"DatePicker"},doc:"date-picker",type:2},{text:{"zh-CN":"TimePicker \u65F6\u95F4\u9009\u62E9\u5668","en-US":"TimePicker"},doc:"time-picker",type:2},{text:{"zh-CN":"\u8868\u5355\u7EC4\u4EF6","en-US":"Form Components"},type:1},{text:{"zh-CN":"Form \u8868\u5355","en-US":"Form"},doc:"form",type:2},{text:{"zh-CN":"Input \u8F93\u5165\u6846","en-US":"Input"},doc:"input",type:2},{text:{"zh-CN":"Select \u9009\u62E9\u6846","en-US":"Select"},doc:"select",type:2},{text:{"zh-CN":"Radio \u5355\u9009\u6846","en-US":"Radio"},doc:"radio-group",type:2},{text:{"zh-CN":"Checkbox \u590D\u9009\u6846","en-US":"Checkbox"},doc:"checkbox-group",type:2},{text:{"zh-CN":"Counter \u8BA1\u6570\u5668","en-US":"Counter"},doc:"counter",type:2},{text:{"zh-CN":"Switch \u5F00\u5173","en-US":"Switch"},doc:"switch",type:2},{text:{"zh-CN":"Slider \u6ED1\u5757","en-US":"Slider"},doc:"slider",type:2},{text:{"zh-CN":"Rate \u8BC4\u5206","en-US":"Rate"},doc:"rate",type:2},{text:{"zh-CN":"Uploader \u6587\u4EF6\u4E0A\u4F20","en-US":"Uploader"},doc:"uploader",type:2}],redirect:"/home",title:{"zh-CN":"\u9762\u5411 Vue3 \u7684 Material \u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/varletjs/varlet",playground:"https://varlet-ui-playground.vercel.app",darkMode:!0},clipboard:{"zh-CN":"\u4EE3\u7801\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F","en-US":"The code has been copied to the clipboard"},fold:{defaultFold:!1,foldHeight:50}},Ve={redirect:"/home",title:{"zh-CN":"\u9762\u5411 Vue3 \u7684 Material \u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/varletjs/varlet",darkMode:!0}},je={"color-body":"#fff","color-bar":"#fff","color-sub-bar":"#f5f5f5","color-text":"#555","color-sub-text":"#888","color-border":"rgba(0, 0, 0, 0.12)","color-shadow":"#eee","color-introduce-border":"#2196f3","color-primary":"#2196f3","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#3a7afe1a","color-app-bar":"#3a7afe","color-nav-button-hover-background":"rgba(0, 0, 0, 0.08)","color-mobile-cell-hover":"#3a7afe","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-mobile-language-active":"#3a7afe","color-mobile-language-active-background":"#edf5ff","color-hl-background":"#fafafa","color-hl-code":"#58727e","color-hl-border":"#f3f3f3","color-hl-group-a":"#7c7c7c","color-hl-group-b":"#2196f3","color-hl-group-c":"#ff9422","color-hl-group-d":"#58c193","color-hl-group-e":"#ff9422","color-hl-group-f":"#ff9422","color-hl-group-g":"#ff9422","color-hl-group-h":"#06a6e9","color-hl-group-i":"#f23733"},Xe={"color-body":"#121212","color-bar":"#1e1e1e","color-sub-bar":"#272727","color-text":"#fff","color-sub-text":"#aaa","color-border":"#333","color-shadow":"#121212","color-introduce-border":"#555","color-primary":"#96cbfe","color-link":"#A8FFC4","color-type":"#A8FFC4","color-progress":"#5580f8","color-progress-track":"#202020","color-side-bar":"#4a7afe","color-side-bar-active-background":"#4a7afe1a","color-app-bar":"#272727","color-nav-button-hover-background":"rgba(255, 255, 255, 0.08)","color-mobile-cell-hover":"#4a7afe","color-pc-language-active":"#4a7afe","color-pc-language-active-background":"#4a7afe20","color-mobile-language-active":"#4a7afe","color-mobile-language-active-background":"#4a7afe20","color-hl-background":"#272727","color-hl-code":"#fff","color-hl-border":"#272727","color-hl-group-a":"#7c7c7c","color-hl-group-b":"#96cbfe","color-hl-group-c":"#ff7b1e","color-hl-group-d":"#A8FFC4","color-hl-group-e":"#ff7b1e","color-hl-group-f":"#ff7b1e","color-hl-group-g":"#ff7b1e","color-hl-group-h":"#14a6e9","color-hl-group-i":"#ed4648"},Ye={"import dayjs from 'dayjs/esm'\n":`import dayjs from 'dayjs'
`,"import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'\n":`import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
`,"import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'\n":`import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
`};var Xt={name:xe,namespace:Ee,host:_e,port:Be,title:Pe,themesKey:Re,logo:Ae,defaultLanguage:Oe,highlight:Ie,analysis:Fe,useMobile:De,pc:Me,mobile:Ve,themes:je,darkThemes:Xe,moduleCompatible:Ye},w=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o};const C=e=>e==null?0:h(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):He(e)?Number(e):e,Yt=e=>Object.prototype.toString.call(e)==="[object Object]";function Ke(e){return e.replace(/([A-Z])/g," $1").trim().split(" ").join("-").toLowerCase()}const h=e=>typeof e=="string",He=e=>typeof e=="boolean",G=e=>typeof e=="number",We=e=>/^(http)|(\.*\/)/.test(e),Q=e=>h(e)&&e.endsWith("rem"),qe=e=>h(e)&&e.endsWith("px")||G(e),Ge=e=>h(e)&&e.endsWith("%"),Z=e=>h(e)&&e.endsWith("vw"),J=e=>h(e)&&e.endsWith("vh"),Qe=e=>{if(G(e))return e;if(qe(e))return+e.replace("px","");if(Z(e))return+e.replace("vw","")*window.innerWidth/100;if(J(e))return+e.replace("vh","")*window.innerHeight/100;if(Q(e)){const t=+e.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(o)}return h(e)?C(e):0},Ze=e=>e==null?null:Ge(e)||Z(e)||J(e)||Q(e)?e:`${Qe(e)}px`;function Je(e){return Object.entries(e!=null?e:{}).reduce((t,[o,r])=>{const n=o.startsWith("--")?o:`--${Ke(o)}`;return t[n]=r,t},{})}function Kt(){return new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(e)})})}function V(e,t){return Array.isArray(t)?t.reduce((o,r)=>(o[r]=e[r],o),{}):e[t]}function et(e){const t=be(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}function Ht(e,t={},o={}){const r={setup(){return()=>Se(e,m(m({},t),o))}},{unmount:n}=et(r);return{unmountInstance:n}}function Wt(){const e=_(!1);return ye(()=>{e.value=!1}),ve(()=>{e.value=!0}),{disabled:e}}const $=[];function tt(e={}){$.forEach(o=>document.documentElement.style.removeProperty(o)),$.length=0;const t=Je(e);Object.entries(t).forEach(([o,r])=>{document.documentElement.style.setProperty(o,r),$.push(o)})}function ot(e){return e.replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function qt(e){return ot(e).replace(e.charAt(0),e.charAt(0).toUpperCase())}function nt(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function Gt(){return/Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)}var rt=(e=>(e[e.TITLE=1]="TITLE",e[e.COMPONENT=2]="COMPONENT",e[e.DOCUMENTATION=3]="DOCUMENTATION",e))(rt||{});function Qt(){return window.self!==window.top}function Zt(e={}){return Object.keys(e).reduce((t,o)=>{const r=e[o];return r&&(t[o]=r),t},{})}function ee(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function Jt(e,t="mobile"){const o=()=>{var n;const r=t==="mobile"?(n=ee().get("language"))!=null?n:"zh-CN":nt().language;e(r)};te(o),o()}function eo(e){const t=()=>{var r;const o=(r=ee().get("platform"))!=null?r:"mobile";e(o)};te(t),t()}function to(e,t=!0){const o=r=>{const{data:n}=r;n.action==="themesChange"&&e(n.data,n.from)};window.addEventListener("message",o),t&&K(()=>{window.removeEventListener("message",o)}),e(it(),"default")}function te(e){Ce(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),K(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function oo(e,t){const o=Ne(e,t,{}),r=Object.entries(o).reduce((n,[a,i])=>(n[`--site-config-${a}`]=i,n),{});tt(r)}function it(e="VARLET_THEMES"){var o;let t=window.localStorage.getItem(e);return t||(t=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-color-scheme: dark)").matches)?"darkThemes":"themes",window.localStorage.setItem(e,t)),t}const oe=typeof window!="undefined",at=oe&&"ontouchstart"in window;let L=!1,p;const ne=e=>e==="mousedown",st=e=>e==="mousemove",B=e=>e==="mouseup",lt=e=>ne(e)||!p||p&&!p.dispatchEvent;function ct(e,t,o){const{clientX:r,clientY:n,screenX:a,screenY:i,pageX:l,pageY:s}=o;this.identifier=t,this.target=e,this.clientX=r,this.clientY=n,this.screenX=a,this.screenY=i,this.pageX=l,this.pageY=s}function dt(e){const t=A();return t.push(new ct(p,1,e)),t}function A(){const e=[];return e.item=function(t){return this[t]||null},e}function j(e){const{type:t}=e;return B(t)?A():dt(e)}function ut(e,t){const{altKey:o,ctrlKey:r,metaKey:n,shiftKey:a}=t,i=new Event(e,{bubbles:!0,cancelable:!0});i.altKey=o,i.ctrlKey=r,i.metaKey=n,i.shiftKey=a,i.touches=j(t),i.targetTouches=j(t),i.changedTouches=A(),p.dispatchEvent(i)}function T(e,t){const{type:o,target:r}=e;L=ne(o)?!0:B(o)?!1:L,!(st(o)&&!L)&&(lt(o)&&(p=r),ut(t,e),B(o)&&(p=null))}function pt(){window.addEventListener("mousedown",e=>T(e,"touchstart"),!0),window.addEventListener("mousemove",e=>T(e,"touchmove"),!0),window.addEventListener("mouseup",e=>T(e,"touchend"),!0)}oe&&!at&&pt();const ht="modulepreload",X={},mt="./",no=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${mt}${r}`,r in X)return;X[r]=!0;const n=r.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":ht,n||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),n)return new Promise((l,s)=>{i.addEventListener("load",l),i.addEventListener("error",s)})})).then(()=>t())},ft={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const gt=z({name:"VarSiteIcon",props:ft,setup(e){const t=_(""),o=_(!1);return ze(()=>e.name,async(n,a)=>{const{transition:i}=e;if(a==null||C(i)===0){t.value=n;return}o.value=!0,await Ue(),setTimeout(()=>{a!=null&&(t.value=n),o.value=!1},C(i))},{immediate:!0}),{nextName:t,shrinking:o,isURL:We,toNumber:C,toSizeUnit:Ze}}});function yt(e,t,o,r,n,a){return c(),H(we(e.isURL(e.name)?"img":"i"),{class:u(["var-site-icon",[`${e.namespace}--set`,e.isURL(e.name)?"var-site-icon__image":`${e.namespace}-${e.nextName}`,e.shrinking?"var-site-icon--shrinking":null]]),style:N({color:e.color,transition:`all ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}var v=w(gt,[["render",yt]]);v.install=function(e){e.component(v.name,v)};const vt={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const bt=z({name:"VarSiteCell",components:{[v.name]:v},props:vt}),St={class:"var-site-cell__content"};function Ct(e,t,o,r,n,a){const i=W("var-site-icon");return c(),d("div",{class:u(["var-site-cell",[e.border?"var-site-cell--border":null]])},[e.$slots.icon||e.icon?(c(),d("div",{key:0,class:u(["var-site-cell__icon",[e.iconClass?e.iconClass:null]])},[y(e.$slots,"icon",{},()=>[ke(i,{class:"var-site--flex",name:e.icon},null,8,["name"])])],2)):f("v-if",!0),g("div",St,[g("div",{class:u(["var-site-cell__title",[e.titleClass?e.titleClass:null]])},[y(e.$slots,"default",{},()=>[F(D(e.title),1)])],2),e.$slots.desc||e.desc?(c(),d("div",{key:0,class:u(["var-site-cell__desc",[e.descClass?e.descClass:null]])},[y(e.$slots,"desc",{},()=>[F(D(e.desc),1)])],2)):f("v-if",!0)]),e.$slots.extra?(c(),d("div",{key:1,class:u(["var-site-cell__extra",[e.extraClass?e.extraClass:null]])},[y(e.$slots,"extra")],2)):f("v-if",!0)],2)}var x=w(bt,[["render",Ct]]);x.install=function(e){e.component(x.name,x)};const re={locks:{},zIndex:2e3,touchmoveForbid:!0};q(re);var ie=q(re);const Y=250;function Nt(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function zt(e,t){const{top:o,left:r}=e.getBoundingClientRect(),{clientWidth:n,clientHeight:a}=e,i=Math.sqrt(n**2+a**2)/2,l=i*2,s=t.touches[0].clientX-r,S=t.touches[0].clientY-o,le=(n-i*2)/2,ce=(a-i*2)/2,de=s-i,ue=S-i;return{x:de,y:ue,centerX:le,centerY:ce,size:l}}function ae(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{var S;t.tasker=null;const{x:r,y:n,centerX:a,centerY:i,size:l}=zt(this,e),s=document.createElement("div");s.classList.add("var-site-ripple"),s.style.opacity="0",s.style.transform=`translate(${r}px, ${n}px) scale3d(.3, .3, .3)`,s.style.width=`${l}px`,s.style.height=`${l}px`,s.style.backgroundColor=(S=t.color)!=null?S:"currentColor",s.dataset.createdAt=String(performance.now()),Nt(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform=`translate(${a}px, ${i}px) scale3d(1, 1, 1)`,s.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function P(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(".var-site-ripple");if(!o.length)return;const r=o[o.length-1],n=Y-performance.now()+Number(r.dataset.createdAt);setTimeout(()=>{r.style.opacity="0",setTimeout(()=>{var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)},Y)},n)};e.tasker?setTimeout(t,60):t()}function se(){const e=this._ripple;!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function wt(e,t){var o,r,n;e._ripple=U(m({tasker:null},(o=t.value)!=null?o:{}),{touchmoveForbid:(n=(r=t.value)==null?void 0:r.touchmoveForbid)!=null?n:ie.touchmoveForbid,removeRipple:P.bind(e)}),e.addEventListener("touchstart",ae,{passive:!0}),e.addEventListener("touchmove",se,{passive:!0}),e.addEventListener("dragstart",P,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function Ut(e){e.removeEventListener("touchstart",ae),e.removeEventListener("touchmove",se),e.removeEventListener("dragstart",P),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function kt(e,t){var o,r,n;e._ripple=U(m(m({},e._ripple),(o=t.value)!=null?o:{}),{touchmoveForbid:(n=(r=t.value)==null?void 0:r.touchmoveForbid)!=null?n:ie.touchmoveForbid,tasker:null})}const $t={mounted:wt,unmounted:Ut,updated:kt,install(e){e.directive("ripple",this)}};function Lt(e){return["circle","wave","cube","rect","disappear"].includes(e)}function Tt(e){return["normal","mini","small","large"].includes(e)}const R={type:{type:String,default:"circle",validator:Lt},radius:{type:[String,Number],default:15},size:{type:String,default:"normal",validator:Tt},color:{type:String,default:"currentColor"}};const xt=z({name:"VarSiteLoading",props:R,setup(){return{loadingTypeDict:{wave:5,cube:4,rect:8,disappear:3}}}}),Et={class:"var-site--box var-site-loading"},_t={key:0,class:"var-site-loading__circle"},Bt=g("svg",{viewBox:"25 25 50 50"},[g("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),Pt=[Bt];function Rt(e,t,o,r,n,a){return c(),d("div",Et,[e.type==="circle"?(c(),d("div",_t,[g("span",{class:"var-site-loading__circle-block",style:N({width:e.radius*2+"px",height:e.radius*2+"px"})},Pt,4)])):f("v-if",!0),(c(!0),d(k,null,M(e.loadingTypeDict,(i,l)=>(c(),d(k,{key:l},[e.type===l?(c(),d("div",{key:0,class:u(`var-site-loading__${l} var-site-loading__${l}-${e.size}`)},[(c(!0),d(k,null,M(i,s=>(c(),d("div",{key:s+l,style:N({backgroundColor:e.color}),class:u(`var-site-loading__${l}-item var-site-loading__${l}-item-${e.size}`)},null,6))),128))],2)):f("v-if",!0)],64))),128))])}var b=w(xt,[["render",Rt]]);b.install=function(e){e.component(b.name,b)};function At(e){return["default","primary","info","success","warning","danger"].includes(e)}function Ot(e){return["normal","mini","small","large"].includes(e)}const It={type:{type:String,default:"default",validator:At},size:{type:String,default:"normal",validator:Ot},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},loadingRadius:{type:[Number,String],default:12},loadingType:V(R,"type"),loadingSize:V(R,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const Ft=z({name:"VarSiteButton",components:{[b.name]:b},directives:{Ripple:$t},props:It,setup(e){return{handleClick:r=>{const{loading:n,disabled:a,onClick:i}=e;n||a||i==null||i(r)},handleTouchstart:r=>{const{loading:n,disabled:a,onTouchstart:i}=e;n||a||i==null||i(r)}}}}),Dt=["disabled"];function Mt(e,t,o,r,n,a){const i=W("var-site-loading"),l=$e("ripple");return Le((c(),d("button",{class:u(["var-site-button var-site--box",[`var-site-button--${e.size}`,e.block?"var-site--flex var-site-button--block":"var-site--inline-flex",e.disabled?"var-site-button--disabled":null,e.text?`var-site-button--text-${e.type}`:`var-site-button--${e.type}`,e.text?"var-site-button--text":"var-elevation--1",e.text&&e.disabled?"var-site-button--text-disabled":null,e.round?"var-site-button--round":null,e.outline?"var-site-button--outline":null]]),style:N({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:t[0]||(t[0]=(...s)=>e.handleClick&&e.handleClick(...s)),onTouchstart:t[1]||(t[1]=(...s)=>e.handleTouchstart&&e.handleTouchstart(...s))},[e.loading?(c(),H(i,{key:0,class:"var-site-button__loading",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["type","size","radius"])):f("v-if",!0),g("div",{class:u(["var-site-button__content",[e.loading?"var-site-button--hidden":null]])},[y(e.$slots,"default")],2)],46,Dt)),[[l,{disabled:e.disabled||!e.ripple}]])}var E=w(Ft,[["render",Mt]]);E.install=function(e){e.component(E.name,E)};export{E as B,x as C,v as I,b as L,rt as M,$t as R,w as _,nt as a,no as b,Xt as c,ie as d,R as e,Yt as f,it as g,Kt as h,Gt as i,Jt as j,Qt as k,qt as l,Ht as m,eo as n,V as p,Zt as r,oo as s,C as t,Wt as u,to as w};
