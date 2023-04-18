/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Table.module.scss';

export default function Table() {
  const items = JSON.parse(localStorage.getItem('items'));

  return (
    <>
      <table className={styles.table}>
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
      {!items.length && <p>совпадений нет</p>}
    </>
  );
}
