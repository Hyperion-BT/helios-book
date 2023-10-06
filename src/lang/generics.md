# Generics

Helios supports generic type parameters for [functions](./functions/index.md), [structs](./user-defined-types/structs.md), and [enums](./user-defined-types/enums.md). The syntax for generics is similar to [lists](./builtins/list.md), [`Map`](./builtins/map.md) and [`Option`](./builtins/option.md).

## Generic functions

Example:

```helios
func deserialize[A](a: Data) -> A {
    A::from_data(a)
}
```

When calling a function, the type parameters are infered wherever possible. In this example however `A` can't be inferred and must be specified before calling the function:

```helios
my_bool: Bool = deserialze[Bool](my_bool_data); ...
```

The type parameter can optionally be constrained with a typeclass, for example with the builtin `Valuable` typeclass:

```helios
func get_value[V: Valuable](v: V) -> Value {
    v.value
}
```

## Generic structs and enums

User types like [structs](./user-defined-types/structs.md) and [enums](./user-defined-types/enums.md) can also have generic type parameters. For example:

```helios
struct Pair[A, B] {
    a: A
    b: B
}
```

When instantiating such a generic type, type inference isn't available, and the field types must be specified explicitly:

```helios
my_pair = Pair[Int, Int]{1, 2}; ...
```

An example of a generic `enum`:

```helios
enum BinaryTree[A] {
    Leaf { value: A }

    Node {
        value: A
        left:  BinaryTree[A]
        right: BinaryTree[A]
    }
}
```

Similar to generic functions, the type parameters of generic structs and enums can be constrained using typeclasses.

>**Note**: all type parameters must be used in the fields of the struct or enum, not just in the methods.

>**Note**: generic structs and enums can contain generic methods with additional type parameters.

## Type classes

Typeclasses are used to constrain a type parameter of a generic function or user-type.

User-defined typeclasses aren't yet possible, there are however three builtin typeclasses:
* [`Any`](./builtins/any.md) (matches any data-type of function-type)
* *empty* (this is the default, matches any data-type, but not function-types)
* [`Valuable`](./builtins/valuable.md) (matches any type with the `.value -> Value` getter, so [`TxInput`](./builtins/txinput.md), [`TxOutput`](./builtins/txoutput.md), and [`Value`](./builtins/value.md) itself)