# Transaction inputs

Each transaction input is an instance of the `UTxO` class. A `UTxO` represents a `TxOutputId` and, when building a new transaction, also contains the underlying `TxOutput`.

```js
const utxo = new helios.UTxO(
    helios.TxId.fromHex("..."), // hash of the tx that created the utxo
    0n, // utxo index as bigint
    new helios.TxOutput(...) // TxOutput with address, value and datum fields
)
```

## Spending a regular UTxO

Spending a regular UTxO (i.e. non-script UTxO), is done with the `addInput` method:

```js
tx.addInput(utxo)
```

## Spending a script UTxO

Spending a `UTxO` locked at a script address is also done with `addInput`, but requires specifying a redeemer:

```js
// program.evalParam("...").data can be used directly as 'redeemerData'
tx.addInput(utxo, redeemerData)
```

The corresponding script must be also be attached to such a transaction:
```js
// 'uplcProgram' is an instance of UplcProgram (i.e. result of helios.Program.new(...).compile(...))
tx.attachScript(uplcProgram)
```