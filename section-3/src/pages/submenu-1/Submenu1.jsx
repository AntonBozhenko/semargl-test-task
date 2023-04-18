import React from 'react';
import styles from './Submenu1.module.scss';

export default function Submenu1() {
  const todos = JSON.parse(localStorage.getItem('todos'));

  return (
    <div className={styles.submenu1}>
      <h1>Подменю 1</h1>
      <p>
        Результат выбора селектора:
        {' '}
        {localStorage.getItem('select')}
      </p>
      <h2>Текущий лист ToDo:</h2>
      <ul>
        {todos.map(({ id, text, isDone }) => (
          <li key={id}><p className={isDone && styles.checked}>{text}</p></li>
        ))}
      </ul>

    </div>
  );
}
