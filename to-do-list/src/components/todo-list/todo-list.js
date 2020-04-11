import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({ todos, onToggle, onDelete, onImportant }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggle={() => onToggle(id)}
          onDelete={() => onDelete(id, "1234")}
          onImportant={() => onImportant(id, "1234")}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
