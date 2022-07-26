"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56388],{7196:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={toc:[{value:"Transmission of Data",id:"transmission-of-data",level:2},{value:"Connecting Peers",id:"connecting-peers",level:2},{value:"Firewall",id:"firewall",level:2}]};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stronghold-peer-to-peer-communication"},"Stronghold Peer-to-Peer Communication"),(0,a.kt)("p",null,"The Stronghold-p2p library enables end-to-end encrypted communication between peers in different processes, devices and networks.\nThe basis for its functionality is the ",(0,a.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," framework, which is a system of protocols, specifications and libraries that enable the development of peer-to-peer network applications."),(0,a.kt)("p",null,"You can build the Stronghold-p2p crate separately from Stronghold, as well as use it independently. It allows users to transmit generic 1:1 Request-Response messages between two peers, with an additional firewall that prevents unauthorized access. In case that a peer may not be dialed directly, it supports the usage of a relay peer that blindly relays the traffic between two peers."),(0,a.kt)("h2",{id:"transmission-of-data"},"Transmission of Data"),(0,a.kt)("p",null,"Data is transmitted via a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol"},"TCP")," transport with additional support for ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"Websockets")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System"},"DNS"),' resolution.\nThe transport is "upgraded" with the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/yamux/blob/master/spec.md"},"Yamux Protocol")," for multiplexing, and a ",(0,a.kt)("a",{parentName:"p",href:"https://noiseprotocol.org/noise.html"},"Noise")," protocol that implements end-to-end encryption."),(0,a.kt)("p",null,"The Noise-handshake is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie-Helllman key exchange")," and allows two peers that have no prior knowledge of each other to create a shared secret key over an insecure medium. Stronghold-p2p uses the ",(0,a.kt)("a",{parentName:"p",href:"http://noiseprotocol.org/noise.html#interactive-handshake-patterns-fundamental"},"XX-Pattern")," for the handshake."),(0,a.kt)("h2",{id:"connecting-peers"},"Connecting Peers"),(0,a.kt)("p",null,"A peer can establish a connection to a remote peer if they know the remote peer's address. If both peers are in the same local network, they can enable the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multicast_DNS"},(0,a.kt)("inlineCode",{parentName:"a"},"Mdns"))," feature, which implements automatic peer discovery in a local network."),(0,a.kt)("p",null,"If the two peers are in two different networks without public IP addresses, Stronghold-p2p supports the usage of relay peers. The relay forwards all traffic between source and destination. Thanks to the Noise-encryption, the communication is end-to-end encrypted between the two peers, independently of whether a relay is used or not."),(0,a.kt)("h2",{id:"firewall"},"Firewall"),(0,a.kt)("p",null,"Stronghold-p2p's network protocol implements a low-level firewall. The firewall approves or rejects each inbound request based on default and peer-specific rules. In addition to fixed rules, requests may also be approved or rejected individually in an asynchronous manner."))}p.isMDXComponent=!0;var c=["components"],l={description:"Peer to peer communications crate.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","p2p","crate"]},u="Structure: Communication",d={unversionedId:"reference/structure/p2p",id:"reference/structure/p2p",title:"Structure: Communication",description:"Peer to peer communications crate.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/reference/structure/p2p.md",sourceDirName:"reference/structure",slug:"/reference/structure/p2p",permalink:"/stronghold.rs/reference/structure/p2p",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/reference/structure/p2p.md",tags:[],version:"current",frontMatter:{description:"Peer to peer communications crate.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","p2p","crate"]},sidebar:"mySidebar",previous:{title:"Structure: Runtime",permalink:"/stronghold.rs/reference/structure/engine/runtime"},next:{title:"Structure: Derive",permalink:"/stronghold.rs/reference/structure/derive"}},m={},h=[],f={toc:h};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structure-communication"},"Structure: Communication"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/p2p"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold-p2p"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-p2p"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-p2p.svg",alt:null}))),(0,a.kt)(p,{mdxType:"P2p"}))}g.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);