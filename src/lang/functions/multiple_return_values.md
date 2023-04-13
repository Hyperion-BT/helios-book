# Multiple return values

A Helios function can return multiple values:

```helios
func swap(a: Int, b: Int) -> (Int, Int) {
    (b, a)
}
```

You can assign to multiple return values:

```helios
(a: Int, b: Int) = swap(10, 20); ... // a==20 && b==10
```

Some of the multiple return values can be discarded with an underscore (`_`):

```helios
(a: Int, _) = swap(10, 20); ...
```