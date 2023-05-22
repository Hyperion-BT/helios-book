# `WalletEmulator`

An emulated [`Wallet`](./wallet.md), created by calling [`emulator.createWallet()`](./networkemulator.md#createwallet).

This wallet only has a single private/public key, which isn't rotated. Staking is not yet supported.

## Getters

### `address`

Gets the [`Address`](./address.md) of the wallet.

```ts
wallet.address: helios.Address
```

### `privateKey`

Gets the [`PrivateKey`](./privatekey.md) of the wallet.

```ts
wallet.privateKey: helios.PrivateKey
```

### `pubKey`

Gets the [`PubKey`](./pubkey.md) of the wallet.

```ts
wallet.pubKey: helios.PubKey
```

### `pubKeyHash`

Gets the [`PubKeyHash`](./pubkeyhash.md) of the wallet.

```ts
wallet.pubKeyHash: helios.PubKeyHash
```

## `usedAddresses`

A list containing the emulated wallet's single address.

```ts
wallet.usedAddresses: Promise<helios.Address[]>
```

### `unusedAddresses`

Returns an empty list in this case.

```ts
wallet.unusedAddresses: Promise<helios.Address[]>
```

### `utxos`

Gets all the [`UTxO`s](./utxo.md) controlled by the emulated wallet.

```ts
wallet.utxos: Promise<helios.UTxO[]>
```

## Methods

### `isMainnet`

Returns `false` in this case.

```ts
wallet.isMainnet(): Promise<boolean>
```

### `signTx`

Signs a [transaction](./tx.md), returning a list containing the single signature needed for submitting it.

```ts
wallet.signTx(tx: helios.Tx): Promise<helios.Signature[]>
```

### `submitTx`

Submits a [transaction](./tx.md) to the emulated blockchain. Returns the [`TxId`](./txid.md).

```ts
wallet.submitTx(tx: helios.Tx): Promise<helios.TxId>
```