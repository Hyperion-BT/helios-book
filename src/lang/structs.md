# Structs

A struct in Helios is a named grouping of types (sometimes called a *product type* in [CS](https://en.wikipedia.org/wiki/Computer_science)). They are similar to structs in other languages (e.g. C, Go and Rust):

```helios
// example of a Rational (fractional type)
struct Rational {
    top:    Int
    bottom: Int
}
```

> **Note**: a struct can't be empty must have at least one field.

## Instantiating a struct

A struct can be instantiated using the following literal syntax:

```helios
const x = Rational { top: 1, bottom: 3 } // type of lhs is inferred
```

> **Note**: for two or more fields the field keys, in the correct order, must be specified when instantiating a struct. For one field the key **can't** be used.

> **Note**: it's OK if some of the data fields are unused (could be data from other smart contracts).