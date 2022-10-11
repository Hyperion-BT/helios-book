# TxOutputId

This type is a unique ID for a UTXO (Unspent Transaction Output).
It's composed of the **Transaction ID** (`TxId`) of the transaction that created the UTXO and the index (`Int`) of the UTXO in the outputs of that transaction.

```helios
struct TxOutputId {
    TxId // not directly accessible
    Int // not directly accessible
}
```

## Associated Functions

```helios
func new(tx_id: TxId, index: Int) -> TxOutputId

func from_data(data: Data) -> TxOutputId
```

## Operators

```helios
TxOutputId == TxOutputId -> Bool
TxOutputId != TxOutputId -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
