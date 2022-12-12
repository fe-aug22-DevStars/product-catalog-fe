import React, { useState } from 'react';
import { Phone } from '../../types/Phone';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { formatCapacity } from '../../utilities/formatCapacity';
import { NavLink } from 'react-router-dom';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const [toCart, setToCart] = useState<string[]>(
    localStorage.getItem('cart')?.split('&') || [],
  );
  const [toFavourites, setToFavourites] = useState<string[]>(
    localStorage.getItem('favourites')?.split('&') || [],
  );

  const changeToFavourites = (phoneId: string) => {
    const checkFavourites = localStorage.getItem('favourites');
    let favourites;

    if (!toFavourites.includes(phoneId)) {
      favourites = !checkFavourites ? phoneId : checkFavourites + '&' + phoneId;
    } else {
      favourites = checkFavourites
        ?.split('&')
        .filter((item) => item !== phoneId)
        .join('&');
    }

    localStorage.setItem('favourites', favourites || '');
  };

  const changeToCart = (phoneId: string) => {
    const checkCart = localStorage.getItem('cart');
    let cart;

    if (!toCart.includes(phoneId)) {
      cart = !checkCart ? phoneId : checkCart + '&' + phoneId;
    } else {
      cart = checkCart
        ?.split('&')
        .filter((item) => item !== phoneId)
        .join('&');
    }

    localStorage.setItem('cart', cart || '');
  };

  const handleClickToCart = () => {
    setToCart((currValues) =>
      currValues.includes(phone.id)
        ? currValues.filter((item) => item !== phone.id)
        : [...currValues, phone.id]);
    changeToCart(phone.id);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <NavLink to={`/product/${phone.phoneId}`}>
            <img
              className={styles.image}
              src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
              alt="phone"
            />
          </NavLink>
        </div>

        <NavLink to={`/product/${phone.phoneId}`}>
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
            onClick={handleClickToCart}
            className={classNames(styles.buy, {
              [styles.buy_active]: toCart.includes(phone.id),
            })}
          >
            {!toCart.includes(phone.id) ? 'Add to cart' : 'Added to cart'}
          </button>

          <div
            onClick={() => {
              setToFavourites((currValues) =>
                currValues.includes(phone.id)
                  ? currValues.filter((item) => item !== phone.id)
                  : [...currValues, phone.id]);
              changeToFavourites(phone.id);
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
