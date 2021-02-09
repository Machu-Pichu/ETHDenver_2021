Avoiding common attacks

In this design we avoid 
* Integer overflow attack (SWC-101): the count of disguises in createPepiptDisguise is protected by `SafeMath.sol`
* Re-entrancy Attacks (SWC-107): we change the state variable `disguiseCount` only after we recorded the disguise on blockchain