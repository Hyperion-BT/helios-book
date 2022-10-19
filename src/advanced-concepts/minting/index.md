# Minting native assets

One of Cardano's best features is supporting **native multi-assets**. These are user-created tokens on Cardano that  have the same treatment as the native coin (Ada).

This might not seem like a big deal but this offers serious advantages over Ethereum tokens (ERC-20 and ERC-721). But to understand the benefits you have to understand how user-defined tokens work on non-UTxO blockchains.

## ERC-20 Standard

On Ethereum, tokens are defined using the [ERC-20 standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/). In this standard tokens are managed by a contract that stores all of the token's metadata and all user balances in a `mapping` (hashmap) called `_balances`. All transfers of an ERC-20 token are function calls to the contract to modify the `_balances`.

Any error in the implementation of the ERC-20 standard can lead to the loss of user funds.

## UTxO Native Assets

On Cardano and other eUTxO blockchains user-defined tokens are *first-class*. Tokens on Cardano are stored in **token bundles** which can contain Ada and any native asset. This allows Cardano to do in one transaction what would normally take multiple contract calls on Ethereum.

>**Note**: A **token bundle** must always contain a minimum amount of Ada.

### Minting Policies

Minting policies are a lot like spending scripts. These policies validate attempts to mint or burn a tokens of that policy.

There are a few key differences wrt. spending scripts:

- Minting policies are not directly linked to any UTxO they are included in the minting transaction directly.
- Minting policies take two arguments (the `ScriptContext` and the `Redeemer`), they have no input UTxO and therefore no Datum.

### AssetClass

Native assets are identified by their `AssetClass` this is a combination of:

- a **`MintingPolicyHash`**: the hash of the minting policy of the token. Sometimes referred to as the CurrencySymbol or the PolicyID.

- a **token name**: this is used to distinguish different assets within the same policy (e.g. multiple NFTs using the same minting policy)

> **Note**: The `MintingPolicyHash` of ADA is an empty `ByteArray` (`#`). Since nothing can hash to an empty string Ada is the only token that can't be minted/burned using a minting policy.
