# `Int`

This is an unbounded integer (like Haskell's `Integer` type).

## Associated functions

### `from_data`

```helios
Int::from_data(data: Data) -> Int
```

### `from_little_endian`

Converts a [`ByteArray`](./bytearray.md) into an `Int`. The first byte is multiplied by `1` before adding to the sum, the second byte is multiplied by `256` etc.

```helios
Int::from_little_endian(bytes: ByteArray) -> Int
```

### `parse`

Parses a string representation of an integer of the form `((-)?[1-9][0-9]*)|0` (i.e. a non zero-padded integer). Throws an error if the string representation of the integer doesn't respect this format. Note that `-0` isn't allowed, so zeros can only be represented by a single `0` digit.

```helios
Int::parse(string: String) -> Int
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

### `bound`

Bounds an `Int` if it falls outside a range. This builtin function doesn't check of the range is valid.

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

### `serialize`

```helios
int.serialize() -> ByteArray
```

### `show`

Returns decimal representation of integer.

```helios
int.show() -> String
```

### `to_bool`

Turns `0` into `false`, and any other integer into `true`.

```helios
int.to_bool() -> Bool
```

### `to_hex`

Returns hexadecimal representation of integer.

```helios
int.to_hex() -> String
```