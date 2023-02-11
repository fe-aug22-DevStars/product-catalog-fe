import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from '../Button/Button.module.scss';
import { StorageContext } from '../../context/StorageContext';

type Props = {
  id: string;
}

export const Button: React.FC<Props> = ({ id }) => {
  const {
    toCart,
    setToCart,
  } = useContext(StorageContext);

  return (
    <button
      onClick={() => {
        setToCart(id);
      }}
      className={classNames(styles.buy, {
        [styles.buy_active]: toCart.includes(id),
      })}
    >
      {!toCart.includes(id) ? 'Add to cart' : 'Added to cart'}
    </button>
  );
};
