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