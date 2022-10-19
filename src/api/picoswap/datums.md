# Generating datums

We can use the following Helios code to generate datums:

```js
const datumScript = `
const SELLER_BYTES   = # // must be 28 bytes long
const PRICE_LOVELACE = 0
const BUYER_BYTES    = # // must be 0 or 28 bytes long
const NONCE          = 0

const DATUM = Datum{
    seller: PubKeyHash::new(SELLER_BYTES),
    price:  Value::lovelace(PRICE_LOVELACE),
    buyer:  if (BUYER_BYTES.length == 0) {
                Option[PubKeyHash]::None
            } else {
                Option[PubKeyHash]::Some{PubKeyHash::new(BUYER_BYTES)}
            },
    nonce:  NONCE
}`
```

Before generating a datum with `evalParam`, we concatenate `mainScript` with `datumScript` and change the values of the input parameters:

```js
/**
 * @param {helios.Address} seller
 * @param {bigint} price
 * @returns {helios.UplcData}
 */
function generatePublicSaleDatum(seller, price) {
    // public sale, don't set the buyer bytes
    return helios.Program.new(mainScript + datumScript)
        .changeParam("SELLER_BYTES",   JSON.stringify(seller.pubKeyHash.bytes))
        .changeParam("PRICE_LOVELACE", price.toString())
        .changeParam("NONCE",          (Math.random()*1000000).toString())
        .evalParam("DATUM").data
}
```

> **Note**: the `program.changParam()` method takes as a second argument a JSON string, or a `UplcValue` (i.e. the result of a `evalParam` call). It doesn't take an arbitrary object however, as that might get confused for the internals of a `UplcValue`. 