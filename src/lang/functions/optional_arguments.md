# Optional arguments

Some function arguments can be made optional by specifying default values:

```helios
func incr(x: Int, by: Int = 1) -> Int {
    x + by
}
```

Optional arguments must come last.

The type signature of a function with optional arguments differs from a regular function:

```helios
fn: (Int, ?Int) -> Int = incr
```