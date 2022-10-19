# Explicit signers

Explicit signers are actors who approve the transaction without necessarily sending or receiving UTxOs.

Only these explicit signers appear in the [`tx.signatories`](../../lang/builtins/tx.md#signatories) field.

Signers are identified by their `PubKeyHash`:

```js
tx.addSigner(helios.PubKeyHash.fromHex("..."))
```