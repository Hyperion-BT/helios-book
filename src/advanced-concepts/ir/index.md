# Intermediate representation

Helios scripts aren't compiled directly to UPLC. Rather they are compiled into an Intermediate Representation (IR). This section describes the components of the IR and how the simplification process works. This can be useful information for auditors of the Helios code-base.

The Helios IR is a typeless variant of Helios, where high-level syntactic constructs have been replaced by low-level equivalents (represented a class hierarchy with `IRExpr` as a base class):

* `IRNameExpr`
* `IRLiteralExpr`
* `IRConstExpr`
* `IRFuncExpr`
* `IRCallExpr`
  * `IRCoreCallExpr`
  * `IRUserCallExpr`
    * `IRAnonCallExpr`
      * `IRFuncDefExpr`
    * `IRNestedAnonCallExpr`
* `IRErrorCallExpr`

The remaining part of this page describes the IR syntax.

## `IRNameExpr`

Any word matching of the regular expression `[_a-zA-Z][_a-zA-Z0-9]*`, except the following keywords: `const`, `error`, `true`, `false`.

## `IRLiteralExpr`

* `true` or `false` for a literal `Bool`
* `##[0-9a-f]*` for literal `Data`
* `#[0-9a-f]*` for a literal `ByteArray`
* `".*"` for a literal `String`
* `[0-9]+` for a literal `Int`

## `IRConstExpr`

Emitted by Helios `const` statements.

```
const(<expr>)
```

## `IRFuncExpr`

```
(<arg-name>, <arg-name>, ...) -> {
    <body-expr>
}
```

## `IRCallExpr`

### `IRCoreCallExpr`

```
__core__<builtin-name>(<arg-expr>, <arg-expr>, ...)
```

### `IRUserCallExpr`

```
<expr>(<arg-expr>, <arg-expr>, ...)
```

### `IRAnonCallExpr`

```
(<arg-name>, <arg-name>, ...) -> {
    <body-expr>
}(<arg-expr>, <arg-expr>, ...)
```

### `IRNestedAnonCallExpr`

```
(<arg-name>, <arg-name>, ...) -> {
    <body-expr>
}(<arg-expr>, <arg-expr>, ...)(<call-arg-expr>, ...)
```

### `IRFuncDefExpr`

```
(<fn-name>) -> {
    <rest-expr>
}(
    (<arg-name>, <arg-name>, ...) -> {
        <body-expr>
    }
)
```

## `IRErrorCallExpr`

```
error(".*")
```