# `Cip30Handle`

Convenience type for browser plugin wallets supporting the [CIP 30 dApp connector](https://cips.cardano.org/cips/cip30/) standard (eg. Eternl, Nami). 

```ts
interface Cip30Handle {
    getNetworkId(): Promise<number>,
    getUsedAddresses(): Promise<string[]>,
    getUnusedAddresses(): Promise<string[]>,
    getUtxos(): Promise<string[]>,
    signTx(txHex: string, partialSign: boolean): Promise<string>,
    submitTx(txHex: string): Promise<string>
}
```

This is useful in typescript projects to avoid type errors when accessing the handles in `window.cardano`.

```ts
// refer to this file in the 'typeRoots' list in tsconfig.json

type Cip30SimpleHandle = {
    name: string,
    icon: string,
    enable(): Promise<helios.Cip30Handle>,
    isEnabled(): boolean
}

declare global {
  interface Window {
    cardano: {
        [walletName: string]: Cip30SimpleHandle
    };  
  }
}
```