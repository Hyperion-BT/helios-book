# Using *helios-cli*

## Compiling

```bash
$ helios compile my_script.hl -o my_script.json
```

Optimization can be switched on using the `--optimize` (or `-O`) flag:
```bash
$ helios compile my_script.hl --optimize -o my_script.json
```

*helios-cli* automatically searches for [modules](../lang/modules.md) in the current directory. Other directories can be included using the `-I` option:
```bash
$ helios compile my_script.hl -I ./my_modules/ -o my_script.json
```

## Evaluating a parameter

```bash
$ helios eval my_script.hl MY_PARAM
```

Similar to the `compile` command, additional module directories can be included using `-I`.

## Calculating a script address

*helios-cli* can calculate the address of a compiled script:
```bash
$ helios address my_script.json
```

For mainnet address the `--mainnet` (or `-m`) flag must be used:
```bash
$ helios address my_script --mainnet
```