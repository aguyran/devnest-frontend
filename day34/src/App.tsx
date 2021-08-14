import React from "react";
import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "./CardContainer";
import { addTodo } from "./slices/todosSlice";
export interface todoStruct {
  description: string;
  status: boolean;
}
const App = () => {
  const [currentTodo, setCurrentTodo] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="wrapperforinput">
        <input
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          onBlur={(e) => setCurrentTodo(e.target.value)}
        ></input>
        <button
          className="addBtn"
          onClick={() => {
            dispatch(addTodo({ description: currentTodo, status: false }));
          }}
        >
          Add
        </button>
      </div>
      <CardContainer></CardContainer>
    </div>
  );
};

export default App;
