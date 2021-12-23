import{_ as l}from"./elevation.83e98fef.js";import{e as n,o as c,c as o,a as s,i as a,j as d,S as r,m as t}from"./vendor.8243c41e.js";const i={components:{}},h={class:"varlet-site-doc"},p=s("h1",null,"Divider",-1),v=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Used to separate parts of a list or layout.")],-1),_={class:"card"},j=s("h3",null,"Install",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Divider } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Divider)
`)])],-1),u={class:"card"},g=s("h3",null,"Basic Usage",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(" />")]),t(`
`)])],-1),y={class:"card"},b=s("h3",null,"Dashed Divider",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},"dashed"),t(" />")]),t(`
`)])],-1),k={class:"card"},D=s("h3",null,"Inset Divider",-1),S=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},"inset"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},":inset"),t("="),s("span",{class:"hljs-string"},'"36"'),t(),s("span",{class:"hljs-attr"},"margin"),t("="),s("span",{class:"hljs-string"},'"36px 0"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},"inset"),t("="),s("span",{class:"hljs-string"},'"-36px"'),t(" />")]),t(`
`)])],-1),T={class:"card"},w=s("h3",null,"Vertical Divider",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("Text"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},"vertical"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("Text"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},"vertical"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("Text"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
`)])],-1),C={class:"card"},A=s("h3",null,"The Divider with description",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(),s("span",{class:"hljs-attr"},"description"),t("="),s("span",{class:"hljs-string"},'"Description"'),t(" />")]),t(`
`)])],-1),I={class:"card"},N=s("h3",null,"Custom",-1),P=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"heart-outline"'),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"margin: 0 16px; color: rgb(41, 121, 255);"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-divider"),t(">")]),t(`
`)])],-1),U=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>inset</code></td><td>Set the indentation distance, and the number plus or minus sign controls the direction of indentation. The default indentation is <code>72px</code> when <code>true</code> is passed</td><td><em>boolean | number | string</em></td><td><code>false</code></td></tr><tr><td><code>vertical</code></td><td>Whether to set divider to display vertically</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dashed</code></td><td>Whether divider is dashed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>description</code></td><td>The text description of divider</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>margin</code></td><td>Set <code>margin</code> of divider</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom content of divider</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--divider-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--divider-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--divider-text-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--divider-text-padding</code></td><td><code>0 8px</code></td></tr><tr><td><code>--divider-inset</code></td><td><code>72px</code></td></tr><tr><td><code>--divider-vertical-inset</code></td><td><code>8px</code></td></tr></tbody></table></div>',4);function $(W,z,E,H,q,F){const e=n("var-site-code-example");return c(),o("div",h,[p,v,s("div",_,[j,a(e,null,{default:d(()=>[m]),_:1})]),s("div",u,[g,a(e,null,{default:d(()=>[f]),_:1})]),s("div",y,[b,a(e,null,{default:d(()=>[x]),_:1})]),s("div",k,[D,a(e,null,{default:d(()=>[S]),_:1})]),s("div",T,[w,a(e,null,{default:d(()=>[V]),_:1})]),s("div",C,[A,a(e,null,{default:d(()=>[B]),_:1})]),s("div",I,[N,a(e,null,{default:d(()=>[P]),_:1})]),U])}var K=l(i,[["render",$]]);export{K as default};
