# Section 1.1: Primitive Types

## Primitive Types

Helios has five primitive types. All variables in Helios are **immutable**.

<br/>

| Name      | Literal                         | Haskell Equivalent          |
| :---      | :---                            | :---                        |
| Bool      | `true` or `false`                    | `Bool`                      |
| Int       | `42` or `0b11010011` or `0x7b`          | `Integer` (unbounded integer) |
| String    | `"stringy"` or `'stringier'`          | ?                      |
| ByteArray | `#thisisabytestring`                | `ByteString`        |

```rust
// Boolean values
booly: Bool = true;

// Integers
inty: Int = 42;

// Strings
stringy: String = "All your codes belongs to us.";

// BytesArrays
byte_array: ByteArray = #0x3132424;
```

**Note:** Helios has support for compile time constansts, constants are declared using the `const` keyword and must be named in all caps:

```rust
const AGE: Int = 2132;
```

## List (\[\]a)

Helios has a list type list just like a the Haskell `List` type.
It's type signature is `[]a` where a is the type of items in the list.
Notably Helios list items aren't accessed using square brackets, `[]` for indexing instead the

```rust
// A list of Integers
just_some_ints: []Int = []Int{1, 2, 3, 4, 5};
```

### Useful Methods

Helios lists have a lot of methods you'd normally find in other languages

```golang
// List Methods.
fib_list: []Int = []Int{1, 1, 2, 3, 5};

trace(fib_list.len() != 5, "This will print if the length of fib_list is 8.");

// Note: Throws error if index is out of range. 
trace(fib_list.get(4) != 5, "This will print if the element at index 4 is 3.")

// Note: Throws an error if list is empty.
trace(fib_list.head() != 1, "Gets the element at the front of the list.")

// Note: Throws an error if the list is empty.
trace(fib_list.tail() != 5, "Returns the element at the end of the list.");

trace(fib_list.prepend(0) != []Int{0, 1, 1, 2, 3, 4, 5}, 
    "Prepends item to the front of a list.")

trace(!([]Int{}).is_empty(), "Checks if a list is empty.")
```

### Map? \[WIP\]

In future Helios might have a `Map` data structure just like in Haskell which would be a constant-time lookup, key-value pairs store.
