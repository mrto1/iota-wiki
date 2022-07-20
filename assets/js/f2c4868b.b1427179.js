"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95610],{8614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={description:"Getting started with the recommended requirements and installation links.",image:"/img/Banner/banner_hornet_getting_started.png",keywords:["IOTA Node","HORNET Node","Linux","macOS","Windows","Docker","reference","Requirements"]},l="Getting Started",d={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Getting started with the recommended requirements and installation links.",source:"@site/content/build/hornet/develop/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/hornet/develop/getting_started/",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/develop/documentation/content/build/hornet/develop/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the recommended requirements and installation links.",image:"/img/Banner/banner_hornet_getting_started.png",keywords:["IOTA Node","HORNET Node","Linux","macOS","Windows","Docker","reference","Requirements"]},sidebar:"mySidebar",previous:{title:"Welcome to HORNET",permalink:"/hornet/develop/welcome"},next:{title:"Install HORNET using Docker",permalink:"/hornet/develop/how_tos/using_docker"}},u={},p=[{value:"Recommended Requirements",id:"recommended-requirements",level:2},{value:"Operating System",id:"operating-system",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HORNET Node getting started",src:n(79348).Z,width:"862",height:"200"})),(0,i.kt)("p",null,"Running a node is an efficient way to use IOTA or Shimmer. By doing so, you have direct access to the Tangle instead of having to\nconnect to and trust someone else's node. Additionally, you help the network to become more distributed and resilient."),(0,i.kt)("p",null,"The node software is the backbone of the network. For an overview of tasks a node is responsible for, please\nsee our ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/nodes/explanations/nodes_101"},"Node 101")," section."),(0,i.kt)("p",null,"To make sure that your device meets the minimum security requirements for running a node, please\nsee our ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/nodes/explanations/security_101"},"Security 101")," section."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you install HORNET v2.0.0+ since it is the minimum version that targets the Stardust upgrade."))),(0,i.kt)("h2",{id:"recommended-requirements"},"Recommended Requirements"),(0,i.kt)("p",null,"To handle a potential high rate of blocks per second, nodes need enough computational power to run reliably, and\nshould have the minimum specs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4 cores or 4 vCPU."),(0,i.kt)("li",{parentName:"ul"},"8 GB RAM."),(0,i.kt)("li",{parentName:"ul"},"SSD storage."),(0,i.kt)("li",{parentName:"ul"},"A public IP address.")),(0,i.kt)("p",null,"The amount of storage you need will depend on whether and how often you plan on pruning old data from your local\ndatabase."),(0,i.kt)("p",null,"HORNET exposes different functionality on different ports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"15600 TCP")," - Gossip protocol port."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"14626 UDP")," - Autopeering port (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"14265 TCP")," - REST HTTP API port (optional).")),(0,i.kt)("p",null,"These ports are important for flawless node operation. The REST HTTP API port is optional and is only needed if\nyou want to offer access to your node's API. All ports can be customized inside\nthe ",(0,i.kt)("a",{parentName:"p",href:"/hornet/develop/how_tos/post_installation"},(0,i.kt)("inlineCode",{parentName:"a"},"config.json"))," file."),(0,i.kt)("h2",{id:"operating-system"},"Operating System"),(0,i.kt)("p",null,"HORNET is written in Go and can be deployed on all major platforms.\nThe ",(0,i.kt)("a",{parentName:"p",href:"/hornet/develop/how_tos/using_docker"},"recommended setup")," uses Docker to run HORNET together with some ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/nodes/about-nodes"},"INX")," extensions secured behind a ",(0,i.kt)("a",{parentName:"p",href:"https://traefik.io"},"Traefik")," SSL reverse proxy."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"HORNET uses two JSON configuration files that you can tweak based on your deployment requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," - Includes all core configuration parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peering.json")," - Includes connection details to node neighbors (peers).")),(0,i.kt)("p",null,"You can read more about the configuration in the ",(0,i.kt)("a",{parentName:"p",href:"/hornet/develop/how_tos/post_installation"},"post installation")," article."))}m.isMDXComponent=!0},79348:function(e,t,n){t.Z=n.p+"assets/images/banner_hornet_getting_started-342d186ee11d79794d5f0feb5a13629b.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);