"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4386],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return d}});var r=n(3117),o=n(102),i=n(7294),a=n(4137),s=n(2511),c=n(7130),l=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return i.createElement("div",null,i.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),i.createElement(s.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),i.createElement(s.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),i.createElement(s.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(l,{ticket:n.ticket,mdxType:"WIP"}))))}d.isMDXComponent=!0},7550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=n(6889),s=["components"],c={sidebar_position:9,sidebar_class_name:"sidebar-item--wip"},l="Monorepositories",u={unversionedId:"guides/monorepo",id:"guides/monorepo",isDocsHomePage:!1,title:"Monorepositories",description:"About applicability for mono repositories, about bff, about microapps",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/monorepo.mdx",sourceDirName:"guides",slug:"/guides/monorepo",permalink:"/en/docs/guides/monorepo",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/monorepo.mdx",tags:[],version:"current",lastUpdatedAt:1635626248,formattedLastUpdatedAt:"10/30/2021",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"White Labels",permalink:"/en/docs/guides/white-labels"},next:{title:"Usage with NextJS",permalink:"/en/docs/guides/usage-with-nextjs"}},p=[{value:"See also",id:"see-also",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monorepositories"},"Monorepositories"),(0,i.kt)(a.ZP,{ticket:"221",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"About applicability for mono repositories, about bff, about microapps")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/50"},"(Discussion) About mono repositories and plug-ins-packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/2412"},"(Thread) About the application for a mono repository"))))}m.isMDXComponent=!0}}]);