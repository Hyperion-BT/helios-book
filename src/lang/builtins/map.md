# `Map`

List of key-value pairs.

> **Note**: a `Map` is internally not implemented as a hash-table, so keys aren't guaranteed to be unique.

The map type syntax takes two type parameters: `Map[`*`KeyType`*`]`*`ValueType`*.

Example:

```helios
my_map = Map[String]Int{"zero": 0, "one": 1, "two": 2};
print(my_map.get("zero").show()); ... // prints "0"
```

## Associated Functions

### `from_data`
```helios
Map[KeyType]ValueType::from_data(data: Data) -> Map[KeyType]ValueType
```

## Getters

### `length`

Returns the number of items in a map.

```helios
map.length -> Int
```

## Operators

### `==`

```helios
Map[KeyType]ValueType == Map[KeyType]ValueType -> Bool
```

> **Note**: because Plutus-Core handles `Map` as a list, the entries must be in the same order for `==` to return `true`.

### `!=`

```helios
Map[KeyType]ValueType != Map[KeyType]ValueType -> Bool
```

### `+`

Concatenation of two maps.

```helios
Map[KeyType]ValueType + Map[KeyType]ValueType -> Map[KeyType]ValueType
```

## Methods

### `get`

Returns the value of the first entry in the map that matches the given key. Throws an error of the key isn't found.

```helios
map.get(key: KeyType) -> ValueType
```

### `get_safe`

Returns the value of the first entry in the map that matches the given key (wrapped in an option). Returns `Option[ValueType]::None` if the key isn't found.

```helios
map.get_safe(key: KeyType) -> Option[ValueType]
```

### `all`

Returns `true` if all map entries satisfy the predicate.

```helios
map.all(predicate: (KeyType, ValueType) -> Bool) -> Bool
```

### `all_keys`

Returns `true` if all map keys satisfy the predicate.

```helios
map.all_keys(predicate: (KeyType) -> Bool) -> Bool
```

### `all_values`

Returns `true` if all map values satisfy the predicate.

```helios
map.all_values(predicate: (ValueType) -> Bool) -> Bool
```

### `any`

Returns `true` if any map entry satisfies the predicate.

```helios
map.any(predicate: (KeyType, ValueType) -> Bool) -> Bool
```

### `any_key`

Returns `true` if any map key satisfies the predicate.

```helios
map.any_key(predicate: (KeyType) -> Bool) -> Bool
```

### `any_value`

Returns `true` if any map value satisfies the predicate.

```helios
map.any_value(predicate: (ValueType) -> Bool) -> Bool
```

### `filter`

```helios
map.filter(predicate: (KeyType, ValueType) -> Bool) -> Map[KeyType]ValueType
```

### `filter_by_key`

```helios
map.filter_by_key(predicate: (KeyType) -> Bool) -> Map[KeyType]ValueType
```

### `filter_by_value`

```helios
map.filter_by_value(predicate: (ValueType) -> Bool) -> Map[KeyType]ValueType
```

### `find_key`

Returns the first key that matches the condition. Throws an error if none found.

```helios
map.find_key((key: KeyType) -> Bool) -> KeyType
```

### `find_key_safe`

Returns an [`Option`](./option.md) containing the first key that matches the condition, or `Option[KeyType]::None` if none found.

```helios
map.find_key_safe((key: KeyType) -> Bool) -> Option[KeyType]
```

### `find_value`

Returns the first value that matches the condition. Throws an error if none found.

```helios
map.find_value((value: ValueType) -> Bool) -> ValueType
```

### `find_value_safe`

Returns an [`Option`](./option.md) containing the first value that matches the condition, or `Option[ValueType]::None` if none found.

```helios
map.find_value_safe((value: ValueType) -> Bool) -> Option[ValueType]
```

### `fold`

```helios
map.fold(
    reducer: (ReducedType, KeyType, ValueType) -> ReducedType, 
    init: ReducedType
) -> ReducedType
```

### `fold_keys`

```helios
map.fold_keys(
    reducer: (ReducedType, KeyType) -> ReducedType, 
    init: ReducedType
) -> ReducedType
```

### `fold_values`

```helios
map.fold_values(
    reducer: (ReducedType, ValueType) -> ReducedType, 
    init: ReducedType
) -> ReducedType
```

### `map_keys`

Creates a new map by transforming the map keys. The map values remain the same.

```helios
map.map_keys(mapper: (KeyType) -> NewKeyType) -> Map[NewKeyType]ValueType
```

### `map_values`

Creates a new map by transforming the map values. The map keys remain the same.

```helios
map.map_values(mapper: (ValueType) -> NewValueType) -> Map[KeyType]NewValueType
```

### `serialize`

```helios
map.serialize() -> ByteArray
```

### `sort`

Sorts the map using insertion sort.

```helios
map.sort((key_a: KeyType, value_a: ValueType, key_b: KeyType, value_b: ValueType) -> Bool) -> Map[KeyType]ValueType
```

### `sort_by_key`

Sorts the map by applying insertion sort to the keys.

```helios
map.sort((a: KeyType, b: KeyType) -> Bool) -> Map[KeyType]ValueType
```

### `sort_by_value`

Sorts the map by applying insertion sort to the values.

```helios
map.sort((a: ValueType, b: ValueType) -> Bool) -> Map[KeyType]ValueType
```