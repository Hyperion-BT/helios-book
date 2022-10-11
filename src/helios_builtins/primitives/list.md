# List (`[]a`)

Helios linked-list type.

```helios
example: []Int = []Int{1, 2, 3, 4, 5}; ...
```


## Associated Functions

```helios
func from_data(data: Data) -> []a

func new(n: Int, fn: (Int) -> a) -> []a

func new_const(n: Int, item: a) -> []a
```

## Operators

```helios
[]a == []a -> Bool
[]a != []a -> Bool

// @notice List concatenation
[]a +  []a -> []a

```

## Getters

```helios
// @returns The length of the list.
length: Int

// @returns The element at the front of the list
// @notice Throws an error if the list is empty.
head: a

// @returns The element at the end of the list.
// @notice Throws an error if the list is empty.
tail: []a
```

## Methods

```helios
func serialize(self) -> ByteArray

// @returns 'true' if the list is empty.
func is_empty(self) -> Bool

// @returns The element the index in the list.
// @notice Throws an error if the list is too short.
func get(self, index: Int) -> a

// @returns A new list with the item prepended at the front of the list.
func prepend(self, item: a) -> []a

// @return 'true' if any of the items in the list satisfy the predicate.
func any(self, predicate: (a) -> Bool) -> Bool

// @return 'true' if all of the items in the list satisfy the predicate.
func all(self, predicate: (a) -> Bool) -> Bool

// @return The first element in the list that satisfies the predicate.
// @notice Throws an error is no element satisfies the predicate.
func find(self, predicate: (a) -> Bool) -> a

// @returns A list of all the elements in the list that satisfy the predicate.
func filter(self, predicate: (a) -> Bool) -> []a

// @returns Folds a list into a single value by continuosly applying the binary
//         function to the elements of the list.
func fold(self, reducer: (b, a) -> b, init: b) -> b

// @returns The original list list with the transformation function called on
//          all it's elements.
func map(self, mapper: (a) -> b) -> []b
```
