# Comments and Printing

## Comments

In Helios single-line comments are declared using two forward slashes (`//`).

```rust, noplaypen
// This is a comment.
```

Multi-line comments are declared using `/* ... */`.

```rust, noplaypen
/*
    This is a multi-line comment.
*/
```

## Printing

For debugging purposes Helios has a `print` function.
`print(...)` must be followed by a semicolon and another expression.

```rust
print("Imagine something cool.");
...
```

>**Note**: Printing can be useful when debugging scripts, but should be avoided in production code as it increases the on-chain script size unnecessarily.
