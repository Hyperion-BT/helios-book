# Example: PicoSwap

This section walks you through building a minimal marketplace DApp using Helios. The full demo is hosted [here](https://www.hyperion-bt.org/PicoSwap).

Only the Helios-specific parts are covered (i.e. not the UI, not the wallet interaction, and not the blockchain queries). This example is intended as an alternate introduction to the Helios API, and shouldn't be seen as an authoritative guide on how to write secure DApps.

We assume here that the library has been imported in the following way:

```js
import * as helios from "helios"
```

## Overview

  * [main script](./script.md)
  * [generating datums](./datums.md)
  * [`Contract` helper class](./contract-class.md)
  * [creating a new sale](./new-sale.md)
  * [canceling a sale](./cancel-sale.md)
  * [buying for-sale assets](./buying.md)