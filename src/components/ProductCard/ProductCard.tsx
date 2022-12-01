import React from 'react'
import { Phone } from '../../types/Phone'
import styles from './ProductCard.module.scss'

interface Props {
  phone: Phone
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
          alt="phone"
        />

        <h2 className={styles.title}>
          {phone.name}
        </h2>

        <h3 className={styles.price}>
          ${phone.price} <span className={styles.full_price}>${phone.fullPrice}</span>
        </h3>

        <span className={styles.line}/>

        <div className={styles.info_container}>
          <p className={styles.info}>
            <span className={styles.info_name}>Screen</span>
            <span className={styles.info_value}>{phone.screen}</span>
          </p>

          <p className={styles.info}>
            <span className={styles.info_name}>Capacity</span>
            <span className={styles.info_value}>{phone.capacity}</span>
          </p>

          <p className={styles.info}>
            <span className={styles.info_name}>RAM</span>
            <span className={styles.info_value}>{phone.ram}</span>
          </p>
        </div>

        <div className={styles.bottom}>
          <button
            // TODO: to add href
            className={styles.buy}
          >
            Add to cart
          </button>

          <div className={styles.favourites}>

          </div>
        </div>
      </div>
    </>
  )
}
