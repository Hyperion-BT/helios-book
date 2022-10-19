# Canceling a sale

A seller can cancel a sale before it is fulfilled.

The following function creates the *cancel* transaction:

```js
/**
 * @param {Contract} contract - instantiated elsewhere
 * @returns {Promise<helios.Tx>} - finalized but unsigned transaction
 */
async function cancelSaleTx(contract) {
    const uplcProgram = helios.Program.new(mainScript).compile(true)

    const feeUtxos = /* code that picks the utxos with which the tx fee will be paid */
    const changeAddress = /* code that picks the change address */

    // we must add the seller as an explicit signer, some collateral and attach the script
    return await ((new helios.Tx())
        .addInputs(feeUtxos)
        .addInputs(contract.utxos, new helios.IntData(42n)) // dummy redeemer
        // send all the contract utxos back to the seller (i.e. back to the changeAddress)
        .addOutputs(contract.utxos.map(utxo => new helios.TxOutput( 
            changeAddress, utxo.origOutput.value
        )))
        .addSigner(contract.seller)
        .addCollateral(feeUtxos[0]) // assume one of the feeUtxos is big enough to be used as collateral
        .attachScript(uplcProgram)
        .finalize(networkParams, changeAddress)
    )
}
```