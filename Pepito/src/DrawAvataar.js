/**  class DrawAvataar - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice generate the drawing of the avataar
*/
import React from 'react';
import './App.css';
import Avatar from 'avataaars'; 	        // from node.js module

class DrawAvataar extends React.Component {

    render() {
        /** @dev retrieve Pepito disguise options from this.props.disguise */
        const {topType, hatColor, accessoriesType, hairColor, facialHairType, facialHairColor,
        clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor} = this.props.disguise;
  
        return(
            <div className="avatar">
                <Avatar
                style={{width: '400px', height: '400px'}}
                avatarStyle='Circle'
                topType={topType}
                hatColor={hatColor}
                accessoriesType={accessoriesType}
                hairColor={hairColor}
                facialHairType={facialHairType}
                facialHairColor={facialHairColor}
                clotheType={clotheType}
                clotheColor={clotheColor}
                eyeType={eyeType}
                eyebrowType={eyebrowType}
                mouthType={mouthType}
                skinColor={skinColor}
            />
          </div>
        )
    }
}

export default DrawAvataar;