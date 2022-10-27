# `IntData`

One of the 5 Plutus-Core builtin data classes. Parent class is [`UplcData`](./uplcdata.md).

Represents an unbounded integer (bigint).

## Constructor

```ts
new helios.IntData(value: bigint)
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `IntData`. Mutates `bytes` and shifts it to the following element.

```ts
helios.IntData.fromCbor(bytes: number[]): IntData
```

## Getters

### `value`

Get the underlying bigint value.

```ts
int_data.value: bigint
```

## Methods

### `toCbor`

Encodes a `IntData` instance as CBOR bytes.

```ts
int_data.toCbor(): number[]
```

### `toSchemaJson`

Returns the schema JSON needed to interact with external tools like *cardano-cli* and *Lucid*.

```ts
int_data.toSchemaJson(): string
```