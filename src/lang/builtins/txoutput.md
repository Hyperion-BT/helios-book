# `TxOutput`

Represents a **transaction output**.

## Associated functions

### `from_data`

```helios
TxOutput::from_data(data: Data) -> TxOutput
```

### `new`

Construct a `TxOutput` instance. **Only available after `main`**, see [script structure](../script-structure.md#data-generators-and-test-functions-5).

```helios
TxOutput::new(
    address: Address,
    value:   Value,
    datum:   OutputDatum
) -> TxOutput
```

## Getters

### `address`

Returns the [`Address`](./address.md) at which the `TxOutput` is located.

```helios
tx_output.address -> Address
```

### `value`

Returns the [`Value`](./value.md) locked in the `TxOutput`.

```helios
tx_output.value -> Value
```

### `datum`

Returns the datum of the `TxOutput` as an [`OutputDatum`](./outputdatum.md).

```helios
tx_output.datum -> OutputDatum
```

### `ref_script_hash`

Returns the [`ScriptHash`](./scripthash.md) of the optional reference script attached to the `TxOutput`.

```helios
tx_output.ref_script_hash -> Option[ScriptHash]
```

## Operators

### `==`

```helios
TxOutput == TxOutput -> Bool
```

### `!=`

```helios
TxOutput != TxOutput -> Bool
```

## Methods

### `serialize`

```helios
tx_output.serialize() -> ByteArray
```
