# `MapData`

One of the 5 Plutus-Core builtin data classes. Parent class is [`UplcData`](./uplcdata.md).

Represents a list of pairs of other [`UplcData`](./uplcdata.md) instances.

## Constructor

```ts
new helios.MapData(pairs: [UplcData, UplcData][])
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `MapData` instance. Mutates `bytes` and shifts it to the following element.

```ts
helios.MapData.fromCbor(bytes: number[]): MapData
```

## Getters

### `map`

Get the underlying list of `UplcData` pairs.

```ts
map_data.map: [UplcData, UplcData][]
```

## Methods

### `toCbor`

Encodes a `MapData` instance as CBOR bytes.

```ts
map_data.toCbor(): number[]
```

### `toSchemaJson`

Returns the schema JSON needed to interact with external tools like *cardano-cli* and *Lucid*.

```ts
map_data.toSchemaJson(): string
```