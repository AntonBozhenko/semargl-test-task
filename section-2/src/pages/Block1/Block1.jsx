/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { filterTable, handleTextChange } from './functions';
import Select from '../../components/Select/Select';
import Table from '../../components/Table/Table';
import styles from './Block1.module.scss';

export default function Block1() {
  const [select, setSelect] = useState(localStorage.getItem('select') || 'all');
  const [tableText, setTableText] = useState(localStorage.getItem('tableText') || '');
  const [items, setItems] = useState([]);

  useEffect(() => {
    filterTable(select, tableText, setItems);
  }, [select, tableText]);

  return (
    <div className={styles.block1}>
      <div>
        <Select select={select} setSelect={setSelect} />
        <input type="text" value={tableText} placeholder="фильтрация" onChange={(event) => { handleTextChange(event, setTableText); }} />
      </div>
      <Table items={items} />
      {!items.length && <p>совпадений нет</p>}
    </div>
  );
}
