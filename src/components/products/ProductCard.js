import { useState } from "react";
import Overlay from "components/overlay/Overlay";
import ProductModal from "components/products/ProductModal";
import styles from "./products.module.css";
export default function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);
  const handleOpenDetails = () => {
    setShowDetails(true);
  };
  const handleCloseDetails = (event) => {
    event.stopPropagation();
    setShowDetails(false);
  };

  return (
    <div className={styles.card} onClick={handleOpenDetails}>
      <img src={product.featuredPhoto} alt={product.name} />
      <p className={styles["card__title"]}> {product.name} </p>${product.price}
      <button className={styles["card__add-btn"]}>ADD TO CART</button>
      {showDetails && (
        <Overlay centerContent={true} onClose={handleCloseDetails}>
          <ProductModal product={product} />
        </Overlay>
      )}
    </div>
  );
}
