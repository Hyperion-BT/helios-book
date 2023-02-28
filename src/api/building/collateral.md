# Collateral

Some `UTxO`s must be added as collateral to the transaction in case the transaction interacts with smart contracts:

```js
tx.addCollateral(utxo)
```

> **Note**: the collateral is only lost if the transaction fails once submitted. There are however plenty of checks that happen before the transaction is submitted to the blockchain mem-pool, so such a situation is very unlikely.

> **Note**: since v0.12.6 of Helios, setting the collateral is no longer necessary. If unset, the collateral (and collateral return) is set automatically inside `tx.finalize()`.
