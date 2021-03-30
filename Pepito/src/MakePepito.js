/**  class MakePepito - project Pepito
* @author Vu Tien Khang - Jan 2021
* @notice connect to Web3 instance of Pepito, call App.connectB to store on App.state
*/
import React from 'react';
import { BounceLoader } from 'react-spinners';
//import getWeb3 from "./getWeb3";                    // to call web3 API
import Pepito from "./contracts_abi/Pepito.json";   // to call web3 API
import './App.css';
import secret from './.secret';

// const fs = require('fs');
// const path = require("path");    // used to direct creation of ABI in another directory than default
const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
//  const getAccount = require('./getAccount').getAccount
let privatek;
let account;

class MakePepito extends React.Component{
  constructor() {
    super();
    this.web3 = {};
    this.accounts = [];
    this.state = {loading: false};
  }

  // This will fetch the private key from .secret file
  componentDidMount(){
    fetch(secret)
    .then(r => r.text())
    .then(text => {
      privatek = text;
      privatek = '0x92306a3bac37d6e7cc4928152bd7e7d00858421d0b9aca57f3783922cc794a9e';  // temporary hack to deploy in production 
      //console.log('- MakePepito from .secret privatekey', privatek);
    });
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

      async function awaitWrapper(){
        account = web3.eth.accounts.privateKeyToAccount(privatek)
        console.log(`Account address: ${account.address}`)
        kit.addAccount(account.privateKey)
      }

      this.setState({loading: true});
      awaitWrapper()        // obtain ETH/CEL account to pay for transactions

      //. Create Random Account Everytime
      //let randomAccount = web3.eth.accounts.create()
      //console.log(randomAccount);

      // 3. Get the token contract wrappers
      let goldtoken = await kit.contracts.getGoldToken()
      let stabletoken = await kit.contracts.getStableToken()

      // 4. Address to look up
      let anAddress = account.address;

      // 5. Get token balances
      let celoBalance = await goldtoken.balanceOf(anAddress)
      let cUSDBalance = await stabletoken.balanceOf(anAddress)

      // Print balances
      console.log(`${anAddress}'s CELO balance: ${web3.utils.fromWei(celoBalance.toString())} CEL`)
      console.log(`${anAddress}'s cUSD balance: ${web3.utils.fromWei(cUSDBalance.toString())} cUSD`)

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
        const web3Connected = true;
        const ownerPepito = await pepitoInstance.methods.owner().call();
        const disguiseCount = await pepitoInstance.methods.disguiseCount().call();
        let disguiseAddresses = [];
        for (let i=0; i< disguiseCount; i++) {disguiseAddresses.push(0)};   // make array
        disguiseAddresses.forEach(async (value, index, array) =>{           // fill array with addresses
            disguiseAddresses[index] = await pepitoInstance.methods.disguiseAddresses(index).call();
        });
        /*console.log("1.user account", accounts,
        ".\n 1.makePepito().Pepito contract", pepitoInstance,
        ".\n  1.Pepito contract address", deployedNetwork.address,
        ".\n   1.web3Connected", web3Connected,
        ".\n    1.'owner' variable in Pepito", ownerPepito); 
        ".\n     1.total of disguises", disguiseCount,
        ".\n      1.all disguises addresses", disguiseAddresses); */

        /** @dev return to App.js web3, accounts, pepitoContract etc. */
        this.setState({loading: false});
        this.props.connectedB(web3, accounts, pepitoInstance, deployedNetwork.address,  web3Connected,
             ownerPepito, disguiseCount, disguiseAddresses);
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
        { this.state.loading ?
            <div className="spinner">
                <BounceLoader
                    color={'#6CEC7D'}
                    loading={this.state.loading}
                />
            </div>:
            <button className="btn btn-lg btn-secondary mb-5"
            onClick={this.makePepito}>Get blockchain interface & Pepito instance</button>
        }
      </>
    )
  }
}

export default MakePepito;
