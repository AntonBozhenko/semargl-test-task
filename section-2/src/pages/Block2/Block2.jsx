/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styles from './Block2.module.scss';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';

export default function Block2() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  return (
    <div className={styles.block2}>
      <h1>Простой ToDo лист</h1>
      <Form setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
