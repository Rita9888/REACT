import React from "react";

import "./todo-list-item.css";

class TodoListItem extends React.Component {
  toggleDone() {
    this.props.onToggle();
  }
  removeHandler() {
    this.props.onDelete();
  }

  importantHandler() {
    this.props.onImportant();
  }

  render() {
    const { todo, important, done } = this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    let className = `todo-list-item`;

    if (done) {
      className += " done";
    }

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={() => this.toggleDone()}
        >
          {todo}
        </span>
        <div className="li-btn">
          <button className="delete-btn" onClick={() => this.removeHandler()}>
            <i class="far fa-trash-alt"></i>
          </button>
          <button
            className="important-btn"
            onClick={() => this.importantHandler()}
          >
            !
          </button>
        </div>
      </span>
    );
  }
}

export default TodoListItem;
