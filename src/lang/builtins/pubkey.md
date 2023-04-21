# `PubKey`

[Opaque](https://en.wikipedia.org/wiki/Opaque_data_type) [`ByteArray`](./bytearray.md) that represents a Ed25519 public key.

A `PubKey` is 32 bytes long. A [`PubKeyHash`](./pubkeyhash.md) is the blake2b-224 hash of a `PubKey`. Sadly there is no on-chain way of calculating the [`PubKeyHash`](./pubkeyhash.md) from a `PubKey` (only blake2b-256 is available on-chain).

Example instantiation:

```helios
pub_key: PubKey = PubKey::new(#...); ...
```

## Associated functions

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