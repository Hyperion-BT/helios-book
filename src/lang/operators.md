# Operators

The following operators are defined on many of the [builtins](./builtins/index.md):

| Operator     | Precedence |
| :---         | :---       |
| `-`(unary)   | 7          |
| `+`(unary)   | 7          |
| `!`(unary)   | 7          |
| `%`          | 6          |
| `/`          | 6          |
| `*`          | 6          |
| `-` (binary) | 5          |
| `+` (binary) | 5          |
| `>=`         | 4          |
| `>`          | 4          |
| `<=`         | 4          |
| `<`          | 4          |
| `!=`         | 3          |
| `==`         | 3          |
| `&&`         | 2          |
| <code>&#124;&#124;</code>| 1          |

> **Note**: all unary operators have right-to-left associativity. All binary operators have left-to-right associativity.

> **Note**: `==` and `!=` do a deep comparison and are defined automatically on all user-defined and builtin types.
