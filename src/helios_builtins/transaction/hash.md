# PubKeyHash, ValidatorHash, MintingPolicyHash, DatumHash

These are type-safe wrappers around the `ByteArray` type that represent the hash of
a public key, validator script, minting policy or datum.

## Associated Functions

```helios
func new(bytes: ByteArray) -> *Hash

func from_data(data: Data) -> *Hash
```

## Operators

```helios
Hash == Hash -> Bool
Hash != Hash -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray

func show(self) -> String
```
