import React from 'react';
import './App.css';
import Header from './components/Header';
import { InputSearch } from './components/inputSearch';
import TodoList from './components/todoList';
import SortButtonAll from './components/sortButtonAll';
import SortButtonActive from './components/sortButtonActive';
import SortButtonDone from './components/sortButtonDone';
import { InputAdd } from './components/inputAdd';
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
          <SortButtonAll /> 
          <SortButtonActive />
          <SortButtonDone />
        </div>
      </div>
      <TodoList />
      <InputAdd/>
    </div>
);
}

export default App;
