# Native-Asset Types

Helios uses the `AssetClass` and `Value` types to represent Cardano Native-Assets.

## AssetClass

---

Represents a unique token on the blockchain using the hash of it's minting policy and it's token name.

```rust, noplaypen
// internal representation
struct AssetClass {
    MintingPolicyHash // not directly accessible
    ByteArray // not directly accessible
}
```

### Associated functions and constants

```rust, noplaypen
const ADA: AssetClass

// @returns a new AssetClass
func new(policy_hash: MintingPolicyHash, token_name: ByteArray) -> AssetClass

func from_data(data: Data) -> AssetClass
```

### Operators

`==`,`!=`

### Methods

```rust, noplaypen
func serialize(self) -> ByteArray
```

## Value

---

The `Value` type represents a **token bundle** using a map of `AssetClass`es to `Int` quantities,

```rust, noplaypen
struct Value {..}
```

### Associated functions and constants

```go, noplaypen
// An empty Value
const ZERO: Value

// @returns A Value containing 'amount' number of lovelaces.
func lovelace(amount: Int) -> Value

// @returns A Value containing 'amount' number of the given 'asset_class'
func new(asset_class: AssetClass, amount: Int) -> Value
```

### Operators

`==`, `!=`, `+`, `-`, `*`, `/`, `>=`, `>`, `<=`, `<`

### Methods

```go, noplaypen
func serialize(self) -> ByteArray

func is_zero(self) -> Bool

func get(self, asset_class) -> Int

func get_policy(self, mph: MintingPolicyHash) -> Map[ByteArray]Int

func contains(self, other_value: Value) -> Bool
```
