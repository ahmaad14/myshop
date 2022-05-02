import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

export default function Cart({ mini = false }) {
  const cart = useSelector((state) => state.cart);
  if (cart.count < 1)
    return <p className={styles["cart-empty"]}>Empty Cart!</p>;

  return (
    <div className={`${styles.cart} ${mini ? styles["mini"] : ""} `}>
      <p className={styles["cart__title"]}>Cart</p>
      <div className={styles["cart__list"]}>
        {Object.values(cart.items).map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles["cart__summary"]}>
        <p>
          Items Count: {cart.count}
          <br />
          Total: {cart.total}
        </p>
        {mini && (
          <Link className={styles["cart__checkout"]} to="/cart">
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
