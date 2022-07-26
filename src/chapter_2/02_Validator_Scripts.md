# Validator Scripts

In the last chapter we learnt that validators are functions that return a boolean (`true`  or `false`) when validating a transaction. In Helios validators are functions that take three arguments:

- The Redeemer: A piece of data attached to the transaction.
- The Datum: Data stored onchain linked to the UTXO.
- The ScriptContext: This is huge struct that holds data about the transaction spending the UTXO.

The Redeemer and the Datum are user-defined but the `ScriptContext` struct is the same across all validators.

A simple validator

```rust
validator always_true;       // -------- (1)

struct Datum {..}           // --------- (2)

enum Redeemer {..}          // --------- (3)
                            
// ------------- (4)
func main(datum: Datum, redeemer: Redeemer, ctx: ScriptContext) -> Bool {
    ...
    true                     
}
```

## Script Purpose

In Helios all scripts start with a  **script purpose**, followed by the name of the script. There are three (3) script purposes currently:

- **validator**
- **minting_policy**
- **test**

We will cover the latter two in later chapters.

```rust, noplaypen
validator always_true;
```

## The Main Function

The main function of a validator accepts three arguments and returns a `Bool`:

- **The Datum** (2)
- **The Redeemer** (3)
- **The ScriptContext**

```go, noplaypen
struct Datum {..}

struct Redeemer {..}

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    ...
    true
}
```

>**Note**: The Datum and the Redeemer are user-defined types (structs or enums) that **must** be named `Datum` and `Redeemer`.

## AlwaysTrue Validator

```go, noplaypen
validator always_true;

struct Datum {..}

struct Redeemer {..}

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    ...
    true
}
```

## Omitting The Datum and The Redeemer

The above validator could be rewritten as:

```rust
validator always_true;     

func main(ctx: ScriptContext) -> Bool {        // -------- (2)
    ...
    true                     
}
```

>**Note**: The Helios compiler is smart enough to fill in a blank redeemer and datum when they are omitted.

Most of the data needed for writing usefull validators is contained in the `ScriptContext`.
We will cover the `ScriptContext` in the next page.
