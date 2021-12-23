import{_ as r}from"./elevation.83e98fef.js";import{e as c,o as n,c as o,a as s,i as l,j as e,m as t,S as d}from"./vendor.8243c41e.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"Progress",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Display the current progress of an operation flow.")],-1),g={class:"card"},u=s("h3",null,"Install",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Progress } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Progress)
`)])],-1),m={class:"card"},v=s("h3",null,"Basic Usage",-1),f=s("p",null,[t("Set the current progress through the "),s("code",null,"value"),t(" attribute.")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"20"'),t(),s("span",{class:"hljs-attr"},":track"),t("="),s("span",{class:"hljs-string"},'"false"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},":track"),t("="),s("span",{class:"hljs-string"},'"false"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"100"'),t(),s("span",{class:"hljs-attr"},":track"),t("="),s("span",{class:"hljs-string"},'"false"'),t(" />")]),t(`
`)])],-1),y={class:"card"},k=s("h3",null,"Show Label",-1),w=s("p",null,[t("The label is displayed through the "),s("code",null,"label"),t(" attribute. The label is the percentage of progress by default. You can use the slot to insert custom content.")],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"label"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"30"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"label"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"value"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"label"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"100"'),t(">")]),t("success"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-progress"),t(">")]),t(`
`)])],-1),z={class:"card"},C=s("h3",null,"Custom Style",-1),P=s("p",null,[t("Set the line width, progress bar color, track color and ripple loading effect through the attributes of "),s("code",null,"line-width"),t(", "),s("code",null,"color"),t(", "),s("code",null,"track-color"),t(" and "),s("code",null,"ripple"),t(".")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"30"'),t(),s("span",{class:"hljs-attr"},"line-width"),t("="),s("span",{class:"hljs-string"},'"8"'),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#ff9f00"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"60"'),t(),s("span",{class:"hljs-attr"},"line-width"),t("="),s("span",{class:"hljs-string"},'"8"'),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#ff9f00"'),t(),s("span",{class:"hljs-attr"},"track-color"),t("="),s("span",{class:"hljs-string"},'"#f5cb90"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"80"'),t(),s("span",{class:"hljs-attr"},"ripple"),t(),s("span",{class:"hljs-attr"},"line-width"),t("="),s("span",{class:"hljs-string"},'"8"'),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#ff9f00"'),t(),s("span",{class:"hljs-attr"},"track-color"),t("="),s("span",{class:"hljs-string"},'"#f5cb90"'),t(" />")]),t(`
`)])],-1),V={class:"card"},D=s("h3",null,"Progress circle",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"mode"),t("="),s("span",{class:"hljs-string"},'"circle"'),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"30"'),t(),s("span",{class:"hljs-attr"},"line-width"),t("="),s("span",{class:"hljs-string"},'"5"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"56"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"mode"),t("="),s("span",{class:"hljs-string"},'"circle"'),t(),s("span",{class:"hljs-attr"},"label"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"line-width"),t("="),s("span",{class:"hljs-string"},'"5"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"56"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"mode"),t("="),s("span",{class:"hljs-string"},'"circle"'),t(),s("span",{class:"hljs-attr"},"label"),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"100"'),t(),s("span",{class:"hljs-attr"},"line-width"),t("="),s("span",{class:"hljs-string"},'"5"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"56"'),t(" />")]),t(`
`)])],-1),T={class:"card"},A=s("h3",null,"Hide Track",-1),B=s("p",null,[t("Use "),s("code",null,"track"),t(" prop to hide track.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-progress"),t(),s("span",{class:"hljs-attr"},"mode"),t("="),s("span",{class:"hljs-string"},'"circle"'),t(),s("span",{class:"hljs-attr"},":value"),t("="),s("span",{class:"hljs-string"},'"50"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"56"'),t(),s("span",{class:"hljs-attr"},":track"),t("="),s("span",{class:"hljs-string"},'"false"'),t(" />")]),t(`
`)])],-1),$=d('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>mode</code></td><td>Mode of Progress. Optional value is <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>value</code></td><td>Completion value</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td>Width of the progress bar</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td>Color of the progress bar</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>track-color</code></td><td>Color of the progress track</td><td><em>string</em></td><td><code>#d8d8d8</code></td></tr><tr><td><code>label</code></td><td>Whether the label is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>track</code></td><td>Whether the progress track is visible or not</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Loading style for progress (only supports linear progress)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Size of progress (only supports circle progress)</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td>Origin of progress (only supports circle progress)</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom label</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-ripple-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',4);function I(W,H,L,O,E,F){const a=c("var-site-code-example");return n(),o("div",p,[i,j,s("div",g,[u,l(a,null,{default:e(()=>[_]),_:1})]),s("div",m,[v,f,l(a,null,{default:e(()=>[b]),_:1})]),s("div",y,[k,w,l(a,null,{default:e(()=>[S]),_:1})]),s("div",z,[C,P,l(a,null,{default:e(()=>[x]),_:1})]),s("div",V,[D,l(a,null,{default:e(()=>[N]),_:1})]),s("div",T,[A,B,l(a,null,{default:e(()=>[U]),_:1})]),$])}var q=r(h,[["render",I]]);export{q as default};
