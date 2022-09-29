# Time Types

## Time

---

Represents POSIX time in milliseconds (time since 1970/01/01 00:00:00 UTC).

### Associated Functions

```go, noplaypen
func new(millis: Int) -> Time

func from_data(data: Data) -> Time
```

### Operators

`==`, `!=`, `+`, `-`, `>=`, `>`, `<=`, `<`

### Methods

```rust, noplaypen
func show(self) -> String

func serialize(self) -> ByteArray
```

## Duration

---

The difference of two `Time` values is a `Duration` value. Only a `Duration` can be added to a `Time` (two `Time` values can't be added).

### Associated Functions

```go, noplaypen
func new(raw: Int) -> Duration

func from_data(data: Int) -> Duration
```

### Operators

`==`, `!=`, `+`, `-`, `*`, `/`, `%`, `>=`, `>`, `<=`, `<`

### Methods

```go, noplaypen
func serialize(self: Time) -> ByteArray
```

## TimeRange

---

This represents a range of time using a pair of `Time` values, or open ends.

### Associated functions and constants

```go, noplaypen
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

`==`,`!=`

### Methods

```go, noplaypen
// @returns The start of TimeRange.
// @notice Throws an error if start is negative or positive infinity
func get_start(self) -> Time

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
