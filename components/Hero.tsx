import React from "react";
import { Link } from "react-scroll";
import styles from "./Hero.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="./images/icon.png" />
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuUl}>
            <li className={styles.menuLi}>
              <Link to="/">
                <p>sample.1</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>sample.2</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>sample.3</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>sample.4</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>sample.5</p>
              </Link>
            </li>

            <li>
              <Link to="/">
                <p className={styles.menuA}>sample.6</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className={styles.menuB}>sample.7</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
