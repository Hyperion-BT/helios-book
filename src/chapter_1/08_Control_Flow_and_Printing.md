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
const x: Int = if (true) {
            42
        } else {
            24
        };
```


> **Note**: Compile-time constants can only be set to the result of an `if`/`else` expression 
>that results in a constant value.

