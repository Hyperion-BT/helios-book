# Void functions

Functions that are composed of only `print`, `error`, `assert`, and `if-else`/`switch` expressions there-of, return void (`()`). These kinds of functions can't be called in assignments.

```helios
func assert_even(n: Int) -> () {
    assert(n % 2 == 0, "not even")
}
```

The syntax for calling user-defined void functions is the same as for `print`, `error` and `assert`:

```helios
spending my_validator

func main(_, _, ctx: ScriptContext) -> Bool {
    assert_even(ctx.outputs.length);
    ...
}
```