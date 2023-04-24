import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={styles.headerSec}>
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

export default Header;
