# Global constants and variables

## Constants

### `VERSION`

Current version of the Helios library.

```ts
helios.VERSION: string
```

## Variables

Modifiable through the `config` object.

### `DEBUG`

Currently unused by the library itself. Defaults to `false`.

```ts
helios.config.DEBUG: boolean = false
```

### `IS_TESTNET`

If `true`, [`Address`](./address.md)es are built for testnet by default, otherwise for mainnet. Defaults to `true`.

```ts
helios.config.IS_TESTNET: boolean = true
```

### `STRICT_BABBAGE`

If `true`, serializes [`TxOutput`](./txoutput.md) using strictly the Babagge cddl format. Defaults to `false`.

```ts
helios.config.STRICT_BABBAGE: boolean = false
```

### `N_DUMMY_INPUTS`

Calculating the execution budget during [Tx finalization](./tx.md#finalize) requires knowing all the inputs beforehand. This is however very difficult because balancing is done after the execution budget is calculated.

Helios uses `1` or `2` dummy inputs as placeholders for the balancing input(s). This avoids the difficulty of figuring out the final balancing input(s) before knowing the transaction fee, but slightly overestimates the execution budget.

The 1st dummy input has [`TxId`](./txid.md)`=#0000...`, which overestimates any operation that iterates over [`tx.inputs`](../../lang/builtins/tx.md#inputs).

The 2nd optional dummy input has [`TxId`](./txid.md)`=#ffff...`, which overestimates any operation that prints the [`TxId`](../../lang/builtins/txid.md#show) of the entries in [`tx.inputs`](../../lang/builtins/tx).

An error is thrown if `N_DUMMY_INPUTS` isn't `1` or `2`. `N_DUMMY_INPUTS` defaults to `2` (more robust, but more overestimation of the tx fee).

```ts
helios.config.N_DUMMY_INPUTS: number = 2
```