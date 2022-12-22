# `Map`

List of key-value pairs. The insertion order of the key-value pairs matters.

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

### `head_key`

Returns the key of the first entry in the `Map`. Throws an error if the `Map` is empty.

```helios
map.head_key -> KeyType
```

### `head_value`

Returns the value of the first entry in the `Map`. Throws an error if the `Map` is empty.

```helios
map.head_value -> ValueType
```

### `length`

Returns the number of items in a map.

```helios
map.length -> Int
```

### `tail`

Returns the entries after the first entry as a new `Map`. Throws an error if the `Map` is empty.

```helios
map.tail -> Map[KeyType]ValueType
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

### `all`

Returns `true` if all map entries satisfy the predicate.

```helios
map.all(predicate: (KeyType, ValueType) -> Bool) -> Bool
```

### `any`

Returns `true` if any map entry satisfies the predicate.

```helios
map.any(predicate: (KeyType, ValueType) -> Bool) -> Bool
```

### `delete`

Removes all entries with the given key. Doesn't throw an error if key isn't found.

```helios
map.delete(key: KeyType) -> Map[KeyType]ValueType
```

### `filter`

```helios
map.filter(predicate: (KeyType, ValueType) -> Bool) -> Map[KeyType]ValueType
```

### `find`

Returns the key and value of the first entry that matches the predicate. Throws an error if none found.

```helios
map.find(predicate: (KeyType, ValueType) -> Bool) -> (KeyType, ValueType)
```

### `find_safe`

Returns a callback (that returns the found key-value pair) and a `Bool`. Calling the callback if the returned `Bool` is `false` throws an error.

```helios
map.find_safe(predicate: (KeyType, ValueType) -> Bool) -> (() -> (KeyType, ValueType), Bool)
```

### `find_key`

Returns the first key that matches the predicate. Throws an error if none found.

```helios
map.find_key(predicate: (KeyType) -> Bool) -> KeyType
```

### `find_key_safe`

Returns an [`Option`](./option.md) containing the first key that matches the predicate, or `Option[KeyType]::None` if none found.

```helios
map.find_key_safe(predicate: (KeyType) -> Bool) -> Option[KeyType]
```

### `find_value`

Returns the first value that matches the predicate. Throws an error if none found.

```helios
map.find_value(predicate: (ValueType) -> Bool) -> ValueType
```

### `find_value_safe`

Returns an [`Option`](./option.md) containing the first value that matches the predicate, or `Option[ValueType]::None` if none found.

```helios
map.find_value_safe(predicate: (ValueType) -> Bool) -> Option[ValueType]
```

### `fold`

```helios
map.fold(
    reducer: (ReducedType, KeyType, ValueType) -> ReducedType, 
    init: ReducedType
) -> ReducedType
```

### `fold_lazy`

Fold that allows breaking the loop before reaching the end of the map. Can also be used to fold from the last to the first entry of the `Map` instead of the other way around.

```helios
map.fold_lazy(
    reducer: (KeyType, ValueType, next: () -> ReducedType) -> ReducedType,
    final: ReducedType
) -> ReducedType
```

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

### `map`

Creates a new map by transforming the map keys and values.

```helios
map.map_keys(mapper: (KeyType, ValueType) -> (NewKeyType, NewValueType)) -> Map[NewKeyType]NewValueType
```

### `prepend`

Prepends a key-value pair to the beginning of the `Map`, creating a new `Map`.

```helios
map.prepend(key: KeyType, value: ValueType) -> Map[KeyType][ValueType]
```

### `serialize`

```helios
map.serialize() -> ByteArray
```

### `set`

Sets the first entry with given key to a new value. This entry is appended to end of the `Map` if the key isn't found.

```helios
map.set(key: KeyType, value: ValueType) -> Map[KeyType]ValueType
```

### `sort`

Sorts the map using insertion sort. The comparison function should return `true` if `a` and `b` are in the correct order.

```helios
map.sort(
    compare: (
        key_a: KeyType, value_a: ValueType, 
        key_b: KeyType, value_b: ValueType
    ) -> Bool
) -> Map[KeyType]ValueType
```