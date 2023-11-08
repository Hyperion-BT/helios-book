# `TimeRange`

This represents a range of time using a pair of [`Time`](./time.md) values, or open ends.

## Associated functions and constants

### `ALWAYS`

Represents a `TimeRange` going from negative to positive infinity, thus contains all possible `Time` values.

```helios
TimeRange::ALWAYS -> TimeRange
```

### `NEVER`

Represents `TimeRange` going from positive to negative infinity. It contains nothing as it's an impossible range.

```helios
TimeRange::NEVER -> TimeRange
```

### `from`

Returns a `TimeRange` that contains all [`Time`](./time.md) values from `start` onwards.

```helios
TimeRange::from(start: Time) -> TimeRange
```

### `to`

Returns a `TimeRange` that contains all [`Time`](./time.md) values before `end`.

```helios
TimeRange::to(end: Time) -> TimeRange
```

### `new`

Returns a `TimeRange` that contains all [`Time`](./time.md) values between `start` and `end`.

```helios
TimeRange::new(start: Time, end: Time) -> TimeRange
```

### `from_data`

```helios
TimeRange::from_data(data: Data) -> TimeRange
```

## Getters

### `start`

Returns the start [`Time`](./time.md) of a `TimeRange`. Throws an error if start is non-finite.

```helios
time_range.start -> Time
```

### `end`

Returns the end [`Time`](./time.md) of a `TimeRange`. Throws an error if end is non-finite.

```helios
time_range.end -> Time
```

## Operators

### `==`

```helios
TimeRange == TimeRange -> Bool
```

### `!=`

```helios
TimeRange != TimeRange -> Bool
```

## Methods

### `contains`

Returns `true` if a `TimeRange` contains the given time.

```helios
time_range.contains(time: Time) -> Bool
```

### `is_before`

Returns `true` if the end of a `TimeRange` is before the given time. Always returns `false` if the end of the `TimeRange` is positive infinity.

```helios
time_range.is_before(time: Time) -> Bool
```

### `is_after`

Returns `true` if the start of a `TimeRange` is after the given time. Always returns `false` if the start of the `TimeRange` is negative infinity.

```helios
time_range.is_after(time: Time) -> Bool
```

### `serialize`

```helios
time_range.serialize() -> ByteArray
```

### `show`

```helios
time_range.show() -> String
```