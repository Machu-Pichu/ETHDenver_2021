// React Functional Component OptionTable-V7, for later evolutions
import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

//  embedded CSS
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>      {/* '...' is spread notation in JSX to summarize all table props */}
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>   {/* '...' is spread notation in JSX to summarize all headerGroup props */}
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>      {/* '...' is spread notation in JSX to summarize all tableBody props */}
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>      {/* '...' is spread notation in JSX to summarize all row props */}
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function OptionTable() {
    /** @dev retrieve pepito disguise options from props */
    const data = React.useMemo(
    () => [       /** @dev data array = rows, array components = JSON key:value pairs*/
      {component: "topType", option: this.props.topType},
      {component: "hatColor", option: this.props.hatColor},
      {component: "accessoriesType", option: this.props.accessoriesType},
      {component: "hairColor", option: this.props.hairColor},
      {component: "facialHairType", option: this.props.facialHairType},
      {component: "clotheType", option: this.props.clotheType},
      {component: "clotheColor", option: this.props.clotheColor},
      {component: "eyeType", option: this.props.eyeType},
      {component: "eyebrowType", option: this.props.eyebrowType},
      {component: "mouthType", option: this.props.mouthType},
      {component: "skinColor", option: this.props.skinColor},
    ],
    []
  )

  const columns = React.useMemo(
    () => [       /** @dev our table has 2 columns: accessor = keys of the data array, above */
      {Header: "AvatarComponent", accessor: "component"},  // Header is any string, accessor match the JSON key
      {Header: "Option", accessor: "option"}              // a dropdown menu to select an option of the component
    ],
    []
  )

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default OptionTable;
