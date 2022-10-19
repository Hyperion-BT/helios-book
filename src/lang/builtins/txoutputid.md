# `TxOutputId`

Represents the unique ID of a UTxO. It's composed of the **transaction ID** ([`TxId`](./txid.md)) of the transaction that created that UTxO, and of the index ([`Int`](./int.md)) of that UTxO in the outputs of that transaction.

## Associated functions

### `new`

```helios
TxOutputId::new(tx_id: TxId, index: Int) -> TxOutputId
```

### `from_data`

```helios
TxOutputId::from_data(data: Data) -> TxOutputId
```

## Operators

### `==`

```helios
TxOutputId == TxOutputId -> Bool
```

### `!=`

```helios
TxOutputId != TxOutputId -> Bool
```

## Methods

### `serialize`

```helios
tx_output_id.serialize() -> ByteArray
```