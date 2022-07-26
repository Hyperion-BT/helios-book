@Rorshach3301 section 2.1, subsection Type Annotiations: if the right-hand-side is a literal type annotation isn't necessary. I'm also thinking of making it so that builtin constructors also don't need type annotations when assigning 
Section 3.2: Datum always comes before Redeemer, and those types must always be named Datum and Redeemer

Section 2.2
   - Add `Option`

Sections 2.3
   - Move to section 4

Section 2.4
   - Add note that functions can't reference functions defined after them(no hoisting).
   - Lambdas have type inference on their left hand side.
   `add = (a: Int, b: Int) -> Int {..}`
   - Function statements can only reference themselves in function bodies.

x: Option[Int] = Option[Int]::None::new() // implicit upcasting
y = Option[Int]::Some::cast(x) // explicit downcasting (and demonstration of type inference)

Mutual recursion possible using callbacks.


