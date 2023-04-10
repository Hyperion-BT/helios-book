# `print`, `error`, `assert`

There are three builtin void functions. These can be used to define higher level [user-defined void functions](./functions/void.md).

Void functions can't be used in assignments.

## `print`

For debugging purposes, Helios has a special `print` expression. `print(...)` takes a [`String`](./builtins/string.md) argument:

```helios
func main() -> Bool {
	print("Hello world");
	true
}
```

>**Note**: `print` expressions are useful when debugging scripts. They are however eliminated by the compiler when compiling scripts optimized for production.

## `error`

Helios has a special `error` builtin, which can be used to throw errors inside branches of [`if-else`](./branching.md) expressions, and cases of [`switch`](./enums.md#switch) expressions. At least one branch or case must be non-error-throwing for the `if-else` or `switch` expression to return a non-void value.

```helios
if (cond) {
    true
} else {
    error("my error message")
}
```

```helios
x.switch{
    Buy => true,
    Sell => error("my error message")
}
```

## `assert`

The builtin `assert` function throws an error if a given expression evaluates to false.

```helios
assert(condition, "should be true"); ...
```