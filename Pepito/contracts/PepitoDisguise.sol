// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

/** Solidity NatSpec format
    @title  PepitoDisguise. Demo dApp for Machu Picchu. Also Final Project of...
    @author Vu Tien Khang
    @notice Pepito is a Caribbian corsair. He can create PepitoDisguise in this demo
    @notice A disguise is composed of many features, each feature has many options
    @notice Currently, features and options are hard-coded in a array to optise blockchain storage
    @notice     ... once moved to IPFS, features and options will be key-value pairs, open-ended
    @notice Copy this contract to generate also farmers, refugees, homeless persons etc.
    @notice A disguise is a farmer, with a wallet of tokens populated by anybody who reads the description of the disguise
    @dev    PepitoDisguise's function is similar to ENS Resolver.sol, Pepito to ENS Registry.sol

    @dev    Remix-compiled successfully 2021-01-26
*/

contract PepitoDisguise {
    // state variables
    address pepitoDisguiseOwner;        /// @dev    the owner of the disguise is Pepito
    uint256 public tokenBalance;        /// @dev    running balance of pepitoTokens of this disguise
    uint256[12] public disguiseInStore;    /// @dev    the disguise, fixed array of 12 feature indexes
   
    event DisguiseStored(address disguiseAddress, uint256[12] disguise);
    event DisguiseRead(address disguiseAddress, uint256[12] disguise);

    constructor(address _pepitoDisguiseOwner/*, uint _initialTokenBalance*/) public {
        pepitoDisguiseOwner = _pepitoDisguiseOwner;
        // tokenBalance = _initialTokenBalance; // placeholder
        tokenBalance = 0;
    }
    
    function storeDisguise(uint256[12] memory _disguise2store) public payable {
        /// @dev    write the struct storedData in blockchain first, IPFS database in future
        disguiseInStore = _disguise2store;
        emit DisguiseStored(address(this), disguiseInStore);
    }

    function readDisguise() public payable returns(uint256[12] memory) {
        /// @dev    in the future, retrieves the global variable disguiseInStore from IPFS database
        /// @dev    payable so that in the future, a peson can be paid to provide personal details
        emit DisguiseRead(address(this), disguiseInStore);
        tokenBalance += 1;           // placeholder: everytime a disguise discloses its data, it will be paid
        return disguiseInStore;
    }

    function updateDisguise() public payable {
        /// @dev    read, update, write back the struct storedData in IPFS database
        /// @dev    TODO: to be filled
    }
    
    /// @dev    functions to modify individual elements of the disguise
    // function setTopType(TopTypes x) public {    /// @dev    test function, set one character feature in the struct
    //     storedDisguise.topType = x;             /// @dev    to be replaced by adequate when finalised
    // }
    // function setHatColor(HatColors x) public { storedDisguise.hatColor = x; }
    // function setAccessoriesType(AccessoriesTypes x) public { storedDisguise.accessoriesType = x; }
    // function setHairColor(HairColors x) public { storedDisguise.hairColor = x; }
    // function setFacialHairType(FacialHairTypes x) public {storedDisguise.facialHairType = x; }
    // function setClotheType(ClotheTypes x) public {storedDisguise.clotheType = x; }
    // function setClotheColor(ClotheColors x) public {storedDisguise.clotheColor = x; }
    // function setEyeType(EyeTypes x) public {storedDisguise.eyeType = x; }
    // function setEyebrowType(EyebrowTypes x) public {storedDisguise.eyebrowType = x; }
    // function setMouthType(MouthTypes x) public {storedDisguise.mouthType = x; }
    // function setSkinColor(SkinColors x) public {storedDisguise.skinColor = x; }

}
