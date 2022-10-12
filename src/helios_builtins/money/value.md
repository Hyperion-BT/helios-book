# Value

The `Value` type represents a **token bundle** using a map of `AssetClass`es to `Int` quantities,

```helios
struct Value {..}
```

## Associated functions and constants

```helios
// An empty Value
const ZERO: Value

// @returns A Value containing 'amount' number of lovelaces.
func lovelace(amount: Int) -> Value

// @returns A Value containing 'amount' number of the given 'asset_class'
func new(asset_class: AssetClass, amount: Int) -> Value

func from_data(data: Data) -> Value

func from_map(raw_value: Map[MintingPolicyHash]Map[ByteArray]Int) -> Value
```

## Operators

```helios
// @notice Assets must also be in same order for '==' to return true
Value == Value -> Bool

Value != Value -> Bool

// @notice Strict greater-equals comparison, if any rhs token is less this returns false
Value >= Value -> Bool

// @notice Strict greater-than comparison, if any rhs token is less-or-equals this returns false
Value >  Value -> Bool

// @notice Strict less-equals comparison, if any rhs token is greater, or doesn't exist in lhs, this returns false
Value <= Value -> Bool

// @notice Strict less-than comparison, if any rhs token is greater-or-equals, or doesn't exist in lhs, this returns false
Value <  Value -> Bool

Value +  Value -> Value
Value -  Value -> Value
Value * Int    -> Value
Value / Int    -> Value
```

## Methods

```helios
func serialize(self) -> ByteArray

func is_zero(self) -> Bool

// @notice Throws error if asset_class isn't found
func get(self, asset_class: AssetClass) -> Int

// @returns A map of tokenName -> quantity
func get_policy(self, mph: MintingPolicyHash) -> Map[ByteArray]Int

// @notice Alias for 'self >= other'
func contains(self, other_value: Value) -> Bool
```
