import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <h1>Todo List Returns</h1>
      <Provider store = {store}>
      <AddTodo />
      <ListTodo />
      </Provider>
    </div>
  );
}

export default App;
