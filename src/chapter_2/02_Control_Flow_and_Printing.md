# Control Flow, Printing and Traces

## Control Flow

Helios supports `if/else` statements.

```rust
if (true) {
    23
} else {
    42
}
```

In Helios `if`/`else` statements are expressions.
So the last expression is implicitly returned much like Rust and Ruby.
This is valid syntax: 

```rust
x: Int = if (true) {
            42
        } else {
            24
        };
```

**Note**: Compile-time constants can't be set to the result of an `if`/`else` expression.

## Printing and Traces

For debuggin purposes Helios has a `print` function.

```rust
print("Imagine something cool.")
trace(21 > 32, "Should be true");
```

**Note:** Traces are **horrible** for production code as they lead to bloated validators.
