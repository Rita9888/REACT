import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://rn-todo-app-c27d4.firebaseio.com/todos.json"
      );
      setTodos(result.data);
    };
    fetchData();
  }, []);

  const transformTodos = [];
  for (const key in todos) {
    const title = todos[key];
    transformTodos.push(title);
  }

  return (
    <div className="App">
      {transformTodos.map((item, id) => (
        <div key={id}>{item.title}</div>
      ))}
    </div>
  );
}
export default App;
