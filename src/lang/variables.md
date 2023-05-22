# Variables

Helios doesn't really have variables as it is a purely functional programming language, and nothing can be mutated after definition. It is more accurate to think of *variables* in Helios as *binding values to names*.

## Assignment

Inside a function body, values can be bound to names using assignment expressions:

```helios
my_number: Int = 42; ...
```

Here `my_number` has value `42`, and has type [`Int`](./builtins/int.md). `my_number` cannot be mutated after its definition.

Assignment expressions must be followed by another expression, separated by a semicolon (`;`). The assignment expression above should be seen as syntactic sugar for the following anonymous function call: `((my_number: Int) -> {...})(42)`.

> **Note**: [`Int`](./builtins/int.md) is Helios' only number type, and represents an unbounded integer.

> **Note**: an assignment expression can alternatively be seen as a ternary operator: `... = ... ; ...`

## `const` statements

Values can also be bound to names at the *top-level* of a script, or inside `struct` or `enum` blocks. This is done with the `const` keyword:

```helios
const AGE: Int = 123
```

Top-level `const` statements can be [`re-bound`](../api/reference/program.md#parameters-1) using the Helios API to form a new, distinct contract with a different address (see [`parameterized contracts`](./parameterized.md)).

> **Note**: the right-hand side of `const` can contain complex expressions and even function calls. The compiler is smart enough to evaluate these at compile-time.

### `const` without right-hand-side

If a `const` statements acts as a global parameter whose value must always be set, the right-hand-side can be omitted, for example:

```helios
const MY_PARAMETER: ValidatorHash
```

The compiler will throw an error if such parameters aren't set before compiling a [`Program`](../api/reference/program.md) into a [`UplcProgram`](../api/reference/uplcprogram.md). Use the [`program.parameters`](../api/reference//program.md#parameters-1) setter to set such parameters.


## Type annotations

Assignment expressions usually include  a *type annotation*. For literal right-hand sides *type annotations* are optional:
```helios
list_of_ints = []Int{1, 1, 2, 3, 5}; ...

// instead of the more verbose:

list_of_ints: []Int = []Int{1, 1, 2, 3, 5}; ...
```

>**Note**: `const` statements always have a type annotation. The type of the right-hand-side is never infered.