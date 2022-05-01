import React from "react";
import data from "data/db.json";
import ProductCard from "./ProductCard";
import styles from "./products.module.css";
export default function Product() {
  return (
    <div className={styles["products-list"]}>
      {data.products.map((product, index) => (
        <ProductCard key={index} id={index} product={product} />
      ))}
    </div>
  );
}
