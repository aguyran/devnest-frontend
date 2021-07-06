import Card from "./Card";
import "./Container.css";
const Container = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((i) => (
        <Card title={i.title} value={i.value}></Card>
      ))}
    </div>
  );
};

export default Container;
