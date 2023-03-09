# Functions

Functions are a core feature of Helios. All Helios functions are *pure*, which means they don't have side effects and always return the same result when given the same arguments.

Function statements are defined using the `func` keyword. Helios has no `return` statement, the last expression in a function is *implicitly returned* (like in Rust):

```helios
func add(a: Int, b: Int) -> Int {
    a + b 
}
```

A function can call itself recursively:

```helios
func fib(n: Int) -> Int {
    // the branches of an if/else expresion return values
    if (n < 1) {
        1
    } else {
        fib(n - 1) + fib(n - 2)
    }
}
```

> **Note:**: a function can only reference itself when recursing. Helios doesn't support hoisting, so mutual recursion by referring to functions defined after the current function isn't possible:
>
> ```helios
> 01 func a(n: Int) -> Int {
> 02     b(n)                   // ReferenceError: 'b' undefined
> 03 }
> 04
> 05 func b(n: Int) -> Int {
> 06     a(n)                   // ok
> 07 }
>```

## Multiple return values

Functions can return multiple values:

```helios
func swap(a: Int, b: Int) -> (Int, Int) {
    (b, a)
}
```

You can assign to multiple return values at once:

```helios
(a: Int, b: Int) = swap(10, 20); ... // a==20 && b==10
```

Some of the multiple return values can be ignored with an underscore (`_`):

```helios
(a: Int, _) = swap(10, 20); ...
```

## Void return value

Functions that are composed of only `print`, `error`, `assert`, and `if-else`/`switch` expressions there-of, return void (`()`). These kinds of functions can't be called in assignments.

```helios
func assert_even(n: Int) -> () {
    assert(n % 2 == 0, "not even")
}
```

The syntax for calling user-defined void functions is the same as for `print`, `error` and `assert`:

```helios
func main(ctx: ScriptContext) -> Bool {
    assert_even(ctx.outputs.length);
    ...
}
```

## Anonymous functions

Helios also supports anonymous function expressions. Anonymous function expressions are basically function statements without the `func` keyword: 
```helios
// type of 'is_even' can be inferred
is_even = (n: Int) -> Bool { n % 2 == 0 }; ...
```

The return type of anonymous functions is optional:
```helios
is_even = (n: Int) -> { n % 2 == 0 }; ...
```

> **Note:** function statements can be referenced by their name, returning a function value. This should be preferred to using anonymous functions, as it is more readable.

## Ignoring unused arguments

All named function arguments must be used in the function definition. This can be inconvenient when defining callbacks where you want to ignore some of the arguments. For this situation you can use an underscore (`_`):

```helios
// sort a map by only comparing the keys
map.sort((a_key: ByteArray, _, b_key: ByteArray, _) -> Bool {
    a_key < b_key
})
```

## Function values

Functions are first-class citizens in Helios and can be used as values. This means:

### 1. Functions can be passed as arguments

```helios
even_numbers: []Int = ([]Int{1, 2, 3, 4, 5, 6}).filter(is_even); ... // [2, 4, 6]; 
```

### 2. Functions can be returned

```helios
add_a = (a: Int) -> (Int) -> Int { (b: Int) -> {a + b} }; ...
```

> **Note**: functions aren't entirely first-class to be precise. Functions can't be stored in containers, nor in structs/enums.