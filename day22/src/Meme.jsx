import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    boxes: [],
  });
  const [image, setImage] = useState(meme.url);
  let formData = new FormData();
  formData.append("template_id", meme.id);
  formData.append("username", process.env.REACT_APP_USERNAME);
  formData.append("password", process.env.REACT_APP_PASSWORD);
  const handleClick = () => {
    let url = `https://api.imgflip.com/caption_image`;
    form.boxes.map((i, index) => {
      formData.append(`boxes[${index}][text]`, i.text);
      return 0;
    });
    fetch(url, {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((data) => {
        setImage(data.data.url);
      });
    });
  };
  return (
    <div className="meme">
      <img src={image} alt="" />
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
