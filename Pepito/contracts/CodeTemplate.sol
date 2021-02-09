// SPDX-License-Identifier: MIT
// version of Jan 17, 2021
pragma solidity >=0.4.22 <0.8.0;
/*  Order of contract elements
    1.	    Pragma statements
    2.	    Import statements
    3.	    Interfaces
    4.	    Libraries
    5.	    Contracts
*/

/**
    @title  Machu Picchu's template structure of all Solidity smart contracts.
    @author Vu Tien Khang
    @notice this organisation of code will make it earsier to review code among contributors
    @notice see https://docs.soliditylang.org/en/v0.5.3/style-guide.html

    @dev    Remix-compiled successfully 2020-12-30
*/

// imports examples
import "../client/node_modules/@openzeppelin/contracts/math/SafeMath.sol";
//import "./SafeMath.sol";      // used to compile in Remix

contract CodeTemplate {
    using SafeMath for uint256;
/* order of statements inside de contract
    1.	    State variables
    2.	    Struct, Arrays or Enums
    3.	    Events
    4.	    Function Modifiers
    5.	    Constructor
    6.	    Fallback — Receive function
    7.	    External visible functions
    8.	    Public visible functions
    9.	    Internal visible functions
    10.	    Private visible functions

order of function modifiers
    1.	    Visibility
    2.	    Mutability
    3.	    Virtual
    4.	    Override
    5.	    Custom modifiers
*/

    bool public stopped;            /// @dev    the circuit breaker
    address public owner;           /// @dev    account that deployed Pepito

    event PepitoDisguiseCreated(uint256 disguiseCount, uint256 disguiseCount1, address[64] disguiseAddresses);
    
    modifier stopInEmergency() {    /// @dev    the caller of the breaker must be Pepito
        if(!stopped) _;
    }

    constructor() public {
        stopped = false;
        owner = msg.sender;     /// @dev    the owner is the EOA that deployed Pepito
    }
    
    function someFunction() public payable stopInEmergency returns(address){
        /// @dev    create a disguise and (future) record it in IPFS
        /// @dev    stop all creation of new disguise if circuit breaker activated
        return owner;
    }
    
    // function someFunction() public payable returns(address) {
    // }
    
}
