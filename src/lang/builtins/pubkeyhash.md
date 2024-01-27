# `PubKeyHash`

[Opaque](https://en.wikipedia.org/wiki/Opaque_data_type) [`ByteArray`](./bytearray.md) that represents the hash of a [`PubKey`](./pubkey.md). 

The first part of a regular payment address (i.e. not witnessed by a script) is a `PubKeyHash`.

Example instantiation:

```helios
pkh: PubKeyHash = PubKeyHash::new(#...); ...
```

## Associated functions

### `new`

```helios
PubKeyHash::new(bytes: ByteArray) -> PubKeyHash
```

### `from_data`

```helios
PubKeyHash::from_data(data: Data) -> PubKeyHash
```

## Getters

### `bytes`

```helios
pkh.bytes -> ByteArray
```

## Operators

### `==`

```helios
PubKeyHash == PubKeyHash -> Bool
```

### `!=`

```helios
PubKeyHash != PubKeyHash -> Bool
```

### `>=`

```helios
PubKeyHash >= PubKeyHash -> Bool
```

### `>`

```helios
PubKeyHash > PubKeyHash -> Bool
```

### `<=`

```helios
PubKeyHash <= PubKeyHash -> Bool
```

### `<`

```helios
PubKeyHash < PubKeyHash -> Bool
```

## Methods

### `serialize`

```helios
pkh.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of a `PubKeyHash`.

```helios
pkh.show() -> String
```
