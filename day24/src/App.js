import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Profile from "./Profile";
import { isLoggedIn } from "./loggedContext";
import { useState } from "react";
function App() {
  const [userLoggedIn, setUserLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <isLoggedIn.Provider value={userLoggedIn}>
            <Route exact path="/">
              <Home handleClick={setUserLogin} />
            </Route>

            <Route path="/profile">
              {userLoggedIn ? <Profile /> : <Redirect to="/" />}
            </Route>
          </isLoggedIn.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
