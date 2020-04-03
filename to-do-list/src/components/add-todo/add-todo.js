import React from "react";

import "./add-todo.css";

function AddTodo() {
  return (
    <div className="add-item">
      <input className="input-add" id="add" />
      <label className="add-btn" htmlFor="search">
        Add
      </label>
    </div>
  );
}

export { AddTodo };
