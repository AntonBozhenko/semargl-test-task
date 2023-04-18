/* eslint-disable react/prop-types */
import React from 'react';

export default function Table({ items }) {
  return (
    <table>
      <th>
        <td>id</td>
        <td>manufacturer</td>
        <td>model</td>
        {items.map(({ id, manufacturer, model }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{manufacturer}</td>
            <td>{model}</td>
          </tr>
        ))}
      </th>
    </table>
  );
}
