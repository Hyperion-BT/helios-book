# Functions

Functions are a core feature of Helios. All Helios functions are *pure*, which means they have no side effects and always return the same result when given the same arguments.

Function statements are defined using the `func` keyword. Helios has no `return` statement, the last expression in a function is *implicitly returned* (like in Rust):

```go, noplaypen
func add(a: Int, b: Int) -> Int {
    a + b 
}
```

Helios also supports recursion:

```go, noplaypen
func fib(n: Int) -> Int {
    // the branches of an if/else expresion return values
    if (n < 1) {
        1
    } else {
        fib(n-1) + fib(n-2)
    }
}
```

> **Note:**: A function can only reference itself when recursing. Helios doesn't support hoisting, so mutual recursion by referring to functions defined after the current one isn't possible:
>
> ```go, noplaypen
> 01 func a(n: Int) -> Int {
> 02     b(n)                   // ReferenceError: 'b' undefined
> 03 }
> 04
> 05 func b(n: Int) -> Int {
> 06     a(n)                   // ok
> 07 }
>```

## Anonymous functions

Helios also supports anonymous functions. Anonymous functions have a syntax similar to closures in Javascript: 
```rust, noplaypen
is_even = (n: Int) -> Bool { (n % 2) == 0 }; ...
// type of 'is_even' can be infered, 
//  but return type of the anonymous function must be specified
```

> **Note:** Function statements can be referenced by their name, returning a function value. This should be preferred to using anonymous functions, as it is more readable.

## Function values

Functions are first-class citizens in Helios and can be used as values. This means:

### 1. Functions can be passed as arguments

```ts, noplaypen
evens: []Int = ([]Int{1, 2, 3, 4, 5, 6}).filter(is_even); ... // [2, 4. 6]; 
```

### 2. Functions can be returned

```rust, noplaypen
add = (a: Int) -> (Int) -> Int { (b: Int) -> Int { a + b } }; ...
```

> **Note:** So I *kind of* lied when I told you that functions are first-class. Functions can't be stored in containers or structs.

## Example: Collatz sequence :)

One of my favorite things in maths is the Collatz sequence. A Collatz sequence starts with a given number, `n`, and calculates the next number in the sequence using the following rules:

   1. if `n == 1` the sequence ends
   2. if `n` is even the next number is `n / 2`
   3. if `n` is odd the next number is `(n * 3) + 1`

Curiously the Collatz sequence always converges to `1`, regardless the starting number.

The following function generates the Collatz sequence as a (reversed) list of integers:

```go, noplaypen
// eg. collatz(10, []Int{}) == []Int{10, 5, 16, 8, 4, 2, 1}
func collatz(n: Int, sequence: []Int) -> []Int {
	updated_sequence: []Int = sequence.prepend(n);

    // Rule (1)
    if (n == 1) {
		updated_sequence

    // Rule (2)
    } else if (n % 2 == 0) {
        collatz(n / 2, updated_sequence)

    // Rule (3)
    } else {
        collatz(n * 3 + 1, updated_sequence)
    }
}
```
