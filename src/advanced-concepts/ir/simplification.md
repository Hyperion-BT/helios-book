# IR simplication

Simplification of a compiled program is done at the IR level because it provides more context.

Simplification consists of the following steps:
1. Evaluation of constants
2. Simplify literals
  * Inline literals
  * Evaluate core calls with only literal args
3. Simplify topology
  * Count all references
  * Inline definitions
  * Remove unused definitions
  * Combine nested functions 
  * Eliminate cast/uncast function call combinations

## Evaluation of constants

This is step is always performed (i.e. regardless of the value of `simplify` when calling [`compile()`](../../api/reference/program.md#compile)).

This step starts at the root of the syntax tree by calling `evalConstants()`, which is called recursively until `IRConstExpr` instances are found. A `IRCallStack` is filled with definitions in the process. `IRConstExpr` calls `eval()` recursively instead.

Note that all definitions must be added as deferred `IRValue` instances to the stack by `IRAnonCallExpr`, as they might be needed by inner `IRConstExpr` instances.

## Simplify literals

Next we inline all literal arguments defined in higher scopes. Any `IRCoreCallExpr` instances with only literal arguments are also evaluated.

A single method is defined on `IRExpr` for this step: `simplifyLiterals(map: Map<IRVariable, IRLiteralExpr>)`. The literals arguments of `IRCallExpr` must be simplified before the algorithm goes deeper in the AST. The literal arguments of `IRAnonCallExpr` are the ones that are inserted in the map passed to `simplifyLiterals`.

Many builtin functions (e.g. `ifThenElse`) can already be simplified if only some of the args are literals.

## Simplify topology

Before starting this step, all references of each `IRVariable` must be registered.

### Inline definitions

Care needs to be taken not to inline wherever there is recursion (i.e. loops).

Note: `IRNameExpr` instances can always be inlined.

### Remove unused definitions

This is done inside `IRAnonCallExpr` instances.

### Combine nested functions functions

```
(outer) -> {
  (inner) -> {
    ...
  }
}(a)(b)
```

Should be simplified to:
```
(outer, inner) -> {
  ...
}(a, b)
```

This is done inside `IRNestedAnonCallExpr` instances.