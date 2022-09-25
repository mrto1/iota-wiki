"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13873],{89740:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const l={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/develop/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}r.isMDXComponent=!0},27359:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const l={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}r.isMDXComponent=!0},94973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>_,frontMatter:()=>y,metadata:()=>f,toc:()=>k});var a=n(87462),o=(n(67294),n(3905)),l=n(54411),r=n(43305),i=n(89740),s=n(44393);var u=n(27359);const d={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example destroy_foundry --release\n// In this example we will destroy an existing foundry output. This is only possible if its circulating supply is 0.\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::FoundryId;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before destroying:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with an FoundryId that is available in the account\n    let foundry_id =\n        FoundryId::from_str("0x0857f1bafae0ef43190597a0dfe72ef1477b769560203c1854c6fb427c486e65300100000000")?;\n    let transaction = account.destroy_foundry(foundry_id, None).await?;\n\n    let _ = match transaction.block_id {\n        Some(block_id) => account.retry_until_included(&block_id, None, None).await?,\n        None => {\n            return Err(iota_wallet::Error::BurningOrMeltingFailed(\n                "burn nft failed to submitted".to_string(),\n            ));\n        }\n    };\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after destroying:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example destroy_foundry --release"))}c.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"{16-18,37-38}","{16-18,37-38}":!0},"Balancebeforedestroying: AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 109999491000,\n    available: 109999491000\n  },\n  required_storage_deposit: 3046500,\n  native_tokens: [\n    ...\n  ],\n  nfts: [\n    ...\n  ]\n  aliases: [\n    ...\n  ],\n  foundries: [\n    FoundryId(0x086d7755dc84a6757ea28285990ddac2eb53f558f8345507ac76d0c33caacaf8970100000000),\n  ],\n  potentially_locked_outputs: {\n    ...\n  }\n}Balanceafterdestroying: AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 109999491000,\n    available: 109999491000\n  },\n  required_storage_deposit: 3046500,\n  native_tokens: [\n    ...\n  ],\n  nfts: [\n    ...\n  ]\n  aliases: [\n    ...\n  ],\n  foundries: [\n  ],\n  potentially_locked_outputs: {\n    ...\n  }\n}\n")))}m.isMDXComponent=!0;const y={title:"Destroy a Foundry",sidebar_label:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","destroy","destroy foundry","foundry","nodejs","python","rust"]},h=void 0,f={unversionedId:"how_tos/native_tokens/destroy_foundry",id:"how_tos/native_tokens/destroy_foundry",title:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",source:"@site/content/build/wallet.rs/develop/documentation/docs/how_tos/native_tokens/05_destroy_foundry.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/destroy_foundry",permalink:"/wallet.rs/develop/how_tos/native_tokens/destroy_foundry",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/how_tos/native_tokens/05_destroy_foundry.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Destroy a Foundry",sidebar_label:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","destroy","destroy foundry","foundry","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Burn",permalink:"/wallet.rs/develop/how_tos/native_tokens/burn_native_token"},next:{title:"Mint",permalink:"/wallet.rs/develop/how_tos/NFT/mint_nft"}},v={},k=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],b={toc:k};function _(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can destroy a foundry by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.destroy_foundry(foundry_id, options)")," function. The function will\ndestroy a foundry output as long as its circulating\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/foundry"},"native token")," supply is zero. Any native tokens\nwhich were minted by other foundries will be sent to the controlling\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/alias"},"alias"),"."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"Before you run the example you should update the ",(0,o.kt)("inlineCode",{parentName:"p"},"foundry_id")," to one available in your account that has no available\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/foundry"},"native tokens"),". If you have no available\nfoundries, you can create one by ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/develop/how_tos/native_tokens/mint_native_token"},"minting a native token"),". If you've already minted your\ntokens but need to empty the foundry, you can decrease your native token supply by ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/develop/how_tos/native_tokens/melt_native_token"},"melting them"),"."),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/develop/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/develop/how_tos/accounts_and_addresses/check_balance"},"Get the account's balance"),"."),(0,o.kt)("li",{parentName:"ol"},"Destroy a ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/foundry"},"foundry")," output by id."),(0,o.kt)("li",{parentName:"ol"},"Get the account's balance again to show the difference after step 4.")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"RustCode"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i.ZP,{mdxType:"NodejsCode"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(i.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"RustOutput"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i.ZP,{mdxType:"NodejsOutput"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(i.ZP,{mdxType:"PythonOutput"}))))}_.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const l="tabItem__kUE";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),l=n(86010),r=n(51048),i=n(33609),s=n(1943),u=n(72957);const d="tabList_fbd4",c="tabItem_v5XY";function p(e){var t,n;const{lazy:r,block:p,defaultValue:m,values:y,groupId:h,className:f}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=y?y:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const _=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==_&&!k.some((e=>e.value===_)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,o.useState)(_),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==x&&k.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=N.indexOf(t),a=k[n].value;a!==x&&(Z(t),T(a),null!=h&&w(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var o;const t=N.indexOf(e.currentTarget)-1;n=null!=(o=N[t])?o:N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:C,onFocus:D,onClick:D},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);