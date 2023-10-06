# Destructuring

[Switch cases](./enums.md#switch) and [assignments](../variables.md#assignment) have special syntax for destructuring user-defined [structs](./structs.md) and [enum](./enums.md) members.

Destructuring in Helios has the following properties:
* can be arbitrarily nested
* is positional (names of the fields don't matter)

> **Note**: destructuring is **not** pattern matching.

## Destructuring assignment

```helios
testing destructure_pair

struct Pair {
    first:  Int
    second: Int
}

func main() -> Bool {
    p = Pair{1, 2};
    Pair{a, _} = p;
    a == 1
}
```

You can also assign a name to any intermediate value when destructuring:

```helios
pair: Pair{a, _} = p; ...
```

Optionally you can include the type when destructuring a field:

```helios
pair: Pair{a: Int, _} = p; ...
```

Destructuring an enum instance into an enum variant will create a runtime type assertion:

```helios
Option[Int]::Some{a} = option; ... // throws runtime error if option is None
```

## Destructuring an enum member in a `switch` case

The same syntax as above can be used in [`switch`](./enums.md#switch) cases. Destructuring some builtin enums is also possible (WiP).

```helios
option.switch{
    None => ...,
    Some{item} => doSomething(item)
}
```

## Nested destructuring

Nested destructuring requires the type of the nested struct to be specified.

```helios
spending my_validator

struct Rational {
    top: Int
    bottom: Int
}

enum Redeemer {
    Sell{price: Rational}
    Buy{price: Rational}
}

...

func main(_, r: Redeemer, _) -> Bool {
    r.switch{
        Sell{Rational{top, bottom}} => doSomething(top, bottom),
        Buy{Rational{top, _}} => doSomething2(top)
    }
}
```

Nested destructuring is also possible in assignments.