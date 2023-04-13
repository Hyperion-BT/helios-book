# Structs

A struct in Helios is a named grouping of types (sometimes called a [*product type*](https://en.wikipedia.org/wiki/Product_type)). They are similar to structs in other languages (e.g. C, Go and Rust):

```helios
// example of a Rational (fractional type)
struct Rational {
    top:    Int
    bottom: Int
}
```

> **Note**: a struct can't be empty and must have at least one field.

## Instantiating a struct

A struct can be instantiated using the following literal syntax:

```helios
const x = Rational { 1, 3 } // type of 'x' is inferred
```

The fields can also be named:

```helios
const x = Rational { bottom: 3, top: 1 }
```