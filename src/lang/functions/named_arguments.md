# Named arguments

Similar to literal constructor fields, function arguments can be named in a call:

```helios
func sub(a: Int, b: Int) -> Int {
    a - b
}

sub(b: 1, a: 2) // == 1
```

Named arguments can't be mixed with positional arguments.

Named arguments are mostly used when calling the [`copy()`](../user-defined-types/methods/automatic-methods.md#copy) method.