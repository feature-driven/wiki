"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8874],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6889:function(e,t,r){r.d(t,{ZP:function(){return d}});var n=r(3117),o=r(102),i=r(7294),a=r(4137),s=r(2511),l=r(7130),c=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return i.createElement("div",null,i.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),i.createElement(s.Z,{to:t},(0,l.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),i.createElement(s.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),i.createElement(s.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u=["components"],p={toc:[]};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(c,{ticket:r.ticket,mdxType:"WIP"}))))}d.isMDXComponent=!0},2431:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(3117),o=r(102),i=(r(7294),r(4137)),a=r(6889),s=["components"],l={sidebar_position:1,sidebar_class_name:"sidebar-item--wip"},c="Cross-imports",u={unversionedId:"guides/handbook/cross-imports",id:"guides/handbook/cross-imports",isDocsHomePage:!1,title:"Cross-imports",description:"Cross-imports appear when the layer or abstraction begins to take too much responsibility than it should. That is why the methodology identifies new layers that allow you to uncouple these cross-imports",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/handbook/cross-imports.mdx",sourceDirName:"guides/handbook",slug:"/guides/handbook/cross-imports",permalink:"/en/docs/guides/handbook/cross-imports",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/handbook/cross-imports.mdx",tags:[],version:"current",lastUpdatedAt:1635626248,formattedLastUpdatedAt:"10/30/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"SSR",permalink:"/en/docs/guides/examples/ssr"},next:{title:"Desegemented",permalink:"/en/docs/guides/handbook/desegmented"}},p=[{value:"See also",id:"see-also",children:[],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cross-imports"},"Cross-imports"),(0,i.kt)(a.ZP,{ticket:"220",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Cross-imports appear when the layer or abstraction begins to take too much responsibility than it should. That is why the methodology identifies new layers that allow you to uncouple these cross-imports")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4515"},"(Thread) About the supposed inevitability of cross-ports")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3678"},"(Thread) About resolving cross-ports in entities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3287"},"(Thread) About cross-imports and responsibility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4021"},"(Thread) About imports between segments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3618"},"(Thread) About cross-imports inside shared"))))}m.isMDXComponent=!0}}]);