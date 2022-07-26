# Methods and Associated Functions

## Methods

Structs and Enums in Helios have methods with syntax much like OOP languages. Methods are declared inside`impl` blocks like Rust.

```rust, noplaypen
struct Rational {
    top: Int,
    bottom: Int
}

impl Rational {
    // Methods take an argument 'self' of the same type of the Struct
    func add(self: Rational, rhs: Rational) -> Rational {
        top: Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;

        Rational { top: top, bottom: bottom }
    }
}

example_rational: Rational = Rational { top: 7, bottom: 21};

// Methods can be accessed using regular dot notation.
example_rational.add(example_rational)
```

Methods cannot modify the struct as all `Helios` values are immutable.

Methods are just syntactic sugar.
They desugar to a **curried function** (a function that returns a function) that takes the `self` type as it's first argument:

```rust, noplaypen
// This:
rational_1.add(rational_2); 
// Becomes __user__Rational_add(rational_1)(rational_2)
// of type (Rational) -> (Rational) -> Rational


// 'rational.add' returns a function of type ((Rational) -> Rational) 
// the first '(Rational) ->' in 'add' is set to rational_1
// that can be used immediately or stored like any other value.
add_to_rational_1: (Rational) -> Rational = rational_1.add;

// Note: add_to_rational_1(rational_2) == rational_1.add(rational_2)
```

## Associated Functions and Constants

Associated functions and constants are just like regular constants or functions but they're are namespaced by a Type. E.g Car::new(a, b, c).

### Defining Associated Functions

Associated functions are defined just like methods but without the `self` argument.

```rust, playpen
impl Rational {

    const PI = Rational{355, 113};

    func new(top: Int, bottom: Int) -> Rational {
        Rational { top: top, bottom: bottom }
    }

}
```

### Using Associated Functions and Constants

Associated Functions and Constants are *namespaced* by the type they are associated with
and can be accessed using two colons `::` just like in Rust.
For example:

```rust, noplaypen
// Using Associated functions
fifty_fifty: Rational = Rational::new(1, 2)
```

## Finished Code

```rust
struct Rational {
    top: Int,
    bottom: Int
}

impl Rational {
    const RANDOM_CONSTANTS: Int = 1231;

    func new(top: Int, bottom: Int) -> Rational {
        Rational { top: top, bottom: bottom }
    }

    func add(self: Rational, rhs: Rational) -> Rational {
        top: Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;

        Rational { top: top, bottom: bottom }
    }

}

rational_1: Rational = Rational::new(1, 5); // 1/5 or 0.2
rational_2: Rational = Rational::new(2, 5); // 2/5 or 0.4

res: Rational = rational_1.add(rational_2); // 3/5 or 0.6

// Using Associated functions
fifty_fifty: Rational = Rational::new(1, 2) // 1/2 or 0.5

```
