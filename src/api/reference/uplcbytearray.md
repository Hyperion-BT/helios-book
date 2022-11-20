# `UplcByteArray`

Primitive equivalent of [`ByteArrayData`](./bytearraydata.md). Not needed to interact with Helios smart contracts, but can be used to interact with smart contracts written in other languages (eg. Plutarch).

## Static methods

### `new`

Constructs a `UplcByteArray` instance.

```ts
helios.UplcByteArray.new(value: number[]): helios.UplcByteArray
```