import React from "react";
import "./App.css";
import { useState } from "react";
import CardContainer from "./CardContainer";
export interface todoStruct {
  description: string;
  status: boolean;
}
const App = () => {
  const [todos, setTodos] = useState<todoStruct[]>([]);
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <div className="wrapperforinput">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button
          className="addBtn"
          onClick={() => {
            setTodos([...todos, { description: todo, status: false }]);
          }}
        >
          Add
        </button>
      </div>
      <CardContainer todos={todos} setTodos={setTodos}></CardContainer>
    </div>
  );
};

export default App;
