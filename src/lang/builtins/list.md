# List

Helios linked-list type.

The syntax for a list type uses empty brackets followed by a type parameter: `[]ItemType`.

Example:
```helios
example: []Int = []Int{1, 2, 3, 4, 5}; ...
```

Looping over multiple lists at once can be done with a recursive function call:
```helios
func add_element_wise(a: []Int, b: []Int) -> []Int {
    if (a.is_empty()) {
        []Int{}
    } else {
        add_element_wise(a.tail, b.tail).prepend(a.head + b.head)
    }
}
```

## Associated functions

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

### `drop`

Drops list items counting from the beginning, returning the rest of the list. Throws an error if `n` is negative or larger than the length of the list.

```helios
list.drop(n: Int) -> []ItemType
```

### `drop_end`

Drops list items counting from the end, returning the non-dropped part of the list. Throws an error if `n` is negative or larger than the length of the list.

This method is more efficient than calling `list.take(list.length - n)` (if the list length isn't already known).

```helios
list.drop_end(n: Int) -> []ItemType
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

### `flatten`

Only defined for nested lists, i.e. `[][]NestedItemType`.

```helios
nested_list: [][]NestedItemType = ...;

nested_list.flatten() -> []NestedItemType
```

### `fold`

Folds a list into a single value by continuosly applying the binary function to the items of the list. The result type is a type parameter of this method: `ReducedType`.

```helios
list.fold[ReducedType: Any](
    reducer: (ReducedType, ItemType) -> ReducedType, 
    init: ReducedType
) -> ReducedType
```

### `fold_lazy`

Fold that allows breaking the loop before reaching the end of the list. Can also be used to fold from the last to the first entry of the list instead of the other way around.

```helios
list.fold_lazy[ReducedType: Any](
    reducer: (item: ItemType, next: () -> ReducedType) -> ReducedType,
    final: ReducedType
) -> ReducedType
```

### `for_each`

Print or assert something for each item. Returns void.

```helios
list.for_each(fn: (item: ItemType) -> ()) -> ()
```

### `get`

Returns the item at the given position in the list (0-based index). Throws an error if the index is out of range.

```helios
list.get(index: Int) -> ItemType
```

> **Note**: `get(n)` has to iterate until it encounters the `n`-th item, so this method is **O(n)** and **not** O(1).

### `get_singleton`

Asserts that the list contains precisely one item, and returns that item.

```helios
list.get_singleton() -> ItemType
```

### `is_empty`

Returns `true` if the list is empty.

```helios
list.is_empty() -> Bool
```

### `join`

Only defined for `[]String` and `[]ByteArray`. `join()` takes an optional separator (defaults to the empty `String` or the empty `ByteArray`).

```helios
string_list.join(separator: String = "") -> String

bytearray_list.join(separator: ByteArray = #) -> ByteArray
```

### `map`

Transforms each item of a list. The resulting list item type is a type parameter of this method: `NewItemType`.

```helios
list.map[NewItemType](mapper: (ItemType) -> NewItemType) -> []NewItemType
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

### `sum`

Only defined for `[]Int` and `[]Real`.

```helios
int_list.sum() -> Int
real_list.sum() -> Real
```

### `take`

Takes the first `n` items from the list. Throws an error if `n` is negative or larger than the length of the list.

```helios
list.take(n: Int) -> []ItemType
```

### `take_end`

Takes the last `n` items from the list. Throws an error if `n` is negative or larger than the length of the list.

This method is more efficient than calling `list.drop(list.length - n)` (if the list length isn't already known).

```helios
list.take_end(n: Int) -> []ItemType
```