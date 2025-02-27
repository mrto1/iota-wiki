---
description: 'As Shimmer is an innovation network, you will always find more features like NFTs, native tokens, and smart contracts
than on the IOTA network at the cost of some stability.'
image: /img/shimmer-wiki.png
---

# Layer 1 Networks in the IOTA Ecosystem

:::note tl;dr;

As Shimmer is an innovation network, you will always find more features like NFTs, native tokens, and smart contracts than on the IOTA network at the cost of some stability.

:::

You can use this section to get a high-level overview of the IOTA and Shimmer networks.

## High-Level Overview

|                                                                | IOTA                                                     | Shimmer                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Protocol                                                       | [Chrysalis](https://wiki.iota.org/introduction/welcome/) | [Stardust](../what-is-stardust/what-is-stardust.md)                                                                                                                                                                                                                               |
| [Stability](#stability)                                        | Excellent                                                | Good                                                                                                                                                                                                                                                                              |
| Transaction fees                                               | None                                                     | None                                                                                                                                                                                                                                                                              |
| Native token                                                   | IOTA                                                     | SMR                                                                                                                                                                                                                                                                               |
| Data structure                                                 | DAG(Tangle)                                              | DAG(Tangle)                                                                                                                                                                                                                                                                       |
| Value transactions                                             | Yes                                                      | Yes                                                                                                                                                                                                                                                                               |
| [Store data](#store-data)                                      | Yes, with Proof of Inclusion                             | Yes, with Proof of Inclusion                                                                                                                                                                                                                                                      |
| [Tokenization](#tokenization)                                  | None                                                     | NFTs, Native Tokens, Alias Outputs                                                                                                                                                                                                                                                |
| [Storage deposits](#storage-deposits)                          | None                                                     | Yes                                                                                                                                                                                                                                                                               |
| [Output unlock conditions](#output-unlock-conditions)          | [Address](../what-is-stardust/unlock-conditions.md)      | [Address](../what-is-stardust/unlock-conditions.md), [Storage Deposit Returns](../what-is-stardust/unlock-conditions.md#storage-deposit-return), [Expiration](../what-is-stardust/unlock-conditions.md#expiration), [Timelock](../what-is-stardust/unlock-conditions.md#timelock) |
| [IOTA Smart Contract (ISC)](#iota-smart-contracts-isc) Support | No                                                       | In alpha state                                                                                                                                                                                                                                                                    |

## Stability

Shimmer is designed as a staging network to test features publicly before deploying them on the IOTA network, so it
will always have more features than IOTA. As this may come at the cost of some stability, before any protocol changes are deployed on the [Shimmer Mainnet](https://wiki.iota.org/shimmer/develop/endpoints/shimmer/), they have been tested
in the [Shimmer Testnet](https://wiki.iota.org/shimmer/develop/endpoints/testnet/).

## Store Data

### IOTA

In IOTA, you can attach
an [IndexationPayload](https://wiki.iota.org/learn/about-iota/messages/#indexation-payload)
to a [message](https://wiki.iota.org/learn/about-iota/messages/) or
any `SignedTransaction`.
The IndexationPayload allows you to add an index to a data message and arbitrary data.

### Shimmer

#### INX-Poi

You can use the [INX-PoI](https://wiki.iota.org/shimmer/inx-poi/welcome/) node extension to verify if any piece of data
was included in the Tangle. This feature does not rely on the [Chronicle](https://wiki.iota.org/shimmer/chronicle/welcome/)
permanode, so it drastically reduces the node operator's storage requirements.

#### Tagged Data Payload

You can use a [Tagged Data Payload](https://wiki.iota.org/shimmer/tips/tips/TIP-0023/) to attach binary data and a tag
to extend an object with arbitrary data.

## Tokenization

### IOTA

The IOTA network does not support custom tokens yet.

### Shimmer

The Stardust protocol introduces
a [tokenization framework](../what-is-stardust/tokenization.md)
that enables [Alias outputs](../../how-tos/alias/introduction.mdx),
[NFTs](../../how-tos/nft/introduction.mdx)
and [native tokens and foundries](../../how-tos/native-token/introduction.mdx)
on layer 1, as long as you can cover the
minimum [storage deposit](#storage-deposits).

## Storage Deposits

### IOTA

There are no data storage deposits in the IOTA network, as it relies on [dust protection](https://wiki.iota.org/introduction/reference/details/#dust-protection), which means you can only
send microtransactions of less than 1Mi if the target address meets the [dust protection validation conditions](https://wiki.iota.org/tips/tips/TIP-0015/#validation).

### Shimmer

The Stardust protocol improves IOTA dust protection by
introducing [storage deposits](../what-is-stardust/storage-deposit.md).
You must back up any data you store on the Tangle
with [SMR tokens](tokens-and-wallets.md#storage-deposits). **The
deposit is not a fee**, and it can be refunded as soon as the output is cleaned up.

## Output Unlock Conditions

### IOTA

At the time, IOTA's Chrysalis protocol only allows the
traditional [address](../what-is-stardust/unlock-conditions.md#address)
unlock condition. That is to say, outputs in Chrysalis can only be unlocked by whoever controls the keys associated with the target address.

### Shimmer

The Stardust protocol introduces
new [output unlock conditions](../what-is-stardust/unlock-conditions.md)
that allow you to specify not only
the [unlock address](../what-is-stardust/unlock-conditions.md#address),
but also:

- [Storage deposit return](../what-is-stardust/unlock-conditions.md#storage-deposit-return):
  This feature allows you to specify a return amount that has to be refunded to the sender's account, which enables
  micro-transactions of any size.
- [Expirations](../what-is-stardust/unlock-conditions.md#expiration):
  If you define an expiration date-time for your output, it will be returned if it hasn't been claimed by said
  date-time.
- [Time-locks](../what-is-stardust/unlock-conditions.md#timelock):
  Conversely to expirations, you can also specify a date-time until which the recipient won't be able to claim the
  output.

## IOTA Smart Contracts (ISC)

You can use [IOTA Smart Contracts (ISC)](https://wiki.iota.org/shimmer/smart-contracts/overview/) to deploy your own
[scalable](https://wiki.iota.org/shimmer/smart-contracts/overview/#scaling-and-fees)
and [flexible](https://wiki.iota.org/shimmer/smart-contracts/overview/#flexibility) smart contracts to the
IOTA ecosystem.

### Ethereum Virtual Machine (EVM) Support

You can use [Ethereum Virtual Machine (EVM)](https://wiki.iota.org/shimmer/smart-contracts/guide/evm/introduction/)
smart contracts on any IOTA smart contract chain by using
the [`evm`](https://wiki.iota.org/shimmer/smart-contracts/guide/core_concepts/core_contracts/evm/) [core contract](https://wiki.iota.org/shimmer/smart-contracts/guide/core_concepts/core_contracts/overview/)
that can run the EVM/Solidity based smart contracts.

#### JSON-RPC

You can also interact with the EVM layer using tools
like [MetaMask](https://metamask.io/), [Remix](https://remix.ethereum.org/) or [Hardhat](https://hardhat.org/) by
pointing the JSON-RPC service included in Wasp nodes.

### IOTA

The IOTA network does not yet support IOTA Smart Contracts.

### Shimmer

You can use the ISC protocol
by [spinning up your own private Tangle with the preconfigured Docker image](https://github.com/iotaledger/wasp/tree/develop/tools/local-setup).
