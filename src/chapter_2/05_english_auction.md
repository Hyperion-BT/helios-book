# English Auction

In this example, we will rewrite the [English Auction contract](https://plutus-pioneer-program.readthedocs.io/en/latest/pioneer/week1.html)
from the Plutus Pioneer's program in Helios.

This validator is can be used to lock assets that are to be auctioned in a UTXO.

## The Datum

```go, noplaypen
struct Bid {
    bidder: PubKeyHash,
    amount: Int
}

struct Auction {
    seller: PubKeyHash,
    deadline: Time,
    min_bid: Int,
    auction_value: Value
}

struct Datum {
    auction: Auction,
    highest_bid: Option[Bid]
}

// MkBid Predicates

// Check that new bid is bigger that the previous 
func Datum::sufficient_bid(self, amount: Int) -> Bool {
    switch (highest_bid) {
        (b: Option::Some) => {
            amount > b.amount
        },
        default => { 
            amount > 0
        }
    }
}

//! Should include check for output's address
func Datum::correct_bid_output_datum(self, new_bid: Bid ,new_datum: Datum) -> Bool {
    new_datum.auction == self.auction &&
    new_datum.highest_bid == Option::Some::new(new_bid)
}

// Check that new Bid UTXO has correct value
func Datum::correct_bid_output_value(self, new_bid: Bid, output: TxOutput) -> Bool {
    output.value.contains(Value::lovelace(new_bid.amount)) &&
    output.value.contains(self.auction.auction_token)
}

// Check that previous bidder is refunded
func Datum::correct_refund(self, tx: Tx) -> Bool {
    switch (self.highest_bid) {
        (previous_bid: Option::Some) => {
            tx.value_sent_to(previous_bid.bidder)
                .contains(Value::lovelace(previous_bid.amount))
        }
    }
}


// Cancel Predicates

// Check that payout matches datum
func Datum::correct_payout(self, tx: Tx) -> Bool {
    seller: PubKeyHash = self.auction.seller;
    auction_value: Value = self.auction.auction_value;

    switch (self.highest_bid) {
        (b: Option::Some) => {
            tx.value_sent_to(b.bidder).contains(auction_value) &&
            tx.value_sent_to(seller).contains(Value::lovelace(b.bid))
        }
        Option::None => {
            tx.value_sent_to(seller).contains(auction_value)
        }
    }
}

enum Redeemer {
    MkBid { bid: Bid },
    Close
}

func main(datum: Datum, redeemer: Redeemer, context: ScriptContext) -> Bool {
    tx: Tx = context.tx;
    valid_range: TimeRange = tx.time_range;
    auction: Auction = datum.auction;

    switch (redeemer) {
        (new_bid: Redeemer::MkBid) => {

            valid_range.is_before(auction)
            datum.is_sufficient_bid(new_bid.amount)  &&
            datum.correct_refund(tx)                 &&
            tx.outputs.any((output: TxOutput) -> Bool { 
                datum.correct_bid_output_value(output.value) &&
                datum.correct_bid_output_datum(output.datum) // ? Unsure

            })
        }
        Redeemer::Close => {
            valid_range.is_after(auction.deadline) &&
            datum.correct_payout(tx)
        }
    }
}

```
