import { useSelector, useDispatch } from "react-redux";
import style from "../styles/cart.module.css";
import { toggleVisible } from "../slices/cartSlice";
import CartCards from "./CartCards";
const CartDrawer = ({ setCart }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();
  return (
    <>
      {isVisible ? (
        <div className={style.cartContainer}>
          <h1 className={style.cross} onClick={() => dispatch(toggleVisible())}>
            X
          </h1>
          {Object.keys(cartItems).map((el) => (
            <CartCards
              key={el}
              id={el}
              title={cartItems[el].title}
              description={cartItems[el].description}
              qty={cartItems[el].quantity}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartDrawer;
