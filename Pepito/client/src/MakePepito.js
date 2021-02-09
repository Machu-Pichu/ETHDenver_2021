/**  class MakePepito - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice connect to Web3 instance of Pepito, call App.connectB to store on App.state
*/
import React from 'react';
import getWeb3 from "./getWeb3";                    // to call web3 API
import Pepito from "./contracts_abi/Pepito.json";   // to call web3 API
import './App.css';

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
            try {
                /**
                 * @dev via Metamask, get blockchain network provider & web3 instance by trying several channels
                 * @dev get the user account address
                 */
                this.web3 = await getWeb3();                        // use `this`to transfer web3 to the next `try` block
                this.accounts = await this.web3.eth.getAccounts();  // use `this`to transfer accounts to the next `try` block
            } catch (error) {
                /// @dev catch any errors for any of the above operations.
                alert(
                    `Failed to load web3. Check in Metamask that this page is connected to a blockchain account. Else see browser console for error details.`,
                );
                console.error(error);
            }

            try {
                /** @dev create a Pepito singleton contract instance */
                const web3 = this.web3;                             // get the web3 provider
                const accounts = this.accounts;                     // get the reachable accounts
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