# `AssetClass`

Child class of [`HeliosData`](./heliosdata.md).

## Constructor

Intelligently converts arguments. The format for single argument string is `<hex-encoded-mph>.<hex-encoded-token-name>`.

```ts
new helios.AssetClass(
    ...args : 
        [string] | 
        [number[] | string | MintingPolicyHash, number[] | string]
)
```

## Static methods

### `fromCbor`

Deserializes bytes into an `AssetClass`.

```ts
helios.AssetClass.fromCbor(bytes: []number): helios.AssetClass
```

## Methods

### `toCbor`

Turns an `AssetClass` instance into its CBOR representation.

```ts
asset_class.toCbor(): number[]
```