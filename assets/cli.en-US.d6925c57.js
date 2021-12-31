import{_ as a}from"./elevation.111980a5.js";import{e as c,o as d,c as r,a as t,i as l,j as n,S as o,m as s}from"./vendor.9810b84e.js";const i={components:{}},h={class:"varlet-site-doc"},p=o('<h1>@varlet/cli</h1><p>The out-of-the-box <code>Vue3 component library</code> rapid prototyping tool provides a series of commands and tools to solve the problem of component library development</p><div class="card"><h3>Feature</h3><ul><li>1.Out-of-the-box component library development environment</li><li>2.Out-of-the-box component library compilation tool, support exporting <code>esm</code> and <code>umd</code> two module codes</li><li>3.Component library document site based on configuration files, support Baidu statistics and theme customization</li><li>4.Supports <code>single file component (sfc)</code> and <code>tsx, jsx</code> two styles of component library writing styles</li><li>5.Code inspection tool out of the box</li><li>6.Unit testing tools out of the box</li><li>7.Out-of-the-box code publishing tool, publish to npm and github, and automatically generate a change log</li><li>8.Support <code>Typescript</code></li><li>9.Support <code>Dark Mode</code></li><li>10.Based on <code>pnpm</code></li></ul></div>',3),u={class:"card"},m=t("h3",null,"Quickstart",-1),g=t("p",null,[t("code",null,"@varlet/cli"),s(" has built-in "),t("code",null,"single file component (sfc)"),s(" and "),t("code",null,"tsx, jsx"),s(" two styles of component library project templates, which can be directly generated by the "),t("code",null,"gen"),s(" command. To help users directly enter the development of the component itself, it is recommended to use "),t("code",null,"pnpm"),s(" as a package management tool.")],-1),j=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"},[s(" Install "),t("span",{class:"hljs-built_in"},"command"),s(" line tools")]),s(`
pnpm add @varlet/cli -g
`),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"},[s(" Use the gen "),t("span",{class:"hljs-built_in"},"command"),s(" to generate the project")]),s(`
varlet-cli gen projectName
cd projectName
pnpm install
pnpm dev
`)])],-1),_=t("p",null,"Then by simply modifying some basic information of the component library template, you can start the development of the component library",-1),f=t("h2",null,"Advanced customization",-1),b={class:"card"},y=o("<h3>Configuration file</h3><p>The <code>varlet.config.js</code> in the project root directory is used to manage the specific details of the entire component library project</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>name</code></td><td>Full name of the component library</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, Will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the document</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the document</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Document default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the right mobile phone preview</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themes</code></td><td>Document themes</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>darkThemes</code></td><td>Document dark mode themes</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Document code snippet style related</td><td><em>SiteHighlight</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>SiteAnalysis</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>SitePC</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile document structure configuration</td><td><em>SiteMobile</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>Module compatible config</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>Module Compatible</h4><p>Some external dependencies may need to be compatible with module syntax to achieve the purpose of compiling correctly to <code>commonjs</code> and <code>esmodule</code>. For example, the wording of <code>esmodule</code> of <code>dayjs</code> is</p>",5),v=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" dayjs "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'dayjs/esm'"),s(`
`)])],-1),k=t("p",null,[s("In order to build "),t("code",null,"commonjs"),s(", the writing method is")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" * "),t("span",{class:"hljs-keyword"},"as"),s(" dayjs "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'dayjs'"),s(`
`)])],-1),w=t("p",null,[s("In the project, we embrace the first way of writing the "),t("code",null,"esmodule"),s(" module, and make the following configuration for adaptation")],-1),S=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-comment"},"// varlet.config.js"),s(`
`),t("span",{class:"hljs-built_in"},"module"),s(`.exports = {
  `),t("span",{class:"hljs-attr"},"moduleCompatible"),s(`: {
    `),t("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),s(": "),t("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),s(`
  }
}
`)])],-1),T=o('<h4>SiteThemes</h4><p>Theme variables are related, because the default theme variables may be modified from time to time, subject to the theme of the <code>varlet</code> official document</p><table><thead><tr><th>Variable</th></tr></thead><tbody><tr><td><code>color-body</code></td></tr><tr><td><code>color-bar</code></td></tr><tr><td><code>color-sub-bar</code></td></tr><tr><td><code>color-text</code></td></tr><tr><td><code>color-sub-text</code></td></tr><tr><td><code>color-border</code></td></tr><tr><td><code>color-shadow</code></td></tr><tr><td><code>color-introduce-border</code></td></tr><tr><td><code>color-primary</code></td></tr><tr><td><code>color-link</code></td></tr><tr><td><code>color-type</code></td></tr><tr><td><code>color-progress</code></td></tr><tr><td><code>color-progress-track</code></td></tr><tr><td><code>color-side-bar</code></td></tr><tr><td><code>color-side-bar-active-background</code></td></tr><tr><td><code>color-app-bar</code></td></tr><tr><td><code>color-nav-button-hover-background</code></td></tr><tr><td><code>color-pc-language-active</code></td></tr><tr><td><code>color-pc-language-active-background</code></td></tr><tr><td><code>color-mobile-cell-hover</code></td></tr><tr><td><code>color-mobile-language-active</code></td></tr><tr><td><code>color-mobile-language-active-background</code></td></tr></tbody></table><h4>SiteHighlight</h4><p>Code snippets are highlighted, based on <a href="https://highlightjs.org/">highlight.js</a></p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style</code></td><td>highlight css link</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SiteAnalysis</h4><p>Statistics related to buried points</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>baidu</code></td><td>Baidu statistics script address</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SitePC, SiteMobile</h4><p>The document structure is partly related, and the example configuration is as follows</p>',11),C=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-built_in"},"module"),s(`.exports = {
  `),t("span",{class:"hljs-attr"},"defaultLanguage"),s(": "),t("span",{class:"hljs-string"},"'en-US'"),s(`,
  `),t("span",{class:"hljs-attr"},"pc"),s(`: {
    `),t("span",{class:"hljs-attr"},"redirect"),s(": "),t("span",{class:"hljs-string"},"'/home'"),s(`,
    `),t("span",{class:"hljs-attr"},"title"),s(`: {
      `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'A components library'"),s(`,
    },
    `),t("span",{class:"hljs-attr"},"header"),s(`: {
      `),t("span",{class:"hljs-attr"},"darkMode"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"i18n"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"github"),s(": "),t("span",{class:"hljs-string"},"'https://github.com/haoziqaq/varlet'"),s(`,
    },
    `),t("span",{class:"hljs-attr"},"menu"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Develop Guide'"),s(`,
        },
        `),t("span",{class:"hljs-comment"},"// Sidebar menu directory"),s(`
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"1"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Basic Intro'"),s(`,
        },
        `),t("span",{class:"hljs-attr"},"doc"),s(": "),t("span",{class:"hljs-string"},"'home'"),s(`,
        `),t("span",{class:"hljs-comment"},"// Index the md document in the root directory of the project"),s(`
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"3"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Basic Component'"),s(`,
        },
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"1"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(`: {
          `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'Button'"),s(`,
        },
        `),t("span",{class:"hljs-attr"},"doc"),s(": "),t("span",{class:"hljs-string"},"'button'"),s(`,
        `),t("span",{class:"hljs-comment"},"// Md document in the root directory of the index component"),s(`
        `),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-number"},"2"),s(`,
      },
    ],
  },
  `),t("span",{class:"hljs-attr"},"mobile"),s(`: {
    `),t("span",{class:"hljs-attr"},"redirect"),s(": "),t("span",{class:"hljs-string"},"'/home'"),s(`,
    `),t("span",{class:"hljs-attr"},"title"),s(`: {
      `),t("span",{class:"hljs-string"},"'en-US'"),s(": "),t("span",{class:"hljs-string"},"'A components library'"),s(`,
    },
    `),t("span",{class:"hljs-attr"},"header"),s(`: {
      `),t("span",{class:"hljs-attr"},"darkMode"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"i18n"),s(": "),t("span",{class:"hljs-literal"},"null"),s(`,
      `),t("span",{class:"hljs-attr"},"github"),s(": "),t("span",{class:"hljs-string"},"'https://github.com/haoziqaq/varlet'"),s(`,
    },
  },
}
`)])],-1),D={class:"card"},N=t("h3",null,"Commands Intro",-1),B=t("h4",null,"Start the development server",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli dev
`)])],-1),U=t("h4",null,"Build documentation site",-1),I=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli build
`)])],-1),P=t("h4",null,"Preview documentation site",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli preview
`)])],-1),A=t("h4",null,"Build component library code",-1),L=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli compile
`)])],-1),O=t("h4",null,"Perform all unit tests",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli test
`)])],-1),E=t("h4",null,"Execute unit tests in watch mode",-1),q=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli test -w
or
varlet-cli test -wa
`)])],-1),F=t("h4",null,"Lint code",-1),$=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli lint
`)])],-1),G=t("h4",null,"Lint commit message",-1),R=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli commit-lint
`)])],-1),H=t("h4",null,"Generate changelog",-1),Q=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli changelog
`)])],-1),W=t("h4",null,"Release component library",-1),J=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli release
`)])],-1),K=t("h4",null,"Quickly create a component folder",-1),X=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli create <componentName>
`)])],-1),Y=t("h4",null,"Generate a project template",-1),Z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`varlet-cli gen <projectName>
`)])],-1),tt={class:"card"},st=t("h3",null,"babel",-1),et=t("p",null,[s("To configure "),t("code",null,"babel"),s(", first specify the target browser in "),t("code",null,"package.json")],-1),lt=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`{
  `),t("span",{class:"hljs-attr"},'"browserslist"'),s(`: [
    `),t("span",{class:"hljs-string"},'"Chrome >= 51"'),s(`,
    `),t("span",{class:"hljs-string"},'"iOS >= 10"'),s(`
  ]
}
`)])],-1),nt=t("p",null,[s("create "),t("code",null,"babel.config,js")],-1),ot=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-comment"},"// babel.config.js"),s(`
`),t("span",{class:"hljs-built_in"},"module"),s(`.exports = {
  `),t("span",{class:"hljs-attr"},"presets"),s(`: [
    [
      `),t("span",{class:"hljs-string"},"'@varlet/cli/preset'"),s(`,
      {
        `),t("span",{class:"hljs-attr"},"loose"),s(": "),t("span",null,"process.env"),s(".NODE_ENV === "),t("span",{class:"hljs-string"},"'compile'"),s(`,
      },
    ],
  ],
}
`)])],-1),at={class:"card"},ct=o("<h3>git and npm</h3><h4>git-hook</h4><p><code>husky</code>, <code>lint-staged</code> cooperate with <code>eslint</code>, <code>stylelint</code>, <code>varlet-cli commit-lint</code> to check before commit, <code>package.json</code> configuration is as follows</p>",3),dt=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`{
  `),t("span",{class:"hljs-attr"},'"scripts"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"prepare"'),s(": "),t("span",{class:"hljs-string"},'"husky install"'),s(`
  },
  `),t("span",{class:"hljs-attr"},'"lint-staged"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"*.{ts,tsx,js,vue,less}"'),s(": "),t("span",{class:"hljs-string"},'"prettier --write"'),s(`,
    `),t("span",{class:"hljs-attr"},'"*.{ts,tsx,js,vue}"'),s(": "),t("span",{class:"hljs-string"},'"eslint --fix"'),s(`,
    `),t("span",{class:"hljs-attr"},'"*.{vue,css,less}"'),s(": "),t("span",{class:"hljs-string"},'"stylelint --fix"'),s(`
  },
  `),t("span",{class:"hljs-attr"},'"eslintConfig"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"root"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"ignorePatterns"'),s(`: [
      `),t("span",{class:"hljs-string"},'"es/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"umd/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"site/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"public/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"src/*/__tests__/**"'),s(`,
      `),t("span",{class:"hljs-string"},'".varlet/**"'),s(`
    ],
    `),t("span",{class:"hljs-attr"},'"extends"'),s(`: [
      `),t("span",{class:"hljs-string"},'"@varlet"'),s(`
    ]
  },
  `),t("span",{class:"hljs-attr"},'"stylelint"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"extends"'),s(`: [
      `),t("span",{class:"hljs-string"},'"@varlet/stylelint-config"'),s(`
    ],
    `),t("span",{class:"hljs-attr"},'"ignoreFiles"'),s(`: [
      `),t("span",{class:"hljs-string"},'"es/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"umd/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"site/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"coverage/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"public/**"'),s(`,
      `),t("span",{class:"hljs-string"},'"highlight/**"'),s(`
    ]
  }
}
`)])],-1),rt=t("p",null,[s("create "),t("code",null,".prettierignore")],-1),it=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
`)])],-1),ht={class:"card"},pt=t("h3",null,"typescript",-1),ut=t("p",null,[s("create "),t("code",null,"tsconfig.json")],-1),mt=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s(`{
  `),t("span",{class:"hljs-attr"},'"compilerOptions"'),s(`: {
    `),t("span",{class:"hljs-attr"},'"strict"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"downlevelIteration"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"declaration"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"skipLibCheck"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"esModuleInterop"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"allowJs"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"lib"'),s(": ["),t("span",{class:"hljs-string"},'"esnext"'),s(", "),t("span",{class:"hljs-string"},'"dom"'),s(`],
    `),t("span",{class:"hljs-attr"},'"allowSyntheticDefaultImports"'),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},'"jsx"'),s(": "),t("span",{class:"hljs-string"},'"preserve"'),s(`
  }
}
`)])],-1),gt=t("h4",null,"Note before release",-1),jt=t("ul",null,[t("li",null,"1.The registry of npm must set to the official npm mirror"),t("li",null,"2.The npm must execute the login command for user login")],-1);function _t(ft,bt,yt,vt,kt,xt){const e=c("var-site-code-example");return d(),r("div",h,[p,t("div",u,[m,g,l(e,null,{default:n(()=>[j]),_:1}),_]),f,t("div",b,[y,l(e,null,{default:n(()=>[v]),_:1}),k,l(e,null,{default:n(()=>[x]),_:1}),w,l(e,null,{default:n(()=>[S]),_:1}),T,l(e,null,{default:n(()=>[C]),_:1})]),t("div",D,[N,B,l(e,null,{default:n(()=>[M]),_:1}),U,l(e,null,{default:n(()=>[I]),_:1}),P,l(e,null,{default:n(()=>[V]),_:1}),A,l(e,null,{default:n(()=>[L]),_:1}),O,l(e,null,{default:n(()=>[z]),_:1}),E,l(e,null,{default:n(()=>[q]),_:1}),F,l(e,null,{default:n(()=>[$]),_:1}),G,l(e,null,{default:n(()=>[R]),_:1}),H,l(e,null,{default:n(()=>[Q]),_:1}),W,l(e,null,{default:n(()=>[J]),_:1}),K,l(e,null,{default:n(()=>[X]),_:1}),Y,l(e,null,{default:n(()=>[Z]),_:1})]),t("div",tt,[st,et,l(e,null,{default:n(()=>[lt]),_:1}),nt,l(e,null,{default:n(()=>[ot]),_:1})]),t("div",at,[ct,l(e,null,{default:n(()=>[dt]),_:1}),rt,l(e,null,{default:n(()=>[it]),_:1})]),t("div",ht,[pt,ut,l(e,null,{default:n(()=>[mt]),_:1}),gt,jt])])}var Tt=a(i,[["render",_t]]);export{Tt as default};
