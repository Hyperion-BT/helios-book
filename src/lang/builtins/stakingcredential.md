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
## Getters

### `StakingCredential::Hash`

#### `hash`

Get the underlying [`StakingHash`](./stakinghash.md).

```helios
staking_credential_hash.hash -> StakingHash
```

The following example code can be used to extract the underlying [`StakingValidatorHash`](./stakingvalidatorhash.md):

```helios
staking_credential.switch{
  h: Hash => h.hash.switch{
    v: Validator => v.hash,
    _ => error("not a StakingHash::Validator")
  }, 
  _ => error("not a StakingCredential::Hash")
}
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
