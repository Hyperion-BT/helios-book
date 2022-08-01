# Value

The `Value` type represents a *token bundle*.

```go, noplaypen
// Associated constant that represents an empty token bundle.
Value::ZERO;

// Associated Functions

Value::lovelace(amount: Int);

Value::new(asset_class: AssetClass, amount: Int);

// Useful Methods

// Checks if the Value is zero.
func is_zero(self) -> Bool;

// Gets the amount of an AssetClass contained in a Value.
func get(self, asset_class: AssetClass) -> Int;

// Returns 'true' if self contains other_value.
func contains(self, other_value: Value) -> Bool;
```

>**Note**: 1 ADA is equal to 1,000,000,000 Lovelace
