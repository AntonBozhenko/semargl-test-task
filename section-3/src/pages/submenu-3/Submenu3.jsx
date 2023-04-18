/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Table from '../../components/Table/Table';
import styles from './Submenu3.module.scss';

export default function Submenu3() {
  const text = localStorage.getItem('text');

  return (
    <div className={styles.submenu3}>
      <h1>Подменю 3</h1>
      <h2>Текстовое содержимое из раздела 1</h2>
      <p>{text}</p>
      <h2>Отфильтрованная таблица</h2>
      <Table />
    </div>
  );
}
