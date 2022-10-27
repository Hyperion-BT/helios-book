# `TxId`

Represents the hash of a transaction. This is used to identify an UTxO (along with the index of the UTxO in the list of UTxOs created by the transaction).

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `TxId`.

Shift `bytes` to the next CBOR element.

```ts
helios.TxId.fromCbor(bytes: number[]): helios.TxId
```

### `fromHex`

Construct a `TxId` from the hexadecimal string representation of the underlying bytes.

```ts
helios.TxId.fromHex(hex: string): helios.TxId
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
tx_id.bytes: number[]
```

### `hex`

Returns the hexadecimal representation of the underlying bytes.

```ts
tx_id.hex: string
```