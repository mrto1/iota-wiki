---
description:  'How to manage a chain using the Grafana dashboard, a client to receive published events, logging, and
validators.'
image: /img/logo/WASP_logo_dark.png
keywords:

- Smart Contracts
- Chain
- Management
- Grafana

---

# Chain Management

## Monitoring

You can view the chain state using the dashboard (`<URL>/wasp/dashboard` when using `node-docker-setup`).

## Managing Chain Configuration and Validators

You can manage the chain configuration and committee of validators by interacting with
the [Governance contract](../core_concepts/core_contracts/governance.md).

The “Chain Owner” is the only one who can perform administrative tasks.

### Changing Chain Ownership

To change the chain ownership, the current “Chain Owner” must call `delegateChainOwnership` specifying the `agentID` of
the next owner. The next owner must call `claimChainOwnership` to finalize the process.

### Changing Access Nodes

For new access nodes to join the network, they need to:

- Be added as a trusted peer to at least 1 of the existing nodes.
- Be added by the administrator to the list of access nodes by calling `changeAccessNodes`. There is a helper in
  wasp-cli to do so:

```shell
wasp-cli chain gov-change-access-nodes accept <pubkey (0x...)>
```

After this, new nodes should be able to sync the state and execute view queries (call view entry points).

You can remove an access node by calling `changeAccessNodes`.

Alternatively, to add any node as an "access node", you can add "non-permissioned" access nodes, without the signature from the chain owner.
You can do this by using the following command:

```shell
wasp-cli chain access-nodes <add|remove> <pubkey (0x...)>
```

This node won't be "officially" recognized by the committee, but will still be able to sync the state and provide all regular functionality.

### Changing the Set of Validators

You can do this in different ways, depending on whom the
[governor address](https://wiki.iota.org/shimmer/introduction/explanations/ledger/alias) of the alias output of the
chain is.

- If the chain governor address is the chain committee, you can perform the rotation by calling
  `rotateStateController` after adding the next state controller via `addAllowedStateControllerAddress`.
- If the chain governor address is a regular user wallet (that you control), you can issue the rotation transaction using wasp-cli:

```shell
wasp-cli chain rotate <new controller address>
```

or:

```shell
wasp-cli chain rotate-with-dkg --peers=<...>
```
