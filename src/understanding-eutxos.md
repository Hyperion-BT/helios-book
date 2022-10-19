# Understanding the eUTxO model

Before we get into any coding we need to first understand how smart contracts work on Cardano
and how it differs from the more conventional account-based model.

This section wouldn't be possible without [this](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e) great blog post by the awesome [David Pryzbilla](https://github.com/dav009) and a lot of helpful feedback from [Christian Schmitz](https://github.com/christianschmitz).

## Account-based vs eUTxO

Smart contracts on Cardano are quite different from those on Ethereum.

### Ethereum-style Smart Contracts (account-based)

When a transaction occurs, the balance of one the sender's account is directly decremented and that of the recipient is incremented, similar to how conventional bank accounts work.

Contracts on Ethereum run via the EVM (Ethereum Virtual Machine), the EVM can be thought of as a global on-chain computer which smart contracts take turns running on, before their results are accepted on-chain.

>**Note**: The data of all accounts on Ethereum are stored in a [**Merkle-Patricia Trie**](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/), which is kind of like a fancy hashmap.
> After all the transactions in a block are run the **root hash** of the new Trie is included in the block.

## The eUTxO Model

In the UTxO model tokens are stored in UTxOs (Unspent Transaction Outputs).
A UTxO is like (electronic)-cash where an individual bundle of bills (Ada and native-tokens) is stored separately.

In a transaction in the UTxO model, one or more UTxOs are used as inputs to the transaction and destroyed, **Transaction Inputs** and one or more UTxOs are created as the result/output of a transaction, **Transaction Outputs**.

Transactions in the accounts-based model mutate the data-points storing the total amounts (this is **very risky**; regular banks have special insurances and paper backups in case of mistakes, blockchains have no such fallbacks).
In the UTxO model only the "bills" that participate in a given transaction can potentially be lost (bad, but not catastrophic).

Of course a UTxO chain can emulate account-based models (for example the [Fuel Rollup](https://fuel.network) uses UTxOs under the hood for parallel execution) and vice versa.

### Components of a UTxO on Cardano

On eUTxO blockchain the ledger is made up of many UTxOs (Unspent Transaction Outputs). A UTxO has four main components:

- An Address
- Tokens (Native Assets)
- A Validator Script
- A Datum.

#### The Address

The address of a UTxO is used to determine who owns the UTxO (who has the right to spend it in a transaction).
To know the balance of a user wallets searches the ledger for all UTxOs *owned* by the user's address and their total value is the user's balance.

An address can be either be derived from the hash of a user's public key (`PubKeyHash` in Helios) or the hash of a validator script (`ValidatorHash`).

#### Datums

These are data stored onchain associated with a particular UTxO.
The Datum is used to store state in Smart Contracts.
The 'e' in eUTxO comes from the Datum, this is because the addition of a datum makes the eUTxO model Turing-Complete (like Ethereum smart contracts and unlike Bitcoin Script).
With this state anything that an account-based model can do also be done with a eUTxO-based model.@hyperionbt/helios"

>**Note**: To be exact on Cardano previously the Datum couldn't be stored onchain but as of Plutus V2 we now have actual *onchain/inline* datums.

#### Validators

A validators is a function that runs when a transaction attempts to spend a UTxO.
It takes in the data of the transaction and returns a boolean which determines if the UTxO can be spent.
Validators contain the 'business logic' of a smart contract.

For example for a simple vesting contract one could lock up some tokens in a UTxO with a validator which returns `true` if the transaction is signed by the beneficiary.

>**Note**: A UTxO can only be spent once. In every transaction some UTxOs are destroyed,
>**Transaction Inputs (TxInputs)** and new UTxOs are created, **Transaction Inputs (TxOutputs)**.
>For a transaction to be valid it must satisfy some things:
>
> - The total amount of tokens in the **Transaction Inputs** must be equal to those in the **Transaction Ouputs**.
> - The validators for all the **Transaction Inputs** must evaluate to `true`.

## Pros and Cons of the eUTxO Model

### Pros

- #### Fixed Transaction Fees

  eUTxO contracts are deterministic this means that you can verify if a transaction will suceed and it's resource usage before posting it to the blockchain.
  This is means the transaction fees for a transaction are fixed  and can be deterministically calculated offchain.
  On Account-based blockchains transaction fees can vary **a lot**.

- #### Easier to Audit

  The **locally-scoped** nature of eUTxO contracts reduces the potential attack surface by a lot.
  This makes auditing way easier because you're auditing a **the validation** function and the space of possible outcomes is greatly reduced.

- #### Concurrency

  If designed properly eUTxO smart contracts can be very parallel.

- #### Better for Layer 2s

  The local nature of UTxOs lends itself well to building Layer 2 scaling solutions
  such as sidechains(Milkomeda), state channels

- #### Simpler

  Though not immediately obvious eUTxO smart contracts are often simpler than an equivalent Solidity smart contract.

- #### No Reentrancy Attacks

  Reentrancy attacks such as the [DAO hack](https://en.wikipedia.org/wiki/The_DAO_(organization)).

### Cons

- #### Contention

  If eUTxO contracts aren't designed properly they can encounter *contention*.
  Contention occurs when two transaction try to spend the same UTxO,
  this isn't possible and leads to UX issues like in the case of [Minswap in the past]().
  This is not usually an issue on Ethereum as the EVM usually handles ordering smart contract calls.

  >**Note**: There are ways to take advantage of the avoid contention and take advantage of
  > the parallel nature of UTxOs instead of struggling with the such as SundaeSwap's [scooper model]().
  >
  > These approaches usually use *offchain batching* to execute 'batches' of UTxOs in a single efficient transaction.
  > This can be done trustlessy as a UTxO can't be spent in a transaction unless it's validator is satisfied.

## Summary

It's totally normal if you're still confused about eUTxO it's not immediately intuitive.
It is worth the extra effort in rewiring you're thinking as it often leads to contracts that are simpler and safer overall.

I advise you to read [this article](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e) top even if you understand eUTxO, it's written for the Ergo blockchain but a lot of the concepts carry over into cardano.
