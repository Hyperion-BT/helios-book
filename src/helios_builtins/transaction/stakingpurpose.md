# StakingPurpose

```helios
enum StakingPurpose {
	Rewarding{
		credential: StakingCredential
	}
	Certifying{
		dcert: DCert
	}
}
```

## Associated functions

```helios
func from_data(data: Data) -> StakingPurpose
```

## Operators

```helios
StakingPurpose == StakingPurpose -> Bool
StakingPurpose != StakingPurpose -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
