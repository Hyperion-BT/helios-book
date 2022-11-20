# `UplcMap`

Primitive equivalent of [`MapData`](./mapdata.md). Not needed to interact with Helios smart contracts, but can be used to interact with smart contracts written in other languages (eg. Plutarch).

## Static methods

### `new`

Constructs a `UplcMap` instance. Child pairs must be [`UplcData`](./uplcdata.md) instances (more generic maps are not yet supported).

```ts
helios.UplcMap.new(
    pairs: [helios.UplcData, helios.UplcData][]
): helios.UplcMap
```