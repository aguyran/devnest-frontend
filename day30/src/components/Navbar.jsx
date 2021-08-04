import style from "../styles/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className={style.navbarMain}>
        <div className={style.navbarWrapper}>
          <FaAmazon className={style.amazonLogo} />
          <div className={style.searchBar}>
            <input type="text" />
            <BiSearchAlt className={style.magnifyingGlass} />
          </div>
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
