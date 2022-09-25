"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(54411),l=n(43305);const s={keywords:["results","function","user function","error message","implementations","mandatory parameter","immutable state","definition"],description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",image:"/img/logo/WASP_logo_dark.png"},i="Function Results",u={unversionedId:"guide/wasm_vm/results",id:"guide/wasm_vm/results",title:"Function Results",description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",source:"@site/content/build/wasp/develop/documentation/docs/guide/wasm_vm/results.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/results",permalink:"/smart-contracts/develop/guide/wasm_vm/results",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/wasm_vm/results.mdx",tags:[],version:"current",frontMatter:{keywords:["results","function","user function","error message","implementations","mandatory parameter","immutable state","definition"],description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Parameters",permalink:"/smart-contracts/develop/guide/wasm_vm/params"},next:{title:"Thunk Functions",permalink:"/smart-contracts/develop/guide/wasm_vm/thunks"}},c={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-results"},"Function Results"),(0,r.kt)("p",null,"The optional ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," subsection contains field definitions for each of the results a\nfunction produces. The layout of the field definitions is identical to that of the\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/params"},"params")," field definitions."),(0,r.kt)("p",null,"The schema tool will automatically generate a mutable structure with member variables for\nproxies to each result variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," map. The user will be able to set the\nresult variables through this structure, which is passed to the function."),(0,r.kt)("p",null,"When this subsection is empty, or completely omitted, no structure will be generated or\npassed to the function."),(0,r.kt)("p",null,"For example, here is the structure generated for the mutable results for the ",(0,r.kt)("inlineCode",{parentName:"p"},"getFactor"),"\nfunction:"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MutableGetFactorResults struct {\n    proxy wasmtypes.Proxy\n}\n\n// relative division factor\nfunc (s MutableGetFactorResults) Factor() wasmtypes.ScMutableUint64 {\n    return wasmtypes.NewScMutableUint64(s.proxy.Root(ResultFactor))\n}\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone)]\npub struct MutableGetFactorResults {\n    pub(crate) proxy: Proxy,\n}\n\nimpl MutableGetFactorResults {\n    // relative division factor\n    pub fn factor(&self) -> ScMutableUint64 {\n        ScMutableUint64::new(self.proxy.root(RESULT_FACTOR))\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class MutableGetFactorResults extends wasmtypes.ScProxy {\n    // relative division factor\n    factor(): wasmtypes.ScMutableUint64 {\n        return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ResultFactor));\n    }\n}\n")))),(0,r.kt)("p",null,"Note that the schema tool will also generate an immutable version of the structure,\nsuitable for accessing the results after by the caller of this smart contract function."),(0,r.kt)("p",null,"In the next section we will look at how so-called ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/thunks"},"thunk functions"),"\nencapsulate access and parameter checking and set up the type-safe function-specific\ncontexts."))}m.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem__kUE";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(51048),s=n(33609),i=n(1943),u=n(72957);const c="tabList_fbd4",p="tabItem_v5XY";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:h,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,i.U)(),[x,O]=(0,r.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&O(e)}const _=e=>{const t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==x&&(E(t),O(a),null!=h&&T(h,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var r;const t=N.indexOf(e.currentTarget)-1;n=null!=(r=N[t])?r:N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);