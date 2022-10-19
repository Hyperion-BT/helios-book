# `StakingPurpose`

A `staking` purpose script has a `StakingPurpose`, which is an enum with 2 variants:
  * `Rewarding`
  * `Certifying`

## Associated functions

### `from_data`

```helios
StakingPurpose::from_data(data: Data) -> StakingPurpose
```

## Getters

### `StakingPurpose::Rewarding`

#### `credential`

Returns the [`StakingCredential`](./stakingcredential.md) for which rewards are being withdrawn.

```helios
rewarding_staking_purpose.credential -> StakingCredential
```

### `StakingPurpose::Certifying`

#### `dcert`

Returns the current stake certifying action as a [`DCert`](./dcert.md).

```helios
certifying_staking_purpose.dcert -> DCert
```

## Operators

### `==`

```helios
StakingPurpose == StakingPurpose -> Bool
```

### `!=`

```helios
StakingPurpose != StakingPurpose -> Bool
```

## Methods

### `serialize`

```helios
staking_purpose.serialize() -> ByteArray
```
