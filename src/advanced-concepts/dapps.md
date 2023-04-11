# dApp recommendations

## No build tools

A lot of care went into making the Helios library as auditable as possible. Therefore we recommend for your dApp to use the library in its unminified form so users can audit the compiler more easily.

We also recommened using an client-side UI framework (like Preact/Htm), so that your dApp can be served directly to the client without needing a build-step.

## Show contract button

The smart contracts used in the dApp should be viewable by the user.