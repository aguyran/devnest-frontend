import { useEffect, useState } from "react";
import Template from "./Templates";
import "./App.css";
import Meme from "./Meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    async function xd() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setTemplates(data.data.memes);
    }
    xd();
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <Template templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
