import { Card } from "@mui/material";
import React from "react";
import CardSecond from "./CardSecond";
import styles from "./News.module.css";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import AnimationTrigger from "./AnimationTrigger";

const News = () => {
  return (
    <div className={styles.newsSec}>
      <SectionTitle />
      <div className={styles.cardSecondData}>
        <CardSecond
          title="sampletext"
          text=" sample sample sample sample sample sample sample sample  sample sample  sample sample  sample sample  sample sample  "
        />
        <CardSecond
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample  sample sample "
        />
        <CardSecond
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample  sample sample  sample sample  "
        />
        <CardSecond
          title="sampletext"
          text="sample sample sample sample sample sample sample  "
        />
      </div>
      <Button />
    </div>
  );
};

export default News;
