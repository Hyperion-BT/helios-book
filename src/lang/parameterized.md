# Parameterized Contracts

Parameterizing contracts allows dApp developers to create separate instances of a Helios program.  

In Helios, this is done by [`re-binding`](../api/reference/program.md#changeparam) one or more top-level `const PARAM_NAME [...]` declarations.  

After re-binding any const parameters to a different value, the resulting program will always have a **different contract address**.  

## Contrast with Datum

Attaching Datum data structures to specific UTxO's is another way that a validator or other program can have varying behavior.  

Using Datum causes those explicit details to be included in UTxO's (and/or in transactions consuming them).  Transactions spending the UTxO's held at the same script address can each access and use those various Datum details.  Noteably, any interested party can trivially query to discover all the various UTxO's held at a single contract address.

By contrast, two different instances of a parameterized contract, otherwise identical, will have separate addresses where UTxO's can be held.  **UTxO's don't need to explicitly contain the parameter values**.  

Querying for UTxO's in separate instances of a parameterized contract is also possible, but requires the interested party to have sufficient knowledge of those separate instance addresses, or other publicly-visible attributes of the target transactions.

Note that any parameterized contract can **also** use per-UTxO Datum values, as needed.

