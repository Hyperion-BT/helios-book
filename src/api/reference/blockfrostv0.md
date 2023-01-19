# `BlockfrostV0`

Blockfrost specific implementation of [`Network`](./network.md).

WiP.

## Constructor

Constructs a `BlockfrostV0` using the network name (`preview`, `preprod` or `mainnet`) and your Blockfrost project id.

```ts
const network = new helios.BlockfrostV0(networkName: string, projectId: string)
```

## Methods

### `submitTx`

```ts
network.submitTx(tx: helios.Tx): Promise<helios.Txid>
```