# Tx finalization

The Helios API can be used to build transactions. Finalization consist of the following steps:

1. balancing of non-ADA assets
2. calculation of script execution units (using a dummy fee set to the maximum possible value)
3. setting collateral inputs and collateral output (using total execution budget calculated in previous step)
4. iteratively calculate the min fee for the transaction and balance the lovelace