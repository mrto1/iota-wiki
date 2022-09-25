"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[81291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(54411),i=n(43305);const s={keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},l="Function Definitions",c={unversionedId:"guide/wasm_vm/funcs",id:"guide/wasm_vm/funcs",title:"Function Definitions",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state.",source:"@site/content/build/wasp/develop/documentation/docs/guide/wasm_vm/funcs.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/funcs",permalink:"/smart-contracts/develop/guide/wasm_vm/funcs",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/wasm_vm/funcs.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},sidebar:"tutorialSidebar",previous:{title:"Triggering Events",permalink:"/smart-contracts/develop/guide/wasm_vm/events"},next:{title:"Limiting Access",permalink:"/smart-contracts/develop/guide/wasm_vm/access"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-definitions"},"Function Definitions"),(0,r.kt)("p",null,"Here is the full schema definition file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example. We will now focus on\nits ",(0,r.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," sections. Since they are structured identically we will only need\nto explain the layout of these sections once."),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Dividend\ndescription: Simple dividend smart contract\nstructs: {}\ntypedefs: {}\nstate:\n  memberList: Address[] # array with all the recipients of this dividend\n\n  # factors per member\n\n  members: map[Address]Uint64 # map with all the recipient factors of this dividend\n  owner: AgentID # owner of contract, the only one who can call 'member' func\n  totalFactor: Uint64 # sum of all recipient factors\nfuncs:\n  # divide tokens over members\n  divide: {}\n  init:\n    params:\n      owner: AgentID? # optional owner of contract, defaults to contract creator\n  member:\n    access: owner # only defined owner of contract can add members\n    params:\n      address: Address # address of dividend recipient\n      factor: Uint64 # relative division factor\n  setOwner:\n    access: owner # only defined owner of contract can change owner\n    params:\n      owner: AgentID # new owner of smart contract\nviews:\n  getFactor:\n    params:\n      address: Address # address of dividend recipient\n    results:\n      factor: Uint64 # relative division factor\n  getOwner:\n    results:\n      owner: AgentID # current owner of this smart contract\n")))),(0,r.kt)("p",null,"As you can see each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," sections defines their functions in the\nsame way. The only resulting difference is in the way the schema tool generates code for\nthem. The code generated for Funcs will be able to inspect and modify the smart contract\nstate, whereas the code generated for Views will only be able to inspect the state."),(0,r.kt)("p",null,"Functions are defined as named subsections in the schema definition file. The name of the\nsubsection will become the name of the function. In turn, there can be 3 optional\nsubsections under each function subsection."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access")," indicates who is allowed to access the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," holds the field definitions that describe the function parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"results")," holds the field definitions that describe the function results.")),(0,r.kt)("p",null,"We will now examine each subsection in more detail. In the next section we will first look\nat the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/access"},(0,r.kt)("inlineCode",{parentName:"a"},"access"))," subsection."))}p.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem__kUE";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),o=n(86010),i=n(51048),s=n(33609),l=n(1943),c=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function m(e){var t,n;const{lazy:i,block:m,defaultValue:p,values:f,groupId:h,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(w,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!w.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,l.U)(),[T,N]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:_}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==T&&w.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=w[n].value;a!==T&&(_(t),N(a),null!=h&&O(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},w.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);