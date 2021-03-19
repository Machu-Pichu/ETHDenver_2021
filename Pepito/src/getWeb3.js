/**
 * @author ConsenSys TruffleBox
 * @notice function getWeb3, copied from TruffleBox "react"
 * @dev without the window.eventListener "load" 
 *      that was necessary in Trufflebox because getWeb3 was called in componentDidMount
 */
import Web3 from "web3";

const getWeb3 = () =>
    new Promise((resolve, reject) => {
        // If our browser 'window' has been injected the object 'ethereum'...
        if (window.ethereum) {
            // then redefine web3 using window.ethereum
            const web3 = new Web3(window.ethereum);
            try {
                // Request the user for authorization to access account  
                /*await*/ window.ethereum.enable();
                // Acccounts now exposed
                resolve(web3);
            } catch (error) {
                reject(error);
            }
        }
        // if not check that web3 has been injected in 'window'
        else if (window.web3) {
            // old Metamask; use Mist/MetaMask's provider.
            const web3 = window.web3;
            console.log("Injected web3 detected.");
            resolve(web3);
            // not sure that call for events in DisguiseStore works with old versions of Metamask?
        }
        // Fallback to set the provider as a HTTP provider on localhost; use dev console port by default...
        else {
            // we don't use Metamask at all
            const provider = new Web3.providers.HttpProvider(
                "http://127.0.0.1:8545"
            );
            const web3 = new Web3(provider);
            console.log("No web3 instance injected, using Local web3.");
            resolve(web3);
        }
    });

export default getWeb3;
