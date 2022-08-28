# Methods and Associated Functions

## Methods

You can define methods for structs and enums. The syntax for this is similar to many OOP languages: methods are defined by placing `func` statements inside a `struct` or `enum` blocks.

```go, noplaypen
struct Rational {
    top: Int
    bottom: Int

    // 'self' implicitely has type 'Rational'
    func add(self, rhs: Rational) -> Rational {
        top: Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;

        Rational { top: top, bottom: bottom }
    }
}

const example_rational: Rational = Rational { top: 7, bottom: 21}

const result: Rational = example_rational.add(example_rational)
```

Methods are accessed using a `.` (i.e. a dot). Methods cannot modify `self` as all Helios values are immutable.

> **Note:** `self` is a reserved word and can only be used for the first argument of a method. The `self` argument is always implicitely typed and can't have a type annotation.

### Methods can be used as values
A method is syntactic sugar for a **curried function** (a function that returns a function) that takes `self` as it's first argument:

```rust, noplaypen
// the following:
rational_1.add(rational_2); ...
// desugars into: __user__Rational_add(rational_1)(rational_2)
//  of type (Rational) -> (Rational) -> Rational
```

A method value is a function, and can be seen as a closure over `self`:
```rust, noplaypen
// 'rational_1.add' returns a function of type ((Rational) -> Rational) 
//   which can be used just like any other function value
add_to_rational_1: (Rational) -> Rational = rational_1.add; ...

// Note: add_to_rational_1(rational_2) == rational_1.add(rational_2)
```

## Associated functions and constants

Associated functions (aka *static methods*) and constants are just like regular functions or constants but are also namespaced by a type, for example `Rational::new(top, bottom)`.

### Defining Associated functions and constants

Associated functions are defined just like methods but without the `self` argument. Associated constants are simply `const` statements inside a `struct` or `enum` block:

```rust, noplaypen
struct Rational {
    top: Int
    bottom: Int

	const PI = Rational{ 355, 113 }

	func new(top: Int, bottom: Int) -> Rational {
		Rational { top: top, bottom: bottom }
	}
}
```

### Using Associated functions and constants

Associated functions and constants are *namespaced* by the type they are associated with
and can be referenced using a double colon (`::`) just like in Rust.
For example:

```rust, noplaypen
half: Rational = Rational::new(1, 2); ...
```

## Example: Rational

```ts
struct Rational {
    top: Int
    bottom: Int

    const PI = Rational{ top: 355, bottom: 113}

    func new(top: Int, bottom: Int) -> Rational {
        Rational { top: top, bottom: bottom }
    }

    func add(self, rhs: Rational) -> Rational {
        top: Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;

        Rational { top: top, bottom: bottom }
    }

}

const rational_1: Rational = Rational::new(1, 5) // 1/5 or 0.2
const rational_2: Rational = Rational::new(2, 5) // 2/5 or 0.4
const rational_3: Rational = rational_1.add(rational_2) // 15/25 or 3/5 or 0.6
```
