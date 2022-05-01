import{_ as t,i as c,o,c as p,a as s,m as e,p as n,y as a}from"./elevation.4b2b848a.js";const i={components:{}},h={class:"varlet-site-doc"},r=s("h1",null,"Elevation",-1),d=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[a("The component library provides a shadow elevation effect based on the "),s("code",null,"Material"),a(" specification to represent the dimensionality of an element.")])],-1),j={class:"card"},m=s("h3",null,"Import Style",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// css"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.css'"),a(`
`),s("span",{class:"hljs-comment"},"// less"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.less'"),a(`
`)])],-1),v={class:"card"},u=s("h3",null,"Basic Usage",-1),g=s("p",null,[a("Shadows are divided into "),s("code",null,"0-24"),a(" levels, and the higher the level, the higher the altitude.")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-space"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"elevation-example-list"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"[16, 16]"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(`
      `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"elevation-example-item"'),a(`
      `),s("span",{class:"hljs-attr"},":class"),a("="),s("span",{class:"hljs-string"},'"`var-elevation--${e - 1}`"'),a(`
      `),s("span",{class:"hljs-attr"},"v-for"),a("="),s("span",{class:"hljs-string"},'"e in 25"'),a(`
      `),s("span",{class:"hljs-attr"},":key"),a("="),s("span",{class:"hljs-string"},'"e"'),a(`
    >`)]),a(`
      {{ e - 1 }}
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-space"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".elevation-example-list"),a(` {
  `),s("span",{class:"hljs-attribute"},"margin-top"),a(": "),s("span",{class:"hljs-number"},"8px"),a(),s("span",{class:"hljs-meta"},"!important"),a(`;
}

`),s("span",{class:"hljs-selector-class"},".elevation-example-item"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"25vw"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"25vw"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1);function y(x,b,w,k,$,B){const l=c("var-site-code-example");return o(),p("div",h,[r,d,s("div",j,[m,e(l,{"playground-ignore":""},{default:n(()=>[_]),_:1})]),s("div",v,[u,g,e(l,null,{default:n(()=>[f]),_:1})])])}var S=t(i,[["render",y]]);export{S as default};
