# English Auction

In this example, we will rewrite the [English Auction contract](https://plutus-pioneer-program.readthedocs.io/en/latest/pioneer/week1.html)
from the Plutus Pioneer's program in Helios.

This validator is can be used to lock assets that are to be auctioned in a UTXO.

## The Datum

```go
validator english_auction;

struct Datum {
    seller:         PubKeyHash,
    bid_asset:      AssetClass, // allow alternative assets (not just lovelace)
    min_bid:        Int,
    deadline:       Time,
    for_sale:       Value,      // the asset that is being auctioned
    highest_bid:    Int,        // initialized at 0, which signifies the auction doesn't yet have valid bids
    highest_bidder: PubKeyHash
}

enum Redeemer {
    Close {},
    Bid {
        bidder: PubKeyHash,
        bid:    Int
    }
}

func Datum::update_datum(self, highest_bid: Int, highest_bidder: PubKeyHash) -> Datum {
    Datum{
        seller:         self.seller,
        bid_asset:      self.bid_asset,
        min_bid:        self.min_bid,
        deadline:       self.deadline,
        for_sale:       self.for_sale,
        highest_bid:    highest_bid,
        highest_bidder: highest_bidder
    }
}

func main(datum: Datum, redeemer: Redeemer, ctx: ScriptContext) -> Bool {
    tx: Tx = ctx.tx;

    now: Time = tx.now();

    validator_hash: ValidatorHash = ctx.current_validator_hash();

    if (now.is_before(datum.deadline)) {
        switch (redeemer) {
            Redeemer::Close => false,
            (b: Redeemer::Bid) => {
                if (b.bid < datum.min_bid) {
                    false
                } else if (datum.highest_bid == 0) {
                    // first bid
                    expected_datum: Datum = datum.update_datum(b.bid, b.bidder);

                    tx.value_locked_by_datum(validator_hash, expected_datum).contains(datum.for_sale + Value::new(datum.bid_asset, b.bid))
                } else if (b.bid <= datum.highest_bid) {
                    false
                } else {
                    expected_datum: Datum = update_datum(datum, b.bid, b.bidder);

                    tx.value_locked_by_datum(validator_hash, expected_datum)
                        .contains(datum.for_sale + Value::new(datum.bid_asset, b.bid)) &&
                    tx.value_sent_to(datum.highest_bidder)
                        .contains(Value::new(datum.bid_asset, datum.highest_bid))
                }
            }
        }
    } else {
        // after deadline -> must close
        switch (redeemer) {
            Redeemer::Close => {
                if (datum.highest_bid < datum.min_bid) {
                    // the forSale asset must return to the seller, what happens to any erroneous bid value is irrelevant
                    tx.value_sent_to(datum.seller).contains(datum.for_sale)
                } else {
                    tx.value_sent_to(datum.seller).contains(Value::new(datum.bid_asset, datum.highest_bid)) &&
                    tx.value_sent_to(datum.highest_bidder).contains(datum.for_sale)
                }
            }
            default => false
        }
    }
}
```
