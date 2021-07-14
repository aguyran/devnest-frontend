import "./App.css";
import { useState } from "react";
import Container from "./Container";
function App() {
  const [calories, setCalories] = useState("");
  const [item, setItem] = useState("");
  const [cards, setCards] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const newCards = [...cards, { title: item, value: calories }];
    setCards(newCards);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>Item</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <label>Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <button onClick={handleClick}>Add</button>
        </form>
        <Container cards={cards} handleClick={setCards} />
      </header>
    </div>
  );
}

export default App;
