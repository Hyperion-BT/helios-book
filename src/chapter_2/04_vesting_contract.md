# Vesting Contract

To put what we've done so far to use we're going to build a simple 'vesting' contract.
This contract will lock up some tokens owned by an **owner**
for a **beneficiary** that can't be claimed until after a **deadline**.
The **owner** can get their funds back if the **deadline** has not passed yet

## The Datum

The Datum stores the `PubKeyHash` of the **beneficiary** and **creator**'s wallets and the vesting deadline is represented as a `Time`.

```rust, noplaypen
struct Datum {
    creator: PubKeyHash
    beneficiary: PubKeyHash
    deadline: Time
}
```

>**Note**: The `Time` type represents a POSIX time and
>for more info [Helios Builtins](../helios_builtins/Helios_Builtins.md).

## The Redeemer

```rust, noplaypen
enum Redeemer {
    Cancel
    Claim
}
```

There are two cases when the validator should return `true`:

- **Cancel**

  In this case, the 'owner' wishes to cancel the contract and get back their funds.
  For a 'Cancel' to succeed the following have to be checked

  - The owner signed the transaction.
  - The deadline hasn't passed.

- **Vesting Claim**

  A 'Claim' occurs when the 'beneficiary' wishes to claim the tokens vested for them.
  For it to be valid the following have to be checked:

  - The beneficiary signed the transaction.
  - The deadline has passed.

## The Main Function

```go, noplaypen
func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    tx: Tx = context.tx;
    now: TimeRange = tx.now();

    redeemer.switch {
        Cancel => {
            // Check that deadline hasn't passed
            now < datum.deadline && 

            // Check that the owner signed the transaction
            tx.is_signed_by(datum.creator)
        },
        Claim => {
           // Check that deadline has passed.
           now > datum.deadline &&

           // Check that the beneficiary signed the transaction.
           tx.is_signed_by(datum.beneficiary)
        }
    }
}
```

>**Note**: A `TimeRange` represents a *range* of time using a pair of `Time` values.
>for more info [Helios Builtins](../helios_builtins/Helios_Builtins.md).

>**P.S.**: There is a *possible* security vulnerability in this contract that we will examine in a later chapter.
>See if  you can find it 🙂.

## Finished Code

```go, noplaypen
spending vesting

struct Datum {
    creator: PubKeyHash
    beneficiary: PubKeyHash
    deadline: Time
}

enum Redeemer {
    Cancel
    Claim
}

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    tx: Tx = context.tx;
    now: Time = tx.now();

    redeemer.switch {
        Cancel => {
            now > datum.deadline &&
            tx.is_signed_by(datum.creator)
        },
        Claim => {
           now > datum.deadline &&
           tx.is_signed_by(datum.beneficiary)
        }
    }
}
```
