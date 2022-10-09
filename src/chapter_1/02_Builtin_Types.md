# Builtin Types

Helios has 4 **primitive** types and 3 **container** types:

- `Int` (an unbounded integer)
- `Bool` (`true` or `false`)
- `ByteArray` (array of uint8)
- `String` (utf-8 text)
- `List` (linked list)
- `Map` (association list of key-value pairs)
- `Option` (aka `Maybe` in Haskell)

## `Int`

---

Helios' `Int` type represents an unbounded integer like Haskell's `Integer` type.

```helios
// Helios supports typical integer literals:
my_decimal: Int = 17;
my_binary: Int = 0b10001;
my_hex: Int = 0x11;
my_octal: Int = 0o121; ...
```

## `Bool`

---

The `Bool` type has two possible values: `true` or `false`. Booleans are used throughout validator scripts, and validator scripts must always return a boolean. The simplest validator script is just a literal boolean expression:

```helios
func main() -> Bool {
    true
}
```

Booleans can be converted into integers using the builtin `to_int` method:
```helios
x: Int = (true).to_int(); // x == 1
y: Int = (false).to_int(); ... // y == 0
```

## `ByteArray`

---

The `ByteArray` type, as you've likely guessed, represents an array of bytes. A literal `ByteArray` is a hexadecimal sequence with `#` as a prefix:

```helios
my_bytes: ByteArray = #af2e221a; ... // 
```

All builtin and user types can be converted into a `ByteArray` using the builtin `serialize` method:

```helios
cbor_bytes: ByteArray = (123).serialize(); ... // cbor encoding of 123
```

## `String`

---

A literal Helios string uses double quotes (`"..."`):

```helios
my_message: String = "hello world"; ...
```

Similar to all other values in Helios, strings are immutable and have a fixed length. Strings cannot *grow* after definition. Concatenating two strings creates a new string:

```helios
string_1: String = "Hel";
string_2: String = "ios";
result: String = string_1 + string_2; ... // "Helios"
```

## List

---

Helios has a builtin linked list type, similar to Haskell's `List`. The type signature for a list is `[]a` where `a` is the item type. The item type can be any type except a function type.

List literals have a syntax similar to Go:
```helios
my_ints = []Int{1, 2, 3, 4, 5};

x: Int = some_ints.get(2); ...   // x == 3
```

> **Note**: lists aren't indexed with `[]`. Instead the `get` method must used, check out [Helios Builtins](../helios_builtins/Helios_Builtins.md/#list-a).

### Useful methods

Helios lists have typical builtin getters and methods:

```helios
fib_list: []Int = []Int{1, 1, 2, 3, 5};

//  '.length' returns the length of the list.
fib_list.length == 5;

//  '.get()' is used instead of square brackets for getting a list item by index.
// throws error if index is out of range. 
fib_list.get(4) == 5; 

// '.head' returns the first element of a list.
// throws error if list is empty.
fib_list.head == 1;

// '.tail' returns the list items following the first item
// throws error if list is empty.
fib_list.tail == []Int{1, 2, 3, 5};

// '.prepend()' extends a list (creating a new list)
fib_list.prepend(0) == []Int{0, 1, 1, 2, 3, 5};

// '.is_empty()' returns true if list is empty
[]Int{}.is_empty() == true; 

// '.map()' creates a new list of equal length
fib_list.map((x: Int) -> Int {x*2}) == []Int{2, 2, 4, 6, 10}; 

// '.fold()' is be used to reduce the over the whole list
fib_list.fold((sum: Int, x: Int) -> Int {sum + x}, 0) == 12; ...
```

## Map

---

A Map in Helios is internally represented as a list of key-value pairs. Both key and value can have any type except a function type. Uniqueness of keys isn't guaranteed.

A Map has a type signature and a literal syntax similar to Go:
```helios
my_map: Map[String]Int = Map[String]Int{"zero": 0, "one": 1, "two": 2}; // either side of the colon can be an arbitrary expression that evaluates to the correct type

print(my_map.get("zero").show()); ... // prints '0'
```

## Option

---

The Option type is a builtin enum with type signature `Option[a]`. It is internally defined as:

```helios
enum Option[a] {
    Some { some: a }
    None
}
```

### Instantiating an `Option`

```helios
some_int: Option[Int] = Option[Int]::Some{42};

none_int: Option[Int] = Option[Int]::None; ...
```

## More Information

For more information on the Builtin type, check out [Builtin Types](../helios_builtins/helios_builtins.md).
