# `Datum`

Represents either an inline datum, or a hashed datum.

## Static methods

### `fromCbor`

Decodes a CBOR encoded datum. Can be inline or hashed.

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

## Getters

### `data`

Return the underlying data, or `null` if not available.

```ts
datum.data: ?helios.UplcData
```

### `hash`

Get the `DatumHash`.

```ts
datum.hash: helios.DatumHash
```

## Methods

### `isHashed`

Returns `true` if this is a hashed datum.

```ts
datum.isHashed(): boolean
```

### `isInline`

Returns `true` if this is an inline datum.

```ts
datum.isInline(): boolean
```