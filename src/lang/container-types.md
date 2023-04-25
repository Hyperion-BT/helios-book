# Container types

Helios has 3 **container** types:
  * List (linked list)
  * `Map` (association list of key-value pairs)
  * `Option` (equivalent to `Maybe` in Haskell)


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

If you expect `Some`, you can assign, and even destructure, using the correct type annotation. Helios will automatically turn the assignment into a runtime type assertion (any [`enum`](./enums.md) can take advantage of this):
```helios
Option[Int]::Some{my_int} = option; ...
```

More information about `Option` can be found [here](./builtins/option.md).