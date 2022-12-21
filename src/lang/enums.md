# Enums

Enums are used to represent types that have multiple variants (sometimes called *sum types* in [CS](https://en.wikipedia.org/wiki/Computer_science)). These are useful for datums and redeemers.

Example of an enum:

```helios
enum Redeemer {
	Cancel
	Buy { buyer: PubKeyHash }
}

// instantiating an enum:
const my_redeemer = Redeemer::Buy { PubKeyHash::new(#...) } // type of lhs is inferred
```

> **Note**: the OOP analogy of an enum is an abstract class, and the enum variants can be thought of as concrete implementations (i.e. child classes).

> **Note**: enum variants with one field are constructed without that field's name as a key (similar to structs).

> **Note**: enum variants without fields don't use braces.

> **Note**: it's OK if some of the data fields or enum variants are unused (could be data from other smart contracts).

## `switch`

A `switch` expression is used to perform different actions depending on the enum variant. It is similar to a `switch` statement in C or Go (and dissimilar to a `match` expression in Rust, as Helios doesn't support pattern-matching/destructuring):

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
		else => true // default must come last if all sub-types of Datum aren't handled explicitely
		// braces surrounding the cases are optional
	}
}
```

## `Data`

[`Data`](./builtins/data.md) can be thought of as a special builtin enum with 5 members:
  * [`Int`](./builtins/int.md)
  * [`ByteArray`](./builtins/bytearray.md)
  * [`[]Data`](./builtins/list.md)
  * [`Map[Data]Data`](./builtins/map.md)
  * Any user-defined enum

A `switch` expression over `Data` can use `Int`, `ByteArray`, `[]Data` and `Map[Data]Data`, and any enum type, as case types:

```helios
data.switch{
	i: Int => ...,
	b: ByteArray => ...,
	l: []Data => ...,
	m: Map[Data]Data => ...,
	e: MyEnum => ... 
}
```

> **Note**: the default `else` case can also be used as a substitute for any of these cases.

> **Note**: besides the builtin types only one enum type can be used in `Data` `switch`, and structs/enum-members **can't** be used.