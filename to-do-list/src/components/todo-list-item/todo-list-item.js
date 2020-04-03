import React from "react";

import "./todo-list-item.css";

class TodoListItem extends React.Component {
  state = {
    done: false
  };
  toggleDone() {
    this.setState(prevState => {
      return {
        done: !prevState.done
      };
    });
  }
  removeHandler() {
    this.props.onDelete();
  }

  importantHandler() {
    this.props.onImportant();
  }

  render() {
    const { todo, important } = this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    let className = `todo-list-item`;

    if (this.state.done) {
      className += " done";
    }

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={() => this.toggleDone(todo)}
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
