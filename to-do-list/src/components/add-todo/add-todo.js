import React from "react";

import "./add-todo.css";

class AddTodo extends React.Component {
  state = {
    label: ""
  };
  onChange({ target: { value } }) {
    this.setState({ label: value });
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className="add-item" onSubmit={this.onSubmit}>
        <input
          className="input-add"
          id="add"
          value={this.state.label}
          onChange={e => this.onChange(e)}
        />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export { AddTodo };
