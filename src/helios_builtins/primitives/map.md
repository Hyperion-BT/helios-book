# Map (`Map[a]b`)

List of key-value pairs.

> **Note**: a `Map` is internally not implemented as a hash-table, so entries can be duplicate.

```helios
my_map = Map[String]Int{"zero": 0, "one": 1, "two": 2};
print(my_map.get("zero").show()); ... // prints '0'
```

## Associated Functions

```helios
func from_data(data: Data) -> Map[a]b
```

## Operators

```helios
Map[a]b == Map[a]b -> Bool
Map[a]b != Map[a]b -> Bool

// Map concatenation
Map[a]b +  Map[a]b -> Map[a]b
```

## Getters
```helios
// @returns the number of items in a map.
length: Int
```

## Methods

```helios
// @returns The Value in the map for the given key.
// @notice  Throws an error if the value isn't in the map.
func get(self, key: a) -> b

func get_safe(self, key: a) -> Option[b]

// @returns 'true' if all the pairs satisfy the predicate.
func all(self, predicate: (a, b) -> Bool) -> Bool

func all_keys(self, predicate: (a) -> Bool) -> Bool

func all_values(self, predicate: (b) -> Bool) -> Bool

// @returns 'true' if all the pairs satisfy the predicate.
func any(self, predicate: (a, b) -> Bool) -> Bool

func any_key(self, predicate: (a) -> Bool) -> Bool

func any_value(self, predicate: (b) -> Bool) -> Bool

func filter(self, predicate: (a, b) -> Bool) -> Map[a]b

func filter_by_key(self, predicate: (a) -> Bool) -> Map[a]b

func filter_by_value(self, predicate: (b) -> Bool) -> Map[a]b

func fold(self, reducer: (c, a, b) -> c, init: c) -> c

func fold_keys(self, reducer: (c, a) -> c, init: c) -> c

func fold_values(self, reducer: (c, b) -> c, init: c) -> c

// @notice map values remain unchanged
func map_keys(self, mapper: (a) -> c) -> Map[c]b

// @notice map keys remain unchanged
func map_values(self, mapper: (b) -> c) -> Map[a]c

func serialize(self: Map[a, b]) -> ByteArray
```
