# `Value`

The `Value` type represents monetary value as a **token bundle** (internally represented as a `Map[`[`MintingPolicyHash`](./mintingpolicyhash.md)`]Map[`[`ByteArray`](./bytearray.md)`]`[`Int`](./int.md))

>**Note**: 1 ADA is equal to 1 million Lovelace

>**Note**: You might find yourself comparing the output of `value.get()` to a number in order to check if `value` contains something, but in that case it usually better to use the `value.contains()` method instead.

## Associated functions and constants

### `ZERO`

An empty `Value`.

```helios
Value::ZERO -> Value
```

### `lovelace`

Returns a `Value` containing only lovelace.

```helios
Value::lovelace(amount: Int) -> Value
```

### `new`

Returns a `Value` containing an amount of a given [`AssetClass`](./assetclass.md).

```helios
Value::new(asset_class: AssetClass, amount: Int) -> Value
```

### `from_data`

```helios
Value::from_data(data: Data) -> Value
```

### `from_map`

Instantiates a `Value` using a raw map.

```helios
Value::from_map(raw_value: Map[MintingPolicyHash]Map[ByteArray]Int) -> Value
```

## Operators

### `==`

Returns `true` if two `Value`s are the same. Note that the assets and tokens must also be in the same order for `==` to return `true`.

```helios
Value == Value -> Bool
```

### `!=`

```helios
Value != Value -> Bool
```

### `>=`

Strict greater-equals comparison. If every lhs token has a greater-or-equals amount than the equivalent rhs token then `>=` returns `true`. If any rhs token has a greater amount than the equivalent lhs token then `>=` returns `false`.

```helios
Value >= Value -> Bool
```

### `>`

Strict greater-than comparison. If every lhs token has a greater amount than the equivalent rhs token then `>` returns `true`. If any rhs token has a greater-or-equals amount than the equivalent lhs token then `>` returns `false`.

```helios
Value > Value -> Bool
```

### `<=`

Strict less-equals comparison. If every lhs token has a smaller-or-equals amount than the equivalent rhs token then `<=` returns `true`. If any rhs token has a smaller amount than the equivalent lhs token, or doesn't exist in lhs, then `<=` returns `false`.

```helios
Value <= Value -> Bool
```

### `<`

Strict less-than comparison. If every lhs token has a smaller amount than the equivalent rhs token then `<` returns `true`. If any rhs token has a smaller-or-equals amount than the equivalent lhs token, or doesn't exist in lhs, then `<` returns `false`.

```helios
Value < Value -> Bool
```

### `+`

```helios
Value + Value -> Value
```

### `-`

Subtracts two `Value`s. Note that negative token amounts are possible.

```helios
Value - Value -> Value
```

### `*`

```helios
Value * Int -> Value
```

### `/`

```helios
Value / Int -> Value
```

## Methods

### `serialize`

```helios
value.serialize() -> ByteArray
```

### `is_zero`

Checks if a Value is empty.

```helios
value.is_zero() -> Bool
```

### `get`

Returns the amount of the given [`AssetClass`](./assetclass.md) in a `Value`. Throws error if the [`AssetClass`](./assetclass.md) isn't found.

```helios
value.get(asset_class: AssetClass) -> Int
```

### `get_policy`

Returns a map of tokens of the given [`MintingPolicyHash`](./mintingpolicyhash.md) in a `Value`. Throws an error if the [`MintingPolicyHash`](./mintingpolicyhash.md) isn't found.

```helios
value.get_policy(mph: MintingPolicyHash) -> Map[ByteArray]Int
```

### `contains`

Alias for `>=` (where lhs is `self`).

```helios
value.contains(other_value: Value) -> Bool
```