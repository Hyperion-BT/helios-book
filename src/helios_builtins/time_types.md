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

### Operators

`==`,`!=`

### Methods

```go, noplaypen
// @returns The start of TimeRange.
func get_start(self: TimeRange) -> Time;

func serialize(self: TimeRange) -> Time;
```

### Internal Namespace

`__helios__timerange`
