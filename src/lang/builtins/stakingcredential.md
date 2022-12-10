# `StakingCredential`

Represents the staking part of an [`Address`](./address.md).

`StakingCredential` is an enum with 2 variants:
  * `Hash`
  * `Ptr`

## Associated functions

### `new_hash`

Constructs a new `StakingCredential` from [`StakingHash`](./stakinghash.md) (which in turn is an enum that represents `StakeKeyHash`/`StakingValidatorHash`).

```helios
StakingCredential::new_hash(staking_hash: StakingHash) -> StakingCredential::Hash
```

### `new_ptr`

```helios
StakingCredential::new_ptr(a: Int, b: Int, c: Int) -> StakingCredential::Ptr
```

### `from_data`

```helios
StakingCredential::from_data(data: Data) -> StakingCredential
```

## Operators

### `==`

```helios
StakingCredential == StakingCredential -> Bool
```

### `!=`

```helios
StakingCredential != StakingCredential -> Bool
```

## Methods

### `serialize`

```helios
staking_credential.serialize() -> ByteArray
```
