# Minting

Tokens can be minted using the `mintTokens` method. The `UplcProgram` of the corresponding minting policy must also be attached:

```js
tx
    .mintTokens(
        uplcProgram.mintingPolicyHash, 
        [["my_first_nft", 1n], ["my_second_nft", 1n]], 
        redeemerData // can be generated using program.evalParam("...").data
    )
    .attachScript(uplcProgram)
```

> **Note**: the transaction building methods can be chained.