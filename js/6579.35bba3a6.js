(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[6579],{9947:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(641),r={locks:{},zIndex:2e3,touchmoveForbid:!0};(0,t.qj)(r);const i=(0,t.qj)(r)},2588:(n,e,a)=>{"use strict";a.d(e,{Z:()=>b});var t=a(7875),r=a(4825),i=a(349),o={key:0,class:"var-form-details"},l={class:"var-form-details__message"},c={class:"var-form-details__length"},s={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const d=(0,t.aZ)({name:"VarFormDetails",props:s});var u=a(6062),p=a.n(u),m=a(1353);p()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,d.render=function(n,e,a,s,d,u){return(0,t.wg)(),(0,t.j4)(r.uT,{name:"var-form-details"},{default:(0,t.w5)((()=>[n.errorMessage||n.maxlengthText?((0,t.wg)(),(0,t.j4)("div",o,[(0,t.Wm)("div",l,(0,i.zw)(n.errorMessage),1),(0,t.Wm)("div",c,(0,i.zw)(n.maxlengthText),1)])):(0,t.kq)("v-if",!0)])),_:1})};const v=d;v.install=function(n){n.component(v.name,v)};const b=v},9347:(n,e,a)=>{"use strict";a.d(e,{cI:()=>i,y8:()=>o});var t=a(9838),r=Symbol("FORM_BIND_FORM_ITEM_KEY");function i(){var{bindParent:n,parentProvider:e}=(0,t.NB)(r);return{bindForm:n,form:e}}function o(){var{bindChildren:n,childProviders:e}=(0,t.$E)(r);return{formItems:e,bindFormItems:n}}},6714:(n,e,a)=>{"use strict";a.d(e,{Z:()=>m});var t=a(7875),r={class:"var--box var-loading"},i={key:0,class:"var-loading__circle"},o=(0,t.Wm)("svg",{viewBox:"25 25 50 50"},[(0,t.Wm)("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),l=a(4538);const c=(0,t.aZ)({name:"VarLoading",props:l.NQ,setup:()=>({loadingTypeDict:{wave:5,cube:4,rect:8,disappear:3}})});var s=a(6062),d=a.n(s),u=a(4204);d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,c.render=function(n,e,a,l,c,s){return(0,t.wg)(),(0,t.j4)("div",r,["circle"===n.type?((0,t.wg)(),(0,t.j4)("div",i,[(0,t.Wm)("span",{class:"var-loading__circle-block",style:{width:2*n.radius+"px",height:2*n.radius+"px"}},[o],4)])):(0,t.kq)("v-if",!0),((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(n.loadingTypeDict,((e,a)=>((0,t.wg)(),(0,t.j4)(t.HY,{key:a},[n.type===a?((0,t.wg)(),(0,t.j4)("div",{key:0,class:"var-loading__".concat(a," var-loading__").concat(a,"-").concat(n.size)},[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e,(e=>((0,t.wg)(),(0,t.j4)("div",{key:e+a,style:{backgroundColor:n.color},class:"var-loading__".concat(a,"-item var-loading__").concat(a,"-item-").concat(n.size)},null,6)))),128))],2)):(0,t.kq)("v-if",!0)],64)))),128))])};const p=c;p.install=function(n){n.component(p.name,p)};const m=p},4538:(n,e,a)=>{"use strict";a.d(e,{NQ:()=>t});var t={type:{type:String,default:"circle",validator:function(n){return["circle","wave","cube","rect","disappear"].includes(n)}},radius:{type:[String,Number],default:15},size:{type:String,default:"normal",validator:function(n){return["normal","mini","small","large"].includes(n)}},color:{type:String,default:"currentColor"}}},1857:(n,e,a)=>{"use strict";a.d(e,{Z:()=>t});const t={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(n,e,a)=>{"use strict";a.d(e,{bU:()=>c,P2:()=>d,IH:()=>u,D$:()=>p});var t=a(641),r=a(8732);function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function c(){var n={},e=(0,t.iH)({}),a=a=>{if(!n[a])return console.warn("The ".concat(a," does not exist. You can mount a language package using the add method")),{};e.value=n[a]};return{packs:n,pack:e,add:(e,a)=>{a.lang=e,n[e]=a},use:a,merge:(e,t)=>{n[e]?(n[e]=o(o({},n[e]),t),a(e)):console.warn("The ".concat(e," does not exist. You can mount a language package using the add method"))}}}var{packs:s,pack:d,add:u,use:p,merge:m}=c();u("zh-CN",r.Z),p("zh-CN")},8732:(n,e,a)=>{"use strict";a.d(e,{Z:()=>t});const t={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},2986:(n,e,a)=>{"use strict";a.d(e,{Z:()=>v});var t=a(9947),r=a(6062),i=a.n(r),o=a(526);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var l=a(4352);function c(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){d(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function d(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function u(n){var e=this._ripple;e.removeRipple(),e.disabled||e.tasker||(e.tasker=window.setTimeout((()=>{var a;e.tasker=null;var{x:t,y:r,centerX:i,centerY:o,size:l}=function(n,e){var{top:a,left:t}=n.getBoundingClientRect(),{clientWidth:r,clientHeight:i}=n,o=Math.sqrt(Math.pow(r,2)+Math.pow(i,2))/2,l=2*o;return{x:e.touches[0].clientX-t-o,y:e.touches[0].clientY-a-o,centerX:(r-2*o)/2,centerY:(i-2*o)/2,size:l}}(this,n),c=document.createElement("div");c.classList.add("var-ripple"),c.style.opacity="0",c.style.transform="translate(".concat(t,"px, ").concat(r,"px) scale3d(.3, .3, .3)"),c.style.width="".concat(l,"px"),c.style.height="".concat(l,"px"),c.style.backgroundColor=null!==(a=e.color)&&void 0!==a?a:"currentColor",c.dataset.createdAt=String(performance.now()),function(n){var{zIndex:e,position:a}=window.getComputedStyle(n);n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden","static"===a&&(n.style.position="relative"),"auto"===e&&(n.style.zIndex="1")}(this),this.appendChild(c),window.setTimeout((()=>{c.style.transform="translate(".concat(i,"px, ").concat(o,"px) scale3d(1, 1, 1)"),c.style.opacity=".25"}),20)}),60))}function p(){var n=()=>{var n=this.querySelectorAll(".var-ripple");if(n.length){var e=n[n.length-1],a=250-performance.now()+Number(e.dataset.createdAt);setTimeout((()=>{e.style.opacity="0",setTimeout((()=>{var n;return null===(n=e.parentNode)||void 0===n?void 0:n.removeChild(e)}),250)}),a)}};this._ripple.tasker?setTimeout(n,60):n()}function m(){var n=this._ripple;n.touchmoveForbid&&(n.tasker&&window.clearTimeout(n.tasker),n.tasker=null)}i()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const v={mounted:function(n,e){var a,r,i;n._ripple=s(s({tasker:null},null!==(a=e.value)&&void 0!==a?a:{}),{},{touchmoveForbid:null!==(r=null===(i=e.value)||void 0===i?void 0:i.touchmoveForbid)&&void 0!==r?r:t.Z.touchmoveForbid,removeRipple:p.bind(n)}),n.addEventListener("touchstart",u,{passive:!0}),n.addEventListener("touchmove",m,{passive:!0}),n.addEventListener("dragstart",p,{passive:!0}),document.addEventListener("touchend",n._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",n._ripple.removeRipple,{passive:!0})},unmounted:function(n){n.removeEventListener("touchstart",u),n.removeEventListener("touchmove",m),n.removeEventListener("dragstart",p),document.removeEventListener("touchend",n._ripple.removeRipple),document.removeEventListener("touchcancel",n._ripple.removeRipple)},updated:function(n,e){var a,r,i;n._ripple=s(s(s({},n._ripple),null!==(a=e.value)&&void 0!==a?a:{}),{},{touchmoveForbid:null!==(r=null===(i=e.value)||void 0===i?void 0:i.touchmoveForbid)&&void 0!==r?r:t.Z.touchmoveForbid,tasker:null})},install(n){n.directive("ripple",this)}}},9838:(n,e,a)=>{"use strict";a.d(e,{H6:()=>v,Jr:()=>b,nN:()=>h,wn:()=>f,$E:()=>g,NB:()=>y,V$:()=>_,hO:()=>w,Mc:()=>k});var t=a(4825),r=a(7875),i=a(641),o=a(8442),l=["collect","clear"];function c(n,e,a,t,r,i,o){try{var l=n[i](o),c=l.value}catch(n){return void a(n)}l.done?e(c):Promise.resolve(c).then(t,r)}function s(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var i=n.apply(e,a);function o(n){c(i,t,r,o,l,"next",n)}function l(n){c(i,t,r,o,l,"throw",n)}o(void 0)}))}}function d(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}function u(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function p(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){m(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function m(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function v(n,e){return Array.isArray(e)?e.reduce(((e,a)=>(e[a]=n[a],e)),{}):n[e]}function b(n,e={},a={}){var i={setup:()=>()=>(0,r.h)(n,p(p({},e),a))},{unmount:o}=function(n){var e=(0,t.ri)(n),a=document.createElement("div");return document.body.appendChild(a),{instance:e.mount(a),unmount(){e.unmount(),document.body.removeChild(a)}}}(i);return{unmountInstance:o}}function h(n){var e=(0,i.qj)([]),a=(0,r.FN)();return(0,r.JJ)(n,{collect:n=>{var t;e.push(n),t=function(n){var e=[],a=n=>{null!=n&&n.component?a(null==n?void 0:n.component.subTree):Array.isArray(null==n?void 0:n.children)&&n.children.forEach((n=>{(0,r.lA)(n)&&(e.push(n),a(n))}))};return a(n),e}(a.subTree),e.sort(((n,e)=>t.indexOf(n.vnode)-t.indexOf(e.vnode)))},clear:n=>{(0,o.cl)(e,n)},instances:e}),{length:(0,r.Fl)((()=>e.length))}}function f(n){if(!x(n))return{index:null};var e=(0,r.f3)(n),{collect:a,clear:t,instances:i}=e,o=(0,r.FN)();return(0,r.bv)((()=>{(0,r.Y3)().then((()=>a(o)))})),(0,r.Ah)((()=>{(0,r.Y3)().then((()=>t(o)))})),{index:(0,r.Fl)((()=>i.indexOf(o)))}}function g(n){var e=[],a=n=>{e.push(n)},t=n=>{(0,o.cl)(e,n)};return{childProviders:e,bindChildren:e=>{(0,r.JJ)(n,p({collect:a,clear:t},e))}}}function y(n){if(!x(n))return{parentProvider:null,bindParent:null};var e=(0,r.f3)(n),{collect:a,clear:t}=e;return{parentProvider:d(e,l),bindParent:n=>{(0,r.bv)((()=>a(n))),(0,r.Jd)((()=>t(n)))}}}function x(n){return n in(0,r.FN)().provides}function _(){var n=(0,i.iH)(""),e=function(){var e=s((function*(e,a,t){return!(0,o.kJ)(e)||!e.length||!(yield Promise.all(e.map((n=>n(a,t))))).some((e=>!0!==e&&(n.value=String(e),!0)))}));return function(n,a,t){return e.apply(this,arguments)}}(),a=function(){var a=s((function*(a,t,r,i,o){a.includes(t)&&(yield e(r,i,o))&&(n.value="")}));return function(n,e,t,r,i){return a.apply(this,arguments)}}();return{errorMessage:n,validate:e,resetValidation:()=>{n.value=""},validateWithTrigger:a}}function w(n){(0,r.bv)((()=>{window.addEventListener("hashchange",n),window.addEventListener("popstate",n)})),(0,r.Ah)((()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}))}function k(){var n=(0,i.iH)(!1);return(0,r.dl)((()=>{n.value=!1})),(0,r.se)((()=>{n.value=!0})),{disabled:n}}},526:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(2609),r=a.n(t)()((function(n){return n[1]}));r.push([n.id,".var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n",""]);const i=r},4352:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(2609),r=a.n(t)()((function(n){return n[1]}));r.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]);const i=r},1761:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(2609),r=a.n(t)()((function(n){return n[1]}));r.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const i=r},1353:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(2609),r=a.n(t)()((function(n){return n[1]}));r.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --form-details-error-color: var(--color-danger);\n  --form-details-length-color: #888;\n  --form-details-margin-top: 6px;\n  --form-details-font-size: 12px;\n  --form-details-message-margin-right: 4px;\n}\n.var-form-details-enter-from,\n.var-form-details-leave-to {\n  opacity: 0;\n  margin-top: 2px !important;\n}\n.var-form-details-enter-active,\n.var-form-details-leave-active {\n  transition: 0.2s all var(--cubic-bezier);\n}\n.var-form-details {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--form-details-font-size);\n  margin-top: var(--form-details-margin-top);\n}\n.var-form-details__message {\n  flex-grow: 1;\n  color: var(--form-details-error-color);\n  margin-right: var(--form-details-message-margin-right);\n  -webkit-user-select: none;\n          user-select: none;\n  text-align: left;\n}\n.var-form-details__length {\n  flex-shrink: 0;\n  color: var(--form-details-length-color);\n  -webkit-user-select: none;\n          user-select: none;\n  text-align: right;\n}\n",""]);const i=r},4204:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(2609),r=a.n(t)()((function(n){return n[1]}));r.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.var-loading__circle {\n  display: flex;\n}\n.var-loading__circle-block {\n  display: inline-block;\n  animation: circle 1.8s linear infinite;\n}\n.var-loading__circle-block svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.var-loading__circle-block svg circle {\n  animation: circular 1.5s ease-in-out infinite;\n  stroke: currentColor;\n  stroke-width: 3;\n  stroke-linecap: round;\n}\n@keyframes circle {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes circular {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -40;\n}\n100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -120;\n}\n}\n.var-loading__wave {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.var-loading__wave-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__wave-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__wave-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__wave-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__wave-item {\n  height: 100%;\n  display: inline-block;\n  animation: 1.2s ease-in-out infinite wave;\n}\n.var-loading__wave-item:nth-child(1) {\n  animation-delay: -1.2s;\n  margin-left: 0;\n}\n.var-loading__wave-item:nth-child(2) {\n  animation-delay: -1.1s;\n}\n.var-loading__wave-item:nth-child(3) {\n  animation-delay: -1s;\n}\n.var-loading__wave-item:nth-child(4) {\n  animation-delay: -0.9s;\n}\n.var-loading__wave-item:nth-child(5) {\n  animation-delay: -0.8s;\n}\n.var-loading__wave-item-large {\n  width: 5px;\n  margin-left: 5px;\n}\n.var-loading__wave-item-normal {\n  width: 4px;\n  margin-left: 4px;\n}\n.var-loading__wave-item-small {\n  width: 3px;\n  margin-left: 3px;\n}\n.var-loading__wave-item-mini {\n  width: 2px;\n  margin-left: 2px;\n}\n@keyframes wave {\n0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n}\n20% {\n    transform: scaleY(1);\n}\n}\n.var-loading__cube {\n  display: flex;\n  align-items: center;\n}\n.var-loading__cube-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__cube-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__cube-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__cube-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__cube-item {\n  display: inline-block;\n  transform-origin: right bottom;\n  animation: 1.5s ease infinite cube;\n}\n.var-loading__cube-item:nth-child(1) {\n  animation-delay: 0.2s;\n  margin-left: 0;\n}\n.var-loading__cube-item:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.var-loading__cube-item:nth-child(3) {\n  animation-delay: 0.6s;\n}\n.var-loading__cube-item:nth-child(4) {\n  animation-delay: 0.8s;\n}\n.var-loading__cube-item-large {\n  height: 10px;\n  width: 10px;\n  margin-left: 5px;\n}\n.var-loading__cube-item-normal {\n  height: 8px;\n  width: 8px;\n  margin-left: 4px;\n}\n.var-loading__cube-item-small {\n  height: 6px;\n  width: 6px;\n  margin-left: 3px;\n}\n.var-loading__cube-item-mini {\n  height: 4px;\n  width: 4px;\n  margin-left: 2px;\n}\n@keyframes cube {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n100% {\n    opacity: 0;\n    transform: rotate(90deg) scale(0.3);\n}\n}\n.var-loading__rect {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.var-loading__rect-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__rect-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__rect-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__rect-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__rect-item {\n  animation: 2s ease-in-out infinite rect;\n}\n.var-loading__rect-item:nth-child(1) {\n  animation-delay: 1.75s;\n}\n.var-loading__rect-item:nth-child(2) {\n  animation-delay: 1.5s;\n}\n.var-loading__rect-item:nth-child(3) {\n  animation-delay: 1.25s;\n}\n.var-loading__rect-item:nth-child(4) {\n  animation-delay: 1s;\n}\n.var-loading__rect-item:nth-child(5) {\n  animation-delay: 0.75s;\n}\n.var-loading__rect-item:nth-child(6) {\n  animation-delay: 0.5s;\n}\n.var-loading__rect-item:nth-child(7) {\n  animation-delay: 0.25s;\n}\n.var-loading__rect-item:nth-child(8) {\n  animation-delay: 0s;\n}\n.var-loading__rect-item-large {\n  height: 100%;\n  width: 8px;\n}\n.var-loading__rect-item-normal {\n  height: 90%;\n  width: 6.4px;\n}\n.var-loading__rect-item-small {\n  height: 80%;\n  width: 4.8px;\n}\n.var-loading__rect-item-mini {\n  height: 70%;\n  width: 3.2px;\n}\n@keyframes rect {\n0% {\n    opacity: 0.3;\n}\n25% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.3;\n}\n65% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.3;\n}\n}\n.var-loading__disappear {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: nowrap;\n}\n.var-loading__disappear-large {\n  width: 64px;\n  height: 18px;\n}\n.var-loading__disappear-normal {\n  width: 50px;\n  height: 16px;\n}\n.var-loading__disappear-small {\n  width: 36px;\n  height: 14px;\n}\n.var-loading__disappear-mini {\n  width: 22px;\n  height: 12px;\n}\n.var-loading__disappear-item {\n  border-radius: 50%;\n  animation: 0.5s ease-in-out infinite alternate disappear;\n}\n.var-loading__disappear-item:nth-child(1) {\n  animation-delay: -0.4s;\n}\n.var-loading__disappear-item:nth-child(2) {\n  animation-delay: -0.2s;\n}\n.var-loading__disappear-item:nth-child(3) {\n  animation-delay: 0s;\n}\n.var-loading__disappear-item-large {\n  height: 15px;\n  width: 15px;\n}\n.var-loading__disappear-item-normal {\n  height: 12px;\n  width: 12px;\n}\n.var-loading__disappear-item-small {\n  height: 9px;\n  width: 9px;\n}\n.var-loading__disappear-item-mini {\n  height: 6px;\n  width: 6px;\n}\n@keyframes disappear {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n",""]);const i=r},5593:(n,e,a)=>{"use strict";a.d(e,{Z:()=>i});var t=a(2609),r=a.n(t)()((function(n){return n[1]}));r.push([n.id,".var-switch__example-block[data-v-6a5c75cc] {\n  display: flex;\n  align-items: center;\n}\n.var-switch[data-v-6a5c75cc] {\n  margin-right: 30px;\n}\n",""]);const i=r},9524:(n,e,a)=>{"use strict";a.d(e,{Z:()=>s});var t=a(7875),r={class:"app-type"};const i=(0,t.aZ)({name:"AppType"});var o=a(6062),l=a.n(o),c=a(1761);l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,i.render=function(n,e,a,i,o,l){return(0,t.wg)(),(0,t.j4)("div",r,[(0,t.WI)(n.$slots,"default")])};const s=i},9799:(n,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>S});var t=a(7875),r=a(349),i=(0,t.HX)("data-v-6a5c75cc");(0,t.dD)("data-v-6a5c75cc");var o={class:"var-switch__example-block"},l={class:"var-switch__example-block"},c={class:"var-switch__example-block"},s={class:"var-switch__example-block"},d={class:"var-switch__example-block"};(0,t.Cn)();var u=i(((n,e,a,u,p,m)=>{var v=(0,t.up)("app-type"),b=(0,t.up)("var-switch");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)(v,null,{default:i((()=>[(0,t.Uk)((0,r.zw)(u.pack.basicUsage),1)])),_:1}),(0,t.Wm)("div",o,[(0,t.Wm)(b,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=e=>n.value=e)},null,8,["modelValue"])]),(0,t.Wm)(v,null,{default:i((()=>[(0,t.Uk)((0,r.zw)(u.pack.notAvailable),1)])),_:1}),(0,t.Wm)("div",l,[(0,t.Wm)(b,{modelValue:n.value1,"onUpdate:modelValue":e[2]||(e[2]=e=>n.value1=e),disabled:""},null,8,["modelValue"]),(0,t.Wm)(b,{modelValue:n.value1,"onUpdate:modelValue":e[3]||(e[3]=e=>n.value1=e),readonly:""},null,8,["modelValue"])]),(0,t.Wm)(v,null,{default:i((()=>[(0,t.Uk)((0,r.zw)(u.pack.customColor),1)])),_:1}),(0,t.Wm)("div",c,[(0,t.Wm)(b,{modelValue:n.value2,"onUpdate:modelValue":e[4]||(e[4]=e=>n.value2=e),ripple:!1},null,8,["modelValue"]),(0,t.Wm)(b,{modelValue:n.value2,"onUpdate:modelValue":e[5]||(e[5]=e=>n.value2=e),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),(0,t.Wm)(v,null,{default:i((()=>[(0,t.Uk)((0,r.zw)(u.pack.size),1)])),_:1}),(0,t.Wm)("div",s,[(0,t.Wm)(b,{modelValue:n.value3,"onUpdate:modelValue":e[6]||(e[6]=e=>n.value3=e),size:"15"},null,8,["modelValue"]),(0,t.Wm)(b,{modelValue:n.value3,"onUpdate:modelValue":e[7]||(e[7]=e=>n.value3=e)},null,8,["modelValue"]),(0,t.Wm)(b,{modelValue:n.value3,"onUpdate:modelValue":e[8]||(e[8]=e=>n.value3=e),size:"25"},null,8,["modelValue"])]),(0,t.Wm)(v,null,{default:i((()=>[(0,t.Uk)((0,r.zw)(u.pack.loading),1)])),_:1}),(0,t.Wm)("div",d,[(0,t.Wm)(b,{"model-value":!0,loading:""}),(0,t.Wm)(b,{"model-value":!0,size:"25",loading:"","loading-color":"#ff9f00"})]),(0,t.Wm)(v,null,{default:i((()=>[(0,t.Uk)((0,r.zw)(u.pack.validateValue),1)])),_:1}),(0,t.Wm)(b,{modelValue:n.value4,"onUpdate:modelValue":e[9]||(e[9]=e=>n.value4=e),rules:[n=>!0===n||u.pack.state]},null,8,["modelValue","rules"])],64)})),p=a(641),m=a(9524),v=a(8757),b=a(9785),h=a(8732),f=a(1857),g=a(9486),{add:y,use:x,pack:_,packs:w,merge:k}=(0,g.bU)(),O=n=>{(0,g.D$)(n),x(n)};(0,g.IH)("zh-CN",h.Z),(0,g.IH)("en-US",f.Z),y("zh-CN",{basicUsage:"基本使用",customColor:"自定义颜色",notAvailable:"不可用",size:"不同大小",loading:"加载状态",validateValue:"值的校验",text:"是否打开开关",state:"错误！"}),y("en-US",{basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"});var j=a(6125);function z(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function P(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){T(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function T(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}const C={name:"SwitchExample",components:{[v.Z.name]:v.Z,[b.Z.name]:b.Z,AppType:m.Z},setup(){var n=(0,p.qj)({value:!0,value1:!0,value2:!0,value3:!0,value4:!0});return(0,j.jS)(O),P(P({},(0,p.BK)(n)),{},{pack:_})}};var Z=a(6062),E=a.n(Z),V=a(5593);E()(V.Z,{insert:"head",singleton:!1}),V.Z.locals,C.render=u,C.__scopeId="data-v-6a5c75cc";const S=C}}]);