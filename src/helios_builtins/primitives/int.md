# Int

This is an unbounded integer like Haskell's `Integer` type.

## Operators

```helios
Int == Int -> Bool
Int != Int -> Bool
Int >= Int -> Bool
Int >  Int -> Bool
Int <= Int -> Bool
Int <  Int -> Bool
Int +  Int -> Int
Int -  Int -> Int
Int *  Int -> Int
Int /  Int -> Int
Int %  Int -> Int
```

## Associated functions

```helios
func from_data(data: Data) -> Int
```

## Methods

```helios
func serialize(self) -> ByteArray

func to_bool(self) -> Bool

func to_hex(self) -> String

func show(self) -> String
```
