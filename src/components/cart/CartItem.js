import React from "react";
import { useDispatch } from "react-redux";
import { increaseItemCount, decreaseItemCount } from "redux/cart";
import styles from "./cart.module.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseItemCount(item.id));
  };
  const handleDecrease = () => {
    dispatch(decreaseItemCount(item.id));
  };
  return (
    <div className={styles["item"]}>
      <img src={item.featuredPhoto} alt={item.name} />
      <p className={styles["item__info"]}>
        <b> {item.name} </b> <br />${item.price}
      </p>

      <div className={styles["item__count"]}>
        <button onClick={handleIncrease}>+</button>
        <p> {item.itemCount} </p>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
}
