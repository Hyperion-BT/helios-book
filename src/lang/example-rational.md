The following is a complete example of a struct with both associated and regular methods.

# Example: `Rational`

```helios
struct Rational {
    top:    Int
    bottom: Int

    // associated const
    const PI = Rational{ 355, 113 }

    // associated method
    func new(top: Int, bottom: Int) -> Rational {
        Rational { top, bottom }
    }

    // regular method
    func add(self, rhs: Rational) -> Rational {
        top:    Int = (self.top * rhs.bottom) + (rhs.top * self.bottom);
        bottom: Int = self.bottom * rhs.bottom;

        Rational { top, bottom }
    }

}

const rational_1 = Rational::PI // 355/113 or 3.14159...
const rational_2 = Rational::new(1, 2) // 1/2 or 0.5
const rational_3: Rational = rational_1.add(rational_2) // 823/226 or 3.64159...
```
