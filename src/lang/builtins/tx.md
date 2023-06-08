# `Tx`

Represents a balanced transaction.

## Associated functions

### `from_data`

```helios
Tx::from_data(data: Data) -> Tx
```

### `new`

Construct a `Tx` instance. **Only available after `main`**, see [script structure](../script-structure.md#data-generators-and-test-functions-5).

```helios
Tx::new(
    inputs:      []TxInput,
    ref_inputs:  []TxInput,
    outputs:     []TxOutput,
    fee:         Value,
    minted:      Value,
    dcerts:      []DCert,
    withdrawals: Map[StakingCredential]Int,
    time_range:  TimeRange,
    signatories: []PubKeyHash,
    redeemers:   Map[ScriptPurpose]AnyType,
    datums:      Map[DatumHash]AnyType,
    id:          TxId
) -> Tx
```

> **Note**: the value type of the `redeemers` and `datums` fields can be any type when instantiating a new `Tx` instance. But when getting the `redeemers` and the `datums` the value type is actually `Data` (see [`redeemers`](./tx.md#redeemers) and [`datums`](./tx.md#datums)).

## Getters

### `inputs`

Returns the list of [`TxInput`](./txinput.md)s of the transaction.

```helios
tx.inputs -> []TxInput
```

### `ref_inputs`

Returns the list of reference inputs (as `[]`[`TxInput`](./txinput.md)) of the transaction.

```helios
tx.ref_inputs -> []TxInput
```

### `outputs`

Returns the list of [`TxOutput`](./txoutput.md)s of the transaction.

```helios
tx.outputs -> []TxOutput
```

### `fee`

Returns the fee [`Value`](./value.md) paid for the transaction.

```helios
tx.fee -> Value
```

### `minted`

Returns the [`Value`](./value.md) minted by the transaction.

```helios
tx.minted -> Value
```

### `dcerts`

Returns the list of [`DCert`](./dcert.md)s of the transaction (i.e. list of staking certifying actions).

```helios
tx.dcerts -> []DCert
```

### `withdrawals`

Returns a [map](./map.md) of staking reward withdrawals. The map value `Int`s are lovelace quantities.

```helios
tx.withdrawals -> Map[StakingCredential]Int
```

### `time_range`

Returns the valid [`TimeRange`](./timerange.md) of the transaction. This [`TimeRange`](./timerange.md) must contain the current time.

```helios
tx.time_range -> TimeRange
```

> **Note**: we can't access the current time from within the validator script because it would lead to differing evaluation results as the tx propagates across the network. Instead we can use `tx.time_range` as an approximation of the current time.

### `signatories`

Returns the list of explicit transaction signers as `[]`[`PubKeyHash`](./pubkeyhash.md).

```helios
tx.signatories -> []PubKeyHash
```

### `redeemers`

Returns all the redeemers of the transaction as a map with `ScriptPurpose` keys, and `Data` values. This allows more complex interactions between different scripts being used in the same transaction.

```helios
tx.redeemers -> Map[ScriptPurpose]Data
```

### `datums`

Returns a [`Map`](./map.md) of [`DatumHash`es](./datumhash.md) to raw [`Data`](./data.md). This can be used to get the datum content of any [`TxInput`](./txinput.md) that doesn't use inline datums.

```helios
tx.datums -> Map[DatumHash]Data
```

### `id`

Returns the hash of the current transaction as [`TxId`](./txid.md).

```helios
tx.id -> TxId
```

## Operators

### `==`

```helios
Tx == Tx -> Bool
```

### `!=`

```helios
Tx != Tx -> Bool
```

## Methods

### `serialize`

```helios
tx.serialize() -> ByteArray
```

### `is_signed_by`

Returns `true` if the transaction was signed by the given pubkeyhash.

```helios
tx.is_signed_by(pubkeyhash: PubKeyHash) -> Bool
```

### `find_datum_hash`

Returns the [`DatumHash`](./datumhash.md) of datum data used in one the UTxO inputs.

```helios
tx.find_datum_hash(data: AnyType) -> ByteArray
```

### `get_datum_data`

Returns the datum [`Data`](./data.md) of a [`TxOutput`](./txoutput.md). Throws an error if no datum is attached to the output.

```helios
tx.get_datum_data(output: TxOutput) -> Data
```

### `outputs_sent_to`

Returns the [`TxOutput`](./txoutput.md)s sent to a regular payment address.

```helios
tx.outputs_sent_to(pkh: PubKeyHash) -> []TxOutput
```

### `outputs_sent_to_datum`

Returns the [`TxOutput`](./txoutput.md)s sent to a regular payment address tagged with the given datum (datum tagging can be used to prevent double satisfaction exploits).

```helios
tx.outputs_sent_to_datum(
    pkh: PubKeyHash, 
    datum: AnyType, 
    is_inline: Bool
) -> []TxOutput
```

### `outputs_locked_by`

Returns the [`TxOutput`](./txoutput.md)s being locked at the given script address.

```helios
tx.outputs_locked_by(script_hash: ValidatorHash) -> []TxOutput
```

### `outputs_locked_by_datum`

Returns the [`TxOutput`](./txoutput.md)s being locked at the given script address with the given datum.

```helios
tx.outputs_locked_by_datum(
    script_hash: ValidatorHash, 
    datum: AnyType, 
    is_inline: Bool
) -> []TxOutput
```

### `value_paid_to`

Returns the output [`Value`](./value.md) sent to a generic payment address, with a specific inline datum.

```helios
tx.value_paid_to[InlineDatumDataType](
    address: Address,
    datum: InlineDatumDataType
) -> Value
```

### `value_sent_to`

Returns the output [`Value`](./value.md) sent to a regular payment address.

```helios
tx.value_sent_to(addr: PubKeyHash) -> Value
```

### `value_sent_to_datum`

Returns the output [`Value`](./value.md) sent to a regular payment address tagged with the given datum (datum tagging can be used to prevent double satisfaction exploits).

```helios
tx.value_sent_to_datum(
    addr: PubKeyHash, 
    datum: AnyType, 
    is_inline: Bool
) -> Value
```

### `value_locked_by`

Returns the output [`Value`](./value.md) being locked at the given script address.

```helios
tx.value_locked_by(script_hash: ValidatorHash) -> Value
```

### `value_locked_by_datum`

Returns the output [`Value`](./value.md) being locked at the given script address with the given datum.

```helios
tx.value_locked_by_datum(
    script_hash: ValidatorHash, 
    datum: AnyType, 
    is_inline: Bool
) -> Value
```
