# `Int`

This is an unbounded integer (like Haskell's `Integer` type).

## Associated functions

### `from_data`

```helios
Int::from_data(data: Data) -> Int
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

### `serialize`

```helios
int.serialize() -> ByteArray
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

### `show`

Returns decimal representation of integer.

```helios
int.show() -> String
```