# Automatic methods

The following (associated) methods and operators are automatically defined on all user and builtin types.

## `serialize`

The `serialize` method is automatically defined on every user-type, and thus `serialize` is a reserved name that can't be used for other methods.

`serialize` serializes the underlying data using cbor encoding.

```helios
my_instance.serialize() -> ByteArray
```

> **Note**: when debugging you can inspect the output of `print(my_data.serialize().show())` using [this cbor tool](https://cbor.nemo157.com).

## `from_data`

`from_data` is an [associated method](./associated-functions-and-constants.md) that is automatically defined on every user-type, and thus `from_data` is a reserved name that can't be used for other methods.

`from_data` converts a typeless `Data` into something typed.

```helios
MyType::from_data(data: Data) -> MyType
```

## `==`, `!=`

The equality and inequality operators are automatically defined on every user-type.