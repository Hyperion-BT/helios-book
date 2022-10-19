# `Contract` helper class

Before describing PicoSwap's smart contract end-points, it is helpful to define a `Contract` class that can be instantiated for each set of UTxOs locked at the script address having the same datum.

```js
class Contract {
    /**
     * @param {helios.ConstrData} datum - not a helios.Datum instance!
     * @param {helios.UTxO[]} utxos
     */
    constructor(datum, utxos) {
        this.datum = datum
        this.utxos = utxos
    }

    get seller() {
        return new helios.PubKeyHash(this.datum.fields[0].bytes)
    }

    get sellerAddress() {
        // true -> testnet
        return helios.Address.fromPubKeyHash(true, this.seller)
    }

    get price() {
        return helios.Value.fromData(this.datum.fields[1])
    }

    get forSale() {
        return helios.UTxO.sumValue(this.utxos)
    }

    get nonce() {
        return this.datum.fields[3].int
    }
}
```

> **Note**: `ConstrData` is one of the 5 child-types of `UplcData`. The other `UplcData` child-types are: `IntData`, `ByteArrayData`, `ListData` and `MapData`.

Grouping the contract UTxOs and extracting the inline datum data is left as an exercise to the reader.