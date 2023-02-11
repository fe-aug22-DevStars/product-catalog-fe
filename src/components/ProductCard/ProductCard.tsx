import React from 'react';
import { Phone } from '../../types/Phone';
import styles from './ProductCard.module.scss';
import { formatCapacity } from '../../utilities/formatCapacity';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { FavouritesButton } from '../FavouritesButton/FavouritesButton';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <NavLink to={`/product/${phone.phoneId}`}>
          <img
            className={styles.image}
            // src={`https://device-shop.onrender.com/${phone.image}`}
            src={`http://localhost:5000/${phone.image}`}
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

      <span className={styles.line}/>

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
        <Button id={phone.id}/>

        <FavouritesButton id={phone.id}/>
      </div>
    </div>
  );
};
