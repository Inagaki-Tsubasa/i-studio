import React from "react";
import styles from "./Blog.module.css";
import CardThree from "./CardThree";

const Blog = () => {
  return (
    <div className={styles.blogSec}>
      <div className={styles.blogTitle}>
        <h1>BLOG</h1>
        <p>sample sample sample sample</p>
      </div>

      <div className={styles.cardThreeData}>
        <CardThree
          imageSrc="./images/worklogo.jpg"
          title="#sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <CardThree
          imageSrc="./images/design.png"
          title="#sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
        <CardThree
          imageSrc="./images/design.jpeg"
          title="#sampletext"
          text="sample sample sample sample sample sample sample sample sample sample sample sample sample  "
        />
      </div>
    </div>
  );
};

export default Blog;
