# Variables

Variables in Helios can be defined inside function bodies using assignment expressions, and at the *top-level* of a script using `const` statements.

## Assignment

Inside a function body, variables are defined using assignment expressions:

```helios
my_number: Int = 42; ...
```

Here `my_number` has value `42`, and has type [`Int`](./builtins/int.md). 

Assignment expressions must be followed by another expression, separated by a semicolon (`;`). 

> **Note**: [`Int`](./builtins/int.md) is Helios' only number type, and represents an unbounded integer.

> **Note**: the assignment expression above can be seen as syntactic sugar for the following anonymous function call: `((my_number: Int) -> {...})(42)`.

> **Note**: an assignment expression can alternatively be seen as a ternary operator: `... = ... ; ...`

## Reassignment

A variable can be reassigned (though all values in Helios are immutable).

```helios
my_number: Int = 42;

...

my_number = 0 // reassignment
```

The new value must have the same type. You can reassign a variable inside nested scopes, effectively shadowing the original value. You can also reassign function arguments.

> **Note**: the value of an assignment in a nested scope isn't available in the outer scopes.

## `const` statements

Variables can also be defined at the *top-level* of a script, or inside `struct` or `enum` blocks, with `const` statements:

```helios
const AGE: Int = 123
```

`const` statements can be [`changed`](../api/reference/classes/Program.md#parameters-1) using the Helios API (see [`parameterized contracts`](./script-structure/parameterized.md)).

> **Note**: the right-hand side of `const` can contain complex expressions and even function calls. The compiler is smart enough to evaluate these at compile-time.

### `const` without right-hand-side

The right-hand-side of a `const` statement can be omitted, in which case it *must* be set using the Helios API before compiling (see [`program.parameters`](../api/reference/classes/Program.md#parameters-1)):

```helios
const MY_PARAMETER: ValidatorHash
```

## Type annotations

Assignment expressions usually include  a *type annotation*. For literal right-hand sides, *type annotations* are optional:
```helios
list_of_ints = []Int{1, 1, 2, 3, 5}; ...

// instead of the more verbose:

list_of_ints: []Int = []Int{1, 1, 2, 3, 5}; ...
```

>**Note**: `const` statements always have a type annotation. The type of the right-hand-side is never inferred.