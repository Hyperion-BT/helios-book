# Signed Policy

This example will be a simple minting policy that allows minting as long as
the transaction is signed by an **owner** which will just be a **PubKeyHash**.

```rust, noplaypen
const OWNER: PubKeyHash = #2d2ac372...;

func main(context: ScriptContext) -> Bool {
    context.tx.is_signed_by(OWNER)
}
```
