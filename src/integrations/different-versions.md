# Different versions of Helios for on-chain vs. off-chain

If you have already launched your dApp to mainnet, and want to keep using exactly the same script hashes while also benefiting from improvements to the [Helios off-chain API](../api/index.md), you can install a second version of Helios alongside the version you want to use for compiling on-chain code.

> **Note**: the [Helios Webpack loader](./webpack.md) requires the version of the library you want to use for compiling to be installed as `"@hyperionbt/helios"`

To install the latest version of Helios using an alias:
```
npm install helios-api@npm:@hyperionbt/helios
```

Or to install a specific version of Helios using an alias:
```
npm install helios-api@npm:@hyperionbt/helios@^0.13.0
```

You can then import this aliased version of Helios in your Javascript/Typescript project:

```ts
import { UplcProgram } from "helios-api"

...
```

## Transfering `UplcProgram` instances

In order to use the [`UplcProgram`](../api/reference/uplcprogram.md) instance, compiled by the older version of Helios, in the off-chain code (using the newer version of Helios), you must *transfer* it.

Currently that can be achieved by serializing/deserializing it.

```ts
import { Program } from "@hyperionbt/helios"
import { UplcProgram } from "helios-api"

const src = `spending ...`

const uplcProgram = Program.new(src).compile(true)

const transferedUplcProgram = UplcProgram.fromCbor(uplcProgram.toCbor())
```


