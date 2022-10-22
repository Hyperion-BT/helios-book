# `CborData`

Base class of each CBOR (de)serializeable type. `CborData` also contains many static helper methods which can be used to decode/encode CBOR data.

## Static methods

### `decodeBool`

Decodes a CBOR encoded `boolean`. Input list is mutated. Throws an error if the next element in `bytes` isn't a `boolean`.

```ts
helios.CborData.decodeBool(bytes: number[]): boolean
```

### `decodeBytes`

Unwraps a CBOR encoded list of bytes. Mutates `bytes` and moves to the following element.

```ts
helios.CborData.decodeBytes(bytes: number[]): number[]
```


### `decodeInteger`

Decode a CBOR encoded bigint integer. Mutates `bytes` and moves to the following element.

```ts
helios.CborData.decodeInteger(bytes: number[]): bigint
```

### `decodeList`

Decodes a CBOR encoded list. A decoder function is called with the bytes of every contained item (nothing is returning directly). Mutates `bytes` and moves on to element following the list.

```ts
helios.CborData.decodeList(
    bytes: number[], 
    decoder: (number[]) => void
): void
```

### `decodeMap`

Decodes a CBOR encoded map. Calls a decoder function for each key-value pair (nothing is returned directly).

The decoder function is responsible for separating the key from the value, which are simply stored as consecutive CBOR elements.

```ts
helios.CborData.decodeMap(
    bytes: number[],
    decoder: (number[]) => void
): void
```

### `decodeNull`

Checks if next element in `bytes` is a `null`. Throws an error if it isn't. Mutates `bytes` by moving to the following element.

```ts
helios.CborData.decodeNull(bytes: number[]): void
```

### `decodeObject`

Decodes a CBOR encoded object. For each field a decoder is called which takes the field index and the field bytes as arguments.

```ts
helios.CborData.decodeObject(
    bytes: number[],
    decoder: (number, number[]) => void
): void
```

### `encodeBool`

Encode a `boolean` into its CBOR representation.

```ts
helios.CborData.encodeBool(b: boolean): number[]
```

### `encodeBytes`

Wraps a list of bytes using CBOR. Optionally splits the `bytes` in chunks.

```ts
helios.CborData.encodeBytes(
    bytes: number[],
    splitInChunks: boolean = false
): number[]
```

### `encodeDefList`

Encodes a list of CBOR encodeable items using CBOR definite length encoding (i.e. header bytes of the element represent the length of the list).

Each item is `CborData` child instances with the `toCbor` method defined, or an already encoded list of CBOR bytes.

```ts
helios.CborData.encodeDefList(
    list: helios.CborData[] | number[][]
): number[]
```

### `encodeIndefList`

Encodes a list of CBOR encodeable items using CBOR indefinite length encoding.

Each item is eiter a `CborData` child instance with the `toCbor` method defined, or an already encoded list of CBOR bytes.

```ts
helios.encodeIndefList(
    list: helios.CborData[] | number[][]
): number[]
```

### `encodeInteger`

Encodes a bigint integer using CBOR.

```ts
helios.CborData.encodeInteger(x: bigint): number[]
```

### `encodeMap`

Encodes a list of key-value pairs. Each key and each value is either a `CborData` child instance with the `toCbor` method defined, or an already encoded list of CBOR bytes.

```ts
helios.CborData.encodeMap(
    pairs: [
        helios.CborData | number[],
        helios.CborData | number[]
    ][]
): number[]
```

### `encodeNull`

Encode a `null` into its CBOR representation.

```ts
helios.CborData.encodNull(): number[]
```

### `encodeObject`

Encodes an object with optional fields. A CBOR object element is simply a map element with integer keys representing the field index.

```ts
helios.encodeObject(
    object: Map<
        number,
        helios.CborData | number[]
    >
): number[]
```