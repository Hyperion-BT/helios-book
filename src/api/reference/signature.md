# `Signature`

Represents a Ed25519 signature associated with a given public key.

Transactions must be signed by the owners of the public keys of the input UTxOs.

## Constructor

```ts
new helios.Signature(
    pubKey: number[],
    signatureBytes: number[]
)
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `Signature` instance.

```ts
helios.Signature.fromCbor(bytes: number{}): helios.Signature
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