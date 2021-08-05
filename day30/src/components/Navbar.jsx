import style from "../styles/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isCart, setCart] = useState(false);
  return (
    <nav>
      <div className={style.navbarMain}>
        <div className={style.navbarWrapper}>
          <Link to="/">
            {" "}
            <FaAmazon className={style.amazonLogo} />
          </Link>

          <div className={style.rightIcons}>
            <FaHeart className={style.wishlistHeart} />
            <FaShoppingCart
              className={style.shoppingCart}
              onClick={() => setCart(true)}
            />
          </div>
        </div>
      </div>
      <div className={isCart ? style.cart : style.notVisible}>
        <h1 className={style.cross} onClick={() => setCart(false)}>
          X
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
