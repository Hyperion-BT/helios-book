# `TxInput`

Represents a **transaction input**.

## Associated functions
```helios
func from_data(data: Data) -> TxInput
```

## Getters

### `output_id`

Returns the [`TxOutputId`](./txoutputid.md) of the underlying UTxO.

```helios
tx_input.output_id -> TxOutputId
```

### `output`

Returns the underlying UTxO as a [`TxOutput`](./txoutput.md).

```helios
tx_input.output -> TxOutput
```

## Operators

### `==`

```helios
TxInput == TxInput -> Bool
```

### `!=`

```helios
TxInput != TxInput -> Bool
```

## Methods

### `serialize`

```helios
tx_input.serialize() -> ByteArray
```