"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29517],{21121:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],d={},l=void 0,s={unversionedId:"reference/java_api/Address",id:"reference/java_api/Address",title:"Address",description:"An address.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/Address.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/Address",permalink:"/wallet.rs/reference/java_api/Address",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/Address.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"builder(): AddressBuilder",id:"builder-addressbuilder",level:3},{value:"balance(): long",id:"balance-long",level:3},{value:"readable(): String",id:"readable-string",level:3},{value:"address(): AddressWrapper",id:"address-addresswrapper",level:3}],p={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An address."),(0,o.kt)("h3",{id:"builder-addressbuilder"},"builder(): ",(0,o.kt)("a",{parentName:"h3",href:"#addressbuilder"},"AddressBuilder")),(0,o.kt)("p",null,"Gets a new instance of the address builder."),(0,o.kt)("h3",{id:"balance-long"},"balance(): long"),(0,o.kt)("p",null,"Address total balance"),(0,o.kt)("h3",{id:"readable-string"},"readable(): String"),(0,o.kt)("p",null,"the Bech32 human readable part."),(0,o.kt)("h3",{id:"address-addresswrapper"},"address(): ",(0,o.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,o.kt)("p",null,"The address."))}f.isMDXComponent=!0},3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,b=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);