# `Tx`

Represents a cardano transaction. Can also be used a transaction builder.

## Constructor

Init a new transaction builder.

```ts
new helios.Tx()
```

## Static methods

### `fromCbor`

Deserialize a CBOR encoded Cardano transaction.

```ts
helios.Tx.fromCbor(bytes: number[]): helios.Tx
```

## Methods

### `addCollateral`

Add a [`UTxO`](./utxo.md) instance as collateral to the transaction being built. Usually adding only one collateral input is enough. The number of collateral inputs must be greater than 0 if script witnesses are used in the transaction, and must be less than the limit defined in the [`NetworkParams`](./networkparams.md).

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addCollateral(input: helios.TxInput): helios.Tx
```

### `addInput`

Add a [`UTxO`](./utxo.md) instance as an input to the transaction being built. Throws an error if the UTxO is locked at a script address but a redeemer isn't specified.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addInput(
    input: helios.UTxO,
    redeemer: ?(helios.UplcData | helios.UplcDataValue) = null
): helios.Tx
```

### `addInputs`

Add multiple [`UTxO`](./utxo.md) instances as inputs to the transaction being built. Throws an error if the UTxOs are locked at a script address but a redeemer isn't specified.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addInputs(
    inputs: helios.UTxO[],
    redeemer: ?(helios.UplcData | helios.UplcDataValue) = null
): helios.Tx
```

### `addMetadata`

Add metadata to a transaction. Metadata can be used to store data on-chain, but can't be consumed by validator scripts. Metadata can for example be used for [CIP 25](https://cips.cardano.org/cips/cip25/). 

```ts
tx.addMetadata(
    tag: number, // whole number
    metadata: Metadata
)
```

The `Metadata` type is an alias for the following JSON schema:
```ts
@typedef {
  string |
  number | // whole numbers only
  Metadata[] | 
  {map: [Metadata, Metadata][]} // a map is implemented as a list of pairs because order needs to be respected
} Metadata
```

### `addOutput`

Add a [`TxOutput`](./txoutput.md) instance to the transaction being built.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addOutput(output: helios.TxOutput): helios.Tx
```

### `addOutputs`

Add multiple [`TxOutput`](./txoutput.md) instances at once.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addOutputs(outputs: helios.TxOutput[]): helios.Tx
```

### `addRefInput`

Add a [`TxRefInput`](./txrefinput.md) instance as a reference input to the transaction being built. An associated reference script, as a [`UplcProgram`](./uplcprogram.md) instance, must also be included in the transaction at this point (so the that the execution budget can be calculated correctly).

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addRefInput(
    input: helios.TxRefInput
    refScript: ?helios.UplcProgram = null
): helios.Tx
```

### `addRefInputs`

Add multiple [`TxRefInput`](./txrefinput.md) instances as reference inputs to the transaction being built.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addRefInputs(inputs: helios.TxRefInput[]): helios.Tx
```

### `addSignature`

Add a signature created by a wallet. Only available after the transaction has been finalized. Optionally verify that the signature is correct.

```ts
tx.addSignature(
    signature: helios.Signature,
    verify: boolean = true
): helios.Tx
```

### `addSignatures`

Add multiple signatures at once. Only available after the transaction has been finalized. Optionally verify correctness (could be slow for many signatures).

```ts
tx.addSignatures(
    signatures: helios.Signature[],
    verify: boolean = true
): helios.Tx
```

### `addSigner`

Add a signatory [`PubKeyHash`](./pubkeyhash.md) to the transaction being built. The added entry becomes available in the [`tx.signatories`](../../lang/builtins/tx.md#signatories) field in the Helios script.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.addSigner(hash: helios.PubKeyHash): helios.Tx
```

### `attachScript`

Attach a script witness to the transaction being built. The script witness is a [`UplcProgram`](./uplcprogram.md) instance and can be created by compiling a Helios [`Program`](./program.md).

Throws an error if script has already been added. Throws an error if the script isn't used upon finalization.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.attachScript(script: helios.UplcProgram): helios.Tx
```

### `finalize`

Executes all the attached scripts with appropriate redeemers and calculates execution budgets. Balances the transaction, and optionally uses some spare UTxOs if the current inputs don't contain enough lovelace to cover the fees and min output deposits.

Inputs, minted assets, and withdrawals are sorted.

```ts
tx.finalize(
    networkParams: helios.NetworkParams,
    changeAddress: helios.Address,
    spareUtxos:    helios.UTxO[]
): Promise<Tx>
```

### `mintTokens`

Mint a list of tokens associated with a given [`MintingPolicyHash`](./mintingpolicyhash.md). Throws an error if the given [`MintingPolicyHash`](./mintingpolicyhash.md) was already used in a previous call to `mintTokens`. The token names can either by a list of bytes or a hexadecimal string.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.mintTokens(
    mph: helios.MintingPolicyHash,
    tokens: [number[] | string, bigint][],
    redeemer: helios.UplcData | helios.UplcDataValue
): helios.Tx
```

### `toCbor`

Serialize a transaction.

```ts
tx.toCbor(): number[]
```

### `validFrom`

Set the start of the valid time range.

Mutates the transaction. Only available when building the transaction. Returns the transaction instance so build methods can be chained.

```ts
tx.validFrom(time: Date): helios.Tx
```

### `validTo`

Set the end of the valid time range. Mutates the transaction. Only available when building a transaction.

Returns the transaction instance so build methods can be chained.

```ts
tx.validTo(time: Date): helios.Tx
```