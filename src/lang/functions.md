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

> **Note:**: A function can only reference itself when recursing. Helios doesn't support hoisting, so mutual recursion by referring to functions defined after the current function isn't possible:
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

## Anonymous functions

Helios also supports anonymous function expressions. Anonymous function expressions are basically function statements without the `func` keyword: 
```helios
is_even = (n: Int) -> Bool { (n % 2) == 0 }; ...
// type of 'is_even' can be infered, 
//  but return type of the anonymous function must be specified
```

> **Note:** Function statements can be referenced by their name, returning a function value. This should be preferred to using anonymous functions, as it is more readable.

## Multiple return values

Functions can return multiple values:

```helios
func swap(a: Int, b: Int) -> (Int, Int) {
    (b, a)
}
```

Assignment expressions can assign to multiple lhs names at ones:

```helios
(a: Int, b: Int) = swap(10, 20); ... // a==20 && b==10
```

## Ignoring unused arguments

All function arguments must be used in its definition. This can be inconvenient when defining callbacks where you want to ignore some of the arguments. For this situation you can use an `_` (underscore):

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
add = (a: Int) -> (Int) -> Int { (b: Int) -> Int { a + b } }; ...
```

> **Note**: functions aren't entirely first-class to be precise. Functions can't be stored in containers, nor in structs/enums.