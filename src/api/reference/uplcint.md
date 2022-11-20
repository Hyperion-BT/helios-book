# `UplcInt`

Primitive equivalent of [`IntData`](./intdata.md). Not needed to interact with Helios smart contracts, but can be used to interact with smart contracts written in other languages (eg. Plutarch).

## Static methods

### `new`

Constructs a `UplcInt` instance. `value` must be a whole number.

```ts
helios.UplcInt.new(value: number | bigint): helios.UplcInt
```