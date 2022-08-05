# Helios Builtins

This book is also meant to be a guide to the internals of Helios for Helios developers and other compiler implementations of Helios in the future.

## Sections

- [Primitive Types](./primitive_types.md)
- [Time Types](./time_types.md)
- [Cryptography Types](./cryptography_types.md)
- [Native-Asset Types](./native-asset_types.md)
- [Transaction Types](./transaction_types.md)

## Helios Operators

| Operator | Internal Name |
| :---     | :---          |
| `==`     | `__eq`        |
| `!=`     | `__neq`       |
| `>`      | `__gt`        |
| `>=`     | `__geq`       |
| `<`      | `__lt`        |
| `<=`     | `__leq`       |
| `!`      | `__not`       |
| `and`    |  `__and`      |
| `or`     |  `__or`       |
