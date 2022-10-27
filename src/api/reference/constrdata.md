# `ConstrData`

One of the 5 Plutus-Core builtin data classes. Parent class is [`UplcData`](./uplcdata.md).

Represents a tag index and a list of data fields. Each field is also a [`UplcData`](./uplcdata.md) child instance.

## Constructor

```ts
new helios.ConstrData(
    index: number,
    fields: helios.UplcData[]
)
```

## Static methods

### `fromCbor`

Decoded a CBOR encoded `ConstrData` instance. Mutates `bytes` and shifts it to the following element.

```ts
helios.ConstrData.fromCbor(bytes: number[]): helios.ConstrData
```

## Getters

### `index`

Returns the `ConstrData` tag.

```ts
constr_data.index: number
```

### `fields`

Returns the `ConstrData` fields.

```ts
constr_data.fields: helios.UplcData[]
```

## Methods

### `toCbor`

Encodes a `ConstrData` instance as CBOR bytes.

```ts
constr_data.toCbor(): number[]
```

### `toSchemaJson`

Returns the schema JSON needed to interact with external tools like *cardano-cli* and *Lucid*.

```ts
constr_data.toSchemaJson(): string
```