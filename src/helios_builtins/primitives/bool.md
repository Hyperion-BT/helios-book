# Bool

Represents a boolean value (`true`/`false`).

```helios
true_val: Bool = true;
false_val: Bool = false; ...
```

## Associated Functions

```helios
func and(fn_bool_1: () -> Bool, fn_bool_2: () -> Bool) -> Bool

func or(fn_bool_1: () -> Bool, fn_bool_2: () -> Bool) -> Bool

func from_data(data: Data) -> Bool
```

## Operators

```helios
!Bool -> Bool
Bool == Bool -> Bool
Bool != Bool -> Bool

// @notice Right arg is only evaluated if left arg is true
Bool && Bool -> Bool

// @notice Right arg is only evaluated if left arg is false
Bool || Bool -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray

func to_int(self) -> Int

func show(self) -> String
```
