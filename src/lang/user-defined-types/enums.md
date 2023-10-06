# Enums

Enums are used to represent types that have multiple variants (sometimes called [*tagged unions* or *sum types*](https://en.wikipedia.org/wiki/Tagged_union)). These are useful for datums and redeemers.

Example of an enum:

```helios
enum Redeemer {
	Cancel
	Buy { buyer: PubKeyHash }
}

// instantiating an enum:
const my_redeemer = Redeemer::Buy { PubKeyHash::new(#...) } 
// type of 'my_redeemer' is inferred
```

> **Note**: the OOP analogy of an enum is an abstract class, and the enum variants can be thought of as concrete implementations (i.e. child classes).

> **Note**: enum variants without fields don't use braces.

## `switch`

A `switch` expression is used to perform different actions depending on the enum variant. It is similar to a `switch` statement in C or Go (and dissimilar to a `match` expression in Rust, as Helios doesn't support pattern-matching):

```helios
enum Datum {
	// each variant has a syntax similar to a struct
    Submission{...} 
    Queue{...}
    Post{...}
}

func main(datum: Datum) -> Bool {
	datum.switch {
		x: Submission => { 
			... // expression must use x
		},
		Queue => {
			... // x not used, so can't be declared
		},
		_ => true // default must come last if all sub-types of Datum aren't handled explicitely
		// braces surrounding the cases are optional
	}
}
```

## `Data`

[`Data`](../builtins/data.md) can be thought of as a special builtin enum with 5 members:
  * [`Int`](../builtins/int.md)
  * [`ByteArray`](../builtins/bytearray.md)
  * [`[]Data`](../builtins/list.md)
  * [`Map[Data]Data`](../builtins/map.md)
  * any user-defined enum, or `(Int, []Data)`

A `switch` expression over `Data` can use any of these as case types:

```helios
data.switch{
	i: Int => ...,
	b: ByteArray => ...,
	l: []Data => ...,
	m: Map[Data]Data => ...,
	e: MyEnum => ... 
}
```

or 

```helios
data.switch{
	i: Int => ...,
	b: ByteArray => ...,
	l: []Data => ...,
	m: Map[Data]Data => ...,
	(index: Int, fields: []Data) => ... 
}
```

> **Note**: the default `_` case can also be used as a substitute for any of these cases.

> **Note**: besides the builtin types only one enum type can be used in a `Data` `switch`, and structs/enum-members **can't** be used. If an enum is used then `(Int, []Data)` can't be used.
