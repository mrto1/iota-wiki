"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97356],{98913:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=i(87462),r=i(63366),n=(i(67294),i(3905)),o=["components"],l={description:"In this tutorial, you will use the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a university degree.",image:"/img/sequence_diagram.png",keywords:["wasm","decentralized identifiers","did subject","Verifiable credentials","Verifiable Presentations","validate","degree","university"]},s="Digitally Validate a Degree",d={unversionedId:"tutorials/validate_university_degree",id:"tutorials/validate_university_degree",title:"Digitally Validate a Degree",description:"In this tutorial, you will use the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a university degree.",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/tutorials/validate_university_degree.mdx",sourceDirName:"tutorials",slug:"/tutorials/validate_university_degree",permalink:"/identity.rs/tutorials/validate_university_degree",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/tutorials/validate_university_degree.mdx",tags:[],version:"current",frontMatter:{description:"In this tutorial, you will use the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a university degree.",image:"/img/sequence_diagram.png",keywords:["wasm","decentralized identifiers","did subject","Verifiable credentials","Verifiable Presentations","validate","degree","university"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/tutorials/overview"},next:{title:"Overview",permalink:"/identity.rs/specs/overview"}},c={},p=[{value:"Degree Validation",id:"degree-validation",level:2},{value:"Roles",id:"roles",level:2},{value:"Terms",id:"terms",level:2},{value:"Sequence-Chart",id:"sequence-chart",level:2},{value:"Storage",id:"storage",level:2},{value:"Steps",id:"steps",level:2},{value:"1. <strong>Holder</strong>: Create a DID",id:"1-holder-create-a-did",level:3},{value:"2. <strong>Issuer</strong>: Create a DID",id:"2-issuer-create-a-did",level:3},{value:"3. <strong>Issuer</strong>: Add a Verification Method",id:"3-issuer-add-a-verification-method",level:3},{value:"4. <strong>Holder</strong>: Add a Verification Method",id:"4-holder-add-a-verification-method",level:3},{value:"5: <strong>Issuer</strong>: Create Revocation list",id:"5-issuer-create-revocation-list",level:3},{value:"5 <strong>Issuer</strong>: Create Verifiable Credential",id:"5-issuer-create-verifiable-credential",level:3},{value:"6 <strong>Holder</strong>: Create Verifiable Presentation",id:"6-holder-create-verifiable-presentation",level:3},{value:"7 <strong>Verifier</strong>: Verification",id:"7-verifier-verification",level:3},{value:"8 <strong>Issuer</strong>: Revocation",id:"8-issuer-revocation",level:3}],u={toc:p};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"digitally-validate-a-degree"},"Digitally Validate a Degree"),(0,n.kt)("p",null,"In this tutorial, you will use the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a university degree. To follow along please clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial"},"this repository"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"src/")," directory contains scripts that can be run separately by providing command line arguments. Make sure that the npm dependencies - which include\nthe wasm bindings for the IOTA Identity Framework - are installed by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,n.kt)("h2",{id:"degree-validation"},"Degree Validation"),(0,n.kt)("p",null,"Alice recently graduated from the University of Oslo with a Bachelor of Computer Science. Now, she wants to apply for a remote job at the IOTA Foundation and needs to digitally prove the existence and validity of her degree. What she needs is an immutable and verifiable credential, approved by both the University of Oslo and herself, before presenting it to her potential employer."),(0,n.kt)("h2",{id:"roles"},"Roles"),(0,n.kt)("p",null,"As described in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/digital-identity"},"Digital Identities Solution"),", IOTA Identity builds on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"W3C's proposed standards for a digital identity framework")," based on three roles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Holder"),": Alice"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Issuer"),": University of Oslo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verifier"),": IOTA Foundation")),(0,n.kt)("h2",{id:"terms"},"Terms"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Term"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"Decentralized Identifier (DID)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A globally unique persistent identifier that does not require a centralized registration authority and is often generated and/or registered cryptographically.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-did-subjects"},"DID Subject")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The entity identified by a DID and described by a DID document. Anything can be a DID subject: person, group, organization, physical thing, digital thing, logical thing, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID Document")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A set of data describing the DID subject, including mechanisms, such as cryptographic public keys, that the DID subject or a DID delegate can use to authenticate itself and prove its association with the DID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-verification-method"},"Verification Method")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A set of parameters that can be used together with a process to independently verify a proof. For example, a cryptographic public key can be used as a verification method for a digital signature; in such usage, it verifies that the signer possessed the associated cryptographic private key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-verifiable-credentials"},"Verifiable Credential")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A standard data model and representation format for cryptographically-verifiable digital credentials. It is signed by the issuer, to prove control over the Verifiable Credential with a nonce or timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Verifiable Presentation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A Verifiable Presentation is the format in which a (collection of) Verifiable Credential(s) gets shared. It is signed by the subject, to prove control over the Verifiable Credential with a nonce or timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-did-resolution"},"DID Resolution")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The process that takes as its input a DID and a set of resolution options and returns a DID document in a conforming representation plus additional metadata.")))),(0,n.kt)("h2",{id:"sequence-chart"},"Sequence-Chart"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"banner",src:i(11547).Z,width:"1656",height:"1749"})),(0,n.kt)("h2",{id:"storage"},"Storage"),(0,n.kt)("p",null,"In this tutorial, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs"},"Stronghold")," will be used to securely store private keys. The Identity Framework already has ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/tree/dev/bindings/stronghold-nodejs"},"Stronghold bindings for Node.js"),". We will be using them in this tutorial.\nFor simplicity, each stronghold file will be responsible for storing only one DID."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"In this process, you will complete the different steps from the perspective of one of the mentioned roles above:"),(0,n.kt)("h3",{id:"1-holder-create-a-did"},"1. ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Create a DID"),(0,n.kt)("p",null,"The first thing you will need to do in this tutorial is to create a DID (Decentralized Identifier) Document for Alice.\nThe script ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/createDid.ts"},"createDid.ts")," can be used to create DIDs using the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-did <name> <stronghold-password>\n")),(0,n.kt)("p",null,"For Alice, a DID can be created using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-did alice alice-password\n\n")),(0,n.kt)("p",null,"This will create a minimal DID document for alice, and publish it to the Tangle. A Stronghold file ",(0,n.kt)("inlineCode",{parentName:"p"},"alice.hodl")," will be created under ",(0,n.kt)("inlineCode",{parentName:"p"},"/stronghold-files")," which contains the Account's state and the private key of the main verification method of the DID.\n",(0,n.kt)("inlineCode",{parentName:"p"},"alice-password")," will be used as a password for the stronghold storage. Obviously this password must be more secure in production applications."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/concepts/decentralized_identifiers/create"},"Creating a Decentralized Identity")," for more information about generating DIDs."),(0,n.kt)("h3",{id:"2-issuer-create-a-did"},"2. ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Create a DID"),(0,n.kt)("p",null,"Once you have created Alice's DID, you should do the same for the University of Oslo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-did uni-of-oslo uni-password\n")),(0,n.kt)("p",null,"with that ",(0,n.kt)("inlineCode",{parentName:"p"},"uni-of-oslo.hodl")," will be created under ",(0,n.kt)("inlineCode",{parentName:"p"},"/stronhold-files"),"."),(0,n.kt)("h3",{id:"3-issuer-add-a-verification-method"},"3. ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Add a Verification Method"),(0,n.kt)("p",null,"Since the university will need to issue a signed verifiable credential for Alice, a verification method should be added to the university's DID document.\nRead more about adding verification methods in ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/concepts/decentralized_identifiers/update"},"update DID Documents"),"."),(0,n.kt)("p",null,"To add a Verification Method the following command can be used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vm <identity-name> <stronghold-password> <verification-fragment>\n")),(0,n.kt)("p",null,"This command will invoke ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/verificationMethods.ts"},"verificationMethods.ts"),"."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"identity-name")," is used to identify the Stronghold file location in ",(0,n.kt)("inlineCode",{parentName:"p"},"/stronghold-files")," while ",(0,n.kt)("inlineCode",{parentName:"p"},"verification-fragment")," is used to identify the Verification Method inside the DID Document.\nTo create a Verification Method for the issuer, use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vm uni-of-oslo uni-password key-1\n")),(0,n.kt)("h3",{id:"4-holder-add-a-verification-method"},"4. ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Add a Verification Method"),(0,n.kt)("p",null,"Alice will need a verification method to sign verifiable presentations before sending them to third parties. Hence a verification method also needs to be added to her DID document."),(0,n.kt)("p",null,"Similar to the issuer, the following command can be run to add a verification method to Alice's DID Document."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vm alice alice-password key-1\n")),(0,n.kt)("h3",{id:"5-issuer-create-revocation-list"},"5: ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Create Revocation list"),(0,n.kt)("p",null,"In order for the issuer to be able to revoke credentials in the future, a revocation list is needed. See ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/identity.rs/concepts/verifiable_credentials/revocation"},"Verifiable Credential Revocation")," for further details.\nThe following command can be used to create a revocation list:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start add-revocation-list <identity-name> <stronghold-password> <revocation-fragment>\n")),(0,n.kt)("p",null,"This will invoke ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/revocationBitmap.ts"},"revocationBitmap.ts"),"."),(0,n.kt)("p",null,"For the University of Oslo use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start add-revocation-list uni-of-oslo uni-password rev-1\n")),(0,n.kt)("p",null,"Notice that ",(0,n.kt)("inlineCode",{parentName:"p"},"rev-1")," is used to identity this revocation list inside the DID document."),(0,n.kt)("h3",{id:"5-issuer-create-verifiable-credential"},"5 ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Create Verifiable Credential"),(0,n.kt)("p",null,"University of Oslo can now issue a verifiable credential to Alice. The following command can be used to create a verifiable credential:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vc <issuer-name> <issuerPassword> <subjectName> <subjectDid> <verificationMethodFragment> <revocationBitmapFragment> <revocationIndex>\n")),(0,n.kt)("p",null,"This will invoke ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/verifiableCredentials.ts"},"verifiableCredentials.ts"),"."),(0,n.kt)("p",null,"To create a verifiable credential for Alice, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vc uni-of-oslo uni-password alice <subjectDid> key-1 rev-1 5\n")),(0,n.kt)("p",null,"Notice that ",(0,n.kt)("inlineCode",{parentName:"p"},"<subjectDid>")," needs to be replaced with Alice's DID. The reason we didn't use Alice's Stronghold file, is that the issuer doesn't have access to it in a real world scenario.\nIf you didn't note Alice's DID upon creating the DID, use ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run start get-did alice alice-password")," to log the DID saved in Alice's Stronghold file."),(0,n.kt)("p",null,"This verifiable credential is given a revocation index of ",(0,n.kt)("inlineCode",{parentName:"p"},"5"),", this will be used later when the verifiable credential will be revoked. \\\nThe command will execute the script in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/verifiableCredentials.ts"},"verifiableCredentials.ts")," which creates a verifiable credential using values provided as arguments\nand hard-coded values to describe the issued degree. This credential will be tied to ",(0,n.kt)("inlineCode",{parentName:"p"},"rev-1")," revocation list and then signed with ",(0,n.kt)("inlineCode",{parentName:"p"},"key-1")," verification method.\\\nOnce the script execution finishes, the file ",(0,n.kt)("inlineCode",{parentName:"p"},"alice-credential.json")," will be created in the ",(0,n.kt)("inlineCode",{parentName:"p"},"credentials/")," directory. The file contains the credential in JSON format\nand is usually sent back to Alice to store and enable her to prove her degree."),(0,n.kt)("h3",{id:"6-holder-create-verifiable-presentation"},"6 ",(0,n.kt)("strong",{parentName:"h3"},"Holder"),": Create Verifiable Presentation"),(0,n.kt)("p",null,"After Alice received the verifiable credential from the university, she applies for a job at the IOTA Foundation. The foundation requests a verifiable presentation\nto be signed by alice that includes the challenge 'xyz123'.\nThe script ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/verifiablePresentation.ts"},"verifiablePresentation.ts")," can be run with the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vp <holder-name> <holder-password> <credential-file> <verification-method-fragment> <challenge>\n")),(0,n.kt)("p",null,"For Alice's case:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start create-vp alice alice-password alice-credential.json key-1 xyz123\n")),(0,n.kt)("p",null,"This will create a verifiable presentation of Alice's credential that includes the challenge and signed by Alice's ",(0,n.kt)("inlineCode",{parentName:"p"},"key-1")," verification method.\nThe resulted presentation is saved in ",(0,n.kt)("inlineCode",{parentName:"p"},"presentations/alice-presentation.json"),"."),(0,n.kt)("h3",{id:"7-verifier-verification"},"7 ",(0,n.kt)("strong",{parentName:"h3"},"Verifier"),": Verification"),(0,n.kt)("p",null,"Now alice sends the signed verifiable presentation to the IOTA Foundation. The foundation now has to verify if everything is correct and the credential is valid."),(0,n.kt)("p",null,"The script ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/verifiablePresentation.ts"},"checkVerifiablePresentation")," can be run with the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start verify-vp <presentation-file> <challenge>\n")),(0,n.kt)("p",null,"So the foundation can run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start verify-vp alice-presentation.json xyz123\n\n")),(0,n.kt)("p",null,"Since everything was signed correctly, the verification should succeed."),(0,n.kt)("h3",{id:"8-issuer-revocation"},"8 ",(0,n.kt)("strong",{parentName:"h3"},"Issuer"),": Revocation"),(0,n.kt)("p",null,"Unfortunately the university found out, that Alice had cheated on her final exam. Therefore, the university wants to revoke the validity of Alice's credential.\nSince the revocation list ",(0,n.kt)("inlineCode",{parentName:"p"},"rev-1")," with revocation index ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," were used upon creating the verifiable credential, revocation is now possible by updating the revocation list."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota-identity-tutorial/tree/master/src/revocation.ts"},"revocation.ts")," can be run with the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start revoke-vc <issuer-name> <issuer-password> <revocation-bitmap-fragment> <revocation-index>\n")),(0,n.kt)("p",null,"To revoke Alice's Credential you can run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start revoke-vc uni-of-oslo uni-password rev-1 5\n")),(0,n.kt)("p",null,"This will update the revocation list inside the issuer's DID Document and publish it to the tangle. Now if the IOTA Foundation tries to verify the credential again\ne.g. by running ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run start verify-vp alice-presentation.json xyz123"),", This will throw an error since the verification now fails."))}h.isMDXComponent=!0},11547:function(e,t,i){t.Z=i.p+"assets/images/sequence-diagram-3cbea4ddd0edc9f60ce799559755542d.png"},3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(i),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||n;return i?a.createElement(m,o(o({ref:t},c),{},{components:i})):a.createElement(m,o({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<n;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);