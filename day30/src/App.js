import "./App.css";
import Navbar from "./components/Navbar";

import Container from "./components/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route exact path="/product/:id/">
            <Details />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
