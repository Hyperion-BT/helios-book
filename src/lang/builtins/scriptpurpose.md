# `ScriptPurpose`

Each redemption in a transaction has a `ScriptPurpose` with the following 4 variants:
  * `Minting`
  * `Spending`
  * `Rewarding`
  * `Certifying`

`ScriptPurpose::Rewarding` and `ScriptPurpose::Certifying` are identical to [`StakingPurpose::Rewarding`](./stakingpurpose.md) and [`StakingPurpose::Certifying`](./stakingpurpose.md) respectively, but the use cases are different. `StakingPurpose` is used for switching between rewarding and certifying within a given staking script. `ScriptPurpose` is used to see what other scripts are being used in the same transaction (see [`tx.redeemers`](./tx.md#redeemers)).

## Associated functions

### `from_data`

```helios
ScriptPurpose::from_data(data: Data) -> ScriptPurpose
```

### `new_minting`

```helios
ScriptPurpose::new_minting(mph: MintingPolicyHash) -> ScriptPurpose::Minting
```

### `new_spending`

```helios
ScriptPurpose::new_spending(output_id: TxOutputId) -> ScriptPurpose::Spending
```

### `new_rewarding`

```helios
ScriptPurpose::new_rewarding(staking_credential: StakingCredential) -> ScriptPurpose::Rewarding
```

### `new_certifying`

```helios
ScriptPurpose::new_certifying(dcert: DCert) -> ScriptPurpose::Certifying
```

## Getters

### `ScriptPurpose::Minting`

#### `policy_hash`

Returnt the [`MintingPolicyHash`](./mintingpolicyhash.md) of the UTxO whose minting or burning is being validated.

```helios
minting_script_purpose.policy_hash -> MintingPolicyHash
```

### `ScriptPurpose::Spending`

#### `output_id`

Returns the [`TxOutputId`](./txoutputid.md) of the UTxO whose spending is being validated.

```helios
spending_script_purpose.output_id -> TxOutputId
```

### `ScriptPurpose::Rewarding`

#### `credential`

Returns the [`StakingCredential`](./stakingcredential.md) for which rewards are being withdrawn.

```helios
rewarding_script_purpose.credential -> StakingCredential
```

### `ScriptPurpose::Certifying`

#### `dcert`

Returns the current stake certifying action as a [`DCert`](./dcert.md).

```helios
certifying_script_purpose.dcert -> DCert
```

## Operators

### `==`

```helios
ScriptPurpose == ScriptPurpose -> Bool
```

### `!=`

```helios
ScriptPurpose != ScriptPurpose -> Bool
```

## Methods

### `serialize`

```helios
script_purpose.serialize() -> ByteArray
```