# `Address`

Represents a Cardano address.

## Associated functions

### `from_bytes`

Decodes raw address bytes.

```helios
Address::from_bytes(bytes: ByteArray) -> Address
```

### `from_data`

```helios
Address::from_data(data: Data) -> Address
```

### `from_hex`

Decodes the hexadecimal encoded bytes of a raw address.

```helios
Address::from_hex(hex: String) -> Address
```

### `new`

Construct a new `Address` from a [`Credential`](./credential.md) and an optional [`StakingCredential`](./stakingcredential.md):

```helios
Address::new(
    credential: Credential, 
    staking_credential: Option[StakingCredential]
) -> Address
```

## Getters

### `credential`

Get the payment [`Credential`](./credential.md) of an `Address`:

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

### `to_bytes`

Returns the raw address bytes.

```helios
address.to_bytes() -> ByteArray
```

### `to_hex`

Encodes the raw address bytes as a hexadecimal `String`.

```
address.to_hex() -> String
```