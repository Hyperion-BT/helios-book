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

### `fromPubKeyHash`

Constructs a simple payment `Address` using a [`PubKeyHash`](./pubkeyhash.md), and an optional staking hash ([`StakeKeyHash`](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md)).

```ts
helios.Address.fromPubKeyHash(
    isTestnet: boolean, 
    pkh: helios.PubKeyHash,
    sh: ?(helios.StakeKeyHash | helios.StakingValidatorHash) = null
): helios.Address
```

### `fromValidatorHash`

Constructs a script `Address` using a `ValidatorHash`, and an optional staking hash ([`StakeKeyHash`](./stakekeyhash.md) or [`StakingValidatorHash`](./stakingvalidatorhash.md)).

```ts
helios.Address.fromValidatorHash(
    vh: helios.ValidatorHash,
    sh: ?(helios.StakeKeyHash | helios.StakingValidatorHash) = null,
    isTestnet: ?boolean = IS_TESTNET
): helios.Address
```

## Getters

### `pubKeyHash`

Returns the underlying [`PubKeyHash`](./pubkeyhash.md) of a simple payment address, or `null` if it's a script address.

```ts
address.pubKeyHash: ?helios.PubKeyHash
```

### `validatorHash`

Returns the underlying [`ValidatorHash`](./validatorhash.md) of a script address, or `null` if it's a regular payment address.

```ts
address.validatorHash: ?helios.ValidatorHash
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
