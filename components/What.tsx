import React from "react";
import CardFour from "./CardFour";
import SectionTitle from "./SectionTitle";
import styles from "./What.module.css";
import Button from "./Button";

const What = () => {
  return (
    <>
      <div className={styles.what}>
        <SectionTitle />
      </div>
      <div className={styles.whatSec}>
        <img src="./images/work.jpg" />
        <div className={styles.cardTag}>
          <CardFour />
          <CardFour />
          <CardFour />
          <CardFour />
          <CardFour />
          <CardFour />
        </div>
      </div>
      <div className={styles.whatText}>
        <p>
          sampleText sampleText sampleText sampleText sampleText sampleText.
        </p>
        <Button />
      </div>
    </>
  );
};

export default What;
