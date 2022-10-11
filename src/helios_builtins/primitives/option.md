# Option (`Option[a]`)

`Option[a]` is an enum used to represent an optional value.

```helios
// internal representation
enum Option[a] {
    Some { some: a }
    None
}

example_1: Option[Int] = Option[Int]::Some{42};
example_2: Option[Int] = Option[Int]::None; ...
```

## Associated Functions

```helios
func from_data(data: Data) -> Option[a]
```

## Operators

```helios
Option[a] == Option[a] -> Bool
Option[a] != Option[a] -> Bool
```

## Getters

```helios
// @returns content of Option[a]::Some
// @notice this getter doesn't exist on Option[a]::None
Option[a]::Some.some: a
```

## Methods

```helios
func serialize(self) -> ByteArray
```
