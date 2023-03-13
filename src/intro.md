# Introduction to Helios

[Helios](https://github.com/Hyperion-BT/Helios) is a [DSL](./lang/index.md) (Domain Specific Language) for writing smart contracts for the [Cardano](https://www.cardano.org) blockchain.

The [Helios library](https://github.com/Hyperion-BT/Helios) is written in Javascript and has an [API](./api/index.md) for:
  * compiling Helios sources into [Plutus-Core](https://github.com/input-output-hk/plutus)
  * building and submitting transactions to the Cardano blockchain

## Code sample

```helios
// all Helios programs begin with a script purpose
spending always_true 

// the 'main' function contains the core validator logic
// returns true if a given UTxO is allowed to be spent
func main(_, _, _) -> Bool {
    // Helios is an expression based language
    true
}

// Note: the datum, redeemer, and scriptcontext are ignored by the underscores
```

## Structure of this book

Before starting to use Helios to create smart contracts and build DApps it is important to understand Cardano's eUTxO model very well. If you don't yet, we recommend you read the [Understanding eUTxOs](./understanding-eutxos.md) preface first.

[Chapter 1](./lang/index.md) covers the language itself, including a complete reference of the Helios builtins.

[Chapter 2](./api/index.md) covers setting up the Helios library, compiling smart contracts, and building and submitting smart contract transactions, using only Javascript.

[Chapter 3](./cli/index.md) covers how to use Helios smart contracts with *cardano-cli*.

[Chapter 4](./advanced-concepts/index.md) covers minting policies, exploits to be aware of, some more complex scripts, and some recommendations for building DApps.