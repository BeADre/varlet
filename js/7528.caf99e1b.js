(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7528],{7528:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});var d=e(7875),a={class:"varlet-site-doc"},c=(0,d.uE)('<h1>计数器</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Counter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Counter)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)\n\n    <span class="hljs-keyword">return</span> { value }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>设置取值范围</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>设置步长</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>保留小数</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:decimal-length</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>设置尺寸</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>\n  <span class="hljs-attr">input-text-size</span>=<span class="hljs-string">&quot;18px&quot;</span>\n  <span class="hljs-attr">input-width</span>=<span class="hljs-string">&quot;50px&quot;</span>\n  <span class="hljs-attr">button-size</span>=<span class="hljs-string">&quot;36px&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>禁用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>只读</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>异步变更</h3><p>在某些场景下需要等待服务器返回成功之后再执行变更。 设置<code>lazy-change</code>后会阻止组件本身的绑定值更新操作， 并注册<code>before-change</code>事件进行手动更新。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>\n  <span class="hljs-attr">lazy-change</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  @<span class="hljs-attr">before-change</span>=<span class="hljs-string">&quot;handleBeforeChange&quot;</span>\n/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)\n\n    <span class="hljs-keyword">const</span> handleBeforeChange = <span class="hljs-function">(<span class="hljs-params">value, change</span>) =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> change(value), <span class="hljs-number">500</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      value,\n      handleBeforeChange\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>字段校验</h3><p>通过传入一个校验器数组可以对值进行校验，校验器返回<code>true</code>则为校验通过。 以外的值将转换为文本作为用户提示。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>\n  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 5 || &#39;请选择大于5的值&#39;]&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n/&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>最小值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>最大值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>step</code></td><td>步长</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>decimal-length</code></td><td>保留小数位数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>input-width</code></td><td>输入框的宽度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>input-text-size</code></td><td>输入框的文字大小</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>button-size</code></td><td>按钮大小</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-increment</code></td><td>是否禁用增加</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-decrement</code></td><td>是否禁用减少</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-input</code></td><td>是否禁用输入</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>increment-button</code></td><td>是否显示增加按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>decrement-button</code></td><td>是否显示减少按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>press</code></td><td>是否开启按钮长按</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onInputChange</code> <code>onLazyChange</code> <code>onIncrement</code> <code>onDecrement</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onIncrement&#39;, &#39;onDecrement&#39;, &#39;onInputChange&#39;, &#39;onLazyChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回<code>true</code>表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(value: number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为<code>min || 0</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>变更之前(仅限lazy-change模式)触发</td><td><code>value: number, change: (value: string | number) =&gt; void</code></td></tr><tr><td><code>change</code></td><td>变更时触发</td><td><code>value: number</code></td></tr><tr><td><code>increment</code></td><td>增加时触发</td><td><code>value: number</code></td></tr><tr><td><code>decrement</code></td><td>减少时触发</td><td><code>value: number</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--counter-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-font-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--counter-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--counter-input-width</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-input-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-input-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--counter-button-size</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-button-icon-size</code></td><td><code>100%</code></td></tr><tr><td><code>--counter-disabled-color</code></td><td><code>#aaa</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger</code>)</td></tr></tbody></table></div>',16);const n={render:function(s,t){return(0,d.wg)(),(0,d.j4)("div",a,[c])}}}}]);