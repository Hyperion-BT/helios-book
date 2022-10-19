# `DCert`

Represents an enum of staking related actions:
  * `Register`: register a `StakingCredential`
  * `Deregister`: deregister a `StakingCredential`
  * `Delegate`: delegate a `StakingCredential` to a pool
  * `RegisterPool`: register a pool
  * `RetirePool`: deregister a pool

## Associated functions

### `from_data`

```helios
DCert::from_data(data: Data) -> DCert
```

### `new_register`

```helios
DCert::new_register(credential: StakingCredential) -> DCert::Register
```

### `new_deregister`

```helios
DCert::new_deregister(credential: StakingCredential) -> DCert::Deregister
```

### `new_delegate`

```helios
DCert::new_delegate(
	delegator: StakingCredential, 
	pool_id: PubKeyHash
) -> DCert::Delegate
```

### `new_register_pool`

```helios
DCert::new_register_pool(
	pool_id: PubKeyHash, 
	pool_vfr: PubKeyHash
) -> DCert::RegisterPool
```

### `new_retire_pool`

```helios
DCert::new_retire_pool(
	pool_id: PubKeyHash, 
	epoch: Int
) -> DCert::RetirePool
```

## Getters

### `DCert::Register`

#### `credential`

```helios
register_dcert.credential -> StakingCredential
```

### `DCert::Deregister`

#### `credential`

```helios
deregister_dcert.credential -> StakingCredential
```

### `DCert::Delegate`

#### `delegator`

```helios
delegate_dcert.delegator -> StakingCredential
```

#### `pool_id`

```helios
delegate_dcert.pool_id -> PubKeyHash
```

### `DCert::RegisterPool`

#### `pool_id`

```helios
register_pool_dcert.pool_id -> PubKeyHash
```

#### `pool_vrf`

```helios
register_pool_dcert.pool_vrf -> PubKeyHash
```

### `DCert::RetirePool`

#### `pool_id`

```helios
retire_pool_dcert.pool_id -> PubKeyHash
```

#### `epoch`

```helios
retire_pool_dcert.epoch -> Int
```

## Operators

### `==`

```helios
DCert == DCert -> Bool
```

### `!=`

```helios
DCert != DCert -> Bool
```

## Methods

### `serialize`

```helios
dcert.serialize() -> ByteArray
```
