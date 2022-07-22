# Vesting Contract

To put what we've done so far to use we're going to build a simple 'vesting' contract.
This contract will lock up some tokens for

```rust
enum VestingRedeemer {
    Cancel{},
    Collect{}
}

struct VestingDatum {
    creator: PubKeyHash,
    beneficiary: PubKeyHash,
    deadline: Time
}

```
