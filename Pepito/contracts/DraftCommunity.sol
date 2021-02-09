// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Community {
/* 
    Contract to manage Machu Picchu community of persons in need
    The model of Dec 2020 is HelperInstitutions > Community > Person-in-Need
    The community would manage max 3000 P-InNeed
    The HelperInstitution would manage 3000 communities
    If a community manages private keys of P-InNeed, generation OTP for SMS, this reduces risks of hack
*/
    address public owner;
    address helperInstitution;   // just a placeholder for the future, see comments below

    mapping(address => bool) public personsInNeed;      // mapping registration status of a P-InNeed
    // today we use bool to record registration status; will be IPFS hash of the record in the future

    address[] public helperInstitutions;                // array of addresses of HelperInstitutions
    address[] public helpWallets;    // each person in need has a wallet, to be further analysed
    // this is equivalent to the Disguides of Pepito

    constructor () public {         // constructor: msg.sender could be a HelperInstitution
        owner = msg.sender;
    }

    function addPersonInNeed(address _personInNeed) public {   // To be defined. Inspired from Pepito
        require(_personInNeed != address(0));
        require(msg.sender == owner);
        personsInNeed[_personInNeed] = true;    // today we use 'true'; will be IPFS hash in the future
        helperInstitution = address(0x11111111111111111111);        // placeholder
        // we have a design issue here: a Person-in-Need have a relation n-to-n with HelpeInstitution
        // there will be a contract to associate a personInNeed with a helperInstitution
        // a helperInstitution may help n persons in need
        // a person in need may receive aid from n institutions but is always in contact with only 1 (NG)organisation
        helperInstitutions.push(helperInstitution);
        // do the same for helpWallets
    }
}
