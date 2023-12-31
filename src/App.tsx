import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model/model";
import TodoList from "./components/TodoList";
//1:01:40
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">S-TODO</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/** TODO LIST */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
