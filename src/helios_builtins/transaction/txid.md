# TxId

This is a type-safe wrapper around the `ByteArray`

```helios
struct TxId {...}
```

## Associated functions
```helios
func new(bytes: ByteArray) -> TxId

func from_data(data: Data) -> TxId
```

## Operators

```helios
TxId == TxId -> Bool
TxId != TxId -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
