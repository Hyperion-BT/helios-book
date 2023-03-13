# `HeliosData`

Abstract parent class of Helios API types that can be used directly when setting parameters:
  * [`Address`](./address.md)
  * `Bool`
  * `ByteArray`
  * [`DatumHash`](./datumhash.md)
  * `HMap`
  * `HString`
  * `HInt`
  * `HList`
  * `Option`
  * [`PubKeyHash`](./pubkeyhash.md)
  * [`StakeKeyHash`](./stakekeyhash.md)
  * [`StakingValidatorHash`](./stakingvalidatorhash.md)
  * [`TxId`](./txid.md)
  * `TxOutputId`
  * [`ValidatorHash`](./validatorhash.md)
  * [`Value`](./value.md)

## Methods

### `toSchemaJson`

Returns a JSON-string in the schema needed for interaction with non-Helios tools.

```ts
helios_data.toSchemaJson(): string
```