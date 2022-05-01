import React from "react";
import styles from "./products.module.css";
export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.featuredPhoto} alt={product.name} />     
      <p className={styles["card__title"]}> {product.name} </p>${product.price}
      <button className={styles["card__add-btn"]}>
          ADD TO CART
      </button>
    </div>
  );
}
