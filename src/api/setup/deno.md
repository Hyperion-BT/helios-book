# [Deno](https://deno.land) as a [VSCode](https://code.visualstudio.com) language server

To use Deno as a VSCode language server you must first install the Deno CLI. Assuming you have access to a Linux-linux terminal:

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

This should download the `deno` binary to `$HOME/.deno/bin/deno`. Either add this directory to your `PATH`, or copy the binary to the system-wide bin directory:
```
$ sudo cp $HOME/.deno/bin/deno /usr/local/bin/deno
```

Make sure the `.vscode/settings.json` file points to the correct `deno` binary. For example:
```json
{
    "deno.enable": true,
    "deno.path": "/usr/local/bin/deno"
}
```

External modules must be cached by Deno before you can benefit from their type annotations.

Cache external modules using the following command:
```bash
$ deno cache --reload my_entry_point.js
```