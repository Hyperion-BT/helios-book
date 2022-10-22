# `Assets`

Represents a list of tokens. An `Assets` instance is used as the second argument of the [`Value`](./value.md) constructor (the first argument is the number of lovelace).

## Constructor

The `Assets` contructor takes one argument: a list of pairs. 

The first item of each pair is a `MintingPolicyHash`, the second item of each pair is another list of pairs of token name bytes and token quantities.

```ts
new helios.Assets(assets: [
    helios.MintingPolicyHash,
    [number[], bigint][]
][])
```

## Getters

### `mintingPolicies`

Returns a list of all the minting policies (as a list of `MintingPolicyHash`es).

```ts
assets.mintingPolicies: helios.MintingPolicyHash[]
```