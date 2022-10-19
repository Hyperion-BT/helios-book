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

> **Note**: enum variants with one field are constructed without that field's name as a key (similar to structs).

> **Note**: enum variants without fields don't use braces.

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

> **Note:** In Helios, **all** fields in a struct and **all** variants in an enum **must be used**,
or else the compiler will throw an error.
