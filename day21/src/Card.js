const Card = ({ title, value, handleClick, handleEdit }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
      <button onClick={handleClick}>delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Card;
