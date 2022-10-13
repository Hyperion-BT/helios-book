# Simple NFT

NFTs (Non-Fungible tokens) are simply tokens with a quantity of 1.
To make an NFT the minting policy must make sure that it can only be used once and that only one token can ever be minted.
The **Token Name** for the NFT in this example will be called `example_nft`.

There are two ways to do this on Cardano:

- Deadline-based Approach
- UTXO-based Approach

## Deadline-based Approach

NFTs were available on Cardano before smart contracts (Mary Hardfork) and they were implemented using deadlines.
The main idea is that the token can only be minted before a deadline which already passed.
This ensures no new tokens will ever be minted.
This is very easy to implement:

```helios
minting deadline_nft

const DEADLINE: Time = Time::new(1661665196132) // milliseconds since 1970


func main(ctx: ScriptContext) -> Bool {
	tx: Tx = ctx.tx;

    nft_assetclass: AssetClass = AssetClass::new(
		ctx.get_current_minting_policy_hash(), 
		"example-nft".encode_utf8()
	);

    value_minted: Value = tx.minted;

    value_minted == Value::new(nft_assetclass, 1) && tx.time_range.start < DEADLINE
}
```

## UTXO-Based Approach

This method is based on an [example](https://plutus-pioneer-program.readthedocs.io/en/latest/pioneer/week5.html) in the Plutus Pioneer Program.
This approach takes advantage of the fact that all UTXOs have a unique `TxOutputId`.
A UTXO's `TxOutputId` is made up of the transaction hash of the transaction that made the UTXO and the index of the UTXO in the outputs of that transaction.
It's a builtin type that is defined as:

```helios
struct TxOutputId {
    tx_id: TxId
    index: Int
}
```

So with this approach, we specify in the minting policy that the transaction minting the NFT must spend a UTXO with a specific **Output ID**.
Since a UTXO can only be spent once this means the token can only be minted once.

```helios
minting utxo_nft

const OUTPUT_ID: TxOutputId = TxOutputId::new(TxId::new(#1213), 1)

func main(ctx: ScriptContext) -> Bool {
	tx: Tx = ctx.tx;

    nft_assetclass: AssetClass = AssetClass::new(
		ctx.get_current_minting_policy(), 
		"example-nft".encode_utf8()
	);

    value_minted: Value = tx.minted;

    value_minted == Value::new(nft_assetclass, 1) && 
    tx.inputs
        .any((input: TxInput) -> Bool {input.output_id == OUTPUT_ID})

}
```
