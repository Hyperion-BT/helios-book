# `Signature`

Represents a Ed25519 signature associated with a given public key.

Transactions must be signed by the owners of the public keys of the input UTxOs.

## Constructor

```ts
new helios.Signature(
    pubKey: number[] | PubKey,
    signatureBytes: number[]
)
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `Signature` instance.

```ts
helios.Signature.fromCbor(bytes: number{}): helios.Signature
```

## Getters

### `pubKey`

Returns the [`PubKey`](./pubkey.md) that was used to create the `Signature`.

```ts
signature.pubKey: helios.PubKey
```

### `pubKeyHash`

Returns the [`PubKeyHash`](./pubkeyhash.md) of the [`PubKey`](./pubkey.md) that was used to create the `Signature`.

```ts
signature.pubKeyHash: helios.PubKeyHash
```

## Methods

### `toCbor`

Encodes a `Signature` instance using CBOR.

```ts
signature.toCbor(): number[]
```

### `verify`

Verify that the signature corresponds with the given message bytes.

Throws an error if the signature is wrong.

```ts
signature.verify(messageBytes: number[]): void
```