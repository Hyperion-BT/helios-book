# `ValidatorHash`

This is a type-safe wrapper around [`ByteArray`](./bytearray.md) that represents the hash of a validator script.

The first part of a script address is formed by a `ValidatorHash`.

## Associated functions

### `new`

```helios
ValidatorHash::new(bytes: ByteArray) -> ValidatorHash
```

### `from_data`

```helios
ValidatorHash::from_data(data: Data) -> ValidatorHash
```

### `from_script_hash`

Casts the generic [`ScriptHash`](./scripthash.md) type into `ValidatorHash`.

```helios
ValidatorHash::from_script_hash(hash: ScriptHash) -> ValidatorHash
```

## Operators

### `==`

```helios
ValidatorHash == ValidatorHash -> Bool
```

### `!=`

```helios
ValidatorHash != ValidatorHash -> Bool
```

## Methods

### `serialize`

```helios
validator_hash.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of the `ValidatorHash`.

```helios
validator_hash.show() -> String
```
