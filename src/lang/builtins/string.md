# `String`

Represents a piece of utf-8 text.

```helios
string: String = "Woah!"; ...
```

## Associated functions

### `from_data`

```helios
String::from_data(data: Data) -> String
```

## Operators

### `==`

```helios
String == String -> Bool
```

### `!=`

```helios
String != String -> Bool
```

### `+`

String concatenation.

```helios
String + String -> String
```

## Methods

### `serialize`

```helios
string.serialize() -> ByteArray
```

### `encode_utf8`

Turns a `String` into a sequence of utf-8 bytes.

```helios
string.encode_utf() -> ByteArray
```

### `starts_with`

Checks if a `String` starts with a given prefix.

```helios
string.starts_with(prefix: String) -> Bool
```

### `ends_with`

Checks if a `String` ends with a given suffix.

```helios
string.ends_with(suffix: String) -> Bool
```