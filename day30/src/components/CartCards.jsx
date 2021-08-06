import { useDispatch } from "react-redux";
import { removeItemCart, updateQuantity } from "../slices/cartSlice";
import { BiTrash } from "react-icons/bi";
const CartCards = ({ id, title, description, qty }) => {
  const dispatch = useDispatch();
  console.log(qty);
  return (
    <div className="cardContainer" key={id}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <BiTrash onClick={() => dispatch(removeItemCart(id))}></BiTrash>
      <button
        onClick={() => {
          if (qty < 100) dispatch(updateQuantity({ id: id, value: qty + 1 }));
        }}
      >
        +
      </button>
      <input type="text" disabled value={qty}></input>
      <button
        onClick={() => {
          if (qty > 1) dispatch(updateQuantity({ id: id, value: qty - 1 }));
        }}
      >
        -
      </button>
    </div>
  );
};

export default CartCards;
