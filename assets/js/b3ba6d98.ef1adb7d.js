"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74],{97349:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={image:"/img/integration-services/diagrams/ecommerce-audit-trail-bridge.jpeg",description:"In the context of e-commerce and the ENSURESEC project, you can use the Audit Trail Gateway to share immutable and auditable data and events and guarantee the Immutability of Large Data Sets.",keywords:["how to","API definition","auditable data","immutability","large data set","writer subscriber","commerce infrastructure","audit trail hash"]},l="Use Cases",c={unversionedId:"services/audit-trail-gateway/use-cases",id:"services/audit-trail-gateway/use-cases",title:"Use Cases",description:"In the context of e-commerce and the ENSURESEC project, you can use the Audit Trail Gateway to share immutable and auditable data and events and guarantee the Immutability of Large Data Sets.",source:"@site/content/build/integration-services/production/documentation/docs/services/audit-trail-gateway/use-cases.md",sourceDirName:"services/audit-trail-gateway",slug:"/services/audit-trail-gateway/use-cases",permalink:"/integration-services/services/audit-trail-gateway/use-cases",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/services/audit-trail-gateway/use-cases.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/diagrams/ecommerce-audit-trail-bridge.jpeg",description:"In the context of e-commerce and the ENSURESEC project, you can use the Audit Trail Gateway to share immutable and auditable data and events and guarantee the Immutability of Large Data Sets.",keywords:["how to","API definition","auditable data","immutability","large data set","writer subscriber","commerce infrastructure","audit trail hash"]},sidebar:"docs",previous:{title:"Software Architecture and APIs Definition",permalink:"/integration-services/services/audit-trail-gateway/API-definition"},next:{title:"SSI Bridge",permalink:"/integration-services/services/SSI-bridge/introduction"}},d={},u=[{value:"Sharing Immutable and Auditable Data and Events",id:"sharing-immutable-and-auditable-data-and-events",level:2},{value:"Assuring the Immutability of Large Data Sets",id:"assuring-the-immutability-of-large-data-sets",level:2}],m={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"In the context of e-commerce and the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ensuresec.eu/"},"ENSURESEC")," project, you can use the Audit Trail Gateway\nto share immutable and auditable data and events and guarantee the Immutability of Large Data Sets."),(0,i.kt)("h2",{id:"sharing-immutable-and-auditable-data-and-events"},"Sharing Immutable and Auditable Data and Events"),(0,i.kt)("p",null,"This scenario involves a small amount of data that a channel Author and writer subscribers want to share with\nreader subscribers. All the information is stored in the Audit Trail, and channel reader subscribers can verify its\nsource (identity of the writer subscribers)."),(0,i.kt)("p",null,"One example of this scenario is sharing threat information detected by a sensor on a critical e-commerce\ninfrastructure to alert all other systems connected to the same infrastructure."),(0,i.kt)("p",null,"You could implement the following workflow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Company X")," has ",(0,i.kt)("a",{parentName:"li",href:"../SSI-bridge/API-definition"},"registered and verified")," its ",(0,i.kt)("a",{parentName:"li",href:"/integration-services/basics/identity"},"Identity")," as\nwell as an identity for ",(0,i.kt)("strong",{parentName:"li"},"employee Y")," and ",(0,i.kt)("strong",{parentName:"li"},"device (sensor) Z"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Company A")," has been registered and verified its identity as well as the identity of an ",(0,i.kt)("strong",{parentName:"li"},"employee B")," and ",(0,i.kt)("strong",{parentName:"li"},"tool\nC"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"device Z")," uses the ",(0,i.kt)("a",{parentName:"li",href:"/integration-services/services/audit-trail-gateway/API-definition"},"Gateway(GW) APIs")," to ",(0,i.kt)("a",{parentName:"li",href:"/integration-services/services/audit-trail-gateway/API-definition#channel-service"},"create ",(0,i.kt)("strong",{parentName:"a"},"\nchannel"))," ",(0,i.kt)("strong",{parentName:"li"},"A"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"tool C")," uses the GW APIs to ",(0,i.kt)("a",{parentName:"li",href:"/integration-services/services/audit-trail-gateway/API-definition#channel-info-service"},"search for channels")," based on available\nindexing metadata and ",(0,i.kt)("a",{parentName:"li",href:"/integration-services/services/audit-trail-gateway/API-definition#subscription-service"},"request a subscription")," to the selected ",(0,i.kt)("strong",{parentName:"li"},"channel A"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"device Z")," uses the GW APIs to authorize ",(0,i.kt)("strong",{parentName:"li"},"tool C")," to access the ",(0,i.kt)("strong",{parentName:"li"},"channel A")," as a reader."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"device Z")," uses the GW APIs to add data to ",(0,i.kt)("strong",{parentName:"li"},"channel A"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Tool C")," is automatically notified of new data coming from ",(0,i.kt)("strong",{parentName:"li"},"device Z"),".")),(0,i.kt)("h2",{id:"assuring-the-immutability-of-large-data-sets"},"Assuring the Immutability of Large Data Sets"),(0,i.kt)("p",null,"This scenario includes storing and sharing information across an organizations' data sets maintained in large data lakes while\nguaranteeing that the data sets have not been altered over time or passed to unauthorized parties."),(0,i.kt)("p",null,"In this case, a channel\u2019s Author and writer subscribers first index the data sets, hash them and store the hash in the\nAudit Trail (using the GW APIs) on a channel registered with the created index and data set metadata. Authorized reader\nsubscribers will receive the given data set and its index/metadata and use them to retrieve and subscribe to the\nrequested channel. Then they can compare the hash stored in the Audit Trail with the one generated from the received\ndata set."),(0,i.kt)("p",null,"This process includes storing hashes of data logs collected by e-commerce systems on the Audit Trail, allowing\nauthorized parties to perform a forensic investigation in case of cyber-physical attacks on e-commerce infrastructure,\nand detect any tampering with such logs."),(0,i.kt)("p",null,"You can implement a similar workflow as\nthe ",(0,i.kt)("a",{parentName:"p",href:"#sharing-immutable-and-auditable-data-and-events"},"Sharing Immutable and Auditable Data and Events scenario"),". The\nclient should implement the exchange of data sets, extract their hash, and compare the hashes using the Audit Trail GW\nAPIs."))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,p=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);