# `TxWitnesses`

Represents the pubkey signatures, and datums/redeemers/scripts that are witnessing a transaction.

The CBOR representation of `TxWitnesses` is returned by a wallet when signing a transaction.

## Static methods

### `fromCbor`

Deserialize a CBOR encoded `TxWitnesses` instance.

Shifts `bytes` to the next CBOR element.

```ts
helios.TxWitnesses.fromCbor(bytes: number[]): helios.TxWitnesses
```

## Getters

### `signatures`

Gets the list of [`Signature`](./signature.md) instances created by a wallet.

```ts
tx_witnesses.signatures: helios.Signature[]
```