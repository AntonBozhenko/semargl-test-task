/* eslint-disable react/prop-types */
import React from 'react';
import Todo from '../ToDo/ToDo';

function List({ todos, setTodos }) {
  return (
    todos.length ? (
      <div>
        {todos.map((el) => (
          <Todo key={el?.id} todo={el} setTodos={setTodos} />
        ))}
      </div>
    ) : (<h2>Дел пока-что нет</h2>)
  );
}

export default List;
