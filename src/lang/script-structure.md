# Structure of a script

Helios validator scripts have a function called `main` that returns a boolean (`true`  or `false`) when validating the spending of a UTxO. 

`main` takes three optional arguments:

- `Datum`: data stored on-chain that is linked to the locked UTxO
- `Redeemer`: data specified by the user attempting to spend the locked UTxO
- [`ScriptContext`](./builtins/scriptcontext.md): information about the transaction spending the locked UTxO

`Datum` and `Redeemer` are user-defined but [`ScriptContext`](./builtins/scriptcontext.md) is a builtin type.

The structure of a validator script looks as follows:

```helios
// --- (1) ---
spending my_validator       

// --- (2) ---
struct Datum {..}           

// --- (3) ---
enum Redeemer {..}          
                            
// --- (4) ---
func main(datum: Datum, redeemer: Redeemer, ctx: ScriptContext) -> Bool {
    ...                  
}

// --- (5) ---
const MY_DATUM = Datum {...}
```

> **Note**: there are is no `import` statement. This was done on purpose as smart contracts that fit in single source/file are easier to audit (and import functionality can be emulated at the API level).

## Script purpose (1)

In Helios all scripts start with a  **script purpose**, followed by the name of the script. There are four script purposes currently:
  - **spending**
  - **minting**
  - **staking**
  - **testing**

Here we are only concerned with the `spending` script purpose:

```helios
spending my_validator

...
```

`minting`, `staking` and `testing` will be covered in the [advanced concepts](./advanced-concepts/index.md) chapter.

## Datum (2)

Each UTxO locked at a script address will also have an associated datum. The script can choose to use the datum as part of the spending validation, or it can choose to ignore the datum if it is irrelevant.

If the script uses the datum then a `struct` or `enum` must be defined above `main` that is named `Datum`.

## Redeemer (3)

Each UTxO used as an input for a transaction also has a redeemer attached. This is data specified by the user attempting to spend that UTxO. The script can again choose to use or ignore the redeemer during validation.

If the script uses the redeemer then a `struct` or `enum` must be defined above `main` that is named `Redeemer`.

## `main` function (4)

The `main` function (4) of a validator script accepts up to three optional arguments and returns a `Bool`:
  - **datum (2)**
  - **redeemer (3)**
  - **script context**

Each `main` argument is optional, but must appear in that order.

```helios
spending my_validator

...

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    ...
}

...
```

Most of the data needed for writing useful validators is contained in the [`ScriptContext`](./builtins/scriptcontext.md).

>**Note**: The datum and the redeemer are user-defined types (structs or enums) that **must** be named `Datum` and `Redeemer`.

## Data generators and test functions (5)

After the `main` function you can define functions and constants that can be used to generate data structures (eg. datums or redeemers), or can be used to test the `main` function. The [API](../api/index.md) has special functions for working with these.

Some compiler restrictions are lifted in this part of the script:
  * not all names need to be used
  * structs can be empty
