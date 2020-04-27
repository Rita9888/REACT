export const addTask = (todo) => ({
  type: "ADD_TASK",
  payload: todo,
});

export const getValue = (value) => ({
  type: "GET_VALUE",
  value,
});
