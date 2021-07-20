(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[3299],{3299:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var l=t(7875),n={class:"varlet-site-doc"},e=(0,l.uE)('<h1>Chip</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Chip } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Chip)\n</code></pre></div><div class="card"><h3>Chip Type</h3><p>Set the type of the chip with the ‘type’ attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Waring Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span>&gt;</span>Default Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Simple Chip</h3><p>Use the <code>plain</code> property to make the chip simple.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Simple Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Non Round Chip</h3><p>To cancel fillet style of chip by setting the <code>round</code> attribute to <code>false</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Non Round Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Chip Size</h3><p>Set the chip size through the <code>size</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Large Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span>&gt;</span>Normal Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>Mini Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Block Flex</h3><p>Set the chip to block level through the <code>block</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Block Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Can Close Chip</h3><p>Set the paper to be closable through the <code>closable</code> attribute, and use the <code>close-name</code> attribute to set the closing icon style of the paper (It can only be used when <code>closeable</code> is <code>true</code>).</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">closable</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>Can Close Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> \n  <span class="hljs-attr">closable</span> \n  <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;delete&quot;</span> \n  <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show1&quot;</span> \n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show1 = false&quot;</span>&gt;</span>\n  Custom Close Icon\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">const</span> show1= ref(<span class="hljs-literal">true</span>)\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      show1\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>Custom Color</h3><p>Set the chip color through the <code>color</code> and <code>text-color</code> attributes.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span>&gt;</span>Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#009688&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#faecd8&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#e6a23c&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#faecd8&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#e6a23c&quot;</span>&gt;</span>Chip<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Add Slot</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\n  Left Slot\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;star&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\n  Right Slot\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fire&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-chip</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">plain</span>&gt;</span>\n  Left And Right Slots\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;account-circle&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cake-variant&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-chip</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Chip type, Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>Chip size, Can be set to <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>plain</code></td><td>Whether to be hollow label</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>Whether to be round label</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>block</code></td><td>Whether to be block label</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeable</code></td><td>Whether to be closed label</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-name</code></td><td>Custom Closeable TAB icon must be used when <code>Closeable</code> is <code>true</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>The label color</td><td><em>string</em></td><td><code>_</code></td></tr><tr><td><code>text-color</code></td><td>The text color takes precedence over the <code>color</code> attribute</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Chip content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>The content inserted to the left of the chip</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>The content inserted to the right of the label</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>close</code></td><td>Triggered when the Close button is clicked and can only be used when the Close button is displayed</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--chip-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--chip-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--chip-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--chip-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--chip-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--chip-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--chip-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--chip-mini-height</code></td><td><code>16px</code></td></tr><tr><td><code>--chip-small-height</code></td><td><code>24px</code></td></tr><tr><td><code>--chip-normal-height</code></td><td><code>32px</code></td></tr><tr><td><code>--chip-large-height</code></td><td><code>40px</code></td></tr><tr><td><code>--chip-round-radius</code></td><td><code>100px</code></td></tr><tr><td><code>--chip-mini-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--chip-small-padding</code></td><td><code>0 6px</code></td></tr><tr><td><code>--chip-normal-padding</code></td><td><code>0 10px</code></td></tr><tr><td><code>--chip-large-padding</code></td><td><code>0 17px</code></td></tr><tr><td><code>--chip-text-large-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--chip-text-normal-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--chip-text-small-margin</code></td><td><code>0 3px</code></td></tr><tr><td><code>--chip-text-mini-margin</code></td><td><code>0 2px</code></td></tr></tbody></table></div>',15);const c={render:function(s,a){return(0,l.wg)(),(0,l.j4)("div",n,[e])}}}}]);