# Time Types

## Time

---

Represents time in POSIX format.

### Associated Functions

```go, noplaypen
func new(raw: Int) -> Time;
```

### Operators

`==`, `!=`, `+`, `-`, `>=`, `>`, `<=`, `<`

### Methods

serialize, show

### Internal Namespace

`__helios__time`

## Duration

---

The `Duration` type represents as you've probably guessed a duration of time.
`Time` can be thought of as a vector quantity with direction, while `Duration` is a scalar quantity only having magnitude.

### Associated Functions

```go, noplaypen
func new(raw: Int) -> Duration;
```

### Operators

`==`, `!=`, `+`, `-`, `__mul`, `__div`, ``, `>=`, `>`, `<=`, `<`

### Methods

```go, noplaypen
func serialize(self: Time) -> ByteArray
```

### Internal Namespace

`__helios__duration`

## TimeRange

---

This represents a range of time using a pair of `Time` values.

### Associated Functions

```go, noplaypen
// Represents TimeRange starting from positive to negative infinity.
// It contains all possible Time values.
const ALWAYS: TimeRange

// Represents TimeRange starting from negative to positive infinity.
// It contains nothing as it's impossible.
const NEVER: TimeRange

// @returns A TimeRange that contains all Time values from 'start' onwards.
func from(start: Time) -> TimeRange;

// @returns A TimeRange that contains all Time values before 'start' up to 'start'.
func to(end: Time) -> TimeRange;
```

### Operators

`==`,`!=`

### Methods

```go, noplaypen
// @returns The start of TimeRange.
func get_start(self: TimeRange) -> Time;

// @returns 'true' if self contains the 'other' TimeRange
func contains(self: TimeRange, other: TimeRange) -> Bool;

func serialize(self: TimeRange) -> Time;
```

### Internal Namespace

`__helios__timerange`
