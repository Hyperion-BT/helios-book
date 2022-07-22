# The EUTXO Model

This section wouldn't be possible without [this](https://dav009.medium.com/learning-ergo-101-blockchain-paradigm-eutxo-c90b0274cf5e) great blog post by the awesome [David Pryzbilla](https://github.com/dav009).

## Accounts Model vs EUTXO Model

Smart contracts on Cardano are quite different from those on Ethereum.

### Ethereum-style Smart Contracts (Accounts Model)

Ethereum and other EVM-based blockchains use the Accounts model in which there are user wallets
and smart contracts are represented using `accounts` which are like objects stored onchain.

Contracts on Ethereum run via the EVM(Ethereum Virtual Machine),
the EVM can be thought of as a sort global onchain computer that smart contracts take turns to run on before being accepted onChain.

### Components of a UTXO

On EUTXO blockchain the ledger is made up of many UTXOs(Unspent Transcation Outputs). A UTXO has three components:

- tokens(Native Cardano Tokens
- A Validator Script
- A Datum.

#### Datums

These are data stored onChain associated with a particular UTXO. This is used to store state in Smart Contracts.
**Note**: To be exact on Cardano previously the Datum couldn't be stored onChain but as of PlutusV2 we now have actual onChain(inline) datums.

#### Validators

A validators is a function that runs when a transaction attempts to spend a UTXO,
it returns a boolean which determines if the UTXO can be spent.
Validators contain the 'business logic' of a smart contract.

For example for a simple swap one could lock up some tokens in a UTXO with a validator that returns `true` if **x** amount of ADA is sent to your address.

A UTXO can only be spent once. In every transaction some UTXOs are destroyed,
**Transaction Inputs (TxInputs)** and new UTXOs are created, **Transaction Inputs**.
For a transaction to be valid it must satisfy some things:

- The total amount of tokens in the **Transaction Inputs** must be equal to those in the **Transaction Ouputs**.
- The validators for all the **Transaction Inputs** must evaluate to `true`.

## Pros and Cons of the EUTXO Model

### Pros

- **No Gas Fees**

    EUTXO contracts are deterministic this means that you can verify if a transaction will suceed before posting it to the blockchain.
    This is means no gas fees.

- **Easier to Audit**

    The **locally-scoped** aspect of EUTXO contracts reduces the potential attack surface by a lot.
    This makes auditing way easier because you're auditing a **single** function.

- **Concurrency**
    If designed properly EUTXO smart contracts paired with

- **Better for Layer 2s**

    The local nature of EUTXO lends itself well to building Layer 2 scaling solutions
    such as sidechains(Milkomeda), state channels

- **Simpler**
    Though not immediately obvious EUTXO smart contracts are often simpler than
    an equivalent Solidity smart contract.

- **No Reentrancy Attacks**
    Reentrancy attacks such as the [DAO hack](https://en.wikipedia.org/wiki/The_DAO_(organization)).

### Cons

- **Concurrency Issues**: If EUTXO contracts aren't designed properly they can encounter **contention**. **Contention** occurs when two transaction try
to spend the same UTXO, this isn't possible and leads to UX issues.
This is not usually an issue on Ethereum as the EVM usually handles ordering smart contract calls.

    It's best to keep this in mind when designing smart contracts.

## Summary

It's totally normal if you're still confused about EUTXO it's not immediately intuitive.
In EUTXO smart contracts are more about specifying the requirements for tokens to be spent.
It is worth the extra effort as it often leads to contracts that are simpler overall.

I advise your read the article linked at the top even if you understand EUTXO, it's
written for the Ergo blockchain but a lot of the concepts carry over into cardano.
