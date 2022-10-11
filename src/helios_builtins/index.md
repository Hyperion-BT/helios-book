# Helios Builtins

This book is also meant to be a guide to the internals of Helios for Helios developers and other compiler implementations of Helios in the future.

## Sections

- [Primitive Types](./primitives/index.md)
- [Time Types](./time/index.md)
- [Hash Types](./hash/index.md)
- [Money Types](./money/index.md)
- [Transaction Types](./transaction/index.md)

## Helios Operators

The following operators are defined on many of the builtins:

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

> **Note**: all unary operators have right-to-left associativity. All binary operators have left-to-right associativity
