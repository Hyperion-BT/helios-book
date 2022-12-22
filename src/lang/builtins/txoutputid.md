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

## Getters

### `index`

Index of the UTxO in the producing transaction:

```helios
tx_output_id.index -> Int
```

### `tx_id`

Id of the producting transaction:

```helios
tx_output_id.tx_id -> TxId
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

### `>=`

First compares bytes of [`TxId`](./txid.md), then compares index.

```helios
TxOutputId >= TxOutputId -> Bool
```

### `>`

First compares bytes of [`TxId`](./txid.md), then compares index.

```helios
TxOutputId > TxOutputId -> Bool
```

### `<=`

First compares bytes of [`TxId`](./txid.md), then compares index.

```helios
TxOutputId <= TxOutputId -> Bool
```

### `<`

First compares bytes of [`TxId`](./txid.md), then compares index.

```helios
TxOutputId < TxOutputId -> Bool
```

## Methods

### `serialize`

```helios
tx_output_id.serialize() -> ByteArray
```