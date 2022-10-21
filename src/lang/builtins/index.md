# Builtins

This section contains a reference of all the Helios builtins.

## Primitive types

  * [Int](./int.md)
  * [Bool](./bool.md)
  * [ByteArray](./bytearray.md)
  * [String](./string.md)

## Container types

  * [List](./list.md)
  * [Map](./map.md)
  * [Option](./option.md)

## Time types

  * [Time](./time.md)
  * [Duration](./duration.md) (i.e. the difference of two `Time`s)
  * [TimeRange](./timerange.md) (i.e. a period bound by two `Time`s)

## Hash types

These are type-safe wrappers for `ByteArray`:
  * [PubKeyHash](./pubkeyhash.md)
  * [ValidatorHash](./validatorhash.md)
  * [MintingPolicyHash](./mintingpolicyhash.md)
  * [DatumHash](./datumhash.md)

## Money types

  * [AssetClass](./assetclass.md) (i.e. the kind of 'currency')
  * [Value](./value.md)

## Transaction types

The following types are related to `ScriptContext`:

  * [ScriptContext](./scriptcontext.md)
  * [ScriptPurpose](./scriptpurpose.md)
  * [Tx](./tx.md)
  * [TxId](./txid.md)
  * [TxInput](./txinput.md)
  * [TxOutput](./txoutput.md)
  * [OutputDatum](./outputdatum.md)
  * [TxOutputId](./txoutputid.md)
  * [Address](./address.md)
  * [Credential](./credential.md)
  * [StakingCredential](./stakingcredential.md)
  * [StakingPurpose](./stakingpurpose.md)
  * [DCert](./dcert.md)
