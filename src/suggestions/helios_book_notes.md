# 2022/07/25 comments on Helios Book

## General Comments

Any top-level assignment should use `const`

Trailing semicolons are needed for top-level/impl const statements, but for expressions the semicolons (in combination with assignment or print!) always need to be followed by another expression, so it is incorrect to have trailing semicolons for expressions.

## Section 1

Disallowing trailing commas could be mentioned on the introductory page of the book as an example of our design principles (optimized for reader, one way of doing things)

## Section 2.1

### Subsection Type Annotiations

If the right-hand-side is a literal, then type annotation isn't necessary. (eg. list value: `listy = []Int{1,2,3}; ...` is allowed, instead of needing to write `listy: []Int = []Int{1,2,3}; ...` every time)

**Status**: Done

### Subsection Constants

Constants are statements and can technically use if-else as long as the if-else condition evaluates to something constant as well.

**Status**: Done

## Section 2.2

You can add the Option type. (eg. must be fully typed in code though: so Option[Int], and Option[Int]::Some/Option[Int]::None),

```go
// Construction of options: 
Option[Int]::Some::new(10), 
Option[Int]::None::new(), 

// Casting
x: Option[Int] = Option[Int]::None::new(); // implicit upcasting
y: Option[Int]::Some = Option[Int]::Some::cast(x) // will throw error internally
```

**Status**: Done

## Section 2.3

I'm assuming you will move this section to Section 4? Or `ScriptContext`, `Tx` etc. will be moved here?

**Note**: I think it would be better to have a short description for all BUiltin types so will just do this in that page.

**Status**: Done

## Section 2.4

### A note about recursion

Functions can only reference themselves.
There is no global hoisting of func and other statements like in javascript.
So there is no mutual recursion using func statements directly (can be achieved with callback functions passed as arguments though, but that is an advanced topic and doesn't need to be mentioned in early chapters of the book)

**Status**: Done

### Subsection lambda/anonymous functions

This is a good place to show the minimal 'type inference' offered by Helios. The right-hand function literal needs to be fully typed (i.e. (n: Int) -> Bool {...}), but the type annotation for the left-hand value can be omitted

**Status**: Done

## Section 2.4

Collatz sequence example: "even" should be 0, and I would remove the parentheses around `current/2` and `current*3 + 1`
(for `current*3+1` removing the parentheses is a nice demonstration of operator precedence)

**Status**: Done

## Section 2.5

### Switch subsection

No commas between cases. You can write that it's more like a C switch than a Rust match.

**Status**: Done

## Section 2.6

### Methods subsection

#### In the `add` function

There needs to be an expression after last semicolon, so eg. you could write `Rational{top: top, bottom: bottom}` after the semicolon.

**Status**: Done

## Section 2.6

### General comment

Expressions can't be top-level. They can be part of a main func instead (with a print statement and script purpose header so the examples can be runable by the reader).

**Note**: Unsure of what you mean.

### Method Subsection

rational_1.add(rational_2) actually become __user__Rational__add(rational_1)(rational_2), so rational_1.add returns a function which can be used just like any other value (or called immediately).

**Note**: Done

### Associated functions and constants subsection

Car or Rational? Also RANDOM_CONSTANTS could be `const PI = Rational{355, 113};`

**Note**: `Car` was my first idea but I changed it to `Rational`, will remove traces of `Car` sorry.
The `PI` makes a lot more sense.

**Status**: Done

## Section 2.7

### Comments Subsection

Helios also supports multiline comments `/* ... */`

**Note**: Cool, didn't those were there.

**Status**: Done

## Section 2.8

### Printing subsection

`print(...)` must be followed by a semicolon and another expression.
I also wouldn't say "Printing is horrible ...", I would say "Printing can be useful when debugging scripts, but should be avoided in production code as it increases the on-chain script size unnecessarily".

**Status**: Done

## Section 3.1

accounts model subsection: i could be wrong but i think people usually talk about an 'account-based model' and not 'accounts model'.
you can also compare an account-based model to conventional bankaccounts (the total amount is stored in a single data-point, and every currency requires another 'account' with another data-point).
utxos should be compared to (electronic)-cash, where every individual bill is stored separately.
transactions in the account-based model mutate the data-points storing the total amounts (very very very dangerous, regular banks have special insurances and paper backups of data in case mistakes happen, blockchains have no such systems), in the utxo-based model only the "bills" that participate in a given transaction can potentially be lost (so nothing catastrophic). of course utxo-based models can emulate account-based models and vice versa (by using a single utxo, or by using many accounts).

### Pros and Cons Subsection

I would rewrite "No gas fees" as "Fixed transaction fees" or "Fixed gas fees" (for me "transaction fees" and "gas fees" are synonyms).

### Pros and Cons Subsection _

I would write that it is easier to audit because you're only looking at the validation logic, and not at the whole transaction logic.

Section 3.1, pros and cons subsection: I would actually say that account-based model theoretically have more concurrency problems than UTXOs (because account totals are stored in a single data-point), but an account-based model can emulate a UTXO-based model by storing value in many different accounts/side-chains (eg. Ethereum sharding).

Section 3.1, general comment: it would be nice to describe where the "e" comes from in UTXO (Basically from the Datum which gives UTXOs some 'state'. With this state anything that an account-based model can do also be done with a eUTXO-based model.)

**Status**: Done

## Section 3.2

Datum always comes before Redeemer, and those types must always be named Datum and Redeemer (so DummyDatum or DummyRedeemer will be rejected by the compiler)
