/**  class OptionTable - project Pepito 
 * @author Vu Tien Khang - Jan 2021
 * @notice display a table of disguise options
 * @dev will be upgraded to let the user select the options manually
*/
import React from "react";
// import { render } from "react-dom";
import ReactTable from "react-table-6";   // in npm library
import "react-table-6/react-table.css";   // (!) to be analysed

class OptionTable extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        /** @dev retrieve Pepito disguise options from this.props.disguise */
        const {topType, hatColor, accessoriesType, hairColor, facialHairType, facialHairColor,
            clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor} = this.props.disguise;
        const data = [        // array = rows, array components = JSON key:value pairs
        {component: "topType",      option: topType},
        {component: "hatColor",     option: hatColor},
        {component: "accessoriesType",  option: accessoriesType},
        {component: "hairColor",        option: hairColor},
        {component: "facialHairType",   option: facialHairType},
        {component: "facialHairColor",  option: facialHairColor},
        {component: "clotheType",   option: clotheType},
        {component: "clotheColor",  option: clotheColor},
        {component: "eyeType",      option: eyeType},
        {component: "eyebrowType",  option: eyebrowType},
        {component: "mouthType",    option: mouthType},
        {component: "skinColor",    option: skinColor},
    ];
    const columns = [       // our table has 2 columns
        {Header: "AvatarComponent", accessor: "component"},  // 'Header' is any string, 'accessor' matches the JSON key
        {Header: "Option",          accessor: "option"}      // a dropdown menu to select an option of the component
    ];
    return (
      <div>
        <ReactTable                // ReactTable is a component 
          data={data}              // props for ReactTable
          columns={columns}        // props for ReactTable
          defaultPageSize={12}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default OptionTable;
