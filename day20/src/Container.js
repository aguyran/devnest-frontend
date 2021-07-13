import { useState } from "react";
import Card from "./Card";
import "./Container.css";
const Second = () => {
  const [stored, setStored] = useState([
    {
      id: 1,
      title: "Pizza",
      description: "you have consumed ",
      value: 56,
      img: "https://imgur.com/PPF5hRK.png",
    },
    {
      id: 3,
      title: "Burger",
      description: "you have consumed ",
      value: 66,
      img: "https://imgur.com/Ce2Wl9b.png",
    },
    {
      id: 4,
      title: "Coke",
      description: "you have consumed",
      value: 200,
      img: "https://imgur.com/fNLZb6M.png",
    },
    {
      id: 5,
      title: "Fried Rice",
      description: "you have consumed",
      value: 150,
      img: "https://imgur.com/8z5hDHt.png",
    },
  ]);
  const handleDelete = (id) => {
    const newStored = stored.filter((i) => i.id !== id);
    setStored(newStored);
  };
  return (
    <div className="card-container">
      {stored.map((i) => (
        <Card
          key={i.id}
          title={i.title}
          description={i.description}
          value={i.value}
          img={i.img}
          id={i.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Second;
