# Structure of a script

Helios validator scripts have a function called `main` that returns a boolean (`true`  or `false`) when validating the spending of a UTxO. 

For a spending validator, `main` takes three arguments:

- Datum: data stored on-chain that is linked to the locked UTxO (not avaiable for minting/staking scripts)
- Redeemer: data specified by the user attempting to spend the locked UTxO
- [`ScriptContext`](./builtins/scriptcontext.md): information about the transaction spending the locked UTxO

The datum and the redeemer can be of any type, but the last argument must always have type [`ScriptContext`](./builtins/scriptcontext.md).

The structure of a validator script looks as follows:

```helios
// --- (1) ---
spending my_validator       

// --- (2) ---
struct MyDatum {..}           

// --- (3) ---
enum MyRedeemer {..}          
                            
// --- (4) ---
func main(datum: MyDatum, redeemer: MyRedeemer, ctx: ScriptContext) -> Bool {
    ...                  
}

// --- (5) ---
const MY_DATUM = MyDatum {...}
```

## Script purpose (1)

In Helios all scripts start with a  **script purpose**, followed by the name of the script. There are 5 script purposes:
  - **spending**
  - **minting**
  - **staking**
  - **testing**
  - **module**

On this page we are only concerned with the `spending` script purpose:

```helios
spending my_validator

...
```

`module` is covered in the [next section](./modules.md).

`minting`, `staking` and `testing` will be covered in the [advanced concepts](./advanced-concepts/index.md) chapter.

> **Note**: the name of each Helios source is registered in the global scope, so these names can't be used by statements, nor for the lhs of assignments. So eg. the entrypoint script can't be named `main` as that would conflict with the entrypoint function.

## Datum (2)

Each UTxO locked at a script address will also have an associated datum. The script can choose to use the datum as part of the spending validation, or it can choose to ignore the datum using an underscore (`_`) if it is irrelevant.

The datum can have any type.

## Redeemer (3)

Each UTxO used as an input for a transaction also has a redeemer attached. This is data specified by the user attempting to spend that UTxO. The script can again choose to use or ignore the redeemer using an underscore (`_`) if it is irrelevant to the validation.

The redeemer can have any type.

## `main` function (4)

The `main` function (4) of a validator script accepts up to three optional arguments and returns a `Bool`:
  - **datum (2)**
  - **redeemer (3)**
  - **script context**

```helios
spending my_validator

...

// redeemer is ignored
func main(datum: MyDatum, _, context: ScriptContext) -> Bool {
    ...
}

...
```

Most of the data needed for writing useful validators is contained in the [`ScriptContext`](./builtins/scriptcontext.md).

## Data generators and test functions (5)

After the `main` function you can define functions and constants for:
* generating data structures (eg. datums or redeemers)
* testing the `main` function

The [API](../api/index.md) has special functionality for working with these:
* [`program.parameters`](../api/reference/program.md#parameters) an object that evaluates/sets any top-level constant in a Helios source

Some compiler restrictions are lifted in this part of the script:
  * not all names need to be used (relevant for function arguments and assignments)
  * structs can be empty