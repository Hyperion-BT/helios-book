# Branching

Helios has conventional `if-else` syntax for branching:

```helios
if (tag == 0) {
    23
} else if (tag == 1) {
    42
} else {
	0
}
```

The last expression in each branch block is implicitly returned (much like Rust). 

<br/>

The following is valid syntax:

```helios
x: Int = 
	if (true) {
		42
	} else {
		24
	}; ...
```
