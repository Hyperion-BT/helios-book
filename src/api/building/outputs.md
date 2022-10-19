# Transaction outputs

Each transaction output is an instance of the `TxOutput` class. A `TxOutput` contains an `Address`, a `Value`, and, optionally, a `Datum` field.

## Example: `TxOutput` instance without a datum

```js
const output = new helios.TxOutput(
    helios.Address.fromBech32("addr_test..."),
    new helios.Value(1000000n), // 1 tAda == 1 million lovelace
)
```

## Example: `TxOutput` instance with an inline datum

```js
const outputWithDatum = new helios.TxOutput(
    helios.Address.fromBech32("addr_test..."),
    new helios.Value(1000000n),
    helios.Datum.inline(...), // result from program.evalParam("...").data can be used directly as an argument for Datum.inline()
)
```

## Adding a `TxOutput` to a `Tx`

A `TxOutput` can be added to the transaction with the `addOutput` method:

```js
tx.addOutput(output)
```

Multiple outputs at once with the `addOutputs` method:

```js
tx.addOutputs(outputs)
```