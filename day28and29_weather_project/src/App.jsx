
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Form from "./Form";
import WeatherCard from "./WeatherCard";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ThemeToggle />
      <Form />
      <WeatherCard />
    </div>
  );
}

export default App;
