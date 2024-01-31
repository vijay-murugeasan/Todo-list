import React from "react";

function Filter({
  isDarkTheme,
  todos,
  setFilter,
  setTodos
}) {

  function handleShowAll() {
    setFilter(() => 'all');
  }

  function showCompleted() {
    const completedTodos = todos.filter((todo) => todo.completed);
    if (completedTodos.length <= 0) return setFilter("all");
    setFilter(() => "completed");
  }

  function showActive() {
    const activeTodos = todos.filter((todo) => !todo.completed);
    if (activeTodos.length <= 0) return setFilter("all");
    setFilter("active");
  }

  function clearCompleted() {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    if (todos.length > 0)
      return setFilter("all");

  };

  const CountItemsLeft = todos.filter((todo) => !todo.completed).length;
  return (
    <div className={isDarkTheme ? "controls" : "controls light"}>
      <button className="items-left">
        <span className="number">{CountItemsLeft > 0 ? `${CountItemsLeft} Items Left` : 'No Tasks Left'}</span>
      </button>
      <div className={isDarkTheme ? "list-controls" : "list-controls light"}>
        <button onClick={handleShowAll} className="all">
          All
        </button>
        <button onClick={showActive} className="active">
          Active
        </button>
        <button onClick={showCompleted} className="completed">
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} className="clear-all">
        Clear Completed
      </button>
    </div>
  );
}

export default Filter;
