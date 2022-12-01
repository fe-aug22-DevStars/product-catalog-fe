import React from "react";
import { ProductCard } from "../ProductCard";

import styles from './Catalog.module.scss';
import homeIcon from '../../images/Home.png';
import arrowLeft from '../../images/ArrowLeft.png';
import arrowRight from '../../images/ArrowRight.png';

export const Catalog:React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.topMenu}>
        <a href="/">
          <img src={homeIcon} alt="Home" />
        </a>
        <img src={arrowLeft} alt="Next" />
        <span>Phones</span>
      </div>

      <h1 className={styles.header}>Mobile phones</h1>

      <h3 className={styles.subHeader}>95 models</h3>

      <div className={styles.view}>
        <div className={styles.viewByOrder}>
          <label htmlFor="sorts">Sort by</label>
          <select name="sorts" id="sorts">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
        <div className={styles.viewByNumber}>
          <label htmlFor="number">Items on page</label>
          <select name="number" id="number">
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>

      <ProductCard />

      <div className={styles.bottomMenu}>
        <img 
          src={arrowLeft} 
          alt="Left" 
          className={styles.bottomMenuItem}
        />
        <a href="/" className={styles.bottomMenuItem}>1</a>
        <a href="/" className={styles.bottomMenuItem}>2</a>
        <a href="/" className={styles.bottomMenuItem}>3</a>
        <img 
          src={arrowRight}
          alt="Right" 
          className={styles.bottomMenuItem}
        />
      </div>
    </main>
  );
}