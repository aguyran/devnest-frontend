import "./Card.css";
const Card = ({ title, value, handleClick, handleEdit }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>You Have Consumed {value} calories</p>
      <button className="delete-btn" onClick={handleClick}>
        Delete
      </button>
      <button className="edit-btn" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default Card;
