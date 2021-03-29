/**  class DisguiseRetrieve - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice retrieve disguise from blockchain
*/
import React from 'react';
import './App.js';
import PepitoDisguise from "./contracts_abi/PepitoDisguise.json";   // to call web3 API

class DisguiseRetrieve extends React.Component{
    constructor(props) {
        super(props);
        this.state = { disguiseCount: this.props.disguiseCount -0 }; // state.disguiseCount is a number, props.disguiseCount is a string
        //console.log('DisguiseRetrieve constructor: disguiseCount=', this.state.disguiseCount);
        this.options = {	/** @dev the disguise options will be factored out to be reused in OptionTable */
          topType: ['Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairMiaWallace', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'NoHair', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', /*'ShortHairShaggy',*/ 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4'],
          hatColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
          accessoriesType: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
          hairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Platinum', 'Red', 'SilverGray'],
          facialHairType: ['BeardLight', 'BeardMagestic', 'BeardMedium', 'Blank', 'MoustacheFancy', 'MoustacheMagnum'],
          facialHairColor: ['Auburn', 'Black', 'Brown', 'BrownGolden', 'brownBlack', 'Platinum', 'red'],
          clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', /*'Graphics',*/ 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
          clotheColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
          eyeType: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
          eyebrowType: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'FrownNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'],
          mouthType: ['Concerned', 'Default', 'Disbelief','Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
          skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']
        }
    }



    retrieveDisguise = async () => {
        //console.log('--- DisguiseRetrieve, retrieveDisguise(), idx2retrieve=', this.state.idx2retrieve);
        const disguiseAddresses = this.props.disguiseAddresses;     // addresses of all disguises
        const disguiseAddress = disguiseAddresses[this.state.idx2retrieve];    // address of the disguise to retrieve
        /** create with web3 a connection to that pepitoDisguise */
        const pepitoDisguise = new this.props.web3.eth.Contract(
            PepitoDisguise.abi,
            disguiseAddress,
        );
        /** @dev tell that PepitoDisguise to return the array with the values of its features */
        const storedDisguise = await pepitoDisguise.methods.readDisguise()
                .call();
        //console.log("DisguiseRetrieve - read Disguise", storedDisguise);

        // convert storedDisguise/array form/ into idxDisguise/key-value form
        let idxTopType = storedDisguise[0];
        let idxHatColor = storedDisguise[1];
        let idxAccessoriesType = storedDisguise[2];
        let idxHairColor = storedDisguise[3];
        let idxFacialHairType = storedDisguise[4];
        let idxFacialHairColor = storedDisguise[5];
        let idxClotheType = storedDisguise[6];
        let idxClotheColor = storedDisguise[7];
        let idxEyeType = storedDisguise[8];
        let idxEyebrowType = storedDisguise[9];
        let idxMouthType = storedDisguise[10];
        let idxSkinColor = storedDisguise[11];

        let idxDisguise = {
            idxTopType: idxTopType,
            idxHatColor: idxHatColor,
            idxAccessoriesType: idxAccessoriesType,
            idxHairColor: idxHairColor,
            idxFacialHairType: idxFacialHairType,
            idxFacialHairColor: idxFacialHairColor,
            idxClotheType: idxClotheType,
            idxClotheColor: idxClotheColor,
            idxEyeType: idxEyeType,
            idxEyebrowType: idxEyebrowType,
            idxMouthType: idxMouthType,
            idxSkinColor: idxSkinColor,
        };

        // convert idxDisguise/key-value into disguise/key-value
        let disguise = {
            topType: this.options.topType[idxTopType],
            hatColor: this.options.hatColor[idxHatColor],
            accessoriesType: this.options.accessoriesType[idxAccessoriesType],
            hairColor: this.options.hairColor[idxHairColor],
            facialHairType: this.options.facialHairType[idxFacialHairType],
            facialHairColor: this.options.facialHairColor[idxFacialHairColor],
            clotheType: this.options.clotheType[idxClotheType],
            clotheColor: this.options.clotheColor[idxClotheColor],
            eyeType: this.options.eyeType[idxEyeType],
            eyebrowType: this.options.eyebrowType[idxEyebrowType],
            mouthType: this.options.mouthType[idxMouthType],
            skinColor: this.options.skinColor[idxSkinColor],
        };

        this.props.retrievedDisguise(disguiseAddress, idxDisguise, disguise);
    }

    mySubmitHandler = async (event) => {
        event.preventDefault();
        const rank2retrieve = this.state.rank2retrieve - 0; // same trick as above to transform a string to a number for arithmetic compare
        const idx2retrieve = rank2retrieve - 1;
        this.setState({ disguiseCount: this.props.disguiseCount -0 });  // refresh the component's state in case new disguise was stored
        const maxCount = this.state.disguiseCount;
        // console.log('-- DisguiseRetrieve, mySubmitHandler(): idx2retrieve=', idx2retrieve, ' , maxCount', maxCount);
        if(rank2retrieve < 1) {alert("Disguise #" + rank2retrieve+ " is less than 1")} 
        else if(rank2retrieve > maxCount) {alert("Disguise #" + rank2retrieve+ " exceeds count " + maxCount)} 
        else {
            await this.setState({idx2retrieve: idx2retrieve});
            this.retrieveDisguise()
        };
      }
    myChangeHandler = async (event) => {
        this.setState({rank2retrieve: event.target.value});
    }

    render() {
        return(
            <>
                <form onSubmit={this.mySubmitHandler}>
                <p >Retrieve Disguise rank {this.state.rank2retrieve} index {this.state.idx2retrieve}</p>
                <input
                    type='text' size='2'
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit' value='Retrieve this disguise from blockchain'
                />
                </form>
            </>
        )
    }
}

export default DisguiseRetrieve;