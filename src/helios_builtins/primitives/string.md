# String

This is a fixed-size string.

```helios
example: String = "Woah!"; ...
```

## Operators

```helios
String == String -> Bool
String != String -> Bool

// @notice String concatenation
String +  String -> String
```

## Associated functions
```helios
func from_data(data: Data) -> String
```

## Methods

```helios
func serialize(self) -> ByteArray

func encode_utf8(self) -> String

func starts_with(self, prefix: String) -> Bool

func ends_with(self, suffix: String) -> Bool
```
