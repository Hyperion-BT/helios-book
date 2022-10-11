# Address

The `Address` type represents a cardano address.

```helios
struct Address {
    credential: Credential
    staking_credential: Option[StakingCredential]
}
```

## Associated functions

```helios
func new(credential: Credential, staking_credential: Option[StakingCredential]) -> Address

func from_data(data: Data) -> Address
```
## Operators

```helios
Address == Address -> Bool
Address != Address -> Bool
```

## Methods

```helios
func serialize(self: Address) -> ByteArray
```
