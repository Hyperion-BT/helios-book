# `UplcProgram`

Result of [`program.compile()`](./program.md#compile). Contains the Untyped Plutus-Core AST, along with a code-mapping to the original source.

## Getters

### `validatorHash`

Returns the [`ValidatorHash`](./validatorhash.md) of the script. Throws an error if this isn't a spending validator script.

```ts
uplc_program.validatorHash: helios.ValidatorHash
```

### `mintingPolicyHash`

Returns the [`MintingPolicyHash`](./mintingpolicyhash.md) of the script. Throws an error if this isn't a minting policy.

```ts
uplc_program.mintingPolicyHash: helios.MintingPolicyHash
```

## Methods

### `apply`

Wrap the top-level term with consecutive `UplcCall` (not exported) terms.

Returns a new `UplcProgram` instance, leaving the original untouched.

```ts
uplc_program.apply(args: helios.UplcValue[]): helios.UplcProgram
```

### `profile`

Runs and profiles a `UplcProgram`. Needs the [`NetworkParams`](./networkparams.md) in order to calculate the execution budget.

```ts
uplc_program.profile(
    args: helios.UplcValue[],
    networkParams: helios.NetworkParams
): Promise<{
    mem: bigint,
    cpu: bigint,
    size: number,
    res: helios.UplcValue | helios.UserError
}>
```
### `runWithPrint`

Run a `UplcProgram`. The printed messages are part of the return value.

```ts
uplc_program.runWithPrint(args: helios.UplcValue[]): 
    Promise<[helios.UplcValue | helios.UserError, string[]]>
```

### `serialize`

Serialize a `UplcProgram` using flat encoding. Returns the JSON representation of the program (needed by *cardano-cli*).

```ts
uplc_program.serialize(): string
```

### `serializeBytes`

Serialize a `UplcProgram` using flat encoding. Returns a list of bytes.

```ts
uplc_program.serializeBytes(): number[]
```