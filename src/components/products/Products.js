import { useState } from "react";
import data from "data/db.json";
import ProductCard from "./ProductCard";
import styles from "./products.module.css";
export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerpage = 4;
  const pagesCount = Math.ceil(data.products.length / itemsPerpage);

  const getPage = (pageNum) => {
    const startIndex = pageNum * itemsPerpage;
    return data.products.slice(startIndex, startIndex + itemsPerpage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={styles["products-list"]}>
        {getPage(currentPage).map((product, index) => (
          <ProductCard key={index} id={index} product={product} />
        ))}
      </div>

      <div className={styles["pagination"]}>
        {currentPage - 1 > 0 ? (
          <>
            <button onClick={() => handlePageChange(0)}>1</button>
            ...
          </>
        ) : (
          <></>
        )}

        {[...Array(3).keys()].map((i) => {
          const page = currentPage + i - 1;
          if (page >= 0 && page < pagesCount)
            return (
              <button
                key={i}
                className={page === currentPage ? styles["selected"] : ""}
                onClick={() => handlePageChange(page)}
              >
                {page + 1}
              </button>
            );
          else return null;
        })}

        {currentPage + 2 < pagesCount ? (
          <>
            ...
            <button onClick={() => handlePageChange(pagesCount - 1)}>
              {pagesCount}
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
