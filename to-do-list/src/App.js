import React from "react";
import "./App.css";
import Header from "./components/header/header";
import { InputSearch } from "./components/input-search/input-search";
import TodoList from "./components/todo-list/todo-list";
import FilterPanel from "./components/filter-panel/filter-panel";
import { AddTodo } from "./components/add-todo/add-todo";
import QuantityTask from "./components/quantity-task/quantity-task";

class App extends React.Component {
  maxId = 100;
  state = {
    todoData: [
      { todo: "Learn React", important: true, id: 1, done: false },
      { todo: "Learn JS", important: false, id: 2, done: false },
      { todo: "Have a lunch", important: false, id: 3, done: false },
      { todo: "Drink Tea", important: false, id: 4, done: false },
    ],
    value: "",
    keyWord: "All",
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      const todos = this.state.todoData.filter((todo) => todo.id !== id);
      return {
        todoData: todos,
      };
    });
  };

  onAdded = (todo) => {
    this.setState((prev) => {
      return {
        todoData: [
          ...prev.todoData,
          { todo, important: false, id: ++this.maxId },
        ],
      };
    });
  };

  onImportant = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todoData.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }

        return todo;
      });
      return {
        todoData: todos,
      };
    });
  };

  onToggle = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todoData.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todoData: todos,
      };
    });
  };

  onGetKeyWord = (keyWord) => {
    this.setState({ keyWord });
  };

  onFilter = (todoData) => {
    if (this.state.keyWord === "Active")
      return todoData.filter((todos) => todos.important);
    else if (this.state.keyWord === "Done")
      return todoData.filter((todos) => todos.done);
    else {
      return todoData;
    }
  };

  searchTask = (todoData, value) => {
    return todoData.filter((todos) => {
      return (
        todos.todo.toLowerCase().startsWith(value) ||
        todos.todo.startsWith(value)
      );
    });
  };

  searchValue = (value) => {
    this.setState({ value });
  };

  render() {
    const { todoData, value } = this.state;
    const done = todoData.filter((toDo) => toDo.done).length;
    const toDo = todoData.length - done;
    const visibleTodo = this.onFilter(this.searchTask(todoData, value));
    return (
      <div className="to-do-app">
        <div className="header">
          <Header />
          <QuantityTask toDo={toDo} done={done} />
        </div>
        <div className="searchAndSort">
          <InputSearch searchValue={this.searchValue} />
          <div className="buttons">
            <FilterPanel onGetKeyWord={this.onGetKeyWord} />
          </div>
        </div>
        <TodoList
          todos={visibleTodo}
          onToggle={this.onToggle}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
        />
        <AddTodo onAdded={this.onAdded} />
      </div>
    );
  }
}

export default App;
