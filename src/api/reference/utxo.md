# `UTxO`

*Unspent Transaction Output* that can be used as an input to when builing a transaction. `UTxO` instances are also returned when interfacing with [`Wallet`](./wallet.md#utxos).

## Constructor

```ts
new helios.UTxO(
    txId: helios.TxId,
    utxoIdx: bigint,
    origOutput: helios.TxOutput
)
```