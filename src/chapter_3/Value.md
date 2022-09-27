# Value

`Value` represents a *token bundle*, where each entry is represented by an `AssetClass` and an integer amount. `AssetClass` is turn represents a pair of `MintingPolicyHash` (a.k.a. PolicyID) and token name.

```go, noplaypen
// Value is opaque (it's internals aren't directly accessible from Helios)
struct Value {
    ...

    // A constant representing an empty Value.
    const ZERO: Value

    // Instantiates a Value of a given AssetClass and Amount.
    func new(asset_class: AssetClass, amount: Int) -> Value

    // Constructs a Value containing 'amount' number of lovelaces.
    func lovelace(amount: Int) -> Value

    // Checks if a Value is empty.
    func is_zero(self) -> Bool

    // Gets the amount of a specific AssetClass contained in a Value.
    func get(self, asset_class: AssetClass) -> Int

    // Returns 'true' if self contains other_value.
    func contains(self, other_value: Value) -> Bool
}
```

>**Note**: 1 ADA is equal to 1 million Lovelace
