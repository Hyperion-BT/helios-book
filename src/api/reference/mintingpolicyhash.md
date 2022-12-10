# `MintingPolicyHash`

Represents a blake2b-224 hash of a minting policy script (first encoded as a CBOR byte-array and prepended by a script version byte).

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `MintingPolicyHash`.

Mutates `bytes` and shifts it to the next CBOR element.

```ts
helios.MintingPolicyHash.fromCbor(bytes: number[]): helios.MintingPolicyHash
```

### `fromHex`

Construct a `MintingPolicyHash` from the hexadecimal string representation of the underlying bytes.

```ts
helios.MintingPolicyHash.fromHex(hex: string): helios.MintingPolicyHash
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
minting_policy_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation of the underlying bytes.

```ts
minting_policy_hash.hex: string
```