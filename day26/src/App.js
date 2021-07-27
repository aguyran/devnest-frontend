import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updatedEmail, updatedName } from "./actions/index";
function App() {
  const email = useSelector((state) => state.emailReducer);
  const name = useSelector((state) => state.nameReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      EMAIL:{" "}
      <input
        type="text"
        onChange={(e) => {
          dispatch(updatedEmail(e.target.value));
        }}
      ></input>
      <br />
      NAME:{" "}
      <input
        type="name"
        onChange={(e) => {
          dispatch(updatedName(e.target.value));
        }}
      ></input>
      <p>Email:{email}</p>
      <p>Name:{name}</p>
    </div>
  );
}

export default App;
