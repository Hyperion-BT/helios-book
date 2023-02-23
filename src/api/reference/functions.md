# Functions

### `bytesToHex`

Converts a list of bytes into its hexadecimal string representation.

```ts
helios.bytesToHex(bytes: number[]): string
```

### `bytesToText`

Converts utf-8 encoded text from its byte representation to its string representation.

```ts
helios.bytesToText(bytes: number[]): string
```

### `deserializeUplcBytes`

Deserializes a flat encoded [`UplcProgram`](./uplcprogram.md).

```ts
helios.deserializeUplcBytes(bytes: number[]): helios.UplcProgram
```

### `extractScriptPurposeAndName`

Quickly extract the script purpose header of a script source, by parsing only the minimally necessary characters. Returns `null` if the script header is missing or syntactically incorrect.

The first string returned is the script purpose, the second value returned is the script name.

```ts
helios.extractScriptPurposeAndName(src: string): ?[string, string]
```

### `hexToBytes`

Converts a hexadecimal string into a list of bytes.

```ts
helios.hexToBytes(hex: string): number[]
```

### `highlight`

Returns `Uint8Array` with the same length as the number of chars in the script. Each resulting byte respresents a different syntax category. This approach should faster than a regexp based a approach.

```ts
helios.highlight(src: string): Uint8Array
```

### `hl`

Template string tag function that doens't do anything and just returns the template string as a string. Can be used as a marker of Helios sources so that syntax highlighting can work inside js/ts files.

```ts
helios.hl`...`: string
```

### `textToBytes`

Converts a string into its utf-8 encoded byte representation.

```ts
helios.textToBytes(text: string): number[]
```