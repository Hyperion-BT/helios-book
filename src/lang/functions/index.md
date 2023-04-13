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

More detailed information can be found on the following pages:

 * [Multiple return values](./multiple_return_values.md)
 * [Void functions](./void.md)
 * [Anonymous functions](./anonymous.md)
 * [Unused arguments](./unused_arguments.md)
 * [Optional arguments](./optional_arguments.md)
 * [Named arguments](./named_arguments.md)
 * [Function values](./values.md)