import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  console.log(meme);

  const [form, setForm] = useState({
    template_id: meme.id,
    username: process.env.IMGFLIP_USERNAME,
    password: process.env.IMGFLIP_PASSWORD,
    boxes: [],
  });
  const handleClick = () => {
    console.log(form);
  };
  return (
    <div className="meme">
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((key, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          ></input>
        ))}
      </div>
      <div>
        <button onClick={handleClick}>Generate Meme</button>
        <button onClick={() => setMeme(null)}>Go Back</button>
      </div>
    </div>
  );
};

export default Meme;
