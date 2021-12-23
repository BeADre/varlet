import{_ as h,n as S}from"./elevation.83e98fef.js";import{d as b,b as m,o as a,c as i,p as n,G as _,h as o,a as l,n as d,F as c,k as y,m as z,t as w}from"./vendor.8243c41e.js";function V(e){return["circle","wave","cube","rect","disappear"].includes(e)}function k(e){return["normal","mini","small","large"].includes(e)}const B={type:{type:String,default:"circle",validator:V},radius:{type:[String,Number]},size:{type:String,default:"normal",validator:k},color:{type:String,default:"currentColor"},description:{type:String},loading:{type:Boolean,default:!1}};const C=b({name:"VarLoading",props:B,setup(e,{slots:t}){const p={wave:5,cube:4,rect:8,disappear:3},v={mini:9,small:12,normal:15,large:18},g=m(()=>e.radius?S(e.radius):v[e.size]),f=m(()=>{var s;return((s=t.default)==null?void 0:s.call(t))?e.loading:!0});return{loadingTypeDict:p,getRadius:g,isShow:f}}}),L={class:"var-loading"},N={key:0,class:"var-loading__circle"},D=l("svg",{viewBox:"25 25 50 50"},[l("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),R=[D];function T(e,t,p,v,g,f){return a(),i("div",L,[e.$slots.default?(a(),i("div",{key:0,class:n(["var-loading__content",[e.loading?"var-loading__content--active":null]])},[_(e.$slots,"default")],2)):o("v-if",!0),e.isShow?(a(),i("div",{key:1,class:n(["var--box var-loading__body",[e.$slots.default?"var-loading__inside":null]])},[e.type==="circle"?(a(),i("div",N,[l("span",{class:"var-loading__circle-block",style:d({width:e.getRadius*2+"px",height:e.getRadius*2+"px",color:e.color})},R,4)])):o("v-if",!0),(a(!0),i(c,null,y(e.loadingTypeDict,(s,r)=>(a(),i(c,{key:r},[e.type===r?(a(),i("div",{key:0,class:n(`var-loading__${r} var-loading__${r}-${e.size}`)},[(a(!0),i(c,null,y(s,$=>(a(),i("div",{key:$+r,style:d({backgroundColor:e.color}),class:n(`var-loading__${r}-item var-loading__${r}-item-${e.size}`)},null,6))),128))],2)):o("v-if",!0)],64))),128)),e.$slots.description||e.description?(a(),i("div",{key:1,class:n(["var-loading__description",`var-loading__description--${e.size}`]),style:d({color:e.color})},[_(e.$slots,"description",{},()=>[z(w(e.description),1)])],6)):o("v-if",!0)],2)):o("v-if",!0)])}var u=h(C,[["render",T]]);u.install=function(e){e.component(u.name,u)};export{u as L,B as p};
