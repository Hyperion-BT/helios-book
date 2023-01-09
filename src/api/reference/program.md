# `Program`

Represents a Helios program containing a `main` function.

This is the principal API class with which users of the library interact.

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

### `parameters`

Returns an object containing all the evaluated parameters.

```ts
program.parameters: {[paramName: string]: helios.HeliosData}
```

`HeliosData` is the abstract parent class of many Helios API types that have Helios language equivalents.

### `types`

Returns an object containing Javascript contructors for the user-defined types in the main script (including those imported into the main script).

```ts
program.types: {[typeName: string]: {new(...any) => helios.HeliosData}}
```

Instantiating these constructors creates objects with `HeliosData` as a parent type.

## Setters

### `parameters`

Parameters can be set using the `parameters` setter. Parameters are [`const` statements](../../lang/variables.html#const-statements) that are visible in the main Helios script. In many cases a Javascript value can be used directly (i.e. JSON-like).

```ts
program.parameters = {MY_PARAM: my_param, ...} as {[name: string]: helios.HeliosData | any}
```

Primitive Javascript values can also be used as a rhs when setting parameters like this. Helios will intelligently convert these in the necessary `HeliosData` instances.

## Methods

### `changeParam`

As an alternative for the [`parameters` setter](./program.md#parameters-1), change the value of a [`const` statement](../../lang/variables.html#const-statements) visible in the main Helios script, using either a JSON string or a `UplcValue` instance.

`UplcValue` instances can be generated using the `evalParam` method.

Mutates this program, and returns this program so that other `changeParam` calls can be chained.

```ts
program.changeParam(
    paramName: string, 
    value: string | helios.UplcValue
): helios.Program
```

### `compile`

Compiles a Helios program, with optional optimization. Returns a [`UplcProgram`](./uplcprogram.md) instance.

```ts
program.compile(simplify: boolean = false): helios.UplcProgram
```

### `evalParam`

Eval the rhs of a `const` statement, and return the result as a `UplcValue`.

```ts
program.evalParam(paramName: string): helios.UplcValue
```
