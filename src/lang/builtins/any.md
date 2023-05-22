# `Any`

`Any` is a special [type class](https://en.wikipedia.org/wiki/Type_class) that can be used to constrain a [generic](../generics.md) type parameter. `Any` matches any data-type or any function-type. 

The [`list.fold()`](./list.md#fold) and [`map.fold()`](./map.md#fold) methods use `Any` to allow the value being folded over to be of either function or data type.

The default *empty* type class matches only data-types (which is what is usually needed).