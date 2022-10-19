# `ByteArray`

Represents an array of bytes (i.e. an array of uint8 numbers).

```helios
byte_array: ByteArray = #213212; ...
```

> **Note**: in Haskell/Plutus `ByteArray` is called a `ByteString`, but that name was deemed too ambiguous for average programmers so `ByteArray` was chosen instead.

## Associated functions

### `from_data`

```helios
ByteArray::from_data(data: Data) -> ByteArray
```

## Getters

### `length`

Returns the number of bytes in the `ByteArray`.

```helios
byte_array.length -> Int 
```

## Operators

### `==`

```helios
ByteArray == ByteArray -> Bool
```

### `!=`

```helios
ByteArray != ByteArray -> Bool
```

### `+`

Concatenation of two `ByteArray`s.

```helios
ByteArray + ByteArray -> ByteArray
```

## Methods

### `serialize`

```helios
byte_array.serialize() -> ByteArray
```

### `sha2`

Calculates the sha2-256 hash of a `ByteArray`. The result is 32 bytes long.

```helios
byte_array.sha2() -> ByteArray
```

### `sha3`

Calculates the sha3-256 hash of a `ByteArray`. The result is 32 bytes long.

```helios
byte_array.sha3() -> ByteArray
```

### `blake2b`

Calculates the blake2b-256 hash of a `ByteArray`. The result is 32 bytes long.

```helios
byte_array.blake2b() -> ByteArray
```

### `decode_utf8`

Turns a valid sequence of utf-8 bytes into a `String`. Throws an error if the `ByteArray` isn't valid utf-8.

```helios
byte_array.decode_utf8() -> String
```

### `show`

Converts a `ByteArray` into its hexadecimal representation.

```helios
byte_array.show() -> String
```

### `starts_with`

Checks if a `ByteArray` starts with a given prefix.

```helios
byte_array.starts_with(prefix: ByteArray) -> Bool
```

### `ends_with`

Checks if a `ByteArray` ends with a given suffix.

```helios
byte_array.ends_with(suffix: ByteArray) -> Bool
```

### `slice`

```helios
byte_array.slice(start: Int, end: Int) -> ByteArray
```