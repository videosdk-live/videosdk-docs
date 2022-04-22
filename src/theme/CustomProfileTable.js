import React from "react";



const CustomProfileTable = ({ data }) => {

  return (<table>
    <thead>
      <tr>
        <th>Encoding Name</th>
        <th colspan="2">Description </th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(data).map(entry => {
        return (
          <>
            <tr>
              <td rowSpan={Object.keys(entry[1]).length}>{entry[0]}</td>
              <td>{Object.entries(entry[1])[0][0]}</td>
              <td>{Object.entries(entry[1])[0][1]}</td>
            </tr>
            {Object.entries(entry[1]).slice(1, Object.keys(entry[1]).length).map(values => {
              return (<tr>
                <td>{values[0]}</td>
                <td>{values[1]}</td>
              </tr>)
            })}
          </>
        )
      })}
    </tbody>
  </table>)
};

export default CustomProfileTable;