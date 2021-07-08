import "./App.css";
import Row from "./Row";

function App() {
  const rows = [];
  for (let i = 0; i < 8; i++) {
    rows.push(i % 2 === 0 ? <Row isOdd key={i} /> : <Row key={i} />);
  }
  return (
    <div className="App">
      <h2>Chess board</h2>
      <div className="chessBoard">{rows}</div>
    </div>
  );
}

export default App;
