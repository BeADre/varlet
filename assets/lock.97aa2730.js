import{c as e}from"./index.eb1d562b.js";import{N as r,E as l,O as d,P as c,Q as k,R as m}from"./elevation.4b2b848a.js";function s(){Object.keys(e.locks).length<=0?document.body.classList.remove("var--lock"):document.body.classList.add("var--lock")}function i(n){e.locks[n]=1,s()}function o(n){delete e.locks[n],s()}function b(n,t){const{uid:f}=r();t&&l(t,a=>{a===!1?o(f):a===!0&&n()===!0&&i(f)}),l(n,a=>{t&&t()===!1||(a===!0?i(f):o(f))}),d(()=>{t&&t()===!1||n()===!0&&i(f)}),c(()=>{t&&t()===!1||n()===!0&&o(f)}),k(()=>{t&&t()===!1||n()===!0&&i(f)}),m(()=>{t&&t()===!1||n()===!0&&o(f)})}export{b as u};