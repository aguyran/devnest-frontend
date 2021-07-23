import "./App.css";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

function App() {
  const [isDisabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <Alert show={!isDisabled} variant="danger">
        <Alert.Heading>Hello!</Alert.Heading>
        <p>Oops you got an error</p>
        <button onClick={() => setDisabled((s) => !s)}>click</button>
      </Alert>
    </div>
  );
}

export default App;
