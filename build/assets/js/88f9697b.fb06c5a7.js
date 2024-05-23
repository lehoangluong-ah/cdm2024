"use strict";(self.webpackChunkah_sdk_doc=self.webpackChunkah_sdk_doc||[]).push([[264],{9041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=t(4848),r=t(8453);const s={sidebar_position:3},o="Initialization",d={id:"init",title:"Initialization",description:"- A single package contains virtually everything you need to set up Chat SDK.",source:"@site/docs/init.md",sourceDirName:".",slug:"/init",permalink:"/docs/init",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/init.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/docs/changelog"},next:{title:"Chat",permalink:"/docs/category/chat"}},c={},a=[{value:"Object Parameters",id:"object-parameters",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A single package contains virtually everything you need to set up Chat SDK."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { ahSDK } from 'ahsdk';\n\n// at client-side, you initialize the Chat client with your API key\nahSDK.init({\n  apiKey: 'YOUR_API_KEY',\n  apiSecret: 'YOUR_API_SECRET',\n  environment: 'production',\n  onRefreshTokenError: () => {\n    // handle refresh token error\n  },\n});\n\n// get the instance after initialized\nconst chatClient = ahSDK.getChat();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"object-parameters",children:"Object Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Parameter"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Required"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"apiKey"}),(0,i.jsx)(n.td,{children:"The api key that provided by AHSDK"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"apiSecret"}),(0,i.jsx)(n.td,{children:"The api secret that associate with the api key"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"environment"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"production"})," or ",(0,i.jsx)(n.code,{children:"staging"})]}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onRefreshTokenError"}),(0,i.jsx)(n.td,{children:"Callback function when refresh token error"}),(0,i.jsx)(n.td,{children:"Function"}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Info",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"onRefreshTokenError"})," is optional, if not provided, the default behaviour is to throw an ",(0,i.jsx)(n.code,{children:"NaluriChatError"})," error of code 4009."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"onRefreshTokenError"})," is called when the refresh token is expired or invalid."]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);