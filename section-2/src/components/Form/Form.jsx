/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './Form.module.scss';
import { addTodo, handleChange } from './functions';

function Form({ setTodos }) {
  const [text, setText] = useState('');

  return (
    <div className={styles.form}>
      <input onChange={(event) => { handleChange(event, setText); }} type="text" className="w-50 rounded p-1 me-2" value={text} />
      <button onClick={() => { addTodo(setTodos, text, setText); }} type="button">Добавить</button>
    </div>
  );
}

export default Form;
