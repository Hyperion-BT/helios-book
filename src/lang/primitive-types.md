# Primitive types

Helios has 4 **primitive** types:
  * `Int` (an unbounded integer)
  * `Bool` (`true` or `false`)
  * `ByteArray` (array of uint8)
  * `String` (utf-8 text)


## `Int`

Helios' `Int` type represents an unbounded integer (like Haskell's `Integer` type).

```helios
// Helios supports typical integer literals:
my_decimal = 17;
my_binary  = 0b10001;
my_hex     = 0x11;
my_octal   = 0o121; ...
```

`Int` is the only numeric type in Helios. There is **no** float type.

More information about the `Int` type can be found [here](./builtins/int.md).


## `Bool`

The `Bool` type has two possible literal values: `true` or `false`.

Booleans are used throughout validator scripts, and the return type of validator scripts is a boolean. The simplest validator script body is just a literal boolean:

```helios
func main(_, _, _) -> Bool {
    true
}
```

The `==` and `!=` operators, returning boolean results, are defined on all builtin and user types:

```helios
func main(_, _, ctx: ScriptContext) -> Bool {
    ctx == ctx // always true
}
```

More information about the `Bool` type can be found [here](./builtins/bool.md).


## `ByteArray`

The `ByteArray` type, as you've likely guessed, represents an array of bytes. A literal `ByteArray` is a hexadecimal sequence prefixed by `#`:

```helios
my_bytes = #af2e221a; ... // 
```

All builtin and user types can be converted into a `ByteArray` using the builtin [`serialize`](./automatic-methods.md#serialize) method:

```helios
cbor_bytes: ByteArray = 123.serialize(); ... // cbor encoding of 123
```

More information about the `ByteArray` type can be found [here](./builtins/bytearray.md).

> **Note**: a `ByteArray` can be empty, so the following is valid syntax: `my_bytes = #; ...`

## `String`

A literal Helios string uses double quotes (`"..."`):

```helios
my_message = "hello world"; ...
```

Similar to all other values in Helios, strings are immutable and have a fixed length. 

Strings cannot *grow* after definition. Concatenating two strings creates a new string:

```helios
string_1: String = "Hel";
string_2: String = "ios";
result: String = string_1 + string_2; ... // "Helios"
```

More informationa about the `String` type can be found [here](./builtins/string.md).