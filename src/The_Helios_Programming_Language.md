# The Helios Programming Language

[Helios](https://github.com/Hyperion-BT/Helios) is a DSL for writing smart contracts on the Cardano blockchain.
It's heavily inspired by Rust, Go and Sway.

## Design Principles

- Helios should be readable by almost any programmer.
- There should be one and preferrably only one way to do everything (For example, no trailing commas).

<br/>

```helios, noplaypen
// All Helios programs begin with a script purpose.
spending always_true 

// The 'main' function contains the core validator logic.
func main() -> Bool {
    // Helios is an expression based language
    true
}
```
