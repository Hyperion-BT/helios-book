# StakingCredential

```helios
enum StakingCredential {
	Hash{Credential}
	Ptr{Int, Int, Int}
}
```

## Associated functions

```helios
func new_hash(credential: Credential) -> StakingCredential::Hash

func new_ptr(a: Int, b: Int, c: Int) -> StakingCredential::Ptr

func from_data(data: Data) -> StakingCredential
```

## Operators

```helios
StakingCredential == StakingCredential -> Bool
StakingCredential != StakingCredential -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
