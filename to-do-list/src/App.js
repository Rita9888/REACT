import React from 'react';
import './App.css';
import Header from './components/Header';
import { InputSearch } from './components/inputSearch';
import TodoList from './components/todoList';
import FilterPanel from './components/filterPanel';
import { AddTodo } from './components/addTodo';
import QuantityTask from './components/quantityTask';


function App() {
  return (
    <div className='to-do-app'>
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
      <TodoList />
      <AddTodo/>
    </div>
);
}

export default App;
