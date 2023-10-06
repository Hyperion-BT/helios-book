# Wallet setup

Start an interactive shell in your *cardano-node* docker container:
```bash
$ docker exec -it <container-id> bash
```

Create the directory where we will store the wallet keys:
```bash
> mkdir -p /data/wallets
```

Create three wallets, each with an associated payment address:
```bash
> cd /data/wallets

> cardano-cli address key-gen \
  --verification-key-file wallet1.vkey \
  --signing-key-file wallet1.skey
> cardano-cli address build \
  --payment-verification-key-file wallet1.vkey \
  --out-file wallet1.addr \
  --testnet-magic $TESTNET_MAGIC_NUM
> cat wallet1.addr

addr_test1vqwj9w0...

> cardano-cli address key-gen \
  --verification-key-file wallet2.vkey \
  --signing-key-file wallet2.skey
> cardano-cli address build \
  --payment-verification-key-file wallet2.vkey \
  --out-file wallet2.addr \
  --testnet-magic $TESTNET_MAGIC_NUM

> cardano-cli address key-gen \
  --verification-key-file wallet3.vkey \
  --signing-key-file wallet3.skey
> cardano-cli address build \
  --payment-verification-key-file wallet3.vkey \
  --out-file wallet3.addr \
  --testnet-magic $TESTNET_MAGIC_NUM
```

Take note of the payment address of wallet 1.

## Funding

Go to [testnets.cardano.org/en/testnets/cardano/tools/faucet/](https://testnets.cardano.org/en/testnets/cardano/tools/faucet/) to add some funds.

After adding some funds, check the balance of the wallet 1's payment address:
```bash
> cardano-cli query utxo \
  --address $(cat /data/wallets/wallet1.addr) \
  --testnet-magic $TESTNET_MAGIC_NUM

...
```

The funding faucet is limited to one usage per day per user. So try to fund wallets 2 and 3 on other days.
