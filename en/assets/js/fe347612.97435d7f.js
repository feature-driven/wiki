"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[531],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return m}});var r=n(3117),a=n(102),i=n(7294),o=n(4137),s=n(2511),c=n(7130),p=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return i.createElement("div",null,i.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),i.createElement(s.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),i.createElement(s.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),i.createElement(s.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},l=["components"],u={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(p,{ticket:n.ticket,mdxType:"WIP"}))))}m.isMDXComponent=!0},6100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(4137)),o=n(6889),s=["components"],c={sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},p="Types",l={unversionedId:"guides/examples/types",id:"guides/examples/types",isDocsHomePage:!1,title:"Types",description:"The types are different",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/types.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/types",permalink:"/en/docs/guides/examples/types",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/types.mdx",tags:[],version:"current",lastUpdatedAt:1635626248,formattedLastUpdatedAt:"10/30/2021",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Auth",permalink:"/en/docs/guides/examples/auth"},next:{title:"Browser API",permalink:"/en/docs/guides/examples/browser-api"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"types"},"Types"),(0,i.kt)(o.ZP,{ticket:"179",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"The types are different")),(0,i.kt)("p",{parentName:"blockquote"},"This may be as a utility type (",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe"),") and subject area (Tls Contract, Camera, ...)"),(0,i.kt)("p",{parentName:"blockquote"},"1) what refers to The subject area is usually better to put in the shared/api (especially when there is a code generation in one place)\n(for entities such spraying PTS released)\n2) Common service types that you can segelerite - same-react-app-env.d.ts"),(0,i.kt)("p",{parentName:"blockquote"},"3) And if you have service types and you need to import right everywhere, then it's not critical especially, you can also put it in shared, you can also put it next to react-app.env.dts"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/3879"},"https://t.me/feature_sliced/3879")),(0,i.kt)("p",{parentName:"blockquote"},"4) It makes sense to store normalized types for entities in entities"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/4513"},"https://t.me/feature_sliced/4513"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/3877"},"https://t.me/feature_sliced/3877"))))}d.isMDXComponent=!0}}]);