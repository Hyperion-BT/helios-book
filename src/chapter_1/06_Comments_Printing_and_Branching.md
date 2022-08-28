# Comments, Printing, and Branching

## Comments

Helios comments are C-like. 

Single-line comments use two forward slashes (`//`):

```rust, noplaypen
// This is a comment.
```

Multi-line comments use `/* ... */`:

```rust, noplaypen
/*
    This is a multi-line comment.
*/
```

## Printing

For debugging purposes, Helios has a special `print` expression. `print(...)` takes an expression that evaluates to a `String` as an argument, and must be followed by a semicolon and another expression:

```rust, noplaypen
print("Imagine something cool.");
...
```

>**Note**: Print expressions are useful when debugging scripts. They are however eliminated by the compiler when compiling scripts for production.

## Branching

Helios has conventional `if/else` syntax for branching:

```rust, noplaypen
if (tag == 0) {
    23
} else if (tag == 1) {
    42
} else {
	0
}
```

The last expression is each branch block is implicitly returned (much like Rust and Ruby). 

The following is valid syntax:

```rust, noplaypen
x: Int = 
	if (true) {
		42
	} else {
		24
	}; ...
```
