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

### `fromCbor`

Deserializes bytes into an `StakeAddress`.

```ts
helios.StakeAddress.fromCbor(bytes: []number): helios.Address
```

### `fromBech32`

Converts a Bech32 string into an `StakeAddress`:

```ts
helios.StakeAddress.fromBech32(str: string): helios.StakeAddress
```

> **Note**: bech32 encoded stake addresses have a "stake" or "stake_test" prefix.

### `fromHex`

Constructs a `StakeAddress` using a hexadecimal string representation of the address bytes.

```ts
helios.StakeAddress.fromHex(hex: string): helios.StakeAddress
```

### `fromStakeKeyHash`

Constructs a `StakeAddress` using a [`StakeKeyHash`](./stakekeyhash.md).

```ts
helios.StakeAddress.fromStakeKeyHash(
    isTestnet: boolean, 
    skh: helios.StakeKeyHash
): helios.StakeAddress
```

### `fromStakingValidatorHash`

Constructs a script `StakeAddress` using a [`StakingValidatorHash`](./stakingvalidatorhash.md).

```ts
helios.StakeAddress.fromStakingValidatorHash(
    isTestnet: boolean, 
    svh: helios.StakingValidatorHash
): helios.StakeAddress
```

## Methods

### `toBech32`

Turns a `StakeAddress` into its Bech32 representation.

```ts
stake_address.toBech32(): string
```

### `isForTestnet`

Returns `true` if the given `StakeAddress` is a testnet address.

```ts
stake_address.isForTestnet(): boolean
```