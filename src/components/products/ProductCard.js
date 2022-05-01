import { useState } from "react";
import { useDispatch } from "react-redux";
import Overlay from "components/overlay/Overlay";
import ProductModal from "components/products/ProductModal";
import { addItem } from "redux/cart";
import styles from "./products.module.css";
export default function ProductCard({ id, product }) {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch()
  const handleOpenDetails = () => {
    setShowDetails(true);
  };
  const handleCloseDetails = (event) => {
    event.stopPropagation();
    setShowDetails(false);
  };
  const handleAddItem = (event) => {
    event.stopPropagation()
    dispatch(addItem({
      id,
      ...product,
    }));
  };
  return (
    <div className={styles.card} onClick={handleOpenDetails}>
      <img src={product.featuredPhoto} alt={product.name} />
      <p className={styles["card__title"]}> {product.name} </p>${product.price}
      <button className={styles["card__add-btn"]} onClick={handleAddItem}>
        ADD TO CART
      </button>
      {showDetails && (
        <Overlay centerContent={true} onClose={handleCloseDetails}>
          <ProductModal product={product} />
        </Overlay>
      )}
    </div>
  );
}
