# Optional arguments

Some function arguments can be made optional by specifying default values:

```helios
func incr(a: Int, b: Int = 1) -> Int {
    a + b
}
```

Optional arguments must come after non-optional arguments.

The type signature of a function with optional arguments differs from a regular function:

```helios
fn: (Int, ?Int) -> Int = incr
```