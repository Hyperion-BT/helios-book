# Comments

Helios comments are C-like. 

## Single-line comments

Single-line comments use two forward slashes (`//`):

```helios
spending always_succeeds

func main(_, _, _) -> Bool {
	// This is a comment.
	true
}
```

## Multi-line and inline comments

Multi-line and inline comments use `/* ... */`:

```helios
spending always_succeeds

func main(_, _, _ /* inline comment */) -> Bool {
	/*
		This is a multi-line comment.
	*/
	true
}
```

