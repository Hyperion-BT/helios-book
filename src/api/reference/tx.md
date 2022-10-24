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

## Getters