# Structs and Enums

## Structs

Structs in Helios are a named grouping of types.
They are also known as *product types*.
They are similar to structs in other languages like Rust.

```rust, noplaypen
// Rational (fractional type)
struct Rational {
    top: Int
    bottom: Int
}

// Instantiating a struct
x: Rational = Rational { top: 1, bottom: 3 };

// OR

// Type is inferred for struct literals
x = Rational { top: 1, bottom: 3 };
```

## Enums

Enums are used to represent types that have multiple variants.
Enums are also known as `sum types`.
They're useful for datums and redeemers with differing content.

```rust, noplaypen
enum FanSetting {
    On{ speed: Int }
    Off
}

// Instantiating an Enum
current_setting: FanSetting = FanSetting::On { speed: 5 };

// Enums also have type inference for literals
current_setting = FanSetting::On { speed: 5 };

```

### The `'switch'` expression

The `switch` expression is used to pattern-match on enum variants. It's more like a C `switch` than a Rust `match`.

```rust, noplaypen
enum Datum {
    Submission{...} // content of Submission has the same syntax as a regular struct-type
    Queue{...}
    Post{...}
}

example = Datum::Submission{...};

example.switch {
    // Double-colon to reference the sub-type
    x: Submission => { 
        ... // expression must use x
    },
    Datum::Queue {
        ... // x not used, so can't be declared
    },
    default { // default must come last if all sub-types of Datum aren't handled explicitely
        true
    }
}

```

**Note:** In Helios, **all** fields in a struct and variants in an enum **must** be used, or else the compiler will throw an error.
