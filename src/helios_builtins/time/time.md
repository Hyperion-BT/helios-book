# Time

Represents POSIX time in milliseconds (time since 1970/01/01 00:00:00 UTC).

## Associated Functions

```helios
func new(millis: Int) -> Time

func from_data(data: Data) -> Time
```

## Operators

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

## Methods

```helios
func show(self) -> String

func serialize(self) -> ByteArray
```
