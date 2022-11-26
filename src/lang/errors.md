# Throwing errors

Helios has special syntax for throwing errors which can only be used inside branches of [`if-else`](./branching.md) expressions, and cases of [`switch`](./enums.md#switch) expressions. At least one branch or case must be non-error-throwing.

```helios
if (cond) {
    return true
} else {
    error("my error message")
}
```

```helios
x.switch{
    Buy => true,
    Sell => msg = "my error message"; error(msg)
}
```