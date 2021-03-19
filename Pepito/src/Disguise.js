/**  class Disguise - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice generate random disguise, call App.setDisguise to store on App.state
*/
import React from 'react';
import './App.css';

class Disguise extends React.Component{
    constructor() {
        super();
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

    /** @dev generate a random disguise whenever the button is mounted in the rendering */
    componentDidMount = async() => {
        this.fillDisguise();
    }

    fillDisguise = () => {
        /** @dev import from npm JS random generator with some entropy */
        let getRandomValues = require("../node_modules/get-random-values");	
        var array = new Uint32Array(1);
        getRandomValues(array);             /// @dev fill array with random numbers
        let randomBigNumber = array[0]; 	/// @dev use 1st random number in the array
    
        let idxTopType = randomBigNumber % Object.values(this.options.topType).length;
        let idxHatColor = randomBigNumber % Object.values(this.options.hatColor).length;
        let idxAccessoriesType = randomBigNumber % Object.values(this.options.accessoriesType).length;
        let idxHairColor = randomBigNumber % Object.values(this.options.hairColor).length;
        let idxFacialHairType = randomBigNumber % Object.values(this.options.facialHairType).length;
        let idxFacialHairColor = randomBigNumber % Object.values(this.options.facialHairColor).length;
        let idxClotheType = randomBigNumber % Object.values(this.options.clotheType).length;
        let idxClotheColor = randomBigNumber % Object.values(this.options.clotheColor).length;
        let idxEyeType = randomBigNumber % Object.values(this.options.eyeType).length;
        let idxEyebrowType = randomBigNumber % Object.values(this.options.eyebrowType).length;
        let idxMouthType = randomBigNumber % Object.values(this.options.mouthType).length;
        let idxSkinColor = randomBigNumber % Object.values(this.options.skinColor).length;

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
        this.props.setDisguise(randomBigNumber, idxDisguise, disguise);
    }

    render(){
        return(
            <>
                <button className="btn btn-lg btn-secondary mb-5" 
                    onClick={this.fillDisguise}>Generate random disguise</button>
            </>
        )
    }
};

export default Disguise;