# Signature based minting

This example shows a simple minting policy that allows minting tokens as long as the transaction is signed by an **owner**. The **owner** has a given `PubKeyHash`.

```helios
minting signed

const OWNER: PubKeyHash = PubKeyHash::new(#26372...)

func main(ctx: ScriptContext) -> Bool {
    ctx.tx.is_signed_by(OWNER)
}
```
