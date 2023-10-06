# Generating datums and redeemers

Smart contract transactions include datum and redeemer data. You can generate these data structures using Helios.

Let's look at the following Helios script (as a literal string inside a js file):

```js
const src = `
spending owner_only

struct Datum {
    owner: PubKeyHash
}

func main(datum: Datum, _, ctx: ScriptContext) -> Bool {
    ctx.tx.is_signed_by(datum.owner)
}

const MY_DATUM = Datum {
    PubKeyHash::new(#...)
}`
```

Remember that after the `main` function you can define data generators and test functions (see [script structure](../lang/script-structure/index.md)).

`MY_DATUM` in this example can be evaluated using the API:

```js
// at top of js file
import * as helios from "helios"
```
```js
...
```
```js
const program = helios.Program.new(src)

const myDatum = program.parameters["MY_DATUM"]
```

Here `myDatum` is a `UplcValue` instance. `UplcValue` is the internal (unexported) base class of every Helios value. To get the underlying data we can use the `data` getter:

```js
const myDatumData = myDatum.data
```

> **Note**: the `UplcValue` `data` getter doesn't work for booleans as booleans are always kept in their primitive Plutus-Core form for performance reasons.

Here `myDatumData` is a `UplcData` instance. `UplcData` is equivalent to the `BuiltinData` type in Plutus.

To create a JSON string that can be used by *cardano-cli* we can use the `toSchemaJson` method:

```js
console.log(myDatumData.toSchemaJson())

// prints '{"constructor": 0, "fields": [...]}'
```