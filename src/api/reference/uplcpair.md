# `UplcPair`

Primitive pair value. Not needed to interact with Helios smart contracts, but can be used to interact with smart contracts written in other languages (eg. Plutarch).

## Static methods

### `new`

Constructs a `UplcPair` instance using two [`UplcValue`](./uplcvalue.md) instances.

```ts
helios.UplcPair.new(
    first: helios.UplcValue, 
    second: helios.UplcValue
): helios.UplcPair
```