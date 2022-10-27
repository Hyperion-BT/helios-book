# `UplcDataValue`

Represents a child instance of [`UplcValue`](./uplcvalue.md), wrapping a [`UplcData`](./uplcdata.md) instance.

Everything except a Helios [`Bool`](../../lang/builtins/bool.md) value [evaluates](./program.md#evalparam) to a `UplcDataValue`.

## Getters

### `data`

Get the underlying [`UplcData`](./uplcdata.md).

```ts
uplc_data_value.data: helios.UplcData
```