# Native Assets

One of Cardano's best features is **Native Multi-Asset(NMA)**.
It's a bit of a mouthful but what this means is that on Cardano
user-defined tokens have the same treatment as the native coin (ADA).

This might not seem like a big deal but this offers serious advantages
over Ethereum tokens (ERC-20 and ERC-721). But to understand the benefits
you have to understand how user-defined tokens work on non-UTXO blockchains.

## ERC-20 Standard

On Ethereum, tokens are defined using the [ERC-20 standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/).
In this standard tokens are managed by a contract that stores all of the token's metadata
and all user balances in a `mapping` (hashmap) called `_balances`.
All transfers of an ERC-20 token are function calls to the contract to modify the `_balances`.

Any error in the implementation of the ERC-20 standard can lead to the loss of user funds.

## UTXO Native Assets

On Cardano and other eUTXO blockchains user-defined tokens are *first-class*.
Tokens on Cardano are stored in **Token Bundles** which can contain
ADA and any native asset.
This allows Cardano to do in one transaction what would normally take multiple
contract calls on Ethereum.

>**Note**: A **Token Bundle** must contain a minimum amount of ADA
> at the time of this writing this is 1 ADA.

### Minting Policies

Minting policies are a lot like validator scripts, they run when a transaction
attempts to mint a token and return a boolean that determines whether the minting is valid.

There are a few key differences:

- Minting policies are not directly linked to any UTXO
  they are included in the minting transaction directly.
- Minting policies take two arguments (the `ScriptContext` and the `Redeemer`)
  they have no UTXO and therefore no Datum and don't need
  a Redeemer.

### AssetClass

Native assets are identified by their `AssetClass` this is a combination of:

- **It's `MintingPolicyHash`**
  This is simply the hash of the minting policy of the token.
  It is sometimes called the CurrencySymbol or Policy ID.

- **It's `TokenName`**
  This is an (immutable) property of an asset that is used to distinguish different assets within the same policy.

```rust, noplaypen
// ADA's assetclass
AssetClass::ADA;

// Instantiating an AssetClass 
AssetClass::new(policy_hash: ByteArray, token_name: ByteArray);
```

>**Note:** The MintingPolicyHash of ADA is an empty string (`""`) since nothing can hash
>to an empty string ADA is the only token that can't be minted using a minting policy.
