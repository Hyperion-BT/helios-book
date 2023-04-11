# `Crypto`

The Helios `Crypto` class contains a collection of cryptography primitives:
* **Mulberry32**: pseudo random number generator
* **Base32** encoding and decoding
* **Bech32** encoding, checking, and decoding
* **Sha2 256**, **Sha2 512**, **Sha3** and **Blake2b** hashing
* **Ed25519** pubkey generation, signing, and signature verification

These functions have been implemented as part of the Helios library in order to avoid external dependencies (there still isn't a standardized Javascript [Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) that provides all the needed functionality).

## Random number generators

### `mulberry32`

A simple pseudo number generator for use in tests that requires some randomness but need to be deterministic (i.e. each test run gives the same result).

```ts
helios.Crypto.mulberry32(seed: number): (() => number)
```

The returned function returns a new random number between 0 and 1 upon each call.

### `rand`

Alias for `mulberry32`.

```ts
helios.Crypto.rand(seed: number): (() => number)
```

## Base32

Needed by Bech32.

### `encodeBase32`

```ts
helios.Crypto.encodeBase32(
    bytes: number[],
    alphabet: string = DEFAULT_BASE32_ALPHABET
): string
```

### `decodeBase32`

```ts
helios.Crypto.decodeBase32(
    encoded: string,
    alphabet: string = DEFAULT_BASE32_ALPHABET
): number[]
```

### `DEFAULT_BASE32_ALPHABET`

```ts
helios.Crypto.DEFAULT_BASE32_ALPHABET: "abcdefghijklmnopqrstuvwxyz234567"
```

### `BECH32_BASE32_ALPHABET`

```ts
helios.Crypto.DEFAULT_BASE32_ALPHABET: "qpzry9x8gf2tvdw0s3jn54khce6mua7l"
```

## Bech32

Address encoding scheme used by Cardano. Includes a checksum.

### `encodeBech32`

The human readable part is `"addr"` or `"addr_test"` for Cardano addresses.

```ts
helios.Crypto.encodeBech32(
    hrp: string, // typically "addr" or "addr_test"
    data: number[]
): string
```

### `decodeBech32`

Throws an error if the checksum is invalid. Returns both the human readable part and the contained data bytes.

```ts
helios.Crypto.decodeBech32(
    encoded: string
): [string, number[]]
```

### `verifyBech32`

Returns false if the bech32 checksum is incorrect.

```ts
helios.Crypto.verifyBech32(encoded: string): boolean
```

## Hashing


### `sha2_256`

The returned hash is 32 bytes long.

```ts
helios.Crypto.sha2_256(bytes: number[]): number[]
```

### `sha2_512`

The returned hash is 64 bytes long.

```ts
helios.Crypto.sha2_512(bytes: number[]): number[]
```

### `sha3`

The returned hash is 32 bytes long.

```ts
helios.Crypto.sha3(bytes: number[]): number[]
```

### `blake2b`

The returned hash can be up to 64 bytes long (length can be chosen by the caller).

```ts
helios.Crypto.blake2b(
    bytes: number[],
    digestSize: number = 32
): number[]
```

## Ed25519

The elliptic curve signature algorithm used by Cardano wallets. The current implementation is simple but slow.

### `derivePublicKey`

Derive a public key from a private key. The private key can be any number of bytes (it's hashed internally). The returned public key is 32 bytes long.

```ts
helios.Crypto.Ed25519.derivePublicKey(privateKey: number[]): number[]
```

### `sign`

Creates a 64 byte signature.

```ts
helios.Crypto.Ed25519.sign(
    message: number[],
    privateKey: number[]
): number[]
```

### `verify`

Returns `true` if the signature is correct.

```ts
helios.Crypto.Ed25519.verify(
    signature: number[],
    message: number[],
    publicKey: number[]
): boolean
```