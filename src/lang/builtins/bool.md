# `Bool`

Represents a boolean value (`true`/`false`).

```helios
bool_true:  Bool = true;
bool_false: Bool = false; ...
```

## Associated functions

### `and`

Doesn't evaluate the second argument if the first argument evaluates to `false`.

```helios
Bool::and(fn_a: () -> Bool, fn_b: () -> Bool) -> Bool
```

### `or`

Doesn't evaluate the second argument if the first argument evaluates to `true`.

```helios
Bool::or(fn_a: () -> Bool, fn_b: () -> Bool) -> Bool
```

### `from_data`

```helios
Bool::from_data(data: Data) -> Bool
```

## Operators

### `!`

Boolean **not** operator.

```helios
!Bool -> Bool
```

### `==`

```helios
Bool == Bool -> Bool
```

### `!=`

The boolean inequality operator can also be used as an **xor** operator.

```helios
Bool != Bool -> Bool
```

### `&&`

Boolean **and** operator. Right argument is only evaluated if left argument is `true`.

Internally left and right arguments are wrapped with anonymous functions and `Bool::and` is called.

```helios
Bool && Bool -> Bool
```

### `||`

Boolean **or** operator. Right argument is only evaluated if left argument is `false`.

Internally left and right arguments are wrapped with anonymous functions and `Bool::or` is called.

```helios
Bool || Bool -> Bool
```

## Methods

### `serialize`

```helios
bool.serialize() -> ByteArray
```

### `show`

`false` is turned into `"false"`, and `true` is turned into `"true"`.

```helios
bool.show() -> String
```

### `to_int`

`false` is turned into `0`, and `true` is turned into `1`.

```helios
bool.to_int() -> Int
```

### `trace`

Prints a message while returning the `Bool` value itself. This can be convenient when debugging the outcome of a script.

```helios
bool.trace(msg: String) -> Bool
```

The `msg` is prefixed to either `"true"` or `"false"`.