# `DatumHash`

[Opaque](https://en.wikipedia.org/wiki/Opaque_data_type) [`ByteArray`](./bytearray.md) that represents the hash of a datum.

## Associated functions

### `new`

```helios
DatumHash::new(bytes: ByteArray) -> DatumHash
```

### `from_data`

```helios
DatumHash::from_data(data: Data) -> DatumHash
```

## Operators

### `==`

```helios
DatumHash == DatumHash -> Bool
```

### `!=`

```helios
DatumHash != DatumHash -> Bool
```

### `>=`

```helios
DatumHash >= DatumHash -> Bool
```

### `>`

```helios
DatumHash > DatumHash -> Bool
```

### `<=`

```helios
DatumHash <= DatumHash -> Bool
```

### `<`

```helios
DatumHash < DatumHash -> Bool
```

## Methods

### `serialize`

```helios
datum_hash.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of a `DatumHash`.

```helios
datum_hash.show() -> String
```
