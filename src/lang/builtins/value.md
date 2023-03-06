# `Value`

The `Value` type represents monetary value as a **token bundle** (internally represented as a `Map[`[`MintingPolicyHash`](./mintingpolicyhash.md)`]Map[`[`ByteArray`](./bytearray.md)`]`[`Int`](./int.md))

>**Note**: 1 ADA is equal to 1 million Lovelace

>**Note**: You might find yourself comparing the output of `value.get()` to a number in order to check if `value` contains something, but in that case it is usually better to use the `value.contains()` method instead.

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

Returns `true` if two `Value`s are the same.

```helios
Value == Value -> Bool
```

> **Note**: the assets and tokens must also be in the same order for `==` to return `true`.

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

### `contains`

Alias for `>=` (where lhs is `self`).

```helios
value.contains(other_value: Value) -> Bool
```

### `contains_policy`

Returns `true` if a given [`MintingPolicyHash`](./mintingpolicyhash.md) is in a `Value`.

```helios
value.contains_policy(mph: MintingPolicyHash) -> Bool
```

### `get`

Returns the amount of the given [`AssetClass`](./assetclass.md) in a `Value`. Throws error if the [`AssetClass`](./assetclass.md) isn't found.

```helios
value.get(asset_class: AssetClass) -> Int
```

### `get_lovelace`

Returns the amount of lovelace in a `Value`. Returns `0` if there isn't any.

```helios
value.get_lovelace() -> Int
```

### `get_safe`

Like `get`, but returns `0` instead of throwing an error if the given [`AssetClass`](./assetclass.md) isn't found.

```helios
value.get_safe(asset_class: AssetClass) -> Int
```

### `get_policy`

Returns a map of tokens of the given [`MintingPolicyHash`](./mintingpolicyhash.md) in a `Value`. Throws an error if the [`MintingPolicyHash`](./mintingpolicyhash.md) isn't found.

```helios
value.get_policy(mph: MintingPolicyHash) -> Map[ByteArray]Int
```

### `is_zero`

Checks if a `Value` is empty.

```helios
value.is_zero() -> Bool
```

### `serialize`

```helios
value.serialize() -> ByteArray
```

### `to_map`

Returning the underlying [`Map`](./map.md):

```helios
value.to_map() -> Map[MintingPolicyHash]Map[ByteArray]Int
```