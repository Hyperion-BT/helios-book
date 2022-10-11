# Primitive Types

Helios has six (6) primitive types.

## Int

---

This is an unbounded integer like Haskell's `Integer` type.

### Operators

```helios
Int == Int -> Bool
Int != Int -> Bool
Int >= Int -> Bool
Int >  Int -> Bool
Int <= Int -> Bool
Int <  Int -> Bool
Int +  Int -> Int
Int -  Int -> Int
Int *  Int -> Int
Int /  Int -> Int
Int %  Int -> Int
```

### Associated functions

```helios
func from_data(data: Data) -> Int
```

### Methods

```helios
func serialize(self) -> ByteArray

func to_bool(self) -> Bool

func to_hex(self) -> String

func show(self) -> String
```

## Bool

---

Represents a boolean value (`true`/`false`).

```helios
true_val: Bool = true;
false_val: Bool = false; ...
```

### Associated Functions

```helios
func and(fn_bool_1: () -> Bool, fn_bool_2: () -> Bool) -> Bool

func or(fn_bool_1: () -> Bool, fn_bool_2: () -> Bool) -> Bool

func from_data(data: Data) -> Bool
```

### Operators

```helios
!Bool -> Bool
Bool == Bool -> Bool
Bool != Bool -> Bool

// @notice Right arg is only evaluated if left arg is true
Bool && Bool -> Bool

// @notice Right arg is only evaluated if left arg is false
Bool || Bool -> Bool
```

### Methods

```helios
func serialize(self) -> ByteArray

func to_int(self) -> Int

func show(self) -> String
```

## String

---

This is a fixed-size string.

```helios
example: String = "Woah!"; ...
```

### Operators

```helios
String == String -> Bool
String != String -> Bool

// @notice String concatenation
String +  String -> String
```

### Associated functions
```helios
func from_data(data: Data) -> String
```

### Methods

```helios
func serialize(self) -> ByteArray

func encode_utf8(self) -> String

func starts_with(self, prefix: String) -> Bool

func ends_with(self, suffix: String) -> Bool
```

## ByteArray

---

This represents an array of bytes.

```helios
example: ByteArray = #213212; ...
```

### Operators

```helios
ByteArray == ByteArray -> Bool
ByteArray != ByteArray -> Bool

// @notice ByteArray concatenation
ByteArray +  ByteArray -> ByteArray
```

### Associated functions
```helios
func from_data(data: Data) -> ByteArray
```

### Getters

```helios
// @returns the length of the ByteArray
length: Int 
```

### Methods:

```helios
func serialize(self) -> ByteArray

// @returns The SHA2-256 hash of the ByteArray
func sha2(self) -> ByteArray

// @returns The SHA3-256 hash of the ByteArray
func sha3(self) -> ByteArray

// @returns The Blake2b256 hash of the ByteArray
func blake2b(self) -> ByteArray

func decode_utf8(self) -> String

func show(self) -> String

func starts_with(self, prefix: ByteArray) -> Bool

func ends_with(self, suffix: ByteArray) -> Bool

func slice(self, start: Int, end: Int) -> ByteArray
```

## List (`[]a`)

---

Helios linked-list type.

```helios
example: []Int = []Int{1, 2, 3, 4, 5}; ...
```


### Associated Functions

```helios
func from_data(data: Data) -> []a

func new(n: Int, fn: (Int) -> a) -> []a

func new_const(n: Int, item: a) -> []a
```

### Operators

```helios
[]a == []a -> Bool
[]a != []a -> Bool

// @notice List concatenation
[]a +  []a -> []a

```

### Getters

```helios
// @returns The length of the list.
length: Int

// @returns The element at the front of the list
// @notice Throws an error if the list is empty.
head: a

// @returns The element at the end of the list.
// @notice Throws an error if the list is empty.
tail: []a
```

### Methods

```helios
func serialize(self) -> ByteArray

// @returns 'true' if the list is empty.
func is_empty(self) -> Bool

// @returns The element the index in the list.
// @notice Throws an error if the list is too short.
func get(self, index: Int) -> a

// @returns A new list with the item prepended at the front of the list.
func prepend(self, item: a) -> []a

// @return 'true' if any of the items in the list satisfy the predicate.
func any(self, predicate: (a) -> Bool) -> Bool

// @return 'true' if all of the items in the list satisfy the predicate.
func all(self, predicate: (a) -> Bool) -> Bool

// @return The first element in the list that satisfies the predicate.
// @notice Throws an error is no element satisfies the predicate.
func find(self, predicate: (a) -> Bool) -> a

// @returns A list of all the elements in the list that satisfy the predicate.
func filter(self, predicate: (a) -> Bool) -> []a

// @returns Folds a list into a single value by continuosly applying the binary
//         function to the elements of the list.
func fold(self, reducer: (b, a) -> b, init: b) -> b

// @returns The original list list with the transformation function called on
//          all it's elements.
func map(self, mapper: (a) -> b) -> []b
```

## Map (`Map[a]b`)

---

List of key-value pairs 
Note that a `Map` is internally not implemented as a hash-table, so entries can be duplicate.

```helios
my_map = Map[String]Int{"zero": 0, "one": 1, "two": 2};
print(my_map.get("zero").show()); ... // prints '0'
```

### Associated Functions

```helios
func from_data(data: Data) -> Map[a]b
```

### Operators

```helios
Map[a]b == Map[a]b -> Bool
Map[a]b != Map[a]b -> Bool

// Map concatenation
Map[a]b +  Map[a]b -> Map[a]b
```

### Getters
```helios
// @returns the number of items in a map.
length: Int
```

### Methods

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

## Option (`Option[a]`)

---

`Option[a]` is an enum used to represent an optional value.

```helios
// internal representation
enum Option[a] {
    Some { some: a }
    None
}

example_1: Option[Int] = Option[Int]::Some{42};
example_2: Option[Int] = Option[Int]::None; ...
```

### Associated Functions

```helios
func from_data(data: Data) -> Option[a]
```

### Operators

```helios
Option[a] == Option[a] -> Bool
Option[a] != Option[a] -> Bool
```

### Getters

```helios
// @returns content of Option[a]::Some
// @notice this getter doesn't exist on Option[a]::None
Option[a]::Some.some: a
```

### Methods

```helios
func serialize(self) -> ByteArray
```
