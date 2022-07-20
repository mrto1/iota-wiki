"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27592],{12756:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={image:"/img/integration-services/logo/integration_services.png",description:"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user's username.",keywords:["how to","search for users","update user","example","manage identity"]},c="Update Users",u={unversionedId:"examples/node/update-users",id:"examples/node/update-users",title:"Update Users",description:"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user's username.",source:"@site/content/build/integration-services/production/documentation/docs/examples/node/update-users.md",sourceDirName:"examples/node",slug:"/examples/node/update-users",permalink:"/integration-services/examples/node/update-users",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/node/update-users.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user's username.",keywords:["how to","search for users","update user","example","manage identity"]},sidebar:"docs",previous:{title:"Create Identity and Credentials",permalink:"/integration-services/examples/node/create-identity-and-credentials"},next:{title:"Delete Users",permalink:"/integration-services/examples/node/delete-users"}},p={},l=[{value:"Search for a User",id:"search-for-a-user",level:2}],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update-users"},"Update Users"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/2-UpdateUser.ts"},"example-2"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity created in ",(0,i.kt)("a",{parentName:"p",href:"./how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Searches for a user."),(0,i.kt)("li",{parentName:"ol"},"Updates said user's username. ")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-2\n")),(0,i.kt)("h2",{id:"search-for-a-user"},"Search for a User"),(0,i.kt)("p",null,"You can search for a user by the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," field with the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Search for identities with username 'User' in it\nconst search: searchCriteria = { username: 'User' };\n\nconst identities = await identity.search(search);\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);