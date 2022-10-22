# `Datum`

Base class of `HashedDatum` and `InlineDatum`.

## Static methods

### `fromCbor`

Decodes a CBOR encoded datum. Returns either a `HashedDatum` or an `InlineDatum` instance.

Mutates `bytes` and shifts it to the following element.

```ts
helios.Datum.fromCbor(bytes: number[]): helios.Datum
```

### `hashed`

Constructs a `HashedDatum`. The input `data` is hashed internally.

```ts
helios.Datum.hashed(
    data: helios.UplcDataValue | helios.UplcData
): helios.HashedDatum
```

### `inline`

Constructs an `InlineDatum`.

```ts
helios.Datum.inline(
    data: helios.UplcDataValue | helios.UplcData
): helios.InlineDatum
```