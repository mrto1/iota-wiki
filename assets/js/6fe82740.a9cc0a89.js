"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43772],{64786:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],s={},o="IOTA GTSC Track and Trace Ledger APIs 103 Tutorial : Digital Identity",d={unversionedId:"tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103",id:"tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103",title:"IOTA GTSC Track and Trace Ledger APIs 103 Tutorial : Digital Identity",description:"In this tutorial, you will learn how to use Decentralized Digital Identities (DIDs). You will be able to create a DID identity (recorded on the Tangle), and a self signed Verifiable Credential as a proof of DID control. This DID and its accompanying Verifiable Credential can be verified from the Tangle, and if Verified, the DID will be associated to your API Key. In addition, you will also learn how to present a Verifiable Credential with claims signed by another (possibly trusted) party and which will be automatically associated to your DID.",source:"@site/external/zebra-iota-edge-sdk/docs/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103.md",sourceDirName:"tutorials/track-trace-ledger-api",slug:"/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103",permalink:"/zebra-iota-edge-sdk/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103",editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/external/zebra-iota-edge-sdk/docs/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA Track & Trace Ledger APIs 102 Tutorial : Consuming Events",permalink:"/zebra-iota-edge-sdk/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-102"},next:{title:"IOTA Track & Trace Ledger APIs 201 Tutorial : Business Events",permalink:"/zebra-iota-edge-sdk/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-201"}},u=[{value:"Introduction",id:"introduction",children:[{value:"Decentralized Identities",id:"decentralized-identities",children:[],level:3}],level:2},{value:"Self Signed Verifiable Credentials",id:"self-signed-verifiable-credentials",children:[{value:"Generate Decentralized Identity",id:"generate-decentralized-identity",children:[],level:3},{value:"Generate Verifiable Credential",id:"generate-verifiable-credential",children:[],level:3}],level:2},{value:"Associate a DID to an API Key",id:"associate-a-did-to-an-api-key",children:[],level:2},{value:"Retrieve DID associated to an API Key",id:"retrieve-did-associated-to-an-api-key",children:[],level:2},{value:"Associate a DID to a transaction",id:"associate-a-did-to-a-transaction",children:[],level:2},{value:"Query claims associated to a DID",id:"query-claims-associated-to-a-did",children:[],level:2},{value:"Retrieve DIDs which claims have a particular value",id:"retrieve-dids-which-claims-have-a-particular-value",children:[],level:2},{value:"Trusted Issuer",id:"trusted-issuer",children:[],level:2}],p={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-gtsc-track-and-trace-ledger-apis-103-tutorial--digital-identity"},"IOTA GTSC Track and Trace Ledger APIs 103 Tutorial : Digital Identity"),(0,r.kt)("p",null,"In this tutorial, you will learn how to use Decentralized Digital Identities (DIDs). You will be able to create a DID identity (recorded on the Tangle), and a self signed Verifiable Credential as a proof of DID control. This DID and its accompanying Verifiable Credential can be verified from the Tangle, and if ",(0,r.kt)("em",{parentName:"p"},"Verified"),", the DID will be associated to your API Key. In addition, you will also learn how to present a Verifiable Credential with claims signed by another (possibly trusted) party and which will be automatically associated to your DID."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"decentralized-identities"},"Decentralized Identities"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},(0,r.kt)("strong",{parentName:"a"},"Decentralized Identity"))," is a type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. In contrast to typical, federated identifiers, DIDs have been designed so that they may be decoupled from centralized registries, identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a DID, the design enables the controller of a DID to prove control over it without requiring permission from any other party."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},(0,r.kt)("strong",{parentName:"a"},"Verifiable Credential"))," is a digital document intended to express credentials in a way that is cryptographically secure, respects privacy and machine verifiable."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},(0,r.kt)("strong",{parentName:"a"},"Verifiable presentation"))," expresses data from one or more verifiable credentials, and is packaged in such a way that the authorship of the data is verifiable."),(0,r.kt)("p",null,"IOTA provides a ",(0,r.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/digital-identity"},"Digital Identity Framework")," that builds on the W3C's Recommendations for a digital identity framework. This framework includes three roles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Holder - owners of digital identities. They have ultimate control over their data and choose how much and with whom they share their data with."),(0,r.kt)("li",{parentName:"ol"},"Issuer - trusted third parties or authorities that generate and issue credentials to holders, such as health records or identity documents."),(0,r.kt)("li",{parentName:"ol"},"Verifier - any third parties that need to verify the authenticity of a holder's data. A verifier might, for example, need to validate that the holder is who they say they are.")),(0,r.kt)("p",null,"A Verifiable Credential also has ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-use-cases/#:~:text=The%20Verifiable%20Claims%20Working%20Group%20at%20the%20W3C%20is%20developing,more%20secure%20on%20the%20Web.&text=This%20document%20does%20NOT%20attempt,the%20support%20of%20Verifiable%20Claims."},"Verifiable Claims")," that are assertions made by a subject, in this case the DID associated to our API Key will be the subject."),(0,r.kt)("p",null,"In this tutorial we will generate a self signed Verifiable Credential that we will then associate to an API Key thus ensuring the DID ownership of the consuming client and their respective transactions. We will further look into issuing Verifiable Presentations and asserting trusted claims to DIDs."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tangle-js/tangle-cli"},"CLI Application")," for IOTA Chrysalis is required to allow you to generate a Decentralized Identity, a Verifiable Credential and a Verifiable Presentation for this tutorial."),(0,r.kt)("h2",{id:"self-signed-verifiable-credentials"},"Self Signed Verifiable Credentials"),(0,r.kt)("h3",{id:"generate-decentralized-identity"},"Generate Decentralized Identity"),(0,r.kt)("p",null,"To generate a Decentralized Identity run the below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tcli did create --mainnet\n")),(0,r.kt)("p",null,"This will create a DID on the IOTA Chrysalis Main Net as seen below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "did": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n    "keys": {\n      "public": "ChtA5TW3ddToh55CMpSSz2VC8xUhY5nhFXjUqpeHqC5v",\n      "private": "AEp8NDrN2BYMpUU6DkKRzVDhAN6VrMNNQP96R2FkVwgh"\n    },\n    "transactionUrl": "https://explorer.iota.org/mainnet/message/3465ef0fb7c623dd733ba995913ccde9a7eeb8ffa43a0201decb943961216564"\n  }\n')),(0,r.kt)("p",null,"In addition to the DID URI ",(0,r.kt)("inlineCode",{parentName:"p"},"did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9"),", an Ed25519 public and private key will be generated and the URL to the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet/message/3465ef0fb7c623dd733ba995913ccde9a7eeb8ffa43a0201decb943961216564"},"transaction")),(0,r.kt)("p",null,"As seen from the Tangle the data recorded is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n  "authentication": [\n    {\n      "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9#key",\n      "controller": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n      "type": "Ed25519VerificationKey2018",\n      "publicKeyBase58": "ChtA5TW3ddToh55CMpSSz2VC8xUhY5nhFXjUqpeHqC5v"\n    }\n  ],\n  "created": "2021-05-28T12:32:36Z",\n  "updated": "2021-05-28T12:32:36Z",\n  "proof": {\n    "type": "JcsEd25519Signature2020",\n    "verificationMethod": "#key",\n    "signatureValue": "BExxmHvDpcZs4ubB1fKb5zVNuygD3SrzG2R8Mm6fwDtsQh8zQH5L9Z9Zs68KeKkhmSmhxiBNeQYDH21N3sqvqbB"\n  }\n}\n')),(0,r.kt)("p",null,"This can serve as a proof of existence of the identity corresponding to the DID that was created."),(0,r.kt)("h3",{id:"generate-verifiable-credential"},"Generate Verifiable Credential"),(0,r.kt)("p",null,"Using an Example of a Wine Manufacturing Company that has a DID, we will generate a Verifiable Credential with Verifiable Claims."),(0,r.kt)("p",null,"Create a JSON file claims.json as seen below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "gs1CompanyPrefix": {\n      "type": "identifier",\n      "value": "9526677"\n    },\n    "name": {\n      "type": "PropertyValue",\n      "value": "Good Wine Company"\n    },\n    "type": "Organization"\n}\n')),(0,r.kt)("p",null,"In this case the Wine company will be the Holder of the Digital Identity as well as the Issuer, this next step we will self issue a VC with the above claims."),(0,r.kt)("p",null,"To issue a VC we will need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Issuer DID - ",(0,r.kt)("inlineCode",{parentName:"li"},"did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9"),"."),(0,r.kt)("li",{parentName:"ol"},"The Secret - The issuers private key ",(0,r.kt)("inlineCode",{parentName:"li"},"AEp8NDrN2BYMpUU6DkKRzVDhAN6VrMNNQP96R2FkVwgh"),"."),(0,r.kt)("li",{parentName:"ol"},"The Subject - The DID of the subject ",(0,r.kt)("inlineCode",{parentName:"li"},"did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9"),"."),(0,r.kt)("li",{parentName:"ol"},"The type - ",(0,r.kt)("inlineCode",{parentName:"li"},"GlobalIdentifierCredential"),"."),(0,r.kt)("li",{parentName:"ol"},"The Verification Method - ",(0,r.kt)("inlineCode",{parentName:"li"},"did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9#key"),"."),(0,r.kt)("li",{parentName:"ol"},"The claims.")),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'tcli --mainnet vc issue --issuer=did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9 --subject=did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9 --secret=AEp8NDrN2BYMpUU6DkKRzVDhAN6VrMNNQP96R2FkVwgh --type=GlobalIdentifierCredential --method=#key --claims="$(cat claims.json)" --json\n')),(0,r.kt)("p",null,"This will create a VC as seen below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/2018/credentials/v1",\n  "type": [\n    "VerifiableCredential",\n    "GlobalIdentifierCredential"\n  ],\n  "credentialSubject": {\n    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n    "gs1CompanyPrefix": {\n      "type": "identifier",\n      "value": "9526677"\n    },\n    "name": {\n      "type": "PropertyValue",\n      "value": "Good Wine Company"\n    },\n    "type": "Organization"\n  },\n  "issuer": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n  "issuanceDate": "2021-05-28T13:33:20Z",\n  "proof": {\n    "type": "JcsEd25519Signature2020",\n    "verificationMethod": "#key",\n    "signatureValue": "5v6zRqHGeMF7ihKsJroEEK5vrKZMVhbyPnb7hndh3bABza4eTpTyyZv94g6KHrdcMwoY1182jsmBkBRGZN5weByC"\n  }\n}\n')),(0,r.kt)("p",null,"Now we have issued a Verifiable Credential which contains claims whose subject is our DID."),(0,r.kt)("p",null,"With this credential you will proceed to registering the DID to the Track and Trace Ledger API. The Credential will prove that you control the DID. However the API will not recognize this as a trusted Credential and will mark the claims as not trusted since it is self signed and self issued."),(0,r.kt)("h2",{id:"associate-a-did-to-an-api-key"},"Associate a DID to an API Key"),(0,r.kt)("p",null,"You will associate a DID to an API Key through the self signed Verifiable Credential that you generated earlier."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity\' \\\n--header \'apikey: <your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n    "credential": {\n      "@context": "https://www.w3.org/2018/credentials/v1",\n      "type": [\n          "VerifiableCredential",\n          "GlobalIdentifierCredential"\n      ],\n      "credentialSubject": {\n          "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n          "gs1CompanyPrefix": {\n              "type": "identifier",\n              "value": "9526677"\n          },\n          "name": {\n              "type": "PropertyValue",\n              "value": "Good Wine Company"\n          },\n          "type": "Organization"\n      },\n      "issuer": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n      "issuanceDate": "2021-05-28T13:33:20Z",\n      "proof": {\n          "type": "JcsEd25519Signature2020",\n          "verificationMethod": "#key",\n          "signatureValue": "5v6zRqHGeMF7ihKsJroEEK5vrKZMVhbyPnb7hndh3bABza4eTpTyyZv94g6KHrdcMwoY1182jsmBkBRGZN5weByC"\n      }\n    }\n  }\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"201 Created\n")),(0,r.kt)("p",null,"Once the Verifiable Credential is posted to the API, the API will verify the credential from the IOTA Chrysalis ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet")," and if its verified, it is associated to the API key."),(0,r.kt)("p",null,"In this case the IOTA Track and Trace Ledger API acts as a ",(0,r.kt)("strong",{parentName:"p"},"Verifier"),"."),(0,r.kt)("p",null,"You can also verify the credential using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tcli")," tool by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'tcli vc verify --mainnet --vc="$(cat credential.json)"\n')),(0,r.kt)("h2",{id:"retrieve-did-associated-to-an-api-key"},"Retrieve DID associated to an API Key"),(0,r.kt)("p",null,"The API allows you to retrieve the DID associated with an API Key."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n    "isTrusted": false,\n    "isTrustedIssuer": false\n  }\n]\n')),(0,r.kt)("p",null,"As seen above, the API was able to extract the API Key supplied in the headers and return the DID. Since it is a Self Issued DID, its marked as ",(0,r.kt)("em",{parentName:"p"},"not trusted")," and not a ",(0,r.kt)("em",{parentName:"p"},"trusted issuer"),". A ",(0,r.kt)("em",{parentName:"p"},"trusted issuer")," is a DID that is entitled to issue credentials to other stakeholders so that the system will consider those credentials' claims as trusted."),(0,r.kt)("h2",{id:"associate-a-did-to-a-transaction"},"Associate a DID to a transaction"),(0,r.kt)("p",null,"Using the same API Key, all transactions from now on will be appended with the DID"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/scan\' \\\n--header \'apikey: <Your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n   "symbology": "EAN-13",\n   "value": "3700123300014",\n   "timestamp": "2020-10-14T16:10:07.652Z",\n   "location":{\n      "latitude": 44.1,\n      "longitude": -8\n   },\n   "deviceId": "iphone-A-456789",\n   "type": "scanTransaction"\n  }\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"201 Created\n\nLocation: /scan/transaction/37001.../VYBVMA...\n")),(0,r.kt)("p",null,"Now if we retrieve the transaction;"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/transaction/991616586826831/VYBVMA...' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "symbology": "EAN-13",\n  "value": "3700123300014",\n  "timestamp": "2020-10-14T16:10:07.652Z",\n  "location": {\n      "latitude": 44.1,\n      "longitude": -8\n  },\n  "deviceId": "iphone-A-456789",\n  "type": "scanTransaction",\n  "jsonData": {\n      "originDid": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n      "timestamp": 1622224030522\n  },\n  "id": "8f66478e4c..."\n}\n')),(0,r.kt)("p",null,"The DID has now been appended to the transaction as ",(0,r.kt)("inlineCode",{parentName:"p"},"originDid"),", showing that the transaction was created by an entity that controls the DID."),(0,r.kt)("h2",{id:"query-claims-associated-to-a-did"},"Query claims associated to a DID"),(0,r.kt)("p",null,"The API allows you to retrieve the claims assigned to the current API Key."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gs1CompanyPrefix": {\n    "type": "identifier",\n    "value": "9526677"\n  },\n  "name": {\n    "type": "PropertyValue",\n    "value": "Good Wine Company"\n  },\n  "type": "Organization"\n}\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyTrustedClaims"),' query parameter, to fetch only the claims that are trusted. A claim is trusted if it has been issued by a trusted issuer, such as the one represented by the "GTSC" bootstrap DID (see below).'),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims?onlyTrustedClaims=true' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"In this case the result of the above request will be an empty object as none of the claims are trusted (they have been self-issued)."),(0,r.kt)("p",null,"You can also fetch claims of another DID."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims/did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gs1CompanyPrefix": {\n    "type": "identifier",\n    "value": "9526677"\n  },\n  "name": {\n    "type": "PropertyValue",\n    "value": "Good Trucks Logistics"\n  },\n  "type": "Organization"\n}\n')),(0,r.kt)("h2",{id:"retrieve-dids-which-claims-have-a-particular-value"},"Retrieve DIDs which claims have a particular value"),(0,r.kt)("p",null,"The API also allows you to retrieve the DIDs which claims have a particular value, by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"claimName")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"claimValue")," as URL query Parameters, a list of DIDs which credential contains claims with of the given value will be returned."),(0,r.kt)("p",null,"In this case we want the DIDs whose ",(0,r.kt)("inlineCode",{parentName:"p"},"claimName")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"claimValue")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization"),"."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity?claimName=type&claimValue=Organization\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",\n    "isTrusted": false,\n    "isTrustedIssuer": false\n  }\n]\n')),(0,r.kt)("p",null,"As seen above, we get a list or all the registered DIDs whose ",(0,r.kt)("inlineCode",{parentName:"p"},"claimName")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"claimValue")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization"),"."),(0,r.kt)("h2",{id:"trusted-issuer"},"Trusted Issuer"),(0,r.kt)("p",null,"The API implementation has bootstrapped a Trusted Issuer DID ",(0,r.kt)("inlineCode",{parentName:"p"},"did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G"),", that can issue trusted credentials so that other participants in the supply chain can be easily onboarded."),(0,r.kt)("p",null,"As this ",(0,r.kt)("inlineCode",{parentName:"p"},"GTSC")," Credential is a Trusted Issuer, we can control the credentials and claims issued to different DIDs that interact with the API."),(0,r.kt)("p",null,"Using an Example of a Manufacturer ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," whose DID is ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet/message/030386b7761e36b7391e7ba68e73cde77dacdb9aef67cf0acfc89693a38e59d9"},(0,r.kt)("inlineCode",{parentName:"a"},"did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL")),", we will issue a Verifiable Credential with the following claims:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gs1CompanyPrefix": {\n    "type": "identifier",\n    "value": "0001111"\n  },\n  "isTrustedIssuer": true,\n  "name": {\n    "type": "PropertyValue",\n    "value": "Car Industries GmbH"\n  },\n  "type": "Manufacturer"\n}\n')),(0,r.kt)("p",null,"Note the claim ",(0,r.kt)("inlineCode",{parentName:"p"},"isTrustedIssuer")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", by issuing a Credential to ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," with this claim ensures that the DID is marked as a Trusted Issuer. i.e. all the credential's claims further issued by this DID will be marked as trusted."),(0,r.kt)("p",null,"Using the below command, we will issue a Verifiable Credential. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"GTSC")," is the Issuer (Trusted by the Track & Trace Ledger API), ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," is the Subject (",(0,r.kt)("inlineCode",{parentName:"p"},"did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL"),") whose credential is signed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"GTSC")," private key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'tcli --mainnet vc issue --issuer=did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G --subject=did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL --secret=DRBNjCeAnjQeLKhwxuky5rSm7Fr5jyZsuvMtQzYqnG8Q --type=GlobalIdentifierCredential --expDate=2022-08-02T12:00:00Z --method=#key --claims="$(cat claims.json)" --json\n')),(0,r.kt)("p",null,"The following Credential is issued:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/2018/credentials/v1",\n  "type": [\n    "VerifiableCredential",\n    "GlobalIdentifierCredential"\n  ],\n  "credentialSubject": {\n    "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n    "gs1CompanyPrefix": {\n      "type": "identifier",\n      "value": "0001111"\n    },\n    "isTrustedIssuer": true,\n    "name": {\n      "type": "PropertyValue",\n      "value": "Car Industries GmbH"\n    },\n    "type": "Manufacturer"\n  },\n  "issuer": "did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G",\n  "issuanceDate": "2021-08-02T20:50:28Z",\n  "expirationDate": "2022-08-02T12:00:00Z",\n  "proof": {\n    "type": "JcsEd25519Signature2020",\n    "verificationMethod": "#key",\n    "signatureValue": "p6VgK8ew9uPia4kz9xFoqfoBLkZo7EvYu6mXZWuE7mJe52ygBm6uEwBNrtK66JtGsCB1nm8tHwK1XT5zWgGJngX"\n  }\n}\n')),(0,r.kt)("p",null,"Note: the API will not accept Verifiable Credentials that are not self signed, thus ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," has to generate a Verifiable Presentation as a proof of control of the holder's DID of the credential."),(0,r.kt)("p",null,"Using the following command, ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," can the create a Verifiable Presentation, signed by their own private key, that they can then use to present to the API in order to associate claims to its DID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'tcli vc present --mainnet --vc="$(cat credential.json)" --method="#key" --secret="8xb5bP8c1Va5HffU3mYTNa4i8QrV4QKYc8HqS84PCZVd" --json\n')),(0,r.kt)("p",null,"This will generate a Verifiable Presentation as seen below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/2018/credentials/v1",\n  "type": "VerifiablePresentation",\n  "verifiableCredential": {\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "type": [\n      "VerifiableCredential",\n      "GlobalIdentifierCredential"\n    ],\n    "credentialSubject": {\n      "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n      "gs1CompanyPrefix": {\n        "type": "identifier",\n        "value": "0001111"\n      },\n      "isTrustedIssuer": true,\n      "name": {\n        "type": "PropertyValue",\n        "value": "Car Industries GmbH"\n      },\n      "type": "Manufacturer"\n    },\n    "issuer": "did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G",\n    "issuanceDate": "2021-08-02T20:50:28Z",\n    "expirationDate": "2022-08-02T12:00:00Z",\n    "proof": {\n      "type": "JcsEd25519Signature2020",\n      "verificationMethod": "#key",\n      "signatureValue": "p6VgK8ew9uPia4kz9xFoqfoBLkZo7EvYu6mXZWuE7mJe52ygBm6uEwBNrtK66JtGsCB1nm8tHwK1XT5zWgGJngX"\n    }\n  },\n  "holder": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n  "proof": {\n    "type": "JcsEd25519Signature2020",\n    "verificationMethod": "#key",\n    "signatureValue": "5W8CbgoTRkHT5P5c56jvgxKjHxqsEkVAdmwk5FBgf1GvD11bEWDHnLrFuDfxJ6uB7jTAWZCaSh5CsBUkfWoqA9sh"\n  }\n}\n')),(0,r.kt)("p",null,"As seen above we have a presentation showing the holder (",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH DID"),"), issuer (",(0,r.kt)("inlineCode",{parentName:"p"},"GTSC DID"),") and claims (issued to holder by the issuer)."),(0,r.kt)("p",null,"We will now post this Verifiable Presentation to the Track & Trace Ledger API"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity\' \\\n--header \'apikey: <your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n    "credential":  {\n      "@context": "https://www.w3.org/2018/credentials/v1",\n      "type": "VerifiablePresentation",\n      "verifiableCredential": {\n        "@context": "https://www.w3.org/2018/credentials/v1",\n        "type": [\n          "VerifiableCredential",\n          "GlobalIdentifierCredential"\n        ],\n        "credentialSubject": {\n          "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n          "gs1CompanyPrefix": {\n            "type": "identifier",\n            "value": "0001111"\n          },\n          "isTrustedIssuer": true,\n          "name": {\n            "type": "PropertyValue",\n            "value": "Car Industries GmbH"\n          },\n          "type": "Manufacturer"\n        },\n        "issuer": "did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G",\n        "issuanceDate": "2021-08-02T20:50:28Z",\n        "expirationDate": "2022-08-02T12:00:00Z",\n        "proof": {\n          "type": "JcsEd25519Signature2020",\n          "verificationMethod": "#key",\n          "signatureValue": "p6VgK8ew9uPia4kz9xFoqfoBLkZo7EvYu6mXZWuE7mJe52ygBm6uEwBNrtK66JtGsCB1nm8tHwK1XT5zWgGJngX"\n        }\n      },\n      "holder": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n      "proof": {\n        "type": "JcsEd25519Signature2020",\n        "verificationMethod": "#key",\n        "signatureValue": "5W8CbgoTRkHT5P5c56jvgxKjHxqsEkVAdmwk5FBgf1GvD11bEWDHnLrFuDfxJ6uB7jTAWZCaSh5CsBUkfWoqA9sh"\n      }\n    }\n  }\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"201 Created\n")),(0,r.kt)("p",null,"Once the presentation is verified from the IOTA Tangle mainnet, the API will check the DID of the issuer, and if it is a trusted issuer such as ",(0,r.kt)("inlineCode",{parentName:"p"},"GTSC"),", the claims will be marked as trusted, otherwise the claims will be marked as untrusted. That is, ",(0,r.kt)("em",{parentName:"p"},"claims issued by non-trusted (issuers') DID will always be marked as untrusted"),"."),(0,r.kt)("p",null,"Below we will confirm this based on the credentials we generated previously:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gs1CompanyPrefix": {\n    "type": "identifier",\n    "value": "0001111"\n  },\n  "isTrustedIssuer": true,\n  "name": {\n    "type": "PropertyValue",\n    "value": "Car Industries GmbH"\n  },\n  "type": "Manufacturer"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," DID will also be marked as Trusted since it was issued by the ",(0,r.kt)("inlineCode",{parentName:"p"},"GTSC"),' DID and also as a "Trusted Issuer" since it was explicitly granted the ',(0,r.kt)("inlineCode",{parentName:"p"},"isTrustedIssuer")," claim by the issuer as seen below. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"Car Industries GmbH")," itself could later issue trusted credentials to other supply chain participants if necessary."),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity' \\\n--header 'apikey: <Your API Key>'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",\n    "isTrusted": true,\n    "isTrustedIssuer": true\n  }\n]\n')),(0,r.kt)("p",null,"Note: A controller of a DID can be trusted but could not be a trusted issuer. The permission to be a trusted issuer is granted by another trusted issuer, by including in a signed credential the claim ",(0,r.kt)("inlineCode",{parentName:"p"},"isTrustedIssuer")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),'. Such trusted issuer could be the "GTSC" bootstrapped DID, formerly mentioned, or any other existent trusted issuer DID.'))}c.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,m=c["".concat(o,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);