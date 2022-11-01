# `TxOutput`

Represents a transaction output that is used when [building a transaction](./tx.md#addoutput).

## Constructor

Constructs a `TxOutput` instance using an [`Address`](./address.md), a [`Value`](./value.md), an optional [`Datum`](./datum.md), and optional [`UplcProgram`](./uplcprogram.md) reference script.

```ts
new helios.TxOutput(
    address:   helios.Address,
    value:     helios.Value,
    datum:     ?helios.Datum = null,
    refScript: ?helios.UplcProgram = null
)
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `TxOutput`.

Shift `bytes` to the next CBOR element.

```ts
helios.TxOutput.fromCbor(bytes: number[]): helios.TxOutput
```

## Getters

### `address`

Get the [`Address`](./address.md) to which the `TxOutput` will be sent.

```ts
tx_output.address: helios.Address
```

### `datum`

Get the optional [`Datum`](./datum.md) associated with the `TxOutput`.

```ts
tx_output.datum: helios.Datum
```

### `value`

Get the [`Value`](./value.md) contained in the `TxOutput`.

```ts
tx_output.value: helios.Value
```

## Methods

### `correctLovelace`

Makes sure the `TxOutput` contains the minimum quantity of lovelace. The network requires this to avoid the creation of unusable dust UTxOs.

Optionally an update function can be specified that allows mutating the datum of the `TxOutput` to account for an increase of the lovelace quantity contained in the value.

```ts
tx_output.correctLovelace(
    networkParams: helios.NetworkParams,
    updater: ?((self: helios.TxOutput) => void)
): void
```

### `setDatum`

Mutates the `TxOutput` datum.

```ts
tx_output.setDatum(datum: helios.Datum): void
```

### `toCbor`

Serialize a `TxOutput` using CBOR.

```ts
tx_output.toCbor(): number[]
```