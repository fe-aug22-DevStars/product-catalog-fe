import React from 'react';
import styles from './ProductCard.module.scss'
import phoneDemo from '../../assets/images/phone_demo.png'

export const ProductCard:React.FC = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={phoneDemo}
        alt="phone"
      />

      <h2 className={styles.title}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h2>

      <h3 className={styles.price}>
        $999
      </h3>

      <span className={styles.line} />

      <div className={styles.info_container}>
        <p className={styles.info}>
          <span className={styles.info_name}>Screen</span>
          <span>6.1” OLED</span>
        </p>

        <p className={styles.info}>
          <span className={styles.info_name}>Capacity</span>
          <span>128 GB</span>
        </p>

        <p className={styles.info}>
          <span className={styles.info_name}>RAM</span>
          <span>6 GB</span>
        </p>
      </div>

      <div className={styles.bottom}>
        <button
          //TODO: to add href
          className={styles.buy}
        >
          Add to cart
        </button>

        <div className={styles.favourites} />
      </div>
    </div>
  )
}
