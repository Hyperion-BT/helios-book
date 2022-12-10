# Setup of the Helios Library

The Helios library is platform agnostic and can be used in many different ways.

## Webpage `script` tag

```html
<script src="https://helios.hyperion-bt.org/0.9.5/helios.js" type="module" crossorigin></script>
```

## Module with CDN URL

Helios can be imported as a module using our CDN. This is supported by [Deno](https://deno.land) and most modern browsers:

```js
import * as helios from "https://helios.hyperion-bt.org/0.9.5/helios.js"

// or only the necessary parts (recommended as you get more acquainted with the library)
import { Program } from "https://helios.hyperion-bt.org/0.9.5/helios.js"
```

Alternatively you can use `"helios"` as a placeholder for the URL and, if not using any builder-tools, specify the module URL in an [importmap](https://github.com/WICG/import-maps) (currently only supported by Chrome):

```js
// in you javascript file
import * as helios from "helios"
```

```html
<!-- in your html file -->
<script type="importmap">
    {
        "imports": {
            "helios": "https://helios.hyperion-bt.org/0.9.5/helios.js"
        }
    }
</script>
```

The examples in this chapter will use the placeholder approach.

## [npm](https://www.npmjs.com)

Install the latest version of the library using the following command:

```bash
$ npm i @hyperionbt/helios
```

Or install a specific version:

```bash
$ npm i @hyperionbt/helios@0.9.5
```

In your javascript file:
```js
import { Program } from "@hyperionbt/helios"
```

We don't yet recommend installing the Helios library globally, as the API is still changing frequently.