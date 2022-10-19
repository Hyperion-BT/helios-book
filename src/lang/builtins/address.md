# `Address`

Represents a Cardano address.

## Associated functions

### `new`

Construct a new `Address` from a [`Credential`](./credential.md) and an optional [`StakingCredential`](./stakingcredential.md):

```helios
Address::new(
    credential: Credential, 
    staking_credential: Option[StakingCredential]
) -> Address
```

### `from_data`

```helios
Address::from_data(data: Data) -> Address
```

## Getters

### `credential`

Get the [`Credential`](./credential.md) of an `Address`:

```helios
address.credential -> Credential
```

### `staking_credential`

Get the [`StakingCredential`](./stakingcredential.md) of an `Address`:

```helios
address.staking_credential -> Option[StakingCredential]
```

## Operators

### `==`

```helios
Address == Address -> Bool
```

### `!=`

```helios
Address != Address -> Bool
```

## Methods

### `serialize`

```helios
address.serialize() -> ByteArray
```
