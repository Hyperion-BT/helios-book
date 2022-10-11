# Time Types

## Time

---

Represents POSIX time in milliseconds (time since 1970/01/01 00:00:00 UTC).

### Associated Functions

```helios
func new(millis: Int) -> Time

func from_data(data: Data) -> Time
```

### Operators

```helios
Time == Time     -> Bool
Time != Time     -> Bool
Time >= Time     -> Bool
Time >  Time     -> Bool
Time <= Time     -> Bool
Time <  Time     -> Bool
Time +  Duration -> Time
Time -  Duration -> Time
Time -  Time     -> Duration
```

### Methods

```helios
func show(self) -> String

func serialize(self) -> ByteArray
```

## Duration

---

The difference of two `Time` values is a `Duration` value. Only a `Duration` can be added to a `Time` (two `Time` values can't be added).

### Associated Functions

```helios
func new(raw: Int) -> Duration

func from_data(data: Int) -> Duration
```

### Operators

```helios
Duration == Duration -> Bool
Duration != Duration -> Bool
Duration >= Duration -> Bool
Duration >  Duration -> Bool
Duration <= Duration -> Bool
Duration <  Duration -> Bool
Duration +  Duration -> Duration
Duration -  Duration -> Duration
Duration *  Int      -> Duration
Duration /  Int      -> Duration
Duration /  Duration -> Int
Duration %  Duration -> Duration
```

### Methods

```helios
func serialize(self: Time) -> ByteArray
```

## TimeRange

---

This represents a range of time using a pair of `Time` values, or open ends.

### Associated functions and constants

```helios
// Represents TimeRange starting from negative to positive infinity.
// It contains all possible Time values.
const ALWAYS: TimeRange

// Represents TimeRange starting from positive to negative infinity.
// It contains nothing as it's impossible.
const NEVER: TimeRange

// @returns A TimeRange that contains all Time values from 'start' onwards.
func from(start: Time) -> TimeRange

// @returns A TimeRange that contains all Time values before 'start' up to 'start'.
func to(end: Time) -> TimeRange

func new(start: Time, end: Time) -> TimeRange

func from_data(data: Data) -> TimeRange
```

### Operators

```helios
TimeRange == TimeRange -> Bool
TimeRange != TimeRange -> Bool
```

### Getters

```helios
// @notice Throws an error if start of TimeRange is non-finite
start: Time

// @notice Throws an error if end of TimeRange is non-finite
end: Time
```

### Methods

```helios
// @returns 'true' if self contains the 'time'
func contains(self, time: Time) -> Bool

// @returns 'true' if the end of 'self' is before 'time'
// @notice Always returns 'false' if end of 'self' is positive infinity
func is_before(self, time: Time) -> Bool

// @returns 'true' if the start of 'self' is after 'time'
// @notice Always returns 'false' if start of 'self' is negative infinity
func is_after(self, time: Time) -> Bool

func serialize(self) -> ByteArray
```
