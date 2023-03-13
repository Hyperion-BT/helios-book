# Unused arguments

All named function arguments must be used in the function definition. This can be inconvenient when defining callbacks where you want to ignore some of the arguments. For this situation you can use an underscore (`_`):

```helios
// sort a map by only comparing the keys
map.sort((a_key: ByteArray, _, b_key: ByteArray, _) -> Bool {
    a_key < b_key
})
```

Underscores are most commonly used to ignore either the datum, redeemer, or the `ScriptContext`, in the `main` function of a validator script.