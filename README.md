# ETHDenver2021

Machu Picchu entry for ETHDenver 2021
## Contributing
* Fork the repository to your own github
* Clone your repo to your local workstation and work from there; the main folder is `<your folder>/ETHDenver2021/Pepito`
* Push to your repo when done
* When your version is ready, submit a pull request for _Machu Picchu_.

1. Code: [Machu Picchu entry for ETHDenver 2021](https://github.com/Machu-Pichu/ETHDenver_2021/tree/main/Pepito)
2. Video: [https://www.youtube.com/watch?v=XyRA4lQtvQs](https://www.youtube.com/watch?v=XyRA4lQtvQs)
3. Pitch deck: [https://docs.google.com/presentation/d/1I_tdluxRyoShOSUdQ-A_UHwGV7LZJBtlCzPSaVvxYpE](https://docs.google.com/presentation/d/1I_tdluxRyoShOSUdQ-A_UHwGV7LZJBtlCzPSaVvxYpE)


## Contact
email: kvutien.yes@gmail.com

## License
MIT
# About _Machu Picchu_
## General Presentation
_Machu Picchu_ is the umbrella name of a collaborative open source initiative. It aims to use the Ethereum blockchain (or Celo) to share “_Data as a Public Service_” among all the humanitarian organisations that provide support and benefits to the persons-in-need. These persons remain owners of their data and receive a micro-fee from every entity that retrieves this data. Like when you give your data to the GAFA to obtain map guidance, news, entertainment suggestions, taxi services etc. But here the data are accessible to all, including startups. [The business model is explained here in Medium](https://kvutien-yes.medium.com/machu-picchu-how-the-blockchain-can-help-persons-in-need-8396820d13d1) and also explained [here on YouTube](https://youtu.be/9fWTD8gf-Us).

The need to share data among humanitarians is recognized. The addressable market is huge: _Cash and Voucher Assistance programs_ alone totalled **$5.6bn in 2019**, quote the joint Danish Red Cross/Mercy Corp/HiveOnLine [report of November 2020](https://www.hivenetwork.online/blockchain-for-good/). And wait, there are **more aid  and relief programs** than that: risk sharing, credit rating, gender equality, health practices, education, mother and child care, civil governance etc.

The ultimate achievement is to make an inclusive DEX where the persons in need may swap the humanitarian tokens that they received from different organisations (for example Red Cross, UNICEF, World Food Program, etc.) and obtain a significant bundle of a single tokens that can be redeemed against medicaments, schoolbooks, agriculture tools etc.

## Business Model
![Business Model](./20210206%20Machu%20Picchu%20Business%20Model.png)

## Vision of Technical Stack
A vision of the complete Technical Stack that can be used for _Machu Picchu_ is, in April 2021 **and if we have 2-3 M$ immediately available** :-)
![Technical Stack](./20210206%20Machu%20Picchu%20Tech%20Stack.png)

## Pepito
[Pepito is the entry of _Machu Picchu_ to the ETH Denver 2021 Buidlathon](https://github.com/Machu-Pichu/ETHDenver_2021/tree/main/Pepito). It is the demonstrator of how the personal data of the person-in-need can be stored. To make the blockchain more friendly to decision makers of helper organisations, instead of a boring user KYC data screen, we generate a disguise and store it. It constitute the "*Trust Engine*" at the bottom left of the Machu Picchu Technical Stack.

## Beyond Pepito…
Because of the technical background of [Vu Tien Khang](https://www.linkedin.com/in/kvutien/) as Data Science, Earth Observation, on top of Space and Telecoms, our vision is to add collaborative data analysis tools, Geographical Information System mapping tools, and [Earth Observation tools](https://ibisa.users.earthengine.app/view/mcgyver3) to monitor crops and natural disasters. This will be started once Pepito has 10'000-50'000 persons to manage, provided funding is available.

## Objectives for the ETH Denver 2021 Buidlathon
* Port Pepito to Celo
* ~~Make Pepito store on IPFS its table of Disguise addresses~~
* ~~Make each PepitoDisguise store its data on Textile or OrbitDB~~
* ~~Implement the frontend dialogue to change the features of a PepitoDisguise and store it back~~
* ~~Use the Celo Valora mobile wallet~~
* ~~Implement the frontend dialogue on mobile~~

## Instructions

Pre-requesites: [NodeJS](https://nodejs.dev/learn/how-to-install-nodejs) & [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation)

1. Fork this repo to your repo and clone it, or clone directly: run 
	`git clone https://github.com/Machu-Pichu/ETHDenver_2021`
2. `cd` to `ETHDenver_2021/Pepito` and install the dependencies: run
	`npm install`
3. `cd` to `ETHDenver_2021/Pepito/src` and create your own CELO testnet crypto account to pay the blockchain fees of the demo: run 
	`node createAccount.js`
4.	... this creates a new CELO test account and displays the account address on the console. Copy this account adddress
5. Go to Alfajores test faucet and fund the account by pasting the address you just copied, answer the CAPTCHA and click on "Get Started":
	https://celo.org/developers/faucet
6. Deploy the smart contracts (_migrate the project_) on Alfajores test network: `cd` to the folder `ETHDenver_2021/Pepito` and run 
	`truffle migrate --network alfajores --reset` 
7. In the same folder, launch the React frontend: run
	`npm run start`
8. your browser will open a new tab at address http://localhost:3000 and display the frontend


Voila!
