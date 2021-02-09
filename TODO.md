# ETH Denver 2021
Update of 2021-02-05
* confirmed members
  * Vu Tien Khang ("Vutien"): _Space System Architect, 45 years of experience (yes :-), Luxembourg React, Solidity, Web3, Nodejs + Earth Observation & Telecoms_
  * Duke Silver ("Rajan"): _I am a Sr. Java Developer working in Chicago currently. I can code all Java Stack and all the popular DB's. I started learning Ethereum stack 6 months back and got certified. I can work with Solidity, IPFS, Truffle, Infura and all that core ethereum stuff._
* create a team in ETH Denver devfolio - **done**, the dashboard is [https://devfolio.co/ethdenver2021/dashboard](https://devfolio.co/ethdenver2021/dashboard)
* initialise a github common repository - **done**
* initialise a TODO - **done**
* fill the TODO
  * migrate to Celo testnet, contracts + the frontend calls to the providers (Action Jordan, target date: Monday)
  * accept li_li (Action VTK - done)
  * in parallel start adding IPFS to Pepito (action ?)
* create a project in ETH Denver devfolio and start filling - **done**


# Logistics
* Let's have a 30' progress call each day. Here is the When2meet to coordinate our large time zones and find a slot that suits everybody: [https://www.when2meet.com/?10945948-rY2Up](https://www.when2meet.com/?10945948-rY2Up)
* If you're not familiar with When2Meet, they have a Youtube tutorial in the menu "About" at the top left
## Official Process
Here is the official Buidlathon guide [https://www.ethdenver.com/buidl](https://www.ethdenver.com/buidl). I noted this sentence "_Every BUIDLer must register for ETHDenver on the [ETHDenver & ColoradoJam 2021 Devfolio Landing Page](https://ethdenver2021.devfolio.co/)_"

The team _Machu Picchu_ is created on Devfolio. I have the team code and will send to you on request. 

_Impact Bounties - If your project addresses a specific [UN Sustainability Goal (SDG)](https://sdgs.un.org/goals) your team is eligible for Impact Bounties in addition to being qualified to compete in the Open Track. When submitting for an Impact Bounty, you must specifically call out the SDG you are addressing and how your project lends value to the SDG. Impact Judges are specifically qualified to evaluate projects submitted for Impact bounties.  $3000 will be awarded to the top 5 scoring projects in the Impact category with a total of $15,000 in total bounties being allocated._

Feel free to comment

## Deliverables
Teams should add details like:
1.    Project name
2.    Problem being solved
3.    Challenges encountered along the way
4.    Technologies used (important for bounties!!!)
5.    Links to code, visuals, or presentations **<-- our github**
6.    Video demo (all teams must submit a 3-5 minute video demo of their project) **<-- start the video latest Thursday 11**
7.    Pictures (if applicable)
8.    Applicable tracks - All teams a part of the Open track, but they can also select to enter the Impact, Colorado Jam, or Sponsor bounties


# What we could do (proposition of storyboard)
This is a rough roadmap that we can use as basis to adapt and fill the TODO.

The plan would be to 
1. **port Pepito to Celo**: Rajan is fine with that, He's Celo, IPFS, Solidity, React, java
2. **have Pepito store on IPFS** its table of Disguise addresses. Any Solidity + IPFS person would do
3. have **each PepitoDisguise store on Textile or OrbitDB** its data. Here we need someone Solidity + React + IPFS/Textile/orbitDB
4. ... and/or **use Ceramic** to describe the data model **and IDX** for identity, but this might collide with Celo  
5. make the **Pepito frontend more sexy** and add a dialog to update the features of a PepitoDisguise and store again. Here someone React+IPFS/Textile/OrbitDB
6. Add a **mobile frontend using the Valora mobile** API of Celo (cherry over the cake, IMHO in 1 week we'll not have time
7. another cherry on the cake, **use TheGraph to query the database**, but we'll certainly not have time, unless you have the code ready somewhere
   
## List of bounties
[https://www.ethdenver.com/bounties](https://www.ethdenver.com/bounties)

# The big picture, to be executed after ETH Denver 2021
1. Beyond the buidlathon, we follow our storyboard and continue adding features to Pepito
2. When we something showable that can simply be derived to make a taylored application for a specific NGO, I'd try and enroll a few small NGO's
3. If I succeed, I'll approach the Luxembourg government, as well as the German and French governments, and also the European Institutions for funding and operations
4. When we reach 10'000-50'000 persons in need with these small NGO's, I'll propose to UNICEF, Red Cross, WFP, Oxfam to join
