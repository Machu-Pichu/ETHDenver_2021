// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
import "../client/node_modules/truffle/build/Assert.sol";
import "truffle/DeployedAddresses.sol"; // no way to make solc find this file
import "../contracts/Pepito.sol";
import "../contracts/PepitoDisguise.sol";

contract TestMakeDisguise {
    uint256[12] newDisguise;

    constructor() public {
        newDisguise = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }

}
