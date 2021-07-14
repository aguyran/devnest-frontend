import Card from "./Card";
import "./Container.css";
const Container = ({ cards, handleClick }) => {
  const handleDelete = (index) => {
    const newCards = cards.filter((i, index2) => index2 !== index);
    handleClick(newCards);
  };
  const handleEdit = (index) => {};
  return (
    <div className="Container">
      {!cards || cards.length === 0 ? (
        <div>Nothing to show here, Add something </div>
      ) : (
        cards.map((i, index) => (
          <Card
            title={i.title}
            value={i.value}
            key={index}
            handleClick={() => handleDelete(index)}
            handleEdit={(e) => handleEdit(index, e)}
          />
        ))
      )}
    </div>
  );
};

export default Container;
