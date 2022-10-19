# Associated functions and constants

Associated functions (aka *static methods*) and constants are just like regular functions or constants but are also namespaced by a type, for example `Rational::new(top, bottom)`.

## Defining associated functions and constants

Associated functions are defined just like methods but without the `self` argument. Associated constants are simply `const` statements inside a `struct` or `enum` block:

```helios
struct Rational {
    top: Int
    bottom: Int

	// associated const
	const PI = Rational{ 355, 113 }

	// associated method
	func new(top: Int, bottom: Int) -> Rational {
		Rational { top: top, bottom: bottom }
	}
}
```

## Using associated functions and constants

Associated functions and constants are *namespaced* by the type they are associated with
and can be referenced using a double colon (`::`) just like in Rust.
For example:

```helios
half: Rational = Rational::new(1, 2); ...
```