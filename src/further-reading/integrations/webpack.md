# Webpack loader

The Helios [Webpack loader](https://www.npmjs.com/package/@hyperionbt/helios-loader) allows importing Helios scripts directly into Javascript/Typescript projects.

Features:
* Catches Helios syntax and type errors during build time
* Working with Helios sources directly allows using [Helios IDE plugins](./vscode.md)
* Automatically uses your current version of Helios (must be installed manually inside the repo where you configure webpack)
* WiP: generates Typescript declarations for user-defined Helios types (Typescript declaration files are emitted inside the source directory)

> **Note**: the Helios import syntax must use literal string relative paths instead of module names.

## Example

A Helios module:
```helios
// common.hl
module common

struct Datum {
    secret: Int
}

struct Redeemer {
    guess: Int
}
```

A Helios validator:
```helios
// contract.hl
spending contract 

import { Datum, Redeemer } from "./common.hl"

func main(datum: Datum, redeemer: Redeemer, _) -> Bool {
    datum.secret == redeemer.guess
}
```

Typescript off-chain code:
```ts
// index.ts
import Program from "./contract.hl"

const program = new Program()

const uplcProgram = program.compile(true)

...
```

The imported `Program` has the same methods as [`helios.Program`](../../api/reference/classes/Program.md).

## Installation and configuration

Install the loader:
```
npm install --save-dev @hyperionbt/helios-loader
```

Configure [Webpack](https://webpack.js.org/configuration/), for example:
```js
// webpack.config.js
module.exports = {
	mode: "development",
	entry: "./index.ts",
	output: {
		path: __dirname + "/dist/"
	},
	module: {
		rules: [
		  	{
				test: /(?<!\.d)\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
			  		extensions: [".ts", ".tsx"],
				},
				use: [
					"ts-loader",
                    // helios-loader AFTER ts-loader so it is able to 
                    //  import Helios scripts BEFORE ts-loader is called
					"@hyperionbt/helios-loader" 
				]
		  	},
			{
				test: /\.(hl|helios)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "@hyperionbt/helios-loader",
						options: {
                            // must be true when importing Helios scripts in Typescript
							emitTypes: true 
						}
					}
				]
			}
		]
	}
}
```

## Contributing

The Helios Webpack loader repository can be found [on github](https://github.com/hyperion-bt/helios-loader).