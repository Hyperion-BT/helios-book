# Vesting Contract

To put what we've done so far to use we're going to build a simple 'vesting' contract.
This contract will lock up some tokens owned by an **owner**
for a **beneficiary** that can't be claimed until after a **deadline**.
The **owner** can get their funds back if the **deadline** has not passed yet

## The Datum

The Datum stores the `PubKeyHash` of the **beneficiary** and **creator**'s wallets and the vesting deadline, represented as a `Time`.

```rust, noplaypen
struct Datum {
    creator: PubKeyHash,
    beneficiary: PubKeyHash,
    deadline: Time
}
```

>**Note**: The `Time` type represents a POSIX time and 
>for more info [Helios Builtins](../helios_builtins/Helios_Builtins.md).

## The Redeemer

```rust, noplaypen
enum Redeemer {
    Cancel {},
    Claim {}
}
```

There are two cases when the validator should return `true`:

### Vesting Cancel

In this case the 'owner' wishes to cancel to the contract and get back their funds.
For a Cancel to suceed the following have to be checked

- The owner signed the transaction.
- The Vesting deadline hasn't passed.

### Vesting Claim

A 'Claim' occurs when the 'beneficiary'

## The Main Function

```go, noplaypen
func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    const tx: Tx = context.tx;
    const tx_valid_range: TimeRange = tx.time_range;

    match (redeemer) {
        case Redeemer::Cancel {
            tx_valid_range.is_before(datum.deadline) && // Check that deadline hasn't passed
            tx.is_signed_by(datum.owner)
        },
        case Redeemer::Claim {
           // Check that deadline has passed.
           tx_valid_range.is_after(datum.deadline) &&
           // Check that the beneficiary signed the transaction.
           tx.is_signed_by(datum.beneficiary)
        }
    }
}
```

>**Note**: A `TimeRange` represents a *range* of time using a pair of `Time` values.
>for more info [Helios Builtins](../helios_builtins/Helios_Builtins.md).

>**PS**: There is a *possible* security vulnerability in this contract that we will examine in a later chapter.
>See if  you can find it 🙂.

## Finished Code

```go, noplaypen
validator vesting;

struct Datum {
    creator: PubKeyHash,
    beneficiary: PubKeyHash,
    deadline: Time
}

enum Redeemer {
    Cancel {},
    Claim {}
}

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    const tx: Tx = context.tx;
    const tx_valid_range: TimeRange = tx.time_range;

    match (redeemer) {
        case Redeemer::Cancel {

            tx_valid_range.is_before(datum.deadline) &&
            tx.is_signed_by(datum.owner)
        },
        case Redeemer::Claim {

           tx_valid_range.is_after(datum.deadline) &&
           tx.is_signed_by(datum.beneficiary)
        }
    }
}
```
