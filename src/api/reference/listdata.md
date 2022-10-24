# `ListData`

One of the 5 Plutus-Core builtin data classes. Parent class is `UplcData`.

Represents a list of other `UplcData` instances.

## Constructor

```ts
new helios.ListData(list: UplcData[])
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `ListData` instance. Mutates `bytes` and shifts it to the following element.

```ts
helios.ListData.fromCbor(bytes: number[]): ListData
```

## Getters

### `list`

Get the underlying `UplcData` list.

```ts
list_data.list: UplcData[]
```

## Methods

### `toCbor`

Encodes a `ListData` instance as CBOR bytes.

```ts
list_data.toCbor(): number[]
```

### `toSchemaJson`

Returns the schema JSON needed to interact with external tools like *cardano-cli* and *Lucid*.

```ts
list_data.toSchemaJson(): string
```