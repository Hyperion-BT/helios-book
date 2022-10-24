# `NetworkParams`

Wrapper for a the raw JSON containing all the current network parameters.

Needed to be able to calculate script budgets and perform transaction building checks.

The raw JSON can be downloaded from the following CDN locations:

  * Preview: [https://d1t0d7c2nekuk0.cloudfront.net/preview.json](https://d1t0d7c2nekuk0.cloudfront.net/preview.  
  * Preprod: [https://d1t0d7c2nekuk0.cloudfront.net/preprod.json](https://d1t0d7c2nekuk0.cloudfront.net/preprod.json)
  * Mainnet: [https://d1t0d7c2nekuk0.cloudfront.net/mainnet.json](https://d1t0d7c2nekuk0.cloudfront.net/mainnet.json)

## Constructor

```js
// in an async context

const networkParams = new helios.NetworkParams(
    await fetch("https://d1t0d7c2nekuk0.cloudfront.net/preview.json")
        .then(response => response.json())
)
```