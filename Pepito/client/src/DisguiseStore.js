/**  class DisguiseStore - project Pepito
* @author Vu Tien Khang - Jan 2021
* @notice send transaction to deploy a disguiseContract and
* @notice set the disguise state variable of this contract
* @dev disguiseCount1 = count of disguises, in [1,n], because disguiseCount using safeMath not working yet
*/
import React from 'react';
import './App.css';
import PepitoDisguise from "./contracts_abi/PepitoDisguise.json";   // to call web3 API
import { BounceLoader } from 'react-spinners';

const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)

class DisguiseStore extends React.Component{
    constructor() {
        super();
        this.state = {};
        this.state.loading = false;
    }

    storeDisguise = async () => {
        const web3Connected = this.props.web3Connected;
        //console.log("--> 2.storeDisguise, web3Connected", web3Connected);

        if(web3Connected){      // TODO: add a try-catch here
            /** @dev    get the Factory contract */
            const pepitoInstance = this.props.pepitoInstance;
            //console.log("      2.storeDisguise.Pepito instance", pepitoInstance);

            /** @dev    tell the Factory contract to deploy a PepitoDisguise contract */
            this.setState({loading: true});
            await pepitoInstance.methods.createPepitoDisguise()
                .send({from: this.props.ownerPepito, gasLimit: "13000000"});
            // let tx = await kit.sendTransactionObject(disguiseReceipt, { from: this.props.ownerPepito, gasLimit: "13000000" }) // Send the transaction
            // const receipt = await tx.waitReceipt()
            // console.log(receipt)
            //console.log('   2.storeDisguise-state.disguiseReceipt', disguiseReceipt)

            /** @dev    obtain latest array of all disguise addresses, using event of type PepitoDisguiseCreated
            * note that in the way Pepito contract increments the disguiseCount, its value is in the range [1,n]
            */
            const lastEvent = await pepitoInstance.getPastEvents('PepitoDisguiseCreated', {});
            const disguiseCount = lastEvent[0].returnValues.disguiseCount;
            // to update the count in the render function & to stop the spin wheel
            this.setState({disguiseCount: disguiseCount, loading: false});
            const disguiseAddresses = lastEvent[0].returnValues.disguiseAddresses;
            const disguiseAddress = lastEvent[0].returnValues.disguiseAddresses[disguiseCount-1];
            console.log('...     2.storeDisguise.lastEvent, count =', disguiseCount,
            ', disguise addresses', disguiseAddresses);

            /** @dev    build the array of options of features of this disguise to store it
            * @dev     today we hard-code the features and their options to reduce blockchain storage
            * @dev     when we'll be on IPFS, we'll use key-value pairs
            */
            const {idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor} = this.props.idxDisguise;
            const disguise2store = [idxTopType, idxHatColor, idxAccessoriesType, idxHairColor, idxFacialHairType, idxFacialHairColor,
                idxClotheType, idxClotheColor, idxEyeType, idxEyebrowType, idxMouthType, idxSkinColor];
            console.log('        2.storeDisguise.disguise2store =', disguise2store);
            /** Note: we could also make a single string of 24 characters with the 12 numbers by using string cat on
            const pad2 = (num) => String(num).padStart(2, '0');
            const disguise2store = pad2(idxTopType)+pad2(idxHatColor)+pad2(idxAccessoriesType) etc. */

            /** @dev    return to App.js the count of disguises, their addresses & the disguise's options */
            this.props.deployedDisguise(disguiseCount, disguiseAddresses, disguise2store);

            /** create with web3 a connection to the last pepitoDisguise; */
            const pepitoDisguise = new this.props.web3.eth.Contract(
                PepitoDisguise.abi,
                disguiseAddress,
            );
            /** @dev tell the PepitoDisguise contract to store the array of indexes of its features */
            await pepitoDisguise.methods.storeDisguise(disguise2store)
                .send({from: this.props.ownerPepito, gasLimit: "13000000" });

        
            //const txObject = await instance.methods.setName(newName) // Encoding a transaction object call to the contract
            //let tx2 = await kit.sendTransactionObject(storeDisguiseReceipt, { from: this.props.ownerPepito, gasLimit: "13000000" }) // Send the transaction
            //const receipt2 = await tx2.waitReceipt()
            //console.log(receipt2)

            //console.log("stored Disguise", storeDisguiseReceipt, disguise2store);

        } else alert("Please get first the blockchain interface & Pepito credentials");
    }

    render() {
        return(
            <>
            <span>Hint: better not store twice the same disguise :)</span>
            <button className="btn btn-lg btn-secondary mb-5"
            onClick={this.storeDisguise}>Store disguise on blockchain
            </button>
            { this.state.loading ?
                <div className="spinner">
                <BounceLoader
                    color={'#6c757d'}
                    loading={this.state.loading}
                />
                </div>:
                <span>, currently... {this.state.disguiseCount}</span>
            }
            </>
        )
        }
}

export default DisguiseStore;
