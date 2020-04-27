import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

const AddTodo = ({ todos, getValue, addTask }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    addTask(todos);
  };

  const onChange = ({ target: { value } }) => {
    getValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todos} />
      <button type="submit">Add</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
