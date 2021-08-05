import style from "../styles/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className={style.navbarMain}>
        <div className={style.navbarWrapper}>
          <FaAmazon className={style.amazonLogo} />

          <div className={style.rightIcons}>
            <FaHeart className={style.wishlistHeart} />
            <FaShoppingCart className={style.shoppingCart} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
