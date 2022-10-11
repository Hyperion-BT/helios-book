# PubKeyHash

This is a type-safe wrapper around the `ByteArray` type that represents the hash of a public key. The first part of a regular payment address (i.e. not witnessed by a script) is a `PubKeyHash`.

## Associated Functions

```helios
func new(bytes: ByteArray) -> PubKeyHash

func from_data(data: Data) -> PubKeyHash
```

## Operators

```helios
PubKeyHash == PubKeyHash -> Bool
PubKeyHash != PubKeyHash -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray

func show(self) -> String
```
