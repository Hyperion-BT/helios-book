# The ScriptContext

The `ScriptContext` contains all the data about the transaction and is usually the most important argument in determining whether a `validator` should succeed or fail.
Because of how important it is we are going to try to go fairly deep into the internals in this chapter.

This is roughly the internal implementation of the `ScriptContext` struct.

```helios
struct ScriptContext {
    tx: Tx

    // Some useful methods

    // Get the ValidatorHash of the current script
    func get_current_validator_hash(self) -> ByteArray

    // Get the TxInput locked by the validator.
    func get_current_input(self) -> TxInput
}
```

>**Note**: Internally `ScriptContext` is a wrapper around the `Tx` struct,
>the `Tx` holds the metadata of a signed on-chain transaction.

## Tx

The `Tx` struct stores the data on the current transaction.

```helios
struct Tx {
    inputs: []TxInput          // Transaction inputs
	ref_inputs: []TxInput      // Reference inputs that aren't spent
    outputs: []TxOutput        // Transaction outputs
    fee: Value                 // Fee paid for this transaction
    minted: Value              // Value minted by this transaction
    time_range: TimeRange      // Valid range for this transaction
    signatories: []PubKeyHash  // Signatories of the transaction
    id: TxId

    // Some useful methods

    func outputs_sent_to(self, addr: PubKeyHash) -> []TxOutput

    func value_sent_to(self, addr: PubKeyHash) -> Value

	// Use datum tagging to prevent double satisfaction exploits
    func value_sent_to_datum(self, addr: PubKeyHash, datum: Any) -> Value

    func value_locked_by(self, val_hash: ValidatorHash) -> Value

    func value_locked_by_datum(self, val_hash: ValidatorHash, datum: Any) -> Value

    // Checks if a given PubKeyHash is in tx.signatories
    func is_signed_by(self, pk: PubKeyHash) -> Bool;
}

```

## TxInput

The `TxInput` struct as you've probably guessed represents a **Transaction Input**.
As you can see a **Transaction Input** is just a wrapper around UTXO created by a previous transaction on the blockchain.

```helios
struct TxInput {
    output_id: TxOutputId // ID of the UTXO
    output: TxOutput      // UTXO being spent
}
```

## TxOutput

The `TxOutput` represents a **Transaction Output**. This is a **UTXO** that will be created by this transaction.

```helios
struct TxOutput {
    address: Address          // Address of the UTXO
    value:   Value            // Value in the UTXO
    datum:   OutputDatum      // UTXO's datum (none, hash, or inline)
}
```

>**Note**: For more info on the `Address` and `Value` types check out [Helios Builtins](../helios_builtins/Helios_Builtins.md) 🙂.
