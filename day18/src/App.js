import "./App.css";
import Row from "./Row";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Second from "./Second";
function App() {
  const rows = [];
  for (let i = 0; i < 8; i++) {
    rows.push(i % 2 === 0 ? <Row isOdd key={i} /> : <Row key={i} />);
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h2>Chess board</h2>
            <div className="chessBoard">{rows}</div>
            <Link to="/second">Second Tha</Link>
          </Route>
          <Route path="/second">
            <Second></Second>
            <Link to="/">First Tha</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
