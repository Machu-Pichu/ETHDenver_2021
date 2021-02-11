const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

const path = require("path");    // used to direct creation of ABI in another directory than default
const Web3 = require('web3')
const ContractKit = require('../client/node_modules/@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
const getAccount = require('../client/src/getAccount').getAccount

async function awaitWrapper(){
    let account = await getAccount()
    console.log(`Account address: ${account.address}`)
    kit.addAccount(account.privateKey)
}

awaitWrapper()

module.exports = function (deployer, network, account) {
    const userAddress = account[0];              // my Metamask account with Kovan ETH
    deployer.deploy(PepitoDisguise, userAddress); /* pepitoDisguise constructor expects ownerAddress
        but since all disguises are dynamically deployed by Pepito, this deployment here is rather academic */
  deployer.deploy(Pepito);
  };
