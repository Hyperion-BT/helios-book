# DCert

```helios
enum DCert {
	Register{
		credential: StakingCredential
	}
	Deregister{
		credential: StakingCredential
	}
	Delegate{
		delegator: StakingCredential
		pool_id: PubKeyHash
	}
	RegisterPool{
		pool_id: PubKeyHash 
		pool_vfr: PubKeyHash
	}
	RetirePool{
		pool_id: PubKeyHash
		epoch: Int
	}
}
```

## Associated functions

```helios
func from_data(data: Data) -> DCert

func new_register(credential: StakingCredential) -> DCert::Register

func new_deregister(credential: StakingCredential) -> DCert::Deregister

func new_delegate(delegator: StakingCredential, pool_id: PubKeyHash) -> DCert::Delegate

func new_register_pool(pool_id: PubKeyHash, pool_vfr: PubKeyHash) -> DCert::RegisterPool

func new_retire_pool(pool_id: PubKeyHash, epoch: Int) -> DCert::RetirePool
```

## Operators

```helios
DCert == DCert -> Bool
DCert != DCert -> Bool
```

## Methods

```helios
func serialize(self) -> ByteArray
```
