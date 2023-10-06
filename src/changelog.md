# Changelog

This page documents breaking changes and major features of major version releases

## v0.14

### Language
* support for [generics](./lang/generics.md) added
* support for variable arguments in `main` removed
* [`const`](./lang/variables.md#const-without-right-hand-side) statements now have mandatory type annotation, but optional value
* [mutual recursion](./lang/user-defined-types/methods/index.md) possible within [`struct`](./lang/user-defined-types/structs.md) and [`enum`](./lang/user-defined-types/enums.md) scopes
* three builtin typeclasses added: [`Any`](./lang/builtins/any.md), [`<empty>`](./lang/generics.md#type-classes), and [`Valuable`](./lang/builtins/valuable.md)

### API
* `program.parameters` accepts namespaced `const` names
* `program.parameters` acceps names prefixed with `?` to avoid errors if parameter doesn't exist

## v0.13

### Language
* [`copy`](./lang/user-defined-types/methods/automatic-methods.md#copy) automatically defined on user structs and enum-variants
* variable arguments in `main` deprecated
* function [optional arguments](./lang/functions/optional_arguments.md) with default values
* function calls with [named arguments](./lang/functions/named_arguments.md)

### API
* `helios.Int` renamed to `helios.HInt`
* `helios.HeliosString` renamed to `helios.HString`
* `helios.HeliosMap` renamed to `helios.HMap`
* `helios.List` renamed to `helios.HList`
* `program.changeParam()` deprecated