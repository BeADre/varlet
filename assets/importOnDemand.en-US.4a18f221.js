import{_ as t}from"./elevation.83e98fef.js";import{e as o,o as c,c as p,a as s,i as e,j as a,m as n}from"./vendor.8243c41e.js";const i={components:{}},r={class:"varlet-site-doc"},h=s("h1",null,"Import On Demand",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.")],-1),d={class:"card"},m=s("h3",null,"Manual Import",-1),j=s("p",null,[n("Each component is a "),s("code",null,"Vue plugin"),n(" and is composed of "),s("code",null,"component logic"),n(" and "),s("code",null,"style files"),n(". It is manually install and used as follows.")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),n(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`

createApp().use(Button)
`)])],-1),f={class:"card"},g=s("h3",null,"Auto Import",-1),v=s("p",null,[n("All components declared in the template are automatically scanned by the plug-in. The "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" will automatically import "),s("code",null,"component logic"),n(" and "),s("code",null,"style files"),n(" and "),s("code",null,"use components")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install plugin"),n(`
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i babel-plugin-import -D 
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),n(`
yarn add babel-plugin-import -D
`)])],-1),k=s("h4",null,"Vue Cli",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// vue.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" Components = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" { VarletUIResolver } = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`)

`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),n(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      Components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      })
    ]
  }
}
`)])],-1),w=s("h4",null,"Vite",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// vite.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" vue "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vite'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
    })
  ]
})
`)])],-1),I=s("p",null,"After completing the configuration, you can use it as follows",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n("Default Button"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),C=s("p",null,[n("Special note: Function components called outside the template cannot be scanned by the plug-in, and styles still need to be introduced manually. For example, "),s("code",null,"Snackbar"),n(" is a functional component.")],-1);function B(A,D,U,R,$,N){const l=o("var-site-code-example");return c(),p("div",r,[h,u,s("div",d,[m,j,e(l,null,{default:a(()=>[_]),_:1})]),s("div",f,[g,v,e(l,null,{default:a(()=>[y]),_:1}),k,e(l,null,{default:a(()=>[b]),_:1}),w,e(l,null,{default:a(()=>[x]),_:1}),I,e(l,null,{default:a(()=>[V]),_:1}),C])])}var q=t(i,[["render",B]]);export{q as default};
