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
const x: Rational = Rational { 1, 3 }
```

The fields can also be named:

```helios
const x: Rational = Rational { bottom: 3, top: 1 }
```

## CIP 68 tags

Regular Helios structs are internally implemented as data-lists. 

This internal data-list format isn't convenient for datums that are intended for public reading/writing. For such applications it is recommended to use the [CIP 68](https://cips.cardano.org/cips/cip68/) data-map format.

Helios will automatically use the [CIP 68](https://cips.cardano.org/cips/cip68/) format internally if any `struct` field is tagged. The tags are internally converted into the data-map keys.

```helios
struct TaggedRational {
    top:    Int "@top"     // the tag can be any valid utf-8 string
    bottom: Int "@bottom"
}
```

Any missing tags default to the field name:

```helios
struct TaggedRational {
    top:    Int "@top"
    bottom: Int         // data-map key will be "bottom"
}
```

Field tagging isn't available for [enum](./enums.md) variants.