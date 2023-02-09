# `Cip30Wallet`

Implementation of [`Wallet`](./wallet.md) that lets you connect to a browser plugin wallet.

## Constructor

Constructs `Cip30Wallet` using the [`Cip30Handle`](./cip30handle.md) which is available in the browser `window.cardano` context.
```ts
const handle: helios.Cip30Handle = await window.cardano.eternl.enable()

const wallet = new helios.Cip30Wallet(handle)
```

## Getters

### `usedAddresses`

Gets a list of addresses which already contain UTxOs.

```ts
wallet.usedAddresses: Promise<helios.Address[]>
```

### `unusedAddresses`

Gets a list of unique unused addresses which can be used to UTxOs to.

```ts
wallet.unusedAddresses: Promise<helios.Address[]>
```

### `utxos`

Gets the complete list of [`UTxO`s](./utxo.md) sitting at the addresses owned by the wallet.

```ts
wallet.utxos: Promise<helios.UTxO[]>
```

## Methods

### `isMainnet`

Returns `true` if the wallet is connected to the mainnet.

```ts
wallet.isMainnet(): Promise<boolean>
```

### `signTx`

Signs a [transaction](./tx.md), returning a list of signatures needed for submitting a valid transaction.

```ts
wallet.signTx(tx: helios.Tx): Promise<helios.Signature[]>
```

### `submitTx`

Submits a [transaction](./tx.md) to the blockchain. Returns the [`TxId`](./txid.md).

```ts
wallet.submitTx(tx: helios.Tx): Promise<helios.TxId>
```