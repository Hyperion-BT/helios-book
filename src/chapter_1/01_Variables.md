# Variables

As a functional programming language, Helios doesn't support mutable variables. Helios does however support binding values to names.

## Binding inside a function

Inside a function body, values can be bound to names using assignment expressions:

```rust, noplaypen
my_number: Int = 42; ...
```

In this example `my_number` has value `42` and has type `Int`. `my_number` cannot be mutated after its definition.

Assignment expressions must be followed by another expression, separated by a semicolon (`;`). The assignment expression above should be seen as syntactic sugar for `((my_number: Int) -> {...})(42)`.

> **Note**: `Int` is Helios' only number type, and represents an unbounded integer. See [Builtin Types](./02_Builtin_Types.md) for more details.

> **Note**: an assignment expression can alternatively be seen as a ternary operator: `... = ... ; ...`

## `const` statements

Values can also be bound to names at the *top-level* of a script, or inside `struct` or `enum` blocks. This is done with the `const` keyword:

```rust, noplaypen
const AGE: Int = 123
```

> **Note**: The right-hand side of a constant can contain complex expressions and even function calls. The compiler is smart enough to evaluate these at compile-time.

## Type Annotations

Assignment expressions and `const` statements usually include  a *type annotation*. For literal right-hand sides *type annotations* are optional:
```rust, noplaypen
list_of_ints = []Int{1, 1, 2, 3, 5}; ...

// instead of the more verbose:

list_of_ints: []Int = []Int{1, 1, 2, 3, 5}; ...
```
