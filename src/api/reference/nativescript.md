# `NativeScript`

Helios supports Cardano [native scripts](https://cips.cardano.org/cips/cip29/). This is intended for interoperability with legacy dApps and protocols. See [`Tx.attachScript()`](./tx.md#attachscript) for how `NativeScript` can be used when building a transaction.

## Static methods

### `fromCbor`

Deserializes a CBOR hex string or byte array into a `NativeScript` instance. If the raw inputh has a `0` prefix, that prefix is first removed.

```ts
helios.NativeScript.fromCbor(bytes: number[] | string): helios.NativeScript
```

### `fromJson`

Converts a the JSON representation of a `NativeScript` into a `NativeScript` instance.

```ts
helios.NativeScript.fromJson(json: string | Object): helios.NativeScript
```

## Getters

### `mintingPolicyHash`

A `NativeScript` can be used as either a validator script or a minting script. This getter returns the `hash()` as a [`MintingPolicyHash`](./mintingpolicyhash.md) instance.

```ts
native_script.mintingPolicyHash: helios.MintingPolicyHash
```

### `validatorHash`

A `NativeScript` can be used as either a validator script or a minting script. This getter returns the `hash()` as a [`ValidatorHash`](./validatorhash.md) instance.

```ts
native_script.validatorHash: helios.ValidatorHash
```

## Methods

### `hash`

Calculates the blake2b-224 (28 bytes) hash of the `NativeScript`. (Note: a `0` byte is prepended before to the serialized CBOR representation, before calculating the hash).

```ts
nativeScript.hash(): number[]
```

### `toCbor`

Serializes a `NativeScript` into its CBOR byte representation.

```ts
nativeScript.toCbor(): number[]
```

### `toJson`

Returns the JSON representation of the `NativeScript`.

```ts
nativeScript.toJson(): any
```