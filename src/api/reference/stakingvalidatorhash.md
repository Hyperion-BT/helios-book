# `StakingValidatorHash`

Represents a blake2b-224 hash of a staking script (first encoded as a CBOR byte-array and prepended by a script version byte).

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `StakingValidatorHash`.

Mutates `bytes` and shifts it to the next CBOR element.

```ts
helios.StakingValidatorHash.fromCbor(bytes: number[]): helios.StakingValidatorHash
```

### `fromHex`

Construct a `StakingValidatorHash` from the hexadecimal string representation of the underlying bytes.

```ts
helios.StakingValidatorHash.fromHex(hex: string): helios.StakingValidatorHash
```

## Getters

### `bytes`

Get the underlying bytes.

```ts
staking_validator_hash.bytes: number[]
```

### `hex`

Returns the hexadecimal representation of the underlying bytes.

```ts
staking_validator_hash.hex: string
```