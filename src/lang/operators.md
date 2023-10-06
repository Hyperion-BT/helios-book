# Operators

The following operators are defined on many of the [builtins](./builtins/index.md):

| Operator    | Precedence | Type   | Associativity |
| :---        | :---       | :---   | :---          |
| `... (...)` | 9          | call   | left-to-right |
| `.`         | 9          | member | left-to-right |
| `-`         | 8          | unary  | right-to-left |
| `+`         | 8          | unary  | right-to-left |
| `!`         | 8          | unary  | right-to-left |
| `%`         | 7          | binary | left-to-right |
| `/`         | 7          | binary | left-to-right |
| `*`         | 7          | binary | left-to-right |
| `-`         | 6          | binary | left-to-right |
| `+`         | 6          | binary | left-to-right |
| `>=`        | 5          | binary | left-to-right |
| `>`         | 5          | binary | left-to-right |
| `<=`        | 5          | binary | left-to-right |
| `<`         | 5          | binary | left-to-right |
| `!=`        | 4          | binary | left-to-right |
| `==`        | 4          | binary | left-to-right |
| `&&`        | 3          | binary | left-to-right |
| <code>&#124;&#124;</code>| 2          | binary | left-to-right |
| <code>&#124;</code> | 1          | binary | left-to-right |
| `...=...;...` | 0         | ternary | N/A |

> **Note**: `==` and `!=` do a deep comparison and are defined automatically on all user-defined and builtin types.

## Pipe operator

The pipe operator (`|`) applies a function value on the right to a value on the left:

```helios
func filter_even(lst: []Int) -> []Int {
    lst.filter((item: Int) -> {item%2 == 0})
}

even: []Int = []Int{1,2,3,4} | filter_even; // []Int{2, 4}
```

If the pipe operator is followed by a binary operator, that binary operator is treated as a partially applied function:

```helios
x: Int = 1 + 2 | * 3; // 9
```

This can be especially convenient in cases with long chains.