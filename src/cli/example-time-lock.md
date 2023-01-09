# Example: Time lock

The *always-succeeds* contract in the [previous section](./example-always-succeeds.md) isn't very useful. Something that is still simple, but has real-world applications, is a *time-lock* contract. Actors send UTxOs to the *time-lock* address with a datum that contains a *lock-until* time. An optional nonce can be included in the datum to allow only the actors who know the nonce value to retrieve the UTxOs. The wallet from which the original UTxOs were sent is also able to retrieve the UTxOs at any time.

The Helios script:
```helios
spending time_lock

struct Datum {
    lockUntil: Time
    owner:     PubKeyHash // can't get this info from the ScriptContext
    nonce:     Int
}

func main(datum: Datum, ctx: ScriptContext) -> Bool {
    tx: Tx = ctx.tx;
    now: Time = tx.time_range.start;
    returnToOwner: Bool = tx.is_signed_by(datum.owner);

    (now > datum.lockUntil) || returnToOwner
}
// end-of-main, anything that comes after isn't part of the on-chain script

// MY_DATUM parameters
const LOCK_UNTIL = 0 // seconds since 1970, set by cli
const OWNER = PubKeyHash::new(#) // set by cli
const NONCE = 42 // can be set by cli

// Helios can evaluate MY_DATUM into a data-structure that can be used to build a transaction
const MY_DATUM = Datum{
  lockUntil: Time::new(LOCK_UNTIL*1000),  // needs to be in milliseconds
  owner:     OWNER, 
  nonce:     NONCE
}
```

UTxOs can be sent into the time-lock script arbitrarily as long as the datum has the correct format. UTxOs can be retrieved any time by the wallet that initiated the time-lock. UTxOs can be retrieved after the time-lock by anyone who knows the datum.


Once we have written the script, we generate its JSON representation using *helios-cli*, and then calculate the script address using cardano-cli:
```
$ helios compile time_lock.hl

{"type": "PlutusScriptV2", "description": "", "cborHex": "5..."}
```
```
$ docker exec -it <container-id> bash

> echo '{
  "type": "PlutusScriptV1",
  "description": "",
  "cborHex": "5...",
}' > /data/scripts/time-lock.json

> cardano-cli address build \
  --payment-script-file /data/scripts/time-lock.json \
  --out-file /data/scripts/time-lock.addr \
  --testnet-magic $TESTNET_MAGIC_NUM

> cat time-lock.addr

addr_test1...
```

For the datum we need the `PubKeyHash` of the initiating wallet (i.e. the owner):
```
$ docker exec -it <container-id> bash

> cardano-cli address key-hash --payment-verification-key-file /data/wallets/wallet1.vkey

1d22b9ff5fc...
```

We also need a `lockUntil` time, for example 5 minutes from now. Now we can build the datum:
```
$ helios eval time_lock.hl MY_DATUM \
  -DOWNER "000102030405060708090a0b0c0d0e0f101112131415161718191a1b" \
  -DLOCK_UNTIL $(($(date +%s) + 300)) \
  -DNONCE 12345

{"constructor": 0, "fields": [{"int": 16....}, {"bytes": "0001020304..."}, {"int": 12345}]}
```

Now let's send 2 tAda to the script address using the datum we just generated:
```
$ docker exec -it <container-id> bash

> cardano-cli query utxo \
  --address $(cat /data/wallets/wallet1.addr) \
  --testnet-magic $TESTNET_MAGIC_NUM

...
# take note of a UTxO big enough to cover 2 tAda + fees

> DATUM=$(mktemp)
> echo '{"constructor": 0, "fields": [{"int": 16....}, {"int": 42}]}' > $DATUM

> DATUM_HASH=$(cardano-cli transaction hash-script-data --script-data-file $DATUM)

> TX_BODY=$(mktemp)
> cardano-cli transaction build \
  --tx-in <funding-utxo> \
  --tx-out $(cat /data/scripts/time-lock.addr)+2000000 \
  --tx-out-datum-hash $DATUM_HASH \
  --change-address $(cat /data/wallets/wallet1.addr) \
  --testnet-magic $TESTNET_MAGIC_NUM \
  --out-file $TX_BODY \
  --babbage-era

Estimated transaction fee: Lovelace 167217

> TX_SIGNED=$(mktemp)
> cardano-cli transaction sign \
  --tx-body-file $TX_BODY \
  --signing-key-file /data/wallets/wallet1.skey \
  --testnet-magic $TESTNET_MAGIC_NUM \
  --out-file $TX_SIGNED

> cardano-cli transaction submit \
  --tx-file $TX_SIGNED \
  --testnet-magic $TESTNET_MAGIC_NUM

Transaction successfully submitted
```

Wait for the transaction to propagate through the network, and query the script address to see the locked UTxO(s).

First thing we should test is returning the UTxO(s) back to wallet 1. For that we use the following transaction:
```
> PARAMS=$(mktemp) # most recent protocol params
> cardano-cli query protocol-parameters --testnet-magic $TESTNET_MAGIC_NUM > $PARAMS

> TX_BODY=$(mktemp)
> cardano-cli transaction build \
  --tx-in <fee-utxo> \ # used for tx fee
  --tx-in <script-utxo \
  --tx-in-datum-file $DATUM \
  --tx-in-redeemer-value <arbitrary-redeemer-data> \
  --tx-in-script-file /data/scripts/time-lock.json \
  --tx-in-collateral <fee-utxo> \ # used for script collateral
  --invalid-before <current-slot-no> \
  --required-signer /data/wallets/wallet1.skey \
  --change-address $(cat /data/wallets/wallet1.addr) \
  --tx-out $(cat /data/wallets/wallet1.addr)+2000000 \
  --out-file $TX_BODY \
  --testnet-magic $TESTNET_MAGIC_NUM \
  --protocol-params-file $PARAMS \
  --babbage-era

Estimated transaction fee: Lovelace ...

> TX_SIGNED=$(mktemp)
> cardano-cli transaction sign \
  --tx-body-file $TX_BODY \
  --signing-key-file /data/wallets/wallet1.skey \
  --testnet-magic $TESTNET_MAGIC_NUM \
  --out-file $TX_SIGNED

> cardano-cli transaction submit \
  --tx-file $TX_SIGNED \
  --testnet-magic $TESTNET_MAGIC_NUM

Transaction successfully submitted
```

Note that this transaction *build* command differs slightly from the *Always succeeds* script:
 * `--invalid-before <current-slot-no>` is needed so the transaction is aware of the current time (via the start of the valid time-range). It might seem weird to specify (an approximation of) the current time at this point, as someone might try to cheat the time-lock by specifying a time far into the future. But the slot-leader checks the time-range as well, and rejects any transaction whose time-range doesn't contain the current slot.
 * `--required-signer <wallet-private-key-file>` is needed so that `getTxSignatories(tx)` doesn't return an empty list.

The second thing we must test is claiming the time-locked funds from another wallet (eg. wallet 2). Let's assume that the time-lock script still contains the 2 tAda sent by wallet 1, and that sufficient time has passed. Wallet 2 can claim the UTxO(s) using the following commands:
```
> PARAMS=$(mktemp) # most recent protocol params
> cardano-cli query protocol-parameters --testnet-magic $TESTNET_MAGIC_NUM > $PARAMS

> TX_BODY=$(mktemp)
> cardano-cli transaction build \
  --tx-in <fee-utxo> \ # used for tx fee
  --tx-in <script-utxo> \
  --tx-in-datum-file $DATUM \
  --tx-in-redeemer-value <arbitrary-redeemer-data> \
  --tx-in-script-file /data/scripts/time-lock.json \
  --tx-in-collateral <fee-utxo> \ # used for script collateral
  --invalid-before <current-slot-no> \
  --change-address $(cat /data/wallets/wallet2.addr) \
  --tx-out $(cat /data/wallets/wallet2.addr)+2000000 \
  --out-file $TX_BODY \
  --testnet-magic $TESTNET_MAGIC_NUM \
  --protocol-params-file $PARAMS \
  --babbage-era

Estimated transaction fee: Lovelace ...

> TX_SIGNED=$(mktemp)
> cardano-cli transaction sign \
  --tx-body-file $TX_BODY \
  --signing-key-file /data/wallets/wallet2.skey \
  --testnet-magic $TESTNET_MAGIC_NUM \
  --out-file $TX_SIGNED

> cardano-cli transaction submit \
  --tx-file $TX_SIGNED \
  --testnet-magic $TESTNET_MAGIC_NUM

Transaction successfully submitted
```

cardano-cli should give an error if you try to submit this transaction before the `lockUntil` time. After that time it should succeed, and wallet 2 will receive the time-locked UTxO(s).