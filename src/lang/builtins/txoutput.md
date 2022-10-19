# `TxOutput`

Represents a **transaction output**.

## Associated functions

### `from_data`

```helios
TxOutput::from_data(data: Data) -> TxOutput
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
