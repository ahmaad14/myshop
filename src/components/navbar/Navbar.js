import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Overlay from "components/overlay/Overlay";
import Cart from "components/cart/Cart";
import cartIcon from "assets/cart.svg";
import styles from "./navbar.module.css";
export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const cartCount = useSelector((state) => state.cart.count);
  const handleCartClick = () => {
    setShowCart(true);
  };
  const handleCartClose = () => {
    setShowCart(false);
  };
  return (
    <nav className={styles["nav"]}>
      <NavLink to="/" activeclassname="selected">
        HOME
      </NavLink>
      <div>
        <button onClick={handleCartClick}>
          <img src={cartIcon} alt="cart" />
        </button>
        <div className={styles["nav__cart-count"]}>
          {cartCount > 9 ? "+9" : cartCount}
        </div>
      </div>
      {showCart && (
        <Overlay onClose={handleCartClose}>
          <Cart />
        </Overlay>
      )}
    </nav>
  );
}
