The following example is the most trivial possible script.

## Example: `always_succeeds`

This basic script allows locked UTxOs to be spent any way the user wants:

```helios
spending always_succeeds

func main() -> Bool {
    true
}
```

Unused `main` arguments must be eliminated. In this case all three arguments of `main` function must be omitted (the compiler is smart enough to add them internally).