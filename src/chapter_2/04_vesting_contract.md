# Vesting Contract

To put what we've done so far to use we're going to build a simple 'vesting' contract.
This contract will lock up some tokens for **beneficiary** that can't be collected until a **deadline** has passed.

To allow the creator 

## The Datum

The Datum stores the `PubKeyHash` of the **beneficiary** and **creator**'s wallets and the vesting deadline, represented as a `Time`.

```rust, noplaypen
struct Datum {
    creator: PubKeyHash,
    beneficiary: PubKeyHash,
    deadline: Time
}
```

The `Time` type represents a POSIX time for more info [Helios Builtins](../helios_builtins/Helios_Builtins.md).

## The Redeemer

```rust, noplaypen
enum Redeemer {
    Cancel {},
    Claim {}
}
```

## The Main Function

```go, noplaypen
func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    tx: Tx = context.tx;
    tx_valid_range: TimeRange = tx.time_range;

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

>**Note**: There is a possible security vulnerability in this contract that we will examine in a later chapter.
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
    tx: Tx = context.tx;
    tx_valid_range: TimeRange = tx.time_range;

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
