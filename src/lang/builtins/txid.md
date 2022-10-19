# `TxId`

This is a type-safe wrapper around `ByteArray` representing the hash of a transaction.


## Associated functions

### `new`

```helios
TxId::new(bytes: ByteArray) -> TxId
```

### `from_data`

```helios
TxId::from_data(data: Data) -> TxId
```

## Operators

### `==`

```helios
TxId == TxId -> Bool
```

### `!=`

```helios
TxId != TxId -> Bool
```

## Methods

### `serialize`

```helios
tx_id.serialize() -> ByteArray
```
