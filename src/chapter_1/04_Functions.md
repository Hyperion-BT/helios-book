# Functions

Functions are at the core of Helios. All Helios functions are *pure*, this means they have no side effects and always return the same result when given the same arguments.

Functions are declared using the `func` keyword.
Helios has no `return` statement, the last expression in a function is *implicitly returned* like in Rust.

```go, noplaypen
func add(a: Int, b: Int) -> Int {
    a + b 
}
```

Helios has recursion as you'd expect.

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

>**Note**:Functions can only reference themselves.
>There is no global hoisting of `func` and other statements like in javascript.
>So there is no mutual recursion using func statements directly as a function can only reference
> other functions defined before it.
>
> ```go, noplaypen
> 01 func a(n: Int) -> Int {
> 02    ...
> 03     b(n)                    // This won't work
> 04 }
> 05
> 06 func b(n: Int) -> Int {
> 07     ...
> 08     a(n)                   // This will work
> 09 }
>```

## Lambda/Anonymous Functions

Helios also has support for anonymous functions without needing the `func` keyword.
This is for convenience when using higher-order functions.
Lambdas also have some type-inference as on they don't need type annotations on
the *left* side of their declaration.

```rust, noplaypen
// Lambda with full typing
is_even: (Int) -> Bool = (n: Int) -> Bool { (n % 2) == 0 };

// Lambda without type inference
// Note: Return type must still be specified
is_even = (n: Int) -> Bool { (n % 2) == 0 };
```

> **Note:** Normal Functions should be chosen when possible for better clarity.

## First-Class Functions

Functions are first-class citizens in Helios this means:

### 1. Functions can be passed as arguments

```ts, noplaypen
evens: []Int = ([]Int{1, 2, 3, 4, 5, 6}).filter(is_even); // [2, 4. 6]; 
```

### 2. Functions can be returned from functions

```rust, noplaypen
add = (a: Int) -> (Int) -> Int { (b: Int) -> Int { a + b } };
```

> **Note:** Ok I *kind of* lied when I told you that Helios has first-class functions,
functions can't be stored in lists or structs so they aren't **technically** first-class.

## Example: Collatz Sequence function :)

One of my favorite things in maths is the Collatz sequence.
A Collatz sequence starts with a random number, n
and follows **three** very simple rules to decide the next number in the sequence.

- If n is 1 the sequence is over.
- If n is even the next number is n / 2.
- If n is odd the next number is (n * 3) + 1.

It is an open question in math whether there is a Collatz sequence that doesn't end with the number 1.
We can write a simple function to generate the Collatz sequence (as a list of `Int`s) from a given starting number.

```go, noplaypen
func collatz(initial: Int, previous_numbers: []Int) -> []Int {

    // Rule (1)
    if (intial == 1) {
        previous_numbers.prepend(current) 

    // Rule (2)
    } else if (initial % 2 == 0) {
        collatz(current / 2, previous_numbers.prepend(current))

    // Rule (3)
    } else {
        collatz(intial * 3 + 1, previous_numbers.prepend(intial))      
    }
}
```
