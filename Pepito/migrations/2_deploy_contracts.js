const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

module.exports = function (deployer, network, accounts) {
    const userAddress = accounts[1];              // my Metamask account with Kovan ETH
    deployer.deploy(PepitoDisguise, userAddress); /* pepitoDisguise constructor expects ownerAddress
        but since all disguises are dynamically deployed by Pepito, this deployment here is rather academic */
  deployer.deploy(Pepito);
  };

