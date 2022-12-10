# `ValidatorHash`

Represents a blake2b-224 hash of a spending validator script (first encoded as a CBOR byte-array and prepended by a script version byte).

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `ValidatorHash`.

Mutates `bytes` and shifts it to the next CBOR element.

```ts
helios.ValidatorHash.fromCbor(bytes: number[]): helios.ValidatorHash
```

### `fromHex`

Construct a `ValidatorHash` from the hexadecimal string representation of the underlying bytes.

```ts
helios.ValidatorHash.fromHex(hex: string): helios.ValidatorHash
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
validator_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation of the underlying bytes.

```ts
validator_hash.hex: string
```