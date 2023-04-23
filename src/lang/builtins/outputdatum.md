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

### `new_hash`

Construct a new `OutputDatum::Hash` instance.

```helios
OutputDatum::new_hash(datum_hash: DatumHash) -> OutputDatum::Hash
```

### `new_inline`

Construct a new `OutputDatum::Inline` instance from any value that is not a function.

```helios
OutputDatum::new_inline(any: AnyType) -> OutputDatum::Inline
```

### `new_none`

Construct a new `OutputDatum::None` instance.

```helios
OutputDatum::new_none() -> OutputDatum::None
```

## Getters

### `OutputDatum`

#### `get_inline_data`

Short-hand for `output_datum.switch{inline: Inline => inline.data, _ => error("not an inline datum")}`:

```helios
output_datum.get_inline_data() -> Data
```

### `OutputDatum::Hash`

#### `hash`

```helios
hash_output_datum.hash -> DatumHash
```

### `OutputDatum::Inline`

#### `data`

```helios
inline_output_datum.data -> Data
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
