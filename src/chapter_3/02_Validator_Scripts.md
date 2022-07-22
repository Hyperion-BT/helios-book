# Validator Scripts

In the last chapter we learnt that validators are functions that return a boolean (`true`  or `false`) when validating a transaction. In Helios validators are functions that take three arguments:

- The Redeemer: A piece of data attached to the transaction.
- The Datum: Data stored onchain linked to the UTXO.
- The ScriptContext: This is huge struct that holds data about the transaction spending the UTXO.

The Redeemer and the Datum are user-defined but the `ScriptContext` struct is the same across all validators.

A simple validator

```rust
validator always_true;       // -------- (1)

struct DummyRedeemer {..}

struct DummyDatum {..}

func main(redeemer: DummyRedeemer, datum: DummyDatum, ctx: ScriptContext) -> Bool {       
    ...
    true                     
}
```

(1) In Helios all scripts start with a  **script purpose** followed by the name of the script. There are three(3) script purposes currently:

- **validator**
- **minting_policy**
- **test**

We will cover the latter two in later chapters.

The above validator could be rewritten as:

```rust
validator always_true;     

func main(ctx: ScriptContext) -> Bool {        // -------- (2)
    ...
    true                     
}
```

**Note**: The Helios compiler is smart enough to fill in a blank redeemer and datum when they are omitted(2).

The next page cover the ScriptContext.
