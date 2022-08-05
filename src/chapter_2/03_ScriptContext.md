# The ScriptContext

The `ScriptContext` contains all the data about the transaction and is usually the most important argument in determining whether a `validator` should succeed or fail.
Because of how important it is we are going to try to go fairly deep into the internals in this chapter.

This is roughly the internal implementation of the `ScriptContext` struct.

```rust
struct ScriptContext {
    tx: Tx

    // Some useful methods

    // Serializes the ScriptContext to a ByteArray.
    func serialize(self) -> ByteArray;

    // Get the hash of the Validator being evaluated.
    func get_current_validator_hash(self) -> ByteArray;

    // Get the TxInput locked by the validator.
    func get_current_input(self) -> TxInput;

    // Get the ValidatorHash of the current Validator
    func get_current_validator_hash(self) -> ByteArray;
}
```

>**Note**: Internally `ScriptContext` is a wrapper around the `Tx` struct,
>the `Tx` holds the metadata of a signed onchain transaction.

## Tx

The `Tx` struct stores the data on the current transaction.

```rust, noplaypen
struct Tx {
    id: TxId
    inputs: []TxInput          // Transaction inputs
    outputs: []TxOutput        // Transaction outputs
    fee: Value                 // Fee paid for this transaction
    minted: Value              // Value minted by this transaction
    time_range: TimeRange      // Valid range for this transaction
    signatories: []PubKeyHash  // Signatories of the transaction

    // Some useful methods

    func serialize(self) -> ByteArray;

    func now(self) -> Time;

    func outputs_sent_to(self, addr: PubKeyHash) -> []TxOutput;

    func value_sent_to(self, addr: PubKeyHash) -> Value;

    func value_locked_by(self, val_hash: ValidatorHash) -> Value

    func value_locked_by_datum(self, )

    // Checks if a given PubKey
    func is_signed_by(self, pk: PubKeyHash) -> Bool;

}

```

## TxInput

The `TxInput` struct as you've probably guessed represents a **Transaction Input**.
As you can see a **Transaction Input** is just a wrapper around UTXO created by a previous transaction on the blockchain.

```rust, noplaypen
struct txInput {
    output_id: Int       // ID of the UTXO
    output: TxOutput      // UTXO being use
}


```

## TxOutput

The `TxOutput` represents a **Transaction Output** this is a **UTXO(Unspent Transaction Output)** that will be created by this transaction.

```rust, noplaypen
struct TxOutput {
    address: Address             // Address of the UTXO
    value: Value                 // Value in the UTXO
    datum_hash:  ByteArray       // Hash of the UTXO's datum
}
```

>**Note**: For more info on the `Address` and `Value` types check out [Helios Builtins](../helios_builtins/Helios_Builtins.md) 🙂.
