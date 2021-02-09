# Design Patterns
The following 2 design patterns were used, as required by ConsenSys Academy in the specs of Final Project:
* Factory
* Circuit breaker
## Factory pattern
The Factory design is very useful at this early stage of Machu-Picchu because in the business model of Machu-Picchu each disguise will map directly to a wallet of a person-in-need

![Factory Design Pattern](https://github.com/kvutien/Machu-Picchu/blob/main/Pepito/Factory%20Pattern.png)

## Circuit Breaker pattern
The Circuit Breaker pattern is not immediately useful today but it will prove its usefulness later when fully deployed among a helper institution.

# Package Manager & Inheritance
In the philosophy of _Machu Picchu_, the ETH Package Manager and inheritance will be largely used. For the time being, since we are just starting EthPM is not yet used.

To a certain extend, Pepito inherits from MetaCoin and each future Helper Institution contract will inherit from Pepito and each Person-In-need contract will inherit from PepitoDisguise.

![Inheritance Pattern](https://github.com/kvutien/Machu-Picchu/blob/main/Pepito/Final%20Project%20Design.png)
