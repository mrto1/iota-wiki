"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60992],{90467:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Client Libraries",description:"Client libraries handle communications between your software and the IOTA network."},l="Client Libraries",c={unversionedId:"clients",id:"clients",title:"Client Libraries",description:"Client libraries handle communications between your software and the IOTA network.",source:"@site/content/libraries/clients.md",sourceDirName:".",slug:"/clients",permalink:"/libraries/clients",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/content/libraries/clients.md",tags:[],version:"current",lastUpdatedAt:1658264317,formattedLastUpdatedAt:"7/19/2022",frontMatter:{title:"Client Libraries",description:"Client libraries handle communications between your software and the IOTA network."},sidebar:"libraries",previous:{title:"Introduction",permalink:"/libraries/introduction"},next:{title:"Wallet Library",permalink:"/libraries/wallet"}},p={},u=[{value:"Iota.rs",id:"iotars",level:2},{value:"Iota.js",id:"iotajs",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-libraries"},"Client Libraries"),(0,i.kt)("p",null,"Client libraries handle communications between your software and the IOTA network. For example, you can use a client library\nto ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/examples/get_info"},"connect to a node"),"\n, ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/examples/simple_message"},"post a message"),"\n, or ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/examples/transaction"},"send a signed transaction"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Layered Overview",src:r(59704).Z,width:"862",height:"452"})),(0,i.kt)("h2",{id:"iotars"},"Iota.rs"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/welcome"},"iota.rs library")," is written\nin ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/getting_started/rust"},"Rust"),", and\nhas bindings for ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/getting_started/java/getting_started"},"Java"),"\n, ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/getting_started/nodejs"},"NodeJs"),"\n, ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/getting_started/python"},"Python"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/getting_started/wasm"},"Wasm"),"."),(0,i.kt)("p",null,"This library and its documentation are maintained by both IOTA Foundation and the IOTA community."),(0,i.kt)("h2",{id:"iotajs"},"Iota.js"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/iotajs/welcome"},"iota.js library")," is implemented\nin ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", which gives it a strongly typed objects to send and receive from the\nAPI and makes it convenient for both ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," and browser environments."))}d.isMDXComponent=!0},59704:function(e,t,r){t.Z=r.p+"assets/images/layered_overview-301744b3b835f4f09ae40dfa09ac564f.svg"},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);