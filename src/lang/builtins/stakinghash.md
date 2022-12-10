# `StakingHash`

An enum with two variants: 
  * `StakeKey` (wraps [`StakeKeyHash`](./stakekeyhash.md)) 
  * `Validator` (wraps [`StakingValidatorHash`](./stakingvalidatorhash.md))

<br/>

Example instantiation:
```helios
stakekey_stakinghash: StakingHash::StakeKey = StakingHash::new_stakekey(StakeKeyHash::new(#...));

validator_stakinghash: StakingHash::Validator = StakingHash::new_validator(StakingValidatorHash::new(#...)); ...
```

## Associated functions

### `new_stakekey`

```helios
StakingHash::new_stakekey(skh: StakeKeyHash) -> StakingHash::StakeKey
```

### `new_validator`

```helios
StakingHash::new_validator(svh: StakingValidatorHash) -> StakingHash::Validator
```

### `from_data`

```helios
StakingHash::from_data(data: Data) -> StakingHash
```

## Getters

### `hash`

Get the underlying hash.

```helios
stakekey_stakinghash.hash -> StakeKeyHash

validator_stakinghash.hash -> StakingValidatorHash
```

## Operators

### `==`

```helios
StakingHash == StakingHash -> Bool
```

### `!=`

```helios
StakingHash != StakingHash -> Bool
```

## Methods

### `serialize`

```helios
stakinghash.serialize() -> ByteArray
```
