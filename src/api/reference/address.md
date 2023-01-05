# `Address`

Wrapper for Cardano address bytes. An `Address` consists of three parts internally:

  * Header (1 byte, see CIP 8)
  * Witness hash (28 bytes that represent the `PubKeyHash` or `ValidatorHash`)
  * Optional staking credential (0 or 28 bytes)

## Constructor

```ts
new helios.Address(bytes: []number)
```

## Static methods

### `fromCbor`

Deserializes bytes into an `Address`.

```ts
helios.Address.fromCbor(bytes: []number): helios.Address
```

### `fromBech32`

Converts a Bech32 string into an `Address`:

```ts
helios.Address.fromBech32(str: string): helios.Address
```

### `fromHex`

Constructs an `Address` using a hexadecimal string representation of the address bytes.

```ts
helios.Address.fromHex(hex: string): helios.Address
```

### `fromHashes`

Constructs an `Address` using either a [`PubKeyHash`](./pubkeyhash.md) (i.e. simple payment address) or [`ValidatorHash`](./validatorhash.md) (i.e. script address), in combination with an optional staking hash ([`StakeKeyHash`](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md)).

Testnet addresses have different header bytes. [`IS_TESTNET`]() is a library-scope variable that can be set globally.

```ts
helios.Address.fromPubKeyHash(
    pkh: helios.PubKeyHash | helios.ValidatorHash,
    sh: ?(helios.StakeKeyHash | helios.StakingValidatorHash) = null,
    isTestnet: boolean = IS_TESTNET
): helios.Address
```

## Getters

### `pubKeyHash`

Returns the underlying [`PubKeyHash`](./pubkeyhash.md) of a simple payment address, or `null` for a script `Address`.

```ts
address.pubKeyHash: ?helios.PubKeyHash
```

### `validatorHash`

Returns the underlying [`ValidatorHash`](./validatorhash.md) of a script address, or `null` for a regular payment `Address`.

```ts
address.validatorHash: ?helios.ValidatorHash
```

### `stakingHash`

Returns the underlying [`StakeKeyHash](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md), or `null` for non-staked addresses.

```ts
address.stakingHash: ?(helios.StakeKeyHash | helios.StakingValidatorHash)
```

## Methods

### `toBech32`

Turns an `Address` into its Bech32 representation.

```ts
address.toBech32(): string
```

### `isForTestnet`

Returns `true` if the given `Address` is a testnet address.

```ts
address.isForTestnet(): boolean
```
