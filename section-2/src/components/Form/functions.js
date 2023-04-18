export function handleChange(event, setText) {
  setText(event.target.value);
}

export function addTodo(setTodos, text, setText) {
  const todos = JSON.parse(localStorage.getItem('todos'));

  if (todos && Object.keys(todos).length) {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      text,
      isDone: false,
    };

    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setTodos((prev) => [...prev, newTodo]);
  } else {
    const newTodo = {
      id: 1,
      text,
      isDone: false,
    };

    localStorage.setItem('todos', JSON.stringify([newTodo]));
    setTodos([newTodo]);
  }

  setText('');
}
