import Card from "./Card";
import "./Second.css";
const Second = () => {
  const stored = [
    {
      title: "Pizza",
      description: "you have consumed ",
      value: 56,
      img: "https://imgur.com/PPF5hRK.png",
    },
    {
      title: "Burger",
      description: "you have consumed ",
      value: 66,
      img: "https://imgur.com/Ce2Wl9b.png",
    },
    {
      title: "Coke",
      description: "you have consumed",
      value: 200,
      img: "https://imgur.com/fNLZb6M.png",
    },
    {
      title: "Fried Rice",
      description: "you have consumed",
      value: 150,
      img: "https://imgur.com/8z5hDHt.png",
    },
  ];
  return (
    <div className="card-container">
      {stored.map((i) => (
        <Card
          title={i.title}
          description={i.description}
          value={i.value}
          img={i.img}
        />
      ))}
    </div>
  );
};

export default Second;
