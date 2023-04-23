import React from "react";
import styles from "./Button.module.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Button = () => {
  return (
    <div className={styles.buttonSec}>
      <div className={styles.buttonDetail}>
        <p>sampleText</p>
        <ArrowCircleRightIcon
          className={styles.buttonIcon}
          style={{ fontSize: 40 }}
        />
      </div>
    </div>
  );
};

export default Button;
