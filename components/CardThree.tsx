import React from "react";
import styles from "./CardThree.module.css";

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const CardThree = ({ imageSrc, title, text }: CardProps) => {
  return (
    <div className={styles.cardThree}>
      <div className={styles.cardThreeDetail}>
        <img src={imageSrc} />
        <ul>
          <li>
            <h2>{title}</h2>
          </li>
        </ul>

        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardThree;
