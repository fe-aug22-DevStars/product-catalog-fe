import React from 'react';
import { Phone } from '../../types/Phone';
import styles from './ProductCard.module.scss'

type Props = {
  phone: Phone,
}

export const ProductCard:React.FC<Props> = ({ phone }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={phone.image}
        alt="phone"
      />

      <h2 className={styles.title}>
        {phone.name}
      </h2>

      <h3 className={styles.price}>
        {phone.price}
      </h3>

      <span className={styles.line} />

      <div className={styles.info_container}>
        <p className={styles.info}>
          <span className={styles.info_name}>Screen</span>
          <span>{phone.screen}</span>
        </p>

        <p className={styles.info}>
          <span className={styles.info_name}>Capacity</span>
          <span>{phone.capacity}</span>
        </p>

        <p className={styles.info}>
          <span className={styles.info_name}>RAM</span>
          <span>{phone.ram}</span>
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
