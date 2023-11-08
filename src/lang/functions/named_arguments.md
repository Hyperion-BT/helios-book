# Named arguments

Similar to literal constructor fields, function arguments can be named in a call:

```helios
func sub(a: Int, b: Int) -> Int {
    a - b
}

sub(b: 1, a: 2) // == 1
```

A function call can't mix named arguments with positional arguments.

Named arguments are mostly used when calling the [`copy()`](../user-defined-types/methods/automatic-methods.md#copy) method.