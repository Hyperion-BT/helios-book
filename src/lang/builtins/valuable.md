# `Valuable`

A [type class](https://en.wikipedia.org/wiki/Type_class) that matches a type with the following interface:

```helios
a.value -> Value
```

Implicitly all automatic data type methods are also matched: `==`, `!=`, `from_data` and `serialize`.

This type class is implemented by [`TxInput`](./txinput.md), [`TxOutput`](./txoutput.md) and [`Value`](./value.md). [`Value::sum()`](./value.md#sum) uses this type class to be able to sum the [`Value`](./value.md) contained in a list of any of these types.