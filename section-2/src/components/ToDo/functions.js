export function editTodo(id, text, setTodos, setShowEdit) {
  const todos = JSON.parse(localStorage.getItem('todos'));

  const editedTodos = todos.map((el) => {
    if (Number(el.id) === Number(id)) {
      return {
        id,
        text,
        isDone: el.isDone,
      };
    }
    return el;
  });

  localStorage.setItem('todos', JSON.stringify(editedTodos));
  setTodos(editedTodos);
  setShowEdit(false);
}

export function checkTodo(id, setTodos) {
  const todos = JSON.parse(localStorage.getItem('todos'));

  const editedTodos = todos.map((el) => {
    if (Number(el.id) === Number(id)) {
      return {
        id,
        text: el.text,
        isDone: !el.isDone,
      };
    }
    return el;
  });

  localStorage.setItem('todos', JSON.stringify(editedTodos));
  setTodos(editedTodos);
}

export function delTodo(id, setTodos) {
  const todos = JSON.parse(localStorage.getItem('todos'));

  const filteredTodos = todos.filter((el) => Number(el.id) !== Number(id));

  localStorage.setItem('todos', JSON.stringify(filteredTodos));
  setTodos(filteredTodos);
}
