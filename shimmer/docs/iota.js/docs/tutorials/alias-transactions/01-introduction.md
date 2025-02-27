---
description: "Get acquainted with the structure and functionality of transactions in IOTA's Stardust protocol in the
Shimmer network using iota.js primitives to issue transactions involving Alias Outputs."
image: /img/client_banner.png
keywords:

- tutorial
- UTXO
- alias
- shimmer
- ledger
- outputs
- inputs

---

# Stardust for iota.js: Alias Transactions

This tutorial will get you acquainted with the structure and functionality of [Alias Transactions](https://wiki.iota.org/shimmer/introduction/explanations/ledger/alias) in
IOTA's [Stardust protocol](https://wiki.iota.org/shimmer/introduction/welcome) in
the [Shimmer network](https://shimmer.network) using [iota.js](https://github.com/iotaledger/iota.js) primitives to
issue transactions that involve Alias Output.

## Introduction

Starting from [Chrysalis](https://wiki.iota.org/introduction/welcome), IOTA is
a [UTXO-based (Unspent Transaction Output)](https://wiki.iota.org/introduction/reference/details#unspent-transaction-output-utxo)
Ledger. Each UTXO, also known as **output**, has an associated number of tokens that determines its value.
Thus, the permanent data on the ledger is composed of a set of records (_outputs_) that can be unlocked by the owner of
its associated address, i.e., the one who knows the address' private key.

There are different [output types](https://wiki.iota.org/shimmer/learn/outputs). This tutorial series will only focus on
**Alias Outputs** known as [`IAliasOutput`](./../../references/client/interfaces/IAliasOutput.md). Alias Outputs are
generated by transactions that unlock and consume already existing outputs. When a transaction consumes them, these
outputs turn into inputs and generate new outputs, typically another Alias Output with the same Alias ID but in a different state. At pruning time, _consumed outputs_ will be removed by Nodes.

## Storage Costs and Deposits

You need to take into account that Alias Output as any other UTXOs need to be stored by [Hornet Nodes](https://wiki.iota.org/shimmer/hornet/welcome), so there is a [storage cost](https://wiki.iota.org/shimmer/iota.js/tutorials/value-transactions/introduction/#storage-costs-and-deposits).
