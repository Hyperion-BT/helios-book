The following example is the most trivial possible script.

## Example: `always_succeeds`

This basic script allows locked UTxOs to be spent any way the user wants:

```helios
spending always_succeeds

func main(_, _, _) -> Bool {
    true
}
```

You must use an underscore (`_`) for unused arguments. In this case all three arguments of `main` are ignored by using an underscore.