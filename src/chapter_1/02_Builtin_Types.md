# Builtin Types

## Primitive Types

Helios has 6 primitive types:
- `Int` (an unbounded integer)
- `Bool` (Boolean `true` or `false`)
- `ByteArray` (array of bytes)
- `String` (fixed-length string)
- `List` (linked list)
- `Map` (A hashmap) \[WIP\]

## Int
---

Helios' `Int` type represents an unbounded integer like Haskell's `Integer` type.

```rust,noplaypen
// Helios has support for multiple Integer literal formats
normal_literal: Int = 17; // This is a base 10 value

bits_literal: Int = 0b10001; // This is a base 2 value

hex_literal: Int = 0x11; // This is a base 16 value

oct_literal: Int = 0o121; // This is a base 8 value
```

## Bool
---

The `Bool` type has two possible values: `true` or `false`. Boolean values are typically used for conditional logic or validation, for example in `if` expressions. Booleans can be negated using the negation operator (`!`),

```rust,noplaypen
func returns_false() -> Bool {
    !true
}
```

Booleans can also be converted into `Int`s using the `to_int` method.

```rust,noplaypen
x: Int = (true).to_int();  // x == 1
y: Int = (false).to_int(); // y == 0
```

## ByteArray
---

The `ByteArray` type as you've likely guessed represents an array of bytes.

```rust,noplaypen
simple_bytearray: ByteArray = #af2r221ad;
```

All most core Helios types including all other primitve types can be converted to a `ByteArray` using the `serialize` method.

```rust,noplaypen
result: ByteArray = (1231).serialize();
```

## String
---

Helios strings can be declared using single (`'`) or double (`"`) quotes.

```ts,noplaypen
single_quotes: String = 'Oh wow';
double_quotes: String = "Wow I did it again";
```

Strings in Helios are of static-length and immutable.
This means a string cannot 'grow' to accomodate more characters after it is declared.
When concatenating strings in Helios a new string is created.

```rust,noplaypen
string_1: String = "Hel";
string_2: String = "ios";
result: String = string_1 + string_2; // "Helios"
```

## List (\[\]a)
---

Helios has a list type list just like a the Haskell `List` type.
It's type signature is `[]a` where `a` is the type of items in the list.
Notably Helios list items aren't accessed using square brackets, `[]` for indexing instead the `get` method is used method is used, check out [Helios Builtins](../helios_builtins/Helios_Builtins.md/#list-a).

```rust,noplaypen
// A list of Integers
some_ints: []Int = []Int{1, 2, 3, 4, 5};

// Getting an element in a list
x: Int = some_ints.get(2)    // x == 3
```

### Useful Methods

Helios lists have a lot of useful methods you'd normally find in other languages

```rust,noplaypen
// List Methods.
fib_list: []Int = []Int{1, 1, 2, 3, 5};

// This function returns the length of the list
print((fib_list.len()).show()) // This will print out the lenght of the list


// This function returns the value at a specified index
// Note: Throws error if index is out of range. 
print((fib_list.get(4)).show()) // This will print out the value at index 4 which is 5.


// This function gets the first element of the list
// It will throw an error if the list is empty
print((fib_list.head()).show()) // This will print out the first value in the list


// This function gets the last element of the list
// It will throw an error if the list is empty
print((fib_list.tail()).show()) // This will print out the last value in the list


// This function would adds an item to the list at a specified index
print((fib_list.prepend(0)).show()) // This will print out a new list value 0 added in front of the old list


// This fucntion checks if the list is empty
print((fib_list.is_empty()).show()) // This will print out true if the list is empty
```

## Map? \[WIP\]
---

In future Helios might have a fleshed out `Map` data structure just like in Haskell which would be a constant-time lookup, key-value pairs store.

## More Information

For more information on the Builtin type check out [Builtin Types](../helios_builtins/Helios_Builtins.md).
