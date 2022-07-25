# Functions

Functions are at the core of Helios. All Helios functions are *pure*, this means they have no side-effects and always return the same result when given the same arguments.

> Note: All functions must return a value in Helios

Functions are declared using the `func` keyword.
Helios has no `return` statement, the last expression in a function is *implicitly returned* like in Rust.


```go, noplaypen
func add(a: Int, b: Int) -> Int {
    a + b 
}
```

Helios has recursion recursion as you'd expect.

```go, noplaypen
func fib(n: Int) -> Int {
    // Helios is expression based so the branches of an if/else loop return expressions.
    if (n < 1) {
        1
    } else {
        fib(n-1) + fib(n-2)
    }
}
```

## Lambda/Anonymous Functions

Helios also has support for anonymous functions without needing the `func` keyword.
This is for convenience when using higher order functions.

```rust, noplaypen
// Anonymous functions with typing
is_even: (Int) -> Bool = (n: Int) { (n % 2) == 0 };
```

> **Note:** Normal Functions should be chosen when possible for better clarity.

## First-Class Functions

Functions are first-class citizens in Helios that means:

### 1. Functions can be passed as arguments

```ts, noplaypen
evens: []Int = ([]Int{1, 2, 3, 4, 5, 6}).filter(is_even); // [2, 4. 6]; 
```

### 2. Functions can be returned from functions

```rust, noplaypen
add: (Int) -> (Int) -> Int = (a: Int) { (b: Int) { a + b } };
```

> **Note:** Ok I *kind of* lied when I told you that Helios has first-class functions,
functions can't be stored in lists or structs so they aren't **technically** first-class.

## Example: Collatz Sequence function :)
A Collatz' sequence starts with a random number, n and follows very simple rules to decide the next number in the sequence.

- If n is 1 the sequence is over.
- If n is even the next number is n / 2.
- If n is odd the next number is (n * 3) + 1.

```go, noplaypen
func collatz(current: Int, accumulator: []Int) -> []Int {

    // Rule (1)
    if (current == 1) {
        accumulator.prepend(current) 

    // Rule (2)
    } else if (current % 2 == even) {
        collatz((current / 2), accumulator.prepend(current))

    // Rule (3)
    } else {
        collatz(((current * 3) + 1), accumulator.prepend(current))      
    }
}
```
