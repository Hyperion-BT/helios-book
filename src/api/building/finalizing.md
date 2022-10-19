# Finalizing

Before signing the serialized transaction using a wallet, the transaction must be finalized. The finalization process calculates the transaction fee, balances the transaction, and checks min collateral and min lovelace deposit requirements.

Finalization requires the most recent network parameters (see below), a change address for balancing, and optionally some additional UTxOs that will be used if the inputs specified by the user don't contain enough lovelace to cover the fees and deposits:

```js
// async because scripts are evaluated asyncronously

await tx.finalize(networkParams, changeAddress, extraUTxOs)
```

> **Note**: `finalize` is asynchronous because script evaluation is asynchronous. Script evaluation is asynchronous so that interactive debuggers can easily step through the evaluation process.

## Network parameters

The finalization process require downloading the latest network parameters. For example, for the preview testnet:

```js
// in an async context

const networkParams = new helios.NetworkParams(
    await fetch("https://d1t0d7c2nekuk0.cloudfront.net/preview.json")
        .then(response => response.json())
)
```

> **Note**: we've set up a CDN with daily updated raw network parameters:
>  * Preview: [https://d1t0d7c2nekuk0.cloudfront.net/preview.json](https://d1t0d7c2nekuk0.cloudfront.net/preview.json)
>  * Preprod: [https://d1t0d7c2nekuk0.cloudfront.net/preprod.json](https://d1t0d7c2nekuk0.cloudfront.net/preprod.json)
>  * Mainnet: [https://d1t0d7c2nekuk0.cloudfront.net/mainnet.json](https://d1t0d7c2nekuk0.cloudfront.net/mainnet.json)