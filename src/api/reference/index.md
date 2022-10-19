# API reference

This section contains a complete reference of all the functions and classes exported by the Helios library. Note that only the class methods that are intended for external use are documented here, even if many more methods can be accessed.

Typescript annotations are used to document types. Exported constants and functions are documented on this page. Exported classes are documented on individual pages.

## Constants

### `VERSION`

Current version of the Helios library.

```ts
helios.VERSION: string
```

## Functions

### `hexToBytes`

Converts a hexadecimal string into a list of bytes.

```ts
helios.hexToBytes(hex: string): number[]
```

### `bytesToHex`

Converts a list of bytes into a hexadecimal string.

```ts
helios.bytesToHex(bytes: number[]): string
```

### `hl`

Template string tag function that doens't do anything and just returns the template string as a string. Can be used as a marker of Helios sources so that syntax highlighting can work inside js/ts files.

```ts
helios.hl`...`: string
```

### `extractScriptPurposeAndName`

Quickly extract the script purpose header of a script source, by parsing only the minimally necessary tokens. Returns `null` if header is missing or incorrectly formed.

The first string returned is the script purpose, the second value returned is the script name.

```ts
helios.extractScriptPurposeAndName(src: string): ?[string, string]
```

### `highlight`

Returns `Uint8Array` with the same length as the number of chars in the script. Each resulting byte respresents a different syntax category. This approach should faster than a regexp based a approach.

```ts
helios.highlight(src: string): Uint8Array
```

## Classes
  * `UserError`
  * `NetworkParams`
  * `UplcDataValue`
  * `UplcProgram`
  * `CborData`
  * `IntData`
  * `ByteArrayData`
  * `ListData`
  * `MapData`
  * `ConstrData`
  * `Program`
  * `Tx`
  * `TxWitnesses`
  * `UTxO`
  * `TxOutput`
  * `Address`
  * `Assets`
  * `Value`
  * `Hash`
  * `PubKeyHash`
  * `ValidatorHash`
  * `MintingPolicyHash`
  * `Signature`
  * `Datum`
  * `HashedDatum`
  * `InlineDatum`
  * `FuzzyTest`
