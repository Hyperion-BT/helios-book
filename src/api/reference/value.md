# `Value`

Represents a collection of tokens.

## Constructor

Constructs a `Value` instance using a quantity of lovelace and an [`Assets`](./assets.md) instance.

```ts
new helios.Value(
    lovelace: bigint = 0n,
    assets: helios.Assets = new helios.Assets()
)
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `Value` instance.

Shifts `bytes` to the next CBOR element.

```ts
helios.Value.fromCbor(bytes: number[]): helios.Value
```

### `fromData`

Turns a [`UplcData`](./uplcdata.md) instance into a `Value`. Throws an error if it isn't in the right format.

```ts
helios.Value.fromData(data: helios.UplcData): helios.Value
```

## Getters

### `assets`

Gets the `Assets` contained in the `Value`.

```ts
value.assets: helios.Assets
```

### `lovelace`

Gets the lovelace quantity contained in the `Value`.

```ts
value.lovelace: bigint
```

## Methods

### `add`

Adds two `Value` instances together. Returns a new `Value` instance.

```ts
value1.add(value2: helios.Value): helios.Value
```

### `assertAllPositive`

Throws an error if any of the `Value` entries is negative.

```ts
value.assertAllPositive(): void
```

### `eq`

Checks if two `Value` instances are equal (`Assets` need to be in the same order).

```ts
value1.eq(value2: helios.Value): boolean
```

### `ge`

Checks if a `Value` instance is strictly greater or equal to another `Value` instance.

```ts
value1.ge(value2: helios.Value): boolean
```

### `gt`

Checks if a `Value` instance is strictly greater than another `Value` instance.

```ts
value1.gt(value2: helios.Value): boolean
```

### `sub`

Substracts one `Value` instance from another. Returns a new `Value` instance.

```ts
value1.sub(value2: helios.Value): helios.Value
```

### `setLovelace`

Mutates the quantity of lovelace in a `Value`.

```ts
value.setLovelace(lovelace: bigint): void
```

### `toCbor`

Serialize a `Value` instance using CBOR.

```ts
value.toCbor(): number[]
```

### `toData`

Returns a [`MapData`](./mapdata.md) representation of a `Value`.

```ts
value.toData(): helios.MapData
```