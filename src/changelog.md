# Changelog

This page documents breaking changes and major features of major version releases

## v0.13

### Language
* [`copy`](./lang/automatic-methods.md#copy) automatically defined on user structs and enum-variants
* variable arguments in `main` deprecated
* function [optional arguments](./lang/functions/optional_arguments.md) with default values
* function calls with [named arguments](./lang/functions/named_arguments.md)

### API
* `helios.Int` renamed to `helios.HInt`
* `helios.HeliosString` renamed to `helios.HString`
* `helios.HeliosMap` renamed to `helios.HMap`
* `helios.List` renamed to `helios.HList`
* `program.changeParam()` deprecated