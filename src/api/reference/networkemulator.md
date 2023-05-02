# `NetworkEmulator`

A simple emulated [`Network`](./network.md). This can be used to do integration tests of whole dApps. Staking is not yet supported.

## Constructor

Instantiates a `NetworkEmulator` at slot 0. An optional seed number can be specified, from which all emulated randomness is derived.

```ts
const network = new helios.NetworkEmulator(seed: number = 0)
```

## Methods

### `createWallet`

Creates a new [`WalletEmulator`](./walletemulator.md) and populates it with a given lovelace quantity and [assets](./assets.md) (these are taken from special genesis transactions).

```ts
network.createWallet(
    lovelace: bigint,
    assets: helios.Assets
): helios.WalletEmulator
```

### `getUtxos`

Gets a complete list of UTxOs at a given [address](./address.md).

```ts
network.getUtxos(address: helios.Address): Promise<helios.UTxO[]>
```

### `initNetworkParams`

Creates a new [`NetworkParams`](./networkparams.md) instance that has access to current slot (so that [`Tx`](./tx.md) validity range can be set automatically during [`finalize()`](./tx.md#finalize)).

```ts
network.initNetworkParams(networkParams: helios.NetworkParams): helios.NetworkParams
```

### `submitTx`

Validates and submits a transaction to the emulated mempool. Any input UTxOs are immediately marked as spent.

```ts
network.submitTx(tx: helios.Tx): Promise<helios.TxId>
```

### `tick`

Mints a block with the current emulated mempool, and advances the head slot by `nSlots`.

```ts
network.tick(nSlots: bigint)
```