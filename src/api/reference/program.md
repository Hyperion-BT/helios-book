# `Program`

Represents a Helios program containing a `main` function.

This is the principal with which users of the Helios library interact.

## Constructor

The constructor isn't intended for direct use. The `new` static method should be used instead:

```ts
helios.Program.new(
    mainSrc: string, 
    moduleSrcs: string[] = []
): helios.Program
```

The 1st argument here is the source of the entrypoint of the program. The 2nd argument here is optional, and is a list of the sources of modules that can be import by the entrypoint source.

## Getters

### `name`

Get the name of the script (contained in the [header of the script](../../lang/script-structure.md#script-purpose-1)).

```ts
program.name: string
```

### `paramTypes`

Returns a mapping of top-level `const` names to `const` types.

```ts
program.paramTypes: Object.<string, helios.Type>
```

## Methods

### `changeParam`

Change the value of `const` statement, using either a JSON string or a `UplcValue` instance.

`UplcValue` instances can be generated using the `evalParam` method.

Mutates this program, and returns this program so that other `changeParam` calls can be chained.

```ts
program.changeParam(
    paramName: string, 
    value: string | helios.UplcValue
): helios.Program
```

### `compile`

Compiles a Helios program, with optional optimization.

```ts
program.compile(simplify: boolean = false)
```

### `evalParam`

Eval the rhs of a `const` statement, and return the result as a `UplcValue`.

```ts
program.evalParam(paramName: string): helios.UplcValue
```