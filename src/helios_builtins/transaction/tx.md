# Tx

This type stores the data related to a signed transaction.

```helios
struct Tx {
    inputs:      []TxInput                 // Transactin Inputs
	ref_inputs:  []TxInput                 // Reference inputs (not spent)
    outputs:     []TxOutput                // Transaction Outputs
    fee:         Value                     // Fee paid for this transaction
    minted:      Value                     // Value minted by this transaction
	dcerts:      []DCert                   // Digests involved in this transaction
	withdrawals: Map[StakingCredential]Int // Staking withdrawals in this transaction
	
	// @notice Use cardano-cli's --invalid-before option to set the start time of the valid 'time_range' to something finite. 
    time_range:  TimeRange                 // Valid Time Range of a transaction

    signatories: []PubKeyHash              // signatories of the transaction
    id:          TxId                      // Transaction ID
}
```

## Associated functions

```helios
func from_data(data: Data) -> Tx
```

## Operators

```helios
Tx == Tx -> Bool
Tx != Tx -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray

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
