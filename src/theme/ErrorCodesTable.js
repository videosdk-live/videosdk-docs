import React from "react";

const ErrorCodesTable = ({ errorCodes }) => (
  <table>
    <tr>
      <th>Code</th>
      <th>Type</th>
      <th>Message</th>
    </tr>
    {errorCodes.map(({ type, code, message }, i) => (
      <tr key={i}>
        <td>{code}</td>
        <td>{type}</td>
        <td>{message}</td>
      </tr>
    ))}
  </table>
);

export default ErrorCodesTable;
