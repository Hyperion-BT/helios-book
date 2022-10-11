# ByteArray

This represents an array of bytes.

```helios
example: ByteArray = #213212; ...
```

## Operators

```helios
ByteArray == ByteArray -> Bool
ByteArray != ByteArray -> Bool

// @notice ByteArray concatenation
ByteArray +  ByteArray -> ByteArray
```

## Associated functions
```helios
func from_data(data: Data) -> ByteArray
```

## Getters

```helios
// @returns the length of the ByteArray
length: Int 
```

## Methods:

```helios
func serialize(self) -> ByteArray

// @returns The SHA2-256 hash of the ByteArray
func sha2(self) -> ByteArray

// @returns The SHA3-256 hash of the ByteArray
func sha3(self) -> ByteArray

// @returns The Blake2b256 hash of the ByteArray
func blake2b(self) -> ByteArray

func decode_utf8(self) -> String

func show(self) -> String

func starts_with(self, prefix: ByteArray) -> Bool

func ends_with(self, suffix: ByteArray) -> Bool

func slice(self, start: Int, end: Int) -> ByteArray
```
