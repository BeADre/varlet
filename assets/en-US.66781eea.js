import{_ as a,i as n,o as d,c as l,a as t,m as c,p as o,y as s,ag as r}from"./elevation.4b2b848a.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"IndexBar",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Hyperlinks to scroll on one page.")],-1),j={class:"card"},b=t("h3",null,"Basic Usage",-1),u=t("p",null,[s("When you click the index bar, it will automatically jump to the corresponding "),t("code",null,"IndexAnchor"),s(" anchor position.")],-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),t("span",{class:"hljs-keyword"},"const"),s(" change = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"value"),s(") =>")]),s(` {
  `),t("span",{class:"hljs-built_in"},"console"),s(`.log(value)
}

onMounted(`),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-keyword"},"for"),s(" ("),t("span",{class:"hljs-keyword"},"let"),s(" i = "),t("span",{class:"hljs-number"},"0"),s("; i < "),t("span",{class:"hljs-number"},"26"),s(`; i++) {
    list.value.push(`),t("span",{class:"hljs-built_in"},"String"),s(".fromCharCode("),t("span",{class:"hljs-number"},"65"),s(` + i))
  }
})
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-index-bar"),s(),t("span",{class:"hljs-attr"},"duration"),s("="),t("span",{class:"hljs-string"},'"300"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"item in list"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-index-anchor"),s(),t("span",{class:"hljs-attr"},":index"),s("="),t("span",{class:"hljs-string"},'"item"'),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"var-index-anchor__example"'),s(">")]),s(`
        Title {{ item }}
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-index-anchor"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} Text"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} Text"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} Text"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-index-bar"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".var-index-anchor__example"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"42px"),s(`;
  `),t("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),t("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),t("span",{class:"hljs-attribute"},"padding"),s(": "),t("span",{class:"hljs-number"},"0"),s(),t("span",{class:"hljs-number"},"12px"),s(`;
  `),t("span",{class:"hljs-attribute"},"transition"),s(": all "),t("span",{class:"hljs-number"},"0.25s"),s(`;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#e7edf7"),s(`;
  `),t("span",{class:"hljs-attribute"},"color"),s(": "),t("span",{class:"hljs-number"},"#2e67ba"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>IndexBar Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>Whether to enable anchor sticky top</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>Anchor offset top when sticky</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide anchor list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>Index character highlight color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>Animation duration</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>index</code></td><td>Index</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>IndexBar Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Emitted when an index is clicked</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>IndexAnchor Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom index character</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get IndexBar instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>scroll to target element</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',6);function x(y,_,f,k,S,w){const e=n("var-site-code-example");return d(),l("div",i,[p,m,t("div",j,[b,u,c(e,null,{default:o(()=>[g]),_:1})]),v])}var B=a(h,[["render",x]]);export{B as default};
