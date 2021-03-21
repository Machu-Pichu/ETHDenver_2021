
# Presentation
|![](https://upload.wikimedia.org/wikipedia/en/9/93/Pepito_Bottaro.jpg)|Pepito is the name of the main character of a [French comic book](https://en.wikipedia.org/wiki/Pepito_(comics)) I loved when I was a kid, in 1960. Pepito was a young corsair of the Caribbean islands. His specialty was his disguises, with which he could fool Hernandez Banana, the Governor of the island of Las Ananas, his favorite (and not very smart) victim. |
|-------|:---------|


In this game, your mission is to build a disguise for Pepito, from [a set of existing components](https://avataaars.com/). Once you built this disguise, you'll record it on the blockchain so that Pepito is sure he'll not reuse it again and will never take twice the same disguise.

![Target look](../20201128%20Avatars.jpeg)

Actually, our real purpose in _Machu Picchu_ is to build a blockchain-based tool to manage personal data of persons-in-need worldwide and the financial humanitarian assistance tokens that helper organisations would give to these persons-in-need. These tokens can be exchanged and bundled in a DEX until their owner have enough tokens that it becomes cost-effective to exchange then into fiat money. More info here: [ConsenSys Academy graduation days](https://youtu.be/9fWTD8gf-Us).

In final the win-win situation is
* Helper institutions share the data of the persons-in-need to improve the efficiency of their incentive and aid programs
* Persons-in-need are able to share and exchange their tokens until they decide to make it real fiat money
* Any private of public entity (large or small) who targets these persons can use the data, that are not confiscated by any single actor.

The amount of "Cash Voucher Assistance" (CVA) totalled $5.6bn in 2019, doubling 2016 levels and accounting for 17.9% of total humanitarian assistance. Financial services targeting the same population is 10 times this amount.

# CELO and _Machu Picchu_
CELO interests _Machu Picchu_  because
1. we share the same social impact objective
2. CELO is compatible with Ethereum for a large part, which leaves the future open
3. the CELO Mobile-first approach can somehow be used by _Machu Picchu_, although _Machu Picchu_ goes one step further and has a technical scheme to use basic feature phones

**As part of future design**, to allow a simple SMS-based signature by the person-in-need while preserving security, we are considering the use of a multisignature pattern, shared between the persons-in-need and the chief of village (the "Factory"). The person-in-need will sign with an OTP and a simple mobile phone. The chief of village will have a tablet or smartphone and will sign with the wallet private key.

# Design
## Smart contract backend design
In the following we'll specify and code a dApp to help you in this mission generating disguises for Pepito. But keep this in mind: behind this game, by simply modifying a few lines of code, each disguise can become actually a set of characteristics of a person-in-need that humanitarians can help. Because the blockchain is open, once persons-in-need are recorded, all humanitarian organisations can access the data, and these persons keep full control on these personal data.

![Backend](https://github.com/kvutien/Machu-Picchu/blob/main/Pepito/Final%20Project%20Design.png)

## React Frontend design
The frontend of _Machu Picchu_ is derived from Truffle Box React. As compared to the version submitted in December, the `App.js` is reduced to the minimum. All important actions are in distinct React components. We can now improve gradually each function without impacting the others: 
* how to generate disguises,
*  how to store disguises (blockchain or IPFS or OrbitDB or Textile), 
*  how to retrieve a disguise, modify it and store back

We can also derive Pepito into a true humanitarian organisation management system without disrupting the code.

![Frontend](https://github.com/kvutien/Machu-Picchu/blob/main/Pepito/Final%20Project%20React.png)


## Credits
Big thanks to the following resources:

* [https://avataaars.com/](https://avataaars.com): the initial creator of the images
* [https://github.com/fangpenlin/avataaars](https://github.com/fangpenlin/avataaars): the creator of the React avataar random generator
* [https://github.com/keep-network/random-avatar](https://github.com/keep-network/random-avatar): using avataar to illustrate its own blockchain secure random number generator 

