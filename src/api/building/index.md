# Building transactions

Besides compiling and generating data structures the Helios library can also be used to build transactions.

In this section we assume the Helios library has been imported in the following way:

```js
import * as helios from "helios"
```

## `Tx`

A new [`Tx`](../reference/tx.md) instance acts as a transaction builder, using builder pattern methods.

```js
const tx = new helios.Tx()
```

## Overview

  * [inputs](./inputs.md)
  * [outputs](./outputs.md)
  * [collateral](./collateral.md)
  * [explicit signers](./signers.md)
  * [minting](./minting.md)
  * [finalizing](./finalizing.md)
  * [signing and submitting](./signing-and-submitting.md)