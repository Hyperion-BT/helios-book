# TxInput

This type represents a **Transaction Input**.

```helios
struct TxInput {
    output_id: TxOutputId
    output: TxOutput
}
```

## Associated functions
```helios
func from_data(data: Data) -> TxInput
```

## Operators

```helios
TxInput == TxInput -> Bool
TxInput != TxInput -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
