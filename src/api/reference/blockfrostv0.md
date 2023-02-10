# `BlockfrostV0`

Blockfrost specific implementation of [`Network`](./network.md).

WiP.

## Constructor

Constructs a `BlockfrostV0` using the network name (`preview`, `preprod` or `mainnet`) and your Blockfrost project id.

```ts
const network = new helios.BlockfrostV0(networkName: string, projectId: string)
```

## Static methods

### `resolve`

Connect the same network a [`Wallet`](./wallet.md) is connected to (`preview`, `preprod` or `mainnet`). Throws an error if a Blockfrost project id is missing for the network.

```ts
const network = helios.BlockforstV0.resolve(
    wallet: helios.Wallet,
    projectIds: {
        preview?: string,
        preprod?: string,
        mainnet?: string
    }
)
```

## Methods

### `submitTx`

```ts
network.submitTx(tx: helios.Tx): Promise<helios.Txid>
```