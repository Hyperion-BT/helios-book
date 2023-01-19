# `WalletHelper`

High-level helper class for instances that implement the [`Wallet`](./wallet.md) interface.

## Constructor

```ts
const helper = new helios.WalletHelper(wallet: helios.Wallet)
```

## Getters

## `allAddresses`

Concatenation of [`usedAddresses`](./wallet.md#usedaddresses) and [`unusedAddresses`](./wallet.md#unusedaddresses).

```ts
helper.allAddresses: Promise<helios.Address[]>
```

## `baseAddress`

First [`Address`](./address.md) in [`allAddresses`](#alladdresses).

```ts
helper.baseAddress: Promise<helios.Address>
```

## `changeAddress`

First [`Address`](./address.md) in [`unusedAddresses`](./wallet.md#unusedaddresses).

```ts
helper.changeAddress: Promise<helios.Address>
```

## `refUtxo`

First [`UTxO`](./utxo.md) in [`utxos`](./wallet.md#utxos). Can be used to distinguish between preview and preprod networks.

```ts
helper.refUtxo: Promise<helios.UTxO>
```

## Methods

### `isOwnAddress`

Returns `true` if the [`PubKeyHash`](./pubkeyhash.md) in the given [`Address`](./address.md) is controlled by the wallet.

```ts
helper.isOwnAddress(address: helios.Address): boolean
```

### `isOwnPubKeyHash`

Returns `true` if the given[`PubKeyHash`](./pubkeyhash.md) is controlled by the wallet.

```ts
helper.isOwnPubKeyHash(pkh: helios.PubKeyHash): boolean
```

### `pickUtxos`

Pick a number of [`UTxO`s](./utxo.md) needed to cover a given [`Value`](./value.md). The coin selection strategy is to pick the smallest first (WiP). 

Returns two lists. The first list contains the selected UTxOs, the second list contains the remaining UTxOs.

```ts
helper.pickUtxos(amount: helios.Value): Promise<[helios.UTxO[], helios.UTxO[]]>
```

### `pickCollateral`

Picks a single [`UTxO`](./utxo.md) intended for collateral.

```ts
helper.pickCollateral(amount: bigint = 2000000n): Promise<helios.UTxO>
```