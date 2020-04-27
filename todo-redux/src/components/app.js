import React from "react";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";
import "../index.css";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
