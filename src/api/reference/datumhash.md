# `DatumHash`

Represents a Blake2-256 hash of datum data.

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `DatumHash`.

Mutates `bytes` and shifts it to the next CBOR element.

```ts
helios.DatumHash.fromCbor(bytes: number[]): helios.DatumHash
```

### `fromHex`

Construct a `DatumHash` from the hexadecimal string representation of the underlying bytes.

```ts
helios.DatumHash.fromHex(hex: string): helios.DatumHash
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
datum_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation of the underlying bytes.

```ts
datum_hash.hex: string
```