# DatumHash

This is a type-safe wrapper around the `ByteArray` type that represents the hash of a datum.

## Associated Functions

```helios
func new(bytes: ByteArray) -> DatumHash

func from_data(data: Data) -> DatumHash
```

## Operators

```helios
DatumHash == DatumHash -> Bool
DatumHash != DatumHash -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray

func show(self) -> String
```
