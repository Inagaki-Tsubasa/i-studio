import React from "react";
import styles from "./Card.module.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const Card = ({ imageSrc, title, text }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img src={imageSrc} />
        <div className={styles.textContainer}>
          <ul>
            <li>
              <h2>{title}</h2>
            </li>
            <li>
              <h2>{title}</h2>
            </li>
            <li>
              <h2>{title}</h2>
            </li>
          </ul>
          <div className={styles.textarea}>
            <p>{text}</p>
            <ArrowCircleRightIcon
              className={styles.textareaIcon}
              style={{ fontSize: 40 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
