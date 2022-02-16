"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35296],{79201:function(e){e.exports=JSON.parse('{"pluginId":"integration-services","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Welcome","href":"/integration-services/welcome","docId":"welcome"},{"type":"category","label":"Services","collapsed":false,"items":[{"type":"category","label":"Audit Trail Gateway","items":[{"type":"link","label":"Introduction","href":"/integration-services/services/audit-trail-gateway/introduction","docId":"services/audit-trail-gateway/introduction"},{"type":"link","label":"Software Architecture and APIs Definition","href":"/integration-services/services/audit-trail-gateway/API-definition","docId":"services/audit-trail-gateway/API-definition"},{"type":"link","label":"Use Cases","href":"/integration-services/services/audit-trail-gateway/use-cases","docId":"services/audit-trail-gateway/use-cases"}],"collapsible":true,"collapsed":true},{"type":"category","label":"SSI Bridge","items":[{"type":"link","label":"Introduction","href":"/integration-services/services/SSI-bridge/introduction","docId":"services/SSI-bridge/introduction"},{"type":"link","label":"Software Architecture and APIs Definition","href":"/integration-services/services/SSI-bridge/API-definition","docId":"services/SSI-bridge/API-definition"},{"type":"link","label":"Use Cases","href":"/integration-services/services/SSI-bridge/use-cases","docId":"services/SSI-bridge/use-cases"}],"collapsible":true,"collapsed":true}],"collapsible":true},{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Overview","href":"/integration-services/getting_started/overview","docId":"getting_started/overview"},{"type":"category","label":"NodeJs","items":[{"type":"link","label":"Local Setup","href":"/integration-services/getting_started/installation/nodejs/local_setup","docId":"getting_started/installation/nodejs/local_setup"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Kubernetes","items":[{"type":"link","label":"Local Setup","href":"/integration-services/getting_started/installation/kubernetes/local_setup","docId":"getting_started/installation/kubernetes/local_setup"},{"type":"link","label":"Configuration","href":"/integration-services/getting_started/installation/kubernetes/configuration","docId":"getting_started/installation/kubernetes/configuration"},{"type":"link","label":"Expose APIs","href":"/integration-services/getting_started/installation/kubernetes/expose_apis","docId":"getting_started/installation/kubernetes/expose_apis"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Docker Compose","items":[{"type":"link","label":"Local Setup","href":"/integration-services/getting_started/installation/docker_compose/","docId":"getting_started/installation/docker_compose/docker_compose"},{"type":"link","label":"Expose APIs","href":"/integration-services/getting_started/installation/docker_compose/expose_apis","docId":"getting_started/installation/docker_compose/expose_apis"}],"collapsible":true,"collapsed":true}],"collapsible":true},{"type":"category","label":"Examples","collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/integration-services/examples/introduction","docId":"examples/introduction"},{"type":"link","label":"How To Run Examples","href":"/integration-services/examples/how-to-run-examples","docId":"examples/how-to-run-examples"},{"type":"link","label":"Create Identity and Credentials","href":"/integration-services/examples/create-identity-and-credentials","docId":"examples/create-identity-and-credentials"},{"type":"link","label":"Update Users","href":"/integration-services/examples/update-users","docId":"examples/update-users"},{"type":"link","label":"Delete Users","href":"/integration-services/examples/delete-users","docId":"examples/delete-users"},{"type":"link","label":"Trusted Authorities","href":"/integration-services/examples/trusted-authorities","docId":"examples/trusted-authorities"},{"type":"link","label":"Create Channel","href":"/integration-services/examples/create-channel","docId":"examples/create-channel"},{"type":"link","label":"Authorize Channel","href":"/integration-services/examples/authorize-to-channel","docId":"examples/authorize-to-channel"},{"type":"link","label":"Search Channel and Validate Data","href":"/integration-services/examples/search-channel-and-validate-data","docId":"examples/search-channel-and-validate-data"}],"collapsible":true},{"type":"category","label":"Basics","collapsed":true,"items":[{"type":"link","label":"IOTA Identity","href":"/integration-services/basics/identity","docId":"basics/identity"},{"type":"link","label":"IOTA Streams","href":"/integration-services/basics/streams","docId":"basics/streams"}],"collapsible":true},{"type":"link","label":"API Reference","href":"/integration-services/api_reference","docId":"api_reference"},{"type":"link","label":"Troubleshooting","href":"/integration-services/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"FAQ","href":"/integration-services/faq","docId":"faq"},{"type":"link","label":"Contribute","href":"/integration-services/contribute","docId":"contribute"},{"type":"link","label":"Contact","href":"/integration-services/contact","docId":"contact"}]},"docs":{"api_reference":{"id":"api_reference","title":"Integration Services API Documentation","description":"API Reference documentation for the integration Services.","sidebar":"docs"},"basics/identity":{"id":"basics/identity","title":"IOTA Identity","description":"IOTA Identity provides a digital identity anchored on the Tangle and verifiable credentials (VC) that are attachable to said identity.","sidebar":"docs"},"basics/streams":{"id":"basics/streams","title":"IOTA Streams","description":"IOTA Streams offers auditable encrypted data streams for any industry, ensuring data has not been modified throughout the industry data pipeline.channels.","sidebar":"docs"},"contact":{"id":"contact","title":"Contact","description":"For inquiries or questions regarding the Integration Services project, please contact Michele Nati (Head of Telecommunication and Infrastructure Development) <michele.nati@iota.org>.","sidebar":"docs"},"contribute":{"id":"contribute","title":"Contribute","description":"Contribute to the IOTA Integration Services by reporting a bug, suggesting a feature, contributing to the documentation or sharing your knowledge with others.","sidebar":"docs"},"examples/authorize-to-channel":{"id":"examples/authorize-to-channel","title":"Authorize Channel","description":"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.","sidebar":"docs"},"examples/create-channel":{"id":"examples/create-channel","title":"Create Channel","description":"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.","sidebar":"docs"},"examples/create-identity-and-credentials":{"id":"examples/create-identity-and-credentials","title":"Create Identity and Credentials","description":"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.","sidebar":"docs"},"examples/delete-users":{"id":"examples/delete-users","title":"Delete Users","description":"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.","sidebar":"docs"},"examples/how-to-run-examples":{"id":"examples/how-to-run-examples","title":"How To Run Examples","description":"This section will guide you on how to install, configure, and run the examples.","sidebar":"docs"},"examples/introduction":{"id":"examples/introduction","title":"Introduction","description":"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).","sidebar":"docs"},"examples/search-channel-and-validate-data":{"id":"examples/search-channel-and-validate-data","title":"Search Channel and Validate Data","description":"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.","sidebar":"docs"},"examples/trusted-authorities":{"id":"examples/trusted-authorities","title":"Trusted Authorities","description":"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.","sidebar":"docs"},"examples/update-users":{"id":"examples/update-users","title":"Update Users","description":"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user\'s username.","sidebar":"docs"},"faq":{"id":"faq","title":"FAQ","description":"Integration Services Frequently Asked Questions.","sidebar":"docs"},"getting_started/installation/docker_compose/docker_compose":{"id":"getting_started/installation/docker_compose/docker_compose","title":"Local Setup","description":"This section will guide in setting up the Integration Service API using Docker Compose.","sidebar":"docs"},"getting_started/installation/docker_compose/expose_apis":{"id":"getting_started/installation/docker_compose/expose_apis","title":"Expose APIs","description":"When you execute docker-compose it will run a database, setup job and service on the current host. The ports `3000` and `27017` will be exposed on the current host.","sidebar":"docs"},"getting_started/installation/kubernetes/configuration":{"id":"getting_started/installation/kubernetes/configuration","title":"Configuration","description":"This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes instance.","sidebar":"docs"},"getting_started/installation/kubernetes/expose_apis":{"id":"getting_started/installation/kubernetes/expose_apis","title":"Expose APIs","description":"Access your Integration Services API using ingress, port forwarding, a load balancer service or an Ingress Controller.","sidebar":"docs"},"getting_started/installation/kubernetes/local_setup":{"id":"getting_started/installation/kubernetes/local_setup","title":"Local Setup","description":"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.","sidebar":"docs"},"getting_started/installation/nodejs/local_setup":{"id":"getting_started/installation/nodejs/local_setup","title":"Local Setup","description":"This section will guide in setting up the Integration Service API using NodeJs.","sidebar":"docs"},"getting_started/overview":{"id":"getting_started/overview","title":"Overview","description":"You can install the Integration Services using Kubernetes, Docker-Compose or NodeJs.","sidebar":"docs"},"services/audit-trail-gateway/API-definition":{"id":"services/audit-trail-gateway/API-definition","title":"Software Architecture and APIs Definition","description":"The Audit Trail GW implementation provides a Channel Service, a Channel Info Service, and a Subscription Service.","sidebar":"docs"},"services/audit-trail-gateway/introduction":{"id":"services/audit-trail-gateway/introduction","title":"Ecommerce-Audit Trail Gateway (GW)","description":"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.","sidebar":"docs"},"services/audit-trail-gateway/use-cases":{"id":"services/audit-trail-gateway/use-cases","title":"Use Cases","description":"In the context of e-commerce and the ENSURESEC project, you can use the Audit Trail Gateway to share immutable and auditable data and events and guarantee the Immutability of Large Data Sets.","sidebar":"docs"},"services/SSI-bridge/API-definition":{"id":"services/SSI-bridge/API-definition","title":"Software Architecture and APIs Definition","description":"The SSI Bridge Service API implementation provides an Identity Service, Authentication Service, and Verification Service to integrate IOTA Identity seamlessly.","sidebar":"docs"},"services/SSI-bridge/introduction":{"id":"services/SSI-bridge/introduction","title":"Ecommerce-SSI Bridge","description":"The IOTA Ecommerce-SSI Bridge provides an abstraction layer through REST APIs that allows entities to create decentralized identities (DIDs), verify them, attach verifiable credentials and verify them.","sidebar":"docs"},"services/SSI-bridge/use-cases":{"id":"services/SSI-bridge/use-cases","title":"Use Cases","description":"In the context of e-commerce and the ENSURESEC project, you can use the SSI-Bridge to verify identities for products, customer, sellers, and clients.","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Troubleshoot any problems you may be having by joining our discord, creating a GitHub issue, or reviewing our Frequently Asked Questions.","sidebar":"docs"},"welcome":{"id":"welcome","title":"Welcome","description":"The IOTA Integration Services implement a high-level API for common interactions with decentralized identities and Data Streams.","sidebar":"docs"}}}')}}]);