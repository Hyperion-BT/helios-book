# Anonymous functions

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