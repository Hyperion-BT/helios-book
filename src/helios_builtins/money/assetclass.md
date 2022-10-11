# AssetClass

Represents a unique token on the blockchain using the hash of it's minting policy and it's token name.

```helios
// internal representation
struct AssetClass {
    MintingPolicyHash // not directly accessible
    ByteArray // not directly accessible
}
```

## Associated functions and constants

```helios
const ADA: AssetClass

// @returns a new AssetClass
func new(policy_hash: MintingPolicyHash, token_name: ByteArray) -> AssetClass

func from_data(data: Data) -> AssetClass
```

## Operators

```helios
AssetClass == AssetClass -> Bool
AssetClass != AssetClass -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
