## Methods and Associated Functions

## Methods

Structs and Enums in Helios have methods with syntax much like OOP languages. Methods are declared within `impl` blocks.

```rust
struct Rational {
    top: Int,
    bottom: Int
}

impl Rational {
    // Methods take an argument 'self' of the same type of the Struct

    func add(self: Rational, rhs: Rational) -> Rational {
        top: Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;
    }
}

// Methods can be accessed using regular dot notation.
example_rational: Rational = Rational { top: 7, bottom: 21};
example-rational.add(example_rational)
```

**Note:** Methods cannot modify the struct as all `Helios` values are immutable. Methods are just syntactic sugar for regular functions, they are desugared into regular function calls:

```rust
rational_1.add(rational_2); // Becomes __user__Rational_add(rational_1, rational_2)
```

## Associated Functions and Constants

Associated functions and constants are just like regular constants or functions but they're are namespaced by the Type. E.g Car::new(a, b, c).

```rust
impl Rational {

    const RANDOM_CONSTANTS: Int = 1231;

    func new(top: Int, bottom: Int) -> Rational {
        Rational { top: top, bottom: bottom }
    }

}

test_car: Car = Car::new("Model 3",  0, 0);
trace(Car::RANDOM_CONSTANTS == 1232, "Never log");
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
    }

}

rational_1: Rational = Rational::new(1, 5); // 1/5 or 0.2
rational_2: Rational = Rational::new(2, 5); // 2/5 or 0.4

res: Rational = rational_1.add(rational_2); // 3/5 or 0.6
```
