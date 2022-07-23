# Helios Builtins

## Helios Operators

| Operator | Name     |
| :---     | :---     |
| `==`     | `__eq`   |
| `!=`     | `__neq`  |
| `>`      | `__gt`   |
| `>=`     | `__geq`  |
| `<`      | `__lt`   |
| `<=`     | `__leq`  |
| `!`      | `__not`  |
| `and`    |  `__and` |
| `or`     |  `__or`  |

## Int
---

### Operators

`__eq`, `__neq`, `__neg`, `__pos`, `__add`, `__sub`, `__mul`, `__div`, `__mod`, `__geq`, `__gt`, `__leq`, `__lt`

### Methods

```go, noplaypen
func serialize(self: Int) -> ByteArray;
func to_bool(self: Int) -> Bool;
func show(self: Int) -> String;
```

### Internal Namespace

`__helios__int`

## Bool
---

### Associated Functions

```go, noplaypen
func and(bool_1: Bool, bool_2: Bool) -> Bool

func or(bool_1: Bool, bool_2: Bool) -> Bool
```

### Operators

`__eq`, `__neq`, `__not`, `__and` (desugars as `and`), `__or` (desugars as `or`)

### Methods:

```go, noplaypen
func serialize(self: Bool) -> ByteArray;

func to_int(self: Bool) -> Int;

func show(self: Bool) -> String;
```

### Internal Namespace

`__helios__bool`

## String
---

### Operators

`__eq`, `__neq`,`__add`

### Methods

```go, noplaypen
func serialize(self: Bool) -> ByteArray;

func encode_utf8(self: Bool) -> String;
```

### Internal Namespace

`__helios__string`

## ByteArray
---

### Operators

`__eq`, `__neq`,`__add` 

### Getters

`.length`, returns the length of the `ByteArray`.

### Methods:

```go, noplaypen
func serialize(self: String) -> ByteArray;

func length(self: String) -> Int;

func sha2(self: String) -> ByteArray;

func sha3(self: String) -> ByteArray;

func blake2b(self: String) -> ByteArray;

func decode_utf8(self: String) -> String;

func show(self: String) -> String;
```

### Internal Namespace

`__helios__bytearray`

## List ([]a)
---

### Associated Functions

```go, noplaypen
func new[a]() -> []a;
```

### Operators

`__eq`, `__neq`,`__add`

### Getters

```go, noplaypen
func lenght(self: []a) -> Int;

// @returns The element at the front of the list
// @notice Throws an error if the list is empty.
func head[a](self: []a) -> a;

// @returns The element at the end of the list.
// @notice Throws an error if the list is empty.
func tail[a](self: []a) -> a;
```

### Methods

```go, noplaypen
func serialize(self: []a) -> ByteArray;

func is_empty(self: []a) -> Bool;

// @returns The element the index in the list.
// @notice Throws an error if the list is too short.
func get[a](self: []a, index: Int) -> a;

// @returns A new list with the item prepended at the front of the list.
func prepend[a](self: []a, item: a) -> []a;

// @return 'true' if any of the items in the list satisfy the predicate.
func any[a](self: []a, predicate: (a) -> Bool) -> Bool;

// @return 'true' if all of the items in the list satisfy the predicate.
func all[a](self: []a, predicate: (a) -> Bool) -> Bool;

// @return The first element in the list that satisfies the predicate.
// @notice Throws an error is no element satisfies the predicate.
func find[a](self: []a, predicate: (a) -> Bool) -> a;

//@returns A list of all the elements in the list that satisfy the predicate.
func filter[a](self: []a, predicate: (a) -> Bool) -> []a;

//@returns Folds a list into a single value by continuosly applying the binary
//         function to the elements of the list.
func fold[a, b](self: []a, binary: (b, a) -> b) -> b;

// @returns The original list list with the transformation function called on
//          all it's elements.
func map[a, b](self: []a, transformation: (a) -> b) -> []b;
```

### Internal Namespace

`__helios__list`

## Map
---

### Operators

`__eq`,`__neq`

### Methods

`serialize`

### Internal Namespace

`__helios__map`

## Option[a]
---

`Option[a]` is an enum used to represent an optional value.

```go, noplaypen
Option[a] {
    Some { a },
    None
}
```

### Operators:

`__eq`,`__neq` 

### Methods:

`serialize`

### Internal Namespace 

`__helios__option`

## Option::Some
---

### Associated Functions

```go, noplaypen
func new[a](value: a) -> Option[a];
func cast[a](value: a) -> Option[a];
```

### Operators:

`__eq`,`__neq` 

### Getters

```go, noplaypen
// @returns The the value in a Some variant.
// @notice Throws an error if called on a None variant.
func value[a](self: Option[a]) -> a;
```

### Methods

func serialize(self: Option[a]) -> ByteArray;

### Internal Namespace

`__helios__option__some`

## Option::None
---

### Associated Functions

```go, noplaypen
func new[a]() -> Option[a];

// ! UNSURE
func cast[a]() -> Option[a];
```

### Operators

`__eq`,`__neq`

### Methods:

```go, noplaypen
func serialize(self: Option[a]) -> ByteArray;
```

### Internal Namespace

`__helios__option__none`

## PubKeyHash, ValidatorHash, MintingPolicyHash, DatumHash
---

### Associated Functions

new

### Operators:

`__eq`,`__neq` 
### Methods:

serialize, show

### Internal Namespace 

`__helios__hash`

## ScriptContext
---

### Operators

`__eq`,`__neq`

### Getters

```go, noplaypen
struct ScriptContext {
    tx: Tx,
    ...
}
```

### Methods

```go, noplaypen
func serialize(self: ScriptContext) -> ByteArray;

// ! UNSURE
func get_spending_purpose_output_id(self: ScriptContext) -> Int;

func get_current_validator_hash(self: ScriptContext) -> ByteArray;

func get_current_minting_policy_hash(self: ScriptContext) -> ByteArray;)

func get_current_input(self: ScriptContext) -> TxInput;
```

### Internal Namespace

`__helios__scriptcontext`

## Tx
---

This struct stores the data related to a signed transaction.

### Operators:

`__eq`,`__neq` 

### Getters

```go, noplaypen
struct Tx {
    id: TxId,                    // Transaction ID
    inputs: []TxInputs,          // Transactin Inputs
    outputs: []TxOutputs,        // Transaction Outputs
    fee: Value,                  // Fee paid for this transaction
    minted: Value,               // Value minted by this transaction
    time_range: TimeRange,       // Valid Time Range of a transaction
    signatories: []PubKeyHash    // signatories of the transaction
}
```

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
func value_locked_by_datum(self: Tx, datum_hash: Datum)
```

### Internal Namespace

`__helios__tx`

## TxId
---

### Operators

`__eq`,`__neq`

### Methods

serialize

### Internal Namespace

`__helios__txid`

## TxInput
---

### Operators

`__eq`,`__neq`

### Getters

```go, noplaypen
struct TxInput {
    output_id: TxOutputId,
    output: TxOutput
}

```

### Methods

serialize

### Internal Namespace 

`__helios__txinput`

## TxOutput
---

### Operators

`__eq`,`__neq`

### Getters

```go, noplaypen
struct TxOutput {
    //! UNSURE
    address: Address,
    value: Value,
    datum_hash: ByteArray
}
```

### Methods

serialize
hidden:      get_datum_hash

### Internal Namespace 

`__helios__txoutput`

## Txoutputid
---

### Associated Functions

// TODO
new

### Operators

`__eq`,`__neq`

### Methods

serialize

### Internal Namespace 

`__helios__txoutputid`

## Address
---

### Operators

`__eq`,`__neq` 

### Getters

```go, noplaypen
struct Address {
    credential: Credential,
    staking_credential: StakingCredential
}
```

### Methods

serialize
hidden:      is_staked

### Internal Namespace 

__helios`__add`ress

## Credential
---

```rust, noplaypen
enum Credential {
    Pubkey { hash: PubKeyHash },
    Validator { hash: ValidatorHash }
}
```

### Operators

`__eq`,`__neq`

### Methods

serialize
hidden:      is_pubkey, is_validator

### Internal Namespace

`__helios__credential`

## Credential::PubKey
---

### Associated Functions

// TODO
cast

### Operators

`__eq`,`__neq`

### Getters

```go, noplaypen
enum Credential {
    PubKey { hash: PubKeyHash },
    ...
}
```

### Methods

serialize

### Internal Namespace

`__helios__credential__pubkey`

## Credential::Validator
---

### Associated Functions

cast

### Operators

`__eq`,`__neq`

### Getters

```go, noplaypen
enum Credential {
    ...
    Validator { hash: ValidatorHash },
}
```

### Methods

serialize

### Internal Namespace

`__helios__credential__validator`

## StakingCredential
---

### Operators:

`__eq`,`__neq`

### Methods

serialize

### Internal Namespace

`__helios__stakingcredential`

## Time
---

Represents time in POSIX format.

### Associated Functions

```go, noplaypen
func new(raw: Int) -> Time;
```

### Operators

`__eq`, `__neq`, `__add`, `__sub`, `__geq`, `__gt`, `__leq`, `__lt`

### Methods

serialize, show

### Internal Namespace

`__helios__time`

## Duration
---

// FIX DEFINITION
`Time` can be thought of as a vector quantity with direction, while `Duration` is a scalar quantity only having magnitude.

### Associated Functions
 
```go, noplaypen
func new(raw: Int) -> Duration;
```

### Operators

`__eq`, `__neq`, `__add`, `__sub`, `__mul`, `__div`, ``, `__geq`, `__gt`, `__leq`, `__lt` 

### Methods

serialize

### Internal Namespace

`__helios__duration`

## TimeRange
---

### Operators

`__eq`,`__neq`

### Methods

```go, noplaypen
// @returns The start of TimeRange.
func get_start(self: TimeRange) -> Time;
```

serialize

### Internal Namespace

`__helios__timerange`

## AssetClass
---

### Associated Functions
 
// TODO
```go, noplaypen
```
ada, new

### Operators:

`__eq`,`__neq`

### Methods

serialize

### Internal Namespace 

`__helios__assetclass`

## Value
---

### Associated Functions

// TODO
zero, lovelace, new

### Operators

`__eq`, `__neq`, `__add`, `__sub`, `__geq`, `__gt`, `__leq`, `__lt`

### Methods

serialize, is_zero, get
hidden:      get_map_keys, merge_map_keys, get_inner_map, get_inner_map_int, add_or_subtract_inner, add_or_subtract, compare_inner, compare

### Internal Namespace 

`__helios__value`

## common (hidden from user)

### Associated Functions

// TODO
verbose_error, assert_constr_index, not, identity, serialize, is_in_bytearray_list
             unbooldata, booldata, unstringdata, stringdata

### Operators

`__eq`,`__neq`

### Methods

__identity
### Internal Namespace

__helios__common
