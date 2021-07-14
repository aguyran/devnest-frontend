import "./App.css";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    if (cards === []) console.log("array empty work");
    if (!cards) console.log("lol");
    console.log(cards);
  });
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>Item</label>
          <br />
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <br />
          <label>Calories</label>
          <br />
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <br></br>
          <button onClick={handleClick}>Add</button>
        </form>
        <br />
        <Container cards={cards} handleClick={setCards} />
      </header>
    </div>
  );
}

export default App;
