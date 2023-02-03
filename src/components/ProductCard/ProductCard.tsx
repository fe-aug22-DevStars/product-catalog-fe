import React, { useContext } from 'react';
import { StorageContext } from '../../context/StorageContext';
import { Phone } from '../../types/Phone';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { formatCapacity } from '../../utilities/formatCapacity';
import { NavLink } from 'react-router-dom';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    toFavourites,
    setToFavourites,
    toCart,
    setToCart,
  } = useContext(StorageContext);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <NavLink to={`/product/${phone.phoneId}`}>
            <img
              className={styles.image}
              src={`https://device-shop.onrender.com/${phone.image}`}
              alt="phone"
            />
          </NavLink>
        </div>

        <NavLink className={styles.productLink} to={`/product/${phone.phoneId}`}>
          <h2 className={styles.title}>{phone.name}</h2>
        </NavLink>

        <h3 className={styles.price}>
          ${phone.price}&nbsp;
          <span className={styles.full_price}>${phone.fullPrice}</span>
        </h3>

        <span className={styles.line} />

        <div className={styles.info_container}>
          <p className={styles.info}>
            <span className={styles.info_name}>Screen</span>
            <span className={styles.info_value}>{phone.screen}</span>
          </p>

          <p className={styles.info}>
            <span className={styles.info_name}>Capacity</span>
            <span className={styles.info_value}>
              {formatCapacity(phone.capacity)}
            </span>
          </p>

          <p className={styles.info}>
            <span className={styles.info_name}>RAM</span>
            <span className={styles.info_value}>
              {formatCapacity(phone.ram)}
            </span>
          </p>
        </div>

        <div className={styles.bottom}>
          <button
            onClick={() => {
              setToCart(phone.id);
            }}
            className={classNames(styles.buy, {
              [styles.buy_active]: toCart.includes(phone.id),
            })}
          >
            {!toCart.includes(phone.id) ? 'Add to cart' : 'Added to cart'}
          </button>

          <div
            onClick={() => {
              setToFavourites(phone.id);
            }}
            className={classNames(styles.favourites, {
              [styles.favourites_active]: toFavourites.includes(phone.id),
            })}
          ></div>
        </div>
      </div>
    </>
  );
};
