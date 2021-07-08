import "./Card.css";
const Card = ({ title, description, value, img }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div class="img-container">
        <img src={img} alt={title}></img>
      </div>
      <p className={value > 100 ? "warning" : "green"}>
        {description} {value}
      </p>
    </div>
  );
};

export default Card;
