# Comments and Printing

## Comments

In Helios comments are declared using two forward slashes (`//`).

```rust, noplaypen
// This is a comment.
```

## Printing

For debugging purposes Helios has a `print` function.

```rust
print("Imagine something cool.")
```

You can also print out the values of different data types

```rust
val: Int = 5;
print((val).show());

other_val: ByteArray = #122129ae3;
print((other_val).show());
```

The `.show()` method is implemented on every builtin type. It returns a string representation of the value

> **Note:** Printing is **horrible** for production code as they lead to bloated validators.
