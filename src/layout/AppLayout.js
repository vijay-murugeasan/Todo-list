import React, { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import Filter from "../components/Filter";

function AppLayout() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isDarkTheme, setIsDarkTheme] = useState(true);


    /* THEME SWITCHER */
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    /*  CHECK IF THERE ARE COMPLETED TODOS AND THEN SET THE FILTER*/





    return (
        <div className={isDarkTheme ? "app" : "app light"}>
            <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

            <main className="main">
                <Input isDarkTheme={isDarkTheme}
                    setTodos={setTodos}
                    setFilter={setFilter}
                    todos={todos} />

                <TodoList
                    isDarkTheme={isDarkTheme}
                    todos={todos}
                    setTodos={setTodos}
                    filter={filter}
                />
                <Filter
                    isDarkTheme={isDarkTheme}
                    todos={todos}
                    setFilter={setFilter}
                    setTodos={setTodos}

                />
            </main>
        </div>
    );
}

export default AppLayout
