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
              <a href="/">sample.1</a>
            </li>
            <li>
              <a href="/">sample.2</a>
            </li>
            <li>
              <a href="/">sample.3</a>
            </li>
            <li>
              <a href="/">sample.4</a>
            </li>
            <li>
              <a href="/">sample.5</a>
            </li>
            <li>
              <a className={styles.menuA} href="/">
                sample.6
              </a>
            </li>
            <li>
              <a className={styles.menuB} href="/">
                sample.7
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
