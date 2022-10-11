# OutputDatum

```helios
enum OutputDatum {
	None
	Hash{hash: DatumHash}
	Inline{data: Data}
}
```

## Associated functions

```helios
func from_data(data: Data) -> OutputDatum
```

## Operators

```helios
OutputDatum == OutputDatum -> Bool
OutputDatum != OutputDatum -> Bool
```

## Methods
```helios
func serialize(self) -> ByteArray
```
