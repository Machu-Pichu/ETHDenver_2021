/**  class App - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice React root component
 * @dev refactored to move out most of the functions
*/
import React, { Component } from 'react';
//import Disguise from './Disguise';
import DisguiseControls from './DisguiseControls';
import DrawAvataar from './DrawAvataar';
import OptionTable from './OptionTable';

class App extends Component {
    constructor() {             // constructor is called whenever App.js code is changed and saved
        super();
        this.state = {web3Connected: false, 
            disguise:{},        // initialise disguise so that DrawAvataar has an object in first render
            web3: {},
            pepitoInstance: {},
            disguiseAddresses: []
        };
    }

    setDisguise = async (randomBigNumber, idxDisguise, disguise) => {
    /** @notice record in state the values received from Disguise.js as arguments */
        this.setState({
            randomBigNumber: randomBigNumber,
            idxDisguise: idxDisguise,   // disguise options object in key-value format
            disguise: disguise          // disguise features object in key-value format
        }, () => {
            console.log('---> state after App.setDisguise()/Disguise', Object.keys(this.state), Object.values(this.state));
        });
    }

    connectedB = async (web3, accounts, pepitoInstance, pepitoAddress, web3Connected, ownerPepito) => {
    /** @notice record in state the values received from makePepito.js as arguments */
        this.setState({
            accounts: accounts,             // array of user accounts reachable by web3
            pepitoAddress: pepitoAddress,   // scalar, address as in ABI
            pepitoInstance: pepitoInstance, // web3 contract instance
            web3Connected: web3Connected,   // boolean
            web3: web3,
            ownerPepito: ownerPepito        // address of account owner of Pepito
        }, () => {
            console.log('---> state after App.connectedB()/makePepito', Object.keys(this.state), Object.values(this.state));
        });
        //console.log('in App.connectedB(): web3', this.state.web3, ',\n Instance', this.state.pepitoInstance);
    }

    deployedDisguise = async (count, disguiseAddresses, disguiseStored) => {
    /** @notice record in state the addresses of disguises received from DisguiseStore.js as arguments */ 
        this.setState({
            disguiseCount: count,                       // count === highest rank, rank is in [1,n]
            disguiseAddresses: disguiseAddresses,       // array of addresses of PepitoDisguise contracts
            disguiseAddress: disguiseAddresses[count-1],// address of currently displayed disguise
            disguiseStored: disguiseStored              // array of unit indexes of features composing the disguise
        }, () => {
            console.log('---> state after App.deployedDisguise/DisguiseStore', Object.keys(this.state), Object.values(this.state));
        });
    }

    retrievedDisguise = async (disguiseAddress, idxDisguise, disguise) => {
        this.setState({
            disguiseAddress: disguiseAddress,
            idxDisguise: idxDisguise,           // retrieved object in key-value format features:index
            disguise: disguise                  // retrieved object in key-value format features:options
        }, () => {
            console.log('---> state after App.retrievedDisguise/DisguiseRetrieve', Object.keys(this.state), Object.values(this.state));
        });
    }

    render() {
        const disguise = this.state.disguise;
        return (
            <div className='container text-center'>
                <header>
                    <h1 className='m-5'>Pepito Disguise<sup>v0.1, on blockchain</sup></h1>
                </header>
                <div>
                    <DisguiseControls 
                        setDisguise={this.setDisguise}              // used to return the disguise
                        connectedB={this.connectedB}                // used to return the web3 and pepito
                        pepitoAddress={this.state.pepitoAddress}    // will be displayed on screen
                        disguiseAddress={this.state.disguiseAddress}    // will be displayed on screen
                        web3Connected={this.state.web3Connected}
                        web3={this.state.web3}
                        pepitoInstance={this.state.pepitoInstance}
                        ownerPepito={this.state.ownerPepito}
                        disguiseAddresses={this.state.disguiseAddresses}    //addresses of all disguise contracts
                        idxDisguise={this.state.idxDisguise}        // disguise object in key-value format features:index
                        disguiseCount={this.state.disguiseCount}    // max number of disguises = n, max index being n-1
                        deployedDisguise={this.deployedDisguise}    // used to return disguise count & address
                        retrievedDisguise={this.retrievedDisguise}  // used to return the retrieved disguise
                    />
                    <DrawAvataar disguise={disguise} />
                    <small>This disguise= <br/>{Object.values(disguise)}</small>
                    <p>Options (modifiable soon)</p>
                    <OptionTable disguise={disguise} />
                </div>
            </div>
        );
    }
}

export default App;