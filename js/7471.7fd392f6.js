(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7471],{7471:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>c});var t=n(7875),l={class:"varlet-site-doc"},e=(0,t.uE)('<h1>图标</h1><div class="card"><h3>介绍</h3><p>基于字体的图标库, 也支持网络图片。 字体图标来自 <a href="https://materialdesignicons.com/">Material Design Icon</a></p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Icon)\n</code></pre></div><div class="card"><h3>图标尺寸</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;26&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>图标颜色</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;26&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>使用图片</h3><p>当传入的<code>name</code>是一个网络地址时,将会使用<code>img</code>标签以<code>cover</code>模式显示。<code>size</code>为图片的宽高。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;32&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>注册事件</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> \n  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;点击成功&#39;)&quot;</span> \n/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> { Snackbar }\n  }\n}\n</code></pre></div><div class="card"><h3>图标切换动画</h3><p>当设置了<code>transition(ms)</code>并通过图标的<code>name</code>切换图标时, 可以触发切换动画。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> \n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>\n  <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> \n  <span class="hljs-attr">:transition</span>=<span class="hljs-string">&quot;300&quot;</span> \n  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;30&quot;</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle&quot;</span>\n/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> name = ref(<span class="hljs-string">&#39;information&#39;</span>)\n    \n    <span class="hljs-keyword">const</span> toggle = <span class="hljs-function">() =&gt;</span> {\n      name.value = name.value === <span class="hljs-string">&#39;information&#39;</span> \n        ? <span class="hljs-string">&#39;checkbox-marked-circle&#39;</span> \n        : <span class="hljs-string">&#39;information&#39;</span>\n    }\n    \n    <span class="hljs-keyword">return</span> {\n      name,\n      toggle\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>自定义图标库</h3><p>首先您需要设置您自己的字体，并引入到您的项目。 这里假设扩展一个名为<code>my-icons</code>的字体。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-comment">/* 设置字体 */</span>\n<span class="hljs-keyword">@font-face</span> {\n  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&quot;my-icons&quot;</span>;\n  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.eot&quot;</span>);\n  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.eot&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;embedded-opentype&quot;</span>), \n    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.woff2&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;woff2&quot;</span>), \n    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.woff&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;woff&quot;</span>), \n    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.ttf&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;truetype&quot;</span>);\n  <span class="hljs-attribute">font-weight</span>: normal;\n  <span class="hljs-attribute">font-style</span>: normal;\n}\n\n<span class="hljs-comment">/* 字体样式 */</span>\n<span class="hljs-selector-class">.my-icon--set</span>,\n<span class="hljs-selector-class">.my-icon--set</span><span class="hljs-selector-pseudo">::before</span> {\n  <span class="hljs-attribute">position</span>: relative;\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">font</span>: normal normal normal <span class="hljs-number">14px</span>/<span class="hljs-number">1</span> <span class="hljs-string">&quot;my-icons&quot;</span>;\n  <span class="hljs-attribute">font-size</span>: inherit;\n  <span class="hljs-attribute">text-rendering</span>: auto;\n  <span class="hljs-attribute">-webkit-font-smoothing</span>: antialiased;\n}\n\n<span class="hljs-comment">/* 字体名称映射码点 */</span>\n<span class="hljs-selector-class">.my-icon-hot</span><span class="hljs-selector-pseudo">::before</span> {\n  <span class="hljs-attribute">content</span>: <span class="hljs-string">&quot;\\F000&quot;</span>;\n}\n</code></pre><p>到这里你就成功的扩展了自己的图标库，<code>my-icon</code>就是你的字体<code>命名空间(namespace)</code>，您可以这样使用</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">namespace</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;hot&quot;</span> /&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>图标颜色, 只适用于字体图标</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标的命名空间, 可扩展自定义图标库</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>transition</code></td><td>过渡动画时间(毫秒)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击图标时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--@icon-size</code></td><td><code>20px</code></td></tr></tbody></table></div>',13);const c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",l,[e])}}}}]);