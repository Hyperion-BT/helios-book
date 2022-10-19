# `Duration`

The difference of two [`Time`](./time.md) values is a `Duration` value. Only a `Duration` can be added to a [`Time`](./time.md) (two [`Time`](./time.md) values can't be added).

## Associated Functions

### `new`

Instantiate a `Duration` from a number of milliseconds.

```helios
Duration::new(milliseconds: Int) -> Duration
```

### `from_data`

```helios
Duration::from_data(data: Data) -> Duration
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

Module operator that calculates remainder upon division.

```helios
Duration % Duration -> Duration
```

## Methods

### `serialize`

```helios
duration.serialize() -> ByteArray
```
