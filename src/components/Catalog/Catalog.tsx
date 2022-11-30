import React from "react";
import { ProductCard } from "../ProductCard";

import styles from './Catalog.module.scss';

export const Catalog:React.FC = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['main__top-menu']}>
        <a href="/">
          <img src="./images/Home.png" alt="Home" />
        </a>
        <img src="./images/ArrowLeft.png" alt="Next" />
        <span>Phones</span>
      </div>

      <h1 className={styles['main__header']}>Mobile phones</h1>

      <h3 className={styles['main__sub-header']}>95 models</h3>

      <div className={styles['main__view']}>
        <div className={styles['main__view-by-order']}>
          <label htmlFor="sorts">Sort by</label>
          <select name="sorts" id="sorts">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
        <div className={styles['main__view-by-number']}>
          <label htmlFor="number">Items on page</label>
          <select name="number" id="number">
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>

      <ProductCard />

      <div className={styles['main__bottom-menu']}>
        <img 
          src="./images/ArrowLeft.png" 
          alt="Left" 
          className={styles['main__bottom-menu-item']}
        />
        <a href="/" className={styles['main__bottom-menu-item']}>1</a>
        <a href="/" className={styles['main__bottom-menu-item']}>2</a>
        <a href="/" className={styles['main__bottom-menu-item']}>3</a>
        <img 
          src="./images/ArrowRight.png"
          alt="Right" 
          className={styles['main__bottom-menu-item']}
        />
      </div>
    </main>
  );
}