# `NetworkParams`

Wrapper for the raw JSON containing all the current network parameters.

`NetworkParams` is needed to be able to calculate script budgets and perform transaction building checks.

The raw JSON can be downloaded from the following CDN locations:

  * Preview: [https://d1t0d7c2nekuk0.cloudfront.net/preview.json](https://d1t0d7c2nekuk0.cloudfront.net/preview.json)
  * Preprod: [https://d1t0d7c2nekuk0.cloudfront.net/preprod.json](https://d1t0d7c2nekuk0.cloudfront.net/preprod.json)
  * Mainnet: [https://d1t0d7c2nekuk0.cloudfront.net/mainnet.json](https://d1t0d7c2nekuk0.cloudfront.net/mainnet.json)

These JSONs are updated daily.

## Constructor

```js
// in an async context

const networkParams = new helios.NetworkParams(
    await fetch("https://d1t0d7c2nekuk0.cloudfront.net/preview.json")
        .then(response => response.json())
)
```

## Methods

### `slotToTime`

Calculates the time (in milliseconds in 01/01/1970) associated with a given slot number.

```ts
networkParams.slotToTime(slot: bigint): bigint
```

### `timeToSlot`

Calculates the slot number associated with a given time. Time is specified as milliseconds since 01/01/1970.

```ts
networkParams.timeToSlot(time: bigint): bigint
```