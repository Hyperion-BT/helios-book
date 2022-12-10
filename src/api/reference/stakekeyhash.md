# `StakeKeyHash`

Represents a blake2b-224 hash of staking key.

A `StakeKeyHash` can be used as the second part of a regular payment [`Address`](./address.md), or to construct a [`StakeAddress`](./stakeaddress.md).

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `StakeKeyHash`.

Mutates `bytes` and shifts it to the next CBOR element.

```ts
helios.StakeKeyHash.fromCbor(bytes: number[]): helios.StakeKeyHash
```

### `fromHex`

Construct a `StakeKeyHash` from its hexadecimal string representation.

```ts
helios.StakeKeyHash.fromHex(hex: string): helios.StakeKeyHash
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
stakekey_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation.

```ts
stakekey_hash.hex: string
```