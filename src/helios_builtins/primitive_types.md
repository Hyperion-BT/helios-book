# Primitive Types

Helios has six (6) primitive types.

## Int

---

This is an unbounded integer like Haskell's `Integer` type.

### Operators

`==`, `!=`, `+`, `-`, `*`, `/`, `%`, `>=`, `>`, `<=`, `<`

### Associated functions
```go, noplaypen
func from_data(data: Data) -> Int
```

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

func to_bool(self) -> Bool

func to_hex(self) -> String

func show(self) -> String
```

### Internal Namespace

`__helios__int`

## Bool

---

Represents a boolean value (`true`/`false`).

```go, noplaypen
true_val: Bool = true;
false_val: Bool = false; ...
```

### Associated Functions

```go, noplaypen
func and(fn_bool_1: () -> Bool, fn_bool_2: () -> Bool) -> Bool

func or(fn_bool_1: () -> Bool, fn_bool_2: () -> Bool) -> Bool

func from_data(data: Data) -> Bool
```

### Operators

`==`, `!=`, `!`, `&&`, `||`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

func to_int(self) -> Int

func show(self) -> String
```

### Internal Namespace

`__helios__bool`

## String

---

This is a fixed-size string.

```rust, noplaypen
example: String = "Woah!"; ...
```

### Operators

`==`, `!=`,`+`

### Associated functions
```go, noplaypen
func from_data(data: Data) -> String
```

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

func encode_utf8(self) -> String

func starts_with(self, prefix: String) -> Bool

func ends_with(self, suffix: String) -> Bool
```

### Internal Namespace

`__helios__string`

## ByteArray

---

This represents an array of bytes.

```rust, noplaypen
example: ByteArray = #213212; ...
```

### Operators

`==`, `!=`, `+`

### Associated functions
```go, noplaypen
func from_data(data: Data) -> ByteArray
```

### Getters

`length: Int`, returns the length of the `ByteArray`.

### Methods:

```go, noplaypen
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

### Internal Namespace

`__helios__bytearray`

## List ([]a)

---

This is type a linked-list.

```go, playpen
example: []Int = []Int{1, 2, 3, 4, 5}; ...
```


### Associated Functions

```go, noplaypen
func from_data(data: Data) -> []a

func new(n: Int, fn: (Int) -> a) -> []a

func new_const(n: Int, item: a) -> []a
```

### Operators

`==`, `!=`, `+`

### Getters

```go, noplaypen
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

```go, noplaypen
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
func map(self, transformation: (a) -> b) -> []b
```

### Internal Namespace

`__helios__list`

## Map[a,b]

---

This is type is a Hashmap like `Map` in Haskell or Dictionaries in Python. It's used to store key-value pairs.

```go, noplaypen
my_map = Map[String]Int{"zero": 0, "one": 1, "two": 2};
print(my_map.get("zero").show()); // prints '0'
```

### Operators

`==`,`!=`

### Methods

```go, noplaypen
// @returns The Value in the map for the given key.
// @notice  Throws an error if the value isn't in the map.
func get[a, b](self: Map[a, b], key: a) -> b;

// @returns 'true' if all the pairs satisfy the predicate.
func all[a, b](self: Map[a, b], predicate: (a, b) -> Bool) -> Bool

// @returns 'true' if all the pairs satisfy the predicate.
func any[a, b](self: Map[a, b], predicate: (a, b) -> Bool) -> Bool

func serialize(self: Map[a, b]) -> ByteArray
```
`serialize`

### Internal Namespace

`__helios__map`

## Option[a]

---

`Option[a]` is an enum used to represent an optional value.

```rust, noplaypen
enum Option[a] {
    Some { some: a }
    None
}

example_1: Option[Int] = Option::Some{42};
example_2: Option[Int] = Option::None;
```

### Operators

`==`, `!=`

### Methods:

```go, noplaypen
func serialize(self: Option[a]) -> ByteArray;
```

### Internal Namespace

`__helios__option`
