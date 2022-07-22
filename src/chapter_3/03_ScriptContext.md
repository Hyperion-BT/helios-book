# The ScriptContext

The ScriptContext is a wrapper around a `Tx` struct that holds some useful metadata.

```rust
struct ScriptContext {
    tx: Tx
}

// Useful Methods
impl ScriptContext {
    // Serializes the ScriptContext to a ByteArray.
    func serialize(self) -> ByteArray;

    // Get the hash of the Validator being evaluated.
    func get_current_validator_hash(self) -> ByteArray;

    // Get the TxInput locked by the validator.
    func get_current_input(self) -> TxInput;
}
```

## The `Tx` Struct

The `Tx` struct stores the data on the current transaction.

```rust
struct Tx {
    id: TxId,
    inputs: []TxInput,          // Transaction inputs
    outputs: []TxOutput,        // Transaction outputs
    fee: Value,                 // Fee paid by this transaction
    time_range: TimeRange,     // Valid range for this transaction
    signatories: []PubKeyHash, // Signatories of the transaction
}

impl Tx {
    func serialize(self) -> ByteArray;

    func now(self) -> Time;

    func outputs_sent_to(self, addr: PubKeyHash) -> []TxOutput;

    func value_sent_to(self, addr: PubKeyHash) -> Value;

    func is_signed_by(self, addr: PubKeyHash) -> Bool;
}

```


```rust
struct txInput {
    output_id: Int,
    output: TxOutput
}
```

```rust
struct TxOutput {
    address: PubKeyHash,
    value: Value,
    datum_hash:  ByteArray
}
```
