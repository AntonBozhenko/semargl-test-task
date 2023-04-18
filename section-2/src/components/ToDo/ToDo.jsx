/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { checkTodo, delTodo, editTodo } from './functions';
import styles from './ToDo.module.scss';

function Todo({ todo, setTodos }) {
  const [text, setText] = useState(todo.text);
  const [showEdit, setShowEdit] = useState(false);

  return (
    showEdit ? (
      <div className={styles.edit}>
        <input onChange={(event) => setText(event.target.value)} type="text" value={text} />
        <img onClick={() => { editTodo(todo.id, text, setTodos, setShowEdit); }} src="https://cdn-icons-png.flaticon.com/512/1828/1828032.png" alt="изменить" />
      </div>
    )
      : (
        <div className={styles.todo}>
          <img onClick={() => { checkTodo(todo.id, setTodos); }} src="https://cdn-icons-png.flaticon.com/512/2732/2732655.png" alt="выполнить" />
          <p className={todo.isDone && styles.checked}>{text}</p>
          <img onClick={() => { setShowEdit(true); }} src="https://cdn-icons-png.flaticon.com/512/1828/1828032.png" alt="изменить" />
          <img onClick={() => { delTodo(todo.id, setTodos); }} className="delete" src="https://cdn-icons-png.flaticon.com/512/9247/9247842.png" alt="удалить" />
        </div>
      )
  );
}

export default Todo;
