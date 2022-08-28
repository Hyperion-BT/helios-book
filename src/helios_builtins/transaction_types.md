# Helios Builtins

## PubKeyHash, ValidatorHash, MintingPolicyHash, DatumHash

---

These are type-safe wrappers around the `ByteArray` type that represent the hash of
a public key, validator script, minting policy or datum.

### Associated Functions

```go, playpen
func new(bytes: ByteArray) -> *Hash

func from_data(data: Data) -> *Hash
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

func show(self) -> String
```

## ScriptContext

---

The `ScriptContext` type contains all the metadata related to a signed Cardano transaction.
It's just a wrapper around the `Tx` type with some extra methods.

```go, noplaypen
// internal representation
struct ScriptContext {
    tx: Tx
	ScriptPurpose // not directly accessible
}
```

### Associated functions

```rust, noplaypen
func from_data(data: Data) -> ScriptContext
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
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

## Tx

---

This type stores the data related to a signed transaction.

```rust, noplaypen
struct Tx {
    inputs: []TxInput            // Transactin Inputs
	ref_inputs: []TxInput        // Reference inputs (not spent)
    outputs: []TxOutput          // Transaction Outputs
    fee: Value                   // Fee paid for this transaction
    minted: Value                // Value minted by this transaction
	dcerts: []DCert              // Digests involved in this transaction
	withdrawals: Map[StakingCredential]Int // Staking withdrawals in this transaction
    time_range: TimeRange        // Valid Time Range of a transaction
    signatories: []PubKeyHash    // signatories of the transaction
    id: TxId                     // Transaction ID
}
```

### Associated functions
```rust, noplaypen
func from_data(data: Data) -> Tx
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

// @returns The current POSIX time.
func now(self) -> Time; 

// @returns true if the transaction was signed by pubkeyhash.
func is_signed_by(self, pubkeyhash: PubKeyHash) -> Bool

// @returns The Datum Hash of the UTXO guarded by the script.
func find_datum_hash(self) -> ByteArray

// @returns The TxOutputs sent to a regular payment address.
func outputs_sent_to(self, pkh: PubKeyHash) -> []TxOutput

func outputs_sent_to_datum(self, pkh: PubKeyHash, datum: Any) -> []TxOutput

// @returns The TxOutputs locked by a script.
func outputs_locked_by(self, script_hash: ValidatorHash) -> []TxOutput

func outputs_locked_by_datum(self, script_hash: ValidatorHash, datum: Any) -> []TxOutput

// @returns The output Value sent to a regular payment address.
func value_sent_to(self, addr: PubKeyHash) -> Value

func value_sent_to_datum(self, addr: PubKeyHash, datum: Any) -> Value

// @returns The output Value locked by a script
func value_locked_by(self, script_hash: ValidatorHash) -> Value

// @returns The output Value locked by a script with a certain datum.
func value_locked_by_datum(self, script_hash: ValidatorHash, datum: Any) -> Value
```

## TxId

---

This is a type-safe wrapper around the `ByteArray`

```rust, playpen
struct TxId {...}
```

### Associated functions
```rust, noplaypen
func new(bytes: ByteArray) -> TxId

func from_data(data: Data) -> TxId
```

### Operators

`==`, `!=`

### Methods

```rust, noplaypen
func serialize(self) -> ByteArray
```

## TxInput

---

This type represents a **Transaction Input**.

```rust, noplaypen
struct TxInput {
    output_id: TxOutputId
    output: TxOutput
}
```

### Associated functions
```rust, noplaypen
func from_data(data: Data) -> TxInput
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray
```

## TxOutput

---

This type represents a **Transaction Output**.

```go, noplaypen
struct TxOutput {
    address: Address
    value: Value
    datum: OutputDatum
}
```

### Associated functions
```rust, noplaypen
func from_data(data: Data) -> TxOutput
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray
```

## OutputDatum

```rust, noplaypen
enum OutputDatum {
	None
	Hash{hash: DatumHash}
	Inline{data: Data}
}
```

### Associated functions

```rust, noplaypen
func from_data(data: Data) -> OutputDatum
```

### Operators

`==`, `!=`

### Methods
```rust, noplaypen
func serialize(self) -> ByteArray
```

## TxOutputId

---

This type is a unique ID for a UTXO (Unspent Transaction Output).
It's composed of the **Transaction ID** (`TxId`) of the transaction that created the UTXO and the index (`Int`) of the UTXO in the outputs of that transaction.

```go, noplaypen
struct TxOutputId {
    TxId // not directly accessible
    Int // not directly accessible
}
```

### Associated Functions

```go, noplaypen
func new(tx_id: TxId, index: Int) -> TxOutputId

func from_data(data: Data) -> TxOutputId
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray
```

## Address

---

The `Address` type represents a cardano address.

```rust, noplaypen
struct Address {
    credential: Credential
    staking_credential: Option[StakingCredential]
}
```

### Associated functions
```rust, noplaypen
func new(credential: Credential, staking_credential: Option[StakingCredential]) -> Address

func from_data(data: Data) -> Address
```
### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: Address) -> ByteArray
```

## Credential

---

The `Credential` type represents the an onchain credential which can be a `PubKeyHash` or a `ValidatorHash`

```rust, noplaypen
enum Credential {
    Pubkey { hash: PubKeyHash }
    Validator { hash: ValidatorHash }
}
```

### Associated functions
```rust, noplaypen
func new_pubkey(pkh: PubKeyHash) -> Credential::PubKeyHash

func new_validator(vh: ValidatorHash) -> Credential::ValidatorHash

func from_data(data: Data) -> Credential
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray
```

### Operators

`==`, `!=`

## StakingCredential

---
```rust, noplaypen
enum StakingCredential {
	Hash{Credential}
	Ptr{Int, Int, Int}
}
```

### Associated functions
```rust, noplaypen
func new_hash(credential: Credential) -> StakingCredential::Hash

func new_ptr(a: Int, b: Int, c: Int) -> StakingCredential::Ptr

func from_data(data: Data) -> StakingCredential
```

### Operators

`==`, `!=`

### Methods
```go, noplaypen
func serialize(self) -> ByteArray
```

## StakingPurpose

```rust, noplaypen
enum StakingPurpose {
	Rewarding{credential: StakingCredential}
	Certifying{dcert: DCert}
}
```

### Associated functions
```rust, noplaypen
func from_data(data: Data) -> StakingPurpose
```

### Operators
`==`, `!=`

### Methods
```go, noplaypen
func serialize(self) -> ByteArray
```

## DCert

```rust, noplaypen
enum DCert {
	Register{credential: StakingCredential}
	Deregister{credential: StakingCredential}
	Delegate{delegator: StakingCredential, pool_id: PubKeyHash}
	RegisterPool{pool_id: PubKeyHash, pool_vfr: PubKeyHash}
	RetirePool{pool_id: PubKeyHash, epoch: Int}
}
```

### Associated functions
```rust, noplaypen
func from_data(data: Data) -> DCert

func new_register(credential: StakingCredential) -> DCert::Register

func new_deregister(credential: StakingCredential) -> DCert::Deregister

func new_delegate(delegator: StakingCredential, pool_id: PubKeyHash) -> DCert::Delegate

func new_register_pool(pool_id: PubKeyHash, pool_vfr: PubKeyHash) -> DCert::RegisterPool

func new_retire_pool(pool_id: PubKeyHash, epoch: Int) -> DCert::RetirePool
```

### Operators
`==`, `!=`

### Methods
```rust, noplaypen
func serialize(self) -> ByteArray
```
