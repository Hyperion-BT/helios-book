# List

Helios linked-list type.

The syntax for a list type uses empty brackets followed by a type parameter: `[]ItemType`.

Example:
```helios
example: []Int = []Int{1, 2, 3, 4, 5}; ...
```

Looping over multiple lists at once can be done with a recursive function call:
```helios
func add_element_wise(a: []Int, b[]Int) -> []Int {
    if (a.is_empty()) {
        []Int{}
    } else {
        add_element_wise(a.tail, b.tail).prepend(a.head + b.head)
    }
}
```

## Associated Functions

### `from_data`

```helios
[]ItemType::from_data(data: Data) -> []ItemType
```

### `new`

Creates a new list of length `n`, where every contained item is determined by `fn(i: Int)` (`i` is the 0-based index of the item).

```helios
[]ItemType::new(n: Int, fn: (i: Int) -> ItemType) -> []ItemType
```

### `new_const`

Creates a new list of length `n`, where very contained item is the same.

```helios
[]ItemType::new_const(n: Int, item: ItemType) -> []ItemType
```

## Getters

### `length`

Returns the length of a list.

```helios
list.length -> Int
```

### `head`

Returns the first item in a list. Throws an error if the list is empty.

```helios
list.head -> ItemType
```

### `tail`

Returns the list items following the first item. Throws an error if the list is empty.

```helios
list.tail -> []ItemType
```

> **Note**: `tail` doesn't return the last item in a list but returns everything after `head` as a new list.

## Operators

### `==`

```helios
[]ItemType == []ItemType -> Bool
```

### `!=`

```helios
[]ItemType != []ItemType -> Bool
```

### `+`

List concatenation

```helios
[]ItemType + []ItemType -> []ItemType
```

## Methods

### `all`

Returns `true` if all of the items in the list satisfy the predicate.

```helios
list.all(predicate: (ItemType) -> Bool) -> Bool
```

### `any`

Returns `true` if any of the items in the list satisfy the predicate.

```helios
list.any(predicate: (ItemType) -> Bool) -> Bool
```

### `filter`

Returns a list of all the items in the old list that satisfy the predicate.

```helios
list.filter(predicate: (ItemType) -> Bool) -> []ItemType
```

### `find`

Returns the first item in the list that satisfies the predicate. Throws an error if no item satisfies the predicate.

```helios
list.find(predicate: (ItemType) -> Bool) -> ItemType
```

### `find_safe`

Returns the first item in the list that satisfies the predicate, wrapped in an [`Option`](./option.md). Returns a `Option[ItemType]::None` if no items match the predicate.

```helios
list.find_safe(predicate: (ItemType) -> Bool) -> Option[ItemType]
```

### `fold`

Folds a list into a single value by continuosly applying the binary function to the items of the list. The result type is a type parameter of this method: `ReducedType`.

```helios
list.fold(
    reducer: (ReducedType, ItemType) -> ReducedType, 
    init: ReducedType
) -> ReducedType
```

### `fold_lazy`

Fold that allows breaking the loop before reaching the end of the list. Can also be used to fold from the last to the first entry of the list instead of the other way around.

```helios
list.fold_lazy(
    reducer: (item: ItemType, next: () -> ReducedType) -> ReducedType,
    final: ReducedType
) -> ReducedType
```

### `get`

Returns the item at the given position in the list (0-based index). Throws an error if the index is out of range.

```helios
list.get(index: Int) -> ItemType
```

> **Note**: `get(n)` has to iterate until it encounters the `n`-th item, so this method is **O(n)** and **not** O(1).

### `is_empty`

Returns `true` if the list is empty.

```helios
list.is_empty() -> Bool
```

### `map`

Transforms each item of a list. The resulting list item type is a type parameter of this method: `NewItemType`.

```helios
list.map(mapper: (ItemType) -> NewItemType) -> []NewItemType
```

### `prepend`

Creates a new list by prepending an item to the old list.

```helios
list.prepend(item: ItemType) -> []ItemType
```

### `serialize`

```helios
list.serialize() -> ByteArray
```

### `sort`

Sorts the list using insertion sort.

```helios
list.sort((a: ItemType, b: ItemType) -> Bool) -> []ItemType
```