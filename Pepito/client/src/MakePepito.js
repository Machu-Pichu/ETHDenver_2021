/**  class MakePepito - project Pepito
 * @author Vu Tien Khang - Jan 2021
 * @notice connect to Web3 instance of Pepito, call App.connectB to store on App.state
*/
import React from 'react';
//import getWeb3 from "./getWeb3";                    // to call web3 API
import Pepito from "./contracts_abi/Pepito.json";   // to call web3 API
import './App.css';
import secret from './.secret';

const fs = require('fs');
const path = require("path");    // used to direct creation of ABI in another directory than default
const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
const getAccount = require('./getAccount').getAccount

class MakePepito extends React.Component{
    constructor() {
        super();
        this.web3 = {};
        this.accounts = [];
    }

    makePepito = async () => {
        /**
        * @notice connect web3 API and create instance of Pepito contract
        */

        // no need to create Pepito instance if props.web3Connected == true
        if(!this.props.web3Connected) {
            //console.log('>>>> makePepito: this.props.web3Connected', this.props.web3Connected);
            // try {
            //     /**
            //      * @dev via Metamask, get blockchain network provider & web3 instance by trying several channels
            //      * @dev get the user account address
            //      */
            //     this.web3 = await getWeb3();                        // use `this`to transfer web3 to the next `try` block
            //     this.accounts = await this.web3.eth.getAccounts();  // use `this`to transfer accounts to the next `try` block
            // } catch (error) {
            //     /// @dev catch any errors for any of the above operations.
            //     alert(
            //         `Failed to load web3. Check in Metamask that this page is connected to a blockchain account. Else see browser console for error details.`,
            //     );
            //     console.error(error);
            // }
            let account;
            let privatek;

            async function awaitWrapper(){
                //account = await getAccount()

                // This will fetch the private key from .secret file
                fetch(secret)
                .then(r => r.text())
                .then(text => {
                  privatek = text;
                  console.log(privatek)
                });

                account = web3.eth.accounts.privateKeyToAccount('0x442e0db059ffb6321283eea82386a072fb1bee0c08bee77bb345f39098144001')
                console.log(`Account address: ${account.address}`)
                kit.addAccount(account.privateKey)
            }

            awaitWrapper()

            //. Create Random Account Everytime
            let randomAccount = web3.eth.accounts.create()
            console.log(randomAccount);

            // 3. Get the token contract wrappers
            let goldtoken = await kit.contracts.getGoldToken()
            let stabletoken = await kit.contracts.getStableToken()

            // 4. Address to look up
            let anAddress = account.address;

            // 5. Get token balances
            let celoBalance = await goldtoken.balanceOf(anAddress)
            let cUSDBalance = await stabletoken.balanceOf(anAddress)

            // Print balances
            console.log(`${anAddress} CELO balance: ${celoBalance.toString()}`)
            console.log(`${anAddress} cUSD balance: ${cUSDBalance.toString()}`)

            //this.props.celoWallet(anAddress, celoBalance, cUSDBalance);

            try {
                /** @dev create a Pepito singleton contract instance */
                //const web3 = this.web3;                             // get the web3 provider
                const accounts = account.address;                     // get the reachable accounts
                const networkId = await web3.eth.net.getId();       // get the network ID currently connected to
                const deployedNetwork = Pepito.networks[networkId]; // get the network object in the ABI
                const pepitoInstance = new web3.eth.Contract(       // make an JavaScript instance of Pepito
                    Pepito.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                const ownerPepito = await pepitoInstance.methods.owner().call();
                var web3Connected = true;

                /*console.log("1.user account", accounts,
                    ".\n 1.makePepito().Pepito contract", pepitoInstance,
                    ".\n  1.Pepito contract address", deployedNetwork.address,
                    ".\n   1.web3Connected", web3Connected,
                    ".\n    1.'owner' variable in Pepito", ownerPepito); */

                /** @dev return to App.js web3, accounts, pepitoContract etc. */
                this.props.connectedB(web3, accounts, pepitoInstance, deployedNetwork.address,  web3Connected, ownerPepito);
            } catch (error) {
                /// @dev catch any errors for any of the above operations.
                alert(
                    `Failed to create pepitoContract. Did you migrate it? Check console for details.`,
                );
                console.error(error);
            }
        } else alert('no need: blockchain interfaced and Pepito already known');
    }

    render() {
        return(
            <>
                <button className="btn btn-lg btn-secondary mb-5"
                    onClick={this.makePepito}>Get blockchain interface & Pepito instance</button>
            </>
        )
    }
}

export default MakePepito;
