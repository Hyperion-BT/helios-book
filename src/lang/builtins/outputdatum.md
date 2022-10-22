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

### `new_inline`

Construct a new `OutputDatum::Inline` instance from any value. **Only available after `main`**, see [script structure](../script-structure.md#data-generators-and-test-functions-5).

```helios
OutputDatum::new_inline(x: AnyType) -> OutputDatum::Inline
```

### `new_none`

Construct a new `OutputDatum::None` instance. **Only available after `main`**, see [script structure](../script-structure.md#data-generators-and-test-functions-5).

```helios
OutputDatum::new_none() -> OutputDatum::None
```

### `new_hashed`

Construct a new `OutputDatum::Hash` instance. **Only available after `main`**, see [script structure](../script-structure.md#data-generators-and-test-functions-5).

```helios
OutputDatum::new_hash(datum_hash: DatumHash) -> OutputDatum::Hash
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
