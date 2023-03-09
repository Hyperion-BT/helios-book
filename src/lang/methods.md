# Methods

You can define methods for structs and enums. The syntax for this is similar to many OOP languages: methods are defined by placing `func` statements inside a `struct` or `enum` block:

```helios
struct Rational {
    top:    Int
    bottom: Int

    // 'self' implicitely has type 'Rational'
    func add(self, rhs: Rational) -> Rational {
        top:    Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;

        Rational { top, bottom }
    }
}

const example_rational: Rational = Rational { 7, 21 }

const result: Rational = example_rational.add(example_rational)
```

Methods are accessed using a `.` (i.e. a dot). Methods cannot modify `self` as all Helios values are immutable (instead they should return new instantations of the own type).

> **Note:** `self` is a reserved word and can only be used for the first argument of a method. The `self` argument can't have a type annotation and is always implicitely typed.

## Methods can be used as values
A method is syntactic sugar for a **curried function** (a function that returns a function) that takes `self` as it's first argument:

```helios
// the following:
rational_1.add(rational_2); ...
// desugars into: __user__Rational_add(rational_1)(rational_2)
//  of type (Rational) -> (Rational) -> Rational
```

A method value is a function, and can be seen as a closure over `self`:
```helios
// 'rational_1.add' returns a function of type ((Rational) -> Rational) 
//   which can be used just like any other function value
add_to_rational_1: (Rational) -> Rational = rational_1.add; ...

// Note: add_to_rational_1(rational_2) == rational_1.add(rational_2)
```