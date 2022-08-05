# Helios Builtins

## PubKeyHash, ValidatorHash, MintingPolicyHash, DatumHash

---

These are type-safe wrappers around the `ByteArray` type that represent the hash of
a public key, validator script, minting policy or datum.

### Associated Functions

```go, playpen
func new(bytes: ByteArray) -> PubKeyHash
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

func show(self) -> String
```

### Internal Namespace

`__helios__hash`

## ScriptContext

---

The `ScriptContext` type represents contains all the metadata related to a signed Cardano transaction.
It's just a wrapper around the `Tx` type with some extra methods.

```go, noplaypen
struct ScriptContext {
    tx: Tx,
}
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
// @returns The ScriptContext serialized into bytes.
func serialize(self: ScriptContext) -> ByteArray;

// ! UNSURE
// @returns The TxOutputId of t
func get_spending_purpose_output_id(self: ScriptContext) -> TxOutputId;

// @returns The ValidatorHash of the validator script being evaluated.
func get_current_validator_hash(self: ScriptContext) -> ValidatorHash;

// @returns The MintingPolicyHash of the minting policy being evaluated.
func get_current_minting_policy_hash(self: ScriptContext) -> MintingPolicyHash;

// @returns the TxInput locked by the validator script being evaluated.
func get_current_input(self: ScriptContext) -> TxInput;
```

### Internal Namespace

`__helios__scriptcontext`

## Tx

---

This type stores the data related to a signed transaction.

```rust, noplaypen
struct Tx {
    id: TxId                     // Transaction ID
    inputs: []TxInputs           // Transactin Inputs
    outputs: []TxOutputs         // Transaction Outputs
    fee: Value                   // Fee paid for this transaction
    minted: Value                // Value minted by this transaction
    time_range: TimeRange        // Valid Time Range of a transaction
    signatories: []PubKeyHash    // signatories of the transaction
}
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: Tx) -> ByteArray;

// @returns The current POSIX time.
func now(self: Tx) -> Time; 

// @returns true if the transaction was signed by pubkeyhash.
func is_signed_by(self: Tx, pubkeyhash: PubKeyHash) -> Bool;

// @returns The Datum Hash of the UTXO guarded by the script.
func find_datum_hash(self: Tx) -> ByteArray;

// ! UNSURE
// @returns The TxOutputs sent to an address.
func outputs_sent_to(self: Tx, addr: PubKeyHash) -> []TxOutput;

// ! UNSURE
// @returns The TxOutputs locked by a script.
func outputs_locked_by(self: Tx, script_hash: ScriptHash) -> []TxOutput;

// ! UNSURE
// @returns The Value sent to an address.
func value_sent_to(self: Tx, addr: PubKeyHash) -> Value;

// ! UNSURE
// @returns The Value locked by a script_hash.
func value_locked_by(self: Tx, script_hash: ScriptHash) -> Value;

// ! UNSURE
// @returns The Value locked by datum_hash.
func value_locked_by_datum(self: Tx, datum_hash: DatumHash) -> Value
```

### Internal Namespace

`__helios__tx`

## TxId

---

This is a type-safe wrapper around the `ByteArray`

```rust, playpen
struct TxId {...}
```

### Operators

`==`, `!=`

### Methods

`serialize`

### Internal Namespace

`__helios__txid`

## TxInput

---

This type represents a **Transaction Input**.

```rust, noplaypen
struct TxInput {
    output_id: TxOutputId,
    output: TxOutput
}
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: TxInput) -> ByteArray
```

### Internal Namespace 

`__helios__txinput`

## TxOutput

---

This type represents a **Transaction Output**.

```go, noplaypen
struct TxOutput {
    //! UNSURE
    address: Address
    value: Value
    datum_hash: ByteArray
}
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: TxOutput) -> ByteArray

// Hidden
func get_datum_hash(self: TxOutput) -> DatumHash
```

### Internal Namespace 

`__helios__txoutput`

## TxOutputId

---

This type is a unique ID for a UTXO (Unspent Transaction Output).
It's composed of the **Transaction ID** (`TxId`) of the transaction that created the UTXO and the index (`Int`) of the UTXO in the outputs of the transaction.

```go, noplaypen
struct TxOutputId {
    tx_id: TxId
    index: Int
}
```

### Associated Functions

```go, noplaypen
func new(tx_id: TxId, index: Int) -> TxOutputId
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: TxOutputId) -> ByteArray
```

### Internal Namespace 

`__helios__txoutputid`

## Address

---

The `Address` type represents a cardano address.

```rust, noplaypen
struct Address {
    credential: Credential
    staking_credential: StakingCredential
}
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: Address) -> ByteArray

// Hidden      
// @returns 'true' if the Address is staked.
func is_staked(self: Address) -> Bool
```

### Internal Namespace 

`__helios__address`

## Credential

---

The `Credential` type represents the an onchain credential which can be a `PubKeyHash` or a `ValidatorHash`

```rust, noplaypen
enum Credential {
    Pubkey { hash: PubKeyHash }
    Validator { hash: ValidatorHash }
}
```

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: Credential) -> ByteArray

// Hidden
// @returns 'true' if the Credential is a PubKeyHash
func is_pubkey(self: Credential) -> Bool

// Hidden
// @returns 'true' if the Credential is a ValidatorHash
func is_validator(self: Credential) -> Bool
```

### Internal Namespace

`__helios__credential`

### Operators

`==`, `!=`

## StakingCredential

---

// TODO Add internal of the `StakingCredential` type.

### Operators

`==`, `!=`

### Methods

```go, noplaypen
func serialize(self: StakingCredential) -> ByteArray
```

### Internal Namespace

`__helios__stakingcredential`

## Common (hidden from user)

### Associated Functions

```go, noplaypen
// TODO Add documentation

func verbose_error()
func assert_constr_index()
func not()
func identity()
func serialize()
func is_in_bytearray_list()
func unbooldata()
func booldata()
func unstringdata()
func stringdata()
```

### Operators

`==`, `!=`

### Methods

`__identity`

### Internal Namespace

`__helios__common`
