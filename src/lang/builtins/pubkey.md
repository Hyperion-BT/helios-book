# `PubKey`

This is a type-safe wrapper around [`ByteArray`](./bytearray.md) that represents the a Ed25519 public key.

A `PubKey` is expected to be 32 bytes long. A [`PubKeyHash`](./pubkeyhash.md) is the blake224 hash of a `PubKey`. Sadly there is no on-chain way of calculating the [`PubKeyHash`](./pubkeyhash.md) from a `PubKey`.

Example instantiation:

```helios
pub_key: PubKey = PubKey::new(#...); ...
```

## Associated Functions

### `new`

```helios
PubKey::new(bytes: ByteArray) -> PubKey
```

### `from_data`

```helios
PubKey::from_data(data: Data) -> PubKey
```

## Operators

### `==`

```helios
PubKey == PubKey -> Bool
```

### `!=`

```helios
PubKey != PubKey -> Bool
```

## Methods

### `serialize`

```helios
pub_key.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of a `PubKey`.

```helios
pub_key.show() -> String
```

### `verify`

Verify the signature of a message (using Ed25519).

```helios
pub_key.verify(message: ByteArray, signature: ByteArray) -> Bool
```

The signature is expected to be 64 bytes long.