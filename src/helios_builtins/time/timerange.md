# TimeRange

This represents a range of time using a pair of `Time` values, or open ends.

## Associated functions and constants

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

## Operators

```helios
TimeRange == TimeRange -> Bool
TimeRange != TimeRange -> Bool
```

## Getters

```helios
// @notice Throws an error if start of TimeRange is non-finite
start: Time

// @notice Throws an error if end of TimeRange is non-finite
end: Time
```

## Methods

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
