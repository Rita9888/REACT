import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <span>{item}</span>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
