import "./App.css";
import { useCallback, useState } from "react";
import useToggle from "./useToggle";
function App() {
  const [isToggled, setToggle] = useToggle(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={setToggle}>
          {isToggled ? "Hello" : "press this button"}
        </button>
      </header>
    </div>
  );
}

export default App;
