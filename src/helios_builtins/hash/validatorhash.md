# ValidatorHash

This is a type-safe wrapper around the `ByteArray` type that represents the hash a validator script. The first part of a script address is formed by a `ValidatorHash`.

## Associated Functions

```helios
func new(bytes: ByteArray) -> ValidatorHash

func from_data(data: Data) -> ValidatorHash
```

## Operators

```helios
ValidatorHash == ValidatorHash -> Bool
ValidatorHash != ValidatorHash -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray

func show(self) -> String
```
