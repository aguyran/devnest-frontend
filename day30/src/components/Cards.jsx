import style from "../styles/card.module.css";
const Cards = ({ imageUrl, imageTitle }) => {
  return (
    <div className={style.container}>
      <img src={imageUrl} alt={imageTitle} />
    </div>
  );
};

export default Cards;
