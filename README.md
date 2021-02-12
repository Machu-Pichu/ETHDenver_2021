# ETHDenver2021
[Machu Picchu entry for ETHDenver 2021](https://github.com/Machu-Pichu/ETHDenver_2021/tree/main/Pepito)

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
![Business Model](https://github.com/Machu-Pichu/ETHDenver2021/blob/main/20210206%20Machu%20Picchu%20Business%20Model.png)

## Vision of Technical Stack
A vision of the complete Technical Stack that can be used for _Machu Picchu_ is, in January 2021 **and if we have 2-3 M$ immediately available** :-)
![Technical Stack](https://github.com/Machu-Pichu/ETHDenver2021/blob/main/20210206%20Machu%20Picchu%20Tech%20Stack.png)

## Pepito
[Pepito is the entry of _Machu Picchu_ to the ETH Denver 2021 Buidlathon](https://github.com/Machu-Pichu/ETHDenver_2021/tree/main/Pepito). It is the demonstrator of how the personal data of the person-in-need can be stored. To make the blockchain more friendly to decision makers of helper organisations, instead of a boring user KYC data screen, we generate a disguise and store it.

## Beyond Pepito…
Because of the technical background of [Vu Tien Khang](https://www.linkedin.com/in/kvutien/) as Data Science, Earth Observation, on top of Space and Telecoms, our vision is to add collaborative data analysis tools, Geographical Information System mapping tools, and [Earth Observation tools](https://ibisa.users.earthengine.app/view/mcgyver3) to monitor crops and natural disasters. This will be started once Pepito has 10'000-50'000 persons to manage, provided funding is available.

## Objectives for the ETH Denver 2021 Buidlathon
* Port Pepito to Celo
* Implement the frontend dialogue on mobile

## Instructions

Pre-requesites: Node.js & Truffle & React.js (for example by installing `npm install -g create-react-app`

1. On your local disk, clone [https://github.com/Machu-Pichu/ETHDenver_2021.git](https://github.com/Machu-Pichu/ETHDenver_2021.git)

```git clone https://github.com/Machu-Pichu/ETHDenver_2021.git```

2. cd to `ETHDenver_2021/Pepito` and run

```npm install```

3. cd to `ETHDenver_2021/Pepito/client` and run

```npm install```

4. cd  to `ETHDenver_2021/Pepito/client/src`and run

```node createAccount.js```
```/* this creates a new celo test account and displays the account on the console. Copy the account. */```

5. Go to [Alfajores test faucet](https://celo.org/developers/faucet) and fund the account

6. Migrate the project to Alfajores Test network

```truffle migrate —network alfajores```

7. cd to `ETHDenver_2021/Pepito/client`and run

```npm run start```

Voila!
