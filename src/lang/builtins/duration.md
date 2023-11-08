# `Duration`

The difference of two [`Time`](./time.md) values is a `Duration` value. Only a `Duration` can be added to a [`Time`](./time.md) (two [`Time`](./time.md) values can't be added).

## Associated functions and constants

### `new`

Instantiate a `Duration` from a number of milliseconds.

```helios
Duration::new(milliseconds: Int) -> Duration
```

### `from_data`

```helios
Duration::from_data(data: Data) -> Duration
```

### `SECOND`

1000 milliseconds.

```helios
Duration::SECOND -> Duration
```

### `MINUTE`

60000 milliseconds.

```helios
Duration::MINUTE -> Duration
```

### `HOUR`

3600000 milliseconds.

```helios
Duration::HOUR -> Duration
```

### `DAY`

86400000 milliseconds.

```helios
Duration::DAY -> Duration
```

### `WEEK`

604800000 milliseconds.

```helios
Duration::WEEK -> Duration
```

## Operators

### `==`

```helios
Duration == Duration -> Bool
```

### `!=`

```helios
Duration != Duration -> Bool
```

### `>=`

```helios
Duration >= Duration -> Bool
```

### `>`

```helios
Duration > Duration -> Bool
```

### `<=`

```helios
Duration <= Duration -> Bool
```

### `<`

```helios
Duration < Duration -> Bool
```

### `+`

```helios
Duration + Duration -> Duration
```

### `-`

```helios
Duration - Duration -> Duration
```

### `*`

```helios
Duration * Int -> Duration
```

### `/`

A `Duration` divided by a `Duration` is an [`Int`](./int.md).

```helios
Duration / Duration -> Int
```

A `Duration` divided by an [`Int`](./int.md) is a `Duration`.

```helios
Duration / Int -> Duration
```

### `%`

Modulo operator that calculates remainder upon division.

```helios
Duration % Duration -> Duration
```

## Methods

### `serialize`

```helios
duration.serialize() -> ByteArray
```

### `show`

Returns the string representation of the `Duration` in milliseconds.

```helios
duration.show() -> String
```