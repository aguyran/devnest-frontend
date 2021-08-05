import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";

import Container from "./components/Container";
function App() {

  return (
    <div className="App">
      <Navbar />
      <Container/>
    </div>
  );
}

export default App;
