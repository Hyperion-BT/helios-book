# Understanding The eUTXO Model

This section wouldn't be possible without [this](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e) great blog post by the awesome [David Pryzbilla](https://github.com/dav009) and a lot of helpful feedback from [Christian Smitz]().

## Accounts Model vs eUTXO Model

Smart contracts on Cardano are quite different from those on Ethereum.

### Ethereum-style Smart Contracts (Accounts-based Model)

When a transaction occurs, the balance of one the sender's account is directly decremented and that of the recipient is incremented, like with a bank account.

Contracts on Ethereum run via the EVM(Ethereum Virtual Machine),
the EVM can be thought of as a sort global onchain computer that smart contracts take turns to run on before being accepted onchain.

>**Note**: The data of all accounts on Ethereum are stored in a **Merkle-Patricia Trie**.
>After all the transaction in a block are run the **root hash** of the new Trie is included in the block.

## The eUTXO Model

In the UTXO model tokens are stored in UTXOs (Unspent Transaction Outputs).
A UTXO is like (electronic)-cash where an individual bundle of bills (Ada and native-tokens) is stored separately.

In a transaction in the UTXO model, one or more UTXOs are used as inputs to the transaction and destroyed, **Transaction Inputs** and one or more UTXOs are created as the result/output of a transaction, **Transaction Outputs**.

Transactions in the accounts-based model mutate the data-points storing the total amounts (this is ***very, very* dangerous** regular banks have special insurances and paper backups in case of mistakes, blockchains have no such systems).
In the UTXO model only the "bills" that participate in a given transaction can potentially be lost (bad, but nothing catastrophic).

A UTXO chain can emulate account-based models (for example the [Fuel Rollup](https://fuel.network) uses UTXOs under the hood for parallel execution) and vice versa.

### Components of a UTXO on Cardano

On eUTXO blockchain the ledger is made up of many UTXOs(Unspent Transcation Outputs). A UTXO has four main components:

- An Address
- Tokens (Native Assets)
- A Validator Script
- A Datum.

#### The Address

The address of a UTXO is used to determine who owns the UTXO (who has the right to spend it in a transaction).
To know the balance of a user wallets searches the ledger for all UTXOs *owned* by the user's address and their total value is the user's balance.

An address can be either be derived from the hash of a user's public key (`PubKeyHash` in Helios) or the hash of a validator script (`ValidatorHash`).

#### Datums

These are data stored onChain associated with a particular UTXO.
The Datum is used to store state in Smart Contracts.
The 'e' in eUTXO comes from the Datum, this is because the addition of a datum makes the eUTXO model Turing-Complete (like Ethereum smart contracts and unlike Bitcoin Script).
With this state anything that an account-based model can do also be done with a eUTXO-based model.

>**Note**: To be exact on Cardano previously the Datum couldn't be stored onChain but as of PlutusV2 we now have actual onChain(inline) datums.

#### Validators

A validators is a function that runs when a transaction attempts to spend a UTXO.
It takes in the data of the transaction and returns a boolean which determines if the UTXO can be spent.
Validators contain the 'business logic' of a smart contract.

For example for a simple vesting contract one could lock up some tokens in a UTXO with a validator which returns `true` if the transaction is signed by the beneficiary.

>**Note**: A UTXO can only be spent once. In every transaction some UTXOs are destroyed,
>**Transaction Inputs (TxInputs)** and new UTXOs are created, **Transaction Inputs**.
>For a transaction to be valid it must satisfy some things:
>
> - The total amount of tokens in the **Transaction Inputs** must be equal to those in the **Transaction Ouputs**.
> - The validators for all the **Transaction Inputs** must evaluate to `true`.

## Pros and Cons of the eUTXO Model

### Pros

#### Fixed Transaction Fees

eUTXO contracts are deterministic this means that you can verify if a transaction will suceed and it's resource usage before posting it to the blockchain.
This is means the transaction fees for a transaction are fixed  and can be deterministically calculated offchain.
On Account-based blockchains transaction fees can vary **a lot**.

#### Easier to Audit

The **locally-scoped** nature of eUTXO contracts reduces the potential attack surface by a lot.
This makes auditing way easier because you're auditing a **the validation** function and the space of possible outcomes is greatly reduced.

#### Concurrency

If designed properly eUTXO smart contracts can be very parallel.

#### Better for Layer 2s

The local nature of UTXOs lends itself well to building Layer 2 scaling solutions
such as sidechains(Milkomeda), state channels

#### Simpler

Though not immediately obvious eUTXO smart contracts are often simpler than an equivalent Solidity smart contract.

#### No Reentrancy Attacks

Reentrancy attacks such as the [DAO hack](https://en.wikipedia.org/wiki/The_DAO_(organization)).

### Cons

- **Concurrency Issues**: If eUTXO contracts aren't designed properly they can encounter **contention**. **Contention** occurs when two transaction try
to spend the same UTXO, this isn't possible and leads to UX issues.
This is not usually an issue on Ethereum as the EVM usually handles ordering smart contract calls.

    It's best to keep this in mind when designing smart contracts.

## Summary

It's totally normal if you're still confused about eUTXO it's not immediately intuitive.
In eUTXO smart contracts are more about specifying the requirements for tokens to be spent.
It is worth the extra effort as it often leads to contracts that are simpler overall.

I advise your read the article linked at the top even if you understand eUTXO, it's
written for the Ergo blockchain but a lot of the concepts carry over into cardano.
