import{B as p,Q as i,S as h,a as g,D as u}from"./Disabled.af730757.js";import{_ as j}from"./elevation.c2941a7c.js";import{d as a,o as m,c as q,a as s,h as e,L as t,l as o}from"./vendor.ea41cd30.js";import"./Pagination.75335304.js";import"./index.d9b6be6d.js";import"./elements.1c3a8437.js";import"./shared.2d2ec151.js";import"./zIndex.c624737f.js";import"./index.510439cf.js";import"./index.931337ba.js";import"./index.8afb1785.js";import"./index.043437d0.js";import"./index.2a06e007.js";import"./provide.d55b06dc.js";import"./components.c996eb06.js";import"./en-US.64d12132.js";import"./index.ca342559.js";const b={components:{Basic:p,QuickJumper:i,SizeOption:h,ShowTotal:g,Disabled:u}},v={class:"varlet-site-doc"},f=t(`<h1>Pagination</h1><div class="card"><h3>Intro</h3><p>You may need it when you need to process large amounts of data.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Pagination } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Pagination)
</code></pre></div><div class="card"><h3>Simple Mode</h3><p>The default display mode is recommended for small-screen devices. See the mobile phone emulator on the right for a preview of the components.</p><h4>Basic Usage</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span> /&gt;</span>
</code></pre><h4>Hide Size Changer</h4><p>Use <code>show-size-changer</code> prop to hide size changer.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span> <span class="hljs-attr">:show-size-changer</span>=<span class="hljs-string">&quot;false&quot;</span>/&gt;</span>
</code></pre><h4>Show Total</h4><p>Use <code>showTatol</code> prop to show custom total text.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span>
  <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;66&quot;</span>
  <span class="hljs-attr">:show-total</span>=<span class="hljs-string">&quot;total =&gt; \`Total \${total} items\`&quot;</span>
/&gt;</span>
</code></pre><h4>Disabled</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;115&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div>`,4),_={class:"card"},y=s("h3",null,"Basic Mode",-1),w=s("p",null,[o("Set "),s("code",null,"simple"),o(" to "),s("code",null,"false"),o(" when you use medium and large screen devices.")],-1),z=s("h4",null,"Basic Usage",-1),x={class:"varlet-component-preview"},k=t(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">current</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">total</span>=<span class="hljs-string">&quot;115&quot;</span> <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre><h4>Enable page number to jump quickly</h4><p>Use <code>show-quick-jumper</code> prop to enable page number to jump quickly.</p>`,3),S={class:"varlet-component-preview"},D=t(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span>
  <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span>
  <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span> 
  <span class="hljs-attr">show-quick-jumper</span>
/&gt;</span>
</code></pre><h4>Size Option</h4><p>Use <code>show-size-changer</code> hide size changer and use <code>size-option</code> prop set the number of <code>size</code> that can be chosen.</p>`,3),T={class:"varlet-component-preview"},U=t(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span> <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:show-size-changer</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span> <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:size-option</span>=<span class="hljs-string">&quot;[10, 20, 30, 40]&quot;</span> /&gt;</span>
</code></pre><h4>Show Total</h4>`,2),$={class:"varlet-component-preview"},B=t(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span>
  <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span>
  <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:show-total</span>=<span class="hljs-string">&quot;total =&gt; \`Total \${total} items\`&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span>
  <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span>
  <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:show-total</span>=<span class="hljs-string">&quot;(total, range) =&gt; \`Total \${total}, current \${range[0]}-\${range[1]}\`&quot;</span>
/&gt;</span>
</code></pre><h4>Disabled</h4>`,2),C={class:"varlet-component-preview"},P=t(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;120&quot;</span> <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre>`,1),N=t('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>current</code></td><td>Current page number</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>size</code></td><td>Number of data items per page</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>total</code></td><td>Total number of data items</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>simple</code></td><td>Whether to use simple mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Disable pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>show-size-changer</code></td><td>Whether to show <code>size</code> select</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>show-quick-jumper</code></td><td>Whether you can jump to pages directly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max-pager-count</code></td><td>Number of buttons displayed between ellipses</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>size-option</code></td><td>Specify the sizeChanger options</td><td><em>number[]</em></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td><code>show-total</code></td><td>Show page item\u2019s title</td><td><em>function(total, range)</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Callback after <code>current</code> or <code>size</code> changes</td><td><code>current: number</code> <br><code>size: number</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prev</code></td><td>Content of previous button</td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Content of next button</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pagination-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--pagination-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-active-bg-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-hover-bg-color</code></td><td><code>rgb(245, 245, 245)</code></td></tr><tr><td><code>--pagination-total-margin</code></td><td><code>0 12px</code></td></tr><tr><td><code>--pagination-total-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--pagination-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-margin</code></td><td><code>0 6px</code></td></tr><tr><td><code>--pagination-item-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--pagination-list-bg-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-list-active-bg-color</code></td><td><code>#dbe4fd</code></td></tr><tr><td><code>--pagination-list-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-input-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-simple-padding</code></td><td><code>0 0 2px 0</code></td></tr><tr><td><code>--pagination-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--pagination-bg-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--pagination-size-line-height</code></td><td><code>24px</code></td></tr></tbody></table></div>',5);function V(E,I,A,W,H,M){const n=a("basic"),d=a("quick-jumper"),l=a("size-option"),c=a("show-total"),r=a("disabled");return m(),q("div",v,[f,s("div",_,[y,w,z,s("div",x,[e(n)]),k,s("div",S,[e(d)]),D,s("div",T,[e(l)]),U,s("div",$,[e(c)]),B,s("div",C,[e(r)]),P]),N])}var ds=j(b,[["render",V]]);export{ds as default};
