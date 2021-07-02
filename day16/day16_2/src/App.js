import logo from "./logo.svg";
import "./App.css";
const array2 = [];
for (let i = 0; i < 100; i++) {
  array2.push(i);
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="board">
        {array2.map((i) => (
          <div className="test" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
