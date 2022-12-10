# `PubKeyHash`

Represents a Blake2-224 hash of public key.

A `PubKeyHash` is used as the first part of a regular payment [`Address`](./address.md).

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `PubKeyHash`.

Mutates `bytes` and shifts it to the next CBOR element.

```ts
helios.PubKeyHash.fromCbor(bytes: number[]): helios.PubKeyHash
```

### `fromHex`

Construct a `PubKeyHash` from its hexadecimal string representation.

```ts
helios.PubKeyHash.fromHex(hex: string): helios.PubKeyHash
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
pubkey_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation.

```ts
pubkey_hash.hex: string
```