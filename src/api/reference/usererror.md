# `UserError`

Represents an error thrown when there is a mistake in a Helios source.

## Getters

### `context`

Filled with CBOR hex representations of `Datum`, `Redeemer` and `ScriptContext` by validation scripts throwing errors during [`tx.finalize()`](./tx.md#finalize); and `Redeemer` and `ScriptContext` by minting scripts throwing errors.

```ts
user_error.context: {
    Datum?: string,
    Redeemer?: string,
    ScriptContext?: string
}
```

### `message`

Gets the error message.

```ts
user_error.message: string
```