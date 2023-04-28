# `Real`

This is a fixed point real number type with 6 decimal places. `Real` is designed for use in calculations involving relative fee calculations.

```helios
real = 0.001 // 0.1%
```

## Associated functions

### `from_data`

```helios
Real::from_data(data: Data) -> Real
```

## Operators

>**Note**: any binary operator defined for `Real` can use `Int` as either the lhs or rhs.

### `==`

```helios
Real == Real -> Bool
```

### `!=`

```helios
Real != Real -> Bool
```

### `>=`

```helios
Real >= Real -> Bool
```

### `>`

```helios
Real > Real -> Bool
```

### `<=`

```helios
Real <= Real -> Bool
```

### `<`

```helios
Real < Real -> Bool
```

### `+`

```helios
Real + Real -> Real
```

### `-`

```helios
Real - Real -> Real
```

### `*`

```helios
Real * Real -> Real
```

### `/`

```helios
Real / Real -> Real
```

## Methods

### `abs`

Returns the absolute value.

```helios
Real.abs() -> Real
```

### `ceil`

Rounds up, returning an [`Int`](./int.md).

```helios
real.ceil() -> Int
```

### `floor`

Rounds down, returning an [`Int`](./int.md).

```helios
real.floor() -> Int
```

### `round`

Rounds towards nearest whole number, returning an [`Int`](./int.md).

```helios
real.round() -> Int
```

### `trunc`

Rounds towards zero, returning an [`Int`](./int.md).

```helios
real.trunc() -> Int
```

### `serialize`

```helios
real.serialize() -> ByteArray
```

### `show`

```helios
real.show() -> String
```