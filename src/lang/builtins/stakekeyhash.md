# `StakeKeyHash`

[Opaque](https://en.wikipedia.org/wiki/Opaque_data_type) [`ByteArray`](./bytearray.md) that represents the hash of a staking key. 

Example instantiation:

```helios
skh: StakeKeyHash = StakeKeyHash::new(#...); ...
```

## Associated Functions

### `new`

```helios
StakeKeyHash::new(bytes: ByteArray) -> StakeKeyHash
```

### `from_data`

```helios
StakeKeyHash::from_data(data: Data) -> StakeKeyHash
```

## Operators

### `==`

```helios
StakeKeyHash == StakeKeyHash -> Bool
```

### `!=`

```helios
StakeKeyHash != StakeKeyHash -> Bool
```

### `>=`

```helios
StakeKeyHash >= StakeKeyHash -> Bool
```

### `>`

```helios
StakeKeyHash > StakeKeyHash -> Bool
```

### `<=`

```helios
StakeKeyHash <= StakeKeyHash -> Bool
```

### `<`

```helios
StakeKeyHash < StakeKeyHash -> Bool
```

## Methods

### `serialize`

```helios
skh.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of a `StakeKeyHash`.

```helios
skh.show() -> String
```