# TxOutput

This type represents a **Transaction Output**.

```helios
struct TxOutput {
    address: Address
    value:   Value
    datum:   OutputDatum
}
```

## Associated functions
```helios
func from_data(data: Data) -> TxOutput
```

## Operators

```helios
TxOutput == TxOutput -> Bool
TxOutput != TxOutput -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
