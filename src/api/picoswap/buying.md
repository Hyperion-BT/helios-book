# Buying for-sale assets

Anyone can buy the assets locked in the script by sending the price `Value` to the seller.

The following function creates the *buy* transaction:

```js
/**
 * @param {Contract} contract - instantiated elsewhere
 * @returns {Promise<helios.Tx>} - finalized but unsigned transaction
 */
async function buyTx(contract) {
    const uplcProgram = helios.Program.new(mainScript).compile(true)

    const paymentUtxos = /* code that picks the utxos used for payment */
    const changeAddress = /* code that picks the change address */
    
    return await ((new helios,Tx())
        .addInputs(paymentUtxos)
        .addInputs(contract.utxos, new helios.IntData(42n)) // dummy redeemer
        .attachScript(uplcProgram)
        .addOutput(new helios.TxOutput( // send 'price' to seller
            contract.sellerAddress,
            contract.price,
            helios.Datum.hashed(new helios.IntData(contract.nonce)) // nonce that protects agains double satisfaction exploit
        ))
        .addOutputs(contract.utxos.map( // send for-sale assets to buyer
            // preserve the number of UTxOs
            utxo => new helios.TxOutput(changeAddress, utxo.value)
        ))
        .addCollateral(/* code that picks collateral UTxOs */)
        .finalize(networkParams, changeAddress)
    )
}
```