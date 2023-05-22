# `PrivateKey`

Represents a Ed25519 private key. This class can be useful when testing using the [`WalletEmulator`](./walletemulator.md).

## Getters

### `bytes`

Gets the underlying bytes.

```ts
privateKey.bytes: number[]
```

### `hex`

Returns the hexadecimal representation of the underlying bytes.

```ts
privateKey.hex: string
```

## Methods

### `derivePubKey`

Derives the associated [`PubKey`](./pubkey.md).

```ts
privateKey.derivePubKey(): helios.PubKey
```

### `extend`

Generates a new `PrivateKey` by hashing the bytes of the current `PrivateKey`.

```ts
privateKey.extend(): helios.PrivateKey
```

### `sign`

Signs a message (as a list of bytes), returning a [`Signature`](./signature.md).

```ts
privateKey.sign(message: number[]): helios.Signature
```