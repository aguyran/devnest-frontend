import { useSelector } from "react-redux";
import style from "../styles/wishlist.module.css";
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishListItems);
  console.log(wishlist);
  return (
    <div className={style.container}>
      {Object.keys(wishlist).map((el) => (
        <div className={style.wishlistCard} key={el}>
          <img src={wishlist[el].image} alt={wishlist[el].title} />
          <h2 className={style.title}>{wishlist[el].title}</h2>
          <p className={style.description}>{wishlist[el].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
