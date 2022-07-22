# The Helios Programming Language

[Helios](https://github.com/Hyperion-BT/Helios) is a DSL for writing smart contracts on the Cardano blockchain.
It's heavily inspired by Rust, Go and Sway.

## Design Principles

- Helios should be readable by almost any programmer.
- There should be one and preferrably only one way to do everything.

<br/>

```rust
// All Helios programs begin with a script purpose.
validator always_true;

// The 'main' function contains the core validator logic.
func main(ctx: ScriptContext) -> Bool {

    // Helios is an expression based language
    true
}
```
