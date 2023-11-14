import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  //32:40
  return (
    <div className="App">
      <span className="heading">S-TODO</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
