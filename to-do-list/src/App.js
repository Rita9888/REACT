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
      { todo: "Learn React", important: false, id: 1, done: true },
      { todo: "Learn JS", important: false, id: 2, done: false },
      { todo: "Have a lunch", important: false, id: 3, done: false },
      { todo: "Drink Tea", important: false, id: 4, done: false }
    ]
  };

  onDelete = id => {
    this.setState(prevState => {
      const todos = this.state.todoData.filter(todo => todo.id !== id);
      console.log(todos);
      return {
        todoData: todos
      };
    });
  };

  onAdded = todo => {
    this.setState(prev => {
      return {
        todoData: [
          ...prev.todoData,
          { todo, important: false, id: ++this.maxId }
        ]
      };
    });
  };

  onImportant = id => {
    this.setState(prevState => {
      const todos = prevState.todoData.map(todo => {
        if (todo.id === id) {
          todo.important = true;
          console.log(todo.important);
        }

        return todo;
      });
      return {
        todoData: todos
      };
    });
  };

  onToggle = id => {
    this.setState(prevState => {
      const todos = prevState.todoData.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
          console.log(todo.done);
        }
        return todo;
      });
      return {
        todoData: todos
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const done = todoData.filter(toDo => toDo.done).length;
    const toDo = todoData.length - done;
    return (
      <div className="to-do-app">
        <div className="header">
          <Header />
          <QuantityTask toDo={toDo} done={done} />
        </div>
        <div className="searchAndSort">
          <InputSearch />
          <div className="buttons">
            <FilterPanel />
          </div>
        </div>
        <TodoList
          todos={todoData}
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
