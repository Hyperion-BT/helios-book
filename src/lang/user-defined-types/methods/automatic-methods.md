# Automatic methods

The following (associated) methods and operators are automatically defined on all user and builtin types (except function types).

## `==`, `!=`

The equality and inequality operators are automatically defined on every type (except function types).

## `copy`

Instantiates a copy of the underlying value, with some of the fields changed.

This method has the same number of arguments as the number of fields in the user-defined `struct` or `enum`-variant. Each argument of `copy` has the same name as the corresponding field and is optional (see [named arguments](../../functions/named_arguments.md)).

```helios
struct Pair {
    first:  Int
    second: Int
}

...

pair = Pair{1, 2};

pair.copy(second: 3) // == Pair{1, 3}
```

## `from_data`

`from_data` is an [associated function](./associated-functions-and-constants.md) that is automatically defined on every user-type, and thus `from_data` is a reserved name that can't be used for other methods.

`from_data` converts a typeless `Data` into something typed.

```helios
MyType::from_data(data: Data) -> MyType
```

If you set [`CHECK_CASTS`](../../../api/reference/namespaces/config.md#check_casts) to `true`, a warning will be printed if the structure of `data` doesn't match the type.

## `serialize`

The `serialize` method is automatically defined on every user-type, and thus `serialize` is a reserved name that can't be used for other methods.

`serialize` serializes the underlying data using cbor encoding.

```helios
my_instance.serialize() -> ByteArray
```

> **Note**: when debugging you can inspect the output of `print(my_data.serialize().show())` using [this cbor tool](https://cbor.nemo157.com).
