# `UTxO`

*Unspent Transaction Output* that can be used as an input to when builing a transaction.

## Constructor

```ts
new helios.UTxO(
    txId: helios.TxId,
    utxoIdx: bigint,
    origOutput: helios.TxOutput
)
```