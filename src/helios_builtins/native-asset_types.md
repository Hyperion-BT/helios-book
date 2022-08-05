# Native-Asset Types

Helios uses the `AssetClass` and `Value` types to represent Cardano Native-Assets.

## AssetClass

---

Represents a unique token on the blockchain using the hash of it's minting policy and it's token name.

```rust, noplaypen
struct AssetClass {
    policy_hash: MintingPolicyHash
    token_name: String
}
```

### Associated Functions

```rust, noplaypen
const ADA: AssetClass;

// @returns a 
func new(policy_hash: ByteArray, token_name: ByteArray) -> AssetClass;
```

### Operators

`==`,`!=`

### Methods

`serialize`

### Internal Namespace

`__helios__assetclass`

## Value

---

The `Value` type represents a **token bundle** using a map of `AssetClass`es to amounts `Int`,

```rust, noplaypen
struct Value {..}
```

### Associated Functions

```go, noplaypen
// An empty Value
const ZERO: Value;

// @returns A Value containing 'amount' number of lovelaces.
func lovelace(amount: Int) -> Value

// @returns A Value containing 'amount' number of the given 'asset_class'
func new(asset_class: AssetClass, amount: Int) -> Value
```

### Operators

`==`, `!=`, `+`, `-`, `>=`, `>`, `<=`, `<`

### Methods

```go, noplaypen
func serialize(self: Value) -> ByteArray

func is_zero(self: Value) -> Bool

func get(self: Value, asset_class) -> Int

func contains(self: Value, other_value: Value) -> Bool

// Hidden
// TODO
func get_map_keys()
func merge_map_key()
func get_inner_map()
func get_inner_map_int() 
func add_or_subtract_inner() 
func add_or_subtract() 
func compare_inner()
func compare()
```

### Internal Namespace 

`__helios__value`
