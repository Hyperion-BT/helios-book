# The Helios Programming Language Book

This is meant to be the main documentation for the Helios programming language.
Helios is a DSL for writing smart contracts for the Cardano blockchain.
Suggestions are welcome on the the [Helios Discord](https://discord.gg/XTwPrvB25q).
This book is hosted [here](https://www.hyperion-bt.org/helios-book/).

## Hosting Locally

Install mdbook

```shell
$ cargo install mdbook
  ...
```

Clone the repo

```shell
$ git clone https://github.com/hyperion-bt/helios-book
  ...
```

Finally `cd` into the directory and run the mdbook local server.

```shell
$ cd helios-book
  ...
$ mdbook serve --open
  ...
```

The book will be served at port `localhost:3000`
