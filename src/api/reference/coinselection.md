# `CoinSelection`

Static class with common [coin selection algorithms](https://cips.cardano.org/cips/cip2/).

## Static methods

### `selectLargestFirst`

Selects [UTxOs](./utxo.md) from a list by iterating through the tokens in the given [`Value`](./value.md) and picking the [UTxOs](./utxo.md) containing the largest corresponding amount first.

Returns two lists. The first list contains the selected [UTxOs](./utxo.md), the second list contains the remaining [UTxOs](./utxos.md).

```ts
helios.CoinSelection.selectLargestFirst(
    utxos: helios.UTxO[],
    amount: helios.Value
)
```

### `selectSmallestFirst`

Selects [UTxOs](./utxo.md) from a list by iterating through the tokens in the given [`Value`](./value.md) and picking the [UTxOs](./utxo.md) containing the smallest corresponding amount first. This method can be used to eliminate dust [UTxOs](./utxo.md) from a wallet.

Returns two lists. The first list contains the selected [UTxOs](./utxo.md), the second list contains the remaining [UTxOs](./utxo.md).

```ts
helios.CoinSelection.selectSmallestFirst(
    utxos: helios.UTxO[],
    amount: helios.Value
)
```