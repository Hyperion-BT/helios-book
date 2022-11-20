# `UplcList`

Primitive equivalent of [`ListData`](./listdata.md). Not needed to interact with Helios smart contracts, but can be used to interact with smart contracts written in other languages (eg. Plutarch).

## Static methods

### `new`

Constructs a `UplcList` instance. Child items must be [`UplcData`](./uplcdata.md) instances (more generic lists are not yet supported).

```ts
helios.UplcList.new(items: helios.UplcData[]): helios.UplcList
```