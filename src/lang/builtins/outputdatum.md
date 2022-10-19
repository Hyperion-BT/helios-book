# `OutputDatum`

Represents that datum data of a [`TxOutput`](./txoutput.md) instance.

`OutputDatum` is an enum with 3 variants:
  * `None`
  * `Hash`
  * `Inline`

## Associated functions

### `from_data`

```helios
OutputDatum::from_data(data: Data) -> OutputDatum
```

## Getters

### `OutputDatum::Hash`

#### `hash`

```helios
hash_output_datum.hash -> DatumHash
```

### `OutputDatum::Inline`

#### `inline`

```helios
inline_output_datum.inline -> Data
```

Use the `from_data` associated function, which is automatically defined on every type, to turn `Data` into another type.

## Operators

### `==`

```helios
OutputDatum == OutputDatum -> Bool
```

### `!=`

```helios
OutputDatum != OutputDatum -> Bool
```

## Methods

### `serialize`

```helios
output_datum.serialize() -> ByteArray
```
