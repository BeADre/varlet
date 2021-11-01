import{_ as t}from"./elevation.c2941a7c.js";import{o as s,c as e,L as a}from"./vendor.ea41cd30.js";const d={components:{}},o={class:"varlet-site-doc"},n=a(`<h1>Snackbar</h1><div class="card"><h3>Intro</h3><p>Used to display a quick message to a user.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Snackbar)
</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [Snackbar.Component.name]: Snackbar
  }
}
</code></pre></div><div class="card"><h3>Component Call</h3><h4>Basic Usage</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = !show&quot;</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span> &quot;Hello, I&#39;m a snackbar&quot; <span class="hljs-tag">&lt;/<span class="hljs-name">var-snackbar</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      show
    }
  }
}
</code></pre><h4>Multi-Line</h4><p>Use <code>vertical</code> prop to change arrangement of <code>snackbar</code>. Use <code>Custom slot</code> create action of right.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:vertical</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  &quot;Hello, I&#39;m a snackbar&quot;
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = !show&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-snackbar</span>&gt;</span>
</code></pre><h4>Bottom Display</h4><p>Use <code>position</code> prop to change position of <code>snackbar</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  &quot;Hello, I&#39;m a snackbar&quot;
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-snackbar</span>&gt;</span>
</code></pre><h4>Display Duration</h4><p>Use <code>duration</code> prop to change display duration of <code>snackbar</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;1000&quot;</span>&gt;</span> &quot;Hello, I&#39;m a snackbar&quot; <span class="hljs-tag">&lt;/<span class="hljs-name">var-snackbar</span>&gt;</span>
</code></pre><h4>Forbid Click</h4><p>Use <code>forbid-click</code> prop to control whether penetrating clicks are forbidden.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-snackbar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:forbid-click</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span> &quot;Hello, I&#39;m a snackbar&quot; <span class="hljs-tag">&lt;/<span class="hljs-name">var-snackbar</span>&gt;</span>
</code></pre></div><div class="card"><h3>Function Call</h3><h4>Basic Usage</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Snackbar(<span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>)
</code></pre><h4>Display Duration</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Snackbar({
 <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>,
 <span class="hljs-attr">duration</span>: <span class="hljs-number">1000</span>
})
</code></pre><h4>Bottom Display</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Snackbar({
 <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>,
 <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>
})
</code></pre></div><div class="card"><h3>Snackbar Type</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Snackbar.success(<span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>)
Snackbar.warning(<span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>)
Snackbar.info(<span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>)
Snackbar.error(<span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>)
Snackbar.loading(<span class="hljs-string">&quot;Hello, I&#39;m a snackbar&quot;</span>)
</code></pre></div><div class="card"><h3>Singleton</h3><p>When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Snackbar.allowMultiple(<span class="hljs-literal">true</span>)

<span class="hljs-keyword">const</span> snackbar1 = Snackbar(<span class="hljs-string">&#39;First Snackbar&#39;</span>);
<span class="hljs-keyword">const</span> snackbar1 = Snackbar.success(<span class="hljs-string">&#39;Second Snackbar&#39;</span>);

snackbar1.clear();
snackbar1.clear();
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>whether to penetrating clicks are forbidden</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Snackbar to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> content message</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> action of right</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>The <code>clear</code> method on the instance can close the current instance, and the <code>clear</code> method on the Snackbar can close all message bars.</p><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th><th>Return value</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>Show snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.success</code></td><td>Show success snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.info</code></td><td>Show info snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>Show warning snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.error</code></td><td>Show error snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>Show loading snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>Close snackbar</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>Whether to allow multi instance patterns</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Snackbar Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration (Need to be closed manually when the <code>type</code> prop is <code>loading</code>)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>whether to penetrating clicks are forbidden (Value is <code>true</code> when the <code>type</code> prop is <code>loading</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 16px 0 0</code></td></tr></tbody></table></div>`,15),c=[n];function r(l,p,h,i,g,m){return s(),e("div",o,c)}var u=t(d,[["render",r]]);export{u as default};
