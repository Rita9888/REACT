import React from 'react'
import TodoListItem from './todoListItem';

function TodoList(){
  const todoList = ['Learn React', 'Learn JS', 'Read Book','Drink Tea'];
  const element = todoList.map((item, index) => (
    <TodoListItem key={index} todo={item}/> 
  ));
  return <ul>{element}</ul>
 
}

export default TodoList;

