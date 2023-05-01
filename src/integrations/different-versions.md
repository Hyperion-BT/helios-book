# Different versions of Helios for on-chain vs. off-chain

If you have already launched your dApp to mainnet, and want to keep using exactly the same script hashes while also benefiting from improvements to the [Helios off-chain API](../api/index.md), you can install a second version of Helios alongside the version you want to keep using for compiling on-chain code.

> **Note**: the [Helios Webpack loader](./webpack.md) requires the version of the library you want to use for compiling on-chain code to be installed as `"@hyperionbt/helios"`

To install the latest version of Helios alongside the old verion, you must use an alias:
```
npm install helios-api@npm:@hyperionbt/helios
```

Alternatively you can also install a specific version of Helios using an alias:
```
npm install helios-api@npm:@hyperionbt/helios@^0.13.33
```

You can then import this aliased version of Helios in your Javascript/Typescript project:

```ts
import { UplcProgram } from "helios-api"

...
```

## Transfering `UplcProgram` instances

In order to properly use an [`UplcProgram`](../api/reference/uplcprogram.md) instance compiled by an older version of Helios you must *transfer* it (which ensures the script hash stays the same).

```ts
// old version of Helios used to compile the contract
import { Program } from "@hyperionbt/helios" 

// newest version of Helios
import { UplcProgram } from "helios-api" 

const src = `spending ...`

const uplcProgram = Program.new(src).compile(true).transfer(UplcProgram)
```

The [`transfer()`](../api/reference/uplcprogram.md#transfer) method also transfers the code mapping wrt. the original Helios code.

The [`transfer()`](../api/reference/uplcprogram.md#transfer) method is only available in versions of Helios >= v0.13.32.

### Older versions of Helios

For versions of Helios <= v0.13.31 *transfering* can be achieved by serializing/deserializing the [`UplcProgram`](../api/reference/uplcprogram.md) instance.

```ts
// old version of Helios used to compile the contract
import { Program } from "@hyperionbt/helios"

// newest version of Helios
import { UplcProgram } from "helios-api"

const src = `spending ...`

const uplcProgram = Program.new(src).compile(true)

const transferedUplcProgram = UplcProgram.fromCbor(uplcProgram.toCbor())
```