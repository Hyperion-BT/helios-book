# `ScriptContext`

The `ScriptContext` contains all the metadata related to a signed Cardano transaction and is often an important argument of the validator script `main` function.

It wraps the [`Tx`](./tx.md) type and provides some extra methods.

## Associated functions

### `from_data`

```helios
ScriptContext::from_data(data: Data) -> ScriptContext
```

### `new_certifying`

Construct a `ScriptContext` instance with a `staking`/`certifying` [`ScriptPurpose`](./scriptpurpose.md). **Only available after `main`**, see [script structure](../script-structure/index.md#data-generators-and-test-functions-5).

Throws an error if the current script purpose isn't `staking` or `testing`.

```helios
ScriptContext::new_certifying(
    tx:    Tx,
    dcert: DCert
) -> ScriptContext
```

### `new_minting`

Construct a `ScriptContext` instance with a `minting` [`ScriptPurpose`](./scriptpurpose.md). **Only available after `main`**, see [script structure](../script-structure/index.md#data-generators-and-test-functions-5).

Throws an error if the current script purpose isn't `minting` or `testing`.

```helios
ScriptContext::new_minting(
    tx:  Tx,
    mph: MintingPolicyHash
) -> ScriptContext
```

### `new_rewarding`

Construct a `ScriptContext` instance with a `staking`/`rewarding` [`ScriptPurpose`](./scriptpurpose.md). **Only available after `main`**, see [script structure](../script-structure/index.md#data-generators-and-test-functions-5).

Throws an error if the current script purpose isn't `staking` or `testing`.

```helios
ScriptContext::new_rewarding(
    tx: Tx,
    sc: StakingCredential
) -> ScriptContext
```

### `new_spending`

Construct a `ScriptContext` instance with a `spending` [`ScriptPurpose`](./scriptpurpose.md). **Only available after `main`**, see [script structure](../script-structure/index.md#data-generators-and-test-functions-5).

Throws an error if the current script purpose isn't `spending` or `testing`.

```helios
ScriptContext::new_spending(
    tx:        Tx,
    output_id: TxOutputId
) -> ScriptContext
```

## Getters

### `tx`

Get the [`Tx`](./tx.md) data structure.

```helios
ctx.tx -> Tx
```

## Operators

### `==`

```helios
ScriptContext == ScriptContext -> Bool
```

### `!=`

```helios
ScriptContext != ScriptContext -> Bool
```

## Methods

### `serialize`

Returns the cbor-serialization of the `ScriptContext`.

```helios
ctx.serialize() -> ByteArray
```

### `get_spending_purpose_output_id`

Returns the [`TxOutputId`](./txoutputid.md) of the current UTxO being spent.

Can only be called in `spending` purpose scripts, and throws an error otherwise.

```helios
ctx.get_spending_purpose_output_id() -> TxOutputId
```

### `get_current_input`

Returns the current UTxO being spent as a [`TxInput`](./txinput.md).

Can only be called in `spending` purpose scripts, and throws an error otherwise.

```helios
ctx.get_current_input() -> TxInput
```

### `get_cont_outputs`

Returns the [`outputs`](./txoutput.md) sent back to the current validator script.

Can only be called in `spending` purpose scripts, and throws an error otherwise.

```helios
ctx.get_cont_outputs() -> []TxOutput
```

### `get_current_validator_hash`

Returns the [`ValidatorHash`](./validatorhash.md) of the current script.

Can only be called in `spending` purpose scripts, and throws an error otherwise.

```helios
ctx.get_current_validator_hash() -> ValidatorHash
```

### `get_current_minting_policy_hash`

Returns the [`MintingPolicyHash`](./mintingpolicyhash.md) of the minting policy being evaluated.

Can only be called in `minting` purpose scripts, and throws an error otherwise.

```helios
ctx.get_current_minting_policy_hash() -> MintingPolicyHash
```

### `get_staking_purpose`

Returns the current [`StakingPurpose`](./stakingpurpose.md) (`Rewarding` or `Certifying`).

Can only be called in `staking` purpose scripts, and throws an error otherwise.

```helios
ctx.get_staking_purpose() -> StakingPurpose
```