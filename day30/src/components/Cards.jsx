import style from "../styles/card.module.css";
import { setCurrentProduct } from "../slices/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cards = (currentState) => {
  const dispatch = useDispatch();
  const { id, title, description, image, price } = currentState.currentState;
  return (
    <Link
      to={`/product/${id}`}
      onClick={() => dispatch(setCurrentProduct(currentState.currentState))}
      className = {style.links}
    >
      <div className={style.container}>
        <img src={image} alt={title} />
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}>{description}</div>
        <p className={style.price}>Price ₹{Math.floor(price * 73)}</p>
      </div>
    </Link>
  );
};

export default Cards;
