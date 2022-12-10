# `MintingPolicyHash`

This is a type-safe wrapper around [`ByteArray`](./bytearray.md) that represents the hash of minting policy script.

Example:

```helios
mph: MintingPolicyHash = MintingPolicyHash::new(#...); ...
```
## Associated Functions

### `new`

```helios
MintingPolicyHash::new(bytes: ByteArray) -> MintingPolicyHash
```

### `from_data`

```helios
MintingPolicyHash::from_data(data: Data) -> MintingPolicyHash
```

### `from_script_hash`

Casts the generic [`ScriptHash`](./scripthash.md) type into `MintingPolicyHash`.

```helios
MintingPolicyHash::from_script_hash(hash: ScriptHash) -> MintingPolicyHash
```

## Operators

### `==`

```helios
MintingPolicyHash == MintingPolicyHash -> Bool
```

### `!=`

```helios
MintingPolicyHash != MintingPolicyHash -> Bool
```

## Methods

### `serialize`

```helios
mph.serialize() -> ByteArray
```

### `show`

Hexadecimal representation of `MintingPolicyHash`.

```helios
mph.show() -> String
```
