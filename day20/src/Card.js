import "./Card.css";
const Card = ({ title, description, value, img, id, handleDelete }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="img-container">
        <img src={img} alt={title}></img>
      </div>
      <p className={value > 100 ? "warning" : "green"}>
        {description} {value}
      </p>
      <button className="delete-btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Card;
