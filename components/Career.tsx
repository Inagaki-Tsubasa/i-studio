import React from "react";
import styles from "./Career.module.css";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const Career = () => {
  return (
    <div className={styles.careerSec}>
      <SectionTitle />
      <img src="./images/sample.png" />
      <div className={styles.careerText}>
        <p>
          sampleText sampleText sampleText sampleText sampleText sampleText
          sampleText sampleText.
        </p>
        <p>sampleText sampleText sampleText sampleText sampleText.</p>
      </div>
      <Button />
      <div className={styles.careerImage}>
        <img src="./images/sample.png" />
      </div>
    </div>
  );
};

export default Career;
