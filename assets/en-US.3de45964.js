import{_ as n,i as c,o as d,c as o,a,m as e,p as l,ag as r,y as s}from"./elevation.4b2b848a.js";const p={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"ImagePreview",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Image-Preview, Support double-click magnification, Support function call and component call two ways.")],-1),m={class:"card"},g=a("h3",null,"Function Call",-1),v=a("h4",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" preview = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  ImagePreview(`),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Basic Use"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=a("h4",null,"Call Back",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" preview = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  ImagePreview({
    `),a("span",{class:"hljs-attr"},"images"),s(`: [
      `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`,
      `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat2.jpg'"),s(`
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"index"),s(")")]),s(` {
      `),a("span",{class:"hljs-built_in"},"console"),s(`.log(index)
    }
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Handle callback function"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=a("h2",null,"Component Call",-1),_={class:"card"},k=a("h3",null,"Basic Use",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Basic Use
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},S=a("h3",null,"Specify initial position",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
 `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Specify initial position
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},"current"),s("="),a("span",{class:"hljs-string"},'"https://varlet-varletjs.vercel.app/cat2.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},T=a("h3",null,"Display the close button",-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
    `),a("span",{class:"hljs-attr"},"block"),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Display the close button
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},"closeable"),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},U=a("h3",null,"Listen for close event",-1),L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat2.jpg'"),s(`,
])
`),a("span",{class:"hljs-keyword"},"const"),s(" handleCloseEvent = "),a("span",{class:"hljs-function"},"() =>"),s(" Snackbar("),a("span",{class:"hljs-string"},"'The shutdown event was triggered.'"),s(`);
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Listen for close event
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(` 
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},'"handleCloseEvent"'),s(` 
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},B=a("h3",null,"Show extra slots",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" menuShow = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet-varletjs.vercel.app/cat2.jpg'"),s(`,
])
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = [
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'operate'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wrench'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'operate'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wrench'"),s(`
  }
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
     `),a("span",{class:"hljs-attr"},"block"),s(`
     `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
     @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Show extra slots
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(`
        `),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(`
        `),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"22"'),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"menuShow = true"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"menuShow"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-image-preview"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slot</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra slots</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table></div>',6);function V(N,R,$,A,O,H){const t=c("var-site-code-example");return d(),o("div",h,[i,j,a("div",m,[g,v,e(t,null,{default:l(()=>[u]),_:1}),w,e(t,null,{default:l(()=>[b]),_:1})]),f,a("div",_,[k,e(t,null,{default:l(()=>[y]),_:1})]),a("div",x,[S,e(t,null,{default:l(()=>[C]),_:1})]),a("div",P,[T,e(t,null,{default:l(()=>[I]),_:1})]),a("div",D,[U,e(t,null,{default:l(()=>[L]),_:1})]),a("div",z,[B,e(t,null,{default:l(()=>[W]),_:1})]),E])}var q=n(p,[["render",V]]);export{q as default};
