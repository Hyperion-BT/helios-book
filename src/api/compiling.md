# Compiling Helios sources

The recommended way to compile Helios sources is to use the library directly. This approach makes it easier to maintain a [single-source-of-truth](https://en.wikipedia.org/wiki/Single_source_of_truth) version of your contract in client-side DApps.

First step is to write your contract as a js literal string. For example:

```js
const src = `
spending always_succeeds

func main(_, _, _) -> Bool {
    true
}`
```

Then you can create a Helios `Program` instance:

```js
// at top of js file
import * as helios from "helios"
```
```js
...
```
```js
const program = helios.Program.new(src)
```

The `Program` instantiation will perform syntax and type checking, but won't actually do the compilation into the on-chain format. For that you need to call the `compile` method first:

```js
const simplify = true

const myUplcProgram = program.compile(simplify)
```

> **Note**: If `simplify` is `true` the resulting program is optimized for production. If `simplify` is `false` no optimizations are performed and `print` expressions aren't removed, which makes the resulting program more suitable for debugging.

Here `myUplcProgram` is an instance of `UplcProgram` (*uplc* stands for *Untyped PLutus Core*). A `UplcProgram` instance has methods for running, profiling, hashing, and serializing the contained Plutus-Core program.

Now you can serialize the `UplcProgram` into a JSON string that can be used by *cardano-cli*:

```js
console.log(myUplcProgram.serialize())

// prints '{"type": PlutusScriptV2, "description": "", "cborHex": ...}'
```

When [building transactions with Helios](./building/index.md) the `UplcProgram` instance is used directly when attaching scripts.