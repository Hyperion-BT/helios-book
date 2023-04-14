# `Int`

This is an unbounded integer (like Haskell's `Integer` type).

## Associated functions

### `from_base58`

Decodes a [`String`](./string.md) representing a [base58](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) encoded `Int`.

Throws an error if the string contains an invalid character.

```helios
Int::from_base58(encoded: String) -> Int
```

### `from_big_endian`

Converts a [`ByteArray`](./bytearray.md) into an `Int`. The last byte is multiplied by `1` before adding to the sum, the second-to-last byte is multiplied by `256` etc.

The returned `Int` is always positive.

```helios
Int::from_big_endian(bytes: ByteArray) -> Int
```

### `from_data`

```helios
Int::from_data(data: Data) -> Int
```

### `from_little_endian`

Converts a [`ByteArray`](./bytearray.md) into an `Int`. The first byte is multiplied by `1` before adding to the sum, the second byte is multiplied by `256` etc.

The returned `Int` is always positive.

```helios
Int::from_little_endian(bytes: ByteArray) -> Int
```

### `max`

Returns the greater of two numbers.

```helios
Int::max(a: Int, b: Int) -> Int
```

### `min`

Returns the lesser of two numbers.

```helios
Int::min(a: Int, b: Int) -> Int
```

### `parse`

Parses a string representation of an integer of the form `((-)?[1-9][0-9]*)|0` (i.e. a non zero-padded integer). Throws an error if the string representation of the integer doesn't respect this format. Note that `-0` isn't allowed, so zeros can only be represented by a single `0` digit.

```helios
Int::parse(string: String) -> Int
```

## Operators

### `==`

```helios
Int == Int -> Bool
```

### `!=`

```helios
Int != Int -> Bool
```

### `>=`

```helios
Int >= Int -> Bool
```

### `>`

```helios
Int > Int -> Bool
```

### `<=`

```helios
Int <= Int -> Bool
```

### `<`

```helios
Int < Int -> Bool
```

### `+`

```helios
Int + Int -> Int
```

### `-`

```helios
Int - Int -> Int
```

### `*`

```helios
Int * Int -> Int
```

### `/`

```helios
Int / Int -> Int
```

### `%`

Modulo operator that returns remained after division.

```helios
Int % Int -> Int
```

## Methods

### `abs`

Removes the sign, returning a positive `Int`.

```helios
int.abs() -> Int
```

### `bound`

Bounds an `Int` if it falls outside a range. This builtin function doesn't check if the range is valid.

```helios
int.bound(low: Int, high: Int) -> Int
```

### `bound_min`

Bounds an `Int` to be greater or equals to a given minimum value.

```helios
int.bound_min(low: Int) -> Int
```

### `bound_max`

Bounds an `Int` to be less or equals to a given maximum value.

```helios
int.bound_max(high: Int) -> Int
```

### `decode_zigzag`

Decodes a [zigzag encoded](https://en.wikipedia.org/wiki/Variable-length_quantity#Zigzag_encoding) `Int`. Throws an error if the `Int` is negative.

```helios
unsigned_int.decode_zigzag() -> Int
```

### `encode_zigzag`

Applies [zigzag encoding](https://en.wikipedia.org/wiki/Variable-length_quantity#Zigzag_encoding) to the `Int`, returning a positive `Int`.

```helios
signed_int.encode_zigzag() -> Int
```

### `serialize`

```helios
int.serialize() -> ByteArray
```

### `show`

Returns decimal representation of integer.

```helios
int.show() -> String
```

### `to_base58`

Encodes the `Int` as a [base58](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) [`String`](./string.md).

Throws an error if the `Int` is negative.

```helios
int.to_base58() -> String
```

### `to_big_endian`

Encodes the `Int` as a [big endian](https://en.wikipedia.org/wiki/Endianness) [`ByteArray`](./bytearray.md).

Throws an error if the `Int` is negative.

```helios
int.to_big_endian() -> ByteArray
```

### `to_bool`

Turns `0` into `false`, and any other integer into `true`.

```helios
int.to_bool() -> Bool
```

### `to_little_endian`

Encodes the `Int` as a [little endian](https://en.wikipedia.org/wiki/Endianness) [`ByteArray`](./bytearray.md).

Throws an error if the `Int` is negative.

```helios
int.to_little_endian() -> ByteArray
```

### `to_hex`

Returns the hexadecimal representation of the `Int`.

```helios
int.to_hex() -> String
```