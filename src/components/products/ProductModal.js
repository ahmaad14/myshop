import { useState } from "react";
import styles from "./products.module.css";
import starIcon from "assets/star.svg";
import halfStarIcon from "assets/half-star.svg";
import emptyStar from "assets/empty-star.svg";

export default function ProductModal({ product }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const handleImageSlide = (direction) => {
    setCurrentImgIndex((prevIndex) => {
      return (
        (product.photos.length + prevIndex + direction) % product.photos.length
      );
    });
  };
  const RatingStars = () => {
    const starsCount = Number(product.rate) - 1;
    return (
      <div>
        {[...Array(5).keys()].map((i) =>
          starsCount - i >= 1 ? (
            <img src={starIcon} alt="star" key={i} />
          ) : starsCount - i === 0.5 ? (
            <img src={halfStarIcon} alt="half star" key={i} />
          ) : (
            <img src={emptyStar} alt="empty star" key={i} />
          )
        )}
      </div>
    );
  };

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__slider"]}>
        <img
          src={product.photos[currentImgIndex]}
          alt={product.name}
          width="100%"
        />
        <div className={styles["modal__slider-actions"]}>
          <button onClick={() => handleImageSlide(-1)}> {"<"} </button>
          <button onClick={() => handleImageSlide(1)}> {">"} </button>
        </div>
      </div>

      <div className={styles["modal__details"]}>
        <p className={styles["card__title"]}> {product.name} </p>
        <RatingStars />
        <p>{product.reviewsCount} reviews </p>
        <p className={styles["modal__price"]}> ${product.price} </p>
        <p> {product.description} </p>
      </div>
    </div>
  );
}
