# Main script

The source of the validator script can be placed in a js literal string:

```js
const mainScript = `
spending picoswap

// Note: each input UTxO must contain some lovelace, so the datum price will be a bit higher than the nominal price
// Note: public sales are possible when a buyer isn't specified
 
struct Datum {
    seller: PubKeyHash
    price:  Value              
    buyer:  Option[PubKeyHash]
    nonce:  Int // double satisfaction protection
 
    func seller_signed(self, tx: Tx) -> Bool {
        tx.is_signed_by(self.seller)
    }
 
    func buyer_signed(self, tx: Tx) -> Bool {
        self.buyer.switch{
            None    => true,
            s: Some => tx.is_signed_by(s.some)
        }
    }
 
    func seller_received_money(self, tx: Tx) -> Bool {
        // protect against double satisfaction exploit by datum tagging the output using a nonce
        tx.value_sent_to_datum(self.seller, self.nonce, false) >= self.price
     }
 }
 
func main(datum: Datum, _, ctx: ScriptContext) -> Bool {
    tx: Tx = ctx.tx;
 
    // sellers can do whatever they want with the locked UTxOs
    datum.seller_signed(tx) || (
        // buyers can do whatever they want with the locked UTxOs, as long as the sellers receive their end of the deal
        datum.buyer_signed(tx) && 
        datum.seller_received_money(tx)
    )
}`
```

We recommend including a *Show script* or *Show contract* button in every dApp so users can easily audit the smart contract logic they are interacting with.