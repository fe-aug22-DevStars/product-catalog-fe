import React, { useState } from 'react';
import { Phone } from '../../types/Phone';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { formatCapacity } from '../../utilities/formatCapacity';

interface Props {
  phone: Phone
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const [toCart, setToCart] = useState(false);
  const [toFavourites, setToFavourites] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
            alt="phone"
          />
        </div>

        <h2 className={styles.title}>
          {phone.name}
        </h2>

        <h3 className={styles.price}>
          ${phone.price}&nbsp;
          <span className={styles.full_price}>
            ${phone.fullPrice}
          </span>
        </h3>

        <span className={styles.line}/>

        <div className={styles.info_container}>
          <p className={styles.info}>
            <span className={styles.info_name}>Screen</span>
            <span className={styles.info_value}>{phone.screen}</span>
          </p>

          <p className={styles.info}>
            <span className={styles.info_name}>Capacity</span>
            <span
              className={styles.info_value}>
              {formatCapacity(phone.capacity)}
            </span>
          </p>

          <p className={styles.info}>
            <span className={styles.info_name}>RAM</span>
            <span
              className={styles.info_value}>
              {formatCapacity(phone.capacity)}
            </span>
          </p>
        </div>

        <div className={styles.bottom}>
          <button
            onClick={() => {
              setToCart(!toCart);
            }}
            className={classNames(styles.buy, {
              [styles.buy_active]: toCart,
            })}
          >
            {!toCart
              ? 'Add to cart'
              : 'Added to cart'
            }
          </button>

          <div
            onClick={() => {
              setToFavourites(!toFavourites);
            }}
            className={classNames(styles.favourites, {
              [styles.favourites_active]: toFavourites,
            })}
          >
          </div>
        </div>
      </div>
    </>
  );
};
