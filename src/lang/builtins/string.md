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

### `is_valid_utf8`

Method that checks if a `ByteArray` contains a valid utf-8 encoded string.

```helios
String::is_valid_utf8(bytes: ByteArray) -> Bool
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

### `encode_utf8`

Turns a `String` into a sequence of utf-8 bytes.

```helios
string.encode_utf() -> ByteArray
```

### `ends_with`

Checks if a `String` ends with a given suffix.

```helios
string.ends_with(suffix: String) -> Bool
```

### `serialize`

```helios
string.serialize() -> ByteArray
```

### `show`

Returns the string wrapped with quotes. This is useful when debugging.

```helios
string.show() -> String
```

### `starts_with`

Checks if a `String` starts with a given prefix.

```helios
string.starts_with(prefix: String) -> Bool
```