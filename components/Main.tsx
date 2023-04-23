import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import styles from "./Main.module.css";
import Button from "./Button";

const Main = () => {
  return (
    <div className={styles.mainSec}>
      <SectionTitle />
      <div className={styles.cardDate}>
        <Card
          imageSrc="./images/design.jpeg"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <Card
          imageSrc="./images/hero.webp"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <Card
          imageSrc="./images/walltop.jpg"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <Card
          imageSrc="./images/wall.jpeg"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
      </div>
      <Button />
    </div>
  );
};

export default Main;
