# Container types

Helios has 3 **container** types:
  * List (linked list)
  * `Map` (association list of key-value pairs)
  * `Option` (equivalent to `Maybe` in Haskell)
  * Tuple (fixed list with heterogenous item types)


## List

Helios has a builtin linked list type, similar to Haskell's `List`. The syntax for a list type is `[]ItemType` where `ItemType` is a parameter type that represents the type of the contained items. The `ItemType` can be any type except a function type.

List literals have a syntax similar to Go:
```helios
my_ints = []Int{1, 2, 3, 4, 5};

x: Int = some_ints.get(2); ...   // x == 3
```

> **Note**: lists aren't indexed with `[...]`. Instead the [`get`](./builtins/list.md#methods) method can be used. Indices are 0-based.

More information about lists can be found [here](./builtins/list.md).

## `Map`

A `Map` in Helios is internally represented as a list of key-value pairs. Both key and value can have any type except a function type. Uniqueness of keys isn't guaranteed.

A `Map` has a type syntax and a literal syntax similar to Go:
```helios
// either side of the colon can be an arbitrary expression 
//  that evaluates to the correct type
my_map = Map[String]Int{
    "zero": 0,
    "one":  1,
    "two":  2
}; ... 

print(my_map.get("zero").show()); ... // prints '0'
```

More information about maps can be found [here](./builtins/map.md).


## `Option`

The `Option` type is a builtin enum with type syntax `Option[`*`SomeType`*`]`. It is internally defined as:

```helios
enum Option[SomeType] {
    Some { some: SomeType }
    None
}
```

An `Option` is instantiated like any other enum:

```helios
some_int = Option[Int]::Some{42};

none_int = Option[Int]::None; ...
```

If you expect `Some`, you can assign, and even [destructure](./user-defined-types/destructuring.md), using the correct type annotation. Helios will automatically turn the assignment into a runtime type assertion (any [`enum`](./user-defined-types/enums.md) can take advantage of this):
```helios
Option[Int]::Some{my_int} = option; ...
```

More information about `Option` can be found [here](./builtins/option.md).

## Tuple

A tuple is a collection of two or more items which can have different types.

```helios
my_tuple = (1, "hello", true)
```

Tuples are convenient when returning multiple values from a function:

```helios
func my_pair(a: Int) -> (Int, Int) {
    (a+1, a+2)
}
```

Tuples can contain anything, including functions. The contents of a tuple can be accessed through destructuring, or via getters:

```helios
(my_number: Int, my_string: String, my_bool: Bool) = my_tuple;

my_number_alt: Int = my_tuple.first;
my_string_alt: String = my_tuple.second;
my_bool_alt: Bool = my_tuple.third
```

> **Note**: tuples in Helios are limited to 5 entries. The getters are named `first`, `second`, `third`, `fourth` and `fifth`.

> **Note**: although tuples can be used as fields in structs/enums this is not recommended as it can become unclear what the meaning is of the tuples items, and there is also a performance penalty to doing so.

## Nested literal constructors

If a literal List, `Map`, or `Option` contains other literal constructors, the types of those literal constructors can be omitted.

```helios
struct Pair {
  a: Int
  b: Int
}
...
list = []Pair{{0, 0}, {1, 1}, {2, 2}};
map = Map[Pair]Pair{{0, 0}: {0, 0}, {1, 1}: {1, 1}, {2, 2}: {2, 2}};
nested_list = [][]Pair{{{0, 0}, {1, 1}, {2, 2}}, {{0, 0}, {1, 1}, {2, 2}}};
option = Option[Pair]::Some{{0, 0}}
```