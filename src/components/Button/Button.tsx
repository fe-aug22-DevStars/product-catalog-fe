import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from '../ProductCard/ProductCard.module.scss';
import { StorageContext } from '../../context/StorageContext';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
}

export const Button: React.FC<Props> = ({ phone }) => {
  const {
    toCart,
    setToCart,
  } = useContext(StorageContext);

  return (
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
  );
};
