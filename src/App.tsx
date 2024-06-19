// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    result.push(key);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());
  console.log("App");

  const removeTodo = (todo: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((item: string) => {
        return todo != item;
      });
    });
    localStorage.removeItem(todo);
  };

  const addTodo = (todo: string) => {
    setTodos((currentTodos) => {
      return [...currentTodos, todo];
    });
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  );
}

export default App;
