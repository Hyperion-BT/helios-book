# Structs and Enums

## Structs

A struct in Helios is a named grouping of types (sometimes called *product types* in CS). They are similar to structs in other languages (e.g. C, Go and Rust):

```rust, noplaypen
// example of a Rational (fractional type)
struct Rational {
    top: Int
    bottom: Int
}

// instantiating a struct:
const x: Rational = Rational { top: 1, bottom: 3 }

// type can be inferred for struct literals:
const x = Rational { top: 1, bottom: 3 }
```

## Enums

Enums are used to represent types that have multiple variants (sometimes called *sum types* in CS). These are useful for datums and redeemers.

Example of an enum:

```rust, noplaypen
enum FanSetting {
    On{ speed: Int }
    Off
}

// instantiating an enum:
const current_setting: FanSetting = FanSetting::On { 5 }

// type can be inferred for enum literals:
const current_setting = FanSetting::On { 5 }
```

> **Note:** Structs and enum variants with one field are constructed without that field's name as a key.

### `switch`

A `switch` expression is used to perform different actions depending on the enum variant. It is similar to a `switch` statement in C or Go (and dissimilar to a `match` expression in Rust, as Helios doesn't support pattern-matching/destructuring):

```rust, noplaypen
enum Datum {
	// content of each variant has the same syntax as a regular struct-type
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
