import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import styles from "./Main.module.css";
import Button from "./Button";

const Main = () => {
  return (
    <section className={styles.mainSec}>
      <SectionTitle />
      <a className={styles.cardDate}>
        <Card
          imageSrc="./images/sample.png"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <Card
          imageSrc="./images/sample.png"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <Card
          imageSrc="./images/sample.png"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <Card
          imageSrc="./images/sample.png"
          title="sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
      </a>
      <Button />
    </section>
  );
};

export default Main;
