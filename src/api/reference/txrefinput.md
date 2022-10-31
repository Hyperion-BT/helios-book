# `TxRefInput`

A reference input (similar to [`UTxO`](./utxo.md), but without information about original transaction output).

Needed for [`tx.addRefInput()`](./tx.md#addrefinput) and [`tx.addRefInputs()`](./tx.md#addrefinputs).

## Constructor

A `TxRefInput` instance is constructed using the [`TxId`](./txid.md) where the UTxO was created, and the index of that UTxO in the list of UTxOs created by that transactions.

```ts
new helios.TxRefInput(
    txId: TxId,
    utxoIdx: bigint
)
```