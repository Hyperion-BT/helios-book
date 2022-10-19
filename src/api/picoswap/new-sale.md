# Creating a new sale

A new sale is created by sending funds (the `forSale` assets) to the contract address with the appropriate datum.

The following function creates a transaction that represents a *new sale*:

```js
/**
 * @param {helios.Value} forSale
 * @param {bigint} price - in lovelace
 * @returns {Promise<helios.Tx>} - the finalized, but unsigned transaction
 */
async function createNewSaleTx(forSale, price) {
    const uplcProgram = helios.Program.new(mainScript).compile(true)

    const forSaleUtxos = /* code that picks some utxos that cover the 'forSale' value */
    const changeAddress = /* code that picks the changeAddress */

    // create the forSale output that will be locked at the script address
    const output = new helios.TxOutput(
        helios.Address.fromValidatorHash(
            true, // true -> testNet
            uplcProgram.validatorHash
        ),
        forSale,
        helios.Datum.inline(generatePublicSaleDatum(changeAddress, price)) // changeAddress is also the seller address
    )

    // the output might not contain any lovelace, that must be corrected (and the price in the datum must be increased accordingly)
    output.correctLovelace(networkParams, (output) => {
        // increase the price by the min amount of lovelace needed as a deposit
        output.setDatum(
            helios.Datum.inline(
                generatePublicSaleDatum(
                    changeAddress, 
                    price + output.value.lovelace
                )
            )
        );
    })    

    return await ((new helios.Tx())
        .addInputs(forSaleUtxos)
        .addOutput(output)
        .finalize(networkParams, changeAddress)
    )
}
```