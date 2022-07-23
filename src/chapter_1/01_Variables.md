# Variables

Variables in Helios are *immutable*. This means that once a variable is declared, it's value cannot change.

## Declaring a Variable

```rust
num: Int = 42;
```

From the variable declaration above we can tell about `num`:
    1. It is immutable.
    2. It's value is `42`.
    3. It's type is `Int`.

`Int` is the builtin numeric type in Helios it represents an unbounded integer. See [Builtin Types](./02_Builtin_Types.md) for more details.

## Type Annotations

A variable declaration must contain a *type annotation.*.
This is done not just for helping the compiler but also to make Helios code more readable. A few more example of type annotations.

```rust
a_string: String = "something cool";
a_list_of_fib_ints: []Int = []Int{1, 1, 2, 3, 5};
```

## Constants

Helios has support for compile time constansts, constants are declared using the `const` keyword and must be named in all caps:

```rust
const AGE: Int = 2132;
```

**Note**: Constants can't be set to the result of an `if`/`else` expression.
