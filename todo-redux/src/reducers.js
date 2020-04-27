const reducer = (
  state = { todos: ["read", "eat", "run", "jump", "sleep"], value: "" },
  action
) => {
  switch (action.type) {
    case "ADD_TASK":
      return { todos: [...state.todos, action.payload], value: "" };
    case "GET_VALUE":
      return { todos: [...state.todos], value: action.value };
    default:
      return state;
  }
};

export default reducer;
