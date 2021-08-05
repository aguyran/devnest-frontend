import style from "../styles/card.module.css";

const Cards = ({ imageUrl: image, title, description, price }) => {
  return (
    <div className={style.container}>
      <img src={image} alt={title} />
      <h3 className={style.title}>{title}</h3>
      <div className={style.description}>{description}</div>
      <p className={style.price}>Price ₹{Math.floor(price * 73)}</p>
    </div>
  );
};

export default Cards;
