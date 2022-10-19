# Signing and submitting a transactions

## Signing

The finalized transaction can be signed by a wallet, for example using the [CIP 30 DApp connector](https://cips.cardano.org/cips/cip30/):

```js
// in an async context

const response = await walletHandle.signTx(helios.bytesToHex(tx.toCbor()), true)

// extract the deserialized signatures
const signatures = helios.TxWitnesses.fromCbor(helios.hexToBytes(response)).signatures

tx.addSignatures(signatures)
```

> **Note**: the `bytesToHex` and `hexToBytes` functions are provided by the Helios library as convenient and unambiguous ways to convert a byte-array between string hexadecimal format and raw lists of bytes.

## Submitting

After adding the wallet signatures to the transaction, the transaction can be submitted:

```js
// in async context

// returns the hash of the tx
await walletHandle.submitTx(helios.bytesToHex(tx.toCbor()))
```
