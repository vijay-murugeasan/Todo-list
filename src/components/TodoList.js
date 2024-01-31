import React from "react";
import Todo from "./Todo";

function TodoList({ isDarkTheme, todos, setTodos, filter }) {

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const onCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <ul className={isDarkTheme ? "list" : "list light"}>
      {filteredTodos.length ? (
        filteredTodos.map((todo) => {
          return (
            <Todo
              isDarkTheme={isDarkTheme}
              todo={todo}
              key={todo.id}
              onRemoveTodo={onRemoveTodo}
              onCompleteTodo={onCompleteTodo}
            />
          );
        })
      ) : (
        <li className={isDarkTheme ? "empty-todo" : "empty-todo light"}>
          Start Adding Tasks
        </li>
      )}
    </ul>
  );
}

export default TodoList;
