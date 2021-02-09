const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, accounts) {
    const userAddress = accounts[1];            // my Metamask account with Kovan ETH
    deployer.deploy(Migrations, userAddress);
};
