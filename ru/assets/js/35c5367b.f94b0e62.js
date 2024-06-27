"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[427],{5325:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=s(6070),i=s(7468);const l={sidebar_position:3,sidebar_label:"Public API",pagination_next:"about/index"},t="\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435 API \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",o={id:"reference/public-api",title:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435 API \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",description:"\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/public-api.md",sourceDirName:"reference",slug:"/reference/public-api",permalink:"/ru/docs/reference/public-api",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/public-api.md",tags:[],version:"current",lastUpdatedAt:1719513447e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Public API",pagination_next:"about/index"},sidebar:"referenceSidebar",previous:{title:"\u0421\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b",permalink:"/ru/docs/reference/slices-segments"},next:{title:"\ud83c\udf70 \u041e \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",permalink:"/ru/docs/about/"}},d={},c=[{value:"\u0426\u0435\u043b\u0438",id:"goals",level:2},{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c\u0443 API",id:"requirements-for-the-public-api",level:2},{value:"1. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430",id:"1-access-control",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:4},{value:"\u041e\u0442\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432",id:"suspension-from-private-imports",level:5},{value:"2. \u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c",id:"2-sustainability-for-changes",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:4},{value:"\u0410\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"abstracting-from-the-implementation",level:5},{value:"3. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c",id:"3-integrability",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:4},{value:"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d",id:"name-collision",level:5},{value:"\u0413\u0438\u0431\u043a\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"flexible-use",level:5},{value:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439",id:"resolution-of-collisions",level:5},{value:"\u041e \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430\u0445",id:"about-re-exports",level:2},{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",id:"disadvantages",level:3},{value:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0443\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f",id:"possible-solutions",level:3},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435-api-\u043c\u043e\u0434\u0443\u043b\u044f-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435 API \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(n.p,{children:["\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.jsx)(n.strong,{children:"\u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044c."})]}),"\n",(0,r.jsx)(n.h2,{id:"goals",children:"\u0426\u0435\u043b\u0438"}),"\n",(0,r.jsxs)(n.p,{children:["\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 ",(0,r.jsx)(n.em,{children:"\u0440\u044f\u0434\u0430 \u0446\u0435\u043b\u0435\u0439"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,r.jsx)(n.strong,{children:"\u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043e \u043e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"})," \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"]}),"\n",(0,r.jsxs)(n.li,{children:["\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043c\u043e\u0434\u0443\u043b\u044f ",(0,r.jsx)(n.strong,{children:"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0442\u044c"})," \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"]}),"\n",(0,r.jsxs)(n.li,{children:["\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c ",(0,r.jsx)(n.strong,{children:"\u043b\u0435\u0433\u043a\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f"})," - \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043b\u043e\u043c\u0430\u044e\u0449\u0438\u0435 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044f."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'\u0414\u043e\u0441\u0442\u0438\u0447\u044c \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 (Public API), \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u0441\u043e\u0431\u043e\u0439 \u0435\u0434\u0438\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c \u043c\u043e\u0434\u0443\u043b\u044f \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0433\u043e "\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442" \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043c\u0438\u0440\u043e\u043c.'}),"\n",(0,r.jsx)(n.admonition,{title:"\u0412\u0430\u0436\u043d\u043e",type:"info",children:(0,r.jsx)(n.p,{children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0435\u0434\u0438\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0432\u0445\u043e\u0434\u0430, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0443\u044e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"\u2514\u2500\u2500 features/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0   #\xa0\n   \u2514\u2500\u2500 auth-form/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0     # \u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u0438\u0447\u0438\n            \u251c\u2500\u2500 ui/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 #\n            \u251c\u2500\u2500 model/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0#\n            \u251c\u2500\u2500 {...}/\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0#\n            \u2514\u2500\u2500 index.ts\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0# \u042d\u043d\u0442\u0440\u0438\u043f\u043e\u0438\u043d\u0442 \u0444\u0438\u0447\u0438 \u0441 \u0435\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c API\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="**/**/index.ts"',children:'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"requirements-for-the-public-api",children:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c\u0443 API"}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0432\u0435\u0441\u0442\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043c\u043e\u0434\u0443\u043b\u0435\u043c \u043a ",(0,r.jsx)(n.strong,{children:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430"})," \u0438, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c, \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f."]}),"\n",(0,r.jsx)(n.h3,{id:"1-access-control",children:"1. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["Public API \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c ",(0,r.jsx)(n.strong,{children:"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430"})," \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044f"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0414\u0440\u0443\u0433\u0438\u0435 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.jsx)(n.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0447\u0430\u0441\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044f \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ",(0,r.jsx)(n.strong,{children:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044e"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,r.jsx)(n.h5,{id:"suspension-from-private-imports",children:"\u041e\u0442\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041f\u043b\u043e\u0445\u043e"}),": \u0418\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043a \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c \u0447\u0430\u0441\u0442\u044f\u043c \u043c\u043e\u0434\u0443\u043b\u044f, \u043c\u0438\u043d\u0443\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 - \u043e\u043f\u0430\u0441\u043d\u043e, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u0440\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0435 \u043c\u043e\u0434\u0443\u043b\u044f"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'- import { Form } from "features/auth-form/components/view/form"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0425\u043e\u0440\u043e\u0448\u043e:"})," API \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e\u0435 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u043e\u0435, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443 \u043c\u043e\u0434\u0443\u043b\u044f \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0443\u0436\u043d\u043e \u0434\u0443\u043c\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043b\u043e\u043c\u0430\u0442\u044c Public API \u043f\u0440\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0435"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'+ import { AuthForm } from "features/auth-form"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-sustainability-for-changes",children:"2. \u0423\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c"}),"\n",(0,r.jsxs)(n.p,{children:["Public API \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,r.jsx)(n.strong,{children:"\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c"})," \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0434\u0443\u043b\u044f"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043b\u043e\u043c\u0430\u044e\u0449\u0438\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f, \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0442\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 Public API"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,r.jsx)(n.h5,{id:"abstracting-from-the-implementation",children:"\u0410\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"}),"\n",(0,r.jsx)(n.p,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044e Public API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041f\u043b\u043e\u0445\u043e:"})," \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0438\u0447\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u0442\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0432\u043e \u0432\u0441\u0435\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'- import { Form } from "features/auth-form/ui/form"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0425\u043e\u0440\u043e\u0448\u043e:"}),' \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0444\u0438\u0447\u0438 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0435\u0451 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044e\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443, \u0432\u043d\u0435\u0448\u043d\u0438\u0435 "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438" \u0444\u0438\u0447\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u0440\u0430\u0434\u0430\u044e\u0442 \u043e\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0438\u0447\u0438']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'+ import { AuthForm } from "features/auth-form"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-integrability",children:"3. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c"}),"\n",(0,r.jsxs)(n.p,{children:["Public API \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043f\u043e\u0441\u043e\u0431\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c ",(0,r.jsx)(n.strong,{children:"\u043b\u0435\u0433\u043a\u043e\u0439 \u0438 \u0433\u0438\u0431\u043a\u043e\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0434\u043e\u0431\u0435\u043d \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0447\u0430\u0441\u0442\u044f\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0440\u0435\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0438 \u0438\u043c\u0435\u043d"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,r.jsx)(n.h5,{id:"name-collision",children:"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041f\u043b\u043e\u0445\u043e:"})," \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/auth-form/index.ts"',children:'export { Form } from "./ui"\nexport * as model from "./model"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/post-form/index.ts"',children:'export { Form } from "./ui"\nexport * as model from "./model"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'- import { Form, model } from "features/auth-form"\n- import { Form, model } from "features/post-form"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0425\u043e\u0440\u043e\u0448\u043e:"})," \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0440\u0435\u0448\u0435\u043d\u0430 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/auth-form/index.ts"',children:'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/post-form/index.ts"',children:'export { Form as PostForm } from "./ui"\nexport * as postFormModel from "./model"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'+ import { AuthForm, authFormModel } from "features/auth-form"\n+ import { PostForm, postFormModel } from "features/post-form"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"flexible-use",children:"\u0413\u0438\u0431\u043a\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041f\u043b\u043e\u0445\u043e:"}),' \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e \u043f\u0438\u0441\u0430\u0442\u044c, \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e \u0447\u0438\u0442\u0430\u0442\u044c, "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c" \u0444\u0438\u0447\u0438 \u0441\u0442\u0440\u0430\u0434\u0430\u0435\u0442']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'- import { storeActionUpdateUserDetails } from "features/auth-form"\n- dispatch(storeActionUpdateUserDetails(...))\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0425\u043e\u0440\u043e\u0448\u043e:"}),' "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c" \u0444\u0438\u0447\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0443\u0436\u043d\u044b\u043c \u0432\u0435\u0449\u0430\u043c \u0438\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u0438 \u0433\u0438\u0431\u043a\u043e']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'+ import { authFormModel } from "features/auth-form"\n+ dispatch(authFormModel.effects.updateUserDetails(...)) // redux\n+ authFormModel.updateUserDetailsFx(...) // effector\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"resolution-of-collisions",children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439"}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d \u0434\u043e\u043b\u0436\u043d\u0430 \u0440\u0435\u0448\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0430 \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u041f\u043b\u043e\u0445\u043e:"})," \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/auth-form/index.ts"',children:'export { AuthForm } from "./ui"\nexport { authFormActions, authFormReducer } from "model"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/post-form/index.ts"',children:'export { PostForm } from "./ui"\nexport { postFormActions, postFormReducer } from "model"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0425\u043e\u0440\u043e\u0448\u043e:"})," \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0438\u043c\u0435\u043d \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/auth-form/model.ts"',children:"export { actions, reducer }\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/auth-form/index.ts"',children:'export { Form as AuthForm } from "./ui"\nexport * as authFormModel from "./model"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/post-form/model.ts"',children:"export { actions, reducer }\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="features/post-form/index.ts"',children:'export { Form as PostForm } from "./ui"\nexport * as postFormModel from "./model"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"about-re-exports",children:"\u041e \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430\u0445"}),"\n",(0,r.jsxs)(n.p,{children:["\u0412 JavaScript \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043c\u043e\u0434\u0443\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438\u0437\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0434\u0443\u043b\u044f \u0432 ",(0,r.jsx)(n.code,{children:"index"})," \u0444\u0430\u0439\u043b\u0435:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="**/**/index.ts"',children:'export { Form as AuthForm } from "./ui"\nexport * as authModel from "./model"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"disadvantages",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0431\u0430\u043d\u0434\u043b\u0435\u0440\u043e\u0432 \u0438\u0437-\u0437\u0430 \u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u043e\u0432 ",(0,r.jsx)(n.strong,{children:"\u0445\u0443\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u043e\u0434-\u0441\u043f\u043b\u0438\u0442\u0442\u0438\u043d\u0433"}),", \u0442.\u043a. ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/guides/tree-shaking/",children:"tree-shaking"})," \u043f\u0440\u0438 \u0442\u0430\u043a\u043e\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043e\u0442\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0434\u0443\u043b\u044c \u0446\u0435\u043b\u0438\u043a\u043e\u043c, \u043d\u043e \u043d\u0435 \u0435\u0433\u043e \u0447\u0430\u0441\u0442\u044c."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043c\u043f\u043e\u0440\u0442 ",(0,r.jsx)(n.code,{children:"authModel"})," \u0432 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,r.jsx)(n.code,{children:"AuthForm"})," \u0432 \u0447\u0430\u043d\u043a \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u044d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0442\u0430\u043c \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'\u041a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0430\u043d\u043a\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0434\u043e\u0440\u043e\u0436\u0435, \u0442.\u043a. \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432 \u043d\u0435\u043c, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438 \u0442\u0435, \u0447\u0442\u043e \u043f\u043e\u043f\u0430\u043b\u0438 \u0432 \u0431\u0430\u043d\u0434\u043b "\u0437\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"possible-solutions",children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0443\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"webpack"})," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b-\u0440\u0435\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u044b \u043a\u0430\u043a ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free",children:(0,r.jsx)(n.strong,{children:"side effects free"})})," - \u044d\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 ",(0,r.jsx)(n.code,{children:"webpack"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0435 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0442\u0430\u043a\u0438\u043c \u0444\u0430\u0439\u043b\u043e\u043c"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/41",children:"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) Public API \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://ru.wikipedia.org/wiki/SOLID",children:["\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b ",(0,r.jsx)(n.strong,{children:"SOLID"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://ru.wikipedia.org/wiki/GRASP",children:["\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b ",(0,r.jsx)(n.strong,{children:"GRASP"})]})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7468:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(758);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);