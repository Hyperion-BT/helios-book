# `Network`

Blockchain query interface. Notably implemented by [`BlockfrostV0`](./blockfrostv0.md) and [`NetworkEmulator`](./networkemulator.md).

## Methods

### `getUtxos`

Gets a complete list of UTxOs at a given [address](./address.md).

```ts
network.getUtxs(address: helios.Address): Promise<helios.UTxO[]>
```

### `submitTx`

Submits a [transaction](./tx.md) to the blockchain. Returns the [`TxId`](./txid.md).

```ts
network.submitTx(tx: helios.Tx): Promise<helios.TxId>
```