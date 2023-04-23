import React from "react";
import Link from "next/link";
import styles from "./CardSecond.module.css";

interface CardProps {
  title: string;
  text: string;
}

const CardSecond = ({ title, text }: CardProps) => {
  return (
    <div className={styles.cardSecond}>
      <div className={styles.cardSecondDetail}>
        <ul>
          <li>
            <h2>{title}</h2>
          </li>
        </ul>
        <div className={styles.data}>
          <Link href="/" legacyBehavior>
            <a>sampleLink</a>
          </Link>
          <p>20##-##-##</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardSecond;
