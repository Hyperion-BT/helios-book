# Blockchain Types

Helios has native types for representing blockchain primitives. These include:
    1. Address
    2. Credential

## Address
---

The `Address` type holds the data about a cardano address. It's defined as:

```rust, noplaypen
struct Address {
    credential: Credential,
    staking_credential: StakingCredential
}
```

As you can see it's a wrapper around a `Credential` and a `StakingCredential`.
The `StakingCredential` type is opaque and is used via it's methods.

## Credential
---

This type represents an onchain credential.
A credential is used to determine if a UTXO can be spent in a transaction.
It is defined as:

```rust, noplaypen
enum Credential {
    PubKey { hash: PubKeyHash},
    Validator { hash: ValidatorHash }
}
```

As you can see a UTXO can either be locked by a public key or validator script whose hash is stored onchain.

> **Note**: `PubKeyHash` and `ValidatorHash` are type-safe wrapper around the `ByteArray` type.
