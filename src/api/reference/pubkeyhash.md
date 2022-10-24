# `PubKeyHash`

Represents a Blake2-228 hash of public key.

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
pub_key_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation.

```ts
pub_key_hash.hex: string
```