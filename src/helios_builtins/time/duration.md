# Duration

The difference of two `Time` values is a `Duration` value. Only a `Duration` can be added to a `Time` (two `Time` values can't be added).

## Associated Functions

```helios
func new(raw: Int) -> Duration

func from_data(data: Int) -> Duration
```

## Operators

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

## Methods

```helios
func serialize(self: Time) -> ByteArray
```
