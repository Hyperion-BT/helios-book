# `PubKey`

Represents the 32 bytes of a Ed25519 public key.

## Getters

### `bytes`

```ts
pubKey.bytes: number[]
```

### `hex`

Hexadecimal representation of the `PubKey` bytes.

```ts
pubKey.hex: string
```

## Methods

### `hash`

Gets the [`PubKeyHash`](./pubkeyhash.md) of the `PubKey`.

```ts
pubKey.hash(): helios.PubKeyHash
```