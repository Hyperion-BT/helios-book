# Print

For debugging purposes, Helios has a special `print` expression. `print(...)` takes a [`String`](./builtins/string.md) argument, and must be followed by a semicolon and another expression:

```helios
func main() -> Bool {
	print("Hello world");
	true
}
```

>**Note**: Print expressions are useful when debugging scripts. They are however eliminated by the compiler when compiling scripts optimized for production.