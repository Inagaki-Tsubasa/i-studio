import React from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  text: string;
}

const SectionTitle = () => {
  return (
    <div className={styles.sectionTitle}>
      <h1>SAMPLE TITLE</h1>
    </div>
  );
};

export default SectionTitle;
