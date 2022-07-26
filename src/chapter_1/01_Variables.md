# Variables

Variables in Helios are *immutable*. This means that once a variable is declared, it's value cannot change.

## Declaring a Variable

```rust, noplaypen
num: Int = 42;
```

From the variable declaration above we can tell about `num`:
1. It is immutable.
2. It's value is `42`.
3. It's type is `Int`.

`Int` is the builtin numeric type in Helios it represents an unbounded integer. See [Builtin Types](./02_Builtin_Types.md) for more details.

## Type Annotations

A variable declaration must contain a *type annotation.*, unless it's right hand side is a literal.
This is done not just for helping the compiler but also to make Helios code more readable. A few more example of type annotations.

```rust, noplaypen
list_of_ints = []Int{1, 1, 2, 3, 5};

// Instead of

list_of_ints: []Int = []Int{1, 1, 2, 3, 5};
```

## Constants

Helios has support for compile time constansts, constants are declared using the `const` keyword and must be named in all caps:

```rust, noplaypen
const AGE = 2132;
```

It's best practice to use `const` for all top-level assignments and all variables known at compile-time.

> **Note**: Constants are statements can only be set to the result of an `if`/`else` expression if the `if`/`else` expression evaluates to something constant.
