# Validator Scripts

In the previous chapter we learned that validators are functions that return a boolean (`true`  or `false`) when validating a transaction. In Helios validators are functions that take three arguments:

- The Redeemer: A piece of data attached to the transaction.
- The Datum: Data stored onchain linked to the UTXO.
- The ScriptContext: This is huge struct that holds data about the transaction spending the UTXO.

The Redeemer and the Datum are user-defined but the `ScriptContext` struct is the same across all validators.

A simple validator

```rust
spending always_true        // -------- (1)

struct Datum {..}           // --------- (2)

enum Redeemer {..}          // --------- (3)
                            
// ------------- (4)
func main(datum: Datum, redeemer: Redeemer, ctx: ScriptContext) -> Bool {
    ...
    true                     
}
```

## Script Purpose

In Helios all scripts start with a  **script purpose**(1), followed by the name of the script. There are four script purposes currently:

- **spending**
- **minting**
  **staking**
- **testing**

In this chapter we are only concerned with the `spending` script purpose. We will cover the remaining three in later chapters.

```rust, noplaypen
spending always_true
```

## The Main Function

The main function of a validator accepts three arguments and returns a `Bool`:

- **The Datum** (2)
- **The Redeemer** (3)
- **The ScriptContext**

```go, noplaypen
spending my_validator

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    ...
}
```

Most of the data needed for writing useful validators is contained in the `ScriptContext`.
We will cover the `ScriptContext` in the next page.

>**Note**: The Datum and the Redeemer are user-defined types (structs or enums) that **must** be named `Datum` and `Redeemer`.


## AlwaysTrue Validator

This basic script allows UTXOs to be spent any way the user wants:

```go, noplaypen
spending always_true

func main() -> Bool {
    true
}
```

Unused arguments must be eliminated. In this case all three arguments of `main` function must be omitted (the compiler is smart enough to add them internally).
