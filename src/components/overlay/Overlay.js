import React from "react";
import { createPortal } from "react-dom"
import styles from "./overlay.module.css";
export default function Overlay({ onClose, children, centerContent = false }) {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };
  return createPortal(
    <div className={styles["overlay"]} onClick={onClose}>
      <div
        className={`${styles["overlay__content"]} ${
          centerContent ? styles["center"] : ""
        }`}
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
