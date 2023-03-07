# `StakeAddress`

Wrapper for Cardano stake address bytes. An `StakeAddress` consists of two parts internally:

  * Header (1 byte, see CIP 8)
  * Staking witness hash (28 bytes that represent the [`StakeKeyHash`](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md))

Stake addresses are used to query the assets held by given staking credentials.

## Constructor

```ts
new helios.StakeAddress(bytes: []number)
```

## Static methods

### `fromAddress`

Convert a regular [`Address`](./address.md) into a `StakeAddress`. Throws an error if the `Address` doesn't have a staking credential.

```ts
helios.StakeAddress.fromAddress(address: helios.Address): helios.StakeAddress
```

### `fromCbor`

Deserializes bytes into an `StakeAddress`.

```ts
helios.StakeAddress.fromCbor(bytes: []number): helios.StakeAddress
```

### `fromBech32`

Converts a Bech32 string into an `StakeAddress`:

```ts
helios.StakeAddress.fromBech32(str: string): helios.StakeAddress
```

### `fromHash`

Converts a [`StakeKeyHash`](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md) into `StakeAddress`.

```ts
helios.StakeAddress.fromHash(
    isTestnet: boolean,
    hash: helios.StakeKeyHash | helios.StakingValidatorHash
)
```

> **Note**: bech32 encoded stake addresses have a "stake" or "stake_test" prefix.

### `fromHex`

Constructs a `StakeAddress` using a hexadecimal string representation of the address bytes.

```ts
helios.StakeAddress.fromHex(hex: string): helios.StakeAddress
```

### `isForTestnet`

Returns `true` if the given `StakeAddress` is a testnet address.

```ts
helios.StakeAddress.isForTestnet(
    stake_address: helios.StakeAddress
): boolean
```

## Getters

### `stakingHash`

Returns the underlying [`StakeKeyHash](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md).

```ts
stake_address.stakingHash: (helios.StakeKeyHash | helios.StakingValidatorHash)
```

## Methods

### `toBech32`

Turns a `StakeAddress` into its Bech32 representation.

```ts
stake_address.toBech32(): string
```

### `toCbor`

Turns a `StakeAddress` into its CBOR representation.

```ts
stake_address.toCbor(): number[]
```

### `toHex`

Turns a `StakeAddress` into its hexadecimal representation.

```ts
stake_address.toHex(): string
```