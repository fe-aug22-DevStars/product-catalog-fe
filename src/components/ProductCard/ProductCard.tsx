import React from 'react';
import styles from './ProductCard.module.scss'

export const ProductCard:React.FC = () => {
  return (
    <div className={styles['product-card']}>
      <img
        className={styles['product-card__image']}
        src="src/assets/images/phone_demo.png"
        alt="phone"
      />

      <h2 className="product-card__title">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h2>

      <h3 className="product-card__price">
        $999
      </h3>

      <div className="product-card__line">

      </div>

      <div className="product-card__info">
        <div>

        </div>
      </div>

      <a
        href="#"
        className="product-card__buy"
        data-qa="hover"
      >
        Add to cart
      </a>

    </div>
  )
}
