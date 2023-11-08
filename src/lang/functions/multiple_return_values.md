# Multiple return values

A Helios function can return multiple values using [tuples](../container-types.md#tuple):

```helios
func swap(a: Int, b: Int) -> (Int, Int) {
    (b, a)
}
```

You can assign to multiple return values using tuple destructuring:

```helios
(a: Int, b: Int) = swap(10, 20); ... // a==20 && b==10
```

Some of the multiple return values can be discarded with an underscore (`_`):

```helios
(a: Int, _) = swap(10, 20); ...
```

## Automatic unpacking of tuples

Tuples are automatically unpacked during a function call, in a way that matches the type signature of the function being called:

```helios
(a: Int, b: Int) = swap(swap(10, 20)); // a==10 && b==20
```