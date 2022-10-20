# Understanding the eUTxO model

Before we get into any coding we first need to understand how smart contracts work on Cardano and how Cardano differs from the more conventional account-based model.

> **Note**: eUTxO is an abbreviation of *extended Unspent Transaction Outputs*

## Account-based model vs eUTxO model

Smart contracts on Cardano are quite different from those on Ethereum.

### Ethereum-style smart contracts (account-based)

When a transaction occurs on an account-based blockchain, the balance of the sender's account is directly decremented and that of the recipient is incremented, similar to how conventional bank accounts work.

Contracts interact with these balances and run via the EVM (Ethereum Virtual Machine). The EVM can be thought of as a global on-chain computer on which smart contracts take turns running, before their results are added to the chain.

>**Note**: the data of all accounts on Ethereum are stored in a [**Merkle-Patricia trie**](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/), which is like a fancy hashmap. After all the transactions in a block are run, the root hash of the block trie is added to the chain.

### The eUTxO model

In the eUTxO model tokens are stored in UTxOs. A UTxO is like (electronic)-cash where each individual bundle of bills (Ada and native-tokens) is stored separately.

A transaction in the UTxO model takes one or more UTxOs as **transaction inputs**, which are destroyed, and creates one or more UTxOs as **transaction outputs**.

Transactions in an account-based model mutate the data-points storing the total balances. This is very risky (regular banks are insured against this, and also have paper backups in case of mistakes, but blockchains have no such fallbacks). In the UTxO model only the "bills" that participate in a given transaction can potentially be affected (which is bad, but not catastrophic).

Of course a UTxO chain can emulate account-based chains (by storing all tokens in a single UTxO) and account-based chains can emulate UTxO chains (by spreading a user's balance over many different accounts).

## Components of a UTxO on Cardano

UTxOs have 3 main components:
- an address
- tokens (Ada and other native assets)
- a datum

### Address

The address of a UTxO determines the owner (i.e. who has the right to spend it).

A user's balance is calculated by summing all UTxOs sitting at addresses *owned* by that user.

An address can either be derived from the hash of a user's public key ([`PubKeyHash`](./lang/builtins/pubkeyhash.md) in Helios), or the hash of a validator script ([`ValidatorHash`](./lang/builtins/validatorhash.md) in Helios). In the latter case the script effectively becomes the owner of the UTxO.

### Tokens

Each UTxO contains some tokens, which represent value on the blockchain. Tokens have positive value due to scarcity (tokens can't be duplicated) and utility (eg. Ada being used to pay transaction fees).

### Datum

The *datum* is data that is attached to UTxOs. A datum represents the state of a smart contract, and is immutable (smart contract state can change though, by spending old UTxOs and creating new ones).

The 'e' (*extended*) in eUTxO comes from the datum. The Bitcoin UTxO model doesn't have datums, giving Bitcoin scripts very limited capabilities. *Extending* the UTxO model, as done by Cardano and Ergo, gives an eUTxO model the same capabilities as an account-based model, while benefitting from a much safer approach to transactions (because a global state isn't being accessed/mutated).

## Validator scripts

A validator script is a function that is evaluated when a transaction attempts to spend a UTxO locked at that script's address. This function takes 3 arguments:
  * the datum attached to the UTxO
  * some data provided by the user who created the transaction (the *redeemer*)
  * details about the transaction (the *script context*)
   
The validator script then calculates whether or not the UTxO is allowed to be spent (essentially returning a boolean result).

Separating the validation logic from the transaction building/submitting logic makes it much easier to audit the trusted part of eUTxO DApps.

Helios is all about writing these validator scripts.

> **Note**: a UTxO can only be spent once. In every transaction all input UTxOs are destroyed, and new output UTxOs are created.

> **Note**: a valid transaction must satisfy the following conditions:
> - the transaction must be balanced: the total amount of tokens in the transaction inputs must be equal to those in the transaction outputs (minus the fees, plus the minted tokens).
> - the validators for all the transaction inputs must evaluate to `true`.

## Pros and cons of the eUTxO Model

### Pros

- #### Deterministic transaction fees

  eUTxO smart contract evaluation is deterministic. This means that you can calculate the resource usage of a transaction before posting it to the blockchain. The transaction fees for a transaction can thus be calculated deterministically off-chain.
  
  The transaction fees of account-based blockchains depend on network load, and can vary a lot.

- #### Transaction fees not charged upon failure
  The determinism of the eUTxO model means that transaction success can be determined before posting. Transaction failure is still possible due to contention, but this is a very cheap check, and no fee is charged.
  
  Transaction failure on account-based blockchains results in losing the fee, as significant processing power might've been used before encountering the failure condition.


- #### Easier to audit

  Auditing of eUTxO smart contracts is much easier because only the validation function needs to be audited, which has a very **locally-scoped** nature.

- #### Concurrency

  Due to monetary value being naturally spread over many UTxOs, a UTxO blockchain can be compared to an extremely sharded account-based blockchain (some smart contracts might require a centralized data-point though, and won't allow concurrent interactions, see [contention](#contention)).

- #### Better for layer 2

  The local nature of UTxOs allows reusing validation logic in layer 2 scaling solutions
  such as state channels (see [hydra](https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/)). 

- #### Simpler

  Though not immediately obvious, eUTxO smart contracts are often much simpler than an equivalent Solidity smart contract (this will become apparant when you start to use Helios).

### Cons

- #### Contention

  If eUTxO contracts aren't designed properly they can encounter *contention* problems. Contention occurs when two or more transactions try to spend the same UTxO. If this happens only one of the transactions will succeed, and the others will fail (resulting in an unpleasant user experience).

  This is usually not an issue on Ethereum because the EVM handles ordering smart contract calls.

  > **Note**: there are ways to avoid contention, by for example taking advantage of the parallel nature of UTxOs (see SundaeSwap's [scooper model](https://sundaeswap.finance/posts/sundaeswap-scalability))

## Further reading

If you feel like you still don't fully understand the eUTxO model, we recommend you keep reading:
  * [Learning Ergo 101 : eUTXO explained for human beings](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e), a great blog post by [David Pryzbilla](https://github.com/dav009)