# `ByteArrayData`

One of Plutus-Core's 5 builtin data types, representing a list of bytes.

## Constructor

```ts
new helios.ByteArrayData(bytes: []number)
```

## Static methods

### `fromCbor`

Decodes CBOR bytes representing a `ByteArrayData` instance. Mutates the `bytes` argument.

```ts
helios.ByteArrayData.fromCbor(bytes: []number): helios.ByteArrayData
```

### `fromString`

Encodes a utf-8 string as a `ByteArrayData` instance.

```ts
helios.ByteArrayData.fromString(str: string): helios.ByteArrayData
```

## Getters

### `bytes`

Returns the underlying list of bytes.

```ts
byte_array_data.bytes: number[]
```

## Methods

### `toCbor`

Encodes a `ByteArrayData` instance using CBOR.

```ts
byte_array_data.toCbor(): number[]
```

### `toHex`

Returns the hexadecimal string representation of the underlying bytes.

```ts
byte_array_data.toHex(): string
```

### `toSchemaJson`

Returns the JSON representation of a `ByteArrayData` instance. Needed for interacting with external tools like *cardano-cli* and *Lucid*.

```ts
byte_array_data.toSchemaJson(): string
```