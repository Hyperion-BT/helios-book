# `Option`

`Option[`*`SomeType`*`]` is an enum used to represent an optional value. Its type syntax takes one type parameter. An option has two variants:
  * `Some`
  * `None`

<br/>

Example:
```helios
option_some: Option[Int] = Option[Int]::Some{42};
option_none: Option[Int] = Option[Int]::None; ...
```

## Associated Functions

### `from_data`

```helios
Option[SomeType]::from_data(data: Data) -> Option[SomeType]
```

## Getters

### `Option[SomeType]::Some`

Returns content of `Option[`*`SomeType`*`]::Some`.

```helios
option_some.some -> Option[SomeType]
```

> **Note**: this getter doesn't exist on `Option[`*`SomeType`*`]::None`.

## Operators

### `==`

```helios
Option[SomeType] == Option[SomeType] -> Bool
```

### `!=`

```helios
Option[SomeType] != Option[SomeType] -> Bool
```



## Methods

### `serialize`

```helios
option.serialize() -> ByteArray
```

### `unwrap`

Returns the value wrapped by `Some`. Throws an error if `None`.

```helios
option.unwrap() -> SomeType
```