# `UplcData`

Parent class of:
* [`ByteArrayData`](/.bytearraydata.md)
* [`ConstrData`](./constrdata.md)
* [`IntData`](./intdata.md)
* [`ListData`](./listdata.md)
* [`MapData`](./mapdata.md)

## Static methods

### `fromCbor`

Deserializes a CBOR encoded `UplcData` child instance.

Shift `bytes` to the next CBOR element.

```ts
helios.UplcData.fromCbor(bytes: number[]): 
    helios.ByteArrayData |
    helios.ConstrData |
    helios.IntData |
    helios.ListData |
    helios.MapData
```