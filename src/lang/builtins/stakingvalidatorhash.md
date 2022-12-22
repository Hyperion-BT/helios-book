# `StakingValidatorHash`

This is a type-safe wrapper around [`ByteArray`](./bytearray.md) that represents the hash of a staking script.

## Associated functions

### `new`

```helios
StakingValidatorHash::new(bytes: ByteArray) -> StakingValidatorHash
```

### `from_data`

```helios
StakingValidatorHash::from_data(data: Data) -> StakingValidatorHash
```

### `from_script_hash`

Casts the generic [`ScriptHash`](./scripthash.md) type into `StakingValidatorHash`.

```helios
StakingValidatorHash::from_script_hash(hash: ScriptHash) -> StakingValidatorHash
```

## Operators

### `==`

```helios
StakingValidatorHash == StakingValidatorHash -> Bool
```

### `!=`

```helios
StakingValidatorHash != StakingValidatorHash -> Bool
```

### `>=`

```helios
StakingValidatorHash >= StakingValidatorHash -> Bool
```

### `>`

```helios
StakingValidatorHash > StakingValidatorHash -> Bool
```

### `<=`

```helios
StakingValidatorHash <= StakingValidatorHash -> Bool
```

### `<`

```helios
StakingValidatorHash < StakingValidatorHash -> Bool
```

## Methods

### `serialize`

```helios
staking_validator_hash.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of the `StakingValidatorHash`.

```helios
staking_validator_hash.show() -> String
```