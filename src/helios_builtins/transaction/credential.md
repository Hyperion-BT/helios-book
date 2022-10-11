# Credential

The `Credential` type represents the non-staking part of an `Address`, and can be a `PubKeyHash` or a `ValidatorHash`.

```helios
enum Credential {
    Pubkey { 
		hash: PubKeyHash 
	}
    Validator { 
		hash: ValidatorHash 
	}
}
```

## Associated functions
```helios
func new_pubkey(pkh: PubKeyHash) -> Credential::PubKeyHash

func new_validator(vh: ValidatorHash) -> Credential::ValidatorHash

func from_data(data: Data) -> Credential
```

## Operators

```helios
Credential == Credential -> Bool
Credential != Credential -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
