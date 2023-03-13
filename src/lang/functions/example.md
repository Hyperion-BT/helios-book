The following is a more involved example of a function in Helios.


# Example: Collatz sequence

One of my favorite things in maths is the Collatz sequence. A Collatz sequence starts with a given number, `n`, and calculates the next number in the sequence using the following rules:

   1. if `n == 1` the sequence ends
   2. if `n` is even the next number is `n / 2`
   3. if `n` is odd the next number is `(n * 3) + 1`

Curiously the Collatz sequence always converges to `1`, regardless the starting number.

The following function generates the Collatz sequence as a (reversed) list of integers:

```helios
// eg. collatz(10, []Int{}) == []Int{10, 5, 16, 8, 4, 2, 1}
func collatz(n: Int, sequence: []Int) -> []Int {
	updated_sequence: []Int = sequence.prepend(n);

    // Rule (1)
    if (n == 1) {
		updated_sequence

    // Rule (2)
    } else if (n % 2 == 0) {
        collatz(n / 2, updated_sequence)

    // Rule (3)
    } else {
        collatz(n * 3 + 1, updated_sequence)
    }
}
```
