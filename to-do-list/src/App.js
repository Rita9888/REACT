import React from "react";
import "./App.css";
import Header from "./components/header/header";
import { InputSearch } from "./components/input-search/input-search";
import TodoList from "./components/todo-list/todo-list";
import FilterPanel from "./components/filter-panel/filter-panel";
import { AddTodo } from "./components/add-todo/add-todo";
import QuantityTask from "./components/quantity-task/quantity-task";

function App() {
  const todoData = [
    { todo: "Learn React", important: false, id: 1 },
    { todo: "Learn JS", important: true, id: 2 },
    { todo: "Have a lunch", important: false, id: 3 },
    { todo: "Drink Tea", important: false, id: 4 }
  ];

  const onDelete = id => {
    console.log(id);
  };

  const onImportant = id => {
    console.log(id);
  };
  return (
    <div className="to-do-app">
      <div className="header">
        <Header />
        <QuantityTask />
      </div>
      <div className="searchAndSort">
        <InputSearch />
        <div className="buttons">
          <FilterPanel />
        </div>
      </div>
      <TodoList
        todos={todoData}
        onDelete={onDelete}
        onImportant={onImportant}
      />
      <AddTodo />
    </div>
  );
}

export default App;
