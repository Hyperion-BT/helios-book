# `ScriptHash`

[Opaque](https://en.wikipedia.org/wiki/Opaque_data_type) [`ByteArray`](./bytearray.md) that represents either a [`ValidatorHash`](./validatorhash.md), a [`MintingPolicyHash`](./mintingpolicyhash.md), or a [`StakingValidatorHash`](./stakingvalidatorhash.md).

This is returned by the [`TxOutput.ref_script_hash`](./txoutput.md#ref_script_hash) getter (a reference script can be any of the above script types).

## Associated functions

### `from_data`

```helios
ScriptHash::from_data(data: Data) -> ScriptHash
```

## Operators

### `==`

```helios
ScriptHash == ScriptHash -> Bool
```

### `!=`

```helios
ScriptHash != ScriptHash -> Bool
```

## Methods

### `serialize`

```helios
script_hash.serialize() -> ByteArray
```