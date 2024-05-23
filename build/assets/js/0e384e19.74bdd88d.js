"use strict";(self.webpackChunkah_sdk_doc=self.webpackChunkah_sdk_doc||[]).push([[976],{1512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const r={sidebar_position:1},o="API Documentation",a={id:"intro",title:"API Documentation",description:"Base URL",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Changelog",permalink:"/docs/changelog"}},d={},c=[{value:"Base URL",id:"base-url",level:2},{value:"API Authorization",id:"api-authorization",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"api-documentation",children:"API Documentation"}),"\n",(0,s.jsx)(n.h2,{id:"base-url",children:"Base URL"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Environment"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"URL"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Development"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://dev-ah.sdk.io/api",children:"https://dev-ah.sdk.io/api"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Staging"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://stg-ah.sdk.io/api",children:"https://stg-ah.sdk.io/api"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Production"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://pro-ah.sdk.io/api",children:"https://pro-ah.sdk.io/api"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"api-authorization",children:"API Authorization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All API endpoints require a valid Bearer access token in order to access."}),"\n",(0,s.jsx)(n.li,{children:"To start accessing the API, you will need to have the following credentials:"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Credential"})})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"Tenant service ID"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"Tenant audience name"})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"Tenant private key"})})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The credentials above will be provided by AHSDK. To start generating the Bearer access token, refer to the example below."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import * as jwt from 'jsonwebtoken';\n\n// Generate jwt token using RS256\nconst payload = { ...some_data };\nconst signOptions = {\n  issuer: 'tenant-service-id',\n  subject: 'string',\n  audience: 'tenant-audience',\n  expiresIn: '1y',\n  algorithm: 'RS256',\n};\nconst token = jwt.sign(payload, PRIVATE_KEY, signOptions);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);