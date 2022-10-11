# ScriptContext

The `ScriptContext` type contains all the metadata related to a signed Cardano transaction.
It's just a wrapper around the `Tx` type with some extra methods.

```helios
// internal representation
struct ScriptContext {
    tx: Tx
	ScriptPurpose // not directly accessible
}
```

## Associated functions

```helios
func from_data(data: Data) -> ScriptContext
```

## Operators

```helios
ScriptContext == ScriptContext -> Bool
ScriptContext != ScriptContext -> Bool
```

## Methods

```helios
// @returns The ScriptContext serialized into bytes.
func serialize(self) -> ByteArray

// @notice only available in spending scripts
// @returns The TxOutputId of the current UTXO being spent
func get_spending_purpose_output_id(self) -> TxOutputId

// @notice only available in spending scripts
// @returns the current UTXO being spent as TxInput
func get_current_input(self) -> TxInput

// @notice only availabe in spending scripts
// @returns The ValidatorHash of the current script
func get_current_validator_hash(self) -> ValidatorHash

// @notice only available in minting scripts
// @returns The MintingPolicyHash of the minting policy being evaluated.
func get_current_minting_policy_hash(self) -> MintingPolicyHash

// @notice only available in staking scripts
// @returns the current staking sub-purpose (Rewarding or Certifying)
func get_staking_purpose(self) -> StakingPurpose
```
