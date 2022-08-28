# Value

The `Value` type represents a *token bundle* using pairs of asset classes (`AssetClass`)  and amounts (`Int`).

```go, noplaypen
// The Value type is opaque (it's internals aren't visible to Helios developers)
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
