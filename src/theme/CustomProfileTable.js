import React from "react";



const CustomProfileTable = ({ data }) => {

  return (<table>
    <thead>
      <tr>
        <th>Encoding Name</th>
        {Object.keys(Object.entries(data)[0][1]).map(element => {
          return <th>{element}</th>
        })}
      </tr>
    </thead>
    <tbody>
      {Object.entries(data).map(entry => {
        return (
          <>
            <tr>
              <td >{entry[0]}</td>
              {Object.entries(entry[1]).map(values => {
                return <td>{values[1]}</td>
              })}
            </tr>
          </>
        )
      })}
    </tbody>
  </table>)
};

export default CustomProfileTable;